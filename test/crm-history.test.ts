import assert from 'node:assert/strict'
import { test } from 'node:test'
import { router } from '../app/router.ts'

test('CRM history commits with the lead edit and keeps notes out of the event', async (t) => {
  const env = process.env
  process.env = {
    ...env, CRM_LEAD_STORE: 'appwrite', CRM_PUBLIC_ORIGIN: 'https://crm.invalid',
    APPWRITE_ENDPOINT: 'https://appwrite.invalid/v1', APPWRITE_PROJECT_ID: 'bellbee-test',
    APPWRITE_CRM_TEAM_ID: 'crm-staff', APPWRITE_SESSION_KEY: 'session-key',
    APPWRITE_DATABASE_ID: 'crm', APPWRITE_LEADS_TABLE_ID: 'leads',
    APPWRITE_STAFF_KEY: 'staff-key', APPWRITE_LEAD_EVENTS_TABLE_ID: 'lead_events',
  }
  t.after(() => { process.env = env })
  const lead = { $id: 'lead-1', fullName: 'Synthetic lead', status: 'New', ownerId: 'staff-1', createdAt: '2026-01-01T00:00:00Z', notes: '' }
  const events: Record<string, unknown>[] = []
  let transaction: { notes?: string; event?: Record<string, unknown> } | undefined
  let rejectEvent = true
  let rollbackCount = 0
  const rows = '/v1/tablesdb/crm/tables/leads/rows'
  const transactions = '/v1/tablesdb/transactions'
  t.mock.method(globalThis, 'fetch', async (url: URL, init: RequestInit) => {
    const body = typeof init.body === 'string' ? JSON.parse(init.body) : {}
    const path = url.pathname
    if (path === '/v1/account') return Response.json({ $id: 'staff-1' })
    if (path === '/v1/teams/crm-staff/memberships') {
      return Response.json({ memberships: [
        { userId: 'staff-1', confirm: true, userName: 'Test Staff', roles: ['member'], teamId: 'crm-staff' },
      ] })
    }
    assert.equal(new Headers(init.headers).get('X-Appwrite-Key'), 'staff-key')
    if (path === transactions && init.method === 'POST') {
      assert.equal(transaction, undefined)
      transaction = {}
      return Response.json({ $id: 'tx-1' }, { status: 201 })
    }
    if (path === rows && init.method === 'PATCH') {
      assert.equal(body.transactionId, 'tx-1')
      assert.ok(transaction)
      assert.deepEqual(body.queries.map((query: string) => JSON.parse(query)), [
        { method: 'equal', attribute: '$id', values: ['lead-1'] },
        { method: 'equal', attribute: 'ownerId', values: ['staff-1'] },
      ])
      if (lead.ownerId !== 'staff-1') return Response.json({ total: 0, rows: [] })
      transaction.notes = body.data.notes
      return Response.json({ total: 1, rows: [{ ...lead, notes: transaction.notes }] })
    }
    if (path === `${transactions}/tx-1/operations`) {
      assert.ok(transaction)
      assert.equal(body.operations.length, 1)
      const [operation] = body.operations
      assert.equal(operation.action, 'create')
      assert.equal(operation.tableId, 'lead_events')
      assert.deepEqual(operation.data, { leadId: 'lead-1', actorId: 'staff-1', kind: 'notes' })
      if (rejectEvent) return Response.json({ type: 'table_not_found' }, { status: 404 })
      transaction.event = { $id: operation.rowId, $createdAt: lead.createdAt, ...operation.data }
      return Response.json({ status: 'pending' })
    }
    if (path === `${transactions}/tx-1` && init.method === 'PATCH') {
      assert.ok(transaction)
      if (body.rollback) {
        rollbackCount++
        transaction = undefined
        return Response.json({ status: 'rolled_back' })
      }
      assert.equal(body.commit, true)
      assert.ok(transaction.notes && transaction.event)
      lead.notes = transaction.notes
      events.push(transaction.event)
      transaction = undefined
      return Response.json({ status: 'committed' })
    }
    if (path === `${rows}/lead-1`) return Response.json(lead)
    assert.equal(path, '/v1/tablesdb/crm/tables/lead_events/rows')
    assert.deepEqual(JSON.parse(url.searchParams.get('queries[0]')!), {
      method: 'equal', attribute: 'leadId', values: ['lead-1'],
    })
    const cursor = url.searchParams.get('queries[3]')
    if (cursor) {
      assert.deepEqual(JSON.parse(cursor), { method: 'cursorAfter', values: ['event-49'] })
      return Response.json({ rows: events.slice(50) })
    }
    return Response.json({ rows: events.slice(0, 51) })
  })

  const origin = 'https://crm.invalid'
  const cookie = '__Host-bellbee_crm_session=synthetic-session'
  const save = () => router.fetch(new Request(`${origin}/admin/leads`, {
    method: 'POST', headers: { origin, cookie },
    body: new URLSearchParams({ actionType: 'updateNotes', leadIds: 'lead-1', notes: 'Private note text' }),
  }))
  await assert.rejects(save(), /Appwrite lead request failed/)
  assert.equal(lead.notes, '')
  assert.equal(events.length, 0)
  assert.equal(rollbackCount, 1)

  rejectEvent = false
  assert.equal((await save()).status, 303)
  assert.equal(lead.notes, 'Private note text')
  assert.equal(events.length, 1)
  lead.ownerId = 'other-staff'
  assert.equal((await save()).status, 403)
  assert.equal(events.length, 1)
  assert.equal(rollbackCount, 2)

  const page = await router.fetch(new Request(`${origin}/admin/leads/lead-1?tab=history`, { headers: { cookie } }))
  assert.equal(page.status, 200)
  const html = await page.text()
  assert.match(html, /Notes saved/)
  assert.match(html, /Test Staff/)
  assert.doesNotMatch(html, /Private note text/)
  events.splice(0, events.length, ...Array.from({ length: 51 }, (_, index) => ({
    $id: `event-${index}`, $createdAt: lead.createdAt, actorId: 'staff-1', kind: 'status', value: `Stage ${index}`,
  })))
  const history = async (suffix = '') => {
    const response = await router.fetch(new Request(`${origin}/admin/leads/lead-1?tab=history${suffix}`, { headers: { cookie } }))
    assert.equal(response.status, 200)
    return response.text()
  }
  const first = await history()
  assert.match(first, /Older changes/)
  assert.doesNotMatch(first, /Stage 50/)
  const second = await history('&before=event-49')
  assert.match(second, /Stage 50/)
  assert.match(second, /Latest changes/)
  assert.doesNotMatch(second, /Older changes/)

})

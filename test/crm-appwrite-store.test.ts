import assert from 'node:assert/strict'
import { after, test } from 'node:test'

import { assetServer } from '../app/assets.ts'
import { deleteLeads, filterLeads, generateLeadsCsv, getAllLeads, updateBulkStatus, updateLead } from '../app/data/leads.ts'
import { submitProposal } from '../app/data/wordpress.ts'
import { router } from '../app/router.ts'

after(() => assetServer.close())

test('Appwrite staging routes intake and staff operations to the same table', async (t) => {
  const env = process.env
  process.env = {
    ...env,
    CRM_LEAD_STORE: 'appwrite',
    APPWRITE_ENDPOINT: 'https://appwrite.invalid/v1',
    APPWRITE_PROJECT_ID: 'bellbee-test',
    APPWRITE_DATABASE_ID: 'crm',
    APPWRITE_LEADS_TABLE_ID: 'leads',
    APPWRITE_INTAKE_KEY: 'intake-fixture',
    APPWRITE_STAFF_KEY: 'staff-fixture',
    WORDPRESS_GRAPHQL_URL: 'https://wordpress.invalid/graphql',
  }
  t.after(() => { process.env = env })

  let stored: Record<string, unknown> | undefined
  let writeError: { status: number; type?: string } | undefined
  let forwards = 0
  let listCalls = 0
  const rowPath = '/v1/tablesdb/crm/tables/leads/rows'
  t.mock.method(globalThis, 'fetch', async (target: URL | string, init: RequestInit) => {
    const url = new URL(target)
    const method = init.method
    if (url.hostname === 'wordpress.invalid') {
      assert.ok(stored)
      forwards++
      return new Response(null, { status: 503 })
    }

    assert.equal(url.hostname, 'appwrite.invalid')
    assert.equal(new Headers(init.headers).get('X-Appwrite-Key'),
      method === 'POST' ? 'intake-fixture' : 'staff-fixture')
    assert.equal(init.redirect, 'error')

    if (method === 'POST') {
      assert.equal(url.pathname, rowPath)
      if (writeError) return Response.json({ type: writeError.type }, { status: writeError.status })
      const { rowId, data } = JSON.parse(String(init.body))
      assert.match(rowId, /^web-[0-9a-f]{32}$/)
      if (stored?.$id === rowId) return Response.json({ type: 'row_already_exists' }, { status: 409 })
      stored = { $id: rowId, ...data }
      return Response.json(stored, { status: 201 })
    }
    if (method === 'GET') {
      assert.equal(url.pathname, rowPath)
      listCalls++
      const cursor = url.searchParams.get('queries[2]')
      if (cursor) {
        assert.deepEqual(JSON.parse(cursor), { method: 'cursorAfter', values: ['seed-99'] })
        return Response.json({ rows: [stored] })
      }
      const rows = Array.from({ length: 100 }, (_, index) => ({
        ...stored, $id: `seed-${index}`, createdAt: '2020-01-01T00:00:00.000Z',
      }))
      return Response.json({ rows })
    }

    const body = JSON.parse(String(init.body))
    if (url.pathname === `${rowPath}/${stored?.$id}`) {
      assert.equal(method, 'PATCH')
      stored = { ...stored, ...body.data }
      return Response.json(stored)
    }

    assert.equal(url.pathname, rowPath)
    assert.deepEqual(JSON.parse(body.queries[0]), { method: 'equal', attribute: '$id', values: [stored?.$id] })
    if (method === 'DELETE') {
      stored = undefined
    } else {
      assert.equal(method, 'PATCH')
      stored = { ...stored, ...body.data }
    }
    return Response.json({ total: 1, rows: [] })
  })

  const contactUrl = 'https://bellbee.invalid/contact'
  const contact = await router.fetch(new Request(contactUrl))
  const id = (await contact.text()).match(/name="submissionId" value="([\da-f-]+)"/)?.[1]
  assert.ok(id)
  const form = new URLSearchParams({
    firstName: 'Synthetic', lastName: 'Contact', email: 'bellbee@invalid.test',
    message: 'Synthetic enquiry', submissionId: id,
  })
  const send = () => router.fetch(new Request(contactUrl, { method: 'POST', body: form }))

  writeError = { status: 409, type: 'row_update_conflict' }
  const failed = await send()
  assert.equal(failed.status, 500)
  assert.ok((await failed.text()).includes(`name="submissionId" value="${id}"`))
  assert.equal(forwards, 0)
  writeError = undefined
  const results = await Promise.all([send(), send()])
  for (const response of results) {
    assert.equal(response.status, 200)
    await response.text()
  }
  assert.equal(forwards, 1)

  const leads = await getAllLeads()
  assert.equal(listCalls, 2)
  assert.equal(leads.length, 101)
  const [lead] = leads
  assert.equal(lead.fullName, 'Synthetic Contact')
  assert.equal(lead.status, 'New')
  assert.equal((await updateLead(lead.id, { notes: 'Synthetic note' }))?.notes, 'Synthetic note')
  assert.equal(await updateBulkStatus([lead.id, lead.id], 'Contacted'), 1)
  assert.equal(stored?.status, 'Contacted')
  const replay = await send()
  assert.equal(replay.status, 200)
  await replay.text()
  assert.equal(forwards, 1)
  assert.equal(stored?.status, 'Contacted')
  assert.equal(stored?.notes, 'Synthetic note')
  assert.equal(await deleteLeads(['bad/id']), 0)
  assert.equal(await deleteLeads([lead.id]), 1)
  assert.equal(Boolean(stored), false)

  const legacy = { fullName: 'Synthetic Legacy', email: 'legacy@invalid.test' }
  assert.equal((await submitProposal(legacy)).success, true)
  assert.equal((await submitProposal(legacy)).success, true)
  assert.equal(forwards, 2)

  for (const [path, fields] of [
    ['/locations/pakistan/islamabad/meta-ads-islamabad', {
      fullName: 'Synthetic Meta lead', pageOrWebsite: 'https://example.test/@store',
    }],
    ['/google-ads-islamabad', { businessName: 'Synthetic Google lead', website: 'https://example.test/' }],
  ] as const) {
    const response = await router.fetch(new Request('https://bellbee.invalid' + path, {
      method: 'POST', body: new URLSearchParams({ ...fields, phone: '+92 300 0000000' }),
    }))
    assert.equal(response.status, 200, path)
    await response.text()
    assert.equal(stored?.email, undefined, path)
    assert.equal(stored?.phone, '+92 300 0000000', path)
  }
  assert.equal(forwards, 2)
  const phoneLeads = filterLeads(await getAllLeads(), { search: 'Synthetic Google lead' })
  assert.ok(phoneLeads.length)
  assert.match(generateLeadsCsv(phoneLeads), /"Synthetic Google lead","","'\+92 300 0000000"/)
})

test('public intake forms render submission IDs and accept POST validation', async () => {
  const paths = [
    '/contact', '/get-proposal', '/locations/lahore', '/locations/rawalpindi', '/locations/karachi',
    '/seo-services-in-islamabad', '/locations/pakistan/islamabad/meta-ads-islamabad', '/google-ads-islamabad',
    '/birmingham-meta-ads', '/birmingham-seo', '/birmingham-ai-automation',
  ]
  await Promise.all(paths.map(async (path) => {
    const url = 'https://bellbee.invalid' + path
    const page = await router.fetch(new Request(url))
    assert.equal(page.status, 200, path)
    assert.match(await page.text(), /name="submissionId" value="[\da-f-]+"/, path)
    const empty = await router.fetch(new Request(url, { method: 'POST', body: new URLSearchParams() }))
    assert.equal(empty.status, 400, path)
    await empty.text()
  }))
})

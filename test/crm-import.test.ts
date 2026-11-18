import assert from 'node:assert/strict'
import { test } from 'node:test'

import { importLeads, prepareLeads } from '../scripts/import-crm-leads.ts'

const fixture = {
  id: 'lead-fixture',
  createdAt: '2026-01-01T00:00:00.000Z',
  fullName: 'Synthetic example',
  email: 'test@invalid.test',
  status: 'In Discussion',
  notes: 'Original note',
}

const config = {
  endpoint: 'https://appwrite.invalid/v1',
  projectId: 'bellbee-test',
  apiKey: 'fixture-key',
  databaseId: 'crm',
  tableId: 'leads',
}

test('import preflight rejects duplicate IDs and invalid records', () => {
  assert.throws(() => prepareLeads([fixture, fixture]), /duplicate ID/)
  assert.throws(() => prepareLeads([{ ...fixture, status: 'Unknown' }]), /unknown status/)
  assert.throws(() => prepareLeads([{ ...fixture, createdAt: '2026-02-30T00:00:00.000Z' }]), /timestamp/)
})

test('import keeps real addresses and clears known placeholders from phone leads', () => {
  const phone = '+92 300 0000000'
  const prepared = prepareLeads([
    fixture,
    { ...fixture, id: 'old-phone', email: '923000000000@meta-ads.bellbeemedia.com', phone },
    { ...fixture, id: 'new-phone', email: undefined, phone, archived: true },
  ])
  assert.equal(prepared[0].data.email, fixture.email)
  assert.equal(prepared[2].data.archived, true)
  for (const row of prepared.slice(1)) {
    assert.equal(row.data.email, null)
    assert.equal(row.data.phone, phone)
    assert.equal(row.data.notes, fixture.notes)
  }
  assert.throws(() => prepareLeads([{ ...fixture, email: 'lead@google-ads.bellbeemedia.com' }]), /email or phone/)
})

test('Appwrite import creates private rows and reconciles retries without overwriting', async () => {
  const rows = prepareLeads([fixture])
  let record: Record<string, unknown> | undefined
  const request: typeof fetch = async (url, init) => {
    assert.equal(new Headers(init?.headers).get('X-Appwrite-Project'), config.projectId)
    assert.equal(init?.redirect, 'error')
    if (init?.method === 'POST') {
      assert.equal(String(url), 'https://appwrite.invalid/v1/tablesdb/crm/tables/leads/rows')
      assert.deepEqual(JSON.parse(String(init.body)), rows[0])
      if (record) return new Response(null, { status: 409 })
      record = { $id: fixture.id, ...rows[0].data }
      return Response.json(record, { status: 201 })
    }
    assert.equal(String(url), 'https://appwrite.invalid/v1/tablesdb/crm/tables/leads/rows/lead-fixture')
    return Response.json(record)
  }

  assert.deepEqual(await importLeads(rows, config, request), { created: 1, matched: 0 })
  assert.deepEqual(await importLeads(rows, config, request), { created: 0, matched: 1 })
  await assert.rejects(
    importLeads(prepareLeads([{ ...fixture, notes: 'Changed note' }]), config, async (url, init) =>
      init?.method === 'POST' ? new Response(null, { status: 409 }) : request(url, init)),
    /different values/,
  )
  assert.equal(record?.notes, fixture.notes)
})

import assert from 'node:assert/strict'
import { test } from 'node:test'

import { generateSessionToken, getSessionCookieHeader } from '../app/data/auth.ts'
import { router } from '../app/router.ts'

test('Appwrite CRM requires an active team session for sign-in, reads and mutations', async (t) => {
  const env = process.env
  process.env = {
    ...env,
    CRM_LEAD_STORE: 'appwrite',
    CRM_PUBLIC_ORIGIN: 'https://crm.invalid',
    APPWRITE_ENDPOINT: 'https://appwrite.invalid/v1',
    APPWRITE_PROJECT_ID: 'bellbee-test',
    APPWRITE_CRM_TEAM_ID: 'crm-admins',
    APPWRITE_SESSION_KEY: 'auth-fixture',
    APPWRITE_DATABASE_ID: 'crm',
    APPWRITE_LEADS_TABLE_ID: 'leads',
    APPWRITE_STAFF_KEY: 'staff-fixture',
  }
  t.after(() => { process.env = env })

  let member = false
  let roles = ['admin']
  let active = false
  let signIns = 0
  let teamChecks = 0
  let revocations = 0
  let rowRequests = 0
  const leads = [
    { $id: 'fixture', fullName: 'Unassigned example', email: 'lead@invalid.test', status: 'New',
      createdAt: '2026-01-01T00:00:00.000Z', ownerId: null as string | null },
    { $id: 'other-lead', fullName: 'Other staff example', email: 'other@invalid.test', status: 'New',
      createdAt: '2026-01-01T00:00:00.000Z', ownerId: 'staff-other' },
  ]
  t.mock.method(globalThis, 'fetch', async (target: URL, init: RequestInit) => {
    assert.equal(target.origin, 'https://appwrite.invalid')
    const headers = new Headers(init.headers)
    assert.equal(headers.get('X-Appwrite-Project'), 'bellbee-test')
    if (target.pathname === '/v1/account/sessions/email') {
      assert.equal(headers.get('X-Appwrite-Key'), 'auth-fixture')
      assert.equal(init.method, 'POST')
      signIns++
      active = true
      return Response.json({ secret: 'staff-session-fixture', expire: new Date(Date.now() + 60000).toISOString() })
    }
    if (target.pathname === '/v1/tablesdb/crm/tables/leads/rows') {
      assert.equal(headers.get('X-Appwrite-Key'), 'staff-fixture')
      assert.ok(active && member)
      rowRequests++
      if (init.method === 'POST') {
        assert.deepEqual(roles, ['member'])
        const { rowId, data } = JSON.parse(String(init.body))
        assert.match(rowId, /^crm-[0-9a-f]{32}$/)
        assert.equal(data.ownerId, 'staff-self')
        assert.equal(data.source, 'manual')
        assert.equal(data.email, undefined)
        assert.equal(data.phone, '+92 300 0000000')
        if (leads.some((lead) => lead.$id === rowId)) {
          return Response.json({ type: 'row_already_exists' }, { status: 409 })
        }
        const row = { $id: rowId, ...data }
        leads.push(row)
        return Response.json(row, { status: 201 })
      }
      if (init.method === 'PATCH') {
        assert.deepEqual(roles, ['member'])
        const { queries, data } = JSON.parse(String(init.body))
        const [leadQuery, ownerQuery] = queries.map((query: string) => JSON.parse(query))
        assert.equal(leadQuery.attribute, '$id')
        assert.deepEqual(ownerQuery, { method: 'equal', attribute: 'ownerId', values: ['staff-self'] })
        const row = leads.find((lead) => lead.$id === leadQuery.values[0] && lead.ownerId === 'staff-self')
        if (row) Object.assign(row, data)
        return Response.json({ rows: row ? [row] : [], total: row ? 1 : 0 })
      }
      assert.equal(init.method, 'GET')
      return Response.json({ rows: leads, total: leads.length })
    }
    if (target.pathname.startsWith('/v1/tablesdb/crm/tables/leads/rows/')) {
      assert.equal(headers.get('X-Appwrite-Key'), 'staff-fixture')
      assert.ok(active && member)
      const row = leads.find((lead) => target.pathname.endsWith(`/${lead.$id}`))
      if (init.method === 'GET') {
        return row ? Response.json(row) : Response.json({ type: 'row_not_found' }, { status: 404 })
      }
      assert.equal(init.method, 'PATCH')
      assert.equal(row, leads[0])
      const { data } = JSON.parse(String(init.body))
      leads[0].ownerId = data.ownerId
      return Response.json(leads[0])
    }

    assert.equal(headers.get('X-Appwrite-Key'), null)
    assert.equal(headers.get('X-Appwrite-Session'), 'staff-session-fixture')
    if (target.pathname === '/v1/account') {
      return active ? Response.json({ $id: 'staff-self' }) : new Response(null, { status: 401 })
    }
    if (target.pathname === '/v1/teams/crm-admins/memberships') {
      teamChecks++
      if (!member) return new Response(null, { status: 404 })
      return Response.json({ memberships: [
        { $id: 'a', userId: 'staff-self', userName: 'Current Staff', confirm: true, teamId: 'crm-admins', roles },
        { $id: 'b', userId: 'staff-other', userName: 'Other Staff', confirm: true, teamId: 'crm-admins', roles: ['member'] },
        { $id: 'c', userId: 'staff-pending', userName: 'Pending Staff', confirm: false, teamId: 'crm-admins', roles: ['member'] },
        { $id: 'd', userId: 'staff-viewer', userName: 'Viewer Staff', confirm: true, teamId: 'crm-admins', roles: ['viewer'] },
      ] })
    }
    assert.equal(target.pathname, '/v1/account/sessions/current')
    assert.equal(init.method, 'DELETE')
    revocations++
    active = false
    return new Response(null, { status: 204 })
  })

  const origin = process.env.CRM_PUBLIC_ORIGIN!
  const run = (path: string, init?: RequestInit) => router.fetch(new Request(origin + path, init))
  const signIn = (source = origin) => run('/admin/login', {
    method: 'POST',
    headers: { origin: source },
    body: new URLSearchParams({ email: 'admin@invalid.test', password: 'test password' }),
  })
  const loginPage = await run('/admin/login')
  assert.equal(loginPage.headers.get('Cache-Control'), 'private, no-store')
  assert.match(await loginPage.text(), /Work email/)

  const legacyCookie = getSessionCookieHeader(generateSessionToken()).split(';')[0]
  assert.equal((await run('/admin/leads', { headers: { cookie: legacyCookie } })).headers.get('Location'), '/admin/login')
  assert.equal(teamChecks, 0)
  assert.equal((await signIn('https://other.invalid')).status, 403)
  assert.equal(signIns, 0)
  const outsider = await signIn()
  assert.equal(outsider.status, 401)
  assert.equal(outsider.headers.get('Set-Cookie'), null)
  assert.equal(revocations, 1)

  member = true
  const login = await signIn()
  assert.equal(login.status, 303)
  const cookieHeader = login.headers.get('Set-Cookie')!
  assert.match(cookieHeader, /HttpOnly; Secure; SameSite=Strict/)
  const cookie = cookieHeader.split(';')[0]
  const inbox = await run('/admin/leads', { headers: { cookie } })
  assert.equal(inbox.status, 200)
  const inboxHtml = await inbox.text()
  assert.match(inboxHtml, /Assigned to me/)
  assert.match(inboxHtml, /Other Staff/)
  assert.doesNotMatch(inboxHtml, /Pending Staff/)
  assert.equal(rowRequests, 1)

  member = false
  assert.equal((await run('/admin/leads/export', { headers: { cookie } })).headers.get('Location'), '/admin/login')
  assert.equal(rowRequests, 1)
  member = true
  const malicious = await run('/admin/leads', {
    method: 'POST', headers: { cookie, origin: 'https://other.invalid' },
    body: new URLSearchParams({ actionType: 'setArchived', archived: 'true', leadIds: 'fixture' }),
  })
  assert.equal(malicious.status, 403)
  assert.equal(rowRequests, 1)

  const assign = (ownerId: string) => run('/admin/leads', {
    method: 'POST', headers: { cookie, origin },
    body: new URLSearchParams({ actionType: 'assignOwner', leadIds: 'fixture', ownerId }),
  })
  assert.equal((await assign('staff-pending')).status, 400)
  assert.equal((await assign('staff-viewer')).status, 400)
  assert.equal(leads[0].ownerId, null)
  assert.equal((await assign('staff-self')).status, 303)
  assert.equal(leads[0].ownerId, 'staff-self')
  for (const path of [
    '/admin/leads?assigned=me&status=New',
    '/admin/leads?view=pipeline&assigned=me&status=New',
    '/admin/leads/export?assigned=me&ids=fixture,other-lead',
  ]) {
    const response = await run(path, { headers: { cookie } })
    assert.equal(response.status, 200, path)
    const text = await response.text()
    assert.match(text, /Unassigned example/, path)
    assert.doesNotMatch(text, /Other staff example/, path)
  }
  assert.equal((await assign('')).status, 303)
  assert.equal(leads[0].ownerId, null)

  assert.equal((await assign('staff-self')).status, 303)
  roles = ['member']
  const postLead = (fields: Record<string, string>) => run('/admin/leads', {
    method: 'POST', headers: { cookie, origin }, body: new URLSearchParams(fields),
  })
  const memberInbox = await (await run('/admin/leads', { headers: { cookie } })).text()
  assert.match(memberInbox, /Other staff example/)
  assert.match(memberInbox, /href="\/admin\/leads\/fixture\?back=/)
  assert.match((await (await run('/admin/leads/fixture?tab=notes', { headers: { cookie } })).text()), /Save notes/)
  assert.doesNotMatch((await (await run('/admin/leads/other-lead?tab=notes', { headers: { cookie } })).text()), /Save notes/)
  assert.doesNotMatch(memberInbox, /data-export-href|value="setArchived"|name="ownerId"/)
  assert.equal((await run('/admin/leads/export', { headers: { cookie } })).status, 403)
  assert.equal((await postLead({ actionType: 'setArchived', archived: 'true', leadIds: 'fixture' })).status, 403)
  assert.equal((await assign('')).status, 403)
  assert.equal((await postLead({ actionType: 'updateStatus', leadIds: 'fixture,other-lead', status: 'Won' })).status, 403)
  assert.equal((await postLead({ actionType: 'updateStatus', leadIds: 'other-lead', status: 'Won' })).status, 403)
  assert.equal((await postLead({ actionType: 'updateStatus', leadIds: 'fixture', status: 'Contacted' })).status, 303)
  assert.equal(leads[0].status, 'Contacted')
  assert.equal((await postLead({ actionType: 'updateNotes', leadIds: 'fixture', notes: 'Synthetic note' })).status, 303)
  assert.equal((await postLead({ actionType: 'updateNotes', leadIds: 'other-lead', notes: 'Forbidden note' })).status, 403)

  const newProspect = await run('/admin/leads/new', { headers: { cookie } })
  const submissionId = (await newProspect.text()).match(/name="submissionId" value="([^"]+)"/)?.[1]
  assert.ok(submissionId)
  const saveProspect = (phone: string, source = origin) => run('/admin/leads/new', {
    method: 'POST', headers: { cookie, origin: source },
    body: new URLSearchParams({ submissionId, fullName: 'Phone-only prospect', phone }),
  })
  const invalidProspect = await saveProspect('')
  assert.equal(invalidProspect.status, 400)
  assert.match(await invalidProspect.text(), /Phone-only prospect/)
  assert.equal((await saveProspect('+92 300 0000000', 'https://other.invalid')).status, 403)
  for (let attempt = 0; attempt < 2; attempt++) {
    const saved = await saveProspect('+92 300 0000000')
    assert.equal(saved.status, 303)
    assert.equal(saved.headers.get('Location'), '/admin/leads?assigned=me&source=manual')
  }
  assert.equal(leads.filter((lead) => lead.fullName === 'Phone-only prospect').length, 1)
  const prospectInbox = await (await run('/admin/leads?assigned=me&source=manual', { headers: { cookie } })).text()
  assert.match(prospectInbox, /Phone-only prospect/)
  assert.doesNotMatch(prospectInbox, /Unassigned example/)

  roles = ['viewer']
  const viewerInbox = await (await run('/admin/leads', { headers: { cookie } })).text()
  assert.doesNotMatch(viewerInbox, /class="lead-status-select/)
  const viewerNotes = await (await run('/admin/leads/fixture?tab=notes', { headers: { cookie } })).text()
  assert.match(viewerNotes, /Synthetic note/)
  assert.doesNotMatch(viewerNotes, /Save notes|Archive lead/)
  assert.equal((await run('/admin/leads/missing', { headers: { cookie } })).status, 404)
  assert.equal((await postLead({ actionType: 'updateStatus', leadIds: 'fixture', status: 'Won' })).status, 403)
  assert.equal((await run('/admin/leads/export', { headers: { cookie } })).status, 403)
  assert.equal((await run('/admin/leads/new', { headers: { cookie } })).status, 403)
  assert.equal((await saveProspect('+92 300 0000000')).status, 403)
  roles = ['unknown']
  assert.equal((await run('/admin/leads', { headers: { cookie } })).headers.get('Location'), '/admin/login')

  const logout = await run('/admin/logout', { method: 'POST', headers: { cookie, origin } })
  assert.equal(logout.status, 303)
  assert.match(logout.headers.get('Set-Cookie')!, /Max-Age=0/)
  assert.equal(revocations, 2)
  assert.equal((await run('/admin/leads', { headers: { cookie } })).headers.get('Location'), '/admin/login')
})

import assert from 'node:assert/strict'
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'

test('the private workspace keeps overview totals, pipeline links and exports consistent with inbox pages', async () => {
  const originalDirectory = process.cwd()
  const fixtureDirectory = await mkdtemp(join(tmpdir(), 'bellbee-crm-'))

  try {
    await mkdir(join(fixtureDirectory, 'data'))
    const fixture = { createdAt: '2026-01-01T00:00:00Z', email: 'test@invalid.test' }
    await writeFile(join(fixtureDirectory, 'data', 'leads.json'), JSON.stringify([
      { ...fixture, id: 'fixture-1', fullName: 'Example Lead', status: 'Contacted',
        createdAt: new Date().toISOString(), email: '923000000000@meta-ads.bellbeemedia.com', phone: '+92 300 0000000' },
      { ...fixture, id: 'fixture-2', fullName: 'Other Lead', status: 'New' },
      ...Array.from({ length: 26 }, (_, index) => ({
        ...fixture, id: `queue-${index + 1}`, fullName: `Queue Fixture ${index + 1}`, status: 'New', notes: '=2+2',
      })),
    ]))
    process.chdir(fixtureDirectory)

    const { router } = await import('../app/router.ts')
    const { generateSessionToken, getSessionCookieHeader } = await import('../app/data/auth.ts')
    const cookie = getSessionCookieHeader(generateSessionToken()).split(';')[0]
    const url = 'http://localhost/admin/leads?view=pipeline&search=Example'
    const anonymous = await router.fetch(new Request(url))
    assert.equal(anonymous.headers.get('Location'), '/admin/login')

    const pipeline = await router.fetch(new Request(url, { headers: { cookie } }))
    assert.equal(pipeline.status, 200)
    assert.equal(pipeline.headers.get('Cache-Control'), 'private, no-store')
    const html = await pipeline.text()
    assert.match(html, /Contacted \(1\)/)
    assert.match(html, /New \(0\)/)
    assert.match(html, /\/admin\/leads\/fixture-1\?back=[^"]*search%3DExample/)
    assert.doesNotMatch(html, /Other Lead|googletagmanager/)

    const inbox = await router.fetch(new Request('http://localhost/admin/leads?search=Example', { headers: { cookie } }))
    const inboxHtml = await inbox.text()
    assert.match(inboxHtml, /id="row-fixture-1"/)
    assert.match(inboxHtml, /href="https:\/\/wa\.me\/923000000000"/)
    assert.doesNotMatch(inboxHtml, /923000000000@meta-ads\.bellbeemedia\.com/)

    const read = async (path: string) => {
      const response = await router.fetch(new Request('http://localhost' + path, { headers: { cookie } }))
      assert.equal(response.status, 200, path)
      return response.text()
    }

    const overview = await read('/admin/leads?view=overview&search=missing')
    assert.match(overview, /Active leads<\/p><p[^>]+>28<\/p>/)
    assert.match(overview, /1 lead in the last 14 days/)
    assert.doesNotMatch(overview, /Example Lead|Queue Fixture/)
    const pageOne = await read('/admin/leads?search=Queue&status=New')
    assert.match(pageOne, /Needs a reply/)
    assert.match(pageOne, /Showing 1–25 of 26 matching leads/)
    assert.doesNotMatch(pageOne, /id="row-queue-26"/)
    const pageTwo = await read('/admin/leads?search=Queue&status=New&page=99')
    assert.match(pageTwo, /Showing 26–26 of 26 matching leads/)
    assert.match(pageTwo, /id="row-queue-26"/)
    const queuePipeline = await read('/admin/leads?search=Queue&status=New&view=pipeline')
    assert.match(queuePipeline, /\/admin\/leads\/queue-26\?back=[^"]*view%3Dpipeline/)

    const filteredExport = await read('/admin/leads/export?search=Queue&status=New&page=2')
    assert.match(filteredExport, /"queue-1"/)
    assert.match(filteredExport, /"queue-26"/)
    assert.doesNotMatch(filteredExport, /Other Lead/)
    assert.match(filteredExport, /"'=2\+2"/)
    const selectedExport = await read('/admin/leads/export?ids=queue-26')
    assert.match(selectedExport, /"queue-26"/)
    assert.doesNotMatch(selectedExport, /"queue-1"/)
    const recordPath = '/admin/leads/fixture-1?back=%2Fadmin%2Fleads%3Fsearch%3DExample'
    const record = await read(recordPath)
    assert.match(record, /Contact details/)
    assert.match(record, /href="\/admin\/leads\?search=Example"/)
    assert.doesNotMatch(record, /923000000000@meta-ads\.bellbeemedia\.com/)
    const notesUrl = `${recordPath}&tab=notes`
    const save = await router.fetch(new Request('http://localhost/admin/leads', {
      method: 'POST', headers: { cookie },
      body: new URLSearchParams({ actionType: 'updateNotes', leadIds: 'fixture-1', notes: 'Record-page note', returnTo: notesUrl }),
    }))
    assert.equal(save.headers.get('Location'), notesUrl)
    assert.match(await read(notesUrl), /Record-page note/)
    assert.doesNotMatch(await read('/admin/leads/fixture-1?back=https://outside.invalid/admin/leads'), /outside\.invalid/)

    const archive = (archived: boolean) => router.fetch(new Request('http://localhost/admin/leads', {
      method: 'POST', headers: { cookie },
      body: new URLSearchParams({ actionType: 'setArchived', archived: String(archived), leadIds: 'fixture-1,queue-26' }),
    }))
    const [archived, annotated] = await Promise.all([
      archive(true),
      router.fetch(new Request('http://localhost/admin/leads', {
        method: 'POST', headers: { cookie },
        body: new URLSearchParams({ actionType: 'updateNotes', leadIds: 'fixture-1', notes: 'Concurrent annotation' }),
      })),
    ])
    assert.equal(archived.status, 303)
    assert.equal(annotated.status, 303)
    assert.doesNotMatch(await read('/admin/leads?search=Example'), /id="row-fixture-1"/)
    const archiveInbox = await read('/admin/leads?archived=yes')
    assert.match(archiveInbox, /Restore lead/)
    assert.match(archiveInbox, /id="row-fixture-1"/)
    assert.match(archiveInbox, /id="row-queue-26"/)
    assert.doesNotMatch(await read('/admin/leads/export?ids=fixture-1'), /"fixture-1"/)
    const archivedCsv = await read('/admin/leads/export?archived=yes&ids=fixture-1')
    assert.match(archivedCsv, /"Example Lead"/)
    assert.match(archivedCsv, /"Concurrent annotation"/)
    const archivedOverview = await read('/admin/leads?view=overview')
    assert.match(archivedOverview, /Active leads<\/p><p[^>]+>26<\/p>/)
    assert.match(archivedOverview, /Archived leads \(2\)/)
    assert.match(archivedOverview, /1 lead in the last 14 days/)
    assert.equal((await archive(false)).status, 303)
    assert.match(await read('/admin/leads?search=Example&status=Contacted'), /id="row-fixture-1"/)
  } finally {
    process.chdir(originalDirectory)
    await rm(fixtureDirectory, { recursive: true, force: true })
  }
})

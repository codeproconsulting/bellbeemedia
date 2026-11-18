import assert from 'node:assert/strict'
import { test } from 'node:test'
import { filterLeads, type Lead } from '../app/data/leads.ts'

test('calendar filters use Pakistan midnight across UTC day and month boundaries', (t) => {
  t.mock.timers.enable({ apis: ['Date'], now: Date.parse('2026-10-31T20:00:00Z') })
  const leads: Lead[] = [
    { id: 'before', fullName: 'Before midnight', status: 'New', createdAt: '2026-10-31T18:59:59.999Z' },
    { id: 'start', fullName: 'Start of day', status: 'New', createdAt: '2026-10-31T19:00:00Z' },
    { id: 'end', fullName: 'End of day', status: 'New', createdAt: '2026-11-01T18:59:59.999Z' },
    { id: 'after', fullName: 'Next day', status: 'New', createdAt: '2026-11-01T19:00:00Z' },
  ]
  const ids = (filters: Parameters<typeof filterLeads>[1]) => filterLeads(leads, filters).map((lead) => lead.id)
  assert.deepEqual(ids({ dateRange: 'Today' }), ['start', 'end', 'after'])
  assert.deepEqual(ids({ dateRange: 'month' }), ['start', 'end', 'after'])
  assert.deepEqual(ids({ dateFrom: '2026-11-01', dateTo: '2026-11-01' }), ['start', 'end'])
  assert.deepEqual(ids({ dateFrom: 'invalid', dateTo: 'invalid' }), ['before', 'start', 'end', 'after'])
})

import type { Handle } from 'remix/ui'
import { leadStatuses, type Lead } from '../../data/leads.ts'

const intakeDate = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Karachi', year: 'numeric', month: '2-digit', day: '2-digit',
})
const dayLabel = new Intl.DateTimeFormat('en-GB', { timeZone: 'UTC', day: 'numeric', month: 'short' })

export function LeadsOverview(handle: Handle<{ leads: Lead[] }>) {
  const { leads } = handle.props
  const today = Date.parse(intakeDate.format(new Date()))
  const days = Array.from({ length: 14 }, (_, index) => {
    const date = new Date(today - (13 - index) * 86_400_000)
    return { key: date.toISOString().slice(0, 10), label: dayLabel.format(date), count: 0 }
  })
  const daysByDate = new Map(days.map((day) => [day.key, day]))
  const stages = new Map(leadStatuses.map((status) => [status, 0]))
  let archivedCount = 0
  for (const lead of leads) {
    if (lead.archived) archivedCount++
    else stages.set(lead.status, (stages.get(lead.status) ?? 0) + 1)
    const submitted = Date.parse(lead.createdAt)
    if (Number.isNaN(submitted)) continue
    const day = daysByDate.get(intakeDate.format(submitted))
    if (day) day.count++
  }
  const peak = Math.max(1, ...days.map((day) => day.count))
  const intakeCount = days.reduce((total, day) => total + day.count, 0)

  return () => (
    <div class="space-y-6">
      <section aria-label="Lead totals" class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <div class="rounded-xl border border-border bg-white p-4">
          <p class="text-xs font-semibold text-muted">Active leads</p>
          <p class="mt-1 text-2xl font-black text-foreground">{leads.length - archivedCount}</p>
        </div>
        {leadStatuses.map((status) => (
          <a key={status} href={`/admin/leads?status=${encodeURIComponent(status)}`}
            class="rounded-xl border border-border bg-white p-4 hover:border-primary">
            <p class="text-xs font-semibold text-muted">{status}</p>
            <p class="mt-1 text-2xl font-black text-foreground">{stages.get(status)}</p>
          </a>
        ))}
      </section>
      <a href="/admin/leads?archived=yes" class="inline-block text-sm font-semibold text-foreground underline">
        Archived leads ({archivedCount})
      </a>
      <section class="rounded-2xl border border-border bg-white p-5 sm:p-6" aria-labelledby="intake-heading">
        <h2 id="intake-heading" class="text-lg font-bold text-foreground">Lead intake</h2>
        <p class="mt-1 text-sm text-muted">{intakeCount} {intakeCount === 1 ? 'lead' : 'leads'} in the last 14 days · Pakistan Standard Time</p>
        <ol class="mt-5 grid grid-cols-7 gap-x-2 gap-y-5 sm:grid-cols-[repeat(14,minmax(0,1fr))]">
          {days.map((day) => (
            <li key={day.key} class="min-w-0 text-center">
              <span class="text-sm font-bold text-foreground">{day.count}<span class="sr-only"> leads on </span></span>
              <div class="mt-1 flex h-24 items-end justify-center border-b border-border" aria-hidden="true">
                <div class="w-3/5 rounded-t bg-primary" style={{ height: `${day.count / peak * 100}%` }} />
              </div>
              <time datetime={day.key} class="mt-2 block text-[10px] leading-tight text-muted">{day.label}</time>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

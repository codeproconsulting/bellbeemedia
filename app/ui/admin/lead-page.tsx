import type { Handle } from 'remix/ui'
import type { CrmRole } from '../../data/appwrite-staff.ts'
import { leadStatuses, type Lead, type LeadEvent } from '../../data/leads.ts'
import { routes } from '../../routes.ts'
import { Document } from '../document.tsx'

export function LeadPage(handle: Handle<{
  lead: Lead
  tab: 'overview' | 'notes' | 'history'
  historyEnabled: boolean
  events?: LeadEvent[]
  nextHistory?: string
  olderHistory: boolean
  backHref: string
  canEdit: boolean
  isAdmin: boolean
  staff?: { id: string; name: string; role: CrmRole }[]
}>) {
  const { lead, tab, backHref, canEdit, isAdmin, staff, historyEnabled, events, nextHistory, olderHistory } = handle.props
  const leadPath = routes.adminLead.href({ leadId: lead.id })
  const overviewHref = `${leadPath}?${new URLSearchParams({ back: backHref })}`
  const returnTo = tab === 'overview' ? overviewHref : `${overviewHref}&tab=${tab}`
  const owner = lead.ownerId ? staff?.find((member) => member.id === lead.ownerId) : undefined
  const assignees = staff?.filter((member) => member.role !== 'viewer') ?? []
  const phoneDigits = lead.phone?.replace(/\D/g, '')
  const field = 'w-full rounded-lg border border-border bg-white px-3 py-2 text-sm'
  const button = 'rounded-lg border border-border px-3 py-2 text-sm font-semibold hover:border-primary'
  const staffName = (id: string) => staff?.find((member) => member.id === id)?.name ?? id
  const eventLabel = (event: LeadEvent) => {
    switch (event.kind) {
      case 'status': return `Status set to ${event.value}`
      case 'owner': return event.value ? `Assigned to ${staffName(event.value)}` : 'Owner cleared'
      case 'archive': return 'Lead archived'
      case 'restore': return 'Lead restored'
      case 'notes': return 'Notes saved'
    }
  }

  return () => (
    <Document title={`${lead.fullName} | BellBee Media CRM`} privatePage>
      <main class="min-h-screen bg-surface-light px-4 py-10 text-foreground">
        <div class="mx-auto max-w-3xl">
          <a href={backHref} class="text-sm font-semibold underline">Back to leads</a>
          <div class="mt-4 flex flex-wrap items-start justify-between gap-4">
            <div class="min-w-0 break-words">
              <h1 class="text-3xl font-black">{lead.fullName}</h1>
              {lead.company && <p class="mt-1 text-sm text-muted">{lead.company}</p>}
              <p class="mt-2 text-sm text-muted">
                {lead.status}{lead.archived ? ' · Archived' : ''}{lead.source === 'manual' ? ' · Manual prospect' : ''}
              </p>
            </div>
            {isAdmin && (
              <form method="POST" action="/admin/leads">
                <input type="hidden" name="actionType" value="setArchived" />
                <input type="hidden" name="leadIds" value={lead.id} />
                <input type="hidden" name="returnTo" value={returnTo} />
                <input type="hidden" name="archived" value={lead.archived ? 'false' : 'true'} />
                <button type="submit" class={button}>{lead.archived ? 'Restore lead' : 'Archive lead'}</button>
              </form>
            )}
          </div>

          <nav aria-label="Lead record sections" class="mt-6 flex gap-4 border-b border-border pb-3 text-sm font-semibold">
            <a href={overviewHref} aria-current={tab === 'overview' ? 'page' : undefined}
              class={tab === 'overview' ? 'underline' : undefined}>Overview</a>
            <a href={`${overviewHref}&tab=notes`} aria-current={tab === 'notes' ? 'page' : undefined}
              class={tab === 'notes' ? 'underline' : undefined}>Notes</a>
            {historyEnabled && <a href={`${overviewHref}&tab=history`} aria-current={tab === 'history' ? 'page' : undefined}
              class={tab === 'history' ? 'underline' : undefined}>History</a>}
          </nav>

          {tab === 'notes' ? (
            <section class="mt-5 rounded-2xl border border-border bg-white p-5 sm:p-6">
              <h2 class="text-lg font-bold">Internal notes</h2>
              {canEdit ? (
                <form method="POST" action="/admin/leads" class="mt-3 space-y-3">
                  <input type="hidden" name="actionType" value="updateNotes" />
                  <input type="hidden" name="leadIds" value={lead.id} />
                  <input type="hidden" name="returnTo" value={returnTo} />
                  <textarea name="notes" aria-label="Internal notes" rows={8} maxLength={65535} value={lead.notes ?? ''} class={field} />
                  <button type="submit" class={button}>Save notes</button>
                </form>
              ) : <p class="mt-3 whitespace-pre-wrap break-words text-sm">{lead.notes || 'No notes yet.'}</p>}
            </section>
          ) : tab === 'history' ? (
            <section class="mt-5 rounded-2xl border border-border bg-white p-5 sm:p-6">
              <h2 class="text-lg font-bold">Activity history</h2>
              {events?.length ? (
                <ol class="mt-3 divide-y divide-border">
                  {events.map((event) => (
                    <li key={event.$id} class="py-3 text-sm">
                      <p class="font-semibold">{eventLabel(event)}</p>
                      <p class="mt-1 text-muted">
                        {staffName(event.actorId)} · <time datetime={event.$createdAt}>
                          {new Date(event.$createdAt).toLocaleString('en-GB', { timeZone: 'Asia/Karachi' })} PKT
                        </time>
                      </p>
                    </li>
                  ))}
                </ol>
              ) : <p class="mt-3 text-sm text-muted">No recorded changes on this page.</p>}
              <nav aria-label="History pages" class="mt-4 flex gap-4 text-sm font-semibold">
                {olderHistory && <a class="underline" href={`${overviewHref}&tab=history`}>Latest changes</a>}
                {nextHistory && <a class="underline" href={`${overviewHref}&tab=history&before=${encodeURIComponent(nextHistory)}`}>Older changes</a>}
              </nav>
            </section>
          ) : (
            <div class="mt-5 space-y-4">
              <section class="rounded-2xl border border-border bg-white p-5 sm:p-6">
                <h2 class="text-lg font-bold">Contact details</h2>
                <dl class="mt-3 grid gap-4 break-words text-sm sm:grid-cols-2">
                  <div><dt class="font-semibold">Email</dt><dd>{lead.email ? <a class="underline" href={`mailto:${lead.email}`}>{lead.email}</a> : 'None'}</dd></div>
                  <div><dt class="font-semibold">Phone</dt><dd>{lead.phone ? <a class="underline" href={`tel:${lead.phone}`}>{lead.phone}</a> : 'None'}
                    {phoneDigits && <> · <a class="underline" href={`https://wa.me/${phoneDigits}`} rel="noreferrer" target="_blank">WhatsApp</a></>}
                  </dd></div>
                  <div><dt class="font-semibold">Service</dt><dd>{lead.services || 'General Inquiry'}</dd></div>
                  <div><dt class="font-semibold">Received (PKT)</dt><dd>{new Date(lead.createdAt).toLocaleString('en-GB', { timeZone: 'Asia/Karachi' })}</dd></div>
                  {staff && <div><dt class="font-semibold">Lead owner</dt><dd>{owner?.name ?? (lead.ownerId ? 'Former team member' : 'Unassigned')}</dd></div>}
                </dl>
              </section>

              <section class="rounded-2xl border border-border bg-white p-5 sm:p-6">
                <h2 class="text-lg font-bold">Enquiry details</h2>
                <p class="mt-3 whitespace-pre-wrap break-words text-sm">{lead.details || 'No details supplied.'}</p>
              </section>

              {(canEdit || (isAdmin && staff)) && (
                <section class="grid gap-5 rounded-2xl border border-border bg-white p-5 sm:grid-cols-2 sm:p-6" aria-label="Lead management">
                  {canEdit && (
                    <form method="POST" action="/admin/leads" class="space-y-2">
                      <input type="hidden" name="actionType" value="updateStatus" />
                      <input type="hidden" name="leadIds" value={lead.id} />
                      <input type="hidden" name="returnTo" value={returnTo} />
                      <label for="lead-status" class="block text-sm font-semibold">Status</label>
                      <select id="lead-status" name="status" class={field}>
                        {leadStatuses.map((status) => <option key={status} value={status} selected={status === lead.status}>{status}</option>)}
                      </select>
                      <button type="submit" class={button}>Save status</button>
                    </form>
                  )}
                  {isAdmin && staff && (
                    <form method="POST" action="/admin/leads" class="space-y-2">
                      <input type="hidden" name="actionType" value="assignOwner" />
                      <input type="hidden" name="leadIds" value={lead.id} />
                      <input type="hidden" name="returnTo" value={returnTo} />
                      <label for="lead-owner" class="block text-sm font-semibold">Assign owner</label>
                      <select id="lead-owner" name="ownerId" class={field}>
                        <option value="" selected={!assignees.some((member) => member.id === lead.ownerId)}>Unassigned</option>
                        {assignees.map((member) => <option key={member.id} value={member.id} selected={member.id === lead.ownerId}>{member.name}</option>)}
                      </select>
                      <button type="submit" class={button}>Save owner</button>
                    </form>
                  )}
                </section>
              )}
            </div>
          )}
        </div>
      </main>
    </Document>
  )
}

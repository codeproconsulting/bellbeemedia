import { type Handle } from 'remix/ui'
import type { CrmRole } from '../../data/appwrite-staff.ts'
import { Document } from '../document.tsx'
import { routes } from '../../routes.ts'
import { LeadsOverview } from './leads-overview.tsx'
import { type Lead, type LeadFilters, type LeadStatus } from '../../data/leads.ts'

export const inboxPageSize = 25

interface DashboardPageProps {
  leads: Lead[]
  matchingLeadCount: number
  inboxPage: number
  filters: LeadFilters
  view: 'overview' | 'inbox' | 'pipeline'
  staff?: { id: string; name: string; role: CrmRole }[]
  staffId?: string
  role: CrmRole
  flashMessage?: string
}

export function DashboardPage(handle: Handle<DashboardPageProps>) {
  const { leads, matchingLeadCount, inboxPage, filters, view, staff, staffId, role, flashMessage } = handle.props
  const isAdmin = role === 'admin'
  const filterQuery = new URLSearchParams()
  for (const [name, value] of Object.entries(filters)) {
    if (value) filterQuery.set(name, value)
  }
  const inboxHref = `/admin/leads?${filterQuery}`
  const pipelineHref = `${inboxHref}&view=pipeline`
  const isArchived = filters.archived === 'yes'
  const archiveQuery = new URLSearchParams(filterQuery)
  if (view === 'pipeline') archiveQuery.set('view', 'pipeline')
  if (isArchived) archiveQuery.delete('archived')
  else archiveQuery.set('archived', 'yes')
  const archiveAction = isArchived ? 'Restore' : 'Archive'

  const needsReplyQuery = new URLSearchParams(filterQuery)
  needsReplyQuery.set('status', 'New')
  const assignmentQuery = new URLSearchParams(filterQuery)
  if (filters.assigned === 'me') assignmentQuery.delete('assigned')
  else assignmentQuery.set('assigned', 'me')
  const staffNames = new Map(staff?.map((member) => [member.id, member.name]))
  const inboxPageCount = Math.ceil(matchingLeadCount / inboxPageSize)
  const inboxOffset = (inboxPage - 1) * inboxPageSize
  const inboxPageHref = (page: number) => page > 1 ? `${inboxHref}&page=${page}` : inboxHref
  const leadHref = (id: string) => {
    const back = view === 'pipeline' ? pipelineHref : inboxPageHref(inboxPage)
    return `${routes.adminLead.href({ leadId: id })}?${new URLSearchParams({ back })}`
  }

  const statusColors: Record<LeadStatus, { bg: string; text: string; border: string }> = {
    New: { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/20' },
    Contacted: { bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-500/20' },
    'In Discussion': { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/20' },
    Won: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/20' },
    Lost: { bg: 'bg-gray-500/10', text: 'text-gray-600', border: 'border-gray-500/20' },
  }

  return () => (
    <Document
      privatePage
      title="Leads Management Dashboard | BellBee Media"
      description="Admin lead management dashboard for BellBee Media."
    >
      <div class="bg-[#F8FAFC] min-h-screen py-10">
        <div class="container mx-auto px-4 max-w-7xl">

          {/* ── Top Header ── */}
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-border">
            <div>
              <div class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-xl bg-surface-dark0 text-secondary flex items-center justify-center text-xl shadow-md">
                  <i class="ph-fill ph-users-three"></i>
                </span>
                <div>
                  <h1 class="text-2xl md:text-3xl font-black text-foreground tracking-tight">BellBee Media CRM</h1>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              {staff && role !== 'viewer' && (
                <a href="/admin/leads/new" class="rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white">Add prospect</a>
              )}
              {isAdmin && (
                <a
                  href={`/admin/leads/export?${filterQuery}`}
                  class="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow-sm transition-all"
                >
                  <i class="ph-bold ph-microsoft-excel-logo text-base"></i>
                  <span>{view === 'overview' ? 'Export active leads' : 'Export filtered leads'}</span>
                </a>
              )}

              <form method="POST" action="/admin/logout">
                <button type="submit"
                  class="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-red-50 text-red-600 border border-red-200 font-semibold rounded-xl text-xs transition-all">
                  <i class="ph-bold ph-sign-out"></i>
                  <span>Logout</span>
                </button>
              </form>
            </div>
          </div>

          <nav aria-label="CRM views" class="flex flex-wrap gap-2 mb-6 text-sm font-semibold">
            {([
              ['overview', 'Overview', '/admin/leads?view=overview'],
              ['inbox', 'Inbox', inboxHref],
              ['pipeline', 'Pipeline', pipelineHref],
            ] as const).map(([key, label, href]) => (
              <a key={key} href={href} aria-current={view === key ? 'page' : undefined}
                class={`rounded-lg px-3 py-2 ${view === key ? 'bg-surface-dark0 text-white' : 'text-foreground hover:bg-surface-light'}`}>
                {label}
              </a>
            ))}
          </nav>

          {/* Flash Message */}
          {flashMessage && (
            <div class="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 shadow-sm">
              <i class="ph-bold ph-check-circle text-base text-emerald-600 shrink-0"></i>
              <span>{flashMessage}</span>
            </div>
          )}

          {view === 'overview' && <LeadsOverview leads={leads} />}

          {view !== 'overview' && (
            <div class="mb-4 flex flex-wrap gap-2">
              <a href={`/admin/leads?${archiveQuery}`}
                class="inline-flex rounded-lg border border-border bg-white px-3 py-2 text-sm font-semibold text-foreground hover:border-primary">
                {isArchived ? 'Active leads' : 'Archived leads'}
              </a>
              {view === 'inbox' && !isArchived && <a href={`/admin/leads?${needsReplyQuery}`}
                class="inline-flex rounded-lg border border-border bg-white px-3 py-2 text-sm font-semibold text-foreground hover:border-primary"
                aria-current={filters.status === 'New' ? 'true' : undefined}>
                Needs a reply
              </a>}
              {view === 'inbox' && staff && (
                <a href={`/admin/leads?${assignmentQuery}`}
                  class="inline-flex rounded-lg border border-border bg-white px-3 py-2 text-sm font-semibold text-foreground hover:border-primary">
                  {filters.assigned === 'me' ? 'Show all owners' : 'Assigned to me'}
                </a>
              )}
            </div>
          )}

          {view !== 'overview' && <>
          {/* ── Filters Bar ── */}
          <div class="bg-white rounded-2xl p-6 border border-border shadow-sm mb-6">
            <form method="GET" action="/admin/leads" class="space-y-4">
              {view === 'pipeline' && <input type="hidden" name="view" value="pipeline" />}
              {filters.assigned && <input type="hidden" name="assigned" value={filters.assigned} />}
              {isArchived && <input type="hidden" name="archived" value="yes" />}
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Search */}
                <div>
                  <label for="search" class="block text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5">
                    Search Keyword
                  </label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted">
                      <i class="ph ph-magnifying-glass text-sm"></i>
                    </span>
                    <input
                      type="text"
                      id="search"
                      name="search"
                      value={filters.search || ''}
                      placeholder="Name, email, phone, website..."
                      class="w-full pl-9 pr-3 py-2 rounded-xl border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <label for="status" class="block text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    class="w-full px-3 py-2 rounded-xl border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="All" selected={!filters.status || filters.status === 'All'}>All Statuses</option>
                    <option value="New" selected={filters.status === 'New'}>New</option>
                    <option value="Contacted" selected={filters.status === 'Contacted'}>Contacted</option>
                    <option value="In Discussion" selected={filters.status === 'In Discussion'}>In Discussion</option>
                    <option value="Won" selected={filters.status === 'Won'}>Won</option>
                    <option value="Lost" selected={filters.status === 'Lost'}>Lost</option>
                  </select>
                </div>

                {/* Date Preset Filter */}
                <div>
                  <label for="dateRange" class="block text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5">
                    Date Range
                  </label>
                  <select
                    id="dateRange"
                    name="dateRange"
                    class="w-full px-3 py-2 rounded-xl border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="All" selected={!filters.dateRange || filters.dateRange === 'All'}>All Time</option>
                    <option value="Today" selected={filters.dateRange === 'Today'}>Today</option>
                    <option value="7days" selected={filters.dateRange === '7days'}>Last 7 Days</option>
                    <option value="30days" selected={filters.dateRange === '30days'}>Last 30 Days</option>
                    <option value="month" selected={filters.dateRange === 'month'}>This Month</option>
                  </select>
                </div>

                {/* Source Filter */}
                <div>
                  <label for="source" class="block text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5">
                    Lead Source
                  </label>
                  <select
                    id="source"
                    name="source"
                    class="w-full px-3 py-2 rounded-xl border border-border text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="All" selected={!filters.source || filters.source === 'All'}>All Sources</option>
                    <option value="manual" selected={filters.source === 'manual'}>Manual Prospects</option>
                    <option value="SEO" selected={filters.source === 'SEO'}>SEO Services (Islamabad)</option>
                    <option value="Performance" selected={filters.source === 'Performance'}>Performance Ads</option>
                    <option value="Contact" selected={filters.source === 'Contact'}>Contact Page</option>
                    <option value="Proposal" selected={filters.source === 'Proposal'}>Proposal Request</option>
                    <option value="Landing Page" selected={filters.source === 'Landing Page'}>City Landing Pages</option>
                  </select>
                </div>

              </div>

              {/* Custom Date Range & Filter Submit */}
              <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-border/60">
                <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <span class="text-[11px] font-bold text-muted uppercase">Custom Dates:</span>
                  <input
                    type="date"
                    name="dateFrom"
                    value={filters.dateFrom || ''}
                    class="px-2.5 py-1.5 border border-border rounded-lg text-xs text-foreground"
                    title="From Date"
                  />
                  <span class="text-xs text-muted">to</span>
                  <input
                    type="date"
                    name="dateTo"
                    value={filters.dateTo || ''}
                    class="px-2.5 py-1.5 border border-border rounded-lg text-xs text-foreground"
                    title="To Date"
                  />
                </div>

                <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <a
                    href={view === 'pipeline' ? '/admin/leads?view=pipeline' : '/admin/leads'}
                    class="px-4 py-2 bg-surface-light hover:bg-gray-200 text-muted hover:text-foreground font-semibold rounded-xl text-xs transition-colors"
                  >
                    Reset
                  </a>
                  <button
                    type="submit"
                    class="px-5 py-2 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs shadow-sm transition-all cursor-pointer"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </form>
          </div>

          </>}

          {view === 'pipeline' && (
            <div aria-label="Lead pipeline" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {(Object.keys(statusColors) as LeadStatus[]).map((status) => {
                const stageLeads = leads.filter((lead) => (Object.hasOwn(statusColors, lead.status) ? lead.status : 'New') === status)
                return (
                  <section key={status} class="min-w-0 rounded-xl border border-border bg-white p-4">
                    <h2 class={`rounded-lg p-2 text-sm font-bold ${statusColors[status].bg} ${statusColors[status].text}`}>
                      {status} ({stageLeads.length})
                    </h2>
                    {stageLeads.length ? (
                      <ul class="mt-3 space-y-3">
                        {stageLeads.map((lead) => (
                          <li key={lead.id} class="rounded-lg border border-border p-3 text-sm break-words">
                            <a class="font-semibold underline" href={`${leadHref(lead.id)}`}>{lead.fullName}</a>
                            {lead.company && <p class="mt-1 text-xs text-muted">{lead.company}</p>}
                          </li>
                        ))}
                      </ul>
                    ) : <p class="mt-3 text-xs text-muted">No leads</p>}
                  </section>
                )
              })}
            </div>
          )}

          {view === 'inbox' && <>
          {isAdmin && <>
            {/* ── Dynamic Bulk Action Bar ── */}
            <div id="bulk-action-bar" class="hidden bg-surface-dark0 text-white rounded-2xl p-4 shadow-xl mb-4 flex flex-wrap items-center justify-between gap-4 transition-all">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold text-secondary">
                  <i class="ph-bold ph-check-square"></i>
                </span>
                <span id="selected-count-label" class="text-xs font-bold text-white">
                  0 leads selected
                </span>
              </div>

              <div class="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  id="btn-export-selected"
                  data-export-href={`/admin/leads/export?${filterQuery}`}
                  class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                >
                  <i class="ph-bold ph-microsoft-excel-logo text-sm"></i>
                  <span>Export Selected to Excel</span>
                </button>

                <form method="POST" action="/admin/leads" id="bulk-action-form" class="inline-flex gap-2">
                  <input type="hidden" name="leadIds" id="bulk-lead-ids" value="" />
                  <input type="hidden" name="archived" value={isArchived ? 'false' : 'true'} />

                  <select
                    name="status"
                    id="bulk-status-select"
                    class="px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-xs text-white focus:outline-none"
                  >
                    <option value="New" class="text-foreground">Mark as New</option>
                    <option value="Contacted" class="text-foreground">Mark as Contacted</option>
                    <option value="In Discussion" class="text-foreground">Mark as In Discussion</option>
                    <option value="Won" class="text-foreground">Mark as Won</option>
                    <option value="Lost" class="text-foreground">Mark as Lost</option>
                  </select>

                  <button
                    type="submit"
                    name="actionType"
                    value="updateStatus"
                    class="px-4 py-2 bg-primary hover:bg-primary-light text-white font-bold rounded-xl text-xs transition-all cursor-pointer"
                  >
                    Update Status
                  </button>

                  <button
                    type="submit"
                    name="actionType"
                    value="setArchived"
                    class="px-3 py-2 border border-white/20 rounded-xl text-xs font-bold text-white"
                  >
                    {archiveAction} selected
                  </button>
                </form>
              </div>
            </div>
          </>}

          {/* ── Main Leads Table ── */}
          <div class="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">
            
            {leads.length === 0 ? (
              <div class="py-16 px-4 text-center">
                <div class="w-16 h-16 rounded-2xl bg-surface-light text-muted flex items-center justify-center mx-auto mb-4 text-3xl">
                  <i class="ph ph-tray"></i>
                </div>
                <h3 class="text-lg font-bold text-foreground">No Leads Found</h3>
                <p class="text-xs text-muted max-w-sm mx-auto mt-1 mb-6">
                  No submissions matched your active filters. Try resetting the filters or check back when new website visitors submit forms.
                </p>
                <a
                  href="/admin/leads"
                  class="px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl shadow-sm hover:bg-primary-dark transition-all inline-block"
                >
                  Clear All Filters
                </a>
              </div>
            ) : (
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="bg-surface-light/80 border-b border-border text-[11px] font-bold uppercase tracking-wider text-muted">
                      {isAdmin && (
                        <th class="p-4 w-10 text-center">
                          <input
                            type="checkbox"
                            id="select-all-leads"
                            class="rounded border-border text-primary focus:ring-primary cursor-pointer w-4 h-4"
                            title="Select all leads"
                          />
                        </th>
                      )}
                      <th class="p-4">Date / Time (PKT)</th>
                      <th class="p-4">Prospect</th>
                      <th class="p-4">Service / Source</th>
                      <th class="p-4">Submission Summary</th>
                      <th class="p-4">Status</th>
                      <th class="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-border">
                    {leads.map((lead) => {
                      const canEdit = isAdmin || (role === 'member' && lead.ownerId === staffId)
                      const color = statusColors[lead.status] || statusColors.New
                      const dateObj = new Date(lead.createdAt)
                      const formattedDate = dateObj.toLocaleDateString('en-US', {
                        timeZone: 'Asia/Karachi',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })
                      const formattedTime = dateObj.toLocaleTimeString('en-US', {
                        timeZone: 'Asia/Karachi',
                        hour: '2-digit',
                        minute: '2-digit',
                      })

                      return (
                        <tr class="hover:bg-slate-50/70 transition-colors group" id={`row-${lead.id}`}>
                          {isAdmin && (
                            <td class="p-4 text-center">
                              <input
                                type="checkbox"
                                class="lead-checkbox rounded border-border text-primary focus:ring-primary cursor-pointer w-4 h-4"
                                value={lead.id}
                              />
                            </td>
                          )}

                          {/* Date & Time */}
                          <td class="p-4 whitespace-nowrap">
                            <span class="font-bold text-foreground block">{formattedDate}</span>
                            <span class="text-[10px] text-muted">{formattedTime} PKT</span>
                          </td>

                          {/* Prospect details */}
                          <td class="p-4">
                            <a href={leadHref(lead.id)} class="font-bold text-foreground text-sm underline">{lead.fullName}</a>
                            {lead.company && (
                              <div class="text-[11px] font-medium text-muted">{lead.company}</div>
                            )}
                            {staff && (
                              <div class="text-[11px] text-muted">
                                {lead.ownerId ? staffNames.get(lead.ownerId) ?? 'Former team member' : 'Unassigned'}
                              </div>
                            )}
                            <div class="flex items-center gap-3 mt-1.5 text-[11px]">
                              {lead.email && (
                                <a href={`mailto:${lead.email}`} class="text-primary hover:underline flex items-center gap-1 font-medium">
                                  <i class="ph ph-envelope-simple"></i> {lead.email}
                                </a>
                              )}
                              {lead.phone && (
                                <div class="flex items-center gap-1.5">
                                  <a href={`tel:${lead.phone}`} class="text-foreground/80 hover:text-primary flex items-center gap-1">
                                    <i class="ph ph-phone"></i> {lead.phone}
                                  </a>
                                  <a
                                    href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-emerald-600 hover:text-emerald-700 font-bold"
                                    title="Open WhatsApp chat"
                                  >
                                    <i class="ph-fill ph-whatsapp-logo text-sm"></i>
                                  </a>
                                </div>
                              )}
                            </div>
                          </td>

                          {/* Service / Source */}
                          <td class="p-4">
                            <span class="inline-block px-2.5 py-1 rounded-lg bg-surface-light border border-border text-[11px] font-bold text-foreground">
                              {lead.services || 'General Inquiry'}
                            </span>
                            {lead.source === 'manual' && <p class="mt-1 text-[11px] text-muted">Manual prospect</p>}
                          </td>

                          {/* Submission Details Preview */}
                          <td class="p-4 max-w-xs">
                            <p class="text-xs text-muted truncate-2-lines line-clamp-2">
                              {lead.details || 'No additional details provided.'}
                            </p>
                            {lead.notes && (
                              <span class="inline-flex items-center gap-1 mt-1 text-[10px] text-secondary font-bold">
                                <i class="ph-fill ph-note"></i> Internal notes added
                              </span>
                            )}
                          </td>

                          {/* Status Dropdown */}
                          <td class="p-4">
                            {canEdit ? (
                              <form method="POST" action="/admin/leads" class="inline-block">
                                <input type="hidden" name="actionType" value="updateStatus" />
                                <input type="hidden" name="leadIds" value={lead.id} />
                                <select
                                  name="status"
                                  class={`lead-status-select px-2.5 py-1.5 rounded-full text-xs font-bold border ${color.bg} ${color.text} ${color.border} focus:outline-none cursor-pointer transition-all`}
                                >
                                  <option value="New" selected={lead.status === 'New'}>New</option>
                                  <option value="Contacted" selected={lead.status === 'Contacted'}>Contacted</option>
                                  <option value="In Discussion" selected={lead.status === 'In Discussion'}>In Discussion</option>
                                  <option value="Won" selected={lead.status === 'Won'}>Won</option>
                                  <option value="Lost" selected={lead.status === 'Lost'}>Lost</option>
                                </select>
                              </form>
                            ) : (
                              <span class={`inline-block rounded-full border px-2.5 py-1.5 text-xs font-bold ${color.bg} ${color.text} ${color.border}`}>{lead.status}</span>
                            )}
                          </td>

                          {/* Actions */}
                          <td class="p-4 text-right whitespace-nowrap">
                            <div class="flex items-center justify-end gap-2">
                              <a href={leadHref(lead.id)} aria-label="Open lead record" title="Open lead record"
                                class="p-2 text-primary hover:bg-primary/10 rounded-lg">
                                <i class="ph-bold ph-eye text-base"></i>
                              </a>

                              {isAdmin && (
                                <form method="POST" action="/admin/leads" class="inline-block">
                                  <input type="hidden" name="actionType" value="setArchived" />
                                  <input type="hidden" name="leadIds" value={lead.id} />
                                  <input type="hidden" name="archived" value={isArchived ? 'false' : 'true'} />
                                  <button
                                    type="submit"
                                    class="p-2 text-muted hover:bg-surface-light rounded-lg transition-colors cursor-pointer"
                                    aria-label={`${archiveAction} lead`}
                                    title={`${archiveAction} lead`}
                                  >
                                    <i class={`ph-bold ${isArchived ? 'ph-arrow-counter-clockwise' : 'ph-archive'} text-base`}></i>
                                  </button>
                                </form>
                              )}
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {/* Footer Status */}
            <div class="p-4 bg-surface-light border-t border-border flex flex-wrap gap-3 items-center justify-between text-xs text-muted">
              <span>Showing {leads.length ? inboxOffset + 1 : 0}–{inboxOffset + leads.length} of {matchingLeadCount} matching leads</span>
              {inboxPageCount > 1 && (
                <nav aria-label="Inbox pages" class="flex flex-wrap items-center gap-3">
                  {inboxPage > 1 && <a class="underline" href={inboxPageHref(inboxPage - 1)}>Previous</a>}
                  <span>Page {inboxPage} of {inboxPageCount}</span>
                  {inboxPage < inboxPageCount && <a class="underline" href={inboxPageHref(inboxPage + 1)}>Next</a>}
                </nav>
              )}
            </div>

          </div>

          </>}
        </div>
      </div>

      {view === 'inbox' && <>
      {/* ── Client-side Interactive Script ── */}
      <script>
        {`
          (function() {
            var selectAllCheckbox = document.getElementById('select-all-leads');
            var checkboxes = document.querySelectorAll('.lead-checkbox');
            var bulkBar = document.getElementById('bulk-action-bar');
            var selectedLabel = document.getElementById('selected-count-label');
            var bulkLeadIds = document.getElementById('bulk-lead-ids');
            var exportSelectedBtn = document.getElementById('btn-export-selected');

            function getSelectedIds() {
              var ids = [];
              checkboxes.forEach(function(cb) {
                if (cb.checked) ids.push(cb.value);
              });
              return ids;
            }

            function updateBulkBar() {
              var ids = getSelectedIds();
              if (ids.length > 0) {
                bulkBar.classList.remove('hidden');
                selectedLabel.textContent = ids.length + ' lead' + (ids.length > 1 ? 's' : '') + ' selected';
                bulkLeadIds.value = ids.join(',');
              } else {
                bulkBar.classList.add('hidden');
                bulkLeadIds.value = '';
              }
            }

            if (selectAllCheckbox) {
              selectAllCheckbox.addEventListener('change', function() {
                checkboxes.forEach(function(cb) {
                  cb.checked = selectAllCheckbox.checked;
                });
                updateBulkBar();
              });
            }

            checkboxes.forEach(function(cb) {
              cb.addEventListener('change', function() {
                if (!cb.checked && selectAllCheckbox) selectAllCheckbox.checked = false;
                updateBulkBar();
              });
            });

            // Single lead status changes
            document.querySelectorAll('.lead-status-select').forEach(function(sel) {
              sel.addEventListener('change', function() {
                sel.form.submit();
              });
            });

            // Export selected rows through the same endpoint as the filtered export.
            if (exportSelectedBtn) {
              exportSelectedBtn.addEventListener('click', function() {
                var ids = getSelectedIds();
                if (ids.length === 0) {
                  alert('Please select at least one lead to export.');
                  return;
                }
                var url = new URL(exportSelectedBtn.dataset.exportHref, window.location.origin);
                url.searchParams.set('ids', ids.join(','));
                window.location.assign(url.href);
              });
            }

          })();
        `}
      </script>

      </>}
    </Document>
  )
}

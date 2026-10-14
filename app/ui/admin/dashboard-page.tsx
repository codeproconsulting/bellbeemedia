import { type Handle } from 'remix/ui'
import { Layout } from '../layout.tsx'
import { type Lead, type LeadFilters, type LeadStatus } from '../../data/leads.ts'

interface DashboardPageProps {
  leads: Lead[]
  allLeadsCount: number
  filters: LeadFilters
  flashMessage?: string
}

export function DashboardPage(handle: Handle<DashboardPageProps>) {
  const { leads, allLeadsCount, filters, flashMessage } = handle.props

  const totalLeads = allLeadsCount
  const newLeads = leads.filter((l) => l.status === 'New').length
  const inProgressLeads = leads.filter((l) => l.status === 'Contacted' || l.status === 'In Discussion').length
  const wonLeads = leads.filter((l) => l.status === 'Won').length
  const conversionRate = totalLeads > 0 ? Math.round((wonLeads / totalLeads) * 100) : 0

  const statusColors: Record<LeadStatus, { bg: string; text: string; border: string }> = {
    New: { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/20' },
    Contacted: { bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-500/20' },
    'In Discussion': { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/20' },
    Won: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/20' },
    Lost: { bg: 'bg-gray-500/10', text: 'text-gray-600', border: 'border-gray-500/20' },
  }

  // Pre-serialize leads for client-side search, selection, and instant CSV export
  const serializedLeads = JSON.stringify(leads)

  return () => (
    <Layout
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
                  <h1 class="text-2xl md:text-3xl font-black text-foreground tracking-tight">Leads & Inquiries</h1>
                  <p class="text-xs text-muted mt-0.5">Real-time submissions captured across all BellBee Media forms</p>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <a
                href={`/admin/leads/export?status=${encodeURIComponent(filters.status || 'All')}&search=${encodeURIComponent(filters.search || '')}&source=${encodeURIComponent(filters.source || 'All')}&dateRange=${encodeURIComponent(filters.dateRange || 'All')}`}
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow-sm transition-all"
                title="Export all currently filtered leads directly into an Excel CSV spreadsheet"
              >
                <i class="ph-bold ph-microsoft-excel-logo text-base"></i>
                <span>Export Filtered to Excel</span>
              </a>

              <a
                href="/admin/logout"
                class="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white hover:bg-red-50 text-red-600 border border-red-200 font-semibold rounded-xl text-xs transition-all"
              >
                <i class="ph-bold ph-sign-out"></i>
                <span>Logout</span>
              </a>
            </div>
          </div>

          {/* Flash Message */}
          {flashMessage && (
            <div class="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 shadow-sm">
              <i class="ph-bold ph-check-circle text-base text-emerald-600 shrink-0"></i>
              <span>{flashMessage}</span>
            </div>
          )}

          {/* ── Metric Summary Cards ── */}
          <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <div class="bg-white rounded-2xl p-5 border border-border shadow-sm">
              <span class="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">Total Leads</span>
              <div class="flex items-baseline justify-between">
                <span class="text-3xl font-black text-foreground">{totalLeads}</span>
                <span class="w-8 h-8 rounded-lg bg-surface-light flex items-center justify-center text-primary text-base">
                  <i class="ph-bold ph-inbox"></i>
                </span>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-5 border border-border shadow-sm">
              <span class="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">New Inquiries</span>
              <div class="flex items-baseline justify-between">
                <span class="text-3xl font-black text-blue-600">{newLeads}</span>
                <span class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 text-base">
                  <i class="ph-bold ph-sparkle"></i>
                </span>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-5 border border-border shadow-sm">
              <span class="text-[11px] font-bold uppercase tracking-wider text-purple-600 block mb-1">In Progress</span>
              <div class="flex items-baseline justify-between">
                <span class="text-3xl font-black text-purple-600">{inProgressLeads}</span>
                <span class="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 text-base">
                  <i class="ph-bold ph-chats-circle"></i>
                </span>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-5 border border-border shadow-sm">
              <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">Deals Won</span>
              <div class="flex items-baseline justify-between">
                <span class="text-3xl font-black text-emerald-600">{wonLeads}</span>
                <span class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 text-base">
                  <i class="ph-bold ph-handshake"></i>
                </span>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-5 border border-border shadow-sm col-span-2 lg:col-span-1">
              <span class="text-[11px] font-bold uppercase tracking-wider text-secondary block mb-1">Win Rate</span>
              <div class="flex items-baseline justify-between">
                <span class="text-3xl font-black text-secondary">{conversionRate}%</span>
                <span class="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-base">
                  <i class="ph-bold ph-chart-pie-slice"></i>
                </span>
              </div>
            </div>
          </div>

          {/* ── Filters Bar ── */}
          <div class="bg-white rounded-2xl p-6 border border-border shadow-sm mb-6">
            <form method="GET" action="/admin/leads" class="space-y-4">
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
                    href="/admin/leads"
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
                class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                <i class="ph-bold ph-microsoft-excel-logo text-sm"></i>
                <span>Export Selected to Excel</span>
              </button>

              <form method="POST" action="/admin/leads" id="bulk-action-form" class="inline-flex gap-2">
                <input type="hidden" name="actionType" id="bulk-action-type" value="updateStatus" />
                <input type="hidden" name="leadIds" id="bulk-lead-ids" value="" />
                
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
                  class="px-4 py-2 bg-primary hover:bg-primary-light text-white font-bold rounded-xl text-xs transition-all cursor-pointer"
                >
                  Update Status
                </button>

                <button
                  type="button"
                  id="btn-bulk-delete"
                  class="px-3 py-2 bg-red-600/30 hover:bg-red-600 text-red-200 hover:text-white border border-red-500/40 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  <i class="ph-bold ph-trash"></i> Delete
                </button>
              </form>
            </div>
          </div>

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
                      <th class="p-4 w-10 text-center">
                        <input
                          type="checkbox"
                          id="select-all-leads"
                          class="rounded border-border text-primary focus:ring-primary cursor-pointer w-4 h-4"
                          title="Select all leads"
                        />
                      </th>
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
                          {/* Checkbox */}
                          <td class="p-4 text-center">
                            <input
                              type="checkbox"
                              class="lead-checkbox rounded border-border text-primary focus:ring-primary cursor-pointer w-4 h-4"
                              value={lead.id}
                              data-lead={JSON.stringify(lead)}
                            />
                          </td>

                          {/* Date & Time */}
                          <td class="p-4 whitespace-nowrap">
                            <span class="font-bold text-foreground block">{formattedDate}</span>
                            <span class="text-[10px] text-muted">{formattedTime} PKT</span>
                          </td>

                          {/* Prospect details */}
                          <td class="p-4">
                            <div class="font-bold text-foreground text-sm">{lead.fullName}</div>
                            {lead.company && (
                              <div class="text-[11px] font-medium text-muted">{lead.company}</div>
                            )}
                            <div class="flex items-center gap-3 mt-1.5 text-[11px]">
                              <a href={`mailto:${lead.email}`} class="text-primary hover:underline flex items-center gap-1 font-medium">
                                <i class="ph ph-envelope-simple"></i> {lead.email}
                              </a>
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
                          </td>

                          {/* Actions */}
                          <td class="p-4 text-right whitespace-nowrap">
                            <div class="flex items-center justify-end gap-2">
                              <button
                                type="button"
                                class="btn-view-lead p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors cursor-pointer"
                                data-lead={JSON.stringify(lead)}
                                title="View full lead record and notes"
                              >
                                <i class="ph-bold ph-eye text-base"></i>
                              </button>

                              <form method="POST" action="/admin/leads" class="lead-delete-form inline-block">
                                <input type="hidden" name="actionType" value="delete" />
                                <input type="hidden" name="leadIds" value={lead.id} />
                                <button
                                  type="submit"
                                  class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                  title="Delete lead"
                                >
                                  <i class="ph-bold ph-trash text-base"></i>
                                </button>
                              </form>
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
            <div class="p-4 bg-surface-light border-t border-border flex items-center justify-between text-xs text-muted">
              <span>Showing <strong>{leads.length}</strong> of <strong>{totalLeads}</strong> total leads</span>
              <span>Timezone: Pakistan Standard Time (PKT, UTC+5)</span>
            </div>

          </div>

        </div>
      </div>

      {/* ── Modal: View & Edit Lead Record ── */}
      <div id="lead-modal" class="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div class="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-border relative max-h-[90vh] overflow-y-auto">
          
          <div class="flex items-start justify-between pb-4 border-b border-border mb-6">
            <div>
              <span id="modal-lead-source" class="text-[11px] font-bold uppercase tracking-wider text-secondary px-2.5 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block mb-1">
                Source
              </span>
              <h2 id="modal-lead-name" class="text-2xl font-black text-foreground">Lead Details</h2>
              <span id="modal-lead-date" class="text-xs text-muted">Date</span>
            </div>
            <button type="button" id="modal-close-btn" class="w-9 h-9 rounded-full bg-surface-light flex items-center justify-center text-muted hover:text-foreground text-lg cursor-pointer">
              <i class="ph-bold ph-x"></i>
            </button>
          </div>

          <div class="space-y-6">
            {/* Contact Row */}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-surface-light rounded-2xl p-4 border border-border">
              <div>
                <span class="text-[11px] font-bold text-muted uppercase block">Email Address</span>
                <a id="modal-lead-email" href="#" class="text-sm font-bold text-primary hover:underline break-all"></a>
              </div>
              <div>
                <span class="text-[11px] font-bold text-muted uppercase block">Phone / WhatsApp</span>
                <div class="flex items-center gap-2 mt-0.5">
                  <span id="modal-lead-phone" class="text-sm font-bold text-foreground"></span>
                  <a id="modal-lead-wa" href="#" target="_blank" rel="noopener noreferrer" class="text-emerald-600 font-bold text-base" title="Open WhatsApp">
                    <i class="ph-fill ph-whatsapp-logo"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Submission Full Content */}
            <div>
              <span class="text-xs font-bold text-foreground uppercase tracking-wider block mb-2">Form Submission Details</span>
              <div id="modal-lead-details" class="p-4 rounded-2xl bg-surface-light border border-border text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed font-mono">
              </div>
            </div>

            {/* Internal Admin Notes Form */}
            <form method="POST" action="/admin/leads" class="space-y-3 pt-4 border-t border-border">
              <input type="hidden" name="actionType" value="updateNotes" />
              <input type="hidden" name="leadIds" id="modal-lead-id-input" value="" />

              <div class="flex items-center justify-between">
                <label for="modal-notes-textarea" class="text-xs font-bold text-foreground uppercase tracking-wider">
                  Internal Agency Notes
                </label>
                <span class="text-[10px] text-muted">Only visible to administrators</span>
              </div>
              <textarea
                id="modal-notes-textarea"
                name="notes"
                rows={3}
                placeholder="Add meeting notes, agreed budget, status updates, or follow-up details..."
                class="w-full px-4 py-3 rounded-xl border border-border bg-surface-light text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              ></textarea>

              <div class="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  id="modal-cancel-btn"
                  class="px-5 py-2.5 rounded-xl border border-border text-xs font-bold text-foreground hover:bg-surface-light transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  Save Notes
                </button>
              </div>
            </form>

          </div>

        </div>
      </div>

      {/* ── Client-side Interactive Script ── */}
      <script>
        {`
          (function() {
            var leadsData = ${serializedLeads};
            var selectAllCheckbox = document.getElementById('select-all-leads');
            var checkboxes = document.querySelectorAll('.lead-checkbox');
            var bulkBar = document.getElementById('bulk-action-bar');
            var selectedLabel = document.getElementById('selected-count-label');
            var bulkLeadIds = document.getElementById('bulk-lead-ids');
            var bulkForm = document.getElementById('bulk-action-form');
            var bulkDeleteBtn = document.getElementById('btn-bulk-delete');
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

            // Single lead delete confirmations
            document.querySelectorAll('.lead-delete-form').forEach(function(form) {
              form.addEventListener('submit', function(e) {
                if (!confirm('Are you sure you want to permanently delete this lead?')) {
                  e.preventDefault();
                }
              });
            });

            if (bulkDeleteBtn) {
              bulkDeleteBtn.addEventListener('click', function() {
                var ids = getSelectedIds();
                if (ids.length === 0) return;
                if (confirm('Permanently delete ' + ids.length + ' selected lead(s)?')) {
                  document.getElementById('bulk-action-type').value = 'delete';
                  bulkForm.submit();
                }
              });
            }

            // Client-side Instant Excel CSV Export of Selected Rows
            if (exportSelectedBtn) {
              exportSelectedBtn.addEventListener('click', function() {
                var ids = getSelectedIds();
                if (ids.length === 0) {
                  alert('Please select at least one lead to export.');
                  return;
                }
                var selectedLeads = leadsData.filter(function(l) { return ids.indexOf(l.id) !== -1; });
                downloadCsv(selectedLeads, 'bellbee_leads_selected_' + new Date().toISOString().slice(0, 10) + '.csv');
              });
            }

            function downloadCsv(list, filename) {
              var headers = ['Lead ID', 'Date & Time (PKT)', 'Full Name', 'Email', 'Phone', 'Company', 'Source', 'Status', 'Details', 'Notes'];
              var rows = [headers];

              list.forEach(function(l) {
                var dateStr = new Date(l.createdAt).toLocaleString('en-US', { timeZone: 'Asia/Karachi' }) + ' (PKT)';
                rows.push([
                  l.id,
                  dateStr,
                  l.fullName || '',
                  l.email || '',
                  l.phone || '',
                  l.company || '',
                  l.services || '',
                  l.status || '',
                  (l.details || '').replace(/\\n/g, ' | '),
                  (l.notes || '').replace(/\\n/g, ' | ')
                ]);
              });

              var csvContent = '\\uFEFF' + rows.map(function(r) {
                return r.map(function(field) {
                  var escaped = String(field || '').replace(/"/g, '""');
                  return '"' + escaped + '"';
                }).join(',');
              }).join('\\r\\n');

              var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
              var link = document.createElement('a');
              var url = URL.createObjectURL(blob);
              link.setAttribute('href', url);
              link.setAttribute('download', filename);
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }

            // Modal functionality
            var modal = document.getElementById('lead-modal');
            var modalCloseBtn = document.getElementById('modal-close-btn');
            var modalCancelBtn = document.getElementById('modal-cancel-btn');

            document.querySelectorAll('.btn-view-lead').forEach(function(btn) {
              btn.addEventListener('click', function() {
                var dataStr = btn.getAttribute('data-lead');
                if (!dataStr) return;
                var lead = JSON.parse(dataStr);

                document.getElementById('modal-lead-name').textContent = lead.fullName;
                document.getElementById('modal-lead-source').textContent = lead.services || 'General Inquiry';
                document.getElementById('modal-lead-date').textContent = 'Submitted: ' + new Date(lead.createdAt).toLocaleString('en-US', { timeZone: 'Asia/Karachi' }) + ' PKT';
                
                var emailEl = document.getElementById('modal-lead-email');
                emailEl.textContent = lead.email;
                emailEl.href = 'mailto:' + lead.email;

                var phoneEl = document.getElementById('modal-lead-phone');
                var waEl = document.getElementById('modal-lead-wa');
                if (lead.phone) {
                  phoneEl.textContent = lead.phone;
                  waEl.href = 'https://wa.me/' + lead.phone.replace(/[^0-9]/g, '');
                  waEl.classList.remove('hidden');
                } else {
                  phoneEl.textContent = 'None';
                  waEl.classList.add('hidden');
                }

                document.getElementById('modal-lead-details').textContent = lead.details || 'No details specified.';
                document.getElementById('modal-lead-id-input').value = lead.id;
                document.getElementById('modal-notes-textarea').value = lead.notes || '';

                modal.classList.remove('hidden');
              });
            });

            function closeModal() {
              if (modal) modal.classList.add('hidden');
            }

            if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
            if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeModal);
            if (modal) {
              modal.addEventListener('click', function(e) {
                if (e.target === modal) closeModal();
              });
            }

          })();
        `}
      </script>

    </Layout>
  )
}

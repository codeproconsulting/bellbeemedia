import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import { createHash, randomUUID } from 'node:crypto'

import { appwriteLeadsEnabled, appwriteLeadStore } from './appwrite-leads.ts'

export const leadStatuses = ['New', 'Contacted', 'In Discussion', 'Won', 'Lost'] as const
export type LeadStatus = typeof leadStatuses[number]

export interface Lead {
  id: string
  createdAt: string
  fullName: string
  email?: string
  phone?: string
  company?: string
  services?: string
  details?: string
  status: LeadStatus
  notes?: string
  ownerId?: string | null
  source?: 'manual'
  archived?: boolean
}

export interface LeadFilters {
  status?: string
  search?: string
  source?: string
  dateFrom?: string
  dateTo?: string
  dateRange?: string
  assigned?: 'me'
  archived?: 'yes'
}

export type BulkLeadChanges = Pick<Lead, 'status'> | { archived: boolean }
export type LeadChanges = Partial<Pick<Lead, 'status' | 'notes' | 'ownerId' | 'archived'>>
export type LeadEvent = {
  $id: string
  $createdAt: string
  actorId: string
  kind: 'status' | 'notes' | 'owner' | 'archive' | 'restore'
  value?: string | null
}

export function isLegacyAdsEmail(email: string): boolean {
  return /^(?:[0-9]+|lead)@(?:meta|google)-ads\.bellbeemedia\.com$/i.test(email.trim())
}

export function isLeadSubmissionId(value: unknown): value is string {
  return typeof value === 'string' && /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/i.test(value)
}

const DATA_FILE = path.resolve(process.cwd(), 'data', 'leads.json')

// Initial seed leads for immediate dashboard functionality
const INITIAL_SEED_LEADS: Lead[] = [
  {
    id: 'lead-1001',
    createdAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(), // 35 mins ago
    fullName: 'Hamza Farooq',
    email: 'hamza@alnoorproperties.pk',
    phone: '+92 300 8521479',
    company: 'Al Noor Properties Islamabad',
    services: 'SEO Services in Islamabad',
    details: 'SEO Audit Request (Islamabad):\nWebsite: https://alnoorproperties.pk\nPrimary Objective: Dominate Google Maps (Local Islamabad)\nEstimated Budget: ₨300,000 – ₨600,000 / mo\nNotes / Keywords: Real estate in Islamabad, I-8 Markaz commercial shops, DHA properties',
    status: 'New',
  },
  {
    id: 'lead-1002',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
    fullName: 'Sara Qureshi',
    email: 'sara@voguecouture.pk',
    phone: '+92 321 4567890',
    company: 'Vogue Couture PK',
    services: 'Performance Marketing (Meta & Google Ads)',
    details: 'Looking to scale Shopify store monthly ad spend from 500k PKR to 2M PKR. Need creative production and ROAS optimization.',
    status: 'Contacted',
    notes: 'Sent WhatsApp introduction and requested Shopify read-only partner access.',
  },
  {
    id: 'lead-1003',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(), // Yesterday
    fullName: 'Bilal Tariq',
    email: 'btariq@techcloudsoft.com',
    phone: '+92 333 9988776',
    company: 'TechCloud Software',
    services: 'Web Solutions & Full-Funnel SEO',
    details: 'Need Next.js corporate website overhaul and international B2B SaaS keyword rankings targeting US & GCC clients.',
    status: 'In Discussion',
    notes: 'Strategy call booked for Thursday at 3:00 PM via Google Meet.',
  },
  {
    id: 'lead-1004',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days ago
    fullName: 'Dr. Ayesha Malik',
    email: 'info@islamabadskinclinic.com',
    phone: '+92 301 2233445',
    company: 'Islamabad Aesthetics & Dermatology',
    services: 'Social Media Management & Local SEO',
    details: 'Google Maps #1 ranking for aesthetic clinic in F-7 & Blue Area. Also need high-converting Instagram reels.',
    status: 'Won',
    notes: 'Contract signed for 6-month retainer at ₨250,000/month. Onboarding started.',
  },
  {
    id: 'lead-1005',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), // 7 days ago
    fullName: 'Zainab Abbasi',
    email: 'zainab@luxefurniture.pk',
    phone: '+92 345 5566778',
    company: 'Luxe Furniture Rawalpindi',
    services: 'Contact Form Lead',
    details: 'Contact from Rawalpindi Landing Page. Details: Looking for comprehensive brand marketing across Meta ads and Google.',
    status: 'Contacted',
  },
]

async function ensureDataFile(): Promise<void> {
  try {
    await fs.access(DATA_FILE)
  } catch {
    const dir = path.dirname(DATA_FILE)
    await fs.mkdir(dir, { recursive: true })
    await fs.writeFile(DATA_FILE, JSON.stringify(INITIAL_SEED_LEADS, null, 2), 'utf-8')
  }
}

export async function getAllLeads(): Promise<Lead[]> {
  const leads = appwriteLeadsEnabled() ? await appwriteLeadStore('staff').list() : await readJsonLeads()
  return leads.map(withContactEmail)
}

export async function getLead(id: string): Promise<Lead | null> {
  const lead = appwriteLeadsEnabled()
    ? await appwriteLeadStore('staff').get(id)
    : (await readJsonLeads()).find((row) => row.id === id)
  return lead ? withContactEmail(lead) : null
}

function withContactEmail(lead: Lead) {
  return lead.email && isLegacyAdsEmail(lead.email) ? { ...lead, email: undefined } : lead
}

async function readJsonLeads(): Promise<Lead[]> {
  await ensureDataFile()
  const raw = await fs.readFile(DATA_FILE, 'utf-8')
  const list: Lead[] = JSON.parse(raw)
  return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

// shortcut: JSON writers are serialized within one process, use Appwrite for multiple instances.
let jsonWrites = Promise.resolve()

function mutateJsonLeads<T>(mutate: (leads: Lead[]) => T): Promise<T> {
  const write = jsonWrites.then(async () => {
    const leads = await readJsonLeads()
    const result = mutate(leads)
    const temporary = `${DATA_FILE}.${randomUUID()}.tmp`
    try {
      await fs.writeFile(temporary, JSON.stringify(leads, null, 2), { mode: 0o600 })
      await fs.rename(temporary, DATA_FILE)
    } finally {
      await fs.rm(temporary, { force: true })
    }
    return result
  })
  jsonWrites = write.then(() => undefined, () => undefined)
  return write
}

export async function saveLead(data: {
  fullName: string
  email?: string
  phone?: string
  company?: string
  services?: string
  details?: string
}, submissionId?: string, manualOwnerId?: string): Promise<boolean> {
  const newLead: Lead = {
    id: `lead-${randomUUID().replaceAll('-', '').slice(0, 31)}`,
    createdAt: new Date().toISOString(),
    fullName: data.fullName.trim(),
    email: data.email?.trim() || undefined,
    phone: data.phone?.trim() || undefined,
    company: data.company?.trim() || undefined,
    services: data.services?.trim() || 'General Inquiry',
    details: data.details?.trim() || undefined,
    status: 'New',
    ...(manualOwnerId ? { ownerId: manualOwnerId, source: 'manual' as const } : {}),
  }

  if (!newLead.fullName || (!newLead.email && !newLead.phone)) throw new Error('A lead needs a name and a contact method.')
  if (appwriteLeadsEnabled()) {
    // shortcut: older forms use a five-minute bucket, remove this fallback when clients always send a submission ID.
    const window = submissionId ?? Math.floor(Date.parse(newLead.createdAt) / 300_000)
    const fingerprint = JSON.stringify([
      window, newLead.fullName, newLead.email?.toLowerCase(), newLead.company, newLead.phone,
      newLead.services, newLead.details?.replace(/\r\n/g, '\n'),
    ])
    const hash = createHash('sha256')
    if (manualOwnerId) hash.update(JSON.stringify([manualOwnerId]))
    newLead.id = `${manualOwnerId ? 'crm' : 'web'}-${hash.update(fingerprint).digest('hex').slice(0, 32)}`
    return appwriteLeadStore(manualOwnerId ? 'staff' : 'intake').create(newLead)
  }
  if (manualOwnerId) throw new Error('Manual prospects require the Appwrite store.')
  return mutateJsonLeads((leads) => {
    leads.unshift(newLead)
    return true
  })
}

export async function updateLead(
  id: string,
  updates: Partial<Pick<Lead, 'status' | 'notes' | 'ownerId'>>,
  actorId?: string,
): Promise<Lead | null> {
  if (appwriteLeadsEnabled()) return appwriteLeadStore('staff').update(id, updates, actorId)
  return mutateJsonLeads((leads) => {
    const lead = leads.find((row) => row.id === id)
    return lead ? Object.assign(lead, updates) : null
  })
}

export async function updateBulkLeads(ids: string[], changes: BulkLeadChanges, actorId?: string): Promise<number> {
  if (!ids.length) return 0
  if (appwriteLeadsEnabled()) return appwriteLeadStore('staff').bulk(ids, changes, actorId)
  const selected = new Set(ids)
  return mutateJsonLeads((leads) => {
    const matches = leads.filter((lead) => selected.has(lead.id))
    for (const lead of matches) Object.assign(lead, changes)
    return matches.length
  })
}

export function filterLeads(leads: Lead[], filters: LeadFilters, staffId?: string): Lead[] {
  let result = leads.filter((lead) => (lead.archived === true) === (filters.archived === 'yes'))

  if (filters.assigned === 'me') {
    if (!staffId) return []
    result = result.filter((lead) => lead.ownerId === staffId)
  }

  // Status Filter
  if (filters.status && filters.status !== 'All') {
    result = result.filter((l) => l.status === filters.status)
  }

  // Source / Service Filter
  if (filters.source && filters.source !== 'All') {
    const source = filters.source.toLowerCase()
    result = result.filter((lead) => source === 'manual' ? lead.source === 'manual' : lead.services?.toLowerCase().includes(source))
  }

  // Date Range Presets
  const now = new Date()
  if (filters.dateRange && filters.dateRange !== 'All') {
    if (filters.dateRange === 'Today') {
      const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Karachi' }).format(now)
      const todayStart = Date.parse(today + 'T00:00:00+05:00')
      result = result.filter((l) => new Date(l.createdAt).getTime() >= todayStart)
    } else if (filters.dateRange === '7days') {
      const sevenDaysAgo = now.getTime() - 7 * 24 * 60 * 60 * 1000
      result = result.filter((l) => new Date(l.createdAt).getTime() >= sevenDaysAgo)
    } else if (filters.dateRange === '30days') {
      const thirtyDaysAgo = now.getTime() - 30 * 24 * 60 * 60 * 1000
      result = result.filter((l) => new Date(l.createdAt).getTime() >= thirtyDaysAgo)
    } else if (filters.dateRange === 'month') {
      const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Karachi' }).format(now)
      const monthStart = Date.parse(today.slice(0, 7) + '-01T00:00:00+05:00')
      result = result.filter((l) => new Date(l.createdAt).getTime() >= monthStart)
    }
  }

  // Custom Date From
  if (filters.dateFrom) {
    const fromTime = Date.parse(filters.dateFrom + 'T00:00:00+05:00')
    if (!Number.isNaN(fromTime)) {
      result = result.filter((l) => new Date(l.createdAt).getTime() >= fromTime)
    }
  }

  // Custom Date To
  if (filters.dateTo) {
    const toTime = Date.parse(filters.dateTo + 'T23:59:59.999+05:00')
    if (!Number.isNaN(toTime)) {
      result = result.filter((l) => new Date(l.createdAt).getTime() <= toTime)
    }
  }

  // Free-text Search
  if (filters.search && filters.search.trim()) {
    const q = filters.search.trim().toLowerCase()
    result = result.filter(
      (l) =>
        l.fullName.toLowerCase().includes(q) ||
        l.email?.toLowerCase().includes(q) ||
        (l.phone && l.phone.toLowerCase().includes(q)) ||
        (l.company && l.company.toLowerCase().includes(q)) ||
        (l.services && l.services.toLowerCase().includes(q)) ||
        (l.details && l.details.toLowerCase().includes(q)) ||
        (l.notes && l.notes.toLowerCase().includes(q)),
    )
  }

  return result
}

/**
 * Generate CSV with UTF-8 BOM so Microsoft Excel opens it directly without character distortion.
 */
export function generateLeadsCsv(leads: Lead[]): string {
  const headers = [
    'Lead ID',
    'Date & Time (PKT)',
    'Full Name',
    'Email Address',
    'Phone / WhatsApp',
    'Company',
    'Service / Source',
    'Status',
    'Details / Message',
    'Internal Notes',
    'Intake Channel',
    'Archived',
  ]

  const escapeCsv = (val: string | undefined): string => {
    if (val === undefined || val === null) return '""'
    const prefix = /^(?:\s*[=+@-]|[\t\r\n])/.test(val) ? "'" : ''
    const str = val.replace(/"/g, '""').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
    return `"${prefix}${str}"`
  }

  const rows = leads.map((l) => [
    escapeCsv(l.id),
    escapeCsv(new Date(l.createdAt).toLocaleString('en-US', { timeZone: 'Asia/Karachi' }) + ' (PKT)'),
    escapeCsv(l.fullName),
    escapeCsv(l.email),
    escapeCsv(l.phone || ''),
    escapeCsv(l.company || ''),
    escapeCsv(l.services || ''),
    escapeCsv(l.status),
    escapeCsv(l.details || ''),
    escapeCsv(l.notes || ''),
    escapeCsv(l.source === 'manual' ? 'Manual prospect' : ''),
    escapeCsv(l.archived ? 'Yes' : 'No'),
  ])

  // \uFEFF is the UTF-8 Byte Order Mark for Excel
  return '\uFEFF' + [headers.map((h) => `"${h}"`).join(','), ...rows.map((r) => r.join(','))].join('\r\n')
}

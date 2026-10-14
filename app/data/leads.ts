import * as fs from 'node:fs/promises'
import * as path from 'node:path'

export type LeadStatus = 'New' | 'Contacted' | 'In Discussion' | 'Won' | 'Lost'

export interface Lead {
  id: string
  createdAt: string
  fullName: string
  email: string
  phone?: string
  company?: string
  services?: string
  details?: string
  status: LeadStatus
  notes?: string
}

export interface LeadFilters {
  status?: string
  search?: string
  source?: string
  dateFrom?: string
  dateTo?: string
  dateRange?: string
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
  await ensureDataFile()
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8')
    const list: Lead[] = JSON.parse(raw)
    return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  } catch (error) {
    console.error('[Leads] Error reading leads file:', error)
    return []
  }
}

export async function saveLead(data: {
  fullName: string
  email: string
  phone?: string
  company?: string
  services?: string
  details?: string
}): Promise<Lead> {
  await ensureDataFile()
  const leads = await getAllLeads()

  const newLead: Lead = {
    id: `lead-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
    createdAt: new Date().toISOString(),
    fullName: data.fullName.trim(),
    email: data.email.trim(),
    phone: data.phone?.trim() || undefined,
    company: data.company?.trim() || undefined,
    services: data.services?.trim() || 'General Inquiry',
    details: data.details?.trim() || undefined,
    status: 'New',
  }

  leads.unshift(newLead)
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8')
  return newLead
}

export async function updateLead(
  id: string,
  updates: Partial<Pick<Lead, 'status' | 'notes'>>,
): Promise<Lead | null> {
  await ensureDataFile()
  const leads = await getAllLeads()
  const idx = leads.findIndex((l) => l.id === id)
  if (idx === -1) return null

  leads[idx] = {
    ...leads[idx],
    ...updates,
  }

  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8')
  return leads[idx]
}

export async function updateBulkStatus(ids: string[], status: LeadStatus): Promise<number> {
  if (!ids.length) return 0
  await ensureDataFile()
  const leads = await getAllLeads()
  let count = 0

  for (const lead of leads) {
    if (ids.includes(lead.id)) {
      lead.status = status
      count++
    }
  }

  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), 'utf-8')
  return count
}

export async function deleteLeads(ids: string[]): Promise<number> {
  if (!ids.length) return 0
  await ensureDataFile()
  const leads = await getAllLeads()
  const filtered = leads.filter((l) => !ids.includes(l.id))
  const deletedCount = leads.length - filtered.length
  await fs.writeFile(DATA_FILE, JSON.stringify(filtered, null, 2), 'utf-8')
  return deletedCount
}

export function filterLeads(leads: Lead[], filters: LeadFilters): Lead[] {
  let result = [...leads]

  // Status Filter
  if (filters.status && filters.status !== 'All') {
    result = result.filter((l) => l.status === filters.status)
  }

  // Source / Service Filter
  if (filters.source && filters.source !== 'All') {
    result = result.filter((l) => l.services?.toLowerCase().includes(filters.source!.toLowerCase()))
  }

  // Date Range Presets
  const now = new Date()
  if (filters.dateRange && filters.dateRange !== 'All') {
    if (filters.dateRange === 'Today') {
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
      result = result.filter((l) => new Date(l.createdAt).getTime() >= todayStart)
    } else if (filters.dateRange === '7days') {
      const sevenDaysAgo = now.getTime() - 7 * 24 * 60 * 60 * 1000
      result = result.filter((l) => new Date(l.createdAt).getTime() >= sevenDaysAgo)
    } else if (filters.dateRange === '30days') {
      const thirtyDaysAgo = now.getTime() - 30 * 24 * 60 * 60 * 1000
      result = result.filter((l) => new Date(l.createdAt).getTime() >= thirtyDaysAgo)
    } else if (filters.dateRange === 'month') {
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime()
      result = result.filter((l) => new Date(l.createdAt).getTime() >= monthStart)
    }
  }

  // Custom Date From
  if (filters.dateFrom) {
    const fromTime = new Date(filters.dateFrom).getTime()
    if (!Number.isNaN(fromTime)) {
      result = result.filter((l) => new Date(l.createdAt).getTime() >= fromTime)
    }
  }

  // Custom Date To
  if (filters.dateTo) {
    const toDate = new Date(filters.dateTo)
    toDate.setHours(23, 59, 59, 999)
    const toTime = toDate.getTime()
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
        l.email.toLowerCase().includes(q) ||
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
    'Date & Time (UTC)',
    'Full Name',
    'Email Address',
    'Phone / WhatsApp',
    'Company',
    'Service / Source',
    'Status',
    'Details / Message',
    'Internal Notes',
  ]

  const escapeCsv = (val: string | undefined): string => {
    if (val === undefined || val === null) return '""'
    const str = String(val).replace(/"/g, '""').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
    return `"${str}"`
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
  ])

  // \uFEFF is the UTF-8 Byte Order Mark for Excel
  return '\uFEFF' + [headers.map((h) => `"${h}"`).join(','), ...rows.map((r) => r.join(','))].join('\r\n')
}

import { readFile } from 'node:fs/promises'
import { appwriteRows } from '../app/data/appwrite-leads.ts'
import { isLegacyAdsEmail, leadStatuses } from '../app/data/leads.ts'

const requiredText = { fullName: 512 }
const optionalText = { email: 512, phone: 256, company: 512, services: 2048, details: 65535, notes: 65535 }
const rowIdPattern = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,35}$/

export function prepareLeads(input: unknown) {
  if (!Array.isArray(input)) throw new Error('Expected an array of BellBee leads.')
  const seen = new Set<string>()

  return input.map((entry: unknown, index) => {
    const position = `Record ${index + 1}`
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      throw new Error(`${position} must be an object.`)
    }
    const source = entry as Record<string, unknown>
    const { id, createdAt, status } = source
    if (typeof id !== 'string' || !rowIdPattern.test(id) || seen.has(id)) {
      throw new Error(`${position} has an invalid or duplicate ID.`)
    }
    seen.add(id)
    const time = typeof createdAt === 'string' ? Date.parse(createdAt) : NaN
    if (!Number.isFinite(time) || new Date(time).toISOString() !== createdAt) {
      throw new Error(`${position} must have a canonical UTC timestamp.`)
    }
    if (!leadStatuses.some((value) => value === status)) {
      throw new Error(`${position} has an unknown status.`)
    }

    const data: Record<string, string | null> = { createdAt: createdAt as string, status: status as string }
    for (const [key, max] of Object.entries(requiredText)) {
      const value = source[key]
      if (typeof value !== 'string' || !value.trim() || value.length > max) {
        throw new Error(`${position} has an invalid ${key}.`)
      }
      data[key] = value
    }
    for (const [key, max] of Object.entries(optionalText)) {
      const value = source[key] ?? null
      if (value !== null && (typeof value !== 'string' || value.length > max)) {
        throw new Error(`${position} has an invalid ${key}.`)
      }
      data[key] = value
    }
    if (!data.email?.trim() || isLegacyAdsEmail(data.email)) data.email = null
    if (!data.email && !data.phone?.trim()) {
      throw new Error(`${position} needs an email or phone number.`)
    }
    const archived = source.archived
    if (archived !== undefined && typeof archived !== 'boolean') {
      throw new Error(`${position} has an invalid archive flag.`)
    }
    const rowData: Record<string, string | boolean | null> = { ...data }
    if (archived !== undefined) rowData.archived = archived
    return { rowId: id, data: rowData }
  })
}

export async function importLeads(
  leads: ReturnType<typeof prepareLeads>,
  config: { endpoint: string; projectId: string; apiKey: string; databaseId: string; tableId: string },
  request = fetch,
) {
  const { url: rowsUrl, headers } = appwriteRows(config)
  let created = 0
  let matched = 0
  for (const [index, lead] of leads.entries()) {
    const response = await request(rowsUrl, {
      method: 'POST', headers, body: JSON.stringify(lead), redirect: 'error', signal: AbortSignal.timeout(15000),
    })
    if (response.status === 201) {
      await response.body?.cancel()
      created++
      continue
    }
    await response.body?.cancel()
    if (response.status !== 409) {
      throw new Error(`Record ${index + 1} failed with Appwrite HTTP ${response.status}.`)
    }

    const row = await request(`${rowsUrl}/${encodeURIComponent(lead.rowId)}`, {
      headers, redirect: 'error', signal: AbortSignal.timeout(15000),
    })
    if (!row.ok) {
      await row.body?.cancel()
      throw new Error(`Could not verify record ${index + 1} after a conflict (HTTP ${row.status}).`)
    }
    const existing = await row.json() as Record<string, unknown>
    const identical = Object.entries(lead.data).every(([key, value]) => {
      const previous = existing[key]
      if (key === 'archived') return (previous === true) === value
      if (key === 'createdAt' && typeof previous === 'string' && typeof value === 'string') {
        return Date.parse(previous) === Date.parse(value)
      }
      return (previous ?? null) === value
    })
    if (existing.$id !== lead.rowId || !identical) {
      throw new Error(`Record ${index + 1} already exists with different values. Reconcile it before retrying.`)
    }
    matched++
  }
  return { created, matched }
}

function requiredEnv(name: string) {
  const value = process.env[name]?.trim()
  if (!value) throw new Error(`${name} is required with --apply.`)
  return value
}

if (import.meta.main) {
  try {
    const [file, mode, ...extra] = process.argv.slice(2)
    if (!file || file.startsWith('-') || (mode && mode !== '--apply') || extra.length) {
      throw new Error('Usage: node scripts/import-crm-leads.ts <reviewed-bellbee-leads.json> [--apply]')
    }
    const leads = prepareLeads(JSON.parse(await readFile(file, 'utf8')))
    if (mode === '--apply') {
      const result = await importLeads(leads, {
        endpoint: requiredEnv('APPWRITE_ENDPOINT'),
        projectId: requiredEnv('APPWRITE_PROJECT_ID'),
        apiKey: requiredEnv('APPWRITE_IMPORT_KEY'),
        databaseId: requiredEnv('APPWRITE_DATABASE_ID'),
        tableId: requiredEnv('APPWRITE_LEADS_TABLE_ID'),
      })
      console.log(`Appwrite import complete. Created ${result.created}, matched ${result.matched}.`)
    } else {
      console.log(`Dry run complete. Validated ${leads.length} BellBee lead records.`)
    }
  } catch (error) {
    const message = error instanceof SyntaxError ? 'The input could not be parsed.' :
      error instanceof Error ? error.message : 'Import failed.'
    console.error(message)
    process.exitCode = 1
  }
}

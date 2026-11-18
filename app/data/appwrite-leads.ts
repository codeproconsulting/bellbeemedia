import { randomUUID } from 'node:crypto'
import type { BulkLeadChanges, Lead, LeadChanges, LeadEvent } from './leads.ts'

const rowIdPattern = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,35}$/
const pageSize = 100

export function appwriteLeadsEnabled() {
  return process.env.CRM_LEAD_STORE === 'appwrite'
}

export function appwriteEndpoint(value: string) {
  const endpoint = new URL(value)
  if (endpoint.protocol !== 'https:' || endpoint.pathname.replace(/\/$/, '') !== '/v1' ||
      endpoint.username || endpoint.password || endpoint.search || endpoint.hash) {
    throw new Error('Use an HTTPS Appwrite endpoint ending in /v1.')
  }
  return endpoint
}

export function appwriteRows(config: {
  endpoint: string; projectId: string; apiKey: string; databaseId: string; tableId: string
}) {
  const endpoint = appwriteEndpoint(config.endpoint)
  if (![config.databaseId, config.tableId].every((id) => rowIdPattern.test(id))) {
    throw new Error('Invalid Appwrite database or table ID.')
  }
  const url = new URL(`/v1/tablesdb/${config.databaseId}/tables/${config.tableId}/rows`, endpoint)
  const headers = {
    'Content-Type': 'application/json',
    'X-Appwrite-Project': config.projectId,
    'X-Appwrite-Key': config.apiKey,
    'X-Appwrite-Response-Format': '2.7.0',
  }
  return { url, headers }
}

export function appwriteLeadStore(access: 'intake' | 'staff') {
  const { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_DATABASE_ID, APPWRITE_LEADS_TABLE_ID } = process.env
  const apiKey = access === 'intake' ? process.env.APPWRITE_INTAKE_KEY : process.env.APPWRITE_STAFF_KEY
  if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT_ID || !APPWRITE_DATABASE_ID || !APPWRITE_LEADS_TABLE_ID || !apiKey) {
    throw new Error(`Missing Appwrite leads configuration for ${access}.`)
  }
  const { url, headers } = appwriteRows({
    endpoint: APPWRITE_ENDPOINT, projectId: APPWRITE_PROJECT_ID, databaseId: APPWRITE_DATABASE_ID,
    tableId: APPWRITE_LEADS_TABLE_ID, apiKey,
  })

  async function request<T>(target: URL, method: string, body?: object): Promise<T | null> {
    const response = await fetch(target, {
      method, headers, body: body && JSON.stringify(body), redirect: 'error', signal: AbortSignal.timeout(10000),
    })
    if (!response.ok) {
      const error = await response.json().catch(() => null) as { type?: string } | null
      if (response.status === 404 && error?.type === 'row_not_found') return null
      if (method === 'POST' && response.status === 409 && error?.type === 'row_already_exists') return null
      throw new Error(`Appwrite lead request failed (HTTP ${response.status}).`)
    }
    return await response.json() as T
  }

  type Row = Omit<Lead, 'id'> & { $id: string }
  type RowList = { total: number; rows: Row[] }

  const eventsTable = process.env.APPWRITE_LEAD_EVENTS_TABLE_ID
  const eventsUrl = eventsTable && access === 'staff' ? appwriteRows({
    endpoint: APPWRITE_ENDPOINT, projectId: APPWRITE_PROJECT_ID, databaseId: APPWRITE_DATABASE_ID,
    tableId: eventsTable, apiKey,
  }).url : undefined

  async function withHistory<T>(
    actorId: string | undefined,
    changes: LeadChanges,
    stage: (transactionId?: string) => Promise<{ result: T; ids: string[] }>,
  ) {
    if (!eventsUrl || !actorId) return (await stage()).result

    const transaction = await request<{ $id: string }>(new URL('/v1/tablesdb/transactions', url), 'POST', { ttl: 60 })
    if (!transaction || !rowIdPattern.test(transaction.$id)) throw new Error('Appwrite did not open a lead transaction.')
    const transactionId = transaction.$id
    const target = new URL(`/v1/tablesdb/transactions/${transactionId}`, url)
    try {
      const { result, ids } = await stage(transactionId)
      if (!ids.length) {
        await request(target, 'PATCH', { rollback: true })
        return result
      }
      const event: Pick<LeadEvent, 'kind' | 'value'> = 'status' in changes ? { kind: 'status', value: changes.status } :
        'ownerId' in changes ? { kind: 'owner', value: changes.ownerId } :
        'archived' in changes ? { kind: changes.archived ? 'archive' : 'restore' } : { kind: 'notes' }
      const operations = ids.map((leadId) => ({
        action: 'create', databaseId: APPWRITE_DATABASE_ID, tableId: eventsTable,
        rowId: randomUUID().replaceAll('-', ''), data: { leadId, actorId, ...event },
      }))
      const staged = await request(new URL(`${target}/operations`), 'POST', { operations })
      if (!staged) throw new Error('Appwrite did not stage lead history.')
      const commit = await request<{ status: string }>(target, 'PATCH', { commit: true })
      if (commit?.status !== 'committed') throw new Error('Appwrite did not commit the lead transaction.')
      return result
    } catch (error) {
      await request(target, 'PATCH', { rollback: true }).catch(() => {})
      throw error
    }
  }

  function affectedRows(result: RowList, transactionId?: string) {
    if (!transactionId) return []
    if (result.rows.length !== result.total) throw new Error('Appwrite did not identify all changed leads.')
    return result.rows.map((row) => row.$id)
  }

  function toLead(row: Row): Lead {
    return {
      id: row.$id, createdAt: row.createdAt, fullName: row.fullName, email: row.email ?? undefined, status: row.status,
      phone: row.phone ?? undefined, company: row.company ?? undefined, services: row.services ?? undefined,
      details: row.details ?? undefined, notes: row.notes ?? undefined, ownerId: row.ownerId ?? undefined,
      source: row.source ?? undefined,
      archived: row.archived ?? undefined,
    }
  }

  return {
    async history(id: string, before?: string) {
      if (!eventsUrl || !rowIdPattern.test(id)) return undefined
      if (before && !rowIdPattern.test(before)) throw new Error('Invalid history cursor.')
      const target = new URL(eventsUrl)
      target.searchParams.set('total', 'false')
      const queries = [
        { method: 'equal', attribute: 'leadId', values: [id] },
        { method: 'orderDesc', attribute: '$sequence' },
        { method: 'limit', values: [51] },
        ...(before ? [{ method: 'cursorAfter', values: [before] }] : []),
      ]
      queries.forEach((query, index) => target.searchParams.set(`queries[${index}]`, JSON.stringify(query)))
      const result = await request<{ rows: LeadEvent[] }>(target, 'GET')
      if (!result) throw new Error('Appwrite could not load lead history.')
      return { events: result.rows.slice(0, 50), next: result.rows.length > 50 ? result.rows[49].$id : undefined }
    },
    async list() {
      const result: Lead[] = []
      let cursor: string | undefined
      do {
        const target = new URL(url)
        target.searchParams.set('total', 'false')
        const queries = [
          { method: 'limit', values: [pageSize] },
          { method: 'orderAsc', attribute: '$sequence' },
          ...(cursor ? [{ method: 'cursorAfter', values: [cursor] }] : []),
        ]
        queries.forEach((query, index) => target.searchParams.set(`queries[${index}]`, JSON.stringify(query)))
        const page = await request<{ rows: Row[] }>(target, 'GET')
        if (!page) throw new Error('Appwrite leads could not be listed.')
        result.push(...page.rows.map(toLead))
        const next = page.rows.length === pageSize ? page.rows.at(-1)?.$id : undefined
        if (next && next === cursor) throw new Error('Appwrite did not advance the lead cursor.')
        cursor = next
      } while (cursor)

      // shortcut: filters run on the full lead list, move filtering and UI pagination to TablesDB as volume grows.
      return result.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    },
    async create(lead: Lead) {
      const { id, ...data } = lead
      return (await request<Row>(url, 'POST', { rowId: id, data })) !== null
    },
    async get(id: string) {
      if (!rowIdPattern.test(id)) return null
      const row = await request<Row>(new URL(`${url}/${id}`), 'GET')
      return row && toLead(row)
    },
    async update(id: string, data: Partial<Pick<Lead, 'status' | 'notes' | 'ownerId'>>, actorId?: string) {
      if (!rowIdPattern.test(id)) return null
      return withHistory(actorId, data, async (transactionId) => {
        const row = await request<Row>(new URL(`${url}/${id}`), 'PATCH', { data, transactionId })
        return { result: row && toLead(row), ids: row ? [id] : [] }
      })
    },
    async updateOwned(id: string, ownerId: string, data: Partial<Pick<Lead, 'status' | 'notes'>>) {
      if (!rowIdPattern.test(id)) return false
      const queries = [
        JSON.stringify({ method: 'equal', attribute: '$id', values: [id] }),
        JSON.stringify({ method: 'equal', attribute: 'ownerId', values: [ownerId] }),
      ]
      return withHistory(ownerId, data, async (transactionId) => {
        const result = await request<RowList>(url, 'PATCH', { queries, data, transactionId })
        return { result: result?.total === 1, ids: result ? affectedRows(result, transactionId) : [] }
      })
    },
    async bulk(ids: string[], data: BulkLeadChanges, actorId?: string) {
      const selected = [...new Set(ids.filter((id) => rowIdPattern.test(id)))]
      let count = 0
      const batchSize = eventsUrl && actorId ? 25 : pageSize
      for (let index = 0; index < selected.length; index += batchSize) {
        const queries = [JSON.stringify({ method: 'equal', attribute: '$id', values: selected.slice(index, index + batchSize) })]
        count += await withHistory(actorId, data, async (transactionId) => {
          const result = await request<RowList>(url, 'PATCH', { queries, data, transactionId })
          if (!result) throw new Error('Appwrite bulk lead request did not return a result.')
          return { result: result.total, ids: affectedRows(result, transactionId) }
        })
      }
      return count
    },
  }
}

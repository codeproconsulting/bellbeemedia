import type { Lead } from './leads.ts'

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
      if (method === 'PATCH' && response.status === 404 && error?.type === 'row_not_found') return null
      if (method === 'POST' && response.status === 409 && error?.type === 'row_already_exists') return null
      throw new Error(`Appwrite lead request failed (HTTP ${response.status}).`)
    }
    return await response.json() as T
  }

  type Row = Omit<Lead, 'id'> & { $id: string }
  function toLead(row: Row): Lead {
    return {
      id: row.$id, createdAt: row.createdAt, fullName: row.fullName, email: row.email ?? undefined, status: row.status,
      phone: row.phone ?? undefined, company: row.company ?? undefined, services: row.services ?? undefined,
      details: row.details ?? undefined, notes: row.notes ?? undefined, ownerId: row.ownerId ?? undefined,
    }
  }

  return {
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
    async update(id: string, data: Partial<Pick<Lead, 'status' | 'notes' | 'ownerId'>>) {
      if (!rowIdPattern.test(id)) return null
      const row = await request<Row>(new URL(`${url}/${id}`), 'PATCH', { data })
      return row && toLead(row)
    },
    async updateOwned(id: string, ownerId: string, data: Partial<Pick<Lead, 'status' | 'notes'>>) {
      if (!rowIdPattern.test(id)) return false
      const queries = [
        JSON.stringify({ method: 'equal', attribute: '$id', values: [id] }),
        JSON.stringify({ method: 'equal', attribute: 'ownerId', values: [ownerId] }),
      ]
      const result = await request<{ total: number }>(url, 'PATCH', { queries, data })
      return result?.total === 1
    },
    async bulk(ids: string[], data?: Pick<Lead, 'status'>) {
      const selected = [...new Set(ids.filter((id) => rowIdPattern.test(id)))]
      let count = 0
      for (let index = 0; index < selected.length; index += pageSize) {
        const queries = [JSON.stringify({ method: 'equal', attribute: '$id', values: selected.slice(index, index + pageSize) })]
        const result = await request<{ total: number }>(url, data ? 'PATCH' : 'DELETE', { queries, data })
        if (!result) throw new Error('Appwrite bulk lead request did not return a result.')
        count += result.total
      }
      return count
    },
  }
}

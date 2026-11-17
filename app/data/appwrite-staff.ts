import { appwriteEndpoint } from './appwrite-leads.ts'

const cookieName = '__Host-bellbee_crm_session'
const cookieAttributes = 'Path=/; HttpOnly; Secure; SameSite=Strict'
const cookieValuePattern = /^[A-Za-z0-9._~+\/=-]{1,4096}$/

export function appwriteStaffConfig() {
  const { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, APPWRITE_SESSION_KEY,
    APPWRITE_CRM_TEAM_ID, CRM_PUBLIC_ORIGIN } = process.env
  if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT_ID || !APPWRITE_SESSION_KEY ||
      !APPWRITE_CRM_TEAM_ID || !CRM_PUBLIC_ORIGIN) {
    throw new Error('Missing Appwrite staff sign-in configuration.')
  }

  const origin = new URL(CRM_PUBLIC_ORIGIN)
  if (origin.protocol !== 'https:' || origin.origin !== CRM_PUBLIC_ORIGIN) {
    throw new Error('CRM_PUBLIC_ORIGIN must be an HTTPS origin without a trailing slash.')
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]{0,35}$/.test(APPWRITE_CRM_TEAM_ID)) {
    throw new Error('Invalid Appwrite CRM team ID.')
  }
  return {
    endpoint: appwriteEndpoint(APPWRITE_ENDPOINT), project: APPWRITE_PROJECT_ID, key: APPWRITE_SESSION_KEY,
    team: APPWRITE_CRM_TEAM_ID, origin: origin.origin,
  }
}

function sessionFrom(request: Request) {
  const cookie = request.headers.get('cookie')?.split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${cookieName}=`))
  const secret = cookie?.slice(cookieName.length + 1)
  return secret && cookieValuePattern.test(secret) ? secret : undefined
}

function appwriteAuthRequest(path: string, auth: { key: string } | { secret: string }, init?: RequestInit) {
  const { endpoint, project } = appwriteStaffConfig()
  return fetch(new URL(`/v1/${path}`, endpoint), {
    ...init,
    headers: {
      'X-Appwrite-Project': project,
      'X-Appwrite-Response-Format': '2.7.0',
      ...('key' in auth ? { 'X-Appwrite-Key': auth.key } : { 'X-Appwrite-Session': auth.secret }),
      ...init?.headers,
    },
    redirect: 'error',
    signal: AbortSignal.timeout(10000),
  })
}

async function revokeSession(secret: string) {
  const response = await appwriteAuthRequest('account/sessions/current', { secret }, { method: 'DELETE' })
  await response.body?.cancel()
  if (!response.ok && ![401, 404].includes(response.status)) {
    throw new Error('Appwrite could not revoke the CRM session.')
  }
}

export async function signInCrmStaff(email: string, password: string) {
  if (!email || email.length > 254 || !password || password.length > 256) return null
  const { key } = appwriteStaffConfig()
  const response = await appwriteAuthRequest('account/sessions/email', { key }, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }),
  })
  if (!response.ok) {
    await response.body?.cancel()
    if ([400, 401, 403].includes(response.status)) return null
    throw new Error('Appwrite staff sign-in is unavailable.')
  }

  const session = await response.json() as { secret?: string; expire?: string }
  const maxAge = Math.floor((Date.parse(session.expire ?? '') - Date.now()) / 1000)
  if (!session.secret || !cookieValuePattern.test(session.secret) || !Number.isFinite(maxAge) || maxAge <= 0) {
    throw new Error('Appwrite returned an invalid staff session.')
  }
  let granted = false
  try {
    granted = Boolean(await staffAccess(session.secret))
    return granted ? `${cookieName}=${session.secret}; ${cookieAttributes}; Max-Age=${maxAge}` : null
  } finally {
    if (!granted) {
      await revokeSession(session.secret).catch(() => console.error('[CRM] Could not revoke an unissued session.'))
    }
  }
}

export type CrmRole = 'admin' | 'member' | 'viewer'

type CrmStaff = { id: string; name: string; role: CrmRole }

function crmRole(roles: string[]): CrmRole | undefined {
  if (roles.includes('owner') || roles.includes('admin')) return 'admin'
  if (roles.includes('member')) return 'member'
  if (roles.includes('viewer')) return 'viewer'
}

async function getStaffAccount(secret: string) {
  const response = await appwriteAuthRequest('account', { secret })
  if (!response.ok) {
    await response.body?.cancel()
    if ([401, 403].includes(response.status)) return undefined
    throw new Error('Appwrite could not identify the CRM staff member.')
  }
  const account = await response.json() as { $id?: string }
  return account.$id || undefined
}

async function listCrmStaff(secret: string) {
  const { team } = appwriteStaffConfig()
  const staff: CrmStaff[] = []
  const pageSize = 100
  let cursor: string | undefined
  do {
    const params = new URLSearchParams({ 'queries[0]': JSON.stringify({ method: 'limit', values: [pageSize] }) })
    if (cursor) params.set('queries[1]', JSON.stringify({ method: 'cursorAfter', values: [cursor] }))
    const response = await appwriteAuthRequest(`teams/${team}/memberships?${params}`, { secret })
    if (!response.ok) {
      await response.body?.cancel()
      if ([401, 403, 404].includes(response.status)) return []
      throw new Error('Appwrite could not list CRM staff.')
    }
    const { memberships } = await response.json() as {
      memberships: { $id: string; teamId: string; userId: string; userName?: string; confirm: boolean; roles: string[] }[]
    }
    for (const member of memberships) {
      if (!member.confirm || member.teamId !== team || !member.userId) continue
      const role = crmRole(member.roles)
      if (role) staff.push({ id: member.userId, name: member.userName || member.userId, role })
    }
    const next = memberships.length === pageSize ? memberships.at(-1)?.$id : undefined
    if (next && next === cursor) throw new Error('Appwrite did not advance the staff cursor.')
    cursor = next
  } while (cursor)
  return staff.sort((a, b) => a.name.localeCompare(b.name))
}

async function staffAccess(secret: string) {
  const id = await getStaffAccount(secret)
  if (!id) return null
  const staff = await listCrmStaff(secret)
  const account = staff.find((member) => member.id === id)
  return account ? { role: account.role, id, staff } : null
}

export async function getCrmStaff(request: Request) {
  const secret = sessionFrom(request)
  return secret ? staffAccess(secret) : null
}

export async function signOutCrmStaff(request: Request) {
  const secret = sessionFrom(request)
  if (secret) await revokeSession(secret)
  return `${cookieName}=; ${cookieAttributes}; Max-Age=0`
}

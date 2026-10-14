import * as crypto from 'node:crypto'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'bellbee2026'
const AUTH_SECRET = process.env.ADMIN_AUTH_SECRET || 'bellbee_media_secret_token_salt_2026'
const COOKIE_NAME = 'bellbee_admin_session'

export function verifyPassword(password: string): boolean {
  if (!password) return false
  return password.trim() === ADMIN_PASSWORD.trim()
}

export function generateSessionToken(): string {
  const timestamp = Date.now().toString()
  const hash = crypto.createHmac('sha256', AUTH_SECRET).update(timestamp).digest('hex')
  return `${timestamp}.${hash}`
}

export function verifySessionToken(token: string | null | undefined): boolean {
  if (!token || !token.includes('.')) return false
  const [timestamp, hash] = token.split('.')
  const time = Number.parseInt(timestamp, 10)
  if (Number.isNaN(time)) return false

  // Max session age: 30 days
  const maxAge = 30 * 24 * 60 * 60 * 1000
  if (Date.now() - time > maxAge) return false

  const expectedHash = crypto.createHmac('sha256', AUTH_SECRET).update(timestamp).digest('hex')
  return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(expectedHash))
}

export function parseCookies(cookieHeader: string | null): Record<string, string> {
  if (!cookieHeader) return {}
  const cookies: Record<string, string> = {}
  for (const part of cookieHeader.split(';')) {
    const [k, ...v] = part.trim().split('=')
    if (k) {
      cookies[k] = decodeURIComponent(v.join('='))
    }
  }
  return cookies
}

export function isAuthenticated(request: Request): boolean {
  const cookieHeader = request.headers.get('cookie')
  const cookies = parseCookies(cookieHeader)
  const token = cookies[COOKIE_NAME]
  return verifySessionToken(token)
}

export function getSessionCookieHeader(token: string): string {
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${30 * 24 * 60 * 60}`
}

export function getLogoutCookieHeader(): string {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
}

import { type Handle } from 'remix/ui'
import { Layout } from '../layout.tsx'

interface LoginPageProps {
  error?: string
  redirectUrl?: string
}

export function LoginPage(handle: Handle<LoginPageProps>) {
  const { error, redirectUrl = '/admin' } = handle.props

  return () => (
    <Layout
      title="Admin Login | BellBee Media"
      description="Administrative access portal for BellBee Media."
    >
      <section class="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-surface-light relative overflow-hidden">
        {/* Glow ambient effects */}
        <div class="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="w-full max-w-md relative z-10">
          <div class="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-2xl">
            
            {/* Header */}
            <div class="text-center mb-8">
              <div class="w-16 h-16 rounded-2xl bg-surface-dark0 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-surface-dark0/20">
                <i class="ph-fill ph-shield-check text-secondary text-3xl"></i>
              </div>
              <h1 class="text-2xl font-black text-foreground tracking-tight">Admin Portal</h1>
              <p class="text-xs text-muted mt-1">Enter your master password to access leads & analytics</p>
            </div>

            {/* Error Message */}
            {error && (
              <div class="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <i class="ph-bold ph-warning-circle text-base shrink-0"></i>
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form method="POST" action="/admin/login" class="space-y-5">
              <input type="hidden" name="redirectUrl" value={redirectUrl} />

              <div>
                <label for="password" class="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wider">
                  Admin Master Password
                </label>
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
                    <i class="ph-bold ph-lock text-base"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    autofocus
                    placeholder="••••••••••••"
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-surface-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                class="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Sign In to Dashboard</span>
                <i class="ph-bold ph-arrow-right"></i>
              </button>

              <div class="pt-4 text-center border-t border-border/60">
                <a href="/" class="text-xs text-muted hover:text-primary transition-colors inline-flex items-center gap-1 font-medium">
                  <i class="ph ph-arrow-left"></i> Return to Public Site
                </a>
              </div>
            </form>

          </div>

          <div class="text-center mt-6 text-[11px] text-muted">
            BellBee Media Internal Administration · Protected Session
          </div>
        </div>
      </section>
    </Layout>
  )
}

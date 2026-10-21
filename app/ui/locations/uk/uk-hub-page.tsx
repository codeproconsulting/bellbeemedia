import { type Handle, type RemixNode } from 'remix/ui'
import { Layout } from '../../layout.tsx'
import { routes } from '../../../routes.ts'

interface UkHubPageProps {
  bookingUrl?: string
  result?: { success: boolean; message: string }
}

export function UkHubPage(handle: Handle<UkHubPageProps>) {
  const bookingUrl = handle?.props?.bookingUrl
  const result = handle?.props?.result
  const defaultBooking = bookingUrl || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"

  return () => (
    <Layout
      title="United Kingdom Operations | London, Manchester, Birmingham — Bell Bee Media"
      description="Bell Bee Media's United Kingdom strategic wing. Connecting UK e-commerce brands, high-growth startups, and enterprises to world-class SEO and performance marketing."
    >

      {/* ── Sub-header Breadcrumb & Navigation Bar ── */}
      <section class="bg-surface-dark0 border-b border-white/10 pt-28 pb-4 text-white/80">
        <div class="container mx-auto px-4 max-w-6xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <nav aria-label="Breadcrumb" class="flex items-center gap-2">
            <a href={routes.home.href()} class="hover:text-white transition-colors">Home</a>
            <span class="text-white/30">/</span>
            <a href={routes.locations.href()} class="hover:text-white transition-colors">Global Locations</a>
            <span class="text-white/30">/</span>
            <span class="text-white font-semibold">United Kingdom Hubs</span>
          </nav>
          
          <a
            href={routes.locations.href()}
            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold transition-colors"
          >
            <i class="ph ph-arrow-left"></i> All Country Hubs
          </a>
        </div>
      </section>

      {/* ── Editorial Hero ── */}
      <section class="relative bg-surface-dark0 text-white pt-12 pb-16 overflow-hidden">
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
            <div class="max-w-2xl">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-5">
                <span class="w-2 h-2 rounded-full bg-blue-400"></span>
                International Strategy & Global Wing · United Kingdom
              </div>
              <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5 text-white">
                Global Strategy. <br class="hidden sm:inline" />
                <span class="text-blue-400">British Precision.</span>
              </h1>
              <p class="text-base sm:text-lg text-white/75 leading-relaxed font-normal">
                Expanding high-performance marketing, technical international SEO, and brand positioning for UK enterprises, high-growth direct-to-consumer retailers, and B2B SaaS firms.
              </p>
            </div>

            <div class="bg-white/[0.04] backdrop-blur-md rounded-2xl border border-white/10 p-5 lg:w-80 shrink-0">
              <span class="text-[11px] font-bold text-white/50 uppercase tracking-widest block mb-2">Timezone & Alignment</span>
              <p class="text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                <i class="ph-fill ph-clock text-blue-400"></i> GMT / BST Timezone
              </p>
              <p class="text-xs text-white/70 mb-3">Seamless coordination for UK business hours</p>
              <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                <span>Billing Available:</span>
                <span class="font-bold text-blue-300">GBP (£) & Direct Wire</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UK Strategic Cities Grid ── */}
      <section class="py-16 sm:py-20 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-surface-2">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-2">
                UK Strategic Footprint
              </span>
              <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 tracking-tight">
                United Kingdom Regional Coverage
              </h2>
              <p class="text-text-secondary text-sm mt-1">
                Consulting, paid acquisition, and enterprise search optimization across the British Isles.
              </p>
            </div>

            <a
              href={routes.locationsPakistan.href()}
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-surface-2 text-xs font-bold text-primary hover:border-primary shadow-sm transition-colors"
            >
              <span>🇵🇰 View Pakistan Primary HQ</span> <i class="ph-bold ph-arrow-right"></i>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* LONDON */}
            <div class="bg-white rounded-3xl border border-surface-2 p-7 sm:p-8 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-xl transition-all shadow-sm">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                  Capital Strategy
                </span>
                <span class="text-xs text-text-secondary font-medium">South East</span>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0">
                  <i class="ph-fill ph-bank"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-black text-surface-dark0">London</h3>
                  <span class="text-xs text-text-secondary font-semibold">Greater London & Tech City</span>
                </div>
              </div>

              <p class="text-sm text-text-secondary leading-relaxed flex-grow">
                Enterprise SEO consulting, international B2B demand generation, and brand positioning for London's fast-growing companies and fintech innovators.
              </p>

              <div class="flex flex-wrap gap-2">
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-1 text-surface-dark1 border border-surface-2">
                  International SEO
                </span>
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-1 text-surface-dark1 border border-surface-2">
                  B2B Demand Gen
                </span>
              </div>

              <a
                href={defaultBooking}
                target="_blank"
                rel="noopener noreferrer"
                class="mt-auto pt-4 border-t border-surface-2 flex items-center justify-between text-sm font-bold text-primary hover:underline"
              >
                <span>Book London Strategy Call</span>
                <i class="ph-bold ph-arrow-right"></i>
              </a>
            </div>

            {/* MANCHESTER */}
            <div class="bg-white rounded-3xl border border-surface-2 p-7 sm:p-8 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-xl transition-all shadow-sm">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                  E-Commerce Hub
                </span>
                <span class="text-xs text-text-secondary font-medium">Northern England</span>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0">
                  <i class="ph-fill ph-shopping-bag"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-black text-surface-dark0">Manchester</h3>
                  <span class="text-xs text-text-secondary font-semibold">MediaCity & Retail Belt</span>
                </div>
              </div>

              <p class="text-sm text-text-secondary leading-relaxed flex-grow">
                Scale direct-to-consumer e-commerce, high-conversion creative performance ads, and omnichannel customer retention for Northern UK retailers.
              </p>

              <div class="flex flex-wrap gap-2">
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-1 text-surface-dark1 border border-surface-2">
                  D2C Performance
                </span>
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-1 text-surface-dark1 border border-surface-2">
                  Shopify Plus
                </span>
              </div>

              <a
                href={defaultBooking}
                target="_blank"
                rel="noopener noreferrer"
                class="mt-auto pt-4 border-t border-surface-2 flex items-center justify-between text-sm font-bold text-primary hover:underline"
              >
                <span>Consult Manchester Lead</span>
                <i class="ph-bold ph-arrow-right"></i>
              </a>
            </div>

            {/* BIRMINGHAM (Links to /locations/uk/birmingham) */}
            <a
              href={routes.locationUkBirmingham.href()}
              id="city-card-birmingham"
              class="group bg-white rounded-3xl border border-surface-2 p-7 sm:p-8 flex flex-col gap-5 hover:-translate-y-1 hover:border-primary hover:shadow-xl transition-all shadow-sm"
            >
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200">
                  Midlands Central
                </span>
                <span class="text-xs text-text-secondary font-medium">West Midlands</span>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-800 flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <i class="ph-fill ph-buildings"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-black text-surface-dark0 group-hover:text-primary transition-colors">Birmingham</h3>
                  <span class="text-xs text-primary font-semibold">Meta Ads &amp; Qualified Lead Hub</span>
                </div>
              </div>

              <p class="text-sm text-text-secondary leading-relaxed flex-grow">
                Performance Meta advertising, creative testing, and qualified lead generation for commercial businesses throughout Birmingham and the West Midlands.
              </p>

              <div class="flex flex-wrap gap-2">
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-1 text-surface-dark1 border border-surface-2">
                  Meta Ads Services
                </span>
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-1 text-surface-dark1 border border-surface-2">
                  Qualified Lead Gen
                </span>
                <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface-1 text-surface-dark1 border border-surface-2">
                  SEO Strategy
                </span>
              </div>

              <div class="mt-auto pt-4 border-t border-surface-2 flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-light transition-colors">
                <span>View Birmingham Hub &amp; Services</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform"></i>
              </div>
            </a>

          </div>
        </div>
      </section>

    </Layout>
  )
}

import { type Handle } from 'remix/ui'
import { Layout } from '../../layout.tsx'
import { routes } from '../../../routes.ts'

interface UkHubPageProps {
  bookingUrl?: string
  result?: { success: boolean; message: string }
}

export function UkHubPage(handle: Handle<UkHubPageProps>) {
  const bookingUrl = handle?.props?.bookingUrl
  const defaultBooking = bookingUrl || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"

  return () => (
    <Layout
      title="United Kingdom Operations | London, Manchester, Birmingham — Bell Bee Media"
      description="Bell Bee Media's United Kingdom strategic wing. Connecting UK e-commerce brands, high-growth startups, and enterprises to world-class SEO and performance marketing."
      dark={true}
    >
      <div class="bg-[#050a15] text-white" style="background-color: #050a15 !important;">

        {/* ── Sub-header Breadcrumb & Global Navigation Bar ── */}
        <section class="border-b border-white/10 pt-24 sm:pt-28 pb-4 text-white/70" style="background-color: #050a15 !important;">
          <div class="container mx-auto px-4 max-w-6xl flex flex-wrap items-center justify-between gap-3 text-xs">
            <nav aria-label="Breadcrumb" class="flex items-center gap-2">
              <a href={routes.home.href()} class="hover:text-white transition-colors text-slate-400 hover:text-white">Home</a>
              <span class="text-white/20">/</span>
              <a href={routes.locations.href()} class="hover:text-white transition-colors text-slate-400 hover:text-white">Global Locations</a>
              <span class="text-white/20">/</span>
              <span class="text-white font-semibold flex items-center gap-1.5">
                <span class="text-base">🇬🇧</span> United Kingdom Hubs
              </span>
            </nav>
            
            <div class="flex items-center gap-2.5">
              <a
                href={routes.locations.href()}
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold transition-all"
              >
                <i class="ph ph-arrow-left"></i> All Country Hubs
              </a>
              <a
                href={routes.locationsPakistan.href()}
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 text-orange-300 text-xs font-semibold transition-all"
              >
                <span>🇵🇰</span> View Pakistan Primary HQ
              </a>
            </div>
          </div>
        </section>

        {/* ── Editorial Hero Section ── */}
        <section class="relative pt-12 pb-16 sm:pt-16 sm:pb-20 overflow-hidden" style="background-color: #050a15 !important;">
          {/* Subtle Ambient Radial Lighting */}
          <div class="absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-to-r from-[#154476]/30 via-[#0284c7]/20 to-[#2cbcee]/25 rounded-full blur-[130px] pointer-events-none" />

          {/* Background Subtle Tech Grid Graphic */}
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div class="container mx-auto px-4 max-w-6xl relative z-10">
            <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
              
              <div class="max-w-2xl">
                {/* Badge: Logo Cyan Indicator */}
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4">
                  <span class="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]"></span>
                  <span class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#38bdf8]">
                    International Strategy &amp; Global Wing · United Kingdom
                  </span>
                </div>

                <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4 text-white">
                  Global Strategy. <br class="hidden sm:inline" />
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#93c5fd]">
                    British Precision.
                  </span>
                </h1>

                <p class="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                  Expanding high-performance marketing, technical international SEO, and brand positioning for UK enterprises, high-growth direct-to-consumer retailers, and B2B SaaS firms.
                </p>
              </div>

              {/* Timezone & Alignment Card (Exact Original Data with Glassmorphic Finish) */}
              <div class="bg-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/15 p-6 lg:w-84 shrink-0 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0284c7] to-[#38bdf8]"></div>
                
                <span class="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  Timezone &amp; Alignment
                </span>
                
                <p class="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <i class="ph-bold ph-clock text-[#38bdf8]"></i> GMT / BST Timezone
                </p>
                
                <p class="text-xs text-slate-300 mb-4 leading-relaxed">
                  Seamless coordination for UK business hours
                </p>
                
                <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span class="text-slate-400">Billing Available:</span>
                  <span class="font-bold text-[#38bdf8]">GBP (£) &amp; Direct Wire</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── UK Strategic Cities Grid ── */}
        <section class="py-14 sm:py-20 bg-white text-slate-900 border-t border-slate-200 shadow-sm relative z-10" id="cities" style="background-color: #ffffff !important; color: #0f172a !important;">
          <div class="container mx-auto px-4 max-w-6xl">
            
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
              <div>
                <div class="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0284c7] mb-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#0284c7]"></span>
                  UK STRATEGIC FOOTPRINT
                </div>
                <h2 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  United Kingdom Regional Coverage
                </h2>
                <p class="text-slate-600 text-sm mt-1">
                  Consulting, paid acquisition, and enterprise search optimization across the British Isles.
                </p>
              </div>

              <a
                href={routes.locationsPakistan.href()}
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-[#e56026] hover:border-[#e56026] shadow-sm transition-all"
              >
                <span>🇵🇰 View Pakistan Primary HQ</span>
                <i class="ph-bold ph-arrow-right"></i>
              </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-7">

              {/* ── 1. LONDON ── */}
              <div class="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#0284c7] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(2,132,199,0.18)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden">
                {/* Top Animated Sky-Blue Line on Hover */}
                <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0284c7] to-[#38bdf8] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left z-20"></div>

                {/* City Watermark Monogram */}
                <div class="absolute right-5 top-5 select-none pointer-events-none transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-0.5 z-0">
                  <span class="text-5xl font-black font-mono tracking-tighter text-slate-900/[0.04] group-hover:text-[#0284c7]/12 transition-colors duration-300">
                    LDN
                  </span>
                </div>

                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-50 text-[#0284c7] border border-sky-200">
                      Capital Strategy
                    </span>
                    <span class="text-xs text-slate-400 font-medium">South East</span>
                  </div>

                  <div class="flex items-center gap-4 mb-4">
                    {/* Professional Capital Corporate Facade SVG Icon */}
                    <div class="w-14 h-14 rounded-2xl bg-[#0284c7]/10 text-[#0284c7] border border-[#0284c7]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300 shadow-sm">
                      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18" />
                        <path d="M4 10h16" />
                        <path d="M6 10v8" />
                        <path d="M10 10v8" />
                        <path d="M14 10v8" />
                        <path d="M18 10v8" />
                        <path d="M12 3 3 8h18Z" />
                      </svg>
                    </div>

                    <div>
                      <h3 class="text-2xl font-black text-slate-900 group-hover:text-[#0284c7] transition-colors tracking-tight">
                        London
                      </h3>
                      <span class="text-xs text-slate-500 font-semibold block mt-0.5">Greater London &amp; Tech City</span>
                    </div>
                  </div>

                  <p class="text-sm text-slate-600 leading-relaxed mb-6">
                    Enterprise SEO consulting, international B2B demand generation, and brand positioning for London's fast-growing companies and fintech innovators.
                  </p>

                  <div class="flex flex-wrap gap-2 mb-6">
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:border-sky-200 group-hover:bg-sky-50 transition-colors">
                      International SEO
                    </span>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:border-sky-200 group-hover:bg-sky-50 transition-colors">
                      B2B Demand Gen
                    </span>
                  </div>
                </div>

                <a
                  href={defaultBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#0284c7] group-hover:text-[#0369a1] transition-colors"
                >
                  <span>Book London Strategy Call</span>
                  <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform duration-300"></i>
                </a>
              </div>

              {/* ── 2. MANCHESTER ── */}
              <div class="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#e56026] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(229,96,38,0.18)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden">
                {/* Top Animated Orange Line on Hover */}
                <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#e56026] to-[#fdb517] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left z-20"></div>

                {/* City Watermark Monogram */}
                <div class="absolute right-5 top-5 select-none pointer-events-none transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-0.5 z-0">
                  <span class="text-5xl font-black font-mono tracking-tighter text-slate-900/[0.04] group-hover:text-[#e56026]/12 transition-colors duration-300">
                    MAN
                  </span>
                </div>

                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-50 text-[#e56026] border border-orange-200">
                      E-Commerce Hub
                    </span>
                    <span class="text-xs text-slate-400 font-medium">Northern England</span>
                  </div>

                  <div class="flex items-center gap-4 mb-4">
                    {/* Professional D2C / Retail Commerce SVG Icon */}
                    <div class="w-14 h-14 rounded-2xl bg-[#e56026]/10 text-[#e56026] border border-[#e56026]/20 flex items-center justify-center shrink-0 group-hover:bg-[#e56026] group-hover:text-white transition-all duration-300 shadow-sm">
                      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                        <path d="M3 6h18" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    </div>

                    <div>
                      <h3 class="text-2xl font-black text-slate-900 group-hover:text-[#e56026] transition-colors tracking-tight">
                        Manchester
                      </h3>
                      <span class="text-xs text-slate-500 font-semibold block mt-0.5">MediaCity &amp; Retail Belt</span>
                    </div>
                  </div>

                  <p class="text-sm text-slate-600 leading-relaxed mb-6">
                    Scale direct-to-consumer e-commerce, high-conversion creative performance ads, and omnichannel customer retention for Northern UK retailers.
                  </p>

                  <div class="flex flex-wrap gap-2 mb-6">
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:border-orange-200 group-hover:bg-orange-50 transition-colors">
                      D2C Performance
                    </span>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:border-orange-200 group-hover:bg-orange-50 transition-colors">
                      Shopify Plus
                    </span>
                  </div>
                </div>

                <a
                  href={defaultBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#e56026] group-hover:text-[#c2410c] transition-colors"
                >
                  <span>Consult Manchester Lead</span>
                  <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform duration-300"></i>
                </a>
              </div>

              {/* ── 3. BIRMINGHAM ── */}
              <a
                href={routes.locationUkBirmingham.href()}
                id="city-card-birmingham"
                class="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-[#154476] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(21,68,118,0.18)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden block"
              >
                {/* Top Animated Navy/Cyan Line on Hover */}
                <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#154476] to-[#0284c7] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left z-20"></div>

                {/* City Watermark Monogram */}
                <div class="absolute right-5 top-5 select-none pointer-events-none transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-0.5 z-0">
                  <span class="text-5xl font-black font-mono tracking-tighter text-slate-900/[0.04] group-hover:text-[#154476]/12 transition-colors duration-300">
                    BHX
                  </span>
                </div>

                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#154476] border border-blue-200">
                      Midlands Central
                    </span>
                    <span class="text-xs text-slate-400 font-medium">West Midlands</span>
                  </div>

                  <div class="flex items-center gap-4 mb-4">
                    {/* Professional Regional Architecture & Network SVG Icon */}
                    <div class="w-14 h-14 rounded-2xl bg-[#154476]/10 text-[#154476] border border-[#154476]/20 flex items-center justify-center shrink-0 group-hover:bg-[#154476] group-hover:text-white transition-all duration-300 shadow-sm">
                      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18" />
                        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                        <path d="M10 7h4" />
                        <path d="M10 11h4" />
                        <path d="M10 15h4" />
                        <path d="M10 21v-3h4v3" />
                      </svg>
                    </div>

                    <div>
                      <h3 class="text-2xl font-black text-slate-900 group-hover:text-[#154476] transition-colors tracking-tight">
                        Birmingham
                      </h3>
                      <span class="text-xs text-slate-500 font-semibold block mt-0.5">Meta Ads &amp; Qualified Lead Hub</span>
                    </div>
                  </div>

                  <p class="text-sm text-slate-600 leading-relaxed mb-6">
                    Performance Meta advertising, creative testing, and qualified lead generation for commercial businesses throughout Birmingham and the West Midlands.
                  </p>

                  <div class="flex flex-wrap gap-2 mb-6">
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                      Meta Ads Services
                    </span>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                      Qualified Lead Gen
                    </span>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                      SEO Strategy
                    </span>
                  </div>
                </div>

                <div class="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#154476] group-hover:text-[#e56026] transition-colors">
                  <span>View Birmingham Hub &amp; Services</span>
                  <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform duration-300"></i>
                </div>
              </a>

            </div>
          </div>
        </section>

      </div>
    </Layout>
  )
}

import { type Handle } from 'remix/ui'
import { Layout } from '../../layout.tsx'
import { routes } from '../../../routes.ts'

interface PakistanHubPageProps {
  bookingUrl?: string
  result?: { success: boolean; message: string }
}

export function PakistanHubPage(handle: Handle<PakistanHubPageProps>) {
  return () => (
    <Layout
      title="Pakistan Service Locations | Bell Bee Media"
      description="Explore Bell Bee Media's active operations across Pakistan: Islamabad flagship headquarters, Lahore, Karachi, and Rawalpindi."
      dark={true}
    >
      <div class="bg-[#050a15] text-white" style="background-color: #050a15 !important;">

        {/* ── Sub-header Breadcrumb Bar ── */}
        <div class="border-b border-white/10 pt-24 sm:pt-28 pb-4 text-white/70" style="background-color: #050a15 !important;">
          <div class="container mx-auto px-4 max-w-5xl flex items-center justify-between text-xs">
            <nav aria-label="Breadcrumb" class="flex items-center gap-2">
              <a href={routes.home.href()} class="hover:text-white transition-colors text-slate-400 hover:text-white">Home</a>
              <span class="text-white/20">/</span>
              <a href={routes.locations.href()} class="hover:text-white transition-colors text-slate-400 hover:text-white">Locations</a>
              <span class="text-white/20">/</span>
              <span class="text-white font-semibold">Pakistan</span>
            </nav>
            <a
              href={routes.locations.href()}
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-[#2cbcee] hover:text-white text-xs font-semibold transition-all"
            >
              <i class="ph ph-arrow-left"></i> All Regions
            </a>
          </div>
        </div>

        {/* ── Hero: Bespoke Professional Header with Logo Brand Colors ── */}
        <section class="relative pt-12 pb-16 sm:pt-16 sm:pb-20 overflow-hidden" style="background-color: #050a15 !important;">
          {/* Subtle Ambient Radial Lighting */}
          <div class="absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-to-r from-[#154476]/30 via-[#e56026]/15 to-[#2cbcee]/20 rounded-full blur-[130px] pointer-events-none" />

          {/* Background Subtle Tech Grid Graphic */}
          <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div class="container mx-auto px-4 max-w-5xl relative z-10">
            <div class="max-w-2xl">
              {/* Badge: Logo Cyan & Orange Indicator */}
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4">
                <span class="w-2 h-2 rounded-full bg-[#e56026] shadow-[0_0_8px_#e56026]"></span>
                <span class="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2cbcee]">
                  Regional Operations · Pakistan
                </span>
              </div>

              {/* Headline with Brand Orange Gradient */}
              <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4 text-white">
                Pakistan Service <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#e56026] via-[#f97316] to-[#fdb517]">Locations</span>
              </h1>

              {/* Subtitle */}
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                Select your city below to explore localized search marketing, paid acquisition, and creative campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* ── City Cards Section (Exact Original Data with Executive Craft) ── */}
        <section class="py-14 sm:py-20 bg-white text-slate-900 border-t border-slate-200 shadow-sm relative z-10" id="cities" style="background-color: #ffffff !important; color: #0f172a !important;">
          <div class="container mx-auto px-4 max-w-5xl">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-7">

              {/* ── 1. ISLAMABAD ── */}
              <a
                href="/locations/pakistan/islamabad"
                id="city-card-islamabad"
                class="group bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-[#e56026] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(229,96,38,0.18)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden block"
              >
                {/* Top Animated Orange Line on Hover */}
                <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#e56026] to-[#fdb517] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left z-20"></div>

                {/* City Watermark Monogram */}
                <div class="absolute right-6 top-6 select-none pointer-events-none transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-0.5 z-0">
                  <span class="text-5xl font-black font-mono tracking-tighter text-slate-900/[0.04] group-hover:text-[#e56026]/12 transition-colors duration-300">
                    ISB
                  </span>
                </div>

                <div class="relative z-10">
                  <div class="flex items-center gap-4 mb-5">
                    {/* Professional Architectural Headquarters SVG Icon */}
                    <div class="w-14 h-14 rounded-2xl bg-[#e56026]/10 text-[#e56026] border border-[#e56026]/20 flex items-center justify-center shrink-0 group-hover:bg-[#e56026] group-hover:text-white transition-all duration-300 shadow-sm">
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
                      <h2 class="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#e56026] transition-colors tracking-tight">
                        Islamabad
                      </h2>
                      <span class="inline-flex items-center text-xs font-bold text-[#e56026] bg-[#e56026]/10 px-2.5 py-0.5 rounded-full mt-1">
                        Flagship Headquarters
                      </span>
                    </div>
                  </div>

                  <p class="text-sm text-slate-600 leading-relaxed mb-6">
                    Full-funnel SEO services, Meta Ads, and performance marketing with our physical office in I-8 Markaz.
                  </p>
                </div>

                <div class="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#e56026] group-hover:text-[#c2410c] transition-colors">
                  <span>View Islamabad Hub &amp; Services</span>
                  <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform duration-300"></i>
                </div>
              </a>

              {/* ── 2. LAHORE ── */}
              <a
                href={routes.locationLahore.href()}
                id="city-card-lahore"
                class="group bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-[#154476] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(21,68,118,0.18)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden block"
              >
                {/* Top Animated Navy Line on Hover */}
                <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#154476] to-[#2cbcee] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left z-20"></div>

                {/* City Watermark Monogram */}
                <div class="absolute right-6 top-6 select-none pointer-events-none transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-0.5 z-0">
                  <span class="text-5xl font-black font-mono tracking-tighter text-slate-900/[0.04] group-hover:text-[#154476]/12 transition-colors duration-300">
                    LHR
                  </span>
                </div>

                <div class="relative z-10">
                  <div class="flex items-center gap-4 mb-5">
                    {/* Professional D2C / Retail Commerce SVG Icon */}
                    <div class="w-14 h-14 rounded-2xl bg-[#154476]/10 text-[#154476] border border-[#154476]/20 flex items-center justify-center shrink-0 group-hover:bg-[#154476] group-hover:text-white transition-all duration-300 shadow-sm">
                      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                        <path d="M3 6h18" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    </div>

                    <div>
                      <h2 class="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#154476] transition-colors tracking-tight">
                        Lahore
                      </h2>
                      <span class="inline-flex items-center text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full mt-1">
                        Punjab D2C &amp; Retail Hub
                      </span>
                    </div>
                  </div>

                  <p class="text-sm text-slate-600 leading-relaxed mb-6">
                    Serving retail, fashion, and tech brands across Gulberg and DHA with high-ROAS Meta Ads and creator campaigns.
                  </p>
                </div>

                <div class="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#154476] group-hover:text-[#e56026] transition-colors">
                  <span>View Lahore Hub</span>
                  <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform duration-300"></i>
                </div>
              </a>

              {/* ── 3. KARACHI ── */}
              <a
                href={routes.locationKarachi.href()}
                id="city-card-karachi"
                class="group bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-[#2cbcee] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(44,188,238,0.18)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden block"
              >
                {/* Top Animated Cyan Line on Hover */}
                <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2cbcee] to-[#154476] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left z-20"></div>

                {/* City Watermark Monogram */}
                <div class="absolute right-6 top-6 select-none pointer-events-none transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-0.5 z-0">
                  <span class="text-5xl font-black font-mono tracking-tighter text-slate-900/[0.04] group-hover:text-[#2cbcee]/15 transition-colors duration-300">
                    KHI
                  </span>
                </div>

                <div class="relative z-10">
                  <div class="flex items-center gap-4 mb-5">
                    {/* Professional Global Commerce & Finance SVG Icon */}
                    <div class="w-14 h-14 rounded-2xl bg-[#2cbcee]/12 text-[#167ca8] border border-[#2cbcee]/25 flex items-center justify-center shrink-0 group-hover:bg-[#2cbcee] group-hover:text-white transition-all duration-300 shadow-sm">
                      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </div>

                    <div>
                      <h2 class="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#167ca8] transition-colors tracking-tight">
                        Karachi
                      </h2>
                      <span class="inline-flex items-center text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full mt-1">
                        Commercial &amp; Financial Hub
                      </span>
                    </div>
                  </div>

                  <p class="text-sm text-slate-600 leading-relaxed mb-6">
                    Paid media, commercial video production, and Shopify e-commerce scaling for brands in Clifton, DHA &amp; PECHS.
                  </p>
                </div>

                <div class="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#167ca8] group-hover:text-[#e56026] transition-colors">
                  <span>View Karachi Hub</span>
                  <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform duration-300"></i>
                </div>
              </a>

              {/* ── 4. RAWALPINDI ── */}
              <a
                href={routes.locationRawalpindi.href()}
                id="city-card-rawalpindi"
                class="group bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-[#154476] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(21,68,118,0.18)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden block"
              >
                {/* Top Animated Navy/Orange Line on Hover */}
                <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#154476] to-[#e56026] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left z-20"></div>

                {/* City Watermark Monogram */}
                <div class="absolute right-6 top-6 select-none pointer-events-none transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-0.5 z-0">
                  <span class="text-5xl font-black font-mono tracking-tighter text-slate-900/[0.04] group-hover:text-[#154476]/12 transition-colors duration-300">
                    RWP
                  </span>
                </div>

                <div class="relative z-10">
                  <div class="flex items-center gap-4 mb-5">
                    {/* Professional Regional Architecture & Network SVG Icon */}
                    <div class="w-14 h-14 rounded-2xl bg-[#154476]/10 text-[#154476] border border-[#154476]/20 flex items-center justify-center shrink-0 group-hover:bg-[#154476] group-hover:text-white transition-all duration-300 shadow-sm">
                      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="7" height="9" x="3" y="12" rx="1.5" />
                        <rect width="7" height="5" x="14" y="16" rx="1" />
                        <path d="M7 12V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10" />
                        <path d="M11 8h2" />
                        <path d="M11 12h2" />
                      </svg>
                    </div>

                    <div>
                      <h2 class="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#154476] transition-colors tracking-tight">
                        Rawalpindi
                      </h2>
                      <span class="inline-flex items-center text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full mt-1">
                        Twin Cities Regional Hub
                      </span>
                    </div>
                  </div>

                  <p class="text-sm text-slate-600 leading-relaxed mb-6">
                    Serving commercial businesses across Saddar, Bahria Town, and DHA with targeted local SEO and Google Ads.
                  </p>
                </div>

                <div class="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#154476] group-hover:text-[#e56026] transition-colors">
                  <span>View Rawalpindi Hub</span>
                  <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform duration-300"></i>
                </div>
              </a>

            </div>

            {/* ── In-Person Office Spotlight Banner: Executive Finish ── */}
            <div class="mt-10 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden">
              {/* Left Accent Bar */}
              <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#e56026] via-[#154476] to-[#2cbcee]"></div>

              <div class="flex items-center gap-4 pl-2">
                <div class="w-12 h-12 rounded-2xl bg-[#e56026]/10 text-[#e56026] border border-[#e56026]/20 flex items-center justify-center shrink-0 shadow-sm">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                    In-Person Meetings in Islamabad
                  </h3>
                  <p class="text-xs sm:text-sm text-slate-500 font-medium">
                    Office #204, Vista Building, I-8 Markaz, Islamabad
                  </p>
                </div>
              </div>

              <a
                href="/locations/pakistan/islamabad"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#154476] hover:bg-[#e56026] text-white text-xs sm:text-sm font-bold transition-all duration-300 shrink-0 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Islamabad Office Details</span>
                <i class="ph-bold ph-arrow-right"></i>
              </a>
            </div>

          </div>
        </section>

      </div>
    </Layout>
  )
}

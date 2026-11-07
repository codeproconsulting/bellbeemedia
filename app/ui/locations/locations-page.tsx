import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'
import { WorldMapGraphic } from './world-map-graphic.tsx'

export function LocationsPage() {
  return () => (
    <Layout
      title="Global Service Locations | Bell Bee Media"
      description="Select your regional operations hub. Explore Bell Bee Media's dedicated performance marketing and creative centers in Pakistan and the United Kingdom."
      dark={true}
    >
      <div class="bg-[#050a15] text-white min-h-screen" style="background-color: #050a15 !important; color: #ffffff !important;">

        {/* ── Top Hero Section (Where We Operate + Interactive World Map) ── */}
        <section class="relative pt-6 sm:pt-10 pb-6 sm:pb-8 overflow-hidden" style="background-color: #050a15 !important;">
          {/* Ambient background light */}
          <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />

          <div class="container mx-auto px-4 max-w-5xl relative z-10 text-center">
            {/* Tag: ● GLOBAL OPERATIONS */}
            <p class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#38bdf8] mb-2 sm:mb-3" style="color: #38bdf8 !important;">
              <span class="w-1.5 h-1.5 rounded-full bg-[#f97316]" style="background-color: #f97316 !important;"></span>
              GLOBAL OPERATIONS
            </p>

            {/* Headline: Where We Operate */}
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] mb-2.5 sm:mb-3 text-white" style="color: #ffffff !important;">
              Where We <span class="text-[#f97316]" style="color: #f97316 !important;">Operate</span>
            </h1>

            {/* Subtitle */}
            <p class="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed mb-4 sm:mb-6" style="color: #94a3b8 !important;">
              Choose your regional operations hub below to access localized performance marketing, creative teams, and regional campaigns.
            </p>

            {/* Interactive Dotted World Map with Flight Connection Arc */}
            <WorldMapGraphic />
          </div>
        </section>

        {/* ── Center Section: Select Your Country Hub (White Background) ── */}
        <section class="pt-10 sm:pt-14 pb-12 sm:pb-16 relative bg-white text-slate-900 shadow-sm" id="country-selection" style="background-color: #ffffff !important; color: #0f172a !important;">
          <div class="container mx-auto px-4 max-w-5xl">
            
            {/* Left-aligned Header */}
            <div class="mb-6 sm:mb-8">
              <div class="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-sky-600 mb-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#f97316]"></span>
                REGIONAL HUBS
              </div>
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Select Your Country Hub
              </h2>
            </div>

            {/* Split 2-Column Hub Layout with Top Border and Center Divider */}
            <div class="border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              {/* Column 1: Pakistan */}
              <a
                href={routes.locationsPakistan.href()}
                id="card-country-pk"
                class="group pt-6 pb-6 sm:pt-8 sm:pb-8 md:pr-10 lg:pr-12 relative overflow-hidden flex flex-col justify-between transition-all duration-300 block"
              >
                {/* Top Animated Orange Line on Hover */}
                <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ea580c] to-[#f97316] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left z-20 shadow-[0_1px_8px_rgba(234,88,12,0.4)]"></div>

                {/* Giant Hollow PK Watermark (Clean Unified Vector Outline - No Internal Overlaps) */}
                <svg
                  viewBox="0 0 170 102"
                  class="absolute right-2 top-3 sm:right-6 sm:top-4 w-28 sm:w-36 h-auto pointer-events-none select-none z-0 opacity-40 group-hover:opacity-95 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-0.5"
                  fillRule="evenodd"
                >
                  <path
                    d="M 0,0 L 44,0 C 62,0 74,12 74,29 C 74,46 62,58 44,58 L 22,58 L 22,100 L 0,100 Z M 22,19 L 41,19 C 48,19 53,23 53,29 C 53,35 48,39 41,39 L 22,39 Z M 88,0 L 88,100 L 110,100 L 110,64 L 138,100 L 166,100 L 128,52 L 163,0 L 135,0 L 110,36 L 110,0 Z"
                    class="stroke-slate-900/20 group-hover:stroke-[#ea580c] fill-transparent group-hover:fill-[#ea580c]/[0.08] transition-colors duration-300"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                </svg>

                <div class="relative z-10">
                  <div class="mb-3">
                    <h3 class="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#f97316] transition-colors">
                      Pakistan
                    </h3>
                    <span class="inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#ea580c] text-white mt-2 shadow-sm">
                      Primary HQ
                    </span>
                  </div>

                  <p class="text-[11px] font-bold text-sky-600 uppercase tracking-wider mb-3">
                    ISLAMABAD · LAHORE · KARACHI · RAWALPINDI
                  </p>

                  <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
                    Our core operations and creative headquarters. On-ground media buying, search optimization, and creative production with our physical office in Islamabad.
                  </p>
                </div>

                <div class="relative z-10 pt-2 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#ea580c] group-hover:text-orange-700 transition-colors">
                  <span>View Pakistan Cities & Services</span>
                  <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform duration-200"></i>
                </div>
              </a>

              {/* Column 2: United Kingdom */}
              <a
                href={routes.locationsUk.href()}
                id="card-country-uk"
                class="group pt-6 pb-6 sm:pt-8 sm:pb-8 md:pl-10 lg:pl-12 relative overflow-hidden flex flex-col justify-between transition-all duration-300 block"
              >
                {/* Top Animated Sky-Blue Line on Hover */}
                <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0284c7] to-[#38bdf8] opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left z-20 shadow-[0_1px_8px_rgba(2,132,199,0.4)]"></div>

                {/* Giant Hollow UK Watermark (Clean Unified Vector Outline - No Internal Overlaps) */}
                <svg
                  viewBox="0 0 180 102"
                  class="absolute right-2 top-3 sm:right-6 sm:top-4 w-28 sm:w-36 h-auto pointer-events-none select-none z-0 opacity-40 group-hover:opacity-95 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M 0,0 L 22,0 L 22,68 C 22,78 30,81 43,81 C 56,81 64,78 64,68 L 64,0 L 86,0 L 86,68 C 86,89 72,100 43,100 C 14,100 0,89 0,68 Z M 98,0 L 98,100 L 120,100 L 120,64 L 148,100 L 176,100 L 138,52 L 173,0 L 145,0 L 120,36 L 120,0 Z"
                    class="stroke-slate-900/20 group-hover:stroke-[#0284c7] fill-transparent group-hover:fill-[#0284c7]/[0.08] transition-colors duration-300"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                </svg>

                <div class="relative z-10">
                  <div class="mb-3">
                    <h3 class="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#0284c7] transition-colors">
                      United Kingdom
                    </h3>
                    <span class="inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#0284c7] text-white mt-2 shadow-sm">
                      Growth Wing
                    </span>
                  </div>

                  <p class="text-[11px] font-bold text-sky-600 uppercase tracking-wider mb-3">
                    LONDON · MANCHESTER · BIRMINGHAM
                  </p>

                  <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
                    International strategy, enterprise SaaS, and cross-border e-commerce growth for UK brands, retailers, and tech startups.
                  </p>
                </div>

                <div class="relative z-10 pt-2 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0284c7] group-hover:text-sky-700 transition-colors">
                  <span>View United Kingdom Hub</span>
                  <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform duration-200"></i>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* ── Bottom Section: Call to Action Banner (Full Same Dark Theme) ── */}
        <section class="py-12 sm:py-16 relative overflow-hidden text-center" style="background-color: #050a15 !important;">
          {/* Ambient orange glow radiating underneath */}
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-orange-500/15 rounded-full blur-[140px] pointer-events-none" />

          <div class="container mx-auto px-4 max-w-3xl relative z-10">
            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-3" style="color: #ffffff !important;">
              Looking to grow your brand in<br class="hidden sm:inline" /> a specific region?
            </h3>
            <p class="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mb-6 leading-relaxed" style="color: #94a3b8 !important;">
              Get in touch with our team for a free strategy consultation tailored to your local market.
            </p>
            <a
              href={routes.getProposal.href()}
              class="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_10px_35px_rgba(249,115,22,0.4)] hover:scale-105 active:scale-[0.98]"
              style="background-color: #f97316 !important; color: #ffffff !important;"
            >
              <span>Get a Free Proposal</span>
              <i class="ph-bold ph-arrow-right"></i>
            </a>
          </div>
        </section>

      </div>
    </Layout>
  )
}

import { type RemixNode } from 'remix/ui'
import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'

export function LocationsPage() {
  return () => (
    <Layout
      title="Global Service Locations | Bell Bee Media"
      description="Select your regional operations hub. Explore Bell Bee Media's dedicated performance marketing and creative centers in Pakistan and the United Kingdom."
    >

      {/* ── Hero Section ── */}
      <section class="relative bg-surface-dark0 text-white pt-32 pb-20 overflow-hidden border-b border-surface-dark2">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40"></div>
        <div class="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-4">
            Global Operations
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Where We <span class="text-gradient">Operate</span>
          </h1>
          <p class="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Choose your regional operations hub below to access localized performance marketing, creative teams, and regional campaigns.
          </p>
        </div>
      </section>

      {/* ── Country Selector (Clean, Minimal, Website Colors, No Clutter) ── */}
      <section class="py-16 sm:py-24 bg-surface-1" id="country-selection">
        <div class="container mx-auto px-4 max-w-4xl">
          
          <div class="text-center mb-12">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Regional Hubs
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0">
              Select Your Country Hub
            </h2>
          </div>

          {/* 2 Clean Cards — Website Colors Only */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Box 1: Pakistan */}
            <a
              href={routes.locationsPakistan.href()}
              id="card-country-pk"
              class="group bg-white rounded-2xl p-8 border border-surface-2 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="text-4xl">🇵🇰</span>
                  <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    Primary HQ
                  </span>
                </div>

                <h3 class="text-2xl font-black text-surface-dark0 group-hover:text-primary transition-colors mb-2">
                  Pakistan
                </h3>
                
                <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
                  Islamabad · Lahore · Karachi · Rawalpindi
                </p>

                <p class="text-sm text-text-secondary leading-relaxed mb-6">
                  Our core operational and creative headquarters. On-ground media buying, search optimization, and creative production with our physical office in Islamabad.
                </p>
              </div>

              <div class="pt-5 border-t border-surface-2 flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-light transition-colors">
                <span>View Pakistan Cities & Services</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>

            {/* Box 2: United Kingdom */}
            <a
              href={routes.locationsUk.href()}
              id="card-country-uk"
              class="group bg-white rounded-2xl p-8 border border-surface-2 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="text-4xl">🇬🇧</span>
                  <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-surface-2 text-surface-dark1 border border-surface-3">
                    Global Wing
                  </span>
                </div>

                <h3 class="text-2xl font-black text-surface-dark0 group-hover:text-primary transition-colors mb-2">
                  United Kingdom
                </h3>

                <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
                  London · Manchester · Birmingham
                </p>

                <p class="text-sm text-text-secondary leading-relaxed mb-6">
                  International strategy, enterprise SEO, and cross-border e-commerce growth for UK brands, retailers, and tech startups.
                </p>
              </div>

              <div class="pt-5 border-t border-surface-2 flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-light transition-colors">
                <span>View United Kingdom Hubs</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ── Simple Bottom Contact Banner ── */}
      <section class="py-14 bg-surface-dark0 text-white border-t border-surface-dark2">
        <div class="container mx-auto px-4 max-w-4xl text-center">
          <h3 class="text-xl sm:text-2xl font-bold mb-3">Looking to grow your brand in a specific region?</h3>
          <p class="text-sm text-white/70 max-w-lg mx-auto mb-6">
            Get in touch with our team for a free strategy consultation tailored to your local market.
          </p>
          <a
            href={routes.getProposal.href()}
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold tracking-wide uppercase transition-colors shadow-md"
          >
            Get a Free Proposal <i class="ph-bold ph-arrow-right"></i>
          </a>
        </div>
      </section>

    </Layout>
  )
}

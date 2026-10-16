import { type Handle, type RemixNode } from 'remix/ui'
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
    >

      {/* ── Sub-header Breadcrumb ── */}
      <div class="bg-surface-dark0 border-b border-surface-dark2 pt-28 pb-4 text-white/70">
        <div class="container mx-auto px-4 max-w-5xl flex items-center justify-between text-xs">
          <nav aria-label="Breadcrumb" class="flex items-center gap-2">
            <a href={routes.home.href()} class="hover:text-white transition-colors">Home</a>
            <span class="text-white/30">/</span>
            <a href={routes.locations.href()} class="hover:text-white transition-colors">Locations</a>
            <span class="text-white/30">/</span>
            <span class="text-white font-medium">Pakistan</span>
          </nav>
          <a
            href={routes.locations.href()}
            class="text-xs text-primary-light hover:underline flex items-center gap-1 font-semibold"
          >
            <i class="ph ph-arrow-left"></i> All Regions
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section class="relative bg-surface-dark0 text-white pt-12 pb-16 overflow-hidden border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-5xl relative z-10">
          <div class="max-w-2xl">
            <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
              Regional Operations · Pakistan
            </p>
            <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-4">
              Pakistan Service Locations
            </h1>
            <p class="text-base text-white/70 leading-relaxed">
              Select your city below to explore localized search marketing, paid acquisition, and creative campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* ── Clean City Cards Grid (No Green, No AI clutter, Minimal & Attractive) ── */}
      <section class="py-16 sm:py-20 bg-surface-1" id="cities">
        <div class="container mx-auto px-4 max-w-5xl">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 1. ISLAMABAD (Links to /locations/pakistan/islamabad) */}
            <a
              href="/locations/pakistan/islamabad"
              id="city-card-islamabad"
              class="group bg-white rounded-2xl p-7 border border-surface-2 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              <div>
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <i class="ph-fill ph-buildings"></i>
                  </div>
                  <div>
                    <h2 class="text-2xl font-black text-surface-dark0 group-hover:text-primary transition-colors">
                      Islamabad
                    </h2>
                    <span class="text-xs font-bold text-primary">Flagship Headquarters</span>
                  </div>
                </div>

                <p class="text-sm text-text-secondary leading-relaxed mb-4">
                  Full-funnel SEO services, Meta Ads, and performance marketing with our physical office in I-8 Markaz.
                </p>
              </div>

              <div class="pt-4 border-t border-surface-2 flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-light transition-colors">
                <span>View Islamabad Hub &amp; Services</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>

            {/* 2. LAHORE */}
            <a
              href={routes.locationLahore.href()}
              id="city-card-lahore"
              class="group bg-white rounded-2xl p-7 border border-surface-2 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              <div>
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <i class="ph-fill ph-storefront"></i>
                  </div>
                  <div>
                    <h2 class="text-2xl font-black text-surface-dark0 group-hover:text-primary transition-colors">
                      Lahore
                    </h2>
                    <span class="text-xs font-semibold text-text-secondary">Punjab D2C & Retail Hub</span>
                  </div>
                </div>

                <p class="text-sm text-text-secondary leading-relaxed mb-4">
                  Serving retail, fashion, and tech brands across Gulberg and DHA with high-ROAS Meta Ads and creator campaigns.
                </p>
              </div>

              <div class="pt-4 border-t border-surface-2 flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-light transition-colors">
                <span>View Lahore Hub</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>

            {/* 3. KARACHI */}
            <a
              href={routes.locationKarachi.href()}
              id="city-card-karachi"
              class="group bg-white rounded-2xl p-7 border border-surface-2 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              <div>
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <i class="ph-fill ph-globe"></i>
                  </div>
                  <div>
                    <h2 class="text-2xl font-black text-surface-dark0 group-hover:text-primary transition-colors">
                      Karachi
                    </h2>
                    <span class="text-xs font-semibold text-text-secondary">Commercial & Financial Hub</span>
                  </div>
                </div>

                <p class="text-sm text-text-secondary leading-relaxed mb-4">
                  Paid media, commercial video production, and Shopify e-commerce scaling for brands in Clifton, DHA & PECHS.
                </p>
              </div>

              <div class="pt-4 border-t border-surface-2 flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-light transition-colors">
                <span>View Karachi Hub</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>

            {/* 4. RAWALPINDI */}
            <a
              href={routes.locationRawalpindi.href()}
              id="city-card-rawalpindi"
              class="group bg-white rounded-2xl p-7 border border-surface-2 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              <div>
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <i class="ph-fill ph-city"></i>
                  </div>
                  <div>
                    <h2 class="text-2xl font-black text-surface-dark0 group-hover:text-primary transition-colors">
                      Rawalpindi
                    </h2>
                    <span class="text-xs font-semibold text-text-secondary">Twin Cities Regional Hub</span>
                  </div>
                </div>

                <p class="text-sm text-text-secondary leading-relaxed mb-4">
                  Serving commercial businesses across Saddar, Bahria Town, and DHA with targeted local SEO and Google Ads.
                </p>
              </div>

              <div class="pt-4 border-t border-surface-2 flex items-center justify-between text-sm font-bold text-primary group-hover:text-primary-light transition-colors">
                <span>View Rawalpindi Hub</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>

          </div>

          {/* Simple Office Note — Website Brand Colors */}
          <div class="mt-12 p-6 rounded-2xl bg-white border border-surface-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                <i class="ph-bold ph-map-pin"></i>
              </div>
              <div>
                <p class="text-sm font-bold text-surface-dark0">In-Person Meetings in Islamabad</p>
                <p class="text-xs text-text-secondary">Office #204, Vista Building, I-8 Markaz, Islamabad</p>
              </div>
            </div>
            <a
              href="/locations/pakistan/islamabad"
              class="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold transition-colors shrink-0"
            >
              Islamabad Office Details &rarr;
            </a>
          </div>

        </div>
      </section>

    </Layout>
  )
}

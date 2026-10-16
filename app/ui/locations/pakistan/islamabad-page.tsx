import { type Handle } from 'remix/ui'
import { Layout } from '../../layout.tsx'
import { routes } from '../../../routes.ts'

interface IslamabadPageProps {
  bookingUrl?: string
}

export function IslamabadPage(handle: Handle<IslamabadPageProps>) {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'BellBee Media — Digital Marketing Agency Islamabad',
    url: 'https://bellbeemedia.com/locations/pakistan/islamabad',
    logo: 'https://bellbeemedia.com/Logo.svg',
    description:
      'BellBee Media Islamabad Headquarters. Specialized SEO Services and Meta Ads Services in Islamabad. Office in I-8 Markaz.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office #204, Vista Building, I-8 Markaz',
      addressLocality: 'Islamabad',
      addressRegion: 'ICT',
      postalCode: '44000',
      addressCountry: 'PK',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '33.6908', longitude: '73.0805' },
    telephone: '+923701902120',
    email: 'hello@bellbeemedia.com',
  }

  return () => (
    <Layout
      title="Islamabad Specialized Services | BellBee Media"
      description="Select your specialized service in Islamabad: SEO Services Islamabad or Meta Ads Services Islamabad. Operating from I-8 Markaz."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >

      {/* ── TOP HEADER / HERO: DARK BLUE BACKGROUND ── */}
      <section class="bg-surface-dark0 text-white pt-28 pb-16 relative overflow-hidden border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div class="flex items-center justify-between text-xs text-white/70 pb-10">
            <nav aria-label="Breadcrumb" class="flex items-center gap-2">
              <a href="/" class="hover:text-white transition-colors">Home</a>
              <span class="text-white/30">/</span>
              <a href="/locations" class="hover:text-white transition-colors">Locations</a>
              <span class="text-white/30">/</span>
              <a href="/locations/pakistan" class="hover:text-white transition-colors">Pakistan</a>
              <span class="text-white/30">/</span>
              <span class="text-white font-medium">Islamabad</span>
            </nav>
            <a
              href="/locations/pakistan"
              class="text-xs text-primary-light hover:underline flex items-center gap-1 font-semibold"
            >
              <i class="ph ph-arrow-left"></i> Pakistan Hub
            </a>
          </div>

          {/* Heading & Intro - Clean, Human Typography (No AI pill capsules) */}
          <div class="text-center max-w-3xl mx-auto">
            <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
              Islamabad Operational Hub
            </p>
            <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Select Your Specialized Service in Islamabad
            </h1>
            <p class="text-white/75 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
              Explore our core specialized departments operating directly out of our I-8 Markaz headquarters.
            </p>
          </div>

        </div>
      </section>

      {/* ── BOXES SECTION: WHITE BACKGROUND WITH CLEAN DARK BLUE CARDS ── */}
      <section class="py-16 sm:py-24 bg-surface-1 relative border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          
          {/* 2 Service Boxes (Clean, authentic agency design) */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
            
            {/* Box 1: SEO Services Islamabad */}
            <a
              href="/locations/pakistan/islamabad/seo-services-islamabad"
              id="box-seo-services-islamabad"
              class="group relative bg-surface-dark0 text-white rounded-2xl p-8 sm:p-10 border border-surface-dark2 hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div class="w-14 h-14 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <i class="ph-fill ph-magnifying-glass"></i>
                </div>

                <h2 class="text-2xl sm:text-3xl font-black text-white group-hover:text-primary-light transition-colors mb-3">
                  SEO Services Islamabad
                </h2>

                <p class="text-sm text-white/70 leading-relaxed mb-8">
                  Turn Google search into your most consistent revenue channel. Dominate Google Maps and local high-intent keywords across Islamabad &amp; Rawalpindi with zero vanity metrics.
                </p>

                <div class="space-y-3 mb-8">
                  <div class="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                    <i class="ph-bold ph-check text-primary-light text-base shrink-0"></i>
                    <span>Google Maps &amp; 3-Pack Local Domination</span>
                  </div>
                  <div class="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                    <i class="ph-bold ph-check text-primary-light text-base shrink-0"></i>
                    <span>Free Comprehensive Website &amp; SEO Audit</span>
                  </div>
                  <div class="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                    <i class="ph-bold ph-check text-primary-light text-base shrink-0"></i>
                    <span>High-Intent Commercial Keyword Rankings</span>
                  </div>
                </div>
              </div>

              <div class="pt-6 border-t border-white/10 flex items-center justify-between text-sm sm:text-base font-bold text-primary-light group-hover:text-white transition-colors">
                <span>Explore SEO Services Islamabad</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-2 transition-transform text-lg"></i>
              </div>
            </a>

            {/* Box 2: Meta Ads Services Islamabad */}
            <a
              href="/locations/pakistan/islamabad/meta-ads-islamabad"
              id="box-meta-ads-islamabad"
              class="group relative bg-surface-dark0 text-white rounded-2xl p-8 sm:p-10 border border-surface-dark2 hover:border-secondary shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div class="w-14 h-14 rounded-xl bg-secondary/20 text-secondary-light flex items-center justify-center text-3xl mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <i class="ph-fill ph-chart-line-up"></i>
                </div>

                <h2 class="text-2xl sm:text-3xl font-black text-white group-hover:text-secondary-light transition-colors mb-3">
                  Meta Ads Services Islamabad
                </h2>

                <p class="text-sm text-white/70 leading-relaxed mb-8">
                  Meta Ads that pay for themselves. Facebook &amp; Instagram campaigns engineered for enquiries: leads, WhatsApp conversations, calls, and verified sales.
                </p>

                <div class="space-y-3 mb-8">
                  <div class="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                    <i class="ph-bold ph-check text-secondary-light text-base shrink-0"></i>
                    <span>Free 24-Hour Ad Account Teardown</span>
                  </div>
                  <div class="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                    <i class="ph-bold ph-check text-secondary-light text-base shrink-0"></i>
                    <span>In-House Video, Reels &amp; Shoot Production</span>
                  </div>
                  <div class="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                    <i class="ph-bold ph-check text-secondary-light text-base shrink-0"></i>
                    <span>WhatsApp-First Leads &amp; Direct Phone Calls</span>
                  </div>
                </div>
              </div>

              <div class="pt-6 border-t border-white/10 flex items-center justify-between text-sm sm:text-base font-bold text-secondary-light group-hover:text-white transition-colors">
                <span>Explore Meta Ads Services Islamabad</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-2 transition-transform text-lg"></i>
              </div>
            </a>

          </div>

          {/* Clean Office Details Card on White Background */}
          <div class="max-w-xl mx-auto p-5 rounded-xl bg-white border border-surface-2 shadow-sm flex items-center justify-center gap-3 text-xs sm:text-sm text-surface-dark0 text-center">
            <div class="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-base shrink-0 font-bold">
              <i class="ph-bold ph-map-pin"></i>
            </div>
            <span>
              <strong>Physical Office:</strong> Office #204, Vista Building, I-8 Markaz, Islamabad
            </span>
          </div>

        </div>
      </section>

    </Layout>
  )
}

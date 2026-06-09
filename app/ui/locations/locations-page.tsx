import { type RemixNode } from 'remix/ui'
import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'

/* ─────────────────────────────────────────
   DATA — add more countries / cities here
───────────────────────────────────────── */
const locationData = [
  {
    country: 'Pakistan',
    flag: '🇵🇰',
    code: 'PK',
    description: 'Our home market. We operate from Islamabad with deep expertise in local D2C, COD funnels, and micro-influencer campaigns.',
    color: 'from-green-600 to-emerald-700',
    iconBg: 'bg-green-50 text-green-700',
    cities: [
      {
        name: 'Islamabad',
        href: routes.locationPakistanIslamabad.href(),
        description: 'Our head office. Visit us at Vista Building, I-8 Markaz.',
        tags: ['Performance Ads', 'Social Media', 'Web Solutions'],
        icon: 'ph-buildings',
      },
    ],
  },
]

/* ─────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────── */
export function LocationsPage() {
  return () => (
    <Layout
      title="Service Locations | Bell Bee Media"
      description="Bell Bee Media serves brands across multiple countries and cities. Browse our service locations and find the team closest to you."
    >

      {/* ── Hero ── */}
      <section class="relative bg-surface-dark0 text-white pt-28 pb-20 overflow-hidden border-b border-white/5">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

        <div class="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest mb-8 text-white/80">
            <i class="ph ph-map-trifold text-secondary"></i> Our Footprint
          </span>
          <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            Where We <span class="text-gradient">Operate</span>
          </h1>
          <p class="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            From Islamabad to beyond — Bell Bee Media serves ambitious brands across markets with the same world-class strategy and execution.
          </p>
        </div>
      </section>

      {/* ── Country → City Grid ── */}
      <section class="py-24 bg-surface-1 border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-6xl">

          {locationData.map((country) => (
            <div class="mb-20 last:mb-0">

              {/* Country Header */}
              <div class="flex items-center gap-5 mb-10">
                <div class="relative">
                  <span class="text-5xl">{country.flag}</span>
                </div>
                <div>
                  <h2 class="text-3xl font-black text-surface-dark0 tracking-tight">{country.country}</h2>
                  <p class="text-text-secondary text-sm mt-1 max-w-xl">{country.description}</p>
                </div>
                <div class="hidden md:block ml-auto">
                  <span class="text-xs font-bold text-text-secondary uppercase tracking-widest border border-surface-2 px-3 py-1.5 rounded-full bg-white">
                    {country.cities.length} {country.cities.length === 1 ? 'City' : 'Cities'}
                  </span>
                </div>
              </div>

              {/* Divider line */}
              <div class="h-px bg-gradient-to-r from-surface-2 via-primary/20 to-surface-2 mb-10"></div>

              {/* Cities Grid */}
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {country.cities.map((city) => (
                  <a
                    href={city.href}
                    class="group relative bg-white rounded-3xl border border-surface-2 p-8 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-xl hover:border-primary/25 transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"></div>

                    {/* Icon + city name */}
                    <div class="flex items-center gap-4">
                      <div class="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center text-2xl shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i class={`ph-fill ${city.icon}`}></i>
                      </div>
                      <div>
                        <div class="flex items-center gap-2">
                          <span class="text-base">{country.flag}</span>
                          <h3 class="text-xl font-black text-surface-dark0 group-hover:text-primary transition-colors duration-300">{city.name}</h3>
                        </div>
                        <span class="text-xs font-semibold text-text-secondary">{country.country}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p class="text-sm text-text-secondary leading-relaxed flex-grow">{city.description}</p>

                    {/* Tags */}
                    <div class="flex flex-wrap gap-2">
                      {city.tags.map((tag) => (
                        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-primary/5 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div class="flex items-center gap-2 text-sm font-bold text-text-secondary group-hover:text-primary transition-colors duration-300 mt-auto pt-4 border-t border-surface-2">
                      View location page
                      <i class="ph ph-arrow-right group-hover:translate-x-1 transition-transform duration-300 inline-block"></i>
                    </div>
                  </a>
                ))}

                {/* "More coming soon" filler card */}
                <div class="bg-surface-1 rounded-3xl border border-dashed border-surface-2 p-8 flex flex-col items-center justify-center gap-4 text-center min-h-[260px]">
                  <div class="w-14 h-14 rounded-2xl bg-surface-2 text-text-secondary flex items-center justify-center text-2xl">
                    <i class="ph ph-plus-circle"></i>
                  </div>
                  <div>
                    <p class="font-bold text-surface-dark1 text-base">More cities coming soon</p>
                    <p class="text-xs text-text-secondary mt-1">We're expanding across {country.country}.</p>
                  </div>
                  <a href={routes.getProposal.href()} class="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                    Work with us remotely <i class="ph ph-arrow-right"></i>
                  </a>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section class="py-20 bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] text-white">
        <div class="container mx-auto px-4 max-w-3xl text-center">
          <h2 class="text-3xl md:text-4xl font-black mb-4 tracking-tight">Don't see your city?</h2>
          <p class="text-white/70 text-lg mb-8 leading-relaxed">
            We work with brands globally — no matter where you're based. Reach out and let's build your growth strategy.
          </p>
          <a
            href={routes.getProposal.href()}
            class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-all shadow-xl hover:scale-[1.02]"
          >
            Get a Free Strategy Call <i class="ph ph-arrow-right"></i>
          </a>
        </div>
      </section>

    </Layout>
  )
}

import { type RemixNode } from 'remix/ui'
import { routes } from '../routes.ts'

export function PillBadge() {
  return ({ icon, text, dark }: { icon: string, text: string, dark?: boolean }) => (
    <span class={`pill-badge ${
      dark 
        ? 'bg-white/10 text-white border-white/15' 
        : 'bg-primary/5 text-primary border-primary/10'
    }`}>
      <i class={`ph-fill ${icon} ${dark ? 'text-white' : 'text-primary'}`}></i> {text}
    </span>
  )
}

/* ─────────────────────────────────────────
   STATS BAR
───────────────────────────────────────── */
export function StatsBar() {
  return () => (
    <section class="py-16 bg-gradient-to-r from-[#071324] via-primary to-[#071324] border-y border-white/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
      <div class="container mx-auto px-4 max-w-5xl relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-stagger-group>
          <div class="flex flex-col items-center gap-2 group" data-stagger-item>
            <span data-count="5" class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">5</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Expert Specialists</span>
          </div>
          <div class="flex flex-col items-center gap-2 group" data-stagger-item>
            <span data-count="5+" class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">5+</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Years Experience</span>
          </div>
          <div class="flex flex-col items-center gap-2 group" data-stagger-item>
            <span data-count="3.4x" class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">3.4x</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Avg. ROAS Delivered</span>
          </div>
          <div class="flex flex-col items-center gap-2 group" data-stagger-item>
            <span data-count="100+" class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">100+</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Campaigns Delivered</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   SERVICES GRID
───────────────────────────────────────── */
const services = [
  {
    icon: 'ph-heart',
    title: 'Social Media Management',
    desc: 'Organic platform strategies, copy, native vertical video, community management, and audience growth across channels.',
    tags: ['Instagram', 'TikTok', 'LinkedIn'],
    href: routes.servicesSocialMedia.href(),
  },
  {
    icon: 'ph-chart-line-up',
    title: 'Performance Marketing',
    desc: 'Paid media buying across Meta, Google Search, Shopping, and Programmatic. We write, execute, test, and optimize in-house.',
    tags: ['Google Ads', 'Meta Ads', 'Retargeting'],
    href: routes.servicesPerformanceAds.href(),
  },
  {
    icon: 'ph-megaphone',
    title: 'Digital PR & Influencer',
    desc: 'Curated influencer gifting/campaign partnerships and securing strategic press coverage to build authority and drive referral traffic.',
    tags: ['Media Coverage', 'Influencer Gifting', 'Brand Colabs'],
    href: routes.servicesDigitalPr.href(),
  },
  {
    icon: 'ph-film-slate',
    title: 'Creative Production',
    desc: 'High-quality video shoots, scroll-stopping social ad creatives, product photography, and motion graphics.',
    tags: ['Video Ads', 'Reels & Shorts', 'Photography'],
    href: routes.servicesProduction.href(),
  },
  {
    icon: 'ph-desktop',
    title: 'Web & Landing Pages',
    desc: 'High-speed, mobile-first websites, Shopify stores, and custom landing pages optimized for maximum conversion rate.',
    tags: ['CRO', 'SEO', 'E-commerce'],
    href: routes.servicesWebSolutions.href(),
  },
  {
    icon: 'ph-bezier-curve',
    title: 'Design & Copywriting',
    desc: 'Visual brand guidelines, digital ad asset designs, and persuasive sales copywriting for email flows and landing pages.',
    tags: ['Branding', 'Ad Creatives', 'UX Copy'],
    href: routes.servicesDesignCopy.href(),
  },
]

export function ServicesGrid() {
  return () => (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <a href={s.href} class="group relative rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col gap-5 bg-white border border-surface-2 hover:shadow-xl hover:border-primary/20">
          {/* Subtle corner glow on hover */}
          <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"></div>

          {/* Icon */}
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0 bg-primary/5 text-primary group-hover:scale-110 transition-all duration-300">
            <i class={`ph-fill ${s.icon}`}></i>
          </div>

          {/* Content */}
          <div class="flex flex-col gap-3 flex-grow">
            <h3 class="text-xl font-bold transition-colors duration-300 text-surface-dark0 group-hover:text-primary">{s.title}</h3>
            <p class="text-sm leading-relaxed text-text-secondary">{s.desc}</p>
          </div>

          {/* Tags */}
          <div class="flex flex-wrap gap-2 mt-auto">
            {s.tags.map((tag) => (
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-primary/5 text-primary">{tag}</span>
            ))}
          </div>

          {/* Arrow CTA */}
          <div class="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 mt-1 text-text-secondary group-hover:text-primary">
            Learn more <i class="ph ph-arrow-right group-hover:translate-x-1 transition-transform duration-300 inline-block"></i>
          </div>
        </a>
      ))}
    </div>
  )
}

export function ProcessSection() {
  const steps = [
    {
      num: '01',
      badge: 'Week 1',
      title: 'Discovery & Audit',
      desc: 'We audit your brand voice, analyze competitor gaps, and find leverage points to establish a solid baseline.',
      icon: 'ph-binoculars',
      color: 'text-secondary bg-secondary/10 border-secondary/20',
    },
    {
      num: '02',
      badge: 'Week 1–2',
      title: 'Strategic Blueprint',
      desc: 'We map out a custom 30/60/90-day growth roadmap, KPI framework, and dynamic budget allocation.',
      icon: 'ph-map-trifold',
      color: 'text-primary-light bg-primary-light/10 border-primary-light/20',
    },
    {
      num: '03',
      badge: 'Week 2–3',
      title: 'Execution & Launch',
      desc: 'Our creative and technical teams produce ad creatives, set up tracking QA, and go live.',
      icon: 'ph-airplane-takeoff',
      color: 'text-secondary bg-secondary/10 border-secondary/20',
    },
    {
      num: '04',
      badge: 'Ongoing',
      title: 'Optimize & Scale',
      desc: 'We run creative A/B tests, analyze performance metrics daily, and scale successful campaigns.',
      icon: 'ph-chart-line-up',
      color: 'text-primary-light bg-primary-light/10 border-primary-light/20',
    },
  ]

  return () => (
    <section class="py-24 bg-surface-dark0 text-white relative overflow-hidden border-t border-white/5">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,68,118,0.1)_0,transparent_60%)] pointer-events-none"></div>
      
      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            From brief to <span class="text-gradient">breakthrough</span>
          </h2>
          <p class="text-white/60 leading-relaxed text-base md:text-lg">
            We follow a highly-structured, data-proven execution plan to transition your brand to predictable, compounding growth.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div class="group relative rounded-3xl p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <div class={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border ${s.color}`}>
                  <i class={`ph-fill ${s.icon}`}></i>
                </div>
                <span class="text-sm font-bold text-white/40">{s.num}</span>
              </div>
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">{s.badge}</span>
                <h3 class="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p class="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   TESTIMONIALS SECTION
───────────────────────────────────────── */
export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Oliver Smith',
      rating: 5,
      quote:
        "Bell Bee didn't just run our ads — they rewired how we think about digital growth. Within 90 days, our CAC dropped by 48% and ROAS reached 4.5x. They are not a vendor, they are a true strategic partner.",
    },
    {
      name: 'Emily Wilson',
      rating: 5,
      quote:
        "Our paid acquisition was bleeding money before Bell Bee took over. They restructured our entire funnel — new high-converting creatives, tighter audience targeting, and custom landing pages. CAC dropped 42% in month one.",
    },
    {
      name: 'Harry Taylor',
      rating: 5,
      quote:
        "We went from 12K to 280K followers in 6 months. More importantly, those followers convert into buyers — our DM-to-sale rate is 22%. Bell Bee's content strategy and creative execution is genuinely world-class.",
    },
    {
      name: 'Lukas Weber',
      rating: 5,
      quote:
        "The transparency alone is worth everything. For the first time, our executive team knows exactly which campaigns drive profit and why. Fast communication, proactive ideas, and outstanding monthly reporting.",
    },
    {
      name: 'Anna Fischer',
      rating: 5,
      quote:
        "Switched from a large agency and the difference is night and day. Bell Bee understood our business within days, moved fast without red tape, and delivered measurable revenue impact from the first week.",
    },
    {
      name: 'Leon Schneider',
      rating: 5,
      quote:
        "Their creative production team is unmatched. The video ads and scroll-stopping hooks they produced for our TikTok and Meta campaigns cut our cost per acquisition in half while doubling our click-through rate.",
    },
  ]

  return () => (
    <section class="relative py-20 sm:py-28 overflow-hidden bg-surface-1 border-t border-surface-2">
      {/* ── RESPONSIVE 3-CARD SLIDER CSS RULES ── */}
      <style>{`
        .bb-carousel-item {
          flex: 0 0 100% !important;
          max-width: 100% !important;
          padding: 0 14px;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .bb-carousel-item {
            flex: 0 0 50% !important;
            max-width: 50% !important;
          }
        }
        @media (min-width: 1024px) {
          .bb-carousel-item {
            flex: 0 0 33.333333% !important;
            max-width: 33.333333% !important;
          }
        }
        #bb-testimonial-slider {
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
        }
        #bb-testimonial-slider:active {
          cursor: grabbing;
        }
      `}</style>

      {/* ── BACKGROUND GEOMETRIC ACCENTS & WIREFRAME ── */}
      <div class="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>

        {/* Concentric Circle Wireframe in Left Area */}
        <svg
          class="absolute -top-16 -left-16 w-96 h-96 opacity-40 text-slate-300"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="80" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3" />
          <circle cx="200" cy="200" r="130" stroke="currentColor" stroke-width="1.5" />
          <circle cx="200" cy="200" r="180" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" />
          <circle cx="200" cy="200" r="50" stroke="currentColor" stroke-width="1" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" stroke-width="0.8" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" stroke-width="0.8" />
        </svg>

        {/* Accent dots in top-left */}
        <div class="absolute top-12 left-10 flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-primary-light"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        </div>

        {/* Concentric Circle Wireframe in Right Area */}
        <svg
          class="absolute -bottom-20 -right-20 w-[440px] h-[440px] opacity-40 text-slate-300"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="220" cy="220" r="90" stroke="currentColor" stroke-width="1.5" />
          <circle cx="220" cy="220" r="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" />
          <circle cx="220" cy="220" r="190" stroke="currentColor" stroke-width="1" />
          <circle cx="220" cy="220" r="215" stroke="currentColor" stroke-width="0.7" stroke-dasharray="2 4" />
        </svg>

        {/* Colored dots on right side */}
        <div class="absolute bottom-24 right-12 flex items-center gap-3">
          <span class="w-3.5 h-3.5 rounded-full bg-primary/20 border-2 border-primary"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-secondary"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-primary-light"></span>
        </div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* ── HEADER ── */}
        <div class="max-w-2xl mb-12 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 mb-3 tracking-tight leading-[1.15]">
            Results our clients can't <br class="hidden sm:inline" />
            <span class="text-primary-light">stop</span> talking about
          </h2>
          <p class="text-text-secondary text-sm sm:text-base leading-relaxed">
            Real brands. Real numbers. No fluff — just the outcomes we delivered.
          </p>
        </div>

        {/* ── 3-CARD CAROUSEL VIEWPORT ── */}
        <div id="bb-testimonial-slider" class="overflow-hidden relative py-6 -mx-3.5 select-none touch-pan-y">
          <div
            id="bb-slider-track"
            class="flex transition-transform duration-500 ease-out select-none"
            style="transform: translateX(0%);"
          >
            {testimonials.map((t) => (
              <div class="bb-carousel-item flex-shrink-0 flex flex-col">
                <div class="relative group filter drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
                  {/* Card Main Box */}
                  <div class="bg-white rounded-t-2xl relative overflow-hidden flex flex-col flex-1">
                    {/* Top Straight Blue Banner */}
                    <div class="w-full h-12 sm:h-14 bg-[#154476] relative"></div>

                    {/* Header Row: ONLY Name (in Black) + 5 Stars */}
                    <div class="px-6 sm:px-7 pt-4 pb-1.5 relative z-10">
                      <h3
                        class="font-heading font-black text-xl sm:text-2xl tracking-tight text-surface-dark0"
                      >
                        {t.name}
                      </h3>

                      {/* 5 Stars Rating */}
                      <div class="flex items-center gap-1 text-amber-400 text-sm mt-1" aria-label="5 out of 5 stars">
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                      </div>
                    </div>

                    {/* Body Text + Quotation Mark Icon */}
                    <div class="px-6 sm:px-7 pt-2 pb-5 flex-1 flex flex-col justify-between">
                      <p class="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                        {t.quote}
                      </p>

                      {/* Stylized Double Quotes Icon in Bottom-Right */}
                      <div class="flex justify-end pt-2 text-slate-300 group-hover:text-primary-light/50 transition-colors">
                        <i class="ph-fill ph-quotes text-4xl sm:text-5xl leading-none"></i>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Chevron Pennant with Crisp Accent Line */}
                  <div class="relative -mt-px w-full overflow-visible pointer-events-none">
                    <svg viewBox="0 0 400 44" class="w-full h-6 sm:h-7 block" preserveAspectRatio="none">
                      <polygon points="0,0 400,0 400,4 200,40 0,4" fill="#ffffff" />
                      <polyline
                        points="0,4 200,40 400,4"
                        fill="none"
                        stroke="#2cbcee"
                        stroke-width="4"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── NAVIGATION CONTROLS & PAGINATION PILLS ── */}
        <div class="mt-8 sm:mt-12 flex items-center justify-center gap-4 relative z-20">
          {/* Previous Arrow Button */}
          <button
            id="bb-slider-prev"
            type="button"
            aria-label="Previous testimonials"
            class="w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-surface-dark0 shadow-md hover:shadow-lg border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 hover:text-primary hover:border-primary-light cursor-pointer select-none shrink-0"
          >
            <i class="ph-bold ph-caret-left text-lg pointer-events-none"></i>
          </button>

          {/* Centered Pagination Pills */}
          <div id="bb-slider-dots" class="flex items-center gap-1.5 sm:gap-2 px-2 overflow-x-auto max-w-[280px] py-1">
            {testimonials.map((_, i) => (
              <button
                type="button"
                data-index={i}
                aria-label={`Go to slide ${i + 1}`}
                class="bb-slider-dot h-2 rounded-full transition-all duration-300 cursor-pointer shrink-0"
                style={i === 0 ? 'width: 2rem; background-color: #154476;' : 'width: 0.5rem; background-color: #cbd5e1;'}
              ></button>
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            id="bb-slider-next"
            type="button"
            aria-label="Next testimonials"
            class="w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-surface-dark0 shadow-md hover:shadow-lg border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 hover:text-primary hover:border-primary-light cursor-pointer select-none shrink-0"
          >
            <i class="ph-bold ph-caret-right text-lg pointer-events-none"></i>
          </button>
        </div>

        {/* Geometric Accents beneath */}
        <div class="mt-4 flex items-center justify-center gap-3 opacity-60">
          <span class="w-3 h-3 bg-secondary/80 rotate-12 rounded-[2px]"></span>
          <span class="w-4 h-4 rounded-full border-2 border-primary/40"></span>
        </div>
      </div>
    </section>
  )
}

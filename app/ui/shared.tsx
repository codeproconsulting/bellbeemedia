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
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="flex flex-col items-center gap-2 group">
            <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">5</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Expert Specialists</span>
          </div>
          <div class="flex flex-col items-center gap-2 group">
            <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">10+</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Combined Yrs Experience</span>
          </div>
          <div class="flex flex-col items-center gap-2 group">
            <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">4.2x</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Avg. ROAS Delivered</span>
          </div>
          <div class="flex flex-col items-center gap-2 group">
            <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">12+</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Active Scale Cases</span>
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
  return () => (
    <section class="py-24 bg-surface-1 border-t border-surface-2 relative overflow-hidden">
      <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div class="max-w-xl">
            <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-3 tracking-tight">
              Results our clients <span class="text-gradient">can't stop</span> talking about
            </h2>
            <p class="text-text-secondary leading-relaxed">Real brands. Real numbers. No fluff — just the outcomes we delivered.</p>
          </div>
          {/* Aggregate rating badge */}
          <a href="https://clutch.co" target="_blank" rel="noopener noreferrer" class="flex-shrink-0 bg-white border border-surface-2 rounded-2xl p-5 flex flex-col items-center gap-1 shadow-sm min-w-[140px] hover:border-primary/40 hover:shadow-md transition-all duration-300 group">
            <div class="flex gap-0.5 text-secondary text-xl">
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
            </div>
            <div class="text-3xl font-black text-surface-dark0 group-hover:text-primary transition-colors">4.9</div>
            <div class="text-xs text-text-secondary font-medium">Avg. Rating</div>
            <div class="text-[11px] text-primary font-semibold flex items-center gap-1 mt-0.5">
              Verify on Clutch <i class="ph ph-arrow-square-out"></i>
            </div>
          </a>
        </div>

        {/* Featured large testimonial + 2 side cards */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Featured */}
          <div class="lg:col-span-6 bg-surface-dark0 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
            <div>
              <i class="ph-fill ph-quotes text-secondary text-5xl mb-6 block opacity-60"></i>
              <p class="text-white text-lg leading-relaxed font-medium mb-8">
                Bell Bee didn't just run our ads — they rewired how we think about digital. Within 90 days, our CAC dropped by 48%, our ROAS hit 5.1x, and we crossed ₹1Cr/month in direct social revenue for the first time ever. They're not a vendor, they're a growth partner.
              </p>
            </div>
            <div class="flex items-center gap-4 pt-6 border-t border-white/10">
              <div class="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-black text-base flex-shrink-0">
                RP
              </div>
              <div>
                <h4 class="font-bold text-white text-base">Rahul Patel</h4>
                <p class="text-white/50 text-xs font-medium">CEO, FabFashion India — ₹50Cr D2C Brand</p>
              </div>
              <div class="ml-auto flex-shrink-0">
                <div class="flex gap-0.5 text-secondary text-sm">
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right column with 2 cards stacked */}
          <div class="lg:col-span-6 flex flex-col gap-6">

            {/* Card 2 */}
            <div class="bg-white border border-surface-2 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
              <div>
                <div class="flex gap-0.5 text-secondary text-sm mb-5">
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                </div>
                <p class="text-surface-dark1 leading-relaxed mb-6">
                  "Our paid acquisition was bleeding money. Bell Bee restructured our entire funnel — new creatives, tighter audiences, better landing pages. CAC cut by 42% in month one. These people actually know what they're doing."
                </p>
              </div>
              <div class="flex items-center gap-3 pt-5 border-t border-surface-2">
                <div class="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-black text-sm flex-shrink-0">VS</div>
                <div>
                  <h4 class="font-bold text-surface-dark0 text-sm">Vikram Singh</h4>
                  <p class="text-text-secondary text-xs">CMO, FinTech Solutions</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div class="bg-white border border-surface-2 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
              <div>
                <div class="flex gap-0.5 text-secondary text-sm mb-5">
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                </div>
                <p class="text-surface-dark1 leading-relaxed mb-6">
                  "We went from 12K to 280K Instagram followers in 6 months. More importantly, those followers convert — our DM-to-sale rate is 22%. Bell Bee's content strategy is genuinely world-class."
                </p>
              </div>
              <div class="flex items-center gap-3 pt-5 border-t border-surface-2">
                <div class="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-sm flex-shrink-0">AR</div>
                <div>
                  <h4 class="font-bold text-surface-dark0 text-sm">Ananya Roy</h4>
                  <p class="text-text-secondary text-xs">Founder, StyleCo E-commerce</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

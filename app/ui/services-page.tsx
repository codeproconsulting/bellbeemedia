import { routes } from '../routes.ts'
import { Layout } from './layout.tsx'
import { PillBadge, TestimonialsSection } from './shared.tsx'

const services = [
  {
    icon: 'ph-chart-line-up',
    label: '01',
    title: 'Performance Marketing',
    desc: 'Paid media buying across Meta, Google Search, Shopping & Programmatic — written, executed, tested and optimised in-house for maximum ROAS.',
    tags: ['Google Ads', 'Meta Ads', 'Retargeting'],
    href: routes.servicesPerformanceAds.href(),
    featured: true,
    metric: '3.4× avg ROAS',
  },
  {
    icon: 'ph-heart',
    label: '02',
    title: 'Social Media Management',
    desc: 'Organic platform strategies, short-form video, community management, and audience growth built for compounding reach.',
    tags: ['Instagram', 'TikTok', 'LinkedIn'],
    href: routes.servicesSocialMedia.href(),
    featured: false,
    metric: null,
  },
  {
    icon: 'ph-megaphone',
    label: '03',
    title: 'Digital PR & Influencer',
    desc: 'Curated influencer partnerships and strategic press coverage that build authority and drive referral traffic.',
    tags: ['Media Coverage', 'Influencer Gifting', 'Brand Collabs'],
    href: routes.servicesDigitalPr.href(),
    featured: false,
    metric: null,
  },
  {
    icon: 'ph-film-slate',
    label: '04',
    title: 'Creative Production',
    desc: 'High-quality video shoots, scroll-stopping ad creatives, product photography, and motion graphics — everything your campaigns need.',
    tags: ['Video Ads', 'Reels & Shorts', 'Photography'],
    href: routes.servicesProduction.href(),
    featured: false,
    metric: null,
  },
  {
    icon: 'ph-desktop',
    label: '05',
    title: 'Web & Landing Pages',
    desc: 'High-speed, mobile-first websites, Shopify stores, and conversion-optimised landing pages built to rank and convert.',
    tags: ['CRO', 'SEO', 'E-commerce'],
    href: routes.servicesWebSolutions.href(),
    featured: false,
    metric: null,
  },
  {
    icon: 'ph-bezier-curve',
    label: '06',
    title: 'Design & Copywriting',
    desc: 'Visual brand identity, ad asset design, and persuasive sales copy for email flows, landing pages, and social ads.',
    tags: ['Branding', 'Ad Creatives', 'UX Copy'],
    href: routes.servicesDesignCopy.href(),
    featured: false,
    metric: null,
  },
]

const steps = [
  {
    num: '01',
    badge: 'Week 1',
    title: 'Discovery & Audit',
    desc: 'We audit your brand voice, analyse competitor gaps, and find the leverage points that matter.',
    icon: 'ph-binoculars',
  },
  {
    num: '02',
    badge: 'Week 1–2',
    title: 'Strategic Blueprint',
    desc: 'A custom 30/60/90-day growth roadmap, KPI framework, and dynamic budget allocation.',
    icon: 'ph-map-trifold',
  },
  {
    num: '03',
    badge: 'Week 2–3',
    title: 'Execution & Launch',
    desc: 'Creative production, tracking QA, and campaigns go live. Fully managed, zero guesswork.',
    icon: 'ph-airplane-takeoff',
  },
  {
    num: '04',
    badge: 'Ongoing',
    title: 'Optimise & Scale',
    desc: 'Creative A/B tests, daily performance analysis, and aggressive scaling of winning campaigns.',
    icon: 'ph-chart-line-up',
  },
]

export function ServicesPage() {
  return () => (
    <Layout
      title="Paid Media, Social & Design Services | Bell Bee Media"
      description="Explore Bell Bee Media's growth services: performance marketing (Google & Meta Ads), organic social media management, creative production, and web solutions."
    >

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section class="relative bg-surface-dark0 overflow-hidden pt-36 pb-24">
        {/* Background texture */}
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_0%,rgba(21,68,118,0.35)_0,transparent_60%)] pointer-events-none" aria-hidden="true"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_100%,rgba(255,140,0,0.1)_0,transparent_55%)] pointer-events-none" aria-hidden="true"></div>
        {/* Subtle grid lines */}
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 64px 64px;" aria-hidden="true"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: Copy */}
            <div class="lg:col-span-7">
              <div class="flex mb-6">
                <PillBadge icon="ph-squares-four" text="What We Do" dark={true} />
              </div>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
                Everything your brand<br />needs to <span class="text-gradient">scale fast.</span>
              </h1>
              <p class="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
                Paid media, organic social, creative production, and conversion-focused web — all under one roof, aligned to a single revenue goal.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-secondary-light transition-all shadow-lg shadow-secondary/30 hover:scale-[1.02]">
                  Get a Free Strategy Call <i class="ph ph-arrow-right"></i>
                </a>
                <a href={routes.ourWork.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/80 rounded-full font-semibold hover:bg-white/10 transition-all">
                  See Our Results
                </a>
              </div>
            </div>

            {/* Right: Floating metric cards */}
            <div class="lg:col-span-5 relative hidden lg:flex flex-col gap-4">
              <div class="bg-white/[0.04] border border-white/10 rounded-3xl p-6 flex items-center gap-5">
                <div class="w-14 h-14 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center text-2xl flex-shrink-0">
                  <i class="ph-fill ph-trend-up"></i>
                </div>
                <div>
                  <div class="text-3xl font-black text-white">3.4×</div>
                  <div class="text-sm text-white/50 font-medium">Average ROAS across all clients</div>
                </div>
              </div>
              <div class="bg-white/[0.04] border border-white/10 rounded-3xl p-6 flex items-center gap-5">
                <div class="w-14 h-14 rounded-2xl bg-primary/30 text-primary-light flex items-center justify-center text-2xl flex-shrink-0">
                  <i class="ph-fill ph-users-three"></i>
                </div>
                <div>
                  <div class="text-3xl font-black text-white">35+</div>
                  <div class="text-sm text-white/50 font-medium">Years of combined specialist experience</div>
                </div>
              </div>
              <div class="bg-white/[0.04] border border-white/10 rounded-3xl p-6 flex items-center gap-5">
                <div class="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl flex-shrink-0">
                  <i class="ph-fill ph-check-circle"></i>
                </div>
                <div>
                  <div class="text-3xl font-black text-white">12+</div>
                  <div class="text-sm text-white/50 font-medium">Active brand scaling partnerships</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────── */}
      <section class="py-24 bg-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>

        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 tracking-tight mb-4">
              Six disciplines. <span class="text-gradient">One integrated team.</span>
            </h2>
            <p class="text-text-secondary max-w-xl mx-auto leading-relaxed">
              We don't hand off work between agencies. Every channel is managed in-house by specialists who collaborate daily around your growth targets.
            </p>
          </div>

          {/* Featured card + grid */}
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">

            {/* Featured: Performance Marketing */}
            <a href={services[0].href} class="group lg:col-span-5 relative rounded-3xl p-8 md:p-10 bg-surface-dark0 overflow-hidden flex flex-col gap-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-secondary/15 blur-3xl pointer-events-none" aria-hidden="true"></div>
              <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" aria-hidden="true"></div>

              <div class="flex items-start justify-between relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center text-3xl">
                  <i class="ph-fill ph-chart-line-up"></i>
                </div>
                <span class="text-white/20 font-black text-4xl">01</span>
              </div>

              <div class="relative z-10 flex-grow">
                <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full mb-4">
                  <i class="ph-fill ph-star"></i> Most Popular
                </div>
                <h3 class="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-secondary-light transition-colors">Performance Marketing</h3>
                <p class="text-white/55 leading-relaxed text-sm md:text-base">
                  Paid media buying across Meta, Google Search, Shopping & Programmatic — written, executed, tested and optimised in-house for maximum ROAS.
                </p>
              </div>

              <div class="relative z-10">
                <div class="flex flex-wrap gap-2 mb-6">
                  {['Google Ads', 'Meta Ads', 'Retargeting'].map(tag => (
                    <span class="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/70">{tag}</span>
                  ))}
                </div>
                <div class="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <i class="ph-fill ph-trend-up text-secondary text-xl"></i>
                  <span class="text-white font-bold text-sm">3.4× average ROAS delivered</span>
                </div>
              </div>

              <div class="relative z-10 flex items-center gap-2 text-secondary font-bold text-sm group-hover:gap-3 transition-all">
                Explore service <i class="ph ph-arrow-right"></i>
              </div>
            </a>

            {/* Right: 5 remaining services in grid */}
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.slice(1).map((s) => (
                <a href={s.href} class="group relative rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col gap-4 bg-surface-1 border border-surface-2 hover:shadow-xl hover:border-primary/25 hover:bg-white">
                  <div class="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" aria-hidden="true"></div>
                  <div class="flex items-start justify-between">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <i class={`ph-fill ${s.icon}`}></i>
                    </div>
                    <span class="text-surface-3 font-black text-2xl group-hover:text-primary/20 transition-colors">{s.label}</span>
                  </div>
                  <div class="flex-grow">
                    <h3 class="text-base font-bold text-surface-dark0 mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p class="text-xs text-text-secondary leading-relaxed">{s.desc}</p>
                  </div>
                  <div class="flex flex-wrap gap-1.5 mt-auto">
                    {s.tags.map(tag => (
                      <span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/5 text-primary">{tag}</span>
                    ))}
                  </div>
                  <div class="flex items-center gap-1.5 text-xs font-semibold text-text-secondary group-hover:text-primary transition-colors">
                    Learn more <i class="ph ph-arrow-right group-hover:translate-x-1 transition-transform inline-block"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────── */}
      <section class="py-24 bg-surface-dark0 relative overflow-hidden border-t border-white/5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(21,68,118,0.2)_0,transparent_60%)] pointer-events-none" aria-hidden="true"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              From brief to <span class="text-gradient">breakthrough</span>
            </h2>
            <p class="text-white/55 leading-relaxed">
              A structured, data-proven launch sequence that transitions your brand to predictable, compounding growth.
            </p>
          </div>

          {/* Horizontal steps with connecting line */}
          <div class="relative">
            {/* Connector line (desktop only) */}
            <div class="hidden lg:block absolute top-10 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden="true"></div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div class="group relative flex flex-col gap-5">
                  {/* Step node */}
                  <div class="relative flex-shrink-0 w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col items-center justify-center gap-1 group-hover:border-secondary/40 group-hover:bg-secondary/10 transition-all duration-300">
                    <i class={`ph-fill ${s.icon} text-2xl text-white/40 group-hover:text-secondary transition-colors`}></i>
                    <span class="text-[10px] font-black text-white/25 group-hover:text-secondary/60 transition-colors">{s.num}</span>
                  </div>
                  <div>
                    <span class="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{s.badge}</span>
                    <h3 class="text-lg font-bold text-white mb-2">{s.title}</h3>
                    <p class="text-sm text-white/45 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────── */}
      <section class="py-20 bg-gradient-to-br from-primary via-[#0f3060] to-surface-dark0 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-secondary/20 blur-[80px] pointer-events-none" aria-hidden="true"></div>
        <div class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-light/10 blur-[80px] pointer-events-none" aria-hidden="true"></div>
        <div class="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
            <i class="ph-fill ph-lightning"></i> Limited slots open this month
          </span>
          <h2 class="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to turn spend<br />into scalable revenue?
          </h2>
          <p class="text-white/55 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call. We'll audit your current marketing and show you exactly how we'd scale you.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-secondary-light transition-all shadow-xl shadow-secondary/30 hover:scale-[1.02]">
              Book Your Free Strategy Call <i class="ph ph-arrow-right"></i>
            </a>
            <a href={routes.ourWork.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/80 rounded-full font-semibold hover:bg-white/10 transition-all">
              See Client Results
            </a>
          </div>
          <div class="flex flex-wrap justify-center gap-6 mt-8 text-xs text-white/30 font-medium">
            <span class="flex items-center gap-1.5"><i class="ph-fill ph-check text-secondary"></i> No commitment required</span>
            <span class="flex items-center gap-1.5"><i class="ph-fill ph-check text-secondary"></i> 30-minute discovery call</span>
            <span class="flex items-center gap-1.5"><i class="ph-fill ph-check text-secondary"></i> Free custom growth plan</span>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <TestimonialsSection />

    </Layout>
  )
}

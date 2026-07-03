import { routes } from '../routes.ts'
import { Layout } from './layout.tsx'
import { PillBadge, TestimonialsSection } from './shared.tsx'

const services = [
  {
    num: '01',
    icon: 'ph-chart-line-up',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    accent: 'from-secondary/20 to-transparent',
    title: 'Performance Marketing',
    subtitle: 'Google · Meta · Programmatic',
    desc: 'Paid media buying across Meta, Google Search, Shopping & Programmatic — written, executed, A/B-tested and optimised in-house. We own the entire funnel: creative, copy, audience, bid strategy, and landing page.',
    bullets: ['Google Ads & Shopping', 'Meta & Instagram Ads', 'Audience & Retargeting', 'Creative A/B Testing'],
    metric: '3.4× avg ROAS',
    href: routes.servicesPerformanceAds.href(),
  },
  {
    num: '02',
    icon: 'ph-heart',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    accent: 'from-pink-500/15 to-transparent',
    title: 'Social Media Management',
    subtitle: 'Instagram · TikTok · LinkedIn',
    desc: 'Organic platform strategies built for compounding reach — not vanity metrics. We handle content calendars, short-form video production, community management, and audience growth across every channel.',
    bullets: ['Content Strategy & Calendar', 'Short-form Video (Reels / TikTok)', 'Community Management', 'Follower Growth Campaigns'],
    metric: '280K followers in 6 mo.',
    href: routes.servicesSocialMedia.href(),
  },
  {
    num: '03',
    icon: 'ph-megaphone',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    accent: 'from-violet-500/15 to-transparent',
    title: 'Digital PR & Influencer',
    subtitle: 'Media · Creators · Backlinks',
    desc: 'Curated influencer partnerships and strategic press coverage that build domain authority, brand trust, and referral traffic. We source, brief, manage, and report on every collaboration.',
    bullets: ['Influencer Gifting & Campaigns', 'Media Outreach & Coverage', 'Brand Collaborations', 'Backlink Building'],
    metric: null,
    href: routes.servicesDigitalPr.href(),
  },
  {
    num: '04',
    icon: 'ph-film-slate',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    accent: 'from-orange-500/15 to-transparent',
    title: 'Creative Production',
    subtitle: 'Video · Photo · Motion',
    desc: 'High-quality video shoots, scroll-stopping ad creatives, product photography, and motion graphics — everything your campaigns need, produced by our in-house studio team.',
    bullets: ['Brand & Product Video', 'Social Ad Creatives', 'Product Photography', 'Motion Graphics & Reels'],
    metric: null,
    href: routes.servicesProduction.href(),
  },
  {
    num: '05',
    icon: 'ph-desktop',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    accent: 'from-emerald-500/15 to-transparent',
    title: 'Web & Landing Pages',
    subtitle: 'CRO · SEO · E-commerce',
    desc: 'High-speed, mobile-first websites, Shopify stores, and conversion-optimised landing pages built to rank and convert. We design, develop, and continuously optimise for maximum revenue per visitor.',
    bullets: ['Custom Website Development', 'Shopify & E-commerce', 'Landing Page CRO', 'Technical SEO'],
    metric: null,
    href: routes.servicesWebSolutions.href(),
  },
  {
    num: '06',
    icon: 'ph-bezier-curve',
    color: 'text-primary-light',
    bg: 'bg-primary/10',
    accent: 'from-primary/15 to-transparent',
    title: 'Design & Copywriting',
    subtitle: 'Brand · Copy · Identity',
    desc: 'Visual brand identity, ad asset design, and persuasive sales copy for email flows, landing pages, and social ads. Every word and pixel is crafted to move people toward a purchase decision.',
    bullets: ['Brand Identity & Guidelines', 'Ad Creative Design', 'Sales & Email Copywriting', 'UX & Landing Page Copy'],
    metric: null,
    href: routes.servicesDesignCopy.href(),
  },
]

export function ServicesPage() {
  return () => (
    <Layout
      title="Paid Media, Social & Design Services | Bell Bee Media"
      description="Explore Bell Bee Media's growth services: performance marketing (Google & Meta Ads), organic social media management, creative production, and web solutions."
    >

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section class="relative bg-surface-dark0 overflow-hidden pt-28 pb-16">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(21,68,118,0.5)_0,transparent_70%)] pointer-events-none" aria-hidden="true"></div>
        <div class="absolute inset-0 opacity-[0.035] pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px); background-size: 48px 48px;" aria-hidden="true"></div>

        <div class="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div class="flex justify-center mb-5">
            <PillBadge icon="ph-squares-four" text="What We Do" dark={true} />
          </div>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 tracking-tight leading-[1.05]">
            Six services.<br class="hidden sm:block" /> One revenue engine.
          </h1>
          <p class="text-base md:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
            Every service we offer is designed to connect to the others. No siloed agencies, no dropped handoffs — just a single integrated team working toward your growth number.
          </p>

          {/* Inline Stats */}
          <div class="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
            <div class="bg-white/[0.05] border border-white/10 rounded-2xl py-4 px-3 text-center">
              <div class="text-2xl font-black text-white">3.4×</div>
              <div class="text-[11px] text-white/45 font-medium mt-0.5">Avg ROAS</div>
            </div>
            <div class="bg-white/[0.05] border border-white/10 rounded-2xl py-4 px-3 text-center">
              <div class="text-2xl font-black text-white">35+</div>
              <div class="text-[11px] text-white/45 font-medium mt-0.5">Yrs Combined XP</div>
            </div>
            <div class="bg-white/[0.05] border border-white/10 rounded-2xl py-4 px-3 text-center">
              <div class="text-2xl font-black text-white">12+</div>
              <div class="text-[11px] text-white/45 font-medium mt-0.5">Active Clients</div>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-3">
            <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full font-bold hover:bg-secondary-light transition-all shadow-lg shadow-secondary/30 hover:scale-[1.02] text-sm">
              Get a Free Strategy Call <i class="ph ph-arrow-right"></i>
            </a>
            <a href={routes.ourWork.href()} class="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white/80 rounded-full font-semibold hover:bg-white/10 transition-all text-sm">
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ─────────────────────────────────────── */}
      <section class="py-6 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="flex flex-col divide-y divide-surface-2">
            {services.map((s, i) => (
              <a
                href={s.href}
                class="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 hover:bg-surface-1 transition-colors duration-200 px-4 -mx-4 rounded-2xl"
              >
                {/* Left: Number + Icon */}
                <div class="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3 lg:pt-1">
                  <span class="text-xs font-black text-text-secondary/40 tracking-widest">{s.num}</span>
                  <div class={`w-10 h-10 rounded-xl ${s.bg} ${s.color} flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <i class={`ph-fill ${s.icon}`}></i>
                  </div>
                </div>

                {/* Middle: Title + desc + bullets */}
                <div class="lg:col-span-7 flex flex-col gap-3">
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-text-secondary/60 mb-1">{s.subtitle}</p>
                    <h2 class={`text-2xl font-black text-surface-dark0 group-hover:${s.color} transition-colors duration-200`}>{s.title}</h2>
                  </div>
                  <p class="text-sm text-text-secondary leading-relaxed max-w-xl">{s.desc}</p>
                  <ul class="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-1">
                    {s.bullets.map(b => (
                      <li class="flex items-center gap-2 text-xs text-text-secondary font-medium">
                        <span class={`w-1.5 h-1.5 rounded-full ${s.bg} ${s.color} flex-shrink-0`} style="min-width:6px"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: CTA + optional metric */}
                <div class="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-4">
                  {s.metric && (
                    <div class={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl ${s.bg} ${s.color} text-sm font-bold`}>
                      <i class="ph-fill ph-trend-up text-base"></i>
                      {s.metric}
                    </div>
                  )}
                  <div class={`mt-auto inline-flex items-center gap-2 text-sm font-bold ${s.color} opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:gap-3`}>
                    Explore service <i class="ph ph-arrow-right"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────── */}
      <section class="py-20 bg-surface-dark0 relative overflow-hidden border-t border-white/5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(21,68,118,0.25)_0,transparent_60%)] pointer-events-none" aria-hidden="true"></div>
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <h2 class="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
              From brief to <span class="text-gradient">breakthrough</span>
            </h2>
            <p class="text-white/50 leading-relaxed text-sm">
              A structured, data-proven launch sequence that transitions your brand to predictable, compounding growth.
            </p>
          </div>

          <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Connector line desktop */}
            <div class="hidden lg:block absolute top-9 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true"></div>
            {[
              { num:'01', badge:'Week 1', title:'Discovery & Audit', desc:'We audit your brand, analyse competitor gaps, and find leverage points.', icon:'ph-binoculars' },
              { num:'02', badge:'Week 1–2', title:'Strategic Blueprint', desc:'Custom 30/60/90-day roadmap, KPI framework, and budget allocation.', icon:'ph-map-trifold' },
              { num:'03', badge:'Week 2–3', title:'Execution & Launch', desc:'Creative production, tracking QA, and campaigns go live. Fully managed.', icon:'ph-airplane-takeoff' },
              { num:'04', badge:'Ongoing', title:'Optimise & Scale', desc:'Daily analysis, creative A/B tests, aggressive scaling of winners.', icon:'ph-chart-line-up' },
            ].map(s => (
              <div class="group flex flex-col gap-4">
                <div class="relative w-[72px] h-[72px] rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col items-center justify-center group-hover:border-secondary/50 group-hover:bg-secondary/10 transition-all duration-300">
                  <i class={`ph-fill ${s.icon} text-2xl text-white/35 group-hover:text-secondary transition-colors`}></i>
                </div>
                <div>
                  <span class="text-[11px] font-black uppercase tracking-widest text-secondary block mb-1.5">{s.badge}</span>
                  <h3 class="text-base font-bold text-white mb-1.5">{s.title}</h3>
                  <p class="text-sm text-white/40 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────── */}
      <section class="py-16 bg-gradient-to-br from-primary via-[#0f3060] to-surface-dark0 relative overflow-hidden">
        <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-secondary/20 blur-[80px] pointer-events-none" aria-hidden="true"></div>
        <div class="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary-light/10 blur-[80px] pointer-events-none" aria-hidden="true"></div>
        <div class="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/35 mb-4">
            <i class="ph-fill ph-lightning"></i> Limited slots open this month
          </span>
          <h2 class="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
            Ready to turn spend into scalable revenue?
          </h2>
          <p class="text-white/50 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute strategy call. We'll audit your current marketing and show you exactly how we'd scale you.
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full font-bold hover:bg-secondary-light transition-all shadow-xl shadow-secondary/30 hover:scale-[1.02] text-sm">
              Book Your Free Strategy Call <i class="ph ph-arrow-right"></i>
            </a>
            <a href={routes.ourWork.href()} class="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white/75 rounded-full font-semibold hover:bg-white/10 transition-all text-sm">
              See Client Results
            </a>
          </div>
          <div class="flex flex-wrap justify-center gap-5 mt-6 text-xs text-white/30 font-medium">
            <span class="flex items-center gap-1.5"><i class="ph-fill ph-check text-secondary"></i> No commitment</span>
            <span class="flex items-center gap-1.5"><i class="ph-fill ph-check text-secondary"></i> 30-min call</span>
            <span class="flex items-center gap-1.5"><i class="ph-fill ph-check text-secondary"></i> Free growth plan</span>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <TestimonialsSection />

    </Layout>
  )
}

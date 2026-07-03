import { routes } from '../routes.ts'
import { Layout } from './layout.tsx'
import { PillBadge, TestimonialsSection } from './shared.tsx'

const services = [
  {
    num: '01',
    icon: 'ph-chart-line-up',
    colorClass: 'text-secondary',
    iconBg: 'bg-secondary/20',
    borderHover: 'hover:border-secondary/40',
    glowColor: 'bg-secondary/10',
    title: 'Performance Marketing',
    subtitle: 'Google · Meta · Programmatic',
    desc: 'Paid media buying across Meta, Google Search, Shopping & Programmatic — written, executed, A/B-tested and optimised in-house.',
    bullets: ['Google Ads & Shopping', 'Meta & Instagram Ads', 'Audience & Retargeting', 'Creative A/B Testing'],
    metric: '3.4× avg ROAS',
    href: routes.servicesPerformanceAds.href(),
  },
  {
    num: '02',
    icon: 'ph-heart',
    colorClass: 'text-pink-400',
    iconBg: 'bg-pink-500/20',
    borderHover: 'hover:border-pink-500/40',
    glowColor: 'bg-pink-500/10',
    title: 'Social Media Management',
    subtitle: 'Instagram · TikTok · LinkedIn',
    desc: 'Organic platform strategies built for compounding reach — content calendars, short-form video, community management, and audience growth.',
    bullets: ['Content Strategy & Calendar', 'Short-form Video (Reels/TikTok)', 'Community Management', 'Follower Growth Campaigns'],
    metric: '280K followers in 6 mo.',
    href: routes.servicesSocialMedia.href(),
  },
  {
    num: '03',
    icon: 'ph-megaphone',
    colorClass: 'text-violet-400',
    iconBg: 'bg-violet-500/20',
    borderHover: 'hover:border-violet-500/40',
    glowColor: 'bg-violet-500/10',
    title: 'Digital PR & Influencer',
    subtitle: 'Media · Creators · Backlinks',
    desc: 'Curated influencer partnerships and press coverage that build domain authority, brand trust, and referral traffic at scale.',
    bullets: ['Influencer Gifting & Campaigns', 'Media Outreach & Coverage', 'Brand Collaborations', 'Backlink Building'],
    metric: null,
    href: routes.servicesDigitalPr.href(),
  },
  {
    num: '04',
    icon: 'ph-film-slate',
    colorClass: 'text-orange-400',
    iconBg: 'bg-orange-500/20',
    borderHover: 'hover:border-orange-500/40',
    glowColor: 'bg-orange-500/10',
    title: 'Creative Production',
    subtitle: 'Video · Photo · Motion',
    desc: 'High-quality video shoots, scroll-stopping ad creatives, product photography, and motion graphics — produced in-house by our studio team.',
    bullets: ['Brand & Product Video', 'Social Ad Creatives', 'Product Photography', 'Motion Graphics & Reels'],
    metric: null,
    href: routes.servicesProduction.href(),
  },
  {
    num: '05',
    icon: 'ph-desktop',
    colorClass: 'text-emerald-400',
    iconBg: 'bg-emerald-500/20',
    borderHover: 'hover:border-emerald-500/40',
    glowColor: 'bg-emerald-500/10',
    title: 'Web & Landing Pages',
    subtitle: 'CRO · SEO · E-commerce',
    desc: 'High-speed, mobile-first websites, Shopify stores, and conversion-optimised landing pages built to rank and convert.',
    bullets: ['Custom Website Development', 'Shopify & E-commerce', 'Landing Page CRO', 'Technical SEO'],
    metric: null,
    href: routes.servicesWebSolutions.href(),
  },
  {
    num: '06',
    icon: 'ph-bezier-curve',
    colorClass: 'text-primary-light',
    iconBg: 'bg-primary/25',
    borderHover: 'hover:border-primary/50',
    glowColor: 'bg-primary/10',
    title: 'Design & Copywriting',
    subtitle: 'Brand · Copy · Identity',
    desc: 'Visual brand identity, ad asset design, and persuasive sales copy for email flows, landing pages, and social ads — every word crafted to convert.',
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

      {/* ── HERO — Split layout with metric cards ──────────── */}
      <section class="relative bg-surface-dark0 overflow-hidden pt-28 pb-16">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_-10%,rgba(21,68,118,0.5)_0,transparent_65%)] pointer-events-none" aria-hidden="true"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_5%_100%,rgba(255,140,0,0.08)_0,transparent_55%)] pointer-events-none" aria-hidden="true"></div>
        <div class="absolute inset-0 opacity-[0.035] pointer-events-none" style="background-image: linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px); background-size: 48px 48px;" aria-hidden="true"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Copy */}
            <div class="lg:col-span-7">
              <div class="flex mb-4">
                <PillBadge icon="ph-squares-four" text="What We Do" dark={true} />
              </div>
              <h1 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-[1.05]">
                Everything your brand<br class="hidden sm:block" /> needs to <span class="text-gradient">scale fast.</span>
              </h1>
              <p class="text-base text-white/55 leading-relaxed mb-7 max-w-lg">
                Paid media, organic social, creative production, and conversion-focused web — all under one roof, aligned to a single revenue goal.
              </p>
              <div class="flex flex-wrap gap-3">
                <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full font-bold hover:bg-secondary-light transition-all shadow-lg shadow-secondary/30 hover:scale-[1.02] text-sm">
                  Get a Free Strategy Call <i class="ph ph-arrow-right"></i>
                </a>
                <a href={routes.ourWork.href()} class="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white/75 rounded-full font-semibold hover:bg-white/10 transition-all text-sm">
                  See Our Results
                </a>
              </div>
            </div>

            {/* Right: Metric cards */}
            <div class="lg:col-span-5 hidden lg:flex flex-col gap-3">
              <div class="bg-white/[0.04] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-secondary/30 transition-colors">
                <div class="w-11 h-11 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center text-xl flex-shrink-0">
                  <i class="ph-fill ph-trend-up"></i>
                </div>
                <div>
                  <div class="text-2xl font-black text-white">3.4×</div>
                  <div class="text-xs text-white/45 font-medium">Average ROAS across all clients</div>
                </div>
              </div>
              <div class="bg-white/[0.04] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors">
                <div class="w-11 h-11 rounded-xl bg-primary/25 text-primary-light flex items-center justify-center text-xl flex-shrink-0">
                  <i class="ph-fill ph-users-three"></i>
                </div>
                <div>
                  <div class="text-2xl font-black text-white">35+</div>
                  <div class="text-xs text-white/45 font-medium">Years of combined specialist experience</div>
                </div>
              </div>
              <div class="bg-white/[0.04] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:border-emerald-500/30 transition-colors">
                <div class="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl flex-shrink-0">
                  <i class="ph-fill ph-check-circle"></i>
                </div>
                <div>
                  <div class="text-2xl font-black text-white">12+</div>
                  <div class="text-xs text-white/45 font-medium">Active brand scaling partnerships</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES CARDS — dark bento grid ─────────────────── */}
      <section class="py-16 bg-[#0b1929] relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(21,68,118,0.2)_0,transparent_60%)] pointer-events-none" aria-hidden="true"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
              Six disciplines. <span class="text-gradient">One integrated team.</span>
            </h2>
            <p class="text-white/45 text-sm max-w-xl mx-auto leading-relaxed">
              Every channel managed in-house by specialists who collaborate daily around your growth targets.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <a
                href={s.href}
                class={`group relative flex flex-col gap-5 rounded-2xl p-6 bg-white/[0.03] border border-white/[0.07] ${s.borderHover} hover:bg-white/[0.06] transition-all duration-300 overflow-hidden`}
              >
                {/* Glow on hover */}
                <div class={`absolute -top-12 -right-12 w-36 h-36 rounded-full ${s.glowColor} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} aria-hidden="true"></div>

                {/* Top row: icon + number */}
                <div class="flex items-start justify-between relative z-10">
                  <div class={`w-12 h-12 rounded-xl ${s.iconBg} ${s.colorClass} flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <i class={`ph-fill ${s.icon}`}></i>
                  </div>
                  <span class="text-2xl font-black text-white/10 group-hover:text-white/20 transition-colors">{s.num}</span>
                </div>

                {/* Content */}
                <div class="relative z-10 flex-grow flex flex-col gap-2">
                  <p class={`text-[11px] font-bold uppercase tracking-widest ${s.colorClass} opacity-70`}>{s.subtitle}</p>
                  <h3 class="text-lg font-bold text-white group-hover:text-white transition-colors">{s.title}</h3>
                  <p class="text-sm text-white/45 leading-relaxed">{s.desc}</p>
                </div>

                {/* Bullets */}
                <ul class="relative z-10 grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {s.bullets.map(b => (
                    <li class={`flex items-center gap-1.5 text-[11px] font-medium text-white/40 group-hover:text-white/60 transition-colors`}>
                      <span class={`w-1 h-1 rounded-full ${s.colorClass} opacity-60 flex-shrink-0`} style="min-width:4px;min-height:4px"></span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div class="relative z-10 flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  {s.metric ? (
                    <span class={`text-xs font-bold ${s.colorClass} flex items-center gap-1.5`}>
                      <i class="ph-fill ph-trend-up"></i> {s.metric}
                    </span>
                  ) : <span />}
                  <span class={`inline-flex items-center gap-1 text-xs font-bold ${s.colorClass} opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:gap-2`}>
                    Explore <i class="ph ph-arrow-right text-xs"></i>
                  </span>
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
            <p class="text-white/45 text-sm leading-relaxed">
              A structured, data-proven launch sequence that transitions your brand to predictable, compounding growth.
            </p>
          </div>
          <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="hidden lg:block absolute top-9 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true"></div>
            {[
              { num:'01', badge:'Week 1', title:'Discovery & Audit', desc:'We audit your brand, analyse competitor gaps, and find leverage points.', icon:'ph-binoculars' },
              { num:'02', badge:'Week 1–2', title:'Strategic Blueprint', desc:'Custom 30/60/90-day roadmap, KPI framework, and budget allocation.', icon:'ph-map-trifold' },
              { num:'03', badge:'Week 2–3', title:'Execution & Launch', desc:'Creative production, tracking QA, and campaigns go live. Fully managed.', icon:'ph-airplane-takeoff' },
              { num:'04', badge:'Ongoing', title:'Optimise & Scale', desc:'Daily analysis, creative A/B tests, aggressive scaling of winning campaigns.', icon:'ph-chart-line-up' },
            ].map(s => (
              <div class="group flex flex-col gap-4">
                <div class="w-[72px] h-[72px] rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-secondary/50 group-hover:bg-secondary/10 transition-all duration-300">
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
            Ready to turn spend<br /> into scalable revenue?
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

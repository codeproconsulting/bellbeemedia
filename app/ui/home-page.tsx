import { routes } from '../routes.ts'
import { Layout } from './layout.tsx'
import { PillBadge, TestimonialsSection, ProcessSection } from './shared.tsx'
import { IntegratedGrowthSection } from './integrated-growth-section.tsx'

export function HomePage() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BellBee Media",
    "url": "https://bellbeemedia.com",
    "logo": "https://bellbeemedia.com/Logo.svg",
    "image": "https://bellbeemedia.com/og-image.jpg",
    "description": "Paid Media, Social & Creative agency driving measurable revenue for growing brands.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office #204, Vista Building",
      "addressLocality": "Islamabad",
      "addressRegion": "I8 Markaz",
      "postalCode": "44000",
      "addressCountry": "PK"
    },
    "telephone": "+923701902120",
    "email": "hello@bellbeemedia.com",
    "priceRange": "$$$",
    "sameAs": [
      "https://www.facebook.com/bellbeemedia",
      "https://www.instagram.com/bellbeemedia",
      "https://www.linkedin.com/company/bellbeemedia"
    ]
  };

  return () => (
    <Layout
      title="Bell Bee Media | Paid Media, Social & Creative Agency"
      description="Paid Media, Social & Creative agency driving measurable revenue for growing consumer brands. No fluff, just revenue."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >

      {/* ── Hero ─────────────────────────────────────────── */}
      <section class="relative bg-white pt-28 pb-20 overflow-hidden bb-noise">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div class="absolute top-[20%] left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Copy */}
            <div class="lg:col-span-7 flex flex-col items-start text-left">
              <h1 class="bb-stage text-4xl md:text-6xl font-black text-surface-dark0 tracking-tight leading-[1.1] mb-6" style="animation-delay:0.1s">
                Paid Media, Social <br />
                & Creative <span class="bb-shimmer-text font-black">Built for Growth</span>
              </h1>
              <p class="bb-stage text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl" style="animation-delay:0.25s">
                We manage paid acquisition, organic social channels, and high-performance creative assets for growing consumer brands. No fluff, just revenue.
              </p>
              <div class="bb-stage flex flex-wrap gap-4" style="animation-delay:0.4s">
                <a href={routes.getProposal.href()} data-glow-btn class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
                  Get a Free Strategy Session <i class="ph ph-arrow-right"></i>
                </a>
                <a href={routes.services.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-surface-3 text-surface-dark1 rounded-full font-semibold hover:bg-surface-1 transition-all">
                  Our Services
                </a>
              </div>

              {/* Hero Testimonial Strip */}
              <div class="bb-stage mt-10 p-4 rounded-2xl bg-surface-1/80 border border-surface-2 flex items-center gap-4 max-w-xl backdrop-blur-sm shadow-sm" style="animation-delay:0.5s">
                <div class="w-11 h-11 rounded-full bg-secondary/15 text-secondary font-black flex items-center justify-center text-sm shrink-0 border border-secondary/20">
                  RP
                </div>
                <div class="flex flex-col gap-0.5">
                  <div class="flex items-center gap-2">
                    <div class="flex text-amber-500 text-xs">
                      <i class="ph-fill ph-star"></i>
                      <i class="ph-fill ph-star"></i>
                      <i class="ph-fill ph-star"></i>
                      <i class="ph-fill ph-star"></i>
                      <i class="ph-fill ph-star"></i>
                    </div>
                    <span class="text-xs font-bold text-surface-dark0">4.9/5 Verified Client Feedback</span>
                  </div>
                  <p class="text-xs text-text-secondary italic">
                    "CAC dropped 48% and ROAS hit 4.5x within 90 days of working with Bell Bee."
                  </p>
                  <span class="text-[11px] text-surface-dark1 font-semibold">— Rahul Patel, CEO @ FabFashion</span>
                </div>
              </div>

              {/* Stats directly under Verified Client Feedback box on the left */}
              <div class="bb-stage mt-8 pt-6 border-t border-surface-2 w-full max-w-xl" style="animation-delay:0.6s">
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left" data-stagger-group>
                  <div class="flex flex-col gap-1 group" data-stagger-item>
                    <span data-count="5" class="text-3xl sm:text-4xl font-black text-surface-dark0 group-hover:text-primary transition-colors duration-300">5</span>
                    <span class="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Expert Specialists</span>
                  </div>
                  <div class="flex flex-col gap-1 group" data-stagger-item>
                    <span data-count="5+" class="text-3xl sm:text-4xl font-black text-surface-dark0 group-hover:text-primary transition-colors duration-300">5+</span>
                    <span class="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Years Experience</span>
                  </div>
                  <div class="flex flex-col gap-1 group" data-stagger-item>
                    <span data-count="3.4x" class="text-3xl sm:text-4xl font-black text-surface-dark0 group-hover:text-primary transition-colors duration-300">3.4x</span>
                    <span class="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Avg. ROAS Delivered</span>
                  </div>
                  <div class="flex flex-col gap-1 group" data-stagger-item>
                    <span data-count="100+" class="text-3xl sm:text-4xl font-black text-surface-dark0 group-hover:text-primary transition-colors duration-300">100+</span>
                    <span class="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Campaigns Delivered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic */}
            <div class="bb-stage lg:col-span-5 relative w-full h-[420px] flex items-center justify-center" style="animation-delay:0.5s">
              <div class="absolute w-[300px] h-[300px] rounded-full bg-secondary/15 blur-[60px] pointer-events-none"></div>
              <div data-tilt class="bb-border-beam w-full max-w-[380px] bg-surface-dark0 rounded-3xl border border-surface-dark2 p-6 shadow-2xl relative z-10 flex flex-col gap-6">
                <div class="flex justify-between items-center pb-4 border-b border-surface-dark2/60">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                  </div>
                  <div class="flex items-center gap-1.5 text-[10px] text-white/30 font-mono tracking-wider">
                    <span class="bb-live-dot"></span>
                    LIVE ANALYTICS
                  </div>
                </div>
                <div class="flex justify-between items-end h-24 gap-3 bg-surface-dark1 p-4 rounded-xl border border-surface-dark2/40">
                  <div class="w-full bg-primary/20 rounded-md h-[40%]"></div>
                  <div class="w-full bg-primary/40 rounded-md h-[65%]"></div>
                  <div class="w-full bg-primary/60 rounded-md h-[85%]"></div>
                  <div class="w-full bg-primary rounded-md h-full"></div>
                  <div class="w-full bg-primary/80 rounded-md h-[70%]"></div>
                </div>
                <div class="flex flex-col gap-2">
                  <div class="h-3 w-full bg-surface-dark2 rounded"></div>
                  <div class="h-3 w-5/6 bg-surface-dark2 rounded"></div>
                  <div class="h-3 w-2/3 bg-surface-dark2 rounded"></div>
                </div>
              </div>

              {/* Floating Widget 1 — ROAS badge */}
              <div class="bb-float-a absolute -top-4 -left-4 w-48 bg-white p-4 rounded-2xl shadow-xl border border-surface-2 z-20">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-lg"><i class="ph-fill ph-trend-up"></i></div>
                  <div>
                    <div class="text-xs font-bold text-surface-dark0">ROAS</div>
                    <div class="text-[10px] text-text-secondary">Latest Campaign</div>
                  </div>
                </div>
                <div class="text-lg font-black text-green-600">4.5×</div>
              </div>

              {/* Floating Widget 2 — Reach this month */}
              <div class="bb-float-b absolute -bottom-4 -right-4 w-52 bg-white p-4 rounded-2xl shadow-xl border border-surface-2 z-20">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center text-lg"><i class="ph-fill ph-lightning"></i></div>
                  <div>
                    <div class="text-xs font-bold text-surface-dark0">Reach This Month</div>
                    <div class="text-[10px] text-text-secondary">Across All Clients</div>
                  </div>
                </div>
                <div class="flex gap-1 h-8 items-end">
                  <span class="w-full bg-secondary/30 rounded-sm h-[30%]"></span>
                  <span class="w-full bg-secondary/50 rounded-sm h-[60%]"></span>
                  <span class="w-full bg-secondary rounded-sm h-[90%]"></span>
                  <span class="w-full bg-secondary/70 rounded-sm h-[40%]"></span>
                  <span class="w-full bg-secondary/80 rounded-sm h-[75%]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services (Search, Social & Creative Trajectory) ── */}
      <IntegratedGrowthSection />

      {/* ── Process ──────────────────────────────────────── */}
      <ProcessSection />

      {/* ── Testimonials ─────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── FAQ Section ──────────────────────────────────── */}
      <FaqSection />

      {/* ── Premium CTA ──────────────────────────────────── */}
      <section class="py-24 bg-white relative overflow-hidden">
        <div class="container mx-auto px-4 max-w-5xl">
          <div data-reveal="scale" class="bg-gradient-to-br from-primary via-[#0f3060] to-surface-dark0 p-10 md:p-20 rounded-[40px] text-white overflow-hidden relative shadow-2xl">
            <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-secondary/25 blur-[80px] pointer-events-none"></div>
            <div class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-light/15 blur-[80px] pointer-events-none"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] border border-white/5 pointer-events-none"></div>

            <div class="relative z-10 max-w-2xl mx-auto text-center">
              <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
                <i class="ph-fill ph-lightning"></i> Limited slots open this month
              </span>
              <h2 class="text-3xl md:text-5xl font-black mb-6 leading-tight">
                Ready to turn your marketing into a revenue engine?
              </h2>
              <p class="text-base md:text-lg text-white/60 mb-10 leading-relaxed">
                Book a free 30-minute strategy call. We'll audit your current marketing, identify the biggest growth levers, and show you exactly how we'd scale you.
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <a href={routes.getProposal.href()} data-glow-btn class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-secondary-light transition-all shadow-xl shadow-secondary/30 hover:scale-[1.02] active:scale-[0.98]">
                  Book Your Free Strategy Call <i class="ph ph-arrow-right"></i>
                </a>
                <a href={routes.ourWork.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/80 rounded-full font-semibold hover:bg-white/10 hover:text-white transition-all">
                  See Our Results
                </a>
              </div>
              {/* Trust signals */}
              <div class="flex flex-wrap justify-center gap-6 mt-10 text-xs text-white/30 font-medium">
                <span class="flex items-center gap-1.5"><i class="ph-fill ph-check text-secondary"></i> No commitment required</span>
                <span class="flex items-center gap-1.5"><i class="ph-fill ph-check text-secondary"></i> 30-minute discovery call</span>
                <span class="flex items-center gap-1.5"><i class="ph-fill ph-check text-secondary"></i> Free custom growth plan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}

const HOME_SERVICES = [
  {
    num: '01',
    icon: 'ph-chats',
    title: 'Social Media Management',
    desc: 'Content, community and growth across every feed, planned around what converts.',
    bullets: [
      'Content calendar and community management',
      'Short-form video for Reels and TikTok',
      'Monthly growth and engagement reports',
    ],
    tags: ['Instagram', 'TikTok', 'LinkedIn'],
    outcomeLabel: 'followers in 6 months',
    outcomeStat: '280K',
    href: routes.servicesSocialMedia.href(),
  },
  {
    num: '02',
    icon: 'ph-chart-line-up',
    title: 'Performance Marketing',
    desc: 'Paid acquisition built on weekly testing, so every rupee works harder.',
    bullets: [
      'Meta, Google and retargeting funnels',
      'Weekly creative and budget tests',
      'ROAS and CAC dashboards you can read',
    ],
    tags: ['Google Ads', 'Meta Ads', 'Retargeting'],
    outcomeLabel: 'ROAS within 90 days',
    outcomeStat: '4.5x',
    href: routes.servicesPerformanceAds.href(),
  },
  {
    num: '03',
    icon: 'ph-megaphone',
    title: 'Digital PR & Influencer',
    desc: 'Press, creators and collabs that put your brand in front of the right people.',
    bullets: [
      'Media outreach and coverage',
      'Influencer gifting and collabs',
      'Brand partnerships that scale',
    ],
    tags: ['Media Coverage', 'Influencer Gifting', 'Brand Colabs'],
    outcomeLabel: 'earned reach',
    outcomeStat: '4.2M',
    href: routes.servicesDigitalPr.href(),
  },
  {
    num: '04',
    icon: 'ph-video-camera',
    title: 'Creative Production',
    desc: 'Scroll-stopping ads and short-form video, shot and edited by one team.',
    bullets: [
      'Ad films and UGC-style video',
      'Reels, Shorts and product photography',
      'Scripts, shoots and edits in-house',
    ],
    tags: ['Video Ads', 'Reels & Shorts', 'Photography'],
    outcomeLabel: 'videos produced',
    outcomeStat: '320',
    href: routes.servicesProduction.href(),
  },
  {
    num: '05',
    icon: 'ph-browser',
    title: 'Web & Landing Pages',
    desc: 'Fast pages designed to turn paid and social traffic into customers.',
    bullets: [
      'High-converting landing pages',
      'CRO and A/B testing',
      'SEO-ready e-commerce builds',
    ],
    tags: ['CRO', 'SEO', 'E-commerce'],
    outcomeLabel: 'conversion, up from 2.1%',
    outcomeStat: '4.8%',
    href: routes.servicesWebSolutions.href(),
  },
  {
    num: '06',
    icon: 'ph-drop',
    title: 'Design & Copywriting',
    desc: 'Brand, ad creative and copy that look and sound like one company.',
    bullets: [
      'Brand identity and guidelines',
      'Ad creatives for every platform',
      'UX copy and ad copywriting',
    ],
    tags: ['Branding', 'Ad Creatives', 'UX Copy'],
    outcomeLabel: 'assets delivered',
    outcomeStat: '1,200+',
    href: routes.servicesDesignCopy.href(),
  },
]

function renderServiceIcon(index: number) {
  if (index === 0) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-7l-4 3.5V17H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
        <path stroke="#f0641e" d="M12 14s-3.2-1.9-3.2-4.2a1.7 1.7 0 0 1 3.2-.8 1.7 1.7 0 0 1 3.2.8C15.2 12.1 12 14 12 14z" />
      </svg>
    )
  }
  if (index === 1) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 21v-6M11 21v-9M17 21v-5" />
        <path stroke="#f0641e" d="M3 10l6-5 4 3 7-6" />
        <path stroke="#f0641e" d="M15 2h5v5" />
      </svg>
    )
  }
  if (index === 2) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 10v4a1 1 0 0 0 1 1h3l6 4V5L7 9H4a1 1 0 0 0-1 1z" />
        <path stroke="#f0641e" d="M16.5 9a4 4 0 0 1 0 6" />
        <path stroke="#f0641e" d="M19.5 6.5a8 8 0 0 1 0 11" />
      </svg>
    )
  }
  if (index === 3) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4.5 6h8A2.5 2.5 0 0 1 15 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 2 15.5v-7A2.5 2.5 0 0 1 4.5 6z" />
        <path stroke="#f0641e" d="M15 10.5l6-3.5v10l-6-3.5" />
      </svg>
    )
  }
  if (index === 4) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11A2.5 2.5 0 0 1 4.5 4z" />
        <path d="M2 9h20" />
        <path stroke="#f0641e" d="M10 12.5l7 3-3 1.2-1.2 3z" />
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 2.5l6.5 9-3 8.5h-7l-3-8.5z" />
      <path stroke="#f0641e" d="M12 10v6" />
      <circle cx="12" cy="8.2" r="1.2" stroke="#f0641e" fill="#f0641e" />
    </svg>
  )
}

function ServicesShowcaseGrid() {
  return () => (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {HOME_SERVICES.map((s, idx) => (
        <div class="relative bg-white rounded-[26px] p-6 lg:p-7 flex flex-col justify-between border border-white/20 shadow-xl shadow-black/[0.04] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden">
          {/* Animated top border line on hover: shoots left-to-right */}
          <div class="absolute top-0 left-0 right-0 h-[3.5px] bg-[#e56026] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10"></div>

          <div>
            {/* Top row: Custom dual-tone SVG badge + Number */}
            <div class="flex items-center justify-between mb-5">
              <div class="w-12 h-12 rounded-2xl bg-blue-50/80 text-[#0b4a94] flex items-center justify-center transition-all duration-300 group-hover:bg-[#0b4a94] group-hover:text-white shadow-sm">
                {renderServiceIcon(idx)}
              </div>
              <span class="text-xs font-bold text-slate-300 group-hover:text-primary transition-colors duration-300">
                {s.num}
              </span>
            </div>

            {/* Title */}
            <h3 class="text-lg lg:text-xl font-extrabold text-[#0a2447] tracking-tight mb-2 group-hover:text-primary transition-colors">
              {s.title}
            </h3>

            {/* Description */}
            <p class="text-xs lg:text-[13px] text-slate-500 leading-relaxed mb-6">
              {s.desc}
            </p>

            {/* Feature Bullets */}
            <ul class="space-y-3 mb-6">
              {s.bullets.map((b) => (
                <li class="flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-snug">
                  <i class="ph-fill ph-check-circle text-secondary text-sm shrink-0 mt-0.5"></i>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Tags */}
            <div class="flex flex-wrap gap-1.5 mb-5">
              {s.tags.map((t) => (
                <span class="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100/90 text-slate-600 border border-slate-200/50">
                  {t}
                </span>
              ))}
            </div>

            {/* Typical Outcome */}
            <div class="bg-slate-50/90 rounded-2xl p-4 flex items-center justify-between border border-slate-100 mb-5">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Typical Outcome
                </span>
                <span class="text-xs font-semibold text-slate-600">
                  {s.outcomeLabel}
                </span>
              </div>
              <span class="text-2xl font-black text-primary tracking-tight">
                {s.outcomeStat}
              </span>
            </div>

            {/* Learn More */}
            <a
              href={s.href}
              class="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors group/link"
            >
              <span>Learn more</span>
              <i class="ph-bold ph-arrow-right text-xs transition-transform duration-200 group-hover/link:translate-x-1"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

function FaqSection() {
  return () => (
    <section class="py-24 bg-surface-1 border-t border-surface-2 relative overflow-hidden">
      {/* Decorative subtle glows */}
      <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

      <div class="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 data-reveal class="text-4xl md:text-5xl font-black text-surface-dark0 mb-4 tracking-tight">
            Frequently Asked <span class="bb-shimmer-text">Questions</span>
          </h2>
          <p data-reveal data-reveal-delay="100" class="text-text-secondary leading-relaxed">
            Everything you need to know about our workflow, onboarding timelines, and campaign optimization.
          </p>
        </div>

        {/* FAQs using details/summary for clean SEO structure */}
        <div class="flex flex-col gap-4">
          <details class="group bg-white border border-surface-2 rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 list-none cursor-pointer">
              <h3>How does BellBee Media deliver data-led marketing results?</h3>
              <span class="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                <i class="ph ph-caret-down"></i>
              </span>
            </summary>
            <div class="mt-4 text-text-secondary leading-relaxed border-t border-surface-2 pt-4">
              We deliver results by combining real-time performance analytics with native customer insights. We audit your brand positioning and competitor gap matrix to engineer high-converting funnel pipelines, leading to an average ROAS of 3.4x across Meta, Google, and programmatic platforms.
            </div>
          </details>

          <details class="group bg-white border border-surface-2 rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 list-none cursor-pointer">
              <h3>What is the typical timeline to launch a new campaign?</h3>
              <span class="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                <i class="ph ph-caret-down"></i>
              </span>
            </summary>
            <div class="mt-4 text-text-secondary leading-relaxed border-t border-surface-2 pt-4">
              Our standard campaign onboarding takes two to three weeks. Week one focuses on a discovery brand positioning audit and competitor gap analysis. Week two establishes the strategic blueprint and tracking KPIs. By week three, all creative production is built, approved, and launched.
            </div>
          </details>

          <details class="group bg-white border border-surface-2 rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 list-none cursor-pointer">
              <h3>How does the client onboarding process work?</h3>
              <span class="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                <i class="ph ph-caret-down"></i>
              </span>
            </summary>
            <div class="mt-4 text-text-secondary leading-relaxed border-t border-surface-2 pt-4">
              Onboarding starts with a free 30-minute discovery call where we map your customer personas and budget allocations. Once agreed, we design a customized 30/60/90-day roadmap. Our creative production and media teams then launch the campaigns after your complete approval.
            </div>
          </details>

          <details class="group bg-white border border-surface-2 rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 list-none cursor-pointer">
              <h3>Do you offer performance guarantees or fixed contracts?</h3>
              <span class="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                <i class="ph ph-caret-down"></i>
              </span>
            </summary>
            <div class="mt-4 text-text-secondary leading-relaxed border-t border-surface-2 pt-4">
              We offer flexible, results-driven partnerships. We set clear performance KPIs and success metrics upfront so that you know exactly what outcomes to expect. Our monthly rolling agreements ensure we continuously optimize and scale your campaigns based on real commercial growth.
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}

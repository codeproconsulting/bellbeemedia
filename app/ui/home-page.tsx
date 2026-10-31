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

      {/* ── Premium CTA (Full-Width Dark Navy matching Brand System) ── */}
      <section
        class="relative pt-24 pb-0 md:pt-32 md:pb-0 text-white overflow-hidden"
        style="background-color: #030d1a !important; background-image: radial-gradient(ellipse 65% 55% at 18% 45%, rgba(27, 117, 188, 0.32) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 82% 52%, rgba(247, 148, 29, 0.16) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 50% 50%, rgba(12, 38, 75, 0.4) 0%, transparent 70%) !important;"
      >
        {/* Concentric Radar / Ripple Rings */}
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-white/[0.045] pointer-events-none"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-white/[0.04] pointer-events-none"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] rounded-full border border-white/[0.045] pointer-events-none"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1120px] h-[1120px] rounded-full border border-white/[0.035] pointer-events-none"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1460px] h-[1460px] rounded-full border border-white/[0.025] pointer-events-none"></div>

        {/* Glowing Amber Particle / Flare on the Right */}
        <div
          class="absolute pointer-events-none animate-pulse"
          style="top: 56%; right: 28%; transform: translateY(-50%);"
        >
          <div style="width: 8px; height: 8px; border-radius: 50%; background: #fbb040; box-shadow: 0 0 14px 2px #f7941d, 0 0 28px 4px rgba(251, 176, 64, 0.7);"></div>
        </div>

        <div class="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          {/* Headline with Orange Gradient Highlight */}
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white mb-6 tracking-tight leading-[1.14]">
            Ready to turn your marketing into<br class="hidden sm:inline" />
            {' '}
            <span
              style="background: linear-gradient(135deg, #f7941d 0%, #fbb040 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
            >
              a revenue engine?
            </span>
          </h2>

          {/* Subtitle */}
          <p class="text-slate-300 text-sm sm:text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
            Book a free 30-minute strategy call. We'll audit your current marketing, identify the biggest growth levers, and show you exactly how we'd scale you.
          </p>

          {/* Action Buttons */}
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a
              href={routes.getProposal.href()}
              class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white text-sm sm:text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style="background: linear-gradient(135deg, #f7941d 0%, #fa7c05 100%); box-shadow: 0 10px 28px -4px rgba(247, 148, 29, 0.55), 0 0 20px rgba(247, 148, 29, 0.3);"
            >
              <span>Book Your Free Strategy Call</span>
              <i class="ph-bold ph-arrow-right"></i>
            </a>
            <a
              href={routes.ourWork.href()}
              class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white/90 text-sm sm:text-base transition-all duration-300 hover:bg-[#154476]/80 hover:text-white hover:border-[#78b4cc]/60"
              style="background: rgba(12, 36, 68, 0.65); border: 1px solid rgba(120, 180, 204, 0.35); backdrop-filter: blur(8px);"
            >
              <span>See Our Results</span>
            </a>
          </div>

          {/* Trust Signals with Orange Checkmarks */}
          <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10 mb-4 text-xs sm:text-sm text-slate-300/90 font-medium">
            <span class="flex items-center gap-2">
              <i class="ph-bold ph-check text-[#f7941d] text-base"></i> No commitment required
            </span>
            <span class="flex items-center gap-2">
              <i class="ph-bold ph-check text-[#f7941d] text-base"></i> 30-minute discovery call
            </span>
            <span class="flex items-center gap-2">
              <i class="ph-bold ph-check text-[#f7941d] text-base"></i> Free custom growth plan
            </span>
          </div>
        </div>

        {/* Flowing Silk Wave Ribbon directly below trust signals matching screenshot */}
        <div class="relative w-full overflow-hidden pointer-events-none" style="height: 80px; margin-top: 14px; margin-bottom: 0px;">
          <style>{`
            @keyframes bbSilkFlowLR {
              0% {
                transform: translateX(-24px);
              }
              50% {
                transform: translateX(24px);
              }
              100% {
                transform: translateX(-24px);
              }
            }
            .bb-silk-wave-lr {
              animation: bbSilkFlowLR 7s ease-in-out infinite;
              width: calc(100% + 60px);
              margin-left: -30px;
            }
          `}</style>

          {/* SVG Silk Ribbon directly matching screenshot */}
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            preserveAspectRatio="none"
            class="h-full w-full block bb-silk-wave-lr"
            style="position: absolute; top: 0; left: 0;"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bbRibbonFill" x1="0%" y1="15%" x2="0%" y2="90%">
                <stop offset="0%" stop-color="#1b75bc" stop-opacity="0.5" />
                <stop offset="45%" stop-color="#78b4cc" stop-opacity="0.25" />
                <stop offset="100%" stop-color="#f7941d" stop-opacity="0.45" />
              </linearGradient>

              <linearGradient id="bbDropGlow" x1="0%" y1="45%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#f7941d" stop-opacity="0.22" />
                <stop offset="60%" stop-color="#784010" stop-opacity="0.08" />
                <stop offset="100%" stop-color="#030d1a" stop-opacity="0.0" />
              </linearGradient>
            </defs>

            {/* 1. Ambient Drop beneath Orange Wave */}
            <path
              d="M 0,44 C 140,36 240,24 380,24 C 540,24 620,58 720,58 C 820,58 900,24 1060,24 C 1200,24 1300,36 1440,44 L 1440,80 L 0,80 Z"
              fill="url(#bbDropGlow)"
            />

            {/* 2. Translucent Silk Ribbon Band between Blue & Orange Lines */}
            <path
              d="M 0,26 C 140,18 240,8 380,8 C 540,8 620,40 720,40 C 820,40 900,8 1060,8 C 1200,8 1300,18 1440,26 L 1440,44 C 1300,36 1200,24 1060,24 C 900,24 820,58 720,58 C 620,58 540,24 380,24 C 240,24 140,36 0,44 Z"
              fill="url(#bbRibbonFill)"
            />

            {/* 3. Top Blue / Cyan Neon Stroke */}
            <path
              d="M 0,26 C 140,18 240,8 380,8 C 540,8 620,40 720,40 C 820,40 900,8 1060,8 C 1200,8 1300,18 1440,26"
              stroke="#78b4cc"
              stroke-width="5"
              stroke-opacity="0.5"
              stroke-linecap="round"
            />
            <path
              d="M 0,26 C 140,18 240,8 380,8 C 540,8 620,40 720,40 C 820,40 900,8 1060,8 C 1200,8 1300,18 1440,26"
              stroke="#1b75bc"
              stroke-width="2.6"
              stroke-linecap="round"
            />
            <path
              d="M 0,26 C 140,18 240,8 380,8 C 540,8 620,40 720,40 C 820,40 900,8 1060,8 C 1200,8 1300,18 1440,26"
              stroke="#9de4ff"
              stroke-width="1.2"
              stroke-linecap="round"
            />

            {/* 4. Bottom Orange / Amber Neon Stroke */}
            <path
              d="M 0,44 C 140,36 240,24 380,24 C 540,24 620,58 720,58 C 820,58 900,24 1060,24 C 1200,24 1300,36 1440,44"
              stroke="#fbb040"
              stroke-width="5"
              stroke-opacity="0.55"
              stroke-linecap="round"
            />
            <path
              d="M 0,44 C 140,36 240,24 380,24 C 540,24 620,58 720,58 C 820,58 900,24 1060,24 C 1200,24 1300,36 1440,44"
              stroke="#f7941d"
              stroke-width="2.8"
              stroke-linecap="round"
            />
            <path
              d="M 0,44 C 140,36 240,24 380,24 C 540,24 620,58 720,58 C 820,58 900,24 1060,24 C 1200,24 1300,36 1440,44"
              stroke="#ffe29a"
              stroke-width="1.3"
              stroke-linecap="round"
            />
          </svg>
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

interface FaqItemData {
  q: string
  a: string
  highlights?: { icon: string; label: string }[]
  timeline?: { step: string; title: string; tag: string }[]
  checklist?: string[]
  badges?: { icon: string; text: string }[]
  techStack?: string[]
}

const homeFaqs: FaqItemData[] = [
  {
    q: 'How does BellBee Media deliver data-led marketing results?',
    a: 'We combine real-time performance analytics with native customer insights to audit your brand positioning and competitor gap matrix. By engineering high-converting funnel pipelines across Meta, Google, and programmatic platforms, our clients achieve an average verified ROAS of 3.4x.',
    highlights: [
      { icon: 'ph-chart-line-up', label: '3.4x Verified ROAS' },
      { icon: 'ph-funnel', label: 'Full-Funnel CRO Audit' },
      { icon: 'ph-lightning', label: 'Weekly Growth Sprints' },
    ],
  },
  {
    q: 'What is the typical timeline to launch a new campaign?',
    a: 'Our standard onboarding takes two to three weeks with a structured 3-phase delivery roadmap. We eliminate guesswork by building tracking foundations before any ad spend goes live.',
    timeline: [
      { step: 'Week 01', title: 'Audit & Gap Matrix', tag: 'Discovery' },
      { step: 'Week 02', title: 'Strategy & Tracking KPIs', tag: 'Blueprint' },
      { step: 'Week 03', title: 'Creative Build & Live Launch', tag: 'Activation' },
    ],
  },
  {
    q: 'How does the client onboarding process work?',
    a: 'Onboarding starts with a free 30-minute discovery call where we map your customer personas and budget allocations. Once agreed, we design a customized 30/60/90-day roadmap. Our creative production and media teams then launch the campaigns after your complete approval.',
    checklist: [
      'Free 30-minute discovery strategy session',
      'Persona mapping & ad spend allocation',
      'Dedicated Slack channel & bi-weekly check-ins',
      '100% pre-launch creative sign-off guarantee',
    ],
  },
  {
    q: 'Do you offer performance guarantees or fixed contracts?',
    a: 'We offer flexible, results-driven partnerships. We set clear commercial KPIs and success benchmarks upfront so you know exactly what outcomes to expect. Our monthly rolling agreements ensure we continuously optimize and scale your campaigns based on real commercial growth.',
    badges: [
      { icon: 'ph-shield-check', text: 'Zero Long-Term Lock-in' },
      { icon: 'ph-arrows-clockwise', text: '30-Day Rolling Retainer' },
      { icon: 'ph-target', text: 'Commercial KPI Benchmarks' },
    ],
  },
  {
    q: 'Can we integrate with our existing CRM and marketing stack?',
    a: 'Yes, absolutely. We seamlessly integrate with Shopify, HubSpot, Salesforce, Klaviyo, Google Analytics 4, Meta Conversions API (CAPI), and custom server-side webhook tracking to guarantee full-funnel attribution and zero data loss.',
    techStack: ['Shopify Plus', 'HubSpot', 'Meta CAPI', 'Google Analytics 4', 'Klaviyo', 'Salesforce'],
  },
]

function FaqSection() {
  return () => (
    <section class="py-24 sm:py-28 bg-surface-1 border-t border-surface-2 relative overflow-hidden" id="faq">
      {/* Decorative brand ambient glows */}
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Badge, Heading & Subtitle — aligned flush with the right cards */}
          <div class="lg:col-span-5 pt-1">
            {/* Pill badge with horizontal line and glowing accent node */}
            <div class="inline-flex items-center gap-3.5 mb-6 sm:mb-7" data-reveal>
              <span class="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-surface-dark0 text-white shadow-sm">
                FAQ's
              </span>
              <div class="flex items-center w-28 sm:w-36 relative">
                <div class="h-[1.5px] w-full bg-gradient-to-r from-surface-dark0/40 via-surface-dark0/20 to-transparent relative">
                  <span class="absolute left-6 -top-1 w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(229,96,38,0.9)] ring-2 ring-white"></span>
                </div>
              </div>
            </div>

            {/* Heading with 100% solid, crisp, high-contrast typography */}
            <h2 data-reveal data-reveal-delay="100" class="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-surface-dark0 tracking-tight leading-[1.08] mb-6">
              Frequently asked<br class="hidden sm:inline" />{' '}
              <span class="text-primary">questions</span>
            </h2>

            {/* Subtitle */}
            <p data-reveal data-reveal-delay="150" class="text-text-secondary text-base sm:text-lg leading-relaxed max-w-md mb-8">
              Choose a growth partner that fits your business needs and budget. Transparent agreements, real-time ROI tracking, and dedicated specialist teams to scale your brand.
            </p>

            {/* Extra direct-action CTA */}
            <div data-reveal data-reveal-delay="200">
              <a
                href={routes.getProposal.href()}
                class="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-primary/5 hover:bg-primary/10 border border-primary/15 text-primary font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Have more questions? Ask our team</span>
                <i class="ph-bold ph-arrow-right transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>
          </div>

          {/* Right Column: Stacked Accordion Cards */}
          <div class="lg:col-span-7 flex flex-col gap-4 sm:gap-5" data-reveal data-reveal-delay="150">
            {homeFaqs.map((faq, idx) => (
              <details
                key={faq.q}
                name="faq-accordion"
                open={idx === 0 ? true : undefined}
                class="group bg-white border border-slate-200/90 hover:border-primary/30 rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_-6px_rgba(21,68,118,0.08)] open:border-primary/40 open:shadow-[0_20px_40px_-10px_rgba(21,68,118,0.1)] [&_summary::-webkit-details-marker]:hidden"
              >
                <summary class="flex justify-between items-center gap-4 list-none cursor-pointer select-none">
                  <h3 class="font-bold text-lg sm:text-[1.18rem] text-surface-dark0 group-open:text-primary transition-colors leading-snug pr-3">
                    {faq.q}
                  </h3>

                  {/* Single morphing + / - toggle button: guaranteed never to show both icons */}
                  <span class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#154476] group-open:bg-[#e56026] text-white flex items-center justify-center shrink-0 shadow-md group-open:shadow-[0_4px_16px_rgba(229,96,38,0.35)] transition-all duration-300 group-hover:scale-105 active:scale-95">
                    <span class="relative w-4 h-4 flex items-center justify-center pointer-events-none">
                      {/* Horizontal bar (always visible) */}
                      <span class="absolute w-3.5 h-[2px] bg-white rounded-full"></span>
                      {/* Vertical bar (visible when closed, collapses to 0 on open) */}
                      <span class="faq-vbar absolute h-3.5 w-[2px] bg-white rounded-full transition-transform duration-300 group-open:scale-y-0"></span>
                    </span>
                  </span>
                </summary>

                {/* Fully Designed Open State */}
                <div class="mt-4 sm:mt-5 pt-4 border-t border-slate-100">
                  <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                    {faq.a}
                  </p>

                  {/* Highlights Grid for FAQ 1 */}
                  {faq.highlights && (
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                      {faq.highlights.map(h => (
                        <div class="flex items-center gap-2.5 p-3 rounded-xl bg-surface-1 border border-slate-200/80 shadow-2xs">
                          <span class="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <i class={`ph-bold ${h.icon} text-sm`}></i>
                          </span>
                          <span class="text-xs font-bold text-surface-dark0">{h.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Timeline Roadmap for FAQ 2 */}
                  {faq.timeline && (
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                      {faq.timeline.map(t => (
                        <div class="p-3 rounded-xl bg-surface-1 border border-slate-200/80 shadow-2xs">
                          <div class="flex items-center justify-between">
                            <span class="text-[10px] font-black uppercase tracking-wider text-secondary">{t.step}</span>
                            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary">{t.tag}</span>
                          </div>
                          <p class="text-xs font-bold text-surface-dark0 mt-1">{t.title}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Checklist for FAQ 3 */}
                  {faq.checklist && (
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {faq.checklist.map(item => (
                        <div class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-1 border border-slate-200/80 text-xs font-semibold text-surface-dark0 shadow-2xs">
                          <i class="ph-fill ph-check-circle text-green-500 text-sm shrink-0"></i>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Trust Badges for FAQ 4 */}
                  {faq.badges && (
                    <div class="flex flex-wrap gap-2 pt-2">
                      {faq.badges.map(b => (
                        <span class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-1 border border-slate-200/80 text-xs font-bold text-surface-dark0 shadow-2xs">
                          <i class={`ph-bold ${b.icon} text-secondary text-sm`}></i>
                          {b.text}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack for FAQ 5 */}
                  {faq.techStack && (
                    <div class="pt-2">
                      <span class="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Supported Platforms & Integrations:
                      </span>
                      <div class="flex flex-wrap gap-1.5">
                        {faq.techStack.map(tech => (
                          <span class="px-2.5 py-1 rounded-lg bg-surface-1 border border-slate-200/80 text-xs font-medium text-surface-dark0 shadow-2xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

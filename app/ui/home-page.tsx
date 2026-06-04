import { routes } from '../routes.ts'
import { Layout } from './layout.tsx'
import { PillBadge, TestimonialsSection, ProcessSection, StatsBar } from './shared.tsx'
import { InteractiveServicesShowcase } from '../assets/interactive-services-showcase.tsx'

export function HomePage() {
  return () => (
    <Layout title="Bell Bee Media | Next-Gen Digital Marketing Agency">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section class="relative bg-white pt-28 pb-20 overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div class="absolute top-[20%] left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Copy */}
            <div class="lg:col-span-7 flex flex-col items-start text-left">
              <div class="mb-6">
                <PillBadge icon="ph-sparkle" text="Bell Bee Media Agency" />
              </div>
              <h1 class="text-4xl md:text-6xl font-black text-surface-dark0 tracking-tight leading-[1.1] mb-6">
                We Scale Brands<br/>
                Through <span class="text-gradient font-black">Data-Led Marketing</span>
              </h1>
              <p class="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
                Gain deeper social insights, unlock exponential growth, optimize campaigns, and connect with your audience like never before.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
                  Get a Free Strategy Session <i class="ph ph-arrow-right"></i>
                </a>
                <a href={routes.services.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-surface-3 text-surface-dark1 rounded-full font-semibold hover:bg-surface-1 transition-all">
                  Our Services
                </a>
              </div>
            </div>

            {/* Right Graphic */}
            <div class="lg:col-span-5 relative w-full h-[420px] flex items-center justify-center">
              <div class="absolute w-[300px] h-[300px] rounded-full bg-secondary/15 blur-[60px] pointer-events-none"></div>
              <div class="w-full max-w-[380px] bg-surface-dark0 rounded-3xl border border-surface-dark2 p-6 shadow-2xl relative z-10 flex flex-col gap-6">
                <div class="flex justify-between items-center pb-4 border-b border-surface-dark2/60">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                  </div>
                  <div class="text-[10px] text-white/30 font-mono tracking-wider">LIVE ANALYTICS</div>
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

              {/* Floating Widget 1 */}
              <div class="absolute -top-4 -left-4 w-48 bg-white p-4 rounded-2xl shadow-xl border border-surface-2 z-20 animate-float-slow">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-lg"><i class="ph-fill ph-trend-up"></i></div>
                  <div>
                    <div class="text-xs font-bold text-surface-dark0">ROAS</div>
                    <div class="text-[10px] text-text-secondary">Latest Campaign</div>
                  </div>
                </div>
                <div class="text-lg font-black text-surface-dark0 text-green-600">5.1×</div>
              </div>

              {/* Floating Widget 2 */}
              <div class="absolute -bottom-4 -right-4 w-52 bg-white p-4 rounded-2xl shadow-xl border border-surface-2 z-20 animate-float-medium">
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

      {/* ── Marquee Ticker ────────────────────────────────── */}
      <section class="py-10 bg-white border-y border-surface-2 overflow-hidden w-full">
        <div class="container mx-auto px-4 text-center mb-5">
          <p class="text-[11px] text-text-secondary uppercase tracking-[0.2em] font-bold">Trusted by leading brands worldwide</p>
        </div>
        <div class="relative flex overflow-hidden w-full select-none">
          <div class="animate-marquee flex gap-20 items-center whitespace-nowrap">
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-sketch-logo text-2xl text-primary/40"></i> Rise Co</div>
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-figma-logo text-2xl text-secondary/40"></i> Vertigo</div>
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-framer-logo text-2xl text-indigo-600/40"></i> Minty</div>
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-github-logo text-2xl text-surface-dark0/40"></i> Glossy</div>
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-dribbble-logo text-2xl text-pink-600/40"></i> Waveless</div>
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-slack-logo text-2xl text-emerald-600/40"></i> NextLevel</div>
            {/* Duplicate for seamless loop */}
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-sketch-logo text-2xl text-primary/40"></i> Rise Co</div>
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-figma-logo text-2xl text-secondary/40"></i> Vertigo</div>
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-framer-logo text-2xl text-indigo-600/40"></i> Minty</div>
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-github-logo text-2xl text-surface-dark0/40"></i> Glossy</div>
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-dribbble-logo text-2xl text-pink-600/40"></i> Waveless</div>
            <div class="flex items-center gap-2 text-xl font-black text-surface-dark2/40"><i class="ph-bold ph-slack-logo text-2xl text-emerald-600/40"></i> NextLevel</div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────── */}
      <StatsBar />

      {/* ── Services ─────────────────────────────────────── */}
      <section class="py-24 bg-surface-1 border-b border-surface-2 relative overflow-hidden">
        {/* Decorative subtle glows */}
        <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none z-0"></div>
        
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div class="max-w-xl">
              <div class="mb-4">
                <PillBadge icon="ph-squares-four" text="Our Services" />
              </div>
              <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 tracking-tight">
                Everything your brand needs — <span class="text-gradient">one team</span>, every channel
              </h2>
            </div>
            <div class="flex-shrink-0">
              <p class="text-text-secondary leading-relaxed max-w-xs">
                Whether you need social growth, paid media, creative production, or a brand-new website — we've got the specialist for it.
              </p>
            </div>
          </div>
          <InteractiveServicesShowcase
            services={[
              {
                icon: 'ph-heart',
                title: 'Social Media Management',
                desc: 'Platform-native strategies, community management, and viral content that builds loyal audiences and turns followers into brand evangelists.',
                tags: ['Instagram', 'TikTok', 'LinkedIn'],
                href: routes.servicesSocialMedia.href(),
              },
              {
                icon: 'ph-chart-line-up',
                title: 'Performance Marketing',
                desc: 'ROI-obsessed PPC campaigns engineered to drive qualified leads and revenue at scale — from Meta Ads to Google Search to programmatic.',
                tags: ['Google Ads', 'Meta Ads', 'Retargeting'],
                href: routes.servicesPerformanceAds.href(),
              },
              {
                icon: 'ph-megaphone',
                title: 'Digital PR & Influencer',
                desc: 'Strategic media placements, editorial outreach, and curated influencer partnerships that make your brand impossible to ignore.',
                tags: ['Media Coverage', 'Influencer Seeding', 'Brand Colabs'],
                href: routes.servicesDigitalPr.href(),
              },
              {
                icon: 'ph-film-slate',
                title: 'Creative Production',
                desc: 'Premium video shoots, branded photography, and motion graphics that stop the scroll and make every pixel of your content count.',
                tags: ['Video Ads', 'Reels & Shorts', 'Photography'],
                href: routes.servicesProduction.href(),
              },
              {
                icon: 'ph-desktop',
                title: 'Web & Landing Pages',
                desc: 'Conversion-engineered websites and high-speed landing pages that turn traffic into customers — built for both humans and search engines.',
                tags: ['CRO', 'SEO', 'E-commerce'],
                href: routes.servicesWebSolutions.href(),
              },
              {
                icon: 'ph-bezier-curve',
                title: 'Design & Copywriting',
                desc: 'Visual brand identities, ad creatives, and sharp sales copy that communicates your value proposition with clarity and authority.',
                tags: ['Branding', 'Ad Creatives', 'UX Copy'],
                href: routes.servicesDesignCopy.href(),
              },
            ]}
          />
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <ProcessSection />

      {/* ── Testimonials ─────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── Premium CTA ──────────────────────────────────── */}
      <section class="py-24 bg-white relative overflow-hidden">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="bg-gradient-to-br from-primary via-[#0f3060] to-surface-dark0 p-10 md:p-20 rounded-[40px] text-white overflow-hidden relative shadow-2xl">
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
                <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-secondary-light transition-all shadow-xl shadow-secondary/30 hover:scale-[1.02] active:scale-[0.98]">
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

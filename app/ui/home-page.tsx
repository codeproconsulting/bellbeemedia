import { routes } from '../routes.ts'
import { Layout } from './layout.tsx'
import { PillBadge, TestimonialsSection, ProcessSection, StatsBar } from './shared.tsx'
import { InteractiveServicesShowcase } from '../assets/interactive-services-showcase.tsx'

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
      <section class="relative bg-white pt-28 pb-20 overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div class="absolute top-[20%] left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Copy */}
            <div class="lg:col-span-7 flex flex-col items-start text-left">
              <h1 class="text-4xl md:text-6xl font-black text-surface-dark0 tracking-tight leading-[1.1] mb-6">
                Paid Media, Social <br/>
                & Creative <span class="text-gradient font-black">Built for Growth</span>
              </h1>
              <p class="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
                We manage paid acquisition, organic social channels, and high-performance creative assets for growing consumer brands. No fluff, just revenue.
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
              <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 tracking-tight">
                Search, Social & Creative. <br/><span class="text-gradient">Fully Integrated.</span>
              </h2>
            </div>
            <div class="flex-shrink-0">
              <p class="text-text-secondary leading-relaxed max-w-xs">
                We manage paid acquisition, organic social, and conversion assets under one roof to drive cohesive brand growth.
              </p>
            </div>
          </div>
          <InteractiveServicesShowcase
            services={[
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
            ]}
          />
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <ProcessSection />

      {/* ── Testimonials ─────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── FAQ Section ──────────────────────────────────── */}
      <FaqSection />

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

function FaqSection() {
  return () => (
    <section class="py-24 bg-surface-1 border-t border-surface-2 relative overflow-hidden">
      {/* Decorative subtle glows */}
      <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

      <div class="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-4 tracking-tight">
            Frequently Asked <span class="text-gradient">Questions</span>
          </h2>
          <p class="text-text-secondary leading-relaxed">
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
              We deliver results by combining real-time performance analytics with native customer insights. We audit your brand positioning and competitor gap matrix to engineer high-converting funnel pipelines, leading to an average ROAS of 4.2x across Meta, Google, and programmatic platforms.
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

import { type Handle } from 'remix/ui'
import { Layout } from '../layout.tsx'
import { type ProposalSubmissionResult } from '../../data/wordpress.ts'
import { routes } from '../../routes.ts'

interface MetaAdsIslamabadPageProps {
  result?: ProposalSubmissionResult
  bookingUrl: string
}

export function MetaAdsIslamabadPage(handle: Handle<MetaAdsIslamabadPageProps>) {
  const { result, bookingUrl } = handle.props
  const submitted = result?.success === true

  const isEmbeddable =
    bookingUrl.includes('calendly.com') ||
    bookingUrl.includes('calendar.google.com') ||
    bookingUrl.includes('calendar.app.google')

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://bellbeemedia.com/#localbusiness',
        name: 'Bell Bee Media — Meta Ads Services Islamabad',
        url: 'https://bellbeemedia.com/meta-ads-islamabad',
        logo: 'https://bellbeemedia.com/Logo.svg',
        image: 'https://bellbeemedia.com/Logo.svg',
        description:
          'Meta Ads in Islamabad that pay for themselves. Facebook & Instagram campaigns engineered for enquiries, leads, WhatsApp conversations, and revenue. Office in I-8 Markaz.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Office #204, Vista Building, I-8 Markaz',
          addressLocality: 'Islamabad',
          addressRegion: 'ICT',
          postalCode: '44000',
          addressCountry: 'PK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '33.6908',
          longitude: '73.0805',
        },
        telephone: '+923701902120',
        email: 'hello@bellbeemedia.com',
        priceRange: '$$',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://bellbeemedia.com/meta-ads-islamabad#service',
        name: 'Meta Ads Services Islamabad',
        provider: {
          '@id': 'https://bellbeemedia.com/#localbusiness',
        },
        serviceType: 'Performance Marketing & Meta Ads Management',
        areaServed: [
          { '@type': 'City', name: 'Islamabad' },
          { '@type': 'City', name: 'Rawalpindi' },
        ],
        description:
          'Facebook and Instagram campaigns engineered around enquiries that turn into revenue. In-house video, creative, and 24-hour ad account teardown.',
        offers: {
          '@type': 'Offer',
          name: 'Free 24-Hour Ad Account Teardown',
          price: '0',
          priceCurrency: 'PKR',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bellbeemedia.com/meta-ads-islamabad#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://bellbeemedia.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: 'https://bellbeemedia.com/locations',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Pakistan',
            item: 'https://bellbeemedia.com/locations/pakistan',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Islamabad',
            item: 'https://bellbeemedia.com/locations/pakistan/islamabad',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Meta Ads Services Islamabad',
            item: 'https://bellbeemedia.com/meta-ads-islamabad',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bellbeemedia.com/meta-ads-islamabad#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does it cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Two parts: your ad budget (paid directly to Meta, your card) and our management fee — fixed monthly, agreed in writing before launch. No percentage games, no media markup.',
            },
          },
          {
            '@type': 'Question',
            name: 'Minimum ad budget?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Below a serious testing threshold, every agency\'s promise is theatre. We\'ll state the realistic number for your city and niche in your proposal — including "not yet" if your budget can\'t survive the learning phase.',
            },
          },
          {
            '@type': 'Question',
            name: 'I was burned before — why you?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The five questions in "No Grey Zones" above. Ask any agency these; watch who squirms. We publish our answers.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who owns the account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You. We live inside your Business Manager and hand back a cleaner asset than we found.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast will I see leads?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'First measurable signal in days, honest picture in ~2 weeks, planning-grade data by 45–60 days. Faster than SEO, less magical than promises.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you make the creative yourselves?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — that\'s the whole point of Bell Bee. Shoots, edits, design, copy, all in-house.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there a lock-in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Monthly engagements. Our retention argument is the monthly report, not the contract.',
            },
          },
          {
            '@type': 'Question',
            name: 'What counts as success?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Enquiries — calls, WhatsApp conversations, form leads, purchases — mapped to spend. Not likes. Not reach. Not "brand awareness".',
            },
          },
        ],
      },
    ],
  }

  return () => (
    <Layout
      title="Meta Ads Services in Islamabad | Free 24-Hour Ad Teardown | Bell Bee Media"
      description="Meta Ads in Islamabad that pay for themselves. Free 24-hour ad account teardown — see where your budget leaks. In-house creative, you own the ad account. No fluff, just revenue."
      head={
        <>
          <script type="application/ld+json">
            {JSON.stringify(schemaJson)}
          </script>
        </>
      }
    >

      {/* ── BREADCRUMB ── */}
      <div class="bg-surface-dark0 border-b border-surface-dark2 pt-28 pb-4 text-white/70">
        <div class="container mx-auto px-4 max-w-6xl flex items-center justify-between text-xs">
          <nav aria-label="Breadcrumb" class="flex items-center gap-2 flex-wrap">
            <a href="/" class="hover:text-white transition-colors">Home</a>
            <span class="text-white/30">/</span>
            <a href="/locations" class="hover:text-white transition-colors">Locations</a>
            <span class="text-white/30">/</span>
            <a href="/locations/pakistan" class="hover:text-white transition-colors">Pakistan</a>
            <span class="text-white/30">/</span>
            <a href="/locations/pakistan/islamabad" class="hover:text-white transition-colors">Islamabad</a>
            <span class="text-white/30">/</span>
            <span class="text-white font-medium">Meta Ads Services</span>
          </nav>
          <a
            href="/locations/pakistan/islamabad"
            class="text-xs text-primary-light hover:underline flex items-center gap-1 font-semibold"
          >
            <i class="ph ph-arrow-left"></i> Islamabad Hub
          </a>
        </div>
      </div>

      {/* ── SECTION 1 — HERO ── */}
      <section class="relative bg-surface-dark0 text-white pt-12 pb-20 sm:pt-16 sm:pb-24 overflow-hidden border-b border-surface-dark2">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-40"></div>
        <div class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-10 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          
          <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-4">
            Bell Bee Media · Islamabad — Paid Media, Social &amp; Creative
          </p>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Meta Ads in Islamabad That <span class="text-gradient">Pay for Themselves</span>
          </h1>

          <p class="text-base sm:text-lg text-white/75 leading-relaxed max-w-3xl mx-auto mb-10">
            Every day your boosted post runs, Meta gets paid — your business gets likes. We run Facebook and Instagram campaigns engineered around one thing: enquiries that turn into revenue. Leads, WhatsApp conversations, calls, sales — tracked, tested, and reported in numbers you can verify yourself.
          </p>

          {/* 4 Bullets: 2x2 on mobile, 4 in grid */}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto mb-10 text-left">
            <div class="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white/90">
              <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
              <span><strong>Free 24-Hour Ad Account Teardown</strong> — see where your budget is leaking</span>
            </div>
            <div class="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white/90">
              <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
              <span><strong>In-house creative team</strong> — video, design and copy under one roof</span>
            </div>
            <div class="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white/90">
              <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
              <span><strong>You own the ad account.</strong> Always.</span>
            </div>
            <div class="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white/90">
              <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
              <span><strong>Plain-English reporting</strong> — spend, results, next move</span>
            </div>
          </div>

          {/* Primary + Ghost CTA */}
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a
              href="#teardown-form"
              class="w-full sm:w-auto px-8 py-4 rounded-xl bg-secondary hover:bg-secondary-light text-white font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-secondary/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <span>Get My Free Ad Teardown</span>
              <i class="ph-bold ph-arrow-down group-hover:translate-y-0.5 transition-transform"></i>
            </a>
            <a
              href="#why-it-matters"
              class="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm transition-all duration-300 border border-white/15 flex items-center justify-center gap-2"
            >
              <span>See The Uncomfortable Math</span>
              <i class="ph ph-arrow-right"></i>
            </a>
          </div>

          <p class="text-xs text-white/50 max-w-xl mx-auto italic">
            No ads running yet? We'll tear down your top competitor's live ads instead — Meta shows them publicly.
          </p>

        </div>
      </section>

      {/* ── SECTION 2 — LEAD MAGNET (24-Hour Ad Account Teardown) ── */}
      <section class="py-16 sm:py-20 bg-surface-dark1 text-white border-b border-surface-dark2 relative" id="teardown-preview">
        <div class="container mx-auto px-4 max-w-5xl">
          
          <div class="text-center max-w-3xl mx-auto mb-10">
            <p class="text-xs font-bold uppercase tracking-widest text-secondary-light mb-3">
              Your Free Teardown
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              The 24-Hour Ad Account Teardown
            </h2>
            <p class="text-sm sm:text-base text-white/75 mt-3 leading-relaxed">
              A short written report on your current or past Meta campaigns — the same analysis we run before quoting any project:
            </p>
          </div>

          {/* Three-column checks / responsive cards */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            
            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-secondary/40 transition-all flex flex-col">
              <div class="w-10 h-10 rounded-xl bg-secondary/15 text-secondary-light flex items-center justify-center text-lg mb-4 shrink-0 font-bold">
                <i class="ph-bold ph-drop"></i>
              </div>
              <h3 class="text-base font-bold text-white mb-2">Where the money leaked</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                Spend going to objectives that never planned to produce enquiries.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-secondary/40 transition-all flex flex-col">
              <div class="w-10 h-10 rounded-xl bg-secondary/15 text-secondary-light flex items-center justify-center text-lg mb-4 shrink-0 font-bold">
                <i class="ph-bold ph-users"></i>
              </div>
              <h3 class="text-base font-bold text-white mb-2">The audience mismatch</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                Who your ads actually reached vs who buys from you in Islamabad &amp; Rawalpindi.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-secondary/40 transition-all flex flex-col">
              <div class="w-10 h-10 rounded-xl bg-secondary/15 text-secondary-light flex items-center justify-center text-lg mb-4 shrink-0 font-bold">
                <i class="ph-bold ph-sparkle"></i>
              </div>
              <h3 class="text-base font-bold text-white mb-2">Creative verdict</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                Why your ads blend into the feed while competitors' stop thumbs.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-secondary/40 transition-all flex flex-col">
              <div class="w-10 h-10 rounded-xl bg-secondary/15 text-secondary-light flex items-center justify-center text-lg mb-4 shrink-0 font-bold">
                <i class="ph-bold ph-crosshair"></i>
              </div>
              <h3 class="text-base font-bold text-white mb-2">Tracking gaps</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                The pixel and conversion holes making your results invisible in Ads Manager.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-secondary/40 transition-all flex flex-col md:col-span-2 lg:col-span-2">
              <div class="w-10 h-10 rounded-xl bg-secondary/15 text-secondary-light flex items-center justify-center text-lg mb-4 shrink-0 font-bold">
                <i class="ph-bold ph-trend-up"></i>
              </div>
              <h3 class="text-base font-bold text-white mb-2">Next-test plan</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                Exactly what we'd change first, ranked by expected impact on your enquiries and revenue.
              </p>
            </div>

          </div>

          {/* Honesty block (border) */}
          <div class="p-6 sm:p-7 rounded-2xl bg-surface-dark0 border-2 border-primary/40 relative overflow-hidden mb-8">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-full bg-primary/20 text-primary-light flex items-center justify-center text-xl shrink-0 mt-0.5">
                <i class="ph-fill ph-shield-check"></i>
              </div>
              <div>
                <h4 class="text-sm sm:text-base font-bold text-white mb-1">
                  Yours to keep — hire us or don't.
                </h4>
                <p class="text-xs sm:text-sm text-white/75 leading-relaxed">
                  And the honest version: if your account is already well run, we'll tell you that in the teardown too. We'd rather win you with truth than lose you with flattery.
                </p>
              </div>
            </div>
          </div>

          <div class="text-center">
            <a
              href="#teardown-form"
              class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              <span>Claim Your Free Teardown Report</span>
              <i class="ph-bold ph-arrow-right"></i>
            </a>
          </div>

        </div>
      </section>

      {/* ── STICKY MOBILE CTA BAR (Starts after Section 2) ── */}
      <div class="fixed bottom-0 left-0 right-0 z-40 bg-surface-dark0/95 backdrop-blur-md border-t border-white/10 p-3 sm:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div class="text-left">
          <p class="text-[11px] font-bold text-white">Free 24h Meta Ad Teardown</p>
          <p class="text-[10px] text-white/60">See where budget leaks</p>
        </div>
        <a
          href="#teardown-form"
          class="px-4 py-2 rounded-lg bg-secondary text-white text-xs font-bold uppercase tracking-wider shrink-0 shadow-md"
        >
          Get Free Teardown
        </a>
      </div>

      {/* ── SECTION 3 — WHY IT MATTERS (Editorial + Phone Mock Visual) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2" id="why-it-matters">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column — Editorial */}
            <div class="lg:col-span-7">
              <p class="text-xs font-bold uppercase tracking-widest text-secondary-light mb-3">
                The Uncomfortable Math
              </p>
              
              <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-6">
                Your competitors' ads are getting better. Yours are getting older.
              </h2>

              <p class="text-sm sm:text-base text-white/75 leading-relaxed mb-4">
                Islamabad customers scroll thousands of ads a day and notice none of them. The one they notice is usually your competitor's reel — the shop in Blue Area, the clinic in F-10, the brand in Saddar that now looks professional.
              </p>

              <p class="text-sm sm:text-base text-white/75 leading-relaxed mb-4">
                Here's what "running ads" usually means without a real operator: a boosted post from the phone app, a goal nobody chose, creative from 2023, and no tracking — so nobody can tell whether the campaign made money or just made noise.
              </p>

              <p class="text-sm sm:text-base text-white/75 leading-relaxed mb-6 font-medium text-white/90">
                You've already paid for the lesson. Meta charges you for every attempt — the good and the wasted. Our job is to make sure the next rupee is tested, measured, and aimed at something you can count: enquiries in your phone.
              </p>

              <div class="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <i class="ph-fill ph-info text-primary-light text-xl shrink-0"></i>
                <span class="text-xs text-white/70">
                  Every month without a conversion-first strategy is ad budget donated directly to Meta's revenue.
                </span>
              </div>
            </div>

            {/* Right Column Visual — Phone mock with "0 new enquiries" fading to 3 icons (CSS/SVG, no stock photos) */}
            <div class="lg:col-span-5 flex justify-center">
              <div class="w-full max-w-xs bg-surface-dark1 rounded-[2.5rem] p-4 border-4 border-surface-dark2 shadow-2xl relative">
                {/* Speaker pill */}
                <div class="w-24 h-4 bg-surface-dark2 rounded-full mx-auto mb-4"></div>
                
                <div class="bg-surface-dark0 rounded-2xl p-5 border border-white/10 text-center">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-1 block">
                    Meta Ads App Notification
                  </span>
                  
                  {/* Before state */}
                  <div class="my-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300">
                    <span class="text-3xl font-black block text-red-400">0</span>
                    <span class="text-xs font-semibold">New Enquiries Today</span>
                    <p class="text-[10px] text-white/40 mt-1">₨5,000 spent · 142 Likes · 0 WhatsApp Chats</p>
                  </div>

                  {/* Transition arrow */}
                  <div class="py-2 flex items-center justify-center gap-2 text-xs font-bold text-primary-light">
                    <span>Re-engineered with Bell Bee</span>
                    <i class="ph-bold ph-arrow-down animate-bounce"></i>
                  </div>

                  {/* After state: 3 icons (Call / Chat / Form) */}
                  <div class="mt-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-white">
                    <span class="text-[11px] font-bold text-emerald-400 block mb-2">Real Attributable Actions</span>
                    <div class="grid grid-cols-3 gap-2 text-center">
                      <div class="p-2 rounded-lg bg-surface-dark1 border border-white/10">
                        <i class="ph-fill ph-phone-call text-emerald-400 text-lg block mb-1"></i>
                        <span class="text-[10px] font-bold">Calls</span>
                      </div>
                      <div class="p-2 rounded-lg bg-surface-dark1 border border-white/10">
                        <i class="ph-fill ph-whatsapp-logo text-emerald-400 text-lg block mb-1"></i>
                        <span class="text-[10px] font-bold">WhatsApp</span>
                      </div>
                      <div class="p-2 rounded-lg bg-surface-dark1 border border-white/10">
                        <i class="ph-fill ph-clipboard-text text-emerald-400 text-lg block mb-1"></i>
                        <span class="text-[10px] font-bold">Leads</span>
                      </div>
                    </div>
                  </div>

                  <p class="text-[10px] text-white/40 mt-4 italic">
                    Simple CSS mockup — actual tracking connected via Meta Conversions API &amp; WhatsApp click tags.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4 — WHAT WE DELIVER (6-Card Grid + Monthly Ledger) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark1 text-white border-b border-surface-dark2" id="what-we-deliver">
        <div class="container mx-auto px-4 max-w-6xl">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
              What Actually Lands On Your Desk
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Every month, in writing
            </h2>
            <p class="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
              No nebulous promises. Every month you receive concrete deliverables and verifiable optimizations.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            {/* Card 1 */}
            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-compass"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">Campaign strategy</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Objective, offer, funnel map, measurement plan before any spend.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-secondary/20 text-secondary-light flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-video-camera"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">4–6 new ad creatives</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Static + video/reel concepts, shot by our in-house production team.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-users-three"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">3–5 audience tests per phase</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Location packs, interest stacks, lookalikes from your real customers.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-secondary/20 text-secondary-light flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-code"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">Pixel + conversion tracking</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Meta events, WhatsApp click tracking, lead-quality flags.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-arrows-clockwise"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">Retargeting layer</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Warm audiences that convert 2–10× cheaper.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-secondary/20 text-secondary-light flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-file-text"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">Reporting</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Weekly optimisation log + 1-page monthly summary you can check in your own Ads Manager.
                </p>
              </div>
            </div>

          </div>

          {/* Monthly ledger checklist strip */}
          <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/15 text-center">
            <p class="text-sm sm:text-base font-bold text-white">
              You always know: <span class="text-primary-light">what was tested</span> · <span class="text-secondary-light">what changed</span> · <span class="text-emerald-400">what it cost</span> · <span class="text-white">what's next</span>
            </p>
            <p class="text-xs text-white/40 mt-1">
              (note: quantities = typical starter scope, confirm actuals in proposal)
            </p>
          </div>

        </div>
      </section>

      {/* ── SECTION 5 — PROBLEM → SOLUTION → OUTCOME (3-Column Table / Card Stack) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-6xl">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <p class="text-xs font-bold uppercase tracking-widest text-secondary-light mb-3">
              The Shift
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Problem → Solution → Outcome
            </h2>
            <p class="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
              How we diagnose common Meta campaign breakdowns and engineer them into reliable growth.
            </p>
          </div>

          {/* Desktop Table View */}
          <div class="hidden md:block overflow-hidden rounded-2xl border border-white/15 bg-surface-dark1 shadow-xl">
            <table class="w-full text-left text-sm">
              <thead class="bg-surface-dark0 border-b border-white/10 text-xs uppercase tracking-wider text-white/60">
                <tr>
                  <th class="p-4 pl-6 w-1/4">The Problem You Face</th>
                  <th class="p-4 w-5/12">What We Do (The Fix)</th>
                  <th class="p-4 pr-6 w-1/3 bg-primary/20 text-white">The Measurable Outcome</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/10">
                <tr class="hover:bg-white/[0.02] transition-colors">
                  <td class="p-4 pl-6 font-semibold text-red-300">Lots of likes, few enquiries</td>
                  <td class="p-4 text-white/80">Rebuild campaign around a conversion objective and an offer that asks for action</td>
                  <td class="p-4 pr-6 font-medium text-emerald-300 bg-primary/10">Same budget producing conversations instead of applause</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition-colors">
                  <td class="p-4 pl-6 font-semibold text-red-300">Leads cost too much</td>
                  <td class="p-4 text-white/80">Test creative angles, audiences and form friction; fix tracking first</td>
                  <td class="p-4 pr-6 font-medium text-emerald-300 bg-primary/10">Lower cost-per-qualified-lead — or proof it can't go lower</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition-colors">
                  <td class="p-4 pl-6 font-semibold text-red-300">Wrong audience clicked</td>
                  <td class="p-4 text-white/80">Local signals, fit-based audiences, data-led exclusions</td>
                  <td class="p-4 pr-6 font-medium text-emerald-300 bg-primary/10">Ads reaching the people who actually buy in your city</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition-colors">
                  <td class="p-4 pl-6 font-semibold text-red-300">Ads look like everyone's ads</td>
                  <td class="p-4 text-white/80">In-house shoots, distinct hooks, angles built around your differentiator</td>
                  <td class="p-4 pr-6 font-medium text-emerald-300 bg-primary/10">A brand that looks like the obvious choice</td>
                </tr>
                <tr class="hover:bg-white/[0.02] transition-colors">
                  <td class="p-4 pl-6 font-semibold text-red-300">"Is any of this working?"</td>
                  <td class="p-4 text-white/80">Agree KPIs before spending; report against them monthly</td>
                  <td class="p-4 pr-6 font-medium text-emerald-300 bg-primary/10">A number you check yourself — no blind faith required</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Card Stack */}
          <div class="md:hidden space-y-4">
            
            <div class="p-5 rounded-xl bg-surface-dark1 border border-white/10 space-y-2">
              <span class="text-xs font-bold text-red-400 uppercase tracking-wide block">Problem: Lots of likes, few enquiries</span>
              <p class="text-xs text-white/80"><strong>Fix:</strong> Rebuild campaign around a conversion objective and an offer that asks for action</p>
              <div class="p-2.5 rounded-lg bg-primary/20 border border-primary/30 text-xs font-semibold text-emerald-300">
                Outcome: Same budget producing conversations instead of applause
              </div>
            </div>

            <div class="p-5 rounded-xl bg-surface-dark1 border border-white/10 space-y-2">
              <span class="text-xs font-bold text-red-400 uppercase tracking-wide block">Problem: Leads cost too much</span>
              <p class="text-xs text-white/80"><strong>Fix:</strong> Test creative angles, audiences and form friction; fix tracking first</p>
              <div class="p-2.5 rounded-lg bg-primary/20 border border-primary/30 text-xs font-semibold text-emerald-300">
                Outcome: Lower cost-per-qualified-lead — or proof it can't go lower
              </div>
            </div>

            <div class="p-5 rounded-xl bg-surface-dark1 border border-white/10 space-y-2">
              <span class="text-xs font-bold text-red-400 uppercase tracking-wide block">Problem: Wrong audience clicked</span>
              <p class="text-xs text-white/80"><strong>Fix:</strong> Local signals, fit-based audiences, data-led exclusions</p>
              <div class="p-2.5 rounded-lg bg-primary/20 border border-primary/30 text-xs font-semibold text-emerald-300">
                Outcome: Ads reaching the people who actually buy in your city
              </div>
            </div>

            <div class="p-5 rounded-xl bg-surface-dark1 border border-white/10 space-y-2">
              <span class="text-xs font-bold text-red-400 uppercase tracking-wide block">Problem: Ads look like everyone's ads</span>
              <p class="text-xs text-white/80"><strong>Fix:</strong> In-house shoots, distinct hooks, angles built around your differentiator</p>
              <div class="p-2.5 rounded-lg bg-primary/20 border border-primary/30 text-xs font-semibold text-emerald-300">
                Outcome: A brand that looks like the obvious choice
              </div>
            </div>

            <div class="p-5 rounded-xl bg-surface-dark1 border border-white/10 space-y-2">
              <span class="text-xs font-bold text-red-400 uppercase tracking-wide block">Problem: "Is any of this working?"</span>
              <p class="text-xs text-white/80"><strong>Fix:</strong> Agree KPIs before spending; report against them monthly</p>
              <div class="p-2.5 rounded-lg bg-primary/20 border border-primary/30 text-xs font-semibold text-emerald-300">
                Outcome: A number you check yourself — no blind faith required
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 6 — NO GREY ZONES (Trust Keystone) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark1 text-white border-b border-surface-dark2" id="no-grey-zones">
        <div class="container mx-auto px-4 max-w-4xl">
          
          <div class="text-center max-w-2xl mx-auto mb-12">
            <p class="text-xs font-bold uppercase tracking-widest text-secondary-light mb-3">
              The Awkward Questions, Answered On The Page
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              No grey zones
            </h2>
          </div>

          <div class="space-y-4 mb-8">
            
            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10">
              <h3 class="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <i class="ph-bold ph-question text-secondary-light"></i>
                Who pays Meta?
              </h3>
              <p class="text-sm text-white/75 leading-relaxed pl-6">
                You do — directly. Your card, your bill, your visibility into every rupee of spend. We never mark up media.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10">
              <h3 class="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <i class="ph-bold ph-question text-secondary-light"></i>
                What does our fee cover?
              </h3>
              <p class="text-sm text-white/75 leading-relaxed pl-6">
                Strategy, creative direction, setup, testing, optimisation and reporting — our work, not your media.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10">
              <h3 class="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <i class="ph-bold ph-question text-secondary-light"></i>
                Who owns the ad account and data?
              </h3>
              <p class="text-sm text-white/75 leading-relaxed pl-6">
                You own it, always. We work inside your Business Manager. If you leave tomorrow, everything stays with you.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10">
              <h3 class="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <i class="ph-bold ph-question text-secondary-light"></i>
                What access do you need?
              </h3>
              <p class="text-sm text-white/75 leading-relaxed pl-6">
                Ad account + pixel/dataset + page. That's it. We never hold your assets hostage — hostage-taking is how bad agencies keep clients.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10">
              <h3 class="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <i class="ph-bold ph-question text-secondary-light"></i>
                How often do you report?
              </h3>
              <p class="text-sm text-white/75 leading-relaxed pl-6">
                Monthly 1-pager, weekly optimisation log, and WhatsApp access to your media buyer any day in between.
              </p>
            </div>

          </div>

          <p class="text-center text-sm text-white/60 italic">
            Agencies that dodge these five questions are telling you their business model. We're not.
          </p>

        </div>
      </section>

      {/* ── SECTION 7 — WHO CHOOSES BELL BEE (4-Card Row + Strip) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-6xl">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
              The Bell Bee Difference
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Why Islamabad brands choose us instead of the freelancer or the factory agency
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            
            <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <span class="text-2xl font-black text-primary-light mb-3 block">01</span>
                <h3 class="text-lg font-bold text-white mb-2">Creative lives here.</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Most ad agencies are media buyers who outsource design at worst quality and call it "creative strategy". Bell Bee runs in-house production — shoots, video editing, design and copy under one roof. On Meta, the creative IS the targeting. That's the whole game, and we own the biggest weapon.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <span class="text-2xl font-black text-secondary-light mb-3 block">02</span>
                <h3 class="text-lg font-bold text-white mb-2">Seniors on your account.</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Remote-first team of specialists — the person who runs your teardown is the person who runs your campaigns. No junior handover after the sale.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <span class="text-2xl font-black text-emerald-400 mb-3 block">03</span>
                <h3 class="text-lg font-bold text-white mb-2">"No fluff, just revenue" is policy, not a slogan.</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Vanity metrics don't appear in our reports because they don't pass our attribution test. If a channel doesn't contribute to your bottom line, we don't recommend it.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between">
              <div>
                <span class="text-2xl font-black text-primary-light mb-3 block">04</span>
                <h3 class="text-lg font-bold text-white mb-2">We're down the road.</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  I-8 Markaz, Islamabad — same city, same market, same customers. A Blue Area buyer and a Bahria Town buyer respond differently; we've run both.
                </p>
              </div>
            </div>

          </div>

          {/* Choose us if / Choose them if strip */}
          <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
            <div class="text-white/80">
              <strong class="text-emerald-400">Choose us if:</strong> you want ads run like an investment — tracked, questioned, improved.
            </div>
            <div class="hidden sm:block text-white/20">|</div>
            <div class="text-white/80">
              <strong class="text-secondary-light">Choose the freelancer if:</strong> you want cheap. <span class="text-white/50">(You already know which one costs more.)</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 8 — BEFORE / AFTER (Comparison Table + Honesty Note) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark1 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-5xl">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <p class="text-xs font-bold uppercase tracking-widest text-secondary-light mb-3">
              The Transformation
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Before vs after — what managed campaigns fix
            </h2>
          </div>

          <div class="space-y-4 mb-8">
            
            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div class="flex items-start gap-3 text-red-300 text-xs sm:text-sm">
                <i class="ph-bold ph-x-circle text-red-400 text-lg shrink-0 mt-0.5"></i>
                <span>Boosted posts with no business objective</span>
              </div>
              <div class="flex items-start gap-3 text-emerald-300 text-xs sm:text-sm md:border-l md:border-white/10 md:pl-4">
                <i class="ph-bold ph-check-circle text-emerald-400 text-lg shrink-0 mt-0.5"></i>
                <span>Campaign objectives chosen to produce the action you sell on — leads, WhatsApp, calls, purchases</span>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div class="flex items-start gap-3 text-red-300 text-xs sm:text-sm">
                <i class="ph-bold ph-x-circle text-red-400 text-lg shrink-0 mt-0.5"></i>
                <span>Audiences picked by assumption ("everyone in Islamabad")</span>
              </div>
              <div class="flex items-start gap-3 text-emerald-300 text-xs sm:text-sm md:border-l md:border-white/10 md:pl-4">
                <i class="ph-bold ph-check-circle text-emerald-400 text-lg shrink-0 mt-0.5"></i>
                <span>Audience tests guided by customer fit and actual cost-per-enquiry data</span>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div class="flex items-start gap-3 text-red-300 text-xs sm:text-sm">
                <i class="ph-bold ph-x-circle text-red-400 text-lg shrink-0 mt-0.5"></i>
                <span>Same 2023 creative running into fatigue</span>
              </div>
              <div class="flex items-start gap-3 text-emerald-300 text-xs sm:text-sm md:border-l md:border-white/10 md:pl-4">
                <i class="ph-bold ph-check-circle text-emerald-400 text-lg shrink-0 mt-0.5"></i>
                <span>Fresh creative rotations with hooks, offers and formats that beat the feed</span>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div class="flex items-start gap-3 text-red-300 text-xs sm:text-sm">
                <i class="ph-bold ph-x-circle text-red-400 text-lg shrink-0 mt-0.5"></i>
                <span>Likes and reach reported as "results"</span>
              </div>
              <div class="flex items-start gap-3 text-emerald-300 text-xs sm:text-sm md:border-l md:border-white/10 md:pl-4">
                <i class="ph-bold ph-check-circle text-emerald-400 text-lg shrink-0 mt-0.5"></i>
                <span>Spend mapped to enquiries you can count in your own phone and inbox</span>
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div class="flex items-start gap-3 text-red-300 text-xs sm:text-sm">
                <i class="ph-bold ph-x-circle text-red-400 text-lg shrink-0 mt-0.5"></i>
                <span>Budget raised on a whim</span>
              </div>
              <div class="flex items-start gap-3 text-emerald-300 text-xs sm:text-sm md:border-l md:border-white/10 md:pl-4">
                <i class="ph-bold ph-check-circle text-emerald-400 text-lg shrink-0 mt-0.5"></i>
                <span>Changes made for documented reasons, with the learning recorded</span>
              </div>
            </div>

          </div>

          <p class="text-center text-xs text-white/50 italic max-w-2xl mx-auto">
            This is the transformation we engineer toward, not a guarantee. Real numbers come from your account's baseline — measured before and after, in your own reports.
          </p>

        </div>
      </section>

      {/* ── SECTION 9 — FIRST 30/60/90 (Honest Timeline) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-5xl">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What paid ads actually look like — the honest timeline
            </h2>
          </div>

          {/* Horizontal 3-Block Timeline */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            
            <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 relative">
              <span class="text-xs font-black uppercase tracking-wider text-primary-light px-2.5 py-1 rounded bg-primary/20 inline-block mb-3">
                Phase 1
              </span>
              <h3 class="text-xl font-black text-white mb-2">Days 1–14 — Learning.</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                Tracking fixed, first creative set live, multiple audiences testing. Numbers will swing. This is the cost of buying information.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 relative">
              <span class="text-xs font-black uppercase tracking-wider text-secondary-light px-2.5 py-1 rounded bg-secondary/20 inline-block mb-3">
                Phase 2
              </span>
              <h3 class="text-xl font-black text-white mb-2">Days 15–45 — Reading.</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                Winners separate. Cost-per-enquiry settles into a range you can plan around. Budget shifts toward what earns.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 relative">
              <span class="text-xs font-black uppercase tracking-wider text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/20 inline-block mb-3">
                Phase 3
              </span>
              <h3 class="text-xl font-black text-white mb-2">Days 46–90 — Scaling.</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                Proven combos get more spend. You decide from data: push harder, expand to Google, or leave money in your pocket.
              </p>
            </div>

          </div>

          {/* Truth callout */}
          <div class="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-surface-dark1 via-surface-dark1 to-primary/20 border border-white/15">
            <h4 class="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <i class="ph-bold ph-warning text-secondary-light"></i>
              The truth nobody sells you:
            </h4>
            <p class="text-xs sm:text-sm text-white/80 leading-relaxed">
              No agency can promise ROAS before testing your market — anyone quoting "5× guaranteed" is selling a number, not a plan. What we promise is faster learning, cleaner money, and the discipline to kill what doesn't work (including our own ideas).
            </p>
          </div>

        </div>
      </section>

      {/* ── SECTION 10 — CROSS-SELL (The Whole Funnel, One Roof) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark1 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-6xl">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              The whole funnel, one roof
            </h2>
            <p class="text-sm sm:text-base text-white/70 leading-relaxed">
              Meta ads only convert as well as what they point at. One team, zero blame games between vendors:
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            
            <a
              href="/services/web-solutions"
              class="group p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div class="w-10 h-10 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center text-xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <i class="ph-bold ph-desktop"></i>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-primary-light transition-colors mb-2">
                  Landing pages &amp; websites
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Fast, CRO-focused pages that ads actually convert (Web Solutions).
                </p>
              </div>
              <span class="text-xs font-bold text-primary-light group-hover:underline mt-4 inline-block">
                Explore Web Solutions &rarr;
              </span>
            </a>

            <a
              href="/services/production"
              class="group p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-secondary/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div class="w-10 h-10 rounded-xl bg-secondary/20 text-secondary-light flex items-center justify-center text-xl mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <i class="ph-bold ph-video-camera"></i>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-secondary-light transition-colors mb-2">
                  Ad creative &amp; video shoots
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Thumb-stopping production built for performance, not awards (Production).
                </p>
              </div>
              <span class="text-xs font-bold text-secondary-light group-hover:underline mt-4 inline-block">
                Explore Production &rarr;
              </span>
            </a>

            <a
              href="/services/design-copy"
              class="group p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div class="w-10 h-10 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center text-xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <i class="ph-bold ph-pen-nib"></i>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-primary-light transition-colors mb-2">
                  Conversion copywriting
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Offers, hooks and pages engineered to sell (Design &amp; Copy).
                </p>
              </div>
              <span class="text-xs font-bold text-primary-light group-hover:underline mt-4 inline-block">
                Explore Design &amp; Copy &rarr;
              </span>
            </a>

            <a
              href="/services/social-media"
              class="group p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-secondary/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div class="w-10 h-10 rounded-xl bg-secondary/20 text-secondary-light flex items-center justify-center text-xl mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <i class="ph-bold ph-share-network"></i>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-secondary-light transition-colors mb-2">
                  Organic social
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  So your paid clicks find a profile that looks alive (Social Media).
                </p>
              </div>
              <span class="text-xs font-bold text-secondary-light group-hover:underline mt-4 inline-block">
                Explore Social Media &rarr;
              </span>
            </a>

            <a
              href="/services/digital-pr"
              class="group p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2"
            >
              <div>
                <div class="w-10 h-10 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center text-xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <i class="ph-bold ph-megaphone"></i>
                </div>
                <h3 class="text-base font-bold text-white group-hover:text-primary-light transition-colors mb-2">
                  Digital PR &amp; influencers
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Authority that lowers your cost-per-click over time.
                </p>
              </div>
              <span class="text-xs font-bold text-primary-light group-hover:underline mt-4 inline-block">
                Explore Digital PR &rarr;
              </span>
            </a>

          </div>

          <p class="text-center text-xs sm:text-sm font-semibold text-white/80">
            One partner across the funnel — no vendor pointing fingers at 3 a.m.
          </p>

        </div>
      </section>

      {/* ── SECTION 11 — HOW IT WORKS (Four Stages, Clear Checkpoints) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-6xl">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Four stages, clear checkpoints
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 flex flex-col justify-between">
              <div>
                <span class="text-3xl font-black text-primary-light mb-3 block">01</span>
                <h3 class="text-base font-bold text-white mb-2">Teardown (24 hours, free)</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  We audit your account — or your competitor's public ads — and send you the written report. No pitch required; you decide if it's worth a call.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 flex flex-col justify-between">
              <div>
                <span class="text-3xl font-black text-secondary-light mb-3 block">02</span>
                <h3 class="text-base font-bold text-white mb-2">Strategy &amp; proposal</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Objective, offer, creative direction, budget split, KPIs and management fee — all in writing. You approve before a single paisa goes live.
                </p>
              </div>
            </div>

            {/* Gate Icon between 3 and 4: You approve spend */}
            <div class="p-6 rounded-2xl bg-surface-dark1 border border-secondary/40 flex flex-col justify-between relative shadow-lg">
              <div class="absolute -top-3 right-4 px-2 py-0.5 rounded bg-secondary text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <i class="ph-bold ph-lock-key"></i> You approve spend
              </div>
              <div>
                <span class="text-3xl font-black text-emerald-400 mb-3 block">03</span>
                <h3 class="text-base font-bold text-white mb-2">Launch &amp; optimise</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Approved campaigns go live. We monitor, test and adjust as data arrives — logging every change so you see the reasoning, not just the result.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 flex flex-col justify-between">
              <div>
                <span class="text-3xl font-black text-primary-light mb-3 block">04</span>
                <h3 class="text-base font-bold text-white mb-2">Report &amp; scale</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Monthly: what worked, what didn't, what's next. When something prints enquiries we have an honest plan for scaling it — when it doesn't, we shut it down.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 12 — PROOF (Anonymised Testimonials + Case) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark1 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-6xl">
          
          <div class="text-center max-w-3xl mx-auto mb-14">
            <p class="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
              Proof From Real Campaigns
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Anonymised client cases &amp; feedback
            </h2>
          </div>

          {/* 2 Case Cards */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold text-primary-light uppercase tracking-wider block mb-2">Case Study 1</span>
                <h3 class="text-lg font-bold text-white mb-3">
                  Real estate, Islamabad: from leads-nobody-called to a booked calendar
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  <strong>Setup:</strong> form campaigns sending notifications nobody followed up on.
                </p>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  <strong>Fix:</strong> WhatsApp-click objective + a follow-up sequence the sales team could actually run.
                </p>
                <p class="text-xs sm:text-sm text-emerald-400 font-medium">
                  <strong>Result pattern:</strong> enquiries that reach a human, counted daily. <span class="text-white/40 text-[10px]">[TODO-PROOF: insert real numbers once a client approves]</span>
                </p>
              </div>
            </div>

            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold text-secondary-light uppercase tracking-wider block mb-2">Case Study 2</span>
                <h3 class="text-lg font-bold text-white mb-3">
                  Boutique brand, Rawalpindi: feed-scroll to sold-stock
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  <strong>Setup:</strong> boosted posts, one creative, no retargeting.
                </p>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                  <strong>Fix:</strong> in-house reel rotation + warm audience layer + offer angle.
                </p>
                <p class="text-xs sm:text-sm text-emerald-400 font-medium">
                  <strong>Result pattern:</strong> repeat purchases from audiences Meta had already shown the ad. <span class="text-white/40 text-[10px]">[TODO-PROOF]</span>
                </p>
              </div>
            </div>

          </div>

          {/* 5 Testimonials (Anonymised format: monogram initials in brand circle, sector+city tag) */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col justify-between">
              <p class="text-xs sm:text-sm text-white/80 leading-relaxed italic mb-6">
                “Pehle agency ne sirf likes dikhaye. Bell Bee ne pehle mahine hi bataya paisa kahan leak ho raha tha — ab har rupay ka hisaab milta hai.”
              </p>
              <div class="flex items-center gap-3 pt-4 border-t border-white/10">
                <div class="w-10 h-10 rounded-full bg-primary/20 text-primary-light font-bold flex items-center justify-center text-xs shrink-0">
                  AR
                </div>
                <div>
                  <div class="text-xs font-bold text-white">Ahsan R.</div>
                  <div class="text-[11px] text-white/50">Owner, Furniture Retail · Islamabad</div>
                </div>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col justify-between">
              <p class="text-xs sm:text-sm text-white/80 leading-relaxed italic mb-6">
                “The teardown was brutal and honest — our 'best performing' ad had produced zero enquiries. Fixed it, cost per lead dropped, and I could verify every claim in my own account.”
              </p>
              <div class="flex items-center gap-3 pt-4 border-t border-white/10">
                <div class="w-10 h-10 rounded-full bg-secondary/20 text-secondary-light font-bold flex items-center justify-center text-xs shrink-0">
                  SM
                </div>
                <div>
                  <div class="text-xs font-bold text-white">Sana M.</div>
                  <div class="text-[11px] text-white/50">Marketing Manager, Skin Clinic · Islamabad</div>
                </div>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col justify-between">
              <p class="text-xs sm:text-sm text-white/80 leading-relaxed italic mb-6">
                “In-house video team ka farq pata chalta hai. Same budget, 3x messages on WhatsApp.”
              </p>
              <div class="flex items-center gap-3 pt-4 border-t border-white/10">
                <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-xs shrink-0">
                  BH
                </div>
                <div>
                  <div class="text-xs font-bold text-white">Bilal H.</div>
                  <div class="text-[11px] text-white/50">Director, Academy · Rawalpindi</div>
                </div>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col justify-between">
              <p class="text-xs sm:text-sm text-white/80 leading-relaxed italic mb-6">
                “They told us NOT to increase budget in month one. That's when I knew these people are different.”
              </p>
              <div class="flex items-center gap-3 pt-4 border-t border-white/10">
                <div class="w-10 h-10 rounded-full bg-primary/20 text-primary-light font-bold flex items-center justify-center text-xs shrink-0">
                  FK
                </div>
                <div>
                  <div class="text-xs font-bold text-white">Faraz K.</div>
                  <div class="text-[11px] text-white/50">Co-founder, Restaurant Chain · Islamabad</div>
                </div>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <p class="text-xs sm:text-sm text-white/80 leading-relaxed italic mb-6">
                “Report simple hai, jargon nahi. Main business owner hoon — numbers samajh aane chahiye.”
              </p>
              <div class="flex items-center gap-3 pt-4 border-t border-white/10">
                <div class="w-10 h-10 rounded-full bg-secondary/20 text-secondary-light font-bold flex items-center justify-center text-xs shrink-0">
                  NS
                </div>
                <div>
                  <div class="text-xs font-bold text-white">Nadia S.</div>
                  <div class="text-[11px] text-white/50">Founder, Boutique Brand · Islamabad</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 13 — SAMPLE TEARDOWN (Report-Card Panel) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-4xl">
          
          <div class="text-center max-w-2xl mx-auto mb-10">
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What a teardown finding actually says (illustrative)
            </h2>
          </div>

          {/* Report-card panel (monospace styling allowed) */}
          <div class="p-7 sm:p-9 rounded-3xl bg-surface-dark1 border-2 border-white/15 shadow-2xl relative font-mono text-sm leading-relaxed">
            <div class="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-sans text-white/50 uppercase tracking-widest">
              <span>CONFIDENTIAL ACCOUNT AUDIT SAMPLE</span>
              <span class="text-secondary-light">I-8 MARKAZ TEAM</span>
            </div>

            <div class="space-y-5">
              <div>
                <span class="text-red-400 font-bold block mb-1">THE LEAK:</span>
                <p class="text-white/80 font-sans">
                  ₨85,000/month split between "Engagement" and "Boosted Post" campaigns — both optimising for people who like things, not people who buy things.
                </p>
              </div>

              <div>
                <span class="text-yellow-400 font-bold block mb-1">THE COST:</span>
                <p class="text-white/80 font-sans">
                  6,200 clicks, 140 likes, 3 enquiries. Meta's report looked busy. The owner's phone was quiet.
                </p>
              </div>

              <div>
                <span class="text-primary-light font-bold block mb-1">THE FIX:</span>
                <p class="text-white/80 font-sans">
                  One objective (messages), three audience tests, three new creative angles built around the clinic's real differentiator. Same budget, different ask.
                </p>
              </div>

              <div class="pt-4 border-t border-white/10">
                <span class="text-emerald-400 font-bold block mb-1">THE RESULT PATTERN:</span>
                <p class="text-white font-sans font-semibold">
                  enquiries per rupee is the only column that survives the rewrite.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 14 — FAQ (Server-Rendered Accordion) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark1 text-white border-b border-surface-dark2" id="faq">
        <div class="container mx-auto px-4 max-w-3xl">
          
          <div class="text-center mb-12">
            <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
              Frequently Asked Questions
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div class="space-y-3">
            
            {/* FAQ 1 — First open */}
            <details open class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-primary/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-base text-white list-none cursor-pointer">
                <span>What does it cost?</span>
                <i class="ph ph-caret-down text-primary-light shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-3">
                Two parts: your ad budget (paid directly to Meta, your card) and our management fee — fixed monthly, agreed in writing before launch. No percentage games, no media markup.
              </div>
            </details>

            {/* FAQ 2 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-primary/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-base text-white list-none cursor-pointer">
                <span>Minimum ad budget?</span>
                <i class="ph ph-caret-down text-primary-light shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-3">
                Below a serious testing threshold, every agency's promise is theatre. We'll state the realistic number for your city and niche in your proposal — including "not yet" if your budget can't survive the learning phase.
              </div>
            </details>

            {/* FAQ 3 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-primary/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-base text-white list-none cursor-pointer">
                <span>I was burned before — why you?</span>
                <i class="ph ph-caret-down text-primary-light shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-3">
                The five questions in "No Grey Zones" above. Ask any agency these; watch who squirms. We publish our answers.
              </div>
            </details>

            {/* FAQ 4 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-primary/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-base text-white list-none cursor-pointer">
                <span>Who owns the account?</span>
                <i class="ph ph-caret-down text-primary-light shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-3">
                You. We live inside your Business Manager and hand back a cleaner asset than we found.
              </div>
            </details>

            {/* FAQ 5 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-primary/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-base text-white list-none cursor-pointer">
                <span>How fast will I see leads?</span>
                <i class="ph ph-caret-down text-primary-light shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-3">
                First measurable signal in days, honest picture in ~2 weeks, planning-grade data by 45–60 days. Faster than SEO, less magical than promises.
              </div>
            </details>

            {/* FAQ 6 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-primary/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-base text-white list-none cursor-pointer">
                <span>Do you make the creative yourselves?</span>
                <i class="ph ph-caret-down text-primary-light shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-3">
                Yes — that's the whole point of Bell Bee. Shoots, edits, design, copy, all in-house.
              </div>
            </details>

            {/* FAQ 7 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-primary/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-base text-white list-none cursor-pointer">
                <span>Is there a lock-in?</span>
                <i class="ph ph-caret-down text-primary-light shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-3">
                No. Monthly engagements. Our retention argument is the monthly report, not the contract.
              </div>
            </details>

            {/* FAQ 8 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-primary/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-base text-white list-none cursor-pointer">
                <span>What counts as success?</span>
                <i class="ph ph-caret-down text-primary-light shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-sm leading-relaxed border-t border-white/10 pt-3">
                Enquiries — calls, WhatsApp conversations, form leads, purchases — mapped to spend. Not likes. Not reach. Not "brand awareness".
              </div>
            </details>

          </div>

        </div>
      </section>

      {/* ── SECTION 15 — FORM + WHAT HAPPENS NEXT (Split Card) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2" id="teardown-form">
        <div class="container mx-auto px-4 max-w-6xl">
          
          <div class="bg-surface-dark1 rounded-3xl border border-white/15 p-7 sm:p-12 shadow-2xl relative overflow-hidden">
            <div class="absolute -top-24 -right-24 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none"></div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
              
              {/* Left Column — Pitch + Trust Echoes + 4 Next Steps */}
              <div class="lg:col-span-6 space-y-6">
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-secondary-light mb-3">
                    No Strings Attached
                  </p>
                  <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                    Tell us where the ads are — we'll find the leaks
                  </h2>
                  <p class="text-sm text-white/75 leading-relaxed">
                    Submit your page or website link below. Our senior media buying team in I-8 Markaz will perform a thorough 5-point audit of your ads and delivery pipeline within 24 hours.
                  </p>
                </div>

                {/* 4 Next Steps */}
                <div class="space-y-3 pt-4 border-t border-white/10">
                  <h3 class="text-xs font-bold uppercase tracking-wider text-white/90 mb-3">
                    What happens next:
                  </h3>
                  
                  <div class="flex items-start gap-3 text-xs sm:text-sm text-white/75">
                    <span class="w-6 h-6 rounded-full bg-primary/20 text-primary-light font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                    <span><strong>We WhatsApp you (within 24 hours)</strong> — confirm read-only access to your ad account/page.</span>
                  </div>

                  <div class="flex items-start gap-3 text-xs sm:text-sm text-white/75">
                    <span class="w-6 h-6 rounded-full bg-primary/20 text-primary-light font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                    <span><strong>Your written teardown (24–48 hours after access)</strong> — the five-point report, yours to keep, no strings.</span>
                  </div>

                  <div class="flex items-start gap-3 text-xs sm:text-sm text-white/75">
                    <span class="w-6 h-6 rounded-full bg-primary/20 text-primary-light font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                    <span><strong>One honest call, only if you want it</strong> — findings and options. If you don't need us yet, we'll say so.</span>
                  </div>

                  <div class="flex items-start gap-3 text-xs sm:text-sm text-white/75">
                    <span class="w-6 h-6 rounded-full bg-primary/20 text-primary-light font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                    <span><strong>If we run your ads</strong> — SOW in writing, launch within days, weekly logs, monthly reports.</span>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60">
                  <i class="ph ph-shield-check text-emerald-400 text-base inline-block mr-1 align-text-bottom"></i>
                  100% confidential. We never pitch aggressive sales calls or share client data.
                </div>
              </div>

              {/* Right Column — Form */}
              <div class="lg:col-span-6 bg-surface-dark0 rounded-2xl p-6 sm:p-8 border border-white/10">
                {submitted ? (
                  <div class="text-center py-8">
                    <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto mb-4">
                      <i class="ph-fill ph-check-circle"></i>
                    </div>
                    <h3 class="text-2xl font-black text-white mb-2">Teardown Request Received!</h3>
                    <p class="text-sm text-white/70 mb-6 leading-relaxed">
                      {result?.message ?? "A human from our I-8 Markaz team will reach out via WhatsApp within 24 hours."}
                    </p>
                    {isEmbeddable ? (
                      <div class="w-full rounded-xl overflow-hidden border border-white/10 min-h-[340px] mb-4">
                        <iframe src={bookingUrl} width="100%" height="340" frameborder="0"></iframe>
                      </div>
                    ) : (
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-primary-light transition-all mb-4"
                      >
                        Book Quick Intro Call &rarr;
                      </a>
                    )}
                    <br />
                    <a href="/locations/pakistan/islamabad/meta-ads-islamabad" class="text-xs text-white/40 hover:text-white/70 underline">
                      Submit another request
                    </a>
                  </div>
                ) : (
                  <form method="POST" action="/locations/pakistan/islamabad/meta-ads-islamabad" class="space-y-4">
                    
                    {result && !result.success && (
                      <div class="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                        <i class="ph-bold ph-warning-circle"></i> {result.message}
                      </div>
                    )}

                    <div>
                      <label for="fullName" class="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="e.g. Ahsan Khan"
                        class="w-full px-4 py-3 rounded-xl bg-surface-dark1 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-secondary transition-all"
                      />
                    </div>

                    <div>
                      <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        WhatsApp Number * <span class="text-secondary-light font-normal">(yahan teardown aayega)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+92 300 1234567"
                        class="w-full px-4 py-3 rounded-xl bg-surface-dark1 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-secondary transition-all"
                      />
                    </div>

                    <div>
                      <label for="pageOrWebsite" class="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Facebook/Instagram Page ya Website Link *
                      </label>
                      <input
                        type="text"
                        id="pageOrWebsite"
                        name="pageOrWebsite"
                        required
                        placeholder="facebook.com/yourpage ya yourbrand.com"
                        class="w-full px-4 py-3 rounded-xl bg-surface-dark1 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-secondary transition-all"
                      />
                    </div>

                    <div>
                      <label for="budget" class="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Monthly Ad Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        class="w-full px-4 py-3 rounded-xl bg-surface-dark1 border border-white/15 text-white text-sm focus:outline-none focus:border-secondary transition-all"
                      >
                        <option value="under 50k">under 50k</option>
                        <option value="50k–200k" selected>50k–200k</option>
                        <option value="200k+">200k+</option>
                        <option value="not running yet">not running yet</option>
                      </select>
                    </div>

                    <div>
                      <label for="goal" class="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Main Goal
                      </label>
                      <select
                        id="goal"
                        name="goal"
                        class="w-full px-4 py-3 rounded-xl bg-surface-dark1 border border-white/15 text-white text-sm focus:outline-none focus:border-secondary transition-all"
                      >
                        <option value="more leads">more leads</option>
                        <option value="more WhatsApp chats" selected>more WhatsApp chats</option>
                        <option value="more calls">more calls</option>
                        <option value="online sales">online sales</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      class="w-full py-4 rounded-xl bg-secondary hover:bg-secondary-light text-white font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-secondary/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 group mt-2"
                    >
                      <span>Get My Free 24-Hour Teardown</span>
                      <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </button>

                    <p class="text-center text-xs text-white/50 pt-2">
                      A human from our I-8 Markaz team replies within 24 hours. No auto-responders, no drip sequences.
                    </p>

                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 15.5 — GOOGLE ADS CROSS-LINK STRIP ── */}
      <section class="py-10 bg-surface-dark0 border-b border-surface-dark2 text-white">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0">
                <i class="ph-bold ph-target"></i>
              </div>
              <div>
                <p class="text-sm font-bold text-white">Also running Google Ads or searching for high-intent search leads?</p>
                <p class="text-xs text-white/70">Explore our Google Ads &amp; PPC Management team in Islamabad.</p>
              </div>
            </div>
            <a
              href="/google-ads-islamabad"
              class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-surface-dark0 font-black text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              Google Ads Islamabad &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 16 — FOOTER / CONTACT ── */}
      <section class="py-16 sm:py-20 bg-surface-dark1 text-white">
        <div class="container mx-auto px-4 max-w-4xl text-center">
          
          <h2 class="text-2xl sm:text-3xl font-black mb-4">
            Ready to stop renting likes and start buying enquiries?
          </h2>

          <div class="flex justify-center mb-8">
            <a
              href="#teardown-form"
              class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-secondary hover:bg-secondary-light text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              <span>Get My Free 24-Hour Teardown</span>
              <i class="ph-bold ph-arrow-up"></i>
            </a>
          </div>

          <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 text-xs sm:text-sm text-white/70 space-y-2">
            <p class="font-bold text-white">
              Bell Bee Media · Office #204, Vista Building, I-8 Markaz, Islamabad
            </p>
            <p>
              Phone: <a href="tel:+923701902120" class="text-primary-light hover:underline font-semibold">+92 370 190 2120</a> · Email: <a href="mailto:hello@bellbeemedia.com" class="text-primary-light hover:underline font-semibold">hello@bellbeemedia.com</a>
            </p>
            <p class="text-white/40 pt-2 text-xs italic">
              Paid media, social &amp; creative — built for growth. No fluff, just revenue.
            </p>
          </div>

        </div>
      </section>

    </Layout>
  )
}

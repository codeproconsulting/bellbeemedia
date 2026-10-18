import { type Handle } from 'remix/ui'
import { Layout } from '../layout.tsx'
import { type ProposalSubmissionResult } from '../../data/wordpress.ts'
import { routes } from '../../routes.ts'

interface GoogleAdsIslamabadPageProps {
  result?: ProposalSubmissionResult
  bookingUrl: string
}

export function GoogleAdsIslamabadPage(handle: Handle<GoogleAdsIslamabadPageProps>) {
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
        name: 'Bell Bee Media — Google Ads Agency in Islamabad',
        url: 'https://bellbeemedia.com/google-ads-islamabad',
        logo: 'https://bellbeemedia.com/Logo.svg',
        image: 'https://bellbeemedia.com/Logo.svg',
        description:
          'Google Ads managed in Islamabad, measured in revenue. Free 24-hour teardown — see where your budget leaks before hiring anyone. No ad-spend markup, you own the account, month-to-month scope. No fluff, just revenue.',
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
        '@id': 'https://bellbeemedia.com/google-ads-islamabad#service',
        name: 'Google Ads & PPC Management Services in Islamabad',
        provider: {
          '@id': 'https://bellbeemedia.com/#localbusiness',
        },
        serviceType: 'Google Ads, Search Ads, Shopping Ads & PPC Management',
        areaServed: [
          { '@type': 'City', name: 'Islamabad' },
          { '@type': 'City', name: 'Rawalpindi' },
          { '@type': 'City', name: 'Lahore' },
          { '@type': 'City', name: 'Karachi' },
          { '@type': 'Country', name: 'United Kingdom' },
        ],
        description:
          'Google Ads built, run and tuned around verified enquiries, phone calls, form fills and sales tracked from click to invoice.',
        offers: {
          '@type': 'Offer',
          name: 'Free 24-Hour Google Ads Teardown',
          price: '0',
          priceCurrency: 'PKR',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bellbeemedia.com/google-ads-islamabad#breadcrumb',
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
            name: 'Google Ads Islamabad',
            item: 'https://bellbeemedia.com/google-ads-islamabad',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bellbeemedia.com/google-ads-islamabad#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does Google Ads cost in Pakistan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Your spend is your decision — Google bills you directly in your own account, and we never take a percentage of it. Our fee is one fixed monthly number, in writing, agreed before launch. What nobody can honestly quote upfront is your cost per lead — it depends on category, city and margin. The teardown gives you realistic ranges from your market\'s actual data.',
            },
          },
          {
            '@type': 'Question',
            name: 'I tried an agency before and got nothing but reports. Why is this different?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Fair skepticism. Difference you can test without paying us: the 24-Hour Teardown. It shows your specific leaks before any contract exists. If your old account was actually healthy, we\'ll say that too — and you\'ll know exactly what you\'re hiring us to fix.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast will I see leads?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Search campaigns can produce tracked enquiries within the first week. Meaningful cost-per-lead optimisation takes 4–8 weeks — anyone promising profitability by tomorrow is selling a fantasy. What\'s immediate: the teardown, and the tracking you didn\'t have.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you need my website?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For form and purchase conversions, yes. For WhatsApp and call campaigns, not always — we can build campaigns around your phone line. If your page won\'t convert, we\'ll say so; our web team builds landing pages that do, or advise you honestly if yours already works.',
            },
          },
          {
            '@type': 'Question',
            name: 'What about Performance Max?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It\'s a tool, not a strategy. Used with clean feeds, real conversion signals and tight budgets — sometimes excellent. Launched blindly because Google suggested it — a budget incinerator. We\'ll tell you which applies to you in the teardown.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you run Google Ads and Meta Ads together?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — and that\'s the sweet spot: Meta creates demand, Google captures it. Our Meta Ads page covers the other half, and the strategy session maps both against one budget story instead of two fiefdoms.',
            },
          },
          {
            '@type': 'Question',
            name: 'Am I locked in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Month to month. Scope and fee in writing, no 12-month handcuffs. Results make the renewal — if we\'re not earning it, leave. That\'s how it should work.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are you Google certified?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our specialists work certified teams. More useful: ask any agency for a tracked cost per lead from a live account. We\'ll show ours on the Client Results page.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you write ads in Urdu or Roman Urdu?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both, where the audience demands it. In Pakistani search, Roman Urdu keywords and ad copy routinely beat English on click-through for local services. We test both as a matter of routine, not religion.',
            },
          },
          {
            '@type': 'Question',
            name: 'We don\'t run ads yet. Is the teardown still for me?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Especially for you. We can analyze your competitor\'s public ads — you\'ll see what\'s being bid for your customers right now, what it probably costs them, and what a starting budget for you would realistically need to do.',
            },
          },
        ],
      },
    ],
  }

  return () => (
    <Layout
      title="Google Ads Agency in Islamabad | Free 24-Hour Ad Teardown | Bell Bee Media"
      description="Google Ads managed in Islamabad, measured in revenue. Free 24-hour teardown — see where your budget leaks before hiring anyone. No ad-spend markup, you own the account, month-to-month scope. No fluff, just revenue."
      head={
        <>
          <link rel="canonical" href="https://bellbeemedia.com/google-ads-islamabad" />
          <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
        </>
      }
    >
      {/* ── SECTION 1 — HERO ── */}
      <section class="bg-surface-dark0 text-white pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden border-b border-surface-dark2">
        <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div class="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          {/* Breadcrumb Navigation */}
          <div class="flex items-center justify-center text-xs text-white/70 pb-8">
            <nav aria-label="Breadcrumb" class="flex items-center gap-2 flex-wrap justify-center">
              <a href="/" class="hover:text-white transition-colors">Home</a>
              <span class="text-white/30">/</span>
              <a href="/locations" class="hover:text-white transition-colors">Locations</a>
              <span class="text-white/30">/</span>
              <a href="/locations/pakistan" class="hover:text-white transition-colors">Pakistan</a>
              <span class="text-white/30">/</span>
              <a href="/locations/pakistan/islamabad" class="hover:text-white transition-colors">Islamabad</a>
              <span class="text-white/30">/</span>
              <span class="text-amber-400 font-medium">Google Ads</span>
            </nav>
          </div>

          {/* Eyebrow */}
          <p class="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 mb-4">
            BELL BEE MEDIA · ISLAMABAD — PAID MEDIA, SOCIAL &amp; CREATIVE
          </p>

          {/* H1 max 2 lines desktop */}
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Google Ads That Pay for Themselves — Managed in Islamabad, Measured in Revenue
          </h1>

          {/* Subtitle */}
          <p class="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Someone in your city searched "near me" for what you sell this morning. Your competitor's ad answered. We build, run and tune Google Ads campaigns around one question: did it produce calls, forms and sales you can count — tracked from the first click to the invoice.
          </p>

          {/* 4 Bullets in a 2x2 grid mobile/desktop */}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left text-xs sm:text-sm text-white/90 mb-10">
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
              <i class="ph-bold ph-check text-amber-400 text-base shrink-0"></i>
              <span>Free 24-Hour Google Ads Teardown — see where your budget is leaking</span>
            </div>
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
              <i class="ph-bold ph-check text-amber-400 text-base shrink-0"></i>
              <span>In-house creative + landing pages — ad, page and copy under one roof</span>
            </div>
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
              <i class="ph-bold ph-check text-amber-400 text-base shrink-0"></i>
              <span>You own the ad account. Always.</span>
            </div>
            <div class="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
              <i class="ph-bold ph-check text-amber-400 text-base shrink-0"></i>
              <span>Plain-English reporting — spend, leads, cost per lead, return on ad spend</span>
            </div>
          </div>

          {/* CTAs */}
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#teardown-form"
              id="hero-primary-cta"
              class="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-surface-dark0 font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-[1.02] text-center"
            >
              Get My Free Ad Teardown
            </a>
            <a
              href={bookingUrl || "#teardown-form"}
              target={bookingUrl ? "_blank" : undefined}
              rel={bookingUrl ? "noopener noreferrer" : undefined}
              id="hero-ghost-cta"
              class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm transition-all duration-300 border border-white/20 text-center"
            >
              Book a Discovery Call
            </a>
          </div>

          {/* 3 Stat Tiles bottom */}
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/10">
            <div class="p-4 rounded-xl bg-surface-dark1 border border-white/10">
              <div class="text-2xl sm:text-3xl font-black text-amber-400">3.4×</div>
              <div class="text-xs text-white/70 mt-1">avg. ROAS delivered</div>
            </div>
            <div class="p-4 rounded-xl bg-surface-dark1 border border-white/10">
              <div class="text-2xl sm:text-3xl font-black text-amber-400">24h</div>
              <div class="text-xs text-white/70 mt-1">human reply — every day</div>
            </div>
            <div class="p-4 rounded-xl bg-surface-dark1 border border-white/10">
              <div class="text-2xl sm:text-3xl font-black text-amber-400">14+</div>
              <div class="text-xs text-white/70 mt-1">industries served across Pakistan &amp; UK</div>
            </div>
          </div>

          {/* Micro Disclaimer */}
          <p class="text-[11px] text-white/50 mt-6 max-w-xl mx-auto italic">
            ROAS figure as published on bellbeemedia.com. No honest agency can promise a specific cost per lead before your data is in — we promise to show you yours.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 — THE PROBLEM IN PLAIN LANGUAGE (Agitation) ── */}
      <section class="py-16 sm:py-20 bg-surface-dark1 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center mb-10">
            <p class="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">
              Common Red Flags
            </p>
            <h2 class="text-2xl sm:text-4xl font-black text-white tracking-tight">
              If Any of These Sound Familiar, Your Account Is Leaking
            </h2>
          </div>

          <div class="space-y-4">
            <div class="p-4 sm:p-5 rounded-2xl bg-surface-dark0 border border-red-500/20 flex items-start gap-3.5">
              <div class="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 text-lg mt-0.5">
                <i class="ph-bold ph-warning-circle"></i>
              </div>
              <p class="text-sm sm:text-base text-white/85 leading-relaxed">
                You searched for your own business and your competitor's ad showed up. Yours didn't. You pay for that click either way — someone else just collects it.
              </p>
            </div>

            <div class="p-4 sm:p-5 rounded-2xl bg-surface-dark0 border border-red-500/20 flex items-start gap-3.5">
              <div class="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 text-lg mt-0.5">
                <i class="ph-bold ph-warning-circle"></i>
              </div>
              <p class="text-sm sm:text-base text-white/85 leading-relaxed">
                Your "managed" Google Ads show 40,000 impressions and a graph that goes up. Your phone doesn't ring.
              </p>
            </div>

            <div class="p-4 sm:p-5 rounded-2xl bg-surface-dark0 border border-red-500/20 flex items-start gap-3.5">
              <div class="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 text-lg mt-0.5">
                <i class="ph-bold ph-warning-circle"></i>
              </div>
              <p class="text-sm sm:text-base text-white/85 leading-relaxed">
                Leads come in as WhatsApp messages nobody tracked — so nobody can say which ad caused them, and the budget gets cut at random.
              </p>
            </div>

            <div class="p-4 sm:p-5 rounded-2xl bg-surface-dark0 border border-red-500/20 flex items-start gap-3.5">
              <div class="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 text-lg mt-0.5">
                <i class="ph-bold ph-warning-circle"></i>
              </div>
              <p class="text-sm sm:text-base text-white/85 leading-relaxed">
                Search Partners placements are eating a third of your spend on apps nobody's ever heard of.
              </p>
            </div>

            <div class="p-4 sm:p-5 rounded-2xl bg-surface-dark0 border border-red-500/20 flex items-start gap-3.5">
              <div class="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 text-lg mt-0.5">
                <i class="ph-bold ph-warning-circle"></i>
              </div>
              <p class="text-sm sm:text-base text-white/85 leading-relaxed">
                You "boosted" something last year and everyone calls the agency that anyway. This is the one mistake we'll never hold against you — but the account keeps paying for it.
              </p>
            </div>

            <div class="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5">
              <div class="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 text-lg mt-0.5">
                <i class="ph-bold ph-arrow-right"></i>
              </div>
              <p class="text-sm sm:text-base font-semibold text-amber-200 leading-relaxed">
                Every month this runs unfixed is ad budget feeding your competitors. The teardown is free; the leak isn't.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — WHAT WE ACTUALLY DO (What We Deliver) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <p class="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              WHAT WE DELIVER
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              The Work That Lands in Your Account Every Month
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div class="p-7 rounded-2xl bg-surface-dark1 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-magnifying-glass"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">
                  Keyword &amp; competitor research
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Search terms with buying intent, priced against your margin — and a negative keyword shield so junk clicks stop getting paid for.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div class="p-7 rounded-2xl bg-surface-dark1 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-shopping-bag"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">
                  Search, Shopping &amp; Display campaigns
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Structured by what people actually search, not by your internal org chart. Shopping feeds built to sell, not just exist.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div class="p-7 rounded-2xl bg-surface-dark1 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-pencil-line"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">
                  Ad copy that speaks like a person
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Written by our in-house copy team, tested against each other, and never robotic.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div class="p-7 rounded-2xl bg-surface-dark1 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-chart-line-up"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">
                  Conversion tracking you can verify
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Calls, form fills, WhatsApp clicks, purchases — wired into your account so you see what made money, in your own dashboard.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div class="p-7 rounded-2xl bg-surface-dark1 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-browsers"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">
                  Landing page advice &amp; builds
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  An ad is a promise; the page has to keep it. We review yours honestly — and our Web team can build the replacement if it needs replacing.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div class="p-7 rounded-2xl bg-surface-dark1 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
              <div>
                <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-file-text"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-2">
                  Weekly tuning + one plain-English monthly report
                </h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Bids, budgets and new ad variants every week. At month end: clicks, leads, cost per lead, ROAS, and the next move — in language your finance side understands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — PROBLEM → FIX → SO YOU GET ── */}
      <section class="py-16 sm:py-24 bg-surface-dark1 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <p class="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              PROBLEMS WE SOLVE
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              From Leaking Budget to Countable Leads
            </h2>
          </div>

          {/* Desktop Table View */}
          <div class="hidden md:block overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-surface-dark0">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-white/10 bg-white/5 text-xs uppercase font-bold tracking-wider">
                  <th class="py-4 px-6 text-white/70 w-1/3">The problem</th>
                  <th class="py-4 px-6 text-white/70 w-1/3">How we fix it</th>
                  <th class="py-4 px-6 text-amber-400 w-1/3 bg-amber-500/10">So you get</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5 text-xs sm:text-sm">
                <tr>
                  <td class="py-4 px-6 text-white/80 font-medium">Budget lost to irrelevant clicks</td>
                  <td class="py-4 px-6 text-white/70">Tight keyword targeting plus a growing negative keyword shield.</td>
                  <td class="py-4 px-6 text-amber-200 font-semibold bg-amber-500/5">Your rupees buying buyers, not curiosity.</td>
                </tr>
                <tr>
                  <td class="py-4 px-6 text-white/80 font-medium">Clicks, but no leads or sales</td>
                  <td class="py-4 px-6 text-white/70">Ad copy and landing pages rebuilt around getting people to act.</td>
                  <td class="py-4 px-6 text-amber-200 font-semibold bg-amber-500/5">The same clicks finally producing enquiries.</td>
                </tr>
                <tr>
                  <td class="py-4 px-6 text-white/80 font-medium">No idea which ads work</td>
                  <td class="py-4 px-6 text-white/70">Full conversion tracking — calls, forms, WhatsApp, purchases.</td>
                  <td class="py-4 px-6 text-amber-200 font-semibold bg-amber-500/5">Proof, not opinions, on where every rupee went.</td>
                </tr>
                <tr>
                  <td class="py-4 px-6 text-white/80 font-medium">High cost per lead</td>
                  <td class="py-4 px-6 text-white/70">Weekly bid, budget and A/B testing; kill losers fast, scale winners.</td>
                  <td class="py-4 px-6 text-amber-200 font-semibold bg-amber-500/5">A number you can plan a month around.</td>
                </tr>
                <tr>
                  <td class="py-4 px-6 text-white/80 font-medium">Your competitor owns your brand search</td>
                  <td class="py-4 px-6 text-white/70">Brand-defensive campaigns and local placement fixes.</td>
                  <td class="py-4 px-6 text-amber-200 font-semibold bg-amber-500/5">Your name in search results sending people to you.</td>
                </tr>
                <tr>
                  <td class="py-4 px-6 text-white/80 font-medium">Shopping feed ignored or broken</td>
                  <td class="py-4 px-6 text-white/70">Feed cleanup, titles and prices that survive Google's review.</td>
                  <td class="py-4 px-6 text-amber-200 font-semibold bg-amber-500/5">Product ads running for e-commerce that actually show your bestsellers.</td>
                </tr>
                <tr>
                  <td class="py-4 px-6 text-white/80 font-medium">No time to run campaigns</td>
                  <td class="py-4 px-6 text-white/70">A dedicated specialist handles everything; you approve budget.</td>
                  <td class="py-4 px-6 text-amber-200 font-semibold bg-amber-500/5">A running account and zero extra work on your plate.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards */}
          <div class="md:hidden space-y-4">
            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 space-y-2">
              <div class="text-xs uppercase font-bold text-red-400">The Problem</div>
              <p class="text-sm text-white/90 font-medium">Budget lost to irrelevant clicks</p>
              <div class="text-xs uppercase font-bold text-white/50 pt-2 border-t border-white/10">How we fix it</div>
              <p class="text-xs text-white/70">Tight keyword targeting plus a growing negative keyword shield.</p>
              <div class="text-xs uppercase font-bold text-amber-400 pt-2 border-t border-white/10">So you get</div>
              <p class="text-xs font-semibold text-amber-200">Your rupees buying buyers, not curiosity.</p>
            </div>

            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 space-y-2">
              <div class="text-xs uppercase font-bold text-red-400">The Problem</div>
              <p class="text-sm text-white/90 font-medium">Clicks, but no leads or sales</p>
              <div class="text-xs uppercase font-bold text-white/50 pt-2 border-t border-white/10">How we fix it</div>
              <p class="text-xs text-white/70">Ad copy and landing pages rebuilt around getting people to act.</p>
              <div class="text-xs uppercase font-bold text-amber-400 pt-2 border-t border-white/10">So you get</div>
              <p class="text-xs font-semibold text-amber-200">The same clicks finally producing enquiries.</p>
            </div>

            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 space-y-2">
              <div class="text-xs uppercase font-bold text-red-400">The Problem</div>
              <p class="text-sm text-white/90 font-medium">No idea which ads work</p>
              <div class="text-xs uppercase font-bold text-white/50 pt-2 border-t border-white/10">How we fix it</div>
              <p class="text-xs text-white/70">Full conversion tracking — calls, forms, WhatsApp, purchases.</p>
              <div class="text-xs uppercase font-bold text-amber-400 pt-2 border-t border-white/10">So you get</div>
              <p class="text-xs font-semibold text-amber-200">Proof, not opinions, on where every rupee went.</p>
            </div>

            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 space-y-2">
              <div class="text-xs uppercase font-bold text-red-400">The Problem</div>
              <p class="text-sm text-white/90 font-medium">High cost per lead</p>
              <div class="text-xs uppercase font-bold text-white/50 pt-2 border-t border-white/10">How we fix it</div>
              <p class="text-xs text-white/70">Weekly bid, budget and A/B testing; kill losers fast, scale winners.</p>
              <div class="text-xs uppercase font-bold text-amber-400 pt-2 border-t border-white/10">So you get</div>
              <p class="text-xs font-semibold text-amber-200">A number you can plan a month around.</p>
            </div>

            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 space-y-2">
              <div class="text-xs uppercase font-bold text-red-400">The Problem</div>
              <p class="text-sm text-white/90 font-medium">Your competitor owns your brand search</p>
              <div class="text-xs uppercase font-bold text-white/50 pt-2 border-t border-white/10">How we fix it</div>
              <p class="text-xs text-white/70">Brand-defensive campaigns and local placement fixes.</p>
              <div class="text-xs uppercase font-bold text-amber-400 pt-2 border-t border-white/10">So you get</div>
              <p class="text-xs font-semibold text-amber-200">Your name in search results sending people to you.</p>
            </div>

            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 space-y-2">
              <div class="text-xs uppercase font-bold text-red-400">The Problem</div>
              <p class="text-sm text-white/90 font-medium">Shopping feed ignored or broken</p>
              <div class="text-xs uppercase font-bold text-white/50 pt-2 border-t border-white/10">How we fix it</div>
              <p class="text-xs text-white/70">Feed cleanup, titles and prices that survive Google's review.</p>
              <div class="text-xs uppercase font-bold text-amber-400 pt-2 border-t border-white/10">So you get</div>
              <p class="text-xs font-semibold text-amber-200">Product ads running for e-commerce that actually show your bestsellers.</p>
            </div>

            <div class="p-5 rounded-2xl bg-surface-dark0 border border-white/10 space-y-2">
              <div class="text-xs uppercase font-bold text-red-400">The Problem</div>
              <p class="text-sm text-white/90 font-medium">No time to run campaigns</p>
              <div class="text-xs uppercase font-bold text-white/50 pt-2 border-t border-white/10">How we fix it</div>
              <p class="text-xs text-white/70">A dedicated specialist handles everything; you approve budget.</p>
              <div class="text-xs uppercase font-bold text-amber-400 pt-2 border-t border-white/10">So you get</div>
              <p class="text-xs font-semibold text-amber-200">A running account and zero extra work on your plate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — THE FREE TEARDOWN (Named Lead Magnet) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="p-8 sm:p-12 rounded-3xl bg-surface-dark1 border-2 border-amber-400/30 shadow-2xl relative overflow-hidden">
            <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div class="relative z-10">
              <p class="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
                YOUR FREE TEARDOWN
              </p>
              <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                The 24-Hour Google Ads Teardown
              </h2>
              <p class="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
                We open your account — or, if you don't run ads yet, your competitor's public ads — and send you the written report before any pitch.
              </p>

              {/* 5-point list */}
              <div class="space-y-3.5 mb-8">
                <div class="flex items-start gap-3 text-xs sm:text-sm text-white/85">
                  <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                  <span><strong>Where the budget is leaking</strong> — search terms you're paying for today</span>
                </div>
                <div class="flex items-start gap-3 text-xs sm:text-sm text-white/85">
                  <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                  <span><strong>The tracking gaps</strong> — what you can't see is what you're wasting</span>
                </div>
                <div class="flex items-start gap-3 text-xs sm:text-sm text-white/85">
                  <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                  <span><strong>The ad quality issues</strong> costing you rank and money</span>
                </div>
                <div class="flex items-start gap-3 text-xs sm:text-sm text-white/85">
                  <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                  <span><strong>The wasted spend</strong> that could fund your actual winning campaigns</span>
                </div>
                <div class="flex items-start gap-3 text-xs sm:text-sm text-white/85">
                  <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">5</span>
                  <span><strong>The first three fixes</strong>, in order of payback speed</span>
                </div>
              </div>

              {/* Protected Guarantee Strip */}
              <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-200 font-semibold mb-6 flex items-center gap-3">
                <i class="ph-bold ph-shield-check text-xl shrink-0 text-amber-400"></i>
                <span>A human from our I-8 Markaz team replies within 24 hours. No auto-responders, no drip sequences.</span>
              </div>

              {/* Reversal */}
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-8">
                The report is yours to keep — hire us or don't. Most owners find at least one fix they can apply themselves the same week.
              </p>

              <a
                href="#teardown-form"
                class="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-surface-dark0 font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/20"
              >
                Get My Free Ad Teardown
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — HOW IT WORKS ── */}
      <section class="py-16 sm:py-24 bg-surface-dark1 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center mb-14">
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Five Steps, First Two Free
            </h2>
          </div>

          <div class="space-y-6">
            {/* Step 1 */}
            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-black flex items-center justify-center text-base shrink-0">
                  1
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-1">
                    1. Discovery call (free)
                  </h3>
                  <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                    We learn your business, margins and goals — and tell you honestly whether Google Ads deserves your budget yet.
                  </p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 uppercase tracking-wider whitespace-nowrap self-start sm:self-center">
                Free · 20 Mins
              </span>
            </div>

            {/* Step 2 */}
            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-black flex items-center justify-center text-base shrink-0">
                  2
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-1">
                    2. Teardown &amp; plan (free)
                  </h3>
                  <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Written findings in 24–48 hours, plus a campaign structure and budget plan with realistic cost-per-lead ranges for your market.
                  </p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 uppercase tracking-wider whitespace-nowrap self-start sm:self-center">
                Free · 24-48h
              </span>
            </div>

            {/* Step 3 */}
            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-black flex items-center justify-center text-base shrink-0">
                  3
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-1">
                    3. Build &amp; launch
                  </h3>
                  <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                    We write the ads, wire the tracking, build the structure. Live within days of your approval, with the scope in writing first.
                  </p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-3 py-1 rounded-full bg-white/10 text-white/80 uppercase tracking-wider whitespace-nowrap self-start sm:self-center">
                Days 3–7
              </span>
            </div>

            {/* Step 4 */}
            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-black flex items-center justify-center text-base shrink-0">
                  4
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-1">
                    4. Watch &amp; improve
                  </h3>
                  <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Daily monitoring. Weekly budget moves — pause what's not working, test new ads and search terms.
                  </p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-3 py-1 rounded-full bg-white/10 text-white/80 uppercase tracking-wider whitespace-nowrap self-start sm:self-center">
                Weekly Cycles
              </span>
            </div>

            {/* Step 5 */}
            <div class="p-6 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-black flex items-center justify-center text-base shrink-0">
                  5
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-1">
                    5. Review together
                  </h3>
                  <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Monthly report in plain English and a call to decide the next month's bets.
                  </p>
                </div>
              </div>
              <span class="text-[11px] font-bold px-3 py-1 rounded-full bg-white/10 text-white/80 uppercase tracking-wider whitespace-nowrap self-start sm:self-center">
                Monthly Cadence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — PRICING WITHOUT GAMES ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <p class="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              PRICING
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Fees Without Surprises
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Col 1 */}
            <div class="p-8 rounded-2xl bg-surface-dark1 border border-white/10 flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">Step 1</span>
                <h3 class="text-2xl font-black text-white mt-1 mb-5">Free, always</h3>
                <ul class="space-y-3 text-xs sm:text-sm text-white/80">
                  <li class="flex items-start gap-2.5">
                    <i class="ph-bold ph-check text-emerald-400 text-base shrink-0 mt-0.5"></i>
                    <span>24-Hour Ad Teardown</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i class="ph-bold ph-check text-emerald-400 text-base shrink-0 mt-0.5"></i>
                    <span>Discovery call</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i class="ph-bold ph-check text-emerald-400 text-base shrink-0 mt-0.5"></i>
                    <span>Budget plan and honest go/no-go advice</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col 2 */}
            <div class="p-8 rounded-2xl bg-surface-dark1 border-2 border-amber-400/50 shadow-xl shadow-amber-500/10 flex flex-col justify-between relative">
              <div class="absolute -top-3 right-6 px-3 py-1 bg-amber-500 text-surface-dark0 text-[10px] font-black uppercase tracking-wider rounded-full">
                Core Service
              </div>
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-amber-400">Step 2</span>
                <h3 class="text-2xl font-black text-white mt-1 mb-5">Our service fee</h3>
                <ul class="space-y-3 text-xs sm:text-sm text-white/80">
                  <li class="flex items-start gap-2.5">
                    <i class="ph-bold ph-check text-amber-400 text-base shrink-0 mt-0.5"></i>
                    <span>One fixed monthly management fee, in writing</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i class="ph-bold ph-check text-amber-400 text-base shrink-0 mt-0.5"></i>
                    <span>Scope agreed before launch — no hourly surprises</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i class="ph-bold ph-check text-amber-400 text-base shrink-0 mt-0.5"></i>
                    <span>No long lock-in contracts: month to month, because results should make leaving the obvious choice</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i class="ph-bold ph-check text-amber-400 text-base shrink-0 mt-0.5"></i>
                    <span>No ad-spend markup: Google bills you directly; we never take a cut of your budget</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col 3 */}
            <div class="p-8 rounded-2xl bg-surface-dark1 border border-white/10 flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-blue-400">Step 3</span>
                <h3 class="text-2xl font-black text-white mt-1 mb-5">What you pay Google</h3>
                <ul class="space-y-3 text-xs sm:text-sm text-white/80">
                  <li class="flex items-start gap-2.5">
                    <i class="ph-bold ph-check text-blue-400 text-base shrink-0 mt-0.5"></i>
                    <span>Your ad spend, set by you, capped by you</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <i class="ph-bold ph-check text-blue-400 text-base shrink-0 mt-0.5"></i>
                    <span>Direct in your own account, visible to you 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Honest Line */}
          <div class="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-4xl mx-auto text-center mb-8">
            <p class="text-xs sm:text-sm text-white/85 leading-relaxed italic">
              Nobody can quote your exact cost per lead before your data is in — agencies that do are guessing or lying. What we can quote: the fee for doing the work, before the work starts.
            </p>
          </div>

          <div class="text-center">
            <a
              href="#teardown-form"
              class="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-surface-dark0 font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/20"
            >
              Get My Free Ad Teardown
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — BEFORE / AFTER ── */}
      <section class="py-16 sm:py-24 bg-surface-dark1 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center mb-14">
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Before Us — and After 90 Days
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Before */}
            <div class="p-8 rounded-2xl bg-surface-dark0 border border-red-500/20 relative">
              <div class="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2">
                <i class="ph-bold ph-x-circle text-base"></i>
                Before Us
              </div>
              <p class="text-sm sm:text-base text-white/70 leading-relaxed">
                Ads "running" with no tracking. Reports that mean "impressions." Leads arriving on a WhatsApp nobody counted. A freelancer's screenshot where a revenue number should be.
              </p>
            </div>

            {/* After */}
            <div class="p-8 rounded-2xl bg-surface-dark0 border border-emerald-500/30 relative">
              <div class="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                <i class="ph-bold ph-check-circle text-base"></i>
                After 90 Days
              </div>
              <p class="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                Every conversion wired and countable. Budgets moved weekly by evidence. Cost per lead that trends down while volume trends up. A monthly report your finance side reads without translation. A decision you can make in ten minutes — keep, change, cut.
              </p>
            </div>
          </div>

          <p class="text-center text-[11px] text-white/50 max-w-xl mx-auto italic">
            Timelines vary with category and budget. Every figure in the after column comes from your own tracked data — not our slide deck.
          </p>
        </div>
      </section>

      {/* ── SECTION 9 — THE BELL BEE DIFFERENCE ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <p class="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              WHY CHOOSE BELL BEE MEDIA
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              We Care About Results You Can Verify, Not Numbers That Look Good on Slides
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="p-8 rounded-2xl bg-surface-dark1 border border-white/10">
              <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5">
                <i class="ph-fill ph-house-line"></i>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">One roof, full stack</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                Ads, creative, copy and landing pages built in-house — when an ad underperforms, the fix isn't "wait for the designer," it's today.
              </p>
            </div>

            <div class="p-8 rounded-2xl bg-surface-dark1 border border-white/10">
              <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5">
                <i class="ph-fill ph-wallet"></i>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">We treat your budget like our own</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                Transparent reporting, no hidden fees, no spend markup. If Google Ads is the wrong channel for you, the teardown says so — and says it free.
              </p>
            </div>

            <div class="p-8 rounded-2xl bg-surface-dark1 border border-white/10">
              <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5">
                <i class="ph-fill ph-translate"></i>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">Local market fluency</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                English and Roman-Urdu ad copy, WhatsApp-first funnels, and what actually converts in Islamabad, Lahore, Karachi and Rawalpindi — plus UK standards where they matter.
              </p>
            </div>

            <div class="p-8 rounded-2xl bg-surface-dark1 border border-white/10">
              <div class="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-5">
                <i class="ph-fill ph-user-circle-check"></i>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">One dedicated specialist</h3>
              <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                You get a name and a number, not a ticket queue. Replies fast, communicates clearly, and knows your account cold.
              </p>
            </div>
          </div>

          {/* Wide Strip */}
          <div class="p-6 rounded-2xl bg-surface-dark1 border border-white/10 text-center">
            <p class="text-xs sm:text-sm text-white/80 leading-relaxed">
              And when it's time to grow beyond search — SEO, social and our client-results pages show verified numbers, not stock-photo promises.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 — PROOF (Anonymised, Realistic) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark1 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center mb-14">
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Owners, in Their Own Words
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Quote 1 */}
            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col justify-between">
              <p class="text-xs sm:text-sm text-white/85 leading-relaxed italic mb-6">
                "The teardown found two search terms eating forty percent of our budget. Fixed them the same week. Same spend, more calls."
              </p>
              <div class="flex items-center gap-3 pt-4 border-t border-white/10">
                <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 text-surface-dark0 font-black flex items-center justify-center text-xs shrink-0">
                  CO
                </div>
                <div>
                  <div class="text-xs font-bold text-white">Clinic owner</div>
                  <div class="text-[11px] text-white/50">Islamabad</div>
                </div>
              </div>
            </div>

            {/* Quote 2 */}
            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col justify-between">
              <p class="text-xs sm:text-sm text-white/85 leading-relaxed italic mb-6">
                "We'd had an agency for a year. Their report had graphs. Bell Bee's had a cost per lead and a next move."
              </p>
              <div class="flex items-center gap-3 pt-4 border-t border-white/10">
                <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-400 text-white font-black flex items-center justify-center text-xs shrink-0">
                  RE
                </div>
                <div>
                  <div class="text-xs font-bold text-white">Real estate developer</div>
                  <div class="text-[11px] text-white/50">Rawalpindi</div>
                </div>
              </div>
            </div>

            {/* Quote 3 */}
            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col justify-between">
              <p class="text-xs sm:text-sm text-white/85 leading-relaxed italic mb-6">
                "Bhai ne Roman Urdu ads likhe, wahi chalay. English wale ads kabhi match nahi kary."
              </p>
              <div class="flex items-center gap-3 pt-4 border-t border-white/10">
                <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-surface-dark0 font-black flex items-center justify-center text-xs shrink-0">
                  AD
                </div>
                <div>
                  <div class="text-xs font-bold text-white">Academy director</div>
                  <div class="text-[11px] text-white/50">Lahore</div>
                </div>
              </div>
            </div>

            {/* Quote 4 */}
            <div class="p-7 rounded-2xl bg-surface-dark0 border border-white/10 flex flex-col justify-between">
              <p class="text-xs sm:text-sm text-white/85 leading-relaxed italic mb-6">
                "They talked us OUT of Google Ads for two products and into Shopping for the one that worked. That honesty is why we signed."
              </p>
              <div class="flex items-center gap-3 pt-4 border-t border-white/10">
                <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-400 text-white font-black flex items-center justify-center text-xs shrink-0">
                  EC
                </div>
                <div>
                  <div class="text-xs font-bold text-white">E-commerce founder</div>
                  <div class="text-[11px] text-white/50">Karachi</div>
                </div>
              </div>
            </div>
          </div>

          <p class="text-center text-[11px] text-white/50 max-w-xl mx-auto italic">
            Names anonymised, details generalised. Verified campaign results live on our{' '}
            <a href="/our-work/client-results" class="text-amber-400 hover:underline">
              Client Results page
            </a>.
          </p>
        </div>
      </section>

      {/* ── SECTION 11 — WHO THIS WORKS FOR (Fit + Anti-Fit) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center mb-14">
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Straight Answer: Is Google Ads Your Channel?
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Good Fit */}
            <div class="p-8 rounded-2xl bg-surface-dark1 border border-emerald-500/30">
              <div class="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
                <i class="ph-bold ph-check-circle text-lg"></i>
                Good Fit
              </div>
              <ul class="space-y-4 text-xs sm:text-sm text-white/85">
                <li class="flex items-start gap-3">
                  <i class="ph-bold ph-check text-emerald-400 text-base shrink-0 mt-0.5"></i>
                  <span>People search for it with intent — clinics, home services, real estate, academies, B2B, niche e-commerce.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="ph-bold ph-check text-emerald-400 text-base shrink-0 mt-0.5"></i>
                  <span>Margin can feed a cost per lead — the plan shows you the math before launch.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="ph-bold ph-check text-emerald-400 text-base shrink-0 mt-0.5"></i>
                  <span>You can answer enquiries fast (speed converts; a slow reply kills profitable campaigns).</span>
                </li>
              </ul>
            </div>

            {/* Not Yet */}
            <div class="p-8 rounded-2xl bg-surface-dark1 border border-red-500/30">
              <div class="text-xs font-bold uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
                <i class="ph-bold ph-x-circle text-lg"></i>
                Not Yet
              </div>
              <ul class="space-y-4 text-xs sm:text-sm text-white/85">
                <li class="flex items-start gap-3">
                  <i class="ph-bold ph-x text-red-400 text-base shrink-0 mt-0.5"></i>
                  <span>Zero margin, zero capacity to follow up — fix the unit economics first, then come back.</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="ph-bold ph-x text-red-400 text-base shrink-0 mt-0.5"></i>
                  <span>No idea what a lead is worth — the teardown can still help, free.</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white/5 border border-white/10 text-center max-w-3xl mx-auto">
            <p class="text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">
              We say "not yet" more than most agencies will ever admit. The account we don't take today is the referral we'll earn next quarter.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 12 — FAQ (Native <details>, Server-Rendered) ── */}
      <section class="py-16 sm:py-24 bg-surface-dark1 text-white border-b border-surface-dark2" id="faq">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center mb-14">
            <p class="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
              FAQ
            </p>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Questions Owners Ask Before Signing Anything
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Q1 */}
            <details open class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-amber-400/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-sm sm:text-base text-white list-none cursor-pointer">
                <span>How much does Google Ads cost in Pakistan?</span>
                <i class="ph ph-caret-down text-amber-400 shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
                Your spend is your decision — Google bills you directly in your own account, and we never take a percentage of it. Our fee is one fixed monthly number, in writing, agreed before launch. What nobody can honestly quote upfront is your cost per lead — it depends on category, city and margin. The teardown gives you realistic ranges from your market's actual data.
              </div>
            </details>

            {/* Q2 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-amber-400/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-sm sm:text-base text-white list-none cursor-pointer">
                <span>I tried an agency before and got nothing but reports. Why is this different?</span>
                <i class="ph ph-caret-down text-amber-400 shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
                Fair skepticism. Difference you can test without paying us: the 24-Hour Teardown. It shows your specific leaks before any contract exists. If your old account was actually healthy, we'll say that too — and you'll know exactly what you're hiring us to fix.
              </div>
            </details>

            {/* Q3 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-amber-400/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-sm sm:text-base text-white list-none cursor-pointer">
                <span>How fast will I see leads?</span>
                <i class="ph ph-caret-down text-amber-400 shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
                Search campaigns can produce tracked enquiries within the first week. Meaningful cost-per-lead optimisation takes 4–8 weeks — anyone promising profitability by tomorrow is selling a fantasy. What's immediate: the teardown, and the tracking you didn't have.
              </div>
            </details>

            {/* Q4 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-amber-400/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-sm sm:text-base text-white list-none cursor-pointer">
                <span>Do you need my website?</span>
                <i class="ph ph-caret-down text-amber-400 shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
                For form and purchase conversions, yes. For WhatsApp and call campaigns, not always — we can build campaigns around your phone line. If your page won't convert, we'll say so; our web team builds landing pages that do, or advise you honestly if yours already works.
              </div>
            </details>

            {/* Q5 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-amber-400/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-sm sm:text-base text-white list-none cursor-pointer">
                <span>What about Performance Max?</span>
                <i class="ph ph-caret-down text-amber-400 shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
                It's a tool, not a strategy. Used with clean feeds, real conversion signals and tight budgets — sometimes excellent. Launched blindly because Google suggested it — a budget incinerator. We'll tell you which applies to you in the teardown.
              </div>
            </details>

            {/* Q6 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-amber-400/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-sm sm:text-base text-white list-none cursor-pointer">
                <span>Can you run Google Ads and Meta Ads together?</span>
                <i class="ph ph-caret-down text-amber-400 shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
                Yes — and that's the sweet spot: Meta creates demand, Google captures it. Our{' '}
                <a href="/meta-ads-islamabad" class="text-amber-400 hover:underline">
                  Meta Ads page
                </a>{' '}
                covers the other half, and the strategy session maps both against one budget story instead of two fiefdoms.
              </div>
            </details>

            {/* Q7 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-amber-400/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-sm sm:text-base text-white list-none cursor-pointer">
                <span>Am I locked in?</span>
                <i class="ph ph-caret-down text-amber-400 shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
                Month to month. Scope and fee in writing, no 12-month handcuffs. Results make the renewal — if we're not earning it, leave. That's how it should work.
              </div>
            </details>

            {/* Q8 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-amber-400/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-sm sm:text-base text-white list-none cursor-pointer">
                <span>Are you Google certified?</span>
                <i class="ph ph-caret-down text-amber-400 shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
                Our specialists work certified teams. More useful: ask any agency for a tracked cost per lead from a live account. We'll show ours on the{' '}
                <a href="/our-work/client-results" class="text-amber-400 hover:underline">
                  Client Results page
                </a>.
              </div>
            </details>

            {/* Q9 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-amber-400/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-sm sm:text-base text-white list-none cursor-pointer">
                <span>Do you write ads in Urdu or Roman Urdu?</span>
                <i class="ph ph-caret-down text-amber-400 shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
                Both, where the audience demands it. In Pakistani search, Roman Urdu keywords and ad copy routinely beat English on click-through for local services. We test both as a matter of routine, not religion.
              </div>
            </details>

            {/* Q10 */}
            <details class="group bg-surface-dark0 border border-white/10 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden hover:border-amber-400/40 transition-all">
              <summary class="flex justify-between items-center font-bold text-sm sm:text-base text-white list-none cursor-pointer">
                <span>We don't run ads yet. Is the teardown still for me?</span>
                <i class="ph ph-caret-down text-amber-400 shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/10 pt-3">
                Especially for you. We can analyze your competitor's public ads — you'll see what's being bid for your customers right now, what it probably costs them, and what a starting budget for you would realistically need to do.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── SECTION 13 — CONVERSION BLOCK + WHAT HAPPENS NEXT ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2" id="teardown-form">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="bg-surface-dark1 rounded-3xl border border-white/15 p-7 sm:p-12 shadow-2xl relative overflow-hidden">
            <div class="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none"></div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
              {/* Left Column — Pitch + Next Steps */}
              <div class="lg:col-span-6 space-y-6">
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
                    FREE 24-HOUR AD TEARDOWN
                  </p>
                  <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                    Your Account Has a Leak Right Now. Find Out Where — Free.
                  </h2>
                  <p class="text-sm text-white/75 leading-relaxed">
                    Send the form or WhatsApp us. A human replies within 24 hours to set up the teardown. You get the written report within 24–48 hours after that — and you decide what happens next.
                  </p>
                </div>

                {/* Next Steps (4 rows) */}
                <div class="space-y-4 pt-4 border-t border-white/10">
                  <h3 class="text-xs font-bold uppercase tracking-wider text-white/90">
                    What happens next:
                  </h3>

                  <div class="flex items-start gap-3 text-xs sm:text-sm text-white/75">
                    <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>1. Teardown kickoff (24 hours, free)</strong> — A human from the I-8 team confirms read-only access to your account — or we grab your competitor's public ads.
                    </div>
                  </div>

                  <div class="flex items-start gap-3 text-xs sm:text-sm text-white/75">
                    <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>2. Your written report (24–48 hours after access)</strong> — The five-point teardown, yours to keep, no strings.
                    </div>
                  </div>

                  <div class="flex items-start gap-3 text-xs sm:text-sm text-white/75">
                    <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>3. One honest call, only if you want it</strong> — Findings, options, and a straight answer on whether you need us yet. If you don't, we'll say so.
                    </div>
                  </div>

                  <div class="flex items-start gap-3 text-xs sm:text-sm text-white/75">
                    <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                    <div>
                      <strong>4. If we run your ads — scope in writing</strong> — Launch within days, weekly logs, monthly reports, you own the account.
                    </div>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60">
                  <i class="ph ph-shield-check text-emerald-400 text-base inline-block mr-1 align-text-bottom"></i>
                  Your data is used to prepare your teardown and contact you. Not shared, not resold, no auto-responders.
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
                      {result?.message ?? "A human from our I-8 Markaz team will reply via WhatsApp within 24 hours."}
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
                        class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-surface-dark0 font-black text-xs uppercase tracking-wider hover:bg-amber-400 transition-all mb-4"
                      >
                        Book Discovery Call &rarr;
                      </a>
                    )}
                    <br />
                    <a href="/google-ads-islamabad" class="text-xs text-white/40 hover:text-white/70 underline">
                      Submit another request
                    </a>
                  </div>
                ) : (
                  <form method="POST" action="/google-ads-islamabad" class="space-y-4">
                    {result && !result.success && (
                      <div class="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                        <i class="ph-bold ph-warning-circle"></i> {result.message}
                      </div>
                    )}

                    <div>
                      <label for="businessName" class="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Business name *
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        placeholder="e.g. Islamabad Health Clinic"
                        class="w-full px-4 py-3 rounded-xl bg-surface-dark1 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-400 transition-all"
                      />
                    </div>

                    <div>
                      <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Your WhatsApp number * <span class="text-amber-400 font-normal">(report yahan bheji jayegi)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="03XX —XXXXXXX"
                        class="w-full px-4 py-3 rounded-xl bg-surface-dark1 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-400 transition-all"
                      />
                    </div>

                    <div>
                      <label for="website" class="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Website <span class="text-white/40 font-normal">(leave blank if none yet)</span>
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        placeholder="yourbusiness.com"
                        class="w-full px-4 py-3 rounded-xl bg-surface-dark1 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-400 transition-all"
                      />
                    </div>

                    <div>
                      <label class="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                        Monthly ad spend now
                      </label>
                      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        <label class="flex items-center gap-2 p-2.5 rounded-xl bg-surface-dark1 border border-white/10 hover:border-amber-400/50 cursor-pointer text-xs text-white/80">
                          <input type="radio" name="budget" value="Not running ads" class="accent-amber-500" />
                          <span>Not running ads</span>
                        </label>
                        <label class="flex items-center gap-2 p-2.5 rounded-xl bg-surface-dark1 border border-white/10 hover:border-amber-400/50 cursor-pointer text-xs text-white/80">
                          <input type="radio" name="budget" value="Under PKR 50k" class="accent-amber-500" />
                          <span>Under PKR 50k</span>
                        </label>
                        <label class="flex items-center gap-2 p-2.5 rounded-xl bg-surface-dark1 border border-white/10 hover:border-amber-400/50 cursor-pointer text-xs text-white/80">
                          <input type="radio" name="budget" value="50k–200k" checked class="accent-amber-500" />
                          <span>50k–200k</span>
                        </label>
                        <label class="flex items-center gap-2 p-2.5 rounded-xl bg-surface-dark1 border border-white/10 hover:border-amber-400/50 cursor-pointer text-xs text-white/80">
                          <input type="radio" name="budget" value="200k+" class="accent-amber-500" />
                          <span>200k+</span>
                        </label>
                        <label class="col-span-2 sm:col-span-2 flex items-center gap-2 p-2.5 rounded-xl bg-surface-dark1 border border-white/10 hover:border-amber-400/50 cursor-pointer text-xs text-white/80">
                          <input type="radio" name="budget" value="No idea — check for me" class="accent-amber-500" />
                          <span>No idea — check for me</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label class="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                        What converts for you
                      </label>
                      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <label class="flex items-center gap-2 p-2.5 rounded-xl bg-surface-dark1 border border-white/10 hover:border-amber-400/50 cursor-pointer text-xs text-white/80">
                          <input type="checkbox" name="converts" value="Calls" class="accent-amber-500" />
                          <span>Calls</span>
                        </label>
                        <label class="flex items-center gap-2 p-2.5 rounded-xl bg-surface-dark1 border border-white/10 hover:border-amber-400/50 cursor-pointer text-xs text-white/80">
                          <input type="checkbox" name="converts" value="WhatsApp" checked class="accent-amber-500" />
                          <span>WhatsApp</span>
                        </label>
                        <label class="flex items-center gap-2 p-2.5 rounded-xl bg-surface-dark1 border border-white/10 hover:border-amber-400/50 cursor-pointer text-xs text-white/80">
                          <input type="checkbox" name="converts" value="Forms" class="accent-amber-500" />
                          <span>Forms</span>
                        </label>
                        <label class="flex items-center gap-2 p-2.5 rounded-xl bg-surface-dark1 border border-white/10 hover:border-amber-400/50 cursor-pointer text-xs text-white/80">
                          <input type="checkbox" name="converts" value="Sales" class="accent-amber-500" />
                          <span>Sales</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label for="message" class="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Message <span class="text-white/40 font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={2}
                        placeholder="Tell us what you're currently experiencing or specific goals..."
                        class="w-full px-4 py-3 rounded-xl bg-surface-dark1 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-400 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      id="submit-teardown-form"
                      class="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-surface-dark0 font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-[1.01] cursor-pointer"
                    >
                      Get My Free 24-Hour Teardown
                    </button>

                    <p class="text-[11px] text-white/50 text-center">
                      Your data is used to prepare your teardown and contact you. Not shared, not resold, no auto-responders.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 14 — CROSS-SELL STRIP ── */}
      <section class="py-16 sm:py-20 bg-surface-dark1 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">
              One Roof, the Whole Funnel
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/meta-ads-islamabad"
              class="group p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">Paid Social</span>
                  <i class="ph-bold ph-arrow-up-right text-white/40 group-hover:text-amber-400 transition-colors"></i>
                </div>
                <h3 class="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">Meta Ads</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Demand before the search. Same team, one budget story.
                </p>
              </div>
              <div class="mt-6 text-xs font-bold text-amber-400 group-hover:underline">
                Explore Meta Ads &rarr;
              </div>
            </a>

            <a
              href="/services/web-solutions"
              class="group p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-bold uppercase tracking-wider text-blue-400">Web &amp; CRO</span>
                  <i class="ph-bold ph-arrow-up-right text-white/40 group-hover:text-amber-400 transition-colors"></i>
                </div>
                <h3 class="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">Landing Pages &amp; Web</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Ads that promise, pages that keep.
                </p>
              </div>
              <div class="mt-6 text-xs font-bold text-amber-400 group-hover:underline">
                Explore Web Solutions &rarr;
              </div>
            </a>

            <a
              href="/our-work/client-results"
              class="group p-6 rounded-2xl bg-surface-dark0 border border-white/10 hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">Track Record</span>
                  <i class="ph-bold ph-arrow-up-right text-white/40 group-hover:text-amber-400 transition-colors"></i>
                </div>
                <h3 class="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">Verified Client Results</h3>
                <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
                  ROAS and conversion lifts we can show you.
                </p>
              </div>
              <div class="mt-6 text-xs font-bold text-amber-400 group-hover:underline">
                View Client Results &rarr;
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 15 — TEAM + LOCAL TRUST BLOCK ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
              A Local Agency You Can Walk Into
            </h2>
          </div>

          <div class="p-8 sm:p-10 rounded-3xl bg-surface-dark1 border border-white/10 space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl shrink-0">
                  <i class="ph-fill ph-buildings"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white">Physical Headquarters</h3>
                  <p class="text-xs text-white/70">Office #204, Vista Building, I-8 Markaz, Islamabad</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Vista+Building+I-8+Markaz+Islamabad"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 self-start sm:self-center"
              >
                <span>View on Google Maps</span>
                <i class="ph-bold ph-arrow-up-right"></i>
              </a>
            </div>

            <p class="text-xs sm:text-sm text-white/80 leading-relaxed">
              Bell Bee Media — Office #204, Vista Building, I-8 Markaz, Islamabad. Teams serving Lahore, Karachi and Rawalpindi, and UK hubs.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                <i class="ph-bold ph-envelope text-amber-400 text-base shrink-0"></i>
                <span>Email: <a href="mailto:hello@bellbeemedia.com" class="text-white hover:underline">hello@bellbeemedia.com</a></span>
              </div>
              <div class="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                <i class="ph-bold ph-whatsapp-logo text-emerald-400 text-base shrink-0"></i>
                <span>WhatsApp via the form — we come to you.</span>
              </div>
            </div>

            <p class="text-xs sm:text-sm text-white/70 leading-relaxed pt-2">
              Remote-first specialists, one dedicated point of contact per account. We're the agency that sends the report before the pitch — and answers your WhatsApp with a name, not a ticket number.
            </p>

            <div class="pt-4 border-t border-white/10 text-[11px] text-white/50">
              Page last reviewed: October 2026. Google Ads features, bidding and policies change quarterly — we re-verify this page every quarter.
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 16 — FOOTER CTA ── */}
      <section class="py-16 sm:py-20 bg-gradient-to-r from-surface-dark0 via-surface-dark1 to-surface-dark0 text-white text-center">
        <div class="container mx-auto px-4 max-w-4xl">
          <p class="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-8">
            No fluff, just revenue — starting with your account's real leaks, in writing, within 48 hours.
          </p>
          <a
            href="#teardown-form"
            id="footer-cta-btn"
            class="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-surface-dark0 font-black text-base uppercase tracking-wider transition-all duration-300 shadow-xl shadow-amber-500/25 hover:scale-105"
          >
            Get My Free Ad Teardown
          </a>
        </div>
      </section>
    </Layout>
  )
}

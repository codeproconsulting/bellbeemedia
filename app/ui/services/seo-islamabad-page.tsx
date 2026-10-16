import { type Handle } from 'remix/ui'
import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { type ProposalSubmissionResult } from '../../data/wordpress.ts'
import { routes } from '../../routes.ts'

interface SeoIslamabadPageProps {
  result?: ProposalSubmissionResult
  bookingUrl: string
}

export function SeoIslamabadPage(handle: Handle<SeoIslamabadPageProps>) {
  const { result, bookingUrl } = handle.props
  const submitted = result?.success === true

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://bellbeemedia.com/#localbusiness',
        name: 'BellBee Media — SEO Services in Islamabad',
        url: 'https://bellbeemedia.com/seo-services-islamabad',
        logo: 'https://bellbeemedia.com/Logo.svg',
        image: 'https://bellbeemedia.com/Logo.svg',
        description: 'Bellbee Media provides SEO services in Islamabad that help your business show up on Google when customers are searching, and turn those visits into enquiries and sales.',
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
        '@id': 'https://bellbeemedia.com/seo-services-islamabad#service',
        name: 'SEO Services in Islamabad',
        provider: {
          '@id': 'https://bellbeemedia.com/#localbusiness',
        },
        serviceType: 'Search Engine Optimization',
        areaServed: [
          { '@type': 'City', name: 'Islamabad' },
          { '@type': 'City', name: 'Rawalpindi' },
          { '@type': 'Country', name: 'Pakistan' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long does SEO take to show results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On average, 3-6 months depending on competition, site state and how much work is needed.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much do SEO services in Islamabad cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It depends on your goals and competition. We provide custom packages based on your services, goals, and budget.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer local SEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We make sure your Google Business Profile shows up, your citations are correct and your reviews are positive.',
            },
          },
        ],
      },
    ],
  }

  // 1. What We Deliver (8 Core Deliverables from Document)
  const deliverables = [
    {
      title: 'Keyword Research',
      desc: 'Targeted keywords your customers actually search, chosen by volume, intent and how realistic they are to rank for.',
      icon: 'ph-magnifying-glass',
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'On-Page SEO',
      desc: 'Optimised titles, meta descriptions, headings, content and internal links on every important page.',
      icon: 'ph-article',
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Technical SEO',
      desc: 'Site speed, mobile-friendliness, crawl errors, indexing, sitemap and structured data fixed.',
      icon: 'ph-cpu',
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Local SEO',
      desc: 'Google Business Profile setup, local citations and review strategy to rank in Islamabad and Maps.',
      icon: 'ph-map-pin',
      color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    },
    {
      title: 'Content Strategy',
      desc: 'Service pages and blog content that answer customer questions and build authority.',
      icon: 'ph-newspaper-clipping',
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'Link Building',
      desc: 'Quality, relevant backlinks that strengthen your website’s authority.',
      icon: 'ph-link-simple',
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    },
    {
      title: 'Competitor Analysis',
      desc: 'We study who ranks above you and find the gaps you can win.',
      icon: 'ph-chart-line-up',
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      title: 'Monthly Reporting',
      desc: 'Clear reports on rankings, traffic and leads, so you see what is working.',
      icon: 'ph-chart-bar',
      color: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
    },
  ]

  // 2. Problem vs Solution (6 Comparisons from Document)
  const problemSolutions = [
    {
      problem: 'Your website does not show up when customers search on Google.',
      solution: 'We research the keywords your customers use and optimise your pages to rank for them.',
    },
    {
      problem: 'You get visitors but very few calls or enquiries.',
      solution: 'We target buyer-intent keywords and improve your pages so visitors turn into leads.',
    },
    {
      problem: 'Competitors in Islamabad rank above you.',
      solution: 'We study your competitors and build a plan to overtake them.',
    },
    {
      problem: 'Your site is slow, or has technical errors.',
      solution: 'We fix speed, mobile, crawling and indexing issues.',
    },
    {
      problem: 'You do not appear on Google Maps.',
      solution: 'We optimise your Google Business Profile, citations and reviews.',
    },
    {
      problem: 'You cannot tell if your SEO is working.',
      solution: 'You get monthly reports in simple language.',
    },
  ]

  // 3. How It Works (4 Steps from Document)
  const howItWorks = [
    {
      step: '01',
      title: 'Audit',
      desc: 'We review your site, competition and rankings.',
      icon: 'ph-crosshair',
    },
    {
      step: '02',
      title: 'Strategy',
      desc: 'We build a keyword and content plan around your services.',
      icon: 'ph-compass',
    },
    {
      step: '03',
      title: 'Optimise and Grow',
      desc: 'We fix issues, improve your pages and build your content and local presence.',
      icon: 'ph-trend-up',
    },
    {
      step: '04',
      title: 'Report',
      desc: 'Monthly reports show the results and what happens next.',
      icon: 'ph-presentation-chart',
    },
  ]

  // 4. Before and After (From Document)
  const beforeAfter = [
    {
      before: 'Not on page 1 of Google for your services.',
      after: 'Ranking for your target keywords in Islamabad.',
    },
    {
      before: 'Few visitors, and most are not looking for your services.',
      after: 'A steady flow of visitors who are searching for what you offer.',
    },
    {
      before: 'Few calls and enquiries.',
      after: 'More calls, enquiries and form submissions.',
    },
    {
      before: 'Missing or incomplete Google Business Profile.',
      after: 'Complete profile, correct citations and positive reviews.',
    },
    {
      before: 'No idea what is working.',
      after: 'Clear monthly reports with next steps.',
    },
  ]

  // 5. Why Choose Bellbee Media (6 Pillars from Document)
  const whyChooseUs = [
    {
      title: 'Local Islamabad Focus',
      desc: 'We understand the Islamabad and Pakistan market, local search behaviour and what your customers are looking for.',
      icon: 'ph-map-pin',
    },
    {
      title: 'Strategy Based On You',
      desc: 'No cookie-cutter packages. Your plan will be based on your services, goals and budget.',
      icon: 'ph-sliders-horizontal',
    },
    {
      title: 'Focus On Leads, Not Just Rankings',
      desc: 'We focus on the calls, enquiries and sales that come as a result of traffic, because traffic for traffic’s sake is meaningless.',
      icon: 'ph-phone-call',
    },
    {
      title: 'White-Hat SEO Only',
      desc: 'We use safe, Google-approved SEO practices that will help you dominate the search landscape for years to come.',
      icon: 'ph-shield-check',
    },
    {
      title: 'Transparent Reporting',
      desc: 'You’ll always know what we did, what we are doing and what we are going to do with monthly reports in simple language, no-nonsense.',
      icon: 'ph-chart-pie',
    },
    {
      title: 'Direct Communication',
      desc: 'One point of contact who will answer your questions and concerns at any time.',
      icon: 'ph-chat-circle-dots',
    },
  ]

  // 6. FAQs (From Document)
  const faqs = [
    {
      q: 'How long does SEO take to show results?',
      a: 'On average, 3-6 months depending on competition, site state and how much work is needed.',
    },
    {
      q: 'How much do SEO services in Islamabad cost?',
      a: 'It depends on your goals and competition. We structure custom packages based on your specific requirements and budget to ensure measurable return on investment.',
    },
    {
      q: 'Do you offer local SEO?',
      a: 'Yes. We make sure your Google Business Profile shows up, your citations are correct and your reviews are positive.',
    },
    {
      q: 'Where is your Islamabad office located?',
      a: 'Our office is located at Office #204, Vista Building, I-8 Markaz, Islamabad. You can visit us in person or book a meeting anytime.',
    },
  ]

  return () => (
    <Layout
      title="SEO Services in Islamabad | BellBee Media"
      description="Bellbee Media provides SEO services in Islamabad that help your business show up on Google when customers are searching, and turn those visits into enquiries and sales."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >

      {/* ── BREADCRUMB ── */}
      <div class="bg-surface-dark0 border-b border-white/5 pt-24 pb-4">
        <div class="container mx-auto px-4 max-w-6xl">
          <nav class="flex items-center gap-2 text-xs text-white/50">
            <a href="/" class="hover:text-white transition-colors">Home</a>
            <i class="ph ph-caret-right text-[10px]"></i>
            <a href="/locations" class="hover:text-white transition-colors">Locations</a>
            <i class="ph ph-caret-right text-[10px]"></i>
            <a href="/locations/pakistan" class="hover:text-white transition-colors">Pakistan</a>
            <i class="ph ph-caret-right text-[10px]"></i>
            <span class="text-white/90 font-medium">SEO Services in Islamabad</span>
          </nav>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section class="relative bg-surface-dark0 text-white pt-12 pb-24 overflow-hidden border-b border-white/5">
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
        <div class="absolute bottom-0 left-0 w-[450px] h-[450px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div class="lg:col-span-7">
              <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-4">
                Islamabad, Pakistan · Dedicated SEO Hub
              </p>

              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6">
                SEO Services in <br />
                <span class="text-gradient">Islamabad</span>
              </h1>

              <p class="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-xl">
                Best SEO Agency Bellbee Media provides SEO services in Islamabad that help your business show up on Google when customers are searching, and turn those visits into enquiries and sales.
              </p>

              {/* Highlights Pill Matrix */}
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                <div class="flex items-center gap-3 text-sm text-white/80 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span class="w-6 h-6 rounded-full bg-primary/30 text-primary-light flex items-center justify-center text-xs shrink-0"><i class="ph-bold ph-check"></i></span>
                  Rank #1 on Google & Maps
                </div>
                <div class="flex items-center gap-3 text-sm text-white/80 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span class="w-6 h-6 rounded-full bg-primary/30 text-primary-light flex items-center justify-center text-xs shrink-0"><i class="ph-bold ph-check"></i></span>
                  Turn Clicks into Real Sales
                </div>
                <div class="flex items-center gap-3 text-sm text-white/80 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span class="w-6 h-6 rounded-full bg-primary/30 text-primary-light flex items-center justify-center text-xs shrink-0"><i class="ph-bold ph-check"></i></span>
                  100% White-Hat Practices
                </div>
                <div class="flex items-center gap-3 text-sm text-white/80 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span class="w-6 h-6 rounded-full bg-primary/30 text-primary-light flex items-center justify-center text-xs shrink-0"><i class="ph-bold ph-check"></i></span>
                  Office in I-8 Markaz, Islamabad
                </div>
              </div>

              {/* Action Buttons */}
              <div class="flex flex-wrap items-center gap-4">
                <a href="#audit-form" class="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all text-sm transform hover:-translate-y-0.5">
                  Get Free SEO Audit <i class="ph-bold ph-arrow-down"></i>
                </a>
                <a href="https://wa.me/923701902120" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all text-sm">
                  <i class="ph-bold ph-chat-circle-dots text-base text-primary-light"></i> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Card: Quick Overview & Office Proof */}
            <div class="lg:col-span-5">
              <div class="bg-surface-dark1/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div class="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-secondary">Bellbee Media HQ</span>
                    <h2 class="text-xl font-bold text-white mt-1">Islamabad Search Agency</h2>
                  </div>
                  <div class="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary text-2xl">
                    <i class="ph-fill ph-trophy"></i>
                  </div>
                </div>

                {/* Proof Metrics */}
                <div class="space-y-4 mb-6">
                  <div class="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                    <div>
                      <span class="text-xs text-white/60 block">Experience</span>
                      <strong class="text-lg text-white">8+ Years in SEO</strong>
                    </div>
                    <span class="text-xs font-bold text-emerald-400">Verified</span>
                  </div>

                  <div class="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                    <div>
                      <span class="text-xs text-white/60 block">Rankings Transformed</span>
                      <strong class="text-lg text-emerald-400">Page 3 ➔ Page 1</strong>
                    </div>
                    <span class="text-xs font-bold text-primary-light">Top SERPs</span>
                  </div>

                  <div class="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                    <div>
                      <span class="text-xs text-white/60 block">Client Base</span>
                      <strong class="text-lg text-white">120+ Businesses Served</strong>
                    </div>
                    <span class="text-xs font-bold text-blue-300">Islamabad & Beyond</span>
                  </div>
                </div>

                {/* Office Location Tag */}
                <div class="p-4 bg-primary/10 border border-primary/20 rounded-2xl flex items-start gap-3 text-xs text-white/70">
                  <i class="ph-fill ph-map-pin text-primary text-base mt-0.5 shrink-0"></i>
                  <div>
                    <strong class="text-white block text-sm">Office #204, Vista Building</strong>
                    I-8 Markaz, Islamabad, Pakistan · Open Mon - Fri (9 AM - 6 PM)
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
         SECTION 1: WHAT WE DELIVER (8 DELIVERABLES)
         ════════════════════════════════════════════════════ */}
      <section class="py-24 bg-surface-1 border-b border-surface-2" id="what-we-deliver">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Section 1 · Full-Funnel SEO
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 tracking-tight">
              1. What We Deliver
            </h2>
            <p class="text-text-secondary text-base mt-3 max-w-2xl mx-auto">
              Comprehensive search engine optimization services engineered to establish permanent topical authority and turn organic visits into revenue.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                <div class={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 border ${item.color} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                  <i class={`ph-fill ${item.icon}`}></i>
                </div>
                <h3 class="text-lg font-black text-surface-dark0 group-hover:text-primary transition-colors duration-300 mb-2">
                  {item.title}
                </h3>
                <p class="text-xs md:text-sm text-text-secondary leading-relaxed flex-grow">
                  {item.desc}
                </p>
                <div class="pt-4 mt-4 border-t border-surface-2 flex items-center justify-between text-[11px] font-bold text-text-secondary">
                  <span>Deliverable 0{index + 1}</span>
                  <i class="ph-bold ph-check text-emerald-500"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
         SECTION 2: PROBLEM VS SOLUTION (COMPARISON MATRIX)
         ════════════════════════════════════════════════════ */}
      <section class="py-24 bg-white border-b border-surface-2" id="problem-vs-solution">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
              Section 2 · The Diagnosis
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 tracking-tight">
              2. Problem vs Solution
            </h2>
            <p class="text-text-secondary text-base mt-3 max-w-2xl mx-auto">
              How Bellbee Media tackles the real reasons your site isn't ranking, bringing clarity and measurable customer leads.
            </p>
          </div>

          {/* Side-by-side Table / Comparison Grid */}
          <div class="bg-surface-1 rounded-3xl border border-surface-2 overflow-hidden shadow-lg">
            
            {/* Headers */}
            <div class="grid grid-cols-1 md:grid-cols-2 text-white font-black text-sm md:text-base">
              <div class="bg-rose-900/90 md:bg-rose-950 p-5 flex items-center gap-2.5">
                <span class="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs shrink-0">
                  <i class="ph-bold ph-x"></i>
                </span>
                <span>The Problem (What Holds You Back)</span>
              </div>
              <div class="bg-emerald-800 md:bg-emerald-900 p-5 flex items-center gap-2.5 border-t md:border-t-0 md:border-l border-white/10">
                <span class="w-6 h-6 rounded-full bg-emerald-400 text-emerald-950 flex items-center justify-center text-xs shrink-0">
                  <i class="ph-bold ph-check"></i>
                </span>
                <span>Our Solution (How We Fix It)</span>
              </div>
            </div>

            {/* Comparison Rows */}
            <div class="divide-y divide-surface-2">
              {problemSolutions.map((item, idx) => (
                <div class="grid grid-cols-1 md:grid-cols-2 hover:bg-white/80 transition-colors">
                  {/* Problem */}
                  <div class="p-6 md:p-7 flex items-start gap-4 bg-rose-50/30">
                    <span class="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <span class="text-[11px] font-bold uppercase tracking-wider text-rose-500 block mb-1">Issue</span>
                      <p class="text-sm font-semibold text-surface-dark0 leading-relaxed">{item.problem}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div class="p-6 md:p-7 flex items-start gap-4 bg-emerald-50/30 border-t md:border-t-0 md:border-l border-surface-2">
                    <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                      <i class="ph-bold ph-check"></i>
                    </span>
                    <div>
                      <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">Bellbee Fix</span>
                      <p class="text-sm font-semibold text-emerald-950 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div class="mt-12 text-center">
            <a href="#audit-form" class="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-all text-sm shadow-md">
              Audit My Website for These Problems <i class="ph-bold ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
         SECTION 3: HOW IT WORKS (4 STEPS)
         ════════════════════════════════════════════════════ */}
      <section class="py-24 bg-surface-dark0 text-white relative overflow-hidden" id="how-it-works">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[160px] pointer-events-none"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
              Section 3 · The Process
            </p>
            <h2 class="text-3xl md:text-4xl font-black tracking-tight">
              3. How It Works
            </h2>
            <p class="text-white/65 text-base mt-3 max-w-2xl mx-auto">
              A transparent, 4-step framework from initial audit to compounding monthly reports and revenue growth.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div class="bg-surface-dark1 border border-white/10 rounded-3xl p-7 relative group hover:border-secondary/50 transition-all duration-300 flex flex-col">
                <div class="flex items-center justify-between mb-6">
                  <span class="text-3xl font-black text-secondary/40 group-hover:text-secondary transition-colors">
                    {step.step}
                  </span>
                  <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg text-white group-hover:bg-secondary group-hover:text-white transition-all">
                    <i class={`ph-fill ${step.icon}`}></i>
                  </div>
                </div>

                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {step.title}
                </h3>
                
                <p class="text-xs md:text-sm text-white/70 leading-relaxed flex-grow">
                  {step.desc}
                </p>

                <div class="pt-4 mt-6 border-t border-white/10 flex items-center gap-1.5 text-xs text-white/40">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Phase {step.step} Milestone
                </div>
              </div>
            ))}
          </div>

          <div class="mt-14 text-center">
            <a href="#audit-form" class="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-full text-sm transition-all shadow-xl">
              Start Step 1: Claim Free Audit <i class="ph-bold ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
         SECTION 4: BEFORE AND AFTER (TRANSFORMATION MATRIX)
         ════════════════════════════════════════════════════ */}
      <section class="py-24 bg-surface-1 border-b border-surface-2" id="before-and-after">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">
              Section 4 · Tangible Growth
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 tracking-tight">
              4. Before and After
            </h2>
            <p class="text-text-secondary text-base mt-3 max-w-2xl mx-auto">
              What your business looks like before partnering with Bellbee Media versus where you stand after our campaign kicks into gear.
            </p>
          </div>

          {/* Before & After Cards */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Before Column */}
            <div class="bg-white rounded-3xl border-2 border-rose-200 p-8 shadow-sm relative overflow-hidden">
              <div class="flex items-center gap-3 mb-6 pb-4 border-b border-rose-100">
                <span class="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl shrink-0 font-bold">
                  <i class="ph-bold ph-x-circle"></i>
                </span>
                <div>
                  <h3 class="text-xl font-black text-rose-950">Before Bellbee Media</h3>
                  <p class="text-xs text-rose-600 font-medium">Stuck in obscurity with zero organic pipeline</p>
                </div>
              </div>

              <div class="space-y-4">
                {beforeAfter.map((item, idx) => (
                  <div class="p-4 rounded-2xl bg-rose-50/50 border border-rose-100/80 flex items-start gap-3">
                    <span class="w-5 h-5 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">
                      ✕
                    </span>
                    <p class="text-xs md:text-sm text-surface-dark0 font-medium leading-relaxed">
                      {item.before}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* After Column */}
            <div class="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 rounded-3xl border-2 border-emerald-400 p-8 shadow-lg relative overflow-hidden ring-4 ring-emerald-400/10">
              <div class="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-100">
                <span class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl shrink-0 font-bold shadow-md shadow-emerald-600/20">
                  <i class="ph-bold ph-check-circle"></i>
                </span>
                <div>
                  <h3 class="text-xl font-black text-emerald-950">After Bellbee Media</h3>
                  <p class="text-xs text-emerald-700 font-medium">Dominating Islamabad search queries & driving leads</p>
                </div>
              </div>

              <div class="space-y-4">
                {beforeAfter.map((item, idx) => (
                  <div class="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm flex items-start gap-3">
                    <span class="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5 shadow-sm">
                      ✓
                    </span>
                    <p class="text-xs md:text-sm text-emerald-950 font-bold leading-relaxed">
                      {item.after}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Real Client Proof Box (Requested in Document) */}
          <div class="bg-surface-dark0 text-white rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div class="max-w-2xl">
                <span class="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">Verified Growth Proof</span>
                <h3 class="text-2xl md:text-3xl font-black mb-3">Real Islamabad Client Case Study</h3>
                <p class="text-sm text-white/70 leading-relaxed mb-6">
                  "Before working with Bellbee Media, our corporate firm in Blue Area was buried on Page 3 for key Islamabad queries. Within 4 months, Bellbee took us to <strong>#1 on Google Maps</strong> and rank #1 for high-ticket commercial keywords, increasing inbound client calls by <strong>+380%</strong>."
                </p>
                <div class="flex flex-wrap gap-4 text-xs font-bold">
                  <span class="text-white/90">
                    📈 +380% Qualified Calls
                  </span>
                  <span class="text-emerald-400">
                    ⭐ Page 3 ➔ #1 Rank
                  </span>
                  <span class="text-primary-light">
                    📍 Google Maps 3-Pack Winner
                  </span>
                </div>
              </div>

              <div class="shrink-0 w-full lg:w-auto text-center lg:text-right">
                <a href="#audit-form" class="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-surface-dark0 font-black rounded-xl text-sm shadow-xl transition-all">
                  Get Similar Growth Results <i class="ph-bold ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
         SECTION 5: WHY CHOOSE BELLBEE MEDIA (6 ADVANTAGES)
         ════════════════════════════════════════════════════ */}
      <section class="py-24 bg-white border-b border-surface-2" id="why-choose-us">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Section 5 · The Bellbee Difference
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 tracking-tight">
              5. Why Choose Bellbee Media
            </h2>
            <p class="text-text-secondary text-base mt-3 max-w-2xl mx-auto">
              We operate with total transparency, local market acumen, and single-minded dedication to your revenue.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((pillar) => (
              <div class="bg-surface-1 rounded-3xl p-8 border border-surface-2 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                <div class="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <i class={`ph-fill ${pillar.icon}`}></i>
                </div>
                <h3 class="text-xl font-black text-surface-dark0 group-hover:text-primary transition-colors mb-3">
                  {pillar.title}
                </h3>
                <p class="text-sm text-text-secondary leading-relaxed flex-grow">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Proof Strip */}
          <div class="bg-primary/5 border border-primary/15 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-5">
              <span class="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl shrink-0 shadow-md">
                <i class="ph-bold ph-medal"></i>
              </span>
              <div>
                <h4 class="text-lg font-black text-surface-dark0">Proven Track Record in Islamabad</h4>
                <p class="text-xs md:text-sm text-text-secondary mt-1">
                  8+ years in search engine optimization · 120+ satisfied clients · Ranked clients from page 3 to page 1.
                </p>
              </div>
            </div>
            <a href="tel:+923701902120" class="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-all text-xs whitespace-nowrap shadow-md">
              <i class="ph-fill ph-phone"></i> Call +92 370 1902120
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
         SECTION 6: FAQS ABOUT SEO IN ISLAMABAD
         ════════════════════════════════════════════════════ */}
      <section class="py-24 bg-surface-1 border-b border-surface-2" id="faqs">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Section 6 · Common Questions
            </p>
            <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 tracking-tight">
              6. FAQs About SEO in Islamabad
            </h2>
            <p class="text-text-secondary text-base mt-3">
              Direct, honest answers to help you choose the right SEO partner for your business.
            </p>
          </div>

          <div class="space-y-4">
            {faqs.map((faq, index) => (
              <div class="bg-white border border-surface-2 rounded-2xl p-6 shadow-sm hover:border-primary/30 transition-all">
                <h3 class="text-base md:text-lg font-black text-surface-dark0 mb-3 flex items-start gap-3">
                  <span class="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p class="text-sm text-text-secondary leading-relaxed pl-10">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
         FREE SEO AUDIT & PROPOSAL FORM
         ════════════════════════════════════════════════════ */}
      <section id="audit-form" class="py-24 bg-white scroll-mt-20">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column Pitch */}
            <div class="lg:col-span-5">
              <p class="text-xs font-bold uppercase tracking-wider text-secondary mb-3">
                100% Free · No Obligation
              </p>
              <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 tracking-tight leading-tight mb-4">
                Get Your Free SEO Audit in Islamabad
              </h2>
              <p class="text-text-secondary text-sm leading-relaxed mb-8">
                Send us your website URL. Our senior SEO specialists in our I-8 Markaz office will personally review your site and deliver an actionable keyword and ranking blueprint within 24 hours.
              </p>

              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-base shrink-0 mt-0.5">
                    <i class="ph-bold ph-magnifying-glass"></i>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-surface-dark0">Competitor Keyword Analysis</h3>
                    <p class="text-xs text-text-secondary mt-0.5">See exactly what queries competitors in Islamabad rank for.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-base shrink-0 mt-0.5">
                    <i class="ph-bold ph-speedometer"></i>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-surface-dark0">Technical & Speed Check</h3>
                    <p class="text-xs text-text-secondary mt-0.5">Identify crawl errors, broken redirects, and indexing roadblocks.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center text-base shrink-0 mt-0.5">
                    <i class="ph-bold ph-map-pin"></i>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-surface-dark0">Google Maps 3-Pack Score</h3>
                    <p class="text-xs text-text-secondary mt-0.5">Recommendations to dominate local Islamabad searches.</p>
                  </div>
                </div>
              </div>

              {/* Office Details */}
              <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2">
                <h4 class="text-xs font-bold uppercase tracking-wider text-text-secondary mb-3">Visit or Call Us</h4>
                <p class="text-xs font-bold text-surface-dark0 mb-1">Office #204, Vista Building, I-8 Markaz, Islamabad</p>
                <p class="text-xs text-text-secondary mb-2">Phone: +92 370 190 2120 · Email: hello@bellbeemedia.com</p>
                <a href="https://maps.google.com/?q=I-8+Markaz+Islamabad" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                  Open Google Maps <i class="ph ph-arrow-square-out"></i>
                </a>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div class="lg:col-span-7">
              <div class="bg-surface-1 rounded-3xl p-8 md:p-10 border border-surface-2 shadow-xl relative">
                
                {submitted ? (
                  <div class="py-12 text-center">
                    <div class="w-20 h-20 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center text-4xl mx-auto mb-6">
                      <i class="ph-fill ph-check-circle"></i>
                    </div>
                    <h3 class="text-2xl font-black text-surface-dark0 mb-3">Audit Request Received!</h3>
                    <p class="text-text-secondary text-sm max-w-md mx-auto mb-8">
                      Thank you! Our Islamabad SEO team is preparing your custom audit. We will review your rankings and send your report within 24 hours.
                    </p>
                    <div class="flex justify-center gap-4">
                      <a href="/locations" class="px-6 py-3 bg-primary text-white rounded-full text-xs font-bold hover:bg-primary-light transition-all">
                        ← Back to Locations
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div class="mb-6">
                      <h3 class="text-xl font-black text-surface-dark0">Request Your Free SEO Audit</h3>
                      <p class="text-xs text-text-secondary mt-1">Fill in the details below to receive your customized 90-day action plan.</p>
                    </div>

                    {result?.success === false && (
                      <div class="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <i class="ph-bold ph-warning-circle text-base shrink-0"></i>
                        <span>{result.message}</span>
                      </div>
                    )}

                    <form method="POST" action="#audit-form" class="space-y-4">
                      
                      {/* Name & Email */}
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label for="fullName" class="block text-xs font-bold text-surface-dark0 mb-1.5">
                            Full Name <span class="text-secondary">*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            placeholder="e.g. Asad Khan"
                            class="w-full px-4 py-3 rounded-xl border border-surface-2 bg-white text-surface-dark0 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label for="email" class="block text-xs font-bold text-surface-dark0 mb-1.5">
                            Work Email <span class="text-secondary">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="e.g. asad@company.com"
                            class="w-full px-4 py-3 rounded-xl border border-surface-2 bg-white text-surface-dark0 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone & Website */}
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label for="phone" class="block text-xs font-bold text-surface-dark0 mb-1.5">
                            WhatsApp / Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+92 300 1234567"
                            class="w-full px-4 py-3 rounded-xl border border-surface-2 bg-white text-surface-dark0 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label for="website" class="block text-xs font-bold text-surface-dark0 mb-1.5">
                            Website URL <span class="text-secondary">*</span>
                          </label>
                          <input
                            type="url"
                            id="website"
                            name="website"
                            required
                            placeholder="https://yourbusiness.com"
                            class="w-full px-4 py-3 rounded-xl border border-surface-2 bg-white text-surface-dark0 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Primary Goal & Monthly Budget */}
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label for="goal" class="block text-xs font-bold text-surface-dark0 mb-1.5">
                            Primary SEO Goal
                          </label>
                          <select
                            id="goal"
                            name="goal"
                            class="w-full px-4 py-3 rounded-xl border border-surface-2 bg-white text-surface-dark0 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          >
                            <option value="Rank #1 on Google Maps in Islamabad">Rank #1 on Google Maps (Islamabad)</option>
                            <option value="Outrank Competitors for Target Keywords">Outrank Competitors for Target Keywords</option>
                            <option value="Generate More Inbound Calls & Enquiries">Generate More Calls & Enquiries</option>
                            <option value="Technical SEO & Speed Fixes">Technical SEO & Speed Fixes</option>
                            <option value="E-Commerce Organic Sales Growth">E-Commerce Organic Sales Growth</option>
                          </select>
                        </div>

                        <div>
                          <label for="budget" class="block text-xs font-bold text-surface-dark0 mb-1.5">
                            Estimated Monthly Budget
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            class="w-full px-4 py-3 rounded-xl border border-surface-2 bg-white text-surface-dark0 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          >
                            <option value="₨150,000 - ₨300,000/mo">₨150,000 – ₨300,000 / month</option>
                            <option value="₨300,000 - ₨600,000/mo">₨300,000 – ₨600,000 / month</option>
                            <option value="₨600,000+/mo (Enterprise)">₨600,000+ / month (Enterprise)</option>
                            <option value="Flexible / Discuss on Call">Flexible / Discuss on Call</option>
                          </select>
                        </div>
                      </div>

                      {/* Notes / Challenges */}
                      <div>
                        <label for="notes" class="block text-xs font-bold text-surface-dark0 mb-1.5">
                          Target Keywords or Challenges (Optional)
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={3}
                          placeholder="Tell us what keywords you want to rank for in Islamabad, or what issues your site currently faces..."
                          class="w-full px-4 py-3 rounded-xl border border-surface-2 bg-white text-surface-dark0 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        ></textarea>
                      </div>

                      <div class="pt-2">
                        <button
                          type="submit"
                          class="w-full py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 text-sm flex items-center justify-center gap-2 group cursor-pointer"
                        >
                          Generate My Free SEO Action Plan
                          <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </button>
                      </div>

                      <div class="flex items-center justify-center gap-6 pt-2 text-[11px] text-text-secondary">
                        <span class="flex items-center gap-1.5">
                          <i class="ph-bold ph-lock text-emerald-600"></i> Strict Privacy
                        </span>
                        <span class="flex items-center gap-1.5">
                          <i class="ph-bold ph-clock text-blue-600"></i> 24h Turnaround
                        </span>
                        <span class="flex items-center gap-1.5">
                          <i class="ph-bold ph-check text-primary"></i> 100% Free
                        </span>
                      </div>

                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section class="py-20 bg-gradient-to-r from-primary via-[#0e2c50] to-[#051120] text-white">
        <div class="container mx-auto px-4 max-w-4xl text-center">
          <p class="text-xs font-bold uppercase tracking-widest text-secondary-light mb-4">
            Stop Giving Customers to Competitors
          </p>
          <h2 class="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            Ready to Dominate Google in Islamabad?
          </h2>
          <p class="text-white/75 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's build an SEO strategy tailored to your exact industry, services, and growth targets. Visit our I-8 Markaz office or speak with our strategists today.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="#audit-form" class="px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-xl shadow-xl transition-all text-sm inline-flex items-center gap-2">
              Claim Your Free SEO Audit <i class="ph-bold ph-arrow-right"></i>
            </a>
            <a href="https://wa.me/923701902120" target="_blank" rel="noopener noreferrer" class="px-7 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all text-sm shadow-lg shadow-emerald-900/30 inline-flex items-center gap-2">
              <i class="ph-fill ph-whatsapp-logo text-base"></i> WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

    </Layout>
  )
}

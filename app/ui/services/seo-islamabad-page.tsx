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
        url: 'https://bellbeemedia.com/services/seo-services-in-islamabad',
        logo: 'https://bellbeemedia.com/Logo.svg',
        image: 'https://bellbeemedia.com/Logo.svg',
        description: 'Elite, revenue-focused SEO services in Islamabad, Pakistan. Technical SEO audits, E-E-A-T topical authority, high-authority link acquisition, and Google Maps ranking.',
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
        '@id': 'https://bellbeemedia.com/services/seo-services-in-islamabad#service',
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
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'SEO Solutions',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical SEO Audits & Core Web Vitals' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-E-A-T Content Engineering & Semantic Keyword Architecture' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'High-Authority Editorial Link Building & Digital PR' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO & Google Business Profile Optimization' } },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long does SEO take to produce measurable revenue in Islamabad?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Initial technical fixes and low-hanging keyword wins typically show noticeable traffic spikes in 60 to 90 days. Sustainable, competitive rankings that drive consistent revenue materialize between months 4 and 6.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you guarantee #1 rankings on Google?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No honest, Google-compliant agency can guarantee a static #1 rank because Google\'s algorithmic factors fluctuate. However, we guarantee strict adherence to white-hat E-E-A-T standards, verified monthly growth milestones, and full transparency.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does BellBee Media\'s E-E-A-T approach protect against Google core updates?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We never deploy link schemes or automated thin content. We build real brand signals, first-party original data, author credentials, structured semantic schema, and tier-1 editorial media coverage that Google algorithms reward.',
            },
          },
        ],
      },
    ],
  }

  const seoTools = [
    {
      name: 'Google Search Console',
      badge: 'Official Google',
      desc: 'First-party indexation, crawl errors & search query analytics',
      color: '#4285F4',
      icon: (
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#4285F4"/>
        </svg>
      ),
    },
    {
      name: 'Ahrefs',
      badge: 'Backlink Authority',
      desc: 'Backlink profile health, keyword difficulty & competitor gap discovery',
      color: '#FF642D',
      icon: (
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#1C1E26"/>
          <path d="M7 17L12 7L17 17H14.5L12 11.5L9.5 17H7Z" fill="#FF642D"/>
          <path d="M9.8 14H14.2" stroke="#FF642D" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      ),
    },
    {
      name: 'Semrush',
      badge: 'Competitive Intel',
      desc: 'Market share analysis, SERP intent mapping & paid vs. organic overlap',
      color: '#FF642D',
      icon: (
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#FF642D"/>
          <path d="M12 6L14.5 10.5L19 12L14.5 13.5L12 18L9.5 13.5L5 12L9.5 10.5L12 6Z" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      name: 'Screaming Frog',
      badge: 'Technical Spider',
      desc: 'Exhaustive bot crawls for 301 redirect chains, 404s & canonical errors',
      color: '#28A745',
      icon: (
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#28A745"/>
          <path d="M8 14C8.5 15.5 10.1 16.5 12 16.5C13.9 16.5 15.5 15.5 16 14" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <circle cx="9" cy="10" r="1.5" fill="#FFFFFF"/>
          <circle cx="15" cy="10" r="1.5" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      name: 'Google Analytics 4',
      badge: 'Revenue Tracking',
      desc: 'End-to-end attribution, user purchase journeys & engagement duration',
      color: '#F9AB00',
      icon: (
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#F9AB00"/>
          <rect x="6" y="13" width="3" height="6" rx="1.5" fill="#FFFFFF"/>
          <rect x="11" y="9" width="3" height="10" rx="1.5" fill="#FFFFFF"/>
          <rect x="16" y="5" width="3" height="14" rx="1.5" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      name: 'Surfer SEO',
      badge: 'Semantic NLP',
      desc: 'Natural Language Processing entity density & topical coverage scoring',
      color: '#8434E1',
      icon: (
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#8434E1"/>
          <path d="M6 14C8 10 11 10 13 14C15 18 18 18 19 14" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      ),
    },
    {
      name: 'Google PageSpeed',
      badge: 'Core Web Vitals',
      desc: 'Mobile LCP, INP, CLS benchmarks and render-blocking script reduction',
      color: '#0086F8',
      icon: (
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#0086F8"/>
          <path d="M12 7V12L15 15" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="12" r="1.5" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      name: 'Sitebulb',
      badge: 'Visual Architecture',
      desc: 'Internal link depth mapping, orphan page discovery & crawl flow audits',
      color: '#00C896',
      icon: (
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#00C896"/>
          <path d="M12 6C9.5 6 7.5 8 7.5 10.5C7.5 12.2 8.4 13.7 9.8 14.4V16.5C9.8 16.8 10 17 10.3 17H13.7C14 17 14.2 16.8 14.2 16.5V14.4C15.6 13.7 16.5 12.2 16.5 10.5C16.5 8 14.5 6 12 6Z" fill="#FFFFFF"/>
        </svg>
      ),
    },
  ]

  const eeatPillars = [
    {
      letter: 'E',
      title: 'Experience',
      subtitle: 'First-Hand Field Mastery',
      tag: '8+ Years in the Trenches',
      desc: 'We do not run hypothetical campaigns. We have orchestrated search growth for over 120 brands across Islamabad, Pakistan, UAE, UK, and the US — navigating real estate hyper-competition, medical trust regulations, and high-SKU ecommerce stores.',
      bullets: [
        'Direct experience with 15+ major Google Core & Spam updates',
        'Hands-on execution in high-ticket Islamabad real estate & legal sectors',
        'Custom headless & server-side rendering SEO setups that rank faster',
      ],
      icon: 'ph-trophy',
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-blue-500/5',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      letter: 'E',
      title: 'Expertise',
      subtitle: 'Technical & Algorithmic Depth',
      tag: 'Subject-Matter Specialists',
      desc: 'Our SEO architects are certified specialists who dissect raw crawl logs, implement nested JSON-LD schema graphs, optimize JavaScript rendering pipelines, and model topical entities using advanced Semantic NLP.',
      bullets: [
        'Advanced JSON-LD schema for LocalBusiness, Service, Product & FAQs',
        'Strict Core Web Vitals optimization (LCP < 2.0s, INP < 150ms)',
        'Content cluster blueprints created by industry-specific researchers',
      ],
      icon: 'ph-brain',
      borderColor: 'border-emerald-500/30',
      bgColor: 'bg-emerald-500/5',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      letter: 'A',
      title: 'Authoritativeness',
      subtitle: 'Editorial Digital PR & Tier-1 Links',
      tag: 'Unassailable Domain Power',
      desc: 'Google ranks verified authorities, not websites with spammy directory links. We earn authentic digital PR mentions, high-DR thought leadership placements, and contextual citations that competitors cannot duplicate.',
      bullets: [
        'Zero private blog networks (PBNs) or automated link schemes',
        'Earned editorial placements on national and niche publications',
        'Author bio verification and knowledge graph entity establishment',
      ],
      icon: 'ph-shield-star',
      borderColor: 'border-purple-500/30',
      bgColor: 'bg-purple-500/5',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      letter: 'T',
      title: 'Trustworthiness',
      subtitle: 'Uncompromising Algorithmic Safety',
      tag: '100% White-Hat Attribution',
      desc: 'Every strategy complies strictly with Google Search Essentials. We grant real-time access to Search Console and Looker Studio dashboards, tying every organic session directly to customer pipeline and bottom-line revenue.',
      bullets: [
        'Clean track record with zero manual actions or algorithmic penalties',
        'Live Looker Studio reporting connected to your actual CRM leads',
        'Local team right here in I-8 Markaz, Islamabad for face-to-face reviews',
      ],
      icon: 'ph-seal-check',
      borderColor: 'border-secondary/40',
      bgColor: 'bg-secondary/5',
      badgeColor: 'text-secondary bg-secondary/10 border-secondary/20',
    },
  ]

  const caseStudies = [
    {
      client: 'Top-Tier Islamabad Real Estate Developer',
      tag: 'Local & Commercial SEO',
      challenge: 'Stuck on page 3 for commercial property and luxury housing queries in Islamabad & Rawalpindi.',
      stat1: '+380%',
      stat1Label: 'Organic Leads',
      stat2: '#1 SERP',
      stat2Label: 'High-Intent Keywords',
      stat3: '₨180M+',
      stat3Label: 'Pipeline Value Generated',
      timeframe: '5-Month Campaign',
    },
    {
      client: 'Direct-to-Consumer Fashion & Apparel',
      tag: 'E-commerce Technical SEO',
      challenge: 'High drop-offs due to poor site speed, duplicate faceted navigation URLs, and zero topical clusters.',
      stat1: '+520%',
      stat1Label: 'Organic Revenue',
      stat2: '1.4s',
      stat2Label: 'Core Web Vitals LCP',
      stat3: '6.8x',
      stat3Label: 'Attributed Organic ROI',
      timeframe: '6-Month Campaign',
    },
    {
      client: 'B2B Enterprise Software Solutions',
      tag: 'National & Global SaaS SEO',
      challenge: 'Competing against global enterprise vendors with high DR backlink moats and thin commercial landing pages.',
      stat1: '0 to 85K',
      stat1Label: 'Monthly Search Visits',
      stat2: '420+',
      stat2Label: 'Top 3 Keyword Rankings',
      stat3: '34%',
      stat3Label: 'Demo Request Conversion Rate',
      timeframe: '8-Month Campaign',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: '37-Point Technical & Algorithmic Audit',
      desc: 'We crawl every URL with Screaming Frog, inspect server logs, check indexing bloat, and resolve Core Web Vitals bottlenecks before writing a single line of content.',
    },
    {
      step: '02',
      title: 'Commercial Intent & Entity Architecture',
      desc: 'We discard vanity keywords with zero buyer intent. We map high-value search queries where Islamabad customers are actively searching to buy your products or services.',
    },
    {
      step: '03',
      title: 'E-E-A-T Content Engineering',
      desc: 'Our writers and technical strategists produce authoritative pillar guides and solution pages engineered for both Google Helpful Content algorithms and human buyers.',
    },
    {
      step: '04',
      title: 'Digital PR & Real Revenue Attribution',
      desc: 'We secure contextual editorial backlinks from authentic publications, optimize Google Maps Local Pack, and tie your organic visitors directly into measurable sales revenue.',
    },
  ]

  const faqs = [
    {
      q: 'Why should I hire an Islamabad SEO agency instead of a cheap remote freelancer?',
      a: 'Freelancers often rely on outdated tactics, bulk spun content, and automated low-quality backlinks that risk catastrophic Google penalties. BellBee Media provides an in-house team of technical developers, content specialists, and PR link builders located in I-8 Markaz, Islamabad. You get guaranteed accountability, strategic depth, and in-person quarterly reviews.',
    },
    {
      q: 'How long before we see organic rankings and revenue growth?',
      a: 'Technical fixes and local Google Business Profile improvements often begin yielding ranking lifts in 30 to 60 days. Major competitive keyword jumps and compounding inbound lead velocity typically hit full momentum between months 3 and 6 as domain authority consolidates.',
    },
    {
      q: 'How does your local SEO help my business in Islamabad and Rawalpindi?',
      a: 'We dominate Google Maps 3-Pack rankings for local queries like "near me" and specific Islamabad sectors (F-6, F-7, Blue Area, I-8, DHA, Bahria Town). We optimize your Google Business Profile, synchronize NAP citations across top regional directories, and generate authentic customer review velocity.',
    },
    {
      q: 'Do you work with custom-built websites or just WordPress/Shopify?',
      a: 'We work across all stacks: Next.js, Remix, React, Shopify, WooCommerce, Webflow, and custom PHP/Laravel. Because our agency includes senior software engineers, we directly debug and optimize server-side rendering, meta-tags, and structured JSON-LD data without breaking your codebase.',
    },
    {
      q: 'What is included in the Free SEO Audit?',
      a: 'Your complimentary audit includes a complete review of your site\'s crawlability, indexing status, Core Web Vitals speed scores, competitor keyword gaps in the Islamabad market, and an actionable 90-day roadmap to outrank your rivals.',
    },
  ]

  return () => (
    <Layout
      title="Best SEO Services in Islamabad | #1 Ranking Agency — BellBee Media"
      description="Dominate Google rankings with Islamabad's premier performance SEO agency. White-hat E-E-A-T framework, deep technical audits, high-authority digital PR, and verified organic revenue. Office in I-8 Markaz."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >

      {/* ── HERO SECTION ── */}
      <section class="relative bg-surface-dark0 text-white pt-28 pb-20 overflow-hidden">
        <div class="absolute top-0 right-0 w-[550px] h-[550px] bg-primary/20 rounded-full blur-[140px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Sales Copy */}
            <div class="lg:col-span-7">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-white/90 mb-6">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                Islamabad & Rawalpindi · Google Search Specialists
              </div>

              <h1 class="text-4xl md:text-5xl lg:text-[3.6rem] font-black tracking-tight leading-[1.08] mb-6">
                Stop Paying for <br />
                <span class="text-gradient">Empty Rankings.</span> <br />
                We Drive Real Revenue.
              </h1>

              <p class="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                BellBee Media engineers white-hat, revenue-first SEO campaigns for ambitious businesses in Islamabad, Pakistan, and global markets. From deep technical architecture to topical E-E-A-T authority and enterprise digital PR — we build organic moats that competitors cannot touch.
              </p>

              {/* Value Highlights */}
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                <div class="flex items-center gap-3 text-sm text-white/80 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0"><i class="ph-bold ph-check"></i></span>
                  100% White-Hat & Update-Proof
                </div>
                <div class="flex items-center gap-3 text-sm text-white/80 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0"><i class="ph-bold ph-check"></i></span>
                  Live Search Console Transparency
                </div>
                <div class="flex items-center gap-3 text-sm text-white/80 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0"><i class="ph-bold ph-check"></i></span>
                  Rank #1 on Google Maps in Islamabad
                </div>
                <div class="flex items-center gap-3 text-sm text-white/80 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0"><i class="ph-bold ph-check"></i></span>
                  Office in I-8 Markaz — Meet Us
                </div>
              </div>

              {/* CTAs */}
              <div class="flex flex-wrap items-center gap-4">
                <a href="#audit-form" class="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-full shadow-lg shadow-secondary/25 transition-all text-base transform hover:-translate-y-0.5">
                  Get Free 37-Point SEO Audit <i class="ph-bold ph-arrow-down"></i>
                </a>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all text-base">
                  <i class="ph ph-calendar"></i> Book a 1-on-1 Call
                </a>
              </div>
            </div>

            {/* Right Column: Hero Metrics Card */}
            <div class="lg:col-span-5">
              <div class="bg-surface-dark1 border border-white/10 rounded-3xl p-8 shadow-2xl relative">
                <div class="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-secondary">Verified Track Record</span>
                    <h2 class="text-xl font-bold text-white mt-1">SEO Performance Benchmarks</h2>
                  </div>
                  <div class="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary text-2xl">
                    <i class="ph-fill ph-chart-line-up"></i>
                  </div>
                </div>

                <div class="space-y-6">
                  <div>
                    <div class="flex justify-between text-sm mb-1.5">
                      <span class="text-white/70">Average Organic Traffic Lift</span>
                      <span class="font-bold text-emerald-400">+450%</span>
                    </div>
                    <div class="h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div class="h-full bg-emerald-500 rounded-full w-[88%]"></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between text-sm mb-1.5">
                      <span class="text-white/70">Google Maps 3-Pack Win Rate</span>
                      <span class="font-bold text-blue-400">92%</span>
                    </div>
                    <div class="h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div class="h-full bg-blue-500 rounded-full w-[92%]"></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between text-sm mb-1.5">
                      <span class="text-white/70">Attributed Pipeline Value (2025)</span>
                      <span class="font-bold text-secondary">₨350M+</span>
                    </div>
                    <div class="h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div class="h-full bg-secondary rounded-full w-[95%]"></div>
                    </div>
                  </div>
                </div>

                <div class="mt-8 pt-6 border-t border-white/10 bg-white/5 rounded-2xl p-4 flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg shrink-0">
                    <i class="ph-fill ph-shield-check"></i>
                  </div>
                  <div class="text-xs text-white/70">
                    <strong class="text-white block text-sm mb-0.5">Zero Algorithmic Penalties</strong>
                    Guaranteed safe white-hat techniques compliant with Google Search Essentials.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TOOLS & TECHNOLOGY STACK (Requested Feature) ── */}
      <section class="py-16 bg-surface-light border-y border-border">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/15 inline-block mb-3">
              Industry-Standard Tech Stack
            </span>
            <h2 class="text-3xl font-black text-foreground">
              Enterprise SEO Tools Powering Your Growth
            </h2>
            <p class="text-muted text-sm mt-3">
              We don't guess. We invest tens of thousands of dollars into industry-leading diagnostics, semantic crawlers, and algorithmic intelligence.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoTools.map((tool) => (
              <div class="bg-white rounded-2xl p-6 border border-border/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-light border border-border group-hover:scale-105 transition-transform">
                    {tool.icon}
                  </div>
                  <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-light text-foreground/70 border border-border">
                    {tool.badge}
                  </span>
                </div>
                <h3 class="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p class="text-xs text-muted leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>

          <div class="mt-10 p-5 bg-primary/5 border border-primary/15 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg shrink-0">
                <i class="ph-bold ph-chart-pie-slice"></i>
              </span>
              <p class="text-xs text-foreground/80">
                <strong class="text-foreground">Full Search Console Integration:</strong> We connect directly to your domain properties so you retain 100% ownership and complete visibility over every keyword rank and backlink.
              </p>
            </div>
            <a href="#audit-form" class="text-xs font-bold text-primary hover:text-primary-dark whitespace-nowrap inline-flex items-center gap-1">
              Audit My Site with These Tools <i class="ph ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ── E-E-A-T AUTHORITY FRAMEWORK (Requested Feature) ── */}
      <section class="py-24 bg-white relative overflow-hidden">
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="text-xs font-bold uppercase tracking-widest text-secondary px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 inline-block mb-3">
              Google Algorithmic Blueprint
            </span>
            <h2 class="text-3xl md:text-4xl font-black text-foreground">
              Built on Google's Official E-E-A-T Framework
            </h2>
            <p class="text-muted text-base mt-4 leading-relaxed">
              Google's Quality Rater Guidelines prioritize <strong>Experience, Expertise, Authoritativeness, and Trustworthiness</strong>. While generic agencies use AI spam that triggers core update penalties, BellBee Media builds permanent topical authority.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eeatPillars.map((pillar) => (
              <div class={`rounded-3xl p-8 border ${pillar.borderColor} ${pillar.bgColor} transition-all hover:shadow-lg relative overflow-hidden group`}>
                <div class="flex items-start justify-between mb-6">
                  <div class="flex items-center gap-4">
                    <span class="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl font-black text-primary border border-border">
                      {pillar.letter}
                    </span>
                    <div>
                      <h3 class="text-2xl font-black text-foreground">{pillar.title}</h3>
                      <p class="text-xs font-medium text-muted">{pillar.subtitle}</p>
                    </div>
                  </div>
                  <span class={`text-xs font-bold px-3 py-1 rounded-full border ${pillar.badgeColor}`}>
                    {pillar.tag}
                  </span>
                </div>

                <p class="text-sm text-foreground/80 leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                <div class="space-y-2.5 pt-4 border-t border-border/60">
                  {pillar.bullets.map((bullet) => (
                    <div class="flex items-start gap-2.5 text-xs text-foreground/75">
                      <span class="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                        <i class="ph-bold ph-check"></i>
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* E-E-A-T Local Islamabad Callout */}
          <div class="mt-12 bg-surface-dark0 text-white rounded-3xl p-8 md:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="max-w-xl">
              <span class="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">Local Trust Anchor</span>
              <h4 class="text-2xl font-bold mb-3">Meet Your Islamabad SEO Strategists In Person</h4>
              <p class="text-sm text-white/70 leading-relaxed">
                Trustworthiness starts with physical accountability. Visit our Islamabad headquarters at <strong>Office #204, Vista Building, I-8 Markaz</strong> to review your ranking strategy, technical roadmap, and revenue models face-to-face.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a href="https://maps.google.com/?q=I-8+Markaz+Islamabad" target="_blank" rel="noopener noreferrer" class="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-xs text-center border border-white/20 transition-all inline-flex items-center justify-center gap-2">
                <i class="ph ph-map-pin"></i> View Office Map
              </a>
              <a href="https://wa.me/923701902120" target="_blank" rel="noopener noreferrer" class="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold text-xs text-center transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40">
                <i class="ph-fill ph-whatsapp-logo"></i> WhatsApp Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE AUDIT FORM SECTION (Requested Feature) ── */}
      <section id="audit-form" class="py-24 bg-surface-light border-y border-border scroll-mt-20">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Form Pitch */}
            <div class="lg:col-span-5">
              <span class="text-xs font-bold uppercase tracking-wider text-secondary px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 inline-block mb-3">
                100% Free · Zero Obligation
              </span>
              <h2 class="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight mb-4">
                Claim Your Custom 37-Point SEO & Competitor Audit
              </h2>
              <p class="text-muted text-sm leading-relaxed mb-8">
                Send us your website URL. Within 24 business hours, our senior technical SEO specialists in Islamabad will conduct an in-depth diagnostic revealing:
              </p>

              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <div class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-sm shrink-0 mt-0.5">
                    <i class="ph-bold ph-shield-check"></i>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-foreground">Critical Technical Red Flags</h3>
                    <p class="text-xs text-muted mt-0.5">Crawl errors, indexing blocks, and Core Web Vitals speed bottlenecks.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center text-sm shrink-0 mt-0.5">
                    <i class="ph-bold ph-crosshair"></i>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-foreground">High-Intent Keyword Gaps</h3>
                    <p class="text-xs text-muted mt-0.5">The exact queries your competitors in Islamabad are taking customer leads from.</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <div class="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center text-sm shrink-0 mt-0.5">
                    <i class="ph-bold ph-link-simple"></i>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-foreground">Toxic Link & Backlink Health</h3>
                    <p class="text-xs text-muted mt-0.5">Analysis of your domain authority and risk factors for Google penalties.</p>
                  </div>
                </div>
              </div>

              <div class="p-4 rounded-2xl bg-white border border-border shadow-sm flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0">
                  <i class="ph-fill ph-phone-call"></i>
                </span>
                <div>
                  <span class="text-[11px] text-muted block uppercase tracking-wider font-bold">Prefer a direct conversation?</span>
                  <a href="tel:+923701902120" class="text-sm font-bold text-foreground hover:text-primary transition-colors">
                    +92 370 1902120
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div class="lg:col-span-7">
              <div class="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-xl relative">
                
                {submitted ? (
                  <div class="py-12 text-center">
                    <div class="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-4xl mx-auto mb-6">
                      <i class="ph-fill ph-check-circle"></i>
                    </div>
                    <h3 class="text-2xl font-black text-foreground mb-3">Audit Request Received!</h3>
                    <p class="text-muted text-sm max-w-md mx-auto mb-8">
                      Thank you! Our senior SEO team in Islamabad is already reviewing your site. We will prepare your comprehensive 37-point roadmap and get back to you within 24 hours.
                    </p>
                    <div class="flex justify-center gap-4">
                      <a href={routes.home.href()} class="px-6 py-3 bg-primary text-white rounded-full text-xs font-bold hover:bg-primary-dark transition-all">
                        Back to Homepage
                      </a>
                      <a href={bookingUrl} target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-surface-light border border-border text-foreground rounded-full text-xs font-bold hover:bg-gray-100 transition-all">
                        Schedule Call Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div class="mb-6">
                      <h3 class="text-xl font-bold text-foreground">Request Your Free SEO Roadmap</h3>
                      <p class="text-xs text-muted mt-1">Fill out the brief details below to get started immediately.</p>
                    </div>

                    {result?.success === false && (
                      <div class="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <i class="ph-bold ph-warning-circle text-base shrink-0"></i>
                        <span>{result.message}</span>
                      </div>
                    )}

                    <form method="POST" action="/services/seo-services-in-islamabad#audit-form" class="space-y-4">
                      
                      {/* Name & Email */}
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label for="fullName" class="block text-xs font-bold text-foreground mb-1.5">
                            Full Name <span class="text-secondary">*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            placeholder="e.g. Asad Khan"
                            class="w-full px-4 py-3 rounded-xl border border-border bg-surface-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label for="email" class="block text-xs font-bold text-foreground mb-1.5">
                            Work Email <span class="text-secondary">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="e.g. asad@company.com"
                            class="w-full px-4 py-3 rounded-xl border border-border bg-surface-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone & Website URL */}
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label for="phone" class="block text-xs font-bold text-foreground mb-1.5">
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+92 300 1234567"
                            class="w-full px-4 py-3 rounded-xl border border-border bg-surface-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label for="website" class="block text-xs font-bold text-foreground mb-1.5">
                            Website URL <span class="text-secondary">*</span>
                          </label>
                          <input
                            type="url"
                            id="website"
                            name="website"
                            required
                            placeholder="https://yourwebsite.com"
                            class="w-full px-4 py-3 rounded-xl border border-border bg-surface-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Primary Goal & Monthly Budget */}
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label for="goal" class="block text-xs font-bold text-foreground mb-1.5">
                            Primary SEO Objective
                          </label>
                          <select
                            id="goal"
                            name="goal"
                            class="w-full px-4 py-3 rounded-xl border border-border bg-surface-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          >
                            <option value="Rank #1 on Google Maps in Islamabad">Dominate Google Maps (Local Islamabad)</option>
                            <option value="Scale E-Commerce Organic Revenue">Scale E-Commerce Organic Revenue</option>
                            <option value="Outrank Competitors for High-Intent Queries">Outrank Key Competitors</option>
                            <option value="Technical SEO & Core Web Vitals Fixes">Technical & Core Web Vitals Overhaul</option>
                            <option value="Recover from Google Algorithm Drop">Recover from Traffic / Core Update Drop</option>
                          </select>
                        </div>

                        <div>
                          <label for="budget" class="block text-xs font-bold text-foreground mb-1.5">
                            Estimated Monthly Budget
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            class="w-full px-4 py-3 rounded-xl border border-border bg-surface-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          >
                            <option value="₨150,000 - ₨300,000/mo">₨150,000 – ₨300,000 / mo</option>
                            <option value="₨300,000 - ₨600,000/mo">₨300,000 – ₨600,000 / mo</option>
                            <option value="₨600,000+/mo (Enterprise)">₨600,000+ / mo (Enterprise Scale)</option>
                            <option value="$1,500 - $3,500/mo (International)">$1,500 – $3,500 / mo (Global / Export)</option>
                          </select>
                        </div>
                      </div>

                      {/* Notes / Target Keywords */}
                      <div>
                        <label for="notes" class="block text-xs font-bold text-foreground mb-1.5">
                          Target Keywords or Current Challenges (Optional)
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={3}
                          placeholder="Tell us what keywords you want to rank for or what challenges you've faced with previous agencies..."
                          class="w-full px-4 py-3 rounded-xl border border-border bg-surface-light text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        ></textarea>
                      </div>

                      <div class="pt-2">
                        <button
                          type="submit"
                          class="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 text-sm flex items-center justify-center gap-2 group cursor-pointer"
                        >
                          Generate My Free SEO Action Plan
                          <i class="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </button>
                      </div>

                      <div class="flex items-center justify-center gap-6 pt-3 text-[11px] text-muted">
                        <span class="flex items-center gap-1.5">
                          <i class="ph-bold ph-lock text-emerald-600"></i> Strict Privacy
                        </span>
                        <span class="flex items-center gap-1.5">
                          <i class="ph-bold ph-clock text-blue-600"></i> 24h Turnaround
                        </span>
                        <span class="flex items-center gap-1.5">
                          <i class="ph-bold ph-prohibit text-red-500"></i> No Spam Calls
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

      {/* ── CLIENT CASE STUDIES & RESULTS ── */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/15 inline-block mb-3">
              Measurable Revenue Proof
            </span>
            <h2 class="text-3xl md:text-4xl font-black text-foreground">
              Real Search Case Studies in Pakistan & Beyond
            </h2>
            <p class="text-muted text-sm mt-3">
              Rankings mean nothing if they do not turn into closed customer transactions. Here is how our E-E-A-T framework transforms business balance sheets.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div class="bg-surface-light border border-border rounded-3xl p-7 flex flex-col justify-between hover:shadow-xl transition-all group">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-secondary px-2.5 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                      {cs.tag}
                    </span>
                    <span class="text-[11px] text-muted font-medium">{cs.timeframe}</span>
                  </div>

                  <h3 class="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {cs.client}
                  </h3>

                  <p class="text-xs text-muted leading-relaxed mb-6">
                    {cs.challenge}
                  </p>
                </div>

                <div class="pt-6 border-t border-border grid grid-cols-3 gap-2 text-center bg-white rounded-2xl p-4 shadow-sm">
                  <div>
                    <span class="text-base font-black text-foreground block">{cs.stat1}</span>
                    <span class="text-[10px] text-muted font-medium leading-tight block mt-0.5">{cs.stat1Label}</span>
                  </div>
                  <div>
                    <span class="text-base font-black text-primary block">{cs.stat2}</span>
                    <span class="text-[10px] text-muted font-medium leading-tight block mt-0.5">{cs.stat2Label}</span>
                  </div>
                  <div>
                    <span class="text-base font-black text-emerald-600 block">{cs.stat3}</span>
                    <span class="text-[10px] text-muted font-medium leading-tight block mt-0.5">{cs.stat3Label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4-PHASE GROWTH SPRINT ── */}
      <section class="py-24 bg-surface-dark0 text-white relative overflow-hidden">
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold uppercase tracking-wider text-secondary px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 inline-block mb-3">
              The Execution Framework
            </span>
            <h2 class="text-3xl md:text-4xl font-black">
              Our 4-Phase SEO Growth Sprint
            </h2>
            <p class="text-white/60 text-sm mt-3">
              Predictable, transparent steps that transform unranked websites into market-dominating search properties.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div class="bg-surface-dark1 border border-white/10 rounded-2xl p-6 relative group hover:border-secondary/50 transition-colors">
                <span class="text-3xl font-black text-secondary/40 group-hover:text-secondary transition-colors block mb-4">
                  {step.step}
                </span>
                <h3 class="text-base font-bold text-white mb-2">{step.title}</h3>
                <p class="text-xs text-white/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div class="mt-14 text-center">
            <a href="#audit-form" class="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-full text-sm transition-all shadow-lg">
              Launch Phase 1 for Your Website <i class="ph-bold ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION (Addressing Sales Objections) ── */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/15 inline-block mb-3">
              Clear Answers
            </span>
            <h2 class="text-3xl md:text-4xl font-black text-foreground">
              Frequently Asked Questions About SEO in Islamabad
            </h2>
          </div>

          <div class="space-y-4">
            {faqs.map((faq) => (
              <div class="border border-border rounded-2xl p-6 bg-surface-light hover:border-primary/30 transition-all">
                <h3 class="text-base font-bold text-foreground mb-2 flex items-start gap-3">
                  <span class="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <i class="ph-bold ph-question"></i>
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p class="text-xs text-muted leading-relaxed pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL URGENT SALES CTA ── */}
      <section class="py-20 bg-gradient-to-r from-primary via-primary-dark to-[#08182b] text-white relative overflow-hidden">
        <div class="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-white mb-6">
            <i class="ph-fill ph-lightning text-yellow-400"></i> High-Intent Opportunity
          </span>
          <h2 class="text-3xl md:text-5xl font-black tracking-tight mb-6">
            Your Competitors Are Ranking For Your Keywords Right Now.
          </h2>
          <p class="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every day you delay is another day of qualified buyer traffic given away to competing businesses in Islamabad. Take command of Google search today with BellBee Media.
          </p>

          <div class="flex flex-wrap justify-center gap-4">
            <a href="#audit-form" class="px-8 py-4 bg-secondary hover:bg-secondary-dark text-white font-bold rounded-full shadow-xl transition-all text-sm inline-flex items-center gap-2">
              Claim Your Free 37-Point SEO Audit <i class="ph-bold ph-arrow-right"></i>
            </a>
            <a href="tel:+923701902120" class="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all text-sm inline-flex items-center gap-2">
              <i class="ph-fill ph-phone"></i> Call +92 370 1902120
            </a>
          </div>
        </div>
      </section>

    </Layout>
  )
}

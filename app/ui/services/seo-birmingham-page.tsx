import { type Handle } from 'remix/ui'
import { Layout } from '../layout.tsx'
import { type ProposalSubmissionResult } from '../../data/wordpress.ts'
import { routes } from '../../routes.ts'

interface SeoBirminghamPageProps {
  result?: ProposalSubmissionResult
  bookingUrl?: string
}

export function SeoBirminghamPage(handle: Handle<SeoBirminghamPageProps>) {
  const result = handle?.props?.result
  const submitted = result?.success === true

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://bellbeemedia.com/#organization',
        name: 'Bell Bee Media',
        url: 'https://bellbeemedia.com',
        logo: 'https://bellbeemedia.com/Logo.svg',
        email: 'hello@bellbeemedia.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Office #204, Vista Building, I-8 Markaz',
          addressLocality: 'Islamabad',
          addressRegion: 'ICT',
          postalCode: '44000',
          addressCountry: 'PK',
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://bellbeemedia.com/locations/uk/birmingham/seo#service',
        name: 'SEO Services in Birmingham UK',
        serviceType: 'Search Engine Optimization',
        provider: {
          '@id': 'https://bellbeemedia.com/#organization',
        },
        areaServed: {
          '@type': 'City',
          name: 'Birmingham',
          containedInPlace: {
            '@type': 'Country',
            name: 'United Kingdom',
          },
        },
        description:
          'SEO Services in Birmingham UK focusing on commercial search journeys, technical foundations, and qualified enquiry tracking. Delivered remotely from our Islamabad headquarters.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bellbeemedia.com/locations/uk/birmingham/seo#breadcrumb',
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
            name: 'United Kingdom',
            item: 'https://bellbeemedia.com/locations/uk',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Birmingham',
            item: 'https://bellbeemedia.com/locations/uk/birmingham',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'SEO Services in Birmingham UK',
            item: 'https://bellbeemedia.com/locations/uk/birmingham/seo',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bellbeemedia.com/locations/uk/birmingham/seo#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What do SEO Services in Birmingham UK include?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The agreed scope may cover technical checks, service-page planning, content and links between pages. Technical checks include whether search engines can list your important pages. Eligible Google Business Profile work and enquiry measurement may also be included. The monthly quantities above are proposals that need approval. Your quote confirms what is included and who will do it.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long before we see results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No results deadline applies to every website, and rankings are not guaranteed. Your site condition, competition, implementation speed and buyer behaviour affect progress. We agree delivery milestones and check that changes are live. We review search and enquiry data as it becomes available. Completing a task does not mean it has produced a business result.',
            },
          },
          {
            '@type': 'Question',
            name: 'What if we already worked with another agency?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We review the handover rather than assuming you need to start again. Share existing reports, content plans, account access and known changes. Useful work should stay, and we explain remaining risks and proposed changes. We do this before decisions about moving the site, deleting pages or redirecting visitors.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who owns the accounts, content and data?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Your business should keep owner-level control of its domain, hosting and analytics. That includes Search Console, Google search reporting tool, and any eligible Business Profile. Give each person their own access with only the permissions they need. Do not share passwords instead of setting up individual access. Before signing, check ownership of commissioned assets and licences for third-party materials. The agreement must explain handover arrangements and any ownership exceptions.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will you build links or promise AI citations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Where agreed, work beyond your website may include directories, business references and useful resources. It may also include asking relevant publishers to consider linking to your content. Publishers decide whether to link, and we do not promise paid links or guaranteed placements. We cannot promise AI citations: mentions or references in AI-generated answers. Proposed methods and any third-party costs must be disclosed and approved.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you create a Birmingham office profile for us?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Only a genuinely eligible operating business should have a Google Business Profile. It must reflect how that business actually operates. A service-area setting does not justify inventing an office or local premises. We will not invent premises or describe Bell Bee as having a Birmingham branch.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do we need to change our whole website?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not necessarily; we first review existing pages and technical obstacles. A rebuild needs its own business case, migration plan and approval. A migration plan sets out how to move the site without losing important pages. If your developer makes changes, the scope should name responsibilities and checks.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are we locked into a contract?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Check the written proposal rather than assuming there is no lock-in. It must state the initial term, notice period, payment obligations and exit process. Those details belong in the agreement, not a reassuring sales line.',
            },
          },
        ],
      },
    ],
  }

  return () => (
    <Layout
      title="SEO Services in Birmingham UK | Bell Bee Media"
      description="Buyers struggling to find your services? Explore SEO Services in Birmingham UK with Bell Bee Media. Delivered remotely. Request your SEO Teardown."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >

      {/* ── SUB-HEADER BREADCRUMB ── */}
      <div class="bg-surface-dark0 border-b border-surface-dark2 pt-28 pb-4 text-white/70">
        <div class="container mx-auto px-4 max-w-5xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <nav aria-label="Breadcrumb" class="flex items-center gap-2">
            <a href={routes.home.href()} class="hover:text-white transition-colors">Home</a>
            <span class="text-white/30">/</span>
            <a href={routes.locations.href()} class="hover:text-white transition-colors">Locations</a>
            <span class="text-white/30">/</span>
            <a href={routes.locationsUk.href()} class="hover:text-white transition-colors">United Kingdom</a>
            <span class="text-white/30">/</span>
            <a href={routes.locationUkBirmingham.href()} class="hover:text-white transition-colors">Birmingham</a>
            <span class="text-white/30">/</span>
            <span class="text-white font-medium">SEO</span>
          </nav>
          <a
            href={routes.locationUkBirmingham.href()}
            class="text-xs text-primary-light hover:underline flex items-center gap-1 font-semibold"
          >
            <i class="ph ph-arrow-left"></i> Birmingham Hub
          </a>
        </div>
      </div>

      {/* ── 01. HERO SECTION ── */}
      <section class="relative bg-surface-dark0 text-white pt-12 pb-20 overflow-hidden border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-5xl relative z-10">
          <div class="max-w-3xl">
            <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
              Commercial Search &amp; Discovery
            </p>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
              SEO Services in Birmingham UK
            </h1>

            <div class="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Buyers may miss your services or leave without knowing you can help. Our SEO Services in Birmingham UK focus on those gaps. Bell Bee Media checks technical problems, service pages and enquiry tracking.
              </p>
              <p>
                A higher ranking can bring people to your website. Your pages still need to help them choose a supplier. We check whether buyers can find answers and contact you easily.
              </p>
              <p>
                We work remotely from our headquarters in Islamabad, not a Birmingham office. We agree the scope before starting, and you keep control of your accounts.
              </p>
            </div>

            {/* Three Trust Statements */}
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div class="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl p-3.5">
                <i class="ph-bold ph-check text-primary-light text-base mt-0.5 shrink-0"></i>
                <span class="text-xs text-white/90 leading-snug">Focus on buyer answers &amp; clear commercial pathways.</span>
              </div>
              <div class="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl p-3.5">
                <i class="ph-bold ph-check text-primary-light text-base mt-0.5 shrink-0"></i>
                <span class="text-xs text-white/90 leading-snug">Full account ownership and client-retained control.</span>
              </div>
              <div class="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl p-3.5">
                <i class="ph-bold ph-check text-primary-light text-base mt-0.5 shrink-0"></i>
                <span class="text-xs text-white/90 leading-snug">Islamabad HQ serving Birmingham remotely.</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div>
              <a
                href="#request-seo-teardown"
                id="hero-seo-cta-button"
                class="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white text-sm font-black tracking-wide uppercase transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <span>Request your SEO Teardown</span>
                <i class="ph-bold ph-arrow-right"></i>
              </a>
              <p class="text-xs text-white/60 mt-3 leading-relaxed">
                Send your website, priority service and the kind of enquiries you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. THE COMMERCIAL SEARCH JOURNEY ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="search-journey">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Buyer Journey</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Help buyers find answers, then enquire
            </h2>
            <p class="text-sm text-text-secondary leading-relaxed">
              Buyers may know their problem without knowing which service they need. They might compare solutions and check your delivery area before requesting a quote. Your website should help them through those steps.
            </p>
          </div>

          {/* Three Connected Cards */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="p-7 rounded-2xl bg-white border border-surface-2 shadow-sm flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary block w-fit mb-3">
                  Stage 1: Discovery
                </span>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Discovery: answer the questions buyers ask when they first notice a problem. Point them towards a service that could help them.
                </p>
              </div>
            </div>

            <div class="p-7 rounded-2xl bg-white border border-surface-2 shadow-sm flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary block w-fit mb-3">
                  Stage 2: Evaluation
                </span>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Evaluation: explain what you do, its limits and how the work happens. Give buyers credible evidence before they choose which suppliers to contact.
                </p>
              </div>
            </div>

            <div class="p-7 rounded-2xl bg-white border border-surface-2 shadow-sm flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary block w-fit mb-3">
                  Stage 3: Enquiry
                </span>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Enquiry: explain the next step and what information you need. Ask enough to assess the request without making the form hard to finish.
                </p>
              </div>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-surface-2 text-xs text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
            We plan links between these stages so readers can find the right service. A useful article should not leave them hunting for your contact page.
          </div>
        </div>
      </section>

      {/* ── 03. BIRMINGHAM RELEVANCE WITHOUT DOORWAY PAGES ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="birmingham-relevance">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Contextual Relevance</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-3">
              Answer the questions your Birmingham buyers ask
            </h2>
            <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider">
              These are scenarios, not Bell Bee client examples.
            </p>
          </div>

          {/* Three Scenario Cards */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase text-primary tracking-wider block mb-2">Scenario A</span>
                <h3 class="text-sm font-bold text-surface-dark0 mb-2">Jewellery Quarter Workshop</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  A Jewellery Quarter workshop might want trade manufacturing enquiries, not consumer repairs. Trade buyers need details about capabilities, order requirements and submitting a specification. The page should make those details easy to find.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase text-primary tracking-wider block mb-2">Scenario B</span>
                <h3 class="text-sm font-bold text-surface-dark0 mb-2">B2B Manufacturing Procurement</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  A Birmingham business-to-business manufacturer may need to answer more technical questions. Procurement teams, who buy for their business, may check materials and production capacity. They may also need tolerances: the allowed variation in a part's measurements.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <span class="text-[11px] font-bold uppercase text-primary tracking-wider block mb-2">Scenario C</span>
                <h3 class="text-sm font-bold text-surface-dark0 mb-2">Regional Commercial Services</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  A service business needs to explain where it works and what customers can book. Repeating one page under different city names gives buyers little useful detail.
                </p>
              </div>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2 text-xs text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
            We start with what you sell and where you can deliver. Then we decide which pages would genuinely help your buyers.
          </div>
        </div>
      </section>

      {/* ── 04. TECHNICAL FOUNDATIONS ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="technical-foundations">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-white rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Crawl &amp; Index Basics
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-5">
              Fix problems that keep important pages out of search
            </h2>

            <div class="space-y-4 text-text-secondary text-sm leading-relaxed mb-8">
              <p>
                Buyers cannot find a page through search if search engines cannot list it. We check those basics before recommending more content.
              </p>
              <p>
                We check crawl access: whether search engines can reach your pages. We review indexing signals that help them decide which pages to list. Canonical tags tell search engines which version of a page to use.
              </p>
              <p>
                We also check redirects, links between pages and your sitemap's page list. Loading problems and difficult mobile layouts need attention too.
              </p>
              <p>
                You get a task list ordered by priority, with each affected page address. It explains why each issue matters, the fix and how we will check it. Your developer can see what needs doing and why.
              </p>
              <p class="font-medium text-surface-dark0">
                Some audit warnings can wait while more important buying journeys need attention. We agree which changes your team or ours will make.
              </p>
            </div>

            {/* Checklist Overview */}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-surface-2">
              <div class="flex items-center gap-2.5 text-xs text-text-secondary">
                <i class="ph-bold ph-check text-primary"></i>
                <span>Crawl access &amp; robot instructions verification</span>
              </div>
              <div class="flex items-center gap-2.5 text-xs text-text-secondary">
                <i class="ph-bold ph-check text-primary"></i>
                <span>Canonical tags &amp; duplicate URL resolution</span>
              </div>
              <div class="flex items-center gap-2.5 text-xs text-text-secondary">
                <i class="ph-bold ph-check text-primary"></i>
                <span>Sitemap accuracy &amp; internal link structure</span>
              </div>
              <div class="flex items-center gap-2.5 text-xs text-text-secondary">
                <i class="ph-bold ph-check text-primary"></i>
                <span>Mobile layout accessibility &amp; loading speeds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. SERVICE-PAGE ARCHITECTURE ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="service-page-architecture">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Content Structure</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Give each service a clear job
            </h2>
            <p class="text-sm text-text-secondary leading-relaxed">
              One vague page can leave buyers guessing whether you can help. Search engines may struggle to identify the service too.
            </p>
          </div>

          {/* Three Accessible Cards: Problem, Page Response, Buyer Outcome */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 block w-fit mb-3">
                  Problem
                </span>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  One vague page can leave buyers guessing whether you can help. Search engines may struggle to identify the service too.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary block w-fit mb-3">
                  Page Response
                </span>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  We plan separate pages where your priority services genuinely differ. Each page explains the problem, what the work includes and its limits. Relevant evidence and a clear next step help buyers decide whether to enquire.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 block w-fit mb-3">
                  Buyer Outcome
                </span>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Supporting guides can help buyers compare suppliers or prepare for the work. We link each guide to the relevant service, not just the homepage.
                </p>
              </div>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2 text-xs text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
            You may need better existing pages rather than more pages. We can recommend improving or combining them when that makes more sense. We only propose a new page when it has a distinct purpose.
          </div>
        </div>
      </section>

      {/* ── 06. GOOGLE BUSINESS PROFILE ELIGIBILITY ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="gbp-eligibility">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-white rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Eligibility &amp; Integrity
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-5">
              Check whether you qualify for a Google Business Profile
            </h2>

            <div class="space-y-4 text-text-secondary text-sm leading-relaxed mb-6">
              <p>
                A Google Business Profile can show business details in Google Search and Maps. Your business must meet Google's current eligibility rules to have one. We check how you operate before recommending a profile or its settings.
              </p>
              <p>
                A genuine location that customers visit must meet the applicable requirements. An eligible service-area business should list where it actually travels to customers. It must hide its address when required by Google's rules.
              </p>
              <p>
                Providing services online does not, by itself, make a business eligible. Selecting a service area does not guarantee visibility throughout that area.
              </p>
              <p class="font-medium text-surface-dark0">
                We will not recommend a fake office, virtual address or extra profile to imply local premises. Bell Bee Media serves Birmingham remotely from Islamabad, without Birmingham premises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07. MONTHLY DELIVERABLES ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="monthly-deliverables">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Proposed Scope</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Review the proposed monthly work
            </h2>
          </div>

          {/* Qualification Callout */}
          <div class="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs sm:text-sm leading-relaxed mb-8">
            <strong class="font-bold">Proposed Scope Qualification:</strong> The following is a proposed monthly scope. It needs written approval after discovery:
          </div>

          {/* 6 Monthly Deliverables */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">01. Technical Task List</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                One technical task list, ordered by priority, with progress and checking notes.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">02. Priority Service Pages</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Two new or substantially improved service pages, chosen for commercial importance and available evidence.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">03. Buyer Guide</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                One supporting buyer guide answering a genuine comparison or preparation question.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">04. Link Architecture Review</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                One review of links between the month's priority pages.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">05. Performance &amp; Enquiry Review</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                One performance report and review meeting covering search activity and enquiry quality.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">06. Profile Accuracy Review</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Where eligible and agreed, one Google Business Profile accuracy review and two useful updates.
              </p>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2 text-xs text-text-secondary space-y-2">
            <p>
              These quantities guide planning, not a fixed package or a promise of results. Development complexity, approvals and existing content may change the mix.
            </p>
            <p>
              Your written scope sets responsibilities, exclusions and how completed work will be accepted. We agree those details before work starts.
            </p>
          </div>
        </div>
      </section>

      {/* ── 08. BEFORE AND TARGET STATE ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="target-state">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">State Comparison</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              See what the work aims to change
            </h2>
            <p class="text-xs font-semibold text-text-secondary uppercase tracking-wider">
              This compares a starting situation with an intended target state. It is not a case study or a performance guarantee.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="p-7 rounded-2xl bg-white border border-surface-2">
              <h3 class="text-base font-bold text-surface-dark0 mb-4 pb-3 border-b border-surface-2 flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-amber-400"></span>
                Starting situation
              </h3>
              <div class="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                <p>
                  Your main services are buried in a generic page. Enquiries arrive without enough detail for your team to assess them.
                </p>
                <p>
                  Traffic reports do not show which visits led to suitable opportunities.
                </p>
                <p>
                  Website changes happen without an agreed list of priorities.
                </p>
              </div>
            </div>

            <div class="p-7 rounded-2xl bg-white border border-primary/40 shadow-sm">
              <h3 class="text-base font-bold text-surface-dark0 mb-4 pb-3 border-b border-surface-2 flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-primary"></span>
                Intended target state
              </h3>
              <div class="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                <p>
                  Each priority service has a page that helps buyers assess it. Forms collect enough detail for your team to judge fit.
                </p>
                <p>
                  You can review search activity alongside enquiry data.
                </p>
                <p>
                  Technical and content tasks have named owners and clear completion criteria.
                </p>
              </div>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-surface-2 text-xs text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
            Ask which of these problems the proposed SEO work will address. Rankings matter, but buyers also need to understand your offer and next step.
          </div>
        </div>
      </section>

      {/* ── 09. MEASUREMENT ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="measurement">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-surface-1 rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Enquiry Quality
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-6">
              Measure suitable enquiries, not just website visits
            </h2>

            <div class="space-y-4 text-text-secondary text-sm leading-relaxed mb-6">
              <p>
                More form submissions do not always mean more useful opportunities. We first agree what makes an enquiry worth your team's time. That may include service, location, project type, budget or authority to buy.
              </p>
              <p>
                Reporting can connect pages reached through search with enquiry actions. Where your systems support it, sales feedback can show what happened next. Spam, duplicates and unsuitable requests need to be counted separately.
              </p>
              <p>
                We still review rankings, impressions and clicks to understand search performance. Impressions count how often your pages appear in search results. These measures alone cannot show whether you are attracting suitable business.
              </p>
              <p>
                Tracking has gaps when people switch devices, decline cookies or phone you. We explain those limits rather than treating reports as a complete revenue record.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. WHO THIS SUITS ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="who-this-suits">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Compatibility Check</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Check whether this approach fits your business
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-7 rounded-2xl bg-white border border-surface-2">
              <div class="flex items-center gap-2 mb-4 text-emerald-700 font-bold text-sm">
                <i class="ph-bold ph-check-circle text-lg"></i>
                <span>When This Approach Fits Your Business</span>
              </div>
              <div class="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                <p>
                  You need a real service offer and a defined delivery area. Someone must check technical facts and approve the content we propose. We organise the SEO work, but accurate pages need your business knowledge.
                </p>
                <p>
                  This approach suits buyers who check specifications or compare options before contacting suppliers. Repeating a keyword will not answer their questions about suitability.
                </p>
                <p>
                  We plan around how your customers choose and explain the priorities. We put the proposed scope in writing so you can assess it before approval.
                </p>
              </div>
            </div>

            <div class="p-7 rounded-2xl bg-white border border-surface-2">
              <div class="flex items-center gap-2 mb-4 text-red-600 font-bold text-sm">
                <i class="ph-bold ph-x-circle text-lg"></i>
                <span>When We Are Not The Right Agency</span>
              </div>
              <div class="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                <p>
                  We are not the right agency for guaranteed rankings or invented local premises. We will not produce bulk copies of pages with different city names.
                </p>
                <p>
                  The work needs honest information and practical input from both teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. PROCESS AND TEARDOWN ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="process">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-surface-1 rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm text-center">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Structured Diagnostic
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-6">
              Start with a focused SEO Teardown
            </h2>

            <div class="mb-8">
              <a
                href="#request-seo-teardown"
                class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-md"
              >
                <span>Request your SEO Teardown</span>
                <i class="ph-bold ph-arrow-right"></i>
              </a>
            </div>

            <div class="space-y-4 text-text-secondary text-xs sm:text-sm text-left leading-relaxed max-w-2xl mx-auto">
              <p class="font-medium text-surface-dark0">
                An SEO Teardown reviews what may stop buyers finding and understanding your services.
              </p>
              <p>
                First, send your website, priority service and target customer details. Tell us where you can deliver and which enquiries are useful.
              </p>
              <p>
                We review what we can see of the search journey. We separate visible issues from questions needing account access or more data. If an explanation still needs testing, we say so.
              </p>
              <p>
                Next, we discuss priorities, access and who would make the changes. We put the proposed scope in writing before you commit.
              </p>
              <p>
                Once approved, work follows an agreed task list with review points. We confirm scheduling during the conversation, not through an unsupported turnaround promise. We do not promise a particular date for results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. STAGING PROOF FIXTURES (STAGING DEMONSTRATION) ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="demonstration-fixtures">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Demonstration Samples</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-2">
              Illustrative examples of clearer decisions
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded block w-fit mb-3">
                Illustrative sample: fictional; replace before publication.
              </span>
              <p class="text-xs text-text-secondary italic mb-3">
                “The useful change was knowing which capability page a procurement enquiry needed, and what information our team should ask for next.”
              </p>
              <span class="text-xs font-bold text-surface-dark0">Amelia R. · Operations Manager · Manufacturing · Birmingham</span>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded block w-fit mb-3">
                Illustrative sample: fictional; replace before publication.
              </span>
              <p class="text-xs text-text-secondary italic mb-3">
                “The proposed journey separated trade production questions from consumer repairs, so the contact step made sense for each visitor.”
              </p>
              <span class="text-xs font-bold text-surface-dark0">Daniel K. · Workshop Owner · Jewellery · Birmingham</span>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-surface-2 text-xs text-text-secondary">
            <span class="font-bold text-amber-800 block mb-1">Illustrative sample: fictional; replace before publication.</span>
            Demonstration artifact: a sample service-page brief links a buyer question, a capability explanation and a specification-upload step. This describes a fictional design exercise, not an engagement, customer outcome or measured result.
          </div>
        </div>
      </section>

      {/* ── 13. COST AND COMPLEMENTARY SERVICES ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="cost-and-complementary">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-surface-1 rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Commercial Scope
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-6">
              Understand the cost before agreeing
            </h2>

            <div class="space-y-4 text-text-secondary text-sm leading-relaxed mb-8">
              <p>
                We quote in GBP once we understand the scope. The price should reflect your website and the work you agree to. A starting figure without that context would not explain your costs.
              </p>
              <p>
                Your written quote should cover initial work, recurring tasks and who makes the changes. It should explain third-party costs, taxes, payment terms and cancellation conditions. Ask which fixes are essential and which work could wait.
              </p>
              <p>
                You do not have to buy other services with your SEO work. For paid social advertising, you can explore <a href={routes.locationUkBirminghamMetaAds.href()} class="text-primary font-bold hover:underline">Meta Ads</a> separately. If manual follow-up takes too much time, ask about <a href={routes.locationUkBirminghamAiAutomation.href()} class="text-primary font-bold hover:underline">AI automation</a>. That means using software with AI to handle agreed tasks.
              </p>
              <p class="font-medium text-surface-dark0">
                Neither service is a compulsory addition to your SEO scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. FAQS ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="faq">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Direct Answers</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Questions before you commit
            </h2>
          </div>

          <div class="space-y-4">

            {/* Q1 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">What do SEO Services in Birmingham UK include?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  The agreed scope may cover technical checks, service-page planning, content and links between pages. Technical checks include whether search engines can list your important pages. Eligible Google Business Profile work and enquiry measurement may also be included.
                </p>
                <p>
                  The monthly quantities above are proposals that need approval. Your quote confirms what is included and who will do it.
                </p>
              </div>
            </details>

            {/* Q2 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">How long before we see results?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  No results deadline applies to every website, and rankings are not guaranteed. Your site's condition, competition, implementation speed and buyer behaviour affect progress.
                </p>
                <p>
                  We agree delivery milestones and check that changes are live. We review search and enquiry data as it becomes available. Completing a task does not mean it has produced a business result.
                </p>
              </div>
            </details>

            {/* Q3 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">What if we already worked with another agency?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  We review the handover rather than assuming you need to start again. Share existing reports, content plans, account access and known changes.
                </p>
                <p>
                  Useful work should stay, and we explain remaining risks and proposed changes. We do this before decisions about moving the site, deleting pages or redirecting visitors.
                </p>
              </div>
            </details>

            {/* Q4 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Who owns the accounts, content and data?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  Your business should keep owner-level control of its domain, hosting and analytics. That includes Search Console, Google's search reporting tool, and any eligible Business Profile.
                </p>
                <p>
                  Give each person their own access with only the permissions they need. Do not share passwords instead of setting up individual access.
                </p>
                <p>
                  Before signing, check ownership of commissioned assets and licences for third-party materials. The agreement must explain handover arrangements and any ownership exceptions.
                </p>
              </div>
            </details>

            {/* Q5 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Will you build links or promise AI citations?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  Where agreed, work beyond your website may include directories, business references and useful resources. It may also include asking relevant publishers to consider linking to your content.
                </p>
                <p>
                  Publishers decide whether to link, and we do not promise paid links or guaranteed placements. We cannot promise AI citations: mentions or references in AI-generated answers. Proposed methods and any third-party costs must be disclosed and approved.
                </p>
              </div>
            </details>

            {/* Q6 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Can you create a Birmingham office profile for us?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  Only a genuinely eligible operating business should have a Google Business Profile. It must reflect how that business actually operates.
                </p>
                <p>
                  A service-area setting does not justify inventing an office or local premises. We will not invent premises or describe Bell Bee as having a Birmingham branch.
                </p>
              </div>
            </details>

            {/* Q7 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Do we need to change our whole website?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  Not necessarily; we first review existing pages and technical obstacles. A rebuild needs its own business case, migration plan and approval. A migration plan sets out how to move the site without losing important pages.
                </p>
                <p>
                  If your developer makes changes, the scope should name responsibilities and checks.
                </p>
              </div>
            </details>

            {/* Q8 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Are we locked into a contract?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  Check the written proposal rather than assuming there is no lock-in. It must state the initial term, notice period, payment obligations and exit process. Those details belong in the agreement, not a reassuring sales line.
                </p>
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* ── 15. ENQUIRY FORM ── */}
      <section class="py-16 sm:py-24 bg-white border-b border-surface-2" id="request-seo-teardown">
        <div class="container mx-auto px-4 max-w-3xl">
          <div class="bg-surface-1 rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            
            <div class="mb-8">
              <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Direct Submission
              </p>
              <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-3">
                Tell us which buyers you want to reach
              </h2>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Share your website and the service you want suitable buyers to find. Tell us where you deliver and what makes an enquiry useful.
              </p>
            </div>

            {/* Result alert */}
            {result && (
              <div
                class={`p-5 rounded-2xl mb-8 border ${
                  submitted
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900'
                    : 'bg-red-500/10 border-red-500/30 text-red-900'
                }`}
              >
                <div class="flex items-center gap-2.5 font-bold text-sm">
                  <i class={`ph-bold ${submitted ? 'ph-check-circle text-emerald-600' : 'ph-x-circle text-red-600'} text-lg`}></i>
                  <span>{submitted ? 'Teardown Request Received' : 'Submission Note'}</span>
                </div>
                <p class="text-xs mt-1.5 leading-relaxed">{result.message}</p>
              </div>
            )}

            {/* Form */}
            <form method="POST" action="#request-seo-teardown" class="space-y-5">
              
              {/* Hidden context fields */}
              <input type="hidden" name="sourcePage" value="bellbee-uk-birmingham-seo" />
              <input type="hidden" name="service" value="seo" />
              <input type="hidden" name="city" value="birmingham" />
              <input type="hidden" name="country" value="uk" />
              <input type="hidden" name="offer" value="seo-teardown" />

              {/* Name & Email Row */}
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="fullName" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                    Name <span class="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Your name"
                    class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                  />
                </div>

                <div>
                  <label for="email" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                    Work Email <span class="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.co.uk"
                    class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                  />
                </div>
              </div>

              {/* Website & Priority Service */}
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="website" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                    Website <span class="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    required
                    placeholder="https://yourwebsite.co.uk"
                    class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                  />
                </div>

                <div>
                  <label for="priorityService" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                    Priority Service <span class="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="priorityService"
                    name="priorityService"
                    required
                    placeholder="e.g. Precision Engineering, Commercial Roofing"
                    class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                  />
                </div>
              </div>

              {/* Delivery Area & Company (optional) */}
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="deliveryArea" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                    Delivery Area <span class="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="deliveryArea"
                    name="deliveryArea"
                    required
                    placeholder="e.g. Birmingham & West Midlands, UK-wide"
                    class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                  />
                </div>

                <div>
                  <label for="company" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                    Company <span class="text-text-secondary font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company name"
                    class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                  />
                </div>
              </div>

              {/* WhatsApp / contact number (optional) */}
              <div>
                <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                  WhatsApp or Contact Number <span class="text-text-secondary font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+44 7123 456789 or international prefix"
                  class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                />
              </div>

              {/* What would a suitable sales enquiry look like? (Optional) */}
              <div>
                <label for="enquiryFit" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                  What would a suitable sales enquiry look like? <span class="text-text-secondary font-normal">(Optional)</span>
                </label>
                <textarea
                  id="enquiryFit"
                  name="enquiryFit"
                  rows={3}
                  placeholder="Describe your ideal customer, order size, or trade specification."
                  class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0 leading-relaxed"
                ></textarea>
              </div>

              {/* Privacy statement & Optional Marketing checkbox */}
              <div class="space-y-3 pt-2 text-xs text-text-secondary leading-relaxed">
                <p>
                  We use your details to respond to this request. Our <a href={routes.privacy.href()} class="text-primary font-bold hover:underline">privacy notice</a> explains how we handle your information. Marketing updates are optional and separate from your enquiry.
                </p>
                <label class="flex items-start gap-2.5 cursor-pointer text-xs text-surface-dark0">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    value="yes"
                    class="mt-0.5 rounded border-surface-2 text-primary focus:ring-primary"
                  />
                  <span>I would like to receive occasional email marketing updates from Bell Bee Media.</span>
                </label>
              </div>

              {/* Submit CTA */}
              <div class="pt-2">
                <button
                  type="submit"
                  id="submit-seo-teardown-button"
                  class="w-full py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-sm font-black uppercase tracking-wider transition-colors shadow-lg"
                >
                  Request your SEO Teardown
                </button>
              </div>

              <div class="pt-4 text-xs text-text-secondary leading-relaxed border-t border-surface-2 text-center">
                Prefer email? Write to <a href="mailto:hello@bellbeemedia.com" class="text-primary font-bold hover:underline">hello@bellbeemedia.com</a>.<br />
                We will confirm scheduling and next steps in our reply.
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* ── 16. ACCOUNTABILITY AND FINAL CTA ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white" id="final-action">
        <div class="container mx-auto px-4 max-w-4xl text-center">
          <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
            Consultation Step
          </p>
          <h2 class="text-2xl sm:text-4xl font-black mb-6 leading-tight">
            Discuss priorities before you commit
          </h2>
          <div class="space-y-4 text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed mb-8">
            <p>
              Bell Bee Media is headquartered in Islamabad and serves Birmingham businesses remotely. Your proposal should name who handles strategy, implementation and review before delivery starts. It should also say when your team needs to approve work.
            </p>
            <p>
              Bring your service priorities, questions about past agency work and account access concerns. The first conversation should help you understand the proposal without pressure to choose a package.
            </p>
            <p>
              Start with what buyers need to know before contacting you. Then we can discuss which website changes are worth your budget.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#request-seo-teardown"
              class="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-lg"
            >
              Request your SEO Teardown
            </a>
            <a
              href="mailto:hello@bellbeemedia.com"
              class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wide transition-colors border border-white/20 flex items-center justify-center gap-2"
            >
              <i class="ph ph-envelope-simple"></i>
              <span>hello@bellbeemedia.com</span>
            </a>
          </div>
        </div>
      </section>

    </Layout>
  )
}

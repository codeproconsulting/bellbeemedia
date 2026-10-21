import { type Handle } from 'remix/ui'
import { Layout } from '../layout.tsx'
import { type ProposalSubmissionResult } from '../../data/wordpress.ts'
import { routes } from '../../routes.ts'

interface MetaAdsBirminghamPageProps {
  result?: ProposalSubmissionResult
  bookingUrl?: string
}

export function MetaAdsBirminghamPage(handle: Handle<MetaAdsBirminghamPageProps>) {
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
        '@id': 'https://bellbeemedia.com/locations/uk/birmingham/meta-ads#service',
        name: 'Meta Ads Services in Birmingham UK',
        serviceType: 'Meta advertising management',
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
          'Meta Ads Services in Birmingham UK connecting creative testing with qualified lead economics. Delivered remotely from our Islamabad headquarters.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bellbeemedia.com/locations/uk/birmingham/meta-ads#breadcrumb',
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
            name: 'Meta Ads Services in Birmingham UK',
            item: 'https://bellbeemedia.com/locations/uk/birmingham/meta-ads',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bellbeemedia.com/locations/uk/birmingham/meta-ads#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What do Meta Ads Services in Birmingham UK cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We do not have an approved fixed price to publish. Fees depend on agreed work, required ad material and account complexity. Media spend, meaning the money paid to run adverts, is separate. Ask for a written proposal before deciding whether to proceed. It should list deliverables, exclusions, payment responsibilities and extra production or software costs.',
            },
          },
          {
            '@type': 'Question',
            name: 'We tried Meta before and the leads were poor. Why try again?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Check what went wrong before paying for another campaign. We would review your offer, adverts, location settings and form questions. Your sales feedback helps explain where those enquiries fell short. Changing agencies will not fix a problem nobody has addressed. A teardown can help establish what would be different this time.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you guarantee sales or a target cost per lead?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Results depend on demand, competition, your offer and follow-up. They also depend on Meta auction, which decides which adverts get shown. We can agree the work, reporting and responsibility for reviews. We cannot guarantee lead volumes, sales, profitability or return on ad spend. Return on ad spend, or ROAS, compares attributed revenue with advertising spend.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can a remote team understand Birmingham customers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We need your input on your service area and customer language. Feedback from follow-up conversations helps us understand what matters to buyers. Bell Bee Media HQ is in Islamabad, not Birmingham. We agree meeting windows and approval responsibilities before starting work. We are not claiming a local presence.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do we need a large budget or existing video content?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not necessarily, but the budget must support a useful test. The ad material depends on the messages we want to test. We would agree any filming, editing, licensing or extra production first. With a smaller budget, testing fewer ideas may make more sense. Spreading spend across too many tests can leave little useful evidence.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who owns the account, and what happens if we leave?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Your business should keep ownership of its accounts and business assets. Your agreement should explain access removal, handover and creative usage rights. Check notice terms and file delivery before you sign anything. This page does not promise the same terms for every engagement.',
            },
          },
          {
            '@type': 'Question',
            name: 'How quickly will we know whether it is working?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Timing depends on enquiry numbers, buying cycles and reliable sales feedback. Early responses can help us choose what to test next. Qualified opportunities and sales may take longer to judge. A handful of leads is not enough to declare a winner. We are not promising a fixed response time or results deadline.',
            },
          },
        ],
      },
    ],
  }

  return () => (
    <Layout
      title="Meta Ads Services in Birmingham UK | Bell Bee Media"
      description="Cheap leads but poor enquiries? Bell Bee Media tests Meta ad messages against lead quality for Birmingham businesses. Delivered remotely from Islamabad."
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
            <span class="text-white font-medium">Meta Ads</span>
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
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Copy Column */}
            <div class="lg:col-span-7">
              <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
                Lead Quality &amp; Sales Feedback
              </p>

              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
                Meta Ads Services in Birmingham UK
              </h1>

              <div class="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Cheap leads can still waste your team's time. Are people outside your service area filling in your forms? Are they asking for work you do not offer?
                </p>
                <p>
                  Bell Bee Media tests ad messages against the quality of enquiries. We agree what makes a lead useful before judging the numbers. Our Meta Ads Services in Birmingham UK connect those tests with sales feedback.
                </p>
              </div>

              {/* 4 Compact Trust Points */}
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div class="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl p-3">
                  <i class="ph-bold ph-check text-primary-light text-base mt-0.5 shrink-0"></i>
                  <span class="text-xs text-white/90 leading-snug">Each ad test answers a clear question about your buyers.</span>
                </div>
                <div class="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl p-3">
                  <i class="ph-bold ph-check text-primary-light text-base mt-0.5 shrink-0"></i>
                  <span class="text-xs text-white/90 leading-snug">Your team helps define which enquiries are worth following up.</span>
                </div>
                <div class="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl p-3">
                  <i class="ph-bold ph-check text-primary-light text-base mt-0.5 shrink-0"></i>
                  <span class="text-xs text-white/90 leading-snug">Your business keeps ownership of its advertising accounts.</span>
                </div>
                <div class="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl p-3">
                  <i class="ph-bold ph-check text-primary-light text-base mt-0.5 shrink-0"></i>
                  <span class="text-xs text-white/90 leading-snug">Islamabad HQ, serving Birmingham remotely.</span>
                </div>
              </div>

              {/* Primary CTA */}
              <div>
                <a
                  href="#request-meta-ads-teardown"
                  id="hero-cta-button"
                  class="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white text-sm font-black tracking-wide uppercase transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                >
                  <span>Request your Meta Ads Teardown</span>
                  <i class="ph-bold ph-arrow-right"></i>
                </a>
                <p class="text-xs text-white/60 mt-3 leading-relaxed max-w-lg">
                  Send your website and the problem you want to investigate. We will agree the next step and response expectations before proceeding.
                </p>
              </div>
            </div>

            {/* Right Conceptual Flow Diagram */}
            <div class="lg:col-span-5">
              <div class="bg-surface-dark1 rounded-3xl border border-surface-dark2 p-6 sm:p-7 relative shadow-2xl">
                <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-primary-light flex items-center gap-1.5">
                    <i class="ph-bold ph-git-branch"></i> Hypothesis-to-Lead Cycle
                  </span>
                  <span class="text-[11px] text-white/50">Testing Framework</span>
                </div>

                <div class="space-y-4">
                  {/* Step 1 */}
                  <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div class="flex items-center gap-2.5 mb-1.5">
                      <span class="w-6 h-6 rounded-md bg-primary/20 text-primary-light flex items-center justify-center text-xs font-bold">1</span>
                      <h4 class="text-xs font-bold text-white">Ad Message Hypothesis</h4>
                    </div>
                    <p class="text-[11px] text-white/70">Clear test question defining offer, audience &amp; destination.</p>
                  </div>

                  {/* Flow Arrow */}
                  <div class="text-center text-primary-light/60 text-xs py-0.5">
                    <i class="ph-bold ph-arrow-down"></i>
                  </div>

                  {/* Step 2 */}
                  <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div class="flex items-center gap-2.5 mb-1.5">
                      <span class="w-6 h-6 rounded-md bg-secondary/20 text-secondary-light flex items-center justify-center text-xs font-bold">2</span>
                      <h4 class="text-xs font-bold text-white">Delivery &amp; Form Filter</h4>
                    </div>
                    <p class="text-[11px] text-white/70">Form qualification questions separate fit from bad clicks.</p>
                  </div>

                  {/* Flow Arrow */}
                  <div class="text-center text-primary-light/60 text-xs py-0.5">
                    <i class="ph-bold ph-arrow-down"></i>
                  </div>

                  {/* Step 3 */}
                  <div class="p-3.5 rounded-xl bg-primary/10 border border-primary/30">
                    <div class="flex items-center gap-2.5 mb-1.5">
                      <span class="w-6 h-6 rounded-md bg-primary text-white flex items-center justify-center text-xs font-bold">3</span>
                      <h4 class="text-xs font-bold text-white">Qualified Sales Feedback</h4>
                    </div>
                    <p class="text-[11px] text-white/80">Decisions driven by qualifying enquiries, not raw volume.</p>
                  </div>
                </div>

                <p class="text-[10px] text-white/40 text-center mt-5 pt-3 border-t border-white/10">
                  Conceptual workflow diagram. No fabricated metrics or guaranteed figures.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 02. THE TEARDOWN ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="the-teardown">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-white rounded-3xl border-2 border-primary/20 p-8 sm:p-12 shadow-sm relative overflow-hidden">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Diagnostic Teardown
            </p>

            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-5 leading-tight">
              Check what needs fixing before spending more
            </h2>

            <div class="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
              <p>
                More campaigns may not solve the problem with your enquiries. The Meta Ads Teardown starts with a conversation about your adverts. We also discuss your landing page and what happens after someone enquires.
              </p>
              <p>
                We propose checking whether your advert makes the offer clear. Does the enquiry process help identify buyers you can serve? Can your report separate form submissions from useful sales opportunities?
              </p>
              <p>
                Share your existing material, or explain your offer if you have not advertised. We can identify what needs investigating before recommending ongoing work. Teardown format, availability and any applicable terms will be confirmed first.
              </p>
            </div>

            {/* 3 Review Areas */}
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div class="p-4 rounded-2xl bg-surface-1 border border-surface-2">
                <span class="text-xs font-bold text-primary block mb-1">01. Advert Offer</span>
                <p class="text-xs text-text-secondary leading-relaxed">Checking whether your advert makes your service and coverage clear.</p>
              </div>
              <div class="p-4 rounded-2xl bg-surface-1 border border-surface-2">
                <span class="text-xs font-bold text-primary block mb-1">02. Enquiry Filter</span>
                <p class="text-xs text-text-secondary leading-relaxed">Checking if the enquiry process helps identify buyers you can serve.</p>
              </div>
              <div class="p-4 rounded-2xl bg-surface-1 border border-surface-2">
                <span class="text-xs font-bold text-primary block mb-1">03. Reporting Signal</span>
                <p class="text-xs text-text-secondary leading-relaxed">Checking whether reports separate form counts from real opportunities.</p>
              </div>
            </div>

            <a
              href="#request-meta-ads-teardown"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-md"
            >
              <span>Request your Meta Ads Teardown</span>
              <i class="ph-bold ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ── 03. THE REAL PROBLEM ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="the-real-problem">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-text-secondary">
              Diagnostic Context
            </span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Cheap enquiries can cost your team time
            </h2>
            <p class="text-sm text-text-secondary leading-relaxed">
              More enquiries only help if your team can turn suitable ones into worthwhile work.
            </p>
          </div>

          {/* Three Issue Cards */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-7 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-lg mb-4">
                  <i class="ph-bold ph-phone-x"></i>
                </div>
                <h3 class="text-base font-bold text-surface-dark0 mb-3">Unsuitable Prospects</h3>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  A low cost per enquiry looks good in a report. It helps less when your team keeps calling unsuitable people. They may have the wrong budget or need a different service.
                </p>
              </div>
            </div>

            <div class="p-7 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-lg mb-4">
                  <i class="ph-bold ph-clipboard-text"></i>
                </div>
                <h3 class="text-base font-bold text-surface-dark0 mb-3">Unclear Offers &amp; Forms</h3>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Meta, the company behind Facebook and Instagram, may still suit your business. The advert might leave your offer unclear or miss your service area. The form may need a question that helps spot poor fits.
                </p>
              </div>
            </div>

            <div class="p-7 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg mb-4">
                  <i class="ph-bold ph-clock-countdown"></i>
                </div>
                <h3 class="text-base font-bold text-surface-dark0 mb-3">Follow-Up &amp; Feedback</h3>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Slow follow-up can also mean a prospect has moved on. We check these problems separately before changing the whole campaign. Sales feedback helps us judge whether each message attracts suitable buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. BIRMINGHAM RELEVANCE ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="birmingham-relevance">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Geographic Coverage
              </p>
              <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-4 leading-tight">
                Show buyers where you can serve them
              </h2>
              <div class="space-y-4 text-text-secondary text-sm leading-relaxed">
                <p>
                  Selecting Birmingham in your campaign settings is only a starting point. Your adverts and forms also need to make your coverage clear.
                </p>
                <p>
                  A provider near the Jewellery Quarter may have narrow travel limits. Another might cover Edgbaston, Solihull and the wider West Midlands. These are planning examples, not claims of client experience or promised coverage.
                </p>
                <p>
                  Tell us where you can deliver and which customers you can take on. We consider the location details buyers need before they enquire.
                </p>
              </div>
            </div>

            <div class="p-7 rounded-3xl bg-white border border-surface-2 shadow-sm">
              <div class="flex items-center gap-3 mb-4 pb-4 border-b border-surface-2">
                <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                  <i class="ph-bold ph-shield-check"></i>
                </div>
                <div>
                  <h3 class="text-sm font-bold text-surface-dark0">Remote Operational Delivery</h3>
                  <span class="text-xs text-text-secondary">Direct communication from Islamabad HQ</span>
                </div>
              </div>

              <p class="text-xs text-text-secondary leading-relaxed mb-5">
                Bell Bee Media works remotely from its HQ in Islamabad. We agree working hours and approval windows before work starts. We also agree how communication with your UK business will work.
              </p>

              <div class="space-y-2.5 text-xs text-text-secondary">
                <div class="flex items-center gap-2">
                  <i class="ph-bold ph-check text-primary"></i>
                  <span>Agreed UK-aligned working and communication windows</span>
                </div>
                <div class="flex items-center gap-2">
                  <i class="ph-bold ph-check text-primary"></i>
                  <span>Location limits clarified in creative &amp; form copy</span>
                </div>
                <div class="flex items-center gap-2">
                  <i class="ph-bold ph-check text-primary"></i>
                  <span>No unverified local branch or office claims</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. TESTING MECHANISM ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="testing-mechanism">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Structured Method</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Give each ad test a clear question
            </h2>
            <p class="text-sm text-text-secondary leading-relaxed">
              Changing everything together makes it harder to tell what helped.
            </p>
          </div>

          <div class="space-y-4 text-text-secondary text-sm leading-relaxed max-w-3xl mx-auto mb-10">
            <p>
              A buyer may understand your service but still hesitate to enquire. They might need to know who it suits or what happens next. Each concern gives us a different message to test.
            </p>
            <p>
              We agree the offer, intended audience and destination for each test. We record what changes so the next decision has a clear basis. Changing everything together makes it harder to tell what helped.
            </p>
            <p>
              Sometimes we may deliberately test the whole journey instead. That choice should be clear from the start.
            </p>
            <p>
              Clicks alone do not tell us whether the test helped. We also review how the ads ran, enquiry quality and sales feedback. The change log explains which tests to keep, change or stop.
            </p>
            <p class="font-medium text-surface-dark0">
              If the evidence is too thin, we should say so.
            </p>
          </div>

          {/* 4-Step Flow */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">Step 1: Hypothesis</span>
              <p class="text-xs text-text-secondary leading-relaxed">Identify the specific buyer question or hesitation to test.</p>
            </div>
            <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">Step 2: Asset &amp; Setup</span>
              <p class="text-xs text-text-secondary leading-relaxed">Produce creative aligned with the question and log all parameters.</p>
            </div>
            <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">Step 3: Signal Review</span>
              <p class="text-xs text-text-secondary leading-relaxed">Evaluate enquiry quality alongside platform ad delivery data.</p>
            </div>
            <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">Step 4: Decision Log</span>
              <p class="text-xs text-text-secondary leading-relaxed">Record whether to keep, iterate, or stop with written reasoning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. LEAD ECONOMICS ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="lead-economics">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-white rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Economics &amp; Formulas
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-6">
              Measure the leads your team can use
            </h2>

            <div class="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
              <p>
                A qualified lead is an enquiry that meets your agreed requirements. These might include service area, suitable work, budget and genuine need. Your sales process should set that definition, not the easiest reporting number.
              </p>
              
              {/* Formula Display as Clean Text */}
              <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2 my-6">
                <span class="text-xs font-bold uppercase tracking-wider text-surface-dark0 block mb-1">Plain-Language Calculation:</span>
                <p class="text-sm font-semibold text-primary">
                  Cost per qualified lead = Ad spend ÷ Qualifying enquiries
                </p>
                <p class="text-xs text-text-secondary mt-2">
                  Keep management and production fees separate but visible when judging total costs. Revenue reports also need consistent rules for cancellations, later sales and repeat customers.
                </p>
              </div>

              <p>
                Your margins, capacity and close rate help guide spending decisions. Close rate means the share of leads that become customers. A spending threshold is a planning guide, not a forecast.
              </p>
              <p>
                If sales records are missing or unreliable, we need better feedback first. Incomplete records cannot support a sound claim about profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07. MONTHLY ARTIFACTS ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="monthly-artifacts">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Deliverables Scope</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Discuss a monthly scope before committing
            </h2>
          </div>

          {/* Prominent Approval Qualifier */}
          <div class="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs sm:text-sm leading-relaxed mb-8">
            <strong class="font-bold">Approval Qualifier:</strong> This proposed scope is subject to discovery and written approval. The quantities below are planning suggestions, not an existing Bell Bee Media package. They are not included in every engagement.
          </div>

          {/* Six Proposed Artifacts */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">01. Testing Plan</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                One ad testing plan with three message hypotheses, meaning ideas to test. Each explains the decision it should help you make.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">02. Finished Assets</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Six finished ad assets in agreed formats, such as images or videos. Source-material requirements and revision limits would be agreed in writing.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">03. Campaign Change Log</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                One campaign change log covering launches, budget decisions and material changes.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">04. Lead-Quality Scorecard</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                One lead-quality scorecard using agreed categories and available sales feedback.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">05. Performance Report</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                One performance report separating ad spend and platform data from enquiry and sales observations.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">06. Review Meeting &amp; List</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                One review meeting, followed by one prioritised action list for the next cycle.
              </p>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2 text-xs text-text-secondary space-y-2">
            <p>
              Production shoots, extra versions and landing-page development would be agreed separately. So would CRM work, meaning work on your customer records system, and additional meetings.
            </p>
            <p>
              Final quantities depend on budget, available material and the testing needed for useful evidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── 08. TARGET STATE ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="target-state">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Workflow Comparison</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              See the reason behind each campaign change
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Common starting conditions */}
            <div class="p-7 rounded-2xl bg-white border border-surface-2">
              <h3 class="text-base font-bold text-surface-dark0 mb-4 pb-3 border-b border-surface-2 flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-amber-400"></span>
                Common starting conditions
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Adverts launch without a written reason for the test. Reports count all form submissions alike, while sales feedback stays in private messages. It is then hard to judge whether raising the budget would help.
              </p>
            </div>

            {/* Intended working state */}
            <div class="p-7 rounded-2xl bg-white border border-primary/40 shadow-sm">
              <h3 class="text-base font-bold text-surface-dark0 mb-4 pb-3 border-b border-surface-2 flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-primary"></span>
                Intended working state
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Each test has a written purpose and agreed lead categories. Decisions use both advertising data and feedback from your sales team. Lessons from each advert go into the next brief, even after it stops running.
              </p>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-surface-2 text-xs text-text-secondary space-y-2">
            <p class="font-medium text-surface-dark0">
              This describes how we want the work to run. It is not a client case study, timed transformation or guaranteed result.
            </p>
            <p>
              Progress depends on access, data quality, approvals and audience response. It also depends on your team's ability to handle enquiries. The aim is to show you the evidence behind each decision.
            </p>
          </div>
        </div>
      </section>

      {/* ── 09. FIT AND DIFFERENTIATION ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="fit">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Suitability Assessment</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Is this approach right for your team?
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-7 rounded-2xl bg-surface-1 border border-surface-2">
              <div class="flex items-center gap-2 mb-4 text-emerald-700 font-bold text-sm">
                <i class="ph-bold ph-check-circle text-lg"></i>
                <span>When Bell Bee Media May Suit You</span>
              </div>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                You may want better leads rather than another report full of clicks. Bell Bee Media may suit you if you can share sales feedback. Your team needs to explain which customers are suitable and why.
              </p>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                That feedback helps shape the next advert and its message. An advert can get attention while attracting people you cannot help.
              </p>
            </div>

            <div class="p-7 rounded-2xl bg-surface-1 border border-surface-2">
              <div class="flex items-center gap-2 mb-4 text-red-600 font-bold text-sm">
                <i class="ph-bold ph-x-circle text-lg"></i>
                <span>When This Approach Is Not The Right Fit</span>
              </div>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                If you need guaranteed sales, this is not the right fit. Someone on your team must be available to handle enquiries. We also need to discuss disappointing results openly.
              </p>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                We may recommend fixing your offer, landing page or sales process first. That must be an option before you commit more ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. OWNERSHIP AND COSTS ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="ownership-and-costs">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-white rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Commercial Clarity
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-6">
              Keep your accounts and costs clear
            </h2>

            <div class="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Your business should own its Meta accounts, pages and other business assets. That includes your domain and the tools used to measure activity. Grant suitable partner access rather than sharing your personal passwords.
              </p>
              <p>
                Before work starts, document who needs access and who is responsible. Your ad budget is separate from Bell Bee Media's service fees. Agreed production and third-party costs are separate too.
              </p>
              <p>
                The written scope should show each cost and who pays it. It should also state which costs need your approval. No prices are published because a Birmingham service package has not been approved.
              </p>
              <p>
                Agree contract length, notice terms and handover arrangements in writing. Your agreement should also cover rights to use the creative files. Unlimited revisions, unrestricted licensing and no-lock-in terms apply only if agreed.
              </p>
            </div>

            {/* Checklist items */}
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-surface-2">
              <div class="p-3.5 rounded-xl bg-surface-1 text-xs text-text-secondary">
                <strong class="text-surface-dark0 block mb-1">Direct Ownership</strong>
                Client retains full ownership of Meta assets, pixels and ad accounts.
              </div>
              <div class="p-3.5 rounded-xl bg-surface-1 text-xs text-text-secondary">
                <strong class="text-surface-dark0 block mb-1">Separate Media Spend</strong>
                Ad spend is billed directly by Meta, separate from service fees.
              </div>
              <div class="p-3.5 rounded-xl bg-surface-1 text-xs text-text-secondary">
                <strong class="text-surface-dark0 block mb-1">Written Terms</strong>
                Notice periods, handovers and creative usage rights agreed in writing.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. ONBOARDING AND LEARNING ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="onboarding">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Process Stages</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              What happens before and after launch?
            </h2>
            <p class="text-sm text-text-secondary leading-relaxed">
              We can agree review dates, but we cannot schedule sales results.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary block w-fit mb-3">
                Phase 1: Discovery &amp; Setup
              </span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                We first review your offer, service coverage and capacity to respond. We check account access, usable ad material and tracking permissions. Together, we agree what makes a lead suitable and what needs approval.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary block w-fit mb-3">
                Phase 2: Drafting &amp; Verification
              </span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Next, we write down the ideas to test and draft the adverts. We check the steps a buyer takes to send an enquiry. Launch waits until the necessary access, permissions and materials are ready.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary block w-fit mb-3">
                Phase 3: Review &amp; Iteration
              </span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                After launch, we review the evidence and lead quality before changing anything. Early work may reveal tracking gaps before a campaign worth expanding. Budget, ad delivery, buying cycles and approval speed all affect timing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. ATTRIBUTION AND PRIVACY ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="attribution-and-privacy">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-white rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Compliance &amp; Boundaries
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-6">
              Know what your tracking can tell you
            </h2>

            <div class="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
              <p>
                Attribution connects an advert someone saw or clicked with later actions. It cannot tell you exactly why that person bought. Meta's totals may differ from your customer records system, or CRM.
              </p>
              <p>
                People switch devices, make different consent choices or buy after reporting ends. Those gaps need explaining rather than hiding in a report.
              </p>
              <p>
                Your measurement plan must respect applicable UK privacy requirements and consent settings. Browser tracking and server connections both need appropriate review. Sending data through a server does not bypass consent requirements. It does not permit unrestricted sharing of customer information either.
              </p>
              <p>
                We compare agreed lead stages with reporting definitions and available business records. Reports should explain where the picture is incomplete or uncertain. Before tracking changes, we agree responsibility for technical work and legal review.
              </p>
            </div>

            <div class="pt-4 border-t border-surface-2 text-xs text-text-secondary">
              Review our verified <a href={routes.privacy.href()} class="text-primary hover:underline font-bold">Privacy Policy</a> for information on our contact and data handling practices.
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. DEMONSTRATION AND RELATED NEEDS ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="demonstration">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Teardown Example</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              What a teardown finding might look like
            </h2>
          </div>

          {/* Hypothetical Finding Callout */}
          <div class="p-6 sm:p-8 rounded-2xl bg-surface-1 border-l-4 border-primary border-t border-r border-b border-surface-2 mb-8">
            <span class="text-xs font-bold uppercase tracking-wider text-primary block mb-2">Hypothetical Demonstration Only:</span>
            <blockquote class="text-sm sm:text-base text-surface-dark0 italic leading-relaxed mb-3">
              "The advert covers several services, but the form does not ask which one the person needs. Test an advert about a specific service and add a question that helps check whether the enquiry is suitable."
            </blockquote>
            <p class="text-xs text-text-secondary">
              This example is not taken from a Bell Bee client account. It shows how a finding could explain a problem and a test. A useful report should also explain how your team will judge that test.
            </p>
          </div>

          {/* Related Needs Context */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <h3 class="text-sm font-bold text-surface-dark0 mb-2">
                <a href={routes.locationUkBirminghamSeo.href()} class="hover:text-primary transition-colors">Birmingham SEO</a>
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                The next step may involve work outside Meta advertising. <a href={routes.locationUkBirminghamSeo.href()} class="text-primary font-bold hover:underline">Birmingham SEO</a> helps people find your site through search engines. It may suit buyers who are already searching for a service.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <h3 class="text-sm font-bold text-surface-dark0 mb-2">
                <a href={routes.locationUkBirminghamAiAutomation.href()} class="hover:text-primary transition-colors">AI Automation &amp; CRM Routing</a>
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                <a href={routes.locationUkBirminghamAiAutomation.href()} class="text-primary font-bold hover:underline">AI automation</a> may help send enquiries to the right person or organise follow-up. That means using software with artificial intelligence, with appropriate safeguards. These services are separate unless explicitly included in your Meta Ads agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. DETAILED OBJECTIONS (FAQ) ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="faq">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Direct Answers</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Questions before you get started
            </h2>
          </div>

          {/* 7 Questions & Answers rendered verbatim in initial server HTML */}
          <div class="space-y-4">

            {/* Q1 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">What do Meta Ads Services in Birmingham UK cost?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  We do not have an approved fixed price to publish. Fees depend on agreed work, required ad material and account complexity. Media spend, meaning the money paid to run adverts, is separate.
                </p>
                <p>
                  Ask for a written proposal before deciding whether to proceed. It should list deliverables, exclusions, payment responsibilities and extra production or software costs.
                </p>
              </div>
            </details>

            {/* Q2 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">We tried Meta before and the leads were poor. Why try again?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  Check what went wrong before paying for another campaign. We would review your offer, adverts, location settings and form questions. Your sales feedback helps explain where those enquiries fell short.
                </p>
                <p>
                  Changing agencies will not fix a problem nobody has addressed. A teardown can help establish what would be different this time.
                </p>
              </div>
            </details>

            {/* Q3 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Can you guarantee sales or a target cost per lead?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  No. Results depend on demand, competition, your offer and follow-up. They also depend on Meta's auction, which decides which adverts get shown.
                </p>
                <p>
                  We can agree the work, reporting and responsibility for reviews. We cannot guarantee lead volumes, sales, profitability or return on ad spend. Return on ad spend, or ROAS, compares attributed revenue with advertising spend.
                </p>
              </div>
            </details>

            {/* Q4 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Can a remote team understand Birmingham customers?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  We need your input on your service area and customer language. Feedback from follow-up conversations helps us understand what matters to buyers.
                </p>
                <p>
                  Bell Bee Media's HQ is in Islamabad, not Birmingham. We agree meeting windows and approval responsibilities before starting work. We are not claiming a local presence.
                </p>
              </div>
            </details>

            {/* Q5 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Do we need a large budget or existing video content?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  Not necessarily, but the budget must support a useful test. The ad material depends on the messages we want to test. We would agree any filming, editing, licensing or extra production first.
                </p>
                <p>
                  With a smaller budget, testing fewer ideas may make more sense. Spreading spend across too many tests can leave little useful evidence.
                </p>
              </div>
            </details>

            {/* Q6 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Who owns the account, and what happens if we leave?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  Your business should keep ownership of its accounts and business assets. Your agreement should explain access removal, handover and creative usage rights. Check notice terms and file delivery before you sign anything.
                </p>
                <p>
                  This page does not promise the same terms for every engagement.
                </p>
              </div>
            </details>

            {/* Q7 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">How quickly will we know whether it is working?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  Timing depends on enquiry numbers, buying cycles and reliable sales feedback. Early responses can help us choose what to test next. Qualified opportunities and sales may take longer to judge.
                </p>
                <p>
                  A handful of leads is not enough to declare a winner. We are not promising a fixed response time or results deadline.
                </p>
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* ── 15. CONTACT FORM ── */}
      <section class="py-16 sm:py-24 bg-white border-b border-surface-2" id="request-meta-ads-teardown">
        <div class="container mx-auto px-4 max-w-3xl">
          <div class="bg-surface-1 rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            
            <div class="mb-8">
              <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Direct Submission
              </p>
              <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-4">
                Request your Meta Ads Teardown
              </h2>
              <div class="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                <p>
                  Tell us what you sell and where you serve customers. Explain what makes your advertising difficult to judge right now. Include your website and whether you already run Meta campaigns.
                </p>
                <p>
                  Please do not send passwords or customer records through this form. A short description of the problem is enough to start. You can add an optional WhatsApp number, including an international number.
                </p>
              </div>
            </div>

            {/* Submission Result Notice */}
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
            <form method="POST" action="#request-meta-ads-teardown" class="space-y-5">
              
              {/* Hidden context fields */}
              <input type="hidden" name="sourcePage" value="bellbee-uk-birmingham-meta-ads" />
              <input type="hidden" name="service" value="meta-ads" />
              <input type="hidden" name="city" value="Birmingham" />
              <input type="hidden" name="country" value="UK" />
              <input type="hidden" name="requestedOffer" value="Meta Ads Teardown" />

              {/* Name & Email Row */}
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="fullName" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                    Full Name <span class="text-primary">*</span>
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
                    placeholder="you@yourcompany.co.uk"
                    class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                  />
                </div>
              </div>

              {/* Website URL & Advertising Status */}
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label for="website" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                    Business Website or Page URL <span class="text-primary">*</span>
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
                  <label for="adStatus" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                    Current Meta Advertising Status
                  </label>
                  <select
                    id="adStatus"
                    name="adStatus"
                    class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                  >
                    <option value="Currently running Meta campaigns">Currently running Meta campaigns</option>
                    <option value="Have run Meta campaigns in the past">Have run Meta campaigns in the past</option>
                    <option value="Never advertised on Meta">Never advertised on Meta</option>
                  </select>
                </div>
              </div>

              {/* Geographic Coverage */}
              <div>
                <label for="catchment" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                  Service Catchment / Coverage Area
                </label>
                <input
                  type="text"
                  id="catchment"
                  name="catchment"
                  placeholder="e.g. Birmingham Central, Solihull, West Midlands, UK-wide"
                  class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                />
              </div>

              {/* Main Challenge / Investigation Goal */}
              <div>
                <label for="challenge" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                  What makes your advertising difficult to judge right now? <span class="text-primary">*</span>
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows={4}
                  placeholder="Tell us what you sell, what enquiries you are seeing, and what problem you want to investigate."
                  class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0 leading-relaxed"
                ></textarea>
              </div>

              {/* Optional International WhatsApp */}
              <div>
                <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                  Optional WhatsApp Number (Accepts International)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+44 7123 456789 or international prefix"
                  class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                />
              </div>

              {/* Submit CTA */}
              <div class="pt-2">
                <button
                  type="submit"
                  id="submit-teardown-button"
                  class="w-full py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-sm font-black uppercase tracking-wider transition-colors shadow-lg"
                >
                  Request your Meta Ads Teardown
                </button>
              </div>

              <div class="pt-4 text-xs text-text-secondary leading-relaxed border-t border-surface-2 text-center">
                Prefer email? Write to <a href="mailto:hello@bellbeemedia.com" class="text-primary font-bold hover:underline">hello@bellbeemedia.com</a>. We will confirm the next step and expected response times. Sending an enquiry does not commit you to a monthly service.
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* ── 16. FINAL TRUST AND ACTION ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white" id="final-action">
        <div class="container mx-auto px-4 max-w-4xl text-center">
          <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
            Next Step
          </p>
          <h2 class="text-2xl sm:text-4xl font-black mb-6 leading-tight">
            Check the leads before raising the budget
          </h2>
          <div class="space-y-4 text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed mb-8">
            <p>
              Your report may show cheap leads while your team finds them unsuitable. That gap needs investigating before you decide what to change. We can review the messages and what happens before the first conversation.
            </p>
            <p>
              Bell Bee Media serves Birmingham remotely from its Islamabad HQ. Tell us about your offer and which enquiries are worth pursuing. We will discuss the available evidence and agree scope before ongoing work.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#request-meta-ads-teardown"
              class="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-lg"
            >
              Request your Meta Ads Teardown
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

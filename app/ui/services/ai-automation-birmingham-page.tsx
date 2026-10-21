import { type Handle } from 'remix/ui'
import { Layout } from '../layout.tsx'
import { type ProposalSubmissionResult } from '../../data/wordpress.ts'
import { routes } from '../../routes.ts'

interface AiAutomationBirminghamPageProps {
  result?: ProposalSubmissionResult
  bookingUrl?: string
}

export function AiAutomationBirminghamPage(handle: Handle<AiAutomationBirminghamPageProps>) {
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
        '@id': 'https://bellbeemedia.com/locations/uk/birmingham/ai-automation#service',
        name: 'AI Automation Services in Birmingham UK',
        serviceType: 'AI workflow automation',
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
          'AI Automation Services in Birmingham UK delivering dependable enquiry-to-action workflows with human approval steps. Delivered remotely from our Islamabad headquarters.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bellbeemedia.com/locations/uk/birmingham/ai-automation#breadcrumb',
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
            name: 'AI Automation Services in Birmingham UK',
            item: 'https://bellbeemedia.com/locations/uk/birmingham/ai-automation',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bellbeemedia.com/locations/uk/birmingham/ai-automation#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Are AI Automation Services in Birmingham UK right for every business?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Start with a repeatable process that has a clear owner. Discovery should assess request volumes, unusual cases, data quality and risk. A better form, shared inbox or written checklist may be enough.',
            },
          },
          {
            '@type': 'Question',
            name: 'What would it cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We do not have an approved public price for this service. A proposal should separate discovery and build costs from optional maintenance and supplier charges. It should state software subscriptions, AI usage, messaging and connection platform fees. Do not assume these are included in the project price. Confirm currency, VAT treatment, usage limits and pricing for scope changes before agreeing work.',
            },
          },
          {
            '@type': 'Question',
            name: 'Who owns the workflow and accounts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "The agreement needs to set out ownership, licences and handover rights. Where platforms allow it, accounts should stay under your business's control. Access should be documented so you know who can use them. Check what you can export and what depends on a supplier's own software. Agree what happens to passwords, keys, data and support when the work ends.",
            },
          },
          {
            '@type': 'Question',
            name: 'Can you connect our existing systems?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Possibly, but we would need to check your setup first. That includes permissions, subscription levels, supplier restrictions and available APIs. APIs are interfaces that let software systems exchange information. Email, CRM, calendar and accounting connections each need their own assessment. A CRM is a system for managing customer records and contact. A product appearing in a demo does not prove it will connect to your setup.',
            },
          },
          {
            '@type': 'Question',
            name: 'How would rollout work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Start with one limited pilot, agreed checks and a named approver. Add access in stages and test what happens when things go wrong. Document how staff can work manually before expanding the workflow. We cannot promise a launch date before agreeing scope and responsibilities. Timing also depends on the systems and access the work needs.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the limitations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI can misread a message or produce text that is wrong. Automation can fail when services change or information is missing. Human review, limited access and monitoring reduce risks but cannot remove them. Unsuitable or high-risk steps should stay manual.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will this replace staff or need someone to manage it?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The proposal is to help your team, not promise staff reductions. Someone still needs to handle approvals, unusual requests and ongoing reviews. Before launch, agree who watches for failures and who can pause the workflow. Staff also need to learn how to carry on manually.',
            },
          },
        ],
      },
    ],
  }

  return () => (
    <Layout
      title="AI Automation Services in Birmingham UK | Bell Bee Media"
      description="Enquiries stuck between tools? Explore AI automation for Birmingham businesses. Discuss a scoped pilot with Bell Bee Media, with human approval steps."
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
            <span class="text-white font-medium">AI Automation</span>
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
            
            {/* Left Copy */}
            <div class="lg:col-span-7">
              <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
                Enquiries waiting. Nobody sure who acts next.
              </p>

              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
                AI Automation Services in Birmingham UK
              </h1>

              <div class="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Your team should not have to chase every enquiry across different tools. Missing details and unclear handovers make even simple requests harder to handle.
                </p>
                <p>
                  Bell Bee Media can propose a workflow that connects your existing tools. It could flag requests needing attention and give each a clear next step. Your team keeps control of bookings, customer information and commercial decisions.
                </p>
                <p class="font-medium text-white">
                  Start with the handover causing the most trouble. Agree what it should do before building anything bigger.
                </p>
              </div>

              {/* Four Trust Bullets */}
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div class="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl p-3">
                  <i class="ph-bold ph-check text-primary-light text-base mt-0.5 shrink-0"></i>
                  <span class="text-xs text-white/90 leading-snug">Use AI only where it earns its place.</span>
                </div>
                <div class="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl p-3">
                  <i class="ph-bold ph-check text-primary-light text-base mt-0.5 shrink-0"></i>
                  <span class="text-xs text-white/90 leading-snug">Keep important actions subject to human approval.</span>
                </div>
                <div class="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl p-3">
                  <i class="ph-bold ph-check text-primary-light text-base mt-0.5 shrink-0"></i>
                  <span class="text-xs text-white/90 leading-snug">Agree the scope and how to test it in writing.</span>
                </div>
                <div class="flex items-start gap-2.5 bg-white/[0.04] border border-white/10 rounded-xl p-3">
                  <i class="ph-bold ph-check text-primary-light text-base mt-0.5 shrink-0"></i>
                  <span class="text-xs text-white/90 leading-snug">Work remotely with us from our Islamabad headquarters.</span>
                </div>
              </div>

              {/* Primary CTA */}
              <div>
                <a
                  href="#request-automation-teardown"
                  id="hero-automation-cta-button"
                  class="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white text-sm font-black tracking-wide uppercase transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                >
                  <span>Request your Automation Teardown</span>
                  <i class="ph-bold ph-arrow-right"></i>
                </a>
                <p class="text-xs text-white/60 mt-3 leading-relaxed">
                  Tell us where enquiries get stuck, without sharing passwords or customer records.
                </p>
              </div>
            </div>

            {/* Right Flow Diagram (No chatbot animation, clean enquiry-to-review-to-action diagram) */}
            <div class="lg:col-span-5">
              <div class="bg-surface-dark1 rounded-3xl border border-surface-dark2 p-6 sm:p-7 relative shadow-2xl">
                <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-primary-light flex items-center gap-1.5">
                    <i class="ph-bold ph-flow-arrow"></i> Workflow Architecture
                  </span>
                  <span class="text-[11px] text-white/50">Human-In-The-Loop</span>
                </div>

                <div class="space-y-3.5">
                  <div class="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="w-5 h-5 rounded bg-primary/20 text-primary-light flex items-center justify-center text-xs font-bold">1</span>
                      <h4 class="text-xs font-bold text-white">Enquiry Intake</h4>
                    </div>
                    <p class="text-[11px] text-white/70">Request arrives via form, email or API payload.</p>
                  </div>

                  <div class="text-center text-primary-light/50 text-xs py-0.5">
                    <i class="ph-bold ph-arrow-down"></i>
                  </div>

                  <div class="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="w-5 h-5 rounded bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs font-bold">2</span>
                      <h4 class="text-xs font-bold text-white">Rule Validation &amp; Idempotency</h4>
                    </div>
                    <p class="text-[11px] text-white/70">Check duplicate status, service area, and required fields.</p>
                  </div>

                  <div class="text-center text-primary-light/50 text-xs py-0.5">
                    <i class="ph-bold ph-arrow-down"></i>
                  </div>

                  <div class="p-3 rounded-xl bg-primary/10 border border-primary/30">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="w-5 h-5 rounded bg-primary text-white flex items-center justify-center text-xs font-bold">3</span>
                      <h4 class="text-xs font-bold text-white">Human Approval Gate</h4>
                    </div>
                    <p class="text-[11px] text-white/80">Staff reviews AI summary/draft before committing to customer.</p>
                  </div>
                </div>

                <p class="text-[10px] text-white/40 text-center mt-5 pt-3 border-t border-white/10">
                  Dependable workflow logic. No autonomous commitments without human sign-off.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 02. THE AUTOMATION TEARDOWN ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="the-teardown">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-white rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Diagnostic Service
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-5 leading-tight">
              Find the handover that needs fixing
            </h2>

            <div class="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Who picks up an enquiry, and what happens next? Your Automation Teardown would trace that journey through your tools and team. We would look for repeated copying, clear decision rules and unanswered requests.
              </p>
              <p>
                We propose a short workflow map and a shortlist of possible improvements. We would recommend one small pilot, meaning a limited test of the proposed workflow. We would also flag work that makes more sense to keep manual.
              </p>
              <p class="font-medium text-surface-dark0">
                Before starting, we would agree the format, access needed and any fee. Requesting a Teardown does not give us access to your systems. It does not commit you to a build.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div class="p-4 rounded-2xl bg-surface-1 border border-surface-2">
                <span class="text-xs font-bold text-primary block mb-1">01. Trace Journey</span>
                <p class="text-xs text-text-secondary">Map where copying, delay, and dropped requests happen.</p>
              </div>
              <div class="p-4 rounded-2xl bg-surface-1 border border-surface-2">
                <span class="text-xs font-bold text-primary block mb-1">02. Small Pilot</span>
                <p class="text-xs text-text-secondary">Recommend a limited test for the single highest-friction step.</p>
              </div>
              <div class="p-4 rounded-2xl bg-surface-1 border border-surface-2">
                <span class="text-xs font-bold text-primary block mb-1">03. Manual Safeguard</span>
                <p class="text-xs text-text-secondary">Keep sensitive, high-risk, or irreversible steps manual.</p>
              </div>
            </div>

            <a
              href="#request-automation-teardown"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-md"
            >
              <span>Request your Automation Teardown</span>
              <i class="ph-bold ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ── 03. OPERATIONAL PROBLEM ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="operational-problem">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Tool Fragmentation</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Stop losing track between tools
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="p-7 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-lg mb-4">
                  <i class="ph-bold ph-copy"></i>
                </div>
                <h3 class="text-base font-bold text-surface-dark0 mb-2">Repeated Copying</h3>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  An enquiry arrives by email, then someone copies it into a spreadsheet. A colleague checks availability and asks for missing details. The customer replies to somebody else, leaving two records to check.
                </p>
              </div>
            </div>

            <div class="p-7 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-lg mb-4">
                  <i class="ph-bold ph-chats-circle"></i>
                </div>
                <h3 class="text-base font-bold text-surface-dark0 mb-2">Chatbot Clutter</h3>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Who has the latest details, and who should reply? A chatbot cannot fix an unclear handover on its own. It may just add another inbox for your team to check.
                </p>
              </div>
            </div>

            <div class="p-7 rounded-2xl bg-surface-1 border border-surface-2 flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg mb-4">
                  <i class="ph-bold ph-user-check"></i>
                </div>
                <h3 class="text-base font-bold text-surface-dark0 mb-2">Clear Handover</h3>
                <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  We would first agree what starts the work and where the record lives. Each next step needs an owner, including requests outside the usual rules. Your team should see progress and take over when automation stops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. BIRMINGHAM TRADES SCENARIO ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="trades-scenario">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-white rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Scenario: Trades &amp; Field Services
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-5 leading-tight">
              Trades: check job details before booking
            </h2>

            <div class="space-y-4 text-text-secondary text-sm leading-relaxed mb-6">
              <p>
                Job requests can arrive while your engineers are out on calls. Someone still needs to check the details before arranging a visit.
              </p>
              <p>
                For a Birmingham heating or electrical business, a proposed workflow could collect basic details. These could include the postcode, job type and preferred availability. It could check for missing fields and create a scheduling task.
              </p>
              <p>
                Rules could check service areas and flag gaps in the request. AI might turn a long customer message into a short summary. A person would still confirm job suitability, appointment availability and customer commitments.
              </p>
              <p>
                Emergency messages would go to a person through an approved route. They would not receive an AI diagnosis.
              </p>
              <p class="font-medium text-surface-dark0 pt-2 border-t border-surface-2">
                This is a hypothetical Birmingham scenario, not a Bell Bee Media client project. It is not a promise of automated dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. PROFESSIONAL SERVICES SCENARIO ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="professional-services-scenario">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-surface-1 rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Scenario: Professional Services
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-5 leading-tight">
              Professional services: collect the basics once
            </h2>

            <div class="space-y-4 text-text-secondary text-sm leading-relaxed mb-6">
              <p>
                Your team may keep asking for details before passing an enquiry on. The right colleague still needs enough information to help.
              </p>
              <p>
                For a Birmingham accountancy or consultancy team, a proposed workflow could collect agreed details. It could flag missing information and prepare an internal briefing.
              </p>
              <p>
                AI could suggest a summary or category for a person to check. It would not decide eligibility, give professional advice or approve engagement terms. You would need an agreed way to handle sensitive material before collecting it.
              </p>
              <p class="font-medium text-surface-dark0 pt-2 border-t border-surface-2">
                This is a hypothetical handover example, not a replacement for professional judgement. Access rules, data retention and conflict checks would shape whether automation is suitable. Data retention means how long you keep the information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. DISTRIBUTOR SCENARIO ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="distributor-scenario">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-white rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Scenario: Commercial Distribution
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-5 leading-tight">
              Distributors: prepare quotes for sales to check
            </h2>

            <div class="space-y-4 text-text-secondary text-sm leading-relaxed mb-6">
              <p>
                A quote request arrives with attachments and unclear product descriptions. Some quantities do not add up, so sales must check the details.
              </p>
              <p>
                For a Birmingham distributor, a proposed workflow could prepare draft product lines. It could flag uncertain matches and pass the request to sales.
              </p>
              <p>
                Stock, prices and customer terms must come from approved system data. AI must not supply them from memory. A person would approve substitutions, discounts and the final quotation before sending.
              </p>
              <p class="font-medium text-surface-dark0 pt-2 border-t border-surface-2">
                This is an illustrative scenario, not an actual engagement. Reliable matching depends on your catalogue and how your systems connect. If those cannot support it, a better request form may help more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07. MECHANISM ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="mechanism">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">System Architecture</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Use rules for checks, AI for text
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="p-7 rounded-2xl bg-surface-1 border border-surface-2">
              <h3 class="text-base font-bold text-surface-dark0 mb-3 flex items-center gap-2">
                <i class="ph-bold ph-gear text-primary"></i> Fixed Rules
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Fixed checks usually need rules rather than AI to work reliably. These include required fields, routing, duplicate checks and status updates. Approved system lookups should follow rules too. The same valid information should lead to the same permitted action.
              </p>
            </div>

            <div class="p-7 rounded-2xl bg-surface-1 border border-surface-2">
              <h3 class="text-base font-bold text-surface-dark0 mb-3 flex items-center gap-2">
                <i class="ph-bold ph-sparkle text-primary"></i> AI for Unpredictable Text
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                AI may help when the text is less predictable. It could summarise an email, suggest a category or draft a reply. Those outputs are suggestions for your team to check. They can be wrong.
              </p>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-surface-dark0 text-white leading-relaxed text-xs sm:text-sm space-y-3">
            <p>
              For AI Automation Services in Birmingham UK, we would assess each step separately. We would not add AI throughout the workflow.
            </p>
            <p class="font-bold text-primary-light">
              Actions that cannot be undone must never run without human approval. Sending commitments, deleting records or changing payment details requires explicit approval. An authorised person must give that approval before the action happens.
            </p>
          </div>
        </div>
      </section>

      {/* ── 08. PROPOSED DELIVERABLES ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="proposed-deliverables">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Pilot Scope</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              What a pilot could include
            </h2>
            <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
              A written proposal would define the workflow before any build starts. It would name the systems, exclusions and checks the pilot must pass. It would also explain where the workflow starts and stops.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">01. Process Map &amp; Plan</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                A current process map and an approved plan for the revised workflow.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">02. System Connections</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                A record of system connections and the access each needs.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">03. Configured Pilot</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                One configured pilot workflow, with approval steps agreed in advance.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">04. Exception Tests</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Tests for ordinary requests, exceptions and duplicate events.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">05. Monitoring View</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                A monitoring view and instructions for reporting problems to the right person.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-1">06. Handover Guide</span>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                A handover guide covering ownership, manual work and recovery after failure.
              </p>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-surface-2 text-xs text-text-secondary">
            Discovery would determine the final scope of the work. Extra workflows, old data clean-up, new software licences and ongoing support need separate decisions. A working demonstration does not authorise connection to your live systems.
          </div>
        </div>
      </section>

      {/* ── 09. TARGET-STATE COMPARISON ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="target-state">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">State Comparison</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Give each enquiry a clear next step
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="p-7 rounded-2xl bg-surface-1 border border-surface-2">
              <h3 class="text-base font-bold text-surface-dark0 mb-3 pb-2 border-b border-surface-2 flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-amber-400"></span>
                Before
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Enquiries sit across inboxes, with missing details spotted late. Staff ask who should act, sometimes only after a customer chases.
              </p>
            </div>

            <div class="p-7 rounded-2xl bg-surface-1 border border-primary/40 shadow-sm">
              <h3 class="text-base font-bold text-surface-dark0 mb-3 pb-2 border-b border-surface-2 flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-primary"></span>
                Target state
              </h3>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Each supported enquiry has a record your team can trace. A named person owns the next action, with a route for unusual requests. Drafts are clearly separate from approved decisions, and failures are visible to the owner.
              </p>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2 text-xs text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
            These are proposed design outcomes, not measured Bell Bee Media results. We would compare the pilot with your starting position using agreed checks. We do not guarantee hours saved, higher revenue or error-free operation.
          </div>
        </div>
      </section>

      {/* ── 10. RELIABILITY AND SECURITY ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="reliability">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-white rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Safeguards &amp; Error Handling
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-5 leading-tight">
              Plan for failures before going live
            </h2>

            <div class="space-y-4 text-text-secondary text-sm leading-relaxed mb-6">
              <p>
                Connections expire, suppliers change their systems and messages can arrive twice. A successful demonstration does not show how a workflow handles these problems.
              </p>
              <p>
                The proposed design should log actions and limit repeat attempts after failures. It should also prevent the same message from causing duplicate actions. This safeguard is called idempotency.
              </p>
              <p>
                If work fails, someone needs an alert and responsibility for handling it. Your team also needs a way to carry on manually.
              </p>
              <p>
                Access should be limited to what the workflow actually needs. Passwords and keys belong in managed secure storage, never prompts or workflow notes. Emails, attachments and retrieved text must be treated as untrusted content.
              </p>
              <p>
                Instructions hidden in that content must not grant AI permission to use tools. We would agree how to reverse changes and what recovery can achieve. Some actions cannot be undone, so they need approval before they happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. PRIVACY ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="privacy">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="bg-surface-1 rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Data Protection &amp; Governance
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-5 leading-tight">
              Know where customer information goes
            </h2>

            <div class="space-y-4 text-text-secondary text-sm leading-relaxed mb-6">
              <p>
                Before connecting systems, we would need to understand the personal data involved. Why is it needed, who can access it and how long is it kept? Discovery should also identify the vendors that process it.
              </p>
              <p>
                The workflow needs a review of UK GDPR and PECR requirements. These cover personal data protection and privacy rules, including rules for marketing messages. A service enquiry does not give blanket permission for promotional follow-up.
              </p>
              <p>
                This is an operational review, not legal advice or legal certification. Your responsible team or adviser must approve the relevant arrangements, notices and contracts.
              </p>
              <p>
                Data processing locations depend on your chosen providers, their suppliers and settings. We do not promise UK-only processing.
              </p>
              <p>
                Cross-border access and transfers need explicit review before using real customer information. That includes access for remote delivery from our Islamabad headquarters.
              </p>
            </div>

            <div class="pt-4 border-t border-surface-2 text-xs text-text-secondary">
              Review our <a href={routes.privacy.href()} class="text-primary font-bold hover:underline">privacy policy</a> for details on data processing practices.
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. PROCESS AND MAINTENANCE ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="process">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Delivery Lifecycle</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Test each stage before moving on
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-2">Stage 1: Map</span>
              <p class="text-xs text-text-secondary leading-relaxed">
                Record how the work happens now and name the person accountable. Establish a starting point so you can compare the pilot fairly.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-2">Stage 2: Design</span>
              <p class="text-xs text-text-secondary leading-relaxed">
                Agree access, approval rules, data handling and checks the workflow must pass. Keep a manual way to do the work.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-2">Stage 3: Pilot</span>
              <p class="text-xs text-text-secondary leading-relaxed">
                Test with made-up data or approved data limited to what is needed. Consider restricted live use only after approval.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-surface-2">
              <span class="text-xs font-bold text-primary block mb-2">Stage 4: Review</span>
              <p class="text-xs text-text-secondary leading-relaxed">
                Compare what happened with the checks you agreed. Use the evidence to continue, make changes or stop.
              </p>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-surface-2 text-xs text-text-secondary space-y-2">
            <p>
              Timing depends on system access, connection limits and your team's capacity for review. Ongoing maintenance needs a separate agreement with clear responsibilities.
            </p>
            <p>
              Agree who monitors failures, handles supplier changes and checks changes in AI behaviour. The agreement should also cover support and recovery after problems. Someone needs to own the workflow after launch.
            </p>
          </div>
        </div>
      </section>

      {/* ── 13. STAGING PROOF FIXTURES ── */}
      <section class="py-16 sm:py-20 bg-white border-b border-surface-2" id="review-examples">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Review Samples</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-2">
              Illustrative review examples
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded block w-fit mb-3">
                Illustrative sample fictional replace before publication
              </span>
              <p class="text-xs text-text-secondary italic mb-3">
                “Seeing the approval step beside the draft made the workflow easier to question.”
              </p>
              <span class="text-xs font-bold text-surface-dark0">Alex R. · Operations manager · Building services · Birmingham</span>
            </div>

            <div class="p-6 rounded-2xl bg-surface-1 border border-surface-2">
              <span class="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded block w-fit mb-3">
                Illustrative sample fictional replace before publication
              </span>
              <p class="text-xs text-text-secondary italic mb-3">
                “The useful part was knowing who would handle an exception, not just watching a request move.”
              </p>
              <span class="text-xs font-bold text-surface-dark0">Priya M. · Practice manager · Professional services · Birmingham</span>
            </div>
          </div>

          <div class="p-5 rounded-2xl bg-surface-1 border border-surface-2 text-xs text-text-secondary">
            <span class="font-bold text-amber-800 block mb-1">Illustrative sample fictional replace before publication</span>
            Sample distributor test: ten synthetic requests, including two duplicate submissions, produce eight review tasks. This is invented fixture data for a staging demonstration, not a measured client result. Real acceptance checks must use the agreed test pack and documented observations.
          </div>
        </div>
      </section>

      {/* ── 14. FAQ ── */}
      <section class="py-16 sm:py-20 bg-surface-1 border-b border-surface-2" id="faq">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-primary">Questions &amp; Answers</span>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mt-2 mb-4">
              Questions before you automate
            </h2>
          </div>

          <div class="space-y-4">

            {/* Q1 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Are AI Automation Services in Birmingham UK right for every business?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                No. Start with a repeatable process that has a clear owner. Discovery should assess request volumes, unusual cases, data quality and risk. A better form, shared inbox or written checklist may be enough.
              </div>
            </details>

            {/* Q2 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">What would it cost?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  We do not have an approved public price for this service. A proposal should separate discovery and build costs from optional maintenance and supplier charges.
                </p>
                <p>
                  It should state software subscriptions, AI usage, messaging and connection platform fees. Do not assume these are included in the project price. Confirm currency, VAT treatment, usage limits and pricing for scope changes before agreeing work.
                </p>
              </div>
            </details>

            {/* Q3 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Who owns the workflow and accounts?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  The agreement needs to set out ownership, licences and handover rights. Where platforms allow it, accounts should stay under your business's control. Access should be documented so you know who can use them.
                </p>
                <p>
                  Check what you can export and what depends on a supplier's own software. Agree what happens to passwords, keys, data and support when the work ends.
                </p>
              </div>
            </details>

            {/* Q4 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Can you connect our existing systems?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  Possibly, but we would need to check your setup first. That includes permissions, subscription levels, supplier restrictions and available APIs. APIs are interfaces that let software systems exchange information.
                </p>
                <p>
                  Email, CRM, calendar and accounting connections each need their own assessment. A CRM is a system for managing customer records and contact. A product appearing in a demo does not prove it will connect to your setup.
                </p>
              </div>
            </details>

            {/* Q5 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">How would rollout work?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  Start with one limited pilot, agreed checks and a named approver. Add access in stages and test what happens when things go wrong. Document how staff can work manually before expanding the workflow.
                </p>
                <p>
                  We cannot promise a launch date before agreeing scope and responsibilities. Timing also depends on the systems and access the work needs.
                </p>
              </div>
            </details>

            {/* Q6 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">What are the limitations?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  AI can misread a message or produce text that is wrong. Automation can fail when services change or information is missing.
                </p>
                <p>
                  Human review, limited access and monitoring reduce risks but cannot remove them. Unsuitable or high-risk steps should stay manual.
                </p>
              </div>
            </details>

            {/* Q7 */}
            <details class="group bg-white rounded-2xl border border-surface-2 p-6 shadow-sm open:border-primary/50 transition-all">
              <summary class="flex items-center justify-between cursor-pointer list-none text-base font-bold text-surface-dark0 group-hover:text-primary transition-colors">
                <h3 class="text-base font-bold pr-4">Will this replace staff or need someone to manage it?</h3>
                <span class="text-primary text-xl shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <div class="mt-4 pt-4 border-t border-surface-2 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-2">
                <p>
                  The proposal is to help your team, not promise staff reductions. Someone still needs to handle approvals, unusual requests and ongoing reviews.
                </p>
                <p>
                  Before launch, agree who watches for failures and who can pause the workflow. Staff also need to learn how to carry on manually.
                </p>
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* ── 15. FORM AND NEXT STEP ── */}
      <section class="py-16 sm:py-24 bg-white border-b border-surface-2" id="request-automation-teardown">
        <div class="container mx-auto px-4 max-w-3xl">
          <div class="bg-surface-1 rounded-3xl border border-surface-2 p-8 sm:p-12 shadow-sm">
            
            <div class="mb-8">
              <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Diagnostic Request
              </p>
              <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0 mb-3">
                Request your Automation Teardown
              </h2>
              <p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Tell us about one enquiry that takes too much chasing. Which tools does it pass through, and where does it get stuck? Tell us where it becomes unclear who should act next.
              </p>
            </div>

            {/* Submission result */}
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
            <form method="POST" action="#request-automation-teardown" class="space-y-5">
              
              {/* Hidden context fields */}
              <input type="hidden" name="pageId" value="bellbee-uk-birmingham-ai-automation" />
              <input type="hidden" name="service" value="ai-automation" />
              <input type="hidden" name="market" value="uk" />
              <input type="hidden" name="city" value="birmingham" />
              <input type="hidden" name="offer" value="automation-teardown" />

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

              {/* Business name */}
              <div>
                <label for="businessName" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                  Business Name <span class="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  placeholder="e.g. Birmingham Trade Supplies Ltd"
                  class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                />
              </div>

              {/* Workflow or problem */}
              <div>
                <label for="problem" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                  Workflow or Problem <span class="text-primary">*</span>
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  required
                  rows={4}
                  placeholder="Tell us which tools enquiries pass through, where they get stuck, and who currently acts next."
                  class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0 leading-relaxed"
                ></textarea>
              </div>

              {/* Phone or WhatsApp, optional */}
              <div>
                <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-surface-dark0 mb-2">
                  Phone or WhatsApp <span class="text-text-secondary font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+44 7123 456789 or international prefix"
                  class="w-full px-4 py-3 rounded-xl bg-white border border-surface-2 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all text-surface-dark0"
                />
              </div>

              <div class="text-xs text-text-secondary leading-relaxed">
                Please leave out customer records, passwords, payment details and sensitive personal information.
              </div>

              {/* Submit CTA */}
              <div class="pt-2">
                <button
                  type="submit"
                  id="submit-automation-teardown-button"
                  class="w-full py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-sm font-black uppercase tracking-wider transition-colors shadow-lg"
                >
                  Request your Automation Teardown
                </button>
              </div>

              <div class="pt-4 text-xs text-text-secondary leading-relaxed border-t border-surface-2 space-y-2">
                <p>
                  We will use your details to respond, as our <a href={routes.privacy.href()} class="text-primary font-bold hover:underline">privacy notice</a> explains. Any marketing permission offered will be separate and optional.
                </p>
                <p>
                  Before agreeing access or work, we would check whether the Teardown fits. We would then agree the scope and any fee. We do not promise a response deadline.
                </p>
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* ── 16. ACCOUNTABLE CLOSE ── */}
      <section class="py-16 sm:py-24 bg-surface-dark0 text-white" id="final-close">
        <div class="container mx-auto px-4 max-w-4xl text-center">
          <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
            Next Action
          </p>
          <h2 class="text-2xl sm:text-4xl font-black mb-6 leading-tight">
            Discuss the handover before buying a build
          </h2>
          <div class="space-y-4 text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed mb-8">
            <p>
              Bell Bee Media is headquartered in Islamabad and serves Birmingham remotely. This is not a Birmingham office or a commitment to local on-site support.
            </p>
            <p>
              Tell us where work gets stuck before you choose the technology. Commercial decisions should stay with your team, with responsibilities agreed in writing.
            </p>
            <p>
              If attracting enquiries is the problem, explore our <a href={routes.locationUkBirminghamMetaAds.href()} class="text-primary-light font-bold hover:underline">Meta Ads</a> and <a href={routes.locationUkBirminghamSeo.href()} class="text-primary-light font-bold hover:underline">SEO services</a>. Meta Ads means paid advertising on Meta platforms, such as Facebook and Instagram. SEO helps people find your website through unpaid search results.
            </p>
            <p class="font-medium text-white">
              Getting enquiries and following them up are different jobs. Start with the one that needs attention in your business.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#request-automation-teardown"
              class="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-lg"
            >
              Request your Automation Teardown
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

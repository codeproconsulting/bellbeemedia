import { type Handle } from 'remix/ui'
import { Layout } from '../../layout.tsx'
import { routes } from '../../../routes.ts'
import { type ProposalSubmissionResult } from '../../../data/wordpress.ts'

interface BirminghamPageProps {
  bookingUrl?: string
  result?: ProposalSubmissionResult
}

export function BirminghamPage(handle: Handle<BirminghamPageProps>) {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://bellbeemedia.com/locations/uk/birmingham#hub',
    name: 'Bell Bee Media — Birmingham UK Marketing & Performance Hub',
    url: 'https://bellbeemedia.com/locations/uk/birmingham',
    logo: 'https://bellbeemedia.com/Logo.svg',
    description:
      'Bell Bee Media regional operations for Birmingham and the West Midlands. Specialized Meta Ads Services, Search Engine Marketing, and B2B Lead Qualification. Delivered remotely from our Islamabad headquarters.',
    provider: {
      '@type': 'Organization',
      name: 'Bell Bee Media',
      url: 'https://bellbeemedia.com',
      email: 'hello@bellbeemedia.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Birmingham',
      containedInPlace: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    },
  }

  return () => (
    <Layout
      title="Birmingham Specialized Services | Bell Bee Media"
      description="Select your specialized service in Birmingham: Meta Ads Services, Search Engine Marketing, and B2B Lead Generation. Delivered remotely from Bell Bee Media HQ in Islamabad."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >

      {/* ── TOP HEADER / HERO: DARK BLUE BACKGROUND ── */}
      <section class="bg-surface-dark0 text-white pt-28 pb-16 relative overflow-hidden border-b border-surface-dark2">
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div class="flex items-center justify-between text-xs text-white/70 pb-10">
            <nav aria-label="Breadcrumb" class="flex items-center gap-2">
              <a href={routes.home.href()} class="hover:text-white transition-colors">Home</a>
              <span class="text-white/30">/</span>
              <a href={routes.locations.href()} class="hover:text-white transition-colors">Locations</a>
              <span class="text-white/30">/</span>
              <a href={routes.locationsUk.href()} class="hover:text-white transition-colors">United Kingdom</a>
              <span class="text-white/30">/</span>
              <span class="text-white font-medium">Birmingham</span>
            </nav>
            <a
              href={routes.locationsUk.href()}
              class="text-xs text-primary-light hover:underline flex items-center gap-1 font-semibold"
            >
              <i class="ph ph-arrow-left"></i> UK Regional Hub
            </a>
          </div>

          {/* Heading & Intro */}
          <div class="text-center max-w-3xl mx-auto">
            <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-3">
              United Kingdom · Birmingham Hub
            </p>
            <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Select Your Specialized Service in Birmingham
            </h1>
            <p class="text-white/75 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
              Explore our specialized performance marketing and qualified lead acquisition services serving businesses across Birmingham and the West Midlands. Delivered remotely from our Islamabad headquarters.
            </p>
          </div>

        </div>
      </section>

      {/* ── BOXES SECTION: WHITE BACKGROUND WITH CLEAN CARDS ── */}
      <section class="py-12 sm:py-16 bg-surface-1 relative border-b border-surface-2" id="services">
        <div class="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div class="text-center mb-10">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">
              Specialized Departments
            </p>
            <h2 class="text-2xl sm:text-3xl font-black text-surface-dark0">
              Choose a Service to View Detailed Specifications
            </h2>
          </div>

          {/* 3 Service Boxes (Unified Premium Dark Agency Styling) */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
            
            {/* Box 1: Meta Ads Services Birmingham */}
            <a
              href={routes.locationUkBirminghamMetaAds.href()}
              id="box-meta-ads-birmingham"
              class="group relative bg-surface-dark0 text-white rounded-2xl p-7 border border-surface-dark2 hover:border-secondary shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-secondary/20 text-secondary-light flex items-center justify-center text-2xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <i class="ph-fill ph-chart-line-up"></i>
                  </div>
                  <span class="text-[11px] font-bold uppercase tracking-wider text-secondary-light">
                    Testing &amp; Lead Quality
                  </span>
                </div>

                <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-secondary-light transition-colors mb-2 leading-snug">
                  Meta Ads Services in Birmingham UK
                </h3>

                <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-5">
                  Meta Ads engineered around lead quality and sales feedback. Creative hypothesis testing connected directly to qualified lead economics with zero vanity metrics.
                </p>

                <div class="space-y-2.5 mb-6">
                  <div class="flex items-center gap-2.5 text-xs sm:text-[13px] text-white/80">
                    <i class="ph-bold ph-check text-secondary-light text-sm shrink-0"></i>
                    <span>Request your Meta Ads Teardown (Full Review)</span>
                  </div>
                  <div class="flex items-center gap-2.5 text-xs sm:text-[13px] text-white/80">
                    <i class="ph-bold ph-check text-secondary-light text-sm shrink-0"></i>
                    <span>Ad Hypotheses Tested Against Sales Feedback</span>
                  </div>
                  <div class="flex items-center gap-2.5 text-xs sm:text-[13px] text-white/80">
                    <i class="ph-bold ph-check text-secondary-light text-sm shrink-0"></i>
                    <span>Separation of Media Spend, Production &amp; Service Fees</span>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-bold text-secondary-light group-hover:text-white transition-colors">
                <span>Explore Meta Ads Services Birmingham</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform text-base"></i>
              </div>
            </a>

            {/* Box 2: Birmingham SEO Services */}
            <a
              href={routes.locationUkBirminghamSeo.href()}
              id="box-seo-birmingham"
              class="group relative bg-surface-dark0 text-white rounded-2xl p-7 border border-surface-dark2 hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-primary/20 text-primary-light flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <i class="ph-fill ph-magnifying-glass"></i>
                  </div>
                  <span class="text-[11px] font-bold uppercase tracking-wider text-primary-light">
                    Organic Inbound
                  </span>
                </div>

                <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-primary-light transition-colors mb-2 leading-snug">
                  SEO Services in Birmingham UK
                </h3>

                <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-5">
                  Capture high-intent commercial buyers actively searching across Birmingham and the West Midlands. Build authority and predictable inbound traffic without paying for every click.
                </p>

                <div class="space-y-2.5 mb-6">
                  <div class="flex items-center gap-2.5 text-xs sm:text-[13px] text-white/80">
                    <i class="ph-bold ph-check text-primary-light text-sm shrink-0"></i>
                    <span>Commercial &amp; Local Intent Search Strategy</span>
                  </div>
                  <div class="flex items-center gap-2.5 text-xs sm:text-[13px] text-white/80">
                    <i class="ph-bold ph-check text-primary-light text-sm shrink-0"></i>
                    <span>Technical Architecture &amp; Content Mapping</span>
                  </div>
                  <div class="flex items-center gap-2.5 text-xs sm:text-[13px] text-white/80">
                    <i class="ph-bold ph-check text-primary-light text-sm shrink-0"></i>
                    <span>Transparent Inbound Lead Tracking</span>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-bold text-primary-light group-hover:text-white transition-colors">
                <span>Explore SEO Services Birmingham</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform text-base"></i>
              </div>
            </a>

            {/* Box 3: AI Automation Services Birmingham */}
            <a
              href={routes.locationUkBirminghamAiAutomation.href()}
              id="box-automation-birmingham"
              class="group relative bg-surface-dark0 text-white rounded-2xl p-7 border border-surface-dark2 hover:border-indigo-400 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    <i class="ph-fill ph-robot"></i>
                  </div>
                  <span class="text-[11px] font-bold uppercase tracking-wider text-indigo-400">
                    CRM &amp; Triage
                  </span>
                </div>

                <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-400 transition-colors mb-2 leading-snug">
                  AI Automation Services in Birmingham UK
                </h3>

                <p class="text-xs sm:text-sm text-white/70 leading-relaxed mb-5">
                  Protect your team's time by connecting tools with dependable enquiry-to-action workflows. Keep human approval steps for all sensitive and commercial decisions.
                </p>

                <div class="space-y-2.5 mb-6">
                  <div class="flex items-center gap-2.5 text-xs sm:text-[13px] text-white/80">
                    <i class="ph-bold ph-check text-indigo-400 text-sm shrink-0"></i>
                    <span>Enquiry Intake &amp; Idempotent Exception Handling</span>
                  </div>
                  <div class="flex items-center gap-2.5 text-xs sm:text-[13px] text-white/80">
                    <i class="ph-bold ph-check text-indigo-400 text-sm shrink-0"></i>
                    <span>Human Approval Gate for Customer Commitments</span>
                  </div>
                  <div class="flex items-center gap-2.5 text-xs sm:text-[13px] text-white/80">
                    <i class="ph-bold ph-check text-indigo-400 text-sm shrink-0"></i>
                    <span>Clear Process Mapping &amp; Scoped Workflow Pilot</span>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-bold text-indigo-400 group-hover:text-white transition-colors">
                <span>Explore AI Automation Birmingham</span>
                <i class="ph-bold ph-arrow-right group-hover:translate-x-1.5 transition-transform text-base"></i>
              </div>
            </a>

          </div>

          {/* Remote Service Statement Banner */}
          <div class="p-6 sm:p-8 rounded-2xl bg-white border border-surface-2 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 mt-0.5">
                <i class="ph-bold ph-shield-check"></i>
              </div>
              <div>
                <h4 class="text-base font-bold text-surface-dark0 mb-1">
                  Remote Delivery with Aligned UK Hours
                </h4>
                <p class="text-xs sm:text-sm text-text-secondary max-w-2xl leading-relaxed">
                  Bell Bee Media works remotely from our Islamabad headquarters. We align with UK working hours (GMT / BST), establish transparent written scopes before work starts, and communicate directly with your team. No fabricated Birmingham premises or unverified local staff.
                </p>
              </div>
            </div>
            <a
              href="mailto:hello@bellbeemedia.com"
              class="px-5 py-2.5 rounded-xl bg-surface-dark0 hover:bg-black text-white text-xs font-bold transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Contact Team</span>
              <i class="ph ph-envelope-simple"></i>
            </a>
          </div>

        </div>
      </section>

      {/* ── Direct Consultation Banner ── */}
      <section class="py-14 bg-surface-dark0 text-white">
        <div class="container mx-auto px-4 max-w-4xl text-center">
          <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-2">
            Ready to Investigate Your Birmingham Enquiries?
          </p>
          <h3 class="text-2xl sm:text-3xl font-black mb-4">
            Request your Meta Ads Teardown
          </h3>
          <p class="text-sm text-white/70 max-w-xl mx-auto mb-6 leading-relaxed">
            Send your website and the problem you want to investigate. We will agree the next step and response expectations before proceeding.
          </p>
          <a
            href={routes.locationUkBirminghamMetaAds.href()}
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-light text-white text-xs font-bold uppercase tracking-wide transition-colors shadow-lg"
          >
            <span>Go to Meta Ads Birmingham Page</span>
            <i class="ph-bold ph-arrow-right"></i>
          </a>
        </div>
      </section>

    </Layout>
  )
}

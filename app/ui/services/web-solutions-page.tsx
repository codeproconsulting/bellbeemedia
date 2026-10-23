import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'

export function WebSolutionsPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://bellbeemedia.com/#organization',
        name: 'Bell Bee Media',
        url: 'https://bellbeemedia.com/',
        logo: 'https://bellbeemedia.com/Logo.svg',
        email: 'hello@bellbeemedia.com',
      },
      {
        '@type': 'Service',
        '@id': 'https://bellbeemedia.com/services/web-solutions#service',
        name: 'Web Design and Landing Pages',
        provider: {
          '@id': 'https://bellbeemedia.com/#organization',
        },
        url: 'https://bellbeemedia.com/services/web-solutions',
        description:
          'Connect page copy, design and development around the visitor’s next step. Discuss websites, e-commerce and campaign landing pages with Bell Bee Media.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bellbeemedia.com/services/web-solutions#breadcrumb',
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
            name: 'Services',
            item: 'https://bellbeemedia.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Web Design and Landing Pages',
            item: 'https://bellbeemedia.com/services/web-solutions',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bellbeemedia.com/services/web-solutions#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do we need a new website or a landing page?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use a website for broader discovery. Use a focused page when a campaign needs its own message and action. Review the existing journey before deciding.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you improve our current site?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Discuss the existing platform and problem first. A targeted improvement may be more useful than a full rebuild.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will the site rank on Google?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Technical search foundations help search engines access and understand pages. They do not guarantee rankings or traffic.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can the page connect to our CRM?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Confirm the system, permissions, data handling and failure behavior before including an integration. A visible form is not proof of delivery.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you guarantee a conversion increase?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Traffic quality, the offer and measurement affect results. Establish a baseline and test changes where the evidence allows.',
            },
          },
          {
            '@type': 'Question',
            name: 'What affects the price?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Page scope, design needs, platform constraints and integrations affect the project. Request a written proposal rather than assuming a package fits.',
            },
          },
        ],
      },
    ],
  }

  return () => (
    <Layout
      title="Websites and landing pages | Bell Bee Media"
      description="Connect page copy, design and development around the visitor’s next step. Discuss websites, e-commerce and campaign landing pages with Bell Bee Media."
      head={
        <>
          <link rel="canonical" href="https://bellbeemedia.com/services/web-solutions" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Bell Bee Media" />
          <meta property="og:url" content="https://bellbeemedia.com/services/web-solutions" />
          <meta property="og:title" content="Websites and landing pages | Bell Bee Media" />
          <meta
            property="og:description"
            content="Connect page copy, design and development around the visitor’s next step. Discuss websites, e-commerce and campaign landing pages with Bell Bee Media."
          />
          <script type="application/ld+json">
            {JSON.stringify(schemaJson)}
          </script>
          <style>{`
            .bb-focus-light:focus-visible {
              outline: 3px solid #154476 !important;
              outline-offset: 3px !important;
            }
            .bb-focus-dark:focus-visible {
              outline: 3px solid #ffffff !important;
              outline-offset: 3px !important;
            }
            details.bb-faq-item summary::-webkit-details-marker {
              display: none;
            }
            details.bb-faq-item summary {
              list-style: none;
            }
            details.bb-faq-item[open] .bb-faq-icon {
              transform: rotate(180deg);
            }
            details.bb-faq-item[open] summary {
              background-color: #f8fafc;
            }
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
              }
            }
          `}</style>
        </>
      }
    >
      {/* ── BREADCRUMB ── */}
      <div class="bg-surface-dark0 border-b border-white/10 pt-24 pb-4">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs sm:text-sm text-white/60 font-medium flex-wrap">
            <a href={routes.home.href()} class="hover:text-white transition-colors bb-focus-dark">Home</a>
            <i class="ph ph-caret-right text-xs text-white/40" aria-hidden="true"></i>
            <a href={routes.services.href()} class="hover:text-white transition-colors bb-focus-dark">Services</a>
            <i class="ph ph-caret-right text-xs text-white/40" aria-hidden="true"></i>
            <span class="text-white font-semibold" aria-current="page">Web Design and Landing Pages</span>
          </nav>
        </div>
      </div>

      {/* ── S01: HERO SECTION (DARK BUNDLE) ── */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] text-white pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-white/10">
        <div class="absolute top-1/4 -right-20 w-96 h-96 bg-primary-light/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-10 -left-10 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column */}
            <div class="w-full">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
                <span class="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                <span class="text-xs font-bold uppercase tracking-widest text-white/90">
                  Conversion & Web Engineering
                </span>
              </div>

              <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
                Websites and landing pages that make the next step clear
              </h1>

              <div class="space-y-4 text-white/85 text-base sm:text-lg leading-relaxed mb-8">
                <p>
                  Someone clicks your ad, reaches the page and starts looking for the offer. The headline talks about something else. The button is vague. On a phone, the form is hard to finish.
                </p>
                <p>
                  Bell Bee Media connects page copy, design and development around the visitor’s task. Help people understand the offer and take a clear next step.
                </p>
              </div>

              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <a
                  href={routes.getProposal.href()}
                  class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-primary font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-black/25 hover:bg-surface-1 hover:shadow-2xl hover:-translate-y-0.5 active:bg-white active:text-[#0e2c50] transition-all bb-focus-dark"
                  style="min-height: 48px; min-width: 44px;"
                >
                  <span>Discuss your website project</span>
                  <i class="ph-bold ph-arrow-right text-lg" aria-hidden="true"></i>
                </a>
              </div>

              <div class="flex items-center gap-2.5 text-sm text-white/75 font-medium pt-2">
                <i class="ph-fill ph-browsers text-secondary text-lg" aria-hidden="true"></i>
                <span>Custom websites, e-commerce and campaign landing pages.</span>
              </div>
            </div>

            {/* Right Column: Web Architecture & Browser Mockup */}
            <div class="w-full">
              <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                <div class="flex items-center justify-between pb-4 border-b border-white/15 mb-5 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                    <span class="ml-2 font-mono text-white/70">bellbeemedia.com/offer</span>
                  </div>
                  <span class="font-mono text-emerald-300 font-bold">100% Handover Matched</span>
                </div>

                <div class="bg-[#051120]/80 rounded-2xl p-5 border border-white/10 space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-white uppercase tracking-wider">Campaign Landing Destination</span>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/40 text-primary-light border border-primary-light/30">
                      Clear CTA
                    </span>
                  </div>

                  <div class="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                    <div class="text-xs font-bold text-white">Direct Message Match</div>
                    <p class="text-[11px] text-white/80 leading-relaxed">
                      Ad headline promise seamlessly connects to the landing page value proposition without confusion.
                    </p>
                  </div>

                  <div class="grid grid-cols-2 gap-3 pt-1">
                    <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                      <span class="text-[10px] text-white/60 block">Mobile Form</span>
                      <strong class="text-xs text-white">Streamlined Frictionless</strong>
                    </div>
                    <div class="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                      <span class="text-[10px] text-white/60 block">Enquiry Handover</span>
                      <strong class="text-xs text-secondary-light">Confirmed Delivery</strong>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-3 mt-5">
                  <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <span class="text-[11px] text-white/60 block">Speed & SEO</span>
                    <strong class="text-xs text-white">Under 2s First Load</strong>
                  </div>
                  <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <span class="text-[11px] text-white/60 block">Action Focus</span>
                    <strong class="text-xs text-secondary-light">Frictionless Path</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* S01 Mechanism Rail (Traffic promise → Page answer → Buying decision → Valid action → Confirmed handover) */}
          <div class="mt-16 pt-12 border-t border-white/15">
            <div class="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h2 class="text-xs font-bold uppercase tracking-widest text-white/70">
                Visitor Decision Pathway
              </h2>
              <span class="text-xs text-white/50">From Traffic Promise to Confirmed Handover</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">01</span>
                  <i class="ph-bold ph-megaphone text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Traffic promise</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">The clear reason, offer or hook that earned the initial click.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">02</span>
                  <i class="ph-bold ph-article text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Page answer</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Immediate headline alignment continuing the exact ad context.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">03</span>
                  <i class="ph-bold ph-check-circle text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Buying decision</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Addressing specifications, proof and core buyer questions.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">04</span>
                  <i class="ph-bold ph-cursor-click text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Valid action</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Single, friction-free conversion step with accessible form fields.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">05</span>
                  <i class="ph-bold ph-envelope-simple-check text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Confirmed handover</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Durable data receipt and clear next expectation for the user.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S02: EDITORIAL (LIGHT BUNDLE) — ROBUST FULL-WIDTH LAYOUT ── */}
      <section class="bg-white py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div class="w-full">
            <span class="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-3">
              Conversion Integrity
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-5">
              The click is only the handover
            </h2>

            {/* Decorative orange rule: 4px wide/high */}
            <div
              aria-hidden="true"
              class="w-20 h-1.5 rounded-full mb-8 bg-secondary"
            ></div>

            <div class="space-y-6 text-text-secondary text-base sm:text-lg lg:text-xl leading-relaxed">
              <p class="text-surface-dark0 font-medium">
                Your campaign can earn attention and still send people into confusion. A general homepage may offer too many paths for a focused campaign. A narrow landing page may be wrong for someone comparing your whole business.
              </p>
              <p>
                Choose the page type before choosing the layout. Then make the promise, content and action belong together.
              </p>
            </div>

            <div class="mt-8 p-6 sm:p-8 rounded-3xl bg-surface-1 border-l-4 border-secondary shadow-sm">
              <p class="text-lg sm:text-xl font-bold text-surface-dark0 leading-snug">
                A submission also needs to reach the business. A thank-you screen alone does not establish that an enquiry was saved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S03: MECHANISM (TINT BUNDLE) ── */}
      <section class="bg-surface-1 py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div class="max-w-3xl mb-14">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20 mb-4">
              <i class="ph-fill ph-compass"></i> Purpose-Driven Architecture
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-6">
              Build around the decision, not a template
            </h2>

            <div class="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
              <p class="text-surface-dark0 font-medium">
                Bell Bee brings web work alongside paid media, creative and copywriting. That allows the promise before the click to inform the page after it.
              </p>
              <p>
                Start with the visitor’s question. Put the useful answer near the action. Remove distractions that compete with the page’s purpose.
              </p>
              <p>
                Then check the practical details: mobile layout, readable content, page weight and an honest enquiry flow. Those details support the decision rather than replace the sales argument.
              </p>
            </div>
          </div>

          {/* 5 Ordered Mechanism Nodes */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            <div class="bg-white rounded-3xl p-6 border border-surface-2 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group w-full">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-black px-2.5 py-1 rounded-lg bg-primary/10 text-primary">01</span>
                  <div class="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <i class="ph-bold ph-megaphone" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Traffic promise</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Identify the core offer or query triggering the visit.
                </p>
              </div>
              <div class="mt-6 pt-3 border-t border-surface-2 flex items-center text-xs font-bold text-primary">
                <span>Phase 1</span>
                <i class="ph-bold ph-arrow-right ml-auto group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-6 border border-surface-2 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group w-full">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-black px-2.5 py-1 rounded-lg bg-primary/10 text-primary">02</span>
                  <div class="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <i class="ph-bold ph-article" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Page answer</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Confirm immediate relevance above the fold.
                </p>
              </div>
              <div class="mt-6 pt-3 border-t border-surface-2 flex items-center text-xs font-bold text-primary">
                <span>Phase 2</span>
                <i class="ph-bold ph-arrow-right ml-auto group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-6 border border-surface-2 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group w-full">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-black px-2.5 py-1 rounded-lg bg-secondary/15 text-secondary">03</span>
                  <div class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <i class="ph-bold ph-check-circle" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Buying decision</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Provide evidence, dimensions, pricing and reassurance.
                </p>
              </div>
              <div class="mt-6 pt-3 border-t border-surface-2 flex items-center text-xs font-bold text-secondary">
                <span>Phase 3</span>
                <i class="ph-bold ph-arrow-right ml-auto group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-6 border border-surface-2 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group w-full">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-black px-2.5 py-1 rounded-lg bg-primary/10 text-primary">04</span>
                  <div class="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <i class="ph-bold ph-cursor-click" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Valid action</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Clear, accessible and uncomplicated next step.
                </p>
              </div>
              <div class="mt-6 pt-3 border-t border-surface-2 flex items-center text-xs font-bold text-primary">
                <span>Phase 4</span>
                <i class="ph-bold ph-arrow-right ml-auto group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-6 border border-surface-2 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group w-full">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-xs font-black px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600">05</span>
                  <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    <i class="ph-bold ph-envelope-simple-check" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Confirmed handover</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Verified receipt, automated notification and CRM sync.
                </p>
              </div>
              <div class="mt-6 pt-3 border-t border-surface-2 flex items-center text-xs font-bold text-emerald-600">
                <span>Complete</span>
                <i class="ph-bold ph-check ml-auto" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S04: DELIVERABLES (LIGHT BUNDLE) ── */}
      <section class="bg-white py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div class="max-w-3xl mb-12">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20 mb-4">
              <i class="ph-fill ph-code"></i> Engineering Scope
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-4">
              What your project can include
            </h2>
            <p class="text-base sm:text-lg text-text-secondary">
              Comprehensive web design and development assets built around performance, accessibility and user clarity.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-tree-structure" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Page structure and copy hierarchy</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Page structure and copy hierarchy based on the intended visitor and action.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-xl shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-device-mobile" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Responsive design</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Responsive design that keeps key content and controls usable on smaller screens.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-browsers" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Accessible development</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Website or landing-page development with clear navigation and accessible content.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-magnifying-glass" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Technical search foundations</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Technical search foundations, including page metadata and crawlable content.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 md:col-span-2 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-check-circle" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Enquiry and checkout paths</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  An agreed enquiry or checkout path, with measurement requirements and acceptance checks.
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-3xl p-6 sm:p-8 bg-surface-1 border border-surface-2 flex items-start gap-4 w-full">
            <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0 mt-0.5">
              <i class="ph-fill ph-clipboard-text" aria-hidden="true"></i>
            </div>
            <p class="text-sm sm:text-base text-surface-dark0 font-medium leading-relaxed">
              Scope defines the pages, platform, integrations and handover. E-commerce, a campaign page and a full business site need different project plans.
            </p>
          </div>
        </div>
      </section>

      {/* ── S05: WALKTHROUGH DEMO (DEMO BUNDLE) ── */}
      <section class="bg-gradient-to-br from-[#f3f6f8] via-white to-[#fef7f4] py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div class="max-w-3xl mb-10">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20 mb-4">
              <i class="ph-fill ph-eye"></i> Campaign Handover Walkthrough
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-4">
              See where a campaign handover breaks
            </h2>
            <p class="text-sm sm:text-base text-text-secondary leading-relaxed mb-3">
              Illustrative page walkthrough. The desk example is fictional. It is not a published store, live checkout or conversion result.
            </p>
            <p class="text-sm sm:text-base font-bold text-surface-dark0">
              Example campaign promise: “A compact desk for a small work corner.”
            </p>
          </div>

          {/* Interactive tab selector */}
          <div class="mb-8">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Choose a view: Message match · Buying question · Enquiry state
            </p>
            
            <div
              role="tablist"
              aria-label="Walkthrough views"
              class="inline-flex p-1.5 bg-surface-2 rounded-2xl flex-wrap gap-1.5 shadow-inner"
            >
              <button
                type="button"
                role="tab"
                id="bb-tab-match"
                data-tab="match"
                aria-selected="true"
                aria-pressed="true"
                aria-controls="bb-panel-match"
                class="bb-demo-tab inline-flex items-center justify-center font-bold text-sm rounded-xl px-5 py-3 transition-all bb-focus-light shadow-sm"
                style="background-color: #154476; color: #ffffff;"
              >
                <i class="ph-bold ph-link-simple mr-2"></i> Message match
              </button>

              <button
                type="button"
                role="tab"
                id="bb-tab-question"
                data-tab="question"
                aria-selected="false"
                aria-pressed="false"
                aria-controls="bb-panel-question"
                class="bb-demo-tab inline-flex items-center justify-center font-bold text-sm rounded-xl px-5 py-3 transition-all bb-focus-light hover:text-primary"
                style="background-color: transparent; color: #475569;"
              >
                <i class="ph-bold ph-ruler mr-2"></i> Buying question
              </button>

              <button
                type="button"
                role="tab"
                id="bb-tab-enquiry"
                data-tab="enquiry"
                aria-selected="false"
                aria-pressed="false"
                aria-controls="bb-panel-enquiry"
                class="bb-demo-tab inline-flex items-center justify-center font-bold text-sm rounded-xl px-5 py-3 transition-all bb-focus-light hover:text-primary"
                style="background-color: transparent; color: #475569;"
              >
                <i class="ph-bold ph-shield-warning mr-2"></i> Enquiry state
              </button>
            </div>
          </div>

          {/* ── PANEL 1: MESSAGE MATCH ── */}
          <div
            id="bb-panel-match"
            role="tabpanel"
            aria-labelledby="bb-tab-match"
            class="bb-demo-panel bg-white rounded-3xl p-6 sm:p-10 border border-surface-2 shadow-xl w-full"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div class="w-full space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20">
                  <span class="w-2 h-2 rounded-full bg-primary"></span>
                  Status: Illustrative page view.
                </div>

                <h3 class="font-heading text-2xl sm:text-3xl font-black text-surface-dark0">
                  Message match
                </h3>

                <div class="space-y-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Input</strong>
                    <span class="text-surface-dark0 font-medium">A visitor arrives after seeing the compact-desk promise.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Output heading</strong>
                    <span class="text-surface-dark0 font-bold">“A desk for your small work corner.”</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Supporting line</strong>
                    <span class="text-surface-dark0 font-medium">“Check the dimensions and finish before choosing.”</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-secondary/5 border border-secondary/20">
                    <strong class="text-secondary block text-xs uppercase tracking-wider mb-1">Caption</strong>
                    <span class="text-text-secondary">Continue the promise that earned the click.</span>
                  </div>
                </div>
              </div>

              {/* Drawing: Matching ad card & landing page header */}
              <div class="w-full">
                <div class="bg-surface-1 rounded-2xl p-6 border border-surface-2 shadow-inner max-w-md mx-auto">
                  <div class="flex items-center justify-between text-xs text-text-secondary font-mono pb-3 border-b border-surface-2 mb-4">
                    <span>HANDOVER CONTINUITY</span>
                    <span>AD ➔ DESTINATION</span>
                  </div>
                  <svg
                    viewBox="0 0 360 220"
                    preserveAspectRatio="xMidYMid meet"
                    class="w-full h-auto"
                    aria-label="Message match drawing: Matching campaign ad promise and landing page hero"
                    role="img"
                  >
                    {/* Ad Card */}
                    <g transform="translate(25, 20)">
                      <rect x="0" y="0" width="135" height="85" rx="8" fill="#ffffff" stroke="#154476" stroke-width="2" />
                      <rect x="10" y="10" width="40" height="8" rx="2" fill="#e56026" />
                      <text x="10" y="32" font-family="Inter, sans-serif" font-size="8" font-weight="bold" fill="#0f172a">
                        Ad Promise:
                      </text>
                      <text x="10" y="46" font-family="Inter, sans-serif" font-size="7.5" fill="#475569">
                        Compact desk for small
                      </text>
                      <text x="10" y="58" font-family="Inter, sans-serif" font-size="7.5" fill="#475569">
                        work corner
                      </text>
                      <rect x="10" y="68" width="50" height="10" rx="3" fill="#154476" />
                      <text x="35" y="76" font-family="Inter, sans-serif" font-size="6" font-weight="bold" fill="#ffffff" text-anchor="middle">
                        Shop Now
                      </text>
                    </g>

                    {/* Connecting arrow */}
                    <path d="M 170 62 L 195 62" stroke="#154476" stroke-width="2" stroke-dasharray="3 3" />
                    <polyline points="190,58 196,62 190,66" fill="none" stroke="#154476" stroke-width="2" />

                    {/* Landing Page Preview */}
                    <g transform="translate(205, 15)">
                      <rect x="0" y="0" width="130" height="95" rx="10" fill="#ffffff" stroke="#154476" stroke-width="2.5" />
                      <rect x="10" y="10" width="110" height="8" rx="3" fill="#0f172a" />
                      <text x="12" y="34" font-family="Inter, sans-serif" font-size="8" font-weight="bold" fill="#154476">
                        Desk for small corner
                      </text>
                      <line x1="12" y1="44" x2="110" y2="44" stroke="#e2e8f0" stroke-width="1.5" />
                      <line x1="12" y1="52" x2="95" y2="52" stroke="#e2e8f0" stroke-width="1.5" />
                      <rect x="12" y="65" width="60" height="18" rx="4" fill="#e56026" />
                      <text x="42" y="77" font-family="Inter, sans-serif" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">
                        Check Sizes
                      </text>
                    </g>

                    {/* Bottom verification bar */}
                    <rect x="25" y="130" width="310" height="50" rx="8" fill="#ffffff" stroke="#154476" stroke-width="1.5" />
                    <text x="180" y="152" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">
                      Zero Mismatch: Visitor recognizes the offer immediately
                    </text>
                    <text x="180" y="168" font-family="Inter, sans-serif" font-size="8" fill="#475569" text-anchor="middle">
                      No generic homepage diversion · No contradictory headlines
                    </text>
                  </svg>
                  <p class="text-xs text-center text-text-secondary mt-3 font-medium">
                    Continuous message clarity preserves visitor buying intent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── PANEL 2: BUYING QUESTION ── */}
          <div
            id="bb-panel-question"
            role="tabpanel"
            aria-labelledby="bb-tab-question"
            class="bb-demo-panel bg-white rounded-3xl p-6 sm:p-10 border border-surface-2 shadow-xl w-full hidden"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div class="w-full space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20">
                  <span class="w-2 h-2 rounded-full bg-secondary"></span>
                  Status: Example information layout.
                </div>

                <h3 class="font-heading text-2xl sm:text-3xl font-black text-surface-dark0">
                  Buying question
                </h3>

                <div class="space-y-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Input</strong>
                    <span class="text-surface-dark0 font-medium">The visitor needs to know whether the desk fits.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Output heading</strong>
                    <span class="text-surface-dark0 font-bold">“Measure your space first.”</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Supporting line</strong>
                    <span class="text-surface-dark0 font-medium">“Compare the product’s published width and depth with your available floor space.”</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-secondary/5 border border-secondary/20">
                    <strong class="text-secondary block text-xs uppercase tracking-wider mb-1">Caption</strong>
                    <span class="text-text-secondary">Answer the practical question near the next step.</span>
                  </div>
                </div>
              </div>

              {/* Drawing: Desk top plan with width and depth arrows without invented numbers */}
              <div class="w-full">
                <div class="bg-surface-1 rounded-2xl p-6 border border-surface-2 shadow-inner max-w-md mx-auto">
                  <div class="flex items-center justify-between text-xs text-text-secondary font-mono pb-3 border-b border-surface-2 mb-4">
                    <span>FLOORPLAN SCHEMATIC</span>
                    <span>FIT EVALUATION</span>
                  </div>
                  <svg
                    viewBox="0 0 360 220"
                    preserveAspectRatio="xMidYMid meet"
                    class="w-full h-auto"
                    aria-label="Buying question drawing: Desk top plan with width and depth guides"
                    role="img"
                  >
                    {/* Corner room wall */}
                    <line x1="40" y1="20" x2="40" y2="180" stroke="#94a3b8" stroke-width="3" />
                    <line x1="40" y1="180" x2="320" y2="180" stroke="#94a3b8" stroke-width="3" />
                    <text x="45" y="35" font-family="Inter, sans-serif" font-size="8" fill="#94a3b8">Corner Wall</text>

                    {/* Desk Outline */}
                    <rect x="70" y="50" width="180" height="100" rx="8" fill="#ffffff" stroke="#154476" stroke-width="2.5" />
                    <rect x="80" y="60" width="60" height="40" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
                    <circle cx="160" cy="100" r="12" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />

                    {/* Width dimension line */}
                    <line x1="70" y1="35" x2="250" y2="35" stroke="#e56026" stroke-width="2" />
                    <polyline points="75,30 70,35 75,40" fill="none" stroke="#e56026" stroke-width="2" />
                    <polyline points="245,30 250,35 245,40" fill="none" stroke="#e56026" stroke-width="2" />
                    <text x="160" y="28" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#e56026" text-anchor="middle">
                      Width Guide
                    </text>

                    {/* Depth dimension line */}
                    <line x1="265" y1="50" x2="265" y2="150" stroke="#e56026" stroke-width="2" />
                    <polyline points="260,55 265,50 270,55" fill="none" stroke="#e56026" stroke-width="2" />
                    <polyline points="260,145 265,150 270,145" fill="none" stroke="#e56026" stroke-width="2" />
                    <text x="295" y="105" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#e56026" text-anchor="middle">
                      Depth
                    </text>
                  </svg>
                  <p class="text-xs text-center text-text-secondary mt-3 font-medium">
                    Critical spatial details presented directly adjacent to conversion button.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── PANEL 3: ENQUIRY STATE ── */}
          <div
            id="bb-panel-enquiry"
            role="tabpanel"
            aria-labelledby="bb-tab-enquiry"
            class="bb-demo-panel bg-white rounded-3xl p-6 sm:p-10 border border-surface-2 shadow-xl w-full hidden"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div class="w-full space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200">
                  <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                  Status: Demonstration only.
                </div>

                <h3 class="font-heading text-2xl sm:text-3xl font-black text-surface-dark0">
                  Enquiry state
                </h3>

                <div class="space-y-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Input</strong>
                    <span class="text-surface-dark0 font-medium">The example cannot save an enquiry.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Output heading</strong>
                    <span class="text-surface-dark0 font-bold">“Your enquiry has not been sent.”</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Supporting line</strong>
                    <span class="text-surface-dark0 font-medium">“This is an illustration. Use the project contact link to discuss a real website.”</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-secondary/5 border border-secondary/20">
                    <strong class="text-secondary block text-xs uppercase tracking-wider mb-1">Caption</strong>
                    <span class="text-text-secondary">A page must not report success when nothing was saved.</span>
                  </div>
                </div>
              </div>

              {/* Drawing: Honest disabled illustration panel */}
              <div class="w-full flex justify-center">
                <div class="bg-surface-1 rounded-2xl p-6 border border-surface-2 shadow-inner w-full max-w-md flex flex-col items-center">
                  <div class="w-full flex items-center justify-between text-xs text-text-secondary font-mono pb-3 border-b border-surface-2 mb-4">
                    <span>DELIVERY AUDIT PANEL</span>
                    <span>HONEST STATE</span>
                  </div>

                  <svg
                    viewBox="0 0 360 220"
                    preserveAspectRatio="xMidYMid meet"
                    class="w-full h-auto"
                    aria-label="Enquiry state drawing: Disabled honest illustration without fake submit"
                    role="img"
                  >
                    <rect x="25" y="20" width="310" height="175" rx="14" fill="#ffffff" stroke="#154476" stroke-width="2.5" />
                    
                    {/* Lock / Guard icon */}
                    <circle cx="180" cy="65" r="22" fill="#f8fafc" stroke="#154476" stroke-width="2" />
                    <path d="M 172 65 L 188 65 M 180 57 L 180 73" stroke="#154476" stroke-width="2.5" />

                    {/* Verbatim Notification Text */}
                    <text x="180" y="112" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">
                      Your enquiry has not been sent.
                    </text>
                    <text x="180" y="130" font-family="Inter, sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">
                      This is an illustration. Use the project contact
                    </text>
                    <text x="180" y="144" font-family="Inter, sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">
                      link to discuss a real website.
                    </text>

                    {/* Status Pill */}
                    <rect x="100" y="160" width="160" height="20" rx="10" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
                    <text x="180" y="173" font-family="Inter, sans-serif" font-size="8" font-weight="bold" fill="#475569" text-anchor="middle">
                      No Fake Success Screens
                    </text>
                  </svg>
                  <p class="text-xs text-center text-text-secondary mt-3 font-medium">
                    Strict boundary management: Real submissions only via verified proposals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Honest unavailable boundary note */}
          <div class="mt-8 p-5 rounded-2xl bg-white border border-surface-2 shadow-sm flex items-center gap-3.5 w-full">
            <div class="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <i class="ph-bold ph-info text-base" aria-hidden="true"></i>
            </div>
            <p class="text-sm font-medium text-surface-dark0">
              The walkthrough contains no editable fields and sends no information.
            </p>
          </div>
        </div>
      </section>

      {/* ── S06: PROCESS COMPARISON (LIGHT BUNDLE) ── */}
      <section class="bg-white py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div class="w-full mb-12">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20 mb-4">
              <i class="ph-fill ph-browsers"></i> Strategic Matching
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-3">
              Choose the page that fits the task
            </h2>
            <p class="text-base sm:text-lg text-text-secondary">
              Comparison of page purposes, not a promised conversion uplift.
            </p>
          </div>

          {/* 3 Page Purpose Cards */}
          <div class="space-y-4 mb-10">
            <div class="rounded-3xl p-6 sm:p-7 bg-surface-1 border border-surface-2 hover:border-primary/30 transition-all flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 mt-0.5">
                <i class="ph-fill ph-buildings" aria-hidden="true"></i>
              </div>
              <div>
                <strong class="text-base font-bold text-surface-dark0 block mb-1">Business website</strong>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  supports discovery across services, background and several useful journeys.
                </p>
              </div>
            </div>

            <div class="rounded-3xl p-6 sm:p-7 bg-primary/5 border border-primary/20 shadow-sm flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-xl shrink-0 mt-0.5">
                <i class="ph-fill ph-target" aria-hidden="true"></i>
              </div>
              <div>
                <strong class="text-base font-bold text-surface-dark0 block mb-1">Campaign landing page</strong>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  explains a focused offer and leads toward a matching action.
                </p>
              </div>
            </div>

            <div class="rounded-3xl p-6 sm:p-7 bg-surface-1 border border-surface-2 hover:border-primary/30 transition-all flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-xl shrink-0 mt-0.5">
                <i class="ph-fill ph-shopping-cart" aria-hidden="true"></i>
              </div>
              <div>
                <strong class="text-base font-bold text-surface-dark0 block mb-1">E-commerce page</strong>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  supports product evaluation, purchase details and a dependable checkout path.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial guidance paragraphs */}
          <div class="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed pt-4 border-t border-surface-2">
            <p>
              A redesign is not always the first answer. If the structure works, a focused copy, usability or integration fix may be the better project.
            </p>
            <p class="font-medium text-surface-dark0">
              Agree what success means before selecting a testing approach. Low traffic may not support a reliable split test.
            </p>
          </div>
        </div>
      </section>

      {/* ── S07: WHY PRODUCE WITH BELL BEE (TINT BUNDLE) ── */}
      <section class="bg-surface-1 py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div class="w-full">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20 mb-4">
              <i class="ph-fill ph-handshake"></i> Connected Growth Services
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-6">
              Why connect your web project with Bell Bee?
            </h2>

            <div class="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
              <p>
                The page should not feel like a different company from the campaign. Bell Bee offers web solutions, creative production, design, copy and paid media within the same agency.
              </p>
              <p>
                That breadth helps connect the visitor’s first impression to the information and action on the page. It does not make every integration automatic or every test conclusive.
              </p>
              <p>
                Bring a page that feels confusing, an offer that needs a destination or a business site that no longer matches the company.
              </p>
            </div>

            <div>
              <a
                href={routes.getProposal.href()}
                class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-primary/25 hover:bg-[#0e2c50] active:bg-[#051120] hover:-translate-y-0.5 transition-all bb-focus-light"
                style="min-height: 48px; min-width: 44px;"
              >
                <span>Discuss your website project</span>
                <i class="ph-bold ph-arrow-right text-lg" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── S08: FAQS (LIGHT BUNDLE) ── */}
      <section class="bg-white py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div class="text-center max-w-2xl mx-auto mb-14">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20 mb-4">
              <i class="ph-fill ph-question"></i> Project Clarity & Feasibility
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-4">
              Questions before the build
            </h2>
            <p class="text-base text-text-secondary">
              Pragmatic answers on web platforms, conversion expectations, pricing and technical scope.
            </p>
          </div>

          <div class="space-y-4">
            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Do we need a new website or a landing page?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Use a website for broader discovery. Use a focused page when a campaign needs its own message and action. Review the existing journey before deciding.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Can you improve our current site?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Discuss the existing platform and problem first. A targeted improvement may be more useful than a full rebuild.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Will the site rank on Google?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Technical search foundations help search engines access and understand pages. They do not guarantee rankings or traffic.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Can the page connect to our CRM?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Confirm the system, permissions, data handling and failure behavior before including an integration. A visible form is not proof of delivery.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Do you guarantee a conversion increase?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>No. Traffic quality, the offer and measurement affect results. Establish a baseline and test changes where the evidence allows.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>What affects the price?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Page scope, design needs, platform constraints and integrations affect the project. Request a written proposal rather than assuming a package fits.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── S09: CLOSING (DARK BUNDLE) ── */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] text-white py-20 md:py-28 overflow-hidden text-center">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
          <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Give the visitor a clearer next step
          </h2>

          <p class="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Tell us where people arrive, what they need to understand and what should happen next. We can discuss the right page scope before you commit to a rebuild.
          </p>

          <div class="mb-8">
            <a
              href={routes.getProposal.href()}
              class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-primary font-black text-base rounded-2xl shadow-2xl hover:bg-surface-1 hover:shadow-black/40 hover:-translate-y-0.5 active:bg-white active:text-[#0e2c50] transition-all bb-focus-dark"
              style="min-height: 48px; min-width: 44px;"
            >
              <span>Discuss your website project</span>
              <i class="ph-bold ph-arrow-right text-lg" aria-hidden="true"></i>
            </a>
          </div>

          <p class="text-sm sm:text-base text-white/80 mb-3">
            Prefer email?{' '}
            <a
              href="mailto:hello@bellbeemedia.com"
              class="text-white underline font-bold hover:text-secondary-light transition-colors bb-focus-dark"
              style="overflow-wrap: anywhere;"
            >
              hello@bellbeemedia.com
            </a>
          </p>

          <p class="text-sm text-white/70">
            Explore{' '}
            <a
              href={routes.servicesDesignCopy.href()}
              class="text-white underline font-semibold hover:text-white transition-colors bb-focus-dark"
            >
              design and copywriting
            </a>{' '}
            or{' '}
            <a
              href={routes.servicesPerformanceAds.href()}
              class="text-white underline font-semibold hover:text-white transition-colors bb-focus-dark"
            >
              performance advertising
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── CLIENT-SIDE TAB SWITCHER SCRIPT ── */}
      <script>
        {`
          (function() {
            function selectTab(tabName) {
              var tabs = ['match', 'question', 'enquiry'];
              tabs.forEach(function(t) {
                var btn = document.getElementById('bb-tab-' + t);
                var panel = document.getElementById('bb-panel-' + t);
                if (!btn || !panel) return;
                if (t === tabName) {
                  btn.setAttribute('aria-selected', 'true');
                  btn.setAttribute('aria-pressed', 'true');
                  btn.style.backgroundColor = '#154476';
                  btn.style.color = '#ffffff';
                  btn.classList.add('shadow-sm');
                  panel.classList.remove('hidden');
                } else {
                  btn.setAttribute('aria-selected', 'false');
                  btn.setAttribute('aria-pressed', 'false');
                  btn.style.backgroundColor = 'transparent';
                  btn.style.color = '#475569';
                  btn.classList.remove('shadow-sm');
                  panel.classList.add('hidden');
                }
              });
            }

            document.querySelectorAll('.bb-demo-tab').forEach(function(tabBtn) {
              tabBtn.addEventListener('click', function() {
                var target = tabBtn.getAttribute('data-tab');
                if (target) selectTab(target);
              });
            });
          })();
        `}
      </script>
    </Layout>
  )
}

import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'
import { TestimonialsSection } from '../shared.tsx'

export function ProductionPage() {
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
        '@id': 'https://bellbeemedia.com/services/production#service',
        name: 'Video and Photo Production',
        provider: {
          '@id': 'https://bellbeemedia.com/#organization',
        },
        url: 'https://bellbeemedia.com/services/production',
        description:
          'Plan video and photography around the message, shot list and placement. Discuss brand films, social content and product production with Bell Bee Media.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bellbeemedia.com/services/production#breadcrumb',
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
            name: 'Video and Photo Production',
            item: 'https://bellbeemedia.com/services/production',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bellbeemedia.com/services/production#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can you use footage we already have?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Discuss an edit-led scope first. Footage quality, permissions and missing scenes determine what can be made.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do we need a big brand film?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not always. A clear product demonstration or focused social asset may suit the task better. Match the format to the message and placement.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are talent and music included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Agree sourcing, licensing, usage territory and duration in the proposal. Do not assume every third-party right is included.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many revisions are included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The written scope should define review rounds and what counts as a changed brief. This page does not promise unlimited revisions.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does production take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Scheduling depends on concept, locations, approvals and editing needs. Confirm a workable plan after the brief is understood.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does production guarantee better ad results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Creative is part of performance, alongside the offer, audience, media buying and destination. Plan assets that can be tested without promising an outcome.',
            },
          },
        ],
      },
    ],
  }

  return () => (
    <Layout
      title="Video and photo production | Bell Bee Media"
      description="Plan video and photography around the message, shot list and placement. Discuss brand films, social content and product production with Bell Bee Media."
      head={
        <>
          <link rel="canonical" href="https://bellbeemedia.com/services/production" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Bell Bee Media" />
          <meta property="og:url" content="https://bellbeemedia.com/services/production" />
          <meta property="og:title" content="Video and photo production | Bell Bee Media" />
          <meta
            property="og:description"
            content="Plan video and photography around the message, shot list and placement. Discuss brand films, social content and product production with Bell Bee Media."
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
            <span class="text-white font-semibold" aria-current="page">Video and Photo Production</span>
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
                  Creative Production Studio
                </span>
              </div>

              <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
                Video and photo production with a clear job to do
              </h1>

              <div class="space-y-4 text-white/85 text-base sm:text-lg leading-relaxed mb-8">
                <p>
                  The shoot looks good. Then the edit starts. The product detail is missing, the opening feels slow and the crop hides the thing you sell.
                </p>
                <p>
                  Bell Bee Media plans video and photography around the message and its destination. Connect the brief, shot list and edit before the camera rolls.
                </p>
              </div>

              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <a
                  href={routes.getProposal.href()}
                  class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-primary font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-black/25 hover:bg-surface-1 hover:shadow-2xl hover:-translate-y-0.5 active:bg-white active:text-[#0e2c50] transition-all bb-focus-dark"
                  style="min-height: 48px; min-width: 44px;"
                >
                  <span>Discuss your production brief</span>
                  <i class="ph-bold ph-arrow-right text-lg" aria-hidden="true"></i>
                </a>
              </div>

              <div class="flex items-center gap-2.5 text-sm text-white/75 font-medium pt-2">
                <i class="ph-fill ph-film-strip text-secondary text-lg" aria-hidden="true"></i>
                <span>Brand films, social content, product photography and explainers.</span>
              </div>
            </div>

            {/* Right Column: Studio Slate & Viewfinder */}
            <div class="w-full">
              <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                <div class="flex items-center justify-between pb-4 border-b border-white/15 mb-5 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span class="font-bold tracking-wider uppercase text-white">REC 4K UHD</span>
                  </div>
                  <span class="font-mono text-white/70">00:14:32:08</span>
                </div>

                <div class="relative bg-[#051120]/80 rounded-2xl p-6 aspect-video flex flex-col justify-between border border-white/10 overflow-hidden">
                  <div class="absolute inset-4 border border-dashed border-white/20 rounded-xl pointer-events-none"></div>
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-secondary/80 rounded-full flex items-center justify-center pointer-events-none">
                    <div class="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  </div>

                  <div class="flex justify-between items-start text-[11px] text-white/60 font-mono z-10">
                    <span>SHUTTER 1/120</span>
                    <span>ISO 800</span>
                  </div>

                  <div class="text-center z-10">
                    <span class="inline-block px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-xs font-semibold border border-white/15">
                      Subject Detail in Frame
                    </span>
                  </div>

                  <div class="flex justify-between items-end text-[11px] text-white/60 font-mono z-10">
                    <span>FPS 60</span>
                    <span>SAFE ZONE 9:16 OK</span>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-3 mt-5">
                  <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <span class="text-[11px] text-white/60 block">Strategy</span>
                    <strong class="text-xs text-white">Brief Connected</strong>
                  </div>
                  <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <span class="text-[11px] text-white/60 block">Delivery</span>
                    <strong class="text-xs text-secondary-light">Placement Ready</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* S01 Mechanism Rail (5 Nodes below Hero) */}
          <div class="mt-16 pt-12 border-t border-white/15">
            <div class="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h2 class="text-xs font-bold uppercase tracking-widest text-white/70">
                Connected Production Process
              </h2>
              <span class="text-xs text-white/50">From Brief to Multi-Format Export</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">01</span>
                  <i class="ph-bold ph-question text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Buyer question</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Settling what customers need to inspect or understand.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">02</span>
                  <i class="ph-bold ph-file-text text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Treatment</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Connecting intended use, audience and visible actions.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">03</span>
                  <i class="ph-bold ph-camera text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Essential shots</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Filming core product demonstration ahead of mood footage.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">04</span>
                  <i class="ph-bold ph-scissors text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Edit</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Sequence, on-screen text, pacing and sound design.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">05</span>
                  <i class="ph-bold ph-device-mobile text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Placement check</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Verifying framing and captions for target formats.</p>
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
              Pre-Production Strategy
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-5">
              The expensive mistake happens before the edit
            </h2>

            {/* Decorative orange rule: 4px wide/high */}
            <div
              aria-hidden="true"
              class="w-20 h-1.5 rounded-full mb-8 bg-secondary"
            ></div>

            <div class="space-y-6 text-text-secondary text-base sm:text-lg lg:text-xl leading-relaxed">
              <p class="text-surface-dark0 font-medium">
                A beautiful scene cannot replace a missing demonstration. More footage does not help if nobody filmed the buyer’s main question.
              </p>
              <p>
                The brief should settle what people need to see, not just how the film should feel. That gives the shoot direction and makes feedback more useful.
              </p>
            </div>

            <div class="mt-8 p-6 sm:p-8 rounded-3xl bg-surface-1 border-l-4 border-secondary shadow-sm">
              <p class="text-lg sm:text-xl font-bold text-surface-dark0 leading-snug">
                Decide the message first. Plan the evidence on screen. Then shape the visual style.
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
              <i class="ph-fill ph-compass"></i> Production Framework
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-6">
              Plan the shot around the buying question
            </h2>

            <div class="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
              <p class="text-surface-dark0 font-medium">
                Bell Bee connects creative strategy, scripting, production and editing. The goal is a usable asset with an understandable message.
              </p>
              <p>
                For a product, show the detail people need to inspect. For a service, make the process easy to follow. For a brand film, give the story a reason to matter to its audience.
              </p>
              <p>
                The same footage may support different placements, but each version still needs deliberate framing and pacing.
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
                    <i class="ph-bold ph-question" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Buyer question</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Identify what the customer needs to know or see before deciding.
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
                    <i class="ph-bold ph-notebook" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Treatment</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Script and storyboard connecting message to visible action.
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
                    <i class="ph-bold ph-video-camera" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Essential shots</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Capture product evidence and demonstration on shoot day.
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
                    <i class="ph-bold ph-scissors" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Edit</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Assemble sequence, pacing, on-screen lines and captions.
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
                    <i class="ph-bold ph-device-mobile" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Placement check</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Reframe and check vertical safe areas for final exports.
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
              <i class="ph-fill ph-package"></i> Concrete Deliverables
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-4">
              What lands beyond the shoot
            </h2>
            <p class="text-base sm:text-lg text-text-secondary">
              Production isn't just a camera day. It includes all strategic blueprints, edit roadmaps, and agreed delivery files.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-file-text" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Creative treatment</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  A creative treatment that explains the audience, message and intended use.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-xl shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-pencil-line" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Script & storyboard</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  A script or storyboard that connects words to visible actions.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-list-checks" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Shot list</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  A shot list that distinguishes essential product details from supporting scenes.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-sliders-horizontal" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Edit plan</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  An edit plan covering sequence, on-screen copy, captions and placement needs.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 md:col-span-2 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-package" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Final exports & handover</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Final exports and handover details defined in the agreed scope.
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-3xl p-6 sm:p-8 bg-surface-1 border border-surface-2 flex items-start gap-4 w-full">
            <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0 mt-0.5">
              <i class="ph-fill ph-shield-check" aria-hidden="true"></i>
            </div>
            <p class="text-sm sm:text-base text-surface-dark0 font-medium leading-relaxed">
              Agree locations, talent, usage rights, formats and revisions in writing. Music, stock and talent rights can differ from ownership of the finished edit.
            </p>
          </div>
        </div>
      </section>

      {/* ── S05: WALKTHROUGH DEMO (DEMO BUNDLE) ── */}
      <section class="bg-gradient-to-br from-[#f3f6f8] via-white to-[#fef7f4] py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div class="max-w-3xl mb-10">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20 mb-4">
              <i class="ph-fill ph-eye"></i> Production Walkthrough
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-4">
              Follow a product detail through the edit
            </h2>
            <p class="text-sm sm:text-base text-text-secondary leading-relaxed mb-3">
              Illustrative production walkthrough. This fictional bag concept uses drawn shapes, not client footage or a real product claim.
            </p>
            <p class="text-sm sm:text-base font-bold text-surface-dark0">
              Example brief: Show how a commuter finds a travel card without unpacking a bag.
            </p>
          </div>

          {/* Interactive tab selector */}
          <div class="mb-8">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Choose a view: Shot plan · Edit sequence · Placement check
            </p>
            
            <div
              role="tablist"
              aria-label="Walkthrough views"
              class="inline-flex p-1.5 bg-surface-2 rounded-2xl flex-wrap gap-1.5 shadow-inner"
            >
              <button
                type="button"
                role="tab"
                id="bb-tab-shot"
                data-tab="shot"
                aria-selected="true"
                aria-pressed="true"
                aria-controls="bb-panel-shot"
                class="bb-demo-tab inline-flex items-center justify-center font-bold text-sm rounded-xl px-5 py-3 transition-all bb-focus-light shadow-sm"
                style="background-color: #154476; color: #ffffff;"
              >
                <i class="ph-bold ph-camera mr-2"></i> Shot plan
              </button>

              <button
                type="button"
                role="tab"
                id="bb-tab-edit"
                data-tab="edit"
                aria-selected="false"
                aria-pressed="false"
                aria-controls="bb-panel-edit"
                class="bb-demo-tab inline-flex items-center justify-center font-bold text-sm rounded-xl px-5 py-3 transition-all bb-focus-light hover:text-primary"
                style="background-color: transparent; color: #475569;"
              >
                <i class="ph-bold ph-film-strip mr-2"></i> Edit sequence
              </button>

              <button
                type="button"
                role="tab"
                id="bb-tab-placement"
                data-tab="placement"
                aria-selected="false"
                aria-pressed="false"
                aria-controls="bb-panel-placement"
                class="bb-demo-tab inline-flex items-center justify-center font-bold text-sm rounded-xl px-5 py-3 transition-all bb-focus-light hover:text-primary"
                style="background-color: transparent; color: #475569;"
              >
                <i class="ph-bold ph-device-mobile mr-2"></i> Placement check
              </button>
            </div>
          </div>

          {/* ── PANEL 1: SHOT PLAN ── */}
          <div
            id="bb-panel-shot"
            role="tabpanel"
            aria-labelledby="bb-tab-shot"
            class="bb-demo-panel bg-white rounded-3xl p-6 sm:p-10 border border-surface-2 shadow-xl w-full"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div class="w-full space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20">
                  <span class="w-2 h-2 rounded-full bg-primary"></span>
                  Status: Concept for review.
                </div>

                <h3 class="font-heading text-2xl sm:text-3xl font-black text-surface-dark0">
                  Shot plan
                </h3>

                <div class="space-y-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Input</strong>
                    <span class="text-surface-dark0 font-medium">The viewer needs to understand where the travel card sits.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Output</strong>
                    <span class="text-surface-dark0 font-medium">Outline of a bag, highlighted outer pocket and hand reaching toward it.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-secondary/5 border border-secondary/20">
                    <strong class="text-secondary block text-xs uppercase tracking-wider mb-1">On-screen line</strong>
                    <span class="text-surface-dark0 font-bold">“Keep the travel card within reach.”</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Caption</strong>
                    <span class="text-text-secondary">Film the detail that answers the question.</span>
                  </div>
                </div>
              </div>

              {/* Drawing: Bag with outer pocket & reaching hand */}
              <div class="w-full">
                <div class="bg-surface-1 rounded-2xl p-6 border border-surface-2 shadow-inner max-w-md mx-auto">
                  <div class="flex items-center justify-between text-xs text-text-secondary font-mono pb-3 border-b border-surface-2 mb-4">
                    <span>FRAME 01 · CLOSE-UP</span>
                    <span>FOCUS: POCKET ACCESS</span>
                  </div>
                  <svg
                    viewBox="0 0 400 260"
                    preserveAspectRatio="xMidYMid meet"
                    class="w-full h-auto"
                    aria-label="Shot plan schematic: Commuter bag with highlighted outer pocket and hand reaching"
                    role="img"
                  >
                    <rect x="70" y="55" width="260" height="175" rx="24" fill="#ffffff" stroke="#154476" stroke-width="3" />
                    <path d="M 140 55 Q 200 10 260 55" fill="none" stroke="#154476" stroke-width="4" stroke-linecap="round" />
                    <line x1="95" y1="78" x2="305" y2="78" stroke="#154476" stroke-width="2.5" stroke-dasharray="5 4" />
                    <rect x="110" y="105" width="180" height="100" rx="14" fill="#ffffff" stroke="#0f172a" stroke-width="2.5" />
                    <rect x="115" y="110" width="170" height="90" rx="10" fill="#e56026" fill-opacity="0.18" stroke="#e56026" stroke-width="2" />
                    <rect x="155" y="90" width="90" height="55" rx="6" fill="#ffffff" stroke="#154476" stroke-width="2.5" />
                    <line x1="168" y1="102" x2="225" y2="102" stroke="#154476" stroke-width="2" />
                    <line x1="168" y1="112" x2="205" y2="112" stroke="#154476" stroke-width="2" />
                    <path d="M 290 155 C 260 150 230 125 215 115" fill="none" stroke="#154476" stroke-width="3.5" stroke-linecap="round" />
                    <polygon points="215,115 224,128 232,118" fill="#154476" />
                    <rect x="115" y="218" width="170" height="24" rx="6" fill="#0f172a" />
                    <text x="200" y="234" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">
                      Outer Pocket Detail
                    </text>
                  </svg>
                  <p class="text-xs text-center text-text-secondary mt-3 font-medium">
                    Schematic view: Core product detail highlighted for review.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── PANEL 2: EDIT SEQUENCE ── */}
          <div
            id="bb-panel-edit"
            role="tabpanel"
            aria-labelledby="bb-tab-edit"
            class="bb-demo-panel bg-white rounded-3xl p-6 sm:p-10 border border-surface-2 shadow-xl w-full hidden"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div class="w-full space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20">
                  <span class="w-2 h-2 rounded-full bg-secondary"></span>
                  Status: Illustrative storyboard.
                </div>

                <h3 class="font-heading text-2xl sm:text-3xl font-black text-surface-dark0">
                  Edit sequence
                </h3>

                <div class="space-y-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Input</strong>
                    <span class="text-surface-dark0 font-medium">The pocket detail needs context.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Output</strong>
                    <span class="text-surface-dark0 font-medium">Arrive at station → Reach outer pocket → Remove card → Return card.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-secondary/5 border border-secondary/20">
                    <strong class="text-secondary block text-xs uppercase tracking-wider mb-1">On-screen line</strong>
                    <span class="text-surface-dark0 font-bold">“See the pocket in use.”</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Caption</strong>
                    <span class="text-text-secondary">A visible action makes the message easier to follow.</span>
                  </div>
                </div>
              </div>

              {/* Drawing: 4-frame storyboard */}
              <div class="w-full">
                <div class="bg-surface-1 rounded-2xl p-6 border border-surface-2 shadow-inner max-w-md mx-auto">
                  <div class="flex items-center justify-between text-xs text-text-secondary font-mono pb-3 border-b border-surface-2 mb-4">
                    <span>TIMELINE · 4 KEY MOMENTS</span>
                    <span>ACTION CADENCE</span>
                  </div>
                  <svg
                    viewBox="0 0 400 240"
                    preserveAspectRatio="xMidYMid meet"
                    class="w-full h-auto"
                    aria-label="Edit sequence storyboard: 4 steps from station arrival to card return"
                    role="img"
                  >
                    <g transform="translate(10, 20)">
                      <rect x="0" y="0" width="82" height="150" rx="10" fill="#ffffff" stroke="#154476" stroke-width="2.5" />
                      <line x1="12" y1="40" x2="70" y2="40" stroke="#154476" stroke-width="2" />
                      <circle cx="41" cy="70" r="14" fill="#ffffff" stroke="#154476" stroke-width="2" />
                      <path d="M 41 84 L 41 120 M 26 100 L 56 100" stroke="#154476" stroke-width="2.5" />
                      <text x="41" y="178" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">
                        1. Arrive
                      </text>
                    </g>

                    <path d="M 98 95 L 106 95" stroke="#154476" stroke-width="2.5" />

                    <g transform="translate(112, 20)">
                      <rect x="0" y="0" width="82" height="150" rx="10" fill="#ffffff" stroke="#154476" stroke-width="2.5" />
                      <rect x="16" y="50" width="50" height="70" rx="6" fill="#ffffff" stroke="#154476" stroke-width="2" />
                      <rect x="24" y="68" width="34" height="34" rx="4" fill="#e56026" fill-opacity="0.25" stroke="#e56026" stroke-width="2" />
                      <path d="M 68 88 L 44 82" stroke="#154476" stroke-width="2.5" stroke-linecap="round" />
                      <text x="41" y="178" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">
                        2. Reach
                      </text>
                    </g>

                    <path d="M 200 95 L 208 95" stroke="#154476" stroke-width="2.5" />

                    <g transform="translate(214, 20)">
                      <rect x="0" y="0" width="82" height="150" rx="10" fill="#ffffff" stroke="#154476" stroke-width="2.5" />
                      <rect x="24" y="60" width="34" height="24" rx="4" fill="#ffffff" stroke="#154476" stroke-width="2" />
                      <circle cx="41" cy="50" r="8" fill="#154476" />
                      <path d="M 41 72 L 41 100" stroke="#154476" stroke-width="2.5" stroke-dasharray="3 3" />
                      <text x="41" y="178" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">
                        3. Remove
                      </text>
                    </g>

                    <path d="M 302 95 L 310 95" stroke="#154476" stroke-width="2.5" />

                    <g transform="translate(316, 20)">
                      <rect x="0" y="0" width="82" height="150" rx="10" fill="#ffffff" stroke="#154476" stroke-width="2.5" />
                      <rect x="16" y="50" width="50" height="70" rx="6" fill="#ffffff" stroke="#154476" stroke-width="2" />
                      <rect x="24" y="70" width="34" height="22" rx="4" fill="#ffffff" stroke="#154476" stroke-width="2" />
                      <path d="M 41 50 L 41 70" stroke="#154476" stroke-width="2.5" />
                      <polyline points="35,65 41,71 47,65" fill="none" stroke="#154476" stroke-width="2.5" />
                      <text x="41" y="178" font-family="Inter, sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">
                        4. Return
                      </text>
                    </g>
                  </svg>
                  <p class="text-xs text-center text-text-secondary mt-3 font-medium">
                    Continuous storyboard connecting intent to outcome.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── PANEL 3: PLACEMENT CHECK ── */}
          <div
            id="bb-panel-placement"
            role="tabpanel"
            aria-labelledby="bb-tab-placement"
            class="bb-demo-panel bg-white rounded-3xl p-6 sm:p-10 border border-surface-2 shadow-xl w-full hidden"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div class="w-full space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Status: Layout check only.
                </div>

                <h3 class="font-heading text-2xl sm:text-3xl font-black text-surface-dark0">
                  Placement check
                </h3>

                <div class="space-y-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Input</strong>
                    <span class="text-surface-dark0 font-medium">The frame becomes a vertical social placement.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Output</strong>
                    <span class="text-surface-dark0 font-medium">The pocket remains centered; captions sit clear of the product action.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-secondary/5 border border-secondary/20">
                    <strong class="text-secondary block text-xs uppercase tracking-wider mb-1">On-screen line</strong>
                    <span class="text-surface-dark0 font-bold">“Keep the product detail visible.”</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Caption</strong>
                    <span class="text-text-secondary">Reframe the shot instead of simply cutting off the sides.</span>
                  </div>
                </div>
              </div>

              {/* Drawing: Vertical 9:16 safe area with centered pocket */}
              <div class="w-full flex justify-center">
                <div class="bg-surface-1 rounded-2xl p-6 border border-surface-2 shadow-inner w-full max-w-sm flex flex-col items-center">
                  <div class="w-full flex items-center justify-between text-xs text-text-secondary font-mono pb-3 border-b border-surface-2 mb-4">
                    <span>ASPECT RATIO 9:16</span>
                    <span>SAFE MARGIN AUDIT</span>
                  </div>

                  <svg
                    viewBox="0 0 240 320"
                    preserveAspectRatio="xMidYMid meet"
                    class="w-52 sm:w-60 h-auto"
                    aria-label="Placement check: Vertical social format safe-area inspection"
                    role="img"
                  >
                    <rect x="20" y="10" width="200" height="300" rx="24" fill="#ffffff" stroke="#154476" stroke-width="3" />
                    <rect x="35" y="30" width="170" height="260" rx="10" fill="none" stroke="#154476" stroke-width="1.5" stroke-dasharray="4 4" />
                    <rect x="40" y="36" width="60" height="8" rx="4" fill="#f8fafc" stroke="#475569" stroke-width="1" />
                    <rect x="55" y="105" width="130" height="95" rx="12" fill="#ffffff" stroke="#154476" stroke-width="2.5" />
                    <rect x="68" y="120" width="104" height="65" rx="8" fill="#e56026" fill-opacity="0.2" stroke="#e56026" stroke-width="2" />
                    <circle cx="120" cy="152" r="9" fill="#154476" />
                    <rect x="42" y="222" width="156" height="30" rx="6" fill="#0f172a" />
                    <text x="120" y="241" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">
                      Keep the product detail visible.
                    </text>
                    <text x="120" y="280" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#10b981" text-anchor="middle">
                      ✓ Safe area clear of overlays
                    </text>
                  </svg>
                  <p class="text-xs text-center text-text-secondary mt-3 font-medium">
                    Vertical safe-margin alignment for mobile feeds.
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
              This example does not play client footage, generate video or publish an asset.
            </p>
          </div>
        </div>
      </section>

      {/* ── S06: PROCESS COMPARISON (LIGHT BUNDLE) ── */}
      <section class="bg-white py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div class="max-w-3xl mb-12">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20 mb-4">
              <i class="ph-fill ph-scales"></i> Approach Comparison
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-3">
              A shoot list is more useful than a mood alone
            </h2>
            <p class="text-base sm:text-lg text-text-secondary">
              Process comparison, not a before-and-after result.
            </p>
          </div>

          <div class="space-y-6">
            {/* Pair 1: Brief */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div class="rounded-3xl p-7 bg-surface-1 border border-surface-2 w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-text-secondary">Style-only brief</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-medium">
                  “Make the bag feel premium.”
                </div>
              </div>

              <div class="rounded-3xl p-7 bg-primary/5 border border-primary/20 shadow-sm w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-primary font-bold">Message-led brief</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-bold">
                  show the pocket, opening and scale in a believable use scene.
                </div>
              </div>
            </div>

            {/* Pair 2: Review */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div class="rounded-3xl p-7 bg-surface-1 border border-surface-2 w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-text-secondary">Style-only review</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-medium">
                  “Something feels off.”
                </div>
              </div>

              <div class="rounded-3xl p-7 bg-primary/5 border border-primary/20 shadow-sm w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-primary font-bold">Message-led review</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-bold">
                  the opening delays the product detail; move that action earlier.
                </div>
              </div>
            </div>

            {/* Pair 3: Delivery */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div class="rounded-3xl p-7 bg-surface-1 border border-surface-2 w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-text-secondary">Export-only delivery</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-medium">
                  one edit gets cropped everywhere.
                </div>
              </div>

              <div class="rounded-3xl p-7 bg-primary/5 border border-primary/20 shadow-sm w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-primary font-bold">Placement-led delivery</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-bold">
                  composition and text are checked for the agreed destinations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S07: WHY PRODUCE WITH BELL BEE (TINT BUNDLE) ── */}
      <section class="bg-surface-1 py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div class="w-full">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20 mb-4">
              <i class="ph-fill ph-handshake"></i> Full-Funnel Integration
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-6">
              Why produce with Bell Bee?
            </h2>

            <div class="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Content has to work after the shoot. Bell Bee combines production with social media, paid media and design services. The intended use can shape the creative brief from the start.
              </p>
              <p>
                The agency advertises scripts, shoots and edits in-house. Use one connected brief rather than passing the message between disconnected suppliers.
              </p>
              <p>
                This service fits a business that needs new footage, photography or an explainer. If existing assets are usable, discuss an editing scope before commissioning another shoot.
              </p>
            </div>

            <div>
              <a
                href={routes.getProposal.href()}
                class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-primary/25 hover:bg-[#0e2c50] active:bg-[#051120] hover:-translate-y-0.5 transition-all bb-focus-light"
                style="min-height: 48px; min-width: 44px;"
              >
                <span>Discuss your production brief</span>
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
              <i class="ph-fill ph-question"></i> Production Clarity
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-4">
              Questions before production starts
            </h2>
            <p class="text-base text-text-secondary">
              Everything you need to know about briefing, rights, turnarounds and deliverables.
            </p>
          </div>

          <div class="space-y-4">
            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Can you use footage we already have?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Discuss an edit-led scope first. Footage quality, permissions and missing scenes determine what can be made.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Do we need a big brand film?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Not always. A clear product demonstration or focused social asset may suit the task better. Match the format to the message and placement.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Are talent and music included?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Agree sourcing, licensing, usage territory and duration in the proposal. Do not assume every third-party right is included.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>How many revisions are included?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>The written scope should define review rounds and what counts as a changed brief. This page does not promise unlimited revisions.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>How long does production take?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Scheduling depends on concept, locations, approvals and editing needs. Confirm a workable plan after the brief is understood.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Does production guarantee better ad results?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>No. Creative is part of performance, alongside the offer, audience, media buying and destination. Plan assets that can be tested without promising an outcome.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <TestimonialsSection />

      {/* ── S09: CLOSING (DARK BUNDLE) ── */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] text-white py-20 md:py-28 overflow-hidden text-center">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
          <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Make the next shoot easier to use
          </h2>

          <p class="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Tell us what people need to understand and where the asset will appear. Start with the message, then build the production around it.
          </p>

          <div class="mb-8">
            <a
              href={routes.getProposal.href()}
              class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-primary font-black text-base rounded-2xl shadow-2xl hover:bg-surface-1 hover:shadow-black/40 hover:-translate-y-0.5 active:bg-white active:text-[#0e2c50] transition-all bb-focus-dark"
              style="min-height: 48px; min-width: 44px;"
            >
              <span>Discuss your production brief</span>
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
              href={routes.servicesSocialMedia.href()}
              class="text-white underline font-semibold hover:text-white transition-colors bb-focus-dark"
            >
              social media management
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
              var tabs = ['shot', 'edit', 'placement'];
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

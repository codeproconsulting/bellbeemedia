import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'

export function SocialMediaPage() {
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
        '@id': 'https://bellbeemedia.com/services/social-media#service',
        name: 'Social Media Management',
        provider: {
          '@id': 'https://bellbeemedia.com/#organization',
        },
        url: 'https://bellbeemedia.com/services/social-media',
        description:
          'Bring social content, creative and community management into one clear plan. Discuss your channels, approval flow and reporting with Bell Bee Media.',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://bellbeemedia.com/services/social-media#breadcrumb',
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
            name: 'Social Media Management',
            item: 'https://bellbeemedia.com/services/social-media',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bellbeemedia.com/services/social-media#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is this the same as running social ads?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. This service centers on organic content and community management. Paid campaigns need their own budget, tracking and scope.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you work with our existing brand voice?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Start with your current positioning and language. Agree changes before they become public.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will you answer every message?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Define coverage and approval boundaries in the proposal. Refunds, complaints and sensitive information need an agreed escalation route.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do we judge progress without chasing followers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Review relevant reach, content responses and useful conversations. Connect enquiries to business records where measurement and consent allow. Followers alone do not establish sales.',
            },
          },
          {
            '@type': 'Question',
            name: 'What will it cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cost depends on channels, content formats and community coverage. Request a proposal with the scope written out.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you guarantee growth?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Platform changes, audience response and the offer affect performance. Agree the work and measurement plan rather than a guaranteed result.',
            },
          },
        ],
      },
    ],
  }

  return () => (
    <Layout
      title="Social media management | Bell Bee Media"
      description="Bring social content, creative and community management into one clear plan. Discuss your channels, approval flow and reporting with Bell Bee Media."
      head={
        <>
          <link rel="canonical" href="https://bellbeemedia.com/services/social-media" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Bell Bee Media" />
          <meta property="og:url" content="https://bellbeemedia.com/services/social-media" />
          <meta property="og:title" content="Social media management | Bell Bee Media" />
          <meta
            property="og:description"
            content="Bring social content, creative and community management into one clear plan. Discuss your channels, approval flow and reporting with Bell Bee Media."
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
            <span class="text-white font-semibold" aria-current="page">Social Media Management</span>
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
                  Organic Social Strategy
                </span>
              </div>

              <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
                Social media management that keeps your brand worth following
              </h1>

              <div class="space-y-4 text-white/85 text-base sm:text-lg leading-relaxed mb-8">
                <p>
                  Your next post is waiting for approval. Yesterday’s product question is still unanswered. Meanwhile, your team is trying to run the business.
                </p>
                <p>
                  Bell Bee Media brings content planning, creative and community management into one service. Give people useful reasons to notice your brand, understand the offer and start a conversation.
                </p>
              </div>

              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <a
                  href={routes.getProposal.href()}
                  class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-primary font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-black/25 hover:bg-surface-1 hover:shadow-2xl hover:-translate-y-0.5 active:bg-white active:text-[#0e2c50] transition-all bb-focus-dark"
                  style="min-height: 48px; min-width: 44px;"
                >
                  <span>Plan your social media</span>
                  <i class="ph-bold ph-arrow-right text-lg" aria-hidden="true"></i>
                </a>
              </div>

              <div class="flex items-center gap-2.5 text-sm text-white/75 font-medium pt-2">
                <i class="ph-fill ph-chat-circle-dots text-secondary text-lg" aria-hidden="true"></i>
                <span>Content, conversations and reporting with a clear purpose.</span>
              </div>
            </div>

            {/* Right Column: Community & Feed Hub Graphic */}
            <div class="w-full">
              <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                <div class="flex items-center justify-between pb-4 border-b border-white/15 mb-5 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span class="font-bold tracking-wider uppercase text-white">Community Active</span>
                  </div>
                  <span class="font-mono text-white/70">Planned & Verified</span>
                </div>

                {/* Simulated Content Card */}
                <div class="bg-[#051120]/80 rounded-2xl p-5 border border-white/10 space-y-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold border border-white/20">
                      BB
                    </div>
                    <div>
                      <div class="text-xs font-bold text-white">Brand Social Channel</div>
                      <div class="text-[11px] text-white/60">Scheduled via Master Calendar</div>
                    </div>
                    <span class="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      Approved
                    </span>
                  </div>

                  <p class="text-xs text-white/90 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                    “Here is exactly how to verify laptop dimensions against the outer pocket before your daily commute.”
                  </p>

                  <div class="flex items-center justify-between text-[11px] text-white/60 pt-2 border-t border-white/10">
                    <span class="flex items-center gap-1.5"><i class="ph-fill ph-chat-dots text-secondary"></i> Routine reply routed</span>
                    <span class="flex items-center gap-1.5"><i class="ph-fill ph-shield-check text-emerald-400"></i> Escalate order requests</span>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-3 mt-5">
                  <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <span class="text-[11px] text-white/60 block">Publishing</span>
                    <strong class="text-xs text-white">Draft to Review</strong>
                  </div>
                  <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <span class="text-[11px] text-white/60 block">Engagement</span>
                    <strong class="text-xs text-secondary-light">Clear Reply Owner</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* S01 Mechanism Rail (5 Nodes below Hero: Topic → Draft → Brand review → Publish → Conversation review) */}
          <div class="mt-16 pt-12 border-t border-white/15">
            <div class="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h2 class="text-xs font-bold uppercase tracking-widest text-white/70">
                Connected Publishing Mechanism
              </h2>
              <span class="text-xs text-white/50">Topic to Conversation Review</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">01</span>
                  <i class="ph-bold ph-lightbulb text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Topic</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Audience questions and core themes selected for each channel.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">02</span>
                  <i class="ph-bold ph-pencil-simple text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Draft</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Captions, creative assets and format shaped for destination.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">03</span>
                  <i class="ph-bold ph-check-square-offset text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Brand review</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Structured approval rounds before any post goes public.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">04</span>
                  <i class="ph-bold ph-paper-plane-tilt text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Publish</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Scheduled and published across confirmed channels.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider text-secondary-light">05</span>
                  <i class="ph-bold ph-chats text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Conversation review</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Reviewing comments, routine answers and buyer feedback.</p>
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
              Audience Understanding
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-5">
              A busy feed can still leave buyers confused
            </h2>

            {/* Decorative orange rule: 4px wide/high */}
            <div
              aria-hidden="true"
              class="w-20 h-1.5 rounded-full mb-8 bg-secondary"
            ></div>

            <div class="space-y-6 text-text-secondary text-base sm:text-lg lg:text-xl leading-relaxed">
              <p class="text-surface-dark0 font-medium">
                Posting regularly does not tell people why they should choose you. A polished graphic cannot answer a delivery question sitting in your inbox.
              </p>
              <p>
                When every post starts from scratch, approvals consume the time meant for customers. The feed fills up, but the same questions keep coming back.
              </p>
            </div>

            <div class="mt-8 p-6 sm:p-8 rounded-3xl bg-surface-1 border-l-4 border-secondary shadow-sm">
              <p class="text-lg sm:text-xl font-bold text-surface-dark0 leading-snug">
                Build a content plan around what people need before they buy. Then give replies a clear owner.
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
              <i class="ph-fill ph-target"></i> Content Architecture
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-6">
              Give each post a job
            </h2>

            <div class="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
              <p class="text-surface-dark0 font-medium">
                Some posts help people recognize a problem. Others explain a product, answer an objection or show how to use it.
              </p>
              <p>
                Bell Bee connects those jobs to your brand voice and content calendar. Creative production supports the plan instead of dictating it. Community management keeps the conversation connected after publication.
              </p>
              <p>
                Paid promotion is a separate decision. A useful organic plan should not depend on boosting every post.
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
                    <i class="ph-bold ph-lightbulb" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Topic</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Identify specific customer questions and relevant problem areas.
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
                    <i class="ph-bold ph-pencil-simple" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Draft</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Develop platform-native assets, captions and clear next steps.
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
                    <i class="ph-bold ph-check-square-offset" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Brand review</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Ensure messaging accuracy and tone alignment before release.
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
                    <i class="ph-bold ph-paper-plane-tilt" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Publish</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Distribute on schedule according to planned channel frequency.
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
                    <i class="ph-bold ph-chats" aria-hidden="true"></i>
                  </div>
                </div>
                <h3 class="font-bold text-base text-surface-dark0 mb-1.5">Conversation review</h3>
                <p class="text-xs text-text-secondary leading-relaxed">
                  Analyze feedback, reply efficiency, and topics for the next sprint.
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
              <i class="ph-fill ph-stack"></i> Comprehensive Scope
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-4">
              What the service brings together
            </h2>
            <p class="text-base sm:text-lg text-text-secondary">
              A complete, dependable operating framework designed to take daily social execution off your team’s shoulders.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-compass" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Content direction</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  audience questions, recurring themes and a clear role for each channel.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-xl shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-calendar-blank" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">A working calendar</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  draft topics, formats, captions and approval status in one view.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-paint-brush" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Creative content</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  social graphics, short-form ideas and captions shaped for the channel.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-chats-circle" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Community guidance</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  routine reply boundaries, escalation rules and a route for sensitive questions.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-3xl p-7 border border-surface-2 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 md:col-span-2 group w-full">
              <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <i class="ph-fill ph-chart-line-up" aria-hidden="true"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg text-surface-dark0 mb-1.5">Useful reporting</h3>
                <p class="text-sm sm:text-base text-text-secondary leading-relaxed">
                  what drew interest, what prompted conversations and what needs another approach.
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-3xl p-6 sm:p-8 bg-surface-1 border border-surface-2 flex items-start gap-4 w-full">
            <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0 mt-0.5">
              <i class="ph-fill ph-file-text" aria-hidden="true"></i>
            </div>
            <p class="text-sm sm:text-base text-surface-dark0 font-medium leading-relaxed">
              The proposal defines channels, publishing scope and responsibilities before work begins.
            </p>
          </div>
        </div>
      </section>

      {/* ── S05: WALKTHROUGH DEMO (DEMO BUNDLE) ── */}
      <section class="bg-gradient-to-br from-[#f3f6f8] via-white to-[#fef7f4] py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div class="max-w-3xl mb-10">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20 mb-4">
              <i class="ph-fill ph-eye"></i> Content & Community Walkthrough
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-4">
              See how a buying question becomes useful content
            </h2>
            <p class="text-sm sm:text-base text-text-secondary leading-relaxed mb-3">
              Illustrative walkthrough. This is a fictional product question, not a customer interaction or a live inbox.
            </p>
            <p class="text-sm sm:text-base font-bold text-surface-dark0">
              Example question: “Will this bag fit my laptop?”
            </p>
          </div>

          {/* Interactive tab selector */}
          <div class="mb-8">
            <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Choose a view: Content idea · Routine reply · Needs a person
            </p>
            
            <div
              role="tablist"
              aria-label="Walkthrough views"
              class="inline-flex p-1.5 bg-surface-2 rounded-2xl flex-wrap gap-1.5 shadow-inner"
            >
              <button
                type="button"
                role="tab"
                id="bb-tab-idea"
                data-tab="idea"
                aria-selected="true"
                aria-pressed="true"
                aria-controls="bb-panel-idea"
                class="bb-demo-tab inline-flex items-center justify-center font-bold text-sm rounded-xl px-5 py-3 transition-all bb-focus-light shadow-sm"
                style="background-color: #154476; color: #ffffff;"
              >
                <i class="ph-bold ph-file-text mr-2"></i> Content idea
              </button>

              <button
                type="button"
                role="tab"
                id="bb-tab-routine"
                data-tab="routine"
                aria-selected="false"
                aria-pressed="false"
                aria-controls="bb-panel-routine"
                class="bb-demo-tab inline-flex items-center justify-center font-bold text-sm rounded-xl px-5 py-3 transition-all bb-focus-light hover:text-primary"
                style="background-color: transparent; color: #475569;"
              >
                <i class="ph-bold ph-chat-circle-dots mr-2"></i> Routine reply
              </button>

              <button
                type="button"
                role="tab"
                id="bb-tab-escalate"
                data-tab="escalate"
                aria-selected="false"
                aria-pressed="false"
                aria-controls="bb-panel-escalate"
                class="bb-demo-tab inline-flex items-center justify-center font-bold text-sm rounded-xl px-5 py-3 transition-all bb-focus-light hover:text-primary"
                style="background-color: transparent; color: #475569;"
              >
                <i class="ph-bold ph-user-circle mr-2"></i> Needs a person
              </button>
            </div>
          </div>

          {/* ── PANEL 1: CONTENT IDEA ── */}
          <div
            id="bb-panel-idea"
            role="tabpanel"
            aria-labelledby="bb-tab-idea"
            class="bb-demo-panel bg-white rounded-3xl p-6 sm:p-10 border border-surface-2 shadow-xl w-full"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div class="w-full space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20">
                  <span class="w-2 h-2 rounded-full bg-primary"></span>
                  Status: Ready for brand review.
                </div>

                <h3 class="font-heading text-2xl sm:text-3xl font-black text-surface-dark0">
                  Content idea
                </h3>

                <div class="space-y-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Input</strong>
                    <span class="text-surface-dark0 font-medium">A repeated question about laptop fit.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Output</strong>
                    <span class="text-surface-dark0 font-medium">A short demonstration showing how to check a device against the bag’s published dimensions.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-secondary/5 border border-secondary/20">
                    <strong class="text-secondary block text-xs uppercase tracking-wider mb-1">Caption</strong>
                    <span class="text-surface-dark0 font-bold">“Check your laptop’s measurements before choosing a bag.”</span>
                  </div>
                </div>
              </div>

              {/* Drawing: Document with bag outline & dimension ruler */}
              <div class="w-full">
                <div class="bg-surface-1 rounded-2xl p-6 border border-surface-2 shadow-inner max-w-md mx-auto">
                  <div class="flex items-center justify-between text-xs text-text-secondary font-mono pb-3 border-b border-surface-2 mb-4">
                    <span>CREATIVE BRIEF CARD</span>
                    <span>FIT CHECK REEL</span>
                  </div>
                  <svg
                    viewBox="0 0 360 240"
                    preserveAspectRatio="xMidYMid meet"
                    class="w-full h-auto"
                    aria-label="Content idea drawing: Bag dimension verification sheet"
                    role="img"
                  >
                    <rect x="40" y="20" width="280" height="200" rx="16" fill="#ffffff" stroke="#154476" stroke-width="2.5" />
                    {/* Header bar */}
                    <rect x="60" y="40" width="140" height="12" rx="4" fill="#154476" />
                    <line x1="60" y1="65" x2="300" y2="65" stroke="#e2e8f0" stroke-width="1.5" />
                    {/* Bag outline */}
                    <rect x="75" y="85" width="130" height="90" rx="10" fill="#f8fafc" stroke="#154476" stroke-width="2" />
                    <path d="M 115 85 Q 140 60 165 85" fill="none" stroke="#154476" stroke-width="2.5" />
                    <rect x="95" y="115" width="90" height="50" rx="4" fill="#ffffff" stroke="#e56026" stroke-width="1.5" stroke-dasharray="3 3" />
                    {/* Laptop measuring guide */}
                    <rect x="225" y="85" width="75" height="50" rx="4" fill="#ffffff" stroke="#154476" stroke-width="2" />
                    <text x="262" y="115" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">
                      15.6" Fit
                    </text>
                    {/* Measurement arrows */}
                    <line x1="225" y1="145" x2="300" y2="145" stroke="#154476" stroke-width="2" marker-end="url(#arrow)" />
                    <text x="262" y="160" font-family="Inter, sans-serif" font-size="9" fill="#475569" text-anchor="middle">
                      38 x 26 cm
                    </text>
                    <rect x="60" y="190" width="240" height="16" rx="4" fill="#f1f5f9" />
                    <text x="180" y="202" font-family="Inter, sans-serif" font-size="8" font-weight="bold" fill="#154476" text-anchor="middle">
                      Demo Asset: Dimension Check Reel
                    </text>
                  </svg>
                  <p class="text-xs text-center text-text-secondary mt-3 font-medium">
                    Content designed around verified customer buying criteria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── PANEL 2: ROUTINE REPLY ── */}
          <div
            id="bb-panel-routine"
            role="tabpanel"
            aria-labelledby="bb-tab-routine"
            class="bb-demo-panel bg-white rounded-3xl p-6 sm:p-10 border border-surface-2 shadow-xl w-full hidden"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div class="w-full space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20">
                  <span class="w-2 h-2 rounded-full bg-secondary"></span>
                  Status: Example reply only.
                </div>

                <h3 class="font-heading text-2xl sm:text-3xl font-black text-surface-dark0">
                  Routine reply
                </h3>

                <div class="space-y-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Input</strong>
                    <span class="text-surface-dark0 font-medium">A buyer asks where to find the size guide.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Output</strong>
                    <span class="text-surface-dark0 font-medium">“Please check the product size guide and compare it with your device measurements.”</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-secondary/5 border border-secondary/20">
                    <strong class="text-secondary block text-xs uppercase tracking-wider mb-1">Caption</strong>
                    <span class="text-text-secondary">A clear answer points to an approved source.</span>
                  </div>
                </div>
              </div>

              {/* Drawing: Two speech rectangles / dialogue */}
              <div class="w-full">
                <div class="bg-surface-1 rounded-2xl p-6 border border-surface-2 shadow-inner max-w-md mx-auto">
                  <div class="flex items-center justify-between text-xs text-text-secondary font-mono pb-3 border-b border-surface-2 mb-4">
                    <span>ROUTINE DIALOGUE</span>
                    <span>APPROVED PLAYBOOK</span>
                  </div>
                  <svg
                    viewBox="0 0 360 220"
                    preserveAspectRatio="xMidYMid meet"
                    class="w-full h-auto"
                    aria-label="Routine reply drawing: Customer question and brand approved reply"
                    role="img"
                  >
                    {/* User message */}
                    <g transform="translate(30, 25)">
                      <rect x="0" y="0" width="220" height="55" rx="12" fill="#ffffff" stroke="#154476" stroke-width="2" />
                      <text x="15" y="24" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#0f172a">
                        Customer Inquiry
                      </text>
                      <text x="15" y="42" font-family="Inter, sans-serif" font-size="9" fill="#475569">
                        Where can I find the size guide?
                      </text>
                    </g>

                    {/* Arrow down */}
                    <path d="M 180 88 L 180 110" stroke="#154476" stroke-width="2" stroke-dasharray="3 3" />

                    {/* Brand reply */}
                    <g transform="translate(90, 120)">
                      <rect x="0" y="0" width="240" height="70" rx="12" fill="#154476" />
                      <text x="15" y="24" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#ffffff">
                        Brand Approved Reply
                      </text>
                      <text x="15" y="42" font-family="Inter, sans-serif" font-size="8.5" fill="#f8fafc">
                        Please check the product size guide
                      </text>
                      <text x="15" y="56" font-family="Inter, sans-serif" font-size="8.5" fill="#f8fafc">
                        and compare device measurements.
                      </text>
                    </g>
                  </svg>
                  <p class="text-xs text-center text-text-secondary mt-3 font-medium">
                    Consistent replies grounded in official product documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── PANEL 3: NEEDS A PERSON ── */}
          <div
            id="bb-panel-escalate"
            role="tabpanel"
            aria-labelledby="bb-tab-escalate"
            class="bb-demo-panel bg-white rounded-3xl p-6 sm:p-10 border border-surface-2 shadow-xl w-full hidden"
          >
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div class="w-full space-y-5">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200">
                  <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                  Status: Escalate privately.
                </div>

                <h3 class="font-heading text-2xl sm:text-3xl font-black text-surface-dark0">
                  Needs a person
                </h3>

                <div class="space-y-3 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Input</strong>
                    <span class="text-surface-dark0 font-medium">A buyer requests a refund and includes an order number.</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-surface-1 border border-surface-2">
                    <strong class="text-primary block text-xs uppercase tracking-wider mb-1">Output</strong>
                    <span class="text-surface-dark0 font-medium">“Please use the brand’s private support channel for order help. Avoid posting personal details here.”</span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-secondary/5 border border-secondary/20">
                    <strong class="text-secondary block text-xs uppercase tracking-wider mb-1">Caption</strong>
                    <span class="text-text-secondary">Order issues belong with an authorized support person.</span>
                  </div>
                </div>
              </div>

              {/* Drawing: Locked envelope and human handoff routing arrow */}
              <div class="w-full flex justify-center">
                <div class="bg-surface-1 rounded-2xl p-6 border border-surface-2 shadow-inner w-full max-w-md flex flex-col items-center">
                  <div class="w-full flex items-center justify-between text-xs text-text-secondary font-mono pb-3 border-b border-surface-2 mb-4">
                    <span>PRIVACY & ESCALATION GATE</span>
                    <span>SECURE HANDOFF</span>
                  </div>

                  <svg
                    viewBox="0 0 360 220"
                    preserveAspectRatio="xMidYMid meet"
                    class="w-full h-auto"
                    aria-label="Escalation drawing: Sensitive request routed securely to authorized human"
                    role="img"
                  >
                    {/* Public comment box */}
                    <g transform="translate(20, 30)">
                      <rect x="0" y="0" width="140" height="70" rx="10" fill="#ffffff" stroke="#e56026" stroke-width="2" />
                      <text x="12" y="24" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#e56026">
                        Order #49281 Refund
                      </text>
                      <text x="12" y="42" font-family="Inter, sans-serif" font-size="8" fill="#475569">
                        Sensitive data posted
                      </text>
                      <text x="12" y="56" font-family="Inter, sans-serif" font-size="8" font-weight="bold" fill="#ef4444">
                        Do not handle in public
                      </text>
                    </g>

                    {/* Routing arrow */}
                    <path d="M 165 65 L 205 65" stroke="#154476" stroke-width="2.5" />
                    <polyline points="200,60 207,65 200,70" fill="none" stroke="#154476" stroke-width="2.5" />

                    {/* Private support channel */}
                    <g transform="translate(215, 20)">
                      <rect x="0" y="0" width="125" height="90" rx="12" fill="#154476" />
                      <circle cx="62" cy="38" r="14" fill="#ffffff" />
                      <path d="M 57 38 L 67 38 M 62 33 L 62 43" stroke="#154476" stroke-width="2" />
                      <text x="62" y="68" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">
                        Private Support
                      </text>
                      <text x="62" y="80" font-family="Inter, sans-serif" font-size="7.5" fill="#93c5fd" text-anchor="middle">
                        Authorized Agent
                      </text>
                    </g>

                    {/* Protocol note */}
                    <rect x="30" y="140" width="300" height="45" rx="8" fill="#ffffff" stroke="#154476" stroke-width="1.5" />
                    <text x="180" y="160" font-family="Inter, sans-serif" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">
                      Safety Protocol: Public data scrubbed
                    </text>
                    <text x="180" y="174" font-family="Inter, sans-serif" font-size="8" fill="#475569" text-anchor="middle">
                      Customer guided directly to ticket system
                    </text>
                  </svg>
                  <p class="text-xs text-center text-text-secondary mt-3 font-medium">
                    Strict boundary management protecting customer privacy.
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
              Nothing in this example posts content, sends replies or processes customer data.
            </p>
          </div>
        </div>
      </section>

      {/* ── S06: PROCESS COMPARISON (LIGHT BUNDLE) ── */}
      <section class="bg-white py-16 md:py-24 border-b border-surface-2">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div class="max-w-3xl mb-12">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-primary bg-primary/10 border border-primary/20 mb-4">
              <i class="ph-fill ph-scales"></i> Process Comparison
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-3">
              Replace last-minute posting with a shared plan
            </h2>
            <p class="text-base sm:text-lg text-text-secondary">
              Process comparison, not a promised client result.
            </p>
          </div>

          <div class="space-y-6">
            {/* Pair 1 */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div class="rounded-3xl p-7 bg-surface-1 border border-surface-2 w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-text-secondary">Reactive approach</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-medium">
                  the next post depends on who has time.
                </div>
              </div>

              <div class="rounded-3xl p-7 bg-primary/5 border border-primary/20 shadow-sm w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-primary font-bold">Connected approach</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-bold">
                  each topic has a purpose, draft and approval owner.
                </div>
              </div>
            </div>

            {/* Pair 2 */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div class="rounded-3xl p-7 bg-surface-1 border border-surface-2 w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-text-secondary">Reactive approach</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-medium">
                  comments sit between the agency and the business.
                </div>
              </div>

              <div class="rounded-3xl p-7 bg-primary/5 border border-primary/20 shadow-sm w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-primary font-bold">Connected approach</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-bold">
                  routine questions and sensitive issues follow different paths.
                </div>
              </div>
            </div>

            {/* Pair 3 */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div class="rounded-3xl p-7 bg-surface-1 border border-surface-2 w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-text-secondary">Reactive approach</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-medium">
                  the report ends at reach and likes.
                </div>
              </div>

              <div class="rounded-3xl p-7 bg-primary/5 border border-primary/20 shadow-sm w-full">
                <div class="flex items-center gap-2 mb-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span class="text-xs font-bold uppercase tracking-wider text-primary font-bold">Connected approach</span>
                </div>
                <div class="text-base sm:text-lg text-surface-dark0 font-bold">
                  the review also asks what people wanted to know and do next.
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
              <i class="ph-fill ph-handshake"></i> Full Agency Alignment
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-6">
              Why bring it to Bell Bee?
            </h2>

            <div class="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Social media touches more than the person writing captions. It needs design, video, brand voice and a workable next step.
              </p>
              <p>
                Bell Bee offers social media, creative production, design and paid media within the same agency. That makes it possible to plan the feed alongside the assets and campaigns it supports.
              </p>
              <p>
                Choose this service when the business needs a coherent presence and clearer ownership. Choose paid media management when the main need is buying and improving ad traffic.
              </p>
            </div>

            <div>
              <a
                href={routes.getProposal.href()}
                class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-primary/25 hover:bg-[#0e2c50] active:bg-[#051120] hover:-translate-y-0.5 transition-all bb-focus-light"
                style="min-height: 48px; min-width: 44px;"
              >
                <span>Plan your social media</span>
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
              <i class="ph-fill ph-question"></i> Service Scope & Expectations
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 tracking-tight leading-tight mb-4">
              Questions before you hand over the channels
            </h2>
            <p class="text-base text-text-secondary">
              Clear answers on channel management, boundaries, reporting and operational agreements.
            </p>
          </div>

          <div class="space-y-4">
            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Is this the same as running social ads?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>No. This service centers on organic content and community management. Paid campaigns need their own budget, tracking and scope.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Can you work with our existing brand voice?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Yes. Start with your current positioning and language. Agree changes before they become public.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Will you answer every message?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Define coverage and approval boundaries in the proposal. Refunds, complaints and sensitive information need an agreed escalation route.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>How do we judge progress without chasing followers?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Review relevant reach, content responses and useful conversations. Connect enquiries to business records where measurement and consent allow. Followers alone do not establish sales.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>What will it cost?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>Cost depends on channels, content formats and community coverage. Request a proposal with the scope written out.</p>
              </div>
            </details>

            <details class="bb-faq-item bg-white rounded-2xl border border-surface-2 hover:border-primary/40 shadow-sm transition-all overflow-hidden w-full">
              <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-base sm:text-lg text-surface-dark0 transition-colors select-none bb-focus-light" style="min-height: 48px;">
                <span>Can you guarantee growth?</span>
                <i class="ph-bold ph-caret-down text-primary text-xl transition-transform duration-200 bb-faq-icon ml-4 shrink-0" aria-hidden="true"></i>
              </summary>
              <div class="p-6 pt-2 text-sm sm:text-base text-text-secondary leading-relaxed border-t border-surface-2 bg-surface-1/50">
                <p>No. Platform changes, audience response and the offer affect performance. Agree the work and measurement plan rather than a guaranteed result.</p>
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
            Stop restarting the content plan every week
          </h2>

          <p class="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Tell us which channels you manage and where work gets stuck. Ask for a social media plan that connects the content to the conversations it should create.
          </p>

          <div class="mb-8">
            <a
              href={routes.getProposal.href()}
              class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-primary font-black text-base rounded-2xl shadow-2xl hover:bg-surface-1 hover:shadow-black/40 hover:-translate-y-0.5 active:bg-white active:text-[#0e2c50] transition-all bb-focus-dark"
              style="min-height: 48px; min-width: 44px;"
            >
              <span>Plan your social media</span>
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
              href={routes.servicesProduction.href()}
              class="text-white underline font-semibold hover:text-white transition-colors bb-focus-dark"
            >
              creative production
            </a>{' '}
            or{' '}
            <a
              href={routes.servicesDesignCopy.href()}
              class="text-white underline font-semibold hover:text-white transition-colors bb-focus-dark"
            >
              design and copywriting
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
              var tabs = ['idea', 'routine', 'escalate'];
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

import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'

export function DigitalPrPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://bellbeemedia.com/services/digital-pr#service',
        name: 'Digital PR and influencer marketing',
        url: 'https://bellbeemedia.com/services/digital-pr',
        provider: {
          '@type': 'Organization',
          name: 'Bell Bee Media',
          url: 'https://bellbeemedia.com/',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can you guarantee press coverage?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Editorial decisions belong to the publisher. We can agree the research, campaign material and outreach scope, not promise a particular publication.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is influencer marketing included in every project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Creator partnerships and media outreach can be scoped separately. The right choice depends on your audience, story and budget.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will this guarantee better Google rankings?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Relevant coverage can support discovery, but rankings are not guaranteed. Paid links must not be sold as a shortcut around search policies.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you judge a creator?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Look at audience relevance, content quality, previous partnerships and suitability for the brief. Follower count alone is not a selection method.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should we send first?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Share your business, audience, campaign goal and the story you want to tell. Include existing supporting material you are allowed to share.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://bellbeemedia.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Digital PR and influencer marketing',
            item: 'https://bellbeemedia.com/services/digital-pr',
          },
        ],
      },
    ],
  }

  return () => (
    <Layout
      title="Digital PR and influencer marketing | Bell Bee Media"
      description="Bell Bee Media brings story development, media outreach and creator briefing into one campaign. Discuss a clear scope for your next project."
      head={
        <>
          <link rel="canonical" href="https://bellbeemedia.com/services/digital-pr" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Bell Bee Media" />
          <meta property="og:url" content="https://bellbeemedia.com/services/digital-pr" />
          <meta property="og:title" content="Digital PR and influencer marketing | Bell Bee Media" />
          <meta
            property="og:description"
            content="Bell Bee Media brings story development, media outreach and creator briefing into one campaign. Discuss a clear scope for your next project."
          />
          <script type="application/ld+json">
            {JSON.stringify(schemaJson)}
          </script>
          <style>{`
            .pr-focus-dark:focus-visible {
              outline: 3px solid #0f172a !important;
              outline-offset: 3px !important;
            }
            .pr-focus-light:focus-visible {
              outline: 3px solid #154476 !important;
              outline-offset: 3px !important;
            }
            .pr-focus-white:focus-visible {
              outline: 3px solid #ffffff !important;
              outline-offset: 3px !important;
            }
            details.pr-faq-item summary::-webkit-details-marker {
              display: none;
            }
            details.pr-faq-item summary {
              list-style: none;
            }
            details.pr-faq-item[open] .pr-faq-icon {
              transform: rotate(180deg);
            }
            details.pr-faq-item[open] summary {
              background-color: #f8fafc;
            }
            @media (prefers-reduced-motion: reduce) {
              * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }
          `}</style>
        </>
      }
    >
      {/* ── BREADCRUMB ── */}
      <div
        style="background-color: #0c2543; color: #ffffff; border-bottom: 1px solid rgba(255,255,255,0.1);"
        class="pt-24 pb-4"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs sm:text-sm text-white/70 font-medium flex-wrap">
            <a href={routes.home.href()} class="hover:text-white transition-colors pr-focus-white flex items-center gap-1.5">
              <i class="ph ph-house text-sm" aria-hidden="true"></i>
              <span>Home</span>
            </a>
            <i class="ph ph-caret-right text-xs text-white/40" aria-hidden="true"></i>
            <a href={routes.services.href()} class="hover:text-white transition-colors pr-focus-white">
              Services
            </a>
            <i class="ph ph-caret-right text-xs text-white/40" aria-hidden="true"></i>
            <span class="text-white font-bold" aria-current="page">
              Digital PR &amp; Influencer Marketing
            </span>
          </nav>
        </div>
      </div>

      {/* ── S01: HERO SECTION (NAVY BUNDLE WITH CAMPAIGN RADAR CONSOLE) ── */}
      <section
        id="hero"
        style="background-color: #154476; color: #ffffff;"
        class="relative bg-gradient-to-br from-[#154476] via-[#0e2c50] to-[#061527] text-white pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-white/10"
      >
        {/* Ambient atmospheric glows */}
        <div class="absolute top-1/4 -right-20 w-[460px] h-[460px] bg-[#2cbcee]/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div class="absolute -bottom-10 -left-10 w-[420px] h-[420px] bg-[#e56026]/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Editorial Column */}
            <div class="lg:col-span-7">
              <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
                <span class="w-2.5 h-2.5 rounded-full bg-[#e56026] animate-pulse"></span>
                <span class="text-xs font-bold uppercase tracking-widest text-white/95 flex items-center gap-1.5">
                  <i class="ph-fill ph-broadcast text-[#ffa24a]" aria-hidden="true"></i>
                  <span>Story Development &amp; Creator Briefing</span>
                </span>
              </div>

              <h1 class="font-heading text-4xl sm:text-5xl lg:text-[58px] font-black text-white tracking-tight leading-[1.08] mb-6">
                Digital PR and influencer marketing
              </h1>

              <h2 class="text-2xl sm:text-3xl font-extrabold text-[#ffa24a] mb-6 leading-[1.18]">
                Give people a reason to talk about your brand.
              </h2>

              <div class="space-y-4 text-white/90 text-base sm:text-lg leading-[1.65] max-w-[68ch] mb-8 font-normal">
                <p>
                  A press list is not a story. A creator with a large following is not automatically a good fit. You need a clear reason for the right people to pay attention.
                </p>
                <p>
                  Bell Bee Media brings story development, media outreach and creator briefing into one campaign. Start with what your audience cares about. Build a credible angle around it. Then choose the people and publications that can carry it.
                </p>
              </div>

              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <a
                  href="#enquiry"
                  style="background-color: #e56026; color: #0f172a; border: 2px solid #0f172a;"
                  class="inline-flex items-center justify-center gap-3 px-8 py-4 font-black text-base rounded-2xl shadow-xl shadow-black/25 hover:!bg-[#ffffff] hover:!text-[#154476] hover:!border-white hover:-translate-y-0.5 active:!bg-[#0f172a] active:!text-white transition-all duration-200 pr-focus-dark min-h-[48px] min-w-[44px]"
                >
                  <span>Discuss your PR campaign</span>
                  <i class="ph-bold ph-arrow-right text-lg" aria-hidden="true"></i>
                </a>
              </div>

              <div class="flex items-center gap-3 text-sm text-white/85 font-medium pt-2">
                <i class="ph-fill ph-check-circle text-[#ffa24a] text-lg" aria-hidden="true"></i>
                <span>Audience-first angles, verified facts, and accountable creator briefs.</span>
              </div>
            </div>

            {/* Right: Premium Interactive PR Story Console / Radar */}
            <div class="lg:col-span-5">
              <div
                style="background-color: rgba(255, 255, 255, 0.08); border: 1.5px solid rgba(255, 255, 255, 0.2);"
                class="backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden"
              >
                {/* Console Status Bar */}
                <div class="flex items-center justify-between pb-4 border-b border-white/15 mb-5 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span class="font-bold tracking-wider uppercase text-white font-mono text-[11px]">
                      CAMPAIGN ENGINE v3.4
                    </span>
                  </div>
                  <span class="font-mono text-white/70 text-[11px] bg-white/10 px-2.5 py-1 rounded-md">
                    SYNC: VERIFIED
                  </span>
                </div>

                {/* Main Console Canvas */}
                <div class="bg-[#051120]/80 border border-white/10 rounded-2xl p-5 mb-5 space-y-4">
                  {/* Top Live Feed Badge */}
                  <div class="flex items-center justify-between text-xs pb-3 border-b border-white/10">
                    <span class="text-white/60 font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                      <i class="ph-fill ph-compass text-[#ffa24a]"></i> Story Architecture
                    </span>
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                      ACTIVE ANGLE
                    </span>
                  </div>

                  {/* Pitch Transformation Specimen */}
                  <div class="space-y-3">
                    <div class="bg-white/5 rounded-xl p-3 border border-white/5">
                      <div class="text-[10px] uppercase tracking-wider font-mono text-red-300 font-bold mb-1">
                        01. Baseline Pitch
                      </div>
                      <div class="text-xs text-white/80 italic font-mono">
                        "We are an exciting furniture brand. Please feature our new desk."
                      </div>
                    </div>

                    <div class="flex justify-center -my-1 text-[#ffa24a]" aria-hidden="true">
                      <i class="ph-bold ph-arrow-down text-base"></i>
                    </div>

                    <div class="bg-[#154476]/60 rounded-xl p-3.5 border border-[#ffa24a]/40 shadow-sm">
                      <div class="text-[10px] uppercase tracking-wider font-mono text-[#ffa24a] font-bold mb-1 flex items-center justify-between">
                        <span>02. Useful Angle (Reframed)</span>
                        <span class="text-[9px] bg-[#ffa24a]/20 px-1.5 py-0.5 rounded text-[#ffa24a]">High Editorial Appeal</span>
                      </div>
                      <div class="text-xs text-white font-semibold leading-relaxed">
                        "A compact-home workspace guide showing how to measure a desk corner before buying."
                      </div>
                    </div>
                  </div>

                  {/* Verification & Placement Pills */}
                  <div class="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                    <div class="bg-white/5 border border-white/10 rounded-lg p-2.5">
                      <span class="text-white/50 block text-[10px] font-mono">Evidence Check</span>
                      <strong class="text-white text-xs font-semibold flex items-center gap-1 mt-0.5">
                        <i class="ph-fill ph-shield-check text-blue-400"></i> Dimensions Verified
                      </strong>
                    </div>
                    <div class="bg-white/5 border border-white/10 rounded-lg p-2.5">
                      <span class="text-white/50 block text-[10px] font-mono">Distribution</span>
                      <strong class="text-white text-xs font-semibold flex items-center gap-1 mt-0.5">
                        <i class="ph-fill ph-users text-emerald-400"></i> Editors + Creators
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Console Footer Telemetry */}
                <div class="grid grid-cols-2 gap-3">
                  <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <span class="text-[10px] text-white/60 block font-mono">Strategy Protocol</span>
                    <strong class="text-xs text-white">Story Before Outreach</strong>
                  </div>
                  <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <span class="text-[10px] text-white/60 block font-mono">Disclosure Safety</span>
                    <strong class="text-xs text-[#ffa24a]">ASA / FTC Compliant</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* S01 Mechanism Rail (4 Connected Nodes below Hero) */}
          <div class="mt-16 pt-12 border-t border-white/15">
            <div class="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h2 class="text-xs font-bold uppercase tracking-widest text-white/80 flex items-center gap-2">
                <i class="ph-fill ph-git-commit text-[#ffa24a]" aria-hidden="true"></i>
                <span>Connected Editorial Process</span>
              </h2>
              <span class="text-xs text-white/60 font-mono">From Angle Refinement to Channel Execution</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 hover:-translate-y-1 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-black uppercase tracking-wider text-red-300 px-2 py-0.5 rounded bg-red-500/20 font-mono">01</span>
                  <i class="ph-bold ph-newspaper text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Weak pitch</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Generic brand self-descriptions that fail to give journalists or audiences a reason to care.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 hover:-translate-y-1 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-black uppercase tracking-wider text-[#ffa24a] px-2 py-0.5 rounded bg-[#e56026]/20 font-mono">02</span>
                  <i class="ph-bold ph-lightbulb text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Useful angle</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Reframing the message around real customer questions and practical, demonstrable utility.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 hover:-translate-y-1 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-black uppercase tracking-wider text-blue-300 px-2 py-0.5 rounded bg-blue-500/20 font-mono">03</span>
                  <i class="ph-bold ph-shield-check text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Evidence check</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Anchoring every hook in original product dimensions, verified data and removable false claims.</p>
              </div>

              <div class="bg-[#154476] border border-white/20 rounded-2xl p-5 hover:border-white/50 hover:-translate-y-1 transition-all shadow-md group w-full">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-black uppercase tracking-wider text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/20 font-mono">04</span>
                  <i class="ph-bold ph-share-network text-xl text-white group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                </div>
                <div class="font-bold text-base text-white">Distribution decision</div>
                <p class="text-xs text-white/80 mt-1.5 leading-relaxed">Pitching earned media to relevant editors while briefing paid creators under agreed disclosure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S02: PROBLEM SECTION (LIGHT BUNDLE WITH EDITORIAL CALLOUT) ── */}
      <section
        id="problem"
        style="background-color: #ffffff; color: #0f172a;"
        class="py-16 md:py-24 border-b border-surface-2"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div class="w-full">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#e56026] bg-[#e56026]/10 border border-[#e56026]/20 mb-4">
              <i class="ph-fill ph-warning-circle" aria-hidden="true"></i>
              <span>Distribution Reality</span>
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-5">
              When disconnected work costs you clarity
            </h2>

            {/* Signature horizontal orange rule */}
            <div
              aria-hidden="true"
              style="background-color: #e56026;"
              class="w-20 h-1.5 rounded-full mb-8"
            ></div>

            {/* Problem Editorial Card */}
            <div
              style="background-color: #f8fafc; border-left: 5px solid #e56026; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;"
              class="p-6 sm:p-9 rounded-3xl shadow-sm"
            >
              <p class="text-[#0f172a] text-lg sm:text-xl lg:text-2xl font-semibold leading-[1.6]">
                Your product launch gets posted, then disappears. Outreach emails describe your business but offer no useful story. Creator content looks polished, yet says little about why someone should choose you. More distribution cannot repair an unclear idea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S03: SCOPE SECTION (SOFT BUNDLE WITH RICH DELIVERABLE CARDS) ── */}
      <section
        id="scope"
        style="background-color: #f1f5f9; color: #0f172a;"
        class="py-16 md:py-24 border-b border-[#cbd5e1]"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div class="max-w-3xl mb-14">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#154476] bg-[#154476]/10 border border-[#154476]/20 mb-4">
              <i class="ph-fill ph-package" aria-hidden="true"></i>
              <span>Campaign Scope</span>
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-4">
              Build a campaign around a story worth sharing
            </h2>
          </div>

          {/* 6 Deliverables in 2-Column High-End Card Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                num: '01',
                title: 'A story brief connecting audience questions to a defensible campaign angle.',
                tag: 'Campaign Angle',
                icon: 'ph-file-text',
                accentColor: 'text-[#154476]',
                bgColor: 'bg-[#154476]/10',
              },
              {
                num: '02',
                title: 'A media shortlist with relevance notes, not a pile of unexplained contacts.',
                tag: 'Media Selection',
                icon: 'ph-users-three',
                accentColor: 'text-[#e56026]',
                bgColor: 'bg-[#e56026]/10',
              },
              {
                num: '03',
                title: 'An outreach narrative and supporting press material built around verified facts.',
                tag: 'Press Narrative',
                icon: 'ph-article',
                accentColor: 'text-indigo-600',
                bgColor: 'bg-indigo-50',
              },
              {
                num: '04',
                title: 'Creator selection criteria covering audience fit, content style and brand suitability.',
                tag: 'Creator Vetting',
                icon: 'ph-funnel',
                accentColor: 'text-amber-600',
                bgColor: 'bg-amber-50',
              },
              {
                num: '05',
                title: 'A creator brief with required messages, disclosure instructions and approval boundaries.',
                tag: 'Brief & Disclosure',
                icon: 'ph-note-pencil',
                accentColor: 'text-emerald-600',
                bgColor: 'bg-emerald-50',
              },
              {
                num: '06',
                title: 'A reporting structure separating earned coverage, paid partnerships and referral activity.',
                tag: 'Attribution & Audit',
                icon: 'ph-chart-line-up',
                accentColor: 'text-[#154476]',
                bgColor: 'bg-[#154476]/10',
              },
            ].map((item) => (
              <div
                key={item.num}
                style="background-color: #ffffff; border: 1.5px solid #cbd5e1;"
                class="rounded-3xl p-7 sm:p-8 flex items-start gap-5 shadow-sm hover:shadow-2xl hover:border-[#154476]/40 hover:-translate-y-1.5 transition-all duration-300 group w-full"
              >
                <div
                  class={`w-14 h-14 rounded-2xl ${item.bgColor} ${item.accentColor} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  <i class={`ph-fill ${item.icon}`} aria-hidden="true"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-[#154476]">
                      {item.tag}
                    </span>
                    <span class="text-xs font-black text-slate-400 font-mono px-2 py-0.5 rounded bg-slate-100">
                      {item.num}
                    </span>
                  </div>
                  <p class="text-[#0f172a] text-base sm:text-lg font-bold leading-[1.5]">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scope Agreement Highlight Card */}
          <div
            style="background-color: #ffffff; border: 1.5px solid #cbd5e1;"
            class="rounded-3xl p-6 sm:p-8 flex items-start gap-4 shadow-sm max-w-3xl"
          >
            <div class="w-10 h-10 rounded-xl bg-[#154476]/10 text-[#154476] flex items-center justify-center text-xl shrink-0 mt-0.5">
              <i class="ph-fill ph-handshake" aria-hidden="true"></i>
            </div>
            <p class="text-[#0f172a] text-base sm:text-lg font-bold leading-[1.6]">
              Agree the scope before work starts. Your priorities should determine the deliverables, not a generic package.
            </p>
          </div>
        </div>
      </section>

      {/* ── S04: COMPARISON SECTION (LIGHT BUNDLE WITH DECISION PANELS) ── */}
      <section
        id="comparison"
        style="background-color: #ffffff; color: #0f172a;"
        class="py-16 md:py-24 border-b border-[#cbd5e1]"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div class="max-w-3xl mb-12">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#e56026] bg-[#e56026]/10 border border-[#e56026]/20 mb-4">
              <i class="ph-fill ph-scales" aria-hidden="true"></i>
              <span>Channel Strategy</span>
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-4">
              Choose the right kind of project
            </h2>

            <p class="text-[#334155] text-base sm:text-lg leading-[1.65]">
              Paid creator content and earned editorial coverage do different jobs. A partnership gives you an agreed creative scope. Editorial coverage remains the publisher’s decision. Keep those expectations separate so your budget and reporting stay honest.
            </p>
          </div>

          {/* Side-by-side Decision Panels */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Panel 1: Paid Creator Content */}
            <div
              style="background-color: #f8fafc; border: 2px solid #cbd5e1;"
              class="p-8 sm:p-10 rounded-3xl flex flex-col justify-between hover:shadow-2xl hover:border-[#e56026] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-12 h-12 rounded-2xl bg-[#e56026]/15 text-[#e56026] flex items-center justify-center text-xl font-bold">
                    <i class="ph-fill ph-user-circle" aria-hidden="true"></i>
                  </span>
                  <span class="text-xs font-black uppercase tracking-wider text-[#e56026] font-mono px-3 py-1 rounded-full bg-[#e56026]/10">
                    Agreed Creative Scope
                  </span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-black text-[#0f172a] mb-4">
                  Paid creator content
                </h3>
                <p class="text-[#334155] text-base sm:text-lg leading-[1.65] mb-6 font-medium">
                  A partnership gives you an agreed creative scope.
                </p>
                <ul class="space-y-3.5 pt-6 border-t border-[#cbd5e1]">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-[#0f172a] font-semibold">
                    <span class="w-5 h-5 rounded-md bg-[#e56026]/15 text-[#e56026] flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</span>
                    <span>Guaranteed formats, talking points, and posting schedules</span>
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-[#0f172a] font-semibold">
                    <span class="w-5 h-5 rounded-md bg-[#e56026]/15 text-[#e56026] flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</span>
                    <span>Mandatory sponsorship disclosure (UK ASA &amp; FTC compliance)</span>
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-[#0f172a] font-semibold">
                    <span class="w-5 h-5 rounded-md bg-[#e56026]/15 text-[#e56026] flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</span>
                    <span>Pre-agreed approval boundaries and brand safety rules</span>
                  </li>
                </ul>
              </div>
              <div class="mt-8 pt-4 border-t border-[#cbd5e1] flex items-center justify-between text-xs font-black text-[#e56026] uppercase tracking-wider font-mono">
                <span>Model: Paid Partnership</span>
                <span>Controlled Reach</span>
              </div>
            </div>

            {/* Panel 2: Earned Editorial Coverage */}
            <div
              style="background-color: #f8fafc; border: 2px solid #cbd5e1;"
              class="p-8 sm:p-10 rounded-3xl flex flex-col justify-between hover:shadow-2xl hover:border-[#154476] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-12 h-12 rounded-2xl bg-[#154476]/10 text-[#154476] flex items-center justify-center text-xl font-bold">
                    <i class="ph-fill ph-newspaper-clipping" aria-hidden="true"></i>
                  </span>
                  <span class="text-xs font-black uppercase tracking-wider text-[#154476] font-mono px-3 py-1 rounded-full bg-[#154476]/10">
                    Publisher's Decision
                  </span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-black text-[#0f172a] mb-4">
                  Earned editorial coverage
                </h3>
                <p class="text-[#334155] text-base sm:text-lg leading-[1.65] mb-6 font-medium">
                  Editorial coverage remains the publisher’s decision.
                </p>
                <ul class="space-y-3.5 pt-6 border-t border-[#cbd5e1]">
                  <li class="flex items-start gap-3 text-sm sm:text-base text-[#0f172a] font-semibold">
                    <span class="w-5 h-5 rounded-md bg-[#154476]/10 text-[#154476] flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</span>
                    <span>Pitched strictly on editorial merit and genuine audience value</span>
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-[#0f172a] font-semibold">
                    <span class="w-5 h-5 rounded-md bg-[#154476]/10 text-[#154476] flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</span>
                    <span>High-authority third-party validation and search discovery</span>
                  </li>
                  <li class="flex items-start gap-3 text-sm sm:text-base text-[#0f172a] font-semibold">
                    <span class="w-5 h-5 rounded-md bg-[#154476]/10 text-[#154476] flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">✓</span>
                    <span>Zero backlink manipulation or spam-policy violations</span>
                  </li>
                </ul>
              </div>
              <div class="mt-8 pt-4 border-t border-[#cbd5e1] flex items-center justify-between text-xs font-black text-[#154476] uppercase tracking-wider font-mono">
                <span>Model: Earned Media</span>
                <span>Editorial Credibility</span>
              </div>
            </div>
          </div>

          <div
            style="background-color: #f1f5f9; border: 1.5px solid #cbd5e1;"
            class="p-6 sm:p-7 rounded-3xl max-w-2xl"
          >
            <p class="text-[#0f172a] text-base sm:text-lg font-bold leading-[1.5]">
              Keep those expectations separate so your budget and reporting stay honest.
            </p>
          </div>
        </div>
      </section>

      {/* ── S05: DEMO / WALKTHROUGH SECTION (NAVY BUNDLE WITH ACCESSIBLE TABS) ── */}
      <section
        id="demo"
        style="background-color: #154476; color: #ffffff;"
        class="relative bg-gradient-to-br from-[#154476] via-[#0e2c50] to-[#071526] text-white py-16 md:py-24 border-b border-white/20 overflow-hidden"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div class="max-w-3xl mb-10">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#ffa24a] bg-white/10 border border-white/20 mb-4">
              <i class="ph-fill ph-flask" aria-hidden="true"></i>
              <span>Interactive Teaching Example</span>
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              See how the thinking changes
            </h2>
            <p class="text-white/85 text-sm sm:text-base leading-[1.6]">
              Illustrative walkthrough. This is an original teaching example, not client work or a performance result.
            </p>
          </div>

          {/* Interactive Walkthrough Simulator */}
          <div class="max-w-4xl" id="walkthrough-container">
            {/* Step Selection Controls Group */}
            <div
              role="group"
              aria-label="Explore the example"
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6"
            >
              {[
                { id: 'pr-step-1', num: 1, title: 'Weak pitch', icon: 'ph-x-circle' },
                { id: 'pr-step-2', num: 2, title: 'Useful angle', icon: 'ph-lightbulb' },
                { id: 'pr-step-3', num: 3, title: 'Evidence check', icon: 'ph-shield-check' },
                { id: 'pr-step-4', num: 4, title: 'Distribution decision', icon: 'ph-share-network' },
              ].map((step, idx) => (
                <button
                  type="button"
                  id={`btn-${step.id}`}
                  data-walkthrough-btn
                  data-target={step.id}
                  aria-pressed={idx === 0 ? 'true' : 'false'}
                  aria-controls={step.id}
                  style={
                    idx === 0
                      ? 'background-color: #e56026; color: #0f172a; border: 2px solid #0f172a;'
                      : 'background-color: #ffffff; color: #0f172a; border: 1px solid #475569;'
                  }
                  class="pr-btn-step px-4 py-3.5 rounded-2xl font-extrabold text-sm text-center transition-all duration-150 pr-focus-white flex items-center justify-center gap-2.5 min-h-[48px] min-w-[44px] shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span class="w-6 h-6 rounded-full bg-[#0f172a] text-white text-xs flex items-center justify-center shrink-0 font-bold">
                    {step.num}
                  </span>
                  <span>{step.title}</span>
                </button>
              ))}
            </div>

            {/* Status indicator */}
            <div class="mb-4">
              <span
                id="walkthrough-status"
                class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono font-bold uppercase tracking-wider text-[#ffa24a]"
              >
                <span class="w-2 h-2 rounded-full bg-[#ffa24a]"></span>
                Step 1 of 4
              </span>
            </div>

            {/* Panels with Public Verbatim Headings and Paragraphs */}
            <div
              style="background-color: rgba(255,255,255,0.08); border: 2px solid rgba(255,255,255,0.3);"
              class="rounded-3xl p-7 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              {/* Panel 1: Weak pitch */}
              <div id="pr-step-1" data-walkthrough-panel class="space-y-4">
                <span class="text-xs font-mono uppercase tracking-widest text-red-300 font-bold flex items-center gap-1.5">
                  <i class="ph-bold ph-warning"></i>
                  <span>Stage 01 · Pitch Baseline</span>
                </span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Weak pitch
                </h3>
                <div class="p-5 rounded-2xl bg-black/40 border border-white/10">
                  <p class="text-white text-lg sm:text-xl leading-[1.65]">
                    We are an exciting furniture brand. Please feature our new desk.
                  </p>
                </div>
                <div class="text-xs text-white/60 font-mono pt-1">
                  Result: Ignored by journalists. Zero editorial context or audience benefit.
                </div>
              </div>

              {/* Panel 2: Useful angle */}
              <div id="pr-step-2" data-walkthrough-panel class="space-y-4 hidden">
                <span class="text-xs font-mono uppercase tracking-widest text-[#ffa24a] font-bold flex items-center gap-1.5">
                  <i class="ph-bold ph-check-circle"></i>
                  <span>Stage 02 · Audience Angle</span>
                </span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Useful angle
                </h3>
                <div class="p-5 rounded-2xl bg-black/40 border border-[#ffa24a]/30">
                  <p class="text-white text-lg sm:text-xl leading-[1.65]">
                    A compact-home workspace guide showing how to measure a desk corner before buying.
                  </p>
                </div>
                <div class="text-xs text-[#ffa24a] font-mono pt-1">
                  Result: High journalistic pickup. Solves an actual buyer problem with practical tips.
                </div>
              </div>

              {/* Panel 3: Evidence check */}
              <div id="pr-step-3" data-walkthrough-panel class="space-y-4 hidden">
                <span class="text-xs font-mono uppercase tracking-widest text-blue-300 font-bold flex items-center gap-1.5">
                  <i class="ph-bold ph-shield-check"></i>
                  <span>Stage 03 · Fact Verification</span>
                </span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Evidence check
                </h3>
                <div class="p-5 rounded-2xl bg-black/40 border border-blue-400/30">
                  <p class="text-white text-lg sm:text-xl leading-[1.65]">
                    Use original product dimensions and clear demonstrations. Remove unsupported wellbeing claims.
                  </p>
                </div>
                <div class="text-xs text-blue-300 font-mono pt-1">
                  Result: Defensible claims protect publisher credibility and brand reputation.
                </div>
              </div>

              {/* Panel 4: Distribution decision */}
              <div id="pr-step-4" data-walkthrough-panel class="space-y-4 hidden">
                <span class="text-xs font-mono uppercase tracking-widest text-emerald-300 font-bold flex items-center gap-1.5">
                  <i class="ph-bold ph-share-network"></i>
                  <span>Stage 04 · Channel Placement</span>
                </span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Distribution decision
                </h3>
                <div class="p-5 rounded-2xl bg-black/40 border border-emerald-400/30">
                  <p class="text-white text-lg sm:text-xl leading-[1.65]">
                    Pitch the useful guide to relevant home editors. Brief paid creators separately and disclose partnerships.
                  </p>
                </div>
                <div class="text-xs text-emerald-300 font-mono pt-1">
                  Result: Clear dual-track execution with full regulatory and editorial integrity.
                </div>
              </div>
            </div>

            {/* Static Fallback for No-JS */}
            <noscript>
              <div class="mt-8 space-y-6 pt-6 border-t border-white/20">
                <div class="space-y-2">
                  <h3 class="text-xl font-bold text-white">Weak pitch</h3>
                  <p class="text-white text-base">We are an exciting furniture brand. Please feature our new desk.</p>
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-bold text-white">Useful angle</h3>
                  <p class="text-white text-base">A compact-home workspace guide showing how to measure a desk corner before buying.</p>
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-bold text-white">Evidence check</h3>
                  <p class="text-white text-base">Use original product dimensions and clear demonstrations. Remove unsupported wellbeing claims.</p>
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-bold text-white">Distribution decision</h3>
                  <p class="text-white text-base">Pitch the useful guide to relevant home editors. Brief paid creators separately and disclose partnerships.</p>
                </div>
              </div>
            </noscript>
          </div>
        </div>

        {/* Client script for interactive walkthrough */}
        <script>{`
          (function() {
            function initWalkthrough() {
              var btns = document.querySelectorAll('[data-walkthrough-btn]');
              var panels = document.querySelectorAll('[data-walkthrough-panel]');
              var status = document.getElementById('walkthrough-status');
              if (!btns.length || !panels.length) return;

              btns.forEach(function(btn, idx) {
                btn.addEventListener('click', function() {
                  var targetId = btn.getAttribute('data-target');

                  btns.forEach(function(b) {
                    b.setAttribute('aria-pressed', 'false');
                    b.style.backgroundColor = '#ffffff';
                    b.style.color = '#0f172a';
                    b.style.border = '1px solid #475569';
                  });
                  btn.setAttribute('aria-pressed', 'true');
                  btn.style.backgroundColor = '#e56026';
                  btn.style.color = '#0f172a';
                  btn.style.border = '2px solid #0f172a';

                  panels.forEach(function(p) {
                    p.classList.add('hidden');
                  });
                  var activePanel = document.getElementById(targetId);
                  if (activePanel) {
                    activePanel.classList.remove('hidden');
                  }

                  if (status) {
                    status.innerHTML = '<span class="w-2 h-2 rounded-full bg-[#ffa24a]"></span> Step ' + (idx + 1) + ' of 4';
                  }
                });
              });
            }

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initWalkthrough);
            } else {
              initWalkthrough();
            }
          })();
        `}</script>
      </section>

      {/* ── S06: FIT SECTION (SOFT BUNDLE WITH CHECKLIST) ── */}
      <section
        id="fit"
        style="background-color: #f1f5f9; color: #0f172a;"
        class="py-16 md:py-24 border-b border-[#cbd5e1]"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Editorial Copy */}
            <div class="lg:col-span-7 max-w-[68ch]">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#154476] bg-[#154476]/10 border border-[#154476]/20 mb-4">
                <i class="ph-fill ph-check-square-offset" aria-hidden="true"></i>
                <span>Campaign Suitability</span>
              </span>

              <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-6">
                Is this the right next step?
              </h2>

              <div class="space-y-5 text-[#0f172a] text-base sm:text-lg lg:text-xl leading-[1.65]">
                <p>
                  This is for brands with something useful to say, not just a request for exposure. A product launch, original insight or clear point of view can be a starting point. If the story needs work, that comes before outreach.
                </p>
                <div class="p-6 rounded-2xl bg-white border border-[#cbd5e1] shadow-sm">
                  <p class="font-bold text-[#154476]">
                    Bring the problem you need to solve. We can discuss whether the service fits before defining the work.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Authored Checklist */}
            <div class="lg:col-span-5">
              <div
                style="background-color: #ffffff; border: 1.5px solid #cbd5e1;"
                class="rounded-3xl p-7 sm:p-9 shadow-sm"
              >
                <div class="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
                  <span class="text-xs font-bold uppercase tracking-wider text-[#154476] font-mono">
                    Suitability Checklist
                  </span>
                  <span class="text-xs font-mono text-slate-500 font-bold bg-slate-100 px-2.5 py-1 rounded-md">
                    4 BENCHMARKS
                  </span>
                </div>
                <ul class="space-y-4">
                  {[
                    'Brands with something useful to say, not just a request for exposure',
                    'A product launch, original insight or clear point of view as a starting point',
                    'Story development before outreach if the angle needs work',
                    'Bring the problem you need to solve before defining the work',
                  ].map((criterion) => (
                    <li key={criterion} class="flex items-start gap-3.5 text-sm sm:text-base text-[#0f172a] font-bold leading-[1.5]">
                      <span
                        style="background-color: #154476; color: #ffffff;"
                        class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-black shadow-sm"
                      >
                        ✓
                      </span>
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── S07: PROCESS SECTION (LIGHT BUNDLE WITH CONNECTED STAGES) ── */}
      <section
        id="process"
        style="background-color: #ffffff; color: #0f172a;"
        class="py-16 md:py-24 border-b border-[#cbd5e1]"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          <div class="max-w-3xl mb-14">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#e56026] bg-[#e56026]/10 border border-[#e56026]/20 mb-4">
              <i class="ph-fill ph-path" aria-hidden="true"></i>
              <span>Delivery Workflow</span>
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-4">
              From a clear brief to work you can assess
            </h2>
          </div>

          {/* 3 Sequential Process Stages */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stage 1 */}
            <div
              style="background-color: #f8fafc; border: 1.5px solid #cbd5e1;"
              class="rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl hover:border-[#154476] hover:-translate-y-1.5 transition-all duration-300 w-full"
            >
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-12 h-12 rounded-2xl bg-[#154476] text-white font-black text-lg flex items-center justify-center shadow-md">
                    01
                  </span>
                  <span class="text-xs font-bold uppercase tracking-wider text-[#154476] font-mono px-2.5 py-1 rounded-md bg-[#154476]/10">
                    Phase 1 · Audience
                  </span>
                </div>
                <h3 class="text-2xl font-black text-[#0f172a] mb-3">Brief &amp; Review</h3>
                <p class="text-[#334155] text-base sm:text-lg leading-[1.65]">
                  Start with your audience and the decision you want them to make. Review the existing material and agree what needs to change.
                </p>
              </div>
              <div class="mt-8 pt-4 border-t border-[#cbd5e1] flex items-center text-xs font-bold text-[#154476] font-mono">
                <span>Phase 01 Complete</span>
                <i class="ph-bold ph-arrow-right ml-auto" aria-hidden="true"></i>
              </div>
            </div>

            {/* Stage 2 */}
            <div
              style="background-color: #f8fafc; border: 1.5px solid #cbd5e1;"
              class="rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl hover:border-[#e56026] hover:-translate-y-1.5 transition-all duration-300 w-full"
            >
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-12 h-12 rounded-2xl bg-[#e56026] text-[#0f172a] font-black text-lg flex items-center justify-center shadow-md">
                    02
                  </span>
                  <span class="text-xs font-bold uppercase tracking-wider text-[#e56026] font-mono px-2.5 py-1 rounded-md bg-[#e56026]/15">
                    Phase 2 · Direction
                  </span>
                </div>
                <h3 class="text-2xl font-black text-[#0f172a] mb-3">Develop &amp; Refine</h3>
                <p class="text-[#334155] text-base sm:text-lg leading-[1.65]">
                  Develop the direction against that brief. Review it with one accountable decision maker, then refine the agreed assets.
                </p>
              </div>
              <div class="mt-8 pt-4 border-t border-[#cbd5e1] flex items-center text-xs font-bold text-[#e56026] font-mono">
                <span>Phase 02 Complete</span>
                <i class="ph-bold ph-arrow-right ml-auto" aria-hidden="true"></i>
              </div>
            </div>

            {/* Stage 3 */}
            <div
              style="background-color: #f8fafc; border: 1.5px solid #cbd5e1;"
              class="rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl hover:border-[#154476] hover:-translate-y-1.5 transition-all duration-300 w-full"
            >
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-12 h-12 rounded-2xl bg-[#154476] text-white font-black text-lg flex items-center justify-center shadow-md">
                    03
                  </span>
                  <span class="text-xs font-bold uppercase tracking-wider text-[#154476] font-mono px-2.5 py-1 rounded-md bg-[#154476]/10">
                    Phase 3 · Handover
                  </span>
                </div>
                <h3 class="text-2xl font-black text-[#0f172a] mb-3">Scope &amp; Measurement</h3>
                <p class="text-[#334155] text-base sm:text-lg leading-[1.65]">
                  Keep scope, approvals and measurement connected. A strong handover makes the next step clear instead of leaving your team to guess.
                </p>
              </div>
              <div class="mt-8 pt-4 border-t border-[#cbd5e1] flex items-center text-xs font-bold text-[#154476] font-mono">
                <span>Phase 03 Complete</span>
                <i class="ph-bold ph-check ml-auto" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S08: FAQ SECTION (SOFT BUNDLE) ── */}
      <section
        id="faq"
        style="background-color: #f1f5f9; color: #0f172a;"
        class="py-16 md:py-24 border-b border-[#cbd5e1]"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[960px]">
          <div class="mb-12">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#154476] bg-[#154476]/10 border border-[#154476]/20 mb-4">
              <i class="ph-fill ph-question" aria-hidden="true"></i>
              <span>Direct Answers</span>
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-3">
              Questions before you start
            </h2>
          </div>

          {/* Native HTML5 Details / Summary Accordions */}
          <div class="space-y-4">
            {[
              {
                q: 'Can you guarantee press coverage?',
                a: 'No. Editorial decisions belong to the publisher. We can agree the research, campaign material and outreach scope, not promise a particular publication.',
              },
              {
                q: 'Is influencer marketing included in every project?',
                a: 'No. Creator partnerships and media outreach can be scoped separately. The right choice depends on your audience, story and budget.',
              },
              {
                q: 'Will this guarantee better Google rankings?',
                a: 'No. Relevant coverage can support discovery, but rankings are not guaranteed. Paid links must not be sold as a shortcut around search policies.',
              },
              {
                q: 'How do you judge a creator?',
                a: 'Look at audience relevance, content quality, previous partnerships and suitability for the brief. Follower count alone is not a selection method.',
              },
              {
                q: 'What should we send first?',
                a: 'Share your business, audience, campaign goal and the story you want to tell. Include existing supporting material you are allowed to share.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                style="border: 1.5px solid #cbd5e1;"
                class="pr-faq-item bg-white rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <summary
                  class="flex items-center justify-between p-6 sm:p-7 cursor-pointer font-extrabold text-base sm:text-lg text-[#0f172a] select-none pr-focus-light min-h-[52px]"
                >
                  <span class="pr-4">{faq.q}</span>
                  <span class="w-9 h-9 rounded-full bg-[#f1f5f9] flex items-center justify-center shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#154476"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="pr-faq-icon transition-transform duration-200"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div class="p-6 sm:p-7 pt-2 text-[#334155] text-base sm:text-lg leading-[1.65] border-t border-[#cbd5e1] bg-[#f8fafc]">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── S09: ENQUIRY SECTION (ORANGE BUNDLE WITH IMPACTFUL CTA) ── */}
      <section
        id="enquiry"
        style="background-color: #e56026; color: #0f172a;"
        class="py-16 md:py-24 relative overflow-hidden"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[960px]">
          <div
            style="background-color: rgba(255,255,255,0.25); border: 2px solid rgba(15,23,42,0.25);"
            class="backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6"
          >
            <span class="inline-block text-xs font-black uppercase tracking-widest text-[#0f172a] bg-white/50 px-3 py-1 rounded-full font-mono">
              Direct Contact
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.1]">
              Tell us what needs to change
            </h2>

            <p class="text-[#0f172a] text-lg sm:text-xl font-medium leading-[1.65] max-w-[68ch]">
              Share your business, your audience and the problem you want to solve. Add links to the material already in use, if helpful. Please do not send passwords or private customer records.
            </p>

            <div class="pt-2">
              <a
                href="mailto:hello@bellbeemedia.com?subject=Bell%20Bee%20project%20enquiry"
                style="background-color: #154476; color: #ffffff; border: 2px solid #0f172a;"
                class="inline-flex items-center justify-center gap-3 px-9 py-5 font-bold text-base sm:text-lg rounded-2xl transition-all duration-200 hover:!bg-[#0f172a] hover:!text-white hover:-translate-y-0.5 active:!bg-[#000000] active:!text-white pr-focus-dark min-h-[48px] min-w-[44px] shadow-2xl"
              >
                <span>Discuss your PR campaign</span>
                <i class="ph-bold ph-arrow-right text-xl" aria-hidden="true"></i>
              </a>
            </div>

            <p class="text-[#0f172a] text-sm sm:text-base font-bold pt-2">
              Your email app will open. Sending an email does not confirm a booking or start paid work.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

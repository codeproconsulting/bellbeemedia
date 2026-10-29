import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'

export function DesignCopyPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://bellbeemedia.com/services/design-copy#service',
        name: 'Brand design and copywriting services',
        url: 'https://bellbeemedia.com/services/design-copy',
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
            name: 'Do we need a completely new logo?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not necessarily. Existing recognition may be worth keeping. Start by deciding whether the problem is identity, consistency, messaging or a specific campaign.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you work with existing guidelines?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Share the rules and approved assets already in use. The project can build within those boundaries rather than introduce a competing style.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you write the copy as well as design?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Bell Bee’s advertised design and copy service includes brand identity and sales copy. The exact assets belong in the agreed project scope.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many revisions are included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Agree the review stages, decision maker and revision scope before work begins. This page does not promise a fixed allowance.',
            },
          },
          {
            '@type': 'Question',
            name: 'What will our team receive?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The agreed finished assets and usage guidance. Confirm editable formats, export requirements and font or image licensing in the written scope.',
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
            name: 'Brand design and copywriting services',
            item: 'https://bellbeemedia.com/services/design-copy',
          },
        ],
      },
    ],
  }

  return () => (
    <Layout
      title="Brand design and copywriting services | Bell Bee Media"
      description="Bell Bee Media develops brand design and copy together. Discuss a clear scope for your next project."
      head={
        <>
          <link rel="canonical" href="https://bellbeemedia.com/services/design-copy" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Bell Bee Media" />
          <meta property="og:url" content="https://bellbeemedia.com/services/design-copy" />
          <meta property="og:title" content="Brand design and copywriting services | Bell Bee Media" />
          <meta
            property="og:description"
            content="Bell Bee Media develops brand design and copy together. Discuss a clear scope for your next project."
          />
          <script type="application/ld+json">
            {JSON.stringify(schemaJson)}
          </script>
          <style>{`
            .dc-focus-dark:focus-visible {
              outline: 3px solid #0f172a !important;
              outline-offset: 3px !important;
            }
            .dc-focus-light:focus-visible {
              outline: 3px solid #154476 !important;
              outline-offset: 3px !important;
            }
            .dc-focus-white:focus-visible {
              outline: 3px solid #ffffff !important;
              outline-offset: 3px !important;
            }
            details.dc-faq-item summary::-webkit-details-marker {
              display: none;
            }
            details.dc-faq-item summary {
              list-style: none;
            }
            details.dc-faq-item[open] .dc-faq-icon {
              transform: rotate(180deg);
            }
            details.dc-faq-item[open] summary {
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
      {/* ── S01: HERO SECTION (NAVY BUNDLE WITH MODERN AGENCY VISUALS) ── */}
      <section
        id="hero"
        class="relative bg-gradient-to-br from-[#154476] via-[#0e2c50] to-[#071526] text-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-white/10"
      >
        {/* Ambient atmospheric glows */}
        <div class="absolute top-1/4 -right-20 w-[420px] h-[420px] bg-[#2cbcee]/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute -bottom-10 -left-10 w-[380px] h-[380px] bg-[#e56026]/15 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Editorial Copy */}
            <div class="lg:col-span-7">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
                <span class="w-2.5 h-2.5 rounded-full bg-[#e56026] animate-pulse"></span>
                <span class="text-xs font-bold uppercase tracking-widest text-white/90">
                  Creative Direction &amp; Messaging
                </span>
              </div>

              <h1 class="font-heading text-4xl sm:text-5xl lg:text-[58px] font-black text-white tracking-tight leading-[1.08] mb-6">
                Brand design and copywriting services
              </h1>

              <h2 class="text-2xl sm:text-3xl font-extrabold text-[#ffa24a] mb-6 leading-[1.18]">
                Make the message and the design agree.
              </h2>

              <div class="space-y-4 text-white/90 text-base sm:text-lg leading-[1.65] max-w-[68ch] mb-8 font-normal">
                <p>
                  Your website looks like one business. Your sales deck sounds like another. Each new campaign starts with the same debate about colours, tone and what to say.
                </p>
                <p>
                  Bell Bee Media develops brand design and copy together. A shared brief connects your audience, offer and visual direction. The result is a working system your team can apply across the places customers meet you.
                </p>
              </div>

              <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <a
                  href="#enquiry"
                  style="background-color: #e56026; color: #0f172a; border: 2px solid #0f172a;"
                  class="inline-flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-base rounded-2xl shadow-xl shadow-black/20 hover:!bg-[#ffffff] hover:!text-[#154476] hover:!border-white hover:-translate-y-0.5 active:!bg-[#0f172a] active:!text-white transition-all duration-200 dc-focus-dark min-h-[48px] min-w-[44px]"
                >
                  <span>Discuss your creative project</span>
                  <i class="ph-bold ph-arrow-right text-lg" aria-hidden="true"></i>
                </a>
              </div>

              <div class="flex items-center gap-3 text-sm text-white/75 font-medium pt-2">
                <i class="ph-fill ph-check-circle text-[#ffa24a] text-lg" aria-hidden="true"></i>
                <span>Shared brief, unified tone, and practical asset guidelines.</span>
              </div>
            </div>

            {/* Right: Live Interactive "Brand System" Specimen Card */}
            <div class="lg:col-span-5">
              <div class="bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
                {/* Header Strip */}
                <div class="flex items-center justify-between pb-4 border-b border-white/15 mb-6 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-red-400"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span class="ml-2 font-mono text-white/80 font-bold uppercase tracking-wider text-[11px]">
                      Brand System v2.4
                    </span>
                  </div>
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e56026]/20 border border-[#e56026]/40 text-[#ffa24a] font-bold text-[10px]">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#ffa24a]"></span>
                    SYNCHRONIZED
                  </span>
                </div>

                {/* Specimen Box 1: Tone Matrix */}
                <div class="bg-[#051120]/75 border border-white/10 rounded-2xl p-4 sm:p-5 mb-4">
                  <span class="text-[10px] font-mono text-white/50 uppercase tracking-widest block mb-2">
                    01. Tone &amp; Voice Rule
                  </span>
                  <div class="text-sm sm:text-base font-bold text-white mb-1.5">
                    "Clarity over decoration. Concrete before abstract."
                  </div>
                  <div class="flex items-center gap-2 mt-2">
                    <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/10 text-white/80">Active Voice</span>
                    <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/10 text-white/80">Decision-Led</span>
                  </div>
                </div>

                {/* Specimen Box 2: Visual Grid & Swatches */}
                <div class="bg-[#051120]/75 border border-white/10 rounded-2xl p-4 sm:p-5 mb-5">
                  <span class="text-[10px] font-mono text-white/50 uppercase tracking-widest block mb-3">
                    02. Visual Hierarchy &amp; Palette
                  </span>
                  <div class="flex items-center gap-2.5 mb-3">
                    <span class="w-8 h-8 rounded-lg bg-[#154476] border border-white/20 shadow-sm" title="Navy #154476"></span>
                    <span class="w-8 h-8 rounded-lg bg-[#e56026] border border-white/20 shadow-sm" title="Orange #E56026"></span>
                    <span class="w-8 h-8 rounded-lg bg-[#0f172a] border border-white/20 shadow-sm" title="Dark #0F172A"></span>
                    <span class="w-8 h-8 rounded-lg bg-[#f1f5f9] border border-white/20 shadow-sm" title="Soft #F1F5F9"></span>
                    <span class="text-xs font-mono text-white/70 ml-auto">Contrast 17.8:1</span>
                  </div>
                  <div class="text-xs text-white/70 font-mono">
                    Inter Display (900) + Inter Text (400/600)
                  </div>
                </div>

                {/* Specimen Box 3: Deliverable Checklist Mini-Pills */}
                <div class="grid grid-cols-2 gap-2.5">
                  <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <span class="text-[10px] text-white/50 block">Design System</span>
                    <strong class="text-xs text-white font-bold">Unified Identity</strong>
                  </div>
                  <div class="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <span class="text-[10px] text-white/50 block">Copy Framework</span>
                    <strong class="text-xs text-[#ffa24a] font-bold">Tested Messaging</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Connected System Nodes Rail */}
          <div class="mt-16 pt-12 border-t border-white/15">
            <div class="flex items-center justify-between mb-6 flex-wrap gap-2">
              <h2 class="text-xs font-bold uppercase tracking-widest text-white/75">
                Core System Architecture
              </h2>
              <span class="text-xs text-white/50 font-mono">From Brief to Usable System</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: '01', title: 'Scattered message', status: 'Unfocused baseline', icon: 'ph-shuffle' },
                { num: '02', title: 'Focused message', status: 'Value proposition', icon: 'ph-target' },
                { num: '03', title: 'Visual application', status: 'Cohesive layout', icon: 'ph-layout' },
                { num: '04', title: 'Reusable rule', status: 'Standard system', icon: 'ph-arrows-clockwise' },
              ].map((node) => (
                <div
                  key={node.num}
                  class="bg-white/[0.06] border border-white/15 hover:border-white/40 rounded-2xl p-5 transition-all shadow-md group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-xs font-bold uppercase tracking-wider text-[#ffa24a]">{node.num}</span>
                    <i class={`ph-bold ${node.icon} text-lg text-white group-hover:scale-110 transition-transform`} aria-hidden="true"></i>
                  </div>
                  <div class="font-bold text-base text-white mb-1">{node.title}</div>
                  <p class="text-xs text-white/70 leading-relaxed">{node.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S02: PROBLEM SECTION (LIGHT BUNDLE) ── */}
      <section
        id="problem"
        style="background-color: #ffffff; color: #0f172a;"
        class="py-16 md:py-24 border-b border-[#e2e8f0]"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div class="max-w-[68ch]">
            <span class="inline-block text-xs font-bold uppercase tracking-widest text-[#e56026] mb-3">
              The Real Cost of Isolation
            </span>

            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-6">
              When disconnected work costs you clarity
            </h2>

            {/* Vertical orange rule + paragraph layout */}
            <div class="flex items-start gap-5 p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-[#e2e8f0] shadow-sm">
              <div
                style="background-color: #e56026;"
                class="w-2 self-stretch shrink-0 rounded-full"
                aria-hidden="true"
              ></div>
              <p class="text-[#0f172a] text-lg sm:text-xl font-medium leading-[1.65]">
                A logo refresh cannot explain a confusing offer. Better words cannot rescue a layout that hides the next step. When each piece is made in isolation, customers do the work of joining it together. Your team keeps paying for the same decisions twice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S03: SCOPE SECTION (SOFT BUNDLE) ── */}
      <section
        id="scope"
        style="background-color: #f1f5f9; color: #0f172a;"
        class="py-16 md:py-24 border-b border-[#cbd5e1]"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div class="max-w-[68ch] mb-12">
            <span class="inline-block text-xs font-bold uppercase tracking-widest text-[#154476] mb-3">
              System Deliverables
            </span>
            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-4">
              Build a brand your team can actually use
            </h2>
          </div>

          {/* 6 Deliverables in 2-Column High-End Card Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                num: '01',
                title: 'A creative brief defining audience, positioning and the job each asset must do.',
                tag: 'Strategic Alignment',
                icon: 'ph-clipboard-text',
              },
              {
                num: '02',
                title: 'Visual direction with a clear rationale rather than disconnected moodboards.',
                tag: 'Design Logic',
                icon: 'ph-compass',
              },
              {
                num: '03',
                title: 'Brand identity elements scoped around the parts your business needs.',
                tag: 'Identity Assets',
                icon: 'ph-crown',
              },
              {
                num: '04',
                title: 'Voice guidance showing what to say, what to avoid and how to sound consistent.',
                tag: 'Voice & Tone',
                icon: 'ph-megaphone',
              },
              {
                num: '05',
                title: 'Website, campaign or sales copy matched to the agreed customer journey.',
                tag: 'Sales Copy',
                icon: 'ph-browser',
              },
              {
                num: '06',
                title: 'A practical handover covering agreed formats, usage rules and reusable applications.',
                tag: 'Asset Handover',
                icon: 'ph-folder-notch-open',
              },
            ].map((item) => (
              <div
                key={item.num}
                style="background-color: #ffffff; border: 1px solid #cbd5e1;"
                class="rounded-3xl p-6 sm:p-8 flex items-start gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  style="background-color: #f1f5f9; border: 1.5px solid #154476;"
                  class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-[#154476] text-xl group-hover:scale-110 transition-transform shadow-sm"
                >
                  <i class={`ph-bold ${item.icon}`} aria-hidden="true"></i>
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold uppercase tracking-wider text-[#154476]">
                      {item.tag}
                    </span>
                    <span class="text-xs font-black text-slate-400 font-mono">
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

          <div class="p-6 rounded-2xl bg-white border border-[#cbd5e1] max-w-2xl shadow-sm">
            <p class="text-[#0f172a] text-base sm:text-lg font-semibold leading-[1.6]">
              Agree the scope before work starts. Your priorities should determine the deliverables, not a generic package.
            </p>
          </div>
        </div>
      </section>

      {/* ── S04: COMPARISON SECTION (LIGHT BUNDLE) ── */}
      <section
        id="comparison"
        style="background-color: #ffffff; color: #0f172a;"
        class="py-16 md:py-24 border-b border-[#e2e8f0]"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div class="max-w-[68ch] mb-12">
            <span class="inline-block text-xs font-bold uppercase tracking-widest text-[#e56026] mb-3">
              Right-Sized Engagement
            </span>
            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-4">
              Choose the right kind of project
            </h2>
          </div>

          {/* 3 High-End Decision Panels */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div
              style="background-color: #f8fafc; border: 1.5px solid #cbd5e1;"
              class="p-7 sm:p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-[#154476]/50 transition-all duration-300"
            >
              <div>
                <div class="w-10 h-10 rounded-xl bg-[#154476]/10 text-[#154476] flex items-center justify-center text-lg font-bold mb-4">
                  01
                </div>
                <h3 class="text-2xl font-black text-[#0f172a] mb-3">Full Rebrand</h3>
                <p class="text-[#334155] text-base sm:text-lg leading-[1.6]">
                  A full rebrand changes the underlying identity.
                </p>
              </div>
              <div class="mt-8 pt-4 border-t border-[#cbd5e1] flex items-center justify-between text-xs font-bold text-[#154476] uppercase tracking-wider">
                <span>Scope</span>
                <span>Complete Transformation</span>
              </div>
            </div>

            <div
              style="background-color: #f8fafc; border: 1.5px solid #cbd5e1;"
              class="p-7 sm:p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-[#e56026]/50 transition-all duration-300"
            >
              <div>
                <div class="w-10 h-10 rounded-xl bg-[#e56026]/15 text-[#e56026] flex items-center justify-center text-lg font-bold mb-4">
                  02
                </div>
                <h3 class="text-2xl font-black text-[#0f172a] mb-3">Brand Evolution</h3>
                <p class="text-[#334155] text-base sm:text-lg leading-[1.6]">
                  A brand evolution keeps useful recognition and repairs the weak parts.
                </p>
              </div>
              <div class="mt-8 pt-4 border-t border-[#cbd5e1] flex items-center justify-between text-xs font-bold text-[#e56026] uppercase tracking-wider">
                <span>Scope</span>
                <span>Continuity &amp; Repair</span>
              </div>
            </div>

            <div
              style="background-color: #f8fafc; border: 1.5px solid #cbd5e1;"
              class="p-7 sm:p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-[#154476]/50 transition-all duration-300"
            >
              <div>
                <div class="w-10 h-10 rounded-xl bg-[#154476]/10 text-[#154476] flex items-center justify-center text-lg font-bold mb-4">
                  03
                </div>
                <h3 class="text-2xl font-black text-[#0f172a] mb-3">Campaign Project</h3>
                <p class="text-[#334155] text-base sm:text-lg leading-[1.6]">
                  A campaign project solves a narrower communication problem.
                </p>
              </div>
              <div class="mt-8 pt-4 border-t border-[#cbd5e1] flex items-center justify-between text-xs font-bold text-[#154476] uppercase tracking-wider">
                <span>Scope</span>
                <span>Targeted Objective</span>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#f1f5f9] border border-[#cbd5e1] max-w-2xl">
            <p class="text-[#0f172a] text-lg sm:text-xl font-bold leading-[1.5]">
              Choose the smallest scope that can do the job properly.
            </p>
          </div>
        </div>
      </section>

      {/* ── S05: DEMO / WALKTHROUGH SECTION (NAVY BUNDLE WITH MODERN TABS) ── */}
      <section
        id="demo"
        class="relative bg-gradient-to-br from-[#154476] via-[#0e2c50] to-[#071526] text-white py-16 md:py-24 border-b border-white/20 overflow-hidden"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div class="max-w-[68ch] mb-10">
            <span class="inline-block text-xs font-bold uppercase tracking-widest text-[#ffa24a] mb-3">
              Case Methodology
            </span>
            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              See how the thinking changes
            </h2>
            <p class="text-white/80 text-sm sm:text-base leading-[1.6]">
              Illustrative walkthrough. This is an original teaching example, not client work or a performance result.
            </p>
          </div>

          {/* Interactive Walkthrough Container */}
          <div class="max-w-4xl" id="walkthrough-container">
            {/* Step Selection Controls Group */}
            <div
              role="group"
              aria-label="Explore the example"
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6"
            >
              {[
                { id: 'step-1', num: 1, title: 'Scattered message' },
                { id: 'step-2', num: 2, title: 'Focused message' },
                { id: 'step-3', num: 3, title: 'Visual application' },
                { id: 'step-4', num: 4, title: 'Reusable rule' },
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
                  class="dc-btn-step px-4 py-3.5 rounded-2xl font-extrabold text-sm text-center transition-all duration-150 dc-focus-white flex items-center justify-center gap-2.5 min-h-[48px] min-w-[44px] shadow-sm hover:scale-[1.02] active:scale-[0.98]"
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
              <span id="walkthrough-status" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold uppercase tracking-wider text-[#ffa24a]">
                <span class="w-2 h-2 rounded-full bg-[#ffa24a]"></span>
                Step 1 of 4
              </span>
            </div>

            {/* Panels with Public Verbatim Headings and Paragraphs */}
            <div
              style="background-color: rgba(255,255,255,0.08); border: 2px solid rgba(255,255,255,0.3);"
              class="rounded-3xl p-7 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              {/* Panel 1 */}
              <div id="step-1" data-walkthrough-panel class="space-y-4">
                <span class="text-xs font-mono uppercase tracking-widest text-red-300 font-bold">
                  Problem State
                </span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Scattered message
                </h3>
                <p class="text-white text-lg sm:text-xl leading-[1.65]">
                  Premium solutions for modern businesses. A different promise on every asset.
                </p>
              </div>

              {/* Panel 2 */}
              <div id="step-2" data-walkthrough-panel class="space-y-4 hidden">
                <span class="text-xs font-mono uppercase tracking-widest text-[#ffa24a] font-bold">
                  Refined Proposition
                </span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Focused message
                </h3>
                <p class="text-white text-lg sm:text-xl leading-[1.65]">
                  A compact desk for rooms that also need to be lived in.
                </p>
              </div>

              {/* Panel 3 */}
              <div id="step-3" data-walkthrough-panel class="space-y-4 hidden">
                <span class="text-xs font-mono uppercase tracking-widest text-[#2cbcee] font-bold">
                  Design Layout
                </span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Visual application
                </h3>
                <p class="text-white text-lg sm:text-xl leading-[1.65]">
                  One product silhouette, a readable size line and a quiet hierarchy that puts fit before decoration.
                </p>
              </div>

              {/* Panel 4 */}
              <div id="step-4" data-walkthrough-panel class="space-y-4 hidden">
                <span class="text-xs font-mono uppercase tracking-widest text-emerald-300 font-bold">
                  System Standard
                </span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Reusable rule
                </h3>
                <p class="text-white text-lg sm:text-xl leading-[1.65]">
                  Lead with the buying decision. Support it with concrete product details. Keep decorative elements secondary.
                </p>
              </div>
            </div>

            {/* Static Fallback for No-JS */}
            <noscript>
              <div class="mt-8 space-y-6 pt-6 border-t border-white/20">
                <div class="space-y-2">
                  <h3 class="text-xl font-bold text-white">Scattered message</h3>
                  <p class="text-white text-base">Premium solutions for modern businesses. A different promise on every asset.</p>
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-bold text-white">Focused message</h3>
                  <p class="text-white text-base">A compact desk for rooms that also need to be lived in.</p>
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-bold text-white">Visual application</h3>
                  <p class="text-white text-base">One product silhouette, a readable size line and a quiet hierarchy that puts fit before decoration.</p>
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-bold text-white">Reusable rule</h3>
                  <p class="text-white text-base">Lead with the buying decision. Support it with concrete product details. Keep decorative elements secondary.</p>
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

      {/* ── S06: FIT SECTION (SOFT BUNDLE) ── */}
      <section
        id="fit"
        style="background-color: #f1f5f9; color: #0f172a;"
        class="py-16 md:py-24 border-b border-[#cbd5e1]"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Editorial Copy */}
            <div class="lg:col-span-7 max-w-[68ch]">
              <span class="inline-block text-xs font-bold uppercase tracking-widest text-[#154476] mb-3">
                Readiness Evaluation
              </span>
              <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-6">
                Is this the right next step?
              </h2>

              <div class="space-y-5 text-[#0f172a] text-base sm:text-lg lg:text-xl leading-[1.65]">
                <p>
                  This is for a new brand that needs a clear start, or an established business that has outgrown its current identity. It also suits teams whose design is sound but whose message needs focus. You do not have to throw away recognisable assets to fix an unclear system.
                </p>
                <p class="font-bold">
                  Bring the problem you need to solve. We can discuss whether the service fits before defining the work.
                </p>
              </div>
            </div>

            {/* Right Authored Checklist */}
            <div class="lg:col-span-5">
              <div
                style="background-color: #ffffff; border: 1.5px solid #cbd5e1;"
                class="rounded-3xl p-6 sm:p-8 shadow-sm"
              >
                <div class="flex items-center justify-between mb-5 pb-3 border-b border-slate-200">
                  <span class="text-xs font-bold uppercase tracking-wider text-[#154476]">
                    Qualification Checklist
                  </span>
                  <span class="text-xs font-mono text-slate-500 font-bold">5 CRITERIA</span>
                </div>
                <ul class="space-y-4">
                  {[
                    'A new brand that needs a clear start',
                    'An established business that has outgrown its current identity',
                    'A team whose design is sound but whose message needs focus',
                    'Preserving recognisable assets while fixing an unclear system',
                    'Discussing whether the service fits before defining scope',
                  ].map((criterion) => (
                    <li key={criterion} class="flex items-start gap-3.5 text-sm sm:text-base text-[#0f172a] font-bold leading-[1.5]">
                      <span
                        style="background-color: #154476; color: #ffffff;"
                        class="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 text-xs font-black shadow-sm"
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

      {/* ── S07: PROCESS SECTION (LIGHT BUNDLE) ── */}
      <section
        id="process"
        style="background-color: #ffffff; color: #0f172a;"
        class="py-16 md:py-24 border-b border-[#e2e8f0]"
      >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          <div class="max-w-[68ch] mb-14">
            <span class="inline-block text-xs font-bold uppercase tracking-widest text-[#e56026] mb-3">
              Delivery Workflow
            </span>
            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-4">
              From a clear brief to work you can assess
            </h2>
          </div>

          {/* 3 Sequential Stages */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              style="background-color: #f8fafc; border: 1.5px solid #cbd5e1;"
              class="rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#154476]/50 transition-all duration-300"
            >
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-10 h-10 rounded-2xl bg-[#154476] text-white font-extrabold text-base flex items-center justify-center shadow-md">
                    01
                  </span>
                  <span class="text-xs font-bold uppercase tracking-wider text-[#154476] font-mono">Stage 1 · Review</span>
                </div>
                <h3 class="text-2xl font-black text-[#0f172a] mb-3">Audience &amp; Decision</h3>
                <p class="text-[#334155] text-base sm:text-lg leading-[1.65]">
                  Start with your audience and the decision you want them to make. Review the existing material and agree what needs to change.
                </p>
              </div>
            </div>

            <div
              style="background-color: #f8fafc; border: 1.5px solid #cbd5e1;"
              class="rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#e56026]/50 transition-all duration-300"
            >
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-10 h-10 rounded-2xl bg-[#e56026] text-[#0f172a] font-extrabold text-base flex items-center justify-center shadow-md">
                    02
                  </span>
                  <span class="text-xs font-bold uppercase tracking-wider text-[#e56026] font-mono">Stage 2 · Direction</span>
                </div>
                <h3 class="text-2xl font-black text-[#0f172a] mb-3">Brief &amp; Refine</h3>
                <p class="text-[#334155] text-base sm:text-lg leading-[1.65]">
                  Develop the direction against that brief. Review it with one accountable decision maker, then refine the agreed assets.
                </p>
              </div>
            </div>

            <div
              style="background-color: #f8fafc; border: 1.5px solid #cbd5e1;"
              class="rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#154476]/50 transition-all duration-300"
            >
              <div>
                <div class="flex items-center justify-between mb-5">
                  <span class="w-10 h-10 rounded-2xl bg-[#154476] text-white font-extrabold text-base flex items-center justify-center shadow-md">
                    03
                  </span>
                  <span class="text-xs font-bold uppercase tracking-wider text-[#154476] font-mono">Stage 3 · Handover</span>
                </div>
                <h3 class="text-2xl font-black text-[#0f172a] mb-3">Measurement &amp; Steps</h3>
                <p class="text-[#334155] text-base sm:text-lg leading-[1.65]">
                  Keep scope, approvals and measurement connected. A strong handover makes the next step clear instead of leaving your team to guess.
                </p>
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
            <span class="inline-block text-xs font-bold uppercase tracking-widest text-[#154476] mb-3">
              Direct Answers
            </span>
            <h2 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-3">
              Questions before you start
            </h2>
          </div>

          {/* Native HTML5 Details / Summary Accordions */}
          <div class="space-y-4">
            {[
              {
                q: 'Do we need a completely new logo?',
                a: 'Not necessarily. Existing recognition may be worth keeping. Start by deciding whether the problem is identity, consistency, messaging or a specific campaign.',
              },
              {
                q: 'Can you work with existing guidelines?',
                a: 'Yes. Share the rules and approved assets already in use. The project can build within those boundaries rather than introduce a competing style.',
              },
              {
                q: 'Do you write the copy as well as design?',
                a: 'Yes. Bell Bee’s advertised design and copy service includes brand identity and sales copy. The exact assets belong in the agreed project scope.',
              },
              {
                q: 'How many revisions are included?',
                a: 'Agree the review stages, decision maker and revision scope before work begins. This page does not promise a fixed allowance.',
              },
              {
                q: 'What will our team receive?',
                a: 'The agreed finished assets and usage guidance. Confirm editable formats, export requirements and font or image licensing in the written scope.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                style="border: 1.5px solid #cbd5e1;"
                class="dc-faq-item bg-white rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <summary
                  class="flex items-center justify-between p-6 sm:p-7 cursor-pointer font-extrabold text-base sm:text-lg text-[#0f172a] select-none dc-focus-light min-h-[48px]"
                >
                  <span class="pr-4">{faq.q}</span>
                  <span class="w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#154476"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="dc-faq-icon transition-transform duration-200"
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
          <div class="bg-[#f8fafc]/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-2 border-[#0f172a]/20 shadow-xl space-y-6">
            <span class="inline-block text-xs font-extrabold uppercase tracking-widest text-[#0f172a] bg-white/30 px-3 py-1 rounded-full">
              Get Started
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
                class="inline-flex items-center justify-center gap-3 px-9 py-5 font-bold text-base sm:text-lg rounded-2xl transition-all duration-200 hover:!bg-[#0f172a] hover:!text-white hover:-translate-y-0.5 active:!bg-[#000000] active:!text-white dc-focus-dark min-h-[48px] min-w-[44px] shadow-2xl"
              >
                <span>Discuss your creative project</span>
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

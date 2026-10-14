import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'
import { type Handle } from 'remix/ui'
import { type WPCaseStudy } from '../../data/wordpress.ts'

interface CaseStudiesPageProps {
  caseStudies: WPCaseStudy[]
}

const industryTags = [
  { icon: "ph-shopping-bag", label: "E-Commerce" },
  { icon: "ph-code", label: "SaaS & Tech" },
  { icon: "ph-fork-knife", label: "Food & Beverage" },
  { icon: "ph-first-aid", label: "Health & Wellness" },
  { icon: "ph-buildings", label: "Real Estate" },
  { icon: "ph-graduation-cap", label: "Education" },
  { icon: "ph-bank", label: "Finance" },
  { icon: "ph-t-shirt", label: "Fashion & Retail" },
]

const cardGradients = [
  "from-violet-600 to-fuchsia-600",
  "from-cyan-500 to-blue-600",
  "from-rose-500 to-pink-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-indigo-600 to-blue-700",
  "from-pink-500 to-rose-600",
  "from-teal-500 to-emerald-600",
]

const accentColors = [
  "text-violet-500",
  "text-cyan-500",
  "text-rose-500",
  "text-emerald-500",
  "text-amber-500",
  "text-indigo-500",
  "text-pink-500",
  "text-teal-500",
]

export function CaseStudiesPage(handle: Handle<CaseStudiesPageProps>) {
  const { caseStudies } = handle.props

  return () => (
    <Layout
      title="Digital Marketing Case Studies | Bell Bee Media"
      description="Explore Bell Bee Media's digital marketing case studies. Real campaigns, transparent metrics, and proven strategies across SEO, social media, PPC, and brand building."
    >
      {/* ── HERO ── */}
      <section class="relative bg-surface-dark0 pt-28 pb-0 overflow-hidden min-h-[70vh] flex items-center bb-noise">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(21,68,118,0.5)_0%,transparent_65%)] pointer-events-none" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(139,92,246,0.2)_0%,transparent_60%)] pointer-events-none" />
        <div class="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div class="container mx-auto px-4 max-w-6xl relative z-10 py-16 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div class="bb-pill-enter inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8 backdrop-blur-sm">
                <i class="ph-fill ph-folder-open text-secondary" />
                Case Studies Portfolio
              </div>
              <h1 class="bb-stage text-5xl md:text-6xl font-black text-white mb-6 leading-[1.05]" style="animation-delay:0.1s">
                Real Campaigns.<br />
                <span class="bb-shimmer-text font-black">
                  Transparent Results.
                </span>
              </h1>
              <p class="bb-stage text-lg text-white/60 leading-relaxed mb-10 max-w-xl" style="animation-delay:0.25s">
                Every case study includes the challenge, the strategy we deployed, and the measurable outcomes we delivered — no vanity metrics, no cherry-picked data.
              </p>
              <div class="bb-stage flex flex-wrap gap-4" style="animation-delay:0.4s">
                <a href={routes.getProposal.href()} data-glow-btn class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/30 hover:scale-[1.02]">
                  Start Your Case Study <i class="ph ph-arrow-right" />
                </a>
                <a href="#case-studies" class="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/15 hover:bg-white/10 transition-all backdrop-blur-sm">
                  Browse Portfolio <i class="ph ph-arrow-down" />
                </a>
              </div>
            </div>

            {/* Stats cluster */}
            <div class="grid grid-cols-2 gap-4" data-stagger-group>
              {[
                { value: `${caseStudies.length}+`, label: "Active Case Studies", icon: "ph-folder-open", color: "from-violet-600/20 to-violet-600/5 border-violet-500/20 text-violet-400" },
                { value: "14", label: "Industries Covered", icon: "ph-buildings", color: "from-cyan-600/20 to-cyan-600/5 border-cyan-500/20 text-cyan-400" },
                { value: "£35M+", label: "Revenue Influenced", icon: "ph-currency-pound", color: "from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-400" },
                { value: "98%", label: "Client Satisfaction", icon: "ph-star", color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400" },
              ].map(s => (
                <div class={`p-6 rounded-2xl bg-gradient-to-br ${s.color} border backdrop-blur-sm flex flex-col gap-3`} data-stagger-item>
                  <div class="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-base">
                    <i class={`ph-fill ${s.icon}`} />
                  </div>
                  <div data-count={s.value} class="text-3xl font-black text-white">{s.value}</div>
                  <div class="text-xs text-white/60 font-medium leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-1 to-transparent pointer-events-none" />
      </section>

      {/* ── CASE STUDIES GRID ── */}
      <section id="case-studies" class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="text-center mb-16" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6">
              <i class="ph-fill ph-star" /> Featured Work
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-4">Case Studies Across Every Channel</h2>
            <p class="text-text-secondary max-w-2xl mx-auto">From early-stage startups to established brands — measurable growth across every digital marketing discipline.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger-group>
            {caseStudies.map((cs, i) => (
              <div data-stagger-item data-tilt data-tilt-intensity="3" class="group relative flex flex-col bg-white rounded-[1.75rem] border border-surface-2 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
                {/* Metric header */}
                <div class={`relative h-44 bg-gradient-to-br ${cardGradients[i % cardGradients.length]} flex flex-col items-center justify-center overflow-hidden`}>
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25)_0%,transparent_60%)] pointer-events-none" />
                  <div class="relative z-10 text-center">
                    <div class="text-5xl font-black text-white mb-1.5 tracking-tight">{cs.metric}</div>
                    <div class="text-white/80 text-sm font-semibold">{cs.metricLabel}</div>
                  </div>
                  {/* tag badge */}
                  <div class="absolute top-5 left-5">
                    <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold border border-white/20">
                      {cs.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div class="p-7 flex flex-col flex-1">
                  <h3 class="font-black text-lg text-surface-dark0 mb-3 group-hover:text-primary transition-colors leading-snug">{cs.title}</h3>
                  <p class="text-sm text-text-secondary leading-relaxed flex-1">{cs.description}</p>
                  <div class="mt-6 pt-5 border-t border-surface-2 flex items-center justify-between">
                    <span class={`text-sm font-bold ${accentColors[i % accentColors.length]}`}>View Details</span>
                    <div class="w-9 h-9 rounded-full bg-surface-1 border border-surface-2 flex items-center justify-center text-text-secondary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                      <i class="ph-bold ph-arrow-up-right text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-14" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/8 border border-secondary/15 text-secondary text-sm font-semibold mb-6">
              <i class="ph-fill ph-buildings" /> Industries We Serve
            </div>
            <h2 class="text-4xl font-black text-surface-dark0 mb-3">Experience Across 14+ Industries</h2>
            <p class="text-text-secondary max-w-xl mx-auto">Deep sector knowledge means we hit the ground running — no learning curve, just results.</p>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4" data-stagger-group>
            {industryTags.map(ind => (
              <div data-stagger-item class="group flex items-center gap-3 p-5 rounded-2xl border border-surface-2 bg-surface-1 hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                <div class="w-10 h-10 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white transition-all shrink-0">
                  <i class={`ph-fill ${ind.icon} text-lg`} />
                </div>
                <span class="font-semibold text-sm text-surface-dark1 group-hover:text-white transition-colors leading-tight">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="py-24 bg-surface-dark0 relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(21,68,118,0.6)_0%,transparent_70%)] pointer-events-none" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(245,158,11,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div class="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <div data-reveal="scale" class="bg-gradient-to-br from-primary via-[#0f3060] to-surface-dark0 p-10 md:p-20 rounded-[40px] text-white overflow-hidden relative shadow-2xl">
            <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-secondary/25 blur-[80px] pointer-events-none"></div>
            <div class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-light/15 blur-[80px] pointer-events-none"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] border border-white/5 pointer-events-none"></div>

            <div class="relative z-10 max-w-2xl mx-auto text-center">
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium mb-8">
                <i class="ph-fill ph-trophy text-secondary" /> Your Story Next
              </span>
              <h2 class="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to Become Our<br />Next Success Story?</h2>
              <p class="text-xl text-white/60 mb-10 leading-relaxed">Tell us about your challenges and we'll map out a strategy to overcome them — with real metrics to back it up.</p>
              <a href={routes.getProposal.href()} data-glow-btn class="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white font-black text-lg rounded-full hover:bg-secondary/90 transition-all shadow-2xl shadow-secondary/30 hover:scale-[1.03]">
                Get Your Free Proposal <i class="ph ph-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

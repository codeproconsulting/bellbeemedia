import { Layout } from './layout.tsx'
import { routes } from '../routes.ts'

interface Project {
  title: string
  client: string
  category: string
  metric: string
  metricLabel: string
  desc: string
  gradient: string
  icon: string
  accentColor: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "Global E-Commerce Expansion",
    client: "StyleStore International",
    category: "Performance Marketing",
    metric: "+340%",
    metricLabel: "Conversion Rate",
    desc: "Scale-up search and social advertising across 14 countries, driving massive sales growth through precision audience segmentation.",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    accentColor: "text-violet-400",
    icon: "ph-shopping-cart",
    tags: ["Meta Ads", "Google Shopping", "14 Markets"]
  },
  {
    title: "Search Traffic Scale-Up",
    client: "Fintech Leaders Inc.",
    category: "SEO & Content",
    metric: "1.2M",
    metricLabel: "Monthly Visitors",
    desc: "Bespoke content strategy and technical SEO audit positioned the client at #1 for critical commercial keywords.",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    accentColor: "text-cyan-400",
    icon: "ph-chart-line-up",
    tags: ["Technical SEO", "Content Strategy", "Link Building"]
  },
  {
    title: "Viral Brand Re-launch",
    client: "Aura Skincare",
    category: "Branding & Social",
    metric: "4.8M",
    metricLabel: "Video Impressions",
    desc: "Complete visual identity overhaul combined with a strategic micro-influencer product launch campaign across TikTok & Instagram.",
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    accentColor: "text-rose-400",
    icon: "ph-sparkles",
    tags: ["Influencer Marketing", "Brand Identity", "TikTok"]
  },
  {
    title: "High-Performance SaaS Redesign",
    client: "TaskFlow Platform",
    category: "Web Solutions",
    metric: "45%",
    metricLabel: "Bounce Rate Reduction",
    desc: "Stunning, interactive landing page redesign and Core Web Vitals optimization for maximum lead generation and conversion.",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    accentColor: "text-emerald-400",
    icon: "ph-desktop",
    tags: ["CRO", "UI/UX Design", "Performance"]
  },
  {
    title: "Email Funnel Automation",
    client: "Wellness Club",
    category: "Performance Marketing",
    metric: "5.2x",
    metricLabel: "Email ROI",
    desc: "Engineered automated customer journeys personalizing wellness offers based on user survey responses and behavioral triggers.",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    accentColor: "text-amber-400",
    icon: "ph-envelope",
    tags: ["Email Automation", "Klaviyo", "Segmentation"]
  },
  {
    title: "B2B Lead Generation Engine",
    client: "Nexus Logistics",
    category: "Digital Marketing",
    metric: "+210%",
    metricLabel: "Qualified Leads MoM",
    desc: "Targeted LinkedIn advertising combined with custom CRO landing pages, delivering qualified enterprise leads at scale.",
    gradient: "from-blue-600 via-indigo-700 to-violet-800",
    accentColor: "text-blue-400",
    icon: "ph-users",
    tags: ["LinkedIn Ads", "CRO", "B2B Strategy"]
  }
]

const stats = [
  { value: "£35M+", label: "Client Revenue Influenced", icon: "ph-currency-pound" },
  { value: "3.4x", label: "Average Client ROAS", icon: "ph-chart-line-up" },
  { value: "60+", label: "Brands Scaled", icon: "ph-buildings" },
  { value: "98%", label: "Client Retention", icon: "ph-heart" },
]

export function OurWorkPage() {
  return () => (
    <Layout
      title="Our Portfolio & Client Case Studies | Bell Bee Media"
      description="Browse the marketing campaigns, ad creative production, and conversion websites we built for D2C brands. Real numbers, verified scaling results."
    >
      {/* ── HERO ── */}
      <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-surface-dark0 pt-20 bb-noise">
        {/* animated mesh background */}
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(21,68,118,0.4)_0%,transparent_60%)] pointer-events-none" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(245,158,11,0.15)_0%,transparent_55%)] pointer-events-none" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_80%,rgba(139,92,246,0.1)_0%,transparent_55%)] pointer-events-none" />

        {/* grid overlay */}
        <div class="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div class="container mx-auto px-4 max-w-6xl relative z-10 py-24 text-center">
          <div class="bb-pill-enter inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8 backdrop-blur-sm">
            <i class="ph-fill ph-folder-open text-secondary" />
            Our Work Portfolio
          </div>
          <h1 class="bb-stage text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]" style="animation-delay:0.1s">
            Real Work.<br />
            <span class="bb-shimmer-text font-black">
              Real Growth.
            </span>
          </h1>
          <p class="bb-stage text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed" style="animation-delay:0.25s">
            We focus on delivering measurable commercial success. Discover how we help brands scale through targeted digital marketing, high-converting design, and advanced performance engineering.
          </p>
          <div class="bb-stage flex flex-col sm:flex-row gap-4 justify-center" style="animation-delay:0.4s">
            <a href={routes.ourWorkCaseStudies.href()} data-glow-btn class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition-all shadow-2xl shadow-secondary/30 hover:scale-[1.02]">
              View Case Studies <i class="ph ph-arrow-right" />
            </a>
            <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm">
              Start Your Campaign <i class="ph ph-sparkle" />
            </a>
          </div>
        </div>

        {/* bottom fade */}
        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-1 to-transparent pointer-events-none" />
      </section>

      {/* ── STATS TICKER ── */}
      <section class="bg-surface-1 border-b border-surface-2 py-0">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-surface-2" data-stagger-group>
            {stats.map((s) => (
              <div class="flex flex-col items-center justify-center py-10 px-6 gap-2 group" data-stagger-item>
                <div class="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center text-lg mb-2">
                  <i class={`ph-fill ${s.icon}`} />
                </div>
                <span data-count={s.value} class="text-3xl md:text-4xl font-black text-surface-dark0 group-hover:text-primary transition-colors">{s.value}</span>
                <span class="text-xs text-text-secondary font-medium text-center uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="text-center mb-16" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6">
              <i class="ph-fill ph-star" /> Featured Campaigns
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-4">Campaigns That Moved the Needle</h2>
            <p class="text-text-secondary max-w-2xl mx-auto">From ambitious D2C startups to established enterprises — these are the growth stories that define what we do.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger-group>
            {projects.map((project) => (
              <div data-tilt data-tilt-intensity="5" data-stagger-item class="group relative flex flex-col bg-white rounded-[1.75rem] border border-surface-2 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                {/* Gradient visual header */}
                <div class={`relative h-52 bg-gradient-to-br ${project.gradient} p-7 flex flex-col justify-between overflow-hidden`}>
                  {/* shine overlay */}
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2)_0%,transparent_60%)] pointer-events-none" />
                  {/* noise texture */}
                  <div class="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] pointer-events-none" />

                  <div class="flex items-center justify-between relative z-10">
                    <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                      {project.category}
                    </span>
                    <div class="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white text-xl border border-white/20">
                      <i class={`ph-fill ${project.icon}`} />
                    </div>
                  </div>

                  <div class="relative z-10">
                    <span class="text-white/70 text-xs font-bold uppercase tracking-widest block mb-1">{project.client}</span>
                    <h3 class="text-white text-xl font-black leading-tight">{project.title}</h3>
                  </div>
                </div>

                {/* Body */}
                <div class="p-7 flex flex-col flex-1">
                  <p class="text-text-secondary text-sm leading-relaxed mb-6 flex-1">{project.desc}</p>

                  {/* Tags */}
                  <div class="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span class="text-xs font-semibold px-3 py-1 rounded-full bg-surface-1 text-text-secondary border border-surface-2">{tag}</span>
                    ))}
                  </div>

                  {/* Metric */}
                  <div class="pt-5 border-t border-surface-2 flex items-center justify-between">
                    <div>
                      <div class={`text-3xl font-black ${project.accentColor}`}>{project.metric}</div>
                      <div class="text-xs text-text-secondary font-medium mt-0.5">{project.metricLabel}</div>
                    </div>
                    <div class="w-10 h-10 rounded-full bg-surface-1 border border-surface-2 flex items-center justify-center text-text-secondary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                      <i class="ph-bold ph-arrow-up-right text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUB-PAGES NAV CARDS ── */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-14" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/8 border border-secondary/15 text-secondary text-sm font-semibold mb-6">
              <i class="ph-fill ph-compass" /> Explore In Depth
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-4">Go Deeper Into Our Work</h2>
            <p class="text-text-secondary max-w-xl mx-auto">Browse every dimension of our work — from granular case studies to aggregated results by channel and industry.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-stagger-group>
            {/* Case Studies */}
            <a href={routes.ourWorkCaseStudies.href()} data-tilt data-tilt-intensity="4" data-stagger-item class="group relative flex flex-col justify-between p-8 rounded-[1.75rem] bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/15 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden min-h-[220px]">
              <div class="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all" />
              <div>
                <div class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-folder-open" />
                </div>
                <h3 class="text-xl font-black text-surface-dark0 mb-2 group-hover:text-primary transition-colors">Case Studies</h3>
                <p class="text-sm text-text-secondary leading-relaxed">Real campaigns with challenge, strategy, and verified outcome data. Every industry, every channel.</p>
              </div>
              <div class="flex items-center gap-2 text-primary text-sm font-bold mt-6">
                Explore Case Studies <i class="ph ph-arrow-right group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Client Results */}
            <a href={routes.ourWorkClientResults.href()} data-tilt data-tilt-intensity="4" data-stagger-item class="group relative flex flex-col justify-between p-8 rounded-[1.75rem] bg-gradient-to-br from-secondary/5 to-amber-500/10 border border-secondary/15 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 overflow-hidden min-h-[220px]">
              <div class="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-secondary/10 blur-2xl group-hover:bg-secondary/20 transition-all" />
              <div>
                <div class="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-chart-bar" />
                </div>
                <h3 class="text-xl font-black text-surface-dark0 mb-2 group-hover:text-secondary transition-colors">Client Results</h3>
                <p class="text-sm text-text-secondary leading-relaxed">Hard ROI numbers, ROAS figures, traffic growth data, and revenue impact across all channels.</p>
              </div>
              <div class="flex items-center gap-2 text-secondary text-sm font-bold mt-6">
                See the Numbers <i class="ph ph-arrow-right group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Success Stories */}
            <a href={routes.ourWorkSuccessStories.href()} data-tilt data-tilt-intensity="4" data-stagger-item class="group relative flex flex-col justify-between p-8 rounded-[1.75rem] bg-gradient-to-br from-emerald-500/5 to-teal-500/10 border border-emerald-500/15 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden min-h-[220px]">
              <div class="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-all" />
              <div>
                <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-sparkles" />
                </div>
                <h3 class="text-xl font-black text-surface-dark0 mb-2 group-hover:text-emerald-600 transition-colors">Success Stories</h3>
                <p class="text-sm text-text-secondary leading-relaxed">Transformational brand journeys — zero to millions, zero to industry leader, zero to profitable.</p>
              </div>
              <div class="flex items-center gap-2 text-emerald-600 text-sm font-bold mt-6">
                Read the Stories <i class="ph ph-arrow-right group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Industry Expertise */}
            <a href={routes.ourWorkIndustryExpertise.href()} data-tilt data-tilt-intensity="4" data-stagger-item class="group relative flex flex-col justify-between p-8 rounded-[1.75rem] bg-gradient-to-br from-violet-500/5 to-indigo-500/10 border border-violet-500/15 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 overflow-hidden min-h-[220px]">
              <div class="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-violet-500/10 blur-2xl group-hover:bg-violet-500/20 transition-all" />
              <div>
                <div class="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-600 flex items-center justify-center text-2xl mb-5">
                  <i class="ph-fill ph-briefcase" />
                </div>
                <h3 class="text-xl font-black text-surface-dark0 mb-2 group-hover:text-violet-600 transition-colors">Industry Expertise</h3>
                <p class="text-sm text-text-secondary leading-relaxed">Deep sector knowledge across e-commerce, SaaS, local business, health, finance & more.</p>
              </div>
              <div class="flex items-center gap-2 text-violet-600 text-sm font-bold mt-6">
                Explore Industries <i class="ph ph-arrow-right group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="py-24 bg-surface-dark0 relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(21,68,118,0.5)_0%,transparent_70%)] pointer-events-none" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(245,158,11,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div class="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div data-reveal="scale" class="bg-gradient-to-br from-primary via-[#0f3060] to-surface-dark0 p-10 md:p-20 rounded-[40px] text-white overflow-hidden relative shadow-2xl">
            <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-secondary/25 blur-[80px] pointer-events-none"></div>
            <div class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-light/15 blur-[80px] pointer-events-none"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] border border-white/5 pointer-events-none"></div>

            <div class="relative z-10 max-w-2xl mx-auto text-center">
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium mb-8">
                <i class="ph-fill ph-trophy text-secondary" /> Ready to Join the Portfolio?
              </span>
              <h2 class="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Want to See Similar Results<br />
                <span class="bb-shimmer-orange">for Your Business?</span>
              </h2>
              <p class="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                Schedule a consultation. We'll analyze your current marketing channels and deliver a customized strategy proposal — completely free.
              </p>
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

import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'

const heroStats = [
  { value: "60+", label: "Brands Scaled", icon: "ph-buildings" },
  { value: "3M+", label: "Social Followers Built", icon: "ph-users" },
  { value: "£35M+", label: "Revenue Influenced", icon: "ph-currency-pound" },
  { value: "15+", label: "Countries Active", icon: "ph-globe" },
]

const primaryIndustries = [
  {
    icon: "ph-shopping-bag",
    title: "E-Commerce",
    overview: "From Shopify startups to multi-million pound online retailers, we understand what makes e-commerce brands grow: the right product-market fit, the right creative, the right margins.",
    services: [
      "Social commerce (Instagram & TikTok Shop)",
      "Google Shopping & Meta ROAS campaigns",
      "Product photography & video",
      "Email & SMS retention marketing",
      "Conversion rate optimisation",
    ],
    metric: "Average 3.8x ROAS",
    metricLabel: "across e-commerce clients",
    gradient: "from-violet-600 to-fuchsia-600",
    accentBg: "bg-violet-500/10",
    accentText: "text-violet-600",
    accentBorder: "border-violet-500/20",
  },
  {
    icon: "ph-code",
    title: "SaaS & Technology",
    overview: "B2B SaaS requires a different playbook — longer sales cycles, product-led growth mechanics, and LinkedIn-heavy ABM strategies. We've helped dozens of SaaS companies reduce CAC and grow MRR.",
    services: [
      "SEO & technical content marketing",
      "LinkedIn demand generation",
      "Product demo campaigns",
      "Case study production",
      "MQL-optimised landing pages",
    ],
    metric: "Average 45% CAC reduction",
    metricLabel: "through organic channels",
    gradient: "from-cyan-500 to-blue-600",
    accentBg: "bg-cyan-500/10",
    accentText: "text-cyan-600",
    accentBorder: "border-cyan-500/20",
  },
  {
    icon: "ph-map-pin",
    title: "Local Business",
    overview: "Local businesses compete in one of the toughest arenas — limited budgets, high competition, and real-world reputation at stake. We help local brands dominate their area digitally.",
    services: [
      "Google Business Profile optimisation",
      "Local SEO & citation building",
      "Hyper-targeted local Meta ads",
      "Review generation campaigns",
      "Local social media management",
    ],
    metric: "Average 2.2x increase",
    metricLabel: "in local lead volume",
    gradient: "from-emerald-500 to-teal-600",
    accentBg: "bg-emerald-500/10",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-500/20",
  },
]

const secondaryIndustries = [
  { icon: "ph-first-aid", label: "Health & Wellness" },
  { icon: "ph-fork-knife", label: "Food & Beverage" },
  { icon: "ph-t-shirt", label: "Fashion & Retail" },
  { icon: "ph-graduation-cap", label: "Education & EdTech" },
  { icon: "ph-bank", label: "Finance & Fintech" },
  { icon: "ph-buildings", label: "Real Estate" },
  { icon: "ph-car", label: "Automotive" },
  { icon: "ph-suitcase-rolling", label: "Travel & Hospitality" },
]

const advantages = [
  {
    icon: "ph-clock",
    title: "Faster Ramp-Up",
    desc: "Industry-specific knowledge eliminates the learning curve and delivers results faster.",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    icon: "ph-target",
    title: "Sharper Targeting",
    desc: "We know your ideal customer profile before your first brief — we've built campaigns for them before.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: "ph-shield-check",
    title: "Fewer Costly Mistakes",
    desc: "Sector experience means we avoid common pitfalls that generic agencies stumble into.",
    gradient: "from-emerald-500 to-teal-600",
  },
]

export function IndustryExpertisePage() {
  return () => (
    <Layout
      title="Digital Marketing for E-Commerce, SaaS & Local Business | Bell Bee Media"
      description="Bell Bee Media specialises in digital marketing for e-commerce, SaaS, and local businesses. Industry-specific strategies that drive measurable growth for your sector."
    >
      {/* ── HERO ── */}
      <section class="relative bg-surface-dark0 min-h-[75vh] flex items-center pt-28 pb-8 overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_55%,rgba(21,68,118,0.55)_0%,transparent_65%)] pointer-events-none" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(16,185,129,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div class="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div class="container mx-auto px-4 max-w-6xl relative z-10 py-12 w-full">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8 backdrop-blur-sm">
              <i class="ph-fill ph-briefcase text-secondary" />
              Industry Expertise
            </div>
            <h1 class="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05]">
              Deep Industry Expertise<br />
              <span class="bg-gradient-to-r from-secondary via-amber-400 to-orange-400 bg-clip-text text-transparent">
                for Your Sector.
              </span>
            </h1>
            <p class="text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
              Generic marketing doesn't work. We bring sector-specific knowledge, channel expertise, and audience understanding to e-commerce, SaaS, and local business growth.
            </p>
            <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/30 hover:scale-[1.02]">
              Discuss Your Industry <i class="ph ph-arrow-right" />
            </a>
          </div>

          {/* stat row */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {heroStats.map(s => (
              <div class="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <i class={`ph-fill ${s.icon} text-secondary text-2xl`} />
                <span class="text-3xl font-black text-white">{s.value}</span>
                <span class="text-xs text-white/50 font-medium text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ── PRIMARY INDUSTRIES ── */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6">
              <i class="ph-fill ph-buildings" /> Our Specialisations
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-4">Industries We Know Inside Out</h2>
            <p class="text-text-secondary max-w-2xl mx-auto">We don't claim to be generalists who work with everyone. We've gone deep in these sectors and built playbooks that deliver consistent results.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {primaryIndustries.map(ind => (
              <div class="group relative flex flex-col bg-white rounded-[1.75rem] border border-surface-2 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* gradient header */}
                <div class={`bg-gradient-to-br ${ind.gradient} p-8 flex items-center gap-4`}>
                  <div class="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white text-3xl border border-white/20 shrink-0">
                    <i class={`ph-fill ${ind.icon}`} />
                  </div>
                  <h3 class="font-black text-white text-2xl leading-tight">{ind.title}</h3>
                </div>

                {/* content */}
                <div class="p-8 flex-1 flex flex-col">
                  <p class="text-text-secondary leading-relaxed text-sm mb-6">{ind.overview}</p>

                  <div class="flex flex-col gap-2.5 flex-1">
                    {ind.services.map(s => (
                      <div class="flex items-center gap-2.5 text-sm text-text-secondary">
                        <i class={`ph-fill ph-check-circle ${ind.accentText} shrink-0 text-base`} />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>

                  {/* metric footer */}
                  <div class={`mt-6 pt-6 border-t border-surface-2 flex items-center gap-3 p-4 rounded-xl ${ind.accentBg} border ${ind.accentBorder}`}>
                    <i class={`ph-fill ph-chart-line-up ${ind.accentText} text-xl shrink-0`} />
                    <div>
                      <div class={`font-black text-base ${ind.accentText}`}>{ind.metric}</div>
                      <div class="text-xs text-text-secondary">{ind.metricLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECONDARY INDUSTRIES ── */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-14">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/8 border border-secondary/15 text-secondary text-sm font-semibold mb-6">
              <i class="ph-fill ph-grid-four" /> Also Active In
            </div>
            <h2 class="text-4xl font-black text-surface-dark0 mb-3">11 Other Sectors We're Active In</h2>
            <p class="text-text-secondary max-w-xl mx-auto">Our experience extends across a wide spectrum of industries beyond our core three specialisations.</p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {secondaryIndustries.map(s => (
              <div class="group flex items-center gap-3 p-5 rounded-2xl border border-surface-2 bg-white hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                <div class="w-10 h-10 rounded-xl bg-surface-1 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white transition-all shrink-0">
                  <i class={`ph-fill ${s.icon} text-lg`} />
                </div>
                <span class="font-semibold text-sm text-surface-dark1 group-hover:text-white transition-colors leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* left */}
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-8">
                <i class="ph-fill ph-lightbulb" /> Why It Matters
              </div>
              <h2 class="text-4xl font-black text-surface-dark0 mb-6 leading-tight">Industry Knowledge<br />Accelerates Your Growth</h2>
              <p class="text-text-secondary leading-relaxed mb-4">A marketing agency that works with everyone effectively works with no one. Industry-specific knowledge means we already understand your buyer personas, seasonal patterns, regulatory constraints, and what messaging converts in your market.</p>
              <p class="text-text-secondary leading-relaxed mb-8">We don't spend 3 months learning your industry before we start delivering. We hit the ground running with frameworks, creative templates, and tested strategies that are proven in your sector.</p>

              <div class="flex flex-col gap-4">
                {advantages.map(a => (
                  <div class="flex gap-4 items-start">
                    <div class={`w-11 h-11 rounded-2xl bg-gradient-to-br ${a.gradient} flex items-center justify-center text-white text-lg shrink-0 shadow-sm`}>
                      <i class={`ph-fill ${a.icon}`} />
                    </div>
                    <div>
                      <div class="font-black text-surface-dark0 mb-1">{a.title}</div>
                      <div class="text-sm text-text-secondary leading-relaxed">{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* right: explainer panel */}
            <div class="bg-surface-dark0 rounded-[1.75rem] p-10 flex flex-col gap-6 relative overflow-hidden">
              <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(21,68,118,0.5)_0%,transparent_70%)] pointer-events-none" />
              <div class="relative z-10">
                <h3 class="font-black text-xl text-white mb-6">What Makes Our Approach Different</h3>
                <div class="flex flex-col gap-5">
                  {[
                    { icon: "ph-user", text: "We assign clients to account managers with direct experience in their sector — not general account managers who rotate across all industries." },
                    { icon: "ph-eye", text: "Our creative team studies competitor campaigns, seasonal trends, and audience behaviours specific to your market before producing any content." },
                    { icon: "ph-chart-bar", text: "We benchmark your performance against industry-specific KPIs, not generic marketing averages that mean nothing in your context." },
                  ].map(item => (
                    <div class="flex gap-4 items-start">
                      <div class="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-secondary shrink-0">
                        <i class={`ph-fill ${item.icon}`} />
                      </div>
                      <p class="text-white/70 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="py-24 bg-surface-dark0 relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(21,68,118,0.6)_0%,transparent_70%)] pointer-events-none" />
        <div class="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium mb-8">
            <i class="ph-fill ph-handshake text-secondary" /> Industry-First Agency
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Work With an Agency<br />That Knows Your Industry</h2>
          <p class="text-xl text-white/60 mb-10 leading-relaxed">Tell us about your business and sector — we'll show you exactly how we'd approach your growth.</p>
          <a href={routes.getProposal.href()} class="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white font-black text-lg rounded-full hover:bg-secondary/90 transition-all shadow-2xl shadow-secondary/30 hover:scale-[1.03]">
            Get Your Free Industry Strategy <i class="ph ph-arrow-right" />
          </a>
        </div>
      </section>
    </Layout>
  )
}

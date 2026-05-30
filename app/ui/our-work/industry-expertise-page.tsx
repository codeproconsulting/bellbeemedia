import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function IndustryExpertisePage() {
  return () => (
    <Layout
      title="Digital Marketing for E-Commerce, SaaS & Local Business | Bell Bee Media"
      description="Bell Bee Media specialises in digital marketing for e-commerce, SaaS, and local businesses. Industry-specific strategies that drive measurable growth for your sector."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_40%_50%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-briefcase text-white" /> Industry Expertise
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Deep Industry Expertise for Your Sector
              </h1>
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Generic marketing doesn't work. We bring sector-specific knowledge, channel expertise, and audience understanding to e-commerce, SaaS, and local business growth strategies.
              </p>
              <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
                Discuss Your Industry <i class="ph ph-arrow-right" />
              </a>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-briefcase text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Industry Focus */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-buildings" text="Our Specialisations" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Industries We Know Inside Out</h2>
            <p class="text-text-secondary mt-4 max-w-2xl mx-auto">We don't claim to be generalists who work with everyone. We've gone deep in these sectors and built playbooks that deliver consistent results.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IndustryDeepDive
              icon="ph-shopping-bag"
              title="E-Commerce"
              overview="From Shopify startups to multi-million pound online retailers, we understand what makes e-commerce brands grow: the right product-market fit, the right creative, the right margins."
              services={["Social commerce (Instagram & TikTok Shop)", "Google Shopping & Meta ROAS campaigns", "Product photography & video", "Email & SMS retention marketing", "Conversion rate optimisation"]}
              metric="Average 4.8x ROAS across e-commerce clients"
            />
            <IndustryDeepDive
              icon="ph-code"
              secondary={true}
              title="SaaS & Technology"
              overview="B2B SaaS requires a different playbook — longer sales cycles, product-led growth mechanics, and LinkedIn-heavy ABM strategies. We've helped dozens of SaaS companies reduce CAC and grow MRR."
              services={["SEO & technical content marketing", "LinkedIn demand generation", "Product demo campaigns", "Case study production", "MQL-optimised landing pages"]}
              metric="Average 65% CAC reduction through organic channels"
            />
            <IndustryDeepDive
              icon="ph-map-pin"
              title="Local Business"
              overview="Local businesses compete in one of the toughest arenas — limited budgets, high competition, and real-world reputation at stake. We help local brands dominate their area digitally."
              services={["Google Business Profile optimisation", "Local SEO & citation building", "Hyper-targeted local Meta ads", "Review generation campaigns", "Local social media management"]}
              metric="Average 3x increase in local lead volume"
            />
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-grid-four" text="Also Active In" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">11 Other Sectors We're Active In</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <StatBox value="60+" label="Brands Grown" />
            <StatBox value="10M+" label="Combined Social Followers" secondary={true} />
            <StatBox value="£2B+" label="Revenue Influenced" />
            <StatBox value="15+" label="Countries Reached" secondary={true} />
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SecondaryIndustry icon="ph-first-aid" label="Health & Wellness" />
            <SecondaryIndustry icon="ph-fork-knife" label="Food & Beverage" />
            <SecondaryIndustry icon="ph-t-shirt" label="Fashion & Retail" />
            <SecondaryIndustry icon="ph-graduation-cap" label="Education & EdTech" />
            <SecondaryIndustry icon="ph-bank" label="Finance & Fintech" />
            <SecondaryIndustry icon="ph-buildings" label="Real Estate" />
            <SecondaryIndustry icon="ph-car" label="Automotive" />
            <SecondaryIndustry icon="ph-suitcase-rolling" label="Travel & Hospitality" />
          </div>
        </div>
      </section>

      {/* Why Sector Expertise Matters */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div class="flex mb-4"><PillBadge icon="ph-lightbulb" text="Why It Matters" /></div>
              <h2 class="font-heading text-4xl font-bold text-surface-dark0 mb-6">Industry Knowledge Accelerates Your Growth</h2>
              <p class="text-lg text-text-secondary leading-relaxed mb-6">
                A marketing agency that works with everyone effectively works with no one. Industry-specific knowledge means we already understand your buyer personas, seasonal patterns, regulatory constraints, and what messaging converts in your market.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed mb-6">
                We don't spend 3 months learning your industry before we start delivering. We hit the ground running with frameworks, creative templates, and tested strategies that are proven in your sector.
              </p>
              <div class="flex flex-col gap-4">
                <AdvantagePoint icon="ph-clock" title="Faster Ramp-Up" desc="Industry-specific knowledge eliminates the learning curve and delivers results faster." />
                <AdvantagePoint icon="ph-target" secondary={true} title="Sharper Targeting" desc="We know your ideal customer profile before your first brief — we've built campaigns for them before." />
                <AdvantagePoint icon="ph-shield-check" title="Fewer Costly Mistakes" desc="Sector experience means we avoid common pitfalls that generic agencies stumble into." />
              </div>
            </div>
            <div class="bg-surface-1 rounded-3xl p-10 border border-surface-2 flex flex-col gap-6">
              <h3 class="font-heading font-bold text-2xl text-surface-dark0">What Makes Our Approach Different</h3>
              <div class="flex flex-col gap-4 text-text-secondary">
                <p class="leading-relaxed">We assign clients to account managers with direct experience in their sector — not general account managers who rotate across all industries.</p>
                <p class="leading-relaxed">Our creative team studies competitor campaigns, seasonal trends, and audience behaviours specific to your market before producing any content.</p>
                <p class="leading-relaxed">We benchmark your performance against industry-specific KPIs, not generic marketing averages that mean nothing in your context.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-24 bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120]">
        <div class="container mx-auto px-4 max-w-3xl text-center">
          <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Work With an Agency That Knows Your Industry</h2>
          <p class="text-xl text-white/80 mb-10">Tell us about your business and sector — we'll show you exactly how we'd approach your growth.</p>
          <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-bold text-lg rounded-full hover:bg-surface-1 transition-colors shadow-2xl">
            Get Your Free Industry Strategy <i class="ph ph-arrow-right" />
          </a>
        </div>
      </section>
    </Layout>
  )
}

function StatBox() {
  return ({ value, label, secondary }: { value: string; label: string; secondary?: boolean }) => (
    <div class="flex flex-col items-center">
      <span class={`font-heading text-4xl font-bold ${secondary ? 'text-secondary' : 'text-primary'} mb-1`}>{value}</span>
      <span class="text-text-secondary text-sm">{label}</span>
    </div>
  )
}

function IndustryDeepDive() {
  return ({ icon, secondary, title, overview, services, metric }: {
    icon: string
    secondary?: boolean
    title: string
    overview: string
    services: string[]
    metric: string
  }) => (
    <div class="flex flex-col bg-white rounded-3xl border border-surface-2 overflow-hidden hover:shadow-xl transition-shadow">
      <div class={`h-2 ${secondary ? 'bg-secondary' : 'bg-primary'}`} />
      <div class="p-8 flex-1 flex flex-col">
        <div class={`w-14 h-14 rounded-2xl ${secondary ? 'bg-secondary/5 text-secondary' : 'bg-primary/5 text-primary'} flex items-center justify-center text-2xl mb-6`}>
          <i class={`ph-fill ${icon}`} />
        </div>
        <h3 class="font-heading font-bold text-2xl text-surface-dark0 mb-4">{title}</h3>
        <p class="text-text-secondary leading-relaxed mb-6 text-sm">{overview}</p>
        <div class="flex flex-col gap-2 flex-1">
          {services.map(s => (
            <div class="flex items-center gap-2 text-sm text-text-secondary">
              <i class={`ph-fill ph-check-circle ${secondary ? 'text-secondary' : 'text-primary'} shrink-0`} /> {s}
            </div>
          ))}
        </div>
        <div class={`mt-6 pt-6 border-t border-surface-2 text-sm font-bold ${secondary ? 'text-secondary' : 'text-primary'}`}>
          <i class="ph-fill ph-chart-line-up mr-1" /> {metric}
        </div>
      </div>
    </div>
  )
}

function SecondaryIndustry() {
  return ({ icon, label }: { icon: string; label: string }) => (
    <div class="flex items-center gap-3 p-4 rounded-2xl border border-surface-2 bg-white hover:bg-primary hover:text-white hover:border-primary transition-all group cursor-default">
      <i class={`ph-fill ${icon} text-primary group-hover:text-white text-xl`} />
      <span class="font-medium text-surface-dark1 group-hover:text-white text-sm">{label}</span>
    </div>
  )
}

function AdvantagePoint() {
  return ({ icon, title, desc, secondary }: { icon: string; title: string; desc: string; secondary?: boolean }) => (
    <div class="flex gap-4 items-start">
      <div class={`w-10 h-10 rounded-xl ${secondary ? 'bg-secondary/5 text-secondary' : 'bg-primary/5 text-primary'} flex items-center justify-center shrink-0 text-xl`}>
        <i class={`ph-fill ${icon}`} />
      </div>
      <div>
        <div class="font-bold text-surface-dark0 mb-1">{title}</div>
        <div class="text-sm text-text-secondary">{desc}</div>
      </div>
    </div>
  )
}

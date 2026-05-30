import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function CaseStudiesPage() {
  return () => (
    <Layout
      title="Digital Marketing Case Studies | Bell Bee Media"
      description="Explore Bell Bee Media's digital marketing case studies. Real campaigns, transparent metrics, and proven strategies across SEO, social media, PPC, and brand building."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-primary pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_60%_40%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-folder-open text-white" /> Case Studies
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Real Campaigns. Transparent Results.
              </h1>
              <p class="text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
                Browse our portfolio of client campaigns across social media, performance ads, SEO, branding, and web development. Every case study includes the challenge, the strategy, and the measurable outcomes.
              </p>
              <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-xl">
                Start Your Success Story <i class="ph ph-arrow-right" />
              </a>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-folder-open text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section class="bg-white border-b border-surface-2 py-12">
        <div class="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value="60+" label="Active Case Studies" color="blue" />
          <StatBox value="14" label="Industries Covered" color="indigo" />
          <StatBox value="£2B+" label="Client Revenue Influenced" color="purple" />
          <StatBox value="98%" label="Client Satisfaction" color="emerald" />
        </div>
      </section>

      {/* Featured Case Studies */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-star" text="Featured Work" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Case Studies Across Every Channel</h2>
            <p class="text-text-secondary mt-4 max-w-2xl mx-auto">From early-stage startups to established brands, we've driven measurable growth across every digital marketing discipline.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudyCard tag="Social Media" color="indigo" metric="+320%" metricLabel="Engagement Rate" title="E-Commerce Brand Growth" desc="Scaled an online fashion retailer from 5K to 85K Instagram followers in 6 months with a content-led social strategy and influencer activations." />
            <CaseStudyCard tag="Performance Ads" color="orange" metric="4.8x ROAS" metricLabel="Return on Ad Spend" title="D2C Product Launch" desc="Launched a new health supplement brand with Google and Meta ads, achieving profitability in week 3 of a 6-week campaign." />
            <CaseStudyCard tag="Web & SEO" color="blue" metric="+415%" metricLabel="Organic Traffic Growth" title="B2B SaaS SEO Overhaul" desc="Redesigned and rebuilt a SaaS company's website with technical SEO foundations, growing monthly visits from 2K to 10K in 4 months." />
            <CaseStudyCard tag="Digital PR" color="purple" metric="180+" metricLabel="Media Placements Secured" title="Consumer Brand Awareness" desc="Ran a 6-month Digital PR campaign for a consumer goods brand, securing coverage in Forbes, The Guardian, and 30+ niche publications." />
            <CaseStudyCard tag="Brand Design" color="emerald" metric="2.1x" metricLabel="Conversion Rate Improvement" title="Full Brand Rebrand" desc="Rebranded a 10-year-old retail business with a new visual identity, tone of voice, and website, resulting in doubled conversions." />
            <CaseStudyCard tag="Production" color="red" metric="5.2M" metricLabel="Video Views in 30 Days" title="Viral Product Video" desc="Produced a short-form product video series for a food brand that generated over 5 million organic views across TikTok and YouTube." />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-buildings" text="Industries We Serve" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Experience Across 14+ Industries</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <IndustryPill icon="ph-shopping-bag" label="E-Commerce" />
            <IndustryPill icon="ph-code" label="SaaS & Tech" />
            <IndustryPill icon="ph-fork-knife" label="Food & Beverage" />
            <IndustryPill icon="ph-first-aid" label="Health & Wellness" />
            <IndustryPill icon="ph-buildings" label="Real Estate" />
            <IndustryPill icon="ph-graduation-cap" label="Education" />
            <IndustryPill icon="ph-bank" label="Finance" />
            <IndustryPill icon="ph-t-shirt" label="Fashion & Retail" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </Layout>
  )
}

function StatBox() {
  return ({ value, label, color }: { value: string; label: string; color: string }) => (
    <div class="flex flex-col items-center">
      <span class={`font-heading text-4xl font-bold text-${color}-600 mb-1`}>{value}</span>
      <span class="text-text-secondary text-sm">{label}</span>
    </div>
  )
}

function CaseStudyCard() {
  return ({ tag, color, metric, metricLabel, title, desc }: { tag: string; color: string; metric: string; metricLabel: string; title: string; desc: string }) => (
    <div class="flex flex-col bg-white rounded-3xl border border-surface-2 overflow-hidden hover:shadow-xl transition-shadow group">
      <div class={`h-48 bg-gradient-to-br from-${color}-50 to-${color}-100 flex items-center justify-center relative`}>
        <div class="text-center">
          <div class={`font-heading text-5xl font-bold text-${color}-700 mb-1`}>{metric}</div>
          <div class={`text-sm text-${color}-600 font-medium`}>{metricLabel}</div>
        </div>
      </div>
      <div class="p-6 flex-1 flex flex-col">
        <span class={`text-xs font-bold text-${color}-600 bg-${color}-50 px-3 py-1 rounded-full self-start mb-3`}>{tag}</span>
        <h3 class="font-bold text-lg text-surface-dark0 mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p class="text-sm text-text-secondary leading-relaxed flex-1">{desc}</p>
      </div>
    </div>
  )
}

function IndustryPill() {
  return ({ icon, label }: { icon: string; label: string }) => (
    <div class="flex items-center gap-3 p-4 rounded-2xl border border-surface-2 bg-surface-1 hover:bg-primary hover:text-white hover:border-primary transition-all group cursor-default">
      <i class={`ph-fill ${icon} text-primary group-hover:text-white text-xl`} />
      <span class="font-medium text-surface-dark1 group-hover:text-white text-sm">{label}</span>
    </div>
  )
}

function CtaSection() {
  return () => (
    <section class="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-primary">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Ready to Become Our Next Success Story?</h2>
        <p class="text-xl text-blue-100 mb-10">Tell us about your challenges and we'll map out a strategy to overcome them — with real metrics to back it up.</p>
        <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-900 font-bold text-lg rounded-full hover:bg-blue-50 transition-colors shadow-2xl">
          Get Your Free Proposal <i class="ph ph-arrow-right" />
        </a>
      </div>
    </section>
  )
}

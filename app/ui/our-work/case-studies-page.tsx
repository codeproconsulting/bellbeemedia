import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'
import { type Handle } from 'remix/ui'
import { type WPCaseStudy } from '../../data/wordpress.ts'

interface CaseStudiesPageProps {
  caseStudies: WPCaseStudy[]
}

export function CaseStudiesPage(handle: Handle<CaseStudiesPageProps>) {
  const { caseStudies } = handle.props
  return () => (
    <Layout
      title="Digital Marketing Case Studies | Bell Bee Media"
      description="Explore Bell Bee Media's digital marketing case studies. Real campaigns, transparent metrics, and proven strategies across SEO, social media, PPC, and brand building."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] pt-28 pb-24 overflow-hidden">
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
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Browse our portfolio of client campaigns across social media, performance ads, SEO, branding, and web development. Every case study includes the challenge, the strategy, and the measurable outcomes.
              </p>
              <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
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
          <StatBox value={`${caseStudies.length}+`} label="Active Case Studies" />
          <StatBox value="14" label="Industries Covered" />
          <StatBox value="£2B+" label="Client Revenue Influenced" />
          <StatBox value="98%" label="Client Satisfaction" />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-star" text="Featured Work" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Case Studies Across Every Channel</h2>
            <p class="text-text-secondary mt-4 max-w-2xl mx-auto">From early-stage startups to established brands, we've driven measurable growth across every digital marketing discipline.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard
                tag={cs.tag}
                secondary={i % 2 !== 0}
                metric={cs.metric}
                metricLabel={cs.metricLabel}
                title={cs.title}
                desc={cs.description}
              />
            ))}
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
  return ({ value, label }: { value: string; label: string }) => (
    <div class="flex flex-col items-center">
      <span class="font-heading text-4xl font-bold text-primary mb-1">{value}</span>
      <span class="text-text-secondary text-sm">{label}</span>
    </div>
  )
}

function CaseStudyCard() {
  return ({ tag, secondary, metric, metricLabel, title, desc }: { tag: string; secondary?: boolean; metric: string; metricLabel: string; title: string; desc: string }) => (
    <div class="flex flex-col bg-white rounded-3xl border border-surface-2 overflow-hidden hover:shadow-xl transition-shadow group">
      <div class={`h-48 ${secondary ? 'bg-gradient-to-br from-secondary/5 to-secondary/10' : 'bg-gradient-to-br from-primary/5 to-primary/10'} flex items-center justify-center relative`}>
        <div class="text-center">
          <div class={`font-heading text-5xl font-bold ${secondary ? 'text-secondary' : 'text-primary'} mb-1`}>{metric}</div>
          <div class={`text-sm ${secondary ? 'text-secondary/80' : 'text-primary/80'} font-medium`}>{metricLabel}</div>
        </div>
      </div>
      <div class="p-6 flex-1 flex flex-col">
        <span class={`text-xs font-bold ${secondary ? 'text-secondary bg-secondary/5' : 'text-primary bg-primary/5'} px-3 py-1 rounded-full self-start mb-3`}>{tag}</span>
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
    <section class="py-24 bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120]">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Ready to Become Our Next Success Story?</h2>
        <p class="text-xl text-white/80 mb-10">Tell us about your challenges and we'll map out a strategy to overcome them — with real metrics to back it up.</p>
        <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-bold text-lg rounded-full hover:bg-surface-1 transition-colors shadow-2xl">
          Get Your Free Proposal <i class="ph ph-arrow-right" />
        </a>
      </div>
    </section>
  )
}

import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function DesignCopyPage() {
  return () => (
    <Layout
      title="Brand Design & Copywriting Services | Bell Bee Media"
      description="Transform your brand identity with Bell Bee Media's design and copywriting experts. Logo design, visual identity, sales copy, and content strategy that converts and resonates."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-[#7b172a] via-[#154476] to-[#0c1828] pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_40%_60%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-bezier-curve text-white" /> Design & Copywriting
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Design & Copy That Builds Brands People Remember
              </h1>
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                From logo design and visual identity to conversion-focused sales copy, we craft brand experiences that communicate your value instantly and compel action.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
                  Get a Creative Quote <i class="ph ph-arrow-right" />
                </a>
                <a href={routes.services.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                  All Services
                </a>
              </div>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-bezier-curve text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section class="bg-white border-b border-surface-2 py-12">
        <div class="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value="200+" label="Brand Identities Created" />
          <StatBox value="5M+" label="Words Written & Published" />
          <StatBox value="42%" label="Avg. Conversion Rate Lift" />
          <StatBox value="100%" label="Client Satisfaction Rate" />
        </div>
      </section>

      {/* Overview */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div class="flex mb-4"><PillBadge icon="ph-palette" text="What We Create" /></div>
              <h2 class="font-heading text-4xl font-bold text-surface-dark0 mb-6">Integrated Brand Design & Strategic Copywriting</h2>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                Design and copy are two sides of the same coin. When they work together — same voice, same strategy, same audience — the result is a brand that communicates with clarity and converts with confidence.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                Our creative team includes brand designers, UX designers, art directors, and specialist copywriters who collaborate from the very first brief. We don't hand off design to copy or vice versa — we build in creative harmony.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed">
                From a startup's first logo to a rebranding campaign for an established company, from a single landing page headline to a full content strategy, we have the creative depth to deliver.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <ServiceFeatureCard icon="ph-crown" color="emerald" title="Brand Identity" desc="Logo design, colour palettes, typography systems, and full brand guidelines." />
              <ServiceFeatureCard icon="ph-file-text" color="teal" title="Sales Copywriting" desc="Website copy, landing pages, email sequences, and ad scripts that convert." />
              <ServiceFeatureCard icon="ph-pencil-line" color="blue" title="Content Strategy" desc="Blog content, thought leadership, and SEO content planned for long-term organic growth." />
              <ServiceFeatureCard icon="ph-image" color="purple" title="Marketing Collateral" desc="Brochures, pitch decks, social templates, and campaign assets across all formats." />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-star" text="Our Advantage" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Why Our Creative Approach Delivers Results</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard icon="ph-strategy" color="emerald" title="Strategy Comes First" desc="Every design and copy decision flows from a deep understanding of your audience, competitors, and positioning." />
            <BenefitCard icon="ph-lock-key" color="teal" title="Brand Consistency" desc="A cohesive brand system across every touchpoint — digital and print — builds recognition and trust faster." />
            <BenefitCard icon="ph-cursor-click" color="blue" title="Conversion-Optimised Copy" desc="We write with intent. Every word is designed to guide your reader toward a specific, measurable action." />
            <BenefitCard icon="ph-magnifying-glass" color="purple" title="SEO Content Writing" desc="Long-form content, blog posts, and landing page copy structured to rank for your target keywords." />
            <BenefitCard icon="ph-arrows-counter-clockwise" color="orange" title="Iterative Creative Process" desc="We collaborate, present concepts, gather feedback, and refine until the result is exactly right." />
            <BenefitCard icon="ph-file-arrow-down" color="red" title="Brand Guidelines Included" desc="Every brand identity project includes a full digital style guide for consistent internal and external use." />
          </div>
        </div>
      </section>

      {/* Process */}
      <section class="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-path" text="Our Process" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">From Brief to Brand</h2>
          </div>
          <div class="flex flex-col gap-8">
            <ProcessStep num={1} title="Discovery & Creative Brief" desc="We explore your brand's personality, values, target audience, and competitive landscape to create a watertight creative brief." />
            <ProcessStep num={2} title="Research & Concept Development" desc="Our team conducts competitive audits, audience research, and trend analysis before presenting initial creative concepts." />
            <ProcessStep num={3} title="Design & Copy Creation" desc="Approved concepts are developed into full brand identities or copy deliverables with detailed rationale behind every creative decision." />
            <ProcessStep num={4} title="Review & Refinement" desc="You receive a structured presentation of all deliverables with two rounds of revisions included as standard." />
            <ProcessStep num={5} title="Final Delivery & Handover" desc="Finished assets are delivered in all required formats with a comprehensive brand guidelines document ready for use." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-3xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-question" text="FAQs" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Design & Copy — FAQs</h2>
          </div>
          <div class="flex flex-col gap-6">
            <FaqItem q="How long does a full brand identity project take?" a="A full brand identity project — including logo, colour palette, typography, and brand guidelines — typically takes 3–5 weeks from kick-off to final delivery." />
            <FaqItem q="Do you write copy in my brand's existing tone of voice?" a="Yes. We conduct a thorough tone-of-voice audit as part of onboarding. If you don't have defined guidelines, we'll help you develop them as part of the project." />
            <FaqItem q="Can you redesign my existing brand without starting from scratch?" a="Absolutely. Brand evolution projects are common — we can refine and modernise your existing identity while preserving the core equity your audience recognises." />
            <FaqItem q="Do you offer ongoing content writing for SEO?" a="Yes. We offer monthly content retainers that cover blog articles, pillar pages, and service page copy written to rank for target keywords and build topical authority." />
            <FaqItem q="What file formats do you deliver for design assets?" a="We deliver all final design files in vector formats (AI, SVG, EPS) plus web-ready PNG and JPEG exports. Print-ready PDF files are included where required." />
          </div>
        </div>
      </section>

      <CtaSection headline="Let's Build a Brand Worth Remembering" sub="Get in touch and tell us about your vision. We'll show you how we'll bring it to life." />
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

function ServiceFeatureCard() {
  return ({ icon, color, title, desc }: { icon: string; color: string; title: string; desc: string }) => (
    <div class={`p-5 rounded-2xl border border-surface-2 bg-${color}-50 hover:shadow-lg transition-shadow`}>
      <i class={`ph-fill ${icon} text-${color}-600 text-2xl mb-3 block`} />
      <h3 class="font-bold text-surface-dark0 mb-2">{title}</h3>
      <p class="text-sm text-text-secondary leading-relaxed">{desc}</p>
    </div>
  )
}

function BenefitCard() {
  return ({ icon, color, title, desc }: { icon: string; color: string; title: string; desc: string }) => (
    <div class="flex gap-5 p-6 rounded-2xl border border-surface-2 bg-surface-1 hover:shadow-lg transition-shadow group">
      <div class={`w-12 h-12 rounded-xl bg-${color}-50 text-${color}-600 flex items-center justify-center shrink-0 text-2xl group-hover:scale-110 transition-transform`}>
        <i class={`ph-fill ${icon}`} />
      </div>
      <div>
        <h3 class="font-bold text-surface-dark0 mb-2">{title}</h3>
        <p class="text-sm text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function ProcessStep() {
  return ({ num, title, desc }: { num: number; title: string; desc: string }) => (
    <div class="flex gap-6 items-start">
      <div class="w-12 h-12 rounded-full bg-primary text-white font-heading font-bold text-lg flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
        {num}
      </div>
      <div class="pt-2">
        <h3 class="font-bold text-xl text-surface-dark0 mb-2">{title}</h3>
        <p class="text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function FaqItem() {
  return ({ q, a }: { q: string; a: string }) => (
    <div class="p-6 rounded-2xl border border-surface-2 bg-surface-1">
      <h3 class="font-bold text-surface-dark0 mb-3 flex items-start gap-2">
        <i class="ph-fill ph-question text-primary mt-0.5 shrink-0" /> {q}
      </h3>
      <p class="text-text-secondary leading-relaxed pl-6">{a}</p>
    </div>
  )
}

function CtaSection() {
  return ({ headline, sub }: { headline: string; sub: string }) => (
    <section class="py-24 bg-gradient-to-br from-[#7b172a] via-[#154476] to-[#0c1828]">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">{headline}</h2>
        <p class="text-xl text-white/80 mb-10">{sub}</p>
        <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-bold text-lg rounded-full hover:bg-surface-1 transition-colors shadow-2xl">
          Get Your Free Proposal <i class="ph ph-arrow-right" />
        </a>
      </div>
    </section>
  )
}

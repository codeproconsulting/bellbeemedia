import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function OurMissionPage() {
  return () => (
    <Layout
      title="Our Mission & Vision | Bell Bee Media"
      description="Discover Bell Bee Media's mission: empowering businesses to reach their full potential through transparent, data-driven digital marketing strategies that deliver sustainable growth."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_60%_50%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-target text-white" /> Our Mission
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Empowering Every Brand to Reach Its Full Digital Potential
              </h1>
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Our mission is to give ambitious brands access to the same quality of strategic marketing that enterprise companies rely on — without the enterprise price tag or the bureaucratic slowness.
              </p>
              <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
                Partner With Us <i class="ph ph-arrow-right" />
              </a>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-target text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-4xl text-center">
          <div class="flex justify-center mb-4"><PillBadge icon="ph-quotes" text="Our Mission" /></div>
          <blockquote class="font-heading text-3xl md:text-4xl font-bold text-surface-dark0 leading-relaxed mb-8">
            "To empower businesses of every size to achieve sustainable digital growth through transparent strategies, data-driven decisions, and creative excellence — treating every client's success as our own."
          </blockquote>
          <p class="text-xl text-text-secondary leading-relaxed">
            This isn't marketing copy. It's the standard we hold ourselves to — in every campaign, every report, and every conversation with the people we work with.
          </p>
        </div>
      </section>



      {/* Pillars */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-columns" text="Our Pillars" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Three Pillars That Drive Our Mission</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard num={1} icon="ph-shield-check" color="blue" title="Transparency" desc="We believe every client deserves to understand exactly what we're doing, why we're doing it, and what impact it's having. No hidden metrics, no spin, no jargon. Just clear, honest reporting." />
            <PillarCard num={2} icon="ph-chart-line-up" color="orange" title="Data-Driven Decisions" desc="Gut feelings have no place in growth strategy. Every recommendation we make, every budget we allocate, every channel we choose is backed by evidence, testing, and clear attribution." />
            <PillarCard num={3} icon="ph-users-three" color="emerald" title="Genuine Partnerships" desc="The agencies we respect most treat their clients like business partners, not line items. That's the relationship we build — invested in your success, present in your challenges, and celebrating your wins." />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div class="flex mb-4"><PillBadge icon="ph-binoculars" text="Our Vision" /></div>
              <h2 class="font-heading text-4xl font-bold text-surface-dark0 mb-6">Where We're Going</h2>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                We're building toward a future where Bell Bee Media is the most trusted growth partner for ambitious brands globally. Not the biggest agency — the most effective one.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                Our vision is to expand our sector expertise, deepen our technology capabilities, and build a team of the most talented digital marketers in the industry — all in service of the brands we work with.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed">
                Every hiring decision, every process improvement, and every new capability we add is evaluated against one question: does this make our clients' growth more reliable and more scalable?
              </p>
            </div>
            <div class="flex flex-col gap-6">
              <VisionPoint icon="ph-globe" color="blue" title="Global Reach, Local Insight" desc="Expanding our expertise to serve brands in 30+ countries with market-specific local knowledge." />
              <VisionPoint icon="ph-robot" color="purple" title="AI-Augmented Strategy" desc="Integrating cutting-edge AI tools to enhance campaign performance and forecasting accuracy." />
              <VisionPoint icon="ph-graduation-cap" color="orange" title="Industry Education" desc="Building free resources, guides, and training to democratise access to marketing knowledge." />
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section class="py-24 bg-gradient-to-br from-primary/[0.03] to-[#0e2c50]/[0.05]">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-handshake" text="Our Commitment" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">What We Commit to Every Client</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CommitmentItem icon="ph-clock" text="Response within 24 hours on all communication during business hours" />
            <CommitmentItem icon="ph-chart-bar" text="Monthly performance reports with transparent metrics and honest analysis" />
            <CommitmentItem icon="ph-users" text="A dedicated account manager who knows your business, not a rotating team" />
            <CommitmentItem icon="ph-lock-key" text="Full ownership of all creative assets, accounts, and data produced for your brand" />
            <CommitmentItem icon="ph-trending-up" text="Proactive recommendations — not waiting to be asked" />
            <CommitmentItem icon="ph-handshake" text="No long-term lock-in contracts. We earn your business every month." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-24 bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120]">
        <div class="container mx-auto px-4 max-w-3xl text-center">
          <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Aligned on Mission. Ready to Grow.</h2>
          <p class="text-xl text-white/80 mb-10">If our approach resonates with you, let's talk about how to apply it to your brand's growth challenges.</p>
          <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-bold text-lg rounded-full hover:bg-surface-1 transition-colors shadow-2xl">
            Get Your Free Proposal <i class="ph ph-arrow-right" />
          </a>
        </div>
      </section>
    </Layout>
  )
}

function PillarCard() {
  return ({ num, icon, color, title, desc }: { num: number; icon: string; color: string; title: string; desc: string }) => (
    <div class="flex flex-col bg-white p-10 rounded-3xl border border-surface-2 hover:shadow-xl transition-shadow">
      <div class={`w-16 h-16 rounded-2xl bg-${color}-50 text-${color}-600 flex items-center justify-center text-3xl mb-6`}>
        <i class={`ph-fill ${icon}`} />
      </div>
      <div class={`font-heading text-6xl font-bold text-${color}-100 mb-4 -mt-4`}>{num < 10 ? `0${num}` : num}</div>
      <h3 class="font-heading font-bold text-2xl text-surface-dark0 mb-4">{title}</h3>
      <p class="text-text-secondary leading-relaxed">{desc}</p>
    </div>
  )
}

function VisionPoint() {
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

function CommitmentItem() {
  return ({ icon, text }: { icon: string; text: string }) => (
    <div class="flex items-start gap-4 p-5 rounded-2xl border border-surface-2 bg-white hover:shadow-md transition-shadow">
      <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-xl">
        <i class={`ph-fill ${icon}`} />
      </div>
      <p class="text-surface-dark1 leading-relaxed text-sm pt-2">{text}</p>
    </div>
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

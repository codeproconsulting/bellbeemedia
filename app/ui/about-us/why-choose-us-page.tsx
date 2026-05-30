import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function WhyChooseUsPage() {
  return () => (
    <Layout
      title="Why Choose Bell Bee Media — Our Competitive Advantage"
      description="Discover why 60+ brands choose Bell Bee Media as their digital marketing partner. Data-driven strategies, creative excellence, transparent reporting, and a track record of measurable growth."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_40%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-star text-white" /> Why Choose Us
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                The Bell Bee Difference — Why Smart Brands Choose Us
              </h1>
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Not all agencies are built equal. Here's what makes Bell Bee Media a different kind of growth partner — and why the brands that choose us rarely leave.
              </p>
              <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
                See Why For Yourself <i class="ph ph-arrow-right" />
              </a>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-star text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust Signals */}
      <section class="bg-white border-b border-surface-2 py-12">
        <div class="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value="98%" label="Client Retention Rate" />
          <StatBox value="4.9/5" label="Average Client Rating" />
          <StatBox value="60+" label="Active Clients" />
          <StatBox value="7+" label="Years in Business" />
        </div>
      </section>

      {/* The Bell Bee Advantage */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-star" text="Our Advantage" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">6 Reasons Brands Choose Bell Bee Media</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AdvantageCard num={1} icon="ph-chart-line-up" title="We Measure Revenue, Not Vanity Metrics" desc="Likes and impressions don't pay salaries. We track what actually matters — conversions, ROAS, CAC, and LTV. Every campaign is measured against metrics that tie directly to your business growth." />
            <AdvantageCard num={2} icon="ph-palette" secondary={true} title="Strategy + Creative Under One Roof" desc="Most agencies are either strategy shops or creative shops. Bell Bee Media is both — strategy-led creative, built by people who understand both the why and the how." />
            <AdvantageCard num={3} icon="ph-eye" title="Radical Transparency in Reporting" desc="We send you the real numbers — even when the results are disappointing. No smoke and mirrors. Monthly reports are plain-English, honest, and actionable." />
            <AdvantageCard num={4} icon="ph-users" secondary={true} title="A Dedicated Team That Knows You" desc="You get a named account manager, creative lead, and performance specialist who understand your brand, your goals, and your competitive landscape inside out." />
            <AdvantageCard num={5} icon="ph-buildings" title="Proven Across 14+ Industries" desc="We bring playbooks, not guesses. Our cross-industry experience means we know what works in your sector and can deliver results faster than agencies learning your market from scratch." />
            <AdvantageCard num={6} icon="ph-lock-open" secondary={true} title="No Lock-In Contracts" desc="We don't need long-term contracts to retain clients — our results do that. Month-to-month flexibility means we're always accountable to your expectations." />
          </div>
        </div>
      </section>

      {/* Bell Bee vs. Typical Agency */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-scales" text="The Comparison" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Bell Bee Media vs. The Typical Agency</h2>
          </div>
          <div class="overflow-hidden rounded-3xl border border-surface-2">
            <div class="grid grid-cols-3 bg-surface-1 p-6 border-b border-surface-2">
              <div class="font-bold text-text-secondary text-sm">Feature</div>
              <div class="font-bold text-center text-primary text-sm">Bell Bee Media</div>
              <div class="font-bold text-center text-text-secondary text-sm">Typical Agency</div>
            </div>
            <ComparisonRow feature="Revenue-focused KPIs" us="✅ Always" them="❌ Rarely" />
            <ComparisonRow feature="Dedicated account team" us="✅ Named team" them="⚠️ Rotates frequently" />
            <ComparisonRow feature="Transparent reporting" us="✅ Plain-English monthly" them="⚠️ Jargon-heavy" />
            <ComparisonRow feature="Contract flexibility" us="✅ Month-to-month" them="❌ 12-month lock-in" />
            <ComparisonRow feature="Full asset ownership" us="✅ Included" them="❌ Often withheld" />
            <ComparisonRow feature="Creative + strategy combined" us="✅ Under one roof" them="⚠️ Often siloed" />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-quotes" text="Client Feedback" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Don't Take Our Word For It</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard name="Emma L." role="Head of Marketing, E-Commerce" stars={5} quote="Switched from a bigger agency and can't believe the difference. Bell Bee actually understood our business within weeks, not months." />
            <TestimonialCard name="David K." role="Founder, B2B Tech" stars={5} quote="The transparency alone is worth it. I finally know exactly what's working and why. Our CAC dropped 58% in 6 months." />
            <TestimonialCard name="Aisha R." role="Digital Director, Retail" stars={5} quote="No long-term contract was a risk we didn't need to take — they earned our continued business in the first month." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-24 bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120]">
        <div class="container mx-auto px-4 max-w-3xl text-center">
          <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Experience the Bell Bee Difference</h2>
          <p class="text-xl text-white/80 mb-10">Get a no-obligation strategy session and see first-hand how we approach growth differently.</p>
          <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-bold text-lg rounded-full hover:bg-surface-1 transition-colors shadow-2xl">
            Book Your Free Strategy Session <i class="ph ph-arrow-right" />
          </a>
        </div>
      </section>
    </Layout>
  )
}

function StatBox() {
  return ({ value, label }: { value: string; label: string }) => (
    <div class="flex flex-col items-center">
      <span class="font-heading text-4xl font-bold text-secondary mb-1">{value}</span>
      <span class="text-text-secondary text-sm">{label}</span>
    </div>
  )
}

function AdvantageCard() {
  return ({ num, icon, secondary, title, desc }: { num: number; icon: string; secondary?: boolean; title: string; desc: string }) => (
    <div class="flex gap-6 p-8 rounded-3xl border border-surface-2 bg-surface-1 hover:shadow-xl transition-shadow group">
      <div class="flex flex-col items-center gap-2 shrink-0">
        <div class={`w-14 h-14 rounded-2xl ${secondary ? 'bg-secondary/5 text-secondary' : 'bg-primary/5 text-primary'} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
          <i class={`ph-fill ${icon}`} />
        </div>
        <span class={`font-heading text-3xl font-bold ${secondary ? 'text-secondary/10' : 'text-primary/10'}`}>{num < 10 ? `0${num}` : num}</span>
      </div>
      <div class="pt-1">
        <h3 class="font-bold text-xl text-surface-dark0 mb-3">{title}</h3>
        <p class="text-text-secondary leading-relaxed text-sm">{desc}</p>
      </div>
    </div>
  )
}

function ComparisonRow() {
  return ({ feature, us, them }: { feature: string; us: string; them: string }) => (
    <div class="grid grid-cols-3 p-5 border-b border-surface-2 last:border-0 hover:bg-surface-1 transition-colors">
      <div class="text-surface-dark1 font-medium text-sm">{feature}</div>
      <div class="text-center text-sm font-medium text-emerald-700">{us}</div>
      <div class="text-center text-sm text-text-secondary">{them}</div>
    </div>
  )
}

function TestimonialCard() {
  return ({ name, role, stars, quote }: { name: string; role: string; stars: number; quote: string }) => (
    <div class="p-8 rounded-3xl border border-surface-2 bg-white flex flex-col gap-6">
      <div class="flex gap-1">
        {Array.from({ length: stars }).map(() => (
          <i class="ph-fill ph-star text-secondary" />
        ))}
      </div>
      <p class="text-text-secondary leading-relaxed italic flex-1">"{quote}"</p>
      <div>
        <div class="font-bold text-surface-dark0">{name}</div>
        <div class="text-sm text-text-secondary">{role}</div>
      </div>
    </div>
  )
}

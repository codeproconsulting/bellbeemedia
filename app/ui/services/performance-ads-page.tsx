import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function PerformanceAdsPage() {
  return () => (
    <Layout
      title="Performance Marketing & PPC Advertising | Bell Bee Media"
      description="Maximise ROI with Bell Bee Media's data-driven performance marketing. Expert Google Ads, Meta Ads, and PPC campaigns that cut wasteful spend and scale profitable growth."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-secondary via-[#a03d15] to-[#1f0f08] pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-chart-line-up text-white" /> Performance Marketing
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                PPC & Performance Ads That Maximise Every Dollar
              </h1>
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                We build and manage data-driven paid advertising campaigns across Google, Meta, TikTok, and LinkedIn — engineering profitable growth through continuous testing and optimisation.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
                  Get a Free Audit <i class="ph ph-arrow-right" />
                </a>
                <a href={routes.services.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                  All Services
                </a>
              </div>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-chart-line-up text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section class="bg-white border-b border-surface-2 py-12">
        <div class="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value="4.1x" label="Average ROAS Achieved" />
          <StatBox value="£50M+" label="Ad Spend Managed" />
          <StatBox value="38%" label="Avg. CPC Reduction" />
          <StatBox value="120+" label="Campaigns Launched" />
        </div>
      </section>

      {/* Overview */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div class="flex mb-4"><PillBadge icon="ph-target" text="What We Do" /></div>
              <h2 class="font-heading text-4xl font-bold text-surface-dark0 mb-6">End-to-End Paid Advertising Management</h2>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                From Google Search and Shopping campaigns to Meta and TikTok social ads, our performance team engineers revenue-focused funnels built for scale. We don't guess — we test, measure, and optimise relentlessly.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                Our approach starts with understanding your business economics: CPA targets, LTV, margins, and seasonality. We then build campaigns that align with your actual revenue goals, not vanity metrics.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed">
                We are certified Google Partners and Meta Business Partners, giving your campaigns access to beta features, dedicated support, and best-in-class tooling.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <ServiceFeatureCard icon="ph-google-logo" color="orange" title="Google Ads" desc="Search, Shopping, Display, YouTube, and Performance Max campaigns optimised for ROAS." />
              <ServiceFeatureCard icon="ph-facebook-logo" color="blue" title="Meta Ads" desc="Facebook and Instagram ad campaigns with advanced audience segmentation and creative testing." />
              <ServiceFeatureCard icon="ph-tiktok-logo" color="red" title="TikTok Ads" desc="Spark Ads, TopView, and In-Feed campaigns for brands targeting the Gen Z and Millennial markets." />
              <ServiceFeatureCard icon="ph-linkedin-logo" color="indigo" title="LinkedIn Ads" desc="B2B lead generation and demand generation campaigns with job title and company targeting." />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-star" text="Our Advantage" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Why Bell Bee Outperforms In-House Teams</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard icon="ph-currency-dollar" color="orange" title="Revenue-First Focus" desc="Every campaign is measured against revenue metrics, not just clicks. We care about your bottom line." />
            <BenefitCard icon="ph-flask" color="blue" title="Continuous A/B Testing" desc="Creative fatigue kills campaigns. We test new ad angles, copy, and visuals weekly to stay ahead." />
            <BenefitCard icon="ph-eye" color="purple" title="Full Transparency" desc="Real-time dashboard access so you always know where every pound of ad spend is going." />
            <BenefitCard icon="ph-robot" color="emerald" title="AI-Enhanced Bidding" desc="We combine machine learning bidding strategies with manual oversight for optimal cost efficiency." />
            <BenefitCard icon="ph-funnel" color="red" title="Funnel Optimisation" desc="We audit and improve landing pages, CTAs, and checkout flows to lift conversion rates alongside ads." />
            <BenefitCard icon="ph-clock" color="yellow" title="Rapid Launch" desc="Most campaigns go live within 72 hours of kickoff — no lengthy delays holding back your revenue." />
          </div>
        </div>
      </section>

      {/* Process */}
      <section class="py-24 bg-gradient-to-br from-orange-50 to-secondary/5">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-path" text="Our Process" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">How We Scale Your Paid Advertising</h2>
          </div>
          <div class="flex flex-col gap-8">
            <ProcessStep num={1} title="Account Audit & Competitor Analysis" desc="We audit your current ad accounts (or set them up from scratch) and perform competitor intelligence to identify immediate wins." />
            <ProcessStep num={2} title="Strategy & Campaign Architecture" desc="We design a full-funnel campaign structure covering awareness, consideration, and conversion stages with budget allocation recommendations." />
            <ProcessStep num={3} title="Creative Development" desc="Our team produces ad creatives — static images, carousels, and short-form videos — designed specifically for paid channel performance." />
            <ProcessStep num={4} title="Launch & Initial Optimisation" desc="Campaigns go live and we watch them closely for the first two weeks, making rapid micro-adjustments to CPCs, bids, and audiences." />
            <ProcessStep num={5} title="Scale & Monthly Reporting" desc="Once campaigns are profitable, we methodically scale spend, unlock new audiences, and deliver detailed monthly performance reports." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-3xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-question" text="FAQs" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Performance Ads — FAQs</h2>
          </div>
          <div class="flex flex-col gap-6">
            <FaqItem q="What is the minimum ad budget you recommend?" a="We typically recommend a minimum monthly ad spend of £1,500–£3,000 for Google Ads and £1,000–£2,500 for Meta Ads, depending on your industry and goals. Our management fee is separate from ad spend." />
            <FaqItem q="How quickly will I see results from paid advertising?" a="With Google Search, you can see qualified leads within the first week. Social and display campaigns typically take 2–4 weeks to exit the learning phase and stabilise performance." />
            <FaqItem q="Do you handle creative production for ads?" a="Yes. Our in-house creative team produces all static images, carousels, and short-form video ads. We work within your brand guidelines and run regular refresh cycles to prevent ad fatigue." />
            <FaqItem q="What reporting do you provide?" a="You receive monthly detailed reports covering ROAS, CPA, CTR, impressions, conversions, and spend breakdown. We also provide access to a live dashboard for real-time visibility." />
            <FaqItem q="Can you take over an existing underperforming ad account?" a="Absolutely. We conduct a full audit first to identify structural issues, wasted spend, and quick-win opportunities before rebuilding or restructuring the account." />
          </div>
        </div>
      </section>

      <CtaSection headline="Stop Wasting Ad Spend. Start Scaling Revenue." sub="Get a free paid ads audit and discover how much revenue you're leaving on the table." />
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
      <div class="w-12 h-12 rounded-full bg-secondary text-white font-heading font-bold text-lg flex items-center justify-center shrink-0 shadow-md shadow-secondary/20">
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
        <i class="ph-fill ph-question text-secondary mt-0.5 shrink-0" /> {q}
      </h3>
      <p class="text-text-secondary leading-relaxed pl-6">{a}</p>
    </div>
  )
}

function CtaSection() {
  return ({ headline, sub }: { headline: string; sub: string }) => (
    <section class="py-24 bg-gradient-to-br from-secondary via-[#a03d15] to-[#1f0f08]">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">{headline}</h2>
        <p class="text-xl text-white/80 mb-10">{sub}</p>
        <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-secondary font-bold text-lg rounded-full hover:bg-surface-1 transition-colors shadow-2xl">
          Get Your Free Audit <i class="ph ph-arrow-right" />
        </a>
      </div>
    </section>
  )
}

import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function DigitalPrPage() {
  return () => (
    <Layout
      title="Digital PR & Influencer Marketing | Bell Bee Media"
      description="Amplify your brand with Bell Bee Media's Digital PR and influencer marketing services. Strategic media outreach, backlink building, and curated influencer campaigns that elevate your brand authority."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_60%_40%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-megaphone text-white" /> Digital PR
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Digital PR That Builds Brand Authority & Backlinks
              </h1>
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                We secure media coverage, earn high-authority backlinks, and partner with the right influencers to elevate your brand's reputation across digital channels.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
                  Start Your PR Campaign <i class="ph ph-arrow-right" />
                </a>
                <a href={routes.services.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                  All Services
                </a>
              </div>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-megaphone text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section class="bg-white border-b border-surface-2 py-12">
        <div class="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value="800+" label="Media Placements Secured" />
          <StatBox value="DA 50+" label="Average Backlink Authority" />
          <StatBox value="250+" label="Influencer Partnerships" />
          <StatBox value="45%" label="Avg. Organic Traffic Lift" />
        </div>
      </section>

      {/* Overview */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div class="flex mb-4"><PillBadge icon="ph-newspaper" text="What We Do" /></div>
              <h2 class="font-heading text-4xl font-bold text-surface-dark0 mb-6">Integrated Digital PR & Influencer Strategy</h2>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                Digital PR is the intersection of traditional public relations and modern SEO. We earn editorial coverage in tier-1 publications, build high-domain-authority backlinks, and create buzz that drives both brand awareness and search rankings.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                Our influencer marketing practice goes beyond follower counts. We match your brand with nano, micro, and macro influencers based on authentic audience alignment, engagement quality, and creative fit.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed">
                From a single viral campaign to a sustained year-round PR retainer, we design the right level of media presence for your brand's stage and ambitions.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <ServiceFeatureCard icon="ph-newspaper" title="Media Outreach" desc="Pitching your brand story to journalists, editors, and online publications for editorial coverage." />
              <ServiceFeatureCard icon="ph-link" secondary={true} title="Link Building" desc="Earning contextual, high-DA backlinks that improve domain authority and organic search rankings." />
              <ServiceFeatureCard icon="ph-star" title="Influencer Matching" desc="Curated influencer selection across Instagram, TikTok, and YouTube with full campaign management." />
              <ServiceFeatureCard icon="ph-chart-bar" secondary={true} title="PR Analytics" desc="Coverage tracking, brand mention monitoring, backlink auditing, and monthly authority reports." />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-star" text="The Value" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Why Digital PR Delivers Long-Term ROI</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard icon="ph-arrow-up-right" title="Boosts SEO Rankings" desc="Editorial backlinks from authoritative publications signal trust to Google and lift your organic rankings." />
            <BenefitCard icon="ph-seal-check" secondary={true} title="Builds Brand Credibility" desc="Being featured in respected publications creates a halo of trust that advertising alone cannot buy." />
            <BenefitCard icon="ph-users" title="Expands Audience Reach" desc="Influencer partnerships and media features introduce your brand to entirely new, relevant audiences." />
            <BenefitCard icon="ph-trend-up" secondary={true} title="Compounding Returns" desc="Unlike paid ads, earned media and backlinks continue to deliver value long after the campaign ends." />
            <BenefitCard icon="ph-shield-check" title="Crisis Management Ready" desc="A strong digital PR presence gives you authority and goodwill to weather brand challenges." />
            <BenefitCard icon="ph-handshake" secondary={true} title="Authentic Partnerships" desc="We only work with influencers whose values and audiences genuinely align with your brand." />
          </div>
        </div>
      </section>

      {/* Process */}
      <section class="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-path" text="Our Process" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">How We Amplify Your Brand Story</h2>
          </div>
          <div class="flex flex-col gap-8">
            <ProcessStep num={1} title="Brand & Audience Research" desc="We analyse your brand positioning, target audience demographics, and competitor PR landscape to craft the most compelling angles." />
            <ProcessStep num={2} title="Campaign Angle & Story Development" desc="We develop newsworthy story angles, data-led reports, or creative hooks that journalists and influencers want to engage with." />
            <ProcessStep num={3} title="Media & Influencer Outreach" desc="Our network of editorial contacts and influencer relationships means faster placements and higher acceptance rates." />
            <ProcessStep num={4} title="Content Delivery & Amplification" desc="We produce all required content — press releases, influencer briefs, graphics — and manage the full delivery process." />
            <ProcessStep num={5} title="Reporting & Ongoing Optimisation" desc="Monthly reports covering placements, DA of links earned, influencer performance, and estimated PR value." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-3xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-question" text="FAQs" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Digital PR — FAQs</h2>
          </div>
          <div class="flex flex-col gap-6">
            <FaqItem q="What is Digital PR and how is it different from traditional PR?" a="Digital PR focuses on earning online media coverage and backlinks that improve both brand awareness and SEO. Traditional PR targets print and broadcast media; Digital PR targets online publications, blogs, and social channels." />
            <FaqItem q="How do you find the right influencers for my brand?" a="We use audience analysis tools to assess authenticity, engagement rate, audience demographics, and past brand partnerships. We never recommend an influencer based on follower count alone." />
            <FaqItem q="How many backlinks or placements can I expect per month?" a="This depends on your niche, budget, and campaign scope. Typically, our clients receive 5–15 high-authority placements or backlinks per month on a standard retainer." />
            <FaqItem q="Will Digital PR help my Google rankings?" a="Yes. High-DA editorial backlinks are one of the strongest signals in Google's ranking algorithm. Paired with quality on-page SEO, Digital PR can significantly lift organic visibility." />
            <FaqItem q="Do you manage the full influencer campaign, including contracts and payments?" a="Yes. We handle influencer discovery, briefing, contract negotiation, content approval, posting coordination, and payment — everything from start to finish." />
          </div>
        </div>
      </section>

      <CtaSection headline="Ready to Earn the Media Coverage Your Brand Deserves?" sub="Let's craft a Digital PR campaign that builds authority, earns links, and puts your brand in front of millions." />
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
  return ({ icon, title, desc, secondary }: { icon: string; title: string; desc: string; secondary?: boolean }) => (
    <div class="p-5 rounded-2xl border border-surface-2 bg-surface-1 hover:shadow-lg transition-shadow">
      <i class={`ph-fill ${icon} ${secondary ? 'text-secondary' : 'text-primary'} text-2xl mb-3 block`} />
      <h3 class="font-bold text-surface-dark0 mb-2">{title}</h3>
      <p class="text-sm text-text-secondary leading-relaxed">{desc}</p>
    </div>
  )
}

function BenefitCard() {
  return ({ icon, title, desc, secondary }: { icon: string; title: string; desc: string; secondary?: boolean }) => (
    <div class="flex gap-5 p-6 rounded-2xl border border-surface-2 bg-surface-1 hover:shadow-lg transition-shadow group">
      <div class={`w-12 h-12 rounded-xl ${secondary ? 'bg-secondary/5 text-secondary' : 'bg-primary/5 text-primary'} flex items-center justify-center shrink-0 text-2xl group-hover:scale-110 transition-transform`}>
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
    <section class="py-24 bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120]">
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

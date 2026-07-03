import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function SocialMediaPage() {
  return () => (
    <Layout
      title="Social Media Management Services | Bell Bee Media"
      description="Grow your brand with expert social media management. Bell Bee Media builds loyal communities, drives engagement, and delivers measurable growth on Instagram, TikTok, LinkedIn, and more."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-heart text-white" /> Social Media Management
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Social Media Management That Builds Real Communities
              </h1>
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                We craft platform-native strategies that transform followers into loyal brand advocates. From content creation to community management, we handle every touchpoint that matters.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
                  Get a Free Strategy Session <i class="ph ph-arrow-right" />
                </a>
                <a href={routes.services.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                  All Services
                </a>
              </div>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-heart text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section class="bg-white border-b border-surface-2 py-12">
        <div class="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value="2.2x" label="Average Engagement Lift" />
          <StatBox value="500K+" label="Monthly Reach Delivered" />
          <StatBox value="98%" label="Content Approval Rate" />
          <StatBox value="60+" label="Brands Grown" />
        </div>
      </section>

      {/* Overview */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div class="flex mb-4"><PillBadge icon="ph-squares-four" text="What We Do" /></div>
              <h2 class="font-heading text-4xl font-bold text-surface-dark0 mb-6">Full-Service Social Media Management</h2>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                Our social media marketing team creates thumb-stopping content calibrated to your brand voice and platform algorithms. We don't post and pray — every piece of content is backed by data, competitive analysis, and creative excellence.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                We manage your presence across Instagram, TikTok, Facebook, LinkedIn, X (Twitter), and YouTube — ensuring consistent branding, rapid response times, and audience growth month over month.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed">
                Bell Bee Media combines creative storytelling with real-time analytics, giving you transparent reporting on what's working and continuous optimization to push performance further.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <ServiceFeatureCard icon="ph-pencil" title="Content Creation" desc="Platform-optimized posts, reels, stories, and carousels crafted for your audience." />
              <ServiceFeatureCard icon="ph-chart-line-up" secondary={true} title="Growth Strategy" desc="Data-led audience growth plans designed to reach the right people at the right time." />
              <ServiceFeatureCard icon="ph-chat-circle-dots" title="Community Management" desc="Timely replies, DMs, and comment moderation to keep your community engaged." />
              <ServiceFeatureCard icon="ph-megaphone" secondary={true} title="Influencer Campaigns" desc="Curated micro and macro influencer partnerships that match your brand values." />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-star" text="Why It Works" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">What You Gain With Bell Bee Media</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard icon="ph-trending-up" title="Organic Reach Growth" desc="Algorithm-friendly content strategies that expand your organic reach without inflated ad spend." />
            <BenefitCard icon="ph-users-three" secondary={true} title="Loyal Brand Communities" desc="Deep community building that transforms passive followers into active brand advocates." />
            <BenefitCard icon="ph-chart-bar" title="Transparent Analytics" desc="Monthly performance reports with clear KPIs — impressions, reach, saves, and conversions." />
            <BenefitCard icon="ph-clock" secondary={true} title="Time Back For You" desc="Full account management so you focus on running your business while we grow your online presence." />
            <BenefitCard icon="ph-palette" title="On-Brand Creativity" desc="Every asset reflects your brand guidelines — colors, tone of voice, and visual identity." />
            <BenefitCard icon="ph-currency-dollar" secondary={true} title="Social Commerce Ready" desc="Instagram and TikTok shop integration, shoppable posts, and social-to-sale tracking." />
          </div>
        </div>
      </section>

      {/* Process */}
      <section class="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-path" text="Our Process" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">How We Launch Your Social Media Growth</h2>
          </div>
          <div class="flex flex-col gap-8">
            <ProcessStep num={1} title="Discovery & Brand Audit" desc="We deep-dive into your brand, audience, competitors, and current social presence to identify gaps and opportunities." />
            <ProcessStep num={2} title="Strategy & Content Calendar" desc="We build a bespoke 30-day content calendar with platform-specific formats, hashtag strategy, and posting cadence." />
            <ProcessStep num={3} title="Content Production" desc="Our in-house creative team produces all visuals, captions, and videos — ready for your approval before publishing." />
            <ProcessStep num={4} title="Publish, Monitor & Engage" desc="We publish on schedule, respond to your community, and track real-time performance across all platforms." />
            <ProcessStep num={5} title="Optimise & Report" desc="Monthly performance reviews with actionable insights, A/B testing results, and updated strategies for the next cycle." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-3xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-question" text="FAQs" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Frequently Asked Questions</h2>
          </div>
          <div class="flex flex-col gap-6">
            <FaqItem q="Which social media platforms do you manage?" a="We manage Instagram, TikTok, Facebook, LinkedIn, X (Twitter), Pinterest, and YouTube. We recommend platforms based on your target audience and business goals." />
            <FaqItem q="How long before we see results from social media marketing?" a="Most clients see measurable engagement improvements within 30–60 days. Sustainable follower growth and community building typically take 3–6 months of consistent effort." />
            <FaqItem q="Do I need to provide content, or do you create everything?" a="We handle full content production — strategy, copywriting, design, and video editing. We'll onboard you to capture brand-specific assets like photos or team videos if needed." />
            <FaqItem q="How do you measure social media success?" a="We track platform-specific KPIs: reach, impressions, engagement rate, follower growth, link clicks, story views, and — where applicable — social commerce conversions." />
            <FaqItem q="Can you run paid social ads alongside organic management?" a="Yes. Our Performance Ads team can pair organic social management with targeted paid campaigns for maximum amplification and faster growth." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection headline="Ready to Grow Your Social Media Presence?" sub="Book a free strategy session with our social media experts and let's map out your brand's growth roadmap." />
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

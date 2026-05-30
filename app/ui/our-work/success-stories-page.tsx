import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function SuccessStoriesPage() {
  return () => (
    <Layout
      title="Client Success Stories | Bell Bee Media"
      description="Read Bell Bee Media's client success stories — brands we scaled from zero to millions. Discover how our digital marketing strategies drove transformational growth across industries."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-sparkles text-white" /> Success Stories
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Brands We Scaled From Zero to Millions
              </h1>
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Every brand has a story. Here are the ones we helped write — from ambitious startups finding their voice to established businesses breaking into new markets.
              </p>
              <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
                Write Your Success Story <i class="ph ph-arrow-right" />
              </a>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-sparkles text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section class="bg-white border-b border-surface-2 py-12">
        <div class="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value="60+" label="Brands Grown" />
          <StatBox value="10M+" label="Combined Social Followers" />
          <StatBox value="£2B+" label="Revenue Influenced" />
          <StatBox value="15+" label="Countries Reached" />
        </div>
      </section>

      {/* Stories */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-sparkles" text="Client Stories" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Transformational Growth Stories</h2>
          </div>
          <div class="flex flex-col gap-12">
            <StoryCard
              tag="Social Media + Production"
              title="Zero to 500K: How We Built a Fashion Brand's Digital Empire"
              challenge="A UK fashion startup with no social presence and minimal budget needed to establish brand recognition and drive online sales fast."
              strategy="We developed a TikTok-first content strategy with weekly UGC-style videos, micro-influencer activations, and targeted Meta ads to retarget engaged viewers."
              results={["500K TikTok followers in 12 months", "£1.2M in attributable social commerce revenue", "3.8% average engagement rate (industry avg: 1.1%)"]}
            />
            <StoryCard
              tag="SEO + Web Development"
              secondary={true}
              title="How a B2B SaaS Company Went from Page 10 to #1 on Google"
              challenge="A project management SaaS tool was invisible on search engines, relying entirely on paid ads for customer acquisition — an unsustainable and expensive model."
              strategy="We rebuilt their website with a technical SEO foundation, executed a 12-month content strategy targeting 80+ commercial keywords, and earned 200+ editorial backlinks."
              results={["#1 ranking for primary keyword within 8 months", "415% organic traffic growth", "CAC reduced by 65% through organic channel"]}
            />
            <StoryCard
              tag="Performance Ads + Digital PR"
              title="Launching a Health Brand to £500K Revenue in 90 Days"
              challenge="A new wellness supplement brand needed rapid market entry, brand credibility, and sales volume simultaneously — without the luxury of a slow organic build."
              strategy="Parallel tracks: aggressive Meta and Google ad campaigns for immediate revenue, combined with a Digital PR blitz securing 40+ health publication features for credibility."
              results={["£500K in verified revenue within 90 days", "40+ editorial features in health publications", "Profitable from day 18 of ad launch"]}
            />
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-4xl text-center">
          <div class="flex justify-center mb-4"><PillBadge icon="ph-quotes" text="Client Feedback" /></div>
          <h2 class="font-heading text-4xl font-bold text-surface-dark0 mb-16">Stories Told By Our Clients</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <QuoteCard quote="Bell Bee understood our brand better than we did. They didn't just run campaigns — they built us an audience that actually cares about what we do." name="A.T." role="Founder, Fashion Brand" />
            <QuoteCard quote="When we were burning cash on ads with no results, Bell Bee rebuilt our entire growth strategy. Six months later, organic traffic is our #1 revenue channel." name="M.R." role="CEO, B2B SaaS" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-24 bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120]">
        <div class="container mx-auto px-4 max-w-3xl text-center">
          <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Your Story Starts Here</h2>
          <p class="text-xl text-white/80 mb-10">Whether you're launching, scaling, or pivoting — Bell Bee Media has the strategy and execution muscle to make it happen.</p>
          <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-bold text-lg rounded-full hover:bg-surface-1 transition-colors shadow-2xl">
            Get Your Free Strategy Session <i class="ph ph-arrow-right" />
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

function StoryCard() {
  return ({ tag, secondary, title, challenge, strategy, results }: {
    tag: string
    secondary?: boolean
    title: string
    challenge: string
    strategy: string
    results: string[]
  }) => (
    <div class="bg-white rounded-3xl border border-surface-2 overflow-hidden hover:shadow-xl transition-shadow">
      <div class={`h-2 ${secondary ? 'bg-secondary' : 'bg-primary'}`} />
      <div class="p-10">
        <span class={`text-xs font-bold ${secondary ? 'text-secondary bg-secondary/5' : 'text-primary bg-primary/5'} px-3 py-1.5 rounded-full`}>{tag}</span>
        <h3 class="font-heading font-bold text-2xl text-surface-dark0 mt-6 mb-8">{title}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <i class="ph-fill ph-x text-red-600 text-xs" />
              </div>
              <span class="font-bold text-surface-dark0 text-sm">The Challenge</span>
            </div>
            <p class="text-text-secondary text-sm leading-relaxed">{challenge}</p>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <i class="ph-fill ph-lightbulb text-blue-600 text-xs" />
              </div>
              <span class="font-bold text-surface-dark0 text-sm">Our Strategy</span>
            </div>
            <p class="text-text-secondary text-sm leading-relaxed">{strategy}</p>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <i class="ph-fill ph-check text-emerald-600 text-xs" />
              </div>
              <span class="font-bold text-surface-dark0 text-sm">The Results</span>
            </div>
            <ul class="flex flex-col gap-2">
              {results.map(r => (
                <li class="flex items-start gap-2 text-sm text-text-secondary">
                  <i class="ph-fill ph-check-circle text-emerald-500 mt-0.5 shrink-0" /> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function QuoteCard() {
  return ({ quote, name, role }: { quote: string; name: string; role: string }) => (
    <div class="p-8 rounded-3xl border border-surface-2 bg-surface-1 text-left flex flex-col gap-6">
      <i class="ph-fill ph-quotes text-primary text-3xl" />
      <p class="text-text-secondary leading-relaxed italic flex-1">"{quote}"</p>
      <div>
        <div class="font-bold text-surface-dark0">{name}</div>
        <div class="text-sm text-text-secondary">{role}</div>
      </div>
    </div>
  )
}

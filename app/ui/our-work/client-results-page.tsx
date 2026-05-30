import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function ClientResultsPage() {
  return () => (
    <Layout
      title="Client Results & Marketing ROI | Bell Bee Media"
      description="See the measurable results Bell Bee Media delivers for clients. Hard ROI figures, conversion metrics, traffic growth data, and revenue impact across digital marketing campaigns."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_40%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-chart-bar text-white" /> Client Results
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Hard Numbers, Not Vanity Metrics
              </h1>
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                We measure everything that matters — revenue, conversions, ROAS, and sustainable traffic growth. Here's what we've delivered for our clients.
              </p>
              <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
                Get Results Like These <i class="ph ph-arrow-right" />
              </a>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-chart-bar text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aggregate Results */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-chart-line-up" text="Aggregate Impact" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Combined Results Across All Client Accounts</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BigStatCard value="£2B+" label="Client Revenue Influenced" icon="ph-currency-pound" />
            <BigStatCard value="4.2x" label="Average Client ROAS" icon="ph-chart-line-up" secondary={true} />
            <BigStatCard value="380%" label="Avg. Organic Traffic Growth" icon="ph-trend-up" />
            <BigStatCard value="52%" label="Avg. Conversion Rate Lift" icon="ph-cursor-click" secondary={true} />
          </div>
        </div>
      </section>

      {/* Channel-Specific Results */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-grid-four" text="By Channel" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Performance Metrics by Marketing Channel</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ChannelCard channel="Social Media Marketing" icon="ph-heart" metrics={[
              { label: 'Average engagement rate increase', value: '3.2x' },
              { label: 'Average monthly follower growth', value: '+18%' },
              { label: 'Average reach expansion', value: '+285%' },
            ]} />
            <ChannelCard channel="Performance Advertising" icon="ph-chart-line-up" secondary={true} metrics={[
              { label: 'Average ROAS across accounts', value: '4.1x' },
              { label: 'Average CPC reduction', value: '-38%' },
              { label: 'Average CPA improvement', value: '-44%' },
            ]} />
            <ChannelCard channel="SEO & Web" icon="ph-magnifying-glass" metrics={[
              { label: 'Average organic traffic growth', value: '+380%' },
              { label: 'Average keyword ranking improvement', value: 'Top 3' },
              { label: 'Average conversion rate lift post-rebuild', value: '+52%' },
            ]} />
            <ChannelCard channel="Digital PR" icon="ph-megaphone" secondary={true} metrics={[
              { label: 'Average media placements per month', value: '12' },
              { label: 'Average domain authority increase', value: '+18 DA' },
              { label: 'Average organic visibility lift', value: '+45%' },
            ]} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-quotes" text="Client Voices" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">What Our Clients Say</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard name="Sarah M." role="E-Commerce Director" quote="Bell Bee Media transformed our social media presence. We went from barely 5K followers to over 80K in six months, and our online sales doubled alongside it." />
            <TestimonialCard name="James T." role="Founder, D2C Brand" quote="Their performance ads team is exceptional. We hit our ROAS target in the first month and they've consistently grown it every quarter since." />
            <TestimonialCard name="Priya K." role="Marketing Manager, SaaS" quote="The SEO results speak for themselves — we went from page 5 to page 1 for our primary keywords in 3 months. Phenomenal work." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-24 bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120]">
        <div class="container mx-auto px-4 max-w-3xl text-center">
          <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Your Results Are Next</h2>
          <p class="text-xl text-white/80 mb-10">Let's talk about what meaningful growth looks like for your business — and how we'll get you there.</p>
          <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-bold text-lg rounded-full hover:bg-surface-1 transition-colors shadow-2xl">
            Get Your Free Strategy Session <i class="ph ph-arrow-right" />
          </a>
        </div>
      </section>
    </Layout>
  )
}

function BigStatCard() {
  return ({ value, label, icon, secondary }: { value: string; label: string; icon: string; secondary?: boolean }) => (
    <div class="flex flex-col items-center text-center p-8 rounded-3xl bg-surface-1 border border-surface-2 hover:shadow-xl transition-shadow">
      <div class={`w-16 h-16 rounded-2xl ${secondary ? 'bg-secondary text-white shadow-secondary/15' : 'bg-primary text-white shadow-primary/15'} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
        <i class={`ph-fill ${icon}`} />
      </div>
      <div class={`font-heading text-5xl font-bold ${secondary ? 'text-secondary' : 'text-primary'} mb-2`}>{value}</div>
      <div class="text-text-secondary font-medium text-sm leading-relaxed">{label}</div>
    </div>
  )
}

function ChannelCard() {
  return ({ channel, icon, secondary, metrics }: { channel: string; icon: string; secondary?: boolean; metrics: { label: string; value: string }[] }) => (
    <div class="p-8 rounded-3xl border border-surface-2 bg-white hover:shadow-xl transition-shadow">
      <div class="flex items-center gap-4 mb-6">
        <div class={`w-14 h-14 rounded-2xl ${secondary ? 'bg-secondary/5 text-secondary' : 'bg-primary/5 text-primary'} flex items-center justify-center text-2xl`}>
          <i class={`ph-fill ${icon}`} />
        </div>
        <h3 class="font-heading font-bold text-xl text-surface-dark0">{channel}</h3>
      </div>
      <div class="flex flex-col gap-4">
        {metrics.map(m => (
          <div class="flex justify-between items-center py-3 border-b border-surface-2 last:border-0">
            <span class="text-text-secondary text-sm">{m.label}</span>
            <span class={`font-heading font-bold ${secondary ? 'text-secondary' : 'text-primary'} text-lg`}>{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TestimonialCard() {
  return ({ name, role, quote }: { name: string; role: string; quote: string }) => (
    <div class="p-8 rounded-3xl border border-surface-2 bg-surface-1 flex flex-col gap-6">
      <i class="ph-fill ph-quotes text-primary text-3xl" />
      <p class="text-text-secondary leading-relaxed italic flex-1">"{quote}"</p>
      <div>
        <div class="font-bold text-surface-dark0">{name}</div>
        <div class="text-sm text-text-secondary">{role}</div>
      </div>
    </div>
  )
}

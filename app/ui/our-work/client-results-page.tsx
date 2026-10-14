import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'

const aggregateStats = [
  { value: "£35M+", label: "Client Revenue Influenced", icon: "ph-currency-pound", gradient: "from-violet-600 to-purple-600" },
  { value: "3.4x", label: "Average Client ROAS", icon: "ph-chart-line-up", gradient: "from-cyan-500 to-blue-600" },
  { value: "180%", label: "Avg. Organic Traffic Growth", icon: "ph-trend-up", gradient: "from-emerald-500 to-teal-600" },
  { value: "35%", label: "Avg. Conversion Rate Lift", icon: "ph-cursor-click", gradient: "from-amber-500 to-orange-600" },
]

const channels = [
  {
    channel: "Social Media Marketing",
    icon: "ph-heart",
    gradient: "from-pink-600 to-rose-600",
    metrics: [
      { label: 'Average engagement rate increase', value: '2.2x' },
      { label: 'Average monthly follower growth', value: '+12%' },
      { label: 'Average reach expansion', value: '+145%' },
    ]
  },
  {
    channel: "Performance Advertising",
    icon: "ph-chart-line-up",
    gradient: "from-violet-600 to-indigo-600",
    metrics: [
      { label: 'Average ROAS across accounts', value: '3.4x' },
      { label: 'Average CPC reduction', value: '-25%' },
      { label: 'Average CPA improvement', value: '-30%' },
    ]
  },
  {
    channel: "SEO & Web",
    icon: "ph-magnifying-glass",
    gradient: "from-cyan-500 to-blue-600",
    metrics: [
      { label: 'Average organic traffic growth', value: '+180%' },
      { label: 'Average keyword ranking improvement', value: 'Top 3' },
      { label: 'Average conversion rate lift post-rebuild', value: '+35%' },
    ]
  },
  {
    channel: "Digital PR",
    icon: "ph-megaphone",
    gradient: "from-amber-500 to-orange-600",
    metrics: [
      { label: 'Average media placements per month', value: '12' },
      { label: 'Average domain authority increase', value: '+12 DA' },
      { label: 'Average organic visibility lift', value: '+45%' },
    ]
  },
]

const testimonials = [
  {
    name: "Sarah M.",
    role: "E-Commerce Director",
    initials: "SM",
    avatarColor: "from-violet-500 to-fuchsia-500",
    quote: "Bell Bee Media transformed our social media presence. We went from barely 5K followers to over 80K in six months, and our online sales doubled alongside it.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Founder, D2C Brand",
    initials: "JT",
    avatarColor: "from-cyan-500 to-blue-600",
    quote: "Their performance ads team is exceptional. We hit our ROAS target in the first month and they've consistently grown it every quarter since.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Marketing Manager, SaaS",
    initials: "PK",
    avatarColor: "from-emerald-500 to-teal-600",
    quote: "The SEO results speak for themselves — we went from page 5 to page 1 for our primary keywords in 3 months. Phenomenal work.",
    rating: 5,
  },
]

export function ClientResultsPage() {
  return () => (
    <Layout
      title="Client Results & Marketing ROI | Bell Bee Media"
      description="See the measurable results Bell Bee Media delivers for clients. Hard ROI figures, conversion metrics, traffic growth data, and revenue impact across digital marketing campaigns."
    >
      {/* ── HERO ── */}
      <section class="relative bg-surface-dark0 min-h-[70vh] flex items-center pt-28 pb-8 overflow-hidden bb-noise">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_55%,rgba(21,68,118,0.55)_0%,transparent_65%)] pointer-events-none" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_25%,rgba(245,158,11,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div class="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div class="container mx-auto px-4 max-w-6xl relative z-10 py-10 w-full">
          <div class="max-w-3xl mx-auto text-center">
            <div class="bb-pill-enter inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8 backdrop-blur-sm">
              <i class="ph-fill ph-chart-bar text-secondary" />
              Client Performance Data
            </div>
            <h1 class="bb-stage text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05]" style="animation-delay:0.1s">
              Hard Numbers,<br />
              <span class="bb-shimmer-text font-black">
                Not Vanity Metrics.
              </span>
            </h1>
            <p class="bb-stage text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto" style="animation-delay:0.25s">
              We measure everything that matters — revenue, conversions, ROAS, and sustainable traffic growth. Here's the aggregated data across all client accounts.
            </p>
            <div class="bb-stage" style="animation-delay:0.4s">
              <a href={routes.getProposal.href()} data-glow-btn class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/30 hover:scale-[1.02]">
                Get Results Like These <i class="ph ph-arrow-right" />
              </a>
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ── AGGREGATE STATS ── */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-14" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6">
              <i class="ph-fill ph-chart-line-up" /> Aggregate Impact
            </div>
            <h2 class="text-4xl font-black text-surface-dark0 mb-3">Combined Results Across All Accounts</h2>
            <p class="text-text-secondary max-w-xl mx-auto">These figures represent aggregated performance across our entire client portfolio.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger-group>
            {aggregateStats.map(s => (
              <div data-stagger-item data-tilt data-tilt-intensity="3" class="group relative flex flex-col items-center p-8 rounded-[1.75rem] bg-surface-1 border border-surface-2 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div class="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all" />
                <div class={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}>
                  <i class={`ph-fill ${s.icon}`} />
                </div>
                <div data-count={s.value} class="text-4xl font-black text-surface-dark0 mb-2">{s.value}</div>
                <div class="text-sm text-text-secondary font-medium text-center leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNEL RESULTS ── */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-14" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/8 border border-secondary/15 text-secondary text-sm font-semibold mb-6">
              <i class="ph-fill ph-grid-four" /> By Channel
            </div>
            <h2 class="text-4xl font-black text-surface-dark0 mb-3">Performance Metrics by Marketing Channel</h2>
            <p class="text-text-secondary max-w-xl mx-auto">Drill into the specific ROI data for each of the core channels we manage.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-stagger-group>
            {channels.map(c => (
              <div data-stagger-item data-tilt data-tilt-intensity="2" class="group bg-white rounded-[1.75rem] border border-surface-2 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* channel header */}
                <div class={`bg-gradient-to-r ${c.gradient} p-6 flex items-center gap-4`}>
                  <div class="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white text-2xl border border-white/20">
                    <i class={`ph-fill ${c.icon}`} />
                  </div>
                  <h3 class="font-black text-white text-lg">{c.channel}</h3>
                </div>
                {/* metrics */}
                <div class="p-6 flex flex-col gap-0">
                  {c.metrics.map((m, i) => (
                    <div class={`flex justify-between items-center py-4 ${i < c.metrics.length - 1 ? 'border-b border-surface-2' : ''}`}>
                      <span class="text-sm text-text-secondary">{m.label}</span>
                      <span class="font-black text-surface-dark0 text-lg">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-14" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6">
              <i class="ph-fill ph-quotes" /> Client Voices
            </div>
            <h2 class="text-4xl font-black text-surface-dark0 mb-3">What Our Clients Say</h2>
            <p class="text-text-secondary max-w-lg mx-auto">Real people, real businesses, real outcomes — unfiltered.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-stagger-group>
            {testimonials.map(t => (
              <div data-stagger-item data-tilt data-tilt-intensity="3" class="group flex flex-col p-8 rounded-[1.75rem] border border-surface-2 bg-surface-1 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                {/* stars */}
                <div class="flex gap-1 text-secondary mb-6">
                  {Array.from({ length: t.rating }).map(_ => (
                    <i class="ph-fill ph-star text-base" />
                  ))}
                </div>
                <i class="ph-fill ph-quotes text-primary/30 text-3xl mb-3" />
                <p class="text-surface-dark1 leading-relaxed italic flex-1 text-sm">"{t.quote}"</p>
                <div class="flex items-center gap-3 mt-6 pt-5 border-t border-surface-2">
                  <div class={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} text-white flex items-center justify-center font-black text-xs shrink-0`}>{t.initials}</div>
                  <div>
                    <div class="font-bold text-surface-dark0 text-sm">{t.name}</div>
                    <div class="text-xs text-text-secondary">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section class="py-24 bg-surface-dark0 relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(21,68,118,0.6)_0%,transparent_70%)] pointer-events-none" />
        <div class="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <div data-reveal="scale" class="bg-gradient-to-br from-primary via-[#0f3060] to-surface-dark0 p-10 md:p-20 rounded-[40px] text-white overflow-hidden relative shadow-2xl">
            <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-secondary/25 blur-[80px] pointer-events-none"></div>
            <div class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-light/15 blur-[80px] pointer-events-none"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] border border-white/5 pointer-events-none"></div>

            <div class="relative z-10 max-w-2xl mx-auto text-center">
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium mb-8">
                <i class="ph-fill ph-rocket text-secondary" /> Your Results Are Next
              </span>
              <h2 class="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Your Results Are Next</h2>
              <p class="text-xl text-white/60 mb-10 leading-relaxed">Let's talk about what meaningful growth looks like for your business — and how we'll get you there.</p>
              <a href={routes.getProposal.href()} data-glow-btn class="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white font-black text-lg rounded-full hover:bg-secondary/90 transition-all shadow-2xl shadow-secondary/30 hover:scale-[1.03]">
                Get Your Free Strategy Session <i class="ph ph-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

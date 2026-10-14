import { Layout } from '../layout.tsx'
import { routes } from '../../routes.ts'
import { type Handle } from 'remix/ui'
import { type WPSuccessStory } from '../../data/wordpress.ts'

interface SuccessStoriesPageProps {
  stories: WPSuccessStory[]
}

const accentPalette = [
  {
    bar: "bg-gradient-to-r from-violet-600 to-fuchsia-600",
    badge: "bg-violet-500/10 text-violet-600 border border-violet-500/20",
    icon: "bg-violet-500/10 text-violet-600",
    challenge: "bg-red-50 border-red-100",
    strategy: "bg-blue-50 border-blue-100",
    results: "bg-emerald-50 border-emerald-100",
  },
  {
    bar: "bg-gradient-to-r from-cyan-500 to-blue-600",
    badge: "bg-cyan-500/10 text-cyan-600 border border-cyan-500/20",
    icon: "bg-cyan-500/10 text-cyan-600",
    challenge: "bg-red-50 border-red-100",
    strategy: "bg-blue-50 border-blue-100",
    results: "bg-emerald-50 border-emerald-100",
  },
  {
    bar: "bg-gradient-to-r from-amber-500 to-orange-600",
    badge: "bg-amber-500/10 text-amber-600 border border-amber-500/20",
    icon: "bg-amber-500/10 text-amber-600",
    challenge: "bg-red-50 border-red-100",
    strategy: "bg-blue-50 border-blue-100",
    results: "bg-emerald-50 border-emerald-100",
  },
  {
    bar: "bg-gradient-to-r from-emerald-500 to-teal-600",
    badge: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
    icon: "bg-emerald-500/10 text-emerald-600",
    challenge: "bg-red-50 border-red-100",
    strategy: "bg-blue-50 border-blue-100",
    results: "bg-emerald-50 border-emerald-100",
  },
]

const heroStats = [
  { value: "60+", label: "Brands Grown", icon: "ph-buildings" },
  { value: "3M+", label: "Combined Followers", icon: "ph-users" },
  { value: "£35M+", label: "Revenue Influenced", icon: "ph-currency-pound" },
  { value: "15+", label: "Countries Reached", icon: "ph-globe" },
]

const quotes = [
  {
    quote: "Bell Bee understood our brand better than we did. They didn't just run campaigns — they built us an audience that actually cares about what we do.",
    name: "A.T.",
    role: "Founder, Fashion Brand",
    initials: "AT",
    avatarColor: "from-violet-500 to-fuchsia-500",
  },
  {
    quote: "When we were burning cash on ads with no results, Bell Bee rebuilt our entire growth strategy. Six months later, organic traffic is our #1 revenue channel.",
    name: "M.R.",
    role: "CEO, B2B SaaS",
    initials: "MR",
    avatarColor: "from-cyan-500 to-blue-600",
  },
]

export function SuccessStoriesPage(handle: Handle<SuccessStoriesPageProps>) {
  const { stories } = handle.props

  return () => (
    <Layout
      title="Client Success Stories | Bell Bee Media"
      description="Read Bell Bee Media's client success stories — brands we scaled from zero to millions. Discover how our digital marketing strategies drove transformational growth across industries."
    >
      {/* ── HERO ── */}
      <section class="relative bg-surface-dark0 min-h-[75vh] flex items-center pt-28 pb-8 overflow-hidden bb-noise">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_60%,rgba(21,68,118,0.5)_0%,transparent_65%)] pointer-events-none" />
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(139,92,246,0.2)_0%,transparent_55%)] pointer-events-none" />
        <div class="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div class="container mx-auto px-4 max-w-6xl relative z-10 py-12 w-full">
          <div class="text-center max-w-4xl mx-auto">
            <div class="bb-pill-enter inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8 backdrop-blur-sm">
              <i class="ph-fill ph-sparkles text-secondary" />
              Success Stories
            </div>
            <h1 class="bb-stage text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05]" style="animation-delay:0.1s">
              Brands We Scaled<br />
              <span class="bb-shimmer-text font-black">
                From Zero to Millions.
              </span>
            </h1>
            <p class="bb-stage text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto" style="animation-delay:0.25s">
              Every brand has a story. Here are the ones we helped write — from ambitious startups finding their voice to established businesses breaking into new markets.
            </p>
            <div class="bb-stage" style="animation-delay:0.4s">
              <a href={routes.getProposal.href()} data-glow-btn class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/30 hover:scale-[1.02]">
                Write Your Success Story <i class="ph ph-arrow-right" />
              </a>
            </div>
          </div>

          {/* Impact ticker */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16" data-stagger-group>
            {heroStats.map(s => (
              <div class="flex flex-col items-center p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm gap-2" data-stagger-item>
                <i class={`ph-fill ${s.icon} text-secondary text-2xl`} />
                <span data-count={s.value} class="text-3xl font-black text-white">{s.value}</span>
                <span class="text-xs text-white/50 font-medium text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-1 to-transparent pointer-events-none" />
      </section>

      {/* ── STORIES ── */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6">
              <i class="ph-fill ph-sparkles" /> Client Stories
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-4">Transformational Growth Stories</h2>
            <p class="text-text-secondary max-w-2xl mx-auto">Each story follows the same structure: the challenge, the strategy we built, and the measurable results delivered.</p>
          </div>

          <div class="flex flex-col gap-8" data-stagger-group>
            {stories.map((story, i) => {
              const palette = accentPalette[i % accentPalette.length]
              return (
                <div data-stagger-item data-tilt data-tilt-intensity="2" class="group bg-white rounded-[1.75rem] border border-surface-2 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* top gradient bar */}
                  <div class={`h-1.5 w-full ${palette.bar}`} />
                  <div class="p-10">
                    <div class="flex flex-wrap items-center gap-4 mb-6">
                      <span class={`text-xs font-bold px-3 py-1.5 rounded-full ${palette.badge}`}>{story.tag}</span>
                      <h3 class="font-black text-2xl text-surface-dark0 group-hover:text-primary transition-colors flex-1 min-w-[200px]">{story.title}</h3>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                      {/* Challenge */}
                      <div class={`rounded-2xl border p-6 ${palette.challenge}`}>
                        <div class="flex items-center gap-3 mb-4">
                          <div class="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center">
                            <i class="ph-fill ph-x text-red-600 text-sm" />
                          </div>
                          <span class="font-black text-surface-dark0 text-sm">The Challenge</span>
                        </div>
                        <p class="text-text-secondary text-sm leading-relaxed">{story.challenge}</p>
                      </div>

                      {/* Strategy */}
                      <div class={`rounded-2xl border p-6 ${palette.strategy}`}>
                        <div class="flex items-center gap-3 mb-4">
                          <div class="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                            <i class="ph-fill ph-lightbulb text-blue-600 text-sm" />
                          </div>
                          <span class="font-black text-surface-dark0 text-sm">Our Strategy</span>
                        </div>
                        <p class="text-text-secondary text-sm leading-relaxed">{story.strategy}</p>
                      </div>

                      {/* Results */}
                      <div class={`rounded-2xl border p-6 ${palette.results}`}>
                        <div class="flex items-center gap-3 mb-4">
                          <div class="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <i class="ph-fill ph-check text-emerald-600 text-sm" />
                          </div>
                          <span class="font-black text-surface-dark0 text-sm">The Results</span>
                        </div>
                        <ul class="flex flex-col gap-2.5">
                          {story.results.map(r => (
                            <li class="flex items-start gap-2.5 text-sm text-text-secondary">
                              <i class="ph-fill ph-check-circle text-emerald-500 mt-0.5 shrink-0 text-base" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── QUOTES ── */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center mb-14" data-reveal>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/8 border border-secondary/15 text-secondary text-sm font-semibold mb-6">
              <i class="ph-fill ph-quotes" /> Client Feedback
            </div>
            <h2 class="text-4xl font-black text-surface-dark0 mb-3">Stories Told By Our Clients</h2>
            <p class="text-text-secondary max-w-lg mx-auto">Unfiltered voices from brands we've helped grow.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-stagger-group>
            {quotes.map(q => (
              <div data-stagger-item data-tilt data-tilt-intensity="3" class="group flex flex-col gap-6 p-10 rounded-[1.75rem] border border-surface-2 bg-surface-1 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <i class="ph-fill ph-quotes text-primary/25 text-4xl" />
                <p class="text-surface-dark1 leading-relaxed italic flex-1">"{q.quote}"</p>
                <div class="flex items-center gap-3 pt-5 border-t border-surface-2">
                  <div class={`w-11 h-11 rounded-full bg-gradient-to-br ${q.avatarColor} text-white flex items-center justify-center font-black text-sm shrink-0`}>{q.initials}</div>
                  <div>
                    <div class="font-bold text-surface-dark0">{q.name}</div>
                    <div class="text-sm text-text-secondary">{q.role}</div>
                  </div>
                  <div class="ml-auto flex gap-0.5 text-secondary">
                    {Array.from({ length: 5 }).map(_ => <i class="ph-fill ph-star text-sm" />)}
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
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(245,158,11,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div class="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <div data-reveal="scale" class="bg-gradient-to-br from-primary via-[#0f3060] to-surface-dark0 p-10 md:p-20 rounded-[40px] text-white overflow-hidden relative shadow-2xl">
            <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-secondary/25 blur-[80px] pointer-events-none"></div>
            <div class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-light/15 blur-[80px] pointer-events-none"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] border border-white/5 pointer-events-none"></div>

            <div class="relative z-10 max-w-2xl mx-auto text-center">
              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/65 text-sm font-medium mb-8">
                <i class="ph-fill ph-pen-nib text-secondary" /> Your Story Starts Here
              </span>
              <h2 class="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Your Story Starts Here</h2>
              <p class="text-xl text-white/60 mb-10 leading-relaxed">Whether you're launching, scaling, or pivoting — Bell Bee Media has the strategy and execution muscle to make it happen.</p>
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

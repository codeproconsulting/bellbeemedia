import { type RemixNode } from 'remix/ui'

export function PillBadge() {
  return ({ icon, text, dark }: { icon: string, text: string, dark?: boolean }) => (
    <span class={`pill-badge ${
      dark 
        ? 'bg-white/10 text-white border-white/15' 
        : 'bg-primary/5 text-primary border-primary/10'
    }`}>
      <i class={`ph-fill ${icon} ${dark ? 'text-white' : 'text-primary'}`}></i> {text}
    </span>
  )
}

/* ─────────────────────────────────────────
   STATS BAR
───────────────────────────────────────── */
export function StatsBar() {
  return () => (
    <section class="py-16 bg-gradient-to-r from-[#071324] via-primary to-[#071324] border-y border-white/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
      <div class="container mx-auto px-4 max-w-5xl relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="flex flex-col items-center gap-2 group">
            <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">80+</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Brands Scaled</span>
          </div>
          <div class="flex flex-col items-center gap-2 group">
            <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">₹12Cr+</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Ad Spend Managed</span>
          </div>
          <div class="flex flex-col items-center gap-2 group">
            <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">4.2x</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Avg. ROAS Delivered</span>
          </div>
          <div class="flex flex-col items-center gap-2 group">
            <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">98%</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Client Retention</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   SERVICES GRID
───────────────────────────────────────── */
const services = [
  {
    icon: 'ph-heart',
    title: 'Social Media Management',
    desc: 'Platform-native strategies, community management, and viral content that builds loyal audiences and turns followers into brand evangelists.',
    tags: ['Instagram', 'TikTok', 'LinkedIn'],
  },
  {
    icon: 'ph-chart-line-up',
    title: 'Performance Marketing',
    desc: 'ROI-obsessed PPC campaigns engineered to drive qualified leads and revenue at scale — from Meta Ads to Google Search to programmatic.',
    tags: ['Google Ads', 'Meta Ads', 'Retargeting'],
  },
  {
    icon: 'ph-megaphone',
    title: 'Digital PR & Influencer',
    desc: 'Strategic media placements, editorial outreach, and curated influencer partnerships that make your brand impossible to ignore.',
    tags: ['Media Coverage', 'Influencer Seeding', 'Brand Colabs'],
  },
  {
    icon: 'ph-film-slate',
    title: 'Creative Production',
    desc: 'Premium video shoots, branded photography, and motion graphics that stop the scroll and make every pixel of your content count.',
    tags: ['Video Ads', 'Reels & Shorts', 'Photography'],
  },
  {
    icon: 'ph-desktop',
    title: 'Web & Landing Pages',
    desc: 'Conversion-engineered websites and high-speed landing pages that turn traffic into customers — built for both humans and search engines.',
    tags: ['CRO', 'SEO', 'E-commerce'],
  },
  {
    icon: 'ph-bezier-curve',
    title: 'Design & Copywriting',
    desc: 'Visual brand identities, ad creatives, and sharp sales copy that communicates your value proposition with clarity and authority.',
    tags: ['Branding', 'Ad Creatives', 'UX Copy'],
  },
]

export function ServicesGrid() {
  return () => (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <div class="group relative rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col gap-5 bg-white border border-surface-2 hover:shadow-xl hover:border-primary/20">
          {/* Subtle corner glow on hover */}
          <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"></div>

          {/* Icon */}
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0 bg-primary/5 text-primary group-hover:scale-110 transition-all duration-300">
            <i class={`ph-fill ${s.icon}`}></i>
          </div>

          {/* Content */}
          <div class="flex flex-col gap-3 flex-grow">
            <h3 class="text-xl font-bold transition-colors duration-300 text-surface-dark0 group-hover:text-primary">{s.title}</h3>
            <p class="text-sm leading-relaxed text-text-secondary">{s.desc}</p>
          </div>

          {/* Tags */}
          <div class="flex flex-wrap gap-2 mt-auto">
            {s.tags.map((tag) => (
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-primary/5 text-primary">{tag}</span>
            ))}
          </div>

          {/* Arrow CTA */}
          <div class="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 mt-1 text-text-secondary group-hover:text-primary">
            Learn more <i class="ph ph-arrow-right group-hover:translate-x-1 transition-transform duration-300 inline-block"></i>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────
   PROCESS SECTION
───────────────────────────────────────── */
export function ProcessSection() {
  return () => (
    <section class="py-24 bg-gradient-to-br from-[#0a1a2e] via-primary to-[#050d18] text-white border-t border-white/5 relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div class="text-center max-w-3xl mx-auto mb-20">
          <div class="flex justify-center mb-4">
            <PillBadge icon="ph-path" text="How We Work" dark={true} />
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            From brief to <span class="text-secondary">breakthrough</span> — our process
          </h2>
          <p class="text-lg text-white/70 leading-relaxed">
            No guesswork. No templated strategies. Every engagement starts with understanding your business deeply and ends with measurable results.
          </p>
        </div>

        {/* Process Steps — alternating layout */}
        <div class="flex flex-col gap-8 max-w-4xl mx-auto">

          {/* Step 1 */}
          <div class="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div class="md:col-span-5 order-2 md:order-1 bg-white/[0.03] rounded-3xl p-8 flex items-center justify-center h-48 border border-white/10 group-hover:border-white/20 transition-colors">
              <div class="flex items-center gap-6">
                <div class="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center text-3xl shadow-md border border-white/5 flex-shrink-0">
                  <i class="ph-fill ph-magnifying-glass-plus"></i>
                </div>
                <div>
                  <div class="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Week 1</div>
                  <div class="font-bold text-white">Deep brand audit complete</div>
                  <div class="text-xs text-white/60 mt-1">Competitor gaps identified. Positioning locked.</div>
                </div>
              </div>
            </div>
            <div class="md:col-span-7 order-1 md:order-2 flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-black text-base flex-shrink-0 shadow-md shadow-secondary/20">01</span>
                <h3 class="text-2xl font-black text-white group-hover:text-secondary transition-colors">Discovery & Deep Audit</h3>
              </div>
              <p class="text-white/70 leading-relaxed pl-13">We analyse your brand positioning, current marketing data, audience personas, and competitor landscape — identifying high-leverage opportunities that others miss.</p>
              <ul class="flex flex-col gap-2 pl-13">
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> Brand voice & positioning audit</li>
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> Competitor gap analysis</li>
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> Audience persona mapping</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Step 2 */}
          <div class="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div class="md:col-span-7 flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-black text-base flex-shrink-0 shadow-md shadow-secondary/20">02</span>
                <h3 class="text-2xl font-black text-white group-hover:text-secondary transition-colors">Strategic Blueprint</h3>
              </div>
              <p class="text-white/70 leading-relaxed pl-13">A bespoke, channel-specific strategy built around your KPIs — not a copy-paste template. We set targets, define timelines, allocate budgets, and agree on success metrics upfront.</p>
              <ul class="flex flex-col gap-2 pl-13">
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> 30/60/90 day growth roadmap</li>
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> KPI frameworks & tracking setup</li>
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> Budget allocation strategy</li>
              </ul>
            </div>
            <div class="md:col-span-5 bg-white/[0.03] rounded-3xl p-8 flex items-center justify-center h-48 border border-white/10 group-hover:border-white/20 transition-colors">
              <div class="flex items-center gap-6">
                <div class="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center text-3xl shadow-md border border-white/5 flex-shrink-0">
                  <i class="ph-fill ph-strategy"></i>
                </div>
                <div>
                  <div class="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Week 1–2</div>
                  <div class="font-bold text-white">Strategy sign-off</div>
                  <div class="text-xs text-white/60 mt-1">Roadmap tailored. Targets set.</div>
                </div>
              </div>
            </div>
          </div>

          <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Step 3 */}
          <div class="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div class="md:col-span-5 order-2 md:order-1 bg-white/[0.03] rounded-3xl p-8 flex items-center justify-center h-48 border border-white/10 group-hover:border-white/20 transition-colors">
              <div class="flex items-center gap-6">
                <div class="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center text-3xl shadow-md border border-white/5 flex-shrink-0">
                  <i class="ph-fill ph-rocket-launch"></i>
                </div>
                <div>
                  <div class="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Week 2–3</div>
                  <div class="font-bold text-white">Campaigns go live</div>
                  <div class="text-xs text-white/60 mt-1">Assets built. Content live. Data flowing.</div>
                </div>
              </div>
            </div>
            <div class="md:col-span-7 order-1 md:order-2 flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-black text-base flex-shrink-0 shadow-md shadow-secondary/20">03</span>
                <h3 class="text-2xl font-black text-white group-hover:text-secondary transition-colors">Execution & Launch</h3>
              </div>
              <p class="text-white/70 leading-relaxed pl-13">Our production and media teams build every asset, configure every campaign, and launch every funnel with precision — fully approved by you before anything goes live.</p>
              <ul class="flex flex-col gap-2 pl-13">
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> Creative production & approval</li>
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> Campaign setup & QA</li>
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> Funnel & tracking deployment</li>
              </ul>
            </div>
          </div>

          <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Step 4 */}
          <div class="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div class="md:col-span-7 flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <span class="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-black text-base flex-shrink-0 shadow-md shadow-secondary/20">04</span>
                <h3 class="text-2xl font-black text-white group-hover:text-secondary transition-colors">Optimise, Report & Scale</h3>
              </div>
              <p class="text-white/70 leading-relaxed pl-13">Real-time monitoring, weekly performance calls, and monthly deep-dive reports. We cut what doesn't work and double down on what does — continuously compounding your results.</p>
              <ul class="flex flex-col gap-2 pl-13">
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> Weekly performance dashboards</li>
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> A/B testing & iteration</li>
                <li class="flex items-center gap-2 text-sm text-white/70"><i class="ph-fill ph-check-circle text-secondary text-base"></i> Scaling winning campaigns</li>
              </ul>
            </div>
            <div class="md:col-span-5 bg-white/[0.03] rounded-3xl p-8 flex items-center justify-center h-48 border border-white/10 group-hover:border-white/20 transition-colors">
              <div class="flex items-center gap-6">
                <div class="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center text-3xl shadow-md border border-white/5 flex-shrink-0">
                  <i class="ph-fill ph-trend-up"></i>
                </div>
                <div>
                  <div class="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Ongoing</div>
                  <div class="font-bold text-white">Continuous growth</div>
                  <div class="text-xs text-white/60 mt-1">Results compound month on month.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   TESTIMONIALS SECTION
───────────────────────────────────────── */
export function TestimonialsSection() {
  return () => (
    <section class="py-24 bg-surface-1 border-t border-surface-2 relative overflow-hidden">
      <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>

      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div class="max-w-xl">
            <div class="mb-4">
              <span class="pill-badge bg-primary/5 text-primary border-primary/10">
                <i class="ph-fill ph-chat-circle-text text-primary"></i> Client Stories
              </span>
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-3 tracking-tight">
              Results our clients <span class="text-gradient">can't stop</span> talking about
            </h2>
            <p class="text-text-secondary leading-relaxed">Real brands. Real numbers. No fluff — just the outcomes we delivered.</p>
          </div>
          {/* Aggregate rating badge */}
          <div class="flex-shrink-0 bg-white border border-surface-2 rounded-2xl p-5 flex flex-col items-center gap-1 shadow-sm min-w-[140px]">
            <div class="flex gap-0.5 text-secondary text-xl">
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
              <i class="ph-fill ph-star"></i>
            </div>
            <div class="text-3xl font-black text-surface-dark0">4.9</div>
            <div class="text-xs text-text-secondary font-medium">Avg. Rating</div>
            <div class="text-xs text-text-secondary">from 60+ reviews</div>
          </div>
        </div>

        {/* Featured large testimonial + 2 side cards */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Featured */}
          <div class="lg:col-span-6 bg-surface-dark0 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
            <div>
              <i class="ph-fill ph-quotes text-secondary text-5xl mb-6 block opacity-60"></i>
              <p class="text-white text-lg leading-relaxed font-medium mb-8">
                Bell Bee didn't just run our ads — they rewired how we think about digital. Within 90 days, our CAC dropped by 48%, our ROAS hit 5.1x, and we crossed ₹1Cr/month in direct social revenue for the first time ever. They're not a vendor, they're a growth partner.
              </p>
            </div>
            <div class="flex items-center gap-4 pt-6 border-t border-white/10">
              <div class="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-black text-base flex-shrink-0">
                RP
              </div>
              <div>
                <h4 class="font-bold text-white text-base">Rahul Patel</h4>
                <p class="text-white/50 text-xs font-medium">CEO, FabFashion India — ₹50Cr D2C Brand</p>
              </div>
              <div class="ml-auto flex-shrink-0">
                <div class="flex gap-0.5 text-secondary text-sm">
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Right column with 2 cards stacked */}
          <div class="lg:col-span-6 flex flex-col gap-6">

            {/* Card 2 */}
            <div class="bg-white border border-surface-2 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
              <div>
                <div class="flex gap-0.5 text-secondary text-sm mb-5">
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                </div>
                <p class="text-surface-dark1 leading-relaxed mb-6">
                  "Our paid acquisition was bleeding money. Bell Bee restructured our entire funnel — new creatives, tighter audiences, better landing pages. CAC cut by 42% in month one. These people actually know what they're doing."
                </p>
              </div>
              <div class="flex items-center gap-3 pt-5 border-t border-surface-2">
                <div class="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-black text-sm flex-shrink-0">VS</div>
                <div>
                  <h4 class="font-bold text-surface-dark0 text-sm">Vikram Singh</h4>
                  <p class="text-text-secondary text-xs">CMO, FinTech Solutions</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div class="bg-white border border-surface-2 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
              <div>
                <div class="flex gap-0.5 text-secondary text-sm mb-5">
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                  <i class="ph-fill ph-star"></i>
                </div>
                <p class="text-surface-dark1 leading-relaxed mb-6">
                  "We went from 12K to 280K Instagram followers in 6 months. More importantly, those followers convert — our DM-to-sale rate is 22%. Bell Bee's content strategy is genuinely world-class."
                </p>
              </div>
              <div class="flex items-center gap-3 pt-5 border-t border-surface-2">
                <div class="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-sm flex-shrink-0">AR</div>
                <div>
                  <h4 class="font-bold text-surface-dark0 text-sm">Ananya Roy</h4>
                  <p class="text-text-secondary text-xs">Founder, StyleCo E-commerce</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

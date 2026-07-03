import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function OurCompanyPage() {
  return () => (
    <Layout
      title="About Bell Bee Media — Our Story, Team & Values"
      description="Meet the team behind Bell Bee Media — 5 seasoned digital marketing experts who spent years mastering their crafts independently, now united to deliver full-service growth for ambitious brands."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-users text-white" /> Our Company
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Five Experts. One Agency. Limitless Growth.
              </h1>
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Bell Bee Media was born when five seasoned marketing professionals — each a specialist in their own right — decided to stop working in isolation and start building something greater together.
              </p>
              <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-colors shadow-xl">
                Work With Us <i class="ph ph-arrow-right" />
              </a>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <img src="/Logo.svg" alt="Bell Bee Media" class="w-40 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section class="bg-white border-b border-surface-2 py-12">
        <div class="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value="5" label="Core Specialists" />
          <StatBox value="35+" label="Combined Yrs Experience" />
          <StatBox value="3.4x" label="Avg. ROAS Delivered" />
          <StatBox value="100%" label="Dedicated to Results" />
        </div>
      </section>

      {/* Our Story */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div class="aspect-square bg-white rounded-3xl p-8 flex items-center justify-center relative shadow-inner border border-surface-2 overflow-hidden">
              <div class="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(44,188,238,0.08)_0,transparent_70%)]" />
              <img src="/Logo.svg" alt="Bell Bee Media Logo" class="w-3/4 h-auto drop-shadow-xl relative z-10" />
            </div>
            <div>
              <div class="flex mb-4"><PillBadge icon="ph-book-open" text="Our Story" /></div>
              <h2 class="font-heading text-4xl font-bold text-surface-dark0 mb-6">From Solo Hustlers to a Unified Team of Experts</h2>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                For years, each of us built our expertise independently — one mastering paid media, another dominating social strategy, another crafting high-converting copy, another building stunning digital experiences, and one becoming the analytics mind every campaign needs.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                We watched brands struggle because they were forced to patch together multiple freelancers and agencies — losing time, consistency, and money in the gaps between them. That problem is exactly why Bell Bee Media exists.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed">
                By uniting our individual strengths under one roof, we now offer brands a seamless, end-to-end marketing powerhouse. No silos. No handoff chaos. Just five specialists working in perfect sync — fully focused on scaling your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-heart" text="Our Values" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">The Principles That Guide Everything We Do</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ValueCard icon="ph-eye" title="Radical Transparency" desc="We tell you the truth — good news and bad. Our reporting is clear, our metrics are real, and we never hide behind jargon or spin." />
            <ValueCard icon="ph-chart-line-up" secondary={true} title="Results Before Recognition" desc="We measure our success by your growth metrics, not industry awards. Every decision is evaluated by its potential impact on your revenue." />
            <ValueCard icon="ph-users-three" title="Partnership Over Transactionalism" desc="We invest in understanding your business deeply and become an extension of your team — not just a vendor you invoice monthly." />
            <ValueCard icon="ph-flask" secondary={true} title="Continuous Improvement" desc="We test constantly, learn from data, and apply those learnings to your campaigns. Stagnation is our enemy; iteration is our default." />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-users" text="Meet the Team" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">The Five Minds Behind Your Growth</h2>
            <p class="text-text-secondary mt-4 max-w-2xl mx-auto">
              We're not a generic agency with rotating account managers. We're five seasoned experts who have each spent years mastering their craft — now working together with one shared mission: to grow your brand.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
            <ExpertCard icon="ph-chart-line-up" role="Performance Marketing" desc="Paid ads specialist — Google, Meta, and programmatic campaigns engineered for maximum ROAS." />
            <ExpertCard icon="ph-heart" secondary={true} role="Social Media Strategy" desc="Platform-native content strategist who turns followers into loyal communities and paying customers." />
            <ExpertCard icon="ph-pencil-line" role="Copywriting & Brand Voice" desc="Sharp, conversion-focused writer who makes every word earn its place and every headline land." />
            <ExpertCard icon="ph-desktop" secondary={true} role="Web & Digital Design" desc="UI/UX designer and developer building landing pages and websites that convert traffic into revenue." />
            <ExpertCard icon="ph-chart-bar" role="Analytics & Insights" desc="Data analyst who translates campaign numbers into clear decisions and continuous growth signals." />
          </div>

          {/* Unification message */}
          <div class="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-3xl p-10 text-center">
            <i class="ph-fill ph-lightning text-4xl text-secondary mb-4 block" />
            <h3 class="font-heading text-2xl font-bold text-surface-dark0 mb-3">
              Individually skilled. Collectively unstoppable.
            </h3>
            <p class="text-text-secondary leading-relaxed max-w-2xl mx-auto">
              What makes Bell Bee Media different isn't just that we have specialists — it's that those specialists have spent years learning to collaborate across disciplines. Your strategy, creative, distribution, and analytics aren't siloed workstreams. They're one integrated engine, built to compound your results every single month.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-24 bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120]">
        <div class="container mx-auto px-4 max-w-3xl text-center">
          <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work With Our Expert Team?</h2>
          <p class="text-xl text-white/80 mb-10">Book a free strategy call and let's talk about your goals, your challenges, and exactly how our five-specialist team can accelerate your growth.</p>
          <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-bold text-lg rounded-full hover:bg-surface-1 transition-colors shadow-2xl">
            Get Your Free Proposal <i class="ph ph-arrow-right" />
          </a>
        </div>
      </section>
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

function ValueCard() {
  return ({ icon, secondary, title, desc }: { icon: string; secondary?: boolean; title: string; desc: string }) => (
    <div class="flex gap-6 p-8 rounded-3xl border border-surface-2 bg-surface-1 hover:shadow-xl transition-shadow group">
      <div class={`w-14 h-14 rounded-2xl ${secondary ? 'bg-secondary/5 text-secondary' : 'bg-primary/5 text-primary'} flex items-center justify-center shrink-0 text-2xl group-hover:scale-110 transition-transform`}>
        <i class={`ph-fill ${icon}`} />
      </div>
      <div>
        <h3 class="font-bold text-xl text-surface-dark0 mb-3">{title}</h3>
        <p class="text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function ExpertCard() {
  return ({ icon, secondary, role, desc }: { icon: string; secondary?: boolean; role: string; desc: string }) => (
    <div class="p-6 rounded-3xl bg-white border border-surface-2 text-center flex flex-col items-center gap-4 hover:shadow-xl hover:border-primary/20 transition-all group">
      <div class={`w-16 h-16 rounded-2xl ${secondary ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
        <i class={`ph-fill ${icon}`} />
      </div>
      <h3 class="font-bold text-surface-dark0 text-sm leading-snug">{role}</h3>
      <p class="text-xs text-text-secondary leading-relaxed">{desc}</p>
    </div>
  )
}

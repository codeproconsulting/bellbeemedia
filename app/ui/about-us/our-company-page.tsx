import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function OurCompanyPage() {
  return () => (
    <Layout
      title="About Bell Bee Media — Our Story, Team & Values"
      description="Learn about Bell Bee Media — a results-driven digital marketing agency. Discover our founding story, our expert team, and the values that drive everything we do."
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
                A Digital Marketing Agency Built for Bold Brands
              </h1>
              <p class="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Bell Bee Media was founded with a single conviction: brands that tell the right stories to the right audiences grow faster, retain customers longer, and outcompete on value instead of price.
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
          <StatBox value="7+" label="Years in Business" />
          <StatBox value="60+" label="Active Clients" />
          <StatBox value="25+" label="Team Members" />
          <StatBox value="15+" label="Countries Served" />
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
              <h2 class="font-heading text-4xl font-bold text-surface-dark0 mb-6">From Small Agency to Full-Service Growth Partner</h2>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                Bell Bee Media started as a social media consultancy for independent brands in need of a voice online. We saw firsthand how businesses with genuinely great products were being outmarketed by inferior competitors with bigger budgets and louder channels.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                We built Bell Bee Media to level that playing field. Over seven years, we've grown into a full-service digital marketing agency — adding performance advertising, SEO, Digital PR, web development, and production to our arsenal.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed">
                Today, we work with 60+ brands across 15 countries, from ambitious startups to established multi-million pound businesses. What hasn't changed is our founding commitment: every campaign we run is designed to deliver real, measurable growth.
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

      {/* Team Teaser */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-users" text="Our Team" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">The Experts Behind Your Growth</h2>
            <p class="text-text-secondary mt-4 max-w-2xl mx-auto">Our team of 25+ specialists brings expertise across social media, paid advertising, SEO, content, design, development, and production.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamDepartment icon="ph-megaphone" dept="Strategy & Account Management" size={8} />
            <TeamDepartment icon="ph-palette" secondary={true} dept="Creative & Production" size={9} />
            <TeamDepartment icon="ph-chart-bar" dept="Performance & Analytics" size={6} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-24 bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120]">
        <div class="container mx-auto px-4 max-w-3xl text-center">
          <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Join 60+ Brands Growing With Bell Bee</h2>
          <p class="text-xl text-white/80 mb-10">Get in touch and let's talk about your goals, challenges, and how our team can help you achieve them.</p>
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

function TeamDepartment() {
  return ({ icon, secondary, dept, size }: { icon: string; secondary?: boolean; dept: string; size: number }) => (
    <div class="p-8 rounded-3xl bg-surface-1 border border-surface-2 text-center flex flex-col items-center gap-4">
      <div class={`w-16 h-16 rounded-2xl ${secondary ? 'bg-secondary text-white shadow-secondary/15' : 'bg-primary text-white shadow-primary/15'} flex items-center justify-center text-3xl shadow-lg`}>
        <i class={`ph-fill ${icon}`} />
      </div>
      <h3 class="font-bold text-surface-dark0">{dept}</h3>
      <div class={`font-heading text-4xl font-bold ${secondary ? 'text-secondary' : 'text-primary'}`}>{size}</div>
      <div class="text-sm text-text-secondary">specialists</div>
    </div>
  )
}

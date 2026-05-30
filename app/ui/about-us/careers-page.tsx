import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function CareersPage() {
  return () => (
    <Layout
      title="Careers at Bell Bee Media — Join Our Digital Marketing Team"
      description="Join Bell Bee Media's remote-first team of digital marketing experts. Explore open roles in social media, performance marketing, content, design, and web development."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-indigo-900 via-indigo-700 to-primary pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_60%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-rocket text-white" /> Join Our Team
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Build Your Career at the Most Exciting Agency You Haven't Heard Of. Yet.
              </h1>
              <p class="text-xl text-indigo-100 leading-relaxed mb-8 max-w-xl">
                We're a team of 25+ remote-first digital marketing specialists who love what we do. If you're ambitious, data-obsessed, and creatively driven, you'll fit right in.
              </p>
              <a href="mailto:careers@bellbeemedia.com" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-xl">
                View Open Roles <i class="ph ph-arrow-right" />
              </a>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-rocket text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Bell Bee */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-heart" text="Life at Bell Bee" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">What It's Like Working Here</h2>
            <p class="text-text-secondary mt-4 max-w-2xl mx-auto">We've built a culture where great work gets recognised, growth is continuous, and the people around you make you better.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CultureCard icon="ph-laptop" color="indigo" title="Remote-First Forever" desc="Work from anywhere in the world. We care about the quality of your work, not the postcode you live in." />
            <CultureCard icon="ph-trend-up" color="blue" title="Grow Fast, Learn Faster" desc="Weekly knowledge-sharing sessions, conference budgets, and a library of courses to keep your skills sharp." />
            <CultureCard icon="ph-currency-pound" color="emerald" title="Competitive Compensation" desc="Market-rate salaries, performance bonuses, and equity options for senior team members who grow with us." />
            <CultureCard icon="ph-calendar-blank" color="orange" title="Flexible Hours" desc="We operate async-first. As long as you're hitting your goals, your schedule is yours to manage." />
            <CultureCard icon="ph-users-three" color="purple" title="Collaborative Culture" desc="Ego-free collaboration across disciplines. The best idea wins — regardless of seniority or role." />
            <CultureCard icon="ph-shield-check" color="red" title="Wellbeing Matters" desc="Mental health days, generous holiday allowance, and a team that respects your boundaries." />
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-briefcase" text="Open Roles" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Current Openings</h2>
            <p class="text-text-secondary mt-4">Don't see your perfect role? We always want to hear from exceptional people.</p>
          </div>
          <div class="flex flex-col gap-6">
            <RoleCard title="Senior Social Media Strategist" dept="Social Media" location="Remote" type="Full-Time" />
            <RoleCard title="Performance Marketing Manager" dept="Paid Advertising" location="Remote" type="Full-Time" />
            <RoleCard title="SEO Content Writer" dept="Content & SEO" location="Remote" type="Full-Time / Part-Time" />
            <RoleCard title="Brand & UI Designer" dept="Creative" location="Remote" type="Full-Time" />
            <RoleCard title="Video Editor & Motion Designer" dept="Production" location="Remote" type="Full-Time" />
            <RoleCard title="Account Manager" dept="Client Services" location="Remote" type="Full-Time" />
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-star" text="Who We Hire" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">The Traits We Look For</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TraitCard icon="ph-lightbulb" title="Curious" desc="You ask why before you ask how." />
            <TraitCard icon="ph-chart-line-up" title="Data-Led" desc="You believe in evidence over instinct." />
            <TraitCard icon="ph-users" title="Collaborative" desc="You make others better by being in the room." />
            <TraitCard icon="ph-rocket-launch" title="Action-Oriented" desc="You ship, iterate, and improve — fast." />
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section class="py-24 bg-gradient-to-br from-indigo-50 to-primary/5">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-path" text="How We Hire" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Our Hiring Process</h2>
            <p class="text-text-secondary mt-4">We keep it transparent, fast, and fair. No excessive rounds, no ghosting.</p>
          </div>
          <div class="flex flex-col gap-8">
            <HiringStep num={1} title="Application" desc="Submit your CV, portfolio, and a short note about why Bell Bee Media resonates with you. No cover letter essays required." />
            <HiringStep num={2} title="Initial Chat" desc="A 30-minute video call with our People team to learn about you and share more about the role, culture, and expectations." />
            <HiringStep num={3} title="Skills Challenge" desc="A practical, paid challenge relevant to your role. We value your time and expertise — it's always compensated." />
            <HiringStep num={4} title="Team Interview" desc="Meet the people you'd work with directly. A collaborative conversation, not an interrogation." />
            <HiringStep num={5} title="Offer" desc="Fast decisions. If we love you, you'll know within 48 hours of your final interview." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-24 bg-gradient-to-br from-indigo-900 via-indigo-700 to-primary">
        <div class="container mx-auto px-4 max-w-3xl text-center">
          <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Ready to Grow Your Career With Us?</h2>
          <p class="text-xl text-indigo-100 mb-10">Browse our open roles or introduce yourself — we'd love to know who you are.</p>
          <a href="mailto:careers@bellbeemedia.com" class="inline-flex items-center gap-2 px-10 py-5 bg-white text-indigo-900 font-bold text-lg rounded-full hover:bg-indigo-50 transition-colors shadow-2xl">
            Email Your Application <i class="ph ph-envelope" />
          </a>
        </div>
      </section>
    </Layout>
  )
}

function CultureCard() {
  return ({ icon, color, title, desc }: { icon: string; color: string; title: string; desc: string }) => (
    <div class="flex flex-col p-8 rounded-3xl border border-surface-2 bg-surface-1 hover:shadow-xl transition-shadow group">
      <div class={`w-14 h-14 rounded-2xl bg-${color}-50 text-${color}-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
        <i class={`ph-fill ${icon}`} />
      </div>
      <h3 class="font-bold text-xl text-surface-dark0 mb-3">{title}</h3>
      <p class="text-text-secondary leading-relaxed text-sm">{desc}</p>
    </div>
  )
}

function RoleCard() {
  return ({ title, dept, location, type }: { title: string; dept: string; location: string; type: string }) => (
    <div class="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-surface-2 bg-white hover:border-primary/30 hover:shadow-lg transition-all group">
      <div>
        <h3 class="font-bold text-lg text-surface-dark0 group-hover:text-primary transition-colors mb-1">{title}</h3>
        <div class="flex flex-wrap gap-2 mt-2">
          <span class="text-xs bg-surface-1 border border-surface-2 text-text-secondary px-3 py-1 rounded-full">{dept}</span>
          <span class="text-xs bg-surface-1 border border-surface-2 text-text-secondary px-3 py-1 rounded-full"><i class="ph ph-map-pin mr-1" />{location}</span>
          <span class="text-xs bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{type}</span>
        </div>
      </div>
      <a href="mailto:careers@bellbeemedia.com" class="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-medium rounded-full hover:bg-primary-light transition-colors text-sm shrink-0">
        Apply <i class="ph ph-arrow-right" />
      </a>
    </div>
  )
}

function TraitCard() {
  return ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
    <div class="flex flex-col items-center text-center p-6 rounded-3xl bg-surface-1 border border-surface-2 hover:shadow-lg transition-shadow">
      <div class="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl mb-4">
        <i class={`ph-fill ${icon}`} />
      </div>
      <h3 class="font-bold text-surface-dark0 mb-2">{title}</h3>
      <p class="text-sm text-text-secondary leading-relaxed">{desc}</p>
    </div>
  )
}

function HiringStep() {
  return ({ num, title, desc }: { num: number; title: string; desc: string }) => (
    <div class="flex gap-6 items-start">
      <div class="w-12 h-12 rounded-full bg-indigo-600 text-white font-heading font-bold text-lg flex items-center justify-center shrink-0 shadow-md shadow-indigo-200">
        {num}
      </div>
      <div class="pt-2">
        <h3 class="font-bold text-xl text-surface-dark0 mb-2">{title}</h3>
        <p class="text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

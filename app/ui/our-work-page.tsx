import { Layout } from './layout.tsx'
import { PillBadge } from './shared.tsx'

interface Project {
  title: string
  client: string
  category: string
  metric: string
  metricLabel: string
  desc: string
  gradient: string
  icon: string
}

const projects: Project[] = [
  {
    title: "Global E-Commerce Expansion",
    client: "StyleStore International",
    category: "Performance Marketing",
    metric: "+340%",
    metricLabel: "Conversion Rate Increase",
    desc: "Scale-up search and social advertising across 14 countries, driving massive sales growth.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: "ph-shopping-cart"
  },
  {
    title: "Search Traffic Scale-Up",
    client: "Fintech Leaders Inc.",
    category: "Digital Marketing",
    metric: "1.2M",
    metricLabel: "Monthly Organic Visitors",
    desc: "Bespoke content strategy and technical SEO audit that positioned the client at position #1 for critical keywords.",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    icon: "ph-chart-line-up"
  },
  {
    title: "Viral Brand Re-launch",
    client: "Aura Skincare",
    category: "Branding & Social",
    metric: "4.8M",
    metricLabel: "Video Impressions",
    desc: "A complete visual identity overhaul combined with a strategic micro-influencer product launch campaign.",
    gradient: "from-rose-400 via-fuchsia-500 to-purple-600",
    icon: "ph-sparkles"
  },
  {
    title: "High-Performance SaaS Web Design",
    client: "TaskFlow Platform",
    category: "Web Solutions",
    metric: "45%",
    metricLabel: "Bounce Rate Reduction",
    desc: "Stunning, interactive landing page design and speed optimization using modern web frameworks for maximum lead gen.",
    gradient: "from-teal-400 via-emerald-500 to-green-600",
    icon: "ph-desktop"
  },
  {
    title: "Email Funnel Automation",
    client: "Wellness Club",
    category: "Performance Marketing",
    metric: "5.2x",
    metricLabel: "Email ROI Generated",
    desc: "Engineered automated customer journeys that personalized wellness offers based on user survey responses.",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    icon: "ph-envelope"
  },
  {
    title: "B2B Lead Generation Engine",
    client: "Nexus Logistics",
    category: "Digital Marketing",
    metric: "+210%",
    metricLabel: "Qualified Leads MoM",
    desc: "Targeted LinkedIn advertising campaigns combined with custom conversion rate optimized (CRO) landing pages.",
    gradient: "from-violet-600 via-indigo-600 to-blue-700",
    icon: "ph-users"
  }
]

export function OurWorkPage() {
  return () => (
    <Layout
      title="Our Portfolio & Client Case Studies | Bell Bee Media"
      description="Browse the marketing campaigns, ad creative production, and conversion websites we built for D2C brands. Real numbers, verified scaling results."
    >
      <div class="bg-surface-1 min-h-screen pt-20 pb-24">
        <div class="container mx-auto px-4">
          {/* Header */}
          <div class="text-center max-w-3xl mx-auto mb-20">
            <div class="flex justify-center mb-6">
              <PillBadge icon="ph-folder-open" text="Our Case Studies" />
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-surface-dark0 mb-8 tracking-tight">
              Real Work. <span class="text-primary">Real Growth.</span>
            </h1>
            <p class="text-xl text-text-secondary leading-relaxed">
              We focus on delivering measurable commercial success. Discover how we help brands scale with targeted digital marketing, high-converting design, and advanced engineering.
            </p>
          </div>

          {/* Project Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div class="flex flex-col h-full bg-white rounded-3xl border border-surface-2 overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                {/* Visual Header */}
                <div class={`h-56 bg-gradient-to-tr ${project.gradient} p-8 flex flex-col justify-between relative overflow-hidden text-white`}>
                  {/* Decorative Glow */}
                  <div class="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0,transparent_100%)] top-0 left-0"></div>
                  
                  <div class="flex justify-between items-start relative z-10">
                    <span class="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-xl">
                      <i class={`ph ${project.icon}`}></i>
                    </div>
                  </div>

                  <div class="relative z-10">
                    <span class="text-xs text-white/80 uppercase font-semibold tracking-wider block mb-1">
                      {project.client}
                    </span>
                    <h3 class="text-2xl font-extrabold leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body / Stats */}
                <div class="p-8 flex-grow flex flex-col justify-between">
                  <p class="text-text-secondary leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div class="pt-6 border-t border-surface-2 flex items-center gap-4">
                    <div class="text-3xl font-black text-secondary tracking-tight">
                      {project.metric}
                    </div>
                    <div>
                      <div class="text-xs font-bold text-surface-dark0 uppercase tracking-wide">
                        {project.metricLabel}
                      </div>
                      <div class="text-xs text-text-secondary">
                        Client campaign success
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div id="results" class="mt-24 text-center bg-white p-12 md:p-20 rounded-[3rem] border border-surface-2 shadow-sm max-w-4xl mx-auto relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
            <div class="relative z-10">
              <h2 class="text-3xl md:text-4xl font-bold text-surface-dark0 mb-6">
                Want to see similar results for your business?
              </h2>
              <p class="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Schedule a consultation call with our team. We'll analyze your current marketing channels and deliver a customized strategy proposal.
              </p>
              <a href="/get-proposal" class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-light transition-all shadow-lg shadow-primary/20">
                Get Your Proposal <i class="ph-bold ph-caret-right bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

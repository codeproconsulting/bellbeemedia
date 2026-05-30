import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function WebSolutionsPage() {
  return () => (
    <Layout
      title="Web Design & Development Services | Bell Bee Media"
      description="Get a fast, conversion-focused website built by Bell Bee Media. We design and develop custom responsive websites, landing pages, and e-commerce solutions that rank and convert."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-blue-900 via-blue-700 to-primary pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_70%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-desktop text-white" /> Web Solutions
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Websites Engineered for Speed, SEO & Conversions
              </h1>
              <p class="text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
                We build custom websites that don't just look great — they load in under 2 seconds, rank on Google, and convert visitors into paying customers.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-xl">
                  Get a Free Site Audit <i class="ph ph-arrow-right" />
                </a>
                <a href={routes.services.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                  All Services
                </a>
              </div>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-desktop text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section class="bg-white border-b border-surface-2 py-12">
        <div class="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value="<2s" label="Average Load Time" />
          <StatBox value="95+" label="Average Lighthouse Score" />
          <StatBox value="300%" label="Avg. Conversion Lift" />
          <StatBox value="80+" label="Sites Launched" />
        </div>
      </section>

      {/* Overview */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div class="flex mb-4"><PillBadge icon="ph-code" text="What We Build" /></div>
              <h2 class="font-heading text-4xl font-bold text-surface-dark0 mb-6">Custom Web Design & Development That Grows Your Business</h2>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                Your website is your highest-performing salesperson — available 24/7. We design and develop bespoke digital experiences that balance stunning aesthetics with technical excellence.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                We build with a mobile-first philosophy and engineering standards that prioritise Core Web Vitals, accessibility, and SEO from day one — not as an afterthought.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed">
                Whether you need a high-converting landing page, a full e-commerce platform, or a complete brand website, we scope, design, and deliver on time and on budget.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <ServiceFeatureCard icon="ph-layout" color="blue" title="Custom Web Design" desc="Bespoke, brand-consistent layouts designed in Figma and built pixel-perfect." />
              <ServiceFeatureCard icon="ph-shopping-cart" color="emerald" title="E-Commerce" desc="Shopify, WooCommerce, and custom storefronts built for high AOV and low cart abandonment." />
              <ServiceFeatureCard icon="ph-funnel" color="orange" title="Landing Pages" desc="High-converting campaign pages optimised for PPC and lead generation." />
              <ServiceFeatureCard icon="ph-magnifying-glass" color="purple" title="Technical SEO" desc="On-page SEO, schema markup, Core Web Vitals, and crawlability baked into every build." />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-star" text="Why Choose Us" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Built for Performance, Not Just Looks</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard icon="ph-rocket-launch" color="blue" title="Blazing Fast" desc="Sub-2-second load times via optimised code, modern hosting, and CDN delivery — core to SEO and UX." />
            <BenefitCard icon="ph-device-mobile" color="purple" title="Mobile-First" desc="Every site is designed for mobile first, then enhanced for desktop. Fully responsive across all devices." />
            <BenefitCard icon="ph-magnifying-glass" color="orange" title="SEO-Ready from Launch" desc="Clean semantic HTML, schema markup, meta tags, sitemaps, and robots.txt configured on day one." />
            <BenefitCard icon="ph-lock" color="emerald" title="Secure & Reliable" desc="SSL certificates, regular security updates, automated backups, and 99.9% uptime hosting solutions." />
            <BenefitCard icon="ph-pencil" color="red" title="Easy to Update" desc="CMS integration (WordPress, Sanity, or custom) so your team can manage content without a developer." />
            <BenefitCard icon="ph-handshake" color="indigo" title="Post-Launch Support" desc="We offer ongoing maintenance plans so your site stays fast, secure, and up to date after launch." />
          </div>
        </div>
      </section>

      {/* Process */}
      <section class="py-24 bg-gradient-to-br from-blue-50 to-primary/5">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-path" text="Our Process" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Our Web Development Process</h2>
          </div>
          <div class="flex flex-col gap-8">
            <ProcessStep num={1} title="Discovery & Scoping" desc="We audit your current digital presence, understand your goals and users, and define a clear project scope and timeline." />
            <ProcessStep num={2} title="UX & Wireframing" desc="We map out the sitemap and user journeys, then create detailed wireframes that prioritise conversion architecture." />
            <ProcessStep num={3} title="Visual Design" desc="Our designers craft high-fidelity mockups in Figma, incorporating your brand identity, typography, and colour system." />
            <ProcessStep num={4} title="Development & QA" desc="Clean, semantic code is written and rigorously tested across browsers and devices before anything goes live." />
            <ProcessStep num={5} title="Launch & Optimisation" desc="We handle deployment, configure analytics, and conduct post-launch performance monitoring and CRO recommendations." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-3xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-question" text="FAQs" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Web Solutions — FAQs</h2>
          </div>
          <div class="flex flex-col gap-6">
            <FaqItem q="How long does it take to build a website?" a="A typical brochure website takes 4–6 weeks from kick-off to launch. Complex e-commerce or custom web applications can take 8–16 weeks depending on scope." />
            <FaqItem q="Do you build on WordPress, Shopify, or custom frameworks?" a="We work with all major platforms — WordPress, Shopify, Webflow, and fully custom frameworks. We recommend the right technology based on your goals, budget, and team's technical capability." />
            <FaqItem q="Will my website rank on Google?" a="SEO best practices are built into every site we develop — proper heading structure, meta tags, schema markup, fast load times, and mobile optimisation. Ongoing SEO content work is a separate service we can layer on." />
            <FaqItem q="Do you provide hosting?" a="Yes. We can recommend and set up managed hosting on premium providers like Vercel, Cloudflare, WP Engine, or AWS, or we can work with your existing hosting infrastructure." />
            <FaqItem q="What happens after the website launches?" a="We offer flexible maintenance retainers covering software updates, security patches, content changes, performance monitoring, and ongoing CRO testing. We don't launch and disappear." />
          </div>
        </div>
      </section>

      <CtaSection headline="Ready for a Website That Actually Works?" sub="Get a free website audit and find out what's holding your current site back from ranking and converting." />
    </Layout>
  )
}

function StatBox() {
  return ({ value, label }: { value: string; label: string }) => (
    <div class="flex flex-col items-center">
      <span class="font-heading text-4xl font-bold text-blue-600 mb-1">{value}</span>
      <span class="text-text-secondary text-sm">{label}</span>
    </div>
  )
}

function ServiceFeatureCard() {
  return ({ icon, color, title, desc }: { icon: string; color: string; title: string; desc: string }) => (
    <div class={`p-5 rounded-2xl border border-surface-2 bg-${color}-50 hover:shadow-lg transition-shadow`}>
      <i class={`ph-fill ${icon} text-${color}-600 text-2xl mb-3 block`} />
      <h3 class="font-bold text-surface-dark0 mb-2">{title}</h3>
      <p class="text-sm text-text-secondary leading-relaxed">{desc}</p>
    </div>
  )
}

function BenefitCard() {
  return ({ icon, color, title, desc }: { icon: string; color: string; title: string; desc: string }) => (
    <div class="flex gap-5 p-6 rounded-2xl border border-surface-2 bg-surface-1 hover:shadow-lg transition-shadow group">
      <div class={`w-12 h-12 rounded-xl bg-${color}-50 text-${color}-600 flex items-center justify-center shrink-0 text-2xl group-hover:scale-110 transition-transform`}>
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
      <div class="w-12 h-12 rounded-full bg-blue-600 text-white font-heading font-bold text-lg flex items-center justify-center shrink-0 shadow-md shadow-blue-200">
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
    <section class="py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-primary">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">{headline}</h2>
        <p class="text-xl text-blue-100 mb-10">{sub}</p>
        <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-900 font-bold text-lg rounded-full hover:bg-blue-50 transition-colors shadow-2xl">
          Get Your Free Proposal <i class="ph ph-arrow-right" />
        </a>
      </div>
    </section>
  )
}

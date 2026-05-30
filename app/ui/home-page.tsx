import { type RemixNode } from 'remix/ui'
import { routes } from '../routes.ts'
import { Layout } from './layout.tsx'
import { PillBadge, ServicesGrid, TestimonialsSection, ProcessSection } from './shared.tsx'

export function HomePage() {
  return () => (
    <Layout title="Bell Bee Media | Next-Gen Digital Marketing Agency">
      {/* Hero Section */}
      <section class="relative bg-white pt-28 pb-20 overflow-hidden">
        {/* Soft glowing mesh background blobs (extremely lightweight CSS gradients, no images) */}
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div class="absolute top-[20%] left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Copy Column */}
            <div class="lg:col-span-7 flex flex-col items-start text-left">
              <div class="mb-6">
                <PillBadge icon="ph-sparkle" text="Bell Bee Media Agency" />
              </div>
              <h1 class="text-4xl md:text-6xl font-black text-surface-dark0 tracking-tight leading-[1.1] mb-6">
                We Scale Brands <br/>
                Through <span class="text-gradient font-black">Data-Led Marketing</span>
              </h1>
              <p class="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
                Gain deeper social insights, unlock exponential growth, optimize campaigns, and connect with your audience like never before.
              </p>
              <div class="flex flex-wrap gap-4 w-full sm:w-auto">
                <a href={routes.getProposal.href()} class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
                  Get a Free Strategy Session <i class="ph ph-arrow-right"></i>
                </a>
                <a href={routes.services.href()} class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-surface-3 text-surface-dark1 rounded-full font-semibold hover:bg-surface-1 transition-all">
                  Our Services
                </a>
              </div>
            </div>

            {/* Right Graphic/Mockup Column (GPU Accelerated CSS Mockup) */}
            <div class="lg:col-span-5 relative w-full h-[400px] md:h-[450px] flex items-center justify-center">
              {/* Inner ambient glow behind the mockup */}
              <div class="absolute w-[300px] h-[300px] rounded-full bg-secondary/15 blur-[60px] pointer-events-none"></div>

              {/* Main dashboard visual frame */}
              <div class="w-full max-w-[360px] md:max-w-[400px] bg-surface-dark0 rounded-3xl border border-surface-dark2 p-6 shadow-2xl relative z-10 flex flex-col gap-6">
                {/* Header bar */}
                <div class="flex justify-between items-center pb-4 border-b border-surface-dark2/60">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                  </div>
                  <div class="text-[10px] text-text-secondary font-mono tracking-wider">LIVE ANALYTICS</div>
                </div>

                {/* Dashboard Stats */}
                <div class="flex justify-between items-end h-24 gap-3 bg-surface-dark1 p-4 rounded-xl border border-surface-dark2/40">
                  <div class="w-full bg-primary/20 rounded-md h-[40%]"></div>
                  <div class="w-full bg-primary/40 rounded-md h-[65%]"></div>
                  <div class="w-full bg-primary/60 rounded-md h-[85%]"></div>
                  <div class="w-full bg-primary rounded-md h-full"></div>
                  <div class="w-full bg-primary/80 rounded-md h-[70%]"></div>
                </div>

                {/* List items */}
                <div class="flex flex-col gap-2">
                  <div class="h-3 w-full bg-surface-dark2 rounded"></div>
                  <div class="h-3 w-5/6 bg-surface-dark2 rounded"></div>
                  <div class="h-3 w-2/3 bg-surface-dark2 rounded"></div>
                </div>
              </div>

              {/* Floating Widget 1: Active ROI */}
              <div class="absolute -top-4 -left-4 w-48 bg-white p-4 rounded-2xl shadow-xl border border-surface-2 z-20 animate-float-slow">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-lg"><i class="ph-fill ph-trend-up"></i></div>
                  <div>
                    <div class="text-xs font-bold text-surface-dark0">ROI Analytics</div>
                    <div class="text-[10px] text-text-secondary">India Region</div>
                  </div>
                </div>
                <div class="text-lg font-black text-surface-dark0">+342.8%</div>
              </div>

              {/* Floating Widget 2: Engagement */}
              <div class="absolute -bottom-4 -right-4 w-52 bg-white p-4 rounded-2xl shadow-xl border border-surface-2 z-20 animate-float-medium">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center text-lg"><i class="ph-fill ph-lightning"></i></div>
                  <div>
                    <div class="text-xs font-bold text-surface-dark0">Campaign Reach</div>
                    <div class="text-[10px] text-text-secondary">Real-Time</div>
                  </div>
                </div>
                {/* Mini sparks/lines */}
                <div class="flex gap-1 h-8 items-end">
                  <span class="w-full bg-secondary/30 rounded-sm h-[30%]"></span>
                  <span class="w-full bg-secondary/50 rounded-sm h-[60%]"></span>
                  <span class="w-full bg-secondary rounded-sm h-[90%]"></span>
                  <span class="w-full bg-secondary/70 rounded-sm h-[40%]"></span>
                  <span class="w-full bg-secondary/80 rounded-sm h-[75%]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Ticker Section */}
      <section class="py-12 bg-white border-y border-surface-2 overflow-hidden w-full">
        <div class="container mx-auto px-4 text-center mb-6">
          <p class="text-xs text-text-secondary uppercase tracking-widest font-bold">Trusted by leading brands worldwide</p>
        </div>
        <div class="relative flex overflow-hidden w-full select-none">
          <div class="animate-marquee flex gap-20 items-center whitespace-nowrap text-surface-dark2/40 text-xl font-bold">
            {/* Set 1 */}
            <div class="flex items-center gap-2"><i class="ph-bold ph-sketch-logo text-2xl text-primary"></i> Rise Co</div>
            <div class="flex items-center gap-2"><i class="ph-bold ph-figma-logo text-2xl text-secondary"></i> Vertigo</div>
            <div class="flex items-center gap-2"><i class="ph-bold ph-framer-logo text-2xl text-indigo-600"></i> Minty</div>
            <div class="flex items-center gap-2"><i class="ph-bold ph-github-logo text-2xl text-surface-dark0"></i> Glossy</div>
            <div class="flex items-center gap-2"><i class="ph-bold ph-dribbble-logo text-2xl text-pink-600"></i> Waveless</div>
            <div class="flex items-center gap-2"><i class="ph-bold ph-slack-logo text-2xl text-emerald-600"></i> NextLevel</div>
            {/* Duplicate Set 2 for seamless loop */}
            <div class="flex items-center gap-2"><i class="ph-bold ph-sketch-logo text-2xl text-primary"></i> Rise Co</div>
            <div class="flex items-center gap-2"><i class="ph-bold ph-figma-logo text-2xl text-secondary"></i> Vertigo</div>
            <div class="flex items-center gap-2"><i class="ph-bold ph-framer-logo text-2xl text-indigo-600"></i> Minty</div>
            <div class="flex items-center gap-2"><i class="ph-bold ph-github-logo text-2xl text-surface-dark0"></i> Glossy</div>
            <div class="flex items-center gap-2"><i class="ph-bold ph-dribbble-logo text-2xl text-pink-600"></i> Waveless</div>
            <div class="flex items-center gap-2"><i class="ph-bold ph-slack-logo text-2xl text-emerald-600"></i> NextLevel</div>
          </div>
        </div>
      </section>

      {/* Services Section with Illustrative Cards */}
      <section class="py-24 bg-gradient-to-b from-white to-surface-1 border-b border-surface-2 relative overflow-hidden">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="flex justify-center mb-4">
              <PillBadge icon="ph-squares-four" text="Our Services" />
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-4 tracking-tight">Empowering digital <span class="text-gradient">growth</span></h2>
            <p class="text-lg text-text-secondary">Comprehensive digital solutions designed to grow your business, build communities, and dominate your niche.</p>
          </div>

          <ServicesGrid />
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Premium CTA Section */}
      <section class="py-24 bg-white relative overflow-hidden">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="bg-gradient-to-br from-primary via-primary-dark0 to-surface-dark1 p-10 md:p-20 rounded-[40px] text-white overflow-hidden relative border border-primary/20 shadow-2xl">
            {/* Decorative background glows */}
            <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary/30 blur-[80px] pointer-events-none"></div>
            <div class="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary-light/20 blur-[80px] pointer-events-none"></div>

            <div class="relative z-10 text-center max-w-3xl mx-auto">
              <h2 class="text-3xl md:text-5xl font-black mb-6 leading-tight">Ready to unleash your brand's digital potential?</h2>
              <p class="text-lg text-indigo-100/80 mb-10 leading-relaxed max-w-xl mx-auto">
                Get in touch with our marketing and web experts today to blueprint a customized scaling roadmap.
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-secondary-light transition-all shadow-xl shadow-secondary/30 hover:scale-[1.02] active:scale-[0.98]">
                  Get Your Proposal <i class="ph ph-arrow-right"></i>
                </a>
                <a href={routes.aboutUs.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                  Learn About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

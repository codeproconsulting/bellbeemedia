import { type RemixNode } from 'remix/ui'
import { routes } from '../routes.ts'
import { Layout } from './layout.tsx'
import { PillBadge, ServicesGrid } from './shared.tsx'

export function HomePage() {
  return () => (
    <Layout title="Bell Bee Media | Digital Marketing Agency">
      {/* Hero Section */}
      <section class="relative bg-white pt-24 pb-16 overflow-hidden">
        <div class="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <div class="flex justify-center mb-6">
            <PillBadge icon="ph-sparkle" text="Welcome To Bell Bee Media" />
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-surface-dark0 mb-6 tracking-tight">
            Digital Marketing <span class="text-primary">Agency</span>
          </h1>
          <p class="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            Gain deeper social insights, unlock growth opportunities, optimize strategies & connect with your audience like never before.
          </p>
          <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-secondary-light transition-all shadow-lg shadow-secondary/30">
            Start Free Trial <i class="ph-bold ph-caret-right bg-white text-secondary rounded-full w-6 h-6 flex items-center justify-center"></i>
          </a>
        </div>
        
        {/* CSS Illustration Hero Image replacement */}
        <div class="relative w-full max-w-5xl mx-auto h-[400px] mt-16 flex justify-center">
          {/* Main "Person/Laptop" substitute - A big main dashboard card */}
          <div class="absolute bottom-0 w-[600px] h-[300px] bg-white rounded-t-3xl shadow-2xl border border-surface-2 overflow-hidden z-10 flex flex-col">
            <div class="h-10 bg-surface-1 border-b border-surface-2 flex items-center px-4 gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div class="p-8 flex-grow flex gap-8">
              <div class="w-1/3 flex flex-col gap-4">
                <div class="h-4 w-3/4 bg-surface-2 rounded"></div>
                <div class="h-4 w-full bg-surface-2 rounded"></div>
                <div class="h-4 w-5/6 bg-surface-2 rounded"></div>
              </div>
              <div class="w-2/3 bg-primary/5 rounded-xl border border-primary/10 flex items-end justify-between p-4 gap-2">
                <div class="w-full bg-primary/40 rounded-t h-1/2"></div>
                <div class="w-full bg-primary/60 rounded-t h-3/4"></div>
                <div class="w-full bg-primary rounded-t h-full"></div>
                <div class="w-full bg-primary/40 rounded-t h-2/3"></div>
                <div class="w-full bg-primary/80 rounded-t h-5/6"></div>
              </div>
            </div>
          </div>
          
          {/* Floating Widget 1 */}
          <div class="absolute top-10 left-10 w-64 bg-white p-4 rounded-2xl shadow-xl border border-surface-2 z-20 animate-bounce" style="animation-duration: 4s;">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl"><i class="ph-fill ph-chart-pie-slice"></i></div>
              <div>
                <div class="text-sm font-bold text-surface-dark0">Insights Overview</div>
                <div class="text-xs text-text-secondary">Weekly Report</div>
              </div>
            </div>
            <div class="flex justify-between text-center">
              <div><div class="text-xs text-text-secondary">POSTS</div><div class="font-bold">230</div></div>
              <div><div class="text-xs text-text-secondary">FOLLOWERS</div><div class="font-bold">2.6k</div></div>
            </div>
          </div>
          
          {/* Floating Widget 2 */}
          <div class="absolute top-20 right-10 w-72 bg-white p-5 rounded-2xl shadow-xl border border-surface-2 z-20 animate-bounce" style="animation-duration: 5s;">
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm font-bold">Post Insight</div>
              <div class="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">Week 1</div>
            </div>
            <div class="flex items-end justify-between gap-2 h-24 mt-4">
               <div class="w-full bg-secondary/40 rounded-t h-1/2"></div>
               <div class="w-full bg-secondary/60 rounded-t h-3/4"></div>
               <div class="w-full bg-secondary rounded-t h-full"></div>
               <div class="w-full bg-secondary/80 rounded-t h-2/3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section class="py-12 bg-white border-t border-surface-2">
        <div class="container mx-auto px-4 text-center">
          <p class="text-text-secondary mb-8">Trusted by world's <span class="text-primary font-medium">leading brand</span></p>
          <div class="flex flex-wrap justify-center items-center gap-12 text-surface-dark2 opacity-60">
            <div class="flex items-center gap-2 text-2xl font-bold"><i class="ph-bold ph-sketch-logo text-3xl"></i> Rise</div>
            <div class="flex items-center gap-2 text-2xl font-bold"><i class="ph-bold ph-figma-logo text-3xl"></i> Vertigo</div>
            <div class="flex items-center gap-2 text-2xl font-bold"><i class="ph-bold ph-framer-logo text-3xl"></i> Minty</div>
            <div class="flex items-center gap-2 text-2xl font-bold"><i class="ph-bold ph-github-logo text-3xl"></i> Glossy</div>
            <div class="flex items-center gap-2 text-2xl font-bold"><i class="ph-bold ph-dribbble-logo text-3xl"></i> Waveless</div>
          </div>
        </div>
      </section>

      {/* Services Section with Illustrative Cards */}
      <section class="py-24 bg-surface-1 border-t border-surface-2">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="flex justify-center mb-4">
              <PillBadge icon="ph-squares-four" text="Our Services" />
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-surface-dark0 mb-4">Empowering social media <span class="text-primary">insights</span></h2>
            <p class="text-lg text-text-secondary">Comprehensive tools and strategies designed to grow your business and dominate your market.</p>
          </div>

          <ServicesGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-white relative overflow-hidden border-t border-surface-2">
         <div class="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-surface-dark0">Ready to <span class="text-primary">unleash</span> your social potential?</h2>
            <p class="text-xl text-text-secondary mb-10">Suspendisse eu quam lacinia, vestibulum massa sit amet, convallis nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <a href={routes.getProposal.href()} class="inline-block px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-light transition-all shadow-xl shadow-primary/30">
              Get Started Today
            </a>
         </div>
      </section>
    </Layout>
  )
}

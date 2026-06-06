import { Layout } from './layout.tsx'
import { PillBadge, ServicesGrid, ProcessSection, TestimonialsSection } from './shared.tsx'

export function ServicesPage() {
  return () => (
    <Layout
      title="Paid Media, Social & Design Services | Bell Bee Media"
      description="Explore Bell Bee Media's growth services: performance marketing (Google & Meta Ads), organic social media management, creative production, and web solutions."
    >
      <div class="relative bg-surface-1 pt-28 pb-24 border-b border-surface-2 overflow-hidden">
        {/* Decorative subtle glows */}
        <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

        <div class="container mx-auto px-4 relative z-10">
          <div class="text-center max-w-3xl mx-auto mb-20">
            <div class="flex justify-center mb-6">
               <PillBadge icon="ph-squares-four" text="What We Do" />
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-surface-dark0 mb-8 tracking-tight">Our <span class="text-gradient">Services</span></h1>
            <p class="text-xl text-text-secondary leading-relaxed">
              We provide end-to-end digital marketing solutions tailored to your unique business goals. 
              Our data-driven approach ensures maximum ROI and sustainable growth.
            </p>
          </div>
          
          <ServicesGrid />
        </div>
      </div>
      
      <ProcessSection />
      
      <TestimonialsSection />
    </Layout>
  )
}

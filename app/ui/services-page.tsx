import { Layout } from './layout.tsx'
import { PillBadge, ServicesGrid, ProcessSection, TestimonialsSection } from './shared.tsx'

export function ServicesPage() {
  return () => (
    <Layout title="Services | Bell Bee Media">
      <div class="relative bg-gradient-to-br from-[#0a1a2e] via-primary to-[#050d18] pt-28 pb-24 border-b border-white/5 overflow-hidden">
        {/* Decorative subtle glows */}
        <div class="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-primary-light/10 blur-3xl pointer-events-none"></div>

        <div class="container mx-auto px-4 relative z-10">
          <div class="text-center max-w-3xl mx-auto mb-20">
            <div class="flex justify-center mb-6">
               <PillBadge icon="ph-squares-four" text="What We Do" dark={true} />
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">Our <span class="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary-light font-black">Services</span></h1>
            <p class="text-xl text-white/70 leading-relaxed">
              We provide end-to-end digital marketing solutions tailored to your unique business goals. 
              Our data-driven approach ensures maximum ROI and sustainable growth.
            </p>
          </div>
          
          <ServicesGrid dark={true} />
        </div>
      </div>
      
      <ProcessSection />
      
      <TestimonialsSection />
    </Layout>
  )
}

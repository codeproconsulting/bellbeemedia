import { Layout } from './layout.tsx'
import { PillBadge, ServicesGrid } from './shared.tsx'

export function ServicesPage() {
  return () => (
    <Layout title="Services | Bell Bee Media">
      <div class="bg-surface-1 min-h-screen pt-20 pb-24">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-20">
            <div class="flex justify-center mb-6">
               <PillBadge icon="ph-squares-four" text="What We Do" />
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-surface-dark0 mb-8 tracking-tight">Our <span class="text-primary">Services</span></h1>
            <p class="text-xl text-text-secondary leading-relaxed">
              We provide end-to-end digital marketing solutions tailored to your unique business goals. 
              Our data-driven approach ensures maximum ROI and sustainable growth.
            </p>
          </div>
          
          <ServicesGrid />
        </div>
      </div>
    </Layout>
  )
}

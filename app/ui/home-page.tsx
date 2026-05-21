import { Layout } from './layout.tsx'

export function HomePage() {
  return () => (
    <Layout title="Bell Bee Media | Digital Marketing Agency">
      {/* Hero Section */}
      <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-surface-dark0 pt-20">
        <div class="absolute inset-0 w-full h-full">
          <div class="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/40 rounded-full blur-[120px]"></div>
          <div class="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/40 rounded-full blur-[120px]"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10 text-center">
          <span class="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
            <i class="ph ph-rocket-launch mr-2"></i> Modern Digital Agency
          </span>
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            We Build <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">
              Digital Experiences
            </span>
          </h1>
          <p class="text-xl text-surface-2 opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Elevate your brand with data-driven marketing, stunning design, and cutting-edge technology that converts.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/services" class="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-light transition-all shadow-xl shadow-primary/30 flex items-center gap-2">
              Our Services <i class="ph ph-arrow-right font-bold"></i>
            </a>
            <a href="/contact" class="px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section class="py-24 bg-white relative">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-primary font-bold tracking-widest uppercase text-sm mb-2">What We Do</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-surface-dark0 mb-4">Solutions that scale.</h3>
            <p class="text-lg text-text-secondary">Comprehensive digital marketing services designed to grow your business and dominate your market.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon="ph-megaphone" 
              title="Social Media Marketing" 
              desc="Engage your audience and build brand loyalty across all major social platforms."
            />
            <ServiceCard 
              icon="ph-magnifying-glass" 
              title="SEO Optimization" 
              desc="Rank higher and drive organic, high-converting traffic to your website."
            />
            <ServiceCard 
              icon="ph-paint-brush-broad" 
              title="Web Design & UI/UX" 
              desc="Beautiful, fast, and responsive websites that turn visitors into customers."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section class="py-24 bg-surface-dark1 text-white relative overflow-hidden">
         <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
         <div class="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to transform your digital presence?</h2>
            <p class="text-xl opacity-80 mb-10">Let's collaborate to build something extraordinary together.</p>
            <a href="/contact" class="inline-block px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg hover:bg-secondary-light transition-all shadow-xl shadow-secondary/30">
              Start Your Project Today
            </a>
         </div>
      </section>
    </Layout>
  )
}

function ServiceCard() {
  return ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
    <div class="p-8 rounded-2xl bg-surface-1 border border-surface-3 hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl group">
      <div class="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        <i class={`ph ${icon}`}></i>
      </div>
      <h4 class="text-2xl font-bold text-surface-dark0 mb-3">{title}</h4>
      <p class="text-text-secondary leading-relaxed">{desc}</p>
    </div>
  )
}

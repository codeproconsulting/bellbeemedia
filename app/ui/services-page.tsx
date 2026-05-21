import { Layout } from './layout.tsx'

export function ServicesPage() {
  return () => (
    <Layout title="Services | Bell Bee Media">
      <div class="bg-surface-1 min-h-screen pt-12 pb-24">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-surface-dark0 mb-6">Our Services</h1>
            <p class="text-lg text-text-secondary">
              We provide end-to-end digital marketing solutions tailored to your unique business goals. 
              Our data-driven approach ensures maximum ROI and sustainable growth.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <DetailedServiceCard 
              icon="ph-megaphone"
              title="Social Media Management"
              desc="We craft compelling content and manage your social presence across platforms like Instagram, Facebook, and LinkedIn. Our strategies are designed to build community, increase engagement, and drive conversions."
            />
            <DetailedServiceCard 
              icon="ph-magnifying-glass"
              title="SEO & Content Marketing"
              desc="Dominate search engine results with our comprehensive SEO strategies. We combine technical optimization with high-quality, targeted content to ensure your brand gets discovered by the right audience."
            />
            <DetailedServiceCard 
              icon="ph-paint-brush-broad"
              title="Web Design & Development"
              desc="Your website is your digital storefront. We design and build fast, responsive, and beautiful websites that provide exceptional user experiences and are optimized for conversions."
            />
            <DetailedServiceCard 
              icon="ph-chart-line-up"
              title="Performance Advertising"
              desc="Maximize your ad spend with our data-driven PPC and social media advertising campaigns. We continuously test and optimize to deliver the lowest cost-per-acquisition possible."
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

function DetailedServiceCard() {
  return ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
    <div class="bg-white p-8 rounded-2xl shadow-sm border border-surface-3 hover:shadow-xl transition-shadow group">
      <div class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
        <i class={`ph ${icon}`}></i>
      </div>
      <h3 class="text-2xl font-bold text-surface-dark0 mb-4">{title}</h3>
      <p class="text-text-secondary leading-relaxed">{desc}</p>
      <div class="mt-8">
        <a href="/contact" class="text-primary font-medium hover:text-primary-light flex items-center gap-2">
          Discuss this service <i class="ph ph-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}

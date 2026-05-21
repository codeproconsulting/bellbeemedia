import { Layout } from './layout.tsx'

export function AboutPage() {
  return () => (
    <Layout title="About Us | Bell Bee Media">
      <div class="bg-white min-h-screen pt-12 pb-24">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-surface-dark0 mb-6">About Bell Bee Media</h1>
            <p class="text-xl text-text-secondary max-w-3xl mx-auto">
              We are a passionate team of digital strategists, designers, and technologists dedicated to helping brands thrive in the digital age.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div class="aspect-square bg-gradient-to-br from-primary-light/20 to-secondary-light/20 rounded-3xl p-8 flex items-center justify-center">
                <img src="/Logo.svg" alt="Bell Bee Media Logo" class="w-2/3 h-auto drop-shadow-2xl" />
              </div>
            </div>
            <div>
              <h2 class="text-3xl font-bold text-surface-dark0 mb-6">Our Mission</h2>
              <p class="text-lg text-text-secondary mb-6 leading-relaxed">
                At Bell Bee Media, our mission is to empower businesses to reach their full potential through innovative digital marketing strategies. We believe in transparency, data-driven decisions, and building long-lasting partnerships with our clients.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed">
                We don't just execute campaigns; we become an extension of your team, deeply understanding your brand and objectives to deliver measurable results that matter.
              </p>
            </div>
          </div>
          
          <div class="text-center">
            <h2 class="text-3xl font-bold text-surface-dark0 mb-12">Why Choose Us?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature icon="ph-target" title="Data-Driven" desc="Every decision we make is backed by hard data and analytics." />
              <Feature icon="ph-lightbulb" title="Creative Excellence" desc="We blend strategy with stunning design and creative storytelling." />
              <Feature icon="ph-handshake" title="True Partners" desc="Your success is our success. We are fully invested in your growth." />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function Feature() {
  return ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
    <div class="flex flex-col items-center">
      <div class="w-20 h-20 rounded-full bg-surface-1 flex items-center justify-center text-4xl text-secondary mb-6">
        <i class={`ph ${icon}`}></i>
      </div>
      <h3 class="text-xl font-bold text-surface-dark0 mb-3">{title}</h3>
      <p class="text-text-secondary text-center">{desc}</p>
    </div>
  )
}

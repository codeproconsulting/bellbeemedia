import { Layout } from './layout.tsx'
import { PillBadge } from './shared.tsx'

export function AboutPage() {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Bell Bee Media",
    "description": "Meet Bell Bee Media — a team of digital marketing experts, creative designers, and media buyers dedicated to driving revenue and scaling consumer brands.",
    "url": "https://bellbeemedia.com/about-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "BellBee Media",
      "url": "https://bellbeemedia.com",
      "logo": "https://bellbeemedia.com/Logo.svg",
      "image": "https://bellbeemedia.com/og-image.jpg",
      "description": "Paid Media, Social & Creative agency driving measurable revenue for growing brands.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office #204, Vista Building, I-8 Markaz",
        "addressLocality": "Islamabad",
        "postalCode": "44000",
        "addressCountry": "PK"
      }
    }
  };

  return () => (
    <Layout
      title="About Us | Paid Media, Social & Creative Agency | Bell Bee Media"
      description="Meet Bell Bee Media — a team of digital marketing experts, creative designers, and media buyers dedicated to driving revenue and scaling consumer brands."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >
      <div class="bg-white min-h-screen pt-20 pb-24">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center mb-20">
            <div class="flex justify-center mb-6">
              <PillBadge icon="ph-info" text="About Bell Bee Media" />
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-surface-dark0 mb-6 tracking-tight">Who <span class="text-primary">We Are</span></h1>
            <p class="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of digital strategists, designers, and technologists dedicated to helping brands thrive in the digital age.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div class="aspect-square bg-surface-1 rounded-3xl p-8 flex items-center justify-center relative shadow-inner border border-surface-2 overflow-hidden">
                <div class="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(44,188,238,0.1)_0,transparent_70%)]"></div>
                <img src="/Logo.svg" alt="Bell Bee Media Logo" class="w-3/4 h-auto drop-shadow-xl relative z-10" />
              </div>
            </div>
            <div id="mission">
              <div class="flex mb-4">
                <PillBadge icon="ph-target" text="Our Mission" />
              </div>
              <h2 class="text-4xl font-bold text-surface-dark0 mb-6 tracking-tight">Empowering growth through innovation.</h2>
              <p class="text-lg text-text-secondary mb-6 leading-relaxed">
                At Bell Bee Media, our mission is to empower businesses to reach their full potential through innovative digital marketing strategies. We believe in transparency, data-driven decisions, and building long-lasting partnerships with our clients.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed">
                We don't just execute campaigns; we become an extension of your team, deeply understanding your brand and objectives to deliver measurable results that matter.
              </p>
            </div>
          </div>
          
          <div id="why-choose" class="text-center bg-surface-1 py-20 rounded-[3rem] px-8 border border-surface-2">
            <div class="flex justify-center mb-4">
              <PillBadge icon="ph-star" text="The Bell Bee Advantage" />
            </div>
            <h2 class="text-4xl font-bold text-surface-dark0 mb-16 tracking-tight">Why Choose Us?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature icon="ph-chart-line-up" title="Data-Driven" desc="Every decision we make is backed by hard data and analytics." colorClass="text-blue-500 bg-blue-50" />
              <Feature icon="ph-palette" title="Creative Excellence" desc="We blend strategy with stunning design and creative storytelling." colorClass="text-purple-500 bg-purple-50" />
              <Feature icon="ph-handshake" title="True Partners" desc="Your success is our success. We are fully invested in your growth." colorClass="text-emerald-500 bg-emerald-50" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function Feature() {
  return ({ icon, title, desc, colorClass }: { icon: string; title: string; desc: string; colorClass: string }) => (
    <div class="flex flex-col items-center bg-white p-10 rounded-3xl shadow-sm border border-surface-2 hover:shadow-xl transition-shadow group">
      <div class={`w-20 h-20 rounded-full ${colorClass} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
        <i class={`ph-fill ${icon}`}></i>
      </div>
      <h3 class="text-2xl font-bold text-surface-dark0 mb-3">{title}</h3>
      <p class="text-text-secondary text-center leading-relaxed">{desc}</p>
    </div>
  )
}

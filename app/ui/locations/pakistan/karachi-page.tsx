import { type Handle } from 'remix/ui'
import { Layout } from '../../layout.tsx'
import { PillBadge } from '../../shared.tsx'
import { type ProposalSubmissionResult } from '../../../data/wordpress.ts'
import { routes } from '../../../routes.ts'

interface KarachiPageProps {
  result?: ProposalSubmissionResult
  bookingUrl: string
}

export function KarachiPage(handle: Handle<KarachiPageProps>) {
  const { result, bookingUrl } = handle.props
  const submitted = result?.success === true

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BellBee Media Karachi",
    "url": "https://bellbeemedia.com/locations/karachi",
    "logo": "https://bellbeemedia.com/Logo.svg",
    "image": "https://bellbeemedia.com/og-image.jpg",
    "description": "Partner with Karachi's premier digital marketing & performance advertising agency. Specializing in Meta Ads, Google Shopping, D2C retail growth, and video ad production in Clifton, PECHS, and Korangi.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "BellBee Media",
      "url": "https://bellbeemedia.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "75500",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.8607",
      "longitude": "67.0011"
    },
    "telephone": "+923701902120",
    "email": "hello@bellbeemedia.com",
    "priceRange": "$$$"
  };

  return () => (
    <Layout 
      title="Digital Marketing Agency in Karachi | Meta Ads & E-Commerce Growth" 
      description="Scale your Karachi brand with Bell Bee Media — premier performance marketing, Meta & Google Shopping ads, e-commerce CRO, and video creative production in Clifton, PECHS & Defence."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >
      {/* ── Breadcrumb Navigation ── */}
      <div class="bg-surface-dark0 border-b border-white/10 pt-28 pb-4 text-white/80">
        <div class="container mx-auto px-4 max-w-6xl flex items-center justify-between gap-3 text-xs">
          <nav aria-label="Breadcrumb" class="flex items-center gap-2">
            <a href={routes.home.href()} class="hover:text-white transition-colors">Home</a>
            <span class="text-white/30">/</span>
            <a href={routes.locations.href()} class="hover:text-white transition-colors">Locations</a>
            <span class="text-white/30">/</span>
            <a href={routes.locationsPakistan.href()} class="hover:text-white transition-colors">Pakistan</a>
            <span class="text-white/30">/</span>
            <span class="text-white font-semibold">Karachi</span>
          </nav>
          <a
            href={routes.locationsPakistan.href()}
            class="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
          >
            <i class="ph ph-arrow-left"></i> All Pakistan Hubs
          </a>
        </div>
      </div>

      {/* ── Hero & Lead Form Section ── */}
      <section class="relative bg-surface-dark0 text-white pt-10 pb-24 overflow-hidden border-b border-white/5">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Value Props */}
            <div class="lg:col-span-7 flex flex-col items-start text-left">
              <p class="text-xs font-bold uppercase tracking-widest text-primary-light mb-4">
                Serving Karachi Commercial Hubs
              </p>
              <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                Karachi's Top <br />
                <span class="text-gradient">Paid Media &amp; E-Commerce</span> <br />
                Growth Agency
              </h1>
              <p class="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-xl">
                We manage paid acquisition, TikTok UGC video creatives, and conversion rate optimization for Karachi's leading retail brands, B2B enterprises, and D2C startups.
              </p>

              {/* Local Trust Checklist */}
              <ul class="flex flex-col gap-4 text-sm text-white/70 font-medium mb-8" aria-label="Why partner with us in Karachi">
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/25 text-emerald-400 flex items-center justify-center text-xs shrink-0">✓</span>
                  <span><strong>E-Commerce &amp; Retail Focus</strong>: Expert strategies for Karachi's fast-moving retail market</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/25 text-emerald-400 flex items-center justify-center text-xs shrink-0">✓</span>
                  <span><strong>High-Converting Video Creatives</strong>: Studio shoots & UGC ad creatives engineered for conversions</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/25 text-emerald-400 flex items-center justify-center text-xs shrink-0">✓</span>
                  <span><strong>3.4x Average ROAS Achieved</strong>: Scalable campaigns on Meta, Google Shopping, &amp; TikTok</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Lead Capture Form */}
            <div class="lg:col-span-5 w-full">
              <div class="bg-white text-surface-dark0 rounded-3xl p-8 shadow-2xl border border-surface-2 relative overflow-hidden">
                <h3 class="text-2xl font-black mb-2">Book Your Strategy Session</h3>
                <p class="text-text-secondary text-sm mb-6">Get a free ad audit and revenue growth roadmap for your Karachi brand.</p>

                {submitted ? (
                  <div class="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center flex flex-col items-center gap-3">
                    <div class="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl">✓</div>
                    <h4 class="font-bold text-emerald-900 text-lg">Proposal Request Received!</h4>
                    <p class="text-xs text-emerald-800 leading-relaxed">Our Karachi performance team will reach out within 1 business day.</p>
                  </div>
                ) : (
                  <form method="POST" action="/locations/karachi" class="flex flex-col gap-4">
                    <div>
                      <label class="block text-xs font-bold uppercase tracking-wider text-surface-dark1 mb-1">Full Name *</label>
                      <input type="text" name="fullName" required placeholder="e.g. Tariq Hashmi" class="w-full px-4 py-3 rounded-xl border border-surface-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all" />
                    </div>
                    <div>
                      <label class="block text-xs font-bold uppercase tracking-wider text-surface-dark1 mb-1">Business Email *</label>
                      <input type="email" name="email" required placeholder="tariq@brand.com.pk" class="w-full px-4 py-3 rounded-xl border border-surface-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all" />
                    </div>
                    <div>
                      <label class="block text-xs font-bold uppercase tracking-wider text-surface-dark1 mb-1">Phone / WhatsApp</label>
                      <input type="tel" name="phone" placeholder="+92 321 9876543" class="w-full px-4 py-3 rounded-xl border border-surface-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all" />
                    </div>
                    <div>
                      <label class="block text-xs font-bold uppercase tracking-wider text-surface-dark1 mb-1">Tell us about your brand</label>
                      <textarea name="details" rows={3} placeholder="Describe your product line, target monthly revenue, or current ad bottlenecks..." class="w-full px-4 py-3 rounded-xl border border-surface-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"></textarea>
                    </div>
                    <button type="submit" class="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-sm mt-2">
                      Get Karachi Growth Plan <i class="ph ph-arrow-right"></i>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services Tailored for Karachi Market ── */}
      <section class="py-24 bg-surface-1 border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-5xl font-black text-surface-dark0 mb-4 tracking-tight">
              Growth Solutions built for <span class="text-gradient">Karachi Businesses</span>
            </h2>
            <p class="text-text-secondary leading-relaxed">
              From Clifton and Defence to PECHS and Korangi Industrial Zone — we help Karachi businesses acquire customers predictably and scale sales profitably.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-3xl border border-surface-2 shadow-sm flex flex-col gap-4">
              <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold">
                <i class="ph-fill ph-shopping-bag"></i>
              </div>
              <h3 class="text-xl font-bold text-surface-dark0">Meta &amp; Google Shopping Ads</h3>
              <p class="text-sm text-text-secondary leading-relaxed">
                Drive instant high-intent traffic to your store with optimized Google Shopping feeds, Meta Advantage+ catalog ads, and retargeting workflows.
              </p>
            </div>

            <div class="bg-white p-8 rounded-3xl border border-surface-2 shadow-sm flex flex-col gap-4">
              <div class="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl font-bold">
                <i class="ph-fill ph-video-camera"></i>
              </div>
              <h3 class="text-xl font-bold text-surface-dark0">Creative Video Production</h3>
              <p class="text-sm text-text-secondary leading-relaxed">
                Scroll-stopping UGC & studio product videos designed specifically to drive clicks and conversions on Instagram Reels & TikTok.
              </p>
            </div>

            <div class="bg-white p-8 rounded-3xl border border-surface-2 shadow-sm flex flex-col gap-4">
              <div class="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-2xl font-bold">
                <i class="ph-fill ph-arrow-clockwise"></i>
              </div>
              <h3 class="text-xl font-bold text-surface-dark0">WhatsApp &amp; Repeat Purchase Funnels</h3>
              <p class="text-sm text-text-secondary leading-relaxed">
                Build long-term LTV with automated WhatsApp marketing flows, order tracking alerts, and post-purchase review sequences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section class="py-20 bg-white border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-4xl">
          <h2 class="text-3xl font-black text-center text-surface-dark0 mb-12">Frequently Asked Questions — Karachi Market</h2>
          
          <div class="flex flex-col gap-4">
            <details class="group bg-surface-1 border border-surface-2 rounded-2xl p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 cursor-pointer">
                <span>Which industries do you serve in Karachi?</span>
                <i class="ph ph-caret-down group-open:rotate-180 transition-transform"></i>
              </summary>
              <p class="mt-4 text-sm text-text-secondary leading-relaxed">
                We specialize in D2C fashion &amp; apparel, beauty &amp; skincare, consumer electronics, home decor, and B2B corporate brands operating across Karachi.
              </p>
            </details>

            <details class="group bg-surface-1 border border-surface-2 rounded-2xl p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 cursor-pointer">
                <span>Can we schedule a strategy call for our Karachi team?</span>
                <i class="ph ph-caret-down group-open:rotate-180 transition-transform"></i>
              </summary>
              <p class="mt-4 text-sm text-text-secondary leading-relaxed">
                Absolutely! Fill out the form above to book a 30-minute growth consultation with our lead performance strategist.
              </p>
            </details>
          </div>
        </div>
      </section>
    </Layout>
  )
}

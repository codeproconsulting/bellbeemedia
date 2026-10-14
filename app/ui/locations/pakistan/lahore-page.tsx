import { type Handle } from 'remix/ui'
import { Layout } from '../../layout.tsx'
import { PillBadge } from '../../shared.tsx'
import { type ProposalSubmissionResult } from '../../../data/wordpress.ts'

interface LahorePageProps {
  result?: ProposalSubmissionResult
  bookingUrl: string
}

export function LahorePage(handle: Handle<LahorePageProps>) {
  const { result, bookingUrl } = handle.props
  const submitted = result?.success === true

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BellBee Media Lahore",
    "url": "https://bellbeemedia.com/locations/lahore",
    "logo": "https://bellbeemedia.com/Logo.svg",
    "image": "https://bellbeemedia.com/og-image.jpg",
    "description": "Partner with Lahore's premier digital marketing & performance advertising agency. Specializing in Meta Ads, Google Ads, TikTok D2C growth, and Shopify CRO for Gulberg, DHA, and Johar Town businesses.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "BellBee Media",
      "url": "https://bellbeemedia.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.5204",
      "longitude": "74.3587"
    },
    "telephone": "+923701902120",
    "email": "hello@bellbeemedia.com",
    "priceRange": "$$$"
  };

  return () => (
    <Layout 
      title="Digital Marketing Agency in Lahore | Paid Ads & Performance Marketing" 
      description="Scale your Lahore brand with Bell Bee Media — premier performance marketing, Meta & Google ads, social media management, and e-commerce CRO in Gulberg, DHA & Johar Town."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >
      {/* ── Hero & Lead Form Section ── */}
      <section class="relative bg-surface-dark0 text-white pt-28 pb-24 overflow-hidden border-b border-white/5">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Value Props */}
            <div class="lg:col-span-7 flex flex-col items-start text-left">
              <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/15 text-xs font-bold uppercase tracking-widest mb-6">
                🇵🇰 Serving Lahore &amp; Punjab Growth Hubs
              </span>
              <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                Leading <br />
                <span class="text-gradient">Performance Marketing Agency</span> <br />
                in Lahore
              </h1>
              <p class="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-xl">
                We engineer high-ROI paid media campaigns, TikTok & Instagram creative funnels, and high-converting Shopify stores for Lahore's top retail, D2C, and fashion brands.
              </p>

              {/* Local Trust Checklist */}
              <ul class="flex flex-col gap-4 text-sm text-white/70 font-medium mb-8" aria-label="Why partner with us in Lahore">
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/25 text-emerald-400 flex items-center justify-center text-xs shrink-0">✓</span>
                  <span><strong>Dedicated Punjab Account Team</strong>: Growth strategists tailored for Lahore markets</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/25 text-emerald-400 flex items-center justify-center text-xs shrink-0">✓</span>
                  <span><strong>Specialized COD Funnels</strong>: Cash-on-Delivery optimization & low return rates</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/25 text-emerald-400 flex items-center justify-center text-xs shrink-0">✓</span>
                  <span><strong>3.4x Average ROAS</strong>: Data-driven Meta, Google, and TikTok ad optimization</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Lead Capture Form */}
            <div class="lg:col-span-5 w-full">
              <div class="bg-white text-surface-dark0 rounded-3xl p-8 shadow-2xl border border-surface-2 relative overflow-hidden">
                <h3 class="text-2xl font-black mb-2">Book Your Strategy Session</h3>
                <p class="text-text-secondary text-sm mb-6">Get a custom growth roadmap for your Lahore business within 24 hours.</p>

                {submitted ? (
                  <div class="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center flex flex-col items-center gap-3">
                    <div class="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl">✓</div>
                    <h4 class="font-bold text-emerald-900 text-lg">Proposal Request Received!</h4>
                    <p class="text-xs text-emerald-800 leading-relaxed">Our Lahore team will analyze your brand and reach out within 1 business day.</p>
                  </div>
                ) : (
                  <form method="POST" action="/locations/lahore" class="flex flex-col gap-4">
                    <div>
                      <label class="block text-xs font-bold uppercase tracking-wider text-surface-dark1 mb-1">Full Name *</label>
                      <input type="text" name="fullName" required placeholder="e.g. Usman Malik" class="w-full px-4 py-3 rounded-xl border border-surface-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all" />
                    </div>
                    <div>
                      <label class="block text-xs font-bold uppercase tracking-wider text-surface-dark1 mb-1">Business Email *</label>
                      <input type="email" name="email" required placeholder="usman@yourbrand.pk" class="w-full px-4 py-3 rounded-xl border border-surface-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all" />
                    </div>
                    <div>
                      <label class="block text-xs font-bold uppercase tracking-wider text-surface-dark1 mb-1">Phone / WhatsApp</label>
                      <input type="tel" name="phone" placeholder="+92 300 1234567" class="w-full px-4 py-3 rounded-xl border border-surface-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all" />
                    </div>
                    <div>
                      <label class="block text-xs font-bold uppercase tracking-wider text-surface-dark1 mb-1">Tell us about your brand</label>
                      <textarea name="details" rows={3} placeholder="Current monthly ad spend, website URL, or target growth goals..." class="w-full px-4 py-3 rounded-xl border border-surface-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all"></textarea>
                    </div>
                    <button type="submit" class="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-sm mt-2">
                      Get Lahore Growth Plan <i class="ph ph-arrow-right"></i>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services Tailored for Lahore Market ── */}
      <section class="py-24 bg-surface-1 border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-5xl font-black text-surface-dark0 mb-4 tracking-tight">
              Full-Spectrum Growth for <span class="text-gradient">Lahore Brands</span>
            </h2>
            <p class="text-text-secondary leading-relaxed">
              Whether you operate from Gulberg Main Boulevard, DHA Phase 5, or Johar Town — our localized marketing team turns ad spend into profitable sales.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-3xl border border-surface-2 shadow-sm flex flex-col gap-4">
              <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-bold">
                <i class="ph-fill ph-chart-line-up"></i>
              </div>
              <h3 class="text-xl font-bold text-surface-dark0">Meta &amp; TikTok Paid Ads</h3>
              <p class="text-sm text-text-secondary leading-relaxed">
                Scale your Pakistani audience with targeted Meta and TikTok Ads. We create high-converting Urdu &amp; English ad creatives that resonate locally.
              </p>
            </div>

            <div class="bg-white p-8 rounded-3xl border border-surface-2 shadow-sm flex flex-col gap-4">
              <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold">
                <i class="ph-fill ph-desktop"></i>
              </div>
              <h3 class="text-xl font-bold text-surface-dark0">Shopify &amp; COD Optimization</h3>
              <p class="text-sm text-text-secondary leading-relaxed">
                Lahore buyers demand fast checkout and reliable COD options. We optimize Shopify store speed, trust badges, and WhatsApp checkout integration.
              </p>
            </div>

            <div class="bg-white p-8 rounded-3xl border border-surface-2 shadow-sm flex flex-col gap-4">
              <div class="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl font-bold">
                <i class="ph-fill ph-megaphone"></i>
              </div>
              <h3 class="text-xl font-bold text-surface-dark0">Lahore Influencer PR</h3>
              <p class="text-sm text-text-secondary leading-relaxed">
                Connect directly with top lifestyle, fashion, and tech content creators across Lahore for organic unboxings and viral review campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section class="py-20 bg-white border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-4xl">
          <h2 class="text-3xl font-black text-center text-surface-dark0 mb-12">Frequently Asked Questions — Lahore Market</h2>
          
          <div class="flex flex-col gap-4">
            <details class="group bg-surface-1 border border-surface-2 rounded-2xl p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 cursor-pointer">
                <span>Do you work with e-commerce brands in Gulberg and DHA Lahore?</span>
                <i class="ph ph-caret-down group-open:rotate-180 transition-transform"></i>
              </summary>
              <p class="mt-4 text-sm text-text-secondary leading-relaxed">
                Yes! We partner with fashion, apparel, cosmetics, and electronics brands based across Lahore including Gulberg, DHA Phases 1–8, Johar Town, and Model Town.
              </p>
            </details>

            <details class="group bg-surface-1 border border-surface-2 rounded-2xl p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 cursor-pointer">
                <span>How do you handle Cash-on-Delivery (COD) return rates?</span>
                <i class="ph ph-caret-down group-open:rotate-180 transition-transform"></i>
              </summary>
              <p class="mt-4 text-sm text-text-secondary leading-relaxed">
                COD returns can kill profitability. We implement automated SMS &amp; WhatsApp order confirmations, address verification checks, and targeted retargeting to keep return rates under 8%.
              </p>
            </details>
          </div>
        </div>
      </section>
    </Layout>
  )
}

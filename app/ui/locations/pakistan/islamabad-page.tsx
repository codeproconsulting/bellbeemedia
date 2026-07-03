import { type Handle } from 'remix/ui'
import { Layout } from '../../layout.tsx'
import { PillBadge } from '../../shared.tsx'
import { type ProposalSubmissionResult } from '../../../data/wordpress.ts'

interface IslamabadPageProps {
  result?: ProposalSubmissionResult
  bookingUrl: string
}

export function IslamabadPage(handle: Handle<IslamabadPageProps>) {
  const { result, bookingUrl } = handle.props
  const submitted = result?.success === true
  
  // Check if the URL is embeddable in an iframe (e.g., Google Calendar appointment schedule or Calendly)
  const isEmbeddable = bookingUrl.includes('calendly.com') || 
                        bookingUrl.includes('calendar.google.com') || 
                        bookingUrl.includes('calendar.app.google')

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BellBee Media Islamabad",
    "url": "https://bellbeemedia.com/locations/pakistan/islamabad",
    "logo": "https://bellbeemedia.com/Logo.svg",
    "image": "https://bellbeemedia.com/og-image.jpg",
    "description": "Partner with Islamabad's premier performance marketing, paid ads, and social media agency. Drive revenue, scale D2C brands, and optimize campaigns from Vista Building, I-8 Markaz, Islamabad.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "BellBee Media",
      "url": "https://bellbeemedia.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office #204, Vista Building, I-8 Markaz",
      "addressLocality": "Islamabad",
      "addressRegion": "ICT",
      "postalCode": "44000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.6908",
      "longitude": "73.0805"
    },
    "telephone": "+923701902120",
    "email": "hello@bellbeemedia.com",
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return () => (
    <Layout 
      title="Top Digital Marketing Agency in Islamabad | Bell Bee Media" 
      description="Partner with Islamabad's premier performance marketing, paid ads, and social media agency. Drive revenue, scale D2C brands, and optimize campaigns from Vista Building, I-8 Markaz, Islamabad."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >
      {/* ── Hero & Lead Form Section ── */}
      <section class="relative bg-surface-dark0 text-white pt-28 pb-24 overflow-hidden border-b border-white/5">
        {/* Decorative Background Glows */}
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Value Props */}
            <div class="lg:col-span-7 flex flex-col items-start text-left">
              <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/15 text-xs font-bold uppercase tracking-widest mb-6">
                🇵🇰 Serving Islamabad &amp; Rawalpindi
              </span>
              <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
                The Premier <br />
                <span class="text-gradient">Digital Marketing Agency</span> <br />
                in Islamabad
              </h1>
              <p class="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-xl">
                We build paid acquisition funnels, manage high-growth social channels, and design high-converting Shopify stores for local and international brands. 
              </p>

              {/* Local Trust Checklist */}
              <ul class="flex flex-col gap-4 text-sm text-white/70 font-medium mb-8" aria-label="Why partner with us in Islamabad">
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/25 text-emerald-400 flex items-center justify-center text-xs shrink-0">✓</span>
                  <span><strong>Locally Operated</strong>: Meet our team at I-8 Markaz, Islamabad office</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/25 text-emerald-400 flex items-center justify-center text-xs shrink-0">✓</span>
                  <span><strong>COD Funnel Experts</strong>: Built specifically for local Cash on Delivery logistics</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-full bg-emerald-500/25 text-emerald-400 flex items-center justify-center text-xs shrink-0">✓</span>
                  <span><strong>ROAS Driven</strong>: Average 3.4x ROAS generated for our scaling clients</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Dynamic Form Container */}
            <div class="lg:col-span-5">
              <div class="bg-white text-surface-dark0 p-8 rounded-[2.5rem] shadow-2xl border border-surface-2 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>

                {submitted ? (
                  // Success State after submitting form in Hero
                  <div class="relative z-10 flex flex-col items-center text-center py-6">
                    <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mb-4 animate-bounce">
                      <i class="ph-fill ph-check-circle"></i>
                    </div>
                    <h2 class="text-2xl font-black text-surface-dark0 mb-2">Audit Requested!</h2>
                    <p class="text-sm text-text-secondary mb-6 leading-relaxed">
                      {result?.message ?? "Thank you! We're preparing your audit. To secure your 30-minute growth consultation call immediately, please book a slot on our calendar below:"}
                    </p>

                    {isEmbeddable ? (
                      <div class="w-full rounded-2xl overflow-hidden border border-surface-2 bg-surface-1 min-h-[400px] mb-6 relative">
                        <iframe 
                          src={bookingUrl} 
                          width="100%" 
                          height="400" 
                          frameborder="0" 
                          style="min-width: 320px; height: 400px;"
                        ></iframe>
                      </div>
                    ) : (
                      <a 
                        href={bookingUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all shadow-lg text-center flex items-center justify-center gap-2 mb-6"
                      >
                        Book Call on Google Meet <i class="ph ph-arrow-square-out"></i>
                      </a>
                    )}
                    
                    <a href="/" class="text-xs text-primary font-bold hover:underline">
                      Back to Home
                    </a>
                  </div>
                ) : (
                  // Active Lead Form inside Hero
                  <div class="relative z-10">
                    <h2 class="text-2xl font-black text-surface-dark0 mb-2">Claim Your Free Audit</h2>
                    <p class="text-xs text-text-secondary mb-6">Let's audit your marketing channels and design a customized strategy roadmap.</p>
                    
                    {result && !result.success && (
                      <div class="p-3 mb-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <i class="ph ph-warning-circle"></i>{result.message}
                      </div>
                    )}

                    <form method="post" action="/locations/pakistan/islamabad" class="flex flex-col gap-4">
                      <div class="flex flex-col gap-1.5">
                        <label for="fullName" class="text-xs font-bold text-surface-dark2 uppercase tracking-wide">Full Name *</label>
                        <input type="text" id="fullName" name="fullName" required placeholder="Ali Khan" class="px-4 py-3 rounded-xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-sm font-semibold text-surface-dark0" />
                      </div>

                      <div class="flex flex-col gap-1.5">
                        <label for="email" class="text-xs font-bold text-surface-dark2 uppercase tracking-wide">Work Email *</label>
                        <input type="email" id="email" name="email" required placeholder="ali@yourbrand.com" class="px-4 py-3 rounded-xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-sm font-semibold text-surface-dark0" />
                      </div>

                      <div class="flex flex-col gap-1.5">
                        <label for="phone" class="text-xs font-bold text-surface-dark2 uppercase tracking-wide">WhatsApp / Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+92 300 0000000" class="px-4 py-3 rounded-xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-sm font-semibold text-surface-dark0" />
                      </div>

                      <div class="flex flex-col gap-1.5">
                        <label for="details" class="text-xs font-bold text-surface-dark2 uppercase tracking-wide">Brand Website or Goals</label>
                        <textarea id="details" name="details" rows={2} placeholder="E.g., Shopify store, need to scale monthly sales..." class="px-4 py-3 rounded-xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all resize-none text-sm font-semibold text-surface-dark0"></textarea>
                      </div>

                      <button type="submit" class="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all shadow-lg shadow-primary/20 text-sm flex items-center justify-center gap-2 group mt-2">
                        Get Free Growth Audit <span class="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                      <p class="text-center text-[10px] text-text-secondary mt-1">
                        🔒 Privacy Protected. We never spam.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── E-E-A-T Trust Section: Experience & Expertise ── */}
      <section class="py-24 bg-white border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Block: Office & Location Info */}
            <div class="lg:col-span-5 flex flex-col gap-6">
              <div class="bg-surface-1 border border-surface-2 rounded-3xl p-8 relative overflow-hidden shadow-sm">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl">
                    <i class="ph-fill ph-map-pin"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-surface-dark0 text-lg">Islamabad Office</h3>
                    <p class="text-xs text-text-secondary">Vista Building, I-8 Markaz</p>
                  </div>
                </div>
                <div class="text-sm text-text-secondary leading-relaxed mb-6">
                  Our core operations, copywriters, and performance optimization teams operate directly from Islamabad. We actively collaborate with local brands and run weekly review meetings.
                </div>
                <div class="pt-4 border-t border-surface-2 flex flex-col gap-2 text-xs font-semibold text-surface-dark0">
                  <span class="flex items-center gap-2"><i class="ph ph-envelope text-primary text-sm"></i> hello@bellbeemedia.com</span>
                  <span class="flex items-center gap-2"><i class="ph ph-phone text-primary text-sm"></i> +92 370 190 2120</span>
                </div>
              </div>

              {/* Local Experience Box */}
              <div class="bg-secondary/5 border border-secondary/15 rounded-3xl p-8">
                <h4 class="font-bold text-surface-dark0 mb-2 flex items-center gap-2">
                  <i class="ph-fill ph-check-circle text-secondary"></i> Pakistan E-commerce Mastery
                </h4>
                <p class="text-xs text-text-secondary leading-relaxed">
                  We specialize in navigating the local Pakistani consumer market, including designing high-converting checkouts optimized for Cash on Delivery (COD), scaling campaigns on low-CPMs, and managing local micro-influencer gifting programs.
                </p>
              </div>
            </div>

            {/* Content block */}
            <div class="lg:col-span-7">
              <div class="flex mb-4"><PillBadge icon="ph-buildings" text="Islamabad Hub" /></div>
              <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 mb-6 tracking-tight">
                Driving Compounding Revenue for Islamabad’s Top Brands
              </h2>
              <p class="text-base text-text-secondary leading-relaxed mb-6">
                Unlike generic marketing agencies, Bell Bee Media is a team of specialized practitioners. We don't allocate junior account managers to rotate your accounts. When you work with us, you partner directly with our 5 lead channel experts in paid ads, search engine strategy, creative asset production, copywriting, and web conversion.
              </p>
              <p class="text-base text-text-secondary leading-relaxed mb-8">
                From scaling D2C fashion brands to optimizing lead-generation funnels for B2B consultancies, we blend local market insights with world-class campaign structures.
              </p>

              {/* Performance Stats Bar — matches main landing page style */}
              <div class="mt-10 -mx-4 md:-mx-0 rounded-3xl bg-gradient-to-r from-[#071324] via-primary to-[#071324] border border-white/5 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
                <div class="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-0 text-center divide-x divide-white/10">
                  <div class="flex flex-col items-center gap-2 group py-8 px-4">
                    <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">12+</span>
                    <span class="text-xs font-medium text-white/60 uppercase tracking-widest">Scaling Brands</span>
                  </div>
                  <div class="flex flex-col items-center gap-2 group py-8 px-4">
                    <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">3.4x</span>
                    <span class="text-xs font-medium text-white/60 uppercase tracking-widest">Avg. ROAS</span>
                  </div>
                  <div class="flex flex-col items-center gap-2 group py-8 px-4">
                    <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">5</span>
                    <span class="text-xs font-medium text-white/60 uppercase tracking-widest">Expert Specialists</span>
                  </div>
                  <div class="flex flex-col items-center gap-2 group py-8 px-4">
                    <span class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">35+</span>
                    <span class="text-xs font-medium text-white/60 uppercase tracking-widest">Combined Yrs Exp.</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ── Localized Services Section ── */}
      <section class="py-24 bg-surface-1 border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-squares-four" text="Services" /></div>
            <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 tracking-tight">
              Our Core Services to Scale Your Business
            </h2>
            <p class="text-text-secondary mt-4">Cohesive strategy and specialist execution across all consumer acquisition channels.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-8 rounded-3xl bg-white border border-surface-2 shadow-sm flex flex-col gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-2xl shrink-0"><i class="ph-fill ph-chart-line-up"></i></div>
              <h3 class="font-bold text-xl text-surface-dark0">Performance Ads</h3>
              <p class="text-sm text-text-secondary leading-relaxed">Meta Ads, Google Search, and Shopping campaigns optimized for maximum sales, lead volume, and ROI.</p>
            </div>
            
            <div class="p-8 rounded-3xl bg-white border border-surface-2 shadow-sm flex flex-col gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-2xl shrink-0"><i class="ph-fill ph-heart"></i></div>
              <h3 class="font-bold text-xl text-surface-dark0">Social Media &amp; Reels</h3>
              <p class="text-sm text-text-secondary leading-relaxed">Native content strategies, vertical video shoots, community building, and influencer gifting across Pakistan.</p>
            </div>

            <div class="p-8 rounded-3xl bg-white border border-surface-2 shadow-sm flex flex-col gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-2xl shrink-0"><i class="ph-fill ph-desktop"></i></div>
              <h3 class="font-bold text-xl text-surface-dark0">Web &amp; Conversion Pages</h3>
              <p class="text-sm text-text-secondary leading-relaxed">Shopify setups and high-speed custom landing pages optimized for mobile checkouts and local Pakistani logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Islamabad Specific FAQs ── */}
      <section class="py-24 bg-white border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-question" text="Islamabad FAQs" /></div>
            <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 tracking-tight">
              Frequently Asked Questions (Islamabad)
            </h2>
            <p class="text-text-secondary mt-4">Common questions about working with Bell Bee Media locally.</p>
          </div>

          <div class="flex flex-col gap-4">
            <details class="group bg-surface-1 border border-surface-2 rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 list-none cursor-pointer">
                <h3>Where is your Islamabad office located?</h3>
                <span class="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                  <i class="ph ph-caret-down"></i>
                </span>
              </summary>
              <div class="mt-4 text-text-secondary leading-relaxed border-t border-surface-2/60 pt-4 text-sm">
                Our main office is located at **Office #204, Vista Building, I-8 Markaz, Islamabad**. We welcome local business owners and managers to visit us for strategy reviews and project kick-offs.
              </div>
            </details>

            <details class="group bg-surface-1 border border-surface-2 rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 list-none cursor-pointer">
                <h3>Do you specialize in local Cash on Delivery (COD) marketing?</h3>
                <span class="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                  <i class="ph ph-caret-down"></i>
                </span>
              </summary>
              <div class="mt-4 text-text-secondary leading-relaxed border-t border-surface-2/60 pt-4 text-sm">
                Yes. Running D2C brands in Pakistan requires special attention to the Cash on Delivery funnel, courier integrations, and return-to-origin (RTO) reduction. We design Shopify checkouts, SMS verification sequences, and post-purchase customer service loops specifically configured for the local landscape.
              </div>
            </details>

            <details class="group bg-surface-1 border border-surface-2 rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 list-none cursor-pointer">
                <h3>How do you track campaign ROI and ROAS?</h3>
                <span class="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                  <i class="ph ph-caret-down"></i>
                </span>
              </summary>
              <div class="mt-4 text-text-secondary leading-relaxed border-t border-surface-2/60 pt-4 text-sm">
                We set up custom pixel tracking and attribution systems (Meta Conversions API, Google Tag Manager, GA4) to ensure every rupee spent is mapped to a customer purchase. You receive a live dashboard displaying clicks, conversions, return on ad spend, and net revenue.
              </div>
            </details>

            <details class="group bg-surface-1 border border-surface-2 rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex justify-between items-center font-bold text-lg text-surface-dark0 list-none cursor-pointer">
                <h3>Can you help us target overseas markets from Pakistan?</h3>
                <span class="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                  <i class="ph ph-caret-down"></i>
                </span>
              </summary>
              <div class="mt-4 text-text-secondary leading-relaxed border-t border-surface-2/60 pt-4 text-sm">
                Absolutely. We specialize in cross-border e-commerce and B2B export strategy. We help Pakistani manufacturers, software houses, and retail exporters set up international campaigns targeting the GCC, North America, and Europe.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── Direct Contact CTA Section ── */}
      <section class="py-24 bg-gradient-to-br from-primary via-[#0e2c50] to-[#051120] text-white">
        <div class="container mx-auto px-4 max-w-3xl text-center">
          <h2 class="text-3xl md:text-5xl font-black mb-6">Ready to scale your business in Islamabad?</h2>
          <p class="text-lg text-white/85 mb-10">Schedule a discovery call or claim your free audit. We'll map out a custom growth plan for your brand.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="#fullName" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-all shadow-xl hover:scale-[1.02]">
              Claim Free Audit Now <i class="ph ph-arrow-up" />
            </a>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
              Book WhatsApp Call <i class="ph ph-whatsapp-logo" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

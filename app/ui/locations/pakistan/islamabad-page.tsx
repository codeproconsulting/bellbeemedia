import { type Handle } from 'remix/ui'
import { Layout } from '../../layout.tsx'
import { PillBadge } from '../../shared.tsx'
import { type ProposalSubmissionResult } from '../../../data/wordpress.ts'
import { routes } from '../../../routes.ts'

interface IslamabadPageProps {
  result?: ProposalSubmissionResult
  bookingUrl: string
}

export function IslamabadPage(handle: Handle<IslamabadPageProps>) {
  const { result, bookingUrl } = handle.props
  const submitted = result?.success === true

  const isEmbeddable =
    bookingUrl.includes('calendly.com') ||
    bookingUrl.includes('calendar.google.com') ||
    bookingUrl.includes('calendar.app.google')

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'BellBee Media — Digital Marketing Agency Islamabad',
    url: 'https://bellbeemedia.com/locations/pakistan/islamabad',
    logo: 'https://bellbeemedia.com/Logo.svg',
    description: 'BellBee Media is Islamabad\'s performance-first digital marketing agency. We run Meta & Google Ads, manage social channels, produce creative, and build websites — all in-house.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office #204, Vista Building, I-8 Markaz',
      addressLocality: 'Islamabad',
      addressRegion: 'ICT',
      postalCode: '44000',
      addressCountry: 'PK',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '33.6908', longitude: '73.0805' },
    telephone: '+923701902120',
    email: 'hello@bellbeemedia.com',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }

  return () => (
    <Layout
      title="Digital Marketing Agency in Islamabad | BellBee Media"
      description="BellBee Media is Islamabad's performance-first digital marketing agency — Meta & Google Ads, Social Media, Creative Production, and Web Development. Office in I-8 Markaz."
      head={
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      }
    >

      {/* ── HERO ── */}
      <section class="relative bg-surface-dark0 text-white pt-28 pb-24 overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[350px] h-[350px] bg-secondary/8 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left */}
            <div class="lg:col-span-7">
              <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-white/80 mb-6">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                I-8 Markaz, Islamabad · Pakistan
              </span>

              <h1 class="text-4xl md:text-[3.5rem] font-black tracking-tight leading-[1.08] mb-5">
                Islamabad's<br />
                <span class="text-gradient">Performance-First</span><br />
                Marketing Agency.
              </h1>

              <p class="text-lg text-white/65 leading-relaxed mb-8 max-w-lg">
                BellBee Media runs your Meta Ads, Google campaigns, social channels, creative production, and website — managed by senior specialists who are accountable for your growth, not just your retainer.
              </p>

              <div class="flex flex-col gap-3 mb-10">
                <div class="flex items-center gap-3 text-sm text-white/75">
                  <span class="w-5 h-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs shrink-0"><i class="ph-fill ph-check"></i></span>
                  In-house team — no freelancers or outsourcing
                </div>
                <div class="flex items-center gap-3 text-sm text-white/75">
                  <span class="w-5 h-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs shrink-0"><i class="ph-fill ph-check"></i></span>
                  Islamabad office — meet us face to face, anytime
                </div>
                <div class="flex items-center gap-3 text-sm text-white/75">
                  <span class="w-5 h-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs shrink-0"><i class="ph-fill ph-check"></i></span>
                  Weekly reporting tied to revenue — not vanity metrics
                </div>
              </div>

              <div class="flex flex-wrap gap-3">
                <a href="#get-audit" class="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-all shadow-lg text-sm">
                  Get a Free Growth Audit <i class="ph ph-arrow-right"></i>
                </a>
                <a href={routes.ourWorkClientResults.href()} class="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/85 font-medium rounded-full hover:bg-white/8 transition-all text-sm">
                  View Our Work <i class="ph ph-arrow-square-out"></i>
                </a>
              </div>
            </div>

            {/* Right — Lead Form */}
            <div class="lg:col-span-5" id="get-audit">
              <div class="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-2xl relative overflow-hidden">
                <div class="absolute -top-16 -right-16 w-40 h-40 bg-primary/15 rounded-full blur-[50px] pointer-events-none"></div>

                {submitted ? (
                  <div class="relative z-10 flex flex-col items-center text-center py-8">
                    <div class="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-3xl mb-4">
                      <i class="ph-fill ph-check-circle"></i>
                    </div>
                    <h2 class="text-xl font-black text-white mb-2">Request Received!</h2>
                    <p class="text-sm text-white/55 mb-6 leading-relaxed">
                      {result?.message ?? "We'll reach out within 4 hours. Book a time to speak with our team directly:"}
                    </p>
                    {isEmbeddable ? (
                      <div class="w-full rounded-2xl overflow-hidden border border-white/10 min-h-[360px] mb-4">
                        <iframe src={bookingUrl} width="100%" height="360" frameborder="0" style="height:360px;"></iframe>
                      </div>
                    ) : (
                      <a href={bookingUrl} target="_blank" rel="noopener noreferrer" class="w-full py-3.5 bg-primary text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 hover:bg-primary-light transition-all mb-4">
                        Book a Call <i class="ph ph-arrow-square-out"></i>
                      </a>
                    )}
                    <a href="/" class="text-xs text-white/40 hover:text-white/70 transition-colors">← Back to Home</a>
                  </div>
                ) : (
                  <div class="relative z-10">
                    <p class="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1">Free · No Strings Attached</p>
                    <h2 class="text-xl font-black text-white mb-1">Book a Free Growth Audit</h2>
                    <p class="text-xs text-white/45 mb-5">Tell us about your brand — we'll review your channels and share what we'd do differently.</p>

                    {result && !result.success && (
                      <div class="p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
                        <i class="ph ph-warning-circle"></i> {result.message}
                      </div>
                    )}

                    <form method="post" action="/locations/pakistan/islamabad" class="flex flex-col gap-3">
                      <input type="text" name="fullName" required placeholder="Your Name" class="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-all text-sm" />
                      <input type="email" name="email" required placeholder="Work Email" class="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-all text-sm" />
                      <input type="tel" name="phone" placeholder="WhatsApp Number" class="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-all text-sm" />
                      <textarea name="details" rows={2} placeholder="Your brand and what you want to achieve..." class="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-all resize-none text-sm"></textarea>
                      <button type="submit" class="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all text-sm flex items-center justify-center gap-2 group mt-1">
                        Send Request <span class="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </button>
                      <p class="text-center text-[10px] text-white/25">🔒 Confidential. We don't share your details.</p>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── QUICK STATS ── */}
      <section class="py-12 bg-gradient-to-r from-[#071324] via-primary to-[#071324] border-y border-white/5 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
        <div class="container mx-auto px-4 max-w-5xl relative z-10">
          <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <div class="flex flex-col items-center py-4 px-4 group">
              <span class="text-3xl md:text-4xl font-black text-white group-hover:text-secondary-light transition-colors">50+</span>
              <span class="text-xs text-white/50 uppercase tracking-wide mt-1">Brands Served</span>
            </div>
            <div class="flex flex-col items-center py-4 px-4 group">
              <span class="text-3xl md:text-4xl font-black text-white group-hover:text-secondary-light transition-colors">3.4x</span>
              <span class="text-xs text-white/50 uppercase tracking-wide mt-1">Avg. ROAS</span>
            </div>
            <div class="flex flex-col items-center py-4 px-4 group">
              <span class="text-3xl md:text-4xl font-black text-white group-hover:text-secondary-light transition-colors">₨2B+</span>
              <span class="text-xs text-white/50 uppercase tracking-wide mt-1">Client Revenue</span>
            </div>
            <div class="flex flex-col items-center py-4 px-4 group">
              <span class="text-3xl md:text-4xl font-black text-white group-hover:text-secondary-light transition-colors">5+</span>
              <span class="text-xs text-white/50 uppercase tracking-wide mt-1">Years Operating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BELLBEE ── */}
      <section class="py-20 bg-white border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <div class="flex justify-center mb-3"><PillBadge icon="ph-buildings" text="Islamabad Office" /></div>
            <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 tracking-tight">
              Why Islamabad Brands Choose BellBee
            </h2>
            <p class="text-text-secondary mt-3 text-sm leading-relaxed">
              We're not a remote team hiding behind dashboards. We're based down the road — and we treat your brand's growth as if it's our own.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div class="p-7 rounded-3xl border border-surface-2 bg-surface-1 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div class="w-12 h-12 rounded-2xl bg-primary/8 text-primary flex items-center justify-center text-2xl mb-5">
                <i class="ph-fill ph-users-three"></i>
              </div>
              <h3 class="font-bold text-lg text-surface-dark0 mb-2">Senior Specialists Only</h3>
              <p class="text-sm text-text-secondary leading-relaxed">
                No junior account managers. Your campaigns are handled by experienced media buyers, creative strategists, and web developers who have run hundreds of campaigns.
              </p>
            </div>

            <div class="p-7 rounded-3xl border border-surface-2 bg-surface-1 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div class="w-12 h-12 rounded-2xl bg-secondary/8 text-secondary flex items-center justify-center text-2xl mb-5">
                <i class="ph-fill ph-currency-circle-dollar"></i>
              </div>
              <h3 class="font-bold text-lg text-surface-dark0 mb-2">Pakistan COD Experts</h3>
              <p class="text-sm text-text-secondary leading-relaxed">
                Cash on Delivery changes everything — checkout flows, courier integrations, RTO reduction. We've built these systems for dozens of Pakistani D2C brands and know what actually converts.
              </p>
            </div>

            <div class="p-7 rounded-3xl border border-surface-2 bg-surface-1 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div class="w-12 h-12 rounded-2xl bg-primary/8 text-primary flex items-center justify-center text-2xl mb-5">
                <i class="ph-fill ph-chart-bar"></i>
              </div>
              <h3 class="font-bold text-lg text-surface-dark0 mb-2">Revenue-Tied Reporting</h3>
              <p class="text-sm text-text-secondary leading-relaxed">
                We connect Meta Conversions API, GA4, and server-side pixel events so every rupee you spend is tracked to an actual order. You always know what's working.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section class="py-20 bg-surface-1 border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <div class="flex justify-center mb-3"><PillBadge icon="ph-squares-four" text="What We Do" /></div>
            <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 tracking-tight">
              Full-Stack Marketing. One Team.
            </h2>
            <p class="text-text-secondary mt-3 text-sm leading-relaxed">
              Every channel managed in-house. No handoffs. No communication gaps. Just a unified team moving toward the same revenue goal.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            <a href={routes.servicesPerformanceAds.href()} class="group flex gap-4 p-6 rounded-2xl border border-surface-2 bg-white hover:border-primary/25 hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <i class="ph-fill ph-chart-line-up"></i>
              </div>
              <div>
                <h3 class="font-bold text-surface-dark0 group-hover:text-primary transition-colors mb-1">Performance Ads</h3>
                <p class="text-xs text-text-secondary leading-relaxed">Meta, Google Search &amp; Shopping campaigns built to hit your revenue KPIs — not impressions.</p>
              </div>
            </a>

            <a href={routes.servicesSocialMedia.href()} class="group flex gap-4 p-6 rounded-2xl border border-surface-2 bg-white hover:border-primary/25 hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <i class="ph-fill ph-heart"></i>
              </div>
              <div>
                <h3 class="font-bold text-surface-dark0 group-hover:text-primary transition-colors mb-1">Social Media</h3>
                <p class="text-xs text-text-secondary leading-relaxed">Content strategy, copywriting, scheduling, and community management across Instagram, TikTok, and LinkedIn.</p>
              </div>
            </a>

            <a href={routes.servicesProduction.href()} class="group flex gap-4 p-6 rounded-2xl border border-surface-2 bg-white hover:border-primary/25 hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <i class="ph-fill ph-film-slate"></i>
              </div>
              <div>
                <h3 class="font-bold text-surface-dark0 group-hover:text-primary transition-colors mb-1">Creative Production</h3>
                <p class="text-xs text-text-secondary leading-relaxed">Video ads, product photography, Reels, and static creatives — produced in-house and refreshed weekly.</p>
              </div>
            </a>

            <a href={routes.servicesWebSolutions.href()} class="group flex gap-4 p-6 rounded-2xl border border-surface-2 bg-white hover:border-primary/25 hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <i class="ph-fill ph-desktop"></i>
              </div>
              <div>
                <h3 class="font-bold text-surface-dark0 group-hover:text-primary transition-colors mb-1">Web &amp; Shopify</h3>
                <p class="text-xs text-text-secondary leading-relaxed">Fast, mobile-first Shopify stores and landing pages built to convert — with COD checkout flows included.</p>
              </div>
            </a>

            <a href={routes.servicesDigitalPr.href()} class="group flex gap-4 p-6 rounded-2xl border border-surface-2 bg-white hover:border-primary/25 hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <i class="ph-fill ph-megaphone"></i>
              </div>
              <div>
                <h3 class="font-bold text-surface-dark0 group-hover:text-primary transition-colors mb-1">Digital PR &amp; Influencers</h3>
                <p class="text-xs text-text-secondary leading-relaxed">Influencer gifting campaigns, media placements, and brand authority building across Pakistan.</p>
              </div>
            </a>

            <a href={routes.servicesDesignCopy.href()} class="group flex gap-4 p-6 rounded-2xl border border-surface-2 bg-white hover:border-primary/25 hover:shadow-md transition-all duration-300">
              <div class="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <i class="ph-fill ph-bezier-curve"></i>
              </div>
              <div>
                <h3 class="font-bold text-surface-dark0 group-hover:text-primary transition-colors mb-1">Design &amp; Copy</h3>
                <p class="text-xs text-text-secondary leading-relaxed">Brand visual systems, ad creative design, and conversion-focused copywriting for every touchpoint.</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ── CLIENT RESULTS ── */}
      <section class="py-20 bg-white border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <div class="flex justify-center mb-3"><PillBadge icon="ph-trophy" text="Client Results" /></div>
            <h2 class="text-3xl md:text-4xl font-black text-surface-dark0 tracking-tight">
              Numbers From Real Campaigns
            </h2>
            <p class="text-text-secondary mt-3 text-sm">Real brands, real numbers — from Pakistani market campaigns we've run.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div class="p-7 rounded-3xl border border-surface-2 bg-surface-1 flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div class="text-amber-400 text-sm">★★★★★</div>
              <p class="text-sm text-text-secondary leading-relaxed italic flex-grow">
                "Before BellBee, our Meta ROAS was sitting at 1.2x and we had no idea why. Within 8 weeks they restructured our entire ad account and creative strategy — we hit 4.1x. That's a real number, not a target."
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-surface-2">
                <div>
                  <div class="font-bold text-sm text-surface-dark0">Sana M.</div>
                  <div class="text-xs text-text-secondary">Fashion Brand, Islamabad</div>
                </div>
                <span class="text-xs font-black px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">4.1x ROAS</span>
              </div>
            </div>

            <div class="p-7 rounded-3xl border border-surface-2 bg-surface-1 flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div class="text-amber-400 text-sm">★★★★★</div>
              <p class="text-sm text-text-secondary leading-relaxed italic flex-grow">
                "We had a Shopify store getting 3,000 visitors a month with almost zero sales. BellBee rebuilt the checkout for COD and set up abandoned cart flows — the first month after launch, we tripled our order volume."
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-surface-2">
                <div>
                  <div class="font-bold text-sm text-surface-dark0">Omar S.</div>
                  <div class="text-xs text-text-secondary">Supplements Brand, Lahore</div>
                </div>
                <span class="text-xs font-black px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10">3x Orders</span>
              </div>
            </div>

            <div class="p-7 rounded-3xl border border-surface-2 bg-surface-1 flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div class="text-amber-400 text-sm">★★★★★</div>
              <p class="text-sm text-text-secondary leading-relaxed italic flex-grow">
                "We'd been running Google Ads ourselves for two years and spending more than we needed to. BellBee cut our CPL by 40% in the first month and the lead quality actually improved at the same time."
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-surface-2">
                <div>
                  <div class="font-bold text-sm text-surface-dark0">Ayesha R.</div>
                  <div class="text-xs text-text-secondary">Real Estate Group, Rawalpindi</div>
                </div>
                <span class="text-xs font-black px-3 py-1.5 rounded-full bg-secondary/5 text-secondary border border-secondary/10">40% Lower CPL</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── LOCATION + CONTACT ── */}
      <section class="py-20 bg-surface-1 border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — Info */}
            <div>
              <div class="flex mb-4"><PillBadge icon="ph-map-pin" text="Visit Us" /></div>
              <h2 class="text-3xl font-black text-surface-dark0 mb-4">Talk to Us in Person</h2>
              <p class="text-text-secondary text-sm leading-relaxed mb-8">
                Our Islamabad office is open Mon–Fri, 9am to 6pm. You're welcome to drop in for a strategy session, a campaign review, or just to see who's actually running your account.
              </p>

              <div class="flex flex-col gap-4 mb-8">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center text-lg shrink-0 mt-0.5"><i class="ph-fill ph-map-pin"></i></div>
                  <div>
                    <div class="font-bold text-sm text-surface-dark0">Islamabad Office</div>
                    <div class="text-sm text-text-secondary">Office #204, Vista Building, I-8 Markaz, Islamabad — 44000</div>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center text-lg shrink-0"><i class="ph-fill ph-envelope"></i></div>
                  <div>
                    <div class="font-bold text-sm text-surface-dark0">Email</div>
                    <div class="text-sm text-text-secondary">hello@bellbeemedia.com</div>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center text-lg shrink-0"><i class="ph-fill ph-phone"></i></div>
                  <div>
                    <div class="font-bold text-sm text-surface-dark0">Call or WhatsApp</div>
                    <div class="text-sm text-text-secondary">+92 370 190 2120</div>
                  </div>
                </div>
              </div>

              <div class="p-5 rounded-2xl bg-white border border-surface-2">
                <div class="flex items-center gap-2 mb-2">
                  <i class="ph-fill ph-check-circle text-secondary"></i>
                  <span class="font-bold text-sm text-surface-dark0">Pakistan Market Depth</span>
                </div>
                <p class="text-xs text-text-secondary leading-relaxed">
                  We know Pakistani e-commerce inside out — COD logistics, courier integrations, Urdu-English creative strategy, low-CPM local targeting, and cross-border campaigns for brands expanding into GCC and beyond.
                </p>
              </div>
            </div>

            {/* Right — Second form */}
            <div>
              <div class="bg-white border border-surface-2 rounded-3xl p-7 shadow-md relative overflow-hidden">
                <div class="absolute -top-12 -right-12 w-36 h-36 bg-primary/5 rounded-full blur-[50px] pointer-events-none"></div>

                {submitted ? (
                  <div class="relative z-10 flex flex-col items-center text-center py-6">
                    <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mb-4">
                      <i class="ph-fill ph-check-circle"></i>
                    </div>
                    <h2 class="text-xl font-black text-surface-dark0 mb-2">Got It — Thank You!</h2>
                    <p class="text-sm text-text-secondary mb-5 leading-relaxed">
                      {result?.message ?? "We'll be in touch within 4 hours. You can also book a time slot directly on our calendar:"}
                    </p>
                    {isEmbeddable ? (
                      <div class="w-full rounded-xl overflow-hidden border border-surface-2 min-h-[340px] mb-4">
                        <iframe src={bookingUrl} width="100%" height="340" frameborder="0" style="height:340px;"></iframe>
                      </div>
                    ) : (
                      <a href={bookingUrl} target="_blank" rel="noopener noreferrer" class="w-full py-3.5 bg-primary text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 hover:bg-primary-light transition-all mb-4">
                        Book a Call <i class="ph ph-arrow-square-out"></i>
                      </a>
                    )}
                    <a href="/" class="text-xs text-primary font-bold hover:underline">← Back to Home</a>
                  </div>
                ) : (
                  <div class="relative z-10">
                    <h3 class="text-xl font-black text-surface-dark0 mb-1">Send Us a Message</h3>
                    <p class="text-xs text-text-secondary mb-5">We reply within 4 business hours.</p>

                    {result && !result.success && (
                      <div class="p-3 mb-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <i class="ph ph-warning-circle"></i> {result.message}
                      </div>
                    )}

                    <form method="post" action="/locations/pakistan/islamabad" class="flex flex-col gap-3">
                      <div class="grid grid-cols-2 gap-3">
                        <div class="flex flex-col gap-1">
                          <label for="fullName2" class="text-xs font-semibold text-surface-dark2 uppercase tracking-wide">Name *</label>
                          <input type="text" id="fullName2" name="fullName" required placeholder="Ali Khan" class="px-3.5 py-2.5 rounded-xl border-2 border-surface-2 bg-white focus:outline-none focus:border-primary transition-all text-sm text-surface-dark0" />
                        </div>
                        <div class="flex flex-col gap-1">
                          <label for="phone2" class="text-xs font-semibold text-surface-dark2 uppercase tracking-wide">WhatsApp</label>
                          <input type="tel" id="phone2" name="phone" placeholder="+92 300 ..." class="px-3.5 py-2.5 rounded-xl border-2 border-surface-2 bg-white focus:outline-none focus:border-primary transition-all text-sm text-surface-dark0" />
                        </div>
                      </div>
                      <div class="flex flex-col gap-1">
                        <label for="email2" class="text-xs font-semibold text-surface-dark2 uppercase tracking-wide">Email *</label>
                        <input type="email" id="email2" name="email" required placeholder="ali@yourbrand.com" class="px-3.5 py-2.5 rounded-xl border-2 border-surface-2 bg-white focus:outline-none focus:border-primary transition-all text-sm text-surface-dark0" />
                      </div>
                      <div class="flex flex-col gap-1">
                        <label for="details2" class="text-xs font-semibold text-surface-dark2 uppercase tracking-wide">What do you need help with?</label>
                        <textarea id="details2" name="details" rows={3} placeholder="Tell us about your brand and goals..." class="px-3.5 py-2.5 rounded-xl border-2 border-surface-2 bg-white focus:outline-none focus:border-primary transition-all resize-none text-sm text-surface-dark0"></textarea>
                      </div>
                      <button type="submit" class="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all text-sm flex items-center justify-center gap-2 group mt-1">
                        Get in Touch <span class="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </button>
                      <p class="text-center text-[10px] text-text-secondary">🔒 Your information is kept private.</p>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section class="py-20 bg-white border-b border-surface-2">
        <div class="container mx-auto px-4 max-w-3xl">
          <div class="text-center mb-10">
            <div class="flex justify-center mb-3"><PillBadge icon="ph-question" text="FAQ" /></div>
            <h2 class="text-3xl font-black text-surface-dark0 tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div class="flex flex-col gap-2">

            <details class="group bg-surface-1 border border-surface-2 rounded-2xl px-6 py-4 [&_summary::-webkit-details-marker]:hidden hover:border-primary/20 transition-all">
              <summary class="flex justify-between items-center font-semibold text-sm text-surface-dark0 list-none cursor-pointer">
                <h3 class="pr-4">Are you actually based in Islamabad?</h3>
                <i class="ph ph-caret-down text-primary shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-text-secondary text-sm leading-relaxed border-t border-surface-2 pt-3">
                Yes — our main office is at Office #204, Vista Building, I-8 Markaz, Islamabad. Our team works from here. You're welcome to visit for a strategy session or campaign review.
              </div>
            </details>

            <details class="group bg-surface-1 border border-surface-2 rounded-2xl px-6 py-4 [&_summary::-webkit-details-marker]:hidden hover:border-primary/20 transition-all">
              <summary class="flex justify-between items-center font-semibold text-sm text-surface-dark0 list-none cursor-pointer">
                <h3 class="pr-4">Do you work with brands outside Islamabad?</h3>
                <i class="ph ph-caret-down text-primary shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-text-secondary text-sm leading-relaxed border-t border-surface-2 pt-3">
                Absolutely. We work with brands across Pakistan — Lahore, Karachi, Rawalpindi, and elsewhere — as well as Pakistani businesses targeting international markets in GCC, UK, and North America.
              </div>
            </details>

            <details class="group bg-surface-1 border border-surface-2 rounded-2xl px-6 py-4 [&_summary::-webkit-details-marker]:hidden hover:border-primary/20 transition-all">
              <summary class="flex justify-between items-center font-semibold text-sm text-surface-dark0 list-none cursor-pointer">
                <h3 class="pr-4">What's your minimum engagement size?</h3>
                <i class="ph ph-caret-down text-primary shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-text-secondary text-sm leading-relaxed border-t border-surface-2 pt-3">
                We work with brands investing a minimum of Rs. 50,000/month in ad spend. Retainer structure depends on the services needed — we'll walk you through it on the audit call with no obligation.
              </div>
            </details>

            <details class="group bg-surface-1 border border-surface-2 rounded-2xl px-6 py-4 [&_summary::-webkit-details-marker]:hidden hover:border-primary/20 transition-all">
              <summary class="flex justify-between items-center font-semibold text-sm text-surface-dark0 list-none cursor-pointer">
                <h3 class="pr-4">How soon can we get started?</h3>
                <i class="ph ph-caret-down text-primary shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-text-secondary text-sm leading-relaxed border-t border-surface-2 pt-3">
                After the initial audit and onboarding, most campaigns go live within 10–14 business days. We spend the first two weeks on strategy, asset production, and tracking setup before spending a single rupee on ads.
              </div>
            </details>

            <details class="group bg-surface-1 border border-surface-2 rounded-2xl px-6 py-4 [&_summary::-webkit-details-marker]:hidden hover:border-primary/20 transition-all">
              <summary class="flex justify-between items-center font-semibold text-sm text-surface-dark0 list-none cursor-pointer">
                <h3 class="pr-4">Do you handle COD e-commerce specifically?</h3>
                <i class="ph ph-caret-down text-primary shrink-0 group-open:rotate-180 transition-transform duration-300"></i>
              </summary>
              <div class="mt-3 text-text-secondary text-sm leading-relaxed border-t border-surface-2 pt-3">
                Yes — COD is core to most Pakistani D2C businesses and we've built systems specifically for it. This includes Shopify checkout optimization, SMS confirmation flows, courier integrations, and strategies to reduce RTO rates.
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section class="py-20 bg-surface-dark0 text-white relative overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/15 rounded-full blur-[80px] pointer-events-none"></div>

        <div class="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <h2 class="text-3xl md:text-5xl font-black mb-4 leading-tight">
            Ready to work with a team<br />
            <span class="text-gradient">that's here in Islamabad?</span>
          </h2>
          <p class="text-white/60 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Drop us a message and we'll schedule a free 30-minute audit call. We'll take a look at your current setup and tell you exactly what we'd change — no fluff.
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <a href="#get-audit" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-surface-1 transition-all shadow-xl text-sm">
              Get Your Free Audit <i class="ph ph-arrow-up"></i>
            </a>
            <a href={`tel:+923701902120`} class="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/85 font-medium rounded-full hover:bg-white/8 transition-all text-sm">
              Call Us Now <i class="ph ph-phone"></i>
            </a>
          </div>
          <p class="text-white/30 text-xs mt-8">
            Vista Building, I-8 Markaz, Islamabad &nbsp;·&nbsp; hello@bellbeemedia.com &nbsp;·&nbsp; +92 370 190 2120
          </p>
        </div>
      </section>

    </Layout>
  )
}

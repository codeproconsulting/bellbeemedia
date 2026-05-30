import { Layout } from './layout.tsx'
import { PillBadge } from './shared.tsx'

export function GetProposalPage() {
  const serviceOptions = [
    { label: "Digital Marketing & SEO", value: "seo" },
    { label: "Social Media & Design", value: "social" },
    { label: "Branding & Visual Identity", value: "branding" },
    { label: "Website Design & Dev", value: "web" },
    { label: "Email Marketing Funnels", value: "email" },
    { label: "Full Digital Launch Package", value: "launch" }
  ];

  return () => (
    <Layout title="Get a Free Proposal | Bell Bee Media">
      <div class="bg-surface-1 min-h-screen pt-20 pb-24 relative overflow-hidden">
        {/* Dynamic Background Glows */}
        <div class="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-primary/5 blur-[120px] pointer-events-none" aria-hidden="true"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-secondary/5 blur-[120px] pointer-events-none" aria-hidden="true"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            
            {/* Left Column: Info & Value Props */}
            <div class="lg:col-span-5 flex flex-col justify-between py-6">
              <div>
                <div class="flex mb-6">
                  <PillBadge icon="ph-sparkle" text="Growth Consultation" />
                </div>
                <h1 class="text-5xl md:text-6xl font-bold text-surface-dark0 mb-6 tracking-tight leading-[1.1]">
                  Let's Scale <br/><span class="text-gradient">Your Brand.</span>
                </h1>
                <p class="text-xl text-text-secondary mb-10 leading-relaxed">
                  Share your business goals and our strategy engineers will craft a bespoke marketing and optimization proposal — no fluff, just results.
                </p>

                {/* Trust List */}
                <ul class="flex flex-col gap-6" aria-label="Why request a proposal">
                  <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold shrink-0">
                      ⚡
                    </span>
                    <div>
                      <h3 class="font-bold text-surface-dark0 text-sm">Response within 24hrs</h3>
                      <p class="text-xs text-text-secondary">We analyze and respond quickly</p>
                    </div>
                  </li>
                  <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-xl font-bold shrink-0">
                      🔒
                    </span>
                    <div>
                      <h3 class="font-bold text-surface-dark0 text-sm">Data Stays Private</h3>
                      <p class="text-xs text-text-secondary">Your details are safe and secure with us</p>
                    </div>
                  </li>
                  <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl font-bold shrink-0">
                      🚀
                    </span>
                    <div>
                      <h3 class="font-bold text-surface-dark0 text-sm">No Commitment</h3>
                      <p class="text-xs text-text-secondary">The growth audit is 100% free</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="pt-8 border-t border-surface-2/60 mt-12 text-sm text-text-secondary font-medium">
                Trusted by founders & marketing leads across multiple growth industries.
              </div>
            </div>
            
            {/* Right Column: Form Card */}
            <div class="lg:col-span-7">
              <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-surface-3/30 border border-surface-2 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
                
                <h2 class="text-3xl font-bold text-surface-dark0 mb-8 relative z-10">Request a growth proposal</h2>
                
                <form method="post" action="/get-proposal" class="flex flex-col gap-6 relative z-10">
                  {/* Name and Email Row */}
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="flex flex-col gap-2">
                      <label for="fullName" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Full Name *</label>
                      <input type="text" id="fullName" name="fullName" required placeholder="John Doe" class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0" />
                    </div>
                    <div class="flex flex-col gap-2">
                      <label for="email" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Email Address *</label>
                      <input type="email" id="email" name="email" required placeholder="you@company.com" class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0" />
                    </div>
                  </div>

                  {/* Company and Phone Row */}
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div class="flex flex-col gap-2">
                      <label for="company" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Company <span class="text-text-secondary/50 font-normal lowercase">(optional)</span></label>
                      <input type="text" id="company" name="company" placeholder="Your company name" class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0" />
                    </div>
                    <div class="flex flex-col gap-2">
                      <label for="phone" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Phone Number <span class="text-text-secondary/50 font-normal lowercase">(optional)</span></label>
                      <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0" />
                    </div>
                  </div>

                  {/* Service Choice Chips */}
                  <div class="flex flex-col gap-3">
                    <span class="text-sm font-bold text-surface-dark2 uppercase tracking-wide block">Services You're Interested In</span>
                    <div class="flex flex-wrap gap-3" role="group" aria-label="Select services">
                      {serviceOptions.map((opt) => (
                        <label class="cursor-pointer select-none">
                          <input type="checkbox" name="services" value={opt.value} class="peer hidden" />
                          <span class="border-2 border-surface-2 bg-surface-1 px-4 py-2.5 rounded-2xl text-sm font-medium hover:border-primary-light transition-all inline-block text-surface-dark1 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message Details */}
                  <div class="flex flex-col gap-2">
                    <label for="details" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Project Details <span class="text-text-secondary/50 font-normal lowercase">(optional)</span></label>
                    <textarea id="details" name="details" rows={4} placeholder="Tell us about your goals, timeline, budget..." class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all resize-none text-lg font-medium text-surface-dark0"></textarea>
                  </div>

                  {/* Actions */}
                  <div class="mt-4">
                    <button type="submit" class="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all shadow-lg shadow-primary/30 text-lg flex items-center justify-center gap-2 group">
                      Request Consultation <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                    <p class="text-center text-xs text-text-secondary mt-3">
                      🔒 We respect your privacy — no spam, ever.
                    </p>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  )
}

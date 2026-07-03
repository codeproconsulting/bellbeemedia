import { Layout } from './layout.tsx'
import { PillBadge } from './shared.tsx'
import { type Handle } from 'remix/ui'
import { type ProposalSubmissionResult } from '../data/wordpress.ts'
import { ProposalBookingWidget } from '../assets/get-proposal-widget.tsx'

interface GetProposalPageProps {
  result?: ProposalSubmissionResult
  bookingUrl?: string
}

export function GetProposalPage(handle: Handle<GetProposalPageProps>) {
  const { result, bookingUrl } = handle.props
  const submitted = result?.success === true

  return () => (
    <Layout title="Get a Free Proposal | Bell Bee Media" description="Share your goals and our team will build a bespoke digital marketing strategy for your brand — free, fast, and with no commitment." hideFooter={true}>
      <div class="bg-surface-1 min-h-screen lg:min-h-0 lg:h-[calc(100vh-80px)] flex items-center pt-20 pb-12 lg:py-0 relative overflow-hidden">
        {/* Dynamic Background Glows */}
        <div class="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-primary/5 blur-[120px] pointer-events-none" aria-hidden="true"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-secondary/5 blur-[120px] pointer-events-none" aria-hidden="true"></div>

        <div class="container mx-auto px-4 max-w-6xl relative z-10 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">

            {/* Left Column: Info & Value Props */}
            <div class="lg:col-span-5 flex flex-col justify-between py-2">
              <div>
                <div class="flex mb-4">
                  <PillBadge icon="ph-lightbulb" text="Bespoke Strategy" />
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-dark0 mb-4 tracking-tight leading-[1.1]">
                  Let's build your <br /><span class="text-gradient">growth blueprint.</span>
                </h1>
                <p class="text-lg md:text-xl text-text-secondary mb-6 leading-relaxed">
                  We don’t do templated marketing. Tell us where your brand is today and where you want it to go, and one of our strategists will personally craft a custom plan for you.
                </p>

                {/* Trust List */}
                <ul class="flex flex-col gap-4" aria-label="Why request a proposal">
                  <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-3.5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                      <i class="ph-fill ph-user-focus"></i>
                    </span>
                    <div>
                      <h3 class="font-bold text-surface-dark0 text-sm">Reviewed by a strategist</h3>
                      <p class="text-xs text-text-secondary">A real marketer audits your brand — no automated AI generators</p>
                    </div>
                  </li>
                  <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-3.5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-lg shrink-0">
                      <i class="ph-fill ph-compass"></i>
                    </span>
                    <div>
                      <h3 class="font-bold text-surface-dark0 text-sm">Tailored to your targets</h3>
                      <p class="text-xs text-text-secondary">We deep-dive into your actual competitors, budget, and audience gaps</p>
                    </div>
                  </li>
                  <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-3.5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-lg shrink-0">
                      <i class="ph-fill ph-shield-check"></i>
                    </span>
                    <div>
                      <h3 class="font-bold text-surface-dark0 text-sm">100% free, zero pressure</h3>
                      <p class="text-xs text-text-secondary">Our recommendations are yours to keep. No high-pressure sales calls</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="pt-6 border-t border-surface-2/60 mt-8 text-sm text-text-secondary font-medium">
                Real conversations with founders &amp; marketing teams who want to build something real.
              </div>
            </div>

            {/* Right Column: Interactive Proposal & Booking Widget */}
            <div class="lg:col-span-7 flex flex-col justify-center">
              <ProposalBookingWidget result={result} submitted={submitted} bookingUrl={bookingUrl} />
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

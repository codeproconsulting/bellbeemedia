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
    <Layout title="Get a Free Proposal | Bell Bee Media" description="Share your goals and our team will build a bespoke digital marketing strategy for your brand — free, fast, and with no commitment.">
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
                  Let's Scale <br /><span class="text-gradient">Your Brand.</span>
                </h1>
                <p class="text-xl text-text-secondary mb-10 leading-relaxed">
                  Share your business goals and our strategy team will craft a bespoke marketing proposal — no fluff, just results.
                </p>

                {/* Trust List */}
                <ul class="flex flex-col gap-6" aria-label="Why request a proposal">
                  <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold shrink-0">⚡</span>
                    <div>
                      <h3 class="font-bold text-surface-dark0 text-sm">Response within 24hrs</h3>
                      <p class="text-xs text-text-secondary">We analyse and respond quickly</p>
                    </div>
                  </li>
                  <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-xl font-bold shrink-0">🔒</span>
                    <div>
                      <h3 class="font-bold text-surface-dark0 text-sm">Data Stays Private</h3>
                      <p class="text-xs text-text-secondary">Your details are safe with us</p>
                    </div>
                  </li>
                  <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl font-bold shrink-0">🚀</span>
                    <div>
                      <h3 class="font-bold text-surface-dark0 text-sm">No Commitment</h3>
                      <p class="text-xs text-text-secondary">The growth consultation is 100% free</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="pt-8 border-t border-surface-2/60 mt-12 text-sm text-text-secondary font-medium">
                Trusted by founders &amp; marketing leads across multiple growth industries.
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

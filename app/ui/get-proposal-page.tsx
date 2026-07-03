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
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 items-stretch">

            {/* Hero Copy — top on mobile, left column header on desktop */}
            <div class="lg:col-span-5 lg:row-start-1 order-1 lg:order-1">
              <div class="flex mb-3">
                <PillBadge icon="ph-lightbulb" text="Bespoke Strategy" />
              </div>
              <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-surface-dark0 mb-3 tracking-tight leading-[1.1]">
                Your custom <br /><span class="text-gradient">growth strategy.</span>
              </h1>
              <p class="text-base md:text-lg text-text-secondary leading-relaxed">
                Share your goals and our strategists will personally craft a data-backed plan — no templates, no pressure.
              </p>
            </div>

            {/* Form Widget — middle on mobile, right column on desktop */}
            <div class="lg:col-span-7 lg:row-span-2 flex flex-col justify-center order-2 lg:order-2">
              <ProposalBookingWidget result={result} submitted={submitted} bookingUrl={bookingUrl} />
            </div>

            {/* Trust Features — bottom on mobile, left column footer on desktop */}
            <div class="lg:col-span-5 lg:row-start-2 flex flex-col justify-end order-3 lg:order-3">
              <ul class="flex flex-col gap-3" aria-label="Why request a proposal">
                <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-3.5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <span class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                    <i class="ph-fill ph-user-focus"></i>
                  </span>
                  <div>
                    <h3 class="font-bold text-surface-dark0 text-sm">Reviewed by a strategist</h3>
                    <p class="text-xs text-text-secondary">A real marketer audits your brand — no AI generators</p>
                  </div>
                </li>
                <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-3.5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <span class="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-lg shrink-0">
                    <i class="ph-fill ph-compass"></i>
                  </span>
                  <div>
                    <h3 class="font-bold text-surface-dark0 text-sm">Tailored to your market</h3>
                    <p class="text-xs text-text-secondary">Deep-dive into your competitors, budget & audience gaps</p>
                  </div>
                </li>
                <li class="flex items-center gap-4 bg-white/60 backdrop-blur border border-surface-2 p-3.5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <span class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-lg shrink-0">
                    <i class="ph-fill ph-shield-check"></i>
                  </span>
                  <div>
                    <h3 class="font-bold text-surface-dark0 text-sm">100% free, zero pressure</h3>
                    <p class="text-xs text-text-secondary">Your strategy is yours to keep — no sales calls, no commitment</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

import { Layout } from '../layout.tsx'
import { PillBadge } from '../shared.tsx'
import { routes } from '../../routes.ts'

export function ProductionPage() {
  return () => (
    <Layout
      title="Video & Photo Production Services | Bell Bee Media"
      description="Elevate your brand with Bell Bee Media's professional video and photo production. From brand films to product shoots, we create high-impact visual content that converts."
    >
      {/* Hero */}
      <section class="relative bg-gradient-to-br from-red-900 via-red-700 to-red-500 pt-28 pb-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_60%,#fff_0%,transparent_60%)]" />
        <div class="container mx-auto px-4 max-w-6xl relative z-10">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
              <div class="flex mb-6">
                <span class="pill-badge bg-white/10 text-white border-white/20">
                  <i class="ph-fill ph-play text-white" /> Video & Photo Production
                </span>
              </div>
              <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Video & Photo Production That Converts
              </h1>
              <p class="text-xl text-red-100 leading-relaxed mb-8 max-w-xl">
                From brand films and product videos to social-first content and photography, we produce high-quality visual assets designed to stop the scroll and drive action.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-900 font-bold rounded-full hover:bg-red-50 transition-colors shadow-xl">
                  Get a Production Quote <i class="ph ph-arrow-right" />
                </a>
                <a href={routes.services.href()} class="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                  All Services
                </a>
              </div>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="w-72 h-72 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                <i class="ph-fill ph-play text-white text-[120px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section class="bg-white border-b border-surface-2 py-12">
        <div class="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox value="500+" label="Videos Produced" />
          <StatBox value="12M+" label="Total Views Generated" />
          <StatBox value="4K" label="Production Quality" />
          <StatBox value="48h" label="Turnaround Available" />
        </div>
      </section>

      {/* Overview */}
      <section class="py-24 bg-surface-1">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div class="flex mb-4"><PillBadge icon="ph-camera" text="What We Produce" /></div>
              <h2 class="font-heading text-4xl font-bold text-surface-dark0 mb-6">Full-Service Production Studio for Digital Brands</h2>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                Great marketing starts with great content. Our production team handles everything from pre-production planning and scripting to on-set direction, post-production editing, motion graphics, and platform-optimised delivery.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed mb-4">
                We specialise in digital-first content — short-form video for TikTok and Reels, long-form brand films, e-commerce product photography, testimonial videos, and explainer animations.
              </p>
              <p class="text-lg text-text-secondary leading-relaxed">
                Our work is built for conversion, not just aesthetics. Every frame is crafted with your marketing goals and target audience in mind.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <ServiceFeatureCard icon="ph-film-reel" color="red" title="Brand Films" desc="Cinematic storytelling that communicates your brand's mission, values, and personality." />
              <ServiceFeatureCard icon="ph-device-mobile-camera" color="orange" title="Social Content" desc="Vertical-first, thumb-stopping videos and photos optimised for Instagram, TikTok, and YouTube Shorts." />
              <ServiceFeatureCard icon="ph-shopping-bag" color="yellow" title="Product Photography" desc="Studio and lifestyle product imagery that elevates your e-commerce listings and ads." />
              <ServiceFeatureCard icon="ph-presentation-chart" color="blue" title="Explainer Videos" desc="Animated or live-action explainer videos that simplify complex products and drive conversions." />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-star" text="Our Edge" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Why Our Production Drives Better Marketing Results</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard icon="ph-strategy" color="red" title="Strategy-Led Creative" desc="Every piece of content is planned around your marketing funnel, not just visual aesthetics." />
            <BenefitCard icon="ph-lightning" color="orange" title="Fast Turnaround" desc="48–72 hour editing turnarounds available for urgent campaign needs without sacrificing quality." />
            <BenefitCard icon="ph-devices" color="blue" title="Multi-Platform Delivery" desc="We export in every format required — 9:16, 16:9, 1:1 — for all platforms out of the box." />
            <BenefitCard icon="ph-subtitles" color="purple" title="Captions & Accessibility" desc="All videos include accurate captions and subtitles for accessibility and silent autoplay performance." />
            <BenefitCard icon="ph-arrows-counter-clockwise" color="emerald" title="Unlimited Revisions" desc="We iterate until you love it. Our revision process is smooth, fast, and collaborative." />
            <BenefitCard icon="ph-lock" color="gray" title="Full IP Ownership" desc="You own every asset we produce — no licensing fees, no usage restrictions, forever." />
          </div>
        </div>
      </section>

      {/* Process */}
      <section class="py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-path" text="Our Process" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">From Brief to Final Delivery</h2>
          </div>
          <div class="flex flex-col gap-8">
            <ProcessStep num={1} title="Creative Brief & Strategy" desc="We align on your objectives, target audience, platform requirements, and creative direction before a single frame is shot." />
            <ProcessStep num={2} title="Pre-Production Planning" desc="Scripting, storyboarding, location scouting, talent casting, and shoot day scheduling — all managed by our team." />
            <ProcessStep num={3} title="Production Day" desc="Our experienced crew captures your content with professional camera, lighting, and audio equipment for broadcast-quality results." />
            <ProcessStep num={4} title="Post-Production & Editing" desc="Expert editing, colour grading, motion graphics, licensed music, and sound design bring the raw footage to life." />
            <ProcessStep num={5} title="Delivery & Distribution Ready" desc="Final assets are exported in all required formats and dimensions, ready for upload, advertising, or embedding on your site." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 max-w-3xl">
          <div class="text-center mb-16">
            <div class="flex justify-center mb-4"><PillBadge icon="ph-question" text="FAQs" /></div>
            <h2 class="font-heading text-4xl font-bold text-surface-dark0">Production — FAQs</h2>
          </div>
          <div class="flex flex-col gap-6">
            <FaqItem q="Do you shoot on location or in-studio?" a="Both. We operate a fully-equipped in-house studio and regularly shoot on location across the UK and internationally. Location shoots are quoted separately to cover travel and logistics." />
            <FaqItem q="How long does a typical video project take?" a="A standard social media video takes 3–5 business days from shoot to final delivery. Brand films and longer-form content typically take 2–4 weeks to complete." />
            <FaqItem q="Do you provide actors, voiceovers, and music?" a="Yes. We work with a network of professional voice artists, actors, and on-screen talent, and we have access to extensive libraries of royalty-free licensed music." />
            <FaqItem q="Can you repurpose our existing footage into new content?" a="Absolutely. If you have existing video footage or photography, we can edit, reformat, and repurpose it into fresh content for different platforms and campaigns." />
            <FaqItem q="What camera and equipment do you use?" a="We shoot in 4K using professional cinema cameras (Sony FX series, RED, ARRI). Our kit includes professional lighting rigs, gimbals, drones, and broadcast audio equipment." />
          </div>
        </div>
      </section>

      <CtaSection headline="Create Content That Commands Attention" sub="Tell us about your next production project and get a tailored quote within 24 hours." />
    </Layout>
  )
}

function StatBox() {
  return ({ value, label }: { value: string; label: string }) => (
    <div class="flex flex-col items-center">
      <span class="font-heading text-4xl font-bold text-red-600 mb-1">{value}</span>
      <span class="text-text-secondary text-sm">{label}</span>
    </div>
  )
}

function ServiceFeatureCard() {
  return ({ icon, color, title, desc }: { icon: string; color: string; title: string; desc: string }) => (
    <div class={`p-5 rounded-2xl border border-surface-2 bg-${color}-50 hover:shadow-lg transition-shadow`}>
      <i class={`ph-fill ${icon} text-${color}-600 text-2xl mb-3 block`} />
      <h3 class="font-bold text-surface-dark0 mb-2">{title}</h3>
      <p class="text-sm text-text-secondary leading-relaxed">{desc}</p>
    </div>
  )
}

function BenefitCard() {
  return ({ icon, color, title, desc }: { icon: string; color: string; title: string; desc: string }) => (
    <div class="flex gap-5 p-6 rounded-2xl border border-surface-2 bg-surface-1 hover:shadow-lg transition-shadow group">
      <div class={`w-12 h-12 rounded-xl bg-${color}-50 text-${color}-600 flex items-center justify-center shrink-0 text-2xl group-hover:scale-110 transition-transform`}>
        <i class={`ph-fill ${icon}`} />
      </div>
      <div>
        <h3 class="font-bold text-surface-dark0 mb-2">{title}</h3>
        <p class="text-sm text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function ProcessStep() {
  return ({ num, title, desc }: { num: number; title: string; desc: string }) => (
    <div class="flex gap-6 items-start">
      <div class="w-12 h-12 rounded-full bg-red-600 text-white font-heading font-bold text-lg flex items-center justify-center shrink-0 shadow-md shadow-red-200">
        {num}
      </div>
      <div class="pt-2">
        <h3 class="font-bold text-xl text-surface-dark0 mb-2">{title}</h3>
        <p class="text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function FaqItem() {
  return ({ q, a }: { q: string; a: string }) => (
    <div class="p-6 rounded-2xl border border-surface-2 bg-surface-1">
      <h3 class="font-bold text-surface-dark0 mb-3 flex items-start gap-2">
        <i class="ph-fill ph-question text-primary mt-0.5 shrink-0" /> {q}
      </h3>
      <p class="text-text-secondary leading-relaxed pl-6">{a}</p>
    </div>
  )
}

function CtaSection() {
  return ({ headline, sub }: { headline: string; sub: string }) => (
    <section class="py-24 bg-gradient-to-br from-red-900 via-red-700 to-red-500">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6">{headline}</h2>
        <p class="text-xl text-red-100 mb-10">{sub}</p>
        <a href={routes.getProposal.href()} class="inline-flex items-center gap-2 px-10 py-5 bg-white text-red-900 font-bold text-lg rounded-full hover:bg-red-50 transition-colors shadow-2xl">
          Get a Production Quote <i class="ph ph-arrow-right" />
        </a>
      </div>
    </section>
  )
}

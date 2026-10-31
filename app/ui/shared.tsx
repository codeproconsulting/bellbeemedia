import { type RemixNode } from 'remix/ui'
import { routes } from '../routes.ts'

export function PillBadge() {
  return ({ icon, text, dark }: { icon: string, text: string, dark?: boolean }) => (
    <span class={`pill-badge ${
      dark 
        ? 'bg-white/10 text-white border-white/15' 
        : 'bg-primary/5 text-primary border-primary/10'
    }`}>
      <i class={`ph-fill ${icon} ${dark ? 'text-white' : 'text-primary'}`}></i> {text}
    </span>
  )
}

/* ─────────────────────────────────────────
   STATS BAR
───────────────────────────────────────── */
export function StatsBar() {
  return () => (
    <section class="py-16 bg-gradient-to-r from-[#071324] via-primary to-[#071324] border-y border-white/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
      <div class="container mx-auto px-4 max-w-5xl relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-stagger-group>
          <div class="flex flex-col items-center gap-2 group" data-stagger-item>
            <span data-count="5" class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">5</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Expert Specialists</span>
          </div>
          <div class="flex flex-col items-center gap-2 group" data-stagger-item>
            <span data-count="5+" class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">5+</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Years Experience</span>
          </div>
          <div class="flex flex-col items-center gap-2 group" data-stagger-item>
            <span data-count="3.4x" class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">3.4x</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Avg. ROAS Delivered</span>
          </div>
          <div class="flex flex-col items-center gap-2 group" data-stagger-item>
            <span data-count="100+" class="text-4xl md:text-5xl font-black text-white group-hover:text-secondary-light transition-colors duration-300">100+</span>
            <span class="text-sm font-medium text-white/60 uppercase tracking-widest">Campaigns Delivered</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   SERVICES GRID
───────────────────────────────────────── */
const services = [
  {
    icon: 'ph-heart',
    title: 'Social Media Management',
    desc: 'Organic platform strategies, copy, native vertical video, community management, and audience growth across channels.',
    tags: ['Instagram', 'TikTok', 'LinkedIn'],
    href: routes.servicesSocialMedia.href(),
  },
  {
    icon: 'ph-chart-line-up',
    title: 'Performance Marketing',
    desc: 'Paid media buying across Meta, Google Search, Shopping, and Programmatic. We write, execute, test, and optimize in-house.',
    tags: ['Google Ads', 'Meta Ads', 'Retargeting'],
    href: routes.servicesPerformanceAds.href(),
  },
  {
    icon: 'ph-megaphone',
    title: 'Digital PR & Influencer',
    desc: 'Curated influencer gifting/campaign partnerships and securing strategic press coverage to build authority and drive referral traffic.',
    tags: ['Media Coverage', 'Influencer Gifting', 'Brand Colabs'],
    href: routes.servicesDigitalPr.href(),
  },
  {
    icon: 'ph-film-slate',
    title: 'Creative Production',
    desc: 'High-quality video shoots, scroll-stopping social ad creatives, product photography, and motion graphics.',
    tags: ['Video Ads', 'Reels & Shorts', 'Photography'],
    href: routes.servicesProduction.href(),
  },
  {
    icon: 'ph-desktop',
    title: 'Web & Landing Pages',
    desc: 'High-speed, mobile-first websites, Shopify stores, and custom landing pages optimized for maximum conversion rate.',
    tags: ['CRO', 'SEO', 'E-commerce'],
    href: routes.servicesWebSolutions.href(),
  },
  {
    icon: 'ph-bezier-curve',
    title: 'Design & Copywriting',
    desc: 'Visual brand guidelines, digital ad asset designs, and persuasive sales copywriting for email flows and landing pages.',
    tags: ['Branding', 'Ad Creatives', 'UX Copy'],
    href: routes.servicesDesignCopy.href(),
  },
]

export function ServicesGrid() {
  return () => (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <a href={s.href} class="group relative rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col gap-5 bg-white border border-surface-2 hover:shadow-xl hover:border-primary/20">
          {/* Subtle corner glow on hover */}
          <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"></div>

          {/* Icon */}
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0 bg-primary/5 text-primary group-hover:scale-110 transition-all duration-300">
            <i class={`ph-fill ${s.icon}`}></i>
          </div>

          {/* Content */}
          <div class="flex flex-col gap-3 flex-grow">
            <h3 class="text-xl font-bold transition-colors duration-300 text-surface-dark0 group-hover:text-primary">{s.title}</h3>
            <p class="text-sm leading-relaxed text-text-secondary">{s.desc}</p>
          </div>

          {/* Tags */}
          <div class="flex flex-wrap gap-2 mt-auto">
            {s.tags.map((tag) => (
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-primary/5 text-primary">{tag}</span>
            ))}
          </div>

          {/* Arrow CTA */}
          <div class="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 mt-1 text-text-secondary group-hover:text-primary">
            Learn more <i class="ph ph-arrow-right group-hover:translate-x-1 transition-transform duration-300 inline-block"></i>
          </div>
        </a>
      ))}
    </div>
  )
}

export function ProcessSection() {
  return () => (
    <section
      id="process-timeline-section"
      class="py-14 md:py-18 text-white relative overflow-hidden"
      style="background-color: #030d1a !important; background-image: radial-gradient(ellipse 70% 40% at 50% 15%, rgba(27, 117, 188, 0.16) 0%, transparent 70%), radial-gradient(ellipse 60% 30% at 50% 85%, rgba(247, 148, 29, 0.12) 0%, transparent 70%) !important;"
    >
      <style>{`
        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr 54px 1fr;
          align-items: center;
          column-gap: 20px;
          width: 100%;
          position: relative;
          z-index: 5;
        }
        .timeline-col-left {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
          position: relative;
          z-index: 5;
        }
        .timeline-col-right {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          position: relative;
          z-index: 5;
        }
        .timeline-col-center {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 15 !important;
        }
        .outline-num-orange {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 48px;
          font-weight: 900;
          line-height: 1;
          -webkit-text-stroke: 1.8px rgba(247, 148, 29, 0.45);
          color: transparent;
          user-select: none;
        }
        .outline-num-blue {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 48px;
          font-weight: 900;
          line-height: 1;
          -webkit-text-stroke: 1.8px rgba(27, 117, 188, 0.55);
          color: transparent;
          user-select: none;
        }
        .process-node {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #ffffff;
          border: 4px solid #030d1a;
          position: relative;
          z-index: 15 !important;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
        }
        .process-node.is-active {
          transform: scale(1.14);
        }
        .process-node-orange {
          background-color: #f7941d !important;
          box-shadow: 0 4px 16px rgba(247, 148, 29, 0.4);
        }
        .process-node-orange.is-active {
          box-shadow: 0 0 26px rgba(247, 148, 29, 0.95);
        }
        .process-node-blue {
          background-color: #1b75bc !important;
          box-shadow: 0 4px 16px rgba(27, 117, 188, 0.45);
        }
        .process-node-blue.is-active {
          box-shadow: 0 0 26px rgba(27, 117, 188, 0.95);
        }

        .timeline-spine-progress {
          transition: height 0.08s linear;
        }

        @media (max-width: 640px) {
          .timeline-grid {
            grid-template-columns: 46px 1fr !important;
            column-gap: 14px !important;
          }
          .timeline-col-center {
            grid-column: 1 !important;
            grid-row: 1 !important;
          }
          .timeline-col-left, .timeline-col-right {
            grid-column: 2 !important;
            align-items: flex-start !important;
            text-align: left !important;
          }
          .timeline-hollow-num {
            display: none !important;
          }
          .timeline-spine-track, .timeline-spine-progress, .timeline-spine-cap {
            left: 23px !important;
          }
        }
      `}</style>

      <div class="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight leading-[1.12]">
            From brief to<br />
            <span style="color: #78b4cc;">break</span><span style="color: #f7941d;">through</span>
          </h2>
          <p class="text-slate-400 leading-relaxed text-sm sm:text-base max-w-xl mx-auto">
            We follow a highly-structured, data-proven execution plan to transition your brand to predictable, compounding growth.
          </p>
        </div>

        {/* Central Vertical Timeline Container (Compact & Close to Line) */}
        <div
          id="process-timeline-spine-wrapper"
          style="max-width: 680px; margin: 0 auto; position: relative; padding: 10px 0;"
        >
          {/* Top Orange Cap Line (Above Node 1) */}
          <div
            id="process-timeline-cap"
            class="timeline-spine-cap"
            style="position: absolute; left: 50%; top: 12px; height: 18px; width: 2.5px; transform: translateX(-50%); background: #f7941d; box-shadow: 0 0 10px rgba(247, 148, 29, 0.85); border-radius: 2px; z-index: 1;"
          ></div>

          {/* Base Inactive Track (from center of Node 1 to center of Node 4) - Orange Translucent Spine */}
          <div
            id="process-timeline-track"
            class="timeline-spine-track"
            style="position: absolute; left: 50%; top: 36px; bottom: 36px; width: 2.5px; transform: translateX(-50%); background: rgba(247, 148, 29, 0.35); box-shadow: 0 0 8px rgba(247, 148, 29, 0.22); z-index: 1;"
          ></div>

          {/* Dynamic Scroll-driven Glowing Golden-Orange Progress Line (Starts at Node 1 center - Runs BEHIND icon nodes) */}
          <div
            id="process-timeline-progress-line"
            class="timeline-spine-progress"
            style="position: absolute; left: 50%; top: 36px; width: 4px; height: 0px; transform: translateX(-50%); background: linear-gradient(180deg, #f7941d 0%, #fbb040 65%, #ffffff 100%); box-shadow: 0 0 14px 2px #f7941d, 0 0 28px 5px rgba(251, 176, 64, 0.85); z-index: 2; pointer-events: none;"
          >
            {/* Glowing leading head tip */}
            <div
              class="timeline-progress-head"
              style="position: absolute; bottom: -5px; left: 50%; transform: translateX(-50%); width: 10px; height: 10px; border-radius: 50%; background: #ffffff; box-shadow: 0 0 10px 2px #f7941d, 0 0 20px 4px #fbb040; opacity: 0; transition: opacity 0.2s ease; z-index: 2;"
            ></div>
          </div>

          {/* Timeline Steps (Placed ABOVE the spine line at z-index: 10 so the line passes cleanly behind nodes) */}
          <div style="display: flex; flex-direction: column; gap: 44px; position: relative; z-index: 10;">
            {/* Step 01 (Week 1 - Left content, Center node, Right outline num) */}
            <div class="timeline-grid">
              {/* Left Column: Content */}
              <div class="timeline-col-left">
                <span style="display: inline-block; padding: 3px 12px; border-radius: 9999px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(247, 148, 29, 0.15); color: #fbb040; border: 1px solid rgba(247, 148, 29, 0.45); margin-bottom: 6px;">
                  WEEK 1
                </span>
                <h3 style="font-size: 20px; font-weight: 800; color: #ffffff; margin-bottom: 6px; line-height: 1.25;">
                  Discovery &amp; Audit
                </h3>
                <p style="font-size: 12.5px; color: #94a3b8; line-height: 1.55; max-width: 290px; margin: 0;">
                  We audit your brand vision, analyze competitor gaps, and find leverage points to establish a solid baseline.
                </p>
              </div>

              {/* Center Node */}
              <div class="timeline-col-center">
                <div class="process-node process-node-orange process-step-node" data-step="1">
                  <i class="ph-bold ph-magnifying-glass"></i>
                </div>
              </div>

              {/* Right Column: Outline Number 01 */}
              <div class="timeline-hollow-num" style="display: flex; align-items: center; justify-content: flex-start;">
                <span class="outline-num-orange">01</span>
              </div>
            </div>

            {/* Step 02 (Week 1–2 - Left outline num, Center node, Right content) */}
            <div class="timeline-grid">
              {/* Left Column: Outline Number 02 */}
              <div class="timeline-hollow-num" style="display: flex; align-items: center; justify-content: flex-end;">
                <span class="outline-num-blue">02</span>
              </div>

              {/* Center Node */}
              <div class="timeline-col-center">
                <div class="process-node process-node-blue process-step-node" data-step="2">
                  <i class="ph-bold ph-compass"></i>
                </div>
              </div>

              {/* Right Column: Content */}
              <div class="timeline-col-right">
                <span style="display: inline-block; padding: 3px 12px; border-radius: 9999px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(27, 117, 188, 0.18); color: #78b4cc; border: 1px solid rgba(27, 117, 188, 0.45); margin-bottom: 6px;">
                  WEEK 1–2
                </span>
                <h3 style="font-size: 20px; font-weight: 800; color: #ffffff; margin-bottom: 6px; line-height: 1.25;">
                  Strategic Blueprint
                </h3>
                <p style="font-size: 12.5px; color: #94a3b8; line-height: 1.55; max-width: 290px; margin: 0;">
                  We map out a custom 30/60/90-day growth roadmap, KPI framework, and dynamic budget allocation.
                </p>
              </div>
            </div>

            {/* Step 03 (Week 2–3 - Left content, Center node, Right outline num) */}
            <div class="timeline-grid">
              {/* Left Column: Content */}
              <div class="timeline-col-left">
                <span style="display: inline-block; padding: 3px 12px; border-radius: 9999px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(247, 148, 29, 0.15); color: #fbb040; border: 1px solid rgba(247, 148, 29, 0.45); margin-bottom: 6px;">
                  WEEK 2–3
                </span>
                <h3 style="font-size: 20px; font-weight: 800; color: #ffffff; margin-bottom: 6px; line-height: 1.25;">
                  Execution &amp; Launch
                </h3>
                <p style="font-size: 12.5px; color: #94a3b8; line-height: 1.55; max-width: 290px; margin: 0;">
                  Our creative and technical teams produce ad creatives, set up tracking QA, and go live.
                </p>
              </div>

              {/* Center Node */}
              <div class="timeline-col-center">
                <div class="process-node process-node-orange process-step-node" data-step="3">
                  <i class="ph-bold ph-rocket-launch"></i>
                </div>
              </div>

              {/* Right Column: Outline Number 03 */}
              <div class="timeline-hollow-num" style="display: flex; align-items: center; justify-content: flex-start;">
                <span class="outline-num-orange">03</span>
              </div>
            </div>

            {/* Step 04 (Ongoing - Left outline num, Center node, Right content) */}
            <div class="timeline-grid">
              {/* Left Column: Outline Number 04 */}
              <div class="timeline-hollow-num" style="display: flex; align-items: center; justify-content: flex-end;">
                <span class="outline-num-blue">04</span>
              </div>

              {/* Center Node with Glowing Outer Pulse Ring */}
              <div class="timeline-col-center" style="position: relative;">
                <div style="position: absolute; width: 70px; height: 70px; border-radius: 50%; background: rgba(27, 117, 188, 0.25); animation: pulse 2s infinite ease-in-out; pointer-events: none;"></div>
                <div class="process-node process-node-blue process-step-node" data-step="4" style="position: relative; z-index: 15;">
                  <i class="ph-bold ph-chart-line-up"></i>
                </div>
              </div>

              {/* Right Column: Content */}
              <div class="timeline-col-right">
                <span style="display: inline-block; padding: 3px 12px; border-radius: 9999px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(27, 117, 188, 0.18); color: #78b4cc; border: 1px solid rgba(27, 117, 188, 0.45); margin-bottom: 6px;">
                  ONGOING
                </span>
                <h3 style="font-size: 20px; font-weight: 800; color: #ffffff; margin-bottom: 6px; line-height: 1.25;">
                  Optimize &amp; Scale
                </h3>
                <p style="font-size: 12.5px; color: #94a3b8; line-height: 1.55; max-width: 290px; margin: 0;">
                  We run creative A/B tests, analyze performance metrics daily, and scale successful campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

/* ─────────────────────────────────────────
   TESTIMONIALS SECTION (Wall of Love)
───────────────────────────────────────── */
interface WallTestimonial {
  name: string
  role: string
  company: string
  theme: 'blue' | 'orange'
  content: RemixNode
}

const sevenTestimonials: WallTestimonial[] = [
  {
    name: 'Oliver Smith',
    role: 'Founder',
    company: 'D2C Apparel',
    theme: 'blue',
    content: (
      <>
        BellBee didn't just run our ads — they rewired how we think about digital growth. Within 90 days, our <strong>CAC dropped by 48%</strong> and <strong>ROAS reached 4.5x</strong>. Truly our best strategic growth partner.
      </>
    ),
  },
  {
    name: 'Emily Wilson',
    role: 'CMO',
    company: 'Bloom Nutrition',
    theme: 'orange',
    content: (
      <>
        Our paid acquisition was bleeding money before BellBee took over. They restructured our entire funnel — <strong>CAC dropped 42% in month one</strong> and we hit our <strong>highest revenue quarter on record</strong>.
      </>
    ),
  },
  {
    name: 'Harry Taylor',
    role: 'E-commerce Director',
    company: 'Verve Health',
    theme: 'blue',
    content: (
      <>
        We went from 12K to <strong>280K followers in 6 months</strong>. More importantly, those followers convert into buyers — our <strong>DM-to-sale rate is 22%</strong>! World-class creative execution.
      </>
    ),
  },
  {
    name: 'Sophie Davies',
    role: 'Founder',
    company: 'Luxe Living UK',
    theme: 'orange',
    content: (
      <>
        Just checked our Shopify dashboard — generated <strong>£340k in 90 days</strong> from Meta & Google Ads alone. Working with BellBee is <strong>the single best growth decision</strong> we made this year.
      </>
    ),
  },
  {
    name: 'Lukas Weber',
    role: 'Managing Partner',
    company: 'Aura Ventures',
    theme: 'blue',
    content: (
      <>
        The transparency alone is <strong>worth everything</strong>. For the first time, our executive team knows <strong>exactly which campaigns drive profit</strong> and why. 100x better reporting than any agency.
      </>
    ),
  },
  {
    name: 'Anna Fischer',
    role: 'Brand Lead',
    company: 'Kova Skincare',
    theme: 'orange',
    content: (
      <>
        Switched from a large London agency and the difference is <strong>night and day</strong>. BellBee understood our business within days and delivered <strong>measurable revenue impact from week one</strong>.
      </>
    ),
  },
  {
    name: 'Leon Schneider',
    role: 'Head of Growth',
    company: 'NeoTech Labs',
    theme: 'blue',
    content: (
      <>
        Their creative production team is <strong>unmatched</strong>. The video ads and scroll-stopping hooks cut our <strong>CPA in half while doubling our CTR</strong>. Genuinely obsessed with these results.
      </>
    ),
  },
]

function RedPinHead() {
  return () => (
    <div class="absolute -top-3.5 right-6 sm:right-7 w-7 h-7 sm:w-8 sm:h-8 z-20 pointer-events-none select-none">
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]"
      >
        {/* 1. Cast shadow on the paper */}
        <ellipse cx="18" cy="24" rx="12" ry="5" fill="url(#sharedPinShadow)" />

        {/* 2. Base flange pressed right against the wall/card */}
        <ellipse cx="18" cy="20" rx="9" ry="4" fill="#991b1b" />

        {/* 3. Cylindrical body of the head */}
        <path
          d="M9.5 15 C9.5 18 13.2 20 18 20 C22.8 20 26.5 18 26.5 15 L26.5 11.5 C26.5 14.5 22.8 16.5 18 16.5 C13.2 16.5 9.5 14.5 9.5 11.5 Z"
          fill="url(#sharedPinStem)"
        />

        {/* 4. Top cap head (seen pushed straight into the wall) */}
        <ellipse cx="18" cy="11.5" rx="8.5" ry="5.5" fill="url(#sharedPinCap)" />

        {/* 5. Rim specular ring */}
        <ellipse cx="18" cy="11.5" rx="8.2" ry="5.2" stroke="rgba(255,255,255,0.4)" stroke-width="0.6" fill="none" />

        {/* 6. Glossy white reflection on the cap */}
        <ellipse cx="15.5" cy="9.5" rx="4.5" ry="2.2" fill="url(#sharedPinGloss)" />
      </svg>
    </div>
  )
}

export function TestimonialsSection() {
  return () => (
    <section class="relative py-24 sm:py-32 overflow-hidden bg-surface-1 border-t border-surface-2" id="reviews">
      {/* Background ambient glows */}
      <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>

      {/* Shared SVG Defs for Red Pin */}
      <svg class="sr-only" aria-hidden="true">
        <defs>
          <radialGradient id="sharedPinShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#000000" stop-opacity="0.38" />
            <stop offset="65%" stop-color="#000000" stop-opacity="0.12" />
            <stop offset="100%" stop-color="#000000" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="sharedPinStem" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#7f1d1d" />
            <stop offset="25%" stop-color="#b91c1c" />
            <stop offset="65%" stop-color="#ef4444" />
            <stop offset="90%" stop-color="#dc2626" />
            <stop offset="100%" stop-color="#7f1d1d" />
          </linearGradient>
          <radialGradient id="sharedPinCap" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stop-color="#fca5a5" />
            <stop offset="25%" stop-color="#ef4444" />
            <stop offset="70%" stop-color="#dc2626" />
            <stop offset="100%" stop-color="#991b1b" />
          </radialGradient>
          <linearGradient id="sharedPinGloss" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85" />
            <stop offset="50%" stop-color="#ffffff" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-surface-dark0 mb-4 tracking-tight leading-[1.12]">
            Results our clients can't <span class="text-primary">stop talking</span> about
          </h2>
          <p class="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Real brands. Real numbers. No fluff, just genuine feedback from founders, CMOs, and growth leaders we scale every single day.
          </p>
        </div>

        {/* 12-Column Responsive Balanced Grid: Row 1 = 4 cards (col-span-3), Row 2 = 3 cards (col-span-4) */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6 max-w-7xl mx-auto">
          {sevenTestimonials.map((t, idx) => {
            const isOrange = t.theme === 'orange'
            const cardThemeClass = isOrange
              ? 'bg-gradient-to-br from-[#e56026] via-[#d6521a] to-[#b83f0e] border-[#fed7aa]/35 text-white shadow-[0_10px_24px_-4px_rgba(229,96,38,0.35)] hover:shadow-[0_16px_32px_-4px_rgba(229,96,38,0.5)] hover:border-[#fed7aa]/70'
              : 'bg-gradient-to-br from-[#154476] via-[#123e6d] to-[#0c2a4d] border-[#2cbcee]/35 text-white shadow-[0_10px_24px_-4px_rgba(21,68,118,0.35)] hover:shadow-[0_16px_32px_-4px_rgba(21,68,118,0.5)] hover:border-[#2cbcee]/70'

            const quoteClass = isOrange
              ? 'text-white/95 text-[14px] sm:text-[14.5px] leading-relaxed font-normal [&_strong]:font-black [&_strong]:text-[#fef08a]'
              : 'text-white/95 text-[14px] sm:text-[14.5px] leading-relaxed font-normal [&_strong]:font-black [&_strong]:text-[#38bdf8]'

            const roleClass = isOrange ? 'text-orange-100/85' : 'text-blue-200/85'
            const dividerClass = isOrange ? 'border-white/20' : 'border-white/15'
            const starClass = isOrange ? 'text-amber-200' : 'text-amber-300'

            return (
              <div
                key={t.name}
                class={`relative rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-full ${
                  idx < 4 ? 'lg:col-span-3' : 'lg:col-span-4'
                } ${
                  idx === 6 ? 'sm:col-span-2 lg:col-span-4 sm:max-w-md sm:mx-auto lg:max-w-none w-full' : ''
                } ${cardThemeClass}`}
              >
                {/* 3D Red Pushpin Head pinned straight into the card/wall */}
                <RedPinHead />

                {/* Quote Content with Highlighted Stat Keywords */}
                <div class="pt-1">
                  <p class={quoteClass}>
                    {t.content}
                  </p>
                </div>

                {/* Author Footer (NO Profile Photo Image!) */}
                <div class={`mt-5 pt-3.5 border-t ${dividerClass} flex items-center justify-between`}>
                  <div>
                    <h4 class="font-heading font-black text-sm text-white leading-tight">
                      {t.name}
                    </h4>
                    <p class={`text-xs ${roleClass} font-medium leading-tight mt-0.5`}>
                      {t.role} • {t.company}
                    </p>
                  </div>
                  <div class={`flex items-center gap-0.5 ${starClass} text-xs`} aria-label="5 stars">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

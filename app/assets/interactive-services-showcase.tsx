import { clientEntry, on, type Handle, type SerializableProps } from 'remix/ui'

/* ─────────────────────────────────────────
   ICONS & DATA FROM CLAUDE ARTIFACT
───────────────────────────────────────── */

function renderServiceIcon(index: number, size: number) {
  if (index === 0) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-7l-4 3.5V17H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
        <path stroke="#f0641e" d="M12 14s-3.2-1.9-3.2-4.2a1.7 1.7 0 0 1 3.2-.8 1.7 1.7 0 0 1 3.2.8C15.2 12.1 12 14 12 14z" />
      </svg>
    )
  }
  if (index === 1) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 21v-6M11 21v-9M17 21v-5" />
        <path stroke="#f0641e" d="M3 10l6-5 4 3 7-6" />
        <path stroke="#f0641e" d="M15 2h5v5" />
      </svg>
    )
  }
  if (index === 2) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 10v4a1 1 0 0 0 1 1h3l6 4V5L7 9H4a1 1 0 0 0-1 1z" />
        <path stroke="#f0641e" d="M16.5 9a4 4 0 0 1 0 6" />
        <path stroke="#f0641e" d="M19.5 6.5a8 8 0 0 1 0 11" />
      </svg>
    )
  }
  if (index === 3) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4.5 6h8A2.5 2.5 0 0 1 15 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 2 15.5v-7A2.5 2.5 0 0 1 4.5 6z" />
        <path stroke="#f0641e" d="M15 10.5l6-3.5v10l-6-3.5" />
      </svg>
    )
  }
  if (index === 4) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11A2.5 2.5 0 0 1 4.5 4z" />
        <path d="M2 9h20" />
        <path stroke="#f0641e" d="M10 12.5l7 3-3 1.2-1.2 3z" />
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 2.5l6.5 9-3 8.5h-7l-3-8.5z" />
      <path stroke="#f0641e" d="M12 10v6" />
      <circle cx="12" cy="8.2" r="1.2" stroke="#f0641e" fill="#f0641e" />
    </svg>
  )
}

const M6 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

interface ChartLineConfig {
  k: 'line'
  l: string
  v: string
  dl: string
  data: number[]
  x: string[]
}

interface ChartBarConfig {
  k: 'bar'
  l: string
  v: string
  dl: string
  data: number[]
  x: string[]
}

interface ChartHbConfig {
  k: 'hb'
  l: string
  v: string
  dl: string
  rows: [string, number, string][]
}

type ChartConfig = ChartLineConfig | ChartBarConfig | ChartHbConfig

interface ServiceDefinition {
  n: string
  i: number
  d: string
  u: string[]
  g: string[]
  c: ChartConfig
  href: string
}

const SERVICES: ServiceDefinition[] = [
  {
    n: 'Social Media Management',
    i: 0,
    d: 'Content, community and growth across every feed, planned around what converts.',
    u: [
      'Content calendar and community management',
      'Short-form video for Reels and TikTok',
      'Monthly growth and engagement reports',
    ],
    g: ['Instagram', 'TikTok', 'LinkedIn'],
    c: {
      k: 'line',
      l: 'Followers, last 6 months',
      v: '280K',
      dl: '+342%',
      data: [12, 28, 55, 104, 181, 280],
      x: M6,
    },
    href: '/services/social-media',
  },
  {
    n: 'Performance Marketing',
    i: 1,
    d: 'Paid acquisition built on weekly testing, so every rupee works harder.',
    u: [
      'Meta, Google and retargeting funnels',
      'Weekly creative and budget tests',
      'ROAS and CAC dashboards you can read',
    ],
    g: ['Google Ads', 'Meta Ads', 'Retargeting'],
    c: {
      k: 'bar',
      l: 'ROAS by week',
      v: '4.5x',
      dl: 'CAC −48%',
      data: [2.1, 2.4, 2.9, 3.2, 3.7, 4, 4.3, 4.5],
      x: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
    },
    href: '/services/performance-ads',
  },
  {
    n: 'Digital PR & Influencer',
    i: 2,
    d: 'Press, creators and collabs that put your brand in front of the right people.',
    u: [
      'Media outreach and coverage',
      'Influencer gifting and collabs',
      'Brand partnerships that scale',
    ],
    g: ['Media Coverage', 'Influencer Gifting', 'Brand Colabs'],
    c: {
      k: 'hb',
      l: 'Reach by channel',
      v: '4.2M',
      dl: '+86%',
      rows: [
        ['News features', 1.9, '1.9M'],
        ['Creators', 1.1, '1.1M'],
        ['Brand collabs', 0.8, '0.8M'],
        ['Podcasts', 0.4, '0.4M'],
      ],
    },
    href: '/services/digital-pr',
  },
  {
    n: 'Creative Production',
    i: 3,
    d: 'Scroll-stopping ads and short-form video, shot and edited by one team.',
    u: [
      'Ad films and UGC-style video',
      'Reels, Shorts and product photography',
      'Scripts, shoots and edits in-house',
    ],
    g: ['Video Ads', 'Reels & Shorts', 'Photography'],
    c: {
      k: 'bar',
      l: 'Videos delivered per month',
      v: '320',
      dl: '+64%',
      data: [28, 34, 41, 52, 66, 99],
      x: M6,
    },
    href: '/services/production',
  },
  {
    n: 'Web & Landing Pages',
    i: 4,
    d: 'Fast pages designed to turn paid and social traffic into customers.',
    u: [
      'High-converting landing pages',
      'CRO and A/B testing',
      'SEO-ready e-commerce builds',
    ],
    g: ['CRO', 'SEO', 'E-commerce'],
    c: {
      k: 'line',
      l: 'Conversion rate',
      v: '4.8%',
      dl: 'from 2.1%',
      data: [2.1, 2.3, 2.9, 3.6, 4.2, 4.8],
      x: M6,
    },
    href: '/services/web-solutions',
  },
  {
    n: 'Design & Copywriting',
    i: 5,
    d: 'Brand, ad creative and copy that look and sound like one company.',
    u: [
      'Brand identity and guidelines',
      'Ad creatives for every platform',
      'UX copy and ad copywriting',
    ],
    g: ['Branding', 'Ad Creatives', 'UX Copy'],
    c: {
      k: 'hb',
      l: 'Assets delivered by type',
      v: '1,200+',
      dl: '+48%',
      rows: [
        ['Ad creatives', 520, '520'],
        ['Social posts', 380, '380'],
        ['Brand & print', 180, '180'],
        ['Web & UX', 120, '120'],
      ],
    },
    href: '/services/design-copy',
  },
]

export interface ServiceItem extends SerializableProps {
  icon?: string
  title?: string
  desc?: string
  tags?: string[]
  href?: string
}

export interface InteractiveServicesShowcaseProps extends SerializableProps {
  services?: ServiceItem[]
}

export const InteractiveServicesShowcase = clientEntry(
  import.meta.url,
  function InteractiveServicesShowcase(handle: Handle<InteractiveServicesShowcaseProps>) {
    let cur = 0

    return () => {
      return (
        <div class="bb-services-scope">
          <style>{`
            .bb-services-scope {
              --nv: #0a2447;
              --bl: #1f7ae0;
              --or: #f0641e;
              width: 100%;
            }
            .bb-pan {
              display: flex;
              gap: 12px;
              height: 500px;
              width: 100%;
            }
            .bb-pc {
              flex: 0 0 68px;
              min-width: 0;
              position: relative;
              border-radius: 22px;
              background: var(--nv);
              border: 1px solid rgba(255, 255, 255, 0.1);
              color: #fff;
              cursor: pointer;
              overflow: hidden;
              transition: flex 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.3s, height 0.45s;
            }
            .bb-pc:hover {
              background: #0d2f5e;
            }
            .bb-pc:focus-visible {
              outline: 2px solid #ffa24a;
              outline-offset: 2px;
            }
            .bb-pc.on {
              flex: 1 1 0px;
              background: #fff;
              color: var(--nv);
              border-color: #fff;
              cursor: default;
            }
            .bb-ci {
              position: absolute;
              left: 50%;
              top: 22px;
              margin-left: -19px;
              width: 38px;
              height: 38px;
              border-radius: 50%;
              border: 1px solid rgba(255, 255, 255, 0.25);
              display: grid;
              place-items: center;
              color: #a8d0f7;
              transition: opacity 0.25s;
            }
            .bb-vt {
              position: absolute;
              left: 50%;
              bottom: 24px;
              margin-left: -9px;
              writing-mode: vertical-rl;
              transform: rotate(180deg);
              font-size: 15px;
              font-weight: 600;
              white-space: nowrap;
              transition: opacity 0.25s;
              color: #fff;
            }
            .bb-pc.on .bb-ci,
            .bb-pc.on .bb-vt {
              opacity: 0;
              pointer-events: none;
            }
            .bb-in {
              position: absolute;
              inset: 0;
              padding: 26px 28px 22px;
              display: flex;
              flex-direction: column;
              gap: 18px;
              opacity: 0;
              pointer-events: none;
              transition: opacity 0.2s;
            }
            .bb-pc.on .bb-in {
              opacity: 1;
              pointer-events: auto;
              transition-delay: 0.35s;
            }
            .bb-chb {
              background: #eef5fd;
              border-radius: 16px;
              padding: 16px 18px 12px;
              flex: none;
            }
            .bb-chh {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              gap: 12px;
            }
            .bb-chh small {
              display: block;
              font-size: 12.5px;
              color: #5b6f88;
              font-weight: 500;
            }
            .bb-chh b {
              font-size: 32px;
              letter-spacing: -0.02em;
              line-height: 1.15;
              font-weight: 800;
              color: var(--nv);
            }
            .bb-dl {
              font-size: 12.5px;
              font-weight: 700;
              color: #b94a0a;
              background: #ffe8d8;
              padding: 4px 11px;
              border-radius: 99px;
              white-space: nowrap;
            }
            .bb-cv {
              position: relative;
              height: 100px;
              margin-top: 8px;
            }
            .bb-cv svg {
              width: 100%;
              height: 100%;
              display: block;
            }
            .bb-dot {
              position: absolute;
              left: 100%;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: var(--or);
              border: 2.5px solid #eef5fd;
              transform: translate(-65%, -50%);
              animation: bb-pd 0.3s 1.1s both;
            }
            @keyframes bb-pd {
              from { opacity: 0; transform: translate(-65%, -50%) scale(0.3); }
              to { opacity: 1; transform: translate(-65%, -50%) scale(1); }
            }
            .bb-ln {
              stroke-dasharray: 1;
              stroke-dashoffset: 1;
              animation: bb-dw 1.2s 0.15s ease-out forwards;
            }
            @keyframes bb-dw {
              to { stroke-dashoffset: 0; }
            }
            .bb-xl {
              display: flex;
              justify-content: space-between;
              font-size: 11px;
              color: #7d8ea4;
              font-weight: 500;
              margin-top: 7px;
            }
            .bb-bars {
              display: flex;
              align-items: flex-end;
              gap: 9px;
              height: 100%;
            }
            .bb-bars i {
              flex: 1;
              background: #8fc2ee;
              border-radius: 6px 6px 0 0;
              transform-origin: bottom;
              animation: bb-gy 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
              animation-delay: calc(var(--k) * 55ms + 0.2s);
            }
            .bb-bars i.hl {
              background: var(--or);
            }
            @keyframes bb-gy {
              from { transform: scaleY(0); }
              to { transform: scaleY(1); }
            }
            .bb-hb {
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: 100%;
            }
            .bb-hr {
              display: grid;
              grid-template-columns: 116px 1fr 52px;
              gap: 12px;
              align-items: center;
              font-size: 12.5px;
              height: 25px;
              color: #33465f;
            }
            .bb-hr b {
              text-align: right;
              color: var(--nv);
            }
            .bb-tk {
              height: 9px;
              background: #d9e7f6;
              border-radius: 5px;
              overflow: hidden;
            }
            .bb-tk i {
              display: block;
              height: 100%;
              background: #1f7ae0;
              border-radius: 5px;
              transform-origin: left;
              animation: bb-gx 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both;
              animation-delay: calc(var(--k) * 70ms + 0.2s);
            }
            .bb-hr:first-child .bb-tk i {
              background: var(--or);
            }
            @keyframes bb-gx {
              from { transform: scaleX(0); }
              to { transform: scaleX(1); }
            }
            .bb-tx {
              display: grid;
              grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
              gap: 30px;
              min-height: 0;
            }
            .bb-tt {
              display: flex;
              align-items: center;
              gap: 12px;
            }
            .bb-bd {
              width: 42px;
              height: 42px;
              border-radius: 12px;
              background: #e7f1fc;
              color: var(--bl);
              display: grid;
              place-items: center;
              flex: none;
            }
            .bb-tt h3 {
              font-size: 23px;
              font-weight: 700;
              letter-spacing: -0.02em;
              line-height: 1.15;
              color: var(--nv);
            }
            .bb-tx p {
              font-size: 14.5px;
              line-height: 1.6;
              color: #4b5d76;
              margin-top: 12px;
            }
            .bb-ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            .bb-li {
              display: flex;
              gap: 10px;
              font-size: 14px;
              font-weight: 600;
              padding: 9px 0;
              border-bottom: 1px solid #e3ebf5;
              color: #1f2d3d;
            }
            .bb-li:first-child {
              padding-top: 0;
            }
            .bb-li::before {
              content: '';
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: var(--or);
              margin-top: 7px;
              flex: none;
            }
            .bb-tg {
              display: flex;
              flex-wrap: wrap;
              gap: 6px;
              margin-top: 14px;
            }
            .bb-tg i {
              font-style: normal;
              font-size: 12px;
              font-weight: 600;
              color: #1f5fa8;
              background: #e7f1fc;
              padding: 5px 11px;
              border-radius: 99px;
            }
            .bb-ft {
              display: flex;
              align-items: center;
              gap: 18px;
              flex-wrap: wrap;
              margin-top: 30px;
            }
            .bb-cta {
              background: var(--or);
              color: #fff;
              border: 0;
              padding: 15px 28px;
              border-radius: 99px;
              font: 700 15px sans-serif;
              cursor: pointer;
              transition: background 0.2s, transform 0.2s;
              display: inline-flex;
              align-items: center;
              text-decoration: none;
            }
            .bb-cta:hover {
              background: #d9540f;
              transform: translateY(-1px);
            }
            .bb-cta:focus-visible {
              outline: 2px solid #fff;
              outline-offset: 3px;
            }
            .bb-ft span {
              font-size: 14px;
              color: #c4daf3;
            }
            @media (max-width: 1100px) {
              .bb-pan {
                flex-direction: column;
                height: auto;
              }
              .bb-pc, .bb-pc.on {
                flex: none;
              }
              .bb-pc {
                height: 66px;
              }
              .bb-pc.on {
                height: 780px;
              }
              .bb-ci {
                left: 18px;
                top: 13px;
                margin: 0;
              }
              .bb-vt {
                writing-mode: horizontal-tb;
                transform: none;
                left: 72px;
                bottom: auto;
                top: 21px;
                margin: 0;
              }
              .bb-in {
                min-width: 0;
                padding: 76px 20px 22px;
                overflow: hidden;
              }
              .bb-tx {
                grid-template-columns: 1fr;
                gap: 18px;
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .bb-ln { stroke-dashoffset: 0; }
              .bb-bars i, .bb-tk i { animation: none; transform: none; }
            }
          `}</style>

          {/* ── PANELS CONTAINER ── */}
          <div class="bb-pan" id="bb-pan">
            {SERVICES.map((s, i) => {
              const isOn = i === cur
              const c = s.c

              return (
                <div
                  key={i}
                  class={`bb-pc ${isOn ? 'on' : ''}`}
                  tabIndex={0}
                  role="button"
                  aria-label={s.n}
                  mix={[
                    on('mouseenter', () => {
                      if (cur !== i) {
                        cur = i
                        handle.update()
                      }
                    }),
                    on('click', () => {
                      if (cur !== i) {
                        cur = i
                        handle.update()
                      }
                    }),
                  ]}
                >
                  {/* Icon on collapsed pillar */}
                  <span class="bb-ci">
                    {renderServiceIcon(s.i, 18)}
                  </span>

                  {/* Vertical title on collapsed pillar */}
                  <span class="bb-vt">{s.n}</span>

                  {/* Inner expanded content */}
                  <div class="bb-in">
                    {/* Top Chart Box */}
                    <div class="bb-chb">
                      <div class="bb-chh">
                        <div>
                          <small>{c.l}</small>
                          <b>{c.v}</b>
                        </div>
                        <span class="bb-dl">{c.dl}</span>
                      </div>

                      {/* Chart Area */}
                      <div class="bb-cv">
                        {c.k === 'line' && (() => {
                          const v = c.data
                          const n = v.length
                          const mx = Math.max(...v)
                          const mn = Math.min(...v)
                          const pts = v.map((x, idx) => [
                            (idx * 500) / (n - 1),
                            88 - ((x - mn) / (mx - mn)) * 70,
                          ])
                          const d =
                            'M' + pts.map((q) => q[0].toFixed(1) + ',' + q[1].toFixed(1)).join(' L')
                          const lastPtY = pts[n - 1][1]

                          return (
                            <>
                              <svg viewBox="0 0 500 100" preserveAspectRatio="none" aria-hidden="true">
                                <g stroke="#d3e2f3" stroke-width="1">
                                  <line x1="0" x2="500" y1="20" y2="20" vector-effect="non-scaling-stroke" />
                                  <line x1="0" x2="500" y1="52" y2="52" vector-effect="non-scaling-stroke" />
                                  <line x1="0" x2="500" y1="84" y2="84" vector-effect="non-scaling-stroke" />
                                </g>
                                <path d={`${d} L500,100 L0,100Z`} fill="rgba(31,122,224,.12)" />
                                <path
                                  class="bb-ln"
                                  pathLength={1}
                                  d={d}
                                  fill="none"
                                  stroke="#1f7ae0"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  vector-effect="non-scaling-stroke"
                                />
                              </svg>
                              <i class="bb-dot" style={{ top: `${lastPtY}%` }} />
                            </>
                          )
                        })()}

                        {c.k === 'bar' && (() => {
                          const v = c.data
                          const mx = Math.max(...v)
                          const n = v.length

                          return (
                            <div class="bb-bars">
                              {v.map((x, idx) => (
                                <i
                                  key={idx}
                                  style={{
                                    '--k': idx,
                                    height: `${(x / mx) * 100}%`,
                                  }}
                                  class={idx === n - 1 ? 'hl' : ''}
                                />
                              ))}
                            </div>
                          )
                        })()}

                        {c.k === 'hb' && (() => {
                          const m = Math.max(...c.rows.map((r) => r[1]))

                          return (
                            <div class="bb-hb">
                              {c.rows.map((r, idx) => (
                                <div key={idx} class="bb-hr">
                                  <span>{r[0]}</span>
                                  <div class="bb-tk">
                                    <i
                                      style={{
                                        '--k': idx,
                                        width: `${(r[1] / m) * 100}%`,
                                      }}
                                    />
                                  </div>
                                  <b>{r[2]}</b>
                                </div>
                              ))}
                            </div>
                          )
                        })()}
                      </div>

                      {/* X Axis Labels */}
                      {c.k !== 'hb' && c.x && (
                        <div class="bb-xl">
                          {c.x.map((t: string, idx: number) => (
                            <span key={idx}>{t}</span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Details Grid */}
                    <div class="bb-tx">
                      <div>
                        <div class="bb-tt">
                          <span class="bb-bd">
                            {renderServiceIcon(s.i, 22)}
                          </span>
                          <h3>{s.n}</h3>
                        </div>
                        <p>{s.d}</p>
                      </div>

                      <div>
                        <ul class="bb-ul">
                          {s.u.map((x, idx) => (
                            <li key={idx} class="bb-li">
                              {x}
                            </li>
                          ))}
                        </ul>

                        <div class="bb-tg">
                          {s.g.map((x, idx) => (
                            <i key={idx}>{x}</i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── FOOTER CTA (as in Claude Artifact) ── */}
          <div class="bb-ft">
            <a href="/get-proposal" class="bb-cta">
              Get a Free Strategy Session
            </a>
            <span>30-minute call. No commitment required.</span>
          </div>
        </div>
      )
    }
  },
)

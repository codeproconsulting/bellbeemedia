import { routes } from '../routes.ts'

export interface GrowthNode {
  id: string
  title: string
  icon: string
  num: string
  suffix?: string
  subLabel: string
  desc: string
  tags: string[]
  href: string
  x: number // percentage
  y: number // dot percentage on line
  position: 'above' | 'below'
}

export const GROWTH_NODES: GrowthNode[] = [
  {
    id: 'social-media',
    title: 'Social Media Management',
    icon: 'ph-chat-circle-dots',
    num: '280',
    suffix: 'K',
    subLabel: 'followers in 6 months',
    desc: 'Content, community and growth across every feed, planned around what converts.',
    tags: ['Instagram', 'TikTok', 'LinkedIn'],
    href: routes.servicesSocialMedia.href(),
    x: 12.0,
    y: 70.5,
    position: 'above',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    icon: 'ph-chart-line-up',
    num: '4.5',
    suffix: 'x',
    subLabel: 'ROAS within 90 days',
    desc: 'Paid acquisition built on weekly testing, so every rupee works harder.',
    tags: ['Google Ads', 'Meta Ads', 'Retargeting'],
    href: routes.servicesPerformanceAds.href(),
    x: 27.2,
    y: 64.3,
    position: 'below',
  },
  {
    id: 'digital-pr',
    title: 'Digital PR & Influencer',
    icon: 'ph-speaker-high',
    num: '4.2',
    suffix: 'M',
    subLabel: 'earned reach',
    desc: 'Press, creators and collabs that put your brand in front of the right people.',
    tags: ['Media Coverage', 'Creators', 'Brand Colabs'],
    href: routes.servicesDigitalPr.href(),
    x: 42.4,
    y: 58.2,
    position: 'above',
  },
  {
    id: 'creative-production',
    title: 'Creative Production',
    icon: 'ph-video-camera',
    num: '320',
    suffix: '',
    subLabel: 'videos produced',
    desc: 'Scroll-stopping ads and short-form video, shot and edited by one team.',
    tags: ['Video Ads', 'Reels & Shorts', 'Photography'],
    href: routes.servicesProduction.href(),
    x: 57.6,
    y: 52.1,
    position: 'below',
  },
  {
    id: 'web-landing-pages',
    title: 'Web & Landing Pages',
    icon: 'ph-browsers',
    num: '4.8',
    suffix: '%',
    subLabel: 'conversion rate, up from 2.1%',
    desc: 'Fast pages designed to turn paid and social traffic into customers.',
    tags: ['CRO', 'SEO', 'E-commerce'],
    href: routes.servicesWebSolutions.href(),
    x: 72.8,
    y: 46.0,
    position: 'above',
  },
  {
    id: 'design-copywriting',
    title: 'Design & Copywriting',
    icon: 'ph-drop',
    num: '1,200',
    suffix: '+',
    subLabel: 'assets delivered',
    desc: 'Brand, ad creative and copy that look and sound like one company.',
    tags: ['Branding', 'Ad Creatives', 'UX Copy'],
    href: routes.servicesDesignCopy.href(),
    x: 87.0,
    y: 40.2,
    position: 'below',
  },
]

export function IntegratedGrowthSection() {
  return () => (
    <section class="bb-integrated-section">
      <div class="bb-integrated-container">
        
        {/* ── TOP ROW: HEADLINE + INTRO COPY ── */}
        <div class="bb-top-row">
          <div>
            <h2 class="bb-heading-main">
              Search, Social &amp;<br />
              Creative.{' '}
              <span class="bb-heading-accent">
                Fully
              </span>
              <br />
              <span class="bb-heading-accent">
                Integrated.
              </span>
            </h2>
          </div>

          <div class="bb-subtitle-col">
            <p class="bb-subtitle">
              We manage paid acquisition, organic social, and conversion assets under one roof to drive cohesive brand growth.
            </p>
            <div class="bb-top-link-wrapper">
              <a
                href={routes.services.href()}
                class="bb-brand-growth-link"
              >
                <span>Cohesive brand growth</span>
                <span style="font-size: 14px; font-weight: bold;">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── HORIZONTAL TRAJECTORY CANVAS (Desktop & iPad Air: >= 768px) ── */}
        <div class="bb-canvas-wrapper">
          <div class="bb-canvas">

            {/* SVG Background Layer: Gradient Line + Area Fill */}
            <svg
              viewBox="0 0 1300 640"
              fill="none"
              preserveAspectRatio="none"
              style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;"
            >
              <defs>
                {/* Diagonal line gradient: Cyan -> Sky Blue -> Orange */}
                <linearGradient id="bbTrajectoryLineGradBlue" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#38BDF8" />
                  <stop offset="25%" stop-color="#60A5FA" />
                  <stop offset="65%" stop-color="#FFA24A" />
                  <stop offset="100%" stop-color="#F0641E" />
                </linearGradient>

                {/* Soft area gradient under the curve */}
                <linearGradient id="bbTrajectoryAreaGradBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.16" />
                  <stop offset="70%" stop-color="#133F71" stop-opacity="0.06" />
                  <stop offset="100%" stop-color="#133F71" stop-opacity="0" />
                </linearGradient>

                {/* Glow filter */}
                <filter id="bbLineGlowBlue" x="-5%" y="-10%" width="110%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#FFA24A" flood-opacity="0.45" />
                </filter>
              </defs>

              {/* Shaded Area Below Diagonal Line */}
              <polygon
                points="60,470 1240,236 1240,640 60,640"
                fill="url(#bbTrajectoryAreaGradBlue)"
              />

              {/* Ascending Diagonal Line */}
              <line
                x1="60"
                y1="470"
                x2="1240"
                y2="236"
                stroke="url(#bbTrajectoryLineGradBlue)"
                stroke-width="3.5"
                stroke-linecap="round"
                filter="url(#bbLineGlowBlue)"
              />
            </svg>

            {/* ── 6 INTERACTIVE MILESTONE NODES ── */}
            {GROWTH_NODES.map((node, index) => {
              const isAbove = node.position === 'above'
              const positionStyle = isAbove
                ? `left: ${node.x}%; bottom: calc(100% - ${node.y}%); transform: translateX(-50%);`
                : `left: ${node.x}%; top: ${node.y}%; transform: translateX(-50%);`

              return (
                <div
                  key={node.id}
                  class={`bb-node ${index === 0 ? 'bb-node-first' : ''} ${index === GROWTH_NODES.length - 1 ? 'bb-node-last' : ''}`}
                  style={positionStyle}
                >
                  <a
                    href={node.href}
                    style="display: flex; flex-direction: column; align-items: center; text-decoration: none; color: inherit; width: 100%; outline: none;"
                  >
                    {isAbove ? (
                      <>
                        {/* ── CARD (ABOVE LINE) ── */}
                        <div class="bb-card-content" style="padding-bottom: 12px;">
                          {/* Title with circular icon badge */}
                          <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;">
                            <span class="bb-icon-circle">
                              <i class={`ph-bold ${node.icon}`}></i>
                            </span>
                            <h3 class="bb-node-title">
                              {node.title}
                            </h3>
                          </div>

                          {/* Big Metric: Number in white, Suffix in Orange */}
                          <div class="bb-metric-number">
                            <span>{node.num}</span>
                            {node.suffix && (
                              <span class="bb-metric-suffix">{node.suffix}</span>
                            )}
                          </div>

                          {/* Metric Subtitle */}
                          <div class="bb-metric-label">
                            {node.subLabel}
                          </div>

                          {/* Description */}
                          <p class="bb-node-desc">
                            {node.desc}
                          </p>

                          {/* Hover Tags */}
                          <div class="bb-node-tags">
                            <span class="bb-tag-pill">
                              {node.tags.join(' · ')}
                            </span>
                          </div>
                        </div>

                        {/* Stem down to dot */}
                        <div class="bb-stem-line" style="background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), #FFA24A);"></div>

                        {/* Dot on Line */}
                        <div class="bb-dot-wrapper" style="margin-bottom: -9px;">
                          <span class="bb-dot-halo"></span>
                          <span class="bb-dot-center"></span>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Dot on Line */}
                        <div class="bb-dot-wrapper" style="margin-top: -9px;">
                          <span class="bb-dot-halo"></span>
                          <span class="bb-dot-center"></span>
                        </div>

                        {/* Stem down to card */}
                        <div class="bb-stem-line" style="background: linear-gradient(to bottom, #FFA24A, rgba(255, 255, 255, 0.3));"></div>

                        {/* ── CARD (BELOW LINE) ── */}
                        <div class="bb-card-content" style="padding-top: 12px;">
                          {/* Title with circular icon badge */}
                          <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;">
                            <span class="bb-icon-circle">
                              <i class={`ph-bold ${node.icon}`}></i>
                            </span>
                            <h3 class="bb-node-title">
                              {node.title}
                            </h3>
                          </div>

                          {/* Big Metric: Number in white, Suffix in Orange */}
                          <div class="bb-metric-number">
                            <span>{node.num}</span>
                            {node.suffix && (
                              <span class="bb-metric-suffix">{node.suffix}</span>
                            )}
                          </div>

                          {/* Metric Subtitle */}
                          <div class="bb-metric-label">
                            {node.subLabel}
                          </div>

                          {/* Description */}
                          <p class="bb-node-desc">
                            {node.desc}
                          </p>

                          {/* Hover Tags */}
                          <div class="bb-node-tags">
                            <span class="bb-tag-pill">
                              {node.tags.join(' · ')}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </a>
                </div>
              )
            })}

          </div>
        </div>

        {/* ── MOBILE & TABLET VERTICAL TRAJECTORY (< 1024px) ── */}
        <div class="bb-mobile-journey">
          <div class="bb-mobile-track">
            {/* Continuous Vertical Gradient Line */}
            <div class="bb-mobile-v-line"></div>

            {GROWTH_NODES.map((node) => (
              <div key={node.id} class="bb-mobile-step">
                {/* Left Dot Column */}
                <div class="bb-mobile-dot-col">
                  <div class="bb-mobile-dot-wrapper">
                    <span class="bb-mobile-dot-halo"></span>
                    <span class="bb-mobile-dot-center"></span>
                  </div>
                </div>

                {/* Interactive Milestone Card */}
                <a href={node.href} class="bb-mobile-card">
                  {/* Card Header: Icon + Title + Arrow */}
                  <div class="bb-mobile-card-top">
                    <div class="bb-mobile-title-group">
                      <span class="bb-mobile-icon-circle">
                        <i class={`ph-bold ${node.icon}`}></i>
                      </span>
                      <h3 class="bb-mobile-node-title">{node.title}</h3>
                    </div>
                    <span class="bb-mobile-arrow-badge">
                      <i class="ph-bold ph-arrow-up-right"></i>
                    </span>
                  </div>

                  {/* Big Metric Display */}
                  <div class="bb-mobile-metric-group">
                    <div class="bb-mobile-metric-number">
                      <span>{node.num}</span>
                      {node.suffix && (
                        <span class="bb-metric-suffix">{node.suffix}</span>
                      )}
                    </div>
                    <div class="bb-mobile-metric-label">{node.subLabel}</div>
                  </div>

                  {/* Description */}
                  <p class="bb-mobile-node-desc">{node.desc}</p>

                  {/* Tag Pills */}
                  <div class="bb-mobile-tags">
                    {node.tags.map((tag) => (
                      <span key={tag} class="bb-mobile-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Callout Button */}
          <div class="bb-mobile-cta">
            <a href={routes.services.href()} class="bb-mobile-cta-btn">
              <span>Cohesive brand growth</span>
              <i class="ph-bold ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* ── JAVASCRIPT & CSS INTERACTION ── */}
      <script>{`
        (function() {
          function initSpotlight() {
            var canvas = document.querySelector('.bb-canvas');
            if (!canvas) return;
            var nodes = canvas.querySelectorAll('.bb-node');
            if (!nodes.length) return;

            nodes.forEach(function(node) {
              node.addEventListener('mouseenter', function() {
                nodes.forEach(function(other) {
                  if (other !== node) {
                    other.classList.add('bb-is-dimmed');
                  } else {
                    other.classList.remove('bb-is-dimmed');
                  }
                });
              });

              node.addEventListener('mouseleave', function() {
                nodes.forEach(function(other) {
                  other.classList.remove('bb-is-dimmed');
                });
              });
            });
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initSpotlight);
          } else {
            initSpotlight();
          }
        })();
      `}</script>

      <style>{`
        .bb-integrated-section {
          background-color: #133F71 !important;
          background: #133F71 !important;
          color: #FFFFFF !important;
          display: block !important;
          position: relative !important;
          width: 100% !important;
          padding: 80px 0 110px 0;
          overflow: hidden !important;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @media (max-width: 768px) {
          .bb-integrated-section {
            padding: 48px 0 60px 0;
          }
        }

        .bb-integrated-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
          z-index: 5;
        }

        @media (max-width: 640px) {
          .bb-integrated-container {
            padding: 0 16px;
          }
        }

        .bb-top-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          margin-bottom: 60px;
        }

        @media (max-width: 768px) {
          .bb-top-row {
            gap: 16px;
            margin-bottom: 32px;
          }
        }

        .bb-subtitle-col {
          max-width: 420px;
          padding-top: 14px;
        }

        @media (max-width: 768px) {
          .bb-subtitle-col {
            padding-top: 0;
            max-width: 100%;
          }
        }

        .bb-heading-main {
          font-size: clamp(28px, 6.5vw, 62px);
          font-weight: 900;
          color: #FFFFFF;
          letter-spacing: -0.035em;
          line-height: 1.08;
          margin: 0;
        }

        .bb-heading-accent {
          background: linear-gradient(90deg, #FFA24A, #F0641E);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bb-subtitle {
          font-size: clamp(14px, 3.5vw, 15.5px);
          line-height: 1.65;
          color: #C4DAF3;
          margin: 0;
          font-weight: 400;
        }

        .bb-top-link-wrapper {
          margin-top: 12px;
        }

        /* ── DESKTOP & TABLET CANVAS (>= 768px, including iPad Air) ── */
        .bb-canvas-wrapper {
          width: 100%;
          display: block;
          position: relative;
        }

        .bb-canvas {
          position: relative;
          width: 100%;
          max-width: 1280px;
          height: clamp(520px, 46vw, 640px);
          margin: 0 auto;
          isolation: isolate;
        }

        /* ── RESPONSIVE DISPLAY SWITCH ── */
        .bb-mobile-journey {
          display: none;
        }

        @media (max-width: 767px) {
          .bb-canvas-wrapper {
            display: none !important;
          }
          .bb-mobile-journey {
            display: block !important;
          }
        }

        @media (min-width: 768px) {
          .bb-canvas-wrapper {
            display: block !important;
          }
          .bb-mobile-journey {
            display: none !important;
          }
        }

        .bb-brand-growth-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 600;
          color: #7DD3FC;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .bb-brand-growth-link:hover {
          color: #FFA24A;
        }

        /* 
           NORMAL STATE:
           All nodes are 100% full opacity, bright, and bold!
        */
        .bb-node {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          opacity: 1;
          width: clamp(150px, 16vw, 230px);
          box-sizing: border-box;
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Edge safety margins on tablet so first/last card never touch edges */
        @media (max-width: 1200px) {
          .bb-node-last {
            transform: translateX(-65%) !important;
          }
          .bb-node-first {
            transform: translateX(-35%) !important;
          }
        }

        /*
           SPOTLIGHT HOVER INTERACTION:
           ONLY when hovering over an actual node,
           dim all OTHER nodes down to 0.18!
           (Moving over empty canvas DOES NOT dim!)
        */
        .bb-canvas:has(.bb-node:hover) .bb-node:not(:hover),
        .bb-node.bb-is-dimmed {
          opacity: 0.18 !important;
          filter: grayscale(25%) opacity(0.7) !important;
        }

        /* Active / Hovered node pops up at 100% full opacity */
        .bb-node:hover,
        .bb-node:focus-within {
          opacity: 1 !important;
          filter: none !important;
          transform: translate(-50%, -4px) scale(1.04);
          z-index: 50 !important;
        }

        @media (max-width: 1200px) {
          .bb-node-last:hover,
          .bb-node-last:focus-within {
            transform: translate(-65%, -4px) scale(1.04) !important;
          }
          .bb-node-first:hover,
          .bb-node-first:focus-within {
            transform: translate(-35%, -4px) scale(1.04) !important;
          }
        }

        .bb-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .bb-icon-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background-color: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #E2E8F0;
          font-size: 13px;
          flex-shrink: 0;
          transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
        }
        .bb-node:hover .bb-icon-circle {
          border-color: #FFA24A;
          background-color: #FFA24A;
          color: #FFFFFF;
        }

        .bb-node-title {
          font-size: clamp(12px, 1.1vw, 15px);
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.015em;
          margin: 0;
          line-height: 1.15;
          transition: color 0.2s ease;
          text-align: center;
        }
        .bb-node:hover .bb-node-title {
          color: #FFA24A;
        }

        /* Big Metric Number: Fluid clamp sizing */
        .bb-metric-number {
          font-size: clamp(28px, 3.2vw, 48px);
          font-weight: 900;
          color: #FFFFFF;
          letter-spacing: -0.04em;
          line-height: 1;
          margin: 4px 0 2px 0;
        }

        .bb-metric-suffix {
          color: #FFA24A;
          margin-left: 2px;
        }

        .bb-metric-label {
          font-size: clamp(11px, 0.95vw, 12.5px);
          font-weight: 700;
          color: #FFA24A;
          margin-bottom: 5px;
          line-height: 1.2;
          text-align: center;
        }

        .bb-node-desc {
          font-size: clamp(11px, 0.85vw, 12px);
          color: #C4DAF3;
          line-height: 1.4;
          margin: 0;
          max-width: 100%;
          text-align: center;
        }

        .bb-node-tags {
          height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.3s ease;
        }
        .bb-node:hover .bb-node-tags {
          height: auto;
          opacity: 1;
          margin-top: 8px;
        }

        .bb-tag-pill {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          color: #FFFFFF;
          background-color: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 3px 10px;
          border-radius: 9999px;
          letter-spacing: 0.01em;
        }

        .bb-stem-line {
          width: 2px;
          height: clamp(22px, 3.2vw, 44px);
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        .bb-node:hover .bb-stem-line {
          opacity: 1;
        }

        .bb-dot-wrapper {
          position: relative;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bb-dot-halo {
          position: absolute;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: rgba(255, 162, 74, 0.35);
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.3s ease;
          pointer-events: none;
        }
        .bb-node:hover .bb-dot-halo {
          opacity: 1;
          transform: scale(1);
        }

        .bb-dot-center {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: #FFA24A;
          border: 2.5px solid #FFFFFF;
          box-shadow: 0 0 10px #FFA24A;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .bb-node:hover .bb-dot-center {
          transform: scale(1.35);
          box-shadow: 0 0 16px #FFA24A, 0 0 24px rgba(255, 162, 74, 0.7);
        }

        /* ── MOBILE VERTICAL TRAJECTORY STYLES (< 1024px) ── */
        .bb-mobile-journey {
          position: relative;
          width: 100%;
          max-width: 640px;
          margin: 0 auto;
        }

        .bb-mobile-track {
          position: relative;
          padding: 8px 0 16px 0;
        }

        .bb-mobile-v-line {
          position: absolute;
          top: 36px;
          bottom: 50px;
          left: 17px;
          width: 3px;
          background: linear-gradient(180deg, #38BDF8 0%, #60A5FA 25%, #FFA24A 70%, #F0641E 100%);
          border-radius: 9999px;
          box-shadow: 0 0 10px rgba(255, 162, 74, 0.45);
          pointer-events: none;
          z-index: 1;
        }

        .bb-mobile-step {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 20px;
        }

        .bb-mobile-step:last-child {
          margin-bottom: 0;
        }

        .bb-mobile-dot-col {
          width: 36px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          padding-top: 22px;
          position: relative;
          z-index: 2;
        }

        .bb-mobile-dot-wrapper {
          position: relative;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bb-mobile-dot-halo {
          position: absolute;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 162, 74, 0.25);
          animation: bbPulseHalo 2.5s infinite ease-in-out;
        }

        @keyframes bbPulseHalo {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.9;
          }
        }

        .bb-mobile-dot-center {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: #FFA24A;
          border: 2.5px solid #FFFFFF;
          box-shadow: 0 0 10px #FFA24A;
          z-index: 3;
        }

        .bb-mobile-card {
          flex: 1;
          min-width: 0;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          padding: 18px 18px 16px 18px;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.25s ease,
                      background-color 0.25s ease,
                      box-shadow 0.25s ease;
          outline: none;
        }

        .bb-mobile-card:hover,
        .bb-mobile-card:active {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 162, 74, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25), 0 0 15px rgba(255, 162, 74, 0.15);
        }

        .bb-mobile-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 8px;
        }

        .bb-mobile-title-group {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          flex: 1;
        }

        .bb-mobile-icon-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background-color: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #E2E8F0;
          font-size: 13px;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .bb-mobile-card:hover .bb-mobile-icon-circle {
          border-color: #FFA24A;
          background-color: #FFA24A;
          color: #FFFFFF;
        }

        .bb-mobile-node-title {
          font-size: 14.5px;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.015em;
          margin: 0;
          line-height: 1.2;
        }

        .bb-mobile-arrow-badge {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(125, 211, 252, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7DD3FC;
          font-size: 13px;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .bb-mobile-card:hover .bb-mobile-arrow-badge {
          background: #FFA24A;
          color: #FFFFFF;
          transform: translate(1px, -1px);
        }

        .bb-mobile-metric-group {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
          margin: 4px 0 6px 0;
        }

        .bb-mobile-metric-number {
          font-size: 34px;
          font-weight: 900;
          color: #FFFFFF;
          letter-spacing: -0.035em;
          line-height: 1;
        }

        .bb-mobile-metric-label {
          font-size: 12.5px;
          font-weight: 700;
          color: #FFA24A;
          line-height: 1.2;
        }

        .bb-mobile-node-desc {
          font-size: 12.5px;
          color: #C4DAF3;
          line-height: 1.5;
          margin: 0 0 12px 0;
        }

        .bb-mobile-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .bb-mobile-tag-pill {
          font-size: 11px;
          font-weight: 600;
          color: #FFFFFF;
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 2.5px 9px;
          border-radius: 9999px;
          letter-spacing: 0.01em;
        }

        .bb-mobile-cta {
          margin-top: 24px;
          display: flex;
          justify-content: center;
        }

        .bb-mobile-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px 20px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(125, 211, 252, 0.35);
          color: #7DD3FC;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .bb-mobile-cta-btn:hover,
        .bb-mobile-cta-btn:active {
          background: #FFA24A;
          border-color: #FFA24A;
          color: #FFFFFF;
        }
      `}</style>
    </section>
  )
}

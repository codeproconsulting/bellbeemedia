/**
 * BellBee Media — Animation Engine
 * Pure vanilla JS, no dependencies.
 *
 * Animations:
 *  1. Scroll-reveal  — elements with [data-reveal] fade + slide in on scroll
 *  2. Counter-up     — elements with [data-count] animate number from 0 → target
 *  3. Stagger group  — elements with [data-stagger-group] stagger their children
 *  4. Card tilt      — elements with [data-tilt] respond to mouse with 3D tilt
 *  5. Marquee pause  — [data-marquee] pauses on hover
 */

// ─── 1. Scroll Reveal ────────────────────────────────────────────────────────
function initScrollReveal(): void {
  // Select elements that have data-reveal with any value (including bare attribute)
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]')
  if (!targets.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          const delay = el.dataset.revealDelay ?? '0'
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('bb-revealed')
          observer.unobserve(el)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  targets.forEach((el) => {
    // bb-reveal base class always added; direction variant handled by CSS [data-reveal="x"] selectors
    el.classList.add('bb-reveal')
    observer.observe(el)
  })
}

// ─── 2. Counter-Up ───────────────────────────────────────────────────────────
function countUp(el: HTMLElement): void {
  const raw = el.dataset.count ?? '0'
  // Parse prefix/suffix e.g. "£35M+" → prefix="£", number=35, suffix="M+"
  const match = raw.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return
  const [, prefix, numStr, suffix] = match
  const target = parseFloat(numStr)
  const isFloat = numStr.includes('.')
  const duration = 1800
  const start = performance.now()

  function tick(now: number): void {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = eased * target
    el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.round(current)) + suffix
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

function initCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>('[data-count]')
  if (!counters.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  counters.forEach((el) => observer.observe(el))
}

// ─── 3. Stagger Groups ────────────────────────────────────────────────────────
function initStaggerGroups(): void {
  const groups = document.querySelectorAll<HTMLElement>('[data-stagger-group]')
  if (!groups.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const group = entry.target as HTMLElement
          const children = group.querySelectorAll<HTMLElement>('[data-stagger-item]')
          children.forEach((child, i) => {
            child.classList.add('bb-reveal')
            setTimeout(() => {
              child.classList.add('bb-revealed')
            }, i * 120)
          })
          observer.unobserve(group)
        }
      })
    },
    { threshold: 0.1 }
  )

  groups.forEach((el) => observer.observe(el))
}

// ─── 4. Card Tilt ─────────────────────────────────────────────────────────────
function initCardTilt(): void {
  const cards = document.querySelectorAll<HTMLElement>('[data-tilt]')
  if (!cards.length) return

  cards.forEach((card) => {
    card.style.transformStyle = 'preserve-3d'
    card.style.transition = 'transform 0.25s ease-out, box-shadow 0.25s ease-out'

    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2   // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2   // -1 to 1
      const intensity = parseFloat(card.dataset.tiltIntensity ?? '8')
      card.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(4px)`
    })

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)'
    })
  })
}

// ─── 5. Animated hover glow on CTA buttons ───────────────────────────────────
function initButtonGlow(): void {
  const buttons = document.querySelectorAll<HTMLElement>('[data-glow-btn]')
  buttons.forEach((btn) => {
    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      btn.style.setProperty('--glow-x', `${x}px`)
      btn.style.setProperty('--glow-y', `${y}px`)
    })
  })
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
function boot(): void {
  initScrollReveal()
  initCounters()
  initStaggerGroups()
  initCardTilt()
  initButtonGlow()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot)
} else {
  boot()
}

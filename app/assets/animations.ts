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

// ─── 6. Testimonials Carousel Slider ─────────────────────────────────────────
function initTestimonialsSlider(): void {
  const slider = document.getElementById('bb-testimonial-slider')
  const track = document.getElementById('bb-slider-track') as HTMLElement | null
  const prevBtn = document.getElementById('bb-slider-prev')
  const nextBtn = document.getElementById('bb-slider-next')
  if (!slider || !track) return

  if (slider.dataset.sliderInitialized === 'true') return
  slider.dataset.sliderInitialized = 'true'

  let currentIndex = 0
  let timer: any = null
  let isDragging = false
  let startX = 0
  let dragDiff = 0

  function getItemsPerView(): number {
    if (window.innerWidth >= 1024) return 3
    if (window.innerWidth >= 640) return 2
    return 1
  }

  function getTotalSlides(): number {
    return track ? track.children.length : 0
  }

  function getMaxIndex(): number {
    const total = getTotalSlides()
    const perView = getItemsPerView()
    return Math.max(0, total - perView)
  }

  function updateSlider(animate: boolean = true): void {
    if (!track) return
    const perView = getItemsPerView()
    const maxIdx = getMaxIndex()
    if (currentIndex > maxIdx) currentIndex = maxIdx
    if (currentIndex < 0) currentIndex = 0

    track.style.transition = animate ? 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
    const step = 100 / perView
    track.style.transform = `translateX(-${currentIndex * step}%)`

    const dots = document.querySelectorAll<HTMLElement>('.bb-slider-dot')
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.style.width = '2rem'
        dot.style.backgroundColor = '#154476'
      } else {
        dot.style.width = '0.5rem'
        dot.style.backgroundColor = '#cbd5e1'
      }
    })
  }

  function nextSlide(): void {
    const maxIdx = getMaxIndex()
    if (currentIndex >= maxIdx) {
      currentIndex = 0
    } else {
      currentIndex++
    }
    updateSlider(true)
  }

  function prevSlide(): void {
    const maxIdx = getMaxIndex()
    if (currentIndex <= 0) {
      currentIndex = maxIdx
    } else {
      currentIndex--
    }
    updateSlider(true)
  }

  function goToSlide(idx: number): void {
    const maxIdx = getMaxIndex()
    currentIndex = Math.max(0, Math.min(idx, maxIdx))
    updateSlider(true)
  }

  function startAuto(): void {
    stopAuto()
    timer = setInterval(nextSlide, 3200)
  }

  function stopAuto(): void {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      nextSlide()
      startAuto()
    })
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      prevSlide()
      startAuto()
    })
  }

  const dots = document.querySelectorAll<HTMLElement>('.bb-slider-dot')
  dots.forEach((dot) => {
    dot.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault()
      const idx = parseInt(dot.getAttribute('data-index') ?? '0', 10)
      goToSlide(idx)
      startAuto()
    })
  })

  slider.addEventListener('mouseenter', stopAuto)
  slider.addEventListener('mouseleave', () => {
    if (!isDragging) startAuto()
  })

  // Mouse Dragging
  slider.style.cursor = 'grab'

  slider.addEventListener('mousedown', (e: MouseEvent) => {
    isDragging = true
    startX = e.clientX
    dragDiff = 0
    stopAuto()
    slider.style.cursor = 'grabbing'
    track.style.transition = 'none'
  })

  window.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isDragging || !track || !slider) return
    dragDiff = e.clientX - startX
    const perView = getItemsPerView()
    const step = 100 / perView
    const baseTranslate = -(currentIndex * step)
    const containerWidth = slider.offsetWidth || 1
    const percentShift = (dragDiff / containerWidth) * 100
    track.style.transform = `translateX(${baseTranslate + percentShift}%)`
  })

  window.addEventListener('mouseup', () => {
    if (!isDragging) return
    isDragging = false
    if (slider) slider.style.cursor = 'grab'
    if (dragDiff < -40) {
      nextSlide()
    } else if (dragDiff > 40) {
      prevSlide()
    } else {
      updateSlider(true)
    }
    startAuto()
  })

  // Touch Swiping
  slider.addEventListener(
    'touchstart',
    (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        isDragging = true
        startX = e.touches[0].clientX
        dragDiff = 0
        stopAuto()
        track.style.transition = 'none'
      }
    },
    { passive: true }
  )

  slider.addEventListener(
    'touchmove',
    (e: TouchEvent) => {
      if (!isDragging || !e.touches || !e.touches[0] || !track || !slider) return
      dragDiff = e.touches[0].clientX - startX
      const perView = getItemsPerView()
      const step = 100 / perView
      const baseTranslate = -(currentIndex * step)
      const containerWidth = slider.offsetWidth || 1
      const percentShift = (dragDiff / containerWidth) * 100
      track.style.transform = `translateX(${baseTranslate + percentShift}%)`
    },
    { passive: true }
  )

  slider.addEventListener('touchend', () => {
    if (!isDragging) return
    isDragging = false
    if (dragDiff < -40) {
      nextSlide()
    } else if (dragDiff > 40) {
      prevSlide()
    } else {
      updateSlider(true)
    }
    startAuto()
  })

  window.addEventListener('resize', () => {
    updateSlider(false)
  })

  updateSlider(false)
  startAuto()
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
function boot(): void {
  initScrollReveal()
  initCounters()
  initStaggerGroups()
  initCardTilt()
  initButtonGlow()
  initTestimonialsSlider()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot)
} else {
  boot()
}

// Re-check in case elements are hydrated or rendered shortly after script evaluation
setTimeout(initTestimonialsSlider, 150)
setTimeout(initTestimonialsSlider, 600)


# Action Plan: SEO Content & E-E-A-T Improvements

This action plan provides prioritized steps to address the deficits found in [FULL-AUDIT-REPORT.md](file:///f:/BellBee%20Media/FULL-AUDIT-REPORT.md).

---

## 1. Immediate Blockers (P0)

### Action 1.1: Inject JSON-LD Schema Markup
- **Impact**: Critical
- **Effort**: Low (Quick win)
- **Task**: Inject structured data schema on the Homepage.
- **Details**:
  1. Modify [layout.tsx](file:///f:/BellBee%20Media/app/ui/layout.tsx) to accept a `schema` or `head` prop.
  2. Inject JSON-LD `Organization` and `ProfessionalService` schema representing BellBee Media.
  3. Example JSON-LD script block:
     ```html
     <script type="application/ld+json">
       {
         "@context": "https://schema.org",
         "@type": "ProfessionalService",
         "name": "BellBee Media",
         "url": "https://bellbeemedia.com",
         "logo": "https://bellbeemedia.com/Logo.svg",
         "image": "https://bellbeemedia.com/og-image.jpg",
         "description": "Next-Gen Digital Marketing Agency scaling brands through data-led marketing.",
         "address": {
           "@type": "PostalAddress",
           "streetAddress": "123 Digital Ave",
           "addressLocality": "San Francisco",
           "addressRegion": "CA",
           "postalCode": "94107",
           "addressCountry": "US"
         },
         "telephone": "+1-555-123-4567",
         "email": "hello@bellbeemedia.com",
         "priceRange": "$$$",
         "sameAs": [
           "https://www.facebook.com/bellbeemedia",
           "https://www.instagram.com/bellbeemedia",
           "https://www.linkedin.com/company/bellbeemedia"
         ]
       }
     </script>
     ```

### Action 1.2: Add Compliance Footer Links
- **Impact**: Critical
- **Effort**: Low (Quick win)
- **Task**: Create placeholder Privacy Policy and Terms of Service routes/pages, and add them in the footer.
- **Details**:
  1. Add routes `/privacy` and `/terms` to `app/routes.ts`.
  2. Map them in the router and render minimal compliance pages.
  3. Update footer navigation in [layout.tsx](file:///f:/BellBee%20Media/app/ui/layout.tsx) to include links to these pages.

---

## 2. Quick Wins (P1)

### Action 2.1: Add Links to Third-Party Reviews
- **Impact**: High (Improves Trustworthiness)
- **Effort**: Low
- **Task**: Make the aggregate reviews badge clickable.
- **Details**:
  1. Modify the testimonial rating card in `app/ui/shared.tsx` (`TestimonialsSection`) to link to external review accounts (e.g. Clutch, Google Reviews, or Trustpilot profile).

### Action 2.2: Add a Dedicated FAQ Section for Passage Indexing & AI Citation
- **Impact**: High (Improves GEO readiness and voice search)
- **Effort**: Medium
- **Task**: Add an FAQ section to the homepage.
- **Details**:
  1. Create a structured Accordion UI with frequently asked questions.
  2. Ensure the text format matches the answer-first pattern (front-loaded direct answer of 40-50 words, self-contained H3 blocks).

---

## 3. Strategic Improvements (P2)

### Action 3.1: Replace Placeholder Logos with Real Client Logos
- **Impact**: Medium (Improves Experience & Authority)
- **Effort**: Medium
- **Task**: Remove generic names like "Rise Co" and replace with actual client logos.
- **Details**:
  1. Upload high-res SVG files of representative client brands.
  2. Update [home-page.tsx](file:///f:/BellBee%20Media/app/ui/home-page.tsx) marquee container.

### Action 3.2: Embed Team & Office Photography
- **Impact**: Medium (Improves Experience & Trust)
- **Effort**: Medium
- **Task**: Showcase the human faces behind the agency.
- **Details**:
  1. Add real photos of the executive team or workspace.
  2. Embed alt tags on all photos indicating names and roles (e.g., `alt="Rahul Patel, CMO of BellBee Media"`).

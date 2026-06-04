import { createController } from 'remix/router'
import { redirect } from 'remix/response/redirect'
import { assetServer } from '../assets.ts'
import { routes } from '../routes.ts'

// Main pages
import { HomePage } from '../ui/home-page.tsx'
import { ServicesPage } from '../ui/services-page.tsx'
import { AboutPage } from '../ui/about-page.tsx'
import { ContactPage } from '../ui/contact-page.tsx'
import { OurWorkPage } from '../ui/our-work-page.tsx'
import { BlogsPage } from '../ui/blogs-page.tsx'
import { GetProposalPage } from '../ui/get-proposal-page.tsx'
import { PrivacyPage } from '../ui/privacy-page.tsx'
import { TermsPage } from '../ui/terms-page.tsx'

// Service sub-pages
import { SocialMediaPage } from '../ui/services/social-media-page.tsx'
import { PerformanceAdsPage } from '../ui/services/performance-ads-page.tsx'
import { DigitalPrPage } from '../ui/services/digital-pr-page.tsx'
import { ProductionPage } from '../ui/services/production-page.tsx'
import { WebSolutionsPage } from '../ui/services/web-solutions-page.tsx'
import { DesignCopyPage } from '../ui/services/design-copy-page.tsx'

// Our Work sub-pages
import { CaseStudiesPage } from '../ui/our-work/case-studies-page.tsx'
import { ClientResultsPage } from '../ui/our-work/client-results-page.tsx'
import { SuccessStoriesPage } from '../ui/our-work/success-stories-page.tsx'
import { IndustryExpertisePage } from '../ui/our-work/industry-expertise-page.tsx'

// About Us sub-pages
import { OurCompanyPage } from '../ui/about-us/our-company-page.tsx'
import { OurMissionPage } from '../ui/about-us/our-mission-page.tsx'
import { WhyChooseUsPage } from '../ui/about-us/why-choose-us-page.tsx'
import { CareersPage } from '../ui/about-us/careers-page.tsx'

export default createController(routes, {
  actions: {
    async assets(context) {
      return (
        (await assetServer.fetch(context.request)) ?? new Response('Not Found', { status: 404 })
      )
    },
    home(context) {
      return context.render(<HomePage />)
    },
    services(context) {
      return context.render(<ServicesPage />)
    },
    servicesSocialMedia(context) {
      return context.render(<SocialMediaPage />)
    },
    servicesPerformanceAds(context) {
      return context.render(<PerformanceAdsPage />)
    },
    servicesDigitalPr(context) {
      return context.render(<DigitalPrPage />)
    },
    servicesProduction(context) {
      return context.render(<ProductionPage />)
    },
    servicesWebSolutions(context) {
      return context.render(<WebSolutionsPage />)
    },
    servicesDesignCopy(context) {
      return context.render(<DesignCopyPage />)
    },
    ourWork(context) {
      return context.render(<OurWorkPage />)
    },
    ourWorkCaseStudies(context) {
      return context.render(<CaseStudiesPage />)
    },
    ourWorkClientResults(context) {
      return context.render(<ClientResultsPage />)
    },
    ourWorkSuccessStories(context) {
      return context.render(<SuccessStoriesPage />)
    },
    ourWorkIndustryExpertise(context) {
      return context.render(<IndustryExpertisePage />)
    },
    blogs(context) {
      return context.render(<BlogsPage />)
    },
    aboutUs(context) {
      return context.render(<AboutPage />)
    },
    aboutUsOurCompany(context) {
      return context.render(<OurCompanyPage />)
    },
    aboutUsOurMission(context) {
      return context.render(<OurMissionPage />)
    },
    aboutUsWhyChooseUs(context) {
      return context.render(<WhyChooseUsPage />)
    },
    aboutUsCareers(context) {
      return context.render(<CareersPage />)
    },
    getProposal(context) {
      return context.render(<GetProposalPage />)
    },
    contact() {
      return redirect(routes.getProposal.href())
    },
    privacy(context) {
      return context.render(<PrivacyPage />)
    },
    terms(context) {
      return context.render(<TermsPage />)
    },
  },
})


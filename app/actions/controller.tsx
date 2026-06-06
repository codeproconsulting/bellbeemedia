import { createController } from 'remix/router'
import { redirect } from 'remix/response/redirect'
import { assetServer } from '../assets.ts'
import { routes } from '../routes.ts'

// WordPress data layer
import {
  fetchBlogPosts,
  fetchBlogPost,
  fetchCaseStudies,
  fetchSuccessStories,
  fetchJobs,
  submitProposal,
} from '../data/wordpress.ts'

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
import { IslamabadPage } from '../ui/locations/pakistan/islamabad-page.tsx'

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

// Blog post page
import { BlogPostPage } from '../ui/blog-post-page.tsx'

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

    async ourWorkCaseStudies(context) {
      const caseStudies = await fetchCaseStudies(12)
      return context.render(<CaseStudiesPage caseStudies={caseStudies} />)
    },

    ourWorkClientResults(context) {
      return context.render(<ClientResultsPage />)
    },

    async ourWorkSuccessStories(context) {
      const stories = await fetchSuccessStories(10)
      return context.render(<SuccessStoriesPage stories={stories} />)
    },

    ourWorkIndustryExpertise(context) {
      return context.render(<IndustryExpertisePage />)
    },

    async blogs(context) {
      const posts = await fetchBlogPosts(10)
      return context.render(<BlogsPage posts={posts} />)
    },

    async blogPost(context) {
      const slug = context.params.slug
      if (!slug) return new Response('Not Found', { status: 404 })
      const post = await fetchBlogPost(slug)
      if (!post) return new Response('Post Not Found', { status: 404 })
      return context.render(<BlogPostPage post={post} />)
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

    async aboutUsCareers(context) {
      const jobs = await fetchJobs(20)
      return context.render(<CareersPage jobs={jobs} />)
    },

    async getProposal(context) {
      const bookingUrl = process.env.BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"

      // GET — show the form
      if (context.request.method === 'GET') {
        return context.render(<GetProposalPage bookingUrl={bookingUrl} />)
      }

      // POST — process form submission
      const formData = await context.request.formData()
      const fullName = formData.get('fullName')?.toString() ?? ''
      const email = formData.get('email')?.toString() ?? ''

      if (!fullName || !email) {
        return context.render(
          <GetProposalPage bookingUrl={bookingUrl} result={{ success: false, message: 'Please fill in your name and email.' }} />,
          { status: 400 },
        )
      }

      const company = formData.get('company')?.toString()
      const phone = formData.get('phone')?.toString()
      const services = formData.getAll('services').join(', ')
      const details = formData.get('details')?.toString()

      const result = await submitProposal({ fullName, email, company, phone, services, details })

      return context.render(<GetProposalPage bookingUrl={bookingUrl} result={result} />, {
        status: result.success ? 200 : 500,
      })
    },

    contact(context) {
      return redirect(routes.getProposal.href())
    },

    privacy(context) {
      return context.render(<PrivacyPage />)
    },

    terms(context) {
      return context.render(<TermsPage />)
    },

    async locationPakistanIslamabad(context) {
      const bookingUrl = process.env.BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"
      
      if (context.request.method === 'GET') {
        return context.render(<IslamabadPage bookingUrl={bookingUrl} />)
      }

      const formData = await context.request.formData()
      const fullName = formData.get('fullName')?.toString() ?? ''
      const email = formData.get('email')?.toString() ?? ''

      if (!fullName || !email) {
        return context.render(
          <IslamabadPage bookingUrl={bookingUrl} result={{ success: false, message: 'Please fill in your name and email.' }} />,
          { status: 400 },
        )
      }

      const phone = formData.get('phone')?.toString()
      const details = `Contact from Islamabad Landing Page. Details: ${formData.get('details')?.toString() || 'None'}`

      const result = await submitProposal({ fullName, email, phone, details })

      return context.render(<IslamabadPage bookingUrl={bookingUrl} result={result} />, {
        status: result.success ? 200 : 500,
      })
    },
  },
})

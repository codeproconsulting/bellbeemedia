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
import { LahorePage } from '../ui/locations/pakistan/lahore-page.tsx'
import { KarachiPage } from '../ui/locations/pakistan/karachi-page.tsx'
import { RawalpindiPage } from '../ui/locations/pakistan/rawalpindi-page.tsx'
import { LocationsPage } from '../ui/locations/locations-page.tsx'

// Service sub-pages
import { SocialMediaPage } from '../ui/services/social-media-page.tsx'
import { PerformanceAdsPage } from '../ui/services/performance-ads-page.tsx'
import { DigitalPrPage } from '../ui/services/digital-pr-page.tsx'
import { ProductionPage } from '../ui/services/production-page.tsx'
import { WebSolutionsPage } from '../ui/services/web-solutions-page.tsx'
import { DesignCopyPage } from '../ui/services/design-copy-page.tsx'
import { SeoIslamabadPage } from '../ui/services/seo-islamabad-page.tsx'

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
    async servicesSeoIslamabad(context) {
      return handleSeoIslamabadRequest(context)
    },
    async seoServicesIslamabad(context) {
      return handleSeoIslamabadRequest(context)
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

    locations(context) {
      return context.render(<LocationsPage />)
    },

    async contact(context) {
      // GET — show the contact page
      if (context.request.method === 'GET') {
        return context.render(<ContactPage />)
      }

      // POST — process contact form submission
      const formData = await context.request.formData()
      const firstName = formData.get('firstName')?.toString() ?? ''
      const lastName = formData.get('lastName')?.toString() ?? ''
      const email = formData.get('email')?.toString() ?? ''
      const service = formData.get('service')?.toString() ?? ''
      const message = formData.get('message')?.toString() ?? ''

      if (!firstName || !lastName || !email || !message) {
        return context.render(
          <ContactPage result={{ success: false, message: 'Please fill in all required fields.' }} />,
          { status: 400 },
        )
      }

      const result = await submitProposal({
        fullName: `${firstName} ${lastName}`,
        email,
        services: service,
        details: `Contact Form Message:\n${message}`,
      })

      return context.render(<ContactPage result={result} />, {
        status: result.success ? 200 : 500,
      })
    },

    privacy(context) {
      return context.render(<PrivacyPage />)
    },

    terms(context) {
      return context.render(<TermsPage />)
    },

    async locationIslamabad(context) {
      return handleLocationRequest(context, IslamabadPage, 'Islamabad')
    },
    async locationPakistanIslamabad(context) {
      return handleLocationRequest(context, IslamabadPage, 'Islamabad')
    },

    async locationLahore(context) {
      return handleLocationRequest(context, LahorePage, 'Lahore')
    },
    async locationPakistanLahore(context) {
      return handleLocationRequest(context, LahorePage, 'Lahore')
    },

    async locationKarachi(context) {
      return handleLocationRequest(context, KarachiPage, 'Karachi')
    },
    async locationPakistanKarachi(context) {
      return handleLocationRequest(context, KarachiPage, 'Karachi')
    },

    async locationRawalpindi(context) {
      return handleLocationRequest(context, RawalpindiPage, 'Rawalpindi')
    },
    async locationPakistanRawalpindi(context) {
      return handleLocationRequest(context, RawalpindiPage, 'Rawalpindi')
    },
  },
})

async function handleLocationRequest(context: any, Component: any, cityName: string) {
  const bookingUrl = process.env.BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"
  
  if (context.request.method !== 'POST') {
    return context.render(<Component bookingUrl={bookingUrl} />)
  }

  const formData = await context.request.formData()
  const fullName = formData.get('fullName')?.toString() ?? ''
  const email = formData.get('email')?.toString() ?? ''

  if (!fullName || !email) {
    return context.render(
      <Component bookingUrl={bookingUrl} result={{ success: false, message: 'Please fill in your name and email.' }} />,
      { status: 400 },
    )
  }

  const phone = formData.get('phone')?.toString()
  const details = `Contact from ${cityName} Landing Page. Details: ${formData.get('details')?.toString() || 'None'}`

  const result = await submitProposal({ fullName, email, phone, details })

  return context.render(<Component bookingUrl={bookingUrl} result={result} />, {
    status: result.success ? 200 : 500,
  })
}

async function handleSeoIslamabadRequest(context: any) {
  const bookingUrl = process.env.BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"

  if (context.request.method !== 'POST') {
    return context.render(<SeoIslamabadPage bookingUrl={bookingUrl} />)
  }

  const formData = await context.request.formData()
  const fullName = formData.get('fullName')?.toString() ?? ''
  const email = formData.get('email')?.toString() ?? ''
  const website = formData.get('website')?.toString() ?? ''

  if (!fullName || !email || !website) {
    return context.render(
      <SeoIslamabadPage
        bookingUrl={bookingUrl}
        result={{ success: false, message: 'Please provide your full name, email, and website URL.' }}
      />,
      { status: 400 },
    )
  }

  const phone = formData.get('phone')?.toString()
  const goal = formData.get('goal')?.toString() || 'General SEO growth'
  const budget = formData.get('budget')?.toString() || 'Flexible'
  const notes = formData.get('notes')?.toString() || 'None'

  const details = `SEO Audit Request (Islamabad):
Website: ${website}
Primary Objective: ${goal}
Estimated Budget: ${budget}
Notes / Keywords: ${notes}`

  const result = await submitProposal({
    fullName,
    email,
    phone,
    services: 'SEO Services in Islamabad',
    details,
  })

  return context.render(<SeoIslamabadPage bookingUrl={bookingUrl} result={result} />, {
    status: result.success ? 200 : 500,
  })
}


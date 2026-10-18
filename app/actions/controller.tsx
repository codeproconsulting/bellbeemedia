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
import { PakistanHubPage } from '../ui/locations/pakistan/pakistan-hub-page.tsx'
import { UkHubPage } from '../ui/locations/uk/uk-hub-page.tsx'

// Service sub-pages
import { SocialMediaPage } from '../ui/services/social-media-page.tsx'
import { PerformanceAdsPage } from '../ui/services/performance-ads-page.tsx'
import { DigitalPrPage } from '../ui/services/digital-pr-page.tsx'
import { ProductionPage } from '../ui/services/production-page.tsx'
import { WebSolutionsPage } from '../ui/services/web-solutions-page.tsx'
import { DesignCopyPage } from '../ui/services/design-copy-page.tsx'
import { SeoIslamabadPage } from '../ui/services/seo-islamabad-page.tsx'
import { MetaAdsIslamabadPage } from '../ui/services/meta-ads-islamabad-page.tsx'
import { GoogleAdsIslamabadPage } from '../ui/services/google-ads-islamabad-page.tsx'

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

// Admin pages & data modules
import { LoginPage } from '../ui/admin/login-page.tsx'
import { DashboardPage } from '../ui/admin/dashboard-page.tsx'
import {
  getAllLeads,
  filterLeads,
  updateLead,
  updateBulkStatus,
  deleteLeads,
  generateLeadsCsv,
  type LeadStatus,
} from '../data/leads.ts'
import {
  verifyPassword,
  generateSessionToken,
  isAuthenticated,
  getSessionCookieHeader,
  getLogoutCookieHeader,
} from '../data/auth.ts'

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
    async seoServicesIslamabadExact(context) {
      return handleSeoIslamabadRequest(context)
    },
    async seoServicesIslamabadNested(context) {
      return handleSeoIslamabadRequest(context)
    },
    async locationPakistanIslamabadSeo(context) {
      return handleSeoIslamabadRequest(context)
    },
    async locationPakistanIslamabadMetaAds(context) {
      return handleMetaAdsIslamabadRequest(context)
    },
    async locationIslamabadSeo(context) {
      return handleSeoIslamabadRequest(context)
    },
    async locationIslamabadMetaAds(context) {
      return handleMetaAdsIslamabadRequest(context)
    },
    async metaAdsIslamabad(context) {
      return handleMetaAdsIslamabadRequest(context)
    },
    async metaAdsServicesIslamabad(context) {
      return handleMetaAdsIslamabadRequest(context)
    },
    async servicesMetaAdsIslamabad(context) {
      return handleMetaAdsIslamabadRequest(context)
    },
    async googleAdsIslamabad(context) {
      return handleGoogleAdsIslamabadRequest(context)
    },
    async googleAdsServicesIslamabad(context) {
      return handleGoogleAdsIslamabadRequest(context)
    },
    async ppcServicesIslamabad(context) {
      return handleGoogleAdsIslamabadRequest(context)
    },
    async servicesGoogleAdsIslamabad(context) {
      return handleGoogleAdsIslamabadRequest(context)
    },
    async locationPakistanIslamabadGoogleAds(context) {
      return handleGoogleAdsIslamabadRequest(context)
    },
    async locationIslamabadGoogleAds(context) {
      return handleGoogleAdsIslamabadRequest(context)
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

    async locationsPakistan(context) {
      const bookingUrl = process.env.BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"
      if (context.request.method === 'POST') {
        const formData = await context.request.formData()
        const fullName = formData.get('fullName')?.toString() ?? ''
        const email = formData.get('email')?.toString() ?? ''
        const phone = formData.get('phone')?.toString()
        const details = `Contact from Pakistan Hub Page. Target City: ${formData.get('details')?.toString() || 'Pakistan'}`

        if (!fullName || !email) {
          return context.render(
            <PakistanHubPage bookingUrl={bookingUrl} result={{ success: false, message: 'Please provide both your name and email.' }} />,
            { status: 400 },
          )
        }

        const result = await submitProposal({ fullName, email, phone, details, services: 'Pakistan Regional Operations' })
        return context.render(<PakistanHubPage bookingUrl={bookingUrl} result={result} />, {
          status: result.success ? 200 : 500,
        })
      }
      return context.render(<PakistanHubPage bookingUrl={bookingUrl} />)
    },

    locationsUk(context) {
      const bookingUrl = process.env.BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"
      return context.render(<UkHubPage bookingUrl={bookingUrl} />)
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

    admin(context) {
      if (isAuthenticated(context.request)) {
        return redirect('/admin/leads')
      }
      return redirect('/admin/login')
    },

    async adminLogin(context) {
      if (context.request.method !== 'POST') {
        if (isAuthenticated(context.request)) {
          return redirect('/admin/leads')
        }
        return context.render(<LoginPage />)
      }

      const formData = await context.request.formData()
      const password = formData.get('password')?.toString() ?? ''
      const redirectUrl = formData.get('redirectUrl')?.toString() || '/admin/leads'

      if (verifyPassword(password)) {
        const token = generateSessionToken()
        return redirect(redirectUrl, {
          headers: {
            'Set-Cookie': getSessionCookieHeader(token),
          },
        })
      }

      return context.render(
        <LoginPage error="Incorrect master password. Please verify and try again." redirectUrl={redirectUrl} />,
        { status: 401 },
      )
    },

    adminLogout() {
      return redirect('/admin/login', {
        headers: {
          'Set-Cookie': getLogoutCookieHeader(),
        },
      })
    },

    async adminLeads(context) {
      if (!isAuthenticated(context.request)) {
        return redirect('/admin/login')
      }

      if (context.request.method === 'POST') {
        const formData = await context.request.formData()
        const actionType = formData.get('actionType')?.toString()
        const leadIds = formData.get('leadIds')?.toString() || ''
        const ids = leadIds.split(',').map((id) => id.trim()).filter(Boolean)

        if (actionType === 'updateStatus') {
          const status = formData.get('status')?.toString() as LeadStatus
          if (status && ids.length) {
            await updateBulkStatus(ids, status)
          }
        } else if (actionType === 'updateNotes') {
          const notes = formData.get('notes')?.toString() ?? ''
          if (ids.length) {
            await updateLead(ids[0], { notes })
          }
        } else if (actionType === 'delete') {
          if (ids.length) {
            await deleteLeads(ids)
          }
        }

        const referer = context.request.headers.get('referer')
        return redirect(referer || '/admin/leads')
      }

      const url = new URL(context.request.url)
      const filters = {
        search: url.searchParams.get('search') || '',
        status: url.searchParams.get('status') || 'All',
        source: url.searchParams.get('source') || 'All',
        dateRange: url.searchParams.get('dateRange') || 'All',
        dateFrom: url.searchParams.get('dateFrom') || '',
        dateTo: url.searchParams.get('dateTo') || '',
      }

      const allLeads = await getAllLeads()
      const filteredLeads = filterLeads(allLeads, filters)

      return context.render(
        <DashboardPage
          leads={filteredLeads}
          allLeadsCount={allLeads.length}
          filters={filters}
        />,
      )
    },

    async adminLeadsExport(context) {
      if (!isAuthenticated(context.request)) {
        return redirect('/admin/login')
      }

      const url = new URL(context.request.url)
      const idsParam = url.searchParams.get('ids')
      const allLeads = await getAllLeads()
      let leadsToExport = allLeads

      if (idsParam) {
        const ids = idsParam.split(',').map((id) => id.trim()).filter(Boolean)
        leadsToExport = allLeads.filter((l) => ids.includes(l.id))
      } else {
        const filters = {
          search: url.searchParams.get('search') || '',
          status: url.searchParams.get('status') || 'All',
          source: url.searchParams.get('source') || 'All',
          dateRange: url.searchParams.get('dateRange') || 'All',
          dateFrom: url.searchParams.get('dateFrom') || '',
          dateTo: url.searchParams.get('dateTo') || '',
        }
        leadsToExport = filterLeads(allLeads, filters)
      }

      const csvContent = generateLeadsCsv(leadsToExport)
      const filename = `bellbee_leads_${new Date().toISOString().slice(0, 10)}.csv`

      return new Response(csvContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="${filename}"`,
        },
      })
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

async function handleMetaAdsIslamabadRequest(context: any) {
  const bookingUrl = process.env.BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"

  if (context.request.method !== 'POST') {
    return context.render(<MetaAdsIslamabadPage bookingUrl={bookingUrl} />)
  }

  const formData = await context.request.formData()
  const fullName = formData.get('fullName')?.toString() ?? ''
  const phone = formData.get('phone')?.toString() ?? ''
  const pageOrWebsite = formData.get('pageOrWebsite')?.toString() ?? ''
  const budget = formData.get('budget')?.toString() || '50k–200k'
  const goal = formData.get('goal')?.toString() || 'more WhatsApp chats'

  if (!fullName || !phone || !pageOrWebsite) {
    return context.render(
      <MetaAdsIslamabadPage
        bookingUrl={bookingUrl}
        result={{ success: false, message: 'Please provide your full name, WhatsApp number, and Facebook/Instagram page or website link.' }}
      />,
      { status: 400 },
    )
  }

  const details = `Meta Ads 24-Hour Teardown Request (Islamabad):
WhatsApp (delivery): ${phone}
Page / Website Link: ${pageOrWebsite}
Monthly Ad Budget: ${budget}
Main Goal: ${goal}`

  const email = pageOrWebsite.includes('@')
    ? pageOrWebsite
    : `${phone.replace(/\D/g, '') || 'lead'}@meta-ads.bellbeemedia.com`

  const result = await submitProposal({
    fullName,
    email,
    phone,
    services: 'Meta Ads Services Islamabad',
    details,
  })

  return context.render(<MetaAdsIslamabadPage bookingUrl={bookingUrl} result={result} />, {
    status: result.success ? 200 : 500,
  })
}

async function handleGoogleAdsIslamabadRequest(context: any) {
  const bookingUrl = process.env.BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"

  if (context.request.method !== 'POST') {
    return context.render(<GoogleAdsIslamabadPage bookingUrl={bookingUrl} />)
  }

  const formData = await context.request.formData()
  const businessName = formData.get('businessName')?.toString() ?? ''
  const phone = formData.get('phone')?.toString() ?? ''
  const website = formData.get('website')?.toString() ?? ''
  const budget = formData.get('budget')?.toString() || '50k–200k'
  const converts = formData.getAll('converts').join(', ') || 'WhatsApp'
  const message = formData.get('message')?.toString() ?? ''

  if (!businessName || !phone) {
    return context.render(
      <GoogleAdsIslamabadPage
        bookingUrl={bookingUrl}
        result={{ success: false, message: 'Please provide your business name and WhatsApp number.' }}
      />,
      { status: 400 },
    )
  }

  const details = `Google Ads 24-Hour Teardown Request (Islamabad):
Business Name: ${businessName}
WhatsApp: ${phone}
Website: ${website || 'None / Not yet'}
Monthly Ad Spend: ${budget}
What Converts: ${converts}
Message: ${message || 'None'}`

  const email = website.includes('@')
    ? website
    : `${phone.replace(/\D/g, '') || 'lead'}@google-ads.bellbeemedia.com`

  const result = await submitProposal({
    fullName: businessName,
    email,
    phone,
    services: 'Google Ads Services Islamabad',
    details,
  })

  return context.render(<GoogleAdsIslamabadPage bookingUrl={bookingUrl} result={result} />, {
    status: result.success ? 200 : 500,
  })
}



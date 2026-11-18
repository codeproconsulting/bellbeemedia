import { randomUUID } from 'node:crypto'
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
import { BirminghamPage } from '../ui/locations/uk/birmingham-page.tsx'
import { MetaAdsBirminghamPage } from '../ui/services/meta-ads-birmingham-page.tsx'
import { SeoBirminghamPage } from '../ui/services/seo-birmingham-page.tsx'
import { AiAutomationBirminghamPage } from '../ui/services/ai-automation-birmingham-page.tsx'

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
import { DashboardPage, inboxPageSize } from '../ui/admin/dashboard-page.tsx'
import { ProspectPage } from '../ui/admin/prospect-page.tsx'
import { LeadPage } from '../ui/admin/lead-page.tsx'
import {
  getAllLeads,
  getLead,
  filterLeads,
  updateLead,
  updateBulkLeads,
  generateLeadsCsv,
  leadStatuses,
  isLeadSubmissionId,
  isLegacyAdsEmail,
  saveLead,
} from '../data/leads.ts'
import {
  verifyPassword,
  generateSessionToken,
  isAuthenticated,
  getSessionCookieHeader,
  getLogoutCookieHeader,
} from '../data/auth.ts'
import { appwriteLeadStore, appwriteLeadsEnabled } from '../data/appwrite-leads.ts'
import { appwriteStaffConfig, getCrmStaff, signInCrmStaff, signOutCrmStaff } from '../data/appwrite-staff.ts'

const privateAdminHeaders = { 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex, nofollow' }

async function crmAccess(request: Request) {
  if (appwriteLeadsEnabled()) return getCrmStaff(request)
  return isAuthenticated(request) ? { role: 'admin' as const, id: undefined, staff: undefined } : null
}

function allowsCrmPost(request: Request) {
  return !appwriteLeadsEnabled() || request.headers.get('origin') === appwriteStaffConfig().origin
}

function crmLeadFilters(params: URLSearchParams) {
  return {
    search: params.get('search') || '',
    status: params.get('status') || 'All',
    source: params.get('source') || 'All',
    dateRange: params.get('dateRange') || 'All',
    dateFrom: params.get('dateFrom') || '',
    dateTo: params.get('dateTo') || '',
    assigned: params.get('assigned') === 'me' ? 'me' as const : undefined,
    archived: params.get('archived') === 'yes' ? 'yes' as const : undefined,
  }
}

export default createController(routes, {
  actions: {
    async assets(context) {
      const url = new URL(context.request.url)
      if (url.search) {
        const cleanRequest = new Request(url.origin + url.pathname, context.request)
        return (await assetServer.fetch(cleanRequest)) ?? new Response('Not Found', { status: 404 })
      }
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

      const result = await submitProposal({ fullName, email, company, phone, services, details }, formData.get('submissionId'))

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

        const result = await submitProposal({ fullName, email, phone, details, services: 'Pakistan Regional Operations' }, formData.get('submissionId'))
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
      }, formData.get('submissionId'))

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

    async locationUkBirmingham(context) {
      return handleLocationRequest(context, BirminghamPage, 'Birmingham')
    },
    async locationBirmingham(context) {
      return handleLocationRequest(context, BirminghamPage, 'Birmingham')
    },
    async locationUkBirminghamMetaAds(context) {
      return handleMetaAdsBirminghamRequest(context)
    },
    async birminghamMetaAds(context) {
      return handleMetaAdsBirminghamRequest(context)
    },
    async locationUkBirminghamSeo(context) {
      return handleSeoBirminghamRequest(context)
    },
    async birminghamSeo(context) {
      return handleSeoBirminghamRequest(context)
    },
    async locationUkBirminghamAiAutomation(context) {
      return handleAiAutomationBirminghamRequest(context)
    },
    async birminghamAiAutomation(context) {
      return handleAiAutomationBirminghamRequest(context)
    },

    async admin(context) {
      if (await crmAccess(context.request)) {
        return redirect('/admin/leads')
      }
      return redirect('/admin/login')
    },

    async adminLogin(context) {
      const staffLogin = appwriteLeadsEnabled()
      if (context.request.method !== 'POST') {
        if (await crmAccess(context.request)) {
          return redirect('/admin/leads')
        }
        return context.render(<LoginPage staffLogin={staffLogin} />, { headers: privateAdminHeaders })
      }

      if (!allowsCrmPost(context.request)) return new Response('Forbidden', { status: 403 })
      const formData = await context.request.formData()
      const password = formData.get('password')?.toString() ?? ''
      let cookie: string | null
      try {
        cookie = staffLogin
          ? await signInCrmStaff(formData.get('email')?.toString().trim() ?? '', password)
          : verifyPassword(password) ? getSessionCookieHeader(generateSessionToken()) : null
      } catch {
        return context.render(<LoginPage staffLogin={staffLogin} error="Sign-in is temporarily unavailable." />,
          { status: 503, headers: privateAdminHeaders })
      }
      if (cookie) {
        return redirect('/admin/leads', {
          status: 303, headers: { ...privateAdminHeaders, 'Set-Cookie': cookie },
        })
      }

      return context.render(
        <LoginPage staffLogin={staffLogin} error="Sign-in failed. Check your credentials and CRM access." />,
        { status: 401, headers: privateAdminHeaders },
      )
    },

    async adminLogout(context) {
      if (!allowsCrmPost(context.request)) return new Response('Forbidden', { status: 403 })
      let cookie: string
      try {
        cookie = appwriteLeadsEnabled() ? await signOutCrmStaff(context.request) : getLogoutCookieHeader()
      } catch {
        return new Response('Sign-out is temporarily unavailable. Please try again.', {
          status: 503, headers: privateAdminHeaders,
        })
      }
      return redirect('/admin/login', {
        status: 303, headers: { ...privateAdminHeaders, 'Set-Cookie': cookie },
      })
    },

    async adminLeads(context) {
      const access = await crmAccess(context.request)
      if (!access) {
        return redirect('/admin/login')
      }

      if (context.request.method === 'POST') {
        if (!allowsCrmPost(context.request) || access.role === 'viewer') {
          return new Response('Forbidden', { status: 403, headers: privateAdminHeaders })
        }
        const formData = await context.request.formData()
        const actionType = formData.get('actionType')?.toString()
        const leadIds = formData.get('leadIds')?.toString() || ''
        const ids = leadIds.split(',').map((id) => id.trim()).filter(Boolean)

        const status = leadStatuses.find((value) => value === formData.get('status'))
        const notes = formData.get('notes')
        if (access.role === 'member') {
          const updates = actionType === 'updateStatus' && status ? { status } :
            actionType === 'updateNotes' && typeof notes === 'string' ? { notes } : null
          if (ids.length !== 1 || !updates ||
              !await appwriteLeadStore('staff').updateOwned(ids[0], access.id, updates)) {
            return new Response('Forbidden', { status: 403, headers: privateAdminHeaders })
          }
        } else if (actionType === 'updateStatus') {
          if (status && ids.length) {
            await updateBulkLeads(ids, { status }, access.id)
          }
        } else if (actionType === 'updateNotes') {
          if (ids.length && typeof notes === 'string') {
            await updateLead(ids[0], { notes }, access.id)
          }
        } else if (actionType === 'assignOwner') {
          if (!access.staff) return new Response('Forbidden', { status: 403, headers: privateAdminHeaders })
          const ownerId = formData.get('ownerId')
          if (ids.length !== 1 || typeof ownerId !== 'string') {
            return new Response('Choose a lead and an owner.', { status: 400, headers: privateAdminHeaders })
          }
          if (ownerId && !access.staff.some((member) => member.id === ownerId && member.role !== 'viewer')) {
            return new Response('Choose a current BellBee CRM team member.', { status: 400, headers: privateAdminHeaders })
          }
          if (!await updateLead(ids[0], { ownerId: ownerId || null }, access.id)) {
            return new Response('Lead not found.', { status: 404, headers: privateAdminHeaders })
          }
        } else if (actionType === 'setArchived') {
          const archived = formData.get('archived')
          if (!ids.length || (archived !== 'true' && archived !== 'false')) {
            return new Response('Choose leads and an archive action.', { status: 400, headers: privateAdminHeaders })
          }
          await updateBulkLeads(ids, { archived: archived === 'true' }, access.id)
        } else {
          return new Response('Unknown lead action.', { status: 400, headers: privateAdminHeaders })
        }

        const referer = URL.parse(context.request.headers.get('referer') ?? '')
        const origin = appwriteLeadsEnabled() ? appwriteStaffConfig().origin : new URL(context.request.url).origin
        const returnTo = formData.get('returnTo')
        const record = typeof returnTo === 'string' ? URL.parse(returnTo, origin) : null
        if (ids.length === 1 && record?.origin === origin && record.pathname === routes.adminLead.href({ leadId: ids[0] })) {
          return redirect(`${record.pathname}${record.search}`, { status: 303, headers: privateAdminHeaders })
        }
        const filters = referer?.origin === origin && referer.pathname === '/admin/leads' ? referer.search : ''
        return redirect(`/admin/leads${filters}`, { status: 303 })
      }

      const url = new URL(context.request.url)
      const requestedView = url.searchParams.get('view')
      const view = requestedView === 'overview' || requestedView === 'pipeline' ? requestedView : 'inbox'
      const filters = crmLeadFilters(view === 'overview' ? new URLSearchParams() : url.searchParams)
      const allLeads = await getAllLeads()
      const filteredLeads = view === 'overview' ? allLeads : filterLeads(allLeads, filters, access.id)
      const requestedPage = Number(url.searchParams.get('page'))
      const lastPage = Math.max(1, Math.ceil(filteredLeads.length / inboxPageSize))
      const inboxPage = Number.isSafeInteger(requestedPage) ? Math.min(Math.max(1, requestedPage), lastPage) : 1
      const offset = (inboxPage - 1) * inboxPageSize

      return context.render(
        <DashboardPage
          leads={view === 'inbox' ? filteredLeads.slice(offset, offset + inboxPageSize) : filteredLeads}
          matchingLeadCount={filteredLeads.length}
          inboxPage={inboxPage}
          filters={filters}
          view={view}
          staff={access.staff}
          staffId={access.id}
          role={access.role}
        />,
        { headers: privateAdminHeaders },
      )
    },

    async adminLead(context) {
      const access = await crmAccess(context.request)
      if (!access) return redirect('/admin/login')
      const lead = await getLead(context.params.leadId)
      if (!lead) return new Response('Lead not found.', { status: 404, headers: privateAdminHeaders })

      const url = new URL(context.request.url)
      const back = URL.parse(url.searchParams.get('back') ?? '', url.origin)
      const backHref = back?.origin === url.origin && back.pathname === '/admin/leads'
        ? `${back.pathname}${back.search}`
        : lead.archived ? '/admin/leads?archived=yes' : '/admin/leads'
      const isAdmin = access.role === 'admin'
      const requestedTab = url.searchParams.get('tab')
      const historyEnabled = Boolean(access.id && process.env.APPWRITE_LEAD_EVENTS_TABLE_ID)
      const tab = requestedTab === 'history' && historyEnabled ? 'history' :
        requestedTab === 'notes' ? 'notes' : 'overview'
      const cursor = url.searchParams.get('before') || undefined
      if (cursor && !/^[A-Za-z0-9][A-Za-z0-9._-]{0,35}$/.test(cursor)) {
        return new Response('Invalid history cursor.', { status: 400, headers: privateAdminHeaders })
      }
      const history = tab === 'history' ? await appwriteLeadStore('staff').history(lead.id, cursor) : undefined
      return context.render(<LeadPage
        lead={lead}
        tab={tab}
        historyEnabled={historyEnabled}
        events={history?.events}
        nextHistory={history?.next}
        olderHistory={Boolean(cursor)}
        backHref={backHref}
        canEdit={isAdmin || (access.role === 'member' && lead.ownerId === access.id)}
        isAdmin={isAdmin}
        staff={access.staff}
      />, { headers: privateAdminHeaders })
    },

    async adminProspect(context) {
      const access = await crmAccess(context.request)
      if (!access) return redirect('/admin/login')
      if (!access.id || access.role === 'viewer') {
        return new Response('Forbidden', { status: 403, headers: privateAdminHeaders })
      }
      if (context.request.method === 'GET') {
        return context.render(<ProspectPage submissionId={randomUUID()} />, { headers: privateAdminHeaders })
      }
      if (context.request.method !== 'POST') return new Response('Method not allowed', { status: 405 })
      if (!allowsCrmPost(context.request)) return new Response('Forbidden', { status: 403 })

      const form = await context.request.formData()
      const fields = { fullName: 512, email: 512, phone: 256, company: 512, services: 2048, details: 65535 }
      const values: Record<keyof typeof fields, string> = { fullName: '', email: '', phone: '', company: '', services: '', details: '' }
      let invalid = false
      for (const [key, max] of Object.entries(fields) as [keyof typeof fields, number][]) {
        const value = form.get(key)
        if (typeof value === 'string') values[key] = value.trim().slice(0, max)
        if (value !== null && (typeof value !== 'string' || value.trim().length > max)) invalid = true
      }
      const id = form.get('submissionId')
      const submissionId = isLeadSubmissionId(id) ? id.toLowerCase() : randomUUID()
      const renderError = (error: string, status: number) => context.render(
        <ProspectPage submissionId={submissionId} values={values} error={error} />,
        { status, headers: privateAdminHeaders },
      )
      if (!isLeadSubmissionId(id)) return renderError('The form expired. Confirm the details and submit again.', 400)
      if (invalid || !values.fullName || (!values.email && !values.phone)) {
        return renderError('Enter a name and at least one contact method. Check the field lengths.', 400)
      }
      if (values.email && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) || isLegacyAdsEmail(values.email))) {
        return renderError('Enter a valid email address.', 400)
      }
      if (values.phone && !/\d/.test(values.phone)) return renderError('Enter a phone number with digits.', 400)

      try {
        await saveLead(values, submissionId, access.id)
      } catch {
        return renderError('The prospect could not be saved. Try again.', 503)
      }
      return redirect('/admin/leads?assigned=me&source=manual', { status: 303, headers: privateAdminHeaders })
    },

    async adminLeadsExport(context) {
      const access = await crmAccess(context.request)
      if (!access) {
        return redirect('/admin/login')
      }
      if (access.role !== 'admin') return new Response('Forbidden', { status: 403, headers: privateAdminHeaders })

      const url = new URL(context.request.url)
      const idsParam = url.searchParams.get('ids')
      const filters = crmLeadFilters(url.searchParams)
      const allLeads = await getAllLeads()
      let leadsToExport = filterLeads(allLeads, filters, access.id)

      if (idsParam) {
        const ids = new Set(idsParam.split(',').map((id) => id.trim()).filter(Boolean))
        leadsToExport = leadsToExport.filter((lead) => ids.has(lead.id))
      }

      const csvContent = generateLeadsCsv(leadsToExport)
      const filename = `bellbee_leads_${new Date().toISOString().slice(0, 10)}.csv`

      return new Response(csvContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="${filename}"`,
          'Cache-Control': 'private, no-store',
          'X-Robots-Tag': 'noindex, nofollow',
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

  const result = await submitProposal({ fullName, email, phone, details }, formData.get('submissionId'))

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
  }, formData.get('submissionId'))

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

  if (!fullName.trim() || !/\d/.test(phone) || !pageOrWebsite.trim()) {
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

  const email = emailFromWebsiteField(pageOrWebsite)

  const result = await submitProposal({
    fullName,
    email,
    phone,
    services: 'Meta Ads Services Islamabad',
    details,
  }, formData.get('submissionId'))

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

  if (!businessName.trim() || !/\d/.test(phone)) {
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

  const email = emailFromWebsiteField(website)

  const result = await submitProposal({
    fullName: businessName,
    email,
    phone,
    services: 'Google Ads Services Islamabad',
    details,
  }, formData.get('submissionId'))

  return context.render(<GoogleAdsIslamabadPage bookingUrl={bookingUrl} result={result} />, {
    status: result.success ? 200 : 500,
  })
}

function emailFromWebsiteField(value: string) {
  const email = value.trim()
  return /^[^\s@/:]+@[^\s@/:]+\.[^\s@/:]+$/.test(email) ? email : undefined
}

async function handleMetaAdsBirminghamRequest(context: any) {
  const bookingUrl = process.env.BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"

  if (context.request.method !== 'POST') {
    return context.render(<MetaAdsBirminghamPage bookingUrl={bookingUrl} />)
  }

  const formData = await context.request.formData()
  const fullName = formData.get('fullName')?.toString() ?? ''
  const email = formData.get('email')?.toString() ?? ''
  const website = formData.get('website')?.toString() ?? ''
  const challenge = formData.get('challenge')?.toString() ?? ''

  if (!fullName || !email || !website || !challenge) {
    return context.render(
      <MetaAdsBirminghamPage
        bookingUrl={bookingUrl}
        result={{
          success: false,
          message: 'Please provide your full name, work email, business website or page URL, and what makes your advertising difficult to judge.',
        }}
      />,
      { status: 400 },
    )
  }

  const phone = formData.get('phone')?.toString()
  const adStatus = formData.get('adStatus')?.toString() || 'Unspecified'
  const catchment = formData.get('catchment')?.toString() || 'Birmingham / UK'

  const details = `Meta Ads Teardown Request (Birmingham UK):
Business / Website: ${website}
Ad Status: ${adStatus}
Service Catchment: ${catchment}
Investigation Challenge: ${challenge}
Optional WhatsApp: ${phone || 'None provided'}`

  const result = await submitProposal({
    fullName,
    email,
    phone,
    company: website,
    services: 'Meta Ads Services in Birmingham UK',
    details,
  }, formData.get('submissionId'))

  return context.render(<MetaAdsBirminghamPage bookingUrl={bookingUrl} result={result} />, {
    status: result.success ? 200 : 500,
  })
}

async function handleSeoBirminghamRequest(context: any) {
  const bookingUrl = process.env.BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"

  if (context.request.method !== 'POST') {
    return context.render(<SeoBirminghamPage bookingUrl={bookingUrl} />)
  }

  const formData = await context.request.formData()
  const fullName = formData.get('fullName')?.toString() ?? ''
  const email = formData.get('email')?.toString() ?? ''
  const website = formData.get('website')?.toString() ?? ''
  const priorityService = formData.get('priorityService')?.toString() ?? ''
  const deliveryArea = formData.get('deliveryArea')?.toString() ?? ''

  if (!fullName || !email || !website || !priorityService || !deliveryArea) {
    return context.render(
      <SeoBirminghamPage
        bookingUrl={bookingUrl}
        result={{
          success: false,
          message: 'Please provide your name, work email, website, priority service, and delivery area.',
        }}
      />,
      { status: 400 },
    )
  }

  const company = formData.get('company')?.toString()
  const phone = formData.get('phone')?.toString()
  const enquiryFit = formData.get('enquiryFit')?.toString() || 'None provided'
  const marketingConsent = formData.get('marketingConsent')?.toString() === 'yes' ? 'Yes' : 'No'

  const details = `SEO Teardown Request (Birmingham UK):
Website: ${website}
Priority Service: ${priorityService}
Delivery Area: ${deliveryArea}
Company: ${company || 'None'}
Ideal Enquiry Fit: ${enquiryFit}
Marketing Consent: ${marketingConsent}
Optional Phone/WhatsApp: ${phone || 'None provided'}`

  const result = await submitProposal({
    fullName,
    email,
    phone,
    company: company || website,
    services: 'SEO Services in Birmingham UK',
    details,
  }, formData.get('submissionId'))

  return context.render(<SeoBirminghamPage bookingUrl={bookingUrl} result={result} />, {
    status: result.success ? 200 : 500,
  })
}

async function handleAiAutomationBirminghamRequest(context: any) {
  const bookingUrl = process.env.BOOKING_URL || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"

  if (context.request.method !== 'POST') {
    return context.render(<AiAutomationBirminghamPage bookingUrl={bookingUrl} />)
  }

  const formData = await context.request.formData()
  const fullName = formData.get('fullName')?.toString() ?? ''
  const email = formData.get('email')?.toString() ?? ''
  const businessName = formData.get('businessName')?.toString() ?? ''
  const problem = formData.get('problem')?.toString() ?? ''

  if (!fullName || !email || !businessName || !problem) {
    return context.render(
      <AiAutomationBirminghamPage
        bookingUrl={bookingUrl}
        result={{
          success: false,
          message: 'Please provide your name, work email, business name, and workflow/problem description.',
        }}
      />,
      { status: 400 },
    )
  }

  const phone = formData.get('phone')?.toString()

  const details = `AI Automation Teardown Request (Birmingham UK):
Business Name: ${businessName}
Problem / Workflow: ${problem}
Optional Phone/WhatsApp: ${phone || 'None provided'}`

  const result = await submitProposal({
    fullName,
    email,
    phone,
    company: businessName,
    services: 'AI Automation Services in Birmingham UK',
    details,
  }, formData.get('submissionId'))

  return context.render(<AiAutomationBirminghamPage bookingUrl={bookingUrl} result={result} />, {
    status: result.success ? 200 : 500,
  })
}



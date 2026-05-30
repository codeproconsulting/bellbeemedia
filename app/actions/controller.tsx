import { createController } from 'remix/router'
import { redirect } from 'remix/response/redirect'
import { assetServer } from '../assets.ts'
import { routes } from '../routes.ts'
import { HomePage } from '../ui/home-page.tsx'
import { ServicesPage } from '../ui/services-page.tsx'
import { AboutPage } from '../ui/about-page.tsx'
import { ContactPage } from '../ui/contact-page.tsx'
import { OurWorkPage } from '../ui/our-work-page.tsx'
import { BlogsPage } from '../ui/blogs-page.tsx'
import { GetProposalPage } from '../ui/get-proposal-page.tsx'

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
    ourWork(context) {
      return context.render(<OurWorkPage />)
    },
    blogs(context) {
      return context.render(<BlogsPage />)
    },
    aboutUs(context) {
      return context.render(<AboutPage />)
    },
    getProposal(context) {
      return context.render(<GetProposalPage />)
    },
    contact() {
      return redirect(routes.getProposal.href())
    },
  },
})

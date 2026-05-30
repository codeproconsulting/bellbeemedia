import { form, get, route } from 'remix/routes'

export const routes = route({
  assets: get('/assets/*path'),
  home: '/',
  services: '/services',
  ourWork: '/our-work',
  blogs: '/blogs',
  aboutUs: '/about-us',
  getProposal: get('/get-proposal'),
  contact: get('/contact'),
})

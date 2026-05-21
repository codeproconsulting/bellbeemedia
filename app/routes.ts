import { form, get, route } from 'remix/routes'

export const routes = route({
  assets: get('/assets/*path'),
  home: '/',
  services: '/services',
  about: '/about',
  contact: get('/contact'),
})

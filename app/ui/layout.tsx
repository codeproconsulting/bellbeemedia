import { type RemixNode } from 'remix/ui'
import { routes } from '../routes.ts'
import { Document } from './document.tsx'

export function Layout() {
  return ({ children, title, description, head, hideFooter }: { children: RemixNode; title?: string; description?: string; head?: RemixNode; hideFooter?: boolean }) => (
    <Document title={title} description={description} head={head}>
      <div class="flex flex-col min-h-screen bg-white">
        {/* Mobile menu toggle input at root level */}
        <input type="checkbox" id="mobile-menu-toggle" class="hidden peer" />

        {/* Floating Glassmorphic Header */}
        <header class="sticky top-3 z-50 w-full px-4 max-w-7xl mx-auto overflow-visible pointer-events-auto">
          <div class="bg-white/85 backdrop-blur-xl border border-surface-2/80 shadow-lg shadow-black/[0.03] hover:border-surface-3 transition-all duration-300 rounded-2xl px-6 h-16 flex items-center justify-between relative">

            {/* Logo */}
            <div class="flex-1 flex justify-start items-center">
              <a href={routes.home.href()} class="inline-flex items-center gap-2.5 group">
                <img src="/Logo.svg" alt="Bell Bee Media" class="h-9 w-auto group-hover:scale-105 transition-transform duration-300" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav class="h-full hidden md:flex flex-none justify-center items-center gap-6 lg:gap-8 text-sm font-semibold text-surface-dark1">

              {/* Services Dropdown */}
              <div class="group h-full flex items-center nav-dropdown-group">
                <a href={routes.services.href()} class="h-full hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer py-2 whitespace-nowrap">
                  Services <i class="ph ph-caret-down text-xs inline-block transition-transform duration-300"></i>
                </a>

                <div class="nav-dropdown-menu w-[92vw] max-w-5xl z-50">
                  <div class="bg-white/95 backdrop-blur-2xl rounded-3xl border border-surface-2 shadow-2xl p-7">
                    <div class="grid grid-cols-12 gap-8">
                      <div class="col-span-12 flex justify-between items-center border-b border-surface-2 pb-4">
                        <div>
                          <h3 class="text-xl font-black text-surface-dark0 tracking-tight">Our Marketing Solutions</h3>
                          <p class="text-xs text-text-secondary mt-1">Full-service digital growth, performance advertising, and creative production.</p>
                        </div>
                        <a href={routes.services.href()} class="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                          View All Services <i class="ph ph-arrow-right"></i>
                        </a>
                      </div>

                      <div class="col-span-12 grid grid-cols-3 gap-4">
                        <a href={routes.servicesSocialMedia.href()} class="flex gap-3 p-3.5 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                          <div class="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 text-lg group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                            <i class="ph-fill ph-heart"></i>
                          </div>
                          <div>
                            <h4 class="font-bold text-xs text-surface-dark0 group-hover/item:text-primary transition-colors">Social Media</h4>
                            <p class="text-[11px] text-text-secondary mt-0.5 leading-normal">Community growth & content.</p>
                          </div>
                        </a>

                        <a href={routes.servicesPerformanceAds.href()} class="flex gap-3 p-3.5 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                          <div class="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 text-lg group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors">
                            <i class="ph-fill ph-chart-line-up"></i>
                          </div>
                          <div>
                            <h4 class="font-bold text-xs text-surface-dark0 group-hover/item:text-primary transition-colors">Performance Ads</h4>
                            <p class="text-[11px] text-text-secondary mt-0.5 leading-normal">Meta & Google high-ROAS PPC.</p>
                          </div>
                        </a>

                        <a href={routes.servicesDigitalPr.href()} class="flex gap-3 p-3.5 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                          <div class="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 text-lg group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                            <i class="ph-fill ph-megaphone"></i>
                          </div>
                          <div>
                            <h4 class="font-bold text-xs text-surface-dark0 group-hover/item:text-primary transition-colors">Digital PR</h4>
                            <p class="text-[11px] text-text-secondary mt-0.5 leading-normal">Influencers & media authority.</p>
                          </div>
                        </a>

                        <a href={routes.servicesProduction.href()} class="flex gap-3 p-3.5 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                          <div class="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 text-lg group-hover/item:bg-red-600 group-hover/item:text-white transition-colors">
                            <i class="ph-fill ph-play"></i>
                          </div>
                          <div>
                            <h4 class="font-bold text-xs text-surface-dark0 group-hover/item:text-primary transition-colors">Production</h4>
                            <p class="text-[11px] text-text-secondary mt-0.5 leading-normal">Video ads, shoot & photography.</p>
                          </div>
                        </a>

                        <a href={routes.servicesWebSolutions.href()} class="flex gap-3 p-3.5 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                          <div class="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-lg group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                            <i class="ph-fill ph-desktop"></i>
                          </div>
                          <div>
                            <h4 class="font-bold text-xs text-surface-dark0 group-hover/item:text-primary transition-colors">Web Solutions</h4>
                            <p class="text-[11px] text-text-secondary mt-0.5 leading-normal">Shopify & landing pages CRO.</p>
                          </div>
                        </a>

                        <a href={routes.servicesDesignCopy.href()} class="flex gap-3 p-3.5 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                          <div class="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-lg group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                            <i class="ph-fill ph-bezier-curve"></i>
                          </div>
                          <div>
                            <h4 class="font-bold text-xs text-surface-dark0 group-hover/item:text-primary transition-colors">Design & Copy</h4>
                            <p class="text-[11px] text-text-secondary mt-0.5 leading-normal">Branding & conversion copywriting.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Work Dropdown */}
              <div class="group h-full flex items-center nav-dropdown-group">
                <a href={routes.ourWork.href()} class="h-full hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer py-2 whitespace-nowrap">
                  Our Work <i class="ph ph-caret-down text-xs inline-block transition-transform duration-300"></i>
                </a>

                <div class="nav-dropdown-menu w-[92vw] max-w-4xl z-50">
                  <div class="bg-white/95 backdrop-blur-2xl rounded-3xl border border-surface-2 shadow-2xl p-7">
                    <div class="grid grid-cols-2 gap-4">
                      <a href={routes.ourWorkCaseStudies.href()} class="flex gap-3.5 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                          <i class="ph-fill ph-folder-open"></i>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Case Studies</h4>
                          <p class="text-xs text-text-secondary mt-0.5">Explore real client results across SEO, ads, & branding.</p>
                        </div>
                      </a>

                      <a href={routes.ourWorkClientResults.href()} class="flex gap-3.5 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors">
                          <i class="ph-fill ph-chart-bar"></i>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Client Results</h4>
                          <p class="text-xs text-text-secondary mt-0.5">Verified ROAS, conversion lifts, and revenue growth.</p>
                        </div>
                      </a>

                      <a href={routes.ourWorkSuccessStories.href()} class="flex gap-3.5 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                          <i class="ph-fill ph-sparkles"></i>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Success Stories</h4>
                          <p class="text-xs text-text-secondary mt-0.5">Stories of scaling consumer brands to 7-figure revenue.</p>
                        </div>
                      </a>

                      <a href={routes.ourWorkIndustryExpertise.href()} class="flex gap-3.5 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                          <i class="ph-fill ph-briefcase"></i>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Industry Expertise</h4>
                          <p class="text-xs text-text-secondary mt-0.5">Specialized growth playbooks for 14+ sectors.</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Dropdown */}
              <div class="group h-full flex items-center nav-dropdown-group">
                <a href={routes.aboutUs.href()} class="h-full hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer py-2 whitespace-nowrap">
                  About <i class="ph ph-caret-down text-xs inline-block transition-transform duration-300"></i>
                </a>

                <div class="nav-dropdown-menu w-[92vw] max-w-3xl z-50">
                  <div class="bg-white/95 backdrop-blur-2xl rounded-3xl border border-surface-2 shadow-2xl p-7">
                    <div class="grid grid-cols-2 gap-4">
                      <a href={routes.aboutUsOurCompany.href()} class="flex gap-3.5 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                          <i class="ph-fill ph-users"></i>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Our Company</h4>
                          <p class="text-xs text-text-secondary mt-0.5">Our story, values, and leadership team.</p>
                        </div>
                      </a>

                      <a href={routes.aboutUsOurMission.href()} class="flex gap-3.5 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors">
                          <i class="ph-fill ph-target"></i>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Our Mission</h4>
                          <p class="text-xs text-text-secondary mt-0.5">Pure focus on commercial growth & transparency.</p>
                        </div>
                      </a>

                      <a href={routes.aboutUsWhyChooseUs.href()} class="flex gap-3.5 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-yellow-600 group-hover/item:text-white transition-colors">
                          <i class="ph-fill ph-star"></i>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Why Choose Us</h4>
                          <p class="text-xs text-text-secondary mt-0.5">Our creative advantage and growth engine.</p>
                        </div>
                      </a>

                      <a href={routes.aboutUsCareers.href()} class="flex gap-3.5 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                        <div class="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                          <i class="ph-fill ph-rocket"></i>
                        </div>
                        <div>
                          <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Careers</h4>
                          <p class="text-xs text-text-secondary mt-0.5">Join our remote-first team of specialists.</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <a href={routes.blogs.href()} class="h-full hover:text-primary transition-colors flex items-center py-2 whitespace-nowrap">Blog</a>
            </nav>

            {/* CTA Button & Mobile Toggle */}
            <div class="flex-1 flex justify-end items-center gap-3">
              <a href={routes.getProposal.href()} class="hidden md:inline-flex px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-full hover:bg-primary-light transition-all shadow-md shadow-primary/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] items-center whitespace-nowrap">
                Get a Proposal <i class="ph ph-arrow-right ml-1.5"></i>
              </a>

              {/* Mobile Menu Toggle */}
              <label for="mobile-menu-toggle" class="md:hidden cursor-pointer p-2 select-none flex flex-col gap-1.5 z-50">
                <span class="line-1 block w-5 h-0.5 bg-surface-dark0 transition-all duration-300 origin-center"></span>
                <span class="line-2 block w-5 h-0.5 bg-surface-dark0 transition-all duration-300 origin-center"></span>
                <span class="line-3 block w-5 h-0.5 bg-surface-dark0 transition-all duration-300 origin-center"></span>
              </label>

              <style>{`
                body:has(#mobile-menu-toggle:checked) {
                  overflow: hidden;
                }
                #mobile-menu-toggle:checked ~ header label .line-1 {
                  transform: rotate(45deg) translate(4px, 4px);
                }
                #mobile-menu-toggle:checked ~ header label .line-2 {
                  opacity: 0;
                }
                #mobile-menu-toggle:checked ~ header label .line-3 {
                  transform: rotate(-45deg) translate(4px, -4px);
                }
                .nav-dropdown-group {
                  position: static;
                }
                .nav-dropdown-menu {
                  position: absolute !important;
                  top: 100% !important;
                  left: 0 !important;
                  right: 0 !important;
                  margin-left: auto !important;
                  margin-right: auto !important;
                  padding-top: 10px;
                  opacity: 0;
                  visibility: hidden;
                  pointer-events: none;
                  transform: translateY(-8px);
                  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.2s ease;
                  z-index: 50;
                }
                .nav-dropdown-group:hover .nav-dropdown-menu,
                .nav-dropdown-menu.is-open,
                .nav-dropdown-menu.is-active {
                  opacity: 1 !important;
                  visibility: visible !important;
                  transform: translateY(0) !important;
                  pointer-events: auto !important;
                }
                .nav-dropdown-group:hover i.ph-caret-down,
                .nav-dropdown-group.is-open i.ph-caret-down {
                  transform: rotate(180deg);
                }
              `}</style>
            </div>
          </div>
        </header>

        {/* Mobile Drawer Menu */}
        <div id="mobile-drawer" class="fixed inset-x-0 top-20 bottom-0 bg-white/95 backdrop-blur-2xl z-40 transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 md:hidden flex flex-col p-6 gap-6 overflow-y-auto border-t border-surface-2 shadow-2xl">
          <a href="/services" class="text-lg font-bold text-surface-dark0 hover:text-primary transition-colors">Services</a>
          <a href="/our-work" class="text-lg font-bold text-surface-dark0 hover:text-primary transition-colors">Our Work</a>
          <a href="/about-us" class="text-lg font-bold text-surface-dark0 hover:text-primary transition-colors">About</a>
          <a href="/blogs" class="text-lg font-bold text-surface-dark0 hover:text-primary transition-colors">Blog</a>

          <div class="h-px bg-surface-2 my-2"></div>

          <a href={routes.getProposal.href()} class="w-full py-3.5 bg-primary text-white text-center text-sm font-bold rounded-2xl hover:bg-primary-light transition-colors shadow-md shadow-primary/20 flex items-center justify-center gap-2">
            Get a Free Proposal <i class="ph ph-arrow-right"></i>
          </a>
        </div>

        <main class="flex-grow">
          {children}
        </main>

        {!hideFooter && (
          <footer class="relative bg-[#030d1a] text-white pt-16 pb-0 mt-auto overflow-hidden">
            <div class="container mx-auto px-4 max-w-7xl relative z-10">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                {/* Brand Column */}
                <div class="lg:col-span-4">
                  <div class="inline-flex items-center bg-white rounded-xl px-3.5 py-2 shadow-sm mb-6">
                    <img src="/Logo.svg" alt="Bell Bee Media" class="h-8 w-auto" />
                  </div>
                  <p class="text-[#bccbdc] text-sm leading-relaxed max-w-sm mb-8 font-normal">
                    Elevating your digital presence with performance marketing, data-driven paid acquisition, and scroll-stopping creative production.
                  </p>
                  <div class="flex gap-3">
                    <a
                      href="https://www.facebook.com/bellbeemedia"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1b75bc] border border-white/10 hover:border-[#1b75bc] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-sm"
                      aria-label="Facebook"
                    >
                      <i class="ph-bold ph-facebook-logo text-lg"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/bellbeemedia"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f7941d] border border-white/10 hover:border-[#f7941d] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-sm"
                      aria-label="Instagram"
                    >
                      <i class="ph-bold ph-instagram-logo text-lg"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/bellbeemedia"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-10 h-10 rounded-full bg-white/5 hover:bg-[#1b75bc] border border-white/10 hover:border-[#1b75bc] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <i class="ph-bold ph-linkedin-logo text-lg"></i>
                    </a>
                  </div>
                </div>

                {/* Company Column */}
                <div class="lg:col-span-2">
                  <h4 class="font-bold text-white text-base mb-6 tracking-wide" style="color: #ffffff !important;">Company</h4>
                  <ul class="flex flex-col gap-3.5 text-sm" style="color: #bccbdc !important;">
                    <li><a href={routes.home.href()} class="hover:text-white transition-colors">Home</a></li>
                    <li><a href={routes.services.href()} class="hover:text-white transition-colors">Services</a></li>
                    <li><a href={routes.ourWork.href()} class="hover:text-white transition-colors">Our Work</a></li>
                    <li><a href={routes.aboutUs.href()} class="hover:text-white transition-colors">About</a></li>
                    <li><a href={routes.blogs.href()} class="hover:text-white transition-colors">Blog</a></li>
                    <li><a href={routes.getProposal.href()} class="hover:text-white transition-colors">Get a Quote</a></li>
                  </ul>
                </div>

                {/* Service Locations Column */}
                <div class="lg:col-span-3">
                  <h4 class="font-bold text-white text-base mb-6 tracking-wide" style="color: #ffffff !important;">Service Locations</h4>
                  <ul class="flex flex-col gap-3.5 text-sm" style="color: #bccbdc !important;">
                    <li>
                      <a href={routes.locations.href()} class="hover:text-white inline-flex items-center gap-2 transition-colors">
                        <span>View Locations</span>
                        <i class="ph-bold ph-arrow-right text-xs text-[#f7941d]"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Column */}
                <div class="lg:col-span-3">
                  <h4 class="font-bold text-white text-base mb-6 tracking-wide" style="color: #ffffff !important;">Contact</h4>
                  <ul class="flex flex-col gap-4 text-sm" style="color: #bccbdc !important;">
                    <li class="flex items-center gap-3">
                      <i class="ph-bold ph-envelope-simple text-base shrink-0 text-[#f7941d]"></i>
                      <a href="mailto:hello@bellbeemedia.com" class="hover:text-white transition-colors">hello@bellbeemedia.com</a>
                    </li>
                    <li class="flex items-center gap-3">
                      <i class="ph-bold ph-phone text-base shrink-0 text-[#f7941d]"></i>
                      <a href="tel:+923701902120" class="hover:text-white transition-colors">+92 370 190 2120</a>
                    </li>
                    <li class="flex items-start gap-3">
                      <i class="ph-bold ph-map-pin text-base shrink-0 mt-0.5 text-[#f7941d]"></i>
                      <span class="leading-snug">Office #204, Vista Building,<br />I-8 Markaz, Islamabad</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Copyright and Legal Bar */}
              <div
                class="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs relative z-10"
                style="border-top: 1px solid rgba(255, 255, 255, 0.12); color: #94a3b8 !important;"
              >
                <div>
                  &copy; {new Date().getFullYear()} Bell Bee Media. All rights reserved.
                </div>
                <div class="flex items-center gap-5 sm:gap-6">
                  <a href={routes.privacy.href()} class="hover:text-white transition-colors">Privacy Policy</a>
                  <a href={routes.terms.href()} class="hover:text-white transition-colors">Terms of Service</a>
                  <a
                    href="#"
                    id="footer-back-to-top"
                    aria-label="Back to top"
                    class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shrink-0"
                    style="background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15); color: #ffffff;"
                  >
                    <i class="ph-bold ph-arrow-up text-xs"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Giant Bottom Watermark Typography matching Screenshot (Half-submerged cut-off) */}
            <div
              class="w-full overflow-hidden flex justify-center items-start pt-2 sm:pt-4 select-none pointer-events-none relative z-10"
              style="height: clamp(36px, 7.5vw, 102px);"
            >
              <span
                class="font-black text-center whitespace-nowrap tracking-tight"
                style="font-size: clamp(62px, 14vw, 195px); line-height: 0.88; font-family: inherit; font-weight: 900; background: linear-gradient(180deg, rgba(186, 230, 253, 0.4) 0%, rgba(44, 188, 238, 0.75) 42%, rgba(27, 117, 188, 0.92) 68%, rgba(15, 45, 82, 0.3) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; color: transparent; opacity: 0.92;"
              >
                Bell Bee Media
              </span>
            </div>
          </footer>
        )}

        {/* Dropdown Hover Intent & Gap Elimination Script */}
        <script>
          {`
          (function() {
            function initNavDropdowns() {
              var groups = document.querySelectorAll('.nav-dropdown-group');
              var activeGroup = null;
              var closeTimer = null;

              function closeAll() {
                if (closeTimer) {
                  clearTimeout(closeTimer);
                  closeTimer = null;
                }
                groups.forEach(function(g) {
                  g.classList.remove('is-open');
                  var m = g.querySelector('.nav-dropdown-menu');
                  if (m) m.classList.remove('is-open', 'is-active');
                  var icon = g.querySelector('i.ph-caret-down');
                  if (icon) icon.classList.remove('rotate-180');
                });
                activeGroup = null;
              }

              function openGroup(group) {
                if (closeTimer) {
                  clearTimeout(closeTimer);
                  closeTimer = null;
                }
                if (activeGroup === group) return;

                if (activeGroup && activeGroup !== group) {
                  activeGroup.classList.remove('is-open');
                  var prevM = activeGroup.querySelector('.nav-dropdown-menu');
                  if (prevM) prevM.classList.remove('is-open', 'is-active');
                  var prevIcon = activeGroup.querySelector('i.ph-caret-down');
                  if (prevIcon) prevIcon.classList.remove('rotate-180');
                }

                group.classList.add('is-open');
                var menu = group.querySelector('.nav-dropdown-menu');
                if (menu) menu.classList.add('is-open', 'is-active');
                var icon = group.querySelector('i.ph-caret-down');
                if (icon) icon.classList.add('rotate-180');
                activeGroup = group;
              }

              function scheduleClose() {
                if (closeTimer) clearTimeout(closeTimer);
                closeTimer = setTimeout(function() {
                  closeAll();
                }, 250);
              }

              groups.forEach(function(group) {
                var menu = group.querySelector('.nav-dropdown-menu');

                group.addEventListener('mouseenter', function() {
                  openGroup(group);
                });

                group.addEventListener('mouseleave', function() {
                  scheduleClose();
                });

                if (menu) {
                  menu.addEventListener('mouseenter', function() {
                    if (closeTimer) {
                      clearTimeout(closeTimer);
                      closeTimer = null;
                    }
                  });

                  menu.addEventListener('mouseleave', function() {
                    scheduleClose();
                  });
                }
              });

              // Close dropdown when hovering non-dropdown nav items
              var nonDropdownLinks = document.querySelectorAll('header nav > a, header .flex-1 a');
              nonDropdownLinks.forEach(function(link) {
                link.addEventListener('mouseenter', function() {
                  closeAll();
                });
              });

              document.addEventListener('click', function(e) {
                if (!e.target.closest('.nav-dropdown-group')) {
                  closeAll();
                }
              });

              document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                  closeAll();
                }
              });

              var btt = document.getElementById('footer-back-to-top');
              if (btt) {
                btt.addEventListener('click', function(e) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                });
              }
            }

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initNavDropdowns);
            } else {
              initNavDropdowns();
            }
          })();
          `}
        </script>
      </div>
    </Document>
  )
}

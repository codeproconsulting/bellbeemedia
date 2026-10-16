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
          <div class="bg-white/85 backdrop-blur-xl border border-surface-2/80 shadow-lg shadow-black/[0.03] hover:border-surface-3 transition-all duration-300 rounded-2xl px-6 h-16 flex items-center justify-between">
            
            {/* Logo */}
            <div class="flex-1 flex justify-start items-center">
              <a href={routes.home.href()} class="inline-flex items-center gap-2.5 group">
                <img src="/Logo.svg" alt="Bell Bee Media" class="h-9 w-auto group-hover:scale-105 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav class="hidden md:flex flex-none justify-center items-center gap-6 lg:gap-8 text-sm font-semibold text-surface-dark1">
              
              {/* Services Dropdown */}
              <div class="group flex items-center">
                <a href={routes.services.href()} class="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer py-2 whitespace-nowrap">
                  Services <i class="ph ph-caret-down text-xs inline-block group-hover:rotate-180 transition-transform duration-300"></i>
                </a>
                
                <div class="fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl opacity-0 transform scale-95 origin-top pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                  <div class="bg-white/95 backdrop-blur-2xl rounded-3xl border border-surface-2 shadow-2xl p-8">
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
              <div class="group flex items-center">
                <a href={routes.ourWork.href()} class="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer py-2 whitespace-nowrap">
                  Our Work <i class="ph ph-caret-down text-xs inline-block group-hover:rotate-180 transition-transform duration-300"></i>
                </a>
                
                <div class="fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl opacity-0 transform scale-95 origin-top pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                  <div class="bg-white/95 backdrop-blur-2xl rounded-3xl border border-surface-2 shadow-2xl p-8">
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

              {/* Locations Dropdown (NEW!) */}
              <div class="group flex items-center">
                <a href={routes.locations.href()} class="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer py-2 whitespace-nowrap">
                  Locations <i class="ph ph-caret-down text-xs inline-block group-hover:rotate-180 transition-transform duration-300"></i>
                </a>
                
                <div class="fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl opacity-0 transform scale-95 origin-top pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                  <div class="bg-white/95 backdrop-blur-2xl rounded-3xl border border-surface-2 shadow-2xl p-8">
                    <div class="flex justify-between items-center border-b border-surface-2 pb-4 mb-4">
                      <div>
                        <h3 class="text-lg font-black text-surface-dark0 tracking-tight flex items-center gap-2">
                          <span class="text-xl">🇵🇰</span> Service Locations & Regional Hubs
                        </h3>
                        <p class="text-xs text-text-secondary mt-0.5">Dedicated performance marketing & creative teams across Pakistan & UK.</p>
                      </div>
                      <div class="flex items-center gap-3">
                        <a href={routes.locationsPakistan.href()} class="text-xs font-bold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                          🇵🇰 Pakistan Cities
                        </a>
                        <a href={routes.locationsUk.href()} class="text-xs font-bold px-3 py-1.5 rounded-full bg-surface-2 text-surface-dark1 border border-surface-3 hover:bg-surface-3 transition-colors">
                          🇬🇧 UK Hubs
                        </a>
                        <a href={routes.locations.href()} class="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                          All Regions <i class="ph ph-arrow-right"></i>
                        </a>
                      </div>
                    </div>

                    <div class="grid grid-cols-4 gap-4">
                      <a href="/locations/pakistan/islamabad" class="flex flex-col gap-1.5 p-4 rounded-xl border border-surface-2 hover:border-primary bg-white hover:shadow-md transition-all group/item">
                        <div class="flex items-center gap-2">
                          <div class="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                            <i class="ph-fill ph-buildings"></i>
                          </div>
                          <div>
                            <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Islamabad</h4>
                            <span class="text-[10px] font-bold text-primary">Flagship HQ</span>
                          </div>
                        </div>
                        <p class="text-[11px] text-text-secondary leading-normal">Office #204, Vista Bldg, I-8 Markaz.</p>
                      </a>

                      <a href={routes.locationLahore.href()} class="flex flex-col gap-1.5 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                        <div class="flex items-center gap-2">
                          <div class="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center text-sm group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors">
                            <i class="ph-fill ph-storefront"></i>
                          </div>
                          <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Lahore</h4>
                        </div>
                        <p class="text-[11px] text-text-secondary leading-normal">Gulberg & DHA tech hub.</p>
                      </a>

                      <a href={routes.locationKarachi.href()} class="flex flex-col gap-1.5 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                        <div class="flex items-center gap-2">
                          <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center text-sm group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                            <i class="ph-fill ph-globe"></i>
                          </div>
                          <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Karachi</h4>
                        </div>
                        <p class="text-[11px] text-text-secondary leading-normal">Clifton & PECHS retail hub.</p>
                      </a>

                      <a href={routes.locationRawalpindi.href()} class="flex flex-col gap-1.5 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-md transition-all group/item">
                        <div class="flex items-center gap-2">
                          <div class="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center text-sm group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                            <i class="ph-fill ph-city"></i>
                          </div>
                          <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors">Rawalpindi</h4>
                        </div>
                        <p class="text-[11px] text-text-secondary leading-normal">Bahria Town & Saddar hub.</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <a href={routes.blogs.href()} class="hover:text-primary transition-colors flex items-center py-2 whitespace-nowrap">Blogs</a>

              {/* About Us Dropdown */}
              <div class="group flex items-center">
                <a href={routes.aboutUs.href()} class="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer py-2 whitespace-nowrap">
                  About Us <i class="ph ph-caret-down text-xs inline-block group-hover:rotate-180 transition-transform duration-300"></i>
                </a>
                
                <div class="fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl opacity-0 transform scale-95 origin-top pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                  <div class="bg-white/95 backdrop-blur-2xl rounded-3xl border border-surface-2 shadow-2xl p-8">
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
              `}</style>
            </div>
          </div>
        </header>

        {/* Mobile Drawer Menu */}
        <div id="mobile-drawer" class="fixed inset-x-0 top-20 bottom-0 bg-white/95 backdrop-blur-2xl z-40 transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 md:hidden flex flex-col p-6 gap-6 overflow-y-auto border-t border-surface-2 shadow-2xl">
          <a href="/services" class="text-lg font-bold text-surface-dark0 hover:text-primary transition-colors">Services</a>
          <a href="/our-work" class="text-lg font-bold text-surface-dark0 hover:text-primary transition-colors">Our Work</a>
          
          <div class="flex flex-col gap-2">
            <a href="/locations" class="text-lg font-bold text-surface-dark0 hover:text-primary transition-colors flex items-center justify-between">
              <span>Locations</span>
              <span class="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">All Hubs</span>
            </a>
            <div class="flex flex-col gap-1 pl-2">
              <a href={routes.locationsPakistan.href()} class="text-xs font-bold text-primary hover:text-primary-light py-1 flex items-center gap-1.5">
                🇵🇰 Pakistan Service Locations &rarr;
              </a>
              <div class="grid grid-cols-2 gap-2 pl-3 pb-1">
                <a href="/locations/pakistan/islamabad" class="text-xs text-text-secondary hover:text-primary py-0.5 font-medium">📍 Islamabad Hub</a>
                <a href={routes.locationLahore.href()} class="text-xs text-text-secondary hover:text-primary py-0.5 font-medium">📍 Lahore</a>
                <a href={routes.locationKarachi.href()} class="text-xs text-text-secondary hover:text-primary py-0.5 font-medium">📍 Karachi</a>
                <a href={routes.locationRawalpindi.href()} class="text-xs text-text-secondary hover:text-primary py-0.5 font-medium">📍 Rawalpindi</a>
              </div>
              <a href={routes.locationsUk.href()} class="text-xs font-bold text-text-secondary hover:text-primary py-1 flex items-center gap-1.5">
                🇬🇧 United Kingdom Hub &rarr;
              </a>
            </div>
          </div>

          <a href="/blogs" class="text-lg font-bold text-surface-dark0 hover:text-primary transition-colors">Blogs</a>
          <a href="/about-us" class="text-lg font-bold text-surface-dark0 hover:text-primary transition-colors">About Us</a>
          
          <div class="h-px bg-surface-2 my-2"></div>
          
          <a href={routes.getProposal.href()} class="w-full py-3.5 bg-primary text-white text-center text-sm font-bold rounded-2xl hover:bg-primary-light transition-colors shadow-md shadow-primary/20 flex items-center justify-center gap-2">
            Get a Free Proposal <i class="ph ph-arrow-right"></i>
          </a>
        </div>
        
        <main class="flex-grow">
          {children}
        </main>
        
        {!hideFooter && (
          <footer class="bg-surface-1 py-16 mt-auto border-t border-surface-2">
            <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12">
              <div class="md:col-span-2">
                <img src="/Logo.svg" alt="Bell Bee Media" class="h-10 w-auto mb-6" />
                <p class="text-text-secondary max-w-sm mb-6">
                  Elevating your digital presence with performance marketing, data-driven paid acquisition, and scroll-stopping creative production.
                </p>
                <div class="flex gap-4">
                  <a href="#" class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-surface-dark1 hover:bg-primary hover:text-white transition-colors border border-surface-2">
                    <i class="ph ph-facebook-logo text-xl"></i>
                  </a>
                  <a href="#" class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-surface-dark1 hover:bg-primary hover:text-white transition-colors border border-surface-2">
                    <i class="ph ph-instagram-logo text-xl"></i>
                  </a>
                  <a href="#" class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-surface-dark1 hover:bg-primary hover:text-white transition-colors border border-surface-2">
                    <i class="ph ph-linkedin-logo text-xl"></i>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 class="font-bold text-surface-dark0 mb-6">Company</h4>
                <ul class="flex flex-col gap-4 text-text-secondary text-sm font-medium">
                  <li><a href={routes.home.href()} class="hover:text-primary transition-colors">Home</a></li>
                  <li><a href={routes.aboutUs.href()} class="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href={routes.services.href()} class="hover:text-primary transition-colors">Services</a></li>
                  <li><a href={routes.ourWork.href()} class="hover:text-primary transition-colors">Our Work</a></li>
                  <li><a href={routes.blogs.href()} class="hover:text-primary transition-colors">Blogs</a></li>
                  <li><a href={routes.getProposal.href()} class="hover:text-primary transition-colors">Get a Quote</a></li>
                </ul>
              </div>

              <div>
                <h4 class="font-bold text-surface-dark0 mb-6">Service Locations</h4>
                <ul class="flex flex-col gap-2.5 text-text-secondary text-sm font-medium">
                  <li><a href={routes.locationsPakistan.href()} class="hover:text-primary font-semibold text-surface-dark0 flex items-center gap-1.5">🇵🇰 Pakistan Hubs</a></li>
                  <li class="pl-3"><a href="/locations/pakistan/seo-services-islamabad" class="hover:text-primary transition-colors text-xs">Islamabad (Flagship HQ)</a></li>
                  <li class="pl-3"><a href={routes.locationLahore.href()} class="hover:text-primary transition-colors text-xs">Lahore Hub</a></li>
                  <li class="pl-3"><a href={routes.locationKarachi.href()} class="hover:text-primary transition-colors text-xs">Karachi Hub</a></li>
                  <li class="pl-3"><a href={routes.locationRawalpindi.href()} class="hover:text-primary transition-colors text-xs">Rawalpindi Hub</a></li>
                  <li class="pt-1"><a href={routes.locationsUk.href()} class="hover:text-primary font-semibold text-surface-dark0 flex items-center gap-1.5">🇬🇧 United Kingdom Hub</a></li>
                  <li class="pt-2">
                    <a href={routes.locations.href()} class="text-primary hover:underline font-bold inline-flex items-center gap-1 text-xs">
                      View All Locations <i class="ph ph-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-bold text-surface-dark0 mb-6">Contact</h4>
                <ul class="flex flex-col gap-4 text-text-secondary text-sm font-medium">
                  <li class="flex items-center gap-2"><i class="ph ph-envelope-simple text-primary"></i> hello@bellbeemedia.com</li>
                  <li class="flex items-center gap-2"><i class="ph ph-phone text-primary"></i> +92 370 190 2120</li>
                  <li class="flex items-start gap-2"><i class="ph ph-map-pin text-primary mt-1"></i> Office #204, Vista Building,<br/>I-8 Markaz, Islamabad</li>
                </ul>
              </div>
            </div>
            
            <div class="container mx-auto px-4 mt-16 pt-8 border-t border-surface-2 flex flex-col md:flex-row justify-between items-center gap-4 text-text-secondary text-sm">
              <div>
                &copy; {new Date().getFullYear()} Bell Bee Media. All rights reserved.
              </div>
              <div class="flex gap-6">
                <a href={routes.privacy.href()} class="hover:text-primary transition-colors">Privacy Policy</a>
                <a href={routes.terms.href()} class="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </footer>
        )}
      </div>
    </Document>
  )
}

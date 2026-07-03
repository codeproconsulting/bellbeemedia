import { type RemixNode } from 'remix/ui'
import { routes } from '../routes.ts'
import { Document } from './document.tsx'

export function Layout() {
  return ({ children, title, description, head, hideFooter }: { children: RemixNode; title?: string; description?: string; head?: RemixNode; hideFooter?: boolean }) => (
    <Document title={title} description={description} head={head}>
      <div class="flex flex-col min-h-screen bg-white">
        {/* Mobile menu toggle input at the root level to avoid containing block issues */}
        <input type="checkbox" id="mobile-menu-toggle" class="hidden peer" />
        <header class="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-surface-2 overflow-visible">
          <div class="container mx-auto px-4 h-20 flex items-center justify-between">
            <div class="flex-1">
              <a href={routes.home.href()} class="inline-flex items-center gap-2">
                <img src="/Logo.svg" alt="Bell Bee Media" class="h-10 w-auto" />
              </a>
            </div>
            
            <nav class="hidden md:flex flex-1 justify-center items-stretch gap-10 text-[17px] font-bold text-surface-dark1 self-stretch">
              {/* Services Dropdown */}
              <div class="group flex items-center">
                <a href={routes.services.href()} class="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer py-2">
                  Services <i class="ph ph-caret-down text-sm inline-block group-hover:rotate-180 transition-transform duration-300"></i>
                </a>
                {/* Full-width Dropdown Panel */}
                <div class="absolute top-full left-0 w-full opacity-0 transform scale-y-0 origin-top pointer-events-none group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 border-t border-surface-2 shadow-2xl">
                  <div class="bg-white/95 backdrop-blur-md border-b border-surface-2 py-10">
                    <div class="max-w-6xl mx-auto px-8 grid grid-cols-12 gap-8">
                      {/* Header spans the full width */}
                      <div class="col-span-12">
                        <h3 class="text-2xl font-black text-surface-dark0 tracking-tight">Our Services</h3>
                        <p class="text-sm text-text-secondary mt-1.5">Everything your brand needs to grow. One team. Every channel.</p>
                      </div>

                      {/* Left/Center Area (Grid of options) */}
                      <div class="col-span-8">
                        <div class="grid grid-cols-3 gap-4">
                          {/* Service Item 1 */}
                          <a href={routes.servicesSocialMedia.href()} class="flex gap-3 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-heart"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Social Media Management</h4>
                              <p class="text-xs text-text-secondary mt-1 font-normal leading-normal">Build loyal communities and brand engagement.</p>
                            </div>
                          </a>
                          
                          {/* Service Item 2 */}
                          <a href={routes.servicesPerformanceAds.href()} class="flex gap-3 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-chart-line-up"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Performance Ads</h4>
                              <p class="text-xs text-text-secondary mt-1 font-normal leading-normal">Maximize ROI with targeted, data-backed PPC ads.</p>
                            </div>
                          </a>

                          {/* Service Item 3 */}
                          <a href={routes.servicesDigitalPr.href()} class="flex gap-3 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-megaphone"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Digital PR</h4>
                              <p class="text-xs text-text-secondary mt-1 font-normal leading-normal">Amplify brand voice via influencer partnerships.</p>
                            </div>
                          </a>

                          {/* Service Item 4 */}
                          <a href={routes.servicesProduction.href()} class="flex gap-3 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-red-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-play"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Production</h4>
                              <p class="text-xs text-text-secondary mt-1 font-normal leading-normal">High-quality promotional videos and photos.</p>
                            </div>
                          </a>

                          {/* Service Item 5 */}
                          <a href={routes.servicesWebSolutions.href()} class="flex gap-3 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-desktop"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Web Solutions</h4>
                              <p class="text-xs text-text-secondary mt-1 font-normal leading-normal">Fast, conversion-focused responsive websites.</p>
                            </div>
                          </a>

                          {/* Service Item 6 */}
                          <a href={routes.servicesDesignCopy.href()} class="flex gap-3 p-4 rounded-xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-xl group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-bezier-curve"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-sm text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Design & Copy</h4>
                              <p class="text-xs text-text-secondary mt-1 font-normal leading-normal">Overhaul visual identities and sales copywriting.</p>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Right Section (Sidebar Cards) */}
                      <div class="col-span-4 flex flex-col justify-between h-full">
                        {/* View All services button card */}
                        <a href="/services" class="flex items-center justify-between p-5 rounded-2xl border border-secondary/20 hover:border-secondary bg-secondary/5 hover:bg-secondary/10 transition-all duration-300 group/item">
                          <div class="flex items-center gap-4">
                            <div class="w-11 h-11 rounded-xl bg-secondary text-white flex items-center justify-center text-xl shadow-md shadow-secondary/20 shrink-0">
                              <i class="ph ph-arrow-right"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-base text-surface-dark0">View all services</h4>
                              <p class="text-xs text-text-secondary mt-1">Explore our custom packages & creative roadmap.</p>
                            </div>
                          </div>
                          <i class="ph ph-caret-right text-secondary text-lg group-hover/item:translate-x-0.5 transition-transform"></i>
                        </a>

                        {/* Help Card */}
                        <div class="bg-surface-1 border border-surface-2 p-6 rounded-2xl flex flex-col gap-4 mt-4">
                          <div class="flex items-center gap-2 text-primary font-bold text-base">
                            <i class="ph ph-phone text-secondary text-xl"></i>
                            <span>Contact Details</span>
                          </div>
                          <div class="flex flex-col gap-3 text-sm text-text-secondary font-medium">
                            <div class="flex justify-between items-center py-1 border-b border-surface-2/60">
                              <span>General Email:</span>
                              <a href="mailto:hello@bellbeemedia.com" class="text-primary hover:underline">hello@bellbeemedia.com</a>
                            </div>
                            <div class="flex justify-between items-center py-1 border-b border-surface-2/60">
                              <span>Call Center:</span>
                              <a href="tel:+923701902120" class="text-primary hover:underline">+92 370 190 2120</a>
                            </div>
                            <div class="flex justify-between items-center py-1">
                              <span>Support Hours:</span>
                              <span class="text-surface-dark1">Mon-Fri 9AM-6PM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Work Dropdown */}
              <div class="group flex items-center">
                <a href={routes.ourWork.href()} class="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer py-2">
                  Our Work <i class="ph ph-caret-down text-sm inline-block group-hover:rotate-180 transition-transform duration-300"></i>
                </a>
                <div class="absolute top-full left-0 w-full opacity-0 transform scale-y-0 origin-top pointer-events-none group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 border-t border-surface-2 shadow-2xl">
                  <div class="bg-white/95 backdrop-blur-md border-b border-surface-2 py-8">
                    <div class="max-w-6xl mx-auto px-8 grid grid-cols-12 gap-8">
                      {/* Header spans full width */}
                      <div class="col-span-12">
                        <h3 class="text-xl font-black text-surface-dark0 tracking-tight">Our Portfolio</h3>
                        <p class="text-xs text-text-secondary mt-1">Real campaigns, hard numbers, and commercial growth.</p>
                      </div>

                      {/* Left/Center Area (Grid of options) */}
                      <div class="col-span-8">
                        <div class="grid grid-cols-2 gap-4">
                          {/* Work Item 1 */}
                          <a href={routes.ourWorkCaseStudies.href()} class="flex gap-4 p-5 rounded-2xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-2xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-folder-open"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-base text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Case Studies</h4>
                              <p class="text-sm text-text-secondary mt-1.5 font-normal leading-relaxed">Browse active campaigns across SEO, branding, and ads.</p>
                            </div>
                          </a>

                          {/* Work Item 2 */}
                          <a href={routes.ourWorkClientResults.href()} class="flex gap-4 p-5 rounded-2xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 text-2xl group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-chart-bar"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-base text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Client Results</h4>
                              <p class="text-sm text-text-secondary mt-1.5 font-normal leading-relaxed">Hard ROI, conversion metrics, and traffic growth stats.</p>
                            </div>
                          </a>

                          {/* Work Item 3 */}
                          <a href={routes.ourWorkSuccessStories.href()} class="flex gap-4 p-5 rounded-2xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 text-2xl group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-sparkles"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-base text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Success Stories</h4>
                              <p class="text-sm text-text-secondary mt-1.5 font-normal leading-relaxed">Read stories of brands we scaled from zero to millions.</p>
                            </div>
                          </a>

                          {/* Work Item 4 */}
                          <a href={routes.ourWorkIndustryExpertise.href()} class="flex gap-4 p-5 rounded-2xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-2xl group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-briefcase"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-base text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Industry Expertise</h4>
                              <p class="text-sm text-text-secondary mt-1.5 font-normal leading-relaxed">E-commerce, SaaS, and local business growth strategies.</p>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Right Section (Sidebar Cards) */}
                      <div class="col-span-4 flex flex-col justify-between h-full">
                        {/* View All work button card */}
                        <a href="/our-work" class="flex items-center justify-between p-5 rounded-2xl border border-secondary/20 hover:border-secondary bg-secondary/5 hover:bg-secondary/10 transition-all duration-300 group/item">
                          <div class="flex items-center gap-4">
                            <div class="w-11 h-11 rounded-xl bg-secondary text-white flex items-center justify-center text-xl shadow-md shadow-secondary/20 shrink-0">
                              <i class="ph ph-arrow-right"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-base text-surface-dark0">View all case studies</h4>
                              <p class="text-xs text-text-secondary mt-1">See how we deliver real business growth & revenue metrics.</p>
                            </div>
                          </div>
                          <i class="ph ph-caret-right text-secondary text-lg group-hover/item:translate-x-0.5 transition-transform"></i>
                        </a>

                        {/* Help Card */}
                        <div class="bg-surface-1 border border-surface-2 p-6 rounded-2xl flex flex-col gap-4 mt-4">
                          <div class="flex items-center gap-2 text-primary font-bold text-base">
                            <i class="ph ph-phone text-secondary text-xl"></i>
                            <span>Contact Details</span>
                          </div>
                          <div class="flex flex-col gap-3 text-sm text-text-secondary font-medium">
                            <div class="flex justify-between items-center py-1 border-b border-surface-2/60">
                              <span>General Email:</span>
                              <a href="mailto:hello@bellbeemedia.com" class="text-primary hover:underline">hello@bellbeemedia.com</a>
                            </div>
                            <div class="flex justify-between items-center py-1 border-b border-surface-2/60">
                              <span>Call Center:</span>
                              <a href="tel:+923701902120" class="text-primary hover:underline">+92 370 190 2120</a>
                            </div>
                            <div class="flex justify-between items-center py-1">
                              <span>Support Hours:</span>
                              <span class="text-surface-dark1">Mon-Fri 9AM-6PM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href={routes.blogs.href()} class="hover:text-primary transition-colors flex items-center py-2">Blogs</a>

              {/* About Us Dropdown */}
              <div class="group flex items-center">
                <a href={routes.aboutUs.href()} class="hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer py-2">
                  About Us <i class="ph ph-caret-down text-sm inline-block group-hover:rotate-180 transition-transform duration-300"></i>
                </a>
                <div class="absolute top-full left-0 w-full opacity-0 transform scale-y-0 origin-top pointer-events-none group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 border-t border-surface-2 shadow-2xl">
                  <div class="bg-white/95 backdrop-blur-md border-b border-surface-2 py-8">
                    <div class="max-w-6xl mx-auto px-8 grid grid-cols-12 gap-8">
                      {/* Header spans full width */}
                      <div class="col-span-12">
                        <h3 class="text-xl font-black text-surface-dark0 tracking-tight">About Our Agency</h3>
                        <p class="text-xs text-text-secondary mt-1">Dedicated to helping ambitious brands thrive in the digital age.</p>
                      </div>

                      {/* Left/Center Area (Grid of options) */}
                      <div class="col-span-8">
                        <div class="grid grid-cols-2 gap-4">
                          {/* About Item 1 */}
                          <a href={routes.aboutUsOurCompany.href()} class="flex gap-4 p-5 rounded-2xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-2xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-users"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-base text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Our Company</h4>
                              <p class="text-sm text-text-secondary mt-1.5 font-normal leading-relaxed">Who we are, our expert team, and our story.</p>
                            </div>
                          </a>

                          {/* About Item 2 */}
                          <a href={routes.aboutUsOurMission.href()} class="flex gap-4 p-5 rounded-2xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 text-2xl group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-target"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-base text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Our Mission</h4>
                              <p class="text-sm text-text-secondary mt-1.5 font-normal leading-relaxed">Our focus on transparency and data decisions.</p>
                            </div>
                          </a>

                          {/* About Item 3 */}
                          <a href={routes.aboutUsWhyChooseUs.href()} class="flex gap-4 p-5 rounded-2xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-12 h-12 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0 text-2xl group-hover/item:bg-yellow-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-star"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-base text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Why Choose Us</h4>
                              <p class="text-sm text-text-secondary mt-1.5 font-normal leading-relaxed">Discover our custom creative advantage.</p>
                            </div>
                          </a>

                          {/* About Item 4 */}
                          <a href={routes.aboutUsCareers.href()} class="flex gap-4 p-5 rounded-2xl border border-surface-2 hover:border-primary-light/50 bg-white hover:shadow-lg hover:shadow-surface-3/10 transition-all duration-300 group/item">
                            <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 text-2xl group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors duration-300">
                              <i class="ph-fill ph-rocket"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-base text-surface-dark0 group-hover/item:text-primary transition-colors duration-300">Careers</h4>
                              <p class="text-sm text-text-secondary mt-1.5 font-normal leading-relaxed">Join our remote-first team of digital experts.</p>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Right Section (Sidebar Cards) */}
                      <div class="col-span-4 flex flex-col justify-between h-full">
                        {/* View All about button card */}
                        <a href="/about-us" class="flex items-center justify-between p-5 rounded-2xl border border-secondary/20 hover:border-secondary bg-secondary/5 hover:bg-secondary/10 transition-all duration-300 group/item">
                          <div class="flex items-center gap-4">
                            <div class="w-11 h-11 rounded-xl bg-secondary text-white flex items-center justify-center text-xl shadow-md shadow-secondary/20 shrink-0">
                              <i class="ph ph-arrow-right"></i>
                            </div>
                            <div>
                              <h4 class="font-bold text-base text-surface-dark0">Learn more about us</h4>
                              <p class="text-xs text-text-secondary mt-1">Meet the creators and strategists driving our success.</p>
                            </div>
                          </div>
                          <i class="ph ph-caret-right text-secondary text-lg group-hover/item:translate-x-0.5 transition-transform"></i>
                        </a>

                        {/* Help Card */}
                        <div class="bg-surface-1 border border-surface-2 p-6 rounded-2xl flex flex-col gap-4 mt-4">
                          <div class="flex items-center gap-2 text-primary font-bold text-base">
                            <i class="ph ph-phone text-secondary text-xl"></i>
                            <span>Contact Details</span>
                          </div>
                          <div class="flex flex-col gap-3 text-sm text-text-secondary font-medium">
                            <div class="flex justify-between items-center py-1 border-b border-surface-2/60">
                              <span>General Email:</span>
                              <a href="mailto:hello@bellbeemedia.com" class="text-primary hover:underline">hello@bellbeemedia.com</a>
                            </div>
                            <div class="flex justify-between items-center py-1 border-b border-surface-2/60">
                              <span>Call Center:</span>
                              <a href="tel:+923701902120" class="text-primary hover:underline">+92 370 190 2120</a>
                            </div>
                            <div class="flex justify-between items-center py-1">
                              <span>Support Hours:</span>
                              <span class="text-surface-dark1">Mon-Fri 9AM-6PM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div class="flex-grow-0 flex justify-end items-center gap-4">
              <a href={routes.getProposal.href()} class="hidden md:inline-flex px-6 py-2.5 bg-primary text-white rounded-full hover:bg-primary-light transition-colors shadow-md shadow-primary/20 font-medium items-center">
                Get a Quote
              </a>
              
              {/* Mobile hamburger menu toggle */}
              <label for="mobile-menu-toggle" class="md:hidden cursor-pointer p-2 select-none flex flex-col gap-1.5 z-50">
                <span class="line-1 block w-6 h-0.5 bg-surface-dark0 transition-all duration-300 origin-center"></span>
                <span class="line-2 block w-6 h-0.5 bg-surface-dark0 transition-all duration-300 origin-center"></span>
                <span class="line-3 block w-6 h-0.5 bg-surface-dark0 transition-all duration-300 origin-center"></span>
              </label>
              
              <style>{`
                body:has(#mobile-menu-toggle:checked) {
                  overflow: hidden;
                }
                #mobile-menu-toggle:checked ~ header label .line-1 {
                  transform: rotate(45deg) translate(5px, 5px);
                }
                #mobile-menu-toggle:checked ~ header label .line-2 {
                  opacity: 0;
                }
                #mobile-menu-toggle:checked ~ header label .line-3 {
                  transform: rotate(-45deg) translate(5px, -5px);
                }
              `}</style>
            </div>
          </div>
        </header>

        {/* Mobile Drawer menu outside the header containing block */}
        <div class="fixed inset-x-0 top-20 bottom-0 bg-white/95 backdrop-blur-md z-40 transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 md:hidden flex flex-col p-8 gap-8 overflow-y-auto border-t border-surface-2 shadow-xl">
          <a href="/services" class="text-xl font-bold text-surface-dark0 hover:text-primary transition-colors">Services</a>
          <a href="/our-work" class="text-xl font-bold text-surface-dark0 hover:text-primary transition-colors">Our Work</a>
          <a href="/blogs" class="text-xl font-bold text-surface-dark0 hover:text-primary transition-colors">Blogs</a>
          <a href="/about-us" class="text-xl font-bold text-surface-dark0 hover:text-primary transition-colors">About Us</a>
          <div class="h-[1px] bg-surface-2 my-2"></div>
          <a href={routes.getProposal.href()} class="w-full py-4 bg-primary text-white text-center font-bold rounded-2xl hover:bg-primary-light transition-colors shadow-md shadow-primary/20 flex items-center justify-center">
            Get a Quote
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
                  Elevating your digital presence with premium marketing strategies, data-driven insights, and creative excellence.
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
                <ul class="flex flex-col gap-4 text-text-secondary">
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
                <ul class="flex flex-col gap-4 text-text-secondary">
                  <li>
                    <a href="/locations" class="hover:text-primary transition-colors inline-flex items-center gap-1.5">
                      <i class="ph ph-map-pin text-primary"></i> View All Locations
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-bold text-surface-dark0 mb-6">Contact</h4>
                <ul class="flex flex-col gap-4 text-text-secondary">
                  <li class="flex items-center gap-2"><i class="ph ph-envelope-simple text-primary"></i> hello@bellbeemedia.com</li>
                  <li class="flex items-center gap-2"><i class="ph ph-phone text-primary"></i> +92 370 190 2120</li>
                  <li class="flex items-start gap-2"><i class="ph ph-map-pin text-primary mt-1"></i> Office #204, Vista Building,<br/>I8 Markaz, Islamabad</li>
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

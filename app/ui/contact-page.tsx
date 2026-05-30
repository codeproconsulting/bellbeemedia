import { Layout } from './layout.tsx'
import { PillBadge } from './shared.tsx'

export function ContactPage() {
  return () => (
    <Layout title="Contact Us | Bell Bee Media">
      <div class="bg-surface-1 min-h-screen pt-20 pb-24">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Contact Info */}
            <div>
              <div class="flex mb-6">
                <PillBadge icon="ph-paper-plane-right" text="Get In Touch" />
              </div>
              <h1 class="text-5xl md:text-6xl font-bold text-surface-dark0 mb-6 tracking-tight">Let's talk about <br/><span class="text-primary">your project.</span></h1>
              <p class="text-xl text-text-secondary mb-12 leading-relaxed">
                Whether you have a clear vision or need help defining your strategy, we're here to help. Reach out to us and let's create something amazing together.
              </p>
              
              <div class="flex flex-col gap-8">
                <div class="flex items-center gap-6 bg-white p-6 rounded-3xl shadow-sm border border-surface-2 hover:shadow-md transition-shadow">
                  <div class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl shrink-0">
                    <i class="ph-fill ph-envelope-simple"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-surface-dark0 mb-1">Email Us</h3>
                    <p class="text-text-secondary text-lg">hello@bellbeemedia.com</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-6 bg-white p-6 rounded-3xl shadow-sm border border-surface-2 hover:shadow-md transition-shadow">
                  <div class="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-3xl shrink-0">
                    <i class="ph-fill ph-phone"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-surface-dark0 mb-1">Call Us</h3>
                    <p class="text-text-secondary text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-6 bg-white p-6 rounded-3xl shadow-sm border border-surface-2 hover:shadow-md transition-shadow">
                  <div class="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-3xl shrink-0">
                    <i class="ph-fill ph-map-pin"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-surface-dark0 mb-1">Visit Us</h3>
                    <p class="text-text-secondary text-lg">123 Digital Ave, Suite 400<br/>San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-surface-3/50 border border-surface-2 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
              
              <h2 class="text-3xl font-bold text-surface-dark0 mb-8 relative z-10">Send us a message</h2>
              <form method="post" action="/contact" class="flex flex-col gap-6 relative z-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="flex flex-col gap-2">
                    <label for="firstName" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">First Name</label>
                    <input type="text" id="firstName" name="firstName" required class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <label for="lastName" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0" />
                  </div>
                </div>
                
                <div class="flex flex-col gap-2">
                  <label for="email" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Email Address</label>
                  <input type="email" id="email" name="email" required class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0" />
                </div>
                
                <div class="flex flex-col gap-2">
                  <label for="service" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">What do you need help with?</label>
                  <div class="relative">
                    <select id="service" name="service" class="w-full px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all appearance-none text-lg font-medium text-surface-dark0">
                      <option value="social">Social Media Marketing</option>
                      <option value="performance">Performance Marketing</option>
                      <option value="pr">Digital PR</option>
                      <option value="production">Production</option>
                      <option value="web">Web Solutions</option>
                      <option value="design">Design & Content Services</option>
                      <option value="other">Other</option>
                    </select>
                    <div class="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-surface-dark2">
                      <i class="ph-bold ph-caret-down"></i>
                    </div>
                  </div>
                </div>
                
                <div class="flex flex-col gap-2">
                  <label for="message" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Message</label>
                  <textarea id="message" name="message" rows={4} required class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all resize-none text-lg font-medium text-surface-dark0"></textarea>
                </div>
                
                <button type="submit" class="mt-4 w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all shadow-lg shadow-primary/30 text-lg flex items-center justify-center gap-2 group">
                  Send Message <i class="ph-bold ph-paper-plane-right group-hover:translate-x-1 transition-transform"></i>
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  )
}

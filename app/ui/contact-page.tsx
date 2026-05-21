import { Layout } from './layout.tsx'

export function ContactPage() {
  return () => (
    <Layout title="Contact Us | Bell Bee Media">
      <div class="bg-surface-1 min-h-screen pt-12 pb-24">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h1 class="text-4xl md:text-5xl font-bold text-surface-dark0 mb-6">Let's talk about your project.</h1>
              <p class="text-lg text-text-secondary mb-12">
                Whether you have a clear vision or need help defining your strategy, we're here to help. Reach out to us and let's create something amazing together.
              </p>
              
              <div class="flex flex-col gap-8">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0">
                    <i class="ph ph-envelope-simple"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-surface-dark0 mb-1">Email Us</h3>
                    <p class="text-text-secondary">hello@bellbeemedia.com</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0">
                    <i class="ph ph-phone"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-surface-dark0 mb-1">Call Us</h3>
                    <p class="text-text-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0">
                    <i class="ph ph-map-pin"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-surface-dark0 mb-1">Visit Us</h3>
                    <p class="text-text-secondary">123 Digital Ave, Suite 400<br/>San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div class="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-surface-3/50 border border-surface-2">
              <h2 class="text-2xl font-bold text-surface-dark0 mb-8">Send us a message</h2>
              <form method="post" action="/contact" class="flex flex-col gap-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="flex flex-col gap-2">
                    <label for="firstName" class="text-sm font-medium text-surface-dark2">First Name</label>
                    <input type="text" id="firstName" name="firstName" required class="px-4 py-3 rounded-xl border border-surface-3 bg-surface-1 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <label for="lastName" class="text-sm font-medium text-surface-dark2">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required class="px-4 py-3 rounded-xl border border-surface-3 bg-surface-1 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                  </div>
                </div>
                
                <div class="flex flex-col gap-2">
                  <label for="email" class="text-sm font-medium text-surface-dark2">Email Address</label>
                  <input type="email" id="email" name="email" required class="px-4 py-3 rounded-xl border border-surface-3 bg-surface-1 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                </div>
                
                <div class="flex flex-col gap-2">
                  <label for="service" class="text-sm font-medium text-surface-dark2">What do you need help with?</label>
                  <select id="service" name="service" class="px-4 py-3 rounded-xl border border-surface-3 bg-surface-1 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none">
                    <option value="social">Social Media</option>
                    <option value="seo">SEO</option>
                    <option value="web">Web Design</option>
                    <option value="ads">Performance Ads</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div class="flex flex-col gap-2">
                  <label for="message" class="text-sm font-medium text-surface-dark2">Message</label>
                  <textarea id="message" name="message" rows={4} required class="px-4 py-3 rounded-xl border border-surface-3 bg-surface-1 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"></textarea>
                </div>
                
                <button type="submit" class="mt-4 w-full py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-light transition-colors shadow-lg shadow-secondary/30">
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  )
}

import { type RemixNode } from 'remix/ui'
import { routes } from '../routes.ts'
import { Document } from './document.tsx'

export function Layout() {
  return ({ children, title }: { children: RemixNode; title?: string }) => (
    <Document title={title}>
      <div class="flex flex-col min-h-screen">
        <header class="sticky top-0 z-50 w-full glass">
          <div class="container mx-auto px-4 h-20 flex items-center justify-between">
            <a href={routes.home.href()} class="flex items-center gap-2">
              <img src="/Logo.svg" alt="Bell Bee Media" class="h-10 w-auto" />
            </a>
            <nav class="hidden md:flex items-center gap-8 font-medium">
              <a href={routes.home.href()} class="hover:text-primary transition-colors">Home</a>
              <a href={routes.services.href()} class="hover:text-primary transition-colors">Services</a>
              <a href={routes.about.href()} class="hover:text-primary transition-colors">About</a>
              <a href={routes.contact.href()} class="px-5 py-2.5 bg-primary text-white rounded-full hover:bg-primary-light transition-colors shadow-lg shadow-primary/25">Contact Us</a>
            </nav>
          </div>
        </header>
        
        <main class="flex-grow">
          {children}
        </main>
        
        <footer class="bg-surface-dark0 text-white py-12 mt-auto">
          <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img src="/Logo.svg" alt="Bell Bee Media" class="h-12 w-auto mb-6 brightness-0 invert" />
              <p class="text-surface-3 opacity-80">
                Elevating your digital presence with premium marketing strategies.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-6">Quick Links</h3>
              <ul class="flex flex-col gap-3 opacity-80">
                <li><a href={routes.home.href()} class="hover:text-primary-light transition-colors">Home</a></li>
                <li><a href={routes.services.href()} class="hover:text-primary-light transition-colors">Services</a></li>
                <li><a href={routes.about.href()} class="hover:text-primary-light transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-6">Connect</h3>
              <div class="flex gap-4">
                <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <i class="ph ph-facebook-logo text-xl"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <i class="ph ph-instagram-logo text-xl"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <i class="ph ph-linkedin-logo text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center opacity-60 text-sm">
            &copy; {new Date().getFullYear()} Bell Bee Media. All rights reserved.
          </div>
        </footer>
      </div>
    </Document>
  )
}

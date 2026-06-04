import { Layout } from './layout.tsx'
import { PillBadge } from './shared.tsx'

export function TermsPage() {
  return () => (
    <Layout title="Terms of Service | Bell Bee Media" description="Terms of service and contract agreements for BellBee Media services and website use.">
      <div class="bg-white min-h-screen pt-20 pb-24">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="mb-12">
            <div class="flex mb-4">
              <PillBadge icon="ph-file-text" text="Legal Compliance" />
            </div>
            <h1 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-4 tracking-tight">Terms of Service</h1>
            <p class="text-sm text-text-secondary">Last updated: June 4, 2026</p>
          </div>

          <div class="prose max-w-none text-text-secondary flex flex-col gap-8 leading-relaxed">
            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">1. Acceptance of Terms</h2>
              <p>
                By accessing this website and utilizing our marketing solutions, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our site or hire our agency.
              </p>
            </section>

            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">2. Services and Strategy</h2>
              <p>
                BellBee Media provides digital marketing, social media management, performance ads, digital PR, creative production, and web design. While we commit to implementing strategies aimed at commercial growth and positive ROI, all campaigns are subject to third-party platform policies (such as Meta, Google, and TikTok) and market fluctuations. We do not guarantee specific rankings or financial gains.
              </p>
            </section>

            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">3. Intellectural Property</h2>
              <p>
                All custom creative content, branding materials, ad copies, and websites created specifically for our clients become the client's intellectual property upon receipt of full payment. General agency templates, analytical code frameworks, and proprietary optimization methods remain the property of BellBee Media.
              </p>
            </section>

            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">4. User Obligations</h2>
              <p>You agree to provide accurate and updated company information as required for setup and campaign management. You are responsible for ensuring that all products or services you ask us to promote comply with federal, state, and local advertising laws.</p>
            </section>

            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">5. Limitation of Liability</h2>
              <p>
                In no event shall BellBee Media be liable for any indirect, special, incidental, or consequential damages resulting from campaign downtime, platform-level ad account suspension, or web service interruptions.
              </p>
            </section>

            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">6. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

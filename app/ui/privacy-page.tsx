import { Layout } from './layout.tsx'
import { PillBadge } from './shared.tsx'

export function PrivacyPage() {
  return () => (
    <Layout title="Privacy Policy | Bell Bee Media" description="Privacy policy and data protection standards for BellBee Media clients and website visitors.">
      <div class="bg-white min-h-screen pt-20 pb-24">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="mb-12">
            <div class="flex mb-4">
              <PillBadge icon="ph-shield-check" text="Legal Compliance" />
            </div>
            <h1 class="text-4xl md:text-5xl font-black text-surface-dark0 mb-4 tracking-tight">Privacy Policy</h1>
            <p class="text-sm text-text-secondary">Last updated: June 4, 2026</p>
          </div>

          <div class="prose max-w-none text-text-secondary flex flex-col gap-8 leading-relaxed">
            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">1. Introduction</h2>
              <p>
                At BellBee Media, we value your privacy and are committed to protecting your personal data. This privacy policy describes how we collect, use, process, and disclose your personal information in connection with your access to and use of the BellBee Media website and our digital marketing services.
              </p>
            </section>

            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">2. Information We Collect</h2>
              <p>We collect information you provide directly to us when requesting a quote, signing up for our newsletter, or contacting us. This includes:</p>
              <ul class="list-disc pl-6 flex flex-col gap-2">
                <li>Name, email address, phone number, and physical address.</li>
                <li>Company name, website URL, and details about your marketing needs.</li>
                <li>Any other information you choose to provide in contact forms or strategy call bookings.</li>
              </ul>
            </section>

            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">3. How We Use Your Information</h2>
              <p>We use the collected information for the following business purposes:</p>
              <ul class="list-disc pl-6 flex flex-col gap-2">
                <li>Providing, operating, and maintaining our services.</li>
                <li>Responding to your requests, questions, and scheduling proposal calls.</li>
                <li>Analyzing usage trends and optimizing website performance and user experience.</li>
                <li>Complying with legal obligations and protecting security.</li>
              </ul>
            </section>

            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">4. Third-Party Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or serving our clients, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">5. Security</h2>
              <p>
                We implement a variety of industry-standard security measures, including HTTPS encryption, to maintain the safety of your personal information.
              </p>
            </section>

            <section class="flex flex-col gap-3">
              <h2 class="text-2xl font-bold text-surface-dark0">6. Contact Us</h2>
              <p>If you have any questions regarding this Privacy Policy, you may contact us at:</p>
              <p class="font-bold text-surface-dark0">
                Email: hello@bellbeemedia.com<br />
                Address: 123 Digital Ave, San Francisco, CA
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

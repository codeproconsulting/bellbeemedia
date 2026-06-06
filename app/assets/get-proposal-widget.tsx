import { clientEntry, on, type Handle, type SerializableProps } from 'remix/ui'
import { type ProposalSubmissionResult } from '../data/wordpress.ts'


const SERVICE_OPTIONS = [
  { label: 'Social Media & Design', value: 'social' },
  { label: 'Performance Marketing', value: 'performance' },
  { label: 'Digital PR & Influencer', value: 'pr' },
  { label: 'Creative Production', value: 'production' },
  { label: 'Web & Landing Pages', value: 'web' },
  { label: 'Design & Copywriting', value: 'design' },
]

export interface ProposalBookingWidgetProps extends SerializableProps {
  result?: ProposalSubmissionResult
  submitted: boolean
  bookingUrl?: string
}

export const ProposalBookingWidget = clientEntry(
  import.meta.url,
  function ProposalBookingWidget(handle: Handle<ProposalBookingWidgetProps>) {
    const { result, submitted, bookingUrl } = handle.props
    const finalBookingUrl = bookingUrl || "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0123456789?gv=true"
    
    // Check if the URL is embeddable in an iframe (e.g., Google Calendar appointment schedule or Calendly)
    const isEmbeddable = finalBookingUrl.includes('calendly.com') || 
                          finalBookingUrl.includes('calendar.google.com') || 
                          finalBookingUrl.includes('calendar.app.google')

    let activeTab = 'form' // 'form' | 'call'

    return () => (
      <div class="flex flex-col gap-6 w-full">
        {/* Tab Selector - Hide when already submitted */}
        {!submitted && (
          <div class="flex bg-surface-2 p-1.5 rounded-2xl border border-surface-3/50 max-w-md">
            <button
              mix={on('click', () => {
                activeTab = 'form'
                handle.update()
              })}
              class={`flex-1 py-3 text-center rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2 ${
                activeTab === 'form' 
                  ? 'bg-white text-surface-dark0 shadow-sm border border-white' 
                  : 'text-text-secondary hover:text-surface-dark0'
              }`}
            >
              <i class="ph ph-file-text"></i> Request Proposal
            </button>
            <button
              mix={on('click', () => {
                activeTab = 'call'
                handle.update()
              })}
              class={`flex-1 py-3 text-center rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2 ${
                activeTab === 'call' 
                  ? 'bg-white text-surface-dark0 shadow-sm border border-white' 
                  : 'text-text-secondary hover:text-surface-dark0'
              }`}
            >
              <i class="ph ph-calendar-check"></i> Book Call Instantly
            </button>
          </div>
        )}

        <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-surface-3/30 border border-surface-2 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>

          {submitted ? (
            // ── Success State ──
            <div class="relative z-10 flex flex-col items-center text-center py-6">
              <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mb-4">
                <i class="ph-fill ph-check-circle"></i>
              </div>
              <h2 class="text-3xl font-bold text-surface-dark0 mb-2">Request Received!</h2>
              <p class="text-base text-text-secondary mb-8 max-w-md leading-relaxed">
                {result?.message ?? "Thank you! Our team will reach out within 24 hours. To secure your slot immediately, you can also book a call directly on our calendar below:"}
              </p>
              
              {isEmbeddable ? (
                <div class="w-full rounded-2xl overflow-hidden border border-surface-2 bg-surface-1 min-h-[500px] mb-8 relative">
                  <iframe 
                    src={finalBookingUrl} 
                    width="100%" 
                    height="500" 
                    frameborder="0" 
                    style="min-width: 320px; height: 500px;"
                  ></iframe>
                </div>
              ) : (
                <div class="w-full p-8 mb-8 border border-primary/20 bg-primary/5 rounded-2xl text-center flex flex-col items-center gap-4">
                  <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl">
                    <i class="ph ph-video-camera"></i>
                  </div>
                  <div>
                    <h3 class="font-bold text-surface-dark0 text-base">Your Google Meet Link</h3>
                    <p class="text-xs text-text-secondary max-w-sm mt-1">
                      Click below to access the scheduled meeting room directly or configure your calendar slot.
                    </p>
                  </div>
                  <a 
                    href={finalBookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all shadow-md text-sm hover:scale-[1.01]"
                  >
                    Open Google Meet / Booking <i class="ph ph-arrow-square-out"></i>
                  </a>
                </div>
              )}
              
              <a href="/" class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all shadow-lg">
                Back to Home <i class="ph ph-arrow-right"></i>
              </a>
            </div>
          ) : activeTab === 'call' ? (
            // ── Calendly/Google Calendar Booking Tab ──
            <div class="relative z-10 flex flex-col gap-6">
              <h2 class="text-3xl font-bold text-surface-dark0">Book Your Strategy Call</h2>
              <p class="text-text-secondary text-sm leading-relaxed">
                Select a time slot below that works best for you. Our team will prepare a brief audit of your market space before the call.
              </p>
              
              {isEmbeddable ? (
                <div class="rounded-2xl overflow-hidden border border-surface-2 bg-surface-1 min-h-[600px] relative">
                  <iframe 
                    src={finalBookingUrl} 
                    width="100%" 
                    height="600" 
                    frameborder="0" 
                    style="min-width: 320px; height: 600px;"
                  ></iframe>
                </div>
              ) : (
                <div class="py-12 border-2 border-dashed border-primary/20 bg-primary/5 rounded-3xl text-center flex flex-col items-center gap-6 px-6">
                  <div class="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl">
                    <i class="ph ph-video-camera"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-surface-dark0 mb-2">Join Google Meet Strategy Call</h3>
                    <p class="text-sm text-text-secondary max-w-sm">
                      We conduct our growth consultations via Google Meet. Click the button below to join the room or schedule your slot directly.
                    </p>
                  </div>
                  <a 
                    href={finalBookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all shadow-lg text-base hover:scale-[1.02]"
                  >
                    Open Google Meet / Booking <i class="ph ph-arrow-square-out"></i>
                  </a>
                </div>
              )}
            </div>
          ) : (
            // ── Form State Tab ──
            <>
              {/* Error message if WP returned an error */}
              {result && !result.success && (
                <div class="relative z-10 mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  <i class="ph ph-warning-circle mr-2"></i>{result.message}
                </div>
              )}

              <h2 class="text-3xl font-bold text-surface-dark0 mb-8 relative z-10">Request a growth proposal</h2>

              <form method="post" action="/get-proposal" class="flex flex-col gap-6 relative z-10">
                {/* Name and Email Row */}
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="flex flex-col gap-2">
                    <label for="fullName" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" required placeholder="John Doe" class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <label for="email" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Email Address *</label>
                    <input type="email" id="email" name="email" required placeholder="you@company.com" class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0" />
                  </div>
                </div>

                {/* Company and Phone Row */}
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="flex flex-col gap-2">
                    <label for="company" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Company <span class="text-text-secondary/50 font-normal lowercase">(optional)</span></label>
                    <input type="text" id="company" name="company" placeholder="Your company name" class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <label for="phone" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Phone Number <span class="text-text-secondary/50 font-normal lowercase">(optional)</span></label>
                    <input type="tel" id="phone" name="phone" placeholder="+92 300 0000000" class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all text-lg font-medium text-surface-dark0" />
                  </div>
                </div>

                {/* Service Choice Chips */}
                <div class="flex flex-col gap-3">
                  <span class="text-sm font-bold text-surface-dark2 uppercase tracking-wide block">Services You're Interested In</span>
                  <div class="flex flex-wrap gap-3" role="group" aria-label="Select services">
                    {SERVICE_OPTIONS.map((opt) => (
                      <label class="cursor-pointer select-none">
                        <input type="checkbox" name="services" value={opt.value} class="peer hidden" />
                        <span class="border-2 border-surface-2 bg-surface-1 px-4 py-2.5 rounded-2xl text-sm font-medium hover:border-primary-light transition-all inline-block text-surface-dark1 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Details */}
                <div class="flex flex-col gap-2">
                  <label for="details" class="text-sm font-bold text-surface-dark2 uppercase tracking-wide">Project Details <span class="text-text-secondary/50 font-normal lowercase">(optional)</span></label>
                  <textarea id="details" name="details" rows={4} placeholder="Tell us about your goals, timeline, budget..." class="px-5 py-4 rounded-2xl border-2 border-surface-2 bg-surface-1 focus:outline-none focus:bg-white focus:border-primary transition-all resize-none text-lg font-medium text-surface-dark0"></textarea>
                </div>

                {/* Submit */}
                <div class="mt-4">
                  <button type="submit" id="submit-proposal" class="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all shadow-lg shadow-primary/30 text-lg flex items-center justify-center gap-2 group">
                    Request Consultation <span class="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <p class="text-center text-xs text-text-secondary mt-3">
                    🔒 We respect your privacy — no spam, ever.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    )
  }
)

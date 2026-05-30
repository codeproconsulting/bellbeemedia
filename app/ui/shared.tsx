import { type RemixNode } from 'remix/ui'

export function PillBadge() {
  return ({ icon, text }: { icon: string, text: string }) => (
    <span class="pill-badge bg-primary/5 text-primary border-primary/10">
      <i class={`ph-fill ${icon} text-primary`}></i> {text}
    </span>
  )
}

export function IllustrativeServiceCard() {
  return ({ title, desc, colorClass, children }: { title: string; desc: string; colorClass: string; children: RemixNode }) => (
    <div class="flex flex-col h-full bg-white rounded-3xl border border-surface-2 overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
      <div class={`h-64 ${colorClass} p-8 flex items-center justify-center relative overflow-hidden`}>
        <div class="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_100%)]"></div>
        <div class="relative z-10 w-full group-hover:scale-105 transition-transform duration-500">
          {children}
        </div>
      </div>
      <div class="p-8 flex-grow">
        <h4 class="text-2xl font-bold text-surface-dark0 mb-3">{title}</h4>
        <p class="text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export function ServicesGrid() {
  return () => (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* 1. Social Media Marketing */}
      <IllustrativeServiceCard 
        title="Social Media Marketing"
        desc="Build loyal communities and increase brand engagement with our targeted social media strategies."
        colorClass="bg-indigo-50"
      >
        <div class="w-full max-w-[200px] mx-auto bg-white rounded-xl shadow-sm border border-surface-2 p-3">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 rounded-full bg-surface-2"></div>
            <div><div class="h-2 w-16 bg-surface-2 rounded mb-1"></div><div class="h-2 w-10 bg-surface-1 rounded"></div></div>
          </div>
          <div class="h-24 bg-gradient-to-br from-indigo-200 to-primary-light/30 rounded-lg mb-3"></div>
          <div class="flex gap-2"><i class="ph-fill ph-heart text-red-500"></i><i class="ph ph-chat-circle text-surface-dark2"></i></div>
        </div>
      </IllustrativeServiceCard>

      {/* 2. Performance Marketing */}
      <IllustrativeServiceCard 
        title="Performance Marketing"
        desc="Maximize your ROI with highly targeted, data-backed PPC campaigns across search and social."
        colorClass="bg-orange-50"
      >
        <div class="w-full max-w-[220px] mx-auto bg-white rounded-xl shadow-sm border border-surface-2 p-4">
          <div class="h-2 w-20 bg-surface-2 rounded mb-4"></div>
          <div class="flex items-end gap-2 h-20">
            <div class="w-full bg-secondary/30 rounded-t h-1/3"></div>
            <div class="w-full bg-secondary/50 rounded-t h-2/3"></div>
            <div class="w-full bg-secondary rounded-t h-full"></div>
            <div class="w-full bg-secondary/80 rounded-t h-4/5"></div>
          </div>
        </div>
      </IllustrativeServiceCard>

      {/* 3. Digital PR */}
      <IllustrativeServiceCard 
        title="Digital PR"
        desc="Amplify your brand's voice through strategic influencer collaborations and media outreach."
        colorClass="bg-purple-50"
      >
        <div class="w-full max-w-[180px] mx-auto relative h-32 flex items-center justify-center">
           <div class="absolute w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-5xl text-purple-500 z-10 border border-surface-2">
             <i class="ph-fill ph-megaphone"></i>
           </div>
           <div class="absolute w-12 h-12 bg-white rounded-xl shadow-md -top-2 -right-4 flex items-center justify-center text-xl text-yellow-500 border border-surface-2 rotate-12">
             <i class="ph-fill ph-star"></i>
           </div>
           <div class="absolute w-10 h-10 bg-white rounded-full shadow-md bottom-2 -left-4 flex items-center justify-center text-lg text-primary border border-surface-2 -rotate-12">
             <i class="ph-fill ph-thumbs-up"></i>
           </div>
        </div>
      </IllustrativeServiceCard>

      {/* 4. Production */}
      <IllustrativeServiceCard 
        title="Production"
        desc="Engage your audience with premium creative production, including high-quality video content."
        colorClass="bg-red-50"
      >
        <div class="w-full max-w-[220px] mx-auto bg-white rounded-xl shadow-sm border border-surface-2 p-2 overflow-hidden relative group-hover:shadow-md transition-shadow">
          <div class="h-24 bg-gradient-to-br from-red-100 to-red-300 rounded-lg flex items-center justify-center relative">
            <div class="w-12 h-12 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-red-500 text-2xl shadow-sm">
              <i class="ph-fill ph-play"></i>
            </div>
          </div>
          <div class="h-2 w-1/2 bg-surface-2 rounded mt-3 mx-2"></div>
          <div class="h-2 w-1/3 bg-surface-1 rounded mt-1 mx-2 mb-2"></div>
        </div>
      </IllustrativeServiceCard>

      {/* 5. Web Solutions */}
      <IllustrativeServiceCard 
        title="Web Solutions"
        desc="Transform your online presence with custom, fast, and responsive websites engineered for conversions."
        colorClass="bg-blue-50"
      >
        <div class="w-full max-w-[220px] mx-auto mt-4">
          <div class="bg-surface-dark1 rounded-t-xl p-2 border-4 border-surface-dark1 shadow-lg">
            <div class="bg-white h-24 rounded flex p-2 gap-2">
              <div class="w-1/3 bg-primary-light/20 rounded"></div>
              <div class="w-2/3 flex flex-col gap-1"><div class="h-2 bg-surface-2 w-full rounded"></div><div class="h-2 bg-surface-2 w-3/4 rounded"></div></div>
            </div>
          </div>
          <div class="bg-surface-3 h-3 rounded-b-xl mx-[-10px] shadow-xl"></div>
        </div>
      </IllustrativeServiceCard>

      {/* 6. Design & Content */}
      <IllustrativeServiceCard 
        title="Design & Content"
        desc="Tell your brand's story through stunning visual identity, logo design, and copywriting."
        colorClass="bg-emerald-50"
      >
        <div class="w-full max-w-[200px] mx-auto bg-white rounded-xl shadow-sm border border-surface-2 p-4 flex gap-4">
          <div class="w-1/2 aspect-square rounded-lg bg-gradient-to-tr from-emerald-200 to-teal-400 flex items-center justify-center text-white text-3xl">
             <i class="ph-fill ph-bezier-curve"></i>
          </div>
          <div class="w-1/2 flex flex-col justify-center gap-2">
             <div class="w-full h-2 rounded bg-surface-2"></div>
             <div class="w-3/4 h-2 rounded bg-surface-2"></div>
             <div class="w-full h-2 rounded bg-surface-2"></div>
             <div class="w-1/2 h-2 rounded bg-emerald-200"></div>
          </div>
        </div>
      </IllustrativeServiceCard>
    </div>
  )
}

export function TestimonialsSection() {
  return () => (
    <section class="py-24 bg-white border-t border-surface-2 relative overflow-hidden">
      {/* Background gradients */}
      <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="flex justify-center mb-4">
            <span class="pill-badge bg-primary/5 text-primary border-primary/10">
              <i class="ph-fill ph-chat-circle-text text-primary"></i> Client Reviews
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-surface-dark0 mb-4">What our clients say <span class="text-primary">about us</span></h2>
          <p class="text-lg text-text-secondary">Discover how we help brands grow their digital footprint, build communities, and hit revenue goals.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div class="bg-surface-1 border border-surface-2 p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:border-primary/20">
            <div>
              <div class="flex gap-1 text-secondary mb-6">
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
              </div>
              <p class="text-surface-dark1 text-base leading-relaxed italic mb-8">
                "Bell Bee Media completely transformed our social presence. Within 3 months, our organic reach grew by over 300% and we launched our first successful influencer campaigns that drove real sales."
              </p>
            </div>
            <div class="flex items-center gap-4 pt-6 border-t border-surface-2/60">
              <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                AR
              </div>
              <div>
                <h4 class="font-bold text-surface-dark0 text-base">Ananya Roy</h4>
                <p class="text-text-secondary text-xs font-medium">Founder, StyleCo E-commerce</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div class="bg-surface-1 border border-surface-2 p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:border-primary/20">
            <div>
              <div class="flex gap-1 text-secondary mb-6">
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
              </div>
              <p class="text-surface-dark1 text-base leading-relaxed italic mb-8">
                "Our performance marketing campaigns were struggling until we hired Bell Bee. Their data-backed PPC optimizations reduced our client acquisition cost by 42% while scaling our monthly lead volume."
              </p>
            </div>
            <div class="flex items-center gap-4 pt-6 border-t border-surface-2/60">
              <div class="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-lg">
                VS
              </div>
              <div>
                <h4 class="font-bold text-surface-dark0 text-base">Vikram Singh</h4>
                <p class="text-text-secondary text-xs font-medium">CMO, FinTech Solutions</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div class="bg-surface-1 border border-surface-2 p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:border-primary/20">
            <div>
              <div class="flex gap-1 text-secondary mb-6">
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
                <i class="ph-fill ph-star"></i>
              </div>
              <p class="text-surface-dark1 text-base leading-relaxed italic mb-8">
                "Their web solutions team is world-class. They built a custom, lightning-fast landing page optimized for mobile conversions. Our sign-up rate jumped from 3.5% to a steady 9.8% immediately."
              </p>
            </div>
            <div class="flex items-center gap-4 pt-6 border-t border-surface-2/60">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                MD
              </div>
              <div>
                <h4 class="font-bold text-surface-dark0 text-base">Meera Desai</h4>
                <p class="text-text-secondary text-xs font-medium">Head of Growth, EduTech Global</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  return () => (
    <section class="py-24 bg-surface-1 border-t border-surface-2 relative overflow-hidden">
      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="flex justify-center mb-4">
            <span class="pill-badge bg-primary/5 text-primary border-primary/10">
              <i class="ph-fill ph-projector-screen text-primary"></i> Roadmap
            </span>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-surface-dark0 mb-4">Our working <span class="text-primary">process</span></h2>
          <p class="text-lg text-text-secondary">We believe in structured execution, transparent updates, and result-oriented iterations.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div class="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 -translate-y-[60px] z-0"></div>

          {/* Step 1 */}
          <div class="relative bg-white border border-surface-2 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:border-primary/20 z-10">
            <div class="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform">
              01
            </div>
            <h4 class="text-xl font-bold text-surface-dark0 mb-3 group-hover:text-primary transition-colors">Discovery & Audit</h4>
            <p class="text-text-secondary text-sm leading-relaxed">
              We deep-dive into your existing branding, data analytics, audience profiles, and competitors to identify immediate wins.
            </p>
          </div>

          {/* Step 2 */}
          <div class="relative bg-white border border-surface-2 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:border-primary/20 z-10">
            <div class="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-secondary/20 group-hover:scale-110 transition-transform">
              02
            </div>
            <h4 class="text-xl font-bold text-surface-dark0 mb-3 group-hover:text-primary transition-colors">Strategic Blueprint</h4>
            <p class="text-text-secondary text-sm leading-relaxed">
              We craft a custom channel-specific roadmap, defining marketing targets, timelines, media budgets, and specific KPI metrics.
            </p>
          </div>

          {/* Step 3 */}
          <div class="relative bg-white border border-surface-2 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:border-primary/20 z-10">
            <div class="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-indigo-600/20 group-hover:scale-110 transition-transform">
              03
            </div>
            <h4 class="text-xl font-bold text-surface-dark0 mb-3 group-hover:text-primary transition-colors">Execution & Launch</h4>
            <p class="text-text-secondary text-sm leading-relaxed">
              Our specialists create assets, deploy campaigns, schedule content, and launch optimized funnels according to the plan.
            </p>
          </div>

          {/* Step 4 */}
          <div class="relative bg-white border border-surface-2 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:border-primary/20 z-10">
            <div class="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-emerald-600/20 group-hover:scale-110 transition-transform">
              04
            </div>
            <h4 class="text-xl font-bold text-surface-dark0 mb-3 group-hover:text-primary transition-colors">Optimise & Scale</h4>
            <p class="text-text-secondary text-sm leading-relaxed">
              We monitor campaign analytics in real-time, prune underperforming budgets, and scale top performers for maximum returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

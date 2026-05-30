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

import { clientEntry, on, type Handle, type SerializableProps } from 'remix/ui'

/* ─────────────────────────────────────────
   ANIMATED SERVICE WIDGETS
   Used inside InteractiveServicesShowcase
───────────────────────────────────────── */

function WidgetSocialMedia() {
  return () => (
    <div class="w-full h-full flex flex-col justify-between p-6 text-left">
      {/* Follower Growth Tracker */}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md relative overflow-hidden">
        <div class="flex justify-between items-center mb-2">
          <span class="text-[10px] font-semibold uppercase tracking-wider text-white/50">Follower Growth</span>
          <span class="text-[9px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-bold border border-green-500/30 flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            LIVE
          </span>
        </div>
        <div class="flex items-baseline gap-2">
          <span class="text-2xl font-black tracking-tight font-conthrax text-white">284,912</span>
          <span class="text-xs font-semibold text-green-400">+342%</span>
        </div>
        
        {/* Animated Line Graph */}
        <div class="h-20 mt-4 relative">
          <svg class="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
            <defs>
              <linearGradient id="glow-social" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.4" />
                <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,35 Q 20,38 40,25 T 80,10 T 100,2"
              fill="none"
              stroke="#8B5CF6"
              stroke-width="2.5"
              class="animate-draw-path"
            />
            <path
              d="M 0,35 Q 20,38 40,25 T 80,10 T 100,2 L 100,40 L 0,40 Z"
              fill="url(#glow-social)"
            />
          </svg>
          {/* Pulsing indicator at end of line */}
          <div class="absolute right-0 top-0 w-3 h-3 bg-[#8B5CF6] rounded-full border-2 border-white shadow-[0_0_12px_#8B5CF6] animate-ping"></div>
          <div class="absolute right-0 top-0 w-3 h-3 bg-[#8B5CF6] rounded-full border-2 border-white shadow-[0_0_8px_#8B5CF6]"></div>
        </div>
      </div>
      
      {/* Floating Mock Social Post */}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md flex items-center gap-4 relative overflow-hidden animate-float-slow">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-xl text-white font-black shadow-md shadow-purple-500/20 shrink-0">
          <i class="ph-fill ph-instagram-logo"></i>
        </div>
        <div class="flex-grow">
          <div class="text-xs font-bold text-white">Viral Reel Campaign</div>
          <div class="text-[10px] text-white/50">Posted 2 hours ago</div>
        </div>
        <div class="text-right">
          <div class="text-sm font-bold text-green-400 flex items-center justify-end gap-1">
            <i class="ph-fill ph-heart"></i> 34.8K
          </div>
          <div class="text-[10px] text-white/40">1.4K comments</div>
        </div>
      </div>
    </div>
  )
}

function WidgetPerformanceMarketing() {
  return () => (
    <div class="w-full h-full flex flex-col justify-between p-6 text-left">
      <div class="grid grid-cols-2 gap-4">
        {/* Circle ROAS gauge */}
        <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div class="text-[9px] font-semibold uppercase tracking-wider text-white/50 mb-2">Average ROAS</div>
          <div class="relative w-20 h-20 flex items-center justify-center">
            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                class="text-white/10"
                stroke-width="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="text-secondary"
                stroke-width="3"
                stroke-dasharray="100"
                stroke-dashoffset="100"
                style={{ animation: 'draw-circle 2s cubic-bezier(0.4, 0, 0.2, 1) forwards' }}
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div class="absolute flex flex-col items-center">
              <span class="text-xl font-bold font-conthrax text-white">5.1x</span>
              <span class="text-[7px] text-white/50">Delivered</span>
            </div>
          </div>
          <div class="mt-2 text-[8px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
            +45% YoY Growth
          </div>
        </div>

        {/* CAC Card */}
        <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md flex flex-col justify-between relative overflow-hidden">
          <span class="text-[9px] font-semibold uppercase tracking-wider text-white/50">CAC Reduction</span>
          <div class="flex flex-col gap-2 my-1">
            <div>
              <div class="text-[8px] text-white/40">Industry Avg. CAC</div>
              <div class="text-xs font-bold text-white/70 line-through">₹480</div>
            </div>
            <div>
              <div class="text-[8px] text-green-400 font-bold">BellBee Optimized</div>
              <div class="text-xl font-extrabold text-green-400">₹249</div>
            </div>
          </div>
          <div class="text-[8px] text-white/30 font-medium">Based on ₹12Cr+ spend</div>
        </div>
      </div>
      
      {/* Live Conversions Graph */}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md relative overflow-hidden animate-float-medium">
        <div class="flex justify-between items-center mb-2">
          <span class="text-[10px] font-bold text-white">Weekly Conversions Trend</span>
          <div class="flex gap-1">
            <span class="w-1 h-1 rounded-full bg-secondary"></span>
            <span class="w-1 h-1 rounded-full bg-secondary/40"></span>
            <span class="w-1 h-1 rounded-full bg-secondary/10"></span>
          </div>
        </div>
        <div class="flex items-end h-12 gap-2 pt-2">
          <div class="w-full bg-secondary/20 rounded-sm h-[30%]"></div>
          <div class="w-full bg-secondary/30 rounded-sm h-[45%]"></div>
          <div class="w-full bg-secondary/50 rounded-sm h-[60%]"></div>
          <div class="w-full bg-secondary/70 rounded-sm h-[80%]"></div>
          <div class="w-full bg-secondary rounded-sm h-[100%] shadow-[0_0_8px_rgba(229,96,38,0.4)]"></div>
        </div>
      </div>
    </div>
  )
}

function WidgetDigitalPR() {
  return () => (
    <div class="w-full h-full flex flex-col justify-between p-6 text-left">
      {/* Media Placements Grid */}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md relative overflow-hidden">
        <div class="text-[10px] font-semibold uppercase tracking-wider text-white/50 mb-3">Top Tier Placements</div>
        <div class="grid grid-cols-2 gap-2.5">
          <div class="bg-white/5 border border-white/5 rounded-lg py-1.5 px-2 flex items-center justify-center gap-1">
            <i class="ph-bold ph-sketch-logo text-xs text-primary-light"></i>
            <span class="text-[9px] font-black tracking-wider text-white/80">FORBES</span>
          </div>
          <div class="bg-white/5 border border-white/5 rounded-lg py-1.5 px-2 flex items-center justify-center gap-1">
            <i class="ph-bold ph-figma-logo text-xs text-secondary"></i>
            <span class="text-[9px] font-black tracking-wider text-white/80">TC</span>
          </div>
          <div class="bg-white/5 border border-white/5 rounded-lg py-1.5 px-2 flex items-center justify-center gap-1">
            <i class="ph-bold ph-framer-logo text-xs text-indigo-400"></i>
            <span class="text-[9px] font-black tracking-wider text-white/80">BLOOMBERG</span>
          </div>
          <div class="bg-white/5 border border-white/5 rounded-lg py-1.5 px-2 flex items-center justify-center gap-1">
            <i class="ph-bold ph-slack-logo text-xs text-emerald-400"></i>
            <span class="text-[9px] font-black tracking-wider text-white/80">VOGUE</span>
          </div>
        </div>
      </div>

      {/* Floating Influencer Campaign card */}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md flex items-center gap-3.5 relative overflow-hidden animate-float-slow">
        <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center font-bold text-xs text-white relative shrink-0">
          <span>AR</span>
          <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-surface-dark0 flex items-center justify-center text-[7px] text-white">
            <i class="ph-fill ph-seal-check"></i>
          </div>
        </div>
        <div class="flex-grow">
          <div class="text-[11px] font-bold text-white">Ananya Roy (Creator)</div>
          <div class="text-[9px] text-white/50">2.4M Reach • 8.2% Engagement</div>
        </div>
        <div class="text-right">
          <div class="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 inline-block">
            3.4x ROI
          </div>
        </div>
      </div>
    </div>
  )
}

function WidgetCreativeProduction() {
  return () => (
    <div class="w-full h-full flex flex-col justify-between p-6 text-left">
      {/* Video Monitor Frame */}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-2.5 backdrop-blur-md relative overflow-hidden">
        <div class="aspect-video bg-black rounded-lg relative overflow-hidden flex items-center justify-center border border-white/5">
          <div class="absolute top-2 left-2.5 flex items-center gap-1 text-[7px] text-red-500 font-bold tracking-wider">
            <span class="w-1 h-1 rounded-full bg-red-600 animate-pulse"></span>
            REC 00:14:02
          </div>
          <div class="absolute top-2 right-2.5 flex items-center gap-1 text-[7px] text-white/70">
            <i class="ph ph-battery-charging text-[10px]"></i> 82%
          </div>
          
          <div class="w-8 h-8 border border-white/15 rounded-full flex items-center justify-center">
            <div class="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
          </div>
          
          <div class="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-colors group cursor-pointer">
            <div class="w-9 h-9 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center text-white text-sm shadow-lg transition-transform group-hover:scale-105">
              <i class="ph-fill ph-play"></i>
            </div>
          </div>
          
          <div class="absolute bottom-2 left-2.5 text-[7px] text-white/40 font-mono">
            4K • 60 FPS • ProRes
          </div>
        </div>
      </div>

      {/* Timeline Editor mock */}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md relative overflow-hidden">
        <div class="flex justify-between items-center mb-2">
          <span class="text-[9px] font-semibold uppercase tracking-wider text-white/50">Timeline Editor</span>
          <span class="text-[8px] font-mono text-white/40">00:02:14:18</span>
        </div>
        <div class="flex flex-col gap-1">
          <div class="h-3.5 bg-white/5 rounded border border-white/5 relative overflow-hidden flex items-center px-1">
            <div class="h-2.5 bg-secondary/30 border border-secondary/50 rounded w-1/3 text-[7px] px-1 font-bold text-secondary-light flex items-center overflow-hidden">A_Roll_01</div>
            <div class="h-2.5 bg-primary/40 border border-primary/60 rounded w-2/5 text-[7px] px-1 font-bold text-primary-light flex items-center overflow-hidden ml-1">B_Roll_Macro</div>
          </div>
          <div class="h-3.5 bg-white/5 rounded border border-white/5 relative overflow-hidden flex items-center px-1">
            <div class="h-2.5 bg-emerald-500/20 border border-emerald-500/40 rounded w-full flex items-center px-1">
              <div class="flex items-end gap-[1px] h-1.5 w-full">
                <span class="w-[1px] bg-emerald-400 h-1"></span>
                <span class="w-[1px] bg-emerald-400 h-1.5"></span>
                <span class="w-[1px] bg-emerald-400 h-1.2"></span>
                <span class="w-[1px] bg-emerald-400 h-1"></span>
                <span class="w-[1px] bg-emerald-400 h-2"></span>
                <span class="w-[1px] bg-emerald-400 h-1.5"></span>
                <span class="w-[1px] bg-emerald-400 h-1"></span>
                <span class="w-[1px] bg-emerald-400 h-1.2"></span>
                <span class="w-[1px] bg-emerald-400 h-1.8"></span>
                <span class="w-[1px] bg-emerald-400 h-2"></span>
                <span class="w-[1px] bg-emerald-400 h-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WidgetWebSolutions() {
  return () => (
    <div class="w-full h-full flex flex-col justify-between p-6 text-left">
      {/* Browser Frame */}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-md relative overflow-hidden flex-grow flex flex-col mb-3">
        <div class="flex items-center gap-1 pb-1.5 border-b border-white/5 mb-3 shrink-0">
          <span class="w-1.5 h-1.5 rounded-full bg-red-400/80"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-yellow-400/80"></span>
          <span class="w-1.5 h-1.5 rounded-full bg-green-400/80"></span>
          <div class="h-3 bg-white/5 rounded px-2 text-[7px] text-white/30 flex items-center gap-1 w-32 ml-2 font-mono">
            <i class="ph ph-lock-key-hole text-[7px]"></i> bellbee.media/home
          </div>
        </div>
        
        <div class="flex-grow flex items-center justify-around gap-2.5">
          <div class="flex flex-col items-center gap-1">
            <div class="w-16 h-16 rounded-full border-4 border-emerald-500/20 flex items-center justify-center relative shadow-[0_0_12px_rgba(16,185,129,0.15)] bg-emerald-500/5">
              <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-500 animate-spin"></div>
              <span class="text-xl font-black text-emerald-400 font-conthrax">99</span>
            </div>
            <span class="text-[8px] font-bold text-emerald-400 tracking-wider">PERFORMANCE</span>
          </div>

          <div class="flex flex-col gap-1.5 shrink-0">
            <div class="flex items-center gap-1.5 text-[9px] font-medium text-white/80">
              <i class="ph-fill ph-check-circle text-emerald-400"></i> Speed Index: <span class="font-bold text-emerald-400">0.8s</span>
            </div>
            <div class="flex items-center gap-1.5 text-[9px] font-medium text-white/80">
              <i class="ph-fill ph-check-circle text-emerald-400"></i> LCP: <span class="font-bold text-emerald-400">1.1s</span>
            </div>
            <div class="flex items-center gap-1.5 text-[9px] font-medium text-white/80">
              <i class="ph-fill ph-check-circle text-emerald-400"></i> SEO & CRO: <span class="font-bold text-emerald-400">Optimised</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Rate Card */}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md flex items-center justify-between relative overflow-hidden shrink-0">
        <div>
          <span class="text-[9px] font-semibold uppercase tracking-wider text-white/40">Conversion Rate</span>
          <div class="flex items-baseline gap-1.5 mt-0.5">
            <span class="text-base font-bold text-white/50 line-through">1.8%</span>
            <i class="ph ph-arrow-right text-[10px] text-green-400"></i>
            <span class="text-xl font-black text-green-400 font-conthrax">4.2%</span>
          </div>
        </div>
        <div class="text-right">
          <span class="text-[9px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 font-bold border border-green-500/20">
            +133% Uplift
          </span>
        </div>
      </div>
    </div>
  )
}

function WidgetDesignCopy(handle: Handle<{ parentHandle: Handle<any> }>) {
  let activeColorIndex = 0

  return () => (
    <div class="w-full h-full flex flex-col justify-between p-6 text-left">
      {/* Design Board / Color Swatches */}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md relative overflow-hidden">
        <div class="flex justify-between items-center mb-3.5">
          <span class="text-[10px] font-semibold uppercase tracking-wider text-white/50">Brand Canvas</span>
          <span class="text-[8px] text-white/40 font-mono">1920x1080px</span>
        </div>
        <div class="flex justify-around items-center py-1.5 bg-black/20 rounded-xl border border-white/5">
          {[
            { hex: '#154476', name: 'Primary' },
            { hex: '#E56026', name: 'Secondary' },
            { hex: '#FDB517', name: 'Accent' },
            { hex: '#2CBCEE', name: 'Cyan' },
            { hex: '#0F172A', name: 'Slate' }
          ].map((color, i) => (
            <button
              key={i}
              mix={on('click', () => {
                activeColorIndex = i
                handle.props.parentHandle.update()
              })}
              class="flex flex-col items-center gap-1 focus:outline-none group"
            >
              <div
                class={`w-7 h-7 rounded-full border-2 transition-all duration-300 ${
                  activeColorIndex === i 
                    ? 'border-white scale-110 shadow-lg shadow-white/20' 
                    : 'border-transparent group-hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
              />
              <span class="text-[7px] font-mono text-white/50">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Copy Editor card */}
      <div class="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md relative overflow-hidden">
        <div class="text-[9px] font-semibold uppercase tracking-wider text-white/40 mb-2">High-Converting Copy</div>
        <div class="flex flex-col gap-1.5">
          <div class="p-2 rounded bg-red-500/5 border border-red-500/10 flex items-start gap-1.5">
            <i class="ph ph-x-circle text-red-400 mt-0.5 shrink-0 text-xs"></i>
            <div class="text-[9px] text-white/50 font-medium line-through leading-tight">We are a next-gen digital marketing agency providing services.</div>
          </div>
          <div class="p-2 rounded bg-emerald-500/5 border border-emerald-500/10 flex items-start gap-1.5">
            <i class="ph-fill ph-check-circle text-emerald-400 mt-0.5 shrink-0 text-xs"></i>
            <div class="text-[9px] text-white font-bold leading-tight">We Scale Brands Through Data-Led Marketing & Conversion Funnels.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   INTERACTIVE SERVICES SHOWCASE
───────────────────────────────────────── */

interface ServiceItem extends SerializableProps {
  icon: string
  title: string
  desc: string
  tags: string[]
  href: string
}

export interface InteractiveServicesShowcaseProps extends SerializableProps {
  services: ServiceItem[]
}

export const InteractiveServicesShowcase = clientEntry(
  import.meta.url,
  function InteractiveServicesShowcase(handle: Handle<InteractiveServicesShowcaseProps>) {
    let activeIndex = 0

    return () => {
      const servicesList = handle.props.services

      return (
        <div>
        <style>{`
          .iss-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: start; width: 100%; }
          .iss-left { display: flex; flex-direction: column; gap: 1rem; width: 100%; }
          .iss-right { display: none; }
          .iss-accordion { display: block; }
          @media (min-width: 1024px) {
            .iss-grid { grid-template-columns: 5fr 7fr; }
            .iss-right { display: block; position: sticky; top: 7rem; height: 480px;
              background: #0f172a; border-radius: 32px; border: 1px solid #334155;
              box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); overflow: hidden; position: sticky; }
            .iss-accordion { display: none !important; }
          }
          .iss-btn { width: 100%; text-align: left; border-radius: 1rem; padding: 1.25rem; border: 1px solid;
            transition: all 0.3s; display: flex; align-items: center; justify-content: space-between;
            cursor: pointer; background: none; }
          .iss-btn.active { background: #fff; border-color: rgba(21,68,118,0.2);
            box-shadow: 0 20px 25px -5px rgba(21,68,118,0.05); transform: translateY(-2px); }
          .iss-btn.inactive { background: rgba(255,255,255,0.4); border-color: #f1f5f9; }
          .iss-btn.inactive:hover { background: #fff; border-color: #e2e8f0; }
          .iss-icon { width: 3rem; height: 3rem; border-radius: 0.75rem; display: flex; align-items: center;
            justify-content: center; font-size: 1.25rem; transition: all 0.3s; }
          .iss-icon.active { background: #154476; color: #fff; transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(21,68,118,0.1); }
          .iss-icon.inactive { background: rgba(21,68,118,0.05); color: #154476; }
          .iss-title { font-weight: 700; font-size: 1rem; transition: color 0.3s; }
          .iss-title.active { color: #154476; }
          .iss-title.inactive { color: #0f172a; }
          .iss-tag { font-size: 0.5625rem; font-weight: 700; padding: 0.125rem 0.5rem; border-radius: 9999px; }
          .iss-tag.active { background: rgba(21,68,118,0.1); color: #154476; }
          .iss-tag.inactive { background: #f1f5f9; color: #64748b; }
          .iss-arrow { font-size: 1.125rem; transition: all 0.3s; }
          .iss-arrow.active { color: #154476; transform: rotate(90deg); }
          .iss-arrow.inactive { color: #64748b; }
          @media (min-width: 1024px) { .iss-arrow.active { transform: none; } }
          .iss-panel { overflow: hidden; transition: max-height 0.35s ease, opacity 0.35s ease; }
          .iss-panel.open { max-height: 600px; opacity: 1; margin-top: 1rem; }
          .iss-panel.closed { max-height: 0; opacity: 0; pointer-events: none; }
          .iss-widget-wrap { width: 100%; height: 100%; position: absolute; inset: 0; z-index: 10;
            transition: opacity 0.5s, transform 0.5s; }
          .iss-widget-wrap.visible { opacity: 1; transform: scale(1) translateY(0); pointer-events: auto; }
          .iss-widget-wrap.hidden-widget { opacity: 0; transform: scale(0.95) translateY(1rem); pointer-events: none; }
          .iss-right-inner { position: relative; width: 100%; height: 100%; }
          .iss-right-glow { position: absolute; inset: 0;
            background: linear-gradient(135deg, rgba(21,68,118,0.1) 0%, transparent 50%, rgba(229,96,38,0.1) 100%);
            pointer-events: none; z-index: 0; }
        `}</style>
        <div class="iss-grid">
          {/* Left List of Services */}
          <div class="iss-left">
            {servicesList.map((s, index) => {
              let isActive = activeIndex === index
              return (
                <div key={index} style={{ width: '100%' }}>
                  <button
                    mix={[
                      on('click', () => {
                        activeIndex = index
                        handle.update()
                      }),
                      on('pointerenter', () => {
                        activeIndex = index
                        handle.update()
                      })
                    ]}
                    class={`iss-btn ${isActive ? 'active' : 'inactive'}`}
                    style={{ outline: 'none' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div class={`iss-icon ${isActive ? 'active' : 'inactive'}`}>
                        <i class={`ph-fill ${s.icon}`}></i>
                      </div>
                      <div>
                        <h3 class={`iss-title ${isActive ? 'active' : 'inactive'}`}>
                          {s.title}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '0.375rem' }}>
                          {s.tags.map((tag) => (
                            <span key={tag} class={`iss-tag ${isActive ? 'active' : 'inactive'}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div class={`iss-arrow ${isActive ? 'active' : 'inactive'}`}>
                      <i class="ph ph-arrow-right"></i>
                    </div>
                  </button>

                  {/* Mobile Accordion (hidden on desktop via CSS) */}
                  <div class={`iss-accordion iss-panel ${isActive ? 'open' : 'closed'}`}>
                    <div style={{ background: '#fff', borderRadius: '1rem', padding: '1.5rem',
                      border: '1px solid #f1f5f9', boxShadow: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
                      display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <p style={{ fontSize: '0.875rem', lineHeight: '1.625', color: '#64748b', margin: 0 }}>{s.desc}</p>

                      <div style={{ background: '#0f172a', borderRadius: '1rem', border: '1px solid #334155',
                        height: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', position: 'relative', boxShadow: '0 10px 15px -3px rgb(0 0 0/0.1)',
                        overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', inset: 0,
                          background: 'linear-gradient(135deg, rgba(21,68,118,0.05) 0%, transparent 50%, rgba(229,96,38,0.05) 100%)',
                          pointerEvents: 'none' }}></div>
                        {index === 0 && <WidgetSocialMedia />}
                        {index === 1 && <WidgetPerformanceMarketing />}
                        {index === 2 && <WidgetDigitalPR />}
                        {index === 3 && <WidgetCreativeProduction />}
                        {index === 4 && <WidgetWebSolutions />}
                        {index === 5 && <WidgetDesignCopy parentHandle={handle} />}
                      </div>

                      <a href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        fontSize: '0.875rem', fontWeight: 700, color: '#154476',
                        textDecoration: 'none', marginTop: '0.5rem' }}>
                        Learn more about {s.title} <i class="ph ph-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Visual Dashboard (desktop only via CSS) */}
          <div class="iss-right">
            <div class="iss-right-glow"></div>
            <div class="iss-right-inner">
              {servicesList.map((_, index) => {
                let isActive = activeIndex === index
                return (
                  <div
                    key={index}
                    class={`iss-widget-wrap ${isActive ? 'visible' : 'hidden-widget'}`}
                  >
                    {index === 0 && <WidgetSocialMedia />}
                    {index === 1 && <WidgetPerformanceMarketing />}
                    {index === 2 && <WidgetDigitalPR />}
                    {index === 3 && <WidgetCreativeProduction />}
                    {index === 4 && <WidgetWebSolutions />}
                    {index === 5 && <WidgetDesignCopy parentHandle={handle} />}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      )
    }
  },
)

"use client"

import { Car, Zap } from "lucide-react"

export default function WheelsSection() {
  return (
    <section id="wheels" className="relative py-24 px-4 bg-[#050505] overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(34,197,94,0.06)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto lg:ml-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-green-500/30" />
              <span className="text-[10px] font-mono text-green-500/60 tracking-[0.3em]">
                OCTOBER 24
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-white leading-none">
              BACK TO
            </h2>
            <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-white/20 leading-none">
              THE FUTURE
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <Zap className="w-5 h-5 text-green-500/60" />
              <h3 className="text-2xl font-sans font-bold text-green-500 tracking-tight">
                WHEELS AUTOSHOW
              </h3>
            </div>

            {/* Specs */}
            <div className="mt-8 space-y-3 border-l border-green-500/20 pl-6">
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-mono text-white/20 tracking-widest w-20">PROTO</span>
                <span className="text-xs font-mono text-white/50">1981 DeLorean</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-mono text-white/20 tracking-widest w-20">STATUS</span>
                <span className="text-xs font-mono text-green-500/70">Operational</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-mono text-white/20 tracking-widest w-20">POWER</span>
                <span className="text-xs font-mono text-white/50">{"Mr. Fusion\u2122 Reactor"}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-mono text-white/20 tracking-widest w-20">FUNC</span>
                <span className="text-xs font-mono text-white/50">Temporal displacement</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["RALLY", "CAR REVEALS", "STUNTS", "TEMPORAL SHIFT"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-white/30 tracking-widest border border-white/5 px-4 py-2 hover:border-green-500/30 hover:text-green-500/60 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Circle frame */}
              <div className="absolute inset-0 rounded-full border border-white/5" />
              <div className="absolute inset-4 rounded-full border border-green-500/10" />
              <div className="absolute inset-8 rounded-full border border-green-500/5" />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Car className="w-16 h-16 text-green-500/30 mx-auto" />
                  <p className="text-6xl font-sans font-bold text-white/5 mt-4 tracking-tighter">2025</p>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-1/4 right-0 w-2 h-2 rounded-full bg-green-500/30" />
              <div className="absolute bottom-1/3 left-0 w-2 h-2 rounded-full bg-green-500/20" />
              <div className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-green-500/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

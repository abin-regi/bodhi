"use client"

import ScrollingMarquee from "./scrolling-marquee"
import { Gamepad2 } from "lucide-react"

export default function GPCSection() {
  return (
    <section id="gpc" className="relative py-0 bg-[#050505] overflow-hidden">
      {/* Marquee */}
      <ScrollingMarquee
        text="GAMING CONCLAVE"
        className="py-4 border-y border-green-500/10 bg-[#080808]"
        textClassName="text-green-500/40"
      />

      <div className="relative py-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.06)_0%,transparent_60%)]" />

        <div className="max-w-7xl mx-auto lg:ml-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-green-500/30" />
                <span className="text-[10px] font-mono text-green-500/60 tracking-[0.3em]">
                  COMPETE & CONQUER
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-white leading-none">
                GPC
              </h2>
              <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-green-500/30 leading-none">
                NEXUS
              </h2>

              <p className="text-sm font-mono text-white/30 mt-6 leading-relaxed max-w-md">
                Show off your skills and conquer the arena at Gaming Conclave, where only the best rise to the top.
              </p>

              <div className="mt-10">
                <button className="border border-green-500/50 text-green-500 px-8 py-3 text-xs font-mono tracking-[0.2em] hover:bg-green-500 hover:text-black transition-all duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-square">
                {/* Hexagonal-ish frame */}
                <div className="absolute inset-0 border border-white/5 rotate-45" />
                <div className="absolute inset-6 border border-green-500/10 rotate-45" />
                <div className="absolute inset-12 border border-green-500/20 rotate-45" />

                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Gamepad2 className="w-16 h-16 text-green-500/40 mx-auto" />
                    <p className="text-xs font-mono text-green-500/30 mt-4 tracking-[0.3em]">NEXUS</p>
                  </div>
                </div>

                {/* Corner dots */}
                <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-green-500/30 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-green-500/30 -translate-x-1/2 translate-y-1/2" />
                <div className="absolute left-0 top-1/2 w-2 h-2 rounded-full bg-green-500/30 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-green-500/30 translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Bottom marquee labels */}
          <div className="flex flex-wrap gap-3 mt-16 justify-center">
            {Array(8)
              .fill("NEXUS")
              .map((text, i) => (
                <span
                  key={i}
                  className={`text-xs font-mono tracking-[0.3em] ${
                    i % 2 === 0 ? "text-white/10" : "text-green-500/20"
                  }`}
                >
                  {text}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

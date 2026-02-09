"use client"

import ScrollingMarquee from "./scrolling-marquee"
import { Bot } from "lucide-react"

export default function RobowarsSection() {
  return (
    <section id="robowars" className="relative py-0 bg-[#050505] overflow-hidden">
      {/* Marquee */}
      <ScrollingMarquee
        text="ROBOWARS"
        className="py-4 border-y border-green-500/10 bg-[#080808]"
        textClassName="text-green-500/40"
      />

      <div className="relative py-24 px-4">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.06)_0%,transparent_60%)]" />

        <div className="max-w-7xl mx-auto lg:ml-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-green-500/10 animate-spin" style={{ animationDuration: "20s" }} />
                {/* Middle ring */}
                <div className="absolute inset-6 rounded-full border border-green-500/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
                {/* Inner ring */}
                <div className="absolute inset-12 rounded-full border border-green-500/30" />
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-green-500/5 rounded-full flex items-center justify-center border border-green-500/20">
                    <Bot className="w-12 h-12 md:w-16 md:h-16 text-green-500/60" />
                  </div>
                </div>
                {/* Floating labels */}
                <div className="absolute top-4 right-4 text-[8px] font-mono text-green-500/40 tracking-widest">
                  16x16 FT
                </div>
                <div className="absolute bottom-4 left-4 text-[8px] font-mono text-green-500/40 tracking-widest">
                  8KG \ 15KG
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-green-500/30" />
                <span className="text-[10px] font-mono text-green-500/60 tracking-[0.3em]">
                  OCT 24, 25 | 16 x 16 FT. ARENA
                </span>
              </div>

              <h2 className="text-6xl md:text-8xl font-sans font-bold tracking-tighter text-white leading-none">
                ROBO
              </h2>
              <h2 className="text-6xl md:text-8xl font-sans font-bold tracking-tighter text-green-500/30 leading-none">
                WARS
              </h2>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-white/30 tracking-widest w-24">WEIGHT</span>
                  <span className="text-sm font-mono text-white/70">8KG \ 15KG</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-white/30 tracking-widest w-24">ARENA</span>
                  <span className="text-sm font-mono text-white/70">16 x 16 FT.</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-white/30 tracking-widest w-24">PRIZES</span>
                  <span className="text-sm font-mono text-green-500">WORTH INR 8 LAKH</span>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <button className="border border-green-500/50 text-green-500 px-8 py-3 text-xs font-mono tracking-[0.2em] hover:bg-green-500 hover:text-black transition-all duration-300">
                  REGISTER NOW
                </button>
                <span className="text-[10px] font-mono text-white/20 tracking-widest">{"-->"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

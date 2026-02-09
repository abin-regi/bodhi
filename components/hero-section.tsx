"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] grid-bg noise-overlay"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)]" />

      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Top label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-green-500/50" />
          <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-green-500/80 uppercase">
            {"/// South India's Biggest Tech Fest"}
          </span>
          <span className="h-px w-8 bg-green-500/50" />
        </div>

        {/* Main title */}
        <h1 className="text-7xl md:text-[10rem] lg:text-[14rem] font-sans font-bold tracking-tighter leading-none text-white">
          TATHVA
        </h1>

        {/* Subtitle - Date */}
        <div className="mt-4 md:mt-6 flex items-center justify-center gap-4 md:gap-6">
          <span className="h-px w-12 bg-white/10" />
          <p className="text-sm md:text-lg font-mono tracking-[0.2em] text-white/50">
            OCTOBER 24, 25, 26
          </p>
          <span className="h-px w-12 bg-white/10" />
        </div>

        {/* Year */}
        <p className="text-6xl md:text-8xl font-sans font-bold text-white/5 mt-2 tracking-tighter">
          2025
        </p>

        {/* Badge */}
        <div className="mt-8 inline-flex items-center gap-2 border border-green-500/20 rounded-full px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono text-green-500/70 tracking-widest uppercase">
            NIT Calicut
          </span>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20" />
        <span className="text-[8px] font-mono text-white/20 tracking-[0.3em] uppercase">Scroll</span>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-20 hidden lg:block">
        <div className="w-16 h-16 border-l border-t border-white/5" />
      </div>
      <div className="absolute bottom-8 right-8">
        <div className="w-16 h-16 border-r border-b border-white/5" />
      </div>
    </section>
  )
}

"use client"

import { Cpu, Layers, Microscope } from "lucide-react"

export default function ExpoSection() {
  return (
    <section id="expo" className="relative py-24 px-4 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.05)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto lg:ml-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-red-500/30" />
              <span className="text-[10px] font-mono text-red-500/60 tracking-[0.3em]">
                TECHNOLOGY SHOWCASE
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-white leading-none">
              INTERFACE
            </h2>
            <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-red-500/30 leading-none">
              EXPO
            </h2>

            <p className="text-sm font-mono text-white/30 mt-6 leading-relaxed max-w-md">
              {"BODHI x Drishya'25 Interface is all about technology \u2014 the trending, the innovations, the age-old, and many more."}
            </p>

            <div className="mt-10">
              <button className="border border-red-500/50 text-red-500 px-8 py-3 text-xs font-mono tracking-[0.2em] hover:bg-red-500 hover:text-black transition-all duration-300">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right - Feature cards */}
          <div className="space-y-4">
            {[
              {
                icon: Cpu,
                title: "Latest Tech",
                desc: "Explore cutting-edge technology demonstrations and prototypes from leading innovators.",
              },
              {
                icon: Layers,
                title: "Innovations",
                desc: "Witness groundbreaking projects pushing the boundaries of what technology can achieve.",
              },
              {
                icon: Microscope,
                title: "Research",
                desc: "Dive into research presentations from top institutions and emerging tech leaders.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group border border-white/5 bg-[#0a0a0a] p-6 hover:border-red-500/20 transition-all duration-500 flex items-start gap-4"
              >
                <item.icon className="w-6 h-6 text-red-500/40 group-hover:text-red-500/70 transition-colors flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-sans font-bold text-white/80 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs font-mono text-white/30 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

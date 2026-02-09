"use client"

import { QrCode } from "lucide-react"

const passes = [
  {
    label: "ALL DAYS",
    date: "OCT 24 - 26 2025",
    includes: "Competitions | Events | Conclave",
    price: "1999/-",
    featured: true,
  },
  {
    label: "DAY 1",
    date: "OCT 24 2025",
    includes: "Wheels | Robowars | Conclave",
    price: "399/-",
    featured: false,
  },
  {
    label: "DAY 2",
    date: "OCT 25 2025",
    includes: "Competitions | Events | Conclave",
    price: "799/-",
    featured: false,
  },
  {
    label: "DAY 3",
    date: "OCT 26 2025",
    includes: "Competitions | Events | Conclave",
    price: "1399/-",
    featured: false,
  },
]

export default function PassesSection() {
  return (
    <section id="passes" className="relative py-24 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto lg:ml-20">
        {/* Section header */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-green-500/30" />
            <span className="text-[10px] font-mono text-green-500/60 tracking-[0.3em] uppercase">
              Get Your Pass
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-white">
            TATHVA PASS
          </h2>
          <p className="text-sm font-mono text-white/30 mt-3 max-w-md">
            One pass. Every moment of Tathva.
          </p>
        </div>

        {/* Passes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {passes.map((pass) => (
            <div
              key={pass.label}
              className={`group relative border ${
                pass.featured
                  ? "border-green-500/30 bg-green-500/5"
                  : "border-white/5 bg-[#0a0a0a]"
              } hover:border-green-500/40 transition-all duration-500 overflow-hidden`}
            >
              {/* Top line */}
              {pass.featured && (
                <div className="h-px w-full bg-green-500/50" />
              )}

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-[9px] font-mono text-white/30 tracking-widest">TATHVA 2025</p>
                    <p className="text-[9px] font-mono text-white/20 tracking-widest mt-1">ADMIT ONE</p>
                  </div>
                  <QrCode className="w-8 h-8 text-white/10" />
                </div>

                {/* Label */}
                <h3 className={`text-2xl font-sans font-bold tracking-tight ${
                  pass.featured ? "text-green-500" : "text-white"
                }`}>
                  {pass.label}
                </h3>

                {/* Date */}
                <p className="text-xs font-mono text-white/40 mt-2">
                  {pass.date}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-white/5 my-4" />

                {/* Includes */}
                <p className="text-[10px] font-mono text-white/30 tracking-wider leading-relaxed">
                  {pass.includes}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-end justify-between">
                  <span className={`text-3xl font-sans font-bold tracking-tight ${
                    pass.featured ? "text-green-500" : "text-white/90"
                  }`}>
                    {pass.price}
                  </span>
                  <button className={`text-[10px] font-mono tracking-widest px-4 py-2 border transition-all ${
                    pass.featured
                      ? "border-green-500/50 text-green-500 hover:bg-green-500 hover:text-black"
                      : "border-white/10 text-white/40 hover:border-green-500/50 hover:text-green-500"
                  }`}>
                    LOGIN
                  </button>
                </div>
              </div>

              {/* Dotted cut line */}
              <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-white/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

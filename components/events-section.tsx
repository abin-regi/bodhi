"use client"

import { Wrench, Trophy, Lightbulb } from "lucide-react"

const events = [
  {
    icon: Wrench,
    tagline: "INNOVATE - BUILD - LEARN",
    title: "TECHNICAL",
    subtitle: "WORKSHOPS",
    description: "Hands-on sessions with industry experts. Build real projects and learn cutting-edge technologies.",
    color: "red",
  },
  {
    icon: Trophy,
    tagline: "INNOVATE - COMPETE - CONQUER",
    title: "THRILLING",
    subtitle: "COMPETITIONS",
    description: "Push your limits in intense technical and management competitions with participants across the nation.",
    color: "red",
  },
  {
    icon: Lightbulb,
    tagline: "THINK - INSPIRE - INNOVATE",
    title: "INSIGHTFUL",
    subtitle: "LECTURES",
    description: "Hear from thought leaders, innovators, and visionaries who are shaping the future of technology.",
    color: "red",
  },
]

export default function EventsSection() {
  return (
    <section id="explore" className="relative py-24 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto lg:ml-20">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-red-500/30" />
            <span className="text-[10px] font-mono text-red-500/60 tracking-[0.3em] uppercase">
              What awaits you
            </span>
          </div>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="group relative border border-white/5 bg-[#0a0a0a] hover:border-red-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-8">
                {/* Tagline */}
                <p className="text-[9px] font-mono text-red-500/50 tracking-[0.3em] mb-6">
                  {event.tagline}
                </p>

                {/* Icon */}
                <event.icon className="w-8 h-8 text-red-500/60 mb-6 group-hover:text-red-500 transition-colors" />

                {/* Title */}
                <h3 className="text-3xl font-sans font-bold text-white tracking-tight leading-none">
                  {event.title}
                </h3>
                <h3 className="text-3xl font-sans font-bold text-white/30 tracking-tight leading-none mt-1">
                  {event.subtitle}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/30 mt-6 leading-relaxed font-mono">
                  {event.description}
                </p>

                {/* Arrow */}
                <div className="mt-8 flex items-center gap-2 text-red-500/40 group-hover:text-red-500 transition-colors">
                  <span className="text-[10px] font-mono tracking-widest">EXPLORE</span>
                  <span className="text-sm">{"-->"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

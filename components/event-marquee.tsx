"use client"

const events = [
  "INFORMALS",
  "ARIVU",
  "MITHOON",
  "WHEELS",
  "MUSIC CLUB",
  "SA & MHR",
  "SAVAARI THE BAND",
  "DJ VIOLA",
  "ROBOWARS",
]

export default function EventMarquee() {
  const items = [...events, ...events, ...events, ...events]

  return (
    <div className="overflow-hidden py-6 border-y border-white/5 bg-[#080808]">
      <div className="flex animate-marquee">
        {items.map((event, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-sm md:text-base font-mono text-white/20 tracking-widest uppercase whitespace-nowrap px-4 hover:text-green-500/60 transition-colors cursor-default">
              {event}
            </span>
            <span className="text-green-500/30 text-xs mx-2">{"•"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

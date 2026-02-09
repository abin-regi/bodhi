"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Music } from "lucide-react"

const artists = [
  {
    name: "Mithoon",
    description:
      "A master of soulful melodies, Mithoon crafts compositions that blend classical richness with modern soundscapes. Each song resonates deeply, leaving a lasting emotional imprint on listeners.",
  },
  {
    name: "Arivu",
    description:
      "Arivu's music is a bold voice of identity, culture, and resistance. With lyrics rooted in truth and societal commentary, his performances inspire reflection and empowerment.",
  },
  {
    name: "SA",
    description:
      "A rising figure in the Malayalam hip-hop scene, SA captivates audiences with his dynamic rap and lyrical precision. His collaborations are celebrated for their energy and authenticity.",
  },
  {
    name: "MHR",
    description:
      "Known for his innovative production and genre-blending beats, MHR pushes the boundaries of contemporary Malayalam music with immersive audio experiences.",
  },
]

export default function ProniteSection() {
  const [activeArtist, setActiveArtist] = useState(0)

  const nextArtist = () => setActiveArtist((prev) => (prev + 1) % artists.length)
  const prevArtist = () => setActiveArtist((prev) => (prev - 1 + artists.length) % artists.length)

  return (
    <section id="pronite" className="relative py-24 px-4 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.05)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto lg:ml-20 relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-green-500/30" />
            <span className="text-[10px] font-mono text-green-500/60 tracking-[0.3em] uppercase">
              Live Performances
            </span>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="border border-white/5 bg-[#0a0a0a] p-6 flex flex-col justify-between aspect-square md:aspect-auto">
              <span className="text-[9px] font-mono text-white/20 tracking-widest">11.3210 N</span>
              <div>
                <p className="text-lg font-sans text-white/80 font-bold">Be there</p>
                <p className="text-lg font-sans text-white/40 font-bold">Feel it</p>
                <p className="text-lg font-sans text-green-500/60 font-bold">Live it</p>
              </div>
              <span className="text-[9px] font-mono text-white/20 tracking-widest">75.9320 E</span>
            </div>

            <div className="md:col-span-2 border border-white/5 bg-[#0a0a0a] p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)]" />
              <div className="relative z-10">
                <Music className="w-8 h-8 text-green-500/40 mb-4" />
                <h3 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
                  PRONITE
                </h3>
                <p className="text-sm font-mono text-white/30 mt-3">
                  Three nights of electrifying performances
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Artist carousel */}
        <div className="relative">
          <div className="border border-white/5 bg-[#0a0a0a] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left - Artist visual */}
              <div className="relative aspect-square md:aspect-auto md:min-h-[400px] bg-[#080808] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.1)_0%,transparent_70%)]" />
                <div className="relative z-10 text-center">
                  <h3 className="text-6xl md:text-8xl font-sans font-bold text-white/5 tracking-tighter">
                    {artists[activeArtist].name}
                  </h3>
                  <div className="mt-4 w-20 h-20 mx-auto rounded-full border border-green-500/20 flex items-center justify-center">
                    <Music className="w-8 h-8 text-green-500/40" />
                  </div>
                </div>
              </div>

              {/* Right - Info */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-[9px] font-mono text-green-500/50 tracking-[0.3em] mb-4">
                    ARTIST {String(activeArtist + 1).padStart(2, "0")} / {String(artists.length).padStart(2, "0")}
                  </p>
                  <h4 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight">
                    {artists[activeArtist].name}
                  </h4>
                  <p className="text-sm font-mono text-white/30 mt-6 leading-relaxed max-w-md">
                    {artists[activeArtist].description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevArtist}
                      className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-green-500/50 hover:text-green-500 transition-all text-white/40"
                      aria-label="Previous artist"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextArtist}
                      className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-green-500/50 hover:text-green-500 transition-all text-white/40"
                      aria-label="Next artist"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="text-[10px] font-mono text-green-500/60 tracking-widest hover:text-green-500 transition-colors">
                    SEE MORE {"-->"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Artist tabs */}
          <div className="flex mt-4 gap-2">
            {artists.map((artist, i) => (
              <button
                key={artist.name}
                onClick={() => setActiveArtist(i)}
                className={`flex-1 py-3 text-xs font-mono tracking-wider transition-all border ${
                  i === activeArtist
                    ? "border-green-500/30 text-green-500 bg-green-500/5"
                    : "border-white/5 text-white/30 hover:border-white/10"
                }`}
              >
                {artist.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { MapPin } from "lucide-react"

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Explore", href: "#explore" },
  { label: "RoboWars", href: "#robowars" },
  { label: "Passes", href: "#passes" },
  { label: "Pronite", href: "#pronite" },
  { label: "Wheels", href: "#wheels" },
  { label: "GPC", href: "#gpc" },
  { label: "Expo", href: "#expo" },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto lg:ml-20 px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-sans font-bold text-white tracking-tighter">TATHVA</h3>
            <p className="text-[10px] font-mono text-white/20 tracking-[0.3em] mt-2">
              {"ANNUAL TECHNO-MANAGEMENT FEST"}
            </p>
            <p className="text-[10px] font-mono text-green-500/40 tracking-[0.2em] mt-1">
              NIT CALICUT
            </p>

            <div className="mt-6 flex items-center gap-2 text-white/20">
              <MapPin className="w-3 h-3" />
              <span className="text-[10px] font-mono tracking-widest">
                {"11.3210\u00B0N, 75.9320\u00B0E"}
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-[10px] font-mono text-white/30 tracking-[0.3em] mb-4">
              NAVIGATE
            </p>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-mono text-white/20 hover:text-green-500/70 transition-colors tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-mono text-white/30 tracking-[0.3em] mb-4">
              CONNECT
            </p>
            <div className="space-y-3">
              <p className="text-xs font-mono text-white/20">
                National Institute of Technology Calicut
              </p>
              <p className="text-xs font-mono text-white/20">
                Kozhikode, Kerala 673601
              </p>
              <a
                href="https://www.tathva.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-green-500/50 hover:text-green-500 transition-colors inline-block mt-2"
              >
                www.tathva.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] font-mono text-white/15 tracking-widest">
            {"TATHVA \u00A9 2025 NIT CALICUT. ALL RIGHTS RESERVED."}
          </p>
          <div className="flex items-center gap-6">
            {["Instagram", "Twitter", "LinkedIn", "YouTube"].map((social) => (
              <span
                key={social}
                className="text-[9px] font-mono text-white/15 tracking-widest hover:text-green-500/50 transition-colors cursor-pointer uppercase"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <p className="text-[12rem] md:text-[20rem] font-sans font-bold text-white/[0.015] tracking-tighter leading-none text-center -mb-12 md:-mb-20 select-none">
          TATHVA
        </p>
      </div>
    </footer>
  )
}

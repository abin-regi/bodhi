"use client"

import { useState } from "react"
import { Menu, X, MapPin } from "lucide-react"

const navItems = [
  { num: "01/", label: "Home", href: "#home" },
  { num: "02/", label: "Explore", href: "#explore" },
  { num: "03/", label: "RoboWars", href: "#robowars" },
  { num: "04/", label: "Passes", href: "#passes" },
  { num: "05/", label: "Pronite", href: "#pronite" },
  { num: "06/", label: "Wheels", href: "#wheels" },
  { num: "07/", label: "GPC", href: "#gpc" },
  { num: "08/", label: "Expo", href: "#expo" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-16 z-50 hidden lg:flex flex-col items-center justify-between py-6 border-r border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-green-500/50 flex items-center justify-center">
            <span className="text-green-500 text-[8px] font-mono font-bold tracking-tighter">T25</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <MapPin className="w-4 h-4 text-white/40 hover:text-green-500 transition-colors cursor-pointer" />
        </div>
        <button className="text-[10px] font-mono text-white/40 hover:text-green-500 transition-colors -rotate-90 whitespace-nowrap tracking-widest">
          LOGIN
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#050505] transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-8 md:px-16">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-4 text-white/90 hover:text-green-500 transition-colors"
              >
                <span className="text-xs font-mono text-white/30 group-hover:text-green-500/50 w-8">
                  {item.num}
                </span>
                <span className="text-4xl md:text-6xl font-sans font-bold tracking-tight">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-12">
            <button className="border border-green-500/50 text-green-500 px-6 py-2 text-sm font-mono tracking-widest hover:bg-green-500 hover:text-black transition-all">
              LOGIN
            </button>
          </div>
        </div>
      </div>

      {/* Mobile top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 lg:hidden flex items-center justify-between px-4 py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-green-500/50 flex items-center justify-center">
            <span className="text-green-500 text-[8px] font-mono font-bold tracking-tighter">T25</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-white/40 tracking-widest">LOGIN</span>
          <button
            onClick={() => setIsOpen(true)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>
    </>
  )
}

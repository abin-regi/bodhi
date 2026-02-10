"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MapPin } from "lucide-react"

const navItems = [
  { num: "01/", label: "Home", href: "/" },
  { num: "02/", label: "BODHI", href: "/bodhi" },
  { num: "03/", label: "DRISHYA", href: "/drishya" },
  { num: "04/", label: "RoboWars", href: "/#robowars" },
  { num: "05/", label: "Passes", href: "/#passes" },
  { num: "06/", label: "Pronite", href: "/#pronite" },
  { num: "07/", label: "Wheels", href: "/#wheels" },
  { num: "08/", label: "GPC", href: "/#gpc" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-16 z-50 hidden lg:flex flex-col items-center justify-between py-6 border-r border-white/5 bg-transparent backdrop-blur-none">
        <Link href="/" className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-red-500/50 flex items-center justify-center hover:bg-red-500/10 transition-colors">
            <span className="text-red-500 text-[8px] font-mono font-bold tracking-tighter">BD25</span>
          </div>
        </Link>
        <div className="flex flex-col items-center gap-1">
          <MapPin className="w-4 h-4 text-white/40 hover:text-red-500 transition-colors cursor-pointer" />
        </div>
        <div className="h-8" /> {/* Spacer */}
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#050505] transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-4 text-white/90 hover:text-red-500 transition-colors"
              >
                <span className="text-xs font-mono text-white/30 group-hover:text-red-500/50 w-8">
                  {item.num}
                </span>
                <span className="text-4xl md:text-6xl font-sans font-bold tracking-tight">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 lg:hidden flex items-center justify-between px-4 py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-red-500/50 flex items-center justify-center">
            <span className="text-red-500 text-[8px] font-mono font-bold tracking-tighter">BD25</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Floating Snackbar */}
      <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-lg px-1.5 md:px-2 py-1.5 md:py-2 shadow-2xl">
        <Link
          href="/bodhi"
          className="px-4 md:px-6 py-2 text-[10px] md:text-xs font-mono tracking-widest text-red-500 hover:bg-red-500/10 rounded-md transition-all"
        >
          BODHI
        </Link>
        <div className="w-px h-5 md:h-6 bg-white/10" />
        <Link
          href="/drishya"
          className="px-4 md:px-6 py-2 text-[10px] md:text-xs font-mono tracking-widest text-white/70 hover:bg-white/5 hover:text-white rounded-md transition-all"
        >
          DRISHYA
        </Link>
      </div>
    </>
  )
}

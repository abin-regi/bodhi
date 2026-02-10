"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface DeptCardProps {
    name: string
    abbr: string
    slug: string
    index: number
    eventCount?: number
}

export default function DeptCard({ name, abbr, slug, index, eventCount }: DeptCardProps) {
    const formattedIndex = String(index + 1).padStart(2, "0")

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            <Link
                href={`/bodhi/${slug}`}
                className="group relative block overflow-hidden rounded-sm"
                data-cursor="hover"
            >
                {/* Background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c] to-[#080808] transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-transparent transition-all duration-700" />

                {/* Left accent bar — always red */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-red-500/20 group-hover:bg-red-500/70 transition-colors duration-500" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-500/0 via-red-500/40 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 lg:p-10">
                    {/* Index */}
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-[10px] font-mono text-white/20 tracking-[0.4em]">
                            {formattedIndex}
                        </span>
                        {eventCount !== undefined && (
                            <span className="text-[9px] font-mono text-red-500/60 tracking-widest uppercase">
                                {eventCount} events
                            </span>
                        )}
                    </div>

                    {/* Department Abbreviation - The main visual focal point */}
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-sans font-black text-white/90 tracking-tighter leading-none group-hover:text-white transition-colors duration-300">
                        {abbr}
                    </h3>

                    {/* Subtle red underline that slides in */}
                    <div className="mt-4 h-0.5 w-0 group-hover:w-12 bg-red-500 transition-all duration-500 ease-out" />

                    {/* Full name */}
                    <p className="text-[11px] font-mono text-white/40 mt-5 leading-relaxed tracking-wide group-hover:text-white/60 transition-colors duration-500">
                        {name}
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex items-center gap-2 text-red-500/40 group-hover:text-red-500 transition-all duration-500">
                        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Explore</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                </div>

                {/* Bottom-right glow on hover */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-red-500/5 group-hover:bg-red-500/15 rounded-full blur-3xl transition-all duration-700" />
            </Link>
        </motion.div>
    )
}

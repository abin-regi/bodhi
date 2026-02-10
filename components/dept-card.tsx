import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface DeptCardProps {
    name: string
    abbr: string
    slug: string
    index: number
}

export default function DeptCard({ name, abbr, slug, index }: DeptCardProps) {
    return (
        <Link
            href={`/bodhi/${slug}`}
            className="group relative border border-white/5 bg-[#0a0a0a] hover:border-red-500/30 transition-all duration-500 overflow-hidden"
        >
            {/* Top accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="p-8">
                {/* Number */}
                <p className="text-[9px] font-mono text-red-500/50 tracking-[0.3em] mb-4">
                    {String(index + 1).padStart(2, "0")} /
                </p>

                {/* Abbreviation */}
                <h3 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-none group-hover:text-red-500 transition-colors">
                    {abbr}
                </h3>

                {/* Full name */}
                <p className="text-xs font-mono text-white/30 mt-4 leading-relaxed">
                    {name}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-red-500/40 group-hover:text-red-500 transition-colors">
                    <span className="text-[10px] font-mono tracking-widest">VIEW EVENTS</span>
                    <ChevronRight className="w-4 h-4" />
                </div>
            </div>
        </Link>
    )
}

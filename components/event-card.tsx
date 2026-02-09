import { ExternalLink } from "lucide-react"

interface EventCardProps {
    name: string
    description: string
    registrationUrl: string
    index: number
}

export default function EventCard({ name, description, registrationUrl, index }: EventCardProps) {
    return (
        <div className="group relative border border-white/5 bg-[#0a0a0a] hover:border-red-500/30 transition-all duration-500 overflow-hidden">
            {/* Top accent line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="p-6">
                {/* Number */}
                <p className="text-[9px] font-mono text-red-500/50 tracking-[0.3em] mb-3">
                    EVENT {String(index + 1).padStart(2, "0")}
                </p>

                {/* Event name */}
                <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight leading-none">
                    {name}
                </h3>

                {/* Description */}
                <p className="text-xs font-mono text-white/30 mt-3 leading-relaxed">
                    {description}
                </p>

                {/* Register button */}
                <a
                    href={registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 border border-red-500/50 text-red-500 px-4 py-2 text-[10px] font-mono tracking-widest hover:bg-red-500 hover:text-black transition-all"
                >
                    REGISTER
                    <ExternalLink className="w-3 h-3" />
                </a>
            </div>
        </div>
    )
}

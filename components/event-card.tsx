import { Clock, MapPin } from "lucide-react"

interface EventCardProps {
    name: string
    description: string
    time: string
    location: string
    index: number
}

export default function EventCard({ name, description, time, location, index }: EventCardProps) {
    // Format index to always be 2 digits
    const formattedIndex = String(index + 1).padStart(2, "0");

    return (
        <div className="group relative border border-white/5 bg-[#0a0a0a] hover:border-red-500/30 transition-all duration-500 overflow-hidden w-full">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-4 md:p-6 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6">

                {/* Circle Number */}
                <div className="shrink-0 relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-red-500/50 transition-colors duration-500 bg-white/5 md:bg-transparent">
                    <span className="font-mono text-sm md:text-lg font-bold text-white/70 group-hover:text-red-500 transition-colors duration-500">
                        {formattedIndex}
                    </span>
                    {/* Glow effect specific to the circle on hover */}
                    <div className="absolute inset-0 rounded-full bg-red-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Container */}
                <div className="flex-1 min-w-0">
                    {/* Event Name */}
                    <h3 className="text-lg md:text-2xl font-sans font-bold text-white tracking-tight leading-tight mb-2 md:mb-4 truncate md:whitespace-normal">
                        {name}
                    </h3>

                    {/* Meta Info (Location & Time) */}
                    <div className="flex flex-row gap-4 text-xs md:text-sm font-mono text-white/50 items-center mt-1 md:mt-0">
                        <div className="flex items-center gap-2 min-w-0">
                            <MapPin className="w-3 h-3 md:w-4 md:h-4 text-red-500/70 shrink-0" />
                            <span className="truncate">{location}</span>
                        </div>
                        <div className="flex items-center gap-2 min-w-0">
                            <Clock className="w-3 h-3 md:w-4 md:h-4 text-red-500/70 shrink-0" />
                            <span className="truncate whitespace-nowrap">{time}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

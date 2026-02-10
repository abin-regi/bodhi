import { Clock, MapPin } from "lucide-react"

interface DrishyaEventCardProps {
    name: string
    time: string
    location: string
    index: number
}

export default function DrishyaEventCard({ name, time, location, index }: DrishyaEventCardProps) {
    // Format index to always be 2 digits
    const formattedIndex = String(index + 1).padStart(2, "0");

    return (
        <div className="group relative border-l-2 border-white/10 bg-[#0a0a0a] hover:border-red-500 transition-all duration-300 overflow-hidden w-full">
            {/* Hover background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="p-4 flex flex-col gap-3 relative z-10">
                {/* Row 1: Number & Name */}
                <div className="flex items-center gap-4">
                    {/* Circle Number */}
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/20 group-hover:border-red-500/50 bg-white/5 transition-colors duration-300">
                        <span className="font-mono text-sm font-bold text-white/70 group-hover:text-red-500 transition-colors duration-300">
                            {formattedIndex}
                        </span>
                    </div>

                    {/* Event Name */}
                    <h3 className="text-lg md:text-xl font-sans font-bold text-white tracking-tight leading-tight truncate">
                        {name}
                    </h3>
                </div>

                {/* Row 2: Location & Time */}
                <div className="flex flex-row gap-4 text-xs md:text-sm font-mono text-white/50 items-center pl-[3.5rem]">
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
    )
}

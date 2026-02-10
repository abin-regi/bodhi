"use client"

import LightPillar from './LightPillar'

export default function DrishyaHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20 lg:pt-0">
            {/* Light Pillar Background */}
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                <LightPillar
                    topColor="#c11551"
                    bottomColor="#cd0e0e"
                    intensity={1}
                    rotationSpeed={0.3}
                    glowAmount={0.002}
                    pillarWidth={3}
                    pillarHeight={0.4}
                    noiseIntensity={0.5}
                    pillarRotation={25}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="high"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                {/* Top label */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="h-px w-8 bg-red-500/50" />
                    <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-red-500/80 uppercase">
                        Arts & Cultural Events
                    </span>
                    <span className="h-px w-8 bg-red-500/50" />
                </div>

                {/* Main title */}
                <h1 className="text-6xl md:text-[8rem] lg:text-[12rem] font-asoka font-bold tracking-widest leading-none text-white">
                    DRISHYA
                </h1>

                {/* Description */}
                <p className="text-sm md:text-base font-mono text-white/40 mt-6 max-w-md mx-auto">
                    Celebrate art, music, dance, and creativity. Showcase your talent.
                </p>
            </div>
        </section>
    )
}

"use client"

import { motion } from "framer-motion"

export default function MentalistSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
            {/* Background Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/images/bodhi/metalist-bg.jpeg')`,
                }}
            />

            {/* Rotating Ring Layer - Behind Person's Head */}
            <motion.div
                className="absolute top-0 left-0 md:left-[10%] lg:left-[15%] flex items-start justify-center pt-8 md:pt-12"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 45, // 45 seconds for slow smooth rotation
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ transformOrigin: "center center" }}
            >
                <img
                    src="/images/bodhi/metalist-ring.png"
                    alt="Decorative Ring"
                    className="w-[60vw] md:w-[45vw] lg:w-[35vw] h-auto object-contain"
                />
            </motion.div>

            {/* Person Layer - Static on Top */}
            <div className="absolute inset-0 flex items-center justify-start md:justify-start">
                <img
                    src="/images/bodhi/metalist-person.png"
                    alt="Mentalist"
                    className="w-auto h-full object-contain ml-0 md:ml-12"
                />
            </div>


            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-[#050505]/20 pointer-events-none" />
        </section>
    )
}

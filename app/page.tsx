"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import HeroBackground from "@/components/HeroBackground"
import Mototorque from "@/components/Mototorque"
import MentalistSection from "@/components/MentalistSection"
import Churam from "@/components/Churam"
import FejoSection from "@/components/FejoSection"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <>
      {/* HERO SECTION with Animated Background */}
      <HeroBackground />

      {/* EXISTING NAVIGATION SECTION */}
      <main className="relative min-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
        {/* ... (existing content) ... */}
        {/* Red radial glow in center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08)_0%,transparent_60%)]" />

        {/* Background Face Image */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-50">
          <Image
            src="/images/halfface.png"
            alt="Face Background"
            width={1000}
            height={500}
            className="object-cover w-full h-full opacity-50 mix-blend-screen"
          />
        </div>

        {/* Floating Buttons Container */}
        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 px-6">

          {/* Bodhi Button */}
          <Link href="/bodhi">
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative border border-red-500/30 rounded-2xl p-6 md:p-10 hover:border-red-500/60 transition-all duration-500 hover:shadow-red-500/20">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-red-500/5 rounded-2xl transition-all duration-500" />

                <div className="relative text-center">
                  {/* Label */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="h-px w-4 bg-red-500/40" />
                    <span className="font-cinzel text-[10px] md:text-xs text-red-400 tracking-[0.2em] uppercase font-semibold">
                      Technical
                    </span>
                    <span className="h-px w-4 bg-red-500/40" />
                  </div>

                  {/* Title */}
                  <h2 className="text-5xl md:text-7xl font-asoka  tracking-widest text-transparent [-webkit-text-stroke:1px_white] group-hover:text-white/10 transition-colors duration-300">
                    BODHI
                  </h2>

                  {/* Subtitle */}
                  <p className="text-xs md:text-sm font-cinzel text-[#e0c097] mt-2 tracking-wider font-semibold">
                    Explore Technical Events
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Drishya Button */}
          <Link href="/drishya">
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative border border-red-500/30 rounded-2xl p-6 md:p-10 hover:border-red-500/60 transition-all duration-500 hover:shadow-red-500/20">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-red-500/5 rounded-2xl transition-all duration-500" />

                <div className="relative text-center">
                  {/* Label */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="h-px w-4 bg-red-500/40" />
                    <span className="font-cinzel text-[10px] md:text-xs text-red-400 tracking-[0.2em] uppercase font-semibold">
                      Arts & Culture
                    </span>
                    <span className="h-px w-4 bg-red-500/40" />
                  </div>

                  {/* Title */}
                  <h2 className="text-5xl md:text-7xl font-asoka  tracking-widest text-transparent [-webkit-text-stroke:1px_white] group-hover:text-white/10 transition-colors duration-300">
                    DRISHYA
                  </h2>

                  {/* Subtitle */}
                  <p className="text-xs md:text-sm font-cinzel text-[#e0c097] mt-2 tracking-wider font-semibold">
                    Discover Arts Events
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>

        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="h-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
        </div>
      </main>

      {/* MOTOTORQUE SECTION */}
      <Mototorque />

      {/* MENTALIST SECTION */}
      <MentalistSection />

      {/* CHURAM SECTION */}
      <Churam />

      <section className="w-full bg-black py-12 flex items-center justify-center">
        <h2 className="flicker-text font-asoka text-red-600 tracking-widest text-center px-4 text-[clamp(14px,4.5vw,40px)]">
          A Legend With an{" "}
          <span className="aura-glow">
            Aura
          </span>{" "}
          That Shakes the Sky.
        </h2>
      </section>


      {/* FEJO SECTION */}
      <FejoSection />

      {/* FOOTER */}
      <Footer />
    </>
  )
}

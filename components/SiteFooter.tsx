"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaArrowRight } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative w-full bg-black text-white overflow-hidden">
            {/* Large Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <h2 className="font-cinzel font-bold text-6xl md:text-8xl lg:text-9xl tracking-widest text-white whitespace-nowrap">
                    BODHI X DRISHYA
                </h2>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Bodhi and Drishya Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Bodhi Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 mb-2">
                            <Image
                                src="/images/home/bodhilogo.png"
                                alt="Bodhi Logo"
                                width={35}
                                height={35}
                                className="object-contain"
                            />
                            <h3 className="font-cinzel text-lg md:text-xl tracking-wider">
                                BODHI
                            </h3>
                        </div>
                        <p className="text-red-500 font-cinzel text-sm md:text-base tracking-wide mb-3">
                            THE FIRE RETURNS.
                        </p>
                        <Link href="/bodhi" className="flex items-center gap-2 text-white/70 hover:text-red-500 transition-colors duration-300 group">
                            <span className="font-cinzel text-xs tracking-wider uppercase">View Bodhi</span>
                            <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Drishya Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 mb-2">
                            <Image
                                src="/images/home/drishyalogo.png"
                                alt="Drishya Logo"
                                width={35}
                                height={35}
                                className="object-contain"
                            />
                            <h3 className="font-cinzel text-lg md:text-xl tracking-wider">
                                DRISHYA
                            </h3>
                        </div>
                        <p className="text-red-500 font-cinzel text-sm md:text-base tracking-wide mb-3">
                            THE SACRED AWAKENING BEGINS.
                        </p>
                        <Link href="/drishya" className="flex items-center gap-2 text-white/70 hover:text-red-500 transition-colors duration-300 group">
                            <span className="font-cinzel text-xs tracking-wider uppercase">View Drishya</span>
                            <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Social & Banner Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                    {/* Social Section (Left Side) */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <h4 className="font-cinzel text-sm tracking-wider text-gray-400 uppercase">
                            Social
                        </h4>
                        <Link
                            href="https://www.instagram.com/bodhi.vjcet?igsh=MTM0c2Fma2JyeHA2cA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-red-500 transition-colors duration-300"
                        >
                            <FaInstagram size={24} />
                        </Link>
                    </div>

                    {/* VJCET Banner (Right Side) */}
                    <div className="flex flex-col items-center md:items-end">
                        <Image
                            src="/images/home/vjcet full banner.png"
                            alt="VJCET Banner"
                            width={200}
                            height={80}
                            className="h-12 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </div>

                {/* Architectured By */}
                <div className="text-center mb-6">
                    <p className="font-cinzel text-xs md:text-sm tracking-wide text-gray-500">
                        ARCHITECTURED BY VJCET MEDIA TEAM 2026
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-800 mb-4"></div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-xs text-gray-500">
                        © 2026 BODHI x DRISHYA. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

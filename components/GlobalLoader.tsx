"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initial load animation duration
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds minimal duration

        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
                >

                    <div className="relative w-48 h-48 flex items-center justify-center">

                        {/* Outer Ring */}
                        <div className="absolute w-full h-full rounded-full border-t-2 border-red-500 animate-spin-slow"></div>

                        {/* Middle Ring */}
                        <div className="absolute w-40 h-40 rounded-full border-b-2 border-red-400 animate-spin-reverse"></div>

                        {/* Inner Ring */}
                        <div className="absolute w-32 h-32 rounded-full border-t-2 border-red-300 animate-spin-slow"></div>

                        {/* Center Image */}
                        <div className="relative w-24 h-24">
                            <Image
                                src="/images/loading.png"
                                alt="Loading"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

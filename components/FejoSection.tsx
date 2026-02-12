"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FejoSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [shuffledText, setShuffledText] = useState("FEJO");

    const finalText = "FEJO";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Shuffle animation effect
    useEffect(() => {
        if (!visible) return;

        let iteration = 0;

        const interval = setInterval(() => {
            setShuffledText(
                finalText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return finalText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= finalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 6;
        }, 80);

        return () => clearInterval(interval);
    }, [visible]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('/images/home/fejobg.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* MAIN CONTENT */}
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-0">

                {/* LEFT IMAGE */}
                <div
                    className={`flex justify-start items-end transition-all duration-1000
          ${visible ? "opacity-50 translate-x-0" : "opacity-0 -translate-x-32"}`}
                >
                    <div className="relative -ml-12">
                        {/* Base Image */}
                        <Image
                            src="/images/home/leftbg.png"
                            alt="Fejo Left"
                            width={1000}
                            height={1400}
                            className="object-contain"
                        />
                        {/* Overlapping Image */}
                        <Image
                            src="/images/home/leftfejo.png"
                            alt="Fejo Black Overlay"
                            width={1000}
                            height={1400}
                            className="absolute inset-0 object-contain"
                        />
                    </div>
                </div>

                {/* CENTER TEXT */}
                <div className="flex items-center justify-center my-8 md:my-0 text-center">
                    <h1 className="font-asoka tracking-wider flex flex-wrap items-center justify-center gap-4">
                        {/* First Part - Hollow White */}
                        <span className="font-light text-white text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
                            style={{
                                WebkitTextStroke: '2px white',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
                            }}
                        >
                            THIS IS NOT A CONCERT
                        </span>

                        {/* Second Part - Thick Red */}
                        <span className="text-red-500 font-bold text-4xl md:text-6xl lg:text-8xl"
                            style={{
                                textShadow: '0 0 30px rgba(68, 29, 29, 0.8)'
                            }}
                        >
                            THIS IS {shuffledText}
                        </span>
                    </h1>
                </div>

                {/* RIGHT IMAGE */}
                <div
                    className={`flex justify-end items-end transition-all duration-1000 -mr-12 md:mb-[-160px]
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"}`}
                >
                    <Image
                        src="/images/home/redfejo.png"
                        alt="Fejo Right"
                        width={1200}
                        height={1500}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

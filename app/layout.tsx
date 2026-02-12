import React from "react"
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono, Cinzel } from 'next/font/google'
import localFont from 'next/font/local'
import SmoothScroll from "@/components/smooth-scroll"



import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
})

const asoka = localFont({
  src: '../public/fonts/ASOKA.ttf',
  variable: '--font-asoka',
})

export const metadata: Metadata = {
  title: "BODHI x Drishya '26 | Where History Breathes Through Flame.",
  description:
    "Annual Tech & Arts fest - Feb 25, 26, 27,28 2026 at Viswajyothi College of Engineering and Technology, Vazhakulam",

  icons: {
    icon: "/images/home/bodhilogo.png",
    shortcut: "/images/home/bodhilogo.png",
    apple: "/images/home/bodhilogo.png",
  },
}


export const viewport: Viewport = {
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${asoka.variable} ${cinzel.variable}`}>
      <body className="font-sans antialiased bg-[#050505] text-[#f0f0f0] overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}

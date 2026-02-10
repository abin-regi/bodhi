import React from "react"
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
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

const asoka = localFont({
  src: '../public/fonts/ASOKA.ttf',
  variable: '--font-asoka',
})

export const metadata: Metadata = {
  title: "BODHI x Drishya '25 | Annual Techno-Management Fest of Viswajyothi College of Engineering and Technology",
  description: "Annual tech fest - October 24, 25, 26, 2025 at Viswajyothi College of Engineering and Technology, Vazhakulam",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${asoka.variable}`}>
      <body className="font-sans antialiased bg-[#050505] text-[#f0f0f0] overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}

import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import { ScrollProgress } from '@/components/scroll-progress'
import './globals.css'

export const metadata: Metadata = {
  title: 'ValidKey | QA Expert & Mentor - Master QA & AI Testing',
  description: 'ValidKey offers 10+ years of QA expertise shared through mentorship, courses, and interactive learning. From Junior to Manager - master the art of QA & AI.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SmoothScrollProvider>
          <ScrollProgress />
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}

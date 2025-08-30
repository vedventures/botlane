import type { Metadata } from 'next'
import { GeistSans, GeistMono } from 'geist/font'
import './globals.css'

export const metadata: Metadata = {
  title: 'BotLane - AI Marketing Agency',
  description: 'Premium AI-native marketing solutions that scale. From intelligent growth infrastructure to automated customer journeys.',
  keywords: 'AI marketing, growth automation, marketing technology, conversion optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased bg-dark-bg text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

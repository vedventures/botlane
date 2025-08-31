import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

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
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased bg-dark-bg text-white overflow-x-hidden">
        {children}
        <Footer />
      </body>
    </html>
  )
}

import HeroSection from '@/components/HeroSection'
import WhyBotLane from '@/components/WhyBotLane'
import ServicesOverview from '@/components/ServicesOverview'
import ClientWins from '@/components/ClientWins'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyBotLane />
      <ServicesOverview />
      <ClientWins />
    </main>
  )
}

import HeroSection from '@/components/HeroSection'
import WhyBotLane from '@/components/WhyBotLane'
import ServicesOverview from '@/components/ServicesOverview'
import ClientWins from '@/components/ClientWins'
import ProcessSnapshot from '@/components/ProcessSnapshot'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQs from '@/components/FAQs'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyBotLane />
      <ServicesOverview />
      <ClientWins />
      <ProcessSnapshot />
      <Testimonials />
      <Pricing />
      <FAQs />
      <FinalCTA />
      <Footer />
    </main>
  )
}

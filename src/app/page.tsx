import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/ui/HeroSection'
import FeaturesSection from '@/components/ui/FeaturesSection'
import ServicesSection from '@/components/ui/ServicesSection'
import ContactSection from '@/components/ui/ContactSection'

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-purple text-white px-4 py-2 rounded-lg z-50">
        メインコンテンツにスキップ
      </a>
      
      <Header />
      
      <main role="main" id="main-content">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  )
}

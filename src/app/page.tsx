import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/ui/HeroSection'
import FeaturesSection from '@/components/ui/FeaturesSection'
import ServicesSection from '@/components/ui/ServicesSection'
import MissionVisionSection from '@/components/ui/MissionVisionSection'
import ContactSection from '@/components/ui/ContactSection'

export default function Home() {
  // Cache clear: 2025-01-06
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-corporate-blue-800 text-white px-4 py-2 rounded-md z-50 btn-focus">
        メインコンテンツにスキップ
      </a>
      
      <Header />
      
      <main role="main" id="main-content">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <MissionVisionSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  )
}

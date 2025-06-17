import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/ui/HeroSection'
import CompanyInfoSection from '@/components/ui/CompanyInfoSection'
import ContactSection from '@/components/ui/ContactSection'

export default function Home() {
  // Cache clear: 2025-06-17 - Toyota Style Rebuild
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gray-900 text-white px-4 py-2 rounded-md z-50">
        メインコンテンツにスキップ
      </a>
      
      <Header />
      
      <main role="main" id="main-content">
        <HeroSection />
        <CompanyInfoSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  )
}

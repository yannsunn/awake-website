'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Globe, Brain, ShoppingCart } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { STYLES } from '@/lib/constants'
import ContactForm from '@/components/ui/ContactForm'
import ContactInfo from '@/components/ui/ContactInfo'
import LineButton from '@/components/ui/LineButton'
import ValueProposition from '@/components/sections/ValueProposition'
import FAQ from '@/components/sections/FAQ'
import LazyLoad from '@/components/ui/LazyLoad'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const services = [
  {
    icon: Globe,
    title: COMPANY_DATA.services.details.web.title,
    description: COMPANY_DATA.services.details.web.description,
    longDescription: COMPANY_DATA.services.details.web.longDescription,
    href: COMPANY_DATA.services.details.web.href,
    price: COMPANY_DATA.services.details.web.pricing.standard.price,
    color: "bg-blue-500",
    features: [
      'モバイル対応で機会損失を防ぐ',
      'お客様の行動を促す導線設計',
      '更新しやすい管理システム'
    ],
    buttons: [
      { text: '詳しく見る', href: COMPANY_DATA.services.details.web.href },
      { text: '事例を見る', href: COMPANY_DATA.services.details.web.href }
    ]
  },
  {
    icon: Brain,
    title: COMPANY_DATA.services.details.ai.title,
    description: COMPANY_DATA.services.details.ai.description,
    longDescription: COMPANY_DATA.services.details.ai.longDescription,
    href: COMPANY_DATA.services.details.ai.href,
    price: COMPANY_DATA.services.details.ai.pricing.basic.price,
    color: "bg-purple-500",
    features: [
      '現状業務の分析から導入まで一貫サポート',
      '使いやすさを重視した導入設計',
      'スタッフ教育も含めた包括的支援'
    ],
    buttons: [
      { text: '詳しく見る', href: COMPANY_DATA.services.details.ai.href },
      { text: '活用例', href: COMPANY_DATA.services.details.ai.href }
    ]
  },
  {
    icon: ShoppingCart,
    title: COMPANY_DATA.services.details.ec.title,
    description: COMPANY_DATA.services.details.ec.description,
    longDescription: COMPANY_DATA.services.details.ec.longDescription,
    href: COMPANY_DATA.services.details.ec.href,
    price: "完全成果報酬",
    color: "bg-gray-500",
    features: [
      '商品登録から販売戦略まで完全代行',
      '売れるまで費用は一切不要',
      'プロのノウハウで販売を最適化'
    ],
    buttons: [
      { text: '詳しく見る', href: COMPANY_DATA.services.details.ec.href },
      { text: '無料診断', href: COMPANY_DATA.services.details.ec.href }
    ]
  }
]

export default function HomePageContent() {
  useScrollReveal()
  
  return (
    <>
      <Header />
      
      <main role="main" id="main-content">
        {/* Hero Section - Creative & Bold */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Blob Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="blob" />
          </div>
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-6xl mx-auto">
              {/* Animated Tagline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="text-gradient animate-gradient">
                  {COMPANY_DATA.basic.tagline.split('を')[0]}
                </span>
                <br />
                <span className="text-gradient-subtle">
                  を{COMPANY_DATA.basic.tagline.split('を')[1]}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {COMPANY_DATA.basic.description}
              </p>

              <p className="text-lg sm:text-xl text-gray-500 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                {COMPANY_DATA.basic.subMessage}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <AccessibleButton 
                  href="#contact" 
                  showArrow 
                  className="btn-modern neon-glow glass text-white border-none" 
                  size="large"
                >
                  今すぐ無料相談
                </AccessibleButton>
                <AccessibleButton 
                  href="#services" 
                  variant="secondary" 
                  className="glass border-gray-300 hover:border-primary-500" 
                  size="large"
                >
                  サービスを見る
                </AccessibleButton>
              </div>
              
              {/* Floating LINE Button */}
              <div className="mt-8 animate-float">
                <LineButton className="glass-dark text-white border-none" size="medium" variant="filled" />
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        {/* Services Section - Bento Grid */}
        <section id="services" className="py-16 sm:py-20 lg:py-24 relative">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16 reveal">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-gradient">あなたの課題を解決する</span>
              </h2>
              <p className="text-xl text-gray-600">3つのクリエイティブソリューション</p>
            </div>
            
            <div className="bento-grid max-w-7xl mx-auto">
              {services.map((service, index) => {
                const gridClass = index === 0 ? 'bento-item-large' : index === 1 ? 'bento-item-wide' : 'bento-item-tall'
                const Icon = service.icon
                return (
                  <div 
                    key={index} 
                    className={`${gridClass} glass card-3d rounded-3xl p-8 flex flex-col justify-between hover:scale-105 transition-all duration-300 reveal`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div>
                      {/* Icon with gradient background */}
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-neon-purple flex items-center justify-center mb-6 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <p className="text-sm text-gray-500 mb-6">
                        {service.longDescription}
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-neon-blue mr-2 mt-1">•</span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="glass-dark rounded-xl p-4 mb-6 text-center">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        {service.price !== "完全成果報酬" && <span className="text-white/70 ml-1">〜</span>}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {service.buttons.map((button, btnIdx) => (
                          <AccessibleButton
                            key={btnIdx}
                            href={button.href}
                            className={btnIdx === 0 ? "btn-modern neon-glow text-white border-none" : "glass border-white/20 text-gray-800 hover:bg-white/20"}
                            {...(button.href.startsWith('http') && {
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            })}
                          >
                            {button.text}
                          </AccessibleButton>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <LazyLoad offset={300}>
          <ValueProposition />
        </LazyLoad>

        {/* Company Mission Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white-overlay">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className={STYLES.heading.h2.section + " mb-4"}>
                私たちの想い
              </h2>
            </div>
            
            <div className="neuro-focus-card bg-white rounded-2xl p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className={STYLES.heading.h2.subsection + " mb-6"}>
                  {COMPANY_DATA.basic.mission}
                </h3>
                <p className={STYLES.text.body.medium + " mb-8 leading-relaxed"}>
                  高額なIT投資で失敗する企業が多い中、私たちは適正価格で確実な成果を出します。必要最小限の投資で最大の効果を生み出し、浮いたコストを本業の成長に投資できる環境を提供します。
                </p>
                <AccessibleButton href="/about" showArrow>
                  詳しく見る
                </AccessibleButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <LazyLoad offset={300}>
          <FAQ />
        </LazyLoad>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-overlay">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className={STYLES.heading.h2.section + " mb-6"}>
                まずは、お話を聞かせてください
              </h2>
              <p className={STYLES.text.body.large + " mb-4"}>
                無料相談で、あなたのビジネスの可能性を探る
              </p>
              <p className={STYLES.text.body.medium}>
                押し売りは一切いたしません。<br />
                まずは現状の課題と、理想の姿をお聞かせください。<br />
                最適な解決策を一緒に考えます。
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <LazyLoad>
                <ContactForm />
              </LazyLoad>
              <LazyLoad>
                <ContactInfo />
              </LazyLoad>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
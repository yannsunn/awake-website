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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
          {/* Animated Blob Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="blob" />
          </div>
          
          {/* コンテンツ背景 - 背景を透かせてテキストは背景付きで対応 */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-6xl mx-auto">
              {/* Animated Tagline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
                  {COMPANY_DATA.basic.tagline.split('を')[0]}
                </span>
                <br />
                <span className="text-gray-900 drop-shadow-md">
                  を{COMPANY_DATA.basic.tagline.split('を')[1]}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-900 font-semibold mb-4 animate-fade-in bg-white rounded-lg px-6 py-4 inline-block shadow-2xl border-2 border-gray-200" style={{ animationDelay: '0.2s' }}>
                {COMPANY_DATA.basic.description}
              </p>

              <p className="text-lg sm:text-xl text-gray-800 font-medium mb-12 animate-fade-in bg-white rounded-lg px-6 py-3 inline-block shadow-xl border border-gray-200" style={{ animationDelay: '0.4s' }}>
                {COMPANY_DATA.basic.subMessage}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <AccessibleButton 
                  href="#contact" 
                  showArrow 
                  className="btn-modern bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-xl" 
                  size="large"
                >
                  今すぐ無料相談
                </AccessibleButton>
                <AccessibleButton 
                  href="#services" 
                  variant="secondary" 
                  className="bg-white border-2 border-gray-300 hover:border-indigo-500 shadow-xl" 
                  size="large"
                >
                  サービスを見る
                </AccessibleButton>
              </div>
              
              {/* Floating LINE Button */}
              <div className="mt-8">
                <LineButton className="shadow-xl" size="medium" variant="filled" />
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
        <section id="services" className="py-16 sm:py-20 lg:py-24 relative bg-white/70">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16 reveal">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md">あなたの課題を解決する</span>
              </h2>
              <p className="text-xl text-gray-800 font-semibold">3つのクリエイティブソリューション</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div 
                    key={index} 
                    className="glass rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 reveal h-full"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div>
                      {/* Icon with gradient background */}
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg" style={{ animationDelay: `${index * 0.3}s` }}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-800 mb-4 font-medium">
                        {service.description}
                      </p>
                      <p className="text-sm text-gray-700 mb-6">
                        {service.longDescription}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-indigo-600 mr-2 mt-0.5 font-bold flex-shrink-0">✓</span>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 mb-6 text-center shadow-lg">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        {service.price !== "完全成果報酬" && <span className="text-white/80 ml-1">〜</span>}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.buttons.map((button, btnIdx) => (
                          <AccessibleButton
                            key={btnIdx}
                            href={button.href}
                            className={btnIdx === 0 ? "bg-gray-900 text-white hover:bg-gray-800 shadow-md text-sm" : "bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400 text-sm"}
                            size="small"
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
        <section className="py-16 sm:py-20 lg:py-24 bg-white/70">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">私たちの想い</span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
                  {COMPANY_DATA.basic.mission}
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  高額なIT投資で失敗する企業が多い中、私たちは適正価格で確実な成果を出します。必要最小限の投資で最大の効果を生み出し、削減したコストを本業の成長に投資できる環境を提供します。
                </p>
                <AccessibleButton 
                  href="/about" 
                  showArrow
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg"
                >
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
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white/70">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">まずは、お話を聞かせてください</span>
              </h2>
              <p className="text-xl text-gray-800 font-medium mb-4">
                無料相談で、あなたのビジネスの可能性を探る
              </p>
              <p className="text-lg text-gray-600">
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
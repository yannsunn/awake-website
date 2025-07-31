'use client'

import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Globe, Brain, ShoppingCart, CheckCircle, Award, Users, Heart } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { STYLES } from '@/lib/constants'
import ContactForm from '@/components/ui/ContactForm'
import ContactInfo from '@/components/ui/ContactInfo'
import LineButton from '@/components/ui/LineButton'
import ValueProposition from '@/components/sections/ValueProposition'
import FAQ from '@/components/sections/FAQ'
import LazyLoad from '@/components/ui/LazyLoad'

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
    color: "bg-green-500",
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
  // ページ読み込み完了時にloadedクラスを追加
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded')
    }, 200)
    return () => {
      clearTimeout(timer)
      document.body.classList.remove('loaded')
    }
  }, [])
  
  return (
    <>
      <Header />
      
      <main role="main" id="main-content">
        {/* Hero Section - 視認性最大化 */}
        <section className="py-20 sm:py-28 md:py-36 lg:py-44">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Company Tagline */}
              <h1 className={STYLES.heading.h1.hero + " mb-6"}>
                {COMPANY_DATA.basic.tagline}
              </h1>
              
              <p className={STYLES.text.body.large + " mb-4"}>
                {COMPANY_DATA.basic.description}
              </p>

              <p className={STYLES.text.body.medium + " mb-8 sm:mb-12"}>
                {COMPANY_DATA.basic.subMessage}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AccessibleButton href="#contact" showArrow className="w-full sm:w-auto btn-glow" size="large">
                  今すぐ無料相談
                </AccessibleButton>
                <AccessibleButton href="#services" variant="secondary" className="w-full sm:w-auto" size="medium">
                  サービスを見る
                </AccessibleButton>
                <LineButton className="w-full sm:w-auto" size="medium" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white-overlay">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className={STYLES.heading.h2.section + " mb-4"}>
                あなたの課題を解決する3つのソリューション
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => {
                return (
                  <div key={index} className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-gray-200 hover:border-indigo-300 hover:bg-white/60 transform hover:scale-105 hover-lift gradient-border">
                    <h3 className={STYLES.heading.h3.card + " mb-2"}>
                      {service.title}
                    </h3>
                    <p className={STYLES.text.body.medium + " text-gray-600 mb-4"}>
                      {service.description}
                    </p>
                    <p className={STYLES.text.description.medium + " mb-6"}>
                      {service.longDescription}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-600 mr-2 text-xl font-bold">✓</span>
                          <span className={STYLES.text.description.medium + " font-semibold"}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-6 bg-indigo-50/80 rounded-lg p-3 border-2 border-indigo-200">
                      <span className={STYLES.text.emphasis.strong + " text-2xl text-indigo-700"}>{service.price}</span>
                      <span className={STYLES.text.description.small + " text-indigo-600"}>〜</span>
                    </div>
                    
                    <div className="flex flex-row gap-2">
                      {service.buttons.map((button, btnIdx) => (
                        <AccessibleButton
                          key={btnIdx}
                          href={button.href}
                          variant={btnIdx === 0 ? "primary" : "outline"}
                          className="flex-1 text-xs sm:text-sm lg:text-base px-3 py-2 whitespace-nowrap"
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
            
            <div className="bg-white-overlay rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="text-center">
                <h3 className={STYLES.heading.h2.subsection + " mb-6"}>
                  {COMPANY_DATA.basic.mission}
                </h3>
                <p className={STYLES.text.body.medium + " mb-8"}>
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
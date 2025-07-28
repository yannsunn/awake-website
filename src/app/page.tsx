import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Globe, Brain, ShoppingCart, CheckCircle, Award, Users, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { COMPANY_DATA } from '@/lib/company-data'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { STYLES } from '@/lib/constants'
import ContactForm from '@/components/ui/ContactForm'
import ContactInfo from '@/components/ui/ContactInfo'
import ValueProposition from '@/components/sections/ValueProposition'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: `${COMPANY_DATA.basic.name} | ${COMPANY_DATA.basic.tagline}`,
  description: COMPANY_DATA.basic.description,
  keywords: COMPANY_DATA.metadata.keywords,
  openGraph: {
    title: `${COMPANY_DATA.basic.name} | ${COMPANY_DATA.basic.tagline}`,
    description: COMPANY_DATA.basic.description,
    images: [COMPANY_DATA.metadata.ogImage],
    url: COMPANY_DATA.metadata.ogUrl,
  },
}

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

const features = [
  {
    icon: CheckCircle,
    title: "コストパフォーマンス",
    description: "必要最小限の投資で最大の成果を実現。無駄を削ぎ、本質的な価値に集中します。"
  },
  {
    icon: Award,
    title: "明確な料金体系",
    description: "追加費用なしの透明な価格設定。予算に合わせた最適なプランをご提案。"
  },
  {
    icon: Users,
    title: "完全成果報酬制",
    description: "初期費用0円プランを含む柔軟な料金体系。リスクなく始められる安心設計。"
  },
  {
    icon: Heart,
    title: "継続的なサポート",
    description: "導入後も安心の伴走支援。お客様の成長に合わせた最適化を継続的に実施。"
  }
]

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gray-900 text-white px-4 py-2 rounded-md z-50">
        メインコンテンツにスキップ
      </a>
      
      <Header />
      
      <main role="main" id="main-content">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Company Logo */}
              <div className="mb-8 sm:mb-12 flex justify-center">
                <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto" style={{ aspectRatio: '4/3', minHeight: '200px' }}>
                  <Image
                    src="/assets/images/hero-background.png"
                    alt="Awake Inc. ロゴ - 株式会社Awake"
                    fill
                    className="object-contain object-center"
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 512px, (max-width: 1024px) 640px, 768px"
                    style={{ 
                      objectFit: 'contain',
                      objectPosition: 'center',
                      padding: '0.5rem'
                    }}
                    placeholder="empty"
                  />
                </div>
              </div>
              
              {/* Company Tagline */}
              <h1 className={STYLES.heading.h1.hero + " mb-6"}>
                {COMPANY_DATA.basic.tagline}
              </h1>
              
              <p className={STYLES.text.body.large + " mb-4"}>
                {COMPANY_DATA.basic.description}
              </p>

              <p className={STYLES.text.body.medium + " mb-8 sm:mb-12 max-w-3xl mx-auto"}>
                {COMPANY_DATA.basic.subMessage}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <AccessibleButton 
                  href="https://lin.ee/awakeinc" 
                  showArrow 
                  className="w-full sm:w-auto py-3 bg-green-600 hover:bg-green-700 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINEで相談する
                </AccessibleButton>
                <AccessibleButton href="#contact" showArrow className="w-full sm:w-auto py-3">
                  無料相談を始める
                </AccessibleButton>
                <AccessibleButton href="#services" variant="secondary" className="w-full sm:w-auto py-3">
                  サービス詳細を見る
                </AccessibleButton>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className={STYLES.heading.h2.section + " mb-4"}>
                あなたの課題を解決する3つのソリューション
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-8">
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
                          <span className="text-green-600 mr-2">✓</span>
                          <span className={STYLES.text.description.medium}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-6">
                      <span className={STYLES.text.emphasis.strong + " text-2xl"}>{service.price}</span>
                      <span className={STYLES.text.description.small + " text-gray-500"}>〜</span>
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
        <ValueProposition />

        {/* Company Mission Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className={STYLES.heading.h2.section + " mb-4"}>
                私たちの想い
              </h2>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
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
        <FAQ />
        
        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
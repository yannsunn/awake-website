import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Globe, Brain, ShoppingCart, CheckCircle, Award, Users, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { COMPANY_DATA } from '@/lib/company-data'
import AccessibleButton from '@/components/ui/AccessibleButton'

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
    href: COMPANY_DATA.services.details.web.href,
    price: COMPANY_DATA.services.details.web.pricing.standard.price,
    color: "bg-blue-500"
  },
  {
    icon: Brain,
    title: COMPANY_DATA.services.details.ai.title,
    description: COMPANY_DATA.services.details.ai.description,
    href: COMPANY_DATA.services.details.ai.href,
    price: COMPANY_DATA.services.details.ai.pricing.basic.price,
    color: "bg-purple-500"
  },
  {
    icon: ShoppingCart,
    title: COMPANY_DATA.services.details.ec.title,
    description: COMPANY_DATA.services.details.ec.description,
    href: COMPANY_DATA.services.details.ec.href,
    price: "完全成果報酬",
    color: "bg-green-500"
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                {COMPANY_DATA.basic.tagline}
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 font-light leading-relaxed">
                {COMPANY_DATA.basic.mission}
              </p>

              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
                {COMPANY_DATA.basic.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <AccessibleButton href="#services" showArrow className="w-full sm:w-auto py-3">
                  サービス一覧を見る
                </AccessibleButton>
                <AccessibleButton href="/about" variant="secondary" className="w-full sm:w-auto py-3">
                  会社概要
                </AccessibleButton>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
                サービス一覧
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                あなたのビジネスの成長を加速させる3つのソリューション
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100">
                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 text-center mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-center mb-6">
                      <span className="text-xl sm:text-2xl font-bold text-gray-900">{service.price}</span>
                      <span className="text-gray-500 text-sm">〜</span>
                    </div>
                    <div className="text-center">
                      <AccessibleButton 
                        href={service.href} 
                        variant="outline" 
                        className="w-full py-3"
                        {...(service.href.startsWith('http') && {
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        })}
                      >
                        詳細を見る
                      </AccessibleButton>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
                選ばれる理由
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                投資を成果に変える、4つの約束
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center p-6 rounded-xl">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Company Mission Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
                私たちの想い
              </h2>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-6">
                  {COMPANY_DATA.basic.mission}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                  高額なIT投資で失敗する企業が多い中、私たちは適正価格で確実な成果を出します。必要最小限の投資で最大の効果を生み出し、浮いたコストを本業の成長に投資できる環境を提供します。
                </p>
                <AccessibleButton href="/about" showArrow>
                  詳しく見る
                </AccessibleButton>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-6">
              お問い合わせ
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8">
              プロジェクトに関するご質問やご相談がございましたら、お気軽にお問い合わせください。
            </p>
            
            {/* 公式LINE案内 */}
            <div className="mb-8 p-4 sm:p-6 bg-green-50 border border-green-200 rounded-xl block sm:inline-block">
              <h3 className="text-base sm:text-lg font-medium text-green-800 mb-2">📱 公式LINEでお問い合わせ</h3>
              <p className="text-sm sm:text-base text-green-700 mb-4">
                お問い合わせは公式LINEが最も早く対応できます
              </p>
              <AccessibleButton 
                href={COMPANY_DATA.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white hover:bg-green-600 w-full sm:w-auto py-3"
              >
                📱 LINE で問い合わせ
              </AccessibleButton>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="text-center">
                <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-2">電話番号</h4>
                <p className="text-sm sm:text-base text-gray-600">{COMPANY_DATA.contact.phone}</p>
              </div>
              <div className="text-center">
                <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-2">メールアドレス</h4>
                <p className="text-sm sm:text-base text-gray-600">{COMPANY_DATA.contact.email}</p>
              </div>
              <div className="text-center">
                <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-2">営業時間</h4>
                <p className="text-sm sm:text-base text-gray-600">{COMPANY_DATA.contact.businessHours.weekdays}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h4 className="font-medium text-gray-900 mb-3">ご相談について</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {COMPANY_DATA.consultation.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
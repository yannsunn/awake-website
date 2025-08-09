'use client'

import PageLayout from '@/components/layout/PageLayout'
import { Globe, Brain, ShoppingCart } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import UltraButton from '@/components/ui/UltraButton'
import { STYLES, SPACING, EFFECTS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import ContactForm from '@/components/ui/ContactForm'
import ContactInfo from '@/components/ui/ContactInfo'
import LineButton from '@/components/ui/LineButton'
import ValueProposition from '@/components/sections/ValueProposition'
import FAQ from '@/components/sections/FAQ'
import LazyLoad from '@/components/ui/LazyLoad'
import HolographicCard from '@/components/ui/HolographicCard'
import { TEXT_BG_STYLES, TEXT_SHADOW } from '@/lib/ultra-styles'
import { RESPONSIVE_FONT, RESPONSIVE_PADDING, RESPONSIVE_TYPOGRAPHY, MOBILE_FIRST } from '@/lib/responsive-utils'

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
  return (
    <PageLayout>
        {/* Hero Section - Creative & Bold */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16 sm:pb-20">
          
          {/* フッターと同じ背景レイヤー */}
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />
          
          <div className={cn('relative z-10 w-full', SPACING.section.container)}>
            <div className="text-center max-w-6xl mx-auto">
              {/* Animated Tagline */}
              <h1 
                className={cn(
                  "font-bold mb-6 sm:mb-8",
                  RESPONSIVE_TYPOGRAPHY.lineHeight.tight
                )}
                style={{
                  ...TEXT_SHADOW.heading,
                  fontSize: RESPONSIVE_FONT.hero.clamp
                }}
              >
                <span className="text-white font-extrabold">
                  高額なIT投資に、
                </span>
                <br />
                <span className="text-white">
                  もう悩まない
                </span>
              </h1>
              
              <p 
                className={cn(
                  "text-white font-semibold mb-3 sm:mb-4 mx-2 sm:mx-0"
                )}
                style={{
                  ...TEXT_SHADOW.small,
                  fontSize: RESPONSIVE_FONT.h2.clamp
                }}
              >
                {COMPANY_DATA.basic.description}
              </p>

              <p 
                className={cn(
                  "text-gray-200 font-medium mb-8 sm:mb-12 mx-2 sm:mx-0",
                  RESPONSIVE_TYPOGRAPHY.lineHeight.relaxed
                )}
                style={{
                  ...TEXT_SHADOW.small,
                  fontSize: RESPONSIVE_FONT.body.clamp
                }}
              >
                {COMPANY_DATA.basic.subMessage}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
                <UltraButton href="#contact" variant="primary" size="lg">
                  今すぐ無料相談
                </UltraButton>
                <UltraButton href="#services" variant="secondary" size="lg">
                  サービスを見る
                </UltraButton>
              </div>
              
              {/* Floating LINE Button */}
              <div className="mt-8">
                <LineButton className="shadow-xl" size="medium" variant="filled" />
              </div>
              
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        {/* Services Section - Bento Grid */}
        <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative">
          <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-12 lg:mb-16 reveal">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white leading-tight" style={TEXT_SHADOW.heading}>
                あなたの課題を解決する
              </h2>
              <p className={`text-lg sm:text-xl md:text-2xl text-white font-semibold leading-relaxed ${TEXT_BG_STYLES.default}`} style={TEXT_SHADOW.small}>3つのクリエイティブソリューション</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <HolographicCard
                    key={index}
                    className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full cursor-pointer"
                    variant="featured"
                  >
                    <div>
                      {/* Icon with gradient background */}
                      <div className="relative">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-500/40 to-purple-600/40 border-2 border-indigo-500/50 flex items-center justify-center mb-6 sm:mb-8 shadow-2xl relative z-10 backdrop-blur-sm">
                          <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-300" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white leading-tight" style={TEXT_SHADOW.heading}>
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4 font-medium leading-relaxed" style={TEXT_SHADOW.body}>
                        {service.description}
                      </p>
                      <p className="text-xs sm:text-sm lg:text-base text-white mb-4 sm:mb-6 leading-relaxed" style={TEXT_SHADOW.body}>
                        {service.longDescription}
                      </p>
                      
                      <ul className="space-y-2 mb-4 sm:mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs sm:text-sm lg:text-base text-white leading-relaxed" style={TEXT_SHADOW.body}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-xl sm:rounded-2xl p-3 sm:p-5 mb-4 sm:mb-6 text-center shadow-xl border border-indigo-500/50 backdrop-blur-sm">
                        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white" style={TEXT_SHADOW.heading}>{service.price}</span>
                        {service.price !== "完全成果報酬" && <span className="text-white/90 ml-1">〜</span>}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {service.buttons.map((button, btnIdx) => (
                          <UltraButton
                            key={btnIdx}
                            href={button.href}
                            variant={btnIdx === 0 ? "primary" : "secondary"}
                            size="sm"
                          >
                            {button.text}
                          </UltraButton>
                        ))}
                      </div>
                    </div>
                  </HolographicCard>
                )
              })}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <ValueProposition />

        {/* Company Mission Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative">
          <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-sm" />
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                私たちの想い
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-indigo-500/30">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                  {COMPANY_DATA.basic.mission}
                </h3>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  高額なIT投資で失敗する企業が多い中、<br />
                  私たちは適正価格で確実な成果を出します。<br />
                  必要最小限の投資で最大の効果を生み出し、<br />
                  削減したコストを本業の成長に投資できる環境を提供します。
                </p>
                <UltraButton href="/about" variant="primary">
                  詳しく見る →
                </UltraButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
        
        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative">
          <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight" style={TEXT_SHADOW.heading}>
                まずは、お話を聞かせてください
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100 font-medium mb-4 leading-relaxed" style={TEXT_SHADOW.body}>
                無料相談で、あなたのビジネスの可能性を探る
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4 sm:px-0" style={TEXT_SHADOW.small}>
                押し売りは一切いたしません。<br className="hidden sm:block" />
                まずは現状の課題と、理想の姿をお聞かせください。<br className="hidden sm:block" />
                最適な解決策を一緒に考えます。
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <LazyLoad>
                <ContactForm />
              </LazyLoad>
              <LazyLoad>
                <ContactInfo />
              </LazyLoad>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}
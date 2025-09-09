'use client'

import PageLayout from '@/components/layout/PageLayout'
import { Globe, Brain, ShoppingCart } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import UltraButton from '@/components/ui/UltraButton'
import { SPACING } from '@/lib/constants'
import { cn } from '@/lib/utils'
import ContactForm from '@/components/ui/ContactForm'
import ContactInfo from '@/components/ui/ContactInfo'
import LineButton from '@/components/ui/LineButton'
import ValueProposition from '@/components/sections/ValueProposition'
import FAQ from '@/components/sections/FAQ'
import LazyLoad from '@/components/ui/LazyLoad'
import { TEXT_SHADOW } from '@/lib/ultra-styles'
import { RESPONSIVE_FONT, RESPONSIVE_TYPOGRAPHY } from '@/lib/responsive-utils'
import SectionWrapper from '@/components/ui/SectionWrapper'
import HolographicCard from '@/components/ui/HolographicCard'

const services = [
  {
    icon: Globe,
    title: COMPANY_DATA.services.details.web.title,
    description: COMPANY_DATA.services.details.web.description,
    longDescription: COMPANY_DATA.services.details.web.longDescription,
    price: COMPANY_DATA.services.details.web.pricing.standard.price,
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
    price: COMPANY_DATA.services.details.ai.pricing.basic.price,
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
    price: "完全成果報酬",
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
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />
          <div className={cn('relative z-10 w-full', SPACING.section.container)}>
            <div className="text-center max-w-6xl mx-auto">
              <h1 
                className={cn(
                  "font-bold mb-6 sm:mb-8 jp-wrap no-orphan",
                  RESPONSIVE_TYPOGRAPHY.lineHeight.tight
                )}
                style={{
                  ...TEXT_SHADOW.heading,
                  fontSize: RESPONSIVE_FONT.hero.clamp
                }}
              >
                <span className="text-white font-extrabold inline-block">
                  {COMPANY_DATA.basic.tagline}
                </span>
              </h1>
              
              <p 
                className="text-white font-semibold mb-3 sm:mb-4 mx-2 sm:mx-0 jp-wrap no-orphan"
                style={{
                  ...TEXT_SHADOW.small,
                  fontSize: RESPONSIVE_FONT.h2.clamp
                }}
              >
                {COMPANY_DATA.basic.description}
              </p>

              <p 
                className={cn(
                  "text-gray-200 font-medium mb-8 sm:mb-12 mx-2 sm:mx-0 jp-wrap no-orphan",
                  RESPONSIVE_TYPOGRAPHY.lineHeight.relaxed
                )}
                style={{
                  ...TEXT_SHADOW.small,
                  fontSize: RESPONSIVE_FONT.body.clamp
                }}
              >
                {COMPANY_DATA.basic.subMessage}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0 relative z-20">
                <UltraButton href="#contact" variant="primary" size="lg">
                  今すぐ無料相談
                </UltraButton>
                <UltraButton href="#services" variant="secondary" size="lg">
                  サービスを見る
                </UltraButton>
              </div>
              
              <div className="mt-8 relative z-20">
                <LineButton className="shadow-xl" size="medium" variant="filled" />
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <SectionWrapper id="services" background="medium">
          <div className="text-center mb-12 lg:mb-16 reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white leading-tight" style={TEXT_SHADOW.heading}>
              あなたの課題を解決する
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold leading-relaxed" style={TEXT_SHADOW.small}>
              3つのクリエイティブソリューション
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <HolographicCard key={index} variant="featured" className="p-6 sm:p-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-600/30 to-indigo-600/30 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-violet-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white jp-wrap no-orphan">{service.title}</h3>
                  <p className="text-gray-200 mb-4 flex-grow jp-wrap no-orphan">{service.description}</p>
                  <p className="text-sm text-gray-300 mb-6">{service.longDescription}</p>
                  <div className="text-center bg-violet-600/20 rounded-lg p-4 mb-6">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>
                  <div className="space-y-2">
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
            ))}
          </div>
        </SectionWrapper>

        {/* Value Proposition Section */}
        <ValueProposition />

        {/* Company Mission Section */}
        <SectionWrapper background="light">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              私たちの想い
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <HolographicCard variant="featured" className="p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white jp-wrap no-orphan">
                  {COMPANY_DATA.basic.mission}
                </h3>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed" style={{ 
                  wordBreak: 'keep-all',
                  overflowWrap: 'break-word',
                  lineBreak: 'strict'
                }}>
                  多くの企業が高額なIT投資で失敗している現状において、私たちは適正価格で確実な成果をお約束いたします。必要最小限の投資で最大の効果を実現し、削減したコストを本業の成長に投資できる環境をご提供いたします。
                </p>
                <UltraButton href="/about" variant="primary">
                  詳しく見る →
                </UltraButton>
              </div>
            </HolographicCard>
          </div>
        </SectionWrapper>

        {/* FAQ Section */}
        <FAQ />
        
        {/* Contact Section */}
        <SectionWrapper id="contact" background="medium">
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
        </SectionWrapper>
    </PageLayout>
  )
}
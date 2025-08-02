'use client'

import PageLayout from '@/components/layout/PageLayout'
import { Globe, Brain, ShoppingCart } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { STYLES, SPACING, EFFECTS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import ContactForm from '@/components/ui/ContactForm'
import ContactInfo from '@/components/ui/ContactInfo'
import LineButton from '@/components/ui/LineButton'
import ValueProposition from '@/components/sections/ValueProposition'
import FAQ from '@/components/sections/FAQ'
import LazyLoad from '@/components/ui/LazyLoad'
import { RippleContainer, BreathingButton, SoundWave, NeonGlow } from '@/components/effects/DynamicEffects'
import HolographicCard from '@/components/ui/HolographicCard'

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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-20">
          
          {/* フッターと同じ背景レイヤー */}
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />
          
          <div className={cn('relative z-10 w-full', SPACING.section.container)}>
            <div className="text-center max-w-6xl mx-auto">
              {/* Animated Tagline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
                <span className="text-white font-extrabold">
                  高額なIT投資に、
                </span>
                <br />
                <span className="text-white">
                  もう悩まない
                </span>
              </h1>
              
              <p className="text-lg sm:text-2xl text-white font-semibold mb-3 sm:mb-4 bg-gray-800/90 rounded-lg px-4 sm:px-6 py-3 sm:py-4 inline-block shadow-2xl border-2 border-gray-700 mx-2 sm:mx-0" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
                {COMPANY_DATA.basic.description}
              </p>

              <p className="text-base sm:text-xl text-gray-200 font-medium mb-8 sm:mb-12 bg-gray-800/90 rounded-lg px-4 sm:px-6 py-2 sm:py-3 inline-block shadow-xl border border-gray-700 mx-2 sm:mx-0" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
                {COMPANY_DATA.basic.subMessage}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
                <BreathingButton 
                  href="#contact" 
                  showArrow 
                  className="btn-modern bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-xl border-2 border-indigo-400/50" 
                  size="large"
                >
                  今すぐ無料相談
                </BreathingButton>
                <BreathingButton 
                  href="#services" 
                  variant="secondary" 
                  className="bg-gray-700 border-2 border-gray-500 text-white hover:bg-gray-600 hover:border-indigo-400 shadow-xl" 
                  size="large"
                >
                  サービスを見る
                </BreathingButton>
              </div>
              
              {/* Floating LINE Button */}
              <div className="mt-8">
                <LineButton className="shadow-xl" size="medium" variant="filled" />
              </div>
              
              {/* サウンドビジュアライザー */}
              <div className="mt-12 flex justify-center items-center gap-4">
                <span className="text-sm text-gray-300 font-medium">リズムを感じる</span>
                <SoundWave />
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
        <section id="services" className={cn(SPACING.section.padding, 'relative')}>
          <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" />
          <div className={cn('relative z-10 w-full', SPACING.section.container)}>
            <div className="text-center mb-12 lg:mb-16 reveal">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                <span className={cn(EFFECTS.gradient.neon.purple, 'bg-clip-text text-transparent drop-shadow-md')}>あなたの課題を解決する</span>
              </h2>
              <p className="text-xl text-gray-100 font-semibold">3つのクリエイティブソリューション</p>
            </div>
            
            <div className={cn(SPACING.grid.cols['3'], SPACING.grid.gap.md, SPACING.section.maxWidth)}>
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <HolographicCard
                    key={index}
                    className="p-6 md:p-8 flex flex-col justify-between h-full cursor-pointer bg-gray-800/90 backdrop-blur-md border-gray-700"
                    glowOnHover
                  >
                    <div>
                      {/* Icon with gradient background */}
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center mb-6 shadow-xl relative z-10" style={{ animationDelay: `${index * 0.3}s` }}>
                          <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                        </div>
                        <div className={cn(
                          "absolute inset-0 rounded-2xl blur-xl opacity-30 -z-10",
                          index === 0 ? 'bg-cyan-500' : index === 1 ? 'bg-purple-500' : 'bg-pink-500'
                        )} style={{ transform: 'scale(1.2)' }} />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 mb-4 font-medium">
                        {service.description}
                      </p>
                      <p className="text-sm text-gray-300 mb-6">
                        {service.longDescription}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-indigo-400 mr-2 mt-0.5 font-bold flex-shrink-0">✓</span>
                            <span className="text-sm text-gray-200">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-4 mb-6 text-center shadow-lg">
                        <span className="text-3xl font-bold text-white">{service.price}</span>
                        {service.price !== "完全成果報酬" && <span className="text-white/80 ml-1">〜</span>}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.buttons.map((button, btnIdx) => (
                          <AccessibleButton
                            key={btnIdx}
                            href={button.href}
                            className={btnIdx === 0 ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md text-sm" : "bg-gray-700 border-2 border-gray-600 text-gray-200 hover:border-gray-500 text-sm"}
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
            
            <div className="max-w-4xl mx-auto bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                  {COMPANY_DATA.basic.mission}
                </h3>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  高額なIT投資で失敗する企業が多い中、私たちは適正価格で確実な成果を出します。必要最小限の投資で最大の効果を生み出し、削減したコストを本業の成長に投資できる環境を提供します。
                </p>
                <AccessibleButton 
                  href="/about" 
                  showArrow
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg"
                >
                  詳しく見る
                </AccessibleButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
        
        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
          <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm" />
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                まずは、お話を聞かせてください
              </h2>
              <p className="text-xl text-gray-100 font-medium mb-4">
                無料相談で、あなたのビジネスの可能性を探る
              </p>
              <p className="text-lg text-gray-300">
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
    </PageLayout>
  )
}
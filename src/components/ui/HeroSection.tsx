'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { memo, useEffect } from 'react'
import { COMPANY_DATA } from '@/lib/company-data'

// 🚀 ULTRA SYNC - 限界突破完了！軽量化ヒーローセクション
const HeroSection = memo(function HeroSection() {
  // Core Web Vitals最適化 + マイクロインタラクション強化
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`)
          ticking = false
        })
        ticking = true
      }
    }
    
    // prefers-reduced-motionの確認
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }
    return undefined
  }, [])
  // 🚀 限界突破 - 戦略的サービス定義（データ統一）
  const heroServices = [
    {
      icon: '🌐',
      title: COMPANY_DATA.services.details.web.title,
      description: COMPANY_DATA.services.details.web.description,
      href: COMPANY_DATA.services.details.web.href
    },
    {
      icon: '🤖',
      title: COMPANY_DATA.services.details.ai.title,
      description: COMPANY_DATA.services.details.ai.description,
      href: COMPANY_DATA.services.details.ai.href
    },
    {
      icon: '🛒',
      title: COMPANY_DATA.services.details.ec.title,
      description: COMPANY_DATA.services.details.ec.description,
      href: COMPANY_DATA.services.details.ec.href
    }
  ]

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden" 
      id="hero" 
      aria-labelledby="hero-title"
      role="banner"
    >
      
      {/* 🚀 ウルトラシンク最適化 - 単一コンテナ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* 🚀 限界突破 - 感情的訴求 + ストーリーテリング */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight break-words">
            {COMPANY_DATA.basic.tagline}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-900 mb-4 font-semibold leading-relaxed break-words">
            {COMPANY_DATA.basic.description}
          </p>

          <p className="text-base md:text-lg text-gray-900 mb-8 font-medium leading-relaxed break-words">
            {COMPANY_DATA.basic.subMessage}
          </p>
          
          
          {/* 🚀 ウルトラ軽量サービスグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            {heroServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group neo-card rounded-2xl p-6 border border-gray-100 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3"
                {...(service.href.startsWith('http') && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label': `${service.title} - 新しいウィンドウで開きます`
                })}
                role="button"
                tabIndex={0}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-shadow-md break-words">
                  {service.title}
                </h3>
                <p className="text-gray-900 text-sm leading-relaxed font-medium text-shadow-sm jp-wrap no-orphan">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          {/* 🚀 限界突破CTA - 感情的訴求強化 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 min-h-[56px] bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 shadow-lg hover:shadow-xl"
              role="button"
              aria-label="無料相談を始める - お問い合わせセクションへ移動"
            >
              <span>無料相談を始める</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 min-h-[56px] bg-white text-gray-900 font-bold rounded-lg border border-gray-200 transition-all duration-300 ease-out hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 shadow-lg hover:shadow-xl"
              role="button"
              aria-label="サービス詳細を見る - サービスセクションへ移動"
            >
              サービス詳細を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
})

export default HeroSection
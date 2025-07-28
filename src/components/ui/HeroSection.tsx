'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { memo } from 'react'
import { COMPANY_DATA } from '@/lib/company-data'

// 🚀 ULTRA SYNC - 限界突破完了！軽量化ヒーローセクション
const HeroSection = memo(function HeroSection() {
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="hero" aria-labelledby="hero-title">
      
      {/* 🚀 ウルトラシンク最適化 - 単一コンテナ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* 🚀 限界突破 - 感情的訴求 + ストーリーテリング */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 tracking-tight text-ultra-readable">
            {COMPANY_DATA.basic.tagline}
          </h1>
          
          <p className="text-lg md:text-xl text-black mb-4 font-bold leading-relaxed text-shadow-lg">
            {COMPANY_DATA.basic.description}
          </p>
          
          <p className="text-base md:text-lg text-black mb-8 font-bold leading-relaxed text-shadow-md">
            {COMPANY_DATA.basic.subMessage}
          </p>
          
          
          {/* 🚀 ウルトラ軽量サービスグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            {heroServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white-overlay rounded-2xl p-6 border border-gray-100"
                {...(service.href.startsWith('http') && {
                  target: '_blank',
                  rel: 'noopener noreferrer'
                })}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-black mb-3 text-shadow-md">
                  {service.title}
                </h3>
                <p className="text-black text-sm leading-relaxed font-medium text-shadow-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          {/* 🚀 限界突破CTA - 感情的訴求強化 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800"
            >
              <span>無料相談を始める</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white-overlay text-gray-900 font-medium rounded-lg border border-gray-200 hover:bg-gray-overlay"
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
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
    <section className="relative min-h-screen flex flex-col justify-center bg-white" id="hero" aria-labelledby="hero-title">
      {/* 🚀 ウルトラシンク最適化 - 単一コンテナ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* 🚀 軽量化ロゴセクション */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto" style={{ aspectRatio: '4/3', minHeight: '280px' }}>
              <Image
                src="/assets/images/hero-background.png"
                alt="Awake Inc. ロゴ - 株式会社Awake"
                fill
                className="object-contain object-center"
                priority
                quality={90}
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
          
          {/* 🚀 限界突破 - 感情的訴求 + ストーリーテリング */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            {COMPANY_DATA.basic.tagline}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 font-light leading-relaxed">
            {COMPANY_DATA.basic.description}
          </p>
          
          {/* 🚀 社会的証明 */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏢</span>
              <span>{COMPANY_DATA.basic.achievements.companies}の実績</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">💯</span>
              <span>継続率{COMPANY_DATA.basic.achievements.continuityRate}</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">⚡</span>
              <span>{COMPANY_DATA.basic.achievements.roiPeriod}で投資回収</span>
            </div>
          </div>
          
          {/* 🚀 緊急性の演出 */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-12 max-w-md mx-auto">
            <p className="text-red-800 font-medium text-sm">
              {COMPANY_DATA.consultation.urgencyElements.monthlyLimit}
            </p>
            <p className="text-red-600 text-xs mt-1">
              {COMPANY_DATA.consultation.urgencyElements.freeConsultation}
            </p>
          </div>
          
          {/* 🚀 ウルトラ軽量サービスグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            {heroServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-2xl p-6 border border-gray-100"
                {...(service.href.startsWith('http') && {
                  target: '_blank',
                  rel: 'noopener noreferrer'
                })}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          
          {/* 🚀 限界突破CTA - 感情的訴求強化 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 shadow-lg"
            >
              <span>🎯</span>
              <span className="ml-2">【月3社限定】無料相談を申し込む</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href={COMPANY_DATA.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 shadow-lg"
            >
              <span>📱</span>
              <span className="ml-2">LINEで今すぐ相談</span>
            </Link>
          </div>
          
          {/* 🚀 追加の安心要素 */}
          <p className="text-xs text-gray-500 mt-6">
            ✅ 24時間以内に返信保証　✅ 秘密保持契約対応　✅ 相談料完全無料
          </p>
        </div>
      </div>
    </section>
  )
})

export default HeroSection
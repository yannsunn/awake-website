'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { memo } from 'react'
import { commonAnimations, optimizedViewport } from '@/lib/animations'

// 🚀 Ultra-Optimized Hero Section with Memoization
const HeroSection = memo(function HeroSection() {

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white" id="hero" aria-labelledby="hero-title">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiNlNWU3ZWIiLz4KPC9zdmc+')] opacity-40"></div>
      </div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        variants={commonAnimations.staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Company Logo - Ultra Optimized */}
          <motion.div 
            variants={commonAnimations.logoReveal}
            className="mb-12 flex justify-center"
          >
            <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto" style={{ aspectRatio: '4/3', minHeight: '320px' }}>
              <Image
                src="/assets/images/hero-background.png"
                alt="Awake Inc. Logo"
                fill
                className="object-contain object-center"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
                style={{ 
                  objectFit: 'contain',
                  objectPosition: 'center',
                  padding: '1rem'
                }}
              />
            </div>
          </motion.div>
          
          {/* Company Name - Optimized */}
          <motion.h1 
            id="hero-title" 
            variants={commonAnimations.fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight"
          >
            株式会社<span className="font-normal">Awake</span>
          </motion.h1>
          
          {/* Tagline - Optimized */}
          <motion.p 
            variants={commonAnimations.fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed"
          >
            弊社とつながるすべての人に感謝と繁栄を
          </motion.p>
          
          {/* Services Grid - Ultra Optimized */}
          <motion.div 
            variants={commonAnimations.fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
          >
            <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">ホームページ制作</h3>
              <p className="text-gray-600 text-sm leading-relaxed">企業の価値を最大化するプロフェッショナルなウェブサイト</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">AIコンサルティング</h3>
              <p className="text-gray-600 text-sm leading-relaxed">最先端AI技術による業務効率化とデジタル変革支援</p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Amazon代理店</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Amazon特価での代理販売とEC事業の包括的サポート</p>
            </div>
          </motion.div>
          
          {/* CTA Button - Ultra Optimized */}
          <motion.div 
            variants={commonAnimations.fadeIn}
            className="flex justify-center"
          >
            <Link 
              href="#contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
            >
              <span>お問い合わせ</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
})

export default HeroSection
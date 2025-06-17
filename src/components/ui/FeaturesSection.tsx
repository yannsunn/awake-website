'use client'

import { Rocket, Bot, Shield, TrendingUp, Target, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: Target,
    title: '戦略的デザイン設計',
    description: 'ニューロマーケティングと認知心理学に基づく設計で、ユーザーの行動を最適化。コンバージョン率の大幅向上を実現します。',
    delay: 0.1
  },
  {
    icon: TrendingUp,
    title: 'データドリブン改善',
    description: 'リアルタイム分析とA/Bテストで継続的最適化。数値に基づく確実な成果向上と長期的な成長を支援します。',
    delay: 0.2
  },
  {
    icon: Rocket,
    title: '高速実装・運用',
    description: 'プロフェッショナルなワークフローで短期間での成果実現。品質を保ちながら迅速な価値提供を行います。',
    delay: 0.3
  },
  {
    icon: Shield,
    title: '品質保証体制',
    description: 'エンタープライズレベルの品質管理とセキュリティ体制。お客様の重要な資産を完全保護し、安心をお約束します。',
    delay: 0.4
  },
  {
    icon: Bot,
    title: 'AI技術の活用',
    description: '最新AI技術と人間の専門性を組み合わせた効率的なソリューション。革新的なアプローチで競争優位性を創出します。',
    delay: 0.5
  },
  {
    icon: Star,
    title: 'メディア対応品質',
    description: 'プレスリリースや取材対応可能なプロフェッショナル品質。企業ブランドの価値向上と信頼性確立を実現します。',
    delay: 0.6
  }
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.4, 0, 0.2, 1] 
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative" id="features" aria-labelledby="features-title" ref={ref}>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full text-blue-700 text-sm font-semibold shadow-lg shadow-blue-100/50">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              革新的な特徴
            </span>
          </motion.div>
          <motion.h2 
            id="features-title" 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            なぜ選ばれるのか
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            最新テクノロジーと人間の創造性を融合した、
            <br className="hidden md:block" />
            次世代のビジネスソリューション
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                custom={feature.delay}
                className="group relative"
              >
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 p-8 lg:p-10 hover:shadow-xl hover:shadow-blue-100/25 transition-transform transition-shadow duration-200 hover:-translate-y-1 gpu-accelerated">
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{padding: '1px'}}>
                    <div className="bg-white rounded-3xl h-full w-full"></div>
                  </div>
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200 shadow-lg gpu-accelerated">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Hover Indicator */}
                    <div className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { Rocket, Bot, Shield, TrendingUp, Target, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: Bot,
    title: 'AI技術活用',
    description: '最新のAI技術を駆使し、効率化と品質向上を同時実現。人間では不可能なスピードと精度で業務を自動化します。',
    delay: 0.1
  },
  {
    icon: Rocket,
    title: '最短24時間納品',
    description: '従来の10倍の速度で高品質なアウトプットを提供。緊急案件にも対応する超高速ワークフローを実現します。',
    delay: 0.2
  },
  {
    icon: Target,
    title: '成果保証システム',
    description: '明確なKPI設定と成果測定で、確実にビジネス成長を実現。結果が出るまで徹底的にサポートします。',
    delay: 0.3
  },
  {
    icon: TrendingUp,
    title: 'データドリブン',
    description: 'リアルタイム分析とビッグデータ活用で、最適な戦略を継続的に提案。数値に基づく確実な成長を支援します。',
    delay: 0.4
  },
  {
    icon: Shield,
    title: '完全セキュリティ',
    description: 'エンタープライズレベルのセキュリティ体制で、お客様の重要な情報を完全保護。安心してお任せください。',
    delay: 0.5
  },
  {
    icon: Star,
    title: 'プレミアム品質',
    description: '業界最高水準の品質管理体制で、妥協のないクオリティを実現。お客様の期待を超える成果をお約束します。',
    delay: 0.6
  }
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 p-8 lg:p-10 hover:shadow-xl hover:shadow-blue-100/25 transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{padding: '1px'}}>
                    <div className="bg-white rounded-3xl h-full w-full"></div>
                  </div>
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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
'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown, Sparkles, Zap, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white" id="hero" aria-labelledby="hero-title">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-corporate-gray-50">
        <div className="absolute inset-0 bg-[url('/assets/images/modern-office.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-3 bg-corporate-blue-50 border border-corporate-blue-200 rounded-md text-corporate-blue-800 text-sm font-semibold shadow-corporate">
              <div className="w-2 h-2 bg-corporate-blue-600 rounded-full"></div>
              プロフェッショナル・ソリューション
            </span>
          </motion.div>
          
          <motion.h1 
            id="hero-title" 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-corporate-gray-900 mb-8 leading-tight"
          >
            企業の成長を支える<br />
            戦略的デジタルソリューション
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-corporate-gray-700 mb-8 font-medium leading-relaxed"
          >
            ホームページ制作・LP制作・Amazon代理店サービス・動画編集制作により、
            <span className="inline-flex items-center gap-1 text-corporate-blue-800 font-bold bg-corporate-blue-50 px-3 py-1 rounded-md border border-corporate-blue-200 shadow-sm ml-1">
              <div className="w-1.5 h-1.5 bg-corporate-blue-600 rounded-full"></div>
              確実な成果
            </span>
            を実現します
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-corporate-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            データドリブンなアプローチとプロフェッショナルな技術力で、お客様のビジネス価値を最大化。
            <br className="hidden md:block" />
            まずは無料コンサルティングで、最適な戦略をご提案いたします。
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-corporate-blue-800 text-white font-semibold rounded-md transition-all duration-200 hover:bg-corporate-blue-900 shadow-corporate hover:shadow-corporate-lg btn-focus card-hover"
            >
              <span className="relative z-10">無料コンサルティング開始</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#services" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-corporate-blue-800 text-corporate-blue-800 font-semibold rounded-md transition-all duration-200 hover:bg-corporate-blue-50 shadow-corporate hover:shadow-corporate-lg btn-focus"
            >
              サービス詳細を見る
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center p-6 bg-white rounded-lg border border-corporate-gray-200 shadow-corporate card-hover">
              <div className="text-3xl font-bold text-corporate-blue-800 mb-2">最短1週間</div>
              <div className="text-sm text-corporate-gray-600 font-medium">納期</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-corporate-gray-200 shadow-corporate card-hover">
              <div className="text-3xl font-bold text-corporate-blue-800 mb-2">500+</div>
              <div className="text-sm text-corporate-gray-600 font-medium">プロジェクト実績</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-corporate-gray-200 shadow-corporate card-hover">
              <div className="text-3xl font-bold text-corporate-blue-800 mb-2">100%</div>
              <div className="text-sm text-corporate-gray-600 font-medium">品質保証</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
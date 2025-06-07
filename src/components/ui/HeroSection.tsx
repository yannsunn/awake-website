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
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const floatingVariants = {
    float: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero" aria-labelledby="hero-title">
      {/* Background with Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-[url('/assets/images/modern-office.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-blue-800/30"></div>
      </div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full text-blue-700 text-sm font-semibold shadow-lg shadow-blue-100/50">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              2025年最新のソリューション
            </span>
          </motion.div>
          
          <motion.h1 
            id="hero-title" 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
          >
            革命的なソリューションで<br />
            企業の成長を加速
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 mb-8 font-medium leading-relaxed"
          >
            最新テクノロジーとAI技術で、御社の課題を
            <span className="inline-flex items-center gap-1 text-blue-700 font-bold bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-1 rounded-lg border border-blue-200/50 shadow-sm">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              最短24時間
            </span>
            で解決
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            HP制作・EC通販・動画編集・家具製作まで、プロフェッショナルなサービスをワンストップで提供。
            <br className="hidden md:block" />
            まずは無料相談で、最適なご提案を体験してください。
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <span className="relative z-10">今すぐ無料相談を始める</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <Link 
              href="#services" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-700 font-semibold rounded-xl transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 shadow-lg hover:shadow-xl"
            >
              サービスを見る
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100/50 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">24時間</div>
              <div className="text-sm text-gray-600 font-medium">最短納期</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100/50 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">1000+</div>
              <div className="text-sm text-gray-600 font-medium">実績数</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100/50 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">99%</div>
              <div className="text-sm text-gray-600 font-medium">満足度</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
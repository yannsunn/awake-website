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
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" id="hero" aria-labelledby="hero-title">
      {/* Clean Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJtIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEwMCwgMTE2LCAxMzksIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')] opacity-60"></div>
      </div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-700 text-sm font-medium">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              2025年最新のソリューション
            </span>
          </motion.div>
          
          <motion.h1 
            id="hero-title" 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight"
          >
            <span className="text-blue-700">
              革命的
            </span>
            なソリューションで<br />
            企業の成長を
            <span className="text-blue-700">
              加速
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 mb-6 font-medium leading-relaxed"
          >
            最新テクノロジーとAI技術で、御社の課題を
            <span className="text-blue-700 font-semibold bg-blue-50 px-2 py-1 rounded">最短24時間</span>
            で解決
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto"
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
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-blue-700 shadow-lg hover:shadow-xl"
            >
              今すぐ無料相談を始める
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg transition-all duration-200 hover:border-gray-400 hover:bg-gray-50"
            >
              サービスを見る
              <ChevronDown className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex justify-center items-center gap-8 text-gray-600"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24時間</div>
              <div className="text-sm">最短納期</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-sm">実績数</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">99%</div>
              <div className="text-sm">満足度</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
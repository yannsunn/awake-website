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
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDEwMCAwIEwgMCAwIDAgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-20"></div>
        
        {/* Floating Elements */}
        <motion.div 
          variants={floatingVariants}
          animate="float"
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-[1px]"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full blur-[0.5px]"
        />
        <motion.div 
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-pink-400 rounded-full blur-[1px]"
        />
        
        {/* Modern Blurred Shapes */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/15 to-pink-500/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-20 right-20 text-cyan-400/20 hidden lg:block"
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-32 left-16 text-yellow-400/20 hidden lg:block"
      >
        <Zap size={28} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '4s' }}
        className="absolute top-1/3 left-20 text-pink-400/20 hidden lg:block"
      >
        <TrendingUp size={24} />
      </motion.div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              2025年最新のソリューション
            </span>
          </motion.div>
          
          <motion.h1 
            id="hero-title" 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              革新的
            </span>
            なソリューションで<br />
            企業の成長を
            <span className="relative">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                加速
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-lg rounded-lg"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 mb-6 font-medium leading-relaxed"
          >
            最新テクノロジーとAI技術で、御社の課題を
            <span className="text-cyan-300 font-semibold">最短24時間</span>
            で解決
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-4xl mx-auto"
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
              className="group relative overflow-hidden inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center">
                今すぐ無料相談を始める
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link 
              href="#services" 
              className="group inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 hover:border-white/50"
            >
              サービスを見る
              <ChevronDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex justify-center items-center gap-8 text-white/60"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">24時間</div>
              <div className="text-sm">最短納期</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">1000+</div>
              <div className="text-sm">実績数</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">99%</div>
              <div className="text-sm">満足度</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
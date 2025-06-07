'use client'

import Link from 'next/link'
import { Globe, ShoppingCart, Video, Armchair, Zap, Bot, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SERVICES } from '@/lib/constants'

const serviceIcons = {
  web: Globe,
  ec: ShoppingCart,
  video: Video,
  furniture: Armchair,
  clemira: Zap,
  ai: Bot,
} as const

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
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

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="services" aria-labelledby="services-title" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>
      
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
              トータルソリューション
            </span>
          </motion.div>
          <motion.h2 
            id="services-title" 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              サービス
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            組み合わせ自由な<br className="hidden md:block" />
            ワンストップソリューション
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.entries(SERVICES).map(([key, service]) => {
            const IconComponent = serviceIcons[key as keyof typeof serviceIcons]
            return (
              <motion.div 
                key={key} 
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 p-8 lg:p-10 hover:shadow-xl hover:shadow-blue-100/25 transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{padding: '1px'}}>
                    <div className="bg-white rounded-3xl h-full w-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Enhanced Link */}
                    <Link 
                      href={service.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 font-semibold rounded-xl border border-blue-200/50 hover:border-blue-300 transition-all duration-300 group-hover:shadow-lg"
                    >
                      詳細を見る
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
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
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
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
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
    <section className="py-32 bg-white" id="services" aria-labelledby="services-title" ref={ref}>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-corporate-blue-50 border border-corporate-blue-200 rounded-md text-corporate-blue-800 text-sm font-semibold">
              <div className="w-2 h-2 bg-corporate-blue-600 rounded-full"></div>
              コアサービス
            </span>
          </motion.div>
          <motion.h2 
            id="services-title" 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-gray-900 mb-8"
          >
            サービス
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-corporate-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            プロフェッショナルなビジネスソリューション
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
                <div className="relative bg-white rounded-lg border border-corporate-gray-200 p-8 hover:shadow-lg hover:border-corporate-blue-300 transition-base hover-lift">
                  
                  <div>
                    {/* Icon */}
                    <div className="w-14 h-14 bg-corporate-blue-600 rounded-lg flex items-center justify-center mb-6 transition-all duration-200">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-corporate-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-corporate-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Professional Link */}
                    <Link 
                      href={service.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-corporate-blue-600 hover:bg-corporate-blue-700 text-white font-semibold rounded-md transition-colors duration-200"
                    >
                      詳細を見る
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
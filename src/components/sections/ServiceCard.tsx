'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { type LucideIcon } from 'lucide-react'
import { useRef } from 'react'

interface ServiceCardProps {
  service: {
    icon: LucideIcon
    title: string
    description: string
    price: string
    features: string[]
    buttons: Array<{ text: string; href: string }>
    image?: string
  }
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    })
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
      className="bg-white border-t border-gray-200 py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-8 sm:mb-10 md:mb-12">
            {/* 左側: テキストコンテンツ */}
            <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
              <div className="flex items-center gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
                </motion.div>
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 break-words"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
              </div>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6 text-gray-700 break-words leading-relaxed">
                {service.description}
              </p>
              <motion.div
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-7 md:mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {service.price}
              </motion.div>
            </div>

            {/* 右側: 画像 */}
            {service.image && (
              <motion.div
                className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
                  <Image
                    src={service.image}
                    alt={`${service.title}のイメージ画像`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* 特徴リスト */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
              {service.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  className="text-center bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={featureVariants}
                  whileHover={{ scale: 1.05, backgroundColor: '#f9fafb' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-base sm:text-lg md:text-xl font-medium text-gray-900 break-words leading-relaxed">
                    {feature}
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="text-center">
              {service.buttons.map((button) => (
                <Link key={button.href} href={button.href}>
                  <motion.button
                    className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-gray-900 text-white text-base sm:text-lg md:text-xl font-medium rounded-lg"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: '#1f2937',
                      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                  >
                    {button.text} →
                  </motion.button>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </motion.div>
  )
}

'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { COMPANY_DATA } from '@/lib/company-data'
import { useRef } from 'react'
import { SECTION_SPACING, CONTAINER, HEADING, TEXT, BUTTON_VARIANT, BUTTON_SIZE } from '@/lib/design-system/unified'

export default function HomeMission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  return (
    <section className="relative bg-white overflow-hidden">
      {/* 背景画像 - 半透明 with ゆっくり拡大アニメーション */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Image
          src="/images/network-connections.webp"
          alt="ネットワークの繋がり"
          fill
          className="object-cover opacity-[0.12]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
      </motion.div>

      <motion.div
        ref={ref}
        className={`${CONTAINER.default.full} ${SECTION_SPACING.default} relative z-10`}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="text-center">
          <motion.h2
            className={`${HEADING.h2} text-gray-900 mb-8`}
            variants={textVariants}
          >
            経営理念
          </motion.h2>
          <motion.p
            className={`${HEADING.h3} text-gray-900 mb-8`}
            variants={textVariants}
          >
            {COMPANY_DATA.basic.mission}
          </motion.p>
          <motion.p
            className={`${TEXT.lead} text-gray-700 mb-12`}
            variants={textVariants}
          >
            適正な投資で最大の効果を。
            私たちは貴社のIT投資を最適化し、
            持続可能な成長を支援いたします。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/about">
              <motion.button
                className={`${BUTTON_VARIANT.primary} ${BUTTON_SIZE.lg}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                aria-label="会社概要ページへ移動"
              >
                会社概要 →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

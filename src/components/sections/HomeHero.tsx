'use client'

import { motion } from 'framer-motion'
import LineButton from '@/components/ui/LineButton'

export default function HomeHero() {
  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const scrollAnimation = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20 z-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* メインコンテンツ */}
      <motion.div
        className="container mx-auto px-4 relative z-30"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight"
              variants={textVariants}
            >
              ホームページ制作・AIチャットボット開発・Amazon代理店
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-700 mb-6 font-medium"
              variants={textVariants}
            >
              株式会社Awake｜東京都東大和市｜中小企業のデジタル化パートナー
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed"
              variants={textVariants}
            >
              適正価格で最大の価値を。ホームページ制作132,000円〜、AIチャットボット298,000円〜、Amazon販売代行手数料10%〜
            </motion.p>

            {/* LINEボタン */}
            <motion.div
              className="flex flex-col items-center gap-3"
              variants={textVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <LineButton className="shadow-lg" size="medium" variant="filled" />
              </motion.div>
              <p className="text-sm text-slate-600">まずはLINEで気軽にご相談ください</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

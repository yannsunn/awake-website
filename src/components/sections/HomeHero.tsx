'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
      {/* 背景動画 - 半透明オーバーレイ */}
      <div className="absolute inset-0 z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-30"
          poster="/images/digital-particles.webp"
        >
          <source src="/videos/hero-video.webm" type="video/webm" />
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* フォールバック: 動画が読み込めない場合は背景画像 */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70" />
      </div>

      {/* メインコンテンツ */}
      <motion.div
        className="container mx-auto px-4 relative z-30"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-[90%] lg:max-w-[1600px] mx-auto text-center">
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
              株式会社Awake
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed"
              variants={textVariants}
            >
              適正価格で最大の価値を。
              <br />
              <span className="block sm:inline">
                ホームページ制作132,000円〜、
              </span>
              <br className="sm:hidden" />
              <span className="block sm:inline">
                AIチャットボット298,000円〜、
              </span>
              <br className="sm:hidden" />
              <span className="block sm:inline">
                Amazon販売代行手数料10%〜
              </span>
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

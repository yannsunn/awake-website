'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CONTAINER, HEADING, TEXT, MARGIN } from '@/lib/design-system/unified'

interface ServiceHeroProps {
  title: string | React.ReactNode
  description: string
  subDescription?: string | undefined
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string | undefined
  secondaryCtaHref?: string | undefined
  backgroundVariant?: 'gradient' | 'solid' | 'image' | undefined
  className?: string | undefined
  iconImage?: string | undefined
  backgroundImage?: string | undefined
}

export function ServiceHero({
  title,
  description,
  subDescription,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundVariant = 'gradient',
  className,
  iconImage,
  backgroundImage
}: ServiceHeroProps) {
  const backgroundClasses = {
    gradient: 'bg-gradient-to-r from-gray-overlay to-white-overlay',
    solid: 'bg-gray-overlay',
    image: 'bg-gray-overlay'
  }

  return (
    <section className={cn('relative min-h-screen flex items-center justify-center overflow-hidden bg-white', className)}>
      {/* 背景画像 - 半透明オーバーレイ with ゆっくり拡大アニメーション */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 z-0"
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
            src={backgroundImage}
            alt="サービス背景"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white/85" />
        </motion.div>
      )}

      <div className={cn(CONTAINER.default.full, 'relative z-10')}>
        <div className="text-center max-w-5xl mx-auto px-4">

          <motion.h1
            className={cn(HEADING.h2, 'text-gray-900', MARGIN.lg, 'leading-tight tracking-tight')}
            style={{ wordBreak: 'keep-all', overflowWrap: 'normal', whiteSpace: 'pre-line' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className={cn(TEXT.lead, 'text-gray-900 font-semibold', MARGIN.md, 'break-words leading-relaxed')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {description}
          </motion.p>

          {subDescription && (
            <motion.p
              className={cn(TEXT.body, 'text-gray-600', MARGIN.xl, 'leading-relaxed break-words')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subDescription}
            </motion.p>
          )}

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={ctaHref}>
              <motion.button
                className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaText}
              </motion.button>
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link href={secondaryCtaHref}>
                <motion.button
                  className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-white text-gray-900 text-base font-medium border-2 border-gray-300 hover:border-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {secondaryCtaText}
                </motion.button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
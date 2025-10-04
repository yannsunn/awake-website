'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { RESPONSIVE_FONT, RESPONSIVE_PADDING, RESPONSIVE_TYPOGRAPHY } from '@/lib/responsive-utils'
import { motion } from 'framer-motion'
import '@/app/corporate.css'

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
  className
}: ServiceHeroProps) {
  const backgroundClasses = {
    gradient: 'bg-gradient-to-r from-gray-overlay to-white-overlay',
    solid: 'bg-gray-overlay',
    image: 'bg-gray-overlay'
  }

  return (
    <section className={cn('relative overflow-hidden min-h-[70vh] flex items-center', className)}>
      {/* 背景画像 - Unsplash仮画像（後で差し替え） */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
          alt="サービス背景"
          fill
          className="object-cover opacity-10"
          unoptimized
        />
      </div>

      {/* 白基調背景 + 動的エフェクト */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/90 to-violet-50/90 z-1" />

      {/* 動的な背景エフェクト */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className={cn(
        "relative z-10 w-full max-w-7xl mx-auto",
        RESPONSIVE_PADDING.section.dynamic
      )}>
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className={cn(
              "font-bold mb-6 text-black",
              RESPONSIVE_TYPOGRAPHY.lineHeight.tight
            )}
            style={{
              fontSize: RESPONSIVE_FONT.hero.clamp
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className={cn(
              "mb-6 sm:mb-8 text-black px-4 sm:px-0",
              RESPONSIVE_TYPOGRAPHY.lineHeight.relaxed
            )}
            style={{
              fontSize: RESPONSIVE_FONT.body.clamp
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>
          {subDescription && (
            <motion.p
              className="mb-6 sm:mb-8 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {subDescription}
            </motion.p>
          )}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={ctaHref}
                className={cn(
                  'corp-button-primary',
                  'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto inline-block'
                )}
              >
                {ctaText}
              </Link>
            </motion.div>
            {secondaryCtaText && secondaryCtaHref && (
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={secondaryCtaHref}
                  className={cn(
                    'corp-button-secondary',
                    'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto inline-block'
                  )}
                >
                  {secondaryCtaText}
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
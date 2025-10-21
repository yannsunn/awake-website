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
            className="object-cover opacity-[0.15]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-white/75" />
        </motion.div>
      )}

      <div className={cn(CONTAINER.default.full, 'relative z-10')}>
        <div className="text-center max-w-5xl mx-auto">

          <h1 className={cn(HEADING.h2, 'text-gray-900', MARGIN.lg, 'leading-tight tracking-tight break-words')}>
            {title}
          </h1>

          <p className={cn(TEXT.lead, 'text-gray-800 font-medium', MARGIN.md, 'break-words leading-relaxed')}>
            {description}
          </p>

          {subDescription && (
            <p className={cn(TEXT.body, 'text-gray-600', MARGIN.xl, 'leading-relaxed break-words')}>
              {subDescription}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ctaHref}>
              <button className="px-12 py-5 bg-gray-900 text-white text-xl font-medium hover:bg-gray-800 transition-colors">
                {ctaText}
              </button>
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link href={secondaryCtaHref}>
                <button className="px-12 py-5 bg-white text-gray-900 text-xl font-medium border-2 border-gray-900 hover:bg-gray-50 transition-colors">
                  {secondaryCtaText}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
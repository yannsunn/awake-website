import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { STYLES } from '@/lib/constants'
import { TEXT_BG_STYLES, TEXT_SHADOW } from '@/lib/ultra-styles'

interface ServiceHeroProps {
  title: string
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
    <section className={cn('relative overflow-hidden', className)}>
      {/* 背景レイヤー */}
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight" style={TEXT_SHADOW.heading}>
            {title}
          </h1>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-white leading-relaxed px-4 sm:px-0" style={TEXT_SHADOW.small}>
            {description}
          </p>
          {subDescription && (
            <p className="mb-6 sm:mb-8 text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed px-4 sm:px-0" style={TEXT_SHADOW.small}>
              {subDescription}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              href={ctaHref}
              className={cn(
                STYLES.button.primary,
                'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto'
              )}
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className={cn(
                  STYLES.button.secondary,
                  'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium w-full sm:w-auto'
                )}
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
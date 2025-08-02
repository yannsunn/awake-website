import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { STYLES } from '@/lib/constants'

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
      
      <div className={cn(STYLES.container, 'py-12 sm:py-16 lg:py-20 relative z-10')}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className={cn(STYLES.heading.h1.hero, "mb-6")} style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
            {title}
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-white leading-relaxed bg-gray-800/90 rounded-lg px-6 py-4 inline-block shadow-xl" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
            {description}
          </p>
          {subDescription && (
            <p className="mb-8 text-base sm:text-lg text-gray-200 bg-gray-800/90 rounded-lg px-6 py-3 inline-block shadow-xl" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
              {subDescription}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaHref}
              className={cn(
                STYLES.button.primary,
                'px-8 py-4 text-lg font-medium'
              )}
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className={cn(
                  STYLES.button.secondary,
                  'px-8 py-4 text-lg font-medium'
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
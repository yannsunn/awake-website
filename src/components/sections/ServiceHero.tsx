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
    <section className={cn(backgroundClasses[backgroundVariant], 'relative overflow-hidden', className)}>
      <div className={cn(STYLES.container, 'py-12 sm:py-16 lg:py-20')}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className={cn(STYLES.heading.h1.hero, "mb-6")}>
            {title}
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
          {subDescription && (
            <p className="mb-8 text-base sm:text-lg text-gray-500">
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
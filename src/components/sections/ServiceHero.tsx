import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { STYLES } from '@/lib/constants'

interface ServiceHeroProps {
  title: string
  description: string
  ctaText: string
  ctaHref: string
  backgroundVariant?: 'gradient' | 'solid' | 'image'
  className?: string
}

export function ServiceHero({
  title,
  description,
  ctaText,
  ctaHref,
  backgroundVariant = 'gradient',
  className
}: ServiceHeroProps) {
  const backgroundClasses = {
    gradient: 'bg-gradient-to-r from-gray-50 to-white',
    solid: 'bg-gray-50',
    image: 'bg-gray-100'
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
          <Link
            href={ctaHref}
            className={cn(
              STYLES.button.primary,
              'px-8 py-4 text-lg font-medium'
            )}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}
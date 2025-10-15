'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/images/service-5.png"}
          alt="サービス背景"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* アイコン画像 - backgroundImageが指定されていない場合のみ表示 */}
          {iconImage && !backgroundImage && (
            <div className="flex justify-center mb-8">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image
                  src={iconImage}
                  alt="サービスアイコン"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight break-words">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-800 font-medium mb-6 break-words leading-relaxed">
            {description}
          </p>

          {subDescription && (
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed break-words">
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
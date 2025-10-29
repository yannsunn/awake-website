'use client'

import { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SECTION_PATTERNS, TEXT_SHADOW, TEXT_BG_STYLES } from '@/lib/design-system'
import { RESPONSIVE_FONT, RESPONSIVE_PADDING, RESPONSIVE_TYPOGRAPHY } from '@/lib/responsive-utils'

interface UltraSectionProps {
  children?: ReactNode
  variant?: keyof typeof SECTION_PATTERNS
  className?: string | undefined
  id?: string
  title?: string
  subtitle?: string
  description?: string
  ariaLabel?: string
}

// 🚀 限界突破セクションコンポーネント
export default function UltraSection({ 
  children, 
  variant = 'dark',
  className,
  id,
  title,
  subtitle,
  description,
  ariaLabel
}: UltraSectionProps) {
  const pattern = SECTION_PATTERNS[variant]
  
  return (
    <section id={id} className={cn(pattern.wrapper, className)} aria-label={ariaLabel}>
      <div className={pattern.overlay} />
      <div className={pattern.content}>
        {title && (
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4 sm:px-0 leading-relaxed" style={{...TEXT_SHADOW.heading, wordBreak: 'keep-all', overflowWrap: 'anywhere', textWrap: 'balance'}}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-4 px-4 sm:px-0 font-bold leading-relaxed" style={{...TEXT_SHADOW.body, wordBreak: 'keep-all', overflowWrap: 'anywhere', textWrap: 'balance'}}>
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-base sm:text-lg md:text-xl text-gray-900 px-4 sm:px-0 leading-relaxed" style={{...TEXT_SHADOW.small, wordBreak: 'keep-all', overflowWrap: 'anywhere', textWrap: 'pretty'}}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

// ヒーローセクション専用
export function UltraHero({
  title,
  subtitle,
  description,
  children,
  className,
  backgroundImage
}: {
  title: string | ReactNode
  subtitle?: string | ReactNode
  description?: string | ReactNode
  children?: ReactNode
  className?: string | undefined
  backgroundImage?: string
}) {
  const defaultImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"

  return (
    <section className={cn(
      "relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28",
      className
    )}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || defaultImage}
          alt="Hero background"
          fill
          className="object-cover opacity-30"
          priority
          unoptimized={!backgroundImage?.startsWith('/images/')}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white/85" />
      </div>

      <div className={cn(
        "text-center max-w-7xl mx-auto relative z-10",
        RESPONSIVE_PADDING.container.dynamic
      )}>
        <h1
          className={cn(
            "font-bold mb-4 sm:mb-6 text-gray-900",
            RESPONSIVE_TYPOGRAPHY.lineHeight.relaxed
          )}
          style={{
            ...TEXT_SHADOW.heading,
            fontSize: RESPONSIVE_FONT.hero.clamp,
            wordBreak: 'keep-all',
            overflowWrap: 'anywhere',
            textWrap: 'balance',
            letterSpacing: '0.02em'
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "text-gray-900 font-medium mb-4 sm:mb-6",
              RESPONSIVE_TYPOGRAPHY.lineHeight.relaxed
            )}
            style={{
              ...TEXT_SHADOW.body,
              fontSize: RESPONSIVE_FONT.h2.clamp,
              wordBreak: 'keep-all',
              overflowWrap: 'anywhere',
              textWrap: 'balance',
              letterSpacing: '0.02em'
            }}
          >
            {subtitle}
          </p>
        )}
        {description && (
          <p
            className={cn(
              "text-gray-900 mt-4",
              RESPONSIVE_TYPOGRAPHY.lineHeight.relaxed
            )}
            style={{
              ...TEXT_SHADOW.small,
              fontSize: RESPONSIVE_FONT.body.clamp,
              wordBreak: 'keep-all',
              overflowWrap: 'anywhere',
              textWrap: 'pretty',
              letterSpacing: '0.02em'
            }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

// CTAセクション専用
export function UltraCTA({ 
  title, 
  subtitle,
  description, 
  buttons,
  className
}: { 
  title: string
  subtitle?: string
  description?: string
  buttons?: Array<{
    href: string
    label: string
    variant: 'primary' | 'secondary'
  }>
  className?: string | undefined
}) {
  return (
    <UltraSection variant="medium" className={className}>
      <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed" style={{...TEXT_SHADOW.heading, wordBreak: 'keep-all', overflowWrap: 'anywhere', textWrap: 'balance', letterSpacing: '0.02em'}}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed ${TEXT_BG_STYLES.default}`} style={{...TEXT_SHADOW.body, wordBreak: 'keep-all', overflowWrap: 'anywhere', textWrap: 'balance', letterSpacing: '0.02em'}}>
            {subtitle}
          </p>
        )}
        {description && (
          <p className={`text-base sm:text-lg md:text-xl text-gray-900 mb-8 leading-relaxed ${TEXT_BG_STYLES.default}`} style={{...TEXT_SHADOW.body, wordBreak: 'keep-all', overflowWrap: 'anywhere', textWrap: 'pretty', letterSpacing: '0.02em'}}>
            {description}
          </p>
        )}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto ${
                  button.variant === 'primary'
                    ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white hover:from-blue-700 hover:to-sky-700'
                    : 'bg-white text-blue-900 hover:bg-blue-50 border-2 border-blue-200'
                }`}
                style={TEXT_SHADOW.small}
              >
                {button.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </UltraSection>
  )
}
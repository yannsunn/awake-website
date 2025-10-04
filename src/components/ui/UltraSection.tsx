'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SECTION_PATTERNS, TEXT_SHADOW, TEXT_BG_STYLES } from '@/lib/ultra-styles'
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 px-4 sm:px-0" style={TEXT_SHADOW.heading}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg sm:text-xl md:text-2xl text-black mb-4 px-4 sm:px-0 font-bold" style={TEXT_SHADOW.body}>
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-base sm:text-lg md:text-xl text-black px-4 sm:px-0" style={TEXT_SHADOW.small}>
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
  className
}: { 
  title: string | ReactNode
  subtitle?: string | ReactNode
  description?: string | ReactNode
  children?: ReactNode
  className?: string | undefined
}) {
  return (
    <UltraSection 
      variant="dark" 
      className={cn(
        "min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center",
        RESPONSIVE_PADDING.section.dynamic,
        className
      )}
    >
      <div className={cn(
        "text-center max-w-7xl mx-auto",
        RESPONSIVE_PADDING.container.dynamic
      )}>
        <h1 
          className={cn(
            "font-bold mb-4 sm:mb-6 text-black",
            RESPONSIVE_TYPOGRAPHY.lineHeight.tight
          )}
          style={{
            ...TEXT_SHADOW.heading,
            fontSize: RESPONSIVE_FONT.hero.clamp
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p 
            className={cn(
              "text-black font-medium mb-4 sm:mb-6",
              RESPONSIVE_TYPOGRAPHY.lineHeight.relaxed
            )}
            style={{
              ...TEXT_SHADOW.body,
              fontSize: RESPONSIVE_FONT.h2.clamp
            }}
          >
            {subtitle}
          </p>
        )}
        {description && (
          <p
            className={cn(
              "text-black mt-4",
              RESPONSIVE_TYPOGRAPHY.lineHeight.relaxed
            )}
            style={{
              ...TEXT_SHADOW.small,
              fontSize: RESPONSIVE_FONT.body.clamp
            }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </UltraSection>
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight" style={TEXT_SHADOW.heading}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg sm:text-xl md:text-2xl text-black mb-6 leading-relaxed ${TEXT_BG_STYLES.default}`} style={TEXT_SHADOW.body}>
            {subtitle}
          </p>
        )}
        {description && (
          <p className={`text-base sm:text-lg md:text-xl text-black mb-8 leading-relaxed ${TEXT_BG_STYLES.default}`} style={TEXT_SHADOW.body}>
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
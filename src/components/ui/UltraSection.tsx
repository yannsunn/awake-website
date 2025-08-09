'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SECTION_PATTERNS, TEXT_SHADOW, TEXT_BG_STYLES } from '@/lib/ultra-styles'

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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-4 sm:px-0" style={TEXT_SHADOW.heading}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 px-4 sm:px-0" style={TEXT_SHADOW.body}>
                {subtitle}
              </p>
            )}
            {description && (
              <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4 sm:px-0" style={TEXT_SHADOW.small}>
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
  subtitle?: string
  description?: string
  children?: ReactNode
  className?: string | undefined
}) {
  return (
    <UltraSection variant="dark" className={cn("min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center py-16 sm:py-20", className)}>
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight" style={TEXT_SHADOW.heading}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-white font-medium mb-6 leading-relaxed" style={TEXT_SHADOW.body}>
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mt-4" style={TEXT_SHADOW.small}>
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={TEXT_SHADOW.heading}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg sm:text-xl md:text-2xl text-white mb-6 leading-relaxed ${TEXT_BG_STYLES.default}`} style={TEXT_SHADOW.body}>
            {subtitle}
          </p>
        )}
        {description && (
          <p className={`text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed ${TEXT_BG_STYLES.default}`} style={TEXT_SHADOW.body}>
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
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
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
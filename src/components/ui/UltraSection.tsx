'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SECTION_PATTERNS, TEXT_SHADOW, TEXT_BG_STYLES } from '@/lib/ultra-styles'

interface UltraSectionProps {
  children?: ReactNode
  variant?: keyof typeof SECTION_PATTERNS
  className?: string
  id?: string
  title?: string
  subtitle?: string
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
  ariaLabel
}: UltraSectionProps) {
  const pattern = SECTION_PATTERNS[variant]
  
  return (
    <section id={id} className={cn(pattern.wrapper, className)} aria-label={ariaLabel}>
      <div className={pattern.overlay} />
      <div className={pattern.content}>
        {title && (
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={TEXT_SHADOW.heading}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-200" style={TEXT_SHADOW.body}>
                {subtitle}
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
  className?: string
}) {
  return (
    <UltraSection variant="dark" className={cn("min-h-[50vh] flex items-center justify-center", className)}>
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white" style={TEXT_SHADOW.heading}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-xl sm:text-2xl text-white font-semibold mb-4 ${TEXT_BG_STYLES.default}`} style={TEXT_SHADOW.body}>
            {subtitle}
          </p>
        )}
        {description && (
          <p className={`text-base sm:text-lg text-gray-200 ${TEXT_BG_STYLES.default} mt-4`} style={TEXT_SHADOW.small}>
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
  className?: string
}) {
  return (
    <UltraSection variant="medium" className={className}>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={TEXT_SHADOW.heading}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-xl text-white mb-4 ${TEXT_BG_STYLES.default}`} style={TEXT_SHADOW.body}>
            {subtitle}
          </p>
        )}
        {description && (
          <p className={`text-lg text-gray-200 mb-8 ${TEXT_BG_STYLES.default}`} style={TEXT_SHADOW.body}>
            {description}
          </p>
        )}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <a 
                key={index}
                href={button.href}
                className={`inline-flex items-center justify-center px-8 py-4 font-bold rounded-lg transition-all shadow-xl ${
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
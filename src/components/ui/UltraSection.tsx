'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SECTION_PATTERNS, TEXT_SHADOW } from '@/lib/ultra-styles'

interface UltraSectionProps {
  children: ReactNode
  variant?: keyof typeof SECTION_PATTERNS
  className?: string
  id?: string
}

// 🚀 限界突破セクションコンポーネント
export default function UltraSection({ 
  children, 
  variant = 'dark',
  className,
  id
}: UltraSectionProps) {
  const pattern = SECTION_PATTERNS[variant]
  
  return (
    <section id={id} className={cn(pattern.wrapper, className)}>
      <div className={pattern.overlay} />
      <div className={pattern.content}>
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
  children 
}: { 
  title: string | ReactNode
  subtitle?: string
  description?: string
  children?: ReactNode 
}) {
  return (
    <UltraSection variant="dark" className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white" style={TEXT_SHADOW.heading}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl sm:text-2xl text-white font-semibold mb-4 bg-gray-800/90 rounded-lg px-6 py-3 inline-block shadow-xl" style={TEXT_SHADOW.body}>
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-base sm:text-lg text-gray-200 bg-gray-800/90 rounded-lg px-6 py-3 inline-block shadow-xl mt-4" style={TEXT_SHADOW.small}>
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
  description, 
  buttonText, 
  buttonHref 
}: { 
  title: string
  description: string
  buttonText: string
  buttonHref: string 
}) {
  return (
    <UltraSection variant="medium">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6" style={TEXT_SHADOW.heading}>
          {title}
        </h2>
        <p className="text-lg text-white mb-8 bg-gray-800/90 rounded-lg px-6 py-3 inline-block shadow-xl" style={TEXT_SHADOW.body}>
          {description}
        </p>
        <a 
          href={buttonHref}
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-xl font-bold rounded-lg transition-all"
          style={TEXT_SHADOW.small}
        >
          {buttonText}
        </a>
      </div>
    </UltraSection>
  )
}
'use client'

import { memo } from 'react'
import LineButton from '@/components/ui/LineButton'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { STYLES } from '@/lib/constants'

interface UnifiedCTAProps {
  title: string
  subtitle?: string
  description?: string
  theme?: 'light' | 'dark'
  showContactButton?: boolean
  className?: string
}

// 🚀 統一されたCTAセクション
const UnifiedCTA = memo(function UnifiedCTA({
  title,
  subtitle,
  description,
  theme = 'dark',
  showContactButton = true,
  className = ''
}: UnifiedCTAProps) {
  const bgClass = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-overlay'
  const textClass = theme === 'dark' ? 'text-white' : 'text-white'
  const subtitleClass = theme === 'dark' ? 'text-gray-200' : 'text-gray-300'
  
  return (
    <section className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`${STYLES.heading.h2.section} ${textClass} mb-4`}>
            {title}
          </h2>
          
          {subtitle && (
            <p className={`${STYLES.text.body.large} ${textClass} mb-4`}>
              {subtitle}
            </p>
          )}
          
          {description && (
            <p className={`${STYLES.text.body.medium} ${subtitleClass} mb-8`}>
              {description}
            </p>
          )}
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <LineButton size="medium" />
            
            {showContactButton && (
              <AccessibleButton
                href="/#contact"
                className={theme === 'dark' ? 
                  "bg-white-overlay text-white hover:bg-gray-overlay" : 
                  "bg-gray-900 text-white hover:bg-gray-800"
                }
              >
                無料相談を予約する
              </AccessibleButton>
            )}
          </div>
        </div>
      </div>
    </section>
  )
})

export default UnifiedCTA
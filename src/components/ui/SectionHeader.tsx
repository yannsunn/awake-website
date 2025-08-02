'use client'

import { memo } from 'react'
import { STYLES } from '@/lib/constants'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

// 🚀 統一されたセクションヘッダー
const SectionHeader = memo(function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className = ''
}: SectionHeaderProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[align]
  
  return (
    <div className={`${alignClass} mb-8 sm:mb-12 lg:mb-16 ${className}`}>
      <h2 className={`${STYLES.heading.h2.section} mb-4`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`${STYLES.text.body.large} mb-4`}>
          {subtitle}
        </p>
      )}
      
      {description && (
        <p className={`${STYLES.text.body.medium} text-gray-300`}>
          {description}
        </p>
      )}
    </div>
  )
})

export default SectionHeader
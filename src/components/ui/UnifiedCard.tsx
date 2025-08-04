'use client'

import { memo, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import { STYLES } from '@/lib/constants'

interface UnifiedCardProps {
  icon?: LucideIcon | string
  title: string
  description?: string
  features?: string[]
  children?: ReactNode
  variant?: 'default' | 'featured' | 'compact'
  className?: string
}

// 🚀 統一されたカードコンポーネント
const UnifiedCard = memo(function UnifiedCard({
  icon,
  title,
  description,
  features,
  children,
  variant = 'default',
  className = ''
}: UnifiedCardProps) {
  const cardStyles = {
    default: 'bg-white-overlay rounded-2xl p-8 shadow-sm border border-gray-100/50 hover-lift interactive-focus',
    featured: 'bg-gradient-to-br from-indigo-50/95 to-white/95 backdrop-blur-md rounded-2xl p-8 border border-indigo-200/60 shadow-xl shadow-indigo-500/10 hover-lift interactive-focus',
    compact: 'bg-white-overlay rounded-xl p-6 shadow-sm border border-gray-100/50 hover-lift interactive-focus'
  }
  
  return (
    <div className={`${cardStyles[variant]} ${className}`}>
      {icon && (
        <div className="mb-4">
          {typeof icon === 'string' ? (
            <div className="text-3xl">{icon}</div>
          ) : (
            <div className="w-12 h-12 bg-gray-200/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
              {(() => {
                const IconComponent = icon as LucideIcon;
                return <IconComponent className="w-6 h-6 text-gray-200" />;
              })()}
            </div>
          )}
        </div>
      )}
      
      <h3 className={`${STYLES.heading.h3.card} mb-3`}>
        {title}
      </h3>
      
      {description && (
        <p className={`${STYLES.text.description.medium} mb-4`}>
          {description}
        </p>
      )}
      
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className={STYLES.text.description.small}>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      {children}
    </div>
  )
})

export default UnifiedCard
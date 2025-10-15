'use client'

import { memo, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import { COMPONENT_STYLES, TYPOGRAPHY } from '@/lib/design-system'

// 後方互換性のため、headingとtextを含む統合スタイル
const STYLES = {
  ...COMPONENT_STYLES,
  heading: TYPOGRAPHY.heading,
  text: TYPOGRAPHY.text
}

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
    default: 'bg-white-overlay rounded-2xl p-8 shadow-sm border border-gray-100/50 interactive-focus transition-all duration-300 hover:shadow-lg hover:border-gray-200',
    featured: 'bg-gradient-to-br from-blue-900/40 to-blue-900/40 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-600/40 shadow-2xl shadow-blue-600/20 interactive-focus transition-all duration-300 hover:shadow-2xl hover:border-blue-500/60',
    compact: 'bg-white-overlay rounded-xl p-6 shadow-sm border border-gray-100/50 interactive-focus transition-all duration-300 hover:shadow-md hover:border-gray-200'
  }
  
  return (
    <div className={`${cardStyles[variant]} ${className}`}>
      {icon && (
        <div className="mb-4">
          {typeof icon === 'string' ? (
            <div className="text-3xl">{icon}</div>
          ) : (
            <div className="w-12 h-12 bg-blue-100/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
              {(() => {
                const IconComponent = icon as LucideIcon;
                return <IconComponent className="w-6 h-6 text-black" />;
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
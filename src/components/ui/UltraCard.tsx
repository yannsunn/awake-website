'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SHADOWS } from '@/lib/ultra-design-system'

interface UltraCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'featured' | 'minimal'
  hover?: boolean
}

// 🚀 統一されたカードコンポーネント
export default function UltraCard({
  children,
  className,
  variant = 'default',
  hover = true
}: UltraCardProps) {
  const variants = {
    default: 'bg-gray-800/90 backdrop-blur-sm border border-gray-700',
    featured: 'bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-gray-600',
    minimal: 'bg-gray-900/50 border border-gray-800'
  }

  return (
    <div
      className={cn(
        'rounded-lg p-6',
        variants[variant],
        hover && 'transition-all duration-200 hover:transform hover:translateY(-2px) hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  )
}
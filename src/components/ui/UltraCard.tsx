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
    default: 'bg-gradient-to-br from-gray-800/95 to-gray-850/95 backdrop-blur-sm border border-gray-500 shadow-lg',
    featured: 'bg-gradient-to-br from-purple-900/20 to-gray-800/95 backdrop-blur-sm border border-purple-500/30 shadow-xl shadow-purple-500/10',
    minimal: 'bg-gray-850/90 backdrop-blur-sm border border-gray-600 shadow-md'
  }

  return (
    <div
      className={cn(
        'rounded-lg p-6',
        variants[variant],
        hover && 'transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  )
}
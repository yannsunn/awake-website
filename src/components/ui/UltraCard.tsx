'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { SHADOWS } from '@/lib/design-system'

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
    featured: 'bg-gradient-to-br from-blue-900/40 to-blue-900/40 backdrop-blur-md border-2 border-blue-600/40 shadow-2xl shadow-blue-600/20',
    minimal: 'bg-gray-850/90 backdrop-blur-sm border border-gray-600 shadow-md'
  }

  return (
    <div
      className={cn(
        'rounded-lg p-6 relative overflow-hidden transition-all duration-300',
        variants[variant],
        hover && 'hover:border-blue-600/40 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]',
        className
      )}
    >
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
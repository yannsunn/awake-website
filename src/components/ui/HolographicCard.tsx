'use client'

import { ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'
import { EFFECTS, STYLES } from '@/lib/constants'

interface HolographicCardProps {
  children: ReactNode
  className?: string
  glowOnHover?: boolean
  variant?: 'default' | 'featured' | 'minimal'
}

export default function HolographicCard({
  children,
  className,
  glowOnHover = true,
  variant = 'default'
}: HolographicCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseStyles = {
    default: 'bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 border border-gray-600 shadow-lg hover:bg-gray-750/95 hover:border-gray-500 transition-all duration-300',
    featured: 'bg-gradient-to-br from-gray-800/95 to-gray-850/95 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 shadow-xl shadow-purple-500/10 hover:border-purple-400/50 transition-all duration-300',
    minimal: 'bg-gray-850/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg hover:bg-gray-800/95 hover:border-gray-600 transition-all duration-300'
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden transition-all duration-500',
        baseStyles[variant],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
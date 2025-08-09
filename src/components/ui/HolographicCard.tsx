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
    default: 'bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 border border-gray-600 shadow-lg hover:bg-gray-750/95 hover:border-gray-500 transition-colors duration-300',
    featured: 'bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-md rounded-xl p-6 border-2 border-purple-500/40 shadow-2xl shadow-purple-500/20 hover:border-purple-400/60 hover:shadow-purple-400/30 transition-colors duration-300',
    minimal: 'bg-gray-850/90 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg hover:bg-gray-800/95 hover:border-gray-600 transition-colors duration-300'
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden',
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
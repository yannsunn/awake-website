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
    default: STYLES.card.default,
    featured: STYLES.card.featured,
    minimal: 'bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg'
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
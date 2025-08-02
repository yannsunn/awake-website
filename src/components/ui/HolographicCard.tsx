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
    minimal: 'bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/30'
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden transition-all duration-500',
        baseStyles[variant],
        glowOnHover && isHovered && EFFECTS.glow.purple,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 高級感のあるホバーエフェクト */}
      <div 
        className={cn(
          'absolute inset-0 -z-10 opacity-0 transition-all duration-700',
          isHovered && 'opacity-20',
          'bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-indigo-600/20'
        )}
      />
      
      {/* 上品なボーダーグロウ */}
      <div 
        className={cn(
          'absolute inset-0 rounded-inherit',
          'bg-gradient-to-r from-indigo-500 to-purple-600',
          'opacity-0 transition-opacity duration-700',
          isHovered && 'opacity-60'
        )}
        style={{
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
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
      {/* ホログラフィックオーバーレイ */}
      <div 
        className={cn(
          'absolute inset-0 -z-10 opacity-0 transition-opacity duration-500',
          isHovered && 'opacity-30',
          EFFECTS.gradient.holographic
        )}
        style={{ backgroundSize: '300% 300%' }}
      />
      
      {/* ネオンボーダー */}
      <div 
        className={cn(
          'absolute inset-0 rounded-inherit',
          'bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400',
          'opacity-0 transition-opacity duration-500',
          isHovered && 'opacity-100'
        )}
        style={{
          padding: '2px',
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
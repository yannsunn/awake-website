'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { EFFECTS } from '@/lib/constants'

interface NeonGlowProps {
  children: ReactNode
  variant?: 'purple' | 'cyan' | 'pink'
  intensity?: 'light' | 'medium' | 'strong'
  animate?: boolean
  className?: string
}

export default function NeonGlow({
  children,
  variant = 'purple',
  intensity = 'medium',
  animate = true,
  className
}: NeonGlowProps) {
  const intensityMap = {
    light: 'opacity-30',
    medium: 'opacity-50',
    strong: 'opacity-70'
  }

  const variantMap = {
    purple: EFFECTS.gradient.neon.purple,
    cyan: EFFECTS.gradient.neon.cyan,
    pink: EFFECTS.gradient.neon.sunset // sunset colorを使用
  }

  const glowClasses = cn(
    'relative',
    className
  )

  return (
    <div className={glowClasses}>
      {animate && (
        <div 
          className={cn(
            'absolute inset-0 -z-20 blur-2xl',
            variantMap[variant],
            intensityMap[intensity],
            animate && EFFECTS.animation.gradient
          )}
          style={{ 
            backgroundSize: '300% 300%',
            transform: 'scale(1.2)'
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
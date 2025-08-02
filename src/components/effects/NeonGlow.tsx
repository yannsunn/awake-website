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
    light: 'opacity-70',
    medium: 'opacity-100',
    strong: 'opacity-100 saturate-150'
  }

  const variantMap = {
    purple: EFFECTS.gradient.neon.purple,
    cyan: EFFECTS.gradient.neon.cyan,
    pink: EFFECTS.gradient.neon.sunset // sunset colorを使用
  }

  const glowClasses = cn(
    'relative',
    EFFECTS.glow[variant],
    intensityMap[intensity],
    animate && EFFECTS.animation.glow,
    className
  )

  return (
    <div className={glowClasses}>
      {animate && (
        <div 
          className={cn(
            'absolute inset-0 -z-10 blur-xl',
            variantMap[variant],
            EFFECTS.animation.gradient
          )}
          style={{ backgroundSize: '300% 300%' }}
        />
      )}
      {children}
    </div>
  )
}
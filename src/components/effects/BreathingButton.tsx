'use client'

import { ReactNode } from 'react'
import { usePulseEffect } from '@/hooks/useCursorEffect'
import AccessibleButton from '@/components/ui/AccessibleButton'

interface BreathingButtonProps {
  children: ReactNode
  href?: string | undefined
  onClick?: (() => void) | undefined
  className?: string | undefined
  variant?: 'primary' | 'secondary' | undefined
  size?: 'small' | 'medium' | 'large' | undefined
  showArrow?: boolean | undefined
}

export default function BreathingButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'medium',
  showArrow = false
}: BreathingButtonProps) {
  const scale = usePulseEffect(1, 0.02) // 2%の振幅で呼吸
  
  return (
    <div 
      className="relative inline-block"
      style={{
        transform: `scale(${scale})`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      {/* グロー効果 */}
      <div 
        className="absolute inset-0 rounded-lg blur-xl opacity-50"
        style={{
          background: variant === 'primary' 
            ? 'linear-gradient(135deg, var(--primary-500) 0%, var(--effect-accent) 100%)'
            : 'transparent',
          transform: `scale(${1.1 + (scale - 1) * 2})`, // より大きなグロー効果
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      <AccessibleButton
        href={href}
        onClick={onClick}
        className={`relative z-10 ${className}`}
        variant={variant}
        size={size}
        showArrow={showArrow}
      >
        {children}
      </AccessibleButton>
    </div>
  )
}
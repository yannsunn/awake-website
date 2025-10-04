'use client'

import { ReactNode } from 'react'
import { usePulseEffect } from '@/hooks/useCursorEffect'

interface BreathingButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  showArrow?: boolean
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

  const buttonElement = (
    <button
      onClick={onClick}
      className={`relative inline-block px-8 py-3 rounded-lg font-semibold transition-all ${className}`}
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
            ? 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)'
            : 'transparent',
          transform: `scale(${1.1 + (scale - 1) * 2})`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      <span className="relative z-10">{children}</span>
      {showArrow && <span className="ml-2">→</span>}
    </button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonElement}
      </a>
    )
  }

  return buttonElement
}

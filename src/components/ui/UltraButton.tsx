'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { BUTTONS, FOCUS } from '@/lib/ultra-design-system'

interface UltraButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

// 🚀 統一されたボタンコンポーネント
const UltraButton = forwardRef<HTMLButtonElement, UltraButtonProps>(
  ({ variant = 'primary', size = 'md', href, children, className, ...props }, ref) => {
    const classes = cn(
      'ultra-button',
      variant === 'primary' ? BUTTONS.primary : BUTTONS.secondary,
      sizeClasses[size],
      FOCUS.ring,
      className
    )

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

UltraButton.displayName = 'UltraButton'

export default UltraButton
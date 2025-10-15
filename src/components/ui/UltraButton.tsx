'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { BUTTONS, FOCUS } from '@/lib/design-system'

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
      'ultra-button relative z-10 group overflow-hidden',
      variant === 'primary' ? BUTTONS.primary : BUTTONS.secondary,
      sizeClasses[size],
      FOCUS.ring,
      'transition-all duration-300 hover:scale-105 hover:shadow-xl',
      className
    )

    const content = (
      <>
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      </>
    )

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    )
  }
)

UltraButton.displayName = 'UltraButton'

export default UltraButton
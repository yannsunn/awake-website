// 🚀 WCAG 2.1 AAA準拠 アクセシブルボタンコンポーネント
'use client'

import { memo, forwardRef, KeyboardEvent, ReactNode, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { BUTTON_STYLES } from '@/lib/constants'
import type { ButtonVariant } from '@/lib/types'

interface AccessibleButtonProps {
  href?: string
  variant?: ButtonVariant
  icon?: LucideIcon
  showArrow?: boolean
  children: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  target?: string
  rel?: string
  size?: 'small' | 'medium' | 'large'
  // アクセシビリティ拡張プロパティ
  ariaLabel?: string
  ariaDescribedBy?: string
  ariaExpanded?: boolean
  ariaHaspopup?: boolean
  ariaPressed?: boolean
  role?: string
  tabIndex?: number
}

const AccessibleButton = memo(forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  AccessibleButtonProps
>(function AccessibleButton({ 
  href, 
  variant = 'primary', 
  icon: Icon,
  showArrow = false,
  children, 
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  target,
  rel,
  ariaLabel,
  ariaDescribedBy,
  ariaExpanded,
  ariaHaspopup,
  ariaPressed,
  role,
  tabIndex,
  size = 'medium'
}, ref) {
  // 🛡️ 完全型安全保証
  const validVariant = (variant && variant in BUTTON_STYLES) ? variant : 'primary'
  const baseStyles = BUTTON_STYLES[validVariant as keyof typeof BUTTON_STYLES]
  
  // 🚀 ULTRA 視認性重視のモダンUIスタイル
  const accessibilityStyles = `
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
    focus:ring-offset-white focus:ring-opacity-70
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    text-center font-bold relative overflow-hidden
    transition-all duration-300 transform hover:scale-105 active:scale-98
    text-shadow-md shadow-xl hover:shadow-2xl
    ultra-smooth bounce-on-hover
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `
  
  const sizeStyles = {
    small: 'px-5 py-2.5 text-sm min-h-[44px]',
    medium: 'px-6 py-3 text-base min-h-[52px]',
    large: 'px-8 py-4 text-lg min-h-[60px]'
  }
  const styles = `${baseStyles} ${sizeStyles[size]} ${accessibilityStyles} ${className}`

  // キーボードナビゲーション強化
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!disabled && onClick) {
        onClick(e as any)
      }
    }
  }

  const content = (
    <>
      {Icon && (
        <Icon 
          className="mr-2 h-5 w-5 flex-shrink-0" 
          aria-hidden="true"
        />
      )}
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight 
          className="ml-2 h-5 w-5 flex-shrink-0" 
          aria-hidden="true"
        />
      )}
      {/* 🎆 限界突破ホバーエフェクト */}
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -skew-x-12" />
      <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </>
  )

  // アクセシビリティ属性の統合
  const accessibilityProps = {
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    'aria-expanded': ariaExpanded,
    'aria-haspopup': ariaHaspopup,
    'aria-pressed': ariaPressed,
    role: role,
    tabIndex: tabIndex ?? (disabled ? -1 : 0)
  }

  // リンクボタンの場合
  if (href && !disabled) {
    return (
      <Link 
        ref={ref as any}
        href={href} 
        className={`${styles} group inline-flex items-center justify-center no-underline`}
        target={target}
        rel={rel}
        {...accessibilityProps}
      >
        {content}
      </Link>
    )
  }

  // 通常のボタンの場合
  return (
    <button 
      ref={ref as any}
      type={type}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={`${styles} group inline-flex items-center justify-center`}
      {...accessibilityProps}
    >
      {content}
    </button>
  )
}))

export default AccessibleButton
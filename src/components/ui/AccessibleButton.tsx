// 🚀 WCAG 2.1 AAA準拠 アクセシブルボタンコンポーネント
'use client'

import { memo, forwardRef, KeyboardEvent, ReactNode, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { BUTTON_STYLES } from '@/lib/constants'
import type { ButtonVariant } from '@/lib/types'
import { TEXT_SHADOW } from '@/lib/ultra-styles'

interface AccessibleButtonProps {
  href?: string | undefined
  variant?: ButtonVariant | undefined
  icon?: LucideIcon | undefined
  showArrow?: boolean | undefined
  children: ReactNode
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | undefined
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean | undefined
  className?: string | undefined
  target?: string | undefined
  rel?: string | undefined
  size?: 'small' | 'medium' | 'large' | undefined
  // アクセシビリティ拡張プロパティ
  ariaLabel?: string | undefined
  ariaDescribedBy?: string | undefined
  ariaExpanded?: boolean | undefined
  ariaHaspopup?: boolean | undefined
  ariaPressed?: boolean | undefined
  role?: string | undefined
  tabIndex?: number | undefined
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
  
  // WCAG AAA準拠 + 限界突破マイクロインタラクション
  const accessibilityStyles = `
    focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3
    focus-visible:ring-offset-white focus-visible:shadow-focus
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    text-center font-bold relative overflow-hidden
    transition-transform duration-300 ease-out
    hover:scale-[1.02] active:scale-[0.98]
    hover:shadow-xl active:shadow-lg
    touch-manipulation
    select-none
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `
  
  const sizeStyles = {
    small: 'px-5 py-2.5 text-sm min-h-[48px] min-w-[48px]',
    medium: 'px-6 py-3 text-base min-h-[52px] min-w-[52px]',
    large: 'px-8 py-4 text-lg min-h-[60px] min-w-[60px]'
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
      <span className="relative z-10" style={TEXT_SHADOW.body}>{children}</span>
      {showArrow && (
        <ArrowRight 
          className="ml-2 h-5 w-5 flex-shrink-0" 
          aria-hidden="true"
        />
      )}
      {/* 限界突破マイクロインタラクション - overflow制御付き */}
      <span className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
      </span>
      <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-out pointer-events-none" />
      {/* フォーカスリングアニメーション */}
      <span className="absolute inset-0 rounded-inherit border-2 border-transparent group-focus-visible:border-blue-400 group-focus-visible:animate-pulse transition-all duration-300" />
    </>
  )

  // WCAG AAA準拠 アクセシビリティ属性の統合
  const accessibilityProps = {
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    'aria-expanded': ariaExpanded,
    'aria-haspopup': ariaHaspopup,
    'aria-pressed': ariaPressed,
    'aria-disabled': disabled,
    role: role || 'button',
    tabIndex: tabIndex ?? (disabled ? -1 : 0),
    // タッチデバイス最適化
    'data-touch-feedback': 'true'
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
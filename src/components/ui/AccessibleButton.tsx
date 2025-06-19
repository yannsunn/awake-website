// 🚀 WCAG 2.1 AAA準拠 アクセシブルボタンコンポーネント
'use client'

import { memo, forwardRef, KeyboardEvent, ReactNode } from 'react'
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
  tabIndex
}, ref) {
  // 🛡️ 完全型安全保証
  const validVariant = (variant && variant in BUTTON_STYLES) ? variant : 'primary'
  const baseStyles = BUTTON_STYLES[validVariant as keyof typeof BUTTON_STYLES]
  
  // アクセシビリティ強化スタイル
  const accessibilityStyles = `
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    focus:ring-offset-white focus:ring-opacity-50
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    transition-all duration-200 ease-in-out
    text-center font-medium relative overflow-hidden
    hover:shadow-lg active:transform active:scale-95
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `
  
  const styles = `${baseStyles} ${accessibilityStyles} ${className}`

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
          className="ml-2 h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" 
          aria-hidden="true"
        />
      )}
      
      {/* ホバーエフェクト */}
      <span 
        className="absolute inset-0 bg-white opacity-0 transition-opacity duration-200 group-hover:opacity-10"
        aria-hidden="true"
      />
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

// スクリーンリーダー用の視覚的に隠されたテキスト
export const VisuallyHidden = memo(function VisuallyHidden({ 
  children 
}: { 
  children: ReactNode 
}) {
  return (
    <span className="sr-only">
      {children}
    </span>
  )
})

// フォーカストラップ用のヘルパー
export const useFocusTrap = (isActive: boolean) => {
  const firstFocusableRef = useRef<HTMLElement>(null)
  const lastFocusableRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isActive) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusableRef.current) {
          e.preventDefault()
          lastFocusableRef.current?.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusableRef.current) {
          e.preventDefault()
          firstFocusableRef.current?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown as any)
    return () => document.removeEventListener('keydown', handleKeyDown as any)
  }, [isActive])

  return { firstFocusableRef, lastFocusableRef }
}
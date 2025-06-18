import { memo } from 'react'
import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { BUTTON_STYLES } from '@/lib/constants'
import type { ButtonVariant } from '@/lib/types'

interface ButtonProps {
  href?: string
  variant?: ButtonVariant
  icon?: LucideIcon
  showArrow?: boolean
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  target?: string
  rel?: string
}

const Button = memo(function Button({ 
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
  rel
}: ButtonProps) {
  // 🛡️ 完全型安全保証: あらゆるエッジケースに対応する防御的実装
  const validVariant = (variant && variant in BUTTON_STYLES) ? variant : 'primary'
  const baseStyles = BUTTON_STYLES[validVariant as keyof typeof BUTTON_STYLES]
  const styles = `${baseStyles} inline-flex items-center justify-center ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  const content = (
    <>
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
      {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </>
  )

  if (href) {
    return (
      <Link 
        href={href} 
        className={styles}
        target={target}
        rel={rel}
      >
        {content}
      </Link>
    )
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {content}
    </button>
  )
})

export default Button
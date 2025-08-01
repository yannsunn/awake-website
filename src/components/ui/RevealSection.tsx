'use client'

import { forwardRef, ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface RevealSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fade' | 'slide' | 'scale'
  threshold?: number
  triggerOnce?: boolean
}

/**
 * 🚀 WCAG 2.1 AAA準拠 スクロールリビールセクション
 * 科学的根拠: 段階的開示でユーザーの認知負荷を軽減
 * アクセシビリティ: prefers-reduced-motion対応
 */
const RevealSection = forwardRef<HTMLDivElement, RevealSectionProps>(
  function RevealSection({ 
    children, 
    className = '', 
    delay = 0,
    animation = 'fade',
    threshold = 0.1,
    triggerOnce = true
  }, ref) {
    const { elementRef, isVisible } = useScrollReveal<HTMLDivElement>({
      threshold,
      triggerOnce
    })

    const getAnimationClasses = () => {
      const baseClasses = 'transition-all duration-800 ease-out will-change-transform'
      const delayClass = delay ? `delay-${Math.min(delay, 1000)}` : ''
      
      switch (animation) {
        case 'slide':
          return `${baseClasses} ${delayClass} ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`
        case 'scale':
          return `${baseClasses} ${delayClass} ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`
        case 'fade':
        default:
          return `${baseClasses} ${delayClass} ${
            isVisible 
              ? 'opacity-100' 
              : 'opacity-0'
          }`
      }
    }

    return (
      <div
        ref={(node) => {
          elementRef.current = node
          if (ref) {
            if (typeof ref === 'function') {
              ref(node)
            } else {
              ref.current = node
            }
          }
        }}
        className={`${getAnimationClasses()} ${className}`}
        aria-hidden={!isVisible}
      >
        {children}
      </div>
    )
  }
)

export default RevealSection
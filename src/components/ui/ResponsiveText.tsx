import React from 'react'
import { cn } from '@/lib/utils'

interface ResponsiveTextProps {
  children: React.ReactNode
  breakpoint?: 'sm' | 'md' | 'lg'
  className?: string
  as?: 'span' | 'div' | 'p'
}

/**
 * ResponsiveText - モバイルで適切に改行されるテキストコンポーネント
 * 
 * @param children - 表示するテキスト内容
 * @param breakpoint - 改行を解除するブレークポイント（デフォルト: md）
 * @param className - 追加のCSSクラス
 * @param as - レンダリングする要素タイプ（デフォルト: span）
 */
export function ResponsiveText({ 
  children, 
  breakpoint = 'md',
  className,
  as: Component = 'span'
}: ResponsiveTextProps) {
  const breakpointClasses = {
    sm: 'block sm:inline',
    md: 'block md:inline',
    lg: 'block lg:inline'
  }

  return (
    <Component 
      className={cn(
        breakpointClasses[breakpoint],
        'break-words',
        className
      )}
    >
      {children}
    </Component>
  )
}

interface ResponsiveBreakProps {
  breakpoint?: 'sm' | 'md' | 'lg'
}

/**
 * ResponsiveBreak - レスポンシブな改行を挿入するコンポーネント
 * モバイルでは改行、指定したブレークポイント以上では改行しない
 */
export function ResponsiveBreak({ breakpoint = 'md' }: ResponsiveBreakProps) {
  const breakClasses = {
    sm: 'block sm:hidden',
    md: 'block md:hidden',
    lg: 'block lg:hidden'
  }

  return <span className={breakClasses[breakpoint]} />
}
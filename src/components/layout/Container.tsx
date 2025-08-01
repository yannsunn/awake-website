'use client'

import { memo, ReactNode } from 'react'
import { SPACING } from '@/lib/styles'

interface ContainerProps {
  children: ReactNode
  size?: 'default' | 'narrow' | 'wide' | 'full'
  padding?: 'default' | 'none' | 'large'
  className?: string
}

// 🚀 統一されたコンテナコンポーネント
const Container = memo(function Container({
  children,
  size = 'default',
  padding = 'default',
  className = ''
}: ContainerProps) {
  const sizeClasses = {
    default: 'w-full', // max-w-7xlを削除してフル幅に
    narrow: 'max-w-4xl',
    wide: 'w-full',
    full: 'w-full'
  }
  
  const paddingClasses = {
    default: 'px-4 sm:px-6 lg:px-8',
    none: '',
    large: 'px-8 sm:px-12 lg:px-16'
  }
  
  return (
    <div className={`${sizeClasses[size]} mx-auto ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
})

export default Container
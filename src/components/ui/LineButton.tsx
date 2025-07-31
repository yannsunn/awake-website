'use client'

import { memo, useState, useEffect } from 'react'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'

interface LineButtonProps {
  className?: string
  showIcon?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'filled' | 'outline'
}

// 🚀 統一されたLINEボタンコンポーネント
const LineButton = memo(function LineButton({ 
  className = '',
  showIcon = true,
  size = 'medium',
  variant = 'filled'
}: LineButtonProps) {
  const [isMounted, setIsMounted] = useState(false)
  const LINE_URL = COMPANY_DATA.contact.line ? 'https://lin.ee/fIaLAjy' : '#'
  
  // クライアントサイドでのみレンダリング
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  const sizeClasses = {
    small: 'px-6 py-3 text-sm min-h-[48px]',
    medium: 'px-8 py-4 text-base min-h-[56px]',
    large: 'px-10 py-5 text-lg min-h-[64px]'
  }
  
  const variantClasses = {
    filled: 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-2xl hover:shadow-3xl border-2 border-green-700 font-bold',
    outline: 'border-3 border-green-600 text-green-700 hover:bg-green-50/80 hover:border-green-700 shadow-lg hover:shadow-xl font-bold'
  }
  
  // SSRとのハイドレーション問題を回避
  if (!isMounted) {
    return null
  }
  
  const baseClasses = `
    inline-flex items-center justify-center
    font-bold rounded-xl transition-all duration-300
    focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2
    line-button-smooth transform hover:scale-105 active:scale-98
    text-shadow-md ultra-smooth glow-on-hover
    relative overflow-hidden
  `
  
  return (
    <Link
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center">
        {showIcon && <MessageCircle className="mr-2 h-5 w-5" />}
        LINEで相談する
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 hover:opacity-20 transition-opacity duration-300" />
    </Link>
  )
})

export default LineButton
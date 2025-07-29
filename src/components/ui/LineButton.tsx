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
  const [isVisible, setIsVisible] = useState(false)
  const LINE_URL = COMPANY_DATA.contact.line ? 'https://lin.ee/fIaLAjy' : '#'
  
  // 緑色フラッシュ防止のため遅延表示
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])
  
  const sizeClasses = {
    small: 'px-5 py-2.5 text-sm min-h-[44px]',
    medium: 'px-8 py-4 text-base min-h-[52px]',
    large: 'px-10 py-5 text-lg min-h-[60px]'
  }
  
  const variantClasses = {
    filled: 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-2xl hover:shadow-3xl border-2 border-green-700 font-bold',
    outline: 'border-3 border-green-600 text-green-700 hover:bg-green-50/80 hover:border-green-700 shadow-lg hover:shadow-xl font-bold'
  }
  
  // 初期表示時の透明度制御
  const visibilityClass = isVisible ? 'opacity-100' : 'opacity-0'
  
  const baseClasses = `
    inline-flex items-center justify-center
    font-bold rounded-xl transition-all duration-300
    focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2
    line-button-smooth transform hover:scale-105 active:scale-95
    text-shadow-md
  `
  
  return (
    <Link
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${visibilityClass} ${className}`}
    >
      {showIcon && <MessageCircle className="mr-2 h-5 w-5" />}
      LINEで相談する
    </Link>
  )
})

export default LineButton
'use client'

import { memo } from 'react'
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
  const LINE_URL = COMPANY_DATA.contact.line ? 'https://lin.ee/fIaLAjy' : '#'
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-8 py-4',
    large: 'px-10 py-5 text-lg'
  }
  
  const variantClasses = {
    filled: 'bg-green-600 text-white hover:bg-green-700 shadow-lg',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50'
  }
  
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-lg transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
  `
  
  return (
    <Link
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {showIcon && <MessageCircle className="mr-2 h-5 w-5" />}
      LINEで相談する
    </Link>
  )
})

export default LineButton
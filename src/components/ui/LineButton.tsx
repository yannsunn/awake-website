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

// シンプルで確実なLINEボタンコンポーネント
const LineButton = memo(function LineButton({ 
  className = '',
  showIcon = true,
  size = 'medium',
  variant = 'filled'
}: LineButtonProps) {
  const LINE_URL = COMPANY_DATA.contact.line ? 'https://lin.ee/fIaLAjy' : '#'
  
  const sizeClasses = {
    small: 'px-6 py-3 text-sm min-h-[48px]',
    medium: 'px-8 py-4 text-base min-h-[56px]',
    large: 'px-10 py-5 text-lg min-h-[64px]'
  }
  
  const variantClasses = {
    filled: 'bg-green-600 text-white hover:bg-green-700 border-2 border-green-600 hover:border-green-700',
    outline: 'bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-50 hover:border-green-700 hover:text-green-700'
  }
  
  const baseClasses = `
    inline-flex items-center justify-center
    font-bold rounded-xl transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
    transform hover:scale-105 active:scale-95
    relative overflow-hidden shadow-lg hover:shadow-xl
  `
  
  return (
    <Link
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {showIcon && <MessageCircle className="mr-2 h-5 w-5 flex-shrink-0" />}
      <span>LINEで相談する</span>
    </Link>
  )
})

export default LineButton
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

// LINEボタンコンポーネント
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
    filled: 'bg-gray-800 text-white hover:bg-gray-900 border-2 border-transparent',
    outline: 'bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-100'
  }
  
  const baseClasses = `
    inline-flex items-center justify-center
    font-bold rounded-xl transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2
    relative overflow-hidden shadow-lg hover:shadow-xl
  `
  
  return (
    <Link
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label="LINEで相談する - 新しいウィンドウで開きます"
    >
      {showIcon && <MessageCircle className="mr-2 h-5 w-5 flex-shrink-0" aria-hidden="true" />}
      <span>LINEで相談する</span>
    </Link>
  )
})

export default LineButton
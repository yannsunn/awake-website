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
    small: 'px-6 py-3 text-sm min-h-[48px] min-w-[48px]',
    medium: 'px-8 py-4 text-base min-h-[56px] min-w-[56px]',
    large: 'px-10 py-5 text-lg min-h-[64px] min-w-[64px]'
  }
  
  const variantClasses = {
    filled: 'bg-green-600 text-white hover:bg-green-700 border-2 border-transparent',
    outline: 'bg-white border-2 border-green-600 text-green-600 hover:bg-green-50'
  }
  
  const baseClasses = `
    inline-flex items-center justify-center
    font-bold rounded-xl transition-all duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-green-500 focus-visible:ring-offset-3
    relative overflow-hidden shadow-lg hover:shadow-xl
    hover:scale-[1.02] active:scale-[0.98]
    will-change-transform touch-manipulation select-none
  `
  
  return (
    <Link
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label="LINEで相談する - 新しいウィンドウで開きます"
      role="button"
    >
      {showIcon && <MessageCircle className="mr-2 h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />}
      <span>LINEで相談する</span>
      {/* マイクロインタラクションエフェクト */}
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
    </Link>
  )
})

export default LineButton
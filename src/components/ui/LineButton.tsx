'use client'

import { memo, useEffect, useState } from 'react'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'

interface LineButtonProps {
  className?: string
  showIcon?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'filled' | 'outline'
}

// 🧠 ニューロデザイン最適化LINEボタン
const LineButton = memo(function LineButton({ 
  className = '',
  showIcon = true,
  size = 'medium',
  variant = 'filled'
}: LineButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const LINE_URL = COMPANY_DATA.contact.line ? 'https://lin.ee/fIaLAjy' : '#'
  
  useEffect(() => {
    // 科学的根拠: 遅延レンダリングで視覚的ちらつき防止
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])
  
  const sizeClasses = {
    small: 'px-6 py-3 text-sm min-h-[48px]',
    medium: 'px-8 py-4 text-base min-h-[56px]',
    large: 'px-10 py-5 text-lg min-h-[64px]'
  }
  
  // 科学的根拠: LINEブランドカラーは#00B900をベースに最適化
  const variantClasses = {
    filled: 'bg-[#00B900] text-white hover:bg-[#009900] border-2 border-transparent',
    outline: 'bg-white border-2 border-[#00B900] text-[#00B900] hover:bg-[#00B900] hover:text-white'
  }
  
  const baseClasses = `
    inline-flex items-center justify-center
    font-bold rounded-xl transition-all duration-250
    focus:outline-none focus:ring-2 focus:ring-[#00B900] focus:ring-offset-2
    neuro-hover relative overflow-hidden
    shadow-md hover:shadow-lg
  `
  
  if (!isVisible) {
    return <div className={`${sizeClasses[size]} rounded-xl bg-gray-100 animate-pulse`} />
  }
  
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
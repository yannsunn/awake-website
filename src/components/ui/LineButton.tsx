'use client'

import { memo } from 'react'
import { MessageCircle } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import UltraButton from '@/components/ui/UltraButton'

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
  
  // UltraButtonのsizeにマッピング
  const ultraSize = size === 'small' ? 'sm' : size === 'large' ? 'lg' : 'md'

  // サイズ別の最小幅を強制（アイコン+テキストが確実に1行になる幅）
  const minWidthClass = size === 'small' ? '!min-w-[200px]' : size === 'large' ? '!min-w-[280px]' : '!min-w-[240px]'

  // LINE専用のスタイリング
  const lineStyles = variant === 'filled' ?
    'bg-green-600 text-white hover:bg-green-700 border-2 border-transparent focus:ring-green-500' :
    'bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500'

  return (
    <UltraButton
      href={LINE_URL}
      variant="primary"
      size={ultraSize}
      className={`${lineStyles} ${minWidthClass} ${className}`}
    >
      {showIcon && <MessageCircle className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />}
      <span>LINEで相談する</span>
    </UltraButton>
  )
})

export default LineButton
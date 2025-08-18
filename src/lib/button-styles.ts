// ボタンスタイルの統一設定
export const buttonStyles = {
  // ボタン幅のレスポンシブ設定
  width: {
    // モバイルでフル幅、タブレット以上で自動幅
    responsive: 'w-full sm:w-auto',
    // 常にフル幅
    full: 'w-full',
    // 常に自動幅
    auto: 'w-auto',
    // 固定幅オプション
    fixed: {
      sm: 'w-32',
      md: 'w-40',
      lg: 'w-48',
      xl: 'w-56'
    }
  },
  
  // ボタンサイズの統一
  size: {
    sm: 'px-4 py-2 text-sm min-h-[40px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[48px]',
    xl: 'px-10 py-5 text-xl min-h-[56px]'
  },
  
  // レスポンシブサイズ
  responsiveSize: {
    default: 'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base min-h-[44px] sm:min-h-[48px]',
    large: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-h-[48px] sm:min-h-[56px]'
  },
  
  // ボタンバリアント
  variant: {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'border-2 border-current hover:bg-gray-100 dark:hover:bg-gray-800',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800'
  },
  
  // 共通スタイル
  base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
}

// ボタンスタイルを組み合わせるヘルパー関数
export function getButtonClasses(options: {
  width?: keyof typeof buttonStyles.width | string
  size?: keyof typeof buttonStyles.size
  variant?: keyof typeof buttonStyles.variant
  responsive?: boolean
  className?: string
}) {
  const {
    width = 'responsive',
    size = 'md',
    variant = 'primary',
    responsive = true,
    className = ''
  } = options
  
  const widthClass = typeof width === 'string' && buttonStyles.width[width as keyof typeof buttonStyles.width]
    ? buttonStyles.width[width as keyof typeof buttonStyles.width]
    : width
  
  const sizeClass = responsive 
    ? buttonStyles.responsiveSize.default 
    : buttonStyles.size[size]
  
  return `${buttonStyles.base} ${widthClass} ${sizeClass} ${buttonStyles.variant[variant]} ${className}`.trim()
}
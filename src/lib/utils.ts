// 🚀 Utility Functions - 限界突破ヘルパー関数集
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind CSS クラス結合ユーティリティ
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 🚀 パフォーマンス最適化ユーティリティ
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// 🚀 アクセシビリティ支援ユーティリティ
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  if (typeof window === 'undefined') return

  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message

  document.body.appendChild(announcement)

  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// 🚀 SEO & Meta最適化ユーティリティ
export const generatePageTitle = (pageTitle: string, siteName: string = '株式会社Awake') => {
  return `${pageTitle} | ${siteName}`
}

export const truncateText = (text: string, maxLength: number = 160) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

// 🚀 フォーマット関数
export const formatPrice = (price: number, currency: string = 'JPY') => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: currency,
  }).format(price)
}

export const formatDate = (date: string | Date, format: 'short' | 'long' = 'short') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  if (format === 'long') {
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    }).format(dateObj)
  }
  
  return new Intl.DateTimeFormat('ja-JP').format(dateObj)
}

// 🚀 バリデーション関数
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[\d\-\(\)\+\s]{10,}$/
  return phoneRegex.test(phone)
}

// 🚀 URLユーティリティ
export const createAbsoluteUrl = (path: string, baseUrl: string = 'https://awakeinc.co.jp') => {
  return new URL(path, baseUrl).toString()
}

export const getRouteTitle = (pathname: string): string => {
  const routeTitles: Record<string, string> = {
    '/': 'ホーム',
    '/about': '会社概要',
    '/services/web': 'ホームページ制作',
    '/services/ai': 'AIコンサルティング', 
    '/services/ec': 'Amazon代理店サービス',
    '/faq': 'よくある質問',
    '/legal/tokusho': '特定商取引法に基づく表記',
    '/legal/privacy-policy': 'プライバシーポリシー',
    '/legal/terms': '利用規約'
  }
  
  return routeTitles[pathname] || 'ページ'
}

// 🚀 パフォーマンス測定
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window === 'undefined') return fn()
  
  const start = performance.now()
  const result = fn()
  const end = performance.now()
  
  console.log(`Performance ${name}: ${end - start} milliseconds`)
  return result
}

// 🚀 ローカルストレージユーティリティ
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined') return null
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  },
  
  setItem: (key: string, value: string): boolean => {
    if (typeof window === 'undefined') return false
    try {
      localStorage.setItem(key, value)
      return true
    } catch {
      return false
    }
  },
  
  removeItem: (key: string): boolean => {
    if (typeof window === 'undefined') return false
    try {
      localStorage.removeItem(key)
      return true
    } catch {
      return false
    }
  }
}

// 🚀 デバイス検出
export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  if (typeof window === 'undefined') return 'desktop'
  
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

// 🚀 スクロール関連ユーティリティ
export const scrollToElement = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId)
  if (!element) return
  
  const top = element.offsetTop - offset
  window.scrollTo({
    top,
    behavior: 'smooth'
  })
}

export const isElementInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// 🚀 エラーハンドリング
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export const handleAsyncError = async <T>(
  promise: Promise<T>
): Promise<[T | null, Error | null]> => {
  try {
    const data = await promise
    return [data, null]
  } catch (error) {
    return [null, error as Error]
  }
}
# 🧩 共有コンポーネント開発チーム

## 担当範囲
- **レイアウトコンポーネント** - Header、Footer、Navigation
- **UIコンポーネント** - ボタン、カード、フォーム要素
- **セクションコンポーネント** - Hero、Features、Services、Contact
- **ユーティリティ** - 共通関数、ヘルパー、Hooks
- **共通スタイル** - Tailwind設定、アニメーション定義

## 🚀 開発環境

### セットアップ
```bash
cd nextjs-workspace/components-shared
npm install
npm run dev        # 開発サーバー起動 (http://localhost:3002)
npm run storybook  # Storybook起動 (http://localhost:6006)
npm run build      # ライブラリビルド
npm run test       # Jest + React Testing Library
```

### Storybook活用
```bash
npm run storybook     # コンポーネント開発環境
npm run build-storybook  # 静的Storybookビルド
npm run chromatic     # ビジュアルテスト
```

## 📁 ファイル構造

```
components-shared/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        # ヘッダーコンポーネント
│   │   │   ├── Footer.tsx        # フッターコンポーネント
│   │   │   ├── Navigation.tsx    # ナビゲーション
│   │   │   └── Breadcrumb.tsx    # パンくずリスト
│   │   ├── ui/
│   │   │   ├── Button.tsx        # ボタンコンポーネント
│   │   │   ├── Card.tsx          # カードコンポーネント
│   │   │   ├── Modal.tsx         # モーダル
│   │   │   ├── Form.tsx          # フォーム要素
│   │   │   └── Loading.tsx       # ローディング
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx   # ヒーローセクション
│   │   │   ├── FeaturesSection.tsx # 機能紹介
│   │   │   ├── ServicesSection.tsx # サービス一覧
│   │   │   ├── ContactSection.tsx  # お問い合わせ
│   │   │   └── TestimonialsSection.tsx # お客様の声
│   │   └── forms/
│   │       ├── ContactForm.tsx   # お問い合わせフォーム
│   │       ├── ServiceForm.tsx   # サービス申込フォーム
│   │       └── NewsletterForm.tsx # メルマガ登録
│   ├── lib/
│   │   ├── utils.ts             # ユーティリティ関数
│   │   ├── hooks/
│   │   │   ├── useScroll.ts     # スクロール監視
│   │   │   ├── useForm.ts       # フォーム管理
│   │   │   └── useLocalStorage.ts # ローカルストレージ
│   │   └── constants/
│   │       ├── colors.ts        # カラーパレット
│   │       └── animations.ts    # アニメーション定義
│   ├── stories/                 # Storybook用ストーリー
│   ├── __tests__/              # テストファイル
│   └── globals.css             # グローバルスタイル
├── .storybook/                 # Storybook設定
├── package.json
├── tailwind.config.ts          # Tailwind設定
└── tsconfig.json
```

## 🎨 デザインシステム

### カラーパレット
```typescript
// lib/constants/colors.ts
export const colors = {
  primary: {
    50: '#f0f0ff',
    100: '#e0e7ff',
    500: '#6366f1',  // メインの紫
    600: '#5856eb',
    900: '#4f46e5'
  },
  gray: {
    50: '#f9fafb',   // 背景
    100: '#f3f4f6',
    500: '#6b7280',
    900: '#111827'   // テキスト
  },
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444'
}
```

### タイポグラフィ
```typescript
// tailwind.config.ts
fontSize: {
  'xs': '0.75rem',     // 12px
  'sm': '0.875rem',    // 14px
  'base': '1rem',      // 16px
  'lg': '1.125rem',    // 18px
  'xl': '1.25rem',     // 20px
  '2xl': '1.5rem',     // 24px
  '3xl': '1.875rem',   // 30px
  '4xl': '2.25rem',    // 36px
  '5xl': '3rem',       // 48px
}
```

## 🧩 主要コンポーネント

### 1. ヘッダーコンポーネント
```tsx
// components/layout/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`bg-white shadow-md ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Awake" className="h-8 w-auto" />
          </Link>
          
          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-primary-500">
              サービス
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-500">
              会社概要
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-500">
              お問い合わせ
            </Link>
          </nav>

          {/* CTA */}
          <Button variant="primary" className="hidden md:block">
            無料相談
          </Button>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/services">サービス</Link>
              <Link href="/about">会社概要</Link>
              <Link href="/contact">お問い合わせ</Link>
              <Button variant="primary" className="w-full">
                無料相談
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
```

### 2. ボタンコンポーネント
```tsx
// components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
    
    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
      secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
      outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500',
      ghost: 'text-primary-500 hover:bg-primary-50 focus:ring-primary-500'
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export { Button }
```

### 3. ヒーローセクション
```tsx
// components/sections/HeroSection.tsx
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  image: string
  imageAlt: string
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image,
  imageAlt
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="primary"
            size="lg"
            className="bg-white text-primary-500 hover:bg-gray-100"
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
```

### 4. カードコンポーネント
```tsx
// components/ui/Card.tsx
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = false, onClick }: CardProps) {
  const Component = motion.div
  
  return (
    <Component
      className={cn(
        'bg-white rounded-lg shadow-md p-6',
        hover && 'cursor-pointer',
        className
      )}
      whileHover={hover ? { y: -5, shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </Component>
  )
}
```

## 📱 レスポンシブ対応

### ブレークポイント活用
```tsx
// レスポンシブグリッド例
<div className="
  grid 
  grid-cols-1      // モバイル: 1列
  sm:grid-cols-2   // 640px+: 2列
  lg:grid-cols-3   // 1024px+: 3列
  xl:grid-cols-4   // 1280px+: 4列
  gap-6
">
  {items.map(item => (
    <Card key={item.id}>
      {item.content}
    </Card>
  ))}
</div>
```

### モバイル専用コンポーネント
```tsx
// モバイルとデスクトップで異なるレイアウト
<>
  {/* モバイル版 */}
  <div className="block md:hidden">
    <MobileNavigation />
  </div>
  
  {/* デスクトップ版 */}
  <div className="hidden md:block">
    <DesktopNavigation />
  </div>
</>
```

## 🎭 アニメーション

### カスタムアニメーション
```typescript
// lib/constants/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}
```

### 使用例
```tsx
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/constants/animations'

<motion.div
  variants={staggerContainer}
  initial="initial"
  animate="animate"
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      variants={fadeInUp}
    >
      <Card>{item.content}</Card>
    </motion.div>
  ))}
</motion.div>
```

## 🧪 テスト

### ユニットテスト例
```typescript
// __tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>クリック</Button>)
    expect(screen.getByText('クリック')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>クリック</Button>)
    
    fireEvent.click(screen.getByText('クリック'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies variant styles correctly', () => {
    render(<Button variant="outline">アウトライン</Button>)
    const button = screen.getByText('アウトライン')
    expect(button).toHaveClass('border-2', 'border-primary-500')
  })
})
```

### Storybook例
```typescript
// stories/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'プライマリボタン',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'セカンダリボタン',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'アウトラインボタン',
  },
}
```

## 🔧 ユーティリティ関数

### 共通関数
```typescript
// lib/utils.ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwindクラス結合
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 文字列フォーマット
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY'
  }).format(price)
}

// 日付フォーマット
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

// メールバリデーション
export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}
```

### カスタムHooks
```typescript
// lib/hooks/useForm.ts
import { useState } from 'react'

interface UseFormProps<T> {
  initialValues: T
  onSubmit: (values: T) => void
  validate?: (values: T) => Partial<T>
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validate
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<T>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }))
    // エラーをクリア
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async () => {
    if (validate) {
      const validationErrors = validate(values)
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }
    }

    setIsSubmitting(true)
    try {
      await onSubmit(values)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  }
}
```

## 🤝 他チームとの連携

### フロントエンドチーム
- **提供**: 全UIコンポーネント、レイアウト部品
- **受け取り**: グローバルスタイル要件、デザインガイドライン
- **調整**: コンポーネントAPI、プロパティ仕様

### ページチーム
- **提供**: セクションコンポーネント、フォーム要素
- **受け取り**: ページ固有の機能要件
- **調整**: コンテンツ表示ロジック、データフロー

### 法務・インフラチーム
- **連携**: ビルド設定、パッケージ管理
- **確認**: セキュリティ要件、パフォーマンス最適化

## 📋 開発ガイドライン

1. **再利用性**: 可能な限り汎用的なコンポーネント設計
2. **型安全性**: TypeScriptの型定義を厳密に行う
3. **テスタビリティ**: すべてのコンポーネントにテストを記述
4. **アクセシビリティ**: WAI-ARIA準拠、キーボード操作対応
5. **パフォーマンス**: 不要な再レンダリング防止、遅延読み込み活用
6. **ドキュメント**: Storybookで使用例を明確に記載
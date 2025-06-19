// 🚀 限界突破ページテンプレート - SEO & アクセシビリティ最適化
'use client'

import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import ErrorBoundary from '../ErrorBoundary'
import { createBreadcrumbSchema } from '@/lib/enhanced-schema'
import { COMPANY_DATA } from '@/lib/company-data'

interface PageTemplateProps {
  children: ReactNode
  title?: string
  description?: string
  breadcrumbs?: Array<{ name: string; url: string }>
  className?: string
  skipToMainId?: string
  showErrorDetails?: boolean
}

const PageTemplate = ({
  children,
  title,
  description,
  breadcrumbs,
  className = '',
  skipToMainId = 'main-content',
  showErrorDetails = false
}: PageTemplateProps) => {
  const pathname = usePathname()

  // ページ読み込み時のアクセシビリティ通知
  useEffect(() => {
    if (title) {
      // スクリーンリーダーに新しいページが読み込まれたことを通知
      const announcement = `${title}ページが読み込まれました`
      const ariaLiveRegion = document.createElement('div')
      ariaLiveRegion.setAttribute('aria-live', 'polite')
      ariaLiveRegion.setAttribute('aria-atomic', 'true')
      ariaLiveRegion.className = 'sr-only'
      ariaLiveRegion.textContent = announcement
      
      document.body.appendChild(ariaLiveRegion)
      
      // アナウンス後にクリーンアップ
      setTimeout(() => {
        document.body.removeChild(ariaLiveRegion)
      }, 1000)
    }
  }, [title, pathname])

  // パンくずリスト構造化データの生成
  const breadcrumbSchema = breadcrumbs ? createBreadcrumbSchema(breadcrumbs) : null

  return (
    <ErrorBoundary showDetails={showErrorDetails}>
      {/* スキップリンク */}
      <a
        href={`#${skipToMainId}`}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 font-medium"
      >
        メインコンテンツにスキップ
      </a>

      {/* パンくずリスト構造化データ */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      )}

      <div className={`min-h-screen flex flex-col ${className}`}>
        <Header />
        
        {/* パンくずリストナビゲーション */}
        {breadcrumbs && breadcrumbs.length > 1 && (
          <nav
            className="bg-gray-50 border-b border-gray-200"
            aria-label="パンくずリスト"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <ol className="flex items-center space-x-2 text-sm">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <svg
                        className="w-4 h-4 text-gray-400 mx-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {index === breadcrumbs.length - 1 ? (
                      <span
                        className="text-gray-500"
                        aria-current="page"
                      >
                        {crumb.name}
                      </span>
                    ) : (
                      <a
                        href={crumb.url}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {crumb.name}
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        )}

        {/* メインコンテンツ */}
        <main
          role="main"
          id={skipToMainId}
          className="flex-1 pt-16"
          tabIndex={-1}
        >
          {/* ページタイトルのスクリーンリーダー向け */}
          {title && (
            <h1 className="sr-only">
              {title} - {COMPANY_DATA.basic.name}
            </h1>
          )}
          
          {/* ページ説明のスクリーンリーダー向け */}
          {description && (
            <p className="sr-only">
              {description}
            </p>
          )}

          {children}
        </main>

        <Footer />
      </div>

      {/* ライブリージョン（動的コンテンツ変更の通知用） */}
      <div
        id="aria-live-region"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
      
      {/* 緊急通知用 */}
      <div
        id="aria-live-assertive"
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
      />
    </ErrorBoundary>
  )
}

export default PageTemplate

// 🚀 コンテンツセクション用ラッパー
export const ContentSection = ({
  children,
  className = '',
  as: Component = 'section',
  ariaLabel,
  ariaLabelledBy,
  id
}: {
  children: ReactNode
  className?: string
  as?: 'section' | 'article' | 'aside' | 'div'
  ariaLabel?: string
  ariaLabelledBy?: string
  id?: string
}) => {
  return (
    <Component
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${className}`}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Component>
  )
}

// 🚀 ページヘッダー用コンポーネント
export const PageHeader = ({
  title,
  subtitle,
  children,
  backgroundImage,
  className = ''
}: {
  title: string
  subtitle?: string
  children?: ReactNode
  backgroundImage?: string
  className?: string
}) => {
  return (
    <header
      className={`relative py-16 sm:py-24 lg:py-32 ${className}`}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ${
          backgroundImage ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-xl sm:text-2xl leading-relaxed ${
            backgroundImage ? 'text-gray-100' : 'text-gray-600'
          }`}>
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </header>
  )
}
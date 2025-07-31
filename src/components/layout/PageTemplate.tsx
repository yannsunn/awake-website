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

  // アクセシビリティ機能を簡素化

  // パンくずリスト構造化データの生成
  const breadcrumbSchema = breadcrumbs ? createBreadcrumbSchema(breadcrumbs) : null

  return (
    <ErrorBoundary showDetails={showErrorDetails}>
      {/* スキップリンクを完全に非表示に */}

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
            className="bg-transparent-overlay border-b border-gray-200"
            aria-label="パンくずリスト"
          >
            <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
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
                        className="text-blue-600 hover:text-blue-800"
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
          {/* メインコンテンツ */}

          {children}
        </main>

        <Footer />
      </div>

      {/* シンプルテンプレート */}
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
      <div className="w-full px-4 sm:px-6 lg:px-8">
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
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
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
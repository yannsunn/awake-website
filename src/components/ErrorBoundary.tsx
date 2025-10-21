// 🚀 限界突破エラーハンドリング - Error Boundary Implementation
'use client'

import { Component, ReactNode, ErrorInfo, Suspense } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'
import { logger } from '@/lib/logger'
import UltraButton from './ui/UltraButton'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error | undefined
  errorInfo?: ErrorInfo | undefined
  errorId?: string | undefined
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  showDetails?: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeoutId: number | null = null

  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { 
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      errorId: undefined
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // エラーIDを生成（デバッグ用）
    const errorId = `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    return { 
      hasError: true, 
      error,
      errorId
    }
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // エラー情報をstate に保存
    this.setState({ errorInfo })

    // コンソールにエラーログ出力
    logger.error('🚨 Error Boundary Caught an Error')
    logger.error('Error:', error)
    logger.error('Error Info:', errorInfo)
    logger.error('Error ID:', this.state.errorId)

    // カスタムエラーハンドラ実行
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // エラー監視サービスに送信（実装例）
    this.reportError(error, errorInfo)
  }

  override componentWillUnmount() {
    if (this.retryTimeoutId) {
      window.clearTimeout(this.retryTimeoutId)
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // エラー監視サービス（Sentry、LogRocket等）に送信
    try {
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
        url: typeof window !== 'undefined' ? window.location.href : 'unknown',
        errorId: this.state.errorId
      }

      // 実際のエラー監視サービスへの送信ロジックをここに実装
      if (process.env.NODE_ENV === 'production') {
        // 例: fetch('/api/error-report', { method: 'POST', body: JSON.stringify(errorReport) })
        logger.log('Error report would be sent:', errorReport)
      }
    } catch (reportingError) {
      logger.error('Failed to report error:', reportingError)
    }
  }

  private handleRetry = () => {
    // リトライ機能
    this.setState({ 
      hasError: false, 
      error: undefined, 
      errorInfo: undefined,
      errorId: undefined
    })

    // 少し遅延してページをリロード
    this.retryTimeoutId = window.setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  private handleGoHome = () => {
    window.location.href = '/'
  }

  override render() {
    if (this.state.hasError) {
      // カスタムフォールバックが提供されている場合
      if (this.props.fallback) {
        return this.props.fallback
      }

      // デフォルトエラーUI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              {/* エラーアイコン */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
              </div>

              {/* エラーメッセージ */}
              <h2 className="text-2xl font-bold text-black mb-4">
                申し訳ございません
              </h2>
              <p className="text-black mb-6 leading-relaxed">
                システムエラーが発生しました。<br />
                ページを再読み込みしても問題が解決しない場合は、
                お手数ですがお問い合わせください。
              </p>

              {/* エラー詳細（開発環境のみ） */}
              {this.props.showDetails && process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left mb-6 p-4 bg-gray-50 rounded-lg border border-gray-300">
                  <summary className="font-medium text-black cursor-pointer">
                    技術的な詳細
                  </summary>
                  <div className="mt-3 text-sm text-black">
                    <p><strong>エラーID:</strong> {this.state.errorId}</p>
                    <p><strong>エラー:</strong> {this.state.error.message}</p>
                    {this.state.error.stack && (
                      <pre className="mt-2 text-xs overflow-x-auto whitespace-pre-wrap text-gray-600">
                        {this.state.error.stack}
                      </pre>
                    )}
                  </div>
                </details>
              )}

              {/* アクションボタン */}
              <div className="space-y-3">
                <UltraButton
                  onClick={this.handleRetry}
                  variant="primary"
                  className="w-full flex items-center justify-center"
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  再読み込み
                </UltraButton>
                
                <UltraButton
                  onClick={this.handleGoHome}
                  variant="secondary"
                  className="w-full flex items-center justify-center"
                >
                  <Home className="mr-2 h-5 w-5" />
                  ホームに戻る
                </UltraButton>

                <Link 
                  href="/#contact"
                  className="block text-sm text-blue-600 hover:text-blue-700 underline"
                >
                  お問い合わせ
                </Link>
              </div>

              {/* エラーID表示（サポート用） */}
              {this.state.errorId && (
                <p className="mt-6 text-xs text-gray-600">
                  エラーID: {this.state.errorId}
                </p>
              )}
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

// 🚀 React Suspense用フォールバック
export const SuspenseWrapper = ({ 
  children, 
  fallback 
}: { 
  children: ReactNode
  fallback?: ReactNode 
}) => {
  const defaultFallback = (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-black">読み込み中...</p>
      </div>
    </div>
  )

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  )
}

// 🚀 エラーバウンダリ付きページラッパー
export const PageWrapper = ({ 
  children,
  showErrorDetails = false 
}: { 
  children: ReactNode
  showErrorDetails?: boolean 
}) => {
  return (
    <ErrorBoundary 
      showDetails={showErrorDetails}
      onError={(error, errorInfo) => {
        // カスタムエラーハンドリング
        logger.error('Page Error:', { error, errorInfo })
      }}
    >
      {children}
    </ErrorBoundary>
  )
}
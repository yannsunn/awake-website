// 🚀 限界突破エラーハンドリング - Error Boundary Implementation
'use client'

import { Component, ReactNode, ErrorInfo, Suspense } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'
import AccessibleButton from './ui/AccessibleButton'

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
    console.group('🚨 Error Boundary Caught an Error')
    console.error('Error:', error)
    console.error('Error Info:', errorInfo)
    console.error('Error ID:', this.state.errorId)
    console.groupEnd()

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
        console.log('Error report would be sent:', errorReport)
      }
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError)
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
        <div className="min-h-screen flex items-center justify-center bg-gray-overlay px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white-overlay rounded-2xl p-8 shadow-xl">
              {/* エラーアイコン */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-100/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
              </div>

              {/* エラーメッセージ */}
              <h2 className="text-2xl font-bold text-white mb-4">
                申し訳ございません
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                システムエラーが発生しました。<br />
                ページを再読み込みしても問題が解決しない場合は、
                お手数ですがお問い合わせください。
              </p>

              {/* エラー詳細（開発環境のみ） */}
              {this.props.showDetails && process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left mb-6 p-4 bg-gray-overlay rounded-lg">
                  <summary className="font-medium text-gray-200 cursor-pointer">
                    技術的な詳細
                  </summary>
                  <div className="mt-3 text-sm text-gray-300">
                    <p><strong>エラーID:</strong> {this.state.errorId}</p>
                    <p><strong>エラー:</strong> {this.state.error.message}</p>
                    {this.state.error.stack && (
                      <pre className="mt-2 text-xs overflow-x-auto whitespace-pre-wrap">
                        {this.state.error.stack}
                      </pre>
                    )}
                  </div>
                </details>
              )}

              {/* アクションボタン */}
              <div className="space-y-3">
                <AccessibleButton
                  onClick={this.handleRetry}
                  variant="primary"
                  icon={RefreshCw}
                  className="w-full"
                  ariaLabel="ページを再読み込みしてエラーから復旧"
                >
                  再読み込み
                </AccessibleButton>
                
                <AccessibleButton
                  onClick={this.handleGoHome}
                  variant="secondary"
                  icon={Home}
                  className="w-full"
                  ariaLabel="ホームページに戻る"
                >
                  ホームに戻る
                </AccessibleButton>

                <Link 
                  href="/#contact"
                  className="block text-sm text-gray-300 hover:text-gray-200"
                >
                  お問い合わせ
                </Link>
              </div>

              {/* エラーID表示（サポート用） */}
              {this.state.errorId && (
                <p className="mt-6 text-xs text-gray-300">
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
        <p className="text-gray-300">読み込み中...</p>
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
        console.error('Page Error:', { error, errorInfo })
      }}
    >
      {children}
    </ErrorBoundary>
  )
}
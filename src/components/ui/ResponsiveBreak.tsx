import React from 'react'

/**
 * レスポンシブな改行コンポーネント
 * モバイルでは改行し、デスクトップでは改行しない
 */
export function ResponsiveBreak() {
  return <span className="block md:hidden" aria-hidden="true" />
}

/**
 * テキストの一部をレスポンシブに改行するためのラッパー
 */
interface ResponsiveParagraphProps {
  children: React.ReactNode
  className?: string
}

export function ResponsiveParagraph({ children, className = '' }: ResponsiveParagraphProps) {
  return (
    <p className={`break-words ${className}`}>
      {children}
    </p>
  )
}

/**
 * 文章を自動的にレスポンシブな改行に変換するユーティリティ
 */
export function formatResponsiveText(text: string): React.ReactNode[] {
  return text.split('。').filter(Boolean).map((sentence, index) => (
    <span key={index} className="inline-block">
      {sentence}。
    </span>
  ))
}
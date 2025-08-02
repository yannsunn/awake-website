'use client'

import { memo } from 'react'

// 🚀 全ページ共通の固定背景コンポーネント - 限界突破版
const FixedBackground = memo(function FixedBackground() {
  return (
    <div 
      className="fixed-background" 
      aria-hidden="true"
      style={{
        // 美しいグラデーション背景で即座に表示
        background: `
          radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
          linear-gradient(180deg, #111827 0%, #1f2937 100%)
        `,
        // ブラウザレンダリング最適化
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* 軽量なSVGパターンオーバーレイ */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
})

export default FixedBackground
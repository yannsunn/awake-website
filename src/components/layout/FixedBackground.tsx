'use client'

import { memo } from 'react'

// 🚀 全ページ共通の固定背景コンポーネント - 限界突破版
const FixedBackground = memo(function FixedBackground() {
  return (
    <>
      {/* インラインスタイルで即座に表示 */}
      <div 
        className="fixed-background bg-gray-900" 
        aria-hidden="true"
        style={{
          backgroundImage: `url('/assets/images/hero-background.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          // ブラウザレンダリング最適化
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      />
      {/* 見えない画像で事前読み込み */}
      <img
        src="/assets/images/hero-background.png"
        alt=""
        style={{ display: 'none' }}
        decoding="sync"
        fetchpriority="high"
      />
    </>
  )
})

export default FixedBackground
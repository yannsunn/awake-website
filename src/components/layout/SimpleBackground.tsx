'use client'

import { memo } from 'react'

// 🚀 サイズ調整された背景 - コンテンツと重ならない
const SimpleBackground = memo(function SimpleBackground() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: '80px', // ヘッダーの下から開始
        left: 0,
        right: 0,
        bottom: '60px', // フッターの上で終了
        zIndex: -100,
        backgroundColor: '#111827',
        backgroundImage: 'url(/assets/images/hero-background.png)',
        backgroundSize: 'contain', // 画像全体が見えるように
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.3, // より薄く
      }}
    />
  )
})

export default SimpleBackground
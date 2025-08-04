'use client'

import { memo } from 'react'

// 🚀 究極のシンプル背景 - 限界を超えた最適化
const SimpleBackground = memo(function SimpleBackground() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -100, // ヘッダー・フッターより確実に下
        backgroundColor: '#111827',
        backgroundImage: 'url(/assets/images/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.8,
      }}
    />
  )
})

export default SimpleBackground
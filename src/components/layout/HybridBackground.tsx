'use client'

import { memo } from 'react'

// 🚀 シンプル背景: 即座に表示される最適化版
const HybridBackground = memo(function HybridBackground() {
  return (
    <div 
      className="fixed-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        backgroundColor: '#111827',
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(17, 24, 39, 0.85) 0%,
            rgba(17, 24, 39, 0.9) 50%,
            rgba(17, 24, 39, 0.95) 100%
          ),
          url('/assets/images/hero-background.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    />
  )
})

export default HybridBackground
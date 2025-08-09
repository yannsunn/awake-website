'use client'

import { memo, useEffect } from 'react'

// 🎨 背景画像とグラデーションの組み合わせ
const SimpleBackground = memo(function SimpleBackground() {
  // 画像の事前読み込み
  useEffect(() => {
    const img = new Image()
    img.src = '/assets/images/hero-background.png'
  }, [])

  return (
    <>
      {/* グラデーション背景 */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -100,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #1e293b 50%, #1e1b4b 75%, #0f172a 100%)',
        }}
      />
      
      {/* 背景画像オーバーレイ */}
      <div 
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -99,
          backgroundImage: 'url(/assets/images/hero-background.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
        }}
      />
    </>
  )
})

export default SimpleBackground
'use client'

import { memo } from 'react'

// 🚀 ハイブリッド背景: 高速CSS + 遅延画像読み込み
const HybridBackground = memo(function HybridBackground() {
  return (
    <>
      {/* 即座に表示されるCSS背景 */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(99, 102, 241, 0.15) 0%,
              rgba(139, 92, 246, 0.1) 25%,
              rgba(217, 70, 239, 0.15) 50%,
              rgba(99, 102, 241, 0.1) 75%,
              rgba(79, 70, 229, 0.15) 100%
            ),
            linear-gradient(to bottom,
              rgba(17, 24, 39, 0.95) 0%,
              rgba(31, 41, 55, 0.97) 50%,
              rgba(17, 24, 39, 0.99) 100%
            )
          `,
          backgroundSize: '200% 200%, 100% 100%',
          animation: 'gradientShift 30s ease infinite',
        }}
      />
      
      {/* 最適化された背景画像 */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/assets/images/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          filter: 'blur(2px)',
          transform: 'scale(1.1)',
        }}
      />
      
      {/* アニメーション */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%, 0% 0%; }
          50% { background-position: 100% 50%, 0% 0%; }
          100% { background-position: 0% 50%, 0% 0%; }
        }
      `}</style>
    </>
  )
})

export default HybridBackground
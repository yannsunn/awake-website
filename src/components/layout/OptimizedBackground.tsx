'use client'

import { memo } from 'react'

// 🚀 超軽量背景コンポーネント - CSSグラデーションのみ使用
const OptimizedBackground = memo(function OptimizedBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(99, 102, 241, 0.1) 0%,
            rgba(139, 92, 246, 0.05) 25%,
            rgba(217, 70, 239, 0.1) 50%,
            rgba(99, 102, 241, 0.05) 75%,
            rgba(79, 70, 229, 0.1) 100%
          ),
          linear-gradient(45deg,
            rgba(17, 24, 39, 0.95) 0%,
            rgba(31, 41, 55, 0.98) 50%,
            rgba(17, 24, 39, 1) 100%
          )
        `,
        backgroundSize: '200% 200%, 100% 100%',
        animation: 'gradientShift 30s ease infinite',
      }}
    >
      {/* メッシュパターン */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 2px,
              rgba(255, 255, 255, 0.03) 4px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 2px,
              rgba(255, 255, 255, 0.03) 4px
            )
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* グラデーションアニメーション */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%, 0% 0%; }
          50% { background-position: 100% 50%, 0% 0%; }
          100% { background-position: 0% 50%, 0% 0%; }
        }
      `}</style>
    </div>
  )
})

export default OptimizedBackground
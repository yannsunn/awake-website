'use client'

import { memo } from 'react'

// 🎨 令和モダンなグラデーション背景
const SimpleBackground = memo(function SimpleBackground() {
  return (
    <>
      {/* メイングラデーション背景 */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -100,
          background: `
            linear-gradient(
              135deg,
              #0f172a 0%,
              #1e1b4b 25%,
              #1e293b 50%,
              #1e1b4b 75%,
              #0f172a 100%
            )
          `,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease infinite',
        }}
      />
      
      {/* 微細なパターンオーバーレイ */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -99,
          opacity: 0.05,
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.02) 10px,
              rgba(255, 255, 255, 0.02) 20px
            )
          `,
        }}
      />
      
      {/* グラデーションアニメーション */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  )
})

export default SimpleBackground
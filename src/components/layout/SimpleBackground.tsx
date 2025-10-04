'use client'

import { memo } from 'react'
import { FloatingParticles } from '@/components/effects/DynamicEffects'

// 🎨 軽量なグラデーション背景 + 動的エフェクト
const SimpleBackground = memo(function SimpleBackground() {
  return (
    <>
      {/* グラデーション背景 - 白基調 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -100,
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #f8fafc 75%, #ffffff 100%)',
        }}
      />

      {/* 微妙なパターン効果 */}
      <div
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -99,
          opacity: 0.03,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 動的パーティクルエフェクト - 復元 */}
      <FloatingParticles />
    </>
  )
})

export default SimpleBackground

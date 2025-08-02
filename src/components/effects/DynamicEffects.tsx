'use client'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

// 動的インポート - パフォーマンス最適化
export const FloatingParticles = dynamic(
  () => import('./FloatingParticles'),
  { 
    ssr: false,
    loading: () => null
  }
)

export const CursorLight = dynamic(
  () => import('./CursorLight'),
  { 
    ssr: false,
    loading: () => null
  }
)

export const RippleContainer = dynamic(
  () => import('./RippleContainer'),
  { 
    ssr: true,
    loading: () => <div className="min-h-full" />
  }
)

export const BreathingButton = dynamic(
  () => import('./BreathingButton'),
  { 
    ssr: true,
    loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-12 w-32" />
  }
)

export const SoundWave = dynamic(
  () => import('./SoundWave'),
  { 
    ssr: false,
    loading: () => null
  }
)

export const NeonGlow = dynamic(
  () => import('./NeonGlow'),
  { 
    ssr: true,
    loading: () => <div />
  }
)

// ParallaxElementは頻繁に使用されるため直接エクスポート
export { default as ParallaxElement } from './ParallaxElement'
'use client'

import dynamic from 'next/dynamic'

// 動的インポート - パフォーマンス最適化
export const FloatingParticles = dynamic(
  () => import('./FloatingParticles'),
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

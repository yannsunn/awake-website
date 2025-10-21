'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// パフォーマンス最適化: インタラクティブなコンポーネントを動的にロード
// loading: () => null で読み込み中は何も表示しない
const MouseEffects = dynamic(() => import('@/components/effects/MouseEffects'), {
  ssr: false,
  loading: () => null,
})

const ChatWidget = dynamic(() => import('@/components/chat/ChatWidget'), {
  ssr: false,
  loading: () => null,
})

export default function ClientOnlyProviders() {
  return (
    <Suspense fallback={null}>
      <MouseEffects />
      <ChatWidget />
    </Suspense>
  )
}

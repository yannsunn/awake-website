'use client'

import { useScrollRevealGlobal } from '@/hooks/useScrollReveal'

/**
 * スクロールリビール効果を提供する小さなClientコンポーネント
 * PageLayoutをServer Componentにするため、効果系のロジックをここに分離
 */
export default function ScrollRevealProvider() {
  useScrollRevealGlobal()
  return null
}

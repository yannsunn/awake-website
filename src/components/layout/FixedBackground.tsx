'use client'

import { memo } from 'react'
import Image from 'next/image'

// 🚀 全ページ共通の固定背景コンポーネント
const FixedBackground = memo(function FixedBackground() {
  return (
    <div className="fixed-background bg-gray-50" aria-hidden="true">
      <Image
        src="/assets/images/hero-background.png"
        alt=""
        fill
        quality={100}
        priority
        className="object-contain object-center"
        sizes="100vw"
      />
      {/* オーバーレイ - 視認性を優先した半透明白 */}
      <div className="absolute inset-0 bg-white/70" />
    </div>
  )
})

export default FixedBackground
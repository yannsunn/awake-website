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
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* オーバーレイ - 視認性向上のため不透明度を上げる */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 to-white/95" />
    </div>
  )
})

export default FixedBackground
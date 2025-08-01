'use client'

import { memo } from 'react'
import Image from 'next/image'

// 🚀 全ページ共通の固定背景コンポーネント
const FixedBackground = memo(function FixedBackground() {
  return (
    <div className="fixed-background bg-gray-900" aria-hidden="true">
      <Image
        src="/assets/images/hero-background.png"
        alt=""
        fill
        quality={100}
        priority
        className="object-contain object-center"
        sizes="100vw"
      />
    </div>
  )
})

export default FixedBackground
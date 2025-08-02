'use client'

import { memo } from 'react'
import Image from 'next/image'

// 🚀 全ページ共通の固定背景コンポーネント
const FixedBackground = memo(function FixedBackground() {
  return (
    <div 
      className="fixed-background bg-gray-900" 
      aria-hidden="true"
    >
      <Image
        src="/assets/images/hero-background.png"
        alt=""
        fill
        quality={85}
        priority
        className="object-contain object-center opacity-100"
        sizes="100vw"
        loading="eager"
        placeholder="empty"
      />
    </div>
  )
})

export default FixedBackground
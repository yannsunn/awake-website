'use client'

import { memo } from 'react'

// 🎨 シンプルな背景
const SimpleBackground = memo(function SimpleBackground() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -100,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #1e293b 50%, #1e1b4b 75%, #0f172a 100%)',
      }}
    />
  )
})

export default SimpleBackground
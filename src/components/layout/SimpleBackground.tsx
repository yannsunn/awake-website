'use client'

import { memo } from 'react'

// シンプルな白背景のみ
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
        background: '#ffffff',
      }}
    />
  )
})

export default SimpleBackground

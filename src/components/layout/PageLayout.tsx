'use client'

import { ReactNode, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useScrollRevealGlobal } from '@/hooks/useScrollReveal'
import type { Breadcrumb } from '@/lib/types'

// 重いエフェクトは動的インポート
const CursorLight = dynamic(() => import('@/components/effects/CursorLight'), {
  ssr: false,
  loading: () => null
})
const FloatingParticles = dynamic(() => import('@/components/effects/FloatingParticles'), {
  ssr: false,
  loading: () => null
})

interface PageLayoutProps {
  children: ReactNode
  showEffects?: boolean
  title?: string
  description?: string
  breadcrumbs?: Breadcrumb[]
}

export default function PageLayout({ 
  children, 
  showEffects = true, 
  title, 
  description, 
  breadcrumbs 
}: PageLayoutProps) {
  useScrollRevealGlobal()
  const [effectsLoaded, setEffectsLoaded] = useState(false)
  
  useEffect(() => {
    if (showEffects) {
      // エフェクトを即座に読み込む
      setEffectsLoaded(true)
    }
    return undefined
  }, [showEffects])
  
  return (
    <>
      {/* 水平思考エフェクト - 遅延読み込み */}
      {showEffects && effectsLoaded && (
        <>
          <CursorLight />
          <FloatingParticles />
        </>
      )}
      
      <Header />
      
      <main role="main" id="main-content">
        {children}
      </main>
      
      <Footer />
    </>
  )
}
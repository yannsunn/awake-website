'use client'

import { ReactNode } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useScrollRevealGlobal } from '@/hooks/useScrollReveal'
import type { Breadcrumb } from '@/lib/types'

import CursorLight from '@/components/effects/CursorLight'
import FloatingParticles from '@/components/effects/FloatingParticles'

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
  
  return (
    <>
      {/* 水平思考エフェクト */}
      {showEffects && (
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
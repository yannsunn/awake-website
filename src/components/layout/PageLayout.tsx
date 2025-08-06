'use client'

import { ReactNode } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useScrollRevealGlobal } from '@/hooks/useScrollReveal'
import type { Breadcrumb } from '@/lib/types'

// エフェクトを削除してシンプルに

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
      {/* エフェクトを削除 */}
      
      <Header />
      
      <main role="main" id="main-content">
        {children}
      </main>
      
      <Footer />
    </>
  )
}
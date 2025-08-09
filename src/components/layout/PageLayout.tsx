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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main role="main" id="main-content" className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
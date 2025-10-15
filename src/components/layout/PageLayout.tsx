'use client'

import { ReactNode } from 'react'
import Image from 'next/image'
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
    <div className="min-h-screen flex flex-col overflow-x-hidden relative">
      {/* 固定背景ロゴ - 全ページ共通 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
          <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
            <Image
              src="/images/hero-logo.png"
              alt="Awake Inc. Logo"
              fill
              className="object-contain opacity-[0.03]"
              priority
              sizes="(max-width: 768px) 90vw, 80vw"
            />
          </div>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main role="main" id="main-content" className="flex-grow pt-16 md:pt-20">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  )
}
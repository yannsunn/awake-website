import { ReactNode } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollRevealProvider from '@/components/layout/ScrollRevealProvider'
import type { Breadcrumb } from '@/lib/types'

interface PageLayoutProps {
  children: ReactNode
  showEffects?: boolean
  title?: string
  description?: string
  breadcrumbs?: Breadcrumb[]
}

/**
 * ページ全体のレイアウトコンポーネント（Server Component）
 *
 * パフォーマンス最適化:
 * - Server Componentとして実装し、バンドルサイズを削減
 * - スクロール効果は小さなScrollRevealProviderに分離
 */
export default function PageLayout({
  children,
  showEffects = true,
  title,
  description,
  breadcrumbs
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollRevealProvider />
      <Header />

      <main role="main" id="main-content" className="flex-grow pt-16 md:pt-20">
        {children}
      </main>

      <Footer />
    </div>
  )
}

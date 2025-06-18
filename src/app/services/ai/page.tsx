import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "AIコンサルティング | 株式会社Awake",
  description: "ChatGPT活用からDX推進まで包括サポート。実践的コンサルティングで企業変革を実現。",
  keywords: "AIコンサルティング, ChatGPT活用, DX推進, AI導入, 生産性向上, 業務効率化",
}

// 🚀 ULTRA-SIMPLIFIED AI Service Page - Build Fix
export default function AIServicePage() {
  return (
    <>
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section - Ultra Simple */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                AIコンサルティング
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
                最先端AI技術による業務効率化とデジタル変革支援
              </p>

              <div className="flex justify-center">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
                >
                  お問い合わせ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                サービス概要
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">
                  平均40%
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  生産性向上
                </h3>
                <p className="text-gray-600 text-sm">
                  AI活用により業務処理時間を大幅短縮
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">
                  年間20%
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  コスト削減
                </h3>
                <p className="text-gray-600 text-sm">
                  業務効率化によるコスト削減効果
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">
                  エラー80%減
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  品質向上
                </h3>
                <p className="text-gray-600 text-sm">
                  AI支援によるヒューマンエラーの大幅削減
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              AI導入で企業の未来を変えませんか？
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              無料の現状分析から始めて、最適なAI活用戦略をご提案いたします
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
            >
              無料相談を申し込む
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
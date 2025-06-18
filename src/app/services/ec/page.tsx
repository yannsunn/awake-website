import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Amazon代理店サービス | 株式会社Awake",
  description: "完全成果報酬型Amazon販売代行。商品選定から販売戦略までプロが全て代行。リスクゼロで開始。",
  keywords: "Amazon代理店, 代理販売, 株式会社Awake",
}

// 🚀 ULTRA-SIMPLIFIED EC Service Page - Build Fix
export default function EcServicePage() {
  return (
    <>
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section - Ultra Simple */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Amazon代理店サービス
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
                完全成果報酬型でリスクゼロ。プロが商品選定から販売戦略まで代行
              </p>

              <div className="flex justify-center">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
                >
                  無料相談・お見積り
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                サービス特徴
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  リスクゼロ
                </h3>
                <p className="text-gray-600 text-sm">
                  初期費用0円・成果報酬型なので、リスクなく始められます
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Amazon特価販売
                </h3>
                <p className="text-gray-600 text-sm">
                  Amazonの特価システムを活用し、競合他社より魅力的な価格で販売
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  スピード対応
                </h3>
                <p className="text-gray-600 text-sm">
                  商品登録から販売開始まで最短3日
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  柔軟な在庫管理
                </h3>
                <p className="text-gray-600 text-sm">
                  メーカー様からの直送、または弊社への預託在庫から発送
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                サービスの流れ
              </h2>
              <p className="text-lg text-gray-600">
                シンプルな4ステップで販売開始
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                  01
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  商品情報ヒアリング
                </h3>
                <p className="text-gray-600 text-sm">
                  商品の特徴、ターゲット、販売戦略などを詳しくお聞きします
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                  02
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  在庫・発送方法決定
                </h3>
                <p className="text-gray-600 text-sm">
                  メーカー様直送か預託在庫かを決定し、最適な物流戦略を立案
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                  03
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  商品ページ制作
                </h3>
                <p className="text-gray-600 text-sm">
                  プロのカメラマン・デザイナーが魅力的な商品ページを制作
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                  04
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Amazon特価販売開始
                </h3>
                <p className="text-gray-600 text-sm">
                  Amazon特価にて販売開始。在庫管理・発送・運用も継続サポート
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Amazon代理店サービスを始めませんか？
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              商品情報をお聞かせください。売上予測と最適な戦略を無料でご提案
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
            >
              無料診断を受ける
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
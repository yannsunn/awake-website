import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { memo } from 'react'
import { commonAnimations, optimizedViewport } from '@/lib/animations'

export const metadata: Metadata = {
  title: "ホームページ制作 | 株式会社Awake",
  description: "132,000円からプロフェッショナルなコーポレートサイトを制作。企業の価値を最大化するウェブデザイン。",
  keywords: "ホームページ制作, ウェブ制作, コーポレートサイト, SEO対策, 株式会社Awake",
}

const pricing = [
  {
    name: "スタンダード",
    price: "¥132,000",
    features: [
      "5ページまで",
      "レスポンシブデザイン", 
      "基本SEO対策",
      "お問い合わせフォーム",
      "3週間制作期間"
    ]
  },
  {
    name: "プレミアム", 
    price: "¥298,000",
    features: [
      "10ページまで",
      "カスタムデザイン",
      "高度なSEO対策", 
      "CMS機能",
      "6週間制作期間"
    ]
  },
  {
    name: "エンタープライズ",
    price: "要相談",
    features: [
      "ページ数無制限",
      "完全オリジナル",
      "システム連携",
      "専属サポート",
      "柔軟な制作期間"
    ]
  }
]

// 🚀 Ultra-Optimized Web Service Page (Toyota Style)
const WebServicePage = memo(function WebServicePage() {
  return (
    <>
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section - Toyota Style */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={commonAnimations.staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                variants={commonAnimations.fadeInUp}
                className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight"
              >
                ホームページ制作
              </motion.h1>
              
              <motion.p 
                variants={commonAnimations.fadeInUp}
                className="text-xl text-gray-600 mb-12 font-light leading-relaxed"
              >
                企業の価値を最大化するプロフェッショナルなウェブサイト
              </motion.p>

              <motion.div 
                variants={commonAnimations.fadeIn}
                className="flex justify-center"
              >
                <Link 
                  href="#pricing" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
                >
                  料金プランを見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section - Minimal */}
        <section className="py-20 bg-white">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={commonAnimations.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            <motion.div variants={commonAnimations.fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                サービス特徴
              </h2>
            </motion.div>
            
            <motion.div 
              variants={commonAnimations.fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  プロフェッショナル制作
                </h3>
                <p className="text-gray-600 text-sm">
                  132,000円からプロ品質のサイトを制作
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  SEO最適化
                </h3>
                <p className="text-gray-600 text-sm">
                  検索エンジン対策を標準実装
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  スケーラブル設計
                </h3>
                <p className="text-gray-600 text-sm">
                  企業成長に合わせて拡張可能
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  レスポンシブ対応
                </h3>
                <p className="text-gray-600 text-sm">
                  全デバイスで最適表示を保証
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Pricing Section - Clean */}
        <section id="pricing" className="py-20 bg-gray-50">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={commonAnimations.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            <motion.div variants={commonAnimations.fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                料金プラン
              </h2>
              <p className="text-lg text-gray-600">
                ニーズに合わせた柔軟なプラン設計
              </p>
            </motion.div>
            
            <motion.div 
              variants={commonAnimations.fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {pricing.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-sm border ${
                    index === 0 ? 'border-gray-900' : 'border-gray-200'
                  }`}
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-light text-gray-900 mb-6">
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/#contact"
                    className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                      index === 0 
                        ? 'bg-gray-900 text-white hover:bg-gray-800' 
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    お問い合わせ
                  </Link>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section - Simple */}
        <section className="py-20 bg-white">
          <motion.div 
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            variants={commonAnimations.fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              まずはお気軽にご相談ください
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              お客様のご要望をお聞かせください
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
            >
              無料相談を申し込む
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </>
  )
})

export default WebServicePage
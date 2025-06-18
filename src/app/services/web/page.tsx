import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

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

// 🚀 Ultra-Rich Web Service Page (Toyota Style) - Motion-Free Build Fix
export default function WebServicePage() {
  return (
    <>
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section - Toyota Style */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                ホームページ制作
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
                企業の価値を最大化するプロフェッショナルなウェブサイト
              </p>

              <div className="flex justify-center">
                <Link 
                  href="#pricing" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
                >
                  料金プランを見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Rich Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                サービス特徴
              </h2>
              <p className="text-lg text-gray-600">
                高品質なウェブサイトを確実にお届け
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white font-bold text-xl">¥</div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  プロフェッショナル制作
                </h3>
                <p className="text-gray-600 text-sm">
                  132,000円からプロ品質のサイトを制作。コストパフォーマンスに優れた価格設定
                </p>
              </div>
              
              <div className="text-center hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white font-bold text-xl">S</div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  SEO最適化
                </h3>
                <p className="text-gray-600 text-sm">
                  検索エンジン対策を標準実装。Googleでの上位表示をサポート
                </p>
              </div>
              
              <div className="text-center hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white font-bold text-xl">↗</div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  スケーラブル設計
                </h3>
                <p className="text-gray-600 text-sm">
                  企業成長に合わせて拡張可能。将来のニーズにも対応
                </p>
              </div>
              
              <div className="text-center hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white font-bold text-xl">📱</div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  レスポンシブ対応
                </h3>
                <p className="text-gray-600 text-sm">
                  全デバイスで最適表示を保証。PC・タブレット・スマホ完全対応
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Rich Content */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                料金プラン
              </h2>
              <p className="text-lg text-gray-600">
                ニーズに合わせた柔軟なプラン設計
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-sm border hover:shadow-xl transition-shadow duration-300 ${
                    index === 0 ? 'border-gray-900 ring-2 ring-gray-900 ring-opacity-10' : 'border-gray-200'
                  }`}
                >
                  {index === 0 && (
                    <div className="text-center mb-4">
                      <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                        人気プラン
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-light text-gray-900 mb-6">
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
                        <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/#contact"
                    className={`block text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      index === 0 
                        ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl' 
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    お問い合わせ
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process Section - Rich Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                制作の流れ
              </h2>
              <p className="text-lg text-gray-600">
                お客様と二人三脚で進める安心の制作プロセス
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  step: "01", 
                  title: "ヒアリング", 
                  desc: "ご要望とサイトの目的を詳しくお聞きします。競合分析も実施",
                  time: "1週間"
                },
                { 
                  step: "02", 
                  title: "企画・設計", 
                  desc: "サイト構成とデザインコンセプトを策定。ワイヤーフレーム作成",
                  time: "1-2週間"
                },
                { 
                  step: "03", 
                  title: "制作・開発", 
                  desc: "デザイン作成からコーディングまで実施。SEO対策も同時進行",
                  time: "2-4週間"
                },
                { 
                  step: "04", 
                  title: "公開・運用", 
                  desc: "テスト完了後の公開と継続的なサポート。アナリティクス設定",
                  time: "継続"
                }
              ].map((item, index) => (
                <div key={index} className="text-center hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-medium">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {item.desc}
                  </p>
                  <div className="text-xs text-gray-500 font-medium">
                    目安: {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs Section - Added Rich Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                技術仕様・対応範囲
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">開発技術</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Next.js / React</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Node.js</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">対応機能</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• CMS連携</li>
                  <li>• お問い合わせフォーム</li>
                  <li>• ブログ機能</li>
                  <li>• 多言語対応</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">保証・サポート</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 3ヶ月無料サポート</li>
                  <li>• バックアップ対応</li>
                  <li>• SSL証明書設定</li>
                  <li>• セキュリティ対策</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Rich Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              まずはお気軽にご相談ください
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              お客様のご要望をお聞かせください。無料でお見積りいたします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
              >
                無料相談を申し込む
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg transition-all duration-200 hover:bg-gray-50 hover:border-gray-400"
              >
                制作実績を見る
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
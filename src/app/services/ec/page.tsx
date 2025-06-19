import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CheckCircle, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_DATA } from '@/lib/company-data'
import { LineContactHighlight } from '@/lib/unified-components'

export const metadata: Metadata = {
  title: "Amazon代理販売サービス | 株式会社Awake",
  description: "【7年の実績】Amazon代理販売でSEO上位表示を実現。完全成果報酬型でリスクゼロ。カタログ作成から販売まで全てお任せ。",
  keywords: "Amazon代理販売, SEO上位表示, カタログ作成, 7年経験, 株式会社Awake",
}

const features = [
  {
    icon: Shield,
    title: "7年の実績と経験",
    description: "Amazon販売代行で7年の豊富な実績。数百社の成功事例をもとに、確実な売上向上をサポートします。"
  },
  {
    icon: TrendingUp,
    title: "SEO検索上位表示",
    description: "Amazon内での検索順位を上げる専門技術。お客様の商品を多くの人に見つけてもらいやすくします。"
  },
  {
    icon: Zap,
    title: "プロのカタログ作成",
    description: "魅力的な商品ページを作成。写真撮影から文章作成まで、売れるカタログを制作いたします。"
  },
  {
    icon: CheckCircle,
    title: "完全成果報酬制",
    description: "初期費用0円でスタート。売上が上がった分だけ手数料をいただくので、リスクなく始められます。"
  }
]

const process = [
  {
    step: "01",
    title: "商品情報ヒアリング",
    description: "商品の特徴、ターゲット、販売戦略などを詳しくお聞きします。"
  },
  {
    step: "02",
    title: "在庫・発送方法決定",
    description: "メーカー様直送か預託在庫かを決定し、最適な物流戦略を立案いたします。"
  },
  {
    step: "03",
    title: "商品ページ制作",
    description: "プロのカメラマン・デザイナーが魅力的な商品ページを制作します。"
  },
  {
    step: "04",
    title: "Amazon特価販売開始",
    description: "Amazon特価にて販売開始。在庫管理・発送・運用も継続してサポートいたします。"
  }
]

const commission = [
  {
    platform: "Amazon特価販売",
    rate: "10%〜15%",
    description: "売上に応じた手数料"
  },
  {
    platform: "メーカー直送",
    rate: "在庫なし",
    description: "メーカー様から直接発送"
  },
  {
    platform: "預託在庫発送",
    rate: "弊社管理",
    description: "預けていただいた在庫から発送"
  }
]

// 🚀 Ultra-Rich EC Service Page (Toyota Style) - Motion-Free Build Fix
export default function EcServicePage() {
  return (
    <>
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section - Toyota Style */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Amazon代理販売サービス
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
                【7年の実績】Amazon販売のプロが、SEO上位表示とプロのカタログ作成で確実な売上アップを実現します。
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
                7年の経験とSEO技術、プロのカタログ作成で売上を確実にアップ
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section - Rich Content */}
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
              {[
                {
                  step: "01",
                  title: "詳細ヒアリング",
                  description: "7年の経験をもとに商品の特徴やターゲットをお聞きし、最適な販売戦略を提案します。",
                  time: "1週間"
                },
                {
                  step: "02",
                  title: "プロのカタログ作成",
                  description: "売れる商品ページを制作。魅力的な写真撮影と説明文で、お客様の目を引くカタログを作ります。",
                  time: "2週間"
                },
                {
                  step: "03",
                  title: "SEO最適化設定",
                  description: "Amazon内での検索上位表示を実現。多くの人に商品を見つけてもらえるよう設定します。",
                  time: "1週間"
                },
                {
                  step: "04",
                  title: "販売開始・運用サポート",
                  description: "販売開始後も継続的にサポート。売上データを分析し、さらなる改善を行います。",
                  time: "継続"
                }
              ].map((item, index) => (
                <div key={index} className="text-center hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl">
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {item.description}
                  </p>
                  <div className="text-xs text-gray-500 font-medium">
                    期間: {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commission Section - Rich Content */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                料金プラン
              </h2>
              <p className="text-lg text-gray-600">
                完全成果報酬型でリスクなし
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  platform: "Amazon特価販売",
                  rate: "10%〜15%",
                  description: "売上に応じた手数料",
                  features: ["Amazon特価での販売", "在庫管理サポート", "継続的な運用支援", "売上レポート提供"]
                },
                {
                  platform: "メーカー直送",
                  rate: "在庫なし",
                  description: "メーカー様から直接発送",
                  features: ["在庫リスクゼロ", "倉庫費用不要", "配送費最適化", "迅速な発送対応"]
                },
                {
                  platform: "預託在庫発送",
                  rate: "弊社管理",
                  description: "預けていただいた在庫から発送",
                  features: ["柔軟な在庫管理", "迅速な出荷対応", "品質管理徹底", "詳細な在庫レポート"]
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-2xl shadow-sm border hover:shadow-xl transition-shadow duration-300 ${ 
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
                    {item.platform}
                  </h3>
                  <div className="text-3xl font-light text-gray-900 mb-6">
                    {item.rate}
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
                        <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={COMPANY_DATA.contact.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      index === 0 
                        ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl' 
                        : 'border border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400'
                    }`}
                  >
                    LINE で問い合わせ
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section - Rich Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                導入実績
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">基本メトリクス</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 0円初期費用</li>
                  <li>• 10-15%成果報酬</li>
                  <li>• 3日最短開始</li>
                  <li>• 継続的サポート</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">販売サポート</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 商品ページ最適化</li>
                  <li>• 在庫管理システム</li>
                  <li>• 売上分析レポート</li>
                  <li>• 顧客対応サポート</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">運用実績</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 平均売上30%向上</li>
                  <li>• 在庫回転率改善</li>
                  <li>• 顧客満足度向上</li>
                  <li>• 継続率90%以上</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Rich Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              共に成長するパートナーとして
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              まずはお気軽にご相談ください。Amazon販売のプロが御社の成功をサポートいたします。
            </p>
            <LineContactHighlight />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={COMPANY_DATA.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-medium rounded-lg transition-all duration-200 hover:bg-green-600 shadow-lg hover:shadow-xl"
              >
                LINE で問い合わせ
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
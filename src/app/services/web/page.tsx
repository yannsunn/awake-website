import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Globe, CheckCircle, Clock, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "HP制作・LP制作サービス | 株式会社Awake",
  description: "モダンで高品質なウェブサイトを最短1週間で制作。SEO対策・レスポンシブ対応・高速表示を実現します。",
  keywords: "HP制作, LP制作, ウェブ制作, コーポレートサイト, ランディングページ, 株式会社Awake, SEO対策, レスポンシブデザイン",
  openGraph: {
    title: "HP制作・LP制作サービス | 株式会社Awake",
    description: "1週間でコーポレートサイトを制作。スピーディーな納品と高品質な制作を実現します。",
    images: ["/assets/images/web-design.jpg"],
    url: "https://awake-website.netlify.app/services/web/",
  },
  twitter: {
    card: "summary_large_image",
    title: "HP制作・LP制作サービス | 株式会社Awake",
    description: "最新技術とデザインで、ビジネスの成長を加速するウェブサイトを制作",
    images: ["/assets/images/web-design.jpg"],
  },
}

const features = [
  {
    icon: Clock,
    title: "最短1週間納品",
    description: "企画から公開まで、最短1週間での納品を実現。お急ぎのプロジェクトにも対応可能です。"
  },
  {
    icon: TrendingUp,
    title: "SEO最適化",
    description: "検索エンジンで上位表示されるよう、最新のSEO対策を標準実装。集客力を最大化します。"
  },
  {
    icon: Zap,
    title: "高速表示",
    description: "最新の技術を使用し、読み込み速度を最適化。ユーザー体験を向上させます。"
  },
  {
    icon: CheckCircle,
    title: "レスポンシブ対応",
    description: "スマートフォン、タブレット、PCすべてのデバイスで最適な表示を保証します。"
  }
]

const pricing = [
  {
    name: "スタンダード",
    price: "20万円〜",
    description: "基本的なコーポレートサイト",
    features: [
      "5ページまで",
      "レスポンシブデザイン",
      "基本的なSEO対策",
      "お問い合わせフォーム",
      "1ヶ月間のサポート"
    ]
  },
  {
    name: "プレミアム",
    price: "50万円〜",
    description: "本格的なビジネスサイト",
    features: [
      "10ページまで",
      "カスタムデザイン",
      "高度なSEO対策",
      "CMS機能",
      "アクセス解析設定",
      "3ヶ月間のサポート"
    ],
    popular: true
  },
  {
    name: "エンタープライズ",
    price: "100万円〜",
    description: "大規模サイト・特殊機能",
    features: [
      "ページ数無制限",
      "完全オリジナルデザイン",
      "システム連携",
      "高度な機能開発",
      "パフォーマンス最適化",
      "6ヶ月間のサポート"
    ]
  }
]

const webServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development",
  "provider": {
    "@type": "Organization",
    "name": "株式会社Awake",
    "url": "https://awake-website.netlify.app/"
  },
  "name": "HP制作・LP制作サービス",
  "description": "モダンで高品質なウェブサイトを最短1週間で制作。SEO対策・レスポンシブ対応・高速表示を実現します。",
  "url": "https://awake-website.netlify.app/services/web/",
  "image": "https://awake-website.netlify.app/assets/images/web-design.jpg",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "JPY",
    "lowPrice": "200000",
    "highPrice": "1000000",
    "eligibleRegion": {
      "@type": "Country",
      "name": "Japan"
    }
  }
}

export default function WebServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webServiceSchema),
        }}
      />
      
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-purple to-primary-purple-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-white mr-3" />
                  <span className="text-white/80 font-semibold">Web Development</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  HP制作・LP制作<br />サービス
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  モダンで高品質なウェブサイトを最短1週間で制作。<br />
                  SEO対策・レスポンシブ対応・高速表示を実現します。
                </p>
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-white text-primary-purple px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  無料相談を始める
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/assets/images/web-design.jpg"
                  alt="ウェブデザインのイメージ"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                サービスの特徴
              </h2>
              <p className="text-xl text-gray-600">
                高品質なウェブサイト制作のための4つの強み
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-pink rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                料金プラン
              </h2>
              <p className="text-xl text-gray-600">
                お客様のニーズに合わせた3つのプラン
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-2xl shadow-lg ${
                    plan.popular ? 'ring-2 ring-primary-purple relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-purple text-white px-4 py-2 rounded-full text-sm font-bold">
                        人気
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-primary-purple mb-6">
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="#contact"
                    className={`block text-center py-3 px-6 rounded-lg font-bold transition-colors ${
                      plan.popular 
                        ? 'bg-primary-purple text-white hover:bg-primary-purple-dark' 
                        : 'border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white'
                    }`}
                  >
                    詳細を問い合わせる
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-primary-purple to-primary-purple-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              まずは無料相談から始めませんか？
            </h2>
            <p className="text-xl text-white/90 mb-8">
              お客様のご要望をお聞かせください。最適なプランをご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-primary-purple px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                今すぐ無料相談
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-purple transition-colors"
              >
                他のサービスを見る
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
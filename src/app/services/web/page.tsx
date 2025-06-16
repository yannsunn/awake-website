import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Globe, CheckCircle, Clock, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "売上直結ホームページ制作・LP制作 | 株式会社Awake",
  description: "SEO最適化とコンバージョン最適化で集客力を最大化。LP制作55,000円から、最短2週間納品。",
  keywords: "HP制作, LP制作, ウェブ制作, コーポレートサイト, ランディングページ, 株式会社Awake, SEO対策, レスポンシブデザイン",
  openGraph: {
    title: "HP制作・LP制作サービス | 株式会社Awake",
    description: "LP制作55,000円から。3週間前後でコーポレートサイトを制作。スピーディーな納品と高品質な制作を実現します。",
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
    title: "スピード納品",
    description: "初回1週間、修正後2週間、合計3週間前後で納品。早ければ2週間前後での対応も可能です。"
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
    name: "LP制作",
    price: "55,000円",
    description: "シンプルなランディングページ",
    features: [
      "1ページのLP制作",
      "レスポンシブデザイン",
      "基本的なSEO対策",
      "お問い合わせフォーム",
      "制作期間：2週間前後"
    ]
  },
  {
    name: "ホームページ制作",
    price: "132,000円",
    description: "コーポレートサイト",
    features: [
      "5ページまで",
      "カスタムデザイン",
      "高度なSEO対策",
      "お問い合わせフォーム",
      "制作期間：3週間前後"
    ],
    popular: true
  },
  {
    name: "エンタープライズ",
    price: "要相談",
    description: "大規模サイト・特殊機能",
    features: [
      "ページ数無制限",
      "完全オリジナルデザイン",
      "システム連携",
      "高度な機能開発",
      "制作期間：要相談"
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
  "description": "LP制作55,000円、ホームページ制作132,000円から。初回1週間+修正2週間で合計3週間前後の制作期間。SEO対策・レスポンシブ対応・高速表示を実現します。",
  "url": "https://awake-website.netlify.app/services/web/",
  "image": "https://awake-website.netlify.app/assets/images/web-design.jpg",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "JPY",
    "lowPrice": "55000",
    "highPrice": "500000",
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
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz4KPC9zdmc+')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Globe className="h-8 w-8 text-white mr-3" />
                  <span className="text-white/80 font-semibold">Web Development</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  売上直結<br />ホームページ制作
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  SEO最適化とコンバージョン最適化で集客力を最大化。<br />
                  LP制作55,000円から、最短2週間納品でスピーディー対応。
                </p>
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  無料相談・お見積り
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
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
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
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
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
                    plan.popular ? 'ring-2 ring-blue-600 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        人気
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-semibold text-blue-600 mb-6">
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
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
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
        <section id="contact" className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              まずは無料相談から始めませんか？
            </h2>
            <p className="text-xl text-white/90 mb-8">
              お客様のご要望をお聞かせください。最適なプランをご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                今すぐ無料相談
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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

import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Zap, ShieldCheck, Award, Target, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "CLEMIRA直販店 - 量子エネルギーデバイス | 株式会社Awake",
  description: "正規代理店を通さない直販価格で、量子エネルギーデバイス「CLEMIRA」シリーズを提供。身体機能向上・パフォーマンス最適化をサポート。",
  keywords: "CLEMIRA, 量子エネルギー, 身体機能向上, 直販店, パフォーマンス向上, 株式会社Awake",
  openGraph: {
    title: "CLEMIRA直販店 - 量子エネルギーデバイス | 株式会社Awake",
    description: "代理店を通さない直販価格で、革新的な量子エネルギーデバイスを提供。科学的根拠に基づく身体機能向上を実現。",
    images: ["/assets/images/modern-office.jpg"],
    url: "https://awake-website-five.vercel.app/services/kurumira/",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLEMIRA直販店 - 量子エネルギーデバイス | 株式会社Awake",
    description: "正規代理店を通さない直販価格で、最新量子エネルギー技術を提供",
    images: ["/assets/images/modern-office.jpg"],
  },
}

const features = [
  {
    icon: Zap,
    title: "量子エネルギー技術",
    description: "見えない量子エネルギーが様々な物質に作用し、身体機能を根本から向上させる革新的技術。"
  },
  {
    icon: ShieldCheck,
    title: "第三者機関検証済み",
    description: "独立した検査機関による効果測定を実施。科学的根拠に基づく確かな品質保証。"
  },
  {
    icon: Target,
    title: "多用途対応",
    description: "人体・食品・植物・自動車など、あらゆる分野で効果を発揮する汎用性の高いテクノロジー。"
  },
  {
    icon: Award,
    title: "メディア実績",
    description: "「令和の虎」出演で話題の大内大輔氏開発。確かな実績と信頼性を兼ね備えた製品。"
  }
]

const products = [
  {
    name: "CLEMIRA インソール",
    price: "¥198,000",
    originalPrice: "¥220,000",
    description: "足元から全身のパフォーマンスを向上",
    features: [
      "24時間装着可能",
      "運動パフォーマンス向上",
      "疲労軽減効果",
      "血流改善サポート",
      "1年間品質保証"
    ],
    popular: true
  },
  {
    name: "CLEMIRA PHOENIX",
    price: "¥148,500",
    originalPrice: "¥165,000",
    description: "コア技術を搭載したプレミアムモデル",
    features: [
      "CLEMIRA CORE技術",
      "広範囲エネルギー放射",
      "持続的効果発現",
      "多用途対応設計",
      "専用ケース付属"
    ]
  },
  {
    name: "CLEMIRA athlete",
    price: "¥49,500",
    originalPrice: "¥55,000",
    description: "アスリート向けエントリーモデル",
    features: [
      "コンパクト設計",
      "スポーツ特化仕様",
      "即効性重視",
      "携帯性抜群",
      "初回限定価格"
    ]
  }
]

const kurumiraServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Quantum Energy Device Sales",
  "provider": {
    "@type": "Organization",
    "name": "株式会社Awake",
    "url": "https://awake-website-five.vercel.app/"
  },
  "name": "CLEMIRA直販店 - 量子エネルギーデバイス",
  "description": "正規代理店を通さない直販価格で、量子エネルギーデバイス「CLEMIRA」シリーズを提供。身体機能向上・パフォーマンス最適化をサポート。",
  "url": "https://awake-website-five.vercel.app/services/kurumira/",
  "image": "https://awake-website-five.vercel.app/assets/images/modern-office.jpg",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "JPY",
    "lowPrice": "49500",
    "highPrice": "198000",
    "eligibleRegion": {
      "@type": "Country",
      "name": "Japan"
    }
  }
}

export default function KurumiraServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(kurumiraServiceSchema),
        }}
      />
      
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-600 to-purple-700">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz4KICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIi8+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpIi8+Cjwvc3ZnPg==')] opacity-25"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Zap className="h-8 w-8 text-white mr-3" />
                  <span className="text-white/80 font-semibold">Quantum Energy Direct Sales</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  CLEMIRA直販店<br />量子エネルギーデバイス
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  代理店を通さない直販価格で、革新的な量子エネルギー技術を提供。<br />
                  身体機能向上とパフォーマンス最適化を科学的にサポートします。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#products"
                    className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    製品を見る
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    href="#contact"
                    className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors"
                  >
                    直販価格を確認
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/assets/images/modern-office.jpg"
                  alt="量子エネルギーデバイスのイメージ"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                  🔥 直販限定価格
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Sales Benefits */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                直販店だからできること
              </h2>
              <p className="text-xl text-gray-600">
                代理店マージンを排除し、お客様に最適な価格と品質を提供
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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

        {/* Products Section */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                直販限定価格
              </h2>
              <p className="text-xl text-gray-600">
                代理店価格より最大10%OFF。確かな品質を適正価格で
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${
                    product.popular ? 'ring-2 ring-orange-500 relative' : 'border border-gray-200'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        人気No.1
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-orange-600">
                        {product.price}
                      </div>
                      <div className="text-lg text-gray-400 line-through">
                        {product.originalPrice}
                      </div>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      直販価格で{((parseFloat(product.originalPrice.replace(/[¥,]/g, '')) - parseFloat(product.price.replace(/[¥,]/g, ''))) / parseFloat(product.originalPrice.replace(/[¥,]/g, '')) * 100).toFixed(0)}%OFF
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="#contact"
                    className={`block text-center py-3 px-6 rounded-lg font-bold transition-colors ${
                      product.popular 
                        ? 'bg-orange-500 text-white hover:bg-orange-600' 
                        : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                    }`}
                  >
                    直販価格で購入
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                なぜ直販店を選ぶのか
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">最適価格</h3>
                <p className="text-gray-600">
                  代理店マージンを排除し、メーカー品質を最適価格でご提供。中間業者を通さない透明な価格設定。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">品質保証</h3>
                <p className="text-gray-600">
                  正規品のみを取り扱い、アフターサポートまで一貫対応。安心の品質管理体制でお客様をサポート。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">専門知識</h3>
                <p className="text-gray-600">
                  量子エネルギー技術の専門知識を持つスタッフが、お客様に最適な製品選びをサポートいたします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-orange-500 to-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              直販限定価格でお試しください
            </h2>
            <p className="text-xl text-white/90 mb-8">
              量子エネルギーの効果を、まずは体験から。専門スタッフがサポートいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                今すぐ相談する
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors"
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
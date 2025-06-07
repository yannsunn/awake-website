import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Zap, ShieldCheck, Award, Target, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "CLEMIRA直販店 - 量子エネルギーデバイス | 株式会社Awake",
  description: "日本アールエスナイン株式会社の正規品を本社直送でお届け。CLEMIRA insole（22万円）、PHOENIX（16.5万円）、athlete（5.5万円）、blackcard（2.75万円）を取り扱い。",
  keywords: "CLEMIRA, クレミラ, 量子エネルギー, 直販店, 本社直送, 正規品, 株式会社Awake, 日本アールエスナイン",
  openGraph: {
    title: "CLEMIRA直販店 - 量子エネルギーデバイス | 株式会社Awake",
    description: "本社直送で、革新的な量子エネルギーデバイスを提供。確かな品質と安心のアフターサービス。",
    images: ["/assets/images/modern-office.jpg"],
    url: "https://awakeinc.co.jp/services/clemira/",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLEMIRA直販店 - 量子エネルギーデバイス | 株式会社Awake",
    description: "本社直送で、最新量子エネルギー技術の正規品をお届け",
    images: ["/assets/images/modern-office.jpg"],
  },
}

const features = [
  {
    icon: Zap,
    title: "量子エネルギー技術",
    description: "最新の量子エネルギー技術を採用した革新的なデバイス。様々なシーンでの活用が期待されています。"
  },
  {
    icon: ShieldCheck,
    title: "本社直送・正規品保証",
    description: "すべての製品はメーカー本社から直送。正規品のみをお届けし、安心のアフターサポートを提供。"
  },
  {
    icon: Target,
    title: "多様なシーンで活用",
    description: "スポーツ、日常生活、ビジネスなど、様々な場面でご利用いただける汎用性の高いデバイス。"
  },
  {
    icon: Award,
    title: "メディア実績",
    description: "「令和の虎」出演で話題の大内大輔氏開発。確かな実績と信頼性を兼ね備えた製品。"
  }
]

const products = [
  {
    name: "CLEMIRA insole",
    price: "¥220,000",
    image: "/assets/images/clemira/insole.jpg",
    description: "最新の量子エネルギー技術を採用したインソール",
    features: [
      "24時間装着可能な設計",
      "スポーツシーンでの使用に最適",
      "日常生活でも快適に使用",
      "耐久性に優れた素材",
      "正規品保証付き"
    ],
    popular: true
  },
  {
    name: "CLEMIRA PHOENIX",
    price: "¥165,000",
    image: "/assets/images/clemira/phoenix.jpg",
    description: "コア技術を搭載したプレミアムモデル",
    features: [
      "CLEMIRA CORE技術搭載",
      "幅広いシーンで活用可能",
      "長時間の使用に対応",
      "多用途に使える設計",
      "本社直送・正規品保証"
    ]
  },
  {
    name: "CLEMIRA athlete",
    price: "¥55,000",
    image: "/assets/images/clemira/athlete.jpg",
    description: "アスリート向けエントリーモデル",
    features: [
      "コンパクト設計",
      "スポーツシーンでの使用に特化",
      "軽量で携帯に便利",
      "簡単操作ですぐに使用可能",
      "本社直送・正規品保証"
    ]
  },
  {
    name: "CLEMIRA blackcard",
    price: "¥27,500",
    image: "/assets/images/clemira/blackcard.jpg",
    description: "携帯に便利なカード型デバイス",
    features: [
      "カード型の薄型設計",
      "財布に入れて常時携帯可能",
      "日常生活での活用に最適",
      "軽量コンパクト設計",
      "本社直送・正規品保証"
    ]
  },
  {
    name: "【自動車用】CLEMIRA極",
    price: "¥27,500",
    image: "/assets/images/clemira/extreme.jpg",
    description: "自動車専用の量子エネルギーデバイス",
    features: [
      "車内環境に最適化",
      "高温環境に対応",
      "簡単設置ですぐに使用可能",
      "長距離ドライブに最適",
      "本社直送・正規品保証"
    ]
  },
  {
    name: "【携帯用】CLEMIRA極",
    price: "¥27,500",
    image: "/assets/images/clemira/extreme.jpg",
    description: "携帯用コンパクトモデル",
    features: [
      "ポケットサイズのコンパクト設計",
      "外出先での活用に最適",
      "軽量で持ち運びが簡単",
      "旅行や出張に便利",
      "本社直送・正規品保証"
    ]
  }
]

const clemiraServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Quantum Energy Device Sales",
  "category": "Health and Wellness Products",
  "brand": {
    "@type": "Brand",
    "name": "CLEMIRA"
  },
  "provider": {
    "@type": "Organization",
    "name": "株式会社Awake",
    "alternateName": "Awake Inc.",
    "url": "https://awakeinc.co.jp/",
    "telephone": "+81-50-7115-4948",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "東京都東大和市向原5-1129-61 渡辺ビル1F",
      "addressLocality": "東大和市",
      "addressRegion": "東京都",
      "postalCode": "207-0013",
      "addressCountry": "JP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+81-50-7115-4948",
      "contactType": "customer service",
      "availableLanguage": "Japanese"
    }
  },
  "name": "CLEMIRA直販店 - 量子エネルギーデバイス",
  "description": "本社直送で、量子エネルギーデバイス「CLEMIRA」シリーズを提供。確かな品質の正規品をお届けします。",
  "url": "https://awakeinc.co.jp/services/clemira/",
  "image": "https://awakeinc.co.jp/assets/images/modern-office.jpg",
  "areaServed": {
    "@type": "Country",
    "name": "Japan"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "JPY",
    "lowPrice": "27500.00",
    "highPrice": "220000.00",
    "offerCount": 6,
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-01-01",
    "priceValidUntil": "2025-12-31",
    "eligibleRegion": {
      "@type": "Country",
      "name": "Japan"
    },
    "seller": {
      "@type": "Organization",
      "name": "株式会社Awake"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "CLEMIRA製品カタログ",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "CLEMIRA insole",
          "description": "最新の量子エネルギー技術を採用したインソール"
        },
        "price": "220000.00",
        "priceCurrency": "JPY"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "CLEMIRA PHOENIX",
          "description": "コア技術を搭載したプレミアムモデル"
        },
        "price": "165000.00",
        "priceCurrency": "JPY"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "CLEMIRA athlete",
          "description": "アスリート向けエントリーモデル"
        },
        "price": "55000.00",
        "priceCurrency": "JPY"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "CLEMIRA blackcard",
          "description": "携帯に便利なカード型デバイス"
        },
        "price": "27500.00",
        "priceCurrency": "JPY"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "【自動車用】CLEMIRA極",
          "description": "自動車専用の量子エネルギーデバイス"
        },
        "price": "27500.00",
        "priceCurrency": "JPY"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "【携帯用】CLEMIRA極",
          "description": "携帯用コンパクトモデル"
        },
        "price": "27500.00",
        "priceCurrency": "JPY"
      }
    ]
  }
}

export default function ClemiraServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clemiraServiceSchema),
        }}
      />
      
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
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
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                  CLEMIRA直販店<br />量子エネルギーデバイス
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  本社直送で、革新的な量子エネルギー技術の正規品をお届け。<br />
                  様々なシーンでの活用が期待される最新テクノロジーです。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#products"
                    className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    製品を見る
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    href="#contact"
                    className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    お問い合わせ
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
                  📦 本社直送
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Sales Benefits */}
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                本社直送だからできること
              </h2>
              <p className="text-xl text-gray-600">
                メーカー本社から直接お届け。確かな品質と安心のサポート
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
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

        {/* Products Section */}
        <section id="products" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                CLEMIRA製品ラインナップ
              </h2>
              <p className="text-xl text-gray-600">
                すべて本社直送。確かな品質の正規品をお届け
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${
                    product.popular ? 'ring-2 ring-blue-600 relative' : 'border border-gray-200'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        人気No.1
                      </span>
                    </div>
                  )}
                  <div className="mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg"
                      priority={index === 0}
                      quality={85}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-semibold text-blue-600">
                        {product.price}
                      </div>
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      本社直送・正規品保証
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
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      product.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    お問い合わせ
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
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                CLEMIRAを選ぶ理由
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">本社直送</h3>
                <p className="text-gray-600">
                  メーカー本社から直接お届け。正規品のみを取り扱い、迅速かつ確実にお手元へ。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">品質保証</h3>
                <p className="text-gray-600">
                  正規品のみを取り扱い、アフターサポートまで一貫対応。安心の品質管理体制でお客様をサポート。
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">専門サポート</h3>
                <p className="text-gray-600">
                  製品に関するご質問やご相談に、専門スタッフが丁寧にお答え。安心してご利用いただけます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              CLEMIRA製品に関するお問い合わせ
            </h2>
            <p className="text-xl text-white/90 mb-8">
              製品の詳細やご注文について、専門スタッフが丁寧にご案内いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                今すぐ相談する
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
}// Force rebuild at Fri Jun  6 21:12:14 JST 2025

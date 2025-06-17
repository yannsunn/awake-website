import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ShoppingCart, CheckCircle, TrendingUp, Shield, Zap, ArrowRight, Package, Truck, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "初期費用0円Amazon代理販売サービス | 株式会社Awake",
  description: "完全成果報酬型Amazon販売代行。商品選定から販売戦略までプロが全て代行。リスクゼロで開始。",
  keywords: "Amazon特価, 代理販売, メーカー直送, 預託在庫, Amazon販売, 株式会社Awake",
  openGraph: {
    title: "Amazon特価代理販売サービス | 株式会社Awake",
    description: "Amazon特価にて代理販売。在庫はメーカー様からの直送または預託在庫から発送。初期費用0円・成果報酬型でリスクゼロ。",
    images: ["/assets/images/ec-shopping.jpg"],
    url: "https://awake-website.netlify.app/services/ec/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon特価代理販売サービス | 株式会社Awake",
    description: "Amazon特価にて代理販売。在庫はメーカー様からの直送または預託在庫から発送",
    images: ["/assets/images/ec-shopping.jpg"],
  },
}

const features = [
  {
    icon: Shield,
    title: "リスクゼロ",
    description: "初期費用0円・成果報酬型なので、リスクなく始められます。売上が発生してからの手数料制です。"
  },
  {
    icon: TrendingUp,
    title: "Amazon特価販売",
    description: "Amazonの特価システムを活用し、競合他社より魅力的な価格で商品を販売いたします。"
  },
  {
    icon: Zap,
    title: "スピード対応",
    description: "商品登録から販売開始まで最短3日。迅速な対応でビジネスチャンスを逃しません。"
  },
  {
    icon: CheckCircle,
    title: "柔軟な在庫管理",
    description: "メーカー様からの直送、または弊社への預託在庫からの発送など、ご都合に合わせた在庫管理システム。"
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

const ecServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "E-commerce Agency",
  "provider": {
    "@type": "Organization",
    "name": "株式会社Awake",
    "url": "https://awake-website.netlify.app/"
  },
  "name": "Amazon特価代理販売サービス",
  "description": "Amazon特価にて代理販売。在庫はメーカー様からの直送または預託在庫から発送。初期費用0円・成果報酬型でリスクゼロ。",
  "url": "https://awake-website.netlify.app/services/ec/",
  "image": "https://awake-website.netlify.app/assets/images/ec-shopping.jpg"
}

export default function EcServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ecServiceSchema),
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
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <ShoppingCart className="h-8 w-8 text-white mr-3" />
                  <span className="text-white/80 font-semibold">E-commerce Service</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  初期費用0円<br />Amazon代理販売サービス
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  完全成果報酬型でリスクゼロ。Amazon販売のプロが<br />
                  商品選定から販売戦略まで全て代行いたします。
                </p>
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-base"
                >
                  無料相談・お見積り
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/assets/images/ec-shopping.jpg"
                  alt="Amazon代理販売サービスのイメージ"
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
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+')] opacity-20"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-100 px-6 py-2 rounded-full mb-6">
                <span className="text-blue-600 font-semibold text-sm">FEATURES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                サービスの特徴
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Amazon特価での代理販売・柔軟な在庫管理システム
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

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                サービスの流れ
              </h2>
              <p className="text-xl text-gray-600">
                シンプルな4ステップで販売開始
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                料金プラン
              </h2>
              <p className="text-xl text-gray-600">
                完全成果報酬型でリスクなし
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {commission.map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-2xl shadow-lg ${
                    index === 0 ? 'ring-2 ring-blue-600 relative' : ''
                  }`}
                >
                  {index === 0 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        人気
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {item.platform}
                  </h3>
                  <div className="text-3xl font-semibold text-blue-600 mb-6">
                    {item.rate}
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/8 to-blue-500/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/8 to-blue-500/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
              <Star className="h-5 w-5 text-blue-300 mr-2" />
              <span className="text-blue-200 font-semibold text-sm">無料相談受付中</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8">
              Amazon特価での<br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-transparent">
                代理販売
              </span>を始めませんか？
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              商品情報をお聞かせいただければ、Amazon特価での売上予測と<br className="hidden md:block" />
              最適な在庫管理方法を無料でご提案いたします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/#contact"
                className="group bg-white text-blue-600 px-10 py-5 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl inline-flex items-center justify-center text-lg"
              >
                無料診断を受ける
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/"
                className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg"
              >
                他のサービスを見る
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">0円</div>
                <div className="text-blue-300">初期費用</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">10-15%</div>
                <div className="text-blue-300">成果報酬</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">3日</div>
                <div className="text-blue-300">最短開始</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
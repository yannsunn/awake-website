import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ShoppingCart, CheckCircle, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Amazon特価代理販売サービス | 株式会社Awake",
  description: "Amazon特価にて代理販売。在庫はメーカー様からの直送または預託在庫から発送。初期費用0円・成果報酬型でリスクゼロ。",
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMzAgMGwxMCA2LjY3djEzLjMzTDMwIDI3IDIwIDIwVjYuNjdMMyAweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPgo8L3N2Zz4=')] opacity-30"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/15 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl -translate-x-1/3 translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <ShoppingCart className="h-8 w-8 text-white mr-3" />
                  <span className="text-white/80 font-semibold">E-commerce Agency</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Amazon特価<br />代理販売サービス
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Amazon特価にて代理販売。在庫はメーカー様からの直送<br />
                  または預託在庫から発送。初期費用0円・成果報酬型。
                </p>
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  無料診断を受ける
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/assets/images/ec-shopping.jpg"
                  alt="EC通販のイメージ"
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
                Amazon特価での代理販売・柔軟な在庫管理システム
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                サービスの流れ
              </h2>
              <p className="text-xl text-gray-600">
                シンプルな4ステップで販売開始
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                手数料体系
              </h2>
              <p className="text-xl text-gray-600">
                Amazon特価販売と在庫管理方法
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {commission.map((item, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.platform}
                  </h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">
                    {item.rate}
                  </div>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 bg-green-50 p-6 rounded-lg">
                💰 <strong>初期費用0円</strong> + <strong>月額固定費なし</strong><br />
                売上が発生した分のみ手数料をいただく完全成果報酬型です
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-green-600 to-green-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Amazon特価での代理販売を始めませんか？
            </h2>
            <p className="text-xl text-white/90 mb-8">
              商品情報をお聞かせいただければ、Amazon特価での売上予測と最適な在庫管理方法を無料でご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                無料診断を受ける
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors"
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
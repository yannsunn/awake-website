import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ShoppingCart, CheckCircle, TrendingUp, Shield, Zap, ArrowRight, Package, Truck, Star } from 'lucide-react'
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
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Modern Amazon-inspired Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDEwMCAwIEwgMCAwIDAgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-20"></div>
            {/* Subtle Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"></div>
            {/* Modern Blurred Shapes - Blue tones */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/8 to-blue-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tr from-blue-400/6 to-blue-500/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-300/4 to-blue-400/6 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          {/* Floating Icons */}
          <div className="absolute top-20 right-20 text-blue-300/20 hidden lg:block">
            <Star size={32} />
          </div>
          <div className="absolute bottom-32 left-16 text-blue-200/20 hidden lg:block">
            <Package size={28} />
          </div>
          <div className="absolute top-1/3 left-20 text-orange-300/30 hidden lg:block animate-pulse" style={{animationDelay: '4s'}}>
            <Truck size={24} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative z-10">
                <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8">
                  <ShoppingCart className="h-6 w-6 text-orange-400 mr-3" />
                  <span className="text-orange-200 font-semibold text-sm tracking-wide">AMAZON SPECIAL PRICING</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-semibold text-white mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
                    Amazon
                  </span>
                  <br />特価代理販売
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                  メーカー直送・預託在庫対応<br />
                  <span className="text-orange-300">初期費用0円</span>の完全成果報酬型
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="#contact"
                    className="group inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl"
                  >
                    無料診断を受ける
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex items-center text-white/80 text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                    <span>リスクゼロで開始</span>
                  </div>
                </div>
              </div>
              <div className="relative lg:justify-self-end">
                {/* Glass Card for Image */}
                <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/assets/images/ec-shopping.jpg"
                      alt="Amazon特価代理販売のイメージ"
                      width={500}
                      height={350}
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
                  </div>
                  {/* Floating Stats */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-xl shadow-lg">
                    <div className="text-sm font-semibold">成果報酬</div>
                    <div className="text-lg font-bold">10-15%</div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg">
                    <div className="text-sm font-semibold">初期費用</div>
                    <div className="text-lg font-bold">0円</div>
                  </div>
                </div>
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
                  <div key={index} className="group relative">
                    {/* Glass Card */}
                    <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                      {/* Gradient Border on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{padding: '1px'}}>
                        <div className="bg-white rounded-2xl h-full w-full"></div>
                      </div>
                      
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-2 rounded-full mb-6">
                <span className="text-blue-600 font-semibold text-sm">PROCESS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                サービスの流れ
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                シンプルな4ステップで販売開始
              </p>
            </div>
            
            <div className="relative">
              {/* Connection Lines */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {process.map((item, index) => (
                  <div key={index} className="text-center relative">
                    {/* Step Circle */}
                    <div className="relative mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <span className="text-2xl font-bold">{item.step}</span>
                      </div>
                      {/* Subtle Effect */}
                      <div className="absolute inset-0 w-20 h-20 bg-blue-400 rounded-full mx-auto opacity-10"></div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commission Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-blue-300/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-100 px-6 py-2 rounded-full mb-6">
                <span className="text-blue-600 font-semibold text-sm">PRICING</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                手数料体系
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Amazon特価販売と在庫管理方法
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {commission.map((item, index) => (
                <div key={index} className="group relative">
                  {/* Glass Card */}
                  <div className="relative bg-white/90 backdrop-blur-sm border border-white/50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{padding: '2px'}}>
                      <div className="bg-white rounded-3xl h-full w-full"></div>
                    </div>
                    
                    <div className="relative z-10 text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {item.platform}
                      </h3>
                      <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">
                        {item.rate}
                      </div>
                      <p className="text-gray-600 text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Success Guarantee */}
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-3xl shadow-xl text-center text-white">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">完全成果報酬型</h3>
                </div>
                <p className="text-xl text-blue-100 leading-relaxed">
                  <strong>初期費用0円</strong> + <strong>月額固定費なし</strong><br />
                  売上が発生した分のみ手数料をいただく安心システム
                </p>
              </div>
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
                <div className="text-3xl font-bold text-orange-400 mb-2">0円</div>
                <div className="text-gray-300">初期費用</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">10-15%</div>
                <div className="text-gray-300">成果報酬</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">3日</div>
                <div className="text-gray-300">最短開始</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
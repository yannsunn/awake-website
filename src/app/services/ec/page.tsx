import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ShoppingCart, CheckCircle, TrendingUp, Shield, Zap, ArrowRight, Package, Truck, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { memo } from 'react'

// アニメーション設定をローカルで定義
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
}

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

// 🚀 Ultra-Optimized EC Service Page (Toyota Style) 
const EcServicePage = memo(function EcServicePage() {
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
        {/* Hero Section - Toyota Style */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight"
              >
                Amazon代理店サービス
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-600 mb-12 font-light leading-relaxed"
              >
                完全成果報酬型でリスクゼロ。プロが商品選定から販売戦略まで代行
              </motion.p>

              <motion.div 
                variants={fadeIn}
                className="flex justify-center"
              >
                <Link 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
                >
                  無料相談・お見積り
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
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                サービス特徴
              </h2>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center">
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
            </motion.div>
          </motion.div>
        </section>

        {/* Process Section - Clean */}
        <section className="py-20 bg-gray-50">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                サービスの流れ
              </h2>
              <p className="text-lg text-gray-600">
                シンプルな4ステップで販売開始
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Commission Section - Simple */}
        <section className="py-20 bg-white">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                料金プラン
              </h2>
              <p className="text-lg text-gray-600">
                完全成果報酬型でリスクなし
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {commission.map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-2xl shadow-sm border ${ 
                    index === 0 ? 'border-gray-900' : 'border-gray-200'
                  }`}
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {item.platform}
                  </h3>
                  <div className="text-3xl font-light text-gray-900 mb-6">
                    {item.rate}
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section - Simple */}
        <section className="py-20 bg-gray-50">
          <motion.div 
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Amazon代理店サービスを始めませんか？
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              商品情報をお聞かせください。売上予測と最適な戦略を無料でご提案
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
            >
              無料診断を受ける
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </>
  )
})

export default EcServicePage
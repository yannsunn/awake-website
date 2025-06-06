import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Armchair, CheckCircle, Hammer, Ruler, Truck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "家具製作サービス | 株式会社Awake",
  description: "世界に一つだけのオーダーメイド家具を完全カスタムで製造。職人の技術で理想の家具を制作します。現地採寸・組立設置まで対応。",
  keywords: "オーダーメイド家具, カスタム家具, 家具製作, 木工, 鉄工, インテリア, 株式会社Awake",
  openGraph: {
    title: "家具製作サービス | 株式会社Awake",
    description: "世界に一つだけのオーダーメイド家具を完全カスタムで製造。職人の技術で理想の家具を制作します。",
    images: ["/assets/images/furniture.jpg"],
    url: "https://awake-website.netlify.app/services/furniture/",
  },
  twitter: {
    card: "summary_large_image",
    title: "家具製作サービス | 株式会社Awake",
    description: "世界に一つだけのオーダーメイド家具を完全カスタムで製造。職人の技術で理想の家具を制作",
    images: ["/assets/images/furniture.jpg"],
  },
}

const features = [
  {
    icon: Hammer,
    title: "完全オーダーメイド",
    description: "お客様のご要望に合わせて、世界に一つだけの家具を職人が手作りで制作いたします。"
  },
  {
    icon: Ruler,
    title: "現地採寸対応",
    description: "設置場所の正確な採寸を行い、空間にぴったりと収まる家具をお作りします。"
  },
  {
    icon: CheckCircle,
    title: "高品質素材",
    description: "厳選された木材・鉄材を使用し、長くご愛用いただける高品質な家具を制作します。"
  },
  {
    icon: Truck,
    title: "配送・設置",
    description: "完成した家具の配送から組立・設置まで、すべて当社で責任を持って行います。"
  }
]

const materials = [
  {
    name: "無垢材",
    description: "ウォールナット、オーク、チェリーなど",
    image: "🌳"
  },
  {
    name: "鉄・スチール",
    description: "アイアンフレーム、スチール脚など",
    image: "⚒️"
  },
  {
    name: "ガラス",
    description: "強化ガラス、デザインガラスなど",
    image: "🔮"
  },
  {
    name: "ファブリック",
    description: "本革、高級布地など",
    image: "🪑"
  }
]

const process = [
  {
    step: "01",
    title: "ご相談・ヒアリング",
    description: "ご要望をお聞きし、理想の家具のイメージを共有します。"
  },
  {
    step: "02",
    title: "現地採寸・設計",
    description: "設置場所の採寸を行い、詳細な設計図を作成します。"
  },
  {
    step: "03",
    title: "お見積り・契約",
    description: "材料費・加工費を含めた正確なお見積りをご提示します。"
  },
  {
    step: "04",
    title: "製作・完成",
    description: "職人が丁寧に製作し、完成後に配送・設置いたします。"
  }
]

const furnitureTypes = [
  {
    name: "テーブル",
    description: "ダイニングテーブル、デスク、コーヒーテーブル",
    price: "15万円〜"
  },
  {
    name: "収納家具",
    description: "本棚、食器棚、クローゼット、TV台",
    price: "20万円〜"
  },
  {
    name: "椅子・ソファ",
    description: "ダイニングチェア、ソファ、スツール",
    price: "8万円〜"
  },
  {
    name: "特注家具",
    description: "店舗什器、オフィス家具、特殊形状家具",
    price: "要相談"
  }
]

const furnitureServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Custom Furniture Manufacturing",
  "provider": {
    "@type": "Organization",
    "name": "株式会社Awake",
    "url": "https://awake-website.netlify.app/"
  },
  "name": "家具製作サービス",
  "description": "世界に一つだけのオーダーメイド家具を完全カスタムで製造。職人の技術で理想の家具を制作します。",
  "url": "https://awake-website.netlify.app/services/furniture/",
  "image": "https://awake-website.netlify.app/assets/images/furniture.jpg",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "JPY",
    "lowPrice": "80000",
    "eligibleRegion": {
      "@type": "Country",
      "name": "Japan"
    }
  }
}

export default function FurnitureServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(furnitureServiceSchema),
        }}
      />
      
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-red-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Armchair className="h-8 w-8 text-white mr-3" />
                  <span className="text-white/80 font-semibold">Custom Furniture</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  家具製作<br />サービス
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  世界に一つだけのオーダーメイド家具を完全カスタムで製造。<br />
                  職人の技術で理想を形にします。
                </p>
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  製作を相談する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/assets/images/furniture.jpg"
                  alt="オーダーメイド家具のイメージ"
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
                職人の技術と厳選素材で理想の家具を制作
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

        {/* Materials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                使用素材
              </h2>
              <p className="text-xl text-gray-600">
                厳選した高品質素材をご用意
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {materials.map((material, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="text-4xl mb-4">{material.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {material.name}
                  </h3>
                  <p className="text-gray-600">
                    {material.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                製作の流れ
              </h2>
              <p className="text-xl text-gray-600">
                ご相談から完成まで4つのステップ
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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

        {/* Furniture Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                製作可能な家具
              </h2>
              <p className="text-xl text-gray-600">
                あらゆる家具をオーダーメイドで制作
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {furnitureTypes.map((type, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {type.description}
                  </p>
                  <div className="text-xl font-bold text-orange-600">
                    {type.price}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 bg-orange-50 p-6 rounded-lg">
                🏠 <strong>現地採寸無料</strong> + <strong>配送・設置込み</strong><br />
                お客様のご自宅まで採寸にお伺いし、完成後は配送・設置まで対応いたします
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              理想の家具を一緒に作りませんか？
            </h2>
            <p className="text-xl text-white/90 mb-8">
              まずはお気軽にご相談ください。無料で現地採寸・お見積りいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                製作を相談する
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
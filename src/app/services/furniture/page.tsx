import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Armchair, CheckCircle, Hammer, Ruler, Truck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "アイアン家具製作・販売 | 株式会社Awake",
  description: "インダストリアルデザインのアイアン家具を制作・販売。デスク、シェルフ、ベンチなど無骨で機能的な家具を豊富に取り揃え。配送・組立込み。",
  keywords: "アイアン家具, インダストリアル家具, スチール家具, 鉄製家具, デスク, シェルフ, ベンチ, 株式会社Awake",
  openGraph: {
    title: "アイアン家具製作・販売 | 株式会社Awake",
    description: "インダストリアルデザインのアイアン家具を制作・販売。無骨で機能的な家具を豊富に取り揃え。",
    images: ["/assets/images/furniture.jpg"],
    url: "https://awake-website-five.vercel.app/services/furniture/",
  },
  twitter: {
    card: "summary_large_image",
    title: "アイアン家具製作・販売 | 株式会社Awake",
    description: "インダストリアルデザインのアイアン家具を制作・販売。無骨で機能的な家具をお届け",
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

const ironFurnitureProducts = [
  {
    name: "アイアンバー",
    price: "¥15,000",
    description: "ランドリーバー・物干し用のシンプルなアイアンバー",
    image: "/assets/images/furniture.jpg",
    features: [
      "20角パイプ仕様",
      "幅150cm×奥行30cm", 
      "ランドリーバー対応",
      "配送・組立込み"
    ]
  },
  {
    name: "アイアングリーンハンギング",
    price: "¥5,000",
    description: "植物用アイアンハンギングバー・雑貨", 
    image: "/assets/images/furniture.jpg",
    features: [
      "直径120cm対応",
      "高さ10cm調整可能",
      "中央に宇の神殿",
      "グリーンハンギング対応"
    ]
  },
  {
    name: "アイアン物干しバー",
    price: "¥15,000",
    description: "F型20角パイプを使用した物干しバー",
    image: "/assets/images/furniture.jpg", 
    features: [
      "F型20角パイプ",
      "直径150cm×奥行30cm",
      "オーダー・デザイン変更可能",
      "ビス希望の方は連絡ください"
    ]
  },
  {
    name: "アイアンサイドテーブル",
    price: "¥8,000",
    description: "角パイプを使用したシンプルなサイドテーブル",
    image: "/assets/images/furniture.jpg",
    features: [
      "角パイプ仕様",
      "高さ60cm×横幅30cm",
      "ビス変更可能",
      "オーダー・デザイン変更対応"
    ]
  },
  {
    name: "二段シェルフ",
    price: "¥3,500",
    description: "2段シェルフ アイアンラック オープンラック オーブンラック",
    image: "/assets/images/furniture.jpg",
    features: [
      "幅50cm×奥行30cm",
      "製造サイズ(mm)",
      "アイアンラック仕様",
      "オープンラック対応"
    ]
  },
  {
    name: "アイアンバー（sold）",
    price: "¥3,800", 
    description: "アイアン雑貨・アイアン家具バー（売り切れ）",
    image: "/assets/images/furniture.jpg",
    features: [
      "売り切れ商品",
      "参考価格表示",
      "類似商品制作可能",
      "お気軽にご相談ください"
    ]
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
  "serviceType": "Iron Furniture Manufacturing and Sales",
  "provider": {
    "@type": "Organization",
    "name": "株式会社Awake",
    "url": "https://awake-website-five.vercel.app/"
  },
  "name": "アイアン家具製作・販売",
  "description": "インダストリアルデザインのアイアン家具を制作・販売。デスク、シェルフ、ベンチなど機能的な家具を豊富に取り揃え。",
  "url": "https://awake-website-five.vercel.app/services/furniture/",
  "image": "https://awake-website-five.vercel.app/assets/images/furniture.jpg",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "JPY",
    "lowPrice": "15000",
    "highPrice": "52000",
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
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cG9seWdvbiBwb2ludHM9IjI1LDUgNDUsNDUgNSw0NSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KSIvPgo8L3N2Zz4=')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-orange-300/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Armchair className="h-8 w-8 text-white mr-3" />
                  <span className="text-white/80 font-semibold">Custom Furniture</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                  アイアン家具<br />製作・販売
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  インダストリアルデザインのアイアン家具を制作・販売。<br />
                  無骨で男らしい、機能性とデザイン性を兼ね備えた家具をお届けします。
                </p>
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
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

        {/* Materials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
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
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                製作の流れ
              </h2>
              <p className="text-xl text-gray-600">
                ご相談から完成まで4つのステップ
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

        {/* Iron Furniture Products Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                アイアン家具ラインナップ
              </h2>
              <p className="text-xl text-gray-600">
                インダストリアルデザインの機能的な家具を豊富に取り揃え
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ironFurnitureProducts.map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <div className="text-2xl font-semibold text-blue-600">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      配送・組立込み
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="#contact"
                    className="block text-center py-2 px-4 rounded-lg font-medium transition-colors border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    詳細を問い合わせ
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Furniture Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                製作可能な家具
              </h2>
              <p className="text-xl text-gray-600">
                あらゆる家具をオーダーメイドで制作
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {furnitureTypes.map((type, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {type.description}
                  </p>
                  <div className="text-xl font-semibold text-blue-600">
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
        <section id="contact" className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              理想の家具を一緒に作りませんか？
            </h2>
            <p className="text-xl text-white/90 mb-8">
              まずはお気軽にご相談ください。無料で現地採寸・お見積りいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                製作を相談する
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
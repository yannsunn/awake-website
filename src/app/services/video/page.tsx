import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Video, CheckCircle, Clock, Zap, ArrowRight, Users, Eye } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "動画編集・制作サービス | 株式会社Awake",
  description: "AI技術活用で顔出し不要・SNS最適化。YouTube・TikTok・Instagram等のプロ動画制作。24時間納品対応。",
  keywords: "動画編集, 動画制作, YouTube, TikTok, Instagram, SNS動画, AI動画編集, 株式会社Awake",
  openGraph: {
    title: "動画編集・制作サービス | 株式会社Awake",
    description: "AI技術活用で顔出し不要・SNS最適化。YouTube・TikTok・Instagram等のプロ動画制作。",
    images: ["/assets/images/video-editing.jpg"],
    url: "https://awake-website.netlify.app/services/video/",
  },
  twitter: {
    card: "summary_large_image",
    title: "動画編集・制作サービス | 株式会社Awake",
    description: "AI技術活用で顔出し不要・SNS最適化。YouTube・TikTok・Instagram等のプロ動画制作",
    images: ["/assets/images/video-editing.jpg"],
  },
}

const features = [
  {
    icon: Users,
    title: "顔出し不要",
    description: "AI技術とテキスト・音声合成を活用し、顔出しなしでも魅力的な動画を制作できます。"
  },
  {
    icon: Zap,
    title: "SNS最適化",
    description: "YouTube、TikTok、Instagramなど、各プラットフォームに最適化された動画を制作します。"
  },
  {
    icon: Clock,
    title: "24時間納品",
    description: "お急ぎの案件にも対応。最短24時間での納品が可能です。"
  },
  {
    icon: Eye,
    title: "視聴数UP",
    description: "視聴者の注意を引く構成とデザインで、再生数・エンゲージメント向上を支援します。"
  }
]

const platforms = [
  {
    name: "YouTube",
    description: "長尺動画・ショート動画",
    specs: "16:9、9:16対応",
    color: "from-red-500 to-red-600"
  },
  {
    name: "TikTok",
    description: "バイラル動画制作",
    specs: "9:16縦型動画",
    color: "from-gray-800 to-gray-900"
  },
  {
    name: "Instagram",
    description: "リール・ストーリー",
    specs: "1:1、9:16対応",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Twitter/X",
    description: "ショート動画",
    specs: "16:9、1:1対応",
    color: "from-blue-400 to-blue-600"
  }
]

const pricing = [
  {
    name: "ベーシック",
    price: "1.5万円〜",
    period: "/本",
    description: "シンプルな動画編集",
    features: [
      "動画編集（〜3分）",
      "テキスト・字幕追加",
      "BGM・効果音",
      "基本的なエフェクト",
      "2回までの修正"
    ]
  },
  {
    name: "スタンダード",
    price: "5万円〜",
    period: "/本",
    description: "プロフェッショナル動画",
    features: [
      "動画編集（〜10分）",
      "アニメーション追加",
      "プロ音声ナレーション",
      "高度なエフェクト",
      "サムネイル制作",
      "5回までの修正"
    ],
    popular: true
  },
  {
    name: "プレミアム",
    price: "10万円〜",
    period: "/月",
    description: "継続的な動画制作",
    features: [
      "月10本まで制作",
      "戦略的企画・構成",
      "完全オリジナル制作",
      "A/Bテスト対応",
      "分析・改善提案",
      "無制限修正"
    ]
  }
]

const videoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Video Production",
  "provider": {
    "@type": "Organization",
    "name": "株式会社Awake",
    "url": "https://awake-website.netlify.app/"
  },
  "name": "動画編集・制作サービス",
  "description": "AI技術活用で顔出し不要・SNS最適化。YouTube・TikTok・Instagram等のプロ動画制作。24時間納品対応。",
  "url": "https://awake-website.netlify.app/services/video/",
  "image": "https://awake-website.netlify.app/assets/images/video-editing.jpg",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "JPY",
    "lowPrice": "15000",
    "highPrice": "100000",
    "eligibleRegion": {
      "@type": "Country",
      "name": "Japan"
    }
  }
}

export default function VideoServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoServiceSchema),
        }}
      />
      
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-pink-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Video className="h-8 w-8 text-white mr-3" />
                  <span className="text-white/80 font-semibold">Video Production</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  動画編集・制作<br />サービス
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  AI技術活用で顔出し不要・SNS最適化。<br />
                  YouTube・TikTok・Instagram等のプロ動画制作。
                </p>
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  制作依頼をする
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/assets/images/video-editing.jpg"
                  alt="動画編集のイメージ"
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
                最新AI技術とプロの技術で最高品質の動画を制作
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

        {/* Platforms Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                対応プラットフォーム
              </h2>
              <p className="text-xl text-gray-600">
                各SNSに最適化された動画を制作
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Video className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {platform.description}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {platform.specs}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                料金プラン
              </h2>
              <p className="text-xl text-gray-600">
                用途に合わせた3つのプラン
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-2xl shadow-lg ${
                    plan.popular ? 'ring-2 ring-purple-500 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        人気
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-purple-600">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
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
                        ? 'bg-purple-500 text-white hover:bg-purple-600' 
                        : 'border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white'
                    }`}
                  >
                    プランを選択
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              動画でビジネスを加速させませんか？
            </h2>
            <p className="text-xl text-white/90 mb-8">
              まずはお気軽にご相談ください。企画段階からサポートいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                制作依頼をする
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
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
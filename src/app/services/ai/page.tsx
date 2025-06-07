import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Bot, CheckCircle, TrendingUp, Users, BookOpen, ArrowRight, Zap, Target, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "AI研修・AIコンサルティング | 株式会社Awake",
  description: "企業のDX推進をAI技術で支援。ChatGPT活用研修からAIシステム導入まで包括的にサポート。生産性向上と業務効率化を実現します。",
  keywords: "AI研修, AIコンサルティング, ChatGPT研修, DX推進, AI導入, 生産性向上, 業務効率化, 株式会社Awake",
  openGraph: {
    title: "AI研修・AIコンサルティング | 株式会社Awake",
    description: "企業のDX推進をAI技術で支援。ChatGPT活用研修からAIシステム導入まで包括的にサポート。",
    images: ["/assets/images/modern-office.jpg"],
    url: "https://awake-website-five.vercel.app/services/ai/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI研修・AIコンサルティング | 株式会社Awake",
    description: "企業のDX推進をAI技術で支援。ChatGPT活用からAIシステム導入まで",
    images: ["/assets/images/modern-office.jpg"],
  },
}

const features = [
  {
    icon: Bot,
    title: "主要AI全般の研修",
    description: "ChatGPT、Claude、Geminiなど主要AIツールの特徴と実践的な活用法を包括的に学習。"
  },
  {
    icon: TrendingUp,
    title: "AIシステム導入支援",
    description: "企業の課題に最適なAIツール選定から導入、運用まで一貫してサポート。ROI最大化を実現。"
  },
  {
    icon: Users,
    title: "全社員向け研修",
    description: "経営層から現場スタッフまで、職種・レベル別にカスタマイズした研修プログラムを提供。"
  },
  {
    icon: BookOpen,
    title: "継続的フォロー",
    description: "研修後の運用支援、定期的な効果測定、追加研修まで中長期的にサポート。"
  }
]

const services = [
  {
    name: "AI全般基礎研修",
    duration: "1時間",
    participants: "10名〜",
    price: "¥5,000〜",
    description: "ChatGPT、Claude、Geminiなど主要AIツールの使い方を習得",
    features: [
      "ChatGPT・Claude・Geminiの基本操作",
      "各AIツールの特徴と使い分け",
      "効果的なプロンプト作成技術",
      "業務での実践的な活用方法",
      "安全で効率的な使い方"
    ]
  },
  {
    name: "AI導入コンサルティング",
    duration: "1ヶ月",
    participants: "企業単位",
    price: "¥298,000〜",
    description: "業務効率化とDX推進のためのAI導入を包括的に支援",
    features: [
      "業務プロセスの効率化診断",
      "AI活用による改善提案",
      "最適なAIツール選定・導入",
      "社員向け実践トレーニング",
      "継続的な効果測定サポート"
    ]
  },
  {
    name: "全社DX推進プログラム",
    duration: "6-12ヶ月",
    participants: "全社員",
    price: "¥1,000,000〜",
    description: "企業全体のデジタル変革を包括的にサポート",
    features: [
      "DX戦略の策定支援",
      "段階的なAI導入計画",
      "全社員向け研修実施",
      "業務プロセス改善提案",
      "継続的な効果測定・改善"
    ]
  }
]

const benefits = [
  {
    icon: Zap,
    title: "生産性向上",
    metric: "平均40%",
    description: "AI活用により業務処理時間を大幅短縮"
  },
  {
    icon: Target,
    title: "コスト削減",
    metric: "年間20%",
    description: "業務効率化によるコスト削減効果"
  },
  {
    icon: Shield,
    title: "品質向上",
    metric: "エラー80%減",
    description: "AI支援によるヒューマンエラーの大幅削減"
  }
]

const process = [
  {
    step: "01",
    title: "現状分析・ヒアリング",
    description: "企業の課題、目標、現在の業務フローを詳細に分析し、最適なAI活用戦略を策定します。"
  },
  {
    step: "02",
    title: "カスタム研修プログラム設計",
    description: "分析結果を基に、企業の業務内容と社員レベルに最適化した研修プログラムを設計します。"
  },
  {
    step: "03",
    title: "実践的研修・導入支援",
    description: "理論だけでなく実際の業務に即した実践的な研修を実施。AI導入も並行してサポートします。"
  },
  {
    step: "04",
    title: "継続フォロー・効果測定",
    description: "研修後の運用状況をモニタリングし、効果測定と継続的な改善提案を行います。"
  }
]

const aiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Training and Consulting",
  "provider": {
    "@type": "Organization",
    "name": "株式会社Awake",
    "url": "https://awake-website-five.vercel.app/"
  },
  "name": "AI研修・AIコンサルティング",
  "description": "企業のDX推進をAI技術で支援。ChatGPT活用研修からAIシステム導入まで包括的にサポート。",
  "url": "https://awake-website-five.vercel.app/services/ai/",
  "image": "https://awake-website-five.vercel.app/assets/images/modern-office.jpg",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "JPY",
    "lowPrice": "5000",
    "highPrice": "1000000",
    "eligibleRegion": {
      "@type": "Country",
      "name": "Japan"
    }
  }
}

export default function AIServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiServiceSchema),
        }}
      />
      
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz4KICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIi8+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpIi8+Cjwvc3ZnPg==')] opacity-25"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Bot className="h-8 w-8 text-white mr-3" />
                  <span className="text-white/80 font-semibold">AI Training & Consulting</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                  AI研修・<br />AIコンサルティング
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  企業のDX推進をAI技術で支援。<br />
                  ChatGPT・Claude・Geminiなど主要AIツールの活用研修から<br />
                  AIシステム導入まで包括的にサポートします。
                </p>
                <Link 
                  href="#contact"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  研修・コンサルを相談する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <Image
                  src="/assets/images/modern-office.jpg"
                  alt="AI研修・コンサルティングのイメージ"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-cyan-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                  🤖 DX推進支援
                </div>
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
                実践的なAI活用で企業の生産性を劇的に向上
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

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                導入効果
              </h2>
              <p className="text-xl text-gray-600">
                AI活用による具体的な成果指標
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {benefit.metric}
                    </div>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                サービスメニュー
              </h2>
              <p className="text-xl text-gray-600">
                企業のニーズに合わせた柔軟なプログラム
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">期間:</span>
                      <span className="text-sm font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">対象:</span>
                      <span className="text-sm font-medium">{service.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">料金:</span>
                      <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
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

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                導入の流れ
              </h2>
              <p className="text-xl text-gray-600">
                現状分析から効果測定まで4つのステップ
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

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              AI導入で企業の未来を変えませんか？
            </h2>
            <p className="text-xl text-white/90 mb-8">
              無料の現状分析から始めて、最適なAI活用戦略をご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                無料相談を申し込む
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
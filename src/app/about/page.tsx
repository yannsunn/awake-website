import type { Metadata } from 'next'
import Link from 'next/link'
import { User, Target, Heart, Award, Users, Zap, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { COMPANY_DATA } from '@/lib/company-data'
import PageLayout from '@/components/layout/PageLayout'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { createArticleSchema, createBreadcrumbSchema } from '@/lib/enhanced-schema'
import LineButton from '@/components/ui/LineButton'
import { UltraHero } from '@/components/ui/UltraSection'


export const metadata: Metadata = {
  title: "会社概要・代表挨拶 | 株式会社Awake（アウェイク）東京都東大和市",
  description: "東京都東大和市の株式会社Awake（アウェイク）の会社概要。代表取締役田形康貴のメッセージ、企業理念、ミッション・ビジョンをご紹介。2021年設立、法人番号8012801020829。ホームページ制作、AIチャットボット開発、Amazon代理店サービスを提供。",
  keywords: "株式会社Awake,アウェイク,東大和市,田形康貴,会社概要,代表挨拶,ミッション,ビジョン,企業理念,法人番号,東京",
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: `${COMPANY_DATA.url}/about`,
    siteName: COMPANY_DATA.basic.name,
    title: "会社概要・代表挨拶 | 株式会社Awake",
    description: "代表取締役田形康貴からのメッセージと企業理念。革新的なソリューションで企業の成長をサポートします。",
    images: [
      {
        url: `${COMPANY_DATA.url}/assets/images/ogp.jpg`,
        width: 1200,
        height: 630,
        alt: "株式会社Awake - 会社概要"
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "会社概要・代表挨拶 | 株式会社Awake",
    description: "代表取締役田形康貴からのメッセージと企業理念。",
    images: [`${COMPANY_DATA.url}/assets/images/ogp.jpg`],
  },
  alternates: {
    canonical: `${COMPANY_DATA.url}/about`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// 🚀 企業価値観データ
const values = [
  {
    icon: Target,
    title: "経営資源の最適化",
    description: "限られた予算を最大限に活用。無駄を省き、本当に必要な投資に集中できる環境を実現します。"
  },
  {
    icon: Zap,
    title: "継続的な自己研鑽",
    description: "最新技術の習得と実践を通じ、常に最高の価値を提供できる能力を維持・向上させます。"
  },
  {
    icon: Heart,
    title: "長期的な信頼関係",
    description: "単なる取引ではなく、お客様の成長パートナーとして、共に繁栄する関係を構築します。"
  },
  {
    icon: Users,
    title: "相互繁栄の追求",
    description: "お客様、パートナー、社員、すべての関係者が共に成長し、繁栄できる仕組みを創造します。"
  }
]

// 🚀 私たちの約束データ
const promises = [
  {
    icon: "💼",
    title: "結果にコミット",
    description: "3ヶ月以内に必ず成果を出します。出なければ費用はいただきません。"
  },
  {
    icon: "⚡",
    title: "スピード対応",
    description: "お問い合わせから48時間以内に必ずご返答。ビジネスのスピードを止めません。"
  },
  {
    icon: "🤝",
    title: "完全な透明性",
    description: "隠れたコストは一切なし。すべての費用を最初に明確にお伝えします。"
  }
]

// 🚀 サービス特徴データ
const features = [
  {
    title: "必要最小限の投資で開始",
    items: [
      "小さく始めて、成果を見ながら拡大",
      "無駄な機能は省き、本質的な価値に集中",
      "段階的な導入でリスクを最小化"
    ]
  },
  {
    title: "実績に基づく確実な提案",
    items: [
      "業界別・規模別の成功パターンを活用",
      "投資効果を最大化する設計",
      "失敗しない導入プロセス"
    ]
  },
  {
    title: "継続的な最適化",
    items: [
      "導入後も月額コストを抑制",
      "成果に応じた改善提案",
      "長期的な成長を支援"
    ]
  }
]

export default function AboutPage() {
  // 構造化データ
  const articleSchema = createArticleSchema({
    title: "会社概要・代表挨拶 | 株式会社Awake",
    description: "株式会社Awakeの会社概要と代表取締役からのメッセージをご紹介",
    publishDate: "2020-01-01",
    modifyDate: new Date().toISOString(),
    author: COMPANY_DATA.basic.ceo,
    image: "/assets/images/ogp.jpg"
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "ホーム", url: COMPANY_DATA.contact.website },
    { name: "会社概要", url: `${COMPANY_DATA.contact.website}about` }
  ])

  return (
    <PageLayout>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      {/* Hero Section */}
      <UltraHero
        title="会社概要"
        subtitle="私たちが、お客様に選ばれる理由"
        description="「高すぎるIT投資」を、「適正な成長投資」に変える"
        backgroundImage="/images/company-gears.webp"
      />

      {/* CEO Message Section */}
      <section className="relative py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              代表メッセージ
            </h2>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-gray-900 leading-relaxed">
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 text-xl mb-2">挫折から這い上がり、学んだこと</h3>
                <p className="text-base sm:text-lg font-medium text-gray-900 mb-4">代表取締役CEO　{COMPANY_DATA.basic.ceo}</p>

                <p className="text-base sm:text-lg mb-4 break-words">
                  株式会社Awakeの田形でございます。この事業を立ち上げたきっかけは、「100万円以上投資してホームページを制作したが、期待した成果が得られない」という経営者様のお悩みでした。その資金があれば、より直接的に事業成長へ投資できたはず。この経営資源の非効率な配分を解決したい。その想いが、現在の事業の原点です。
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">不登校から、全国代表へ</h3>

                <p className="text-base sm:text-lg mb-4">
                  静岡県清水区で育った私は、幼稚園から中学まで不登校でした。しかし高校で生徒会長に。トヨタの自動車専門学校では実技の歴代記録を更新し、2年間全国の学年代表を務めました。地元ディーラーで新人賞も受賞しましたが、そこで気づいたのです。「技術だけでは、お客様の本当の課題は解決できない」と。
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">なぜ、Awakeを立ち上げたのか</h3>

                <p className="text-base sm:text-lg mb-4">
                  高額なIT投資で失敗し、本業に投資できない経営者。技術はあるのに活用できていない現状。これは、能力はあったのに不登校で活かせなかった私の過去と重なりました。でも、環境と機会があれば人は変われる。だから決めました。「適正なコストで最大の価値を提供し、お客様の可能性を引き出す会社を作ろう」と。
                </p>
              </div>

              <div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 mb-4 border border-blue-200 shadow-lg">
                  <p className="text-base sm:text-lg font-semibold text-gray-900 text-lg text-center mb-2">「つながるすべての人に、感謝と繁栄を」</p>
                </div>

                <p className="text-base sm:text-lg mb-4">
                  不登校だった私が生徒会長になれたのは、信じてくれる人がいたから。今度は私たちが、お客様の可能性を信じる番です。高額な投資は必要ありません。必要なのは、一歩踏み出す勇気だけ。
                </p>

                <p className="text-base sm:text-lg">
                  IT投資でお悩みなら、ぜひお話をお聞かせください。あなたのビジネスの本当の可能性を、一緒に見つけましょう。
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl pt-8 pb-6 px-6 sm:pt-10 sm:px-8 text-center border border-blue-200 shadow-lg">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{COMPANY_DATA.basic.ceo}</h3>
              <p className="text-base sm:text-lg font-medium text-gray-900 text-lg mb-4">代表取締役CEO</p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2">略歴</h4>
                  <ul className="text-sm sm:text-base text-gray-900 space-y-1">
                    <li>静岡県清水区出身</li>
                    <li>幼稚園〜中学：不登校</li>
                    <li>高校：生徒会長</li>
                    <li>トヨタ自動車専門学校：実技歴代記録更新、全国学年代表（2年間）</li>
                    <li>静岡トヨペット：整備士（4年間）、新人賞受賞</li>
                    <li>2020年：株式会社Awake設立（現在5期目）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2">経営理念</h4>
                  <p className="text-sm sm:text-base text-gray-900">
                    「つながるすべての人に、感謝と繁栄を」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              ミッション・ビジョン
            </h2>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ミッション
            </h3>
            <p className="text-base sm:text-lg text-gray-900">
              お客様の経営資源を最適配分し、真の成果を生み出すパートナーとして、適正なコストで最大の価値を提供し続けます。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ビジョン
            </h3>
            <p className="text-base sm:text-lg text-gray-900">
              適正なコストで最大の価値を得られる経営環境の実現。そして、関わるすべての人々が相互に繁栄できる社会を創造します。
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="relative bg-white">
        <div className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 break-words text-gray-900">
                なぜAwakeなのか
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 break-words leading-relaxed">
                私たちの3つの約束
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
                {promises.map((promise, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-6">{promise.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 break-words">{promise.title}</h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed break-words">{promise.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="relative bg-white">
        <div className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 break-words text-gray-900">
                サービスの特徴
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 break-words leading-relaxed">
                コストを抑えながら、成果を最大化する仕組み
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 break-words">{feature.title}</h3>
                    <ul className="space-y-4" role="list">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-base md:text-lg text-gray-600 break-words leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="relative bg-white">
        <div className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 break-words text-gray-900">
                私たちの価値観
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 break-words leading-relaxed">
                お客様と共に成長し続けるために
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow flex items-start">
                      <div className="text-4xl mr-6 mt-1 flex-shrink-0">
                        {value.icon === Target ? "🎯" : value.icon === Zap ? "📚" : value.icon === Heart ? "🤝" : "🌱"}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 break-words">{value.title}</h3>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed break-words">{value.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              チーム紹介
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900">
              業務委託・パートナーを含む10名体制の専門チーム
            </p>
            <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              正社員、業務委託、パートナー企業を含む約10名体制で運営。各分野の専門家が連携し、お客様のビジネスを多角的にサポートします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{COMPANY_DATA.basic.ceo}</h3>
                <p className="text-base sm:text-lg text-gray-600 font-medium mb-4">代表取締役CEO</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">専門領域</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• 経営戦略立案</li>
                    <li>• IT投資最適化</li>
                    <li>• 業務プロセス改善</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">主な実績</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• 50社以上の企業支援</li>
                    <li>• 平均30%のコスト削減実績</li>
                    <li>• 顧客満足度4.9/5.0</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Director */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Zap className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">テクニカルディレクター</h3>
                <p className="text-base sm:text-lg text-gray-600 font-medium mb-4">技術統括責任者</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">専門領域</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• Web開発（10年以上）</li>
                    <li>• AI/機械学習実装</li>
                    <li>• システムアーキテクチャ設計</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">主な実績</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• 100以上のWebサイト構築</li>
                    <li>• AIチャットボット30件導入</li>
                    <li>• 大手企業システム開発経験</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Design Director */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">デザインディレクター</h3>
                <p className="text-base sm:text-lg text-gray-600 font-medium mb-4">デザイン統括責任者</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">専門領域</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• UI/UXデザイン（8年以上）</li>
                    <li>• ブランディング戦略</li>
                    <li>• コンバージョン最適化</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">主な実績</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• デザインアワード受賞歴</li>
                    <li>• CVR平均200%改善実績</li>
                    <li>• 大手企業ブランディング経験</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Marketing Director */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Target className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">マーケティングディレクター</h3>
                <p className="text-base sm:text-lg text-gray-600 font-medium mb-4">マーケティング統括責任者</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">専門領域</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• SEO/SEM戦略（7年以上）</li>
                    <li>• コンテンツマーケティング</li>
                    <li>• データ分析・改善提案</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">主な実績</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• 検索順位1位獲得多数</li>
                    <li>• 月間流入10倍達成事例</li>
                    <li>• Google広告運用経験豊富</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* EC Consultant */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">ECコンサルタント</h3>
                <p className="text-base sm:text-lg text-gray-600 font-medium mb-4">EC事業統括責任者</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">専門領域</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• Amazon販売戦略（5年以上）</li>
                    <li>• 在庫管理・物流最適化</li>
                    <li>• 売上分析・改善提案</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">主な実績</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• 20社以上のEC支援経験</li>
                    <li>• 平均売上300%増加実績</li>
                    <li>• Amazon公式パートナー認定</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Success */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">カスタマーサクセス</h3>
                <p className="text-base sm:text-lg text-gray-600 font-medium mb-4">顧客支援責任者</p>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">専門領域</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• 顧客対応・サポート</li>
                    <li>• 導入研修・トレーニング</li>
                    <li>• 継続的な改善提案</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">主な実績</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• 顧客継続率98%以上</li>
                    <li>• 平均対応時間24時間以内</li>
                    <li>• 顧客満足度4.8/5.0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="relative inline-block border-2 border-blue-600 rounded-2xl shadow-xl">
              <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">チーム体制の強み</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-900 mb-2">🎯 柔軟な体制</p>
                  <p className="text-sm sm:text-base text-gray-600">
                    正社員・業務委託・パートナー企業の最適な組み合わせで、プロジェクトごとに最高のチームを編成
                  </p>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-900 mb-2">💡 多様な専門性</p>
                  <p className="text-sm sm:text-base text-gray-600">
                    技術、デザイン、マーケティング、EC運営など、各分野のエキスパートが連携
                  </p>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-900 mb-2">📈 実績重視</p>
                  <p className="text-sm sm:text-base text-gray-600">
                    大手企業からスタートアップまで50社以上の支援実績。平均顧客満足度4.9/5.0
                  </p>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-semibold text-gray-900 mb-2">🤝 長期パートナー</p>
                  <p className="text-sm sm:text-base text-gray-600">
                    単なる受託ではなく、お客様の成功を第一に考えた継続的なサポート体制
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-blue-200">
                <p className="text-base sm:text-lg text-gray-900">
                  <span className="font-semibold">会社データ:</span>
                  設立2021年（現在5期目） | 法人番号 8012801020829 |
                  本社: 東京都東大和市向原5-1129-61 渡辺ビル1F |
                  資本金: 100万円
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              次のステップへ
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-4">
              まずは、お話を聞かせてください
            </p>
            <p className="text-lg text-gray-900 mb-8">
              あなたのビジネスの課題と理想の姿。無料相談で、最適な解決策を一緒に考えましょう。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              無料相談を予約する
            </Link>
            <Link href="/#services" className="inline-flex items-center justify-center px-8 py-4 text-lg bg-white hover:bg-gray-50 text-blue-600 font-medium rounded-xl shadow-md hover:shadow-lg border-2 border-blue-600 transition-all duration-300 transform hover:scale-[1.02]">
              サービス一覧を見る
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
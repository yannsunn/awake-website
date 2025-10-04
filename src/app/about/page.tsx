import type { Metadata } from 'next'
import Link from 'next/link'
import { User, Target, Heart, Award, Users, Zap, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { COMPANY_DATA } from '@/lib/company-data'
import PageLayout from '@/components/layout/PageLayout'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { createArticleSchema } from '@/lib/enhanced-schema'
import LineButton from '@/components/ui/LineButton'
import '@/app/corporate.css'

export const metadata: Metadata = {
  title: "会社概要・代表挨拶 | 株式会社Awake",
  description: "株式会社Awakeの会社概要、代表取締役田形康貴からのメッセージ、ミッション・ビジョンをご紹介。革新的なソリューションで企業の成長をサポート。",
  keywords: "株式会社Awake, 田形康貴, 会社概要, 代表挨拶, ミッション, ビジョン, 企業理念",
  openGraph: {
    title: "会社概要・代表挨拶 | 株式会社Awake",
    description: "代表取締役田形康貴からのメッセージと企業理念。革新的なソリューションで企業の成長をサポートします。",
    images: ["/assets/images/ogp.jpg"],
    url: "https://awakeinc.co.jp/about/",
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

  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "会社概要", url: "/about" }
  ]

  return (
    <PageLayout>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28 corp-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black leading-tight">
              私たちが、お客様に選ばれる理由
            </h1>
            <p className="text-xl md:text-2xl text-black font-semibold mb-4">
              「高すぎるIT投資」を、「適正な成長投資」に変える
            </p>
            <p className="text-base md:text-lg text-black mb-8">
              株式会社Awakeは、無駄を削ぎ落とし、本当に価値のある投資だけに集中できる環境を創ります。
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="corp-heading-2 mb-4 text-black">
              代表メッセージ
            </h2>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* CEO画像 - Unsplash仮画像（後で差し替え） */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                  alt="代表取締役CEO 田形康貴"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6">
                  <h3 className="text-white font-bold text-2xl mb-1">{COMPANY_DATA.basic.ceo}</h3>
                  <p className="text-gray-200">代表取締役CEO</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-50 to-gray-50 rounded-2xl p-4 sm:p-6 mb-6 border border-blue-200 shadow-lg">
              <div>
                <h3 className="corp-heading-3 text-black text-lg sm:text-xl mb-1">代表挨拶</h3>
                <p className="corp-text-small text-gray-600">Message from CEO</p>
              </div>
            </div>

            <h2 className="corp-heading-2 text-black mb-6">
              代表メッセージ
            </h2>
            
            <div className="space-y-6 text-black leading-relaxed">
              <div className="mb-6">
                <h3 className="corp-text-body font-semibold text-black text-xl mb-2">挫折から這い上がり、学んだこと</h3>
                <p className="corp-text-body font-medium text-black mb-4">代表取締役CEO　{COMPANY_DATA.basic.ceo}</p>

                <p className="corp-text-body mb-4 break-words">
                  株式会社Awakeの田形でございます。この事業を立ち上げたきっかけは、「100万円以上投資してホームページを制作したが、期待した成果が得られない」という経営者様のお悩みでした。その資金があれば、より直接的に事業成長へ投資できたはず。この経営資源の非効率な配分を解決したい。その想いが、現在の事業の原点です。
                </p>
              </div>

              <div>
                <h3 className="corp-heading-3 text-black mb-4">不登校から、全国代表へ</h3>

                <p className="corp-text-body mb-4">
                  静岡県清水区で育った私は、幼稚園から中学まで不登校でした。しかし高校で生徒会長に。トヨタの自動車専門学校では実技の歴代記録を更新し、2年間全国の学年代表を務めました。地元ディーラーで新人賞も受賞しましたが、そこで気づいたのです。「技術だけでは、お客様の本当の課題は解決できない」と。
                </p>
              </div>

              <div>
                <h3 className="corp-heading-3 text-black mb-4">なぜ、Awakeを立ち上げたのか</h3>

                <p className="corp-text-body mb-4">
                  高額なIT投資で失敗し、本業に投資できない経営者。技術はあるのに活用できていない現状。これは、能力はあったのに不登校で活かせなかった私の過去と重なりました。でも、環境と機会があれば人は変われる。だから決めました。「適正なコストで最大の価値を提供し、お客様の可能性を引き出す会社を作ろう」と。
                </p>
              </div>

              <div>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 mb-4 border border-blue-200 shadow-lg">
                  <p className="corp-text-body font-semibold text-black text-lg text-center mb-2">「つながるすべての人に、感謝と繁栄を」</p>
                </div>

                <p className="corp-text-body mb-4">
                  不登校だった私が生徒会長になれたのは、信じてくれる人がいたから。今度は私たちが、お客様の可能性を信じる番です。高額な投資は必要ありません。必要なのは、一歩踏み出す勇気だけ。
                </p>

                <p className="corp-text-body">
                  IT投資でお悩みなら、ぜひお話をお聞かせください。あなたのビジネスの本当の可能性を、一緒に見つけましょう。
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl pt-8 pb-6 px-6 sm:pt-10 sm:px-8 text-center border border-blue-200 shadow-lg">
              <div className="relative w-80 h-80 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-blue-400 shadow-2xl ring-4 ring-blue-400/20 ring-offset-4 ring-offset-gray-900">
                  <Image
                    src="/assets/images/ceo-profile.jpg"
                    alt={COMPANY_DATA.basic.ceo}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="320px"
                    priority
                  />
                </div>
              </div>
              <h3 className="corp-heading-3 text-black mb-2">{COMPANY_DATA.basic.ceo}</h3>
              <p className="corp-text-body font-medium text-black text-lg mb-4">代表取締役CEO</p>
              <div className="space-y-4">
                <div>
                  <h4 className="corp-text-body font-medium text-black mb-2">略歴</h4>
                  <ul className="corp-text-small text-black space-y-1">
                    <li>静岡県清水区出身</li>
                    <li>幼稚園〜中学：不登校</li>
                    <li>高校：生徒会長</li>
                    <li>トヨタ自動車専門学校：実技歴代記録更新、全国学年代表（2年間）</li>
                    <li>静岡トヨペット：整備士（4年間）、新人賞受賞</li>
                    <li>2020年：株式会社Awake設立（現在5期目）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="corp-text-body font-medium text-black mb-2">経営理念</h4>
                  <p className="corp-text-small text-black">
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
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="corp-heading-2 mb-4 text-black">
              ミッション・ビジョン
            </h2>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className="corp-card">
            <h3 className="corp-heading-2 text-black mb-4">
              ミッション
            </h3>
            <p className="corp-text-body text-black">
              お客様の経営資源を最適配分し、真の成果を生み出すパートナーとして、適正なコストで最大の価値を提供し続けます。
            </p>
          </div>

          <div className="corp-card">
            <h3 className="corp-heading-2 text-black mb-4">
              ビジョン
            </h3>
            <p className="corp-text-body text-black">
              適正なコストで最大の価値を得られる経営環境の実現。そして、関わるすべての人々が相互に繁栄できる社会を創造します。
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="corp-heading-2 mb-4 text-black">
              なぜAwakeなのか
            </h2>
            <p className="corp-text-lead text-black">
              私たちの3つの約束
            </p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {promises.map((promise, index) => (
            <div key={index} className="corp-card">
              <div className="text-4xl mb-4">{promise.icon}</div>
              <h3 className="corp-heading-3 text-black mb-3">{promise.title}</h3>
              <p className="corp-text-body text-black">{promise.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="corp-heading-2 mb-4 text-black">
              サービスの特徴
            </h2>
            <p className="corp-text-lead text-black">
              コストを抑えながら、成果を最大化する仕組み
            </p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="corp-card">
              <h3 className="corp-heading-3 text-black mb-4">{feature.title}</h3>
              <ul className="space-y-3" role="list">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="corp-text-small text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="corp-heading-2 mb-4 text-black">
              私たちの価値観
            </h2>
            <p className="corp-text-lead text-black">
              お客様と共に成長し続けるために
            </p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="corp-card flex items-start">
                <div className="text-3xl mr-4 mt-1">
                  {value.icon === Target ? "🎯" : value.icon === Zap ? "📚" : value.icon === Heart ? "🤝" : "🌱"}
                </div>
                <div>
                  <h3 className="corp-heading-3 text-black mb-3">{value.title}</h3>
                  <p className="corp-text-body text-black">{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="corp-heading-2 mb-4 text-black">
              次のステップへ
            </h2>
            <p className="corp-text-lead text-black mb-4">
              まずは、お話を聞かせてください
            </p>
            <p className="text-lg text-black mb-8">
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
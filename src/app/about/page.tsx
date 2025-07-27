import type { Metadata } from 'next'
import { User, Target, Heart, Award, Users, Zap, CheckCircle } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import PageTemplate, { ContentSection, PageHeader } from '@/components/layout/PageTemplate'
import OptimizedImage from '@/components/ui/OptimizedImage'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { STYLES } from '@/lib/constants'
import { createArticleSchema } from '@/lib/enhanced-schema'

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
    <PageTemplate
      title="会社概要"
      description="株式会社Awakeの企業情報と代表メッセージ"
      breadcrumbs={breadcrumbs}
    >
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />

      {/* Hero Section */}
      <PageHeader
        title="私たちが、お客様に選ばれる理由"
        subtitle="「高すぎるIT投資」を、「適正な成長投資」に変える"
        className="bg-white"
      >
        <p className={STYLES.text.body.medium + " max-w-3xl mx-auto"}>
          株式会社Awakeは、無駄を削ぎ落とし、<br className="hidden sm:block" />
          本当に価値のある投資だけに集中できる環境を創ります。
        </p>
      </PageHeader>

      {/* CEO Message Section */}
      <ContentSection ariaLabel="代表メッセージ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-900 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className={STYLES.heading.h3.emphasis}>代表挨拶</h3>
                  <p className={STYLES.text.label.secondary + " text-gray-600"}>Message from CEO</p>
                </div>
              </div>
            </div>
            
            <h2 className={STYLES.heading.h2.section + " mb-6"}>
              代表メッセージ
            </h2>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="mb-6">
                <h3 className={STYLES.text.emphasis.strong + " text-xl mb-2"}>お客様と共に成長し続ける企業を目指して</h3>
                <p className={STYLES.text.emphasis.medium + " mb-4"}>代表取締役CEO　{COMPANY_DATA.basic.ceo}</p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  株式会社Awakeの田形でございます。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  私がこの事業を立ち上げたきっかけは、ある経営者様との出会いでした。「100万円以上投資してホームページを制作したが、期待した成果が得られない」というお悩みをお聞きし、強い問題意識を抱きました。
                </p>
                
                <p className={STYLES.text.description.medium}>
                  その投資額があれば、人材育成や設備投資など、より直接的な事業成長に活用できたはずです。このような経営資源の非効率な配分を解決したい。その想いが、現在の事業の原点となっています。
                </p>
              </div>
              
              <div>
                <h3 className={STYLES.heading.h3.emphasis + " mb-4"}>多様な経験が育んだ経営理念</h3>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  静岡県清水区で生まれ育った私は、幼少期から中学時代にかけて不登校を経験しました。その期間、オンラインコミュニティでの交流を通じて、物理的な距離を超えた「信頼関係」の大切さを学びました。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  高校卒業後は、トヨタ系ディーラーで自動車整備士として勤務。「お客様の安全を預かる責任」と「見えない部分にこそ誠実に取り組む姿勢」を、プロフェッショナルの先輩方から学びました。
                </p>
                
                <p className={STYLES.text.description.medium}>
                  その後、物販事業での起業を経て、2020年に株式会社Awakeを設立。これまでの多様な経験すべてが、現在の経営理念の礎となっています。
                </p>
              </div>
              
              <div>
                <h3 className={STYLES.heading.h3.emphasis + " mb-4"}>私たちが提供する価値</h3>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <p className={STYLES.text.emphasis.strong + " text-lg text-center mb-2"}>「適正コストで最大の価値を」</p>
                </div>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  これは単なるスローガンではありません。<br />
                  お客様の限られた経営資源を最適に配分し、本質的な成長を実現するという、私たちの約束です。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  高額な初期投資や、不透明な追加費用。<br />
                  そういった従来のIT業界の慣習を変えたい。
                </p>
                
                <p className={STYLES.text.description.medium}>
                  必要最小限のコストで最大の成果を生み出し、削減できた資金を次の成長投資に充てていただく。<br />
                  それが、私たちの考える真の支援です。
                </p>
              </div>
              
              <div>
                <h3 className={STYLES.heading.h3.emphasis + " mb-4"}>つながるすべての人に、感謝と繁栄を</h3>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  この言葉には、私たちの根本的な価値観が込められています。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  お客様の成功は、私たちの成功。<br />
                  パートナー企業の発展は、私たちの発展。<br />
                  社員の成長は、会社の成長。
                </p>
                
                <p className={STYLES.text.description.medium}>
                  関わるすべての方々と共に成長し、繁栄を分かち合える関係を築いていく。それが、株式会社Awakeの目指す姿です。
                </p>
              </div>
              
              <div>
                <h3 className={STYLES.heading.h3.emphasis + " mb-4"}>最後に</h3>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  私たちは決して大きな会社ではありません。<br />
                  しかし、お客様一社一社と真摯に向き合い、確実な成果をお届けする姿勢においては、どこにも負けない自信があります。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  もし現在、IT投資やコスト削減でお悩みでしたら、ぜひ一度ご相談ください。お客様のビジネスに最適なソリューションを、共に考えさせていただければ幸いです。
                </p>
                
                <p className={STYLES.text.description.medium}>
                  皆様との新たな出会いを、心よりお待ちしております。
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-16 w-16 text-white" />
              </div>
              <h3 className={STYLES.heading.h3.card + " mb-2"}>{COMPANY_DATA.basic.ceo}</h3>
              <p className={STYLES.text.emphasis.medium + " text-lg mb-4"}>代表取締役CEO</p>
              <div className="space-y-4">
                <div>
                  <h4 className={STYLES.text.emphasis.medium + " mb-2"}>略歴</h4>
                  <ul className={STYLES.text.description.small + " text-gray-600 space-y-1"}>
                    <li>静岡県清水区出身</li>
                    <li>トヨタ系ディーラー 自動車整備士</li>
                    <li>物販会社起業を経て、2020年 株式会社Awake設立</li>
                    <li>現在、5期目（令和6年度）</li>
                  </ul>
                </div>
                <div>
                  <h4 className={STYLES.text.emphasis.medium + " mb-2"}>経営理念</h4>
                  <p className={STYLES.text.description.small + " text-gray-600"}>
                    「つながるすべての人に、感謝と繁栄を」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Mission & Vision Section */}
      <ContentSection className="bg-gray-50" ariaLabel="ミッション・ビジョン">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            ミッション・ビジョン
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
            <h3 className={STYLES.heading.h2.subsection + " mb-4"}>
              ミッション
            </h3>
            <p className={STYLES.text.description.medium}>
              お客様の経営資源を最適配分し、真の成果を生み出すパートナーとして、適正なコストで最大の価値を提供し続けます。
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
            <h3 className={STYLES.heading.h2.subsection + " mb-4"}>
              ビジョン
            </h3>
            <p className={STYLES.text.description.medium}>
              適正なコストで最大の価値を得られる経営環境の実現。そして、関わるすべての人々が相互に繁栄できる社会を創造します。
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Our Promise Section */}
      <ContentSection ariaLabel="私たちの約束">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            なぜAwakeなのか
          </h2>
          <p className={STYLES.text.body.large}>
            私たちの3つの約束
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {promises.map((promise, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">{promise.icon}</div>
              <h3 className={STYLES.heading.h3.emphasis + " mb-3"}>{promise.title}</h3>
              <p className={STYLES.text.description.medium}>{promise.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Service Features Section */}
      <ContentSection className="bg-gray-50" ariaLabel="サービスの特徴">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            サービスの特徴
          </h2>
          <p className={STYLES.text.body.large}>
            コストを抑えながら、成果を最大化する仕組み
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className={STYLES.heading.h3.card + " mb-4"}>{feature.title}</h3>
              <ul className="space-y-3" role="list">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className={STYLES.text.description.small + " text-gray-600"}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Company Values Section */}
      <ContentSection ariaLabel="私たちの価値観">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            私たちの価値観
          </h2>
          <p className={STYLES.text.body.large}>
            お客様と共に成長し続けるために
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="flex items-start p-6 sm:p-8 bg-white rounded-xl shadow-sm">
                <div className="text-3xl mr-4 mt-1">
                  {value.icon === Target ? "🎯" : value.icon === Zap ? "📚" : value.icon === Heart ? "🤝" : "🌱"}
                </div>
                <div>
                  <h3 className={STYLES.heading.h3.card + " mb-3"}>{value.title}</h3>
                  <p className={STYLES.text.description.medium + " text-gray-600"}>{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </ContentSection>

      {/* Contact CTA Section */}
      <ContentSection className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="text-center">
          <h2 className={STYLES.heading.h2.section + " text-white mb-6"}>
            次のステップへ
          </h2>
          <p className={STYLES.text.body.large + " text-white mb-4"}>
            まずは、お話を聞かせてください
          </p>
          <p className={STYLES.text.body.medium + " text-gray-300 mb-8 max-w-3xl mx-auto"}>
            あなたのビジネスの課題と理想の姿。<br className="hidden sm:block" />
            無料相談で、最適な解決策を一緒に考えましょう。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AccessibleButton
              href="https://lin.ee/awakeinc"
              variant="secondary"
              className="bg-green-500 text-white hover:bg-green-600 border-green-500"
              ariaLabel="LINEで相談する"
              showArrow
              target="_blank"
              rel="noopener noreferrer"
            >
              LINEで相談する
            </AccessibleButton>
            <AccessibleButton
              href="/#contact"
              variant="secondary"
              className="bg-white text-gray-900 hover:bg-gray-100"
              ariaLabel="無料相談を予約する"
            >
              無料相談を予約する
            </AccessibleButton>
            <AccessibleButton
              href="/#services"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              ariaLabel="サービス一覧を見る"
            >
              サービス一覧を見る
            </AccessibleButton>
          </div>
        </div>
      </ContentSection>
    </PageTemplate>
  )
}
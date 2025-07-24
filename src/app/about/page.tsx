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
    title: "結果保証",
    description: "3か月以内に成果を出す"
  },
  {
    icon: "⚡",
    title: "48時間対応",
    description: "問い合わせから2営業日以内"
  },
  {
    icon: "🤝",
    title: "透明性",
    description: "すべてのコストを明確に提示"
  },
  {
    icon: "📈",
    title: "継続最適化",
    description: "常に最新・最適な状態を維持"
  },
  {
    icon: "🔒",
    title: "成果報酬",
    description: "結果が出なければ費用不要"
  }
]

// 🚀 サービス特徴データ
const features = [
  {
    title: "コストパフォーマンス",
    items: [
      "必要最小限の投資で最大の成果を実現",
      "コストを抑えて高品質なサービスを提供",
      "無駄な機能を省き、本質的な価値に集中",
      "ランニングコストの最適化"
    ]
  },
  {
    title: "実績に基づく確実性",
    items: [
      "豊富な導入実績とノウハウ",
      "投資効果を最大化する提案",
      "業界別・規模別の成功パターンを熟知",
      "失敗リスクを最小化する段階的導入"
    ]
  },
  {
    title: "継続的な成長支援",
    items: [
      "初期導入後も月額コストを抑制",
      "必要に応じた段階的な機能追加",
      "成果に応じた最適化提案",
      "長期パートナーとしての伴走"
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
        title="会社概要"
        subtitle="信頼の絆で、共に成長し続ける企業"
        className="bg-white"
      >
        <p className={STYLES.text.body.medium + " max-w-3xl mx-auto"}>
          限られた経営資源を最適配分し、<br className="hidden sm:block" />
          お客様の本質的な成長を支援する、コストパフォーマンス重視の経営パートナーです。
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
              代表挨拶
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="mb-4">
                <p className={STYLES.text.emphasis.strong + " mb-2"}>代表取締役CEO　{COMPANY_DATA.basic.ceo}</p>
                <p className={STYLES.text.body.medium}>お客様、パートナー企業の皆様、そして当社に関わるすべての方々へ</p>
              </div>
              
              <p className={STYLES.text.description.medium}>
                静岡県清水区で生まれ育ちました。幼稚園から中学校まで不登校を経験し、ゲームやネットコミュニティに没頭する日々でした。その中で、情報技術の可能性と、人と人とのつながりの大切さを学びました。
              </p>
              
              <p className={STYLES.text.description.medium}>
                高校卒業後はトヨタ系ディーラーで整備士として、「お客様のために最善を尽くす」というプロフェッショナルの姿勢を学びました。その後物販事業を経て、2020年に株式会社Awakeを設立。これまでの多様な経験が、今の経営哲学の根幹となっています。
              </p>
              
              <p className={STYLES.text.description.medium}>
                現在の事業を始めたきっかけは、多くの中小企業が100万円以上もかけてホームページを作ったのに、活用できずに死蔵させてしまっている現実でした。その資金があれば、業務効率化や人材育成に投資できたはず。そんな無駄をなくし、お客様の経営資源を最適配分するお手伝いがしたいと思いました。
              </p>
              
              <p className={STYLES.text.description.medium}>
                私たちの強みは、コストパフォーマンスの高いサービスを提供すること。そして、削減したコストを、お客様が本当に必要とする投資に回していただくことです。これは、私自身が多様な経験を通じて学んだ「無駄を削ぎ、本質に集中する」という哲学から生まれました。
              </p>
              
              <div className="pt-6 border-t border-gray-200">
                <p className={STYLES.text.emphasis.strong + " text-lg sm:text-xl mb-2"}>つながるすべての人に、感謝と繁栄を。</p>
                <p className={STYLES.text.description.medium + " text-gray-600"}>お客様の成功が、私たちの成功です。これからも、お客様のビジネスの成長を心から支援し、共に歩み続けてまいります。</p>
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
              <p className={STYLES.text.description.small + " text-gray-600"}>
                静岡県清水区出身。トヨタの整備士を経て物販会社を起業。
                2020年（令和2年）に株式会社Awakeを設立し、現在5期目（令和6年度）。
              <br />信頼の関係づくりを第一に、お客様の繁栄を共に目指している。
              </p>
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
            私たちの約束
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {promises.map((promise, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-xl">
              <div className="text-3xl sm:text-4xl mb-4">{promise.icon}</div>
              <h3 className={STYLES.heading.h3.emphasis + " mb-2"}>{promise.title}</h3>
              <p className={STYLES.text.description.small + " text-gray-600"}>{promise.description}</p>
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
      <ContentSection ariaLabel="企業価値観">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            企業価値観
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="flex items-start p-6 sm:p-8 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <IconComponent className="h-8 w-8 text-white" />
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
            一緒に成長しませんか？
          </h2>
          <p className={STYLES.text.body.medium + " text-gray-300 mb-8 max-w-3xl mx-auto"}>
            私たちは、お客様のビジネス成功を真剣に考えるパートナーです。<br className="hidden sm:block" />
            まずはお気軽にご相談ください。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AccessibleButton
              href="/#contact"
              variant="secondary"
              className="bg-white text-gray-900 hover:bg-gray-100"
              ariaLabel="お問い合わせページに移動"
            >
              お問い合わせ
            </AccessibleButton>
            <AccessibleButton
              href="/services/web"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              ariaLabel="サービス詳細ページに移動"
            >
              サービス一覧
            </AccessibleButton>
          </div>
        </div>
      </ContentSection>
    </PageTemplate>
  )
}
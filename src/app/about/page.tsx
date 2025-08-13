import type { Metadata } from 'next'
import { User, Target, Heart, Award, Users, Zap, CheckCircle } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import PageLayout from '@/components/layout/PageLayout'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { STYLES } from '@/lib/constants'
import { createArticleSchema } from '@/lib/enhanced-schema'
import { TEXT_SHADOW, CARD_STYLES, TEXT_BG_STYLES } from '@/lib/ultra-styles'
import UltraSection, { UltraHero, UltraCTA } from '@/components/ui/UltraSection'
import LineButton from '@/components/ui/LineButton'

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
      <UltraHero
        title="私たちが、お客様に選ばれる理由"
        subtitle="「高すぎるIT投資」を、「適正な成長投資」に変える"
        description="株式会社Awakeは、無駄を削ぎ落とし、本当に価値のある投資だけに集中できる環境を創ります。"
        className="bg-gray-900/30"
      />

      {/* CEO Message Section */}
      <UltraSection
        title="代表メッセージ"
        className="bg-gray-900/20"
        ariaLabel="代表メッセージ"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-850/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 border border-purple-500/20 shadow-lg">
              <div className="flex items-center">
                <div className="w-20 sm:w-24 h-20 sm:h-24 mr-4 flex items-center justify-center">
                  <OptimizedImage
                    src="/assets/images/awake-logo-dark.png"
                    alt="Awake Inc. Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain brightness-0 invert"
                    priority
                  />
                </div>
                <div>
                  <h3 className={STYLES.heading.h3.emphasis + " text-white text-lg sm:text-xl"}>代表挨拶</h3>
                  <p className={STYLES.text.label.secondary + " text-gray-200"}>Message from CEO</p>
                </div>
              </div>
            </div>
            
            <h2 className={STYLES.heading.h2.section + " text-white mb-6"}>
              代表メッセージ
            </h2>
            
            <div className="space-y-8 text-gray-200 leading-relaxed">
              <div className="mb-6">
                <h3 className={STYLES.text.emphasis.strong + " text-white text-xl mb-2"}>挫折から這い上がり、学んだこと</h3>
                <p className={STYLES.text.emphasis.medium + " text-white mb-4"}>代表取締役CEO　{COMPANY_DATA.basic.ceo}</p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  株式会社Awakeの田形でございます。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  私がこの事業を立ち上げたきっかけは、
                  ある経営者様との出会いでした。
                </p>
                <p className={STYLES.text.description.medium + " mb-4"}>
                  「100万円以上投資してホームページを制作したが、
                  期待した成果が得られない」
                </p>
                <p className={STYLES.text.description.medium + " mb-4"}>
                  というお悩みをお聞きし、強い問題意識を抱きました。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  その投資額があれば、人材育成や設備投資など、
                  より直接的な事業成長に活用できたはずです。
                </p>
                <p className={STYLES.text.description.medium}>
                  このような経営資源の非効率な配分を解決したい。
                  その想いが、現在の事業の原点となっています。
                </p>
              </div>
              
              <div>
                <h3 className={STYLES.heading.h3.emphasis + " text-white mb-4"}>不登校からトップへ。私の転機</h3>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  静岡県清水区で育った私は、幼稚園から中学まで不登校でした。
                  学校に行かず、ずっとゲームをしていました。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  しかし高校で、人生が変わりました。
                  なんと生徒会長になったのです。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  その勢いでトヨタの自動車専門学校に進学。
                  そこで私は、本気で打ち込むことの楽しさを知りました。
                </p>
                
                <ul className={STYLES.text.description.medium + " mb-4 space-y-2 ml-6"}>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>実技の歴代記録を複数更新</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>2年間、全国の学年代表を務める</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>整備の技術で、誰にも負けない自信を得る</span>
                  </li>
                </ul>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  地元静岡のトヨタ系ディーラーに就職後も、その姿勢は変わりませんでした。
                  4年間の勤務で新人賞を受賞。
                </p>
                
                <p className={STYLES.text.description.medium}>
                  しかし、そこで気づいたのです。
                  「技術だけでは、お客様の本当の課題は解決できない」
                </p>
              </div>
              
              <div>
                <h3 className={STYLES.heading.h3.emphasis + " text-white mb-4"}>なぜ、Awakeを立ち上げたのか</h3>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  整備士時代、多くの経営者の方とお話する機会がありました。
                  そこで聞いたのが、冒頭の言葉です。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  高額なIT投資で失敗し、本業に投資できない。
                  技術はあるのに、活用できていない。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  これは、私の過去と重なりました。
                  能力はあったのに、不登校で活かせなかった自分。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  でも、環境と機会があれば、人は変われる。
                </p>
                
                <p className={STYLES.text.description.medium}>
                  だから決めました。
                  「適正なコストで最大の価値を提供し、お客様の可能性を引き出す会社を作ろう」と。
                </p>
              </div>
              
              <div>
                <h3 className={STYLES.heading.h3.emphasis + " text-white mb-4"}>私たちの信念</h3>
                
                <div className="bg-gradient-to-br from-purple-900/30 to-gray-800/95 backdrop-blur-sm rounded-lg p-6 mb-4 border border-purple-500/20 shadow-lg">
                  <p className={STYLES.text.emphasis.strong + " text-white text-lg text-center mb-2"}>「つながるすべての人に、感謝と繁栄を」</p>
                </div>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  不登校だった私が、生徒会長になれた。<br />
                  ゲームばかりしていた私が、全国代表になれた。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  それは、信じてくれる人がいたからです。
                </p>
                
                <p className={STYLES.text.description.medium + " mb-4"}>
                  今度は私たちが、お客様の可能性を信じる番です。
                </p>
                
                <p className={STYLES.text.description.medium}>
                  高額な投資は必要ありません。<br />
                  必要なのは、一歩踏み出す勇気だけ。
                </p>
              </div>
              
                <p className={STYLES.text.description.medium + " mb-4"}>
                  もし今、IT投資でお悩みなら、ぜひお話をお聞かせください。
                </p>
                
                <p className={STYLES.text.description.medium}>
                  あなたのビジネスの、本当の可能性を一緒に見つけましょう。
                </p>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-gray-800/95 to-gray-850/95 backdrop-blur-sm rounded-2xl pt-8 pb-6 px-6 sm:pt-10 sm:px-8 text-center border border-purple-500/20 shadow-lg">
              <div className="relative w-72 h-72 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-4 border-gradient-to-r from-violet-400 to-purple-400 shadow-2xl ring-4 ring-purple-500/20 ring-offset-4 ring-offset-gray-900">
                  <OptimizedImage
                    src="/assets/images/ceo-profile.jpg"
                    alt={COMPANY_DATA.basic.ceo}
                    width={288}
                    height={288}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
              <h3 className={STYLES.heading.h3.card + " text-white mb-2"}>{COMPANY_DATA.basic.ceo}</h3>
              <p className={STYLES.text.emphasis.medium + " text-white text-lg mb-4"}>代表取締役CEO</p>
              <div className="space-y-4">
                <div>
                  <h4 className={STYLES.text.emphasis.medium + " text-white mb-2"}>略歴</h4>
                  <ul className={STYLES.text.description.small + " text-gray-200 space-y-1"}>
                    <li>静岡県清水区出身</li>
                    <li>幼稚園〜中学：不登校</li>
                    <li>高校：生徒会長</li>
                    <li>トヨタ自動車専門学校：実技歴代記録更新、全国学年代表（2年間）</li>
                    <li>静岡トヨペット：整備士（4年間）、新人賞受賞</li>
                    <li>2020年：株式会社Awake設立（現在5期目）</li>
                  </ul>
                </div>
                <div>
                  <h4 className={STYLES.text.emphasis.medium + " text-white mb-2"}>経営理念</h4>
                  <p className={STYLES.text.description.small + " text-gray-200"}>
                    「つながるすべての人に、感謝と繁栄を」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UltraSection>

      {/* Mission & Vision Section */}
      <UltraSection
        title="ミッション・ビジョン"
        className="bg-gray-800/40"
        ariaLabel="ミッション・ビジョン"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className="bg-gradient-to-br from-gray-750/95 to-gray-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-500 hover:border-purple-500/40 shadow-lg transition-all duration-300">
            <h3 className={STYLES.heading.h2.subsection + " text-white mb-4"}>
              ミッション
            </h3>
            <p className={STYLES.text.description.medium + " text-gray-200"}>
              お客様の経営資源を最適配分し、真の成果を生み出すパートナーとして、適正なコストで最大の価値を提供し続けます。
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-750/95 to-gray-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-500 hover:border-purple-500/40 shadow-lg transition-all duration-300">
            <h3 className={STYLES.heading.h2.subsection + " text-white mb-4"}>
              ビジョン
            </h3>
            <p className={STYLES.text.description.medium + " text-gray-200"}>
              適正なコストで最大の価値を得られる経営環境の実現。そして、関わるすべての人々が相互に繁栄できる社会を創造します。
            </p>
          </div>
        </div>
      </UltraSection>

      {/* Our Promise Section */}
      <UltraSection
        title="なぜAwakeなのか"
        subtitle="私たちの3つの約束"
        className="bg-gray-900/30"
        ariaLabel="私たちの約束"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {promises.map((promise, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/95 to-gray-850/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-500 hover:border-purple-500/40 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{promise.icon}</div>
              <h3 className={STYLES.heading.h3.emphasis + " text-white mb-3"}>{promise.title}</h3>
              <p className={STYLES.text.description.medium + " text-gray-200"}>{promise.description}</p>
            </div>
          ))}
        </div>
      </UltraSection>

      {/* Service Features Section */}
      <UltraSection
        title="サービスの特徴"
        subtitle="コストを抑えながら、成果を最大化する仕組み"
        className="bg-gray-800/40"
        ariaLabel="サービスの特徴"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-750/95 to-gray-800/95 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-gray-500 hover:border-purple-500/40 hover:shadow-xl transition-all duration-300">
              <h3 className={STYLES.heading.h3.card + " text-white mb-4"}>{feature.title}</h3>
              <ul className="space-y-3" role="list">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className={STYLES.text.description.small + " text-gray-200"}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </UltraSection>

      {/* Company Values Section */}
      <UltraSection
        title="私たちの価値観"
        subtitle="お客様と共に成長し続けるために"
        className="bg-gray-900/30"
        ariaLabel="私たちの価値観"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="flex items-start p-6 sm:p-8 bg-gradient-to-br from-gray-800/95 to-gray-850/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-500 hover:border-purple-500/40 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mr-4 mt-1">
                  {value.icon === Target ? "🎯" : value.icon === Zap ? "📚" : value.icon === Heart ? "🤝" : "🌱"}
                </div>
                <div>
                  <h3 className={STYLES.heading.h3.card + " text-white mb-3"}>{value.title}</h3>
                  <p className={STYLES.text.description.medium + " text-gray-200"}>{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </UltraSection>

      {/* Contact CTA Section */}
      <UltraCTA
        title="次のステップへ"
        subtitle="まずは、お話を聞かせてください"
        description="あなたのビジネスの課題と理想の姿。無料相談で、最適な解決策を一緒に考えましょう。"
        buttons={[
          { href: "/#contact", label: "無料相談を予約する", variant: "primary" as const },
          { href: "/#services", label: "サービス一覧を見る", variant: "secondary" as const }
        ]}
        className="bg-dark-overlay text-white"
      />
    </PageLayout>
  )
}
import type { Metadata } from 'next'
import { User, Target, Heart, Award, Users, Zap, CheckCircle } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import PageTemplate, { ContentSection, PageHeader } from '@/components/layout/PageTemplate'
import OptimizedImage from '@/components/ui/OptimizedImage'
import AccessibleButton from '@/components/ui/AccessibleButton'
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
    title: "お客様第一",
    description: "お客様の成功が私たちの成功。常にお客様の視点に立ち、最適なソリューションを提供いたします。"
  },
  {
    icon: Zap,
    title: "革新への挑戦",
    description: "最新技術とクリエイティブな発想で、業界の常識を覆す革新的なサービスを創出し続けます。"
  },
  {
    icon: Heart,
    title: "誠実な姿勢",
    description: "すべてのステークホルダーに対して誠実であり、透明性の高い事業運営を心がけています。"
  },
  {
    icon: Users,
    title: "チームワーク",
    description: "多様な才能を結集し、チーム一丸となってお客様の課題解決に取り組みます。"
  }
]

// 🚀 私たちの約束データ
const promises = [
  {
    icon: "💼",
    title: "品質保証",
    description: "高品質なサービス提供をお約束"
  },
  {
    icon: "⚡",
    title: "迅速対応",
    description: "お客様のご要望に素早く対応"
  },
  {
    icon: "🤝",
    title: "長期サポート",
    description: "末永くお客様をサポート"
  },
  {
    icon: "📈",
    title: "成長支援",
    description: "お客様のビジネス成長を支援"
  },
  {
    icon: "🔒",
    title: "信頼性",
    description: "確実で信頼できるサービス"
  }
]

// 🚀 サービス特徴データ
const features = [
  {
    title: "技術的専門性",
    items: [
      "最新のWeb技術とフレームワーク",
      "AI・機械学習の実践的活用",
      "セキュリティ対策とパフォーマンス最適化",
      "モバイルファーストのレスポンシブデザイン"
    ]
  },
  {
    title: "ビジネス理解",
    items: [
      "業界特有の課題と解決策の提案",
      "ROI最大化を意識した施策立案",
      "競合分析と差別化戦略",
      "長期的なビジネス成長の支援"
    ]
  },
  {
    title: "サポート体制",
    items: [
      "専任担当者による継続的サポート",
      "迅速なレスポンスと問題解決",
      "定期的な成果レポートと改善提案",
      "24時間365日の緊急時対応"
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
        className="bg-gradient-to-br from-gray-50 via-white to-gray-100"
      >
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          株式会社Awakeは、美しいコーポレートサイト制作と先進的なAI導入支援を通じて、<br className="hidden sm:block" />
          お客様企業の成長と発展を支えるテクノロジーパートナーです。
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
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">代表挨拶</h3>
                  <p className="text-sm text-gray-600">Message from CEO</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              代表挨拶
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="mb-4">
                <p className="font-semibold text-gray-900 mb-2">代表取締役CEO　{COMPANY_DATA.basic.ceo}</p>
                <p className="text-base sm:text-lg text-gray-600">お客様、パートナー企業の皆様、そして当社に関わるすべての方々へ</p>
              </div>
              
              <p className="text-sm sm:text-base">
                私がトヨタ系ディーラーで整備士として働いていた頃、一台一台の車に込められたお客様の想いと向き合う中で、「信頼」という価値の重みを学びました。その後、物販企業を経営する中で、ビジネスの本質は技術やサービスの提供だけでなく、人と人との信頼関係にあることを確信しました。
              </p>
              
              <p className="text-sm sm:text-base">
                2020年に株式会社Awakeを設立し、5期目を迎えた今、私たちが大切にしているのは「与え続けることで縁を太くする」という理念です。これは単なる美辞麗句ではなく、実体験から生まれた経営の核心です。
              </p>
              
              <p className="text-sm sm:text-base">
                現代は、企業ウェブサイトが会社の顔となり、AI活用が競争力を左右する時代です。しかし、どんなに技術が進化しても、その根底にあるべきは人と人との信頼関係だと私は信じています。
              </p>
              
              <p className="text-sm sm:text-base">
                私たちは、単なるサービス提供者ではありません。お客様の課題を自らの課題として捉え、共に解決策を模索し、成功を分かち合うパートナーでありたいと願っています。お客様の繁栄なくして、私たちの成長はありません。この想いを胸に、これからも誠実に、そして情熱を持って事業に取り組んでまいります。
              </p>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">つながるすべての人に、感謝と繁栄を。</p>
                <p className="text-sm sm:text-base text-gray-600">この言葉を実現するために、私たちは今日も全力で走り続けます。</p>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{COMPANY_DATA.basic.ceo}</h3>
              <p className="text-base sm:text-lg text-gray-900 font-semibold mb-4">代表取締役CEO</p>
              <p className="text-xs sm:text-sm text-gray-600">
                静岡県清水区出身。トヨタの整備士を経て物販会社を起業。
                2020年（令和2年）に株式会社Awakeを設立し、現在5期目（令和6年度）。
                信頼の関係づくりを第一に、お客様の繁栄を共に目指している。
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Mission & Vision Section */}
      <ContentSection className="bg-gray-50" ariaLabel="ミッション・ビジョン">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ミッション・ビジョン
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">
              ミッション
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              私たちは、最新のデジタル技術と人間中心の思考を融合させ、お客様の真の課題を解決することで、持続可能な価値を創造し続けます。
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">
              ビジョン
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              すべての企業がデジタルの力で輝き、つながるすべての人が感謝と繁栄を共有できる、より良い社会の実現を目指します。
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Our Promise Section */}
      <ContentSection ariaLabel="私たちの約束">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            私たちの約束
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {promises.map((promise, index) => (
            <div key={index} className="text-center p-4 sm:p-6 rounded-xl">
              <div className="text-3xl sm:text-4xl mb-4">{promise.icon}</div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">{promise.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{promise.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Service Features Section */}
      <ContentSection className="bg-gray-50" ariaLabel="サービスの特徴">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            サービスの特徴
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <ul className="space-y-3" role="list">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-600">{item}</span>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
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
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </ContentSection>

      {/* Contact CTA Section */}
      <ContentSection className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6">
            一緒に成長しませんか？
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
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
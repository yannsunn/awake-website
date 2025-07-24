import type { Metadata } from 'next'
import { COMPANY_DATA } from '@/lib/company-data'
import PageTemplate, { ContentSection } from '@/components/layout/PageTemplate'
import { STYLES } from '@/lib/constants'
import { Handshake, Award, Globe, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: `パートナー企業 | ${COMPANY_DATA.basic.name}`,
  description: `${COMPANY_DATA.basic.name}と協力し、お客様に最高のサービスを提供するパートナー企業をご紹介します。`,
  keywords: `${COMPANY_DATA.metadata.keywords}, パートナー企業, 提携企業, 協業`,
}

// パートナー企業データ
const partners = [
  {
    category: "ビジネス支援パートナー",
    description: "お客様の事業成長を多角的にサポート",
    companies: [
      {
        name: "経営支援",
        description: "経営戦略の立案から実行まで、経験豊富なコンサルタントが伴走支援",
        icon: "📊"
      },
      {
        name: "営業支援",
        description: "営業プロセスの改善、営業人材の育成、新規開拓の支援",
        icon: "💼"
      },
      {
        name: "SNS運用",
        description: "効果的なSNSマーケティング戦略の立案と運用代行",
        icon: "📱"
      },
      {
        name: "AIコンサルティング",
        description: "最新のAI技術を活用した業務改善・自動化支援",
        icon: "🤖"
      }
    ]
  },
  {
    category: "ライフスタイル支援パートナー",
    description: "従業員の生活の質向上をサポート",
    companies: [
      {
        name: "カーシェア",
        description: "法人向け優待価格でのカーシェアリングサービス",
        icon: "🚗"
      },
      {
        name: "不動産",
        description: "オフィス移転、社宅手配、投資物件のご紹介",
        icon: "🏢"
      },
      {
        name: "保険見直し",
        description: "法人保険・個人保険の最適化提案",
        icon: "🛡️"
      },
      {
        name: "パーソナルジム",
        description: "従業員の健康管理・福利厚生プログラム",
        icon: "💪"
      }
    ]
  },
  {
    category: "人材・キャリア支援パートナー",
    description: "人材の確保と成長をサポート",
    companies: [
      {
        name: "人材派遣",
        description: "即戦力となる優秀な人材の紹介・派遣",
        icon: "👥"
      },
      {
        name: "副業紹介",
        description: "スキルを活かした副業マッチングサービス",
        icon: "💡"
      },
      {
        name: "出版",
        description: "企業ブランディングのための書籍出版支援",
        icon: "📚"
      }
    ]
  }
]

export default function PartnersPage() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "パートナー企業", url: "/partners" }
  ]

  return (
    <PageTemplate
      title="パートナー企業"
      description="信頼できるパートナーと共に、お客様の成功を支援します"
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <ContentSection className="bg-gray-50">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={STYLES.heading.h1.primary + " mb-6"}>
            パートナー企業
          </h1>
          <p className={STYLES.text.body.large + " mb-8"}>
            私たちは、各分野のエキスパートと連携し、<br className="hidden sm:block" />
            お客様に最適なソリューションをワンストップで提供します。
          </p>
        </div>
      </ContentSection>

      {/* Partner Values Section */}
      <ContentSection>
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            パートナーシップの価値
          </h2>
          <p className={STYLES.text.body.medium}>
            相互の強みを活かし、お客様により大きな価値を提供します
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              icon: Handshake,
              title: "相互成長",
              description: "パートナー企業と共に成長し、新しい価値を創造します"
            },
            {
              icon: Award,
              title: "専門性の融合",
              description: "各分野のプロフェッショナルが連携し、最高の成果を実現"
            },
            {
              icon: Globe,
              title: "幅広いソリューション",
              description: "多様なニーズに対応できる総合的なサービス提供"
            },
            {
              icon: Shield,
              title: "信頼性の向上",
              description: "実績あるパートナーとの協業で、安心感を提供"
            }
          ].map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="text-center p-6 rounded-xl">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className={STYLES.heading.h3.emphasis + " mb-3"}>
                  {value.title}
                </h3>
                <p className={STYLES.text.description.small + " text-gray-600"}>
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </ContentSection>

      {/* Partner Categories Section */}
      <ContentSection className="bg-gray-50">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            パートナー企業一覧
          </h2>
          <p className={STYLES.text.body.medium}>
            各分野で信頼できるパートナー企業と提携しています
          </p>
        </div>

        <div className="space-y-12">
          {partners.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-8">
                <h3 className={STYLES.heading.h2.subsection + " mb-2"}>
                  {category.category}
                </h3>
                <p className={STYLES.text.description.medium + " text-gray-600"}>
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.companies.map((company, companyIndex) => (
                  <div 
                    key={companyIndex} 
                    className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-3xl mb-4 text-center">
                      {company.icon}
                    </div>
                    <h4 className={STYLES.heading.h3.emphasis + " mb-3 text-center"}>
                      {company.name}
                    </h4>
                    <p className={STYLES.text.description.small + " text-gray-600 text-center"}>
                      {company.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className={STYLES.text.description.medium + " text-gray-600"}>
            ※ 各サービスの詳細については、お問い合わせください
          </p>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection>
        <div className="text-center">
          <h2 className={STYLES.heading.h2.section + " mb-6"}>
            パートナーシップについて
          </h2>
          <p className={STYLES.text.body.medium + " mb-8"}>
            新たなパートナーシップのご相談も承っております。<br />
            お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className={STYLES.button.primary}
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </ContentSection>
    </PageTemplate>
  )
}
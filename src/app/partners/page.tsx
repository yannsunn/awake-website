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

// パートナー企業データ（後で更新予定）
const partners = [
  {
    category: "テクノロジーパートナー",
    companies: []
  },
  {
    category: "ソリューションパートナー",
    companies: []
  },
  {
    category: "アライアンスパートナー",
    companies: []
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

      {/* Partner Categories Section - プレースホルダー */}
      <ContentSection className="bg-gray-50">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            パートナー企業一覧
          </h2>
          <p className={STYLES.text.body.medium}>
            各分野で信頼できるパートナー企業と提携しています
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-gray-100">
            <p className={STYLES.text.description.large + " text-gray-600 mb-6"}>
              パートナー企業の情報は準備中です。<br />
              詳細については、お問い合わせください。
            </p>
          </div>
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
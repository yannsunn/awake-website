import type { Metadata } from 'next'
import Link from 'next/link'
import { COMPANY_DATA } from '@/lib/company-data'
import PageLayout from '@/components/layout/PageLayout'
import { STYLES } from '@/lib/constants'
import { TEXT_SHADOW, CARD_STYLES, TEXT_BG_STYLES } from '@/lib/ultra-styles'
import UltraSection, { UltraHero, UltraCTA } from '@/components/ui/UltraSection'
import { Handshake, Award, Globe, Shield } from 'lucide-react'
import LineButton from '@/components/ui/LineButton'
import UltraButton from '@/components/ui/UltraButton'
import UltraCard from '@/components/ui/UltraCard'

export const metadata: Metadata = {
  title: `パートナー企業 | ${COMPANY_DATA.basic.name}`,
  description: `${COMPANY_DATA.basic.name}と協力し、お客様に最高のサービスを提供するパートナー企業をご紹介します。`,
  keywords: `${COMPANY_DATA.metadata.keywords}, パートナー企業, 提携企業, 協業`,
}

// パートナー企業データ
const partners = [
  {
    category: "ビジネス成長を加速させるパートナー。",
    description: "売上アップから効率化まで、成長に必要なすべてを。",
    companies: [
      {
        name: "経営戦略パートナー",
        icon: "📊",
        services: [
          "事業計画の策定支援",
          "資金調達のアドバイス",
          "M&A・事業承継の相談",
          "経営改善の実行支援"
        ]
      },
      {
        name: "営業力強化パートナー",
        icon: "💼",
        services: [
          "営業プロセスの最適化",
          "営業ツールの導入支援",
          "新規開拓の代行",
          "営業研修の実施"
        ]
      },
      {
        name: "デジタルマーケティングパートナー",
        icon: "📱",
        services: [
          "SNS運用代行",
          "インフルエンサーマーケティング",
          "Web広告の運用",
          "コンテンツ制作"
        ]
      },
      {
        name: "テクノロジーパートナー",
        icon: "🤖",
        services: [
          "AI・RPA導入支援",
          "システム開発",
          "DX推進コンサルティング",
          "セキュリティ対策"
        ]
      }
    ]
  },
  {
    category: "働く人を支えるライフサポート。",
    description: "従業員満足度を高め、生産性を向上。",
    companies: [
      {
        name: "モビリティサービス",
        icon: "🚗",
        services: [
          "法人向けカーシェア（優待価格）",
          "社用車リースの最適化",
          "通勤支援プログラム"
        ]
      },
      {
        name: "ワークプレイス",
        icon: "🏢",
        services: [
          "オフィス移転サポート",
          "社宅・寮の手配",
          "リモートワーク環境構築"
        ]
      },
      {
        name: "福利厚生の充実",
        icon: "🛡️",
        services: [
          "団体保険の見直し（平均20%削減）",
          "健康経営プログラム",
          "メンタルヘルスケア"
        ]
      },
      {
        name: "健康サポート",
        icon: "💪",
        services: [
          "法人向けフィットネス優待",
          "健康診断の充実",
          "生活習慣改善プログラム"
        ]
      }
    ]
  },
  {
    category: "人材の確保と成長を支援。",
    description: "採用から育成まで、人の課題を解決。",
    companies: [
      {
        name: "人材確保",
        icon: "👥",
        services: [
          "即戦力人材の紹介",
          "専門職の派遣",
          "採用代行サービス"
        ]
      },
      {
        name: "キャリア開発",
        icon: "💡",
        services: [
          "副業・複業マッチング",
          "スキルアップ研修",
          "リーダーシップ開発"
        ]
      },
      {
        name: "ブランディング支援",
        icon: "📚",
        services: [
          "企業出版のプロデュース",
          "採用ブランディング",
          "社内報制作"
        ]
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
    <PageLayout>
      {/* Hero Section */}
      <UltraHero
        title={<>1社では解決できない課題も、<br />一緒なら解決できる。</>}
        subtitle={<>各分野のプロフェッショナルと連携し、<br />あらゆるビジネス課題にワンストップで対応。</>}
        description="単独では限界がある。だから私たちは、信頼できるパートナーと手を組みました。"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <UltraButton
            href="#services"
            variant="primary"
            size="lg"
          >
            パートナーサービスを見る
          </UltraButton>
          <UltraButton
            href="/#contact"
            variant="secondary"
            size="lg"
          >
            相談する
          </UltraButton>
        </div>
      </UltraHero>

      {/* Why Partnership Section */}
      <UltraSection
        title="なぜ、パートナーシップが必要なのか。"
        subtitle="お客様の「本当の成功」は、1つのサービスだけでは実現できない。"
        className="bg-gray-800/30"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: "🎯",
              title: "経営課題は複雑化している",
              description: <>IT化、人材不足、マーケティング...<br />すべてが連動する時代。</>
            },
            {
              icon: "💡",
              title: "専門性がより重要に",
              description: "中途半端な知識では、もう通用しない。"
            },
            {
              icon: "⚡",
              title: "スピードが競争力",
              description: "複数の専門家に個別相談する時間はない。"
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className={STYLES.heading.h3.emphasis + " text-white mb-3"} style={TEXT_SHADOW.small}>
                {item.title}
              </h3>
              <p className={STYLES.text.description.medium + " text-gray-200"} style={TEXT_SHADOW.small}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className={STYLES.text.body.large + " text-gray-200"} style={TEXT_SHADOW.small}>
            だから、ワンストップで解決できる体制を整えました。
          </p>
        </div>
      </UltraSection>

      {/* Partnership Value Section */}
      <UltraSection
        title="パートナーシップがもたらす4つの価値。"
        subtitle="お客様にとっての、本当のメリット。"
        className="bg-gray-900/60"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              emoji: "🚀",
              number: "1",
              title: "スピード解決",
              description: "複数の課題を同時並行で解決。個別に探す手間も時間も不要。"
            },
            {
              emoji: "💰",
              number: "2",
              title: "コスト最適化",
              description: "パートナー優待価格で、通常より安く質の高いサービスを。"
            },
            {
              emoji: "🤝",
              number: "3",
              title: "一貫したサポート",
              description: "窓口は私たち1社。責任を持って全体をコーディネート。"
            },
            {
              emoji: "✨",
              number: "4",
              title: "相乗効果",
              description: "各サービスが連携し、1+1が3になる成果を実現。"
            }
          ].map((value, index) => (
            <UltraCard key={index} variant="featured" className="text-center">
              <div className="text-3xl mb-2">{value.emoji}</div>
              <div className="text-2xl font-bold text-white mb-3" style={TEXT_SHADOW.small}>{value.number}</div>
              <h3 className={STYLES.heading.h3.emphasis + " text-white mb-3"} style={TEXT_SHADOW.small}>
                {value.title}
              </h3>
              <p className={STYLES.text.description.small + " text-gray-200"} style={TEXT_SHADOW.small}>
                {value.description}
              </p>
            </UltraCard>
          ))}
        </div>
      </UltraSection>

      {/* Partner Services Section */}
      <UltraSection className="bg-gray-800/30" id="services">
        <div className="space-y-20">
          {partners.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-12">
                <h2 className={STYLES.heading.h2.section + " text-white mb-4"} style={TEXT_SHADOW.small}>
                  {category.category}
                </h2>
                <p className={STYLES.text.body.large + " text-gray-200"} style={TEXT_SHADOW.small}>
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.companies.map((company, companyIndex) => (
                  <UltraCard key={companyIndex} variant="default">
                    <div className="text-3xl mb-4 text-center">
                      {company.icon}
                    </div>
                    <h3 className={STYLES.heading.h3.emphasis + " text-white mb-4 text-center"} style={TEXT_SHADOW.small}>
                      {company.name}
                    </h3>
                    <ul className="space-y-2">
                      {company.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <span className="text-gray-300 mr-2">•</span>
                          <span className={STYLES.text.description.small + " text-gray-200"} style={TEXT_SHADOW.small}>
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </UltraCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </UltraSection>

      {/* FAQ Section */}
      <UltraSection
        title="よくあるご質問。"
        className="bg-gray-800/30"
      >
        
        <div className="w-full space-y-6">
          {[
            {
              q: "パートナーサービスも成果報酬ですか？",
              a: "サービスにより異なります。お客様に最適な料金プランをご提案します。"
            },
            {
              q: "必要なサービスだけ選べますか？",
              a: "もちろんです。必要に応じて、段階的に導入することも可能です。"
            },
            {
              q: "パートナー企業と直接契約するのですか？",
              a: "基本的に私たちが窓口となり、全体をコーディネートします。"
            }
          ].map((faq, index) => (
            <UltraCard key={index} variant="default">
              <h3 className={STYLES.heading.h3.card + " text-white mb-3"} style={TEXT_SHADOW.small}>
                Q: {faq.q}
              </h3>
              <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.small}>
                A: {faq.a}
              </p>
            </UltraCard>
          ))}
        </div>
      </UltraSection>

      {/* Partner Recruitment Section */}
      <UltraSection
        title="新しいパートナーも募集中"
        subtitle="一緒に、お客様の成功を支援しませんか？"
        description="私たちは、お客様により大きな価値を提供できるパートナー企業を常に探しています。"
        className="bg-gray-900/60"
      >
        
        <UltraCard variant="featured" className="mb-12 p-8">
          <h3 className={STYLES.heading.h3.emphasis + " text-white mb-6 text-center"} style={TEXT_SHADOW.small}>
            こんな企業様を求めています：
          </h3>
          <ul className="space-y-4">
            {[
              "お客様第一の姿勢を共有できる",
              "専門性と実績がある",
              "長期的な関係を築ける"
            ].map((item, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="text-green-500 mr-3">✓</span>
                <span className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.small}>{item}</span>
              </li>
            ))}
          </ul>
        </UltraCard>
        
        <div className="text-center">
          <UltraButton
            href="/#contact"
            variant="secondary"
            size="lg"
          >
            パートナー登録の相談
          </UltraButton>
        </div>
      </UltraSection>

      {/* CTA Section */}
      <UltraCTA
        title="次のステップ"
        subtitle="まずは、あなたの課題をお聞かせください"
        description="どんなサービスの組み合わせが最適か。無料相談で、ベストな解決策をご提案します。"
        buttons={[
          { href: "/#contact", label: "無料相談を予約する", variant: "primary" as const }
        ]}
        className="bg-dark-overlay text-white"
      />
    </PageLayout>
  )
}
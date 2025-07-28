import type { Metadata } from 'next'
import Link from 'next/link'
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
    category: "ビジネス成長を加速させるパートナー",
    description: "売上アップから効率化まで、成長に必要なすべてを",
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
    category: "働く人を支えるライフサポート",
    description: "従業員満足度を高め、生産性を向上",
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
    category: "人材の確保と成長を支援",
    description: "採用から育成まで、人の課題を解決",
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
    <PageTemplate breadcrumbs={breadcrumbs}>
      {/* Hero Section */}
      <ContentSection className="bg-white">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className={STYLES.heading.h1.primary + " mb-4"}>
            1社では解決できない課題も、一緒なら解決できる
          </h1>
          <p className={STYLES.text.body.large + " mb-4"}>
            各分野のプロフェッショナルと連携し、あらゆるビジネス課題にワンストップで対応
          </p>
          <p className={STYLES.text.body.medium + " text-gray-600 mb-8"}>
            単独では限界がある。だから私たちは、信頼できるパートナーと手を組みました。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#services"
              className={STYLES.button.primary}
            >
              パートナーサービスを見る
            </Link>
            <Link
              href="/#contact"
              className={STYLES.button.secondary}
            >
              相談する
            </Link>
          </div>
        </div>
      </ContentSection>

      {/* Why Partnership Section */}
      <ContentSection className="bg-gray-50">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            なぜ、パートナーシップが必要なのか
          </h2>
          <p className={STYLES.text.body.large}>
            お客様の「本当の成功」は、1つのサービスだけでは実現できない
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: "🎯",
              title: "経営課題は複雑化している",
              description: "IT化、人材不足、マーケティング...すべてが連動する時代"
            },
            {
              icon: "💡",
              title: "専門性がより重要に",
              description: "中途半端な知識では、もう通用しない"
            },
            {
              icon: "⚡",
              title: "スピードが競争力",
              description: "複数の専門家に個別相談する時間はない"
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className={STYLES.heading.h3.emphasis + " mb-3"}>
                {item.title}
              </h3>
              <p className={STYLES.text.description.medium}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className={STYLES.text.body.large + " text-gray-700"}>
            だから、ワンストップで解決できる体制を整えました。
          </p>
        </div>
      </ContentSection>

      {/* Partnership Value Section */}
      <ContentSection>
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            パートナーシップがもたらす4つの価値
          </h2>
          <p className={STYLES.text.body.medium}>
            お客様にとっての、本当のメリット
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              emoji: "🚀",
              number: "1",
              title: "スピード解決",
              description: "複数の課題を同時並行で解決。個別に探す手間も時間も不要"
            },
            {
              emoji: "💰",
              number: "2",
              title: "コスト最適化",
              description: "パートナー優待価格で、通常より安く質の高いサービスを"
            },
            {
              emoji: "🤝",
              number: "3",
              title: "一貫したサポート",
              description: "窓口は私たち1社。責任を持って全体をコーディネート"
            },
            {
              emoji: "✨",
              number: "4",
              title: "相乗効果",
              description: "各サービスが連携し、1+1が3になる成果を実現"
            }
          ].map((value, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-2">{value.emoji}</div>
              <div className="text-2xl font-bold text-gray-900 mb-3">{value.number}</div>
              <h3 className={STYLES.heading.h3.emphasis + " mb-3"}>
                {value.title}
              </h3>
              <p className={STYLES.text.description.small + " text-gray-600"}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Partner Services Section */}
      <ContentSection className="bg-gray-50" id="services">
        <div className="space-y-20">
          {partners.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-12">
                <h2 className={STYLES.heading.h2.section + " mb-4"}>
                  {category.category}
                </h2>
                <p className={STYLES.text.body.large}>
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.companies.map((company, companyIndex) => (
                  <div 
                    key={companyIndex} 
                    className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-3xl mb-4 text-center">
                      {company.icon}
                    </div>
                    <h3 className={STYLES.heading.h3.emphasis + " mb-4 text-center"}>
                      {company.name}
                    </h3>
                    <ul className="space-y-2">
                      {company.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span className={STYLES.text.description.small}>
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Success Stories Section */}
      <ContentSection>
        <div className="text-center mb-12">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            実際の成功事例
          </h2>
          <p className={STYLES.text.body.large}>
            パートナーシップが生んだ相乗効果
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "&ldquo;3つの課題を同時に解決できた&rdquo;",
              description: "ホームページ制作と同時に、SNS運用と営業支援を導入。\n各サービスが連携し、問い合わせが5倍に増加しました。",
              company: "製造業 D社様"
            },
            {
              title: "&ldquo;コスト削減と売上アップを両立&rdquo;",
              description: "AI導入で業務効率化を図りながら、Amazon出店で新規売上を創出。\n削減したコストを成長投資に回せる好循環が生まれました。",
              company: "小売業 E社様"
            }
          ].map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <h3 className={STYLES.heading.h3.emphasis + " mb-4"}>
                {story.title}
              </h3>
              <p className={STYLES.text.body.medium + " mb-4 whitespace-pre-line"}>
                {story.description}
              </p>
              <p className={STYLES.text.description.medium + " text-gray-600"}>
                {story.company}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            よくあるご質問
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
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
            <div key={index} className="bg-white rounded-xl p-6">
              <h3 className={STYLES.heading.h3.normal + " mb-3"}>
                Q: {faq.q}
              </h3>
              <p className={STYLES.text.body.medium}>
                A: {faq.a}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Partner Recruitment Section */}
      <ContentSection>
        <div className="text-center mb-12">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            新しいパートナーも募集中
          </h2>
          <p className={STYLES.text.body.large + " mb-8"}>
            一緒に、お客様の成功を支援しませんか？
          </p>
          <p className={STYLES.text.body.medium + " mb-8"}>
            私たちは、お客様により大きな価値を提供できる<br />
            パートナー企業を常に探しています。
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto mb-12">
          <h3 className={STYLES.heading.h3.emphasis + " mb-6 text-center"}>
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
                <span className={STYLES.text.body.medium}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center">
          <Link
            href="/#contact"
            className={STYLES.button.secondary + " inline-block"}
          >
            パートナー登録の相談
          </Link>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection className="bg-gray-900 text-white">
        <div className="text-center">
          <h2 className={STYLES.heading.h2.section + " text-white mb-4"}>
            次のステップ
          </h2>
          <p className={STYLES.text.body.large + " text-white mb-4"}>
            まずは、あなたの課題をお聞かせください
          </p>
          <p className={STYLES.text.body.medium + " text-gray-300 mb-8"}>
            どんなサービスの組み合わせが最適か。<br />
            無料相談で、ベストな解決策をご提案します。
          </p>
          
          <div className="flex flex-col gap-4 items-center mb-6">
            <Link
              href="https://lin.ee/awakeinc"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINEで相談する
            </Link>
            
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              無料相談を予約する
            </Link>
          </div>
          
        </div>
      </ContentSection>
    </PageTemplate>
  )
}
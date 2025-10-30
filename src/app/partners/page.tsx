import type { Metadata } from 'next'
import Link from 'next/link'
import { COMPANY_DATA } from '@/lib/company-data'
import PageLayout from '@/components/layout/PageLayout'
import { Handshake, Award, Globe, Shield } from 'lucide-react'
import LineButton from '@/components/ui/LineButton'
import { UltraHero } from '@/components/ui/UltraSection'
import { createBreadcrumbSchema } from '@/lib/enhanced-schema'


export const metadata: Metadata = {
  title: `パートナー企業 | ${COMPANY_DATA.basic.name}`,
  description: `${COMPANY_DATA.basic.name}と協力し、お客様に最高のサービスを提供するパートナー企業をご紹介します。`,
  keywords: `${COMPANY_DATA.metadata.keywords}, パートナー企業, 提携企業, 協業`,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: `${COMPANY_DATA.url}/partners`,
    siteName: COMPANY_DATA.basic.name,
    title: `パートナー企業 | ${COMPANY_DATA.basic.name}`,
    description: `${COMPANY_DATA.basic.name}と協力し、お客様に最高のサービスを提供するパートナー企業をご紹介します。`,
    images: [
      {
        url: `${COMPANY_DATA.url}/assets/images/ogp.jpg`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_DATA.basic.name} - パートナー企業`
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `パートナー企業 | ${COMPANY_DATA.basic.name}`,
    description: `${COMPANY_DATA.basic.name}と協力し、お客様に最高のサービスを提供します。`,
    images: [`${COMPANY_DATA.url}/assets/images/ogp.jpg`],
  },
  alternates: {
    canonical: `${COMPANY_DATA.url}/partners`,
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
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "ホーム", url: COMPANY_DATA.contact.website },
    { name: "パートナー企業", url: `${COMPANY_DATA.contact.website}partners` }
  ])

  return (
    <PageLayout>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      {/* Hero Section */}
      <UltraHero
        title="パートナー企業"
        subtitle="1社では解決できない課題も、一緒なら解決できる"
        description="各分野のプロフェッショナルと連携し、あらゆるビジネス課題にワンストップで対応"
        backgroundImage="/images/network-connections.webp"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
            パートナーサービスを見る
          </a>
        </div>
      </UltraHero>

      {/* Why Partnership Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              なぜ、パートナーシップが必要なのか。
            </h2>
            <p className="text-base md:text-xl text-gray-900">
              お客様の「本当の成功」は、1つのサービスだけでは実現できない。
            </p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: "🎯",
              title: "経営課題は複雑化している",
              description: <>IT化、人材不足、マーケティング...<br className="hidden sm:inline" />すべてが連動する時代。</>
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
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-base text-gray-900">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-base md:text-xl text-gray-900">
            だから、ワンストップで解決できる体制を整えました。
          </p>
        </div>
        </div>
      </section>

      {/* Partnership Value Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              パートナーシップがもたらす4つの価値。
            </h2>
            <p className="text-base md:text-xl text-gray-900">
              お客様にとっての、本当のメリット。
            </p>
          </div>
        
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
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
              <div className="text-3xl mb-2">{value.emoji}</div>
              <div className="text-2xl font-bold text-gray-900 mb-3">{value.number}</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-900">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Partner Services Section */}
      <section className="py-16 md:py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {partners.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h2>
                <p className="text-base md:text-xl text-gray-900">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.companies.map((company, companyIndex) => (
                  <div key={companyIndex} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="text-3xl mb-4 text-center">
                      {company.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                      {company.name}
                    </h3>
                    <ul className="space-y-2">
                      {company.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <span className="text-gray-600 mr-2">•</span>
                          <span className="text-sm sm:text-base text-gray-900">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              よくあるご質問。
            </h2>
          </div>
        
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
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Q: {faq.q}
              </h3>
              <p className="text-base text-gray-900">
                A: {faq.a}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Partner Recruitment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              新しいパートナーも募集中
            </h2>
            <p className="text-base md:text-xl text-gray-900">
              一緒に、お客様の成功を支援しませんか？
            </p>
            <p className="text-lg text-gray-900">
              私たちは、お客様により大きな価値を提供できるパートナー企業を常に探しています。
            </p>
          </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 mb-12 p-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            こんな企業様を求めています：
          </h3>
          <ul className="space-y-4">
            {[
              "お客様第一の姿勢を共有できる",
              "専門性と実績がある",
              "長期的な関係を築ける"
            ].map((item, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-base text-gray-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center">
          <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg bg-white hover:bg-gray-50 text-blue-600 font-medium rounded-xl shadow-md hover:shadow-lg border-2 border-blue-600 transition-all duration-300 transform hover:scale-[1.02]">
            パートナー登録の相談
          </Link>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              次のステップ
            </h2>
            <p className="text-base md:text-xl text-gray-900 mb-4">
              まずは、あなたの課題をお聞かせください
            </p>
            <p className="text-lg text-gray-900 mb-8">
              どんなサービスの組み合わせが最適か。無料相談で、ベストな解決策をご提案します。
            </p>
          </div>
          <div className="text-center">
            <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
              無料相談を予約する
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
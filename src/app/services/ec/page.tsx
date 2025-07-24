import type { Metadata } from 'next'
import { CheckCircle, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import PageTemplate, { ContentSection } from '@/components/layout/PageTemplate'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { createServiceSchema } from '@/lib/enhanced-schema'
import { generateServiceMetadata } from '@/lib/metadata'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { STYLES } from '@/lib/constants'

export const metadata: Metadata = {
  title: "Amazon代理販売サービス | 株式会社Awake",
  description: "売れてから手数料をいただく完全成果報酬制。商品ページ作成・SEO対策・広告運用まで全てお任せ。初期費用0円でリスクなし。",
  keywords: "Amazon代理販売, 成果報酬, SEO対策, 広告運用, 商品ページ作成, 株式会社Awake",
  openGraph: {
    title: "Amazon代理販売サービス | 株式会社Awake",
    description: "売れてから手数料をいただく完全成果報酬制。商品ページ作成・SEO対策・広告運用まで全てお任せ。",
    type: 'website',
    locale: 'ja_JP',
    siteName: COMPANY_DATA.basic.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Amazon代理販売サービス | 株式会社Awake",
    description: "売れてから手数料をいただく完全成果報酬制。商品ページ作成・SEO対策・広告運用まで全てお任せ。",
  },
}

const features = [
  {
    icon: CheckCircle,
    title: "完全成果報酬制",
    description: "売上が発生してから手数料をいただくので、赤字リスクゼロ。安心してスタートできます"
  },
  {
    icon: Zap,
    title: "プロの商品ページ作成",
    description: "売れる商品説明・魅力的な画像構成・購買心理に基づいたレイアウトで転換率向上"
  },
  {
    icon: TrendingUp,
    title: "SEO対策・広告運用",
    description: "適切なキーワード選定と効果的な広告運用で、商品の露出を最大化"
  },
  {
    icon: Shield,
    title: "運用まで完全サポート",
    description: "在庫管理・受注処理・カスタマー対応まで。販売に関わる全ての業務を代行"
  }
]

// 🚀 限界突破！ Ultra-Rich EC Service Page - 完全最適化版
export default function EcServicePage() {
  // 構造化データ生成
  const ecServiceSchema = createServiceSchema({
    name: "Amazon代理販売サービス",
    description: "売れてから手数料をいただく完全成果報酬制のAmazon販売代行。商品ページ作成・SEO対策・広告運用まで全て代行。",
    provider: COMPANY_DATA.basic.name,
    areaServed: '日本',
    serviceType: 'EC販売代行',
    offers: [
      {
        name: "Amazon特価販売",
        price: "10%〜15%",
        description: "売上に応じた完全成果報酬制"
      },
      {
        name: "メーカー直送",
        price: "在庫リスクなし",
        description: "メーカー様から直接発送"
      },
      {
        name: "預託在庫発送",
        price: "弊社管理",
        description: "預けていただいた在庫から発送"
      }
    ]
  })

  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "サービス", url: "/#services" },
    { name: "Amazon代理販売", url: "/services/ec" }
  ]

  return (
    <PageTemplate
      title="Amazon代理販売サービス"
      description="株式会社AwakeのAmazon代理販売サービス"
      breadcrumbs={breadcrumbs}
    >
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ecServiceSchema)
        }}
      />

      {/* Hero Section */}
      <ContentSection className="bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={STYLES.heading.h1.hero + " mb-6"}>
            売れてから手数料をいただく<br />
            Amazon販売代行サービス
          </h1>
          
          <p className={STYLES.text.body.large + " mb-12"}>
            初期費用0円。商品が売れるまで一切費用はかかりません。<br />
            商品ページ作成・SEO対策・広告運用まで全てプロにお任せ
          </p>

          <div className="flex justify-center">
            <AccessibleButton
              href="#pricing"
              variant="primary"
              size="large"
              ariaLabel="料金プランセクションに移動"
            >
              料金プランを見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </AccessibleButton>
          </div>
        </div>
      </ContentSection>

      {/* Features Section */}
      <ContentSection>
        <div className="text-center mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            なぜ私たちが選ばれるのか
          </h2>
          <p className={STYLES.text.body.large}>
            売れない商品からは一切費用をいただきません。<br />
            だからこそ、本気で売れる商品ページを作ります
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center p-6 rounded-xl">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className={STYLES.heading.h3.emphasis + " mb-3"}>
                  {feature.title}
                </h3>
                <p className={STYLES.text.description.small + " text-gray-600"}>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </ContentSection>

      {/* Process Section */}
      <ContentSection className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            サービスの流れ
          </h2>
          <p className={STYLES.text.body.large}>
            シンプルな4ステップで販売開始
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "無料相談・商品分析",
              description: "商品の強み・ターゲット層・競合状況を分析。売れる可能性を正直にお伝えします",
              time: "即日〜3日"
            },
            {
              step: "02",
              title: "商品ページ制作",
              description: "購買心理を考慮した商品説明・画像構成・キーワード設定で訴求力の高いページを作成",
              time: "1〜2週間"
            },
            {
              step: "03",
              title: "SEO対策・広告設定",
              description: "適切なキーワード選定とスポンサー広告の最適化で商品の露出を増やします",
              time: "随時調整"
            },
            {
              step: "04",
              title: "販売開始・改善運用",
              description: "売上データを分析し、ページ改善・価格調整・広告最適化を継続的に実施",
              time: "毎月レポート"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-xl">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                {item.step}
              </div>
              <h3 className={STYLES.heading.h3.card + " mb-3"}>
                {item.title}
              </h3>
              <p className={STYLES.text.description.small + " text-gray-600 mb-2"}>
                {item.description}
              </p>
              <div className={STYLES.text.label.secondary + " text-gray-500"}>
                期間: {item.time}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Pricing Section */}
      <ContentSection id="pricing">
        <div className="text-center mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            料金体系
          </h2>
          <p className={STYLES.text.body.large}>
            売上が発生してから手数料をいただく完全成果報酬制<br />
            初期費用・月額費用は一切かかりません
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              platform: "スタンダードプラン",
              rate: "売上の10%〜15%",
              description: "売れた分だけの成果報酬",
              features: ["商品ページ作成", "SEOキーワード最適化", "基本的な広告運用", "月次売上レポート"]
            },
            {
              platform: "プレミアムプラン",
              rate: "要相談",
              description: "大口販売・独占販売対応",
              features: ["専任担当者配置", "高度な広告戦略", "ブランドストア構築", "競合分析・戦略立案"]
            },
            {
              platform: "FBA活用プラン",
              rate: "売上の12%〜",
              description: "Amazon倉庫活用で配送最適化",
              features: ["FBA設定・管理代行", "在庫補充アドバイス", "プライム対応", "配送コスト最適化"]
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-sm border ${ 
                index === 0 ? 'border-gray-900 ring-2 ring-gray-900 ring-opacity-10' : 'border-gray-200'
              }`}
            >
              {index === 0 && (
                <div className="text-center mb-4">
                  <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                    人気プラン
                  </span>
                </div>
              )}
              <h3 className={STYLES.heading.h3.card + " mb-2"}>
                {item.platform}
              </h3>
              <div className={STYLES.text.emphasis.strong + " text-3xl mb-6"}>
                {item.rate}
              </div>
              <p className={STYLES.text.description.medium + " text-gray-600 mb-6"}>{item.description}</p>
              <ul className="space-y-3 mb-8">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={STYLES.text.description.small + " text-gray-600 flex items-center"}>
                    <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <AccessibleButton
                href={COMPANY_DATA.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant={index === 0 ? "primary" : "secondary"}
                className={index === 0 
                  ? "bg-green-500 text-white hover:bg-green-600 w-full" 
                  : "border border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 w-full"
                }
                ariaLabel="公式LINEでお問い合わせ"
              >
                LINE で問い合わせ
              </AccessibleButton>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Success Stories Section */}
      <ContentSection className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            こんな方におすすめです
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className={STYLES.heading.h3.emphasis + " mb-4"}>成果報酬の仕組み</h3>
            <ul className="space-y-2">
              <li className={STYLES.text.description.small + " text-gray-600"}>• 初期費用0円</li>
              <li className={STYLES.text.description.small + " text-gray-600"}>• 月額費用0円</li>
              <li className={STYLES.text.description.small + " text-gray-600"}>• 売上発生時のみ手数料</li>
              <li className={STYLES.text.description.small + " text-gray-600"}>• 透明性の高い料金体系</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className={STYLES.heading.h3.emphasis + " mb-4"}>代行業務内容</h3>
            <ul className="space-y-2">
              <li className={STYLES.text.description.small + " text-gray-600"}>• 商品ページ作成・改善</li>
              <li className={STYLES.text.description.small + " text-gray-600"}>• SEOキーワード選定</li>
              <li className={STYLES.text.description.small + " text-gray-600"}>• スポンサー広告運用</li>
              <li className={STYLES.text.description.small + " text-gray-600"}>• 売上データ分析</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className={STYLES.heading.h3.emphasis + " mb-4"}>安心の理由</h3>
            <ul className="space-y-2">
              <li className={STYLES.text.description.small + " text-gray-600"}>• 売れなければ費用0円</li>
              <li className={STYLES.text.description.small + " text-gray-600"}>• 契約期間の縛りなし</li>
              <li className={STYLES.text.description.small + " text-gray-600"}>• いつでも解約可能</li>
              <li className={STYLES.text.description.small + " text-gray-600"}>• 明確な成果レポート</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="text-center">
          <h2 className={STYLES.heading.h2.section}>
            売れるまで費用はいただきません
          </h2>
          <p className={STYLES.text.body.large + " mb-8 mt-4"}>
            私たちの報酬はお客様の成功と直結しています。<br />
            だからこそ、本気で売れる仕組みを作ります
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AccessibleButton
              href={COMPANY_DATA.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="large"
              className="bg-green-500 text-white"
              ariaLabel="公式LINEで無料相談"
            >
              LINE で問い合わせ
            </AccessibleButton>
            <AccessibleButton
              href="/#contact"
              variant="secondary"
              size="large"
              ariaLabel="お問い合わせフォームに移動"
            >
              メールで問い合わせ
            </AccessibleButton>
          </div>
        </div>
      </ContentSection>
    </PageTemplate>
  )
}
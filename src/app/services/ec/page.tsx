import type { Metadata } from 'next'
import { CheckCircle, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import PageTemplate, { ContentSection } from '@/components/layout/PageTemplate'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { createServiceSchema } from '@/lib/enhanced-schema'

export const metadata: Metadata = {
  title: "Amazon代理販売サービス | 株式会社Awake",
  description: "【7年の実績】Amazon代理販売でSEO上位表示を実現。完全成果報酬型でリスクゼロ。カタログ作成から販売まで全てお任せ。",
  keywords: "Amazon代理販売, SEO上位表示, カタログ作成, 7年経験, 株式会社Awake",
  openGraph: {
    title: "Amazon代理販売サービス | 株式会社Awake",
    description: "【7年の実績】Amazon代理販売でSEO上位表示を実現。完全成果報酬型でリスクゼロ。",
    type: 'website',
    locale: 'ja_JP',
    siteName: COMPANY_DATA.basic.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Amazon代理販売サービス | 株式会社Awake",
    description: "【7年の実績】Amazon代理販売でSEO上位表示を実現。完全成果報酬型でリスクゼロ。",
  },
}

const features = [
  {
    icon: Shield,
    title: "7年の実績と経験",
    description: "7年で300社以上を支援。独自のノウハウで確実に売上アップを実現"
  },
  {
    icon: TrendingUp,
    title: "SEO検索上位表示",
    description: "キーワード分析と3ヶ月で検索順位を1ページ目へ。売上平地3倍に"
  },
  {
    icon: Zap,
    title: "プロのカタログ作成",
    description: "購買率が20%向上するカタログを制作。プロカメラマンによる撮影も対応"
  },
  {
    icon: CheckCircle,
    title: "完全成果報酬制",
    description: "初期費用0円、成功報酬のみ。赤字リスクなしで安心スタート"
  }
]

// 🚀 限界突破！ Ultra-Rich EC Service Page - 完全最適化版
export default function EcServicePage() {
  // 構造化データ生成
  const ecServiceSchema = createServiceSchema({
    name: "Amazon代理販売サービス",
    description: "完全成果報酬型のAmazon販売代行サービス。7年の実績でSEO上位表示を実現。",
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Amazon代理販売サービス
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed">
            初期費用0円、在庫リスク0、売れなけれグコスト0。完全成果報酬で安心
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            サービス特徴
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            成功報酬10-15%のみ。リスクゼロで新規チャネル開拓
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
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            サービスの流れ
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            シンプルな4ステップで販売開始
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "詳細ヒアリング",
              description: "商品特性・競合・市場を分析し、売れる戦略を立案",
              time: "1週間"
            },
            {
              step: "02",
              title: "プロのカタログ作成",
              description: "購買率を高める写真・文章・構成で、売れるカタログを制作",
              time: "2週間"
            },
            {
              step: "03",
              title: "SEO最適化設定",
              description: "独自ノウハウで検索順位を最短3ヶ月で1ページ目へ",
              time: "1週間"
            },
            {
              step: "04",
              title: "販売開始・運用サポート",
              description: "毎月の売上分析と改善提案で、継続的に売上アップ",
              time: "継続"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-xl">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                {item.step}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {item.description}
              </p>
              <div className="text-xs text-gray-500 font-medium">
                期間: {item.time}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Pricing Section */}
      <ContentSection id="pricing">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            完全成果報酬型でリスクなし
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              platform: "Amazon特価販売",
              rate: "10%〜15%",
              description: "売上に応じた手数料",
              features: ["Amazon特価での販売", "在庫管理サポート", "継続的な運用支援", "売上レポート提供"]
            },
            {
              platform: "メーカー直送",
              rate: "在庫なし",
              description: "メーカー様から直接発送",
              features: ["在庫リスクゼロ", "倉庫費用不要", "配送費最適化", "迅速な発送対応"]
            },
            {
              platform: "預託在庫発送",
              rate: "弊社管理",
              description: "預けていただいた在庫から発送",
              features: ["柔軟な在庫管理", "迅速な出荷対応", "品質管理徹底", "詳細な在庫レポート"]
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
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {item.platform}
              </h3>
              <div className="text-3xl font-light text-gray-900 mb-6">
                {item.rate}
              </div>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <ul className="space-y-3 mb-8">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            導入実績
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">基本メトリクス</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 0円初期費用</li>
              <li>• 10-15%成果報酬</li>
              <li>• 3日最短開始</li>
              <li>• 継続的サポート</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">販売サポート</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 商品ページ最適化</li>
              <li>• 在庫管理システム</li>
              <li>• 売上分析レポート</li>
              <li>• 顧客対応サポート</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">運用実績</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 平均売上30%向上</li>
              <li>• 在庫回転率改善</li>
              <li>• 顧客満足度向上</li>
              <li>• 継続率90%以上</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="text-center">
          <h2 className={STYLES.heading.h2}>
            共に成長するパートナーとして
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 mt-4">
            3か月で検索上位表示を実現。売上が出なけれど7手数料ゼロ
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
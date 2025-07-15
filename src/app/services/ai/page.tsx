import type { Metadata } from 'next'
import { Brain, TrendingUp, Users, Zap } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import PageTemplate, { ContentSection } from '@/components/layout/PageTemplate'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { createServiceSchema } from '@/lib/enhanced-schema'
import { PricingCard, FeatureHighlight } from '@/lib/unified-components'

export const metadata: Metadata = {
  title: `${COMPANY_DATA.services.details.ai.title}${COMPANY_DATA.metadata.baseTitleSuffix}`,
  description: COMPANY_DATA.services.details.ai.longDescription,
  keywords: `${COMPANY_DATA.metadata.keywords}, AIコンサルティング, AI導入, 業務効率化, DX推進`,
  openGraph: {
    title: `${COMPANY_DATA.services.details.ai.title}${COMPANY_DATA.metadata.baseTitleSuffix}`,
    description: COMPANY_DATA.services.details.ai.longDescription,
    type: 'website',
    locale: 'ja_JP',
    siteName: COMPANY_DATA.basic.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_DATA.services.details.ai.title}${COMPANY_DATA.metadata.baseTitleSuffix}`,
    description: COMPANY_DATA.services.details.ai.longDescription,
  },
}

const features = [
  {
    icon: Brain,
    title: "AI戦略策定",
    description: "お客様の業務に最適なAI活用戦略を策定し、効果的な導入計画を立案いたします。"
  },
  {
    icon: TrendingUp,
    title: "業務効率化",
    description: "既存業務プロセスを分析し、AIによる効率化で生産性を大幅に向上させます。"
  },
  {
    icon: Users,
    title: "社員教育",
    description: "AI技術の基礎から実践活用まで、社員のスキルレベルに応じた研修を提供いたします。"
  },
  {
    icon: Zap,
    title: "継続サポート",
    description: "導入後も継続的なサポートを提供し、AI活用の効果を最大化します。"
  }
]

const processSteps = [
  {
    step: "01",
    title: "現状分析",
    description: "現在の業務プロセスを詳細に分析し、AI導入の効果が期待できる領域を特定します。",
    duration: "1-2週間"
  },
  {
    step: "02", 
    title: "AI戦略策定",
    description: "お客様の目標に基づき、具体的なAI導入戦略と実装計画を策定いたします。",
    duration: "1週間"
  },
  {
    step: "03",
    title: "ツール導入",
    description: "最適なAIツールの選定・導入を行い、お客様の環境に合わせてカスタマイズします。",
    duration: "2-3週間"
  },
  {
    step: "04",
    title: "運用サポート",
    description: "導入後の運用支援と効果測定を継続的に行い、さらなる改善を図ります。",
    duration: "継続"
  }
]

// 🚀 限界突破！ Ultra-Rich AI Service Page - 完全最適化版
export default function AiServicePage() {
  const service = COMPANY_DATA.services.details.ai
  
  // 構造化データ生成
  const aiServiceSchema = createServiceSchema({
    name: service.title,
    description: service.longDescription,
    provider: COMPANY_DATA.basic.name,
    areaServed: '日本',
    serviceType: 'AIコンサルティング',
    offers: [
      {
        name: service.pricing.basic.name,
        price: service.pricing.basic.price,
        description: `${service.pricing.basic.name}プラン`
      },
      {
        name: service.pricing.enterprise.name,
        price: service.pricing.enterprise.price,
        description: `${service.pricing.enterprise.name}プラン`
      }
    ]
  })

  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "サービス", url: "/#services" },
    { name: "AIコンサルティング", url: "/services/ai" }
  ]

  return (
    <PageTemplate
      title="AIコンサルティングサービス"
      description="株式会社AwakeのAIコンサルティングサービス"
      breadcrumbs={breadcrumbs}
    >
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiServiceSchema)
        }}
      />

      {/* Hero Section */}
      <ContentSection className="bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            {service.title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed">
            {service.description}
          </p>

          <div className="flex justify-center">
            <AccessibleButton
              href="#services"
              variant="primary"
              size="large"
              ariaLabel="サービス詳細セクションに移動"
            >
              サービス詳細を見る
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
            AI導入の課題を解決し、効果的な活用を実現
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <FeatureHighlight
                key={index}
                icon={<IconComponent className="w-8 h-8 text-white" />}
                title={feature.title}
                description={feature.description}
              />
            )
          })}
        </div>
      </ContentSection>

      {/* Pricing Section */}
      <ContentSection className="bg-gray-50" id="services">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            サービスプラン
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            お客様のニーズに合わせた柔軟なプラン
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard 
            plan={{
              name: service.pricing.basic.name,
              price: service.pricing.basic.price,
              duration: service.pricing.basic.duration,
              features: [...service.pricing.basic.features]
            }} 
            featured 
          />
          <PricingCard 
            plan={{
              name: service.pricing.enterprise.name,
              price: service.pricing.enterprise.price,
              duration: service.pricing.enterprise.duration,
              features: [...service.pricing.enterprise.features]
            }} 
          />
        </div>
      </ContentSection>

      {/* Process Section */}
      <ContentSection>
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            導入の流れ
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            段階的なアプローチで確実なAI導入を実現
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <FeatureHighlight
              key={index}
              icon={<div className="text-white text-sm font-medium">{step.step}</div>}
              title={step.title}
              description={step.description}
              metric={step.duration}
            />
          ))}
        </div>
      </ContentSection>

      {/* Success Stories Section */}
      <ContentSection className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            導入効果
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">業務効率化</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 定型作業の自動化</li>
              <li>• 意思決定の高速化</li>
              <li>• ヒューマンエラー削減</li>
              <li>• 生産性向上</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">コスト削減</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 人的リソース最適化</li>
              <li>• 運用コスト削減</li>
              <li>• 品質向上による損失軽減</li>
              <li>• 継続的改善効果</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">競争優位性</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 先進技術活用</li>
              <li>• データドリブン経営</li>
              <li>• 新サービス創出</li>
              <li>• 市場対応力強化</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-6">
            AI導入で業務を革新しませんか？
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            まずは現状分析から始めましょう。お客様に最適なAI活用方法をご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AccessibleButton
              href="/#contact"
              variant="primary"
              size="large"
              ariaLabel="お問い合わせフォームに移動"
            >
              無料相談を申し込む
            </AccessibleButton>
            <AccessibleButton
              href="/about"
              variant="secondary"
              size="large"
              ariaLabel="実績ページに移動"
            >
              実績を見る
            </AccessibleButton>
            <AccessibleButton
              href={COMPANY_DATA.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="bg-green-500 text-white hover:bg-green-600"
              ariaLabel="公式LINEでお問い合わせ"
            >
              LINE で問い合わせ
            </AccessibleButton>
          </div>
        </div>
      </ContentSection>
    </PageTemplate>
  )
}
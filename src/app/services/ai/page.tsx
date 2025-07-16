import type { Metadata } from 'next'
import { COMPANY_DATA } from '@/lib/company-data'
import PageTemplate, { ContentSection } from '@/components/layout/PageTemplate'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { createServiceSchema } from '@/lib/enhanced-schema'
import { PricingCard } from '@/lib/unified-components'
import { generateServiceMetadata } from '@/lib/metadata'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { STYLES } from '@/lib/constants'

const service = COMPANY_DATA.services.details.ai

export const metadata: Metadata = generateServiceMetadata({
  id: 'ai',
  title: service.title,
  description: service.description,
  longDescription: service.longDescription,
  href: service.href,
  pricing: service.pricing
})

export default function AiServicePage() {
  
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

      <ServiceHero
        title={service.title}
        description={service.description}
        ctaText="サービス詳細を見る"
        ctaHref="#services"
        backgroundVariant="gradient"
      />

      <FeatureGrid
        title="サービス特徴"
        features={[
          {
            icon: <div className="text-white font-bold text-xl">戦</div>,
            title: "AI戦略策定",
            description: "業界に特化したAI戦略を策定。投資対効果を明確にした導入計画を提案"
          },
          {
            icon: <div className="text-white font-bold text-xl">効</div>,
            title: "業務効率化",
            description: "作業時間を最大70%削減。人的ミスを防ぎ、品質を向上"
          },
          {
            icon: <div className="text-white font-bold text-xl">教</div>,
            title: "社員教育",
            description: "現場で使えるAI活用研修。全社員がAIを味方にできる組織へ"
          },
          {
            icon: <div className="text-white font-bold text-xl">継</div>,
            title: "継続サポート",
            description: "月次レポートで効果測定。継続的な改善で投資回収を確実に"
          }
        ]}
        columns={4}
      />

      <ContentSection className={STYLES.section.pricing} id="services">
        <div className="text-center mb-16">
          <h2 className={STYLES.heading.h2}>
            サービスプラン
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mt-4">
            無駄なAIツールは導入せず、確実に成果が出るものだけを選定
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard plan={{...service.pricing.basic, features: [...service.pricing.basic.features]}} featured />
          <PricingCard plan={{...service.pricing.enterprise, features: [...service.pricing.enterprise.features]}} />
        </div>
      </ContentSection>

      <ProcessSteps
        title="導入の流れ"
        steps={[
          {
            step: "01",
            title: "現状分析",
            description: "ヒアリングとデータ分析で、最もROIが高い業務から優先順位を決定",
            duration: "1-2週間"
          },
          {
            step: "02", 
            title: "AI戦略策定",
            description: "費用対効果を数値化し、段階的な導入計画を作成。リスクを最小化",
            duration: "1週間"
          },
          {
            step: "03",
            title: "ツール導入",
            description: "ChatGPT、Claude、Geminiなど最適なツールを選定。業務に即した設定",
            duration: "2-3週間"
          },
          {
            step: "04",
            title: "運用サポート",
            description: "定期的な効果測定と改善提案。投資回収まで伴走支援",
            duration: "継続"
          }
        ]}
      />

      <ContentSection className={STYLES.section.features}>
        <div className="text-center mb-16">
          <h2 className={STYLES.heading.h2}>
            導入効果
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={STYLES.card.compact}>
            <h3 className={STYLES.heading.h4}>業務効率化</h3>
            <ul className="space-y-2 text-sm text-gray-600 mt-4">
              <li>• 定型作業の自動化</li>
              <li>• 意思決定の高速化</li>
              <li>• ヒューマンエラー削減</li>
              <li>• 生産性向上</li>
            </ul>
          </div>
          
          <div className={STYLES.card.compact}>
            <h3 className={STYLES.heading.h4}>コスト削減</h3>
            <ul className="space-y-2 text-sm text-gray-600 mt-4">
              <li>• 人的リソース最適化</li>
              <li>• 運用コスト削減</li>
              <li>• 品質向上による損失軽減</li>
              <li>• 継続的改善効果</li>
            </ul>
          </div>
          
          <div className={STYLES.card.compact}>
            <h3 className={STYLES.heading.h4}>競争優位性</h3>
            <ul className="space-y-2 text-sm text-gray-600 mt-4">
              <li>• 先進技術活用</li>
              <li>• データドリブン経営</li>
              <li>• 新サービス創出</li>
              <li>• 市場対応力強化</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="text-center">
          <h2 className={STYLES.heading.h2}>
            AI導入で業務を革新しませんか？
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 mt-4">
            無料診断で貴社の削減可能時間を計算。成果が出なければ3か月以内に解約可能
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
              className="bg-green-500 text-white"
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
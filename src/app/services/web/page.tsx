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

const service = COMPANY_DATA.services.details.web

export const metadata: Metadata = generateServiceMetadata({
  id: 'web',
  title: service.title,
  description: service.description,
  longDescription: service.longDescription,
  href: service.href,
  pricing: service.pricing
})

export default function WebServicePage() {
  
  // 構造化データ生成
  const webServiceSchema = createServiceSchema({
    name: service.title,
    description: service.longDescription,
    provider: COMPANY_DATA.basic.name,
    areaServed: '日本',
    serviceType: 'ウェブサイト制作',
    offers: [
      {
        name: service.pricing.standard.name,
        price: service.pricing.standard.price,
        description: `${service.pricing.standard.name}プラン`
      },
      {
        name: service.pricing.premium.name,
        price: service.pricing.premium.price,
        description: `${service.pricing.premium.name}プラン`
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
    { name: "ホームページ制作", url: "/services/web" }
  ]

  return (
    <PageTemplate
      title="ホームページ制作サービス"
      description="株式会社Awakeのホームページ制作サービス"
      breadcrumbs={breadcrumbs}
    >
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webServiceSchema)
        }}
      />

      <ServiceHero
        title={service.title}
        description={service.description}
        ctaText="料金プランを見る"
        ctaHref="#pricing"
        backgroundVariant="gradient"
      />

      <FeatureGrid
        title="サービス特徴"
        features={[
          {
            icon: <div className="text-white font-bold text-xl">¥</div>,
            title: "プロフェッショナル制作",
            description: "お客様の予算内で最大の効果を実現。必要な機能だけに投資し、無駄なコストを削減"
          },
          {
            icon: <div className="text-white font-bold text-xl">S</div>,
            title: "SEO最適化",
            description: "最新のSEO対策で検索上位表示。集客力のあるサイトを構築"
          },
          {
            icon: <div className="text-white font-bold text-xl">↗</div>,
            title: "スケーラブル設計",
            description: "ページ追加やシステム連携も柔軟に対応。成長に合わせて拡張可能"
          },
          {
            icon: <div className="text-white font-bold text-xl">📱</div>,
            title: "レスポンシブ対応",
            description: "スマホ・タブレット・PCで最適表示。どこからでも快適にアクセス"
          }
        ]}
        columns={4}
      />

      <ContentSection className={STYLES.section.pricing} id="pricing">
        <div className="text-center mb-16">
          <h2 className={STYLES.heading.h2}>
            料金プラン
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mt-4">
            明確な料金体系で安心スタート
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard plan={{...service.pricing.standard, features: [...service.pricing.standard.features]}} featured />
          <PricingCard plan={{...service.pricing.premium, features: [...service.pricing.premium.features]}} />
          <PricingCard plan={{...service.pricing.enterprise, features: [...service.pricing.enterprise.features]}} />
        </div>
      </ContentSection>

      <ProcessSteps
        title="制作の流れ"
        steps={[
          { 
            step: "01", 
            title: "ヒアリング", 
            description: "目的・ターゲット・競合を分析し、最適な戦略を策定",
            duration: "1週間"
          },
          { 
            step: "02", 
            title: "企画・設計", 
            description: "ユーザー動線を考慮した構成とブランドに合うデザインを提案",
            duration: "1-2週間"
          },
          { 
            step: "03", 
            title: "制作・開発", 
            description: "高品質なデザインと最新技術で、速くて使いやすいサイトを構築",
            duration: "2-4週間"
          },
          { 
            step: "04", 
            title: "公開・運用", 
            description: "公開後も安心のサポート体制。アクセス解析で改善提案も実施",
            duration: "継続"
          }
        ]}
      />

      <ContentSection className={STYLES.section.features}>
        <div className="text-center mb-16">
          <h2 className={STYLES.heading.h2}>
            技術仕様・対応範囲
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={STYLES.card.compact}>
            <h3 className={STYLES.heading.h4}>開発技術</h3>
            <ul className="space-y-2 text-sm text-gray-600 mt-4">
              <li>• Next.js / React</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Node.js</li>
            </ul>
          </div>
          
          <div className={STYLES.card.compact}>
            <h3 className={STYLES.heading.h4}>対応機能</h3>
            <ul className="space-y-2 text-sm text-gray-600 mt-4">
              <li>• CMS連携</li>
              <li>• お問い合わせフォーム</li>
              <li>• ブログ機能</li>
              <li>• 多言語対応</li>
            </ul>
          </div>
          
          <div className={STYLES.card.compact}>
            <h3 className={STYLES.heading.h4}>保証・サポート</h3>
            <ul className="space-y-2 text-sm text-gray-600 mt-4">
              <li>• 充実のサポート体制</li>
              <li>• バックアップ対応</li>
              <li>• SSL証明書設定</li>
              <li>• セキュリティ対策</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="text-center">
          <h2 className={STYLES.heading.h2}>
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 mt-4">
            まずは無料相談から始めましょう
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
              ariaLabel="制作実績ページに移動"
            >
              制作実績を見る
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
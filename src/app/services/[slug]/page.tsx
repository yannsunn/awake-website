import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import PageTemplate from '@/components/layout/PageTemplate'
import { COMPANY_DATA } from '@/lib/company-data'
import { STYLES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import ProblemSection from '@/components/sections/ProblemSection'
import UseCases from '@/components/sections/UseCases'
import AIFaq from '@/components/sections/AIFaq'
import WhyNowCTA from '@/components/sections/WhyNowCTA'
import WhyAmazon from '@/components/sections/WhyAmazon'
import RiskFree from '@/components/sections/RiskFree'
import AmazonSupport from '@/components/sections/AmazonSupport'
import SuccessStories from '@/components/sections/SuccessStories'
import AmazonFAQ from '@/components/sections/AmazonFAQ'
import AmazonCTA from '@/components/sections/AmazonCTA'

// 動的ルートのパラメータ型
type Params = Promise<{ slug: string }>

// サービス詳細データ
const serviceData = {
  web: {
    title: COMPANY_DATA.services.details.web.title,
    subtitle: COMPANY_DATA.services.details.web.subtitle,
    description: COMPANY_DATA.services.details.web.description,
    icon: '🌐',
    features: [
      {
        title: 'レスポンシブデザイン',
        description: 'スマホ・タブレット・PCすべてに最適化されたデザインを提供',
        icon: '📱'
      },
      {
        title: 'SEO対策',
        description: '検索エンジンに強い構造で、集客力のあるサイトを構築',
        icon: '🔍'
      },
      {
        title: '高速表示',
        description: '最新技術を活用し、ストレスのない高速なサイトを実現',
        icon: '⚡'
      },
      {
        title: '保守・運用サポート',
        description: '納品後も安心の保守サポートで、継続的な改善をお手伝い',
        icon: '🛡️'
      }
    ],
    process: [
      {
        title: 'ヒアリング',
        description: 'お客様のビジネスや目標を詳しくお聞きし、最適な提案を行います'
      },
      {
        title: 'デザイン提案',
        description: 'ブランドイメージに合わせた魅力的なデザインをご提案'
      },
      {
        title: '開発・実装',
        description: '最新技術を活用し、高品質なWebサイトを構築'
      },
      {
        title: '納品・運用開始',
        description: 'テスト完了後、本番環境へ公開し運用をスタート'
      }
    ]
  },
  ai: {
    title: COMPANY_DATA.services.details.ai.title,
    subtitle: 'AIで、あなたの会社はどう変わるか？',
    description: '単純作業から解放され、創造的な仕事に集中できる組織へ',
    icon: '🤖',
    features: [
      {
        title: 'あなたの会社専用の戦略設計',
        description: '汎用的なAI導入ではなく、あなたのビジネスに最適化された活用戦略を策定',
        icon: '🎯'
      },
      {
        title: '最短2週間で効果を実感',
        description: '小さく始めて、効果を確認しながら拡大。リスクを最小限に抑えた導入',
        icon: '🚀'
      },
      {
        title: '初期投資を抑えた料金体系',
        description: '¥298,000〜の明確な価格設定。隠れたコストは一切ありません',
        icon: '💰'
      },
      {
        title: '導入後も安心の伴走支援',
        description: '使い方の研修から、継続的な改善提案まで。AI活用を成功に導きます',
        icon: '🤝'
      }
    ],
    process: [
      {
        title: '現状分析（1週間）',
        description: '業務フローの可視化、AI活用ポイントの特定、期待効果の試算'
      },
      {
        title: '実証実験（2-3週間）',
        description: '小規模なPoC開発、実際の業務での検証、効果測定とフィードバック'
      },
      {
        title: '本格導入（1ヶ月）',
        description: 'システムの構築、社内体制の整備、運用ルールの策定'
      },
      {
        title: '継続改善（永続的）',
        description: '精度向上の取り組み、新技術への対応、活用範囲の拡大'
      }
    ]
  },
  ec: {
    title: COMPANY_DATA.services.details.ec.title,
    subtitle: '初期費用0円。売れてから払う、新しい販路開拓',
    description: 'Amazonで月商1,000万円を目指す、完全成果報酬型サービス',
    subDescription: '在庫リスクなし。広告費の持ち出しなし。売れた分だけお支払い。',
    icon: '🛒',
    features: [
      {
        title: 'データに基づく確実な売上アップ',
        description: '勘や経験ではなく、Amazonのビッグデータを活用した科学的アプローチ',
        icon: '📊'
      },
      {
        title: '売れる商品ページの作成',
        description: '購買心理を理解した、「買いたくなる」商品ページを制作',
        icon: '🎯'
      },
      {
        title: '最適な価格戦略',
        description: '競合分析と需要予測で、売上と利益を最大化する価格設定',
        icon: '💡'
      },
      {
        title: '高評価を維持する運営',
        description: 'レビュー対策とカスタマーサポートで、ブランド価値を向上',
        icon: '⭐'
      }
    ],
    process: [
      {
        title: '無料診断（即日）',
        description: '商品の市場性とポテンシャルを分析'
      },
      {
        title: '戦略立案（3日）',
        description: '競合分析と販売戦略の策定'
      },
      {
        title: '出品準備（1週間）',
        description: '商品ページ作成と各種設定'
      },
      {
        title: '販売開始（2週間〜）',
        description: 'テスト販売から本格展開へ'
      }
    ]
  }
}

// 静的パラメータの生成
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }))
}

// メタデータの生成
export async function generateMetadata(
  props: { params: Params }
): Promise<Metadata> {
  const { slug } = await props.params
  
  const service = serviceData[slug as keyof typeof serviceData]
  if (!service) {
    return {
      title: 'サービスが見つかりません',
    }
  }

  return {
    title: `${service.title} | ${COMPANY_DATA.basic.name}`,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${COMPANY_DATA.basic.name}`,
      description: service.description,
      images: [`${COMPANY_DATA.url}/assets/images/og-${slug}.png`],
    },
  }
}

export default async function ServicePage(
  props: { params: Params }
) {
  const { slug } = await props.params
  
  const service = serviceData[slug as keyof typeof serviceData]
  
  if (!service) {
    notFound()
  }

  // AIコンサルティングページのカスタマイズ
  if (slug === 'ai') {
    return (
      <PageTemplate>
        <ServiceHero
          title={service.subtitle || service.title}
          description={service.description}
          ctaText="無料診断を受ける"
          ctaHref="/#contact"
          secondaryCtaText="導入事例を見る"
          secondaryCtaHref="#use-cases"
        />
        
        <ProblemSection />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={cn(STYLES.heading.h2.section, "text-center mb-12")}>
              Awakeが選ばれる4つの理由
            </h2>
            <FeatureGrid features={service.features} />
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={cn(STYLES.heading.h2.section, "mb-4")}>
                導入プロセス
              </h2>
              <p className={STYLES.text.body.large}>
                たった4ステップで、業務が劇的に変わる
              </p>
            </div>
            <ProcessSteps steps={service.process} />
          </div>
        </section>
        
        <UseCases />
        <AIFaq />
        <WhyNowCTA />
      </PageTemplate>
    )
  }

  // Amazon代理店サービスページのカスタマイズ
  if (slug === 'ec') {
    return (
      <PageTemplate>
        <ServiceHero
          title={service.subtitle || service.title}
          description={service.description}
          ctaText="無料相談を予約する"
          ctaHref="/#contact"
          secondaryCtaText="サービス詳細を見る"
          secondaryCtaHref="#support"
          subDescription={service.subDescription}
        />
        
        <WhyAmazon />
        <RiskFree />
        
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={cn(STYLES.heading.h2.section, "text-center mb-12")}>
              私たちが選ばれる4つの理由
            </h2>
            <FeatureGrid features={service.features} />
          </div>
        </section>
        
        <AmazonSupport />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={cn(STYLES.heading.h2.section, "mb-4")}>
                導入の流れ
              </h2>
              <p className={STYLES.text.body.large}>
                最短2週間で販売開始
              </p>
            </div>
            <ProcessSteps steps={service.process} />
          </div>
        </section>
        
        <SuccessStories />
        <AmazonFAQ />
        <AmazonCTA />
      </PageTemplate>
    )
  }

  // その他のサービスページ（既存のレイアウト）
  return (
    <PageTemplate>
      <ServiceHero
        title={service.title}
        description={service.description}
        ctaText="お問い合わせはこちら"
        ctaHref="/#contact"
      />
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={cn(STYLES.heading.h2.section, "text-center mb-12")}>
            サービスの特徴
          </h2>
          <FeatureGrid features={service.features} />
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={cn(STYLES.heading.h2.section, "text-center mb-12")}>
            導入までの流れ
          </h2>
          <ProcessSteps steps={service.process} />
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={cn(STYLES.heading.h2.section, "mb-8")}>
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            お客様のビジネスに最適なソリューションをご提案いたします
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800"
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>
    </PageTemplate>
  )
}
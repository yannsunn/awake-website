import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import PageLayout from '@/components/layout/PageLayout'
import { COMPANY_DATA } from '@/lib/company-data'
import { createServiceSchema, createBreadcrumbSchema } from '@/lib/enhanced-schema'
import ProblemSection from '@/components/sections/ProblemSection'
import UseCases from '@/components/sections/UseCases'
import AIFaq from '@/components/sections/AIFaq'
import WhyNowCTA from '@/components/sections/WhyNowCTA'
import AIPricingTable from '@/components/sections/AIPricingTable'
import SuccessStories from '@/components/sections/SuccessStories'
import WhyAmazon from '@/components/sections/WhyAmazon'
import RiskFree from '@/components/sections/RiskFree'
import AmazonSupport from '@/components/sections/AmazonSupport'
import AmazonFAQ from '@/components/sections/AmazonFAQ'
import AmazonCTA from '@/components/sections/AmazonCTA'
import '@/app/corporate.css'

// 動的ルートのパラメータ型
type Params = Promise<{ slug: string }>

// サービス詳細データ
const serviceData = {
  web: {
    title: COMPANY_DATA.services.details.web.title,
    subtitle: '',
    description: COMPANY_DATA.services.details.web.description,
    subDescription: '',
    icon: '🌐',
    backgroundImage: '/images/hero-growth.webp',
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
        step: '1',
        title: 'ヒアリング',
        description: 'お客様のビジネスや目標を詳しくお聞きし、最適な提案を行います'
      },
      {
        step: '2',
        title: 'デザイン提案',
        description: 'ブランドイメージに合わせた魅力的なデザインをご提案'
      },
      {
        step: '3',
        title: '開発・実装',
        description: '最新技術を活用し、高品質なWebサイトを構築'
      },
      {
        step: '4',
        title: '納品・運用開始',
        description: 'テスト完了後、本番環境へ公開し運用をスタート'
      }
    ]
  },
  ai: {
    title: COMPANY_DATA.services.details.ai.title,
    subtitle: <>24時間働く<br />あなた専用のAIアシスタント</>,
    description: 'カスタマーサポートを自動化し、顧客満足度と業務効率を同時に向上',
    icon: '💬',
    backgroundImage: '/images/ai-energy.webp',
    features: [
      {
        title: '御社専用のAIチャットボット開発',
        description: '業種・業態に最適化されたカスタムAIで、精度の高い自動応答を実現',
        icon: '🎯'
      },
      {
        title: 'WebサイトやLINEに簡単連携',
        description: '既存のWebサイトやLINE公式アカウントに、すぐに導入可能',
        icon: '🔗'
      },
      {
        title: '人件費を大幅削減',
        description: 'よくある質問への対応を自動化し、スタッフは重要な業務に集中',
        icon: '💰'
      },
      {
        title: '継続的な学習で精度向上',
        description: '運用データを分析し、回答精度を継続的に改善。導入後も進化し続けます',
        icon: '📈'
      }
    ],
    process: [
      {
        step: '1',
        title: '要件定義（2週間）',
        description: '対応したい問い合わせの分析、FAQ整理、システム要件の策定'
      },
      {
        step: '2',
        title: 'チャットボット開発（4-6週間）',
        description: 'AIモデルの学習、対話フローの設計、Webサイト・LINE連携'
      },
      {
        step: '3',
        title: 'テスト運用（2週間）',
        description: '実環境でのテスト、精度チューニング、スタッフトレーニング'
      },
      {
        step: '4',
        title: '本格運用・改善（継続）',
        description: '問い合わせデータの分析、回答精度の向上、新機能追加'
      }
    ]
  },
  ec: {
    title: COMPANY_DATA.services.details.ec.title,
    subtitle: <>初期費用0円。<br />売れてから払う新しい販路開拓</>,
    description: 'Amazonで月商1,000万円を目指す、完全成果報酬型サービス',
    subDescription: '在庫リスクなし。広告費の持ち出しなし。売れた分だけお支払い。',
    icon: '🛒',
    backgroundImage: '/images/innovation-burst.webp',
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
        step: '1',
        title: '無料診断（即日）',
        description: '商品の市場性とポテンシャルを分析'
      },
      {
        step: '2',
        title: '戦略立案（3日）',
        description: '競合分析と販売戦略の策定'
      },
      {
        step: '3',
        title: '出品準備（1週間）',
        description: '商品ページ作成と各種設定'
      },
      {
        step: '4',
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

  // サービス別の詳細説明
  const enhancedDescriptions = {
    ai: `${service.description}。AIチャットボット開発298,000円〜、月額AIコモン33,000円〜。東京都東大和市の${COMPANY_DATA.basic.name}が、中小企業のカスタマーサポート自動化・業務効率化を支援。24時間365日対応で人件費削減と顧客満足度向上を実現。`,
    ec: `${service.description}。完全成果報酬型で初期費用0円。Amazon販売手数料10%〜15%。東京都東大和市の${COMPANY_DATA.basic.name}が、CLEMIRA製品など高品質商品のAmazon販路開拓を支援。在庫リスクなし、データ分析で確実な売上アップ。`,
    web: `${service.description}。ホームページ制作132,000円〜。東京都東大和市の${COMPANY_DATA.basic.name}が、中小企業のWebサイト制作を支援。レスポンシブデザイン、SEO対策、高速表示で集客力のあるサイトを実現。`
  }

  const description = enhancedDescriptions[slug as keyof typeof enhancedDescriptions] || service.description

  // サービス別のキーワード
  const keywords = {
    ai: ['AIチャットボット開発', 'AIコンサルティング', 'カスタマーサポート自動化', '業務効率化', 'AI導入支援', '中小企業DX', '東京都東大和市', 'LINE連携', 'Web連携', '人件費削減'],
    ec: ['Amazon代理店', 'EC販売代行', 'Amazon販路開拓', 'CLEMIRA', '完全成果報酬', '初期費用0円', 'オンライン販売', '中小企業', '東京都東大和市', 'メーカー直販'],
    web: ['ホームページ制作', 'Webサイト制作', 'レスポンシブデザイン', 'SEO対策', '中小企業', 'コーポレートサイト', '東京都東大和市', '高速表示', '保守運用']
  }

  return {
    title: `${service.title} | ${COMPANY_DATA.basic.name}`,
    description,
    keywords: keywords[slug as keyof typeof keywords] || [],
    openGraph: {
      type: 'website',
      locale: 'ja_JP',
      url: `${COMPANY_DATA.url}/services/${slug}`,
      siteName: COMPANY_DATA.basic.name,
      title: `${service.title} | ${COMPANY_DATA.basic.name}`,
      description,
      images: [
        {
          url: `${COMPANY_DATA.url}/assets/images/og-${slug}.png`,
          width: 1200,
          height: 630,
          alt: `${service.title} - ${COMPANY_DATA.basic.name}`
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | ${COMPANY_DATA.basic.name}`,
      description,
      images: [`${COMPANY_DATA.url}/assets/images/og-${slug}.png`],
    },
    alternates: {
      canonical: `${COMPANY_DATA.url}/services/${slug}`,
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
    // Service schema for AI consulting
    const aiServiceSchema = createServiceSchema({
      name: service.title,
      description: service.description,
      serviceType: 'Business Consulting',
      offers: [
        {
          name: 'AIチャットボット開発',
          price: '298000',
          description: '御社専用のAIチャットボット開発・導入サービス'
        },
        {
          name: '月額AIコモン',
          price: '33000',
          description: 'AI活用の継続的なサポートとメンテナンス'
        }
      ]
    })

    // Breadcrumb schema
    const breadcrumbSchema = createBreadcrumbSchema([
      { name: 'ホーム', url: COMPANY_DATA.contact.website },
      { name: 'サービス', url: `${COMPANY_DATA.contact.website}#services` },
      { name: service.title, url: `${COMPANY_DATA.contact.website}services/${slug}` }
    ])

    return (
      <PageLayout>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aiServiceSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />

        <ServiceHero
          title={service.subtitle || service.title}
          description={service.description}
          ctaText="無料診断を受ける"
          ctaHref="/#contact"
          secondaryCtaText="導入事例を見る"
          secondaryCtaHref="#use-cases"
          backgroundImage={'backgroundImage' in service ? service.backgroundImage : undefined}
        />
        
        <ProblemSection />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="corp-heading-2 text-black text-center mb-12">
              Awakeが選ばれる4つの理由
            </h2>
            <FeatureGrid features={service.features} />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="corp-heading-2 text-black mb-4">
                導入プロセス
              </h2>
              <p className="corp-text-lead text-black">
                たった4ステップで、業務が劇的に変わる
              </p>
            </div>
            <ProcessSteps title="" steps={service.process} />
          </div>
        </section>
        
        <UseCases />
        <SuccessStories />
        <AIPricingTable />
        <AIFaq />
        <WhyNowCTA />
      </PageLayout>
    )
  }

  // Amazon代理店サービスページのカスタマイズ
  if (slug === 'ec') {
    // Service schema for Amazon EC
    const ecServiceSchema = createServiceSchema({
      name: service.title,
      description: service.description,
      serviceType: 'E-commerce',
      price: '0',
      offers: [
        {
          name: 'Amazon販売代行',
          price: '0',
          description: '初期費用0円、完全成果報酬型（売上の10-15%）のAmazon販売総合支援'
        }
      ]
    })

    // Breadcrumb schema
    const breadcrumbSchema = createBreadcrumbSchema([
      { name: 'ホーム', url: COMPANY_DATA.contact.website },
      { name: 'サービス', url: `${COMPANY_DATA.contact.website}#services` },
      { name: service.title, url: `${COMPANY_DATA.contact.website}services/${slug}` }
    ])

    return (
      <PageLayout>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ecServiceSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />

        <ServiceHero
          title={service.subtitle || service.title}
          description={service.description}
          ctaText="無料相談を予約する"
          ctaHref="/#contact"
          secondaryCtaText="サービス詳細を見る"
          secondaryCtaHref="#support"
          subDescription={'subDescription' in service ? service.subDescription : undefined}
          backgroundImage={'backgroundImage' in service ? service.backgroundImage : undefined}
        />
        
        <WhyAmazon />
        <RiskFree />
        
        {/* CLEMIRA独占販売セクション */}
        <section className="py-16 md:py-24 relative bg-blue-50">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="corp-heading-2 text-black mb-6">
                CLEMIRA製品の日本唯一のメーカー直販店
              </h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                身体機能向上をサポートする革新的な技術製品CLEMIRAを、<br />
                日本で唯一のメーカー直販店として販売しています
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* 製品ラインナップ */}
              <div className="corp-card">
                <h3 className="text-2xl font-bold text-black mb-4">製品ラインナップ</h3>
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/assets/images/clemira-products.webp"
                    alt="CLEMIRA製品ラインナップ - PHOENIX, athlete, blackcard"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-black">
                    • <a href="https://amzn.to/46S4RMV" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">CLEMIRA PHOENIX</a> - ¥165,000（税込）
                  </p>
                  <p className="text-black">
                    • <a href="https://amzn.to/471iglX" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">CLEMIRA athlete</a> - ¥55,000（税込）
                  </p>
                  <p className="text-black">
                    • <a href="https://amzn.to/3JfiUlV" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">CLEMIRA blackcard</a> - ¥27,500（税込）
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <h4 className="text-lg font-semibold text-black mb-3">お得なセット商品</h4>
                  <div className="space-y-2">
                    <p className="text-black">
                      • <a href="https://amzn.to/46X1swq" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">全セット</a> - 全製品をお得な価格で
                    </p>
                    <p className="text-black">
                      • <a href="https://amzn.to/47vxhMN" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">アスリートカードセット</a> - athleteとblackcardのセット
                    </p>
                    <p className="text-black">
                      • <a href="https://amzn.to/4mB1SwQ" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">アスリート2個セット</a> - athlete 2個のお得なセット
                    </p>
                  </div>
                </div>
              </div>

              {/* メディア実績 */}
              <div className="corp-card">
                <h3 className="text-2xl font-bold text-black mb-4">メディア掲載実績</h3>
                <div className="relative rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/assets/images/clemira-youtube.webp"
                    alt="CLEMIRA YouTubeチャンネル「令和の虎」掲載"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-black">YouTubeチャンネル「令和の虎」に定期出演</p>
                  <p className="text-black">記憶力向上と身体機能向上の革新的技術として紹介</p>
                </div>
              </div>
            </div>

            {/* 販売実績 */}
            <div className="corp-card">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">驚異的な販売実績</h3>
              <div className="relative rounded-xl overflow-hidden bg-white p-4">
                <Image
                  src="/assets/images/clemira-sales.webp"
                  alt="CLEMIRA販売実績 - 49件の注文、53点の販売、売上299万円以上"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-yellow-400">49件</p>
                  <p className="text-black">注文数</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400">53点</p>
                  <p className="text-black">販売数</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-400">¥2,992,895</p>
                  <p className="text-black">売上実績</p>
                </div>
              </div>
              <p className="text-center text-xl text-black mt-6 font-semibold">
                日本唯一のメーカー直販店として、確実な商品提供をお約束します
              </p>
            </div>

            {/* アスリート採用実績 */}
            <div className="corp-card mt-8">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">プロアスリートサポート実績</h3>
              <div className="relative rounded-xl overflow-hidden mb-6">
                <Image
                  src="/assets/images/clemira-athletes.jpg"
                  alt="CLEMIRA採用アスリート - 広島東洋カープ選手、格闘家など"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-blue-600 mb-3">アドバイザリー契約</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-black font-semibold">◆ 広島東洋カープ</p>
                      <p className="text-black text-sm ml-4">
                        末包昇大、矢野雅哉、羽月隆太郎、<br />
                        田村俊介、小園海人（予定）
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-blue-600 mb-3">スポンサー契約</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-black font-semibold text-sm">◆ フットサル</p>
                      <p className="text-black text-sm ml-4">ボルクバレット北九州（Fリーグ）</p>
                    </div>
                    <div>
                      <p className="text-black font-semibold text-sm">◆ バレーボール</p>
                      <p className="text-black text-sm ml-4">福岡ギラソール（Vリーグ）</p>
                    </div>
                    <div>
                      <p className="text-black font-semibold text-sm">◆ ボクシング</p>
                      <p className="text-black text-sm ml-4">宮澤蓮斗選手（U24日本一）</p>
                    </div>
                    <div>
                      <p className="text-black font-semibold text-sm">◆ キックボクシング</p>
                      <p className="text-black text-sm ml-4">寺山遼冴（那須川天心の弟子）</p>
                    </div>
                    <div>
                      <p className="text-black font-semibold text-sm">◆ 高校サッカー</p>
                      <p className="text-black text-sm ml-4">昌平高校エース鄭君（インター杯優勝）</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-200">
                <h4 className="text-lg font-bold text-blue-600 mb-3">メディア出演</h4>
                <div className="space-y-3">
                  <div>
                    <a 
                      href="https://youtu.be/nMvy6GAX2Xk?si=RDRt7y_M8Ip4AqUV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 underline"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                      ムエタイ世界王者 梅野源治選手の体感ワーク
                    </a>
                    <p className="text-black text-sm ml-7">RIZIN選手による実演動画</p>
                  </div>
                  <div>
                    <a 
                      href="https://youtu.be/xE8RM3L8vc4?si=YfuMmD8bGq9qsmea"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 underline"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                      メーカー公認クルミラガール
                    </a>
                    <p className="text-black text-sm ml-7">公式プロモーション動画</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CLEMIRAインソール */}
            <div className="corp-card mt-8">
              <h3 className="text-2xl font-bold text-black mb-6 text-center">完全オーダーメイドインソール</h3>
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/clemira-insole.jpg"
                  alt="CLEMIRAインソール - Quantum Effect Technology"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-xl text-black mb-4">
                  量子効果技術を搭載した完全オーダーメイドインソール
                </p>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 inline-block">
                  <p className="text-white font-bold text-lg mb-2">インソールのご相談はこちら</p>
                  <a
                    href="https://lin.ee/xBl5t78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 1.19 0 2.34-.21 3.41-.6.3-.11.49-.4.49-.72 0-.43-.35-.78-.78-.78-.17 0-.33.06-.46.14-.85.32-1.74.49-2.66.49-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 1.29-.31 2.5-.85 3.57-.13.25-.42.43-.7.43-.43 0-.78-.35-.78-.78v-4.72c0-.43-.35-.78-.78-.78s-.78.35-.78.78v.42c-.71-.7-1.68-1.14-2.76-1.14-2.18 0-3.94 1.76-3.94 3.94s1.76 3.94 3.94 3.94c1.08 0 2.05-.44 2.76-1.14.36.68 1.08 1.14 1.9 1.14.88 0 1.68-.54 2.01-1.36.67-1.31 1.04-2.79 1.04-4.36 0-5.52-4.48-10-10-10zm0 12.56c-1.31 0-2.38-1.07-2.38-2.38s1.07-2.38 2.38-2.38 2.38 1.07 2.38 2.38-1.07 2.38-2.38 2.38z"/>
                    </svg>
                    LINEで相談する
                  </a>
                  <p className="text-white text-sm mt-2">@awake-inc</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="corp-heading-2 text-black text-center mb-12">
              私たちが選ばれる4つの理由
            </h2>
            <FeatureGrid features={service.features} />
          </div>
        </section>

        <AmazonSupport />

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="corp-heading-2 text-black mb-4">
                導入の流れ
              </h2>
              <p className="corp-text-lead text-black">
                最短2週間で販売開始
              </p>
            </div>
            <ProcessSteps title="" steps={service.process} />
          </div>
        </section>

        <AmazonFAQ />
        <AmazonCTA />
      </PageLayout>
    )
  }

  // その他のサービスページ（既存のレイアウト）
  // Service schema for web development
  const webServiceSchema = createServiceSchema({
    name: service.title,
    description: service.description,
    serviceType: 'Web Development',
    offers: [
      {
        name: 'スタンダードプラン',
        price: '132000',
        description: 'レスポンシブデザイン対応の高品質なWebサイト制作'
      },
      {
        name: 'プレミアムプラン',
        price: '248000',
        description: 'SEO対策・コンテンツ制作込みの完全パッケージ'
      }
    ]
  })

  // Breadcrumb schema
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'ホーム', url: COMPANY_DATA.contact.website },
    { name: 'サービス', url: `${COMPANY_DATA.contact.website}#services` },
    { name: service.title, url: `${COMPANY_DATA.contact.website}services/${slug}` }
  ])

  return (
    <PageLayout>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webServiceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      <ServiceHero
        title={service.title}
        description={service.description}
        ctaText="お問い合わせはこちら"
        ctaHref="/#contact"
        backgroundImage={'backgroundImage' in service ? service.backgroundImage : undefined}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="corp-heading-2 text-black text-center mb-12">
            サービスの特徴
          </h2>
          <FeatureGrid features={service.features} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="corp-heading-2 text-black text-center mb-12">
            導入までの流れ
          </h2>
          <ProcessSteps title="" steps={service.process} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="corp-heading-2 text-black mb-8">
            まずはお気軽にご相談ください
          </h2>
          <p className="corp-text-lead text-black mb-8">
            お客様のビジネスに最適なソリューションをご提案いたします
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-black hover:from-blue-600 hover:to-blue-700 shadow-xl font-bold rounded-lg transition-all"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
import type { Metadata } from 'next'
import { Video, CheckCircle, Clock, Zap, ArrowRight, Users, Eye } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import PageTemplate, { ContentSection } from '@/components/layout/PageTemplate'
import AccessibleButton from '@/components/ui/AccessibleButton'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { generateServiceMetadata } from '@/lib/metadata'
import { ServiceHero } from '@/components/sections/ServiceHero'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { FeatureGrid } from '@/components/sections/FeatureGrid'

const service = COMPANY_DATA.services.details.video

export const metadata: Metadata = generateServiceMetadata({
  id: 'video',
  title: service.title,
  description: service.description,
  longDescription: service.longDescription,
  href: service.href,
  pricing: service.pricing
})

const features = [
  {
    icon: Clock,
    title: "最短24時間納品",
    description: "お急ぎの案件も対応可能。スピード感のある制作で機会を逃しません"
  },
  {
    icon: Eye,
    title: "高い視聴完了率",
    description: "最後まで見られる動画で確実にメッセージを伝達"
  },
  {
    icon: Zap,
    title: "AI技術活用",
    description: "最新AI技術で効率化。品質を保ちながらコストを大幅削減"
  },
  {
    icon: Users,
    title: "顔出し不要",
    description: "アニメーション・テキスト・音声のみで魅力的な動画を制作"
  }
]

const platforms = [
  {
    name: "YouTube",
    description: "長時間視聴に最適",
    specs: "16:9 / 1080p推奨",
    color: "from-red-500 to-red-600"
  },
  {
    name: "TikTok",
    description: "縦型ショート動画",
    specs: "9:16 / 60秒以内",
    color: "from-pink-500 to-pink-600"
  },
  {
    name: "Instagram",
    description: "ストーリー・リール対応",
    specs: "1:1, 9:16 / 30秒推奨",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "X (Twitter)",
    description: "短時間で印象的に",
    specs: "16:9 / 140秒以内",
    color: "from-blue-500 to-blue-600"
  }
]

const pricing = [
  {
    name: "ベーシック",
    description: "シンプルな動画制作",
    price: "¥15,000",
    period: "〜",
    features: [
      "基本的な編集",
      "テキスト・音声挿入",
      "1回の修正対応",
      "最短48時間納品"
    ]
  },
  {
    name: "スタンダード",
    description: "本格的な動画制作",
    price: "¥45,000",
    period: "〜",
    popular: true,
    features: [
      "プロ品質の編集",
      "アニメーション追加",
      "3回の修正対応",
      "最短24時間納品",
      "SNS最適化"
    ]
  },
  {
    name: "プレミアム",
    description: "完全オリジナル制作",
    price: "¥165,000",
    period: "〜",
    features: [
      "完全オリジナル制作",
      "プロナレーション",
      "無制限修正対応",
      "最短12時間納品",
      "全プラットフォーム対応",
      "専任ディレクター"
    ]
  }
]

const videoServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Video Production",
  "provider": {
    "@type": "Organization",
    "name": "株式会社Awake",
    "url": "https://awake-website.netlify.app/"
  },
  "name": "動画編集・制作サービス",
  "description": "AI技術活用で顔出し不要・SNS最適化。YouTube・TikTok・Instagram等のプロ動画制作。24時間納品対応。",
  "url": "https://awake-website.netlify.app/services/video/",
  "image": "https://awake-website.netlify.app/assets/images/video-editing.jpg",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "JPY",
    "lowPrice": "15000",
    "highPrice": "165000",
    "eligibleRegion": {
      "@type": "Country",
      "name": "Japan"
    }
  }
}

// 🚀 限界突破！ Ultra-Rich Video Service Page - 完全最適化版
export default function VideoServicePage() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "サービス", url: "/#services" },
    { name: "動画編集・制作", url: "/services/video" }
  ]

  return (
    <PageTemplate
      title="動画編集・制作サービス"
      description="株式会社Awakeの動画編集・制作サービス"
      breadcrumbs={breadcrumbs}
    >
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoServiceSchema),
        }}
      />

      {/* Hero Section */}
      <ContentSection className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcng9IjgiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkiLz4KPC9zdmc+')] opacity-25"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/25 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-300/15 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Video className="h-8 w-8 text-white mr-3" />
              <span className="text-white/80 font-semibold">Video Production</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              視聴者の心を掴む<br />プロ品質動画制作
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              再生数を大幅に増加。<br />
              AI技術とプロの編集で、見た人がファンになる動画を制作します。
            </p>
            <AccessibleButton
              href="#contact"
              variant="primary"
              size="large"
              className="bg-white text-blue-600 hover:bg-gray-100"
              ariaLabel="無料相談・お見積りフォームに移動"
            >
              無料相談・お見積り
              <ArrowRight className="ml-2 h-5 w-5" />
            </AccessibleButton>
          </div>
          <div className="relative">
            <OptimizedImage
              src="/assets/images/video-editing.jpg"
              alt="動画編集のイメージ"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </ContentSection>

      {/* Features Section */}
      <ContentSection>
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            サービスの特徴
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            豊富な制作実績で培ったノウハウを提供
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center p-6 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </ContentSection>

      {/* Platforms Section */}
      <ContentSection className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            対応プラットフォーム
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            各プラットフォームの特性を活かした最適化
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {platform.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {platform.description}
              </p>
              <p className="text-gray-500 text-xs">
                {platform.specs}
              </p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Pricing Section */}
      <ContentSection>
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            予算と目的に合わせた明確な料金設定
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-lg ${
                plan.popular ? 'ring-2 ring-blue-600 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    人気
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-medium text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-light text-blue-600">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <AccessibleButton
                href="#contact"
                variant={plan.popular ? "primary" : "secondary"}
                className={plan.popular 
                  ? "bg-blue-600 text-white hover:bg-blue-700 w-full" 
                  : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full"
                }
                ariaLabel={`${plan.name}プランを選択`}
              >
                プランを選択
              </AccessibleButton>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection className="bg-blue-600" id="contact">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6">
            動画でビジネスを加速させませんか？
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            成果が出なければ2回目の制作費用は無料。成果保証付き
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AccessibleButton
              href="/#contact"
              variant="primary"
              size="large"
              className="bg-white text-blue-600 hover:bg-gray-100"
              ariaLabel="制作依頼フォームに移動"
            >
              制作依頼をする
              <ArrowRight className="ml-2 h-5 w-5" />
            </AccessibleButton>
            <AccessibleButton
              href="/"
              variant="secondary"
              size="large"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
              ariaLabel="ホームページに戻って他のサービスを見る"
            >
              他のサービスを見る
            </AccessibleButton>
            <AccessibleButton
              href={COMPANY_DATA.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="large"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
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
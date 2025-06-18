import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_DATA } from '@/lib/company-data'
import { PricingCard, CTAButton, FeatureHighlight } from '@/lib/unified-components'

export const metadata: Metadata = {
  title: `${COMPANY_DATA.services.details.web.title}${COMPANY_DATA.metadata.baseTitleSuffix}`,
  description: COMPANY_DATA.services.details.web.longDescription,
  keywords: `${COMPANY_DATA.metadata.keywords}, ホームページ制作, ウェブ制作, コーポレートサイト, SEO対策`,
}

// 🚀 Ultra-Rich Web Service Page - Data Unified & Component Optimized
export default function WebServicePage() {
  const service = COMPANY_DATA.services.details.web
  
  return (
    <>
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section - Toyota Style */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
                {service.description}
              </p>

              <div className="flex justify-center">
                <CTAButton href="#pricing">
                  料金プランを見る
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Rich Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                サービス特徴
              </h2>
              <p className="text-lg text-gray-600">
                高品質なウェブサイトを確実にお届け
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureHighlight
                icon={<div className="text-white font-bold text-xl">¥</div>}
                title="プロフェッショナル制作"
                description="132,000円からプロ品質のサイトを制作。コストパフォーマンスに優れた価格設定"
              />
              
              <FeatureHighlight
                icon={<div className="text-white font-bold text-xl">S</div>}
                title="SEO最適化"
                description="検索エンジン対策を標準実装。Googleでの上位表示をサポート"
              />
              
              <FeatureHighlight
                icon={<div className="text-white font-bold text-xl">↗</div>}
                title="スケーラブル設計"
                description="企業成長に合わせて拡張可能。将来のニーズにも対応"
              />
              
              <FeatureHighlight
                icon={<div className="text-white font-bold text-xl">📱</div>}
                title="レスポンシブ対応"
                description="全デバイスで最適表示を保証。PC・タブレット・スマホ完全対応"
              />
            </div>
          </div>
        </section>

        {/* Pricing Section - Rich Content */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                料金プラン
              </h2>
              <p className="text-lg text-gray-600">
                ニーズに合わせた柔軟なプラン設計
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard plan={{...service.pricing.standard, features: [...service.pricing.standard.features]}} featured />
              <PricingCard plan={{...service.pricing.premium, features: [...service.pricing.premium.features]}} />
              <PricingCard plan={{...service.pricing.enterprise, features: [...service.pricing.enterprise.features]}} />
            </div>
          </div>
        </section>

        {/* Service Process Section - Rich Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                制作の流れ
              </h2>
              <p className="text-lg text-gray-600">
                お客様と二人三脚で進める安心の制作プロセス
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  step: "01", 
                  title: "ヒアリング", 
                  desc: "ご要望とサイトの目的を詳しくお聞きします。競合分析も実施",
                  time: "1週間"
                },
                { 
                  step: "02", 
                  title: "企画・設計", 
                  desc: "サイト構成とデザインコンセプトを策定。ワイヤーフレーム作成",
                  time: "1-2週間"
                },
                { 
                  step: "03", 
                  title: "制作・開発", 
                  desc: "デザイン作成からコーディングまで実施。SEO対策も同時進行",
                  time: "2-4週間"
                },
                { 
                  step: "04", 
                  title: "公開・運用", 
                  desc: "テスト完了後の公開と継続的なサポート。アナリティクス設定",
                  time: "継続"
                }
              ].map((item, index) => (
                <FeatureHighlight
                  key={index}
                  icon={<div className="text-white text-sm font-medium">{item.step}</div>}
                  title={item.title}
                  description={item.desc}
                  metric={item.time}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs Section - Added Rich Content */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                技術仕様・対応範囲
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">開発技術</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Next.js / React</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Node.js</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">対応機能</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• CMS連携</li>
                  <li>• お問い合わせフォーム</li>
                  <li>• ブログ機能</li>
                  <li>• 多言語対応</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">保証・サポート</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 3ヶ月無料サポート</li>
                  <li>• バックアップ対応</li>
                  <li>• SSL証明書設定</li>
                  <li>• セキュリティ対策</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Rich Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              まずはお気軽にご相談ください
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              お客様のご要望をお聞かせください。無料でお見積りいたします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/#contact">
                無料相談を申し込む
              </CTAButton>
              <CTAButton href="/about" variant="secondary">
                制作実績を見る
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
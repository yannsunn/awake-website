import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { memo } from 'react'
import { commonAnimations, optimizedViewport } from '@/lib/animations'

export const metadata: Metadata = {
  title: "AIコンサルティング | 株式会社Awake",
  description: "ChatGPT活用からDX推進まで包括サポート。実践的コンサルティングで企業変革を実現。",
  keywords: "AIコンサルティング, ChatGPT活用, DX推進, AI導入, 生産性向上, 業務効率化",
}

const services = [
  {
    name: "AI導入コンサルティング",
    duration: "1ヶ月",
    price: "¥298,000〜",
    features: [
      "業務プロセス効率化診断",
      "AI活用による改善提案",
      "最適なAIツール選定・導入",
      "社員向け実践指導",
      "継続的効果測定サポート"
    ]
  },
  {
    name: "全社DX推進プログラム",
    duration: "6-12ヶ月",
    price: "¥1,000,000〜",
    features: [
      "DX戦略の策定支援",
      "段階的なAI導入計画",
      "組織全体の変革支援",
      "業務プロセス改善提案",
      "継続的効果測定・改善"
    ]
  }
]

const benefits = [
  {
    title: "生産性向上",
    metric: "平均40%",
    description: "AI活用により業務処理時間を大幅短縮"
  },
  {
    title: "コスト削減",
    metric: "年間20%",
    description: "業務効率化によるコスト削減効果"
  },
  {
    title: "品質向上",
    metric: "エラー80%減",
    description: "AI支援によるヒューマンエラーの大幅削減"
  }
]

// 🚀 Ultra-Optimized AI Service Page (Toyota Style)
const AIServicePage = memo(function AIServicePage() {
  return (
    <>
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section - Toyota Style */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={commonAnimations.staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                variants={commonAnimations.fadeInUp}
                className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight"
              >
                AIコンサルティング
              </motion.h1>
              
              <motion.p 
                variants={commonAnimations.fadeInUp}
                className="text-xl text-gray-600 mb-12 font-light leading-relaxed"
              >
                最先端AI技術による業務効率化とデジタル変革支援
              </motion.p>

              <motion.div 
                variants={commonAnimations.fadeIn}
                className="flex justify-center"
              >
                <Link 
                  href="#services" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
                >
                  サービス詳細を見る
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Section - Minimal */}
        <section className="py-20 bg-white">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={commonAnimations.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            <motion.div variants={commonAnimations.fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                導入効果
              </h2>
            </motion.div>
            
            <motion.div 
              variants={commonAnimations.fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-light text-gray-900 mb-2">
                    {benefit.metric}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section - Clean */}
        <section id="services" className="py-20 bg-gray-50">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={commonAnimations.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            <motion.div variants={commonAnimations.fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                サービスメニュー
              </h2>
              <p className="text-lg text-gray-600">
                企業のニーズに合わせた柔軟なプログラム
              </p>
            </motion.div>
            
            <motion.div 
              variants={commonAnimations.fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {service.name}
                  </h3>
                  <div className="mb-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">期間:</span>
                      <span className="text-sm font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">料金:</span>
                      <span className="text-lg font-light text-gray-900">{service.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/#contact"
                    className="block text-center py-3 px-6 rounded-lg font-medium transition-colors border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    詳細を問い合わせ
                  </Link>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Process Section - Simple */}
        <section className="py-20 bg-white">
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={commonAnimations.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            <motion.div variants={commonAnimations.fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                導入の流れ
              </h2>
            </motion.div>
            
            <motion.div 
              variants={commonAnimations.fadeInUp}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              {[
                { step: "01", title: "現状分析", desc: "課題・目標・業務フローを分析" },
                { step: "02", title: "プログラム設計", desc: "最適化した研修プログラムを設計" },
                { step: "03", title: "実践的研修", desc: "業務に即した実践的な研修を実施" },
                { step: "04", title: "継続フォロー", desc: "効果測定と継続的な改善提案" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-medium">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section - Simple */}
        <section className="py-20 bg-gray-50">
          <motion.div 
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            variants={commonAnimations.fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={optimizedViewport}
          >
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              AI導入で企業の未来を変えませんか？
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              無料の現状分析から始めて、最適なAI活用戦略をご提案いたします
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-lg hover:shadow-xl"
            >
              無料相談を申し込む
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </>
  )
})

export default AIServicePage
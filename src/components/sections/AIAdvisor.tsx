'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { Brain, MessageSquare, TrendingUp, Clock, CheckCircle2, Sparkles } from 'lucide-react'
import LineButton from '@/components/ui/LineButton'

// AI顧問セクションコンポーネント
const AIAdvisor = memo(function AIAdvisor() {
  const features = [
    {
      icon: Brain,
      title: '24時間365日対応',
      description: 'いつでもどこでも、AIがあなたのビジネスをサポート'
    },
    {
      icon: MessageSquare,
      title: '専門知識を即座に提供',
      description: 'マーケティング、経営、IT全般の質問に即答'
    },
    {
      icon: TrendingUp,
      title: '継続的な改善提案',
      description: 'データ分析に基づいた成長戦略をアドバイス'
    },
    {
      icon: Clock,
      title: '月額固定で使い放題',
      description: 'コンサル費用を大幅削減、予算を気にせず相談'
    }
  ]

  const plans = [
    {
      name: 'ベーシック',
      price: '29,800',
      features: [
        'AI顧問チャット（月100回まで）',
        '基本的なビジネス相談',
        'メール対応（3営業日以内）',
        '月次レポート'
      ]
    },
    {
      name: 'プロフェッショナル',
      price: '59,800',
      popular: true,
      features: [
        'AI顧問チャット（無制限）',
        '専門的な経営相談',
        '優先メール対応（24時間以内）',
        '週次レポート + 月次戦略提案',
        'Zoom相談（月1回）'
      ]
    },
    {
      name: 'エンタープライズ',
      price: '98,000',
      features: [
        'すべてのプロ機能',
        '専任AI顧問',
        '即時対応（チャット・電話）',
        '日次レポート + カスタム分析',
        'Zoom相談（月4回）',
        'カスタムAI開発サポート'
      ]
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4 sm:mb-5 md:mb-6">
            <Sparkles className="w-4 h-4" />
            <span>新サービス</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">
            AI顧問サービス
            <span className="block text-gray-700 mt-2">月額制で経営をサポート</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            高額なコンサルタント費用は不要。AI技術とビジネス専門知識を組み合わせた、
            <br className="hidden md:inline" />
            <strong className="text-gray-900">中小企業に最適化された顧問サービス</strong>
          </p>
        </motion.div>

        {/* 特徴グリッド */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-blue-500/30">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </motion.div>

        {/* 料金プラン */}
        <motion.div
          className="mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12">
            シンプルな料金プラン
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              plan.popular ? (
                <div key={index} className="relative border-2 border-blue-600 rounded-2xl shadow-xl">
                  <div className="relative rounded-2xl p-8 bg-white transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      人気No.1
                    </div>

                    <div className="text-center mb-6">
                      <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                        {plan.name}
                      </h4>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                          ¥{plan.price}
                        </span>
                        <span className="text-base sm:text-lg text-gray-600">
                          /月
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <LineButton
                      size="medium"
                      className="w-full"
                    />
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="relative rounded-2xl p-8 bg-white border-2 border-gray-200 hover:border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-center mb-6">
                    <h4 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                      {plan.name}
                    </h4>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                        ¥{plan.price}
                      </span>
                      <span className="text-base sm:text-lg text-gray-600">
                        /月
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" />
                        <span className="text-sm text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <LineButton
                    size="medium"
                    className="w-full"
                  />
                </div>
              )
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative border-2 border-blue-600 rounded-3xl shadow-xl">
            <div className="text-center bg-white rounded-3xl p-8 sm:p-10 md:p-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
                まずは初回無料面談から
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto">
                お客様のビジネス課題をヒアリングし、最適なプランをご提案します。
                <br />
                オンライン・お電話・LINEで対応可能。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <LineButton size="large" />
                <a
                  href="tel:050-7115-4948"
                  className="px-8 py-4 bg-gray-50 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-100 text-gray-900 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  📞 電話で相談する
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default AIAdvisor

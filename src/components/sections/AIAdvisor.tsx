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
    <section className="relative py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>新サービス</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI顧問サービス
            <span className="block text-gray-700 mt-2">月額制で経営をサポート</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            高額なコンサルタント費用は不要。AI技術とビジネス専門知識を組み合わせた、
            <br className="hidden md:inline" />
            <strong className="text-gray-900">中小企業に最適化された顧問サービス</strong>
          </p>
        </motion.div>

        {/* 特徴グリッド */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
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
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </motion.div>

        {/* 料金プラン */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            シンプルな料金プラン
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-white border-2 border-gray-300 shadow-xl'
                    : 'bg-white border-2 border-gray-200 hover:border-gray-300 shadow-lg'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-bold">
                    人気No.1
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2 text-gray-900">
                    {plan.name}
                  </h4>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-gray-900">
                      ¥{plan.price}
                    </span>
                    <span className="text-lg text-gray-600">
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

                <button
                  className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gray-800 text-white hover:bg-gray-900'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  無料で試す
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center bg-gray-50 rounded-3xl p-12 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            まずは無料トライアルから
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            14日間、すべての機能を無料でお試しいただけます。
            <br />
            クレジットカード登録不要。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <LineButton size="large" />
            <a
              href="tel:050-7115-4948"
              className="px-8 py-4 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2"
            >
              📞 電話で相談する
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default AIAdvisor

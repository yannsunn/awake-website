'use client'

import { memo } from 'react'
import { STYLES } from '@/lib/constants'
import { TEXT_SHADOW } from '@/lib/ultra-styles'

const UseCases = memo(function UseCases() {
  const industries = [
    {
      icon: '📊',
      title: '経理・総務部門',
      items: [
        '請求書の自動処理',
        '勤怠データの集計',
        '各種申請の自動チェック'
      ]
    },
    {
      icon: '🏭',
      title: '製造・品質管理',
      items: [
        '検品作業の自動化',
        '生産データの分析',
        '異常検知と予防保全'
      ]
    },
    {
      icon: '📧',
      title: '営業・マーケティング',
      items: [
        '顧客データの分析',
        '提案書の自動生成',
        '問い合わせ対応の効率化'
      ]
    },
    {
      icon: '🏢',
      title: '人事・採用',
      items: [
        '応募書類のスクリーニング',
        '面接日程の自動調整',
        '社内FAQの自動応答'
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* LINE自動化ワークフロー */}
        <div className="mb-16">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-green-500/30">
            <h3 className={STYLES.heading.h3.emphasis + " text-white text-center mb-6"} style={TEXT_SHADOW.heading}>
              LINEと連携した自動化の実例
            </h3>
            <div className="relative rounded-xl overflow-hidden bg-white/95 p-4">
              <img
                src="/assets/images/ai-line-automation.png"
                alt="LINE自動化ワークフロー図"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-6 space-y-3">
              <h4 className="text-white font-semibold">このLINE連携で実現できること：</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>スプレッドシートのデータをLINEに通知</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>日付をスケジュール設定して定期実行</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>複数のデータソースを統合・整理</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>条件に応じた自動分岐処理</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            具体的な活用シーン
          </h2>
          <p className={STYLES.text.body.large}>
            あなたの業界でも、こんな成果が期待できます
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-overlay rounded-xl p-6">
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h3 className={STYLES.heading.h3.card + " mb-4 text-white"} style={TEXT_SHADOW.heading}>
                {industry.title}
              </h3>
              <ul className="space-y-2">
                {industry.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span className="text-white text-sm" style={TEXT_SHADOW.body}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default UseCases
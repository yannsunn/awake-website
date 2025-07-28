'use client'

import { memo } from 'react'
import { STYLES } from '@/lib/constants'

const AmazonSupport = memo(function AmazonSupport() {
  const supports = [
    {
      icon: '📝',
      title: '商品登録・ページ作成',
      items: [
        'プロのライターによる商品説明文',
        '購買意欲を高める画像構成',
        'SEO対策済みのキーワード設定',
        'A/Bテストによる継続改善'
      ]
    },
    {
      icon: '📢',
      title: '広告運用・集客施策',
      items: [
        'スポンサープロダクト広告の最適化',
        'スポンサーブランド広告の活用',
        '費用対効果の高いキャンペーン設計',
        'オーガニック流入の強化'
      ]
    },
    {
      icon: '📊',
      title: '売上分析・改善提案',
      items: [
        '週次・月次の詳細レポート',
        '競合動向の分析',
        '価格戦略の見直し',
        '新商品展開のご提案'
      ]
    },
    {
      icon: '💬',
      title: 'カスタマー対応',
      items: [
        '問い合わせへの迅速な対応',
        'ネガティブレビューの適切な処理',
        'リピート促進施策',
        'ブランドイメージの維持向上'
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            具体的なサポート内容
          </h2>
          <p className={STYLES.text.body.large}>
            すべてお任せください。売ることに集中します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supports.map((support, index) => (
            <div key={index} className="bg-white-overlay rounded-xl p-6">
              <div className="text-3xl mb-4">{support.icon}</div>
              <h3 className={STYLES.heading.h3.card + " mb-4"}>
                {support.title}
              </h3>
              <ul className="space-y-2">
                {support.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span className={STYLES.text.description.small}>{item}</span>
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

export default AmazonSupport
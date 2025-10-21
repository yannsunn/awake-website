'use client'

import { memo } from 'react'
import '@/app/corporate.css'

const SuccessStories = memo(function SuccessStories() {
  // グローバル業界統計データ（信頼できる公開データ）
  const industryStats = [
    {
      title: 'AIチャットボット市場',
      stat: '$7.01B → $20.81B',
      description: '2024-2029年の市場成長予測',
      source: 'グローバル市場調査',
      icon: '🤖'
    },
    {
      title: '中小企業のAI導入',
      stat: '55%が活用中',
      description: '2025年の米国中小企業（2024年比39%から増加）',
      source: '業界調査レポート',
      icon: '📈'
    },
    {
      title: 'EC市場の成長',
      stat: '34%増加予測',
      description: '2025年までのAIチャットボット導入率',
      source: 'EC業界統計',
      icon: '🛒'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="corp-heading-2 mb-4">
            業界の成長トレンド
          </h2>
          <p className="corp-text-lead">
            信頼できるグローバル市場データ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industryStats.map((stat, index) => (
            <div key={index} className="bg-gray-overlay rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="corp-heading-3 mb-2">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold text-blue-600 mb-3">
                {stat.stat}
              </p>
              <p className="corp-text-body text-black mb-2">
                {stat.description}
              </p>
              <p className="corp-text-body text-gray-500 text-sm">
                出典: {stat.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default SuccessStories
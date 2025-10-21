'use client'

import { memo } from 'react'
import { cn } from '@/lib/utils'
import { SECTION_SPACING, CONTAINER, HEADING, TEXT, MARGIN } from '@/lib/design-system/unified'
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
    <section className={cn(SECTION_SPACING.default, 'bg-white')}>
      <div className={CONTAINER.default.full}>
        <div className={cn('text-center', MARGIN.xl)}>
          <h2 className={cn(HEADING.h2, MARGIN.sm)}>
            業界の成長トレンド
          </h2>
          <p className={TEXT.lead}>
            信頼できるグローバル市場データ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industryStats.map((stat, index) => (
            <div key={index} className="bg-gray-overlay rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className={cn(HEADING.h4, MARGIN.xs)}>
                {stat.title}
              </h3>
              <p className={cn('text-2xl font-bold text-blue-600', MARGIN.xs)}>
                {stat.stat}
              </p>
              <p className={cn(TEXT.body, 'text-black', MARGIN.xs)}>
                {stat.description}
              </p>
              <p className={cn(TEXT.small, 'text-gray-500')}>
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
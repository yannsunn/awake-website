'use client'

import { memo } from 'react'
import { STYLES } from '@/lib/constants'

const SuccessStories = memo(function SuccessStories() {
  const stories = [
    {
      title: '自社ECの3倍の売上に成長',
      company: '食品メーカー A社様',
      result: '導入6ヶ月で月商500万円を達成',
      icon: '🍱'
    },
    {
      title: '新規顧客が月200件増加',
      company: '雑貨メーカー B社様',
      result: 'Amazonきっかけでリピーターも増加',
      icon: '🛍️'
    },
    {
      title: '在庫回転率が2倍に改善',
      company: 'アパレル C社様',
      result: 'データ分析で適正在庫を実現',
      icon: '👔'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            成功事例
          </h2>
          <p className={STYLES.text.body.large}>
            実際の導入企業様の声
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">{story.icon}</div>
              <h3 className={STYLES.heading.h3.emphasis + " mb-2"}>
                "{story.title}"
              </h3>
              <p className={STYLES.text.body.medium + " text-gray-700 mb-3"}>
                {story.company}
              </p>
              <p className={STYLES.text.description.medium + " text-gray-600"}>
                {story.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default SuccessStories
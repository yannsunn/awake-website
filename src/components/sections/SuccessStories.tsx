'use client'

import { memo } from 'react'
import '@/app/corporate.css'

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
    <section className="py-16 md:py-24 bg-white-overlay">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="corp-heading-2 mb-4">
            成功事例
          </h2>
          <p className="corp-text-lead">
            実際の導入企業様の声
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-overlay rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">{story.icon}</div>
              <h3 className="corp-heading-3 mb-2">
                &ldquo;{story.title}&rdquo;
              </h3>
              <p className="corp-text-body text-black mb-3">
                {story.company}
              </p>
              <p className="corp-text-body text-black">
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
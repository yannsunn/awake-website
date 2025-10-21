'use client'

import { memo } from 'react'
import '@/app/corporate.css'

const WhyAmazon = memo(function WhyAmazon() {
  const facts = [
    {
      icon: '📈',
      title: '国内EC利用者の約7割がAmazonを利用',
      description: 'もはや無視できない、巨大な販売チャネル'
    },
    {
      icon: '🛒',
      title: '購買意欲の高いユーザーが集まる',
      description: '「買う前提」で訪れるから、成約率が高い'
    },
    {
      icon: '🚀',
      title: '中小企業でも大手と対等に戦える',
      description: '商品力があれば、企業規模は関係ない'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-overlay">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="corp-heading-2 mb-4">
            なぜ今、Amazonなのか？
          </h2>
          <p className="corp-text-lead">
            日本のEC市場で、見逃せない3つの事実
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {facts.map((fact, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-4">{fact.icon}</div>
              <h3 className="corp-heading-3 mb-3">
                {fact.title}
              </h3>
              <p className="corp-text-body">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 text-black rounded-2xl p-8 text-center border border-blue-200">
          <p className="corp-text-lead text-black mb-4">
            でも、自社で運営するには専門知識が必要...
          </p>
          <p className="corp-heading-3 text-black">
            だから、私たちがすべて代行します。
          </p>
        </div>
      </div>
    </section>
  )
})

export default WhyAmazon
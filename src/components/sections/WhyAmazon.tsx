'use client'

import { memo } from 'react'
import { STYLES } from '@/lib/constants'

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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            なぜ今、Amazonなのか？
          </h2>
          <p className={STYLES.text.body.large}>
            日本のEC市場で、見逃せない3つの事実
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {facts.map((fact, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl mb-4">{fact.icon}</div>
              <h3 className={STYLES.heading.h3.emphasis + " mb-3"}>
                {fact.title}
              </h3>
              <p className={STYLES.text.description.medium}>
                {fact.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
          <p className={STYLES.text.body.large + " text-white mb-4"}>
            でも、自社で運営するには専門知識が必要...
          </p>
          <p className={STYLES.text.emphasis.strong + " text-2xl text-white"}>
            だから、私たちがすべて代行します。
          </p>
        </div>
      </div>
    </section>
  )
})

export default WhyAmazon
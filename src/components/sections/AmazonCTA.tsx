'use client'

import { memo } from 'react'
import Link from 'next/link'
import { STYLES } from '@/lib/constants'

const AmazonCTA = memo(function AmazonCTA() {
  const reasons = [
    {
      title: 'ライバルはすでに始めている',
      description: 'Amazon市場は早い者勝ち。レビューの蓄積が競争力になります。'
    },
    {
      title: '機会損失は毎日発生している',
      description: 'Amazonで検索されているのに、あなたの商品が表示されていない。'
    },
    {
      title: 'リスクゼロで試せるのは今だけ',
      description: '完全成果報酬制は、限定的なサービスです。'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            今すぐ始めるべき3つの理由
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-4">
                {index + 1}
              </div>
              <h3 className={STYLES.heading.h3.emphasis + " mb-3"}>
                {reason.title}
              </h3>
              <p className={STYLES.text.description.medium}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h3 className={STYLES.heading.h2.subsection + " text-white mb-4"}>
            次のアクション
          </h3>
          <p className={STYLES.text.body.large + " text-white mb-6"}>
            まずは無料診断で、売上ポテンシャルを確認
          </p>
          <p className={STYLES.text.body.medium + " text-gray-300 mb-8"}>
            あなたの商品が、Amazonでどれだけ売れるか。<br />
            具体的な数値でお示しします。
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="https://lin.ee/awakeinc"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINEで相談する
            </Link>
            
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              30秒で申し込み完了
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  )
})

export default AmazonCTA
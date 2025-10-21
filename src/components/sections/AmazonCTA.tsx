'use client'

import { memo } from 'react'
import Link from 'next/link'
import '@/app/corporate.css'
import LineButton from '@/components/ui/LineButton'

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
          <h2 className="corp-heading-2 mb-4">
            今すぐ始めるべき3つの理由
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-black mb-4">
                {index + 1}
              </div>
              <h3 className="corp-heading-3 mb-3">
                {reason.title}
              </h3>
              <p className="corp-text-body">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 text-black rounded-2xl p-12 text-center border border-blue-200">
          <h3 className="corp-heading-2 text-black mb-4">
            次のアクション
          </h3>
          <p className="corp-text-lead text-black mb-6">
            まずは無料診断で、売上ポテンシャルを確認
          </p>
          <p className="corp-text-body text-black mb-8 break-words">
            <span className="inline-block">あなたの商品が、Amazonでどれだけ売れるか。</span>
            <span className="inline-block">具体的な数値でお示しします。</span>
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <LineButton />
            
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-overlay transition-colors"
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
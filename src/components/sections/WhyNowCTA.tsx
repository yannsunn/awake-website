'use client'

import { memo } from 'react'
import Link from 'next/link'
import { STYLES } from '@/lib/constants'

const WhyNowCTA = memo(function WhyNowCTA() {
  const reasons = [
    {
      title: '競合他社はすでに動いている',
      description: 'AI活用の差が、ビジネスの差になる時代。早期導入が競争優位性を生みます。'
    },
    {
      title: '人材不足は今後も続く',
      description: '採用コストより、既存業務の効率化。それが最も確実な解決策です。'
    },
    {
      title: '投資対効果が明確',
      description: '削減できる時間×人件費で、投資回収期間を事前に試算できます。'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            今すぐ始める3つの理由
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
            次のステップ
          </h3>
          <p className={STYLES.text.body.large + " text-white mb-6"}>
            まずは無料診断で、あなたの会社の「AI活用可能性」を見える化
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>現在の業務分析</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>AI導入効果の試算</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>最適な導入プランのご提案</span>
            </div>
          </div>
          
          <p className={STYLES.text.body.medium + " text-gray-300 mb-8"}>
            診断後の押し売りは一切ありません
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
              今すぐ無料診断を申し込む
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  )
})

export default WhyNowCTA
'use client'

import { memo } from 'react'
import Link from 'next/link'
import StandardSection from '@/components/layout/StandardSection'
import UnifiedCard from '@/components/ui/UnifiedCard'
import LineButton from '@/components/ui/LineButton'
import { GRID, HEADING, TEXT, FLEX, cn, MARGIN, button } from '@/lib/design-system/unified'

const AmazonCTA = memo(function AmazonCTA() {
  const reasons = [
    {
      emoji: '⚡',
      title: 'ライバルはすでに始めている',
      description: 'Amazon市場は早い者勝ち。レビューの蓄積が競争力になります。'
    },
    {
      emoji: '📈',
      title: '機会損失は毎日発生している',
      description: 'Amazonで検索されているのに、あなたの商品が表示されていない。'
    },
    {
      emoji: '🎯',
      title: 'リスクゼロで試せるのは今だけ',
      description: '完全成果報酬制は、限定的なサービスです。'
    }
  ]

  return (
    <StandardSection
      spacing="default"
      container="default"
      background="white"
      title="今すぐ始めるべき3つの理由"
    >
      <div className={cn(GRID.three, MARGIN['3xl'])}>
        {reasons.map((reason, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-4">{reason.emoji}</div>
            <div className={cn("text-3xl font-bold text-blue-600", MARGIN.sm)}>
              {index + 1}
            </div>
            <h3 className={cn(HEADING.h3, 'text-gray-900', MARGIN.sm)}>
              {reason.title}
            </h3>
            <p className={cn(TEXT.body, 'text-gray-700')}>
              {reason.description}
            </p>
          </div>
        ))}
      </div>

      <div className="relative p-[3px] bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-2xl shadow-xl">
        <div className="bg-blue-50 rounded-2xl p-12 text-center">
          <h3 className={cn(HEADING.h2, 'text-gray-900', MARGIN.sm)}>
            次のアクション
          </h3>
          <p className={cn(TEXT.lead, 'text-gray-900', MARGIN.md)}>
            まずは無料診断で、売上ポテンシャルを確認
          </p>
          <p className={cn(TEXT.body, 'text-gray-700', MARGIN.lg)}>
            あなたの商品が、Amazonでどれだけ売れるか。具体的な数値でお示しします。
          </p>

          <div className={FLEX.centerRow}>
            <LineButton />
            <Link
              href="/#contact"
              className={button({ variant: 'secondary', size: 'lg' })}
            >
              30秒で申し込み完了
            </Link>
          </div>
        </div>
      </div>
    </StandardSection>
  )
})

export default AmazonCTA

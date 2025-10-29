'use client'

import { memo } from 'react'
import Link from 'next/link'
import StandardSection from '@/components/layout/StandardSection'
import LineButton from '@/components/ui/LineButton'
import { GRID, HEADING, TEXT, FLEX, cn, MARGIN, button } from '@/lib/design-system/unified'

const WhyNowCTA = memo(function WhyNowCTA() {
  const reasons = [
    { emoji: '🏃', title: '競合他社はすでに動いている', description: 'AI活用の差が、ビジネスの差になる時代。早期導入が競争優位性を生みます。' },
    { emoji: '👥', title: '人材不足は今後も続く', description: '採用コストより、既存業務の効率化。それが最も確実な解決策です。' },
    { emoji: '💰', title: '投資対効果が明確', description: '削減できる時間×人件費で、投資回収期間を事前に試算できます。' }
  ]

  const benefits = ['現在の業務分析', 'AI導入効果の試算', '最適な導入プランのご提案']

  return (
    <StandardSection
      spacing="default"
      container="default"
      background="white"
      title="今すぐ始める3つの理由"
    >
      <div className={cn(GRID.three, MARGIN['2xl'])}>
        {reasons.map((reason, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl mb-4">{reason.emoji}</div>
            <div className={cn("text-3xl font-bold text-blue-600", MARGIN.sm)}>{index + 1}</div>
            <h3 className={cn(HEADING.h3, 'text-gray-900', MARGIN.sm)}>{reason.title}</h3>
            <p className={cn(TEXT.body, 'text-gray-700')}>{reason.description}</p>
          </div>
        ))}
      </div>

      <div className="relative border-2 border-blue-600 rounded-2xl shadow-xl">
        <div className="bg-white rounded-2xl p-12 text-center">
          <h3 className={cn(HEADING.h2, 'text-gray-900', MARGIN.sm)}>次のステップ</h3>
          <p className={cn(TEXT.lead, 'text-gray-900', MARGIN.md)}>まずは無料診断で、あなたの会社の「AI活用可能性」を見える化</p>

          <div className={cn(FLEX.centerRow, MARGIN.lg)}>
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className={TEXT.body}>{benefit}</span>
              </div>
            ))}
          </div>

          <p className={cn(TEXT.body, 'text-gray-700', MARGIN.lg)}>診断後の押し売りは一切ありません</p>

          <div className={FLEX.centerRow}>
            <LineButton />
            <Link href="/#contact" className={button({ variant: 'secondary', size: 'lg' })}>
              今すぐ無料診断を申し込む
            </Link>
          </div>
        </div>
      </div>
    </StandardSection>
  )
})

export default WhyNowCTA

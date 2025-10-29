'use client'

import { memo } from 'react'
import StandardSection from '@/components/layout/StandardSection'
import { GRID, HEADING, TEXT, cn, MARGIN, card, CARD_PADDING } from '@/lib/design-system/unified'
import { TrendingUp, ShoppingBag, Rocket } from 'lucide-react'

const WhyAmazon = memo(function WhyAmazon() {
  const facts = [
    {
      icon: TrendingUp,
      gradient: 'from-blue-500 to-cyan-500',
      title: '国内EC利用者の約7割がAmazonを利用',
      description: 'もはや無視できない、巨大な販売チャネル'
    },
    {
      icon: ShoppingBag,
      gradient: 'from-orange-500 to-amber-500',
      title: '購買意欲の高いユーザーが集まる',
      description: '「買う前提」で訪れるから、成約率が高い'
    },
    {
      icon: Rocket,
      gradient: 'from-blue-500 to-blue-700',
      title: '中小企業でも大手と対等に戦える',
      description: '商品力があれば、企業規模は関係ない'
    }
  ]

  return (
    <StandardSection
      spacing="default"
      container="default"
      background="gray"
      title="なぜ今、Amazonなのか？"
      subtitle="日本のEC市場で、見逃せない3つの事実"
    >
      <div className={cn(GRID.three, MARGIN['2xl'])}>
        {facts.map((fact, index) => (
          <div
            key={index}
            className={cn(
              card({ variant: 'elevated' }),
              CARD_PADDING.lg,
              'hover:-translate-y-2'
            )}
          >
            <div className={cn(
              MARGIN.md,
              'flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br',
              fact.gradient
            )}>
              <fact.icon className="h-10 w-10 text-white" />
            </div>
            <h3 className={cn(HEADING.h3, 'text-gray-900', MARGIN.sm)}>
              {fact.title}
            </h3>
            <p className={cn(TEXT.body, 'text-gray-700')}>
              {fact.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-2xl p-8 text-center border border-blue-200">
        <p className={cn(TEXT.lead, 'text-gray-900', MARGIN.sm)}>
          でも、自社で運営するには専門知識が必要...
        </p>
        <p className={cn(HEADING.h3, 'text-gray-900')}>
          だから、私たちがすべて代行します。
        </p>
      </div>
    </StandardSection>
  )
})

export default WhyAmazon

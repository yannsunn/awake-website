'use client'

import { memo } from 'react'
import StandardSection from '@/components/layout/StandardSection'
import { GRID, HEADING, TEXT, cn, MARGIN, card, CARD_PADDING } from '@/lib/design-system/unified'
import { BarChart3, Factory, Mail, Users } from 'lucide-react'

const UseCases = memo(function UseCases() {
  const industries = [
    {
      icon: BarChart3,
      gradient: 'from-blue-500 to-cyan-500',
      title: '経理・総務部門',
      items: ['請求書の自動処理', '勤怠データの集計', '各種申請の自動チェック']
    },
    {
      icon: Factory,
      gradient: 'from-blue-500 to-blue-700',
      title: '製造・品質管理',
      items: ['検品作業の自動化', '生産データの分析', '異常検知と予防保全']
    },
    {
      icon: Mail,
      gradient: 'from-green-500 to-emerald-500',
      title: '営業・マーケティング',
      items: ['顧客データの分析', '提案書の自動生成', '問い合わせ対応の効率化']
    },
    {
      icon: Users,
      gradient: 'from-orange-500 to-amber-500',
      title: '人事・採用',
      items: ['応募書類のスクリーニング', '面接日程の自動調整', '社内FAQの自動応答']
    }
  ]

  return (
    <StandardSection
      spacing="default"
      container="default"
      background="transparent"
      title="具体的な活用シーン"
      subtitle="あなたの業界でも、こんな成果が期待できます"
      className="bg-gradient-to-b from-gray-50 to-white"
    >
      <div className={GRID.four}>
        {industries.map((industry, index) => (
          <div
            key={index}
            className={cn(
              card({ variant: 'elevated' }),
              CARD_PADDING.md,
              'hover:-translate-y-2'
            )}
          >
            <div className={cn(
              MARGIN.md,
              'flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br',
              industry.gradient
            )}>
              <industry.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className={cn(HEADING.h3, 'text-gray-900', MARGIN.sm)}>
              {industry.title}
            </h3>
            <ul className="space-y-2">
              {industry.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <span className={cn(TEXT.small, 'text-gray-700')}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </StandardSection>
  )
})

export default UseCases

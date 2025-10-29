'use client'

import { memo } from 'react'
import { X, CheckCircle } from 'lucide-react'
import StandardSection from '@/components/layout/StandardSection'
import { GRID, HEADING, TEXT, cn, MARGIN } from '@/lib/design-system/unified'

const RiskFree = memo(function RiskFree() {
  const costs = [
    { label: '初期費用 → 0円' },
    { label: '月額固定費 → 0円' },
    { label: '広告費の立替 → 0円' },
  ]

  return (
    <StandardSection
      spacing="default"
      container="narrow"
      background="transparent"
      title="完全成果報酬だから、安心して始められる"
      subtitle="リスクゼロで、新しい売上を作る仕組み"
      className="bg-gradient-to-br from-green-50 via-white to-emerald-50"
    >
      <div className="relative p-[3px] bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl shadow-xl">
        <div className="bg-white rounded-2xl p-12">
          <div className={cn(GRID.two, MARGIN.lg)}>
            <div className="space-y-6">
              {costs.map((cost, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                    <X className="h-7 w-7 text-red-600" />
                  </div>
                  <span className={cn(TEXT.body, 'font-medium text-gray-900')}>
                    {cost.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className={cn("mb-4 flex h-24 w-24 mx-auto items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg")}>
                  <CheckCircle className="h-14 w-14 text-white" />
                </div>
                <span className={cn(HEADING.h3, 'text-gray-900')}>
                  お支払い → 売れた分だけ
                </span>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-200">
            <p className={cn(TEXT.lead, 'text-gray-900')}>
              失敗のリスクがないから、挑戦できる。それが、完全成果報酬制の最大のメリットです。
            </p>
          </div>
        </div>
      </div>
    </StandardSection>
  )
})

export default RiskFree

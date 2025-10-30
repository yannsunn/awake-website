'use client'

import { memo } from 'react'
import StandardSection from '@/components/layout/StandardSection'
import { cn, HEADING, TEXT, MARGIN } from '@/lib/design-system/unified'

const ProblemSection = memo(function ProblemSection() {
  const problems = [
    '同じ作業の繰り返しで、社員の時間が奪われている',
    'データ入力やチェック作業に、貴重な人材を使っている',
    '情報の整理・分析に時間がかかり、判断が遅れる',
    '人手不足で、本来やるべき仕事に手が回らない'
  ]

  return (
    <StandardSection
      spacing="default"
      container="narrow"
      background="transparent"
      className="bg-gradient-to-br from-sky-50 to-blue-50"
    >
      <div className={cn('text-center', MARGIN.xl)}>
        <h2 className={cn(HEADING.h2, 'text-gray-900', MARGIN.sm)}>
          こんな課題を抱えていませんか？
        </h2>
        <p className={cn(TEXT.lead, 'text-gray-900 font-bold')}>
          毎日の業務に、こんな「もったいない」が潜んでいる
        </p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200">
        <ul className="space-y-4">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 text-xl mr-3 flex-shrink-0">✓</span>
              <span className={cn(TEXT.body, 'text-gray-900')}>{problem}</span>
            </li>
          ))}
        </ul>

        <div className="relative mt-8 border-2 border-blue-600 rounded-xl">
          <div className="p-6 bg-blue-50 rounded-xl text-center">
            <p className={cn(TEXT.lead, 'font-semibold text-blue-900')}>
              これらすべて、AIが解決します。
            </p>
          </div>
        </div>
      </div>
    </StandardSection>
  )
})

export default ProblemSection
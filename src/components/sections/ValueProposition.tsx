'use client'

import { memo } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SECTION_SPACING, CONTAINER, HEADING, TEXT, MARGIN } from '@/lib/design-system/unified'

const ValueProposition = memo(function ValueProposition() {
  const reasons = [
    {
      icon: '🎯',
      title: '明確な価格設定',
      description: '追加費用なし。最初にお伝えした金額以上は一切いただきません。',
      image: '/images/about-2.png'
    },
    {
      icon: '💡',
      title: 'リスクを最小化',
      description: '成果報酬プランもご用意。結果が出てから支払う安心設計。',
      image: '/images/feature-5.png'
    },
    {
      icon: '🤝',
      title: '継続的な伴走支援',
      description: '導入して終わりではなく、成長に合わせて最適化を続けます。',
      image: '/images/about-10.png'
    }
  ]

  return (
    <section className={cn(SECTION_SPACING.large, 'relative bg-white')}>
      {/* 見出しセクション */}
      <div className={CONTAINER.default.full}>
        <div className={cn('text-center', MARGIN['2xl'])}>
          <h2 className={cn(HEADING.h2, 'text-gray-900', MARGIN.md)}>
            私たちが選ばれる理由
          </h2>
          <p className={cn(TEXT.lead, 'text-gray-700')}>
            投資を「コスト」から「成長エンジン」に変える
          </p>
        </div>

        {/* コンテンツグリッド */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all border border-gray-200">
                {/* 画像 */}
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={cn('text-5xl', MARGIN.md)}>{reason.icon}</div>
                <h3 className={cn(HEADING.h4, 'text-gray-900', MARGIN.sm)}>
                  {reason.title}
                </h3>
                <p className={cn(TEXT.body, 'text-gray-600 leading-relaxed')}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default ValueProposition
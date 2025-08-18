'use client'

import { memo } from 'react'
import { TEXT_SHADOW } from '@/lib/ultra-styles'

const ValueProposition = memo(function ValueProposition() {
  const reasons = [
    {
      icon: '🎯',
      title: '明確な価格設定',
      description: '追加費用なし。最初にお伝えした金額以上は一切いただきません。'
    },
    {
      icon: '💡',
      title: 'リスクを最小化',
      description: '成果報酬プランもご用意。結果が出てから支払う安心設計。'
    },
    {
      icon: '🤝',
      title: '継続的な伴走支援',
      description: '導入して終わりではなく、成長に合わせて最適化を続けます。'
    }
  ]

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-sm" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 jp-wrap no-orphan">
            <span className="inline-block">なぜ、</span>
            <span className="inline-block">私たちが選ばれるのか</span>
          </h2>
          <p className="text-xl text-gray-200 font-semibold jp-wrap no-orphan">
            <span className="inline-block">投資を「コスト」から</span>
            <span className="inline-block">「成長エンジン」に変える</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-700">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 jp-wrap no-orphan" style={TEXT_SHADOW.heading}>
                {reason.title}
              </h3>
              <p className="text-white leading-relaxed font-medium jp-wrap no-orphan" style={TEXT_SHADOW.body}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default ValueProposition
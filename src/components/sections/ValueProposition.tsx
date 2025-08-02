'use client'

import { memo } from 'react'

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
          <h2 className="text-3xl font-bold text-white mb-4">
            なぜ、私たちが選ばれるのか
          </h2>
          <p className="text-xl text-gray-200 font-semibold">
            投資を「コスト」から「成長エンジン」に変える
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-700/90 backdrop-blur-md rounded-lg p-8 shadow-sm border border-gray-600">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-200 leading-relaxed font-medium">
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
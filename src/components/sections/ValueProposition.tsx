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
    <section className="relative bg-white">
      {/* 見出しセクション */}
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            私たちが選ばれる理由
          </h2>
          <p className="text-xl md:text-2xl text-gray-700">
            投資を「コスト」から「成長エンジン」に変える
          </p>
        </div>

        {/* コンテンツグリッド */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all border border-gray-200">
                <div className="text-5xl mb-6">{reason.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
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
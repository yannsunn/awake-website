'use client'

import { memo } from 'react'
import '@/app/corporate.css'

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
    <section className="py-16 md:py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("/images/digital-particles.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="corp-heading-2 mb-4">
            私たちが選ばれる理由
          </h2>
          <p className="corp-text-lead">
            投資を「コスト」から「成長エンジン」に変える
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="corp-card">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="corp-heading-3 mb-3">
                {reason.title}
              </h3>
              <p className="corp-text-body">
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
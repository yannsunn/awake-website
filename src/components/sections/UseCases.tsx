'use client'

import { memo } from 'react'
import { BarChart3, Factory, Mail, Users } from 'lucide-react'
import '@/app/corporate.css'

const UseCases = memo(function UseCases() {
  const industries = [
    {
      icon: BarChart3,
      gradient: 'from-blue-500 to-cyan-500',
      title: '経理・総務部門',
      items: [
        '請求書の自動処理',
        '勤怠データの集計',
        '各種申請の自動チェック'
      ]
    },
    {
      icon: Factory,
      gradient: 'from-purple-500 to-pink-500',
      title: '製造・品質管理',
      items: [
        '検品作業の自動化',
        '生産データの分析',
        '異常検知と予防保全'
      ]
    },
    {
      icon: Mail,
      gradient: 'from-green-500 to-emerald-500',
      title: '営業・マーケティング',
      items: [
        '顧客データの分析',
        '提案書の自動生成',
        '問い合わせ対応の効率化'
      ]
    },
    {
      icon: Users,
      gradient: 'from-orange-500 to-amber-500',
      title: '人事・採用',
      items: [
        '応募書類のスクリーニング',
        '面接日程の自動調整',
        '社内FAQの自動応答'
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="corp-heading-2 mb-4">
            具体的な活用シーン
          </h2>
          <p className="corp-text-lead">
            あなたの業界でも、こんな成果が期待できます
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br ${industry.gradient}`}>
                <industry.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="corp-heading-3 mb-4 text-black">
                {industry.title}
              </h3>
              <ul className="space-y-2">
                {industry.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="corp-text-small text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default UseCases
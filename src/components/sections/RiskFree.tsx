'use client'

import { memo } from 'react'
import '@/app/corporate.css'

const RiskFree = memo(function RiskFree() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="corp-heading-2 mb-4">
            完全成果報酬だから、安心して始められる
          </h2>
          <p className="corp-text-lead">
            リスクゼロで、新しい売上を作る仕組み
          </p>
        </div>
        
        <div className="bg-gray-overlay rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-red-500 text-2xl mr-3">❌</span>
                <span className="corp-text-body">初期費用 → 0円</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 text-2xl mr-3">❌</span>
                <span className="corp-text-body">月額固定費 → 0円</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 text-2xl mr-3">❌</span>
                <span className="corp-text-body">広告費の立替 → 0円</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <span className="text-green-500 text-4xl mb-3 block">⭕</span>
                <span className="corp-heading-3">
                  お支払い → 売れた分だけ
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="corp-text-lead">
              失敗のリスクがないから、挑戦できる。それが、完全成果報酬制の最大のメリットです。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})

export default RiskFree
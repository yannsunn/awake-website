'use client'

import { memo } from 'react'
import { X, CheckCircle } from 'lucide-react'
import '@/app/corporate.css'

const RiskFree = memo(function RiskFree() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="corp-heading-2 mb-4">
            完全成果報酬だから、安心して始められる
          </h2>
          <p className="corp-text-lead">
            リスクゼロで、新しい売上を作る仕組み
          </p>
        </div>
        
        <div className="relative p-[3px] bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl shadow-xl">
          <div className="bg-white rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                    <X className="h-7 w-7 text-red-600" />
                  </div>
                  <span className="corp-text-body font-medium">初期費用 → 0円</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                    <X className="h-7 w-7 text-red-600" />
                  </div>
                  <span className="corp-text-body font-medium">月額固定費 → 0円</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                    <X className="h-7 w-7 text-red-600" />
                  </div>
                  <span className="corp-text-body font-medium">広告費の立替 → 0円</span>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 flex h-24 w-24 mx-auto items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
                    <CheckCircle className="h-14 w-14 text-white" />
                  </div>
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
      </div>
    </section>
  )
})

export default RiskFree
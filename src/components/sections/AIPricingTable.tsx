'use client'

import { memo } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import { cn } from '@/lib/utils'
import '@/app/corporate.css'
import UltraSection from '@/components/ui/UltraSection'

const AIPricingTable = memo(function AIPricingTable() {
  const aiPricing = COMPANY_DATA.services.details.ai.pricing

  return (
    <UltraSection variant="dark">
      <div className="text-center mb-12">
        <h2 className="corp-heading-2 text-black mb-4">
          料金プラン
        </h2>
        <p className="corp-text-lead text-black">
          具体的な導入イメージと投資効果を無料で試算できます
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <div className="corp-card">
          <div className="p-8">
            <h3 className="corp-heading-3 text-black mb-2">
              {aiPricing.basic.name}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-black">
                {aiPricing.basic.price}
              </span>
              <span className="corp-text-body text-black ml-2">
                / {aiPricing.basic.duration}
              </span>
            </div>

            <div className="mb-8">
              <ul className="space-y-3">
                {aiPricing.basic.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="corp-text-small text-black">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/#contact"
              className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              無料相談を予約する
            </Link>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="corp-card">
          <div className="p-8">
            <h3 className="corp-heading-3 text-black mb-2">
              {aiPricing.enterprise.name}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-black">
                {aiPricing.enterprise.price}
              </span>
              <span className="corp-text-body text-black ml-2">
                / {aiPricing.enterprise.duration}
              </span>
            </div>

            <div className="mb-8">
              <ul className="space-y-3">
                {aiPricing.enterprise.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="corp-text-small text-black">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/#contact"
              className="block w-full text-center px-6 py-3 bg-blue-600 border border-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:border-blue-700 transition-all"
            >
              詳細を問い合わせる
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="corp-text-small text-black">
          ※ 料金はすべて税込価格です
        </p>
      </div>
    </UltraSection>
  )
})

export default AIPricingTable
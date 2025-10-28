'use client'

import { memo } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import { cn } from '@/lib/utils'
import { HEADING, TEXT, MARGIN } from '@/lib/design-system/unified'
import '@/app/corporate.css'
import UltraSection from '@/components/ui/UltraSection'

const AIPricingTable = memo(function AIPricingTable() {
  const aiPricing = COMPANY_DATA.services.details.ai.pricing

  return (
    <UltraSection variant="dark">
      <div className={cn('text-center', MARGIN.xl)}>
        <h2 className={cn(HEADING.h2, 'text-black', MARGIN.sm)}>
          料金プラン
        </h2>
        <p className={cn(TEXT.lead, 'text-black')}>
          具体的な導入イメージと投資効果を無料で試算できます
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-7xl mx-auto">
        {/* Basic Plan */}
        <div className="corp-card">
          <div className="p-6 sm:p-7 md:p-8">
            <h3 className={cn(HEADING.h4, 'text-black', MARGIN.xs)}>
              {aiPricing.basic.name}
            </h3>
            <div className={MARGIN.md}>
              <span className="text-3xl sm:text-4xl font-bold text-black">
                {aiPricing.basic.price}
              </span>
              <span className={cn(TEXT.body, 'text-black ml-2')}>
                / {aiPricing.basic.duration}
              </span>
            </div>

            <div className="mb-8">
              <ul className="space-y-3">
                {aiPricing.basic.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className={cn(TEXT.small, 'text-black')}>
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

        {/* AI Common Plan */}
        <div className="relative p-[3px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl sm:col-span-2 md:col-span-1">
          <div className="corp-card border-2 border-blue-200 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                おすすめ - 月額制
              </span>
            </div>
          <div className="p-6 sm:p-7 md:p-8">
            <h3 className={cn(HEADING.h4, 'text-black', MARGIN.xs)}>
              {aiPricing.aiCommon.name}
            </h3>
            <div className={MARGIN.md}>
              <span className="text-3xl sm:text-4xl font-bold text-black">
                {aiPricing.aiCommon.price}
              </span>
              <span className={cn(TEXT.body, 'text-black ml-2')}>
                / {aiPricing.aiCommon.duration}
              </span>
            </div>

            <div className="mb-8">
              <ul className="space-y-3">
                {aiPricing.aiCommon.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className={cn(TEXT.small, 'text-black')}>
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
              プラン詳細を見る
            </Link>
          </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="corp-card">
          <div className="p-6 sm:p-7 md:p-8">
            <h3 className={cn(HEADING.h4, 'text-black', MARGIN.xs)}>
              {aiPricing.enterprise.name}
            </h3>
            <div className={MARGIN.md}>
              <span className="text-3xl sm:text-4xl font-bold text-black">
                {aiPricing.enterprise.price}
              </span>
              <span className={cn(TEXT.body, 'text-black ml-2')}>
                / {aiPricing.enterprise.duration}
              </span>
            </div>

            <div className="mb-8">
              <ul className="space-y-3">
                {aiPricing.enterprise.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className={cn(TEXT.small, 'text-black')}>
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

      {/* AI顧問 会社規模別価格表 */}
      <div className="mt-16 max-w-5xl mx-auto">
        <div className={cn('text-center', MARGIN.lg)}>
          <h3 className={cn(HEADING.h3, 'text-black', MARGIN.sm)}>
            AI顧問 会社規模別料金
          </h3>
          <p className={cn(TEXT.body, 'text-black')}>
            従業員数に応じた最適なプランをご提案
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {aiPricing.aiCommon.tiers.map((tier, index) => (
            <div key={index} className="corp-card hover:shadow-xl transition-all">
              <div className="p-5 sm:p-6">
                <div className="text-center mb-3 sm:mb-4">
                  <h4 className="text-lg sm:text-xl font-bold text-blue-700 mb-2">{tier.size}</h4>
                  <p className="text-sm text-gray-600">{tier.employees}</p>
                </div>
                <div className="text-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-black">{tier.price}</span>
                </div>
                <ul className="space-y-2">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-black">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className={cn(TEXT.small, 'text-black')}>
          ※ 料金はすべて税込価格です
        </p>
      </div>
    </UltraSection>
  )
})

export default AIPricingTable
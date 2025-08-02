'use client'

import { memo } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import { STYLES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { TEXT_SHADOW, CARD_STYLES } from '@/lib/ultra-styles'
import UltraSection from '@/components/ui/UltraSection'

const AIPricingTable = memo(function AIPricingTable() {
  const aiPricing = COMPANY_DATA.services.details.ai.pricing

  return (
    <UltraSection variant="dark">
      <div className="text-center mb-12">
        <h2 className={cn(STYLES.heading.h2.section, "text-white mb-4")} style={TEXT_SHADOW.heading}>
          料金プラン
        </h2>
        <p className={STYLES.text.body.large + " text-white bg-gray-800/90 rounded-lg px-6 py-3 inline-block shadow-xl"} style={TEXT_SHADOW.body}>
          具体的な導入イメージと投資効果を無料で試算できます
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <div className={CARD_STYLES.premium}>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-2" style={TEXT_SHADOW.heading}>
              {aiPricing.basic.name}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white" style={TEXT_SHADOW.heading}>
                {aiPricing.basic.price}
              </span>
              <span className="text-gray-200 ml-2" style={TEXT_SHADOW.body}>
                / {aiPricing.basic.duration}
              </span>
            </div>
            
            <div className="mb-8">
              <p className="text-gray-200 mb-4" style={TEXT_SHADOW.body}>
                中小企業・スタートアップ向けの導入プラン
              </p>
              <ul className="space-y-3">
                {aiPricing.basic.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white text-sm" style={TEXT_SHADOW.small}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/#contact"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-xl"
              style={TEXT_SHADOW.small}
            >
              無料相談を予約する
            </Link>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className={CARD_STYLES.premium}>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-2" style={TEXT_SHADOW.heading}>
              {aiPricing.enterprise.name}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white" style={TEXT_SHADOW.heading}>
                {aiPricing.enterprise.price}
              </span>
              <span className="text-gray-200 ml-2" style={TEXT_SHADOW.body}>
                / {aiPricing.enterprise.duration}
              </span>
            </div>
            
            <div className="mb-8">
              <p className="text-gray-200 mb-4" style={TEXT_SHADOW.body}>
                大企業・組織全体のDX推進向けプラン
              </p>
              <ul className="space-y-3">
                {aiPricing.enterprise.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white text-sm" style={TEXT_SHADOW.small}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/#contact"
              className="block w-full text-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-all"
              style={TEXT_SHADOW.small}
            >
              詳細を問い合わせる
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-200 mb-4" style={TEXT_SHADOW.body}>
          <strong className="text-white">※ 料金はすべて税込価格です</strong>
        </p>
        <p className="text-gray-200 max-w-2xl mx-auto" style={TEXT_SHADOW.small}>
          お客様の業務内容・規模に応じて最適なプランをご提案します。<br />
          まずは無料診断で、具体的な導入効果と投資回収期間をご確認ください。
        </p>
      </div>
    </UltraSection>
  )
})

export default AIPricingTable
'use client'

import { memo } from 'react'
import StandardSection from '@/components/layout/StandardSection'
import { GRID, HEADING, TEXT, cn, MARGIN, card, CARD_PADDING } from '@/lib/design-system/unified'
import { FileText, Megaphone, BarChart3, MessageCircle } from 'lucide-react'

const AmazonSupport = memo(function AmazonSupport() {
  const supports = [
    {
      icon: FileText,
      gradient: 'from-blue-500 to-cyan-500',
      title: '商品登録・ページ作成',
      items: ['プロのライターによる商品説明文', '購買意欲を高める画像構成', 'SEO対策済みのキーワード設定', 'A/Bテストによる継続改善']
    },
    {
      icon: Megaphone,
      gradient: 'from-orange-500 to-amber-500',
      title: '広告運用・集客施策',
      items: ['スポンサープロダクト広告の最適化', 'スポンサーブランド広告の活用', '費用対効果の高いキャンペーン設計', 'オーガニック流入の強化']
    },
    {
      icon: BarChart3,
      gradient: 'from-blue-500 to-blue-700',
      title: '売上分析・改善提案',
      items: ['週次・月次の詳細レポート', '競合動向の分析', '価格戦略の見直し', '新商品展開のご提案']
    },
    {
      icon: MessageCircle,
      gradient: 'from-green-500 to-emerald-500',
      title: 'カスタマー対応',
      items: ['問い合わせへの迅速な対応', 'ネガティブレビューの適切な処理', 'リピート促進施策', 'ブランドイメージの維持向上']
    }
  ]

  return (
    <StandardSection
      spacing="default"
      container="default"
      background="gray"
      title="具体的なサポート内容"
      subtitle="すべてお任せください。売ることに集中します。"
    >
      <div className={GRID.four}>
        {supports.map((support, index) => (
          <div
            key={index}
            className={cn(
              card({ variant: 'elevated' }),
              CARD_PADDING.md,
              'hover:-translate-y-2'
            )}
          >
            <div className={cn(
              MARGIN.md,
              'flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br',
              support.gradient
            )}>
              <support.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className={cn(HEADING.h3, 'text-gray-900', MARGIN.sm)}>
              {support.title}
            </h3>
            <ul className="space-y-2">
              {support.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span className={cn(TEXT.small, 'text-gray-700')}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </StandardSection>
  )
})

export default AmazonSupport

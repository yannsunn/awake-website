'use client'

/**
 * UnifiedCard - 統一カードコンポーネント（unified.ts準拠）
 *
 * すべてのカードをこのコンポーネントで統一し、
 * CARD_VARIANT、CARD_PADDINGを使用してスタイルを管理
 */

import { memo, ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import {
  cn,
  card,
  CARD_PADDING,
  HEADING,
  TEXT,
  MARGIN
} from '@/lib/design-system/unified'

export interface UnifiedCardProps {
  /** アイコン（Lucideアイコンまたは絵文字） */
  icon?: LucideIcon | string

  /** カードタイトル */
  title: string

  /** 説明文 */
  description?: string

  /** 特徴リスト */
  features?: string[]

  /** 子要素 */
  children?: ReactNode

  /** カードバリアント */
  variant?: 'default' | 'elevated' | 'outline' | 'gradient' | 'flat'

  /** パディングサイズ */
  padding?: 'sm' | 'md' | 'lg'

  /** カスタムクラス名 */
  className?: string

  /** ホバー効果を無効化 */
  noHover?: boolean
}

const UnifiedCard = memo(function UnifiedCard({
  icon,
  title,
  description,
  features,
  children,
  variant = 'default',
  padding = 'md',
  className,
  noHover = false,
}: UnifiedCardProps) {
  return (
    <div
      className={cn(
        card({ variant }),
        CARD_PADDING[padding],
        !noHover && 'hover:-translate-y-1',
        className
      )}
    >
      {icon && (
        <div className={MARGIN.sm}>
          {typeof icon === 'string' ? (
            <div className="text-4xl">{icon}</div>
          ) : (
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              {(() => {
                const IconComponent = icon as LucideIcon
                return <IconComponent className="w-6 h-6 text-blue-600" />
              })()}
            </div>
          )}
        </div>
      )}

      <h3 className={cn(HEADING.h3, 'text-gray-900', MARGIN.sm)}>
        {title}
      </h3>

      {description && (
        <p className={cn(TEXT.body, 'text-gray-700', features ? MARGIN.sm : '')}>
          {description}
        </p>
      )}

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-green-600 mr-2 mt-1">✓</span>
              <span className={cn(TEXT.small, 'text-gray-700')}>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {children}
    </div>
  )
})

export default UnifiedCard

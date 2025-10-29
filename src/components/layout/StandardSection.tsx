/**
 * StandardSection - 統一セクションコンポーネント
 *
 * すべてのセクションをこのコンポーネントで統一することで、
 * レイアウトの一貫性を保証し、コード重複を削減します。
 */

import { ReactNode } from 'react'
import {
  cn,
  SECTION_SPACING,
  CONTAINER,
  MARGIN,
  HEADING,
  TEXT
} from '@/lib/design-system/unified'

export interface StandardSectionProps {
  /** セクション間のスペーシング */
  spacing?: 'default' | 'compact' | 'large' | 'minimal'

  /** コンテナ幅 */
  container?: 'default' | 'narrow' | 'wide' | 'extraWide'

  /** 背景色 */
  background?: 'white' | 'gray' | 'transparent'

  /** セクションタイトル（オプション） */
  title?: string

  /** サブタイトル（オプション） */
  subtitle?: string

  /** タイトル中央揃え */
  centerTitle?: boolean

  /** 子要素 */
  children: ReactNode

  /** カスタムクラス名 */
  className?: string

  /** セクションID（アンカーリンク用） */
  id?: string
}

/**
 * StandardSection コンポーネント
 *
 * @example
 * ```tsx
 * <StandardSection
 *   spacing="default"
 *   container="default"
 *   background="white"
 *   title="サービスの特徴"
 *   subtitle="お客様に選ばれる3つの理由"
 * >
 *   <div className={GRID.three}>
 *     {features.map(...)}
 *   </div>
 * </StandardSection>
 * ```
 */
export default function StandardSection({
  spacing = 'default',
  container = 'default',
  background = 'white',
  title,
  subtitle,
  centerTitle = true,
  children,
  className,
  id,
}: StandardSectionProps) {
  const bgClass =
    background === 'white' ? 'bg-white' :
    background === 'gray' ? 'bg-gray-50' :
    ''

  return (
    <section
      id={id}
      className={cn(
        SECTION_SPACING[spacing],
        bgClass,
        className
      )}
    >
      <div className={CONTAINER[container].full}>
        {(title || subtitle) && (
          <div className={cn(
            centerTitle && 'text-center',
            MARGIN['2xl']
          )}>
            {title && (
              <h2 className={cn(
                HEADING.h2,
                'text-gray-900',
                subtitle ? MARGIN.md : ''
              )}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn(TEXT.lead, 'text-gray-700')}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

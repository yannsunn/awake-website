'use client'

import { memo } from 'react'
import StandardSection from '@/components/layout/StandardSection'
import LineButton from '@/components/ui/LineButton'
import UltraButton from '@/components/ui/UltraButton'
import { motion } from 'framer-motion'
import { HEADING, TEXT, FLEX, cn, MARGIN } from '@/lib/design-system/unified'

export interface UnifiedCTAProps {
  title: string
  subtitle?: string
  description?: string
  theme?: 'light' | 'dark'
  showContactButton?: boolean
  className?: string
}

const UnifiedCTA = memo(function UnifiedCTA({
  title,
  subtitle,
  description,
  theme = 'light',
  showContactButton = true,
  className = ''
}: UnifiedCTAProps) {
  const bgClass = theme === 'dark' ? 'bg-gradient-to-br from-blue-50 to-violet-50' : 'bg-gradient-to-br from-white to-blue-50'

  return (
    <StandardSection
      spacing="default"
      container="default"
      background="transparent"
      className={cn(bgClass, className)}
    >
      <div className="relative border-2 border-blue-600 rounded-2xl shadow-xl">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className={cn(HEADING.h2, 'text-gray-900', MARGIN.sm)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {title}
            </motion.h2>

            {subtitle && (
              <motion.p
                className={cn(TEXT.lead, 'text-gray-900', MARGIN.sm)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}

            {description && (
              <motion.p
                className={cn(TEXT.body, 'text-gray-600', MARGIN.lg)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {description}
              </motion.p>
            )}

            <motion.div
              className={FLEX.centerRow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <LineButton size="medium" />
              {showContactButton && (
                <UltraButton href="/#contact" variant="primary">
                  無料相談を予約する
                </UltraButton>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </StandardSection>
  )
})

export default UnifiedCTA

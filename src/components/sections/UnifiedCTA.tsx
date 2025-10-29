'use client'

import { memo } from 'react'
import LineButton from '@/components/ui/LineButton'
import UltraButton from '@/components/ui/UltraButton'
import { motion } from 'framer-motion'

interface UnifiedCTAProps {
  title: string
  subtitle?: string
  description?: string
  theme?: 'light' | 'dark'
  showContactButton?: boolean
  className?: string
}

// 🚀 統一されたCTAセクション（白基調）
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
    <section className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl">
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
          <motion.h2
            className="corp-heading-2 text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              className="corp-text-lead text-black mb-4"
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
              className="corp-text-body text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {description}
            </motion.p>
          )}

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <LineButton size="medium" />

            {showContactButton && (
              <UltraButton
                href="/#contact"
                variant="primary"
                className="corp-button-primary"
              >
                無料相談を予約する
              </UltraButton>
            )}
          </motion.div>
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default UnifiedCTA
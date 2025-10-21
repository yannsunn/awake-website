'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  hoverScale?: boolean
  hoverLift?: boolean
}

/**
 * ホバー効果付きアニメーションカード
 * 日本の企業サイトで人気の洗練されたインタラクション
 */
export default function AnimatedCard({
  children,
  className = '',
  hoverScale = false,
  hoverLift = true
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: hoverLift ? -8 : 0,
        scale: hoverScale ? 1.02 : 1,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

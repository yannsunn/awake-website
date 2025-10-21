'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

/**
 * StaggerContainer内で使用する子要素
 */
export default function StaggerItem({ children, className = '' }: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

'use client'

import React from 'react'
import StandardSection from '@/components/layout/StandardSection'
import { cn, GRID, HEADING, TEXT, MARGIN } from '@/lib/design-system/unified'
import { motion } from 'framer-motion'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeatureGridProps {
  title?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

export function FeatureGrid({
  title,
  features,
  columns = 3,
  className
}: FeatureGridProps) {
  const gridClass =
    columns === 2 ? GRID.two :
    columns === 3 ? GRID.three :
    GRID.four

  return (
    <StandardSection
      spacing="default"
      container="default"
      background="white"
      title={title}
      className={className}
    >
      <div className={gridClass}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="text-center bg-white backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-300 border-2 border-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={cn(
              'mx-auto flex items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30',
              'h-16 w-16 sm:h-20 sm:w-20',
              MARGIN.sm
            )}>
              {feature.icon}
            </div>
            <h3 className={cn(HEADING.h4, 'text-gray-900', MARGIN.sm)}>
              {feature.title}
            </h3>
            <p className={cn(TEXT.body, 'text-gray-700')}>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </StandardSection>
  )
}

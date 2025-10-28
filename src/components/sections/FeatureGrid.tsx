'use client'

import React from 'react'
import { cn } from '@/lib/utils'
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
  const gridColumns = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <section className={cn('py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
        {title && (
          <motion.h2
            className="corp-heading-2 mb-8 sm:mb-12 lg:mb-16 text-center text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
        )}
        <div className={cn('grid gap-6 sm:gap-8 lg:gap-10', gridColumns[columns])}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center bg-white backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-300 border-2 border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg">
                {feature.icon}
              </div>
              <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl font-semibold text-black leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
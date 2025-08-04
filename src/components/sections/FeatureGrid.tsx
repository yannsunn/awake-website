import React from 'react'
import { cn } from '@/lib/utils'
import { STYLES } from '@/lib/constants'
import { TEXT_SHADOW } from '@/lib/ultra-styles'

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
    <section className={cn('py-12 sm:py-16 lg:py-20', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && (
          <h2 className={cn(STYLES.heading.h2.section, "mb-12 text-center")}>
            {title}
          </h2>
        )}
        <div className={cn('grid gap-8', gridColumns[columns])}>
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white" style={TEXT_SHADOW.heading}>
                {feature.title}
              </h3>
              <p className="text-white leading-relaxed" style={TEXT_SHADOW.body}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
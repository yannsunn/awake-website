import React from 'react'
import { cn } from '@/lib/utils'
import { STYLES } from '@/lib/constants'

interface ProcessStep {
  step: string
  title: string
  description: string
  duration?: string
}

interface ProcessStepsProps {
  title: string
  steps: ProcessStep[]
  className?: string
}

export function ProcessSteps({ title, steps, className }: ProcessStepsProps) {
  return (
    <section className={cn('py-12 sm:py-16 lg:py-20', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className={cn(STYLES.heading.h2.section, "mb-12 text-center")}>
          {title}
        </h2>
        <div className="mx-auto max-w-3xl">
          <ol className="relative space-y-8">
            {steps.map((stepData, index) => (
              <li key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-bold text-white shadow-lg">
                  {stepData.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-4 top-8 h-full w-px bg-gray-600" />
                )}
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white text-shadow-small">
                    {stepData.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {stepData.description}
                  </p>
                  {stepData.duration && (
                    <p className="mt-2 text-sm text-gray-400">
                      目安期間: {stepData.duration}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
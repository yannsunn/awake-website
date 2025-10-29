import React from 'react'
import StandardSection from '@/components/layout/StandardSection'
import { cn, HEADING, TEXT, MARGIN, PROCESS } from '@/lib/design-system/unified'

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
    <StandardSection
      spacing="default"
      container="narrow"
      background="gray"
      title={title}
      {...(className && { className })}
    >
      <ol className={cn('relative', PROCESS.stepGap)}>
        {steps.map((stepData, index) => (
          <li key={index} className="relative pl-10 sm:pl-12 lg:pl-16">
            <div className={cn(
              'absolute left-0 top-0 flex items-center justify-center rounded-full bg-blue-600 text-xs sm:text-sm lg:text-base font-bold text-white shadow-xl shadow-blue-500/30',
              PROCESS.stepSize
            )}>
              {stepData.step}
            </div>
            {index < steps.length - 1 && (
              <div className={cn(
                'absolute w-px bg-blue-600 h-full',
                PROCESS.connectorLeft,
                PROCESS.connectorTop
              )} />
            )}
            <div>
              <h3 className={cn(HEADING.h3, 'text-gray-900', MARGIN.xs)}>
                {stepData.title}
              </h3>
              <p className={cn(TEXT.body, 'text-gray-700')}>
                {stepData.description}
              </p>
              {stepData.duration && (
                <p className={cn(TEXT.small, 'text-gray-600', 'mt-2 sm:mt-3')}>
                  目安期間: {stepData.duration}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </StandardSection>
  )
}

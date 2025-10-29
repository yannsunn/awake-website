import React from 'react'
import { cn } from '@/lib/utils'
import '@/app/corporate.css'

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
    <section className={cn('py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <h2 className="corp-heading-2 mb-8 sm:mb-12 lg:mb-16 text-center leading-tight jp-wrap no-orphan">
          {title}
        </h2>
        <div className="mx-auto max-w-4xl">
          <ol className="relative space-y-6 sm:space-y-8 lg:space-y-10">
            {steps.map((stepData, index) => (
              <li key={index} className="relative pl-10 sm:pl-12 lg:pl-16">
                <div className="absolute left-0 top-0 flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-xs sm:text-sm lg:text-base font-bold text-white shadow-xl">
                  {stepData.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-4 sm:left-5 lg:left-6 top-8 sm:top-10 lg:top-12 h-full w-px bg-gradient-to-b from-blue-500 to-purple-500" />
                )}
                <div>
                  <h3 className="corp-heading-3 mb-2 sm:mb-3 leading-tight jp-wrap no-orphan">
                    {stepData.title}
                  </h3>
                  <p className="corp-text-body text-black leading-relaxed jp-wrap no-orphan">
                    {stepData.description}
                  </p>
                  {stepData.duration && (
                    <p className="corp-text-small mt-2 sm:mt-3 text-gray-600">
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
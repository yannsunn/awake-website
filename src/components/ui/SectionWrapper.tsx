'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  background?: 'dark' | 'medium' | 'light' | 'none'
  id?: string
}

export default function SectionWrapper({
  children,
  className,
  background = 'medium',
  id
}: SectionWrapperProps) {
  const backgroundStyles = {
    dark: 'bg-gray-900/60',
    medium: 'bg-gray-900/30',
    light: 'bg-gray-800/30',
    none: ''
  }

  return (
    <section 
      id={id}
      className={cn(
        'py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative',
        className
      )}
    >
      {background !== 'none' && (
        <div className={cn(
          'absolute inset-0 backdrop-blur-sm',
          backgroundStyles[background]
        )} />
      )}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {children}
      </div>
    </section>
  )
}
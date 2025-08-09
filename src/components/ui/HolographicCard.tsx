'use client'

import { ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'
import { EFFECTS, STYLES } from '@/lib/constants'

interface HolographicCardProps {
  children: ReactNode
  className?: string
  glowOnHover?: boolean
  variant?: 'default' | 'featured' | 'minimal'
}

export default function HolographicCard({
  children,
  className,
  glowOnHover = true,
  variant = 'default'
}: HolographicCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseStyles = {
    default: 'bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-md hover:bg-slate-800/90 hover:border-slate-600/50 transition-all duration-500',
    featured: 'bg-gradient-to-br from-slate-800/60 via-violet-900/20 to-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-violet-500/20 shadow-lg hover:border-violet-400/30 hover:shadow-violet-500/10 transition-all duration-500',
    minimal: 'bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 shadow-sm hover:bg-slate-900/70 hover:border-slate-700/50 transition-all duration-500'
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        baseStyles[variant],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
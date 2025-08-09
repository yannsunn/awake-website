'use client'

import { LucideIcon } from 'lucide-react'
import HolographicCard from '@/components/ui/HolographicCard'
import UltraButton from '@/components/ui/UltraButton'
import { TEXT_SHADOW } from '@/lib/ultra-styles'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  longDescription: string
  price: string
  features: string[]
  buttons: Array<{
    text: string
    href: string
  }>
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  longDescription,
  price,
  features,
  buttons
}: ServiceCardProps) {
  return (
    <HolographicCard
      className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full"
      variant="featured"
    >
      <div>
        {/* Icon */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-700/50 via-violet-600/30 to-slate-700/50 border border-violet-500/30 flex items-center justify-center mb-6 sm:mb-8 shadow-md backdrop-blur-sm">
          <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-violet-300" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white leading-tight">
          {title}
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4 font-medium leading-relaxed">
          {description}
        </p>
        <p className="text-xs sm:text-sm lg:text-base text-gray-200 mb-4 sm:mb-6 leading-relaxed">
          {longDescription}
        </p>
        
        {/* Features */}
        <ul className="space-y-2 mb-4 sm:mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Pricing & Actions */}
      <div>
        <div className="bg-gradient-to-r from-slate-700/60 via-violet-600/40 to-slate-700/60 rounded-xl sm:rounded-2xl p-3 sm:p-5 mb-4 sm:mb-6 text-center shadow-md border border-violet-500/20 backdrop-blur-sm">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            {price}
          </span>
          {price !== "完全成果報酬" && <span className="text-white/90 ml-1">〜</span>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {buttons.map((button, btnIdx) => (
            <UltraButton
              key={btnIdx}
              href={button.href}
              variant={btnIdx === 0 ? "primary" : "secondary"}
              size="sm"
            >
              {button.text}
            </UltraButton>
          ))}
        </div>
      </div>
    </HolographicCard>
  )
}
'use client'

import { memo } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_DATA } from './company-data'
import UltraButton from '@/components/ui/UltraButton'

// 🚀 UNIFIED COMPONENTS - 重複撲滅完了！

// ✨ CTAButton has been removed - Use AccessibleButton directly

// ✨ Service Card Component - Reusable everywhere
export const ServiceCard = memo(function ServiceCard({
  service,
  featured = false
}: {
  service: {
    title: string
    description: string
    href: string
  }
  featured?: boolean
}) {
  return (
    <div className={`
      bg-white rounded-2xl p-8 shadow-sm border
      ${featured ? 'border-blue-600 ring-2 ring-blue-600 ring-opacity-10' : 'border-blue-100'}
    `}>
      {featured && (
        <div className="text-center mb-4">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            人気サービス
          </span>
        </div>
      )}
      <h3 className="text-2xl font-medium text-black mb-4">
        {service.title}
      </h3>
      <p className="text-black mb-8 leading-relaxed">
        {service.description}
      </p>
      <UltraButton href={service.href} variant={featured ? 'primary' : 'secondary'}>
        詳細を見る →
      </UltraButton>
    </div>
  )
})

// ✨ Contact Method Component - Unified contact display
export const ContactMethod = memo(function ContactMethod({
  icon,
  title,
  content,
  link,
  linkText,
  highlighted = false
}: {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
  linkText?: string
  highlighted?: boolean
}) {
  const ContentWrapper = link ? 'a' : 'div'
  const wrapperProps = link ? { href: link, className: 'hover:text-black' } : {}

  return (
    <div className={`flex items-start ${highlighted ? 'p-6 bg-green-50 border border-green-200 rounded-lg' : ''}`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1 ${
        highlighted ? 'bg-green-100' : 'bg-blue-100'
      }`}>
        {icon}
      </div>
      <div>
        <h4 className={`font-medium mb-1 ${highlighted ? 'text-green-900' : 'text-black'}`}>
          {title}
        </h4>
        <p className={`${highlighted ? 'text-green-800' : 'text-black'} mb-2 whitespace-pre-line`}>
          {content}
        </p>
        {link && linkText && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  )
})

// ✨ Company Info Grid - Reusable company info display
export const CompanyInfoGrid = memo(function CompanyInfoGrid({
  items
}: {
  items: Array<{
    icon: React.ReactNode
    label: string
    value: string | React.ReactNode
  }>
}) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-start">
          <div className="w-12 h-12 bg-gray-overlay rounded-lg flex items-center justify-center mr-4 mt-1">
            {item.icon}
          </div>
          <div>
            <h4 className="font-medium text-black mb-1">{item.label}</h4>
            <div className="text-black">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  )
})

// ✨ Feature Highlight - Reusable feature cards
export const FeatureHighlight = memo(function FeatureHighlight({
  icon,
  title,
  description,
  metric
}: {
  icon: React.ReactNode
  title: string
  description: string
  metric?: string
}) {
  return (
    <div className="text-center p-6 rounded-xl">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      {metric && (
        <div className="text-3xl font-medium text-black mb-2">{metric}</div>
      )}
      <h3 className="text-lg font-medium text-black mb-3">{title}</h3>
      <p className="text-black text-sm">{description}</p>
    </div>
  )
})

// ✨ Pricing Card - Unified pricing display
export const PricingCard = memo(function PricingCard({
  plan,
  featured = false
}: {
  plan: {
    name: string
    price: string
    features: string[]
    duration?: string
  }
  featured?: boolean
}) {
  return (
    <div className={`
      bg-white rounded-2xl p-8 shadow-sm border
      ${featured ? 'border-blue-600 ring-2 ring-blue-600 ring-opacity-10' : 'border-blue-200'}
    `}>
      {featured && (
        <div className="text-center mb-4">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            人気プラン
          </span>
        </div>
      )}
      <h3 className="text-xl font-medium text-black mb-2">{plan.name}</h3>
      <div className="text-3xl font-medium text-black mb-6">{plan.price}</div>
      {plan.duration && (
        <div className="text-sm text-black mb-6">期間: {plan.duration}</div>
      )}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-black text-sm flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <UltraButton 
        href="/#contact" 
        variant={featured ? 'primary' : 'secondary'}
        className="w-full"
      >
        お問い合わせ →
      </UltraButton>
    </div>
  )
})

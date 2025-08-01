'use client'

import { memo } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_DATA } from './company-data'
import AccessibleButton from '@/components/ui/AccessibleButton'

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
      bg-white-overlay rounded-2xl p-8 shadow-sm border
      ${featured ? 'border-gray-900 ring-2 ring-gray-900 ring-opacity-10' : 'border-gray-100'}
    `}>
      {featured && (
        <div className="text-center mb-4">
          <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
            人気サービス
          </span>
        </div>
      )}
      <h3 className="text-2xl font-medium text-gray-900 mb-4">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-8 leading-relaxed">
        {service.description}
      </p>
      <AccessibleButton href={service.href} variant={featured ? 'primary' : 'secondary'} showArrow>
        詳細を見る
      </AccessibleButton>
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
  const wrapperProps = link ? { href: link, className: 'hover:text-gray-900' } : {}

  return (
    <div className={`flex items-start ${highlighted ? 'p-6 bg-green-900/20 backdrop-blur-sm border border-green-700 rounded-lg' : ''}`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1 ${
        highlighted ? 'bg-green-800/50 backdrop-blur-sm' : 'bg-gray-700/50'
      }`}>
        {icon}
      </div>
      <div>
        <h4 className={`font-medium mb-1 ${highlighted ? 'text-green-400' : 'text-white'}`}>
          {title}
        </h4>
        <p className={`${highlighted ? 'text-green-300' : 'text-gray-300'} mb-2`}>
          {content}
        </p>
        {link && linkText && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium rounded-lg hover:from-green-600 hover:to-green-700 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-800"
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
            <h4 className="font-medium text-gray-900 mb-1">{item.label}</h4>
            <div className="text-gray-600">{item.value}</div>
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
      <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      {metric && (
        <div className="text-3xl font-light text-gray-900 mb-2">{metric}</div>
      )}
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
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
      bg-white-overlay rounded-2xl p-8 shadow-sm border
      ${featured ? 'border-gray-900 ring-2 ring-gray-900 ring-opacity-10' : 'border-gray-200'}
    `}>
      {featured && (
        <div className="text-center mb-4">
          <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
            人気プラン
          </span>
        </div>
      )}
      <h3 className="text-xl font-medium text-gray-900 mb-2">{plan.name}</h3>
      <div className="text-3xl font-light text-gray-900 mb-6">{plan.price}</div>
      {plan.duration && (
        <div className="text-sm text-gray-500 mb-6">期間: {plan.duration}</div>
      )}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-gray-600 text-sm flex items-center">
            <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <AccessibleButton 
        href="/#contact" 
        variant={featured ? 'primary' : 'secondary'}
        className="w-full"
        showArrow
      >
        お問い合わせ
      </AccessibleButton>
    </div>
  )
})


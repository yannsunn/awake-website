'use client'

import { memo } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_DATA } from './company-data'

// 🚀 UNIFIED COMPONENTS - No More Duplication!

// ✨ Master CTA Button - Used everywhere
export const CTAButton = memo(function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  [key: string]: any
}) {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-200'
  
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl',
    secondary: 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400',
    outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
  }

  return (
    <Link 
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  )
})

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
      bg-white rounded-2xl p-8 shadow-sm border transition-all duration-300 hover:shadow-xl
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
      <CTAButton href={service.href} variant={featured ? 'primary' : 'secondary'}>
        詳細を見る
      </CTAButton>
    </div>
  )
})

// ✨ Contact Method Component - Unified contact display
export const ContactMethod = memo(function ContactMethod({
  icon,
  title,
  content,
  link,
  priority = false
}: {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
  priority?: boolean
}) {
  const ContentWrapper = link ? 'a' : 'div'
  const wrapperProps = link ? { href: link, className: 'hover:text-gray-900 transition-colors' } : {}

  return (
    <div className={`flex items-start ${priority ? 'p-6 bg-green-50 border border-green-200 rounded-lg' : ''}`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1 ${
        priority ? 'bg-green-100' : 'bg-gray-100'
      }`}>
        {icon}
      </div>
      <div>
        <h4 className={`font-medium mb-1 ${priority ? 'text-green-800' : 'text-gray-900'}`}>
          {title}
        </h4>
        <ContentWrapper {...wrapperProps} className={`${priority ? 'text-green-700' : 'text-gray-600'} ${link ? 'hover:text-gray-900 transition-colors' : ''}`}>
          {content}
        </ContentWrapper>
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
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
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
    <div className="text-center hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl">
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
      bg-white rounded-2xl p-8 shadow-sm border hover:shadow-xl transition-shadow duration-300
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
      <CTAButton 
        href="/#contact" 
        variant={featured ? 'primary' : 'secondary'}
        className="w-full"
      >
        お問い合わせ
      </CTAButton>
    </div>
  )
})

// ✨ LINE Contact Highlight - Special component for LINE promotion
export const LineContactHighlight = memo(function LineContactHighlight() {
  return (
    <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
      <h4 className="text-lg font-medium text-green-800 mb-2">📱 公式LINEでお問い合わせ</h4>
      <p className="text-green-700 mb-4">
        お問い合わせは公式LINEが最も早く対応できます
      </p>
      <a 
        href={COMPANY_DATA.contact.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.628-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
        </svg>
        LINE で問い合わせ（{COMPANY_DATA.contact.line}）
      </a>
    </div>
  )
})
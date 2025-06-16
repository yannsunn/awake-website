import type { LucideIcon } from 'lucide-react'

// Common component props
export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

// Feature card data
export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

// Service data
export interface Service {
  title: string
  description: string
  icon: string
  gradient: string
  href: string
}

// Contact form data
export interface ContactFormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

// Navigation item
export interface NavigationItem {
  href: string
  label: string
}

// Pricing plan
export interface PricingPlan {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  popular?: boolean
}

// Process step
export interface ProcessStep {
  step: string
  title: string
  description: string
}

// Button variant types - 型安全性を保証するため、BUTTON_STYLESのキーと完全に同期
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'minimal'

// Form submission status
export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

// Color scheme types
export type ColorScheme = 'purple' | 'green' | 'orange' | 'pink'
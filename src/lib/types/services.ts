export interface ServicePricing {
  name: string
  price: string
  duration?: string
  features: string[]
  isPopular?: boolean
}

export interface ServiceDetail {
  id: string
  title: string
  description: string
  longDescription: string
  href: string
  icon?: string
  pricing: Record<string, ServicePricing>
  features?: string[]
  process?: ProcessStep[]
  benefits?: string[]
  examples?: string[]
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  duration?: string
}

export interface ServiceFeature {
  icon: React.ReactNode
  title: string
  description: string
}

export interface ServiceCategory {
  name: string
  services: ServiceDetail[]
}

export interface ServiceMetadata {
  title: string
  description: string
  keywords: string[]
  openGraph?: {
    images?: Array<{
      url: string
      width?: number
      height?: number
      alt?: string
    }>
  }
}
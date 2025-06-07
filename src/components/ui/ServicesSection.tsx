import Link from 'next/link'
import { Globe, ShoppingCart, Video, Armchair, Zap, ArrowRight } from 'lucide-react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import { SERVICES } from '@/lib/constants'

const serviceIcons = {
  web: Globe,
  ec: ShoppingCart,
  video: Video,
  furniture: Armchair,
  clemira: Zap,
} as const

export default function ServicesSection() {
  return (
    <Section id="services" background="gray" aria-labelledby="services-title">
      <SectionHeader
        title="サービス"
        subtitle="組み合わせ自由なトータルソリューション"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(SERVICES).map(([key, service]) => {
          const IconComponent = serviceIcons[key as keyof typeof serviceIcons]
          return (
            <div 
              key={key} 
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                <IconComponent className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
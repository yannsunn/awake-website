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
  kurumira: Zap,
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
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="inline-flex items-center text-primary-purple hover:text-primary-purple-dark font-semibold group-hover:translate-x-1 transition-transform duration-300"
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
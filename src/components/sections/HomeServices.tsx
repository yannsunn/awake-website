'use client'

import { motion, useInView } from 'framer-motion'
import { Globe, Brain, ShoppingCart } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import ServiceCard from './ServiceCard'
import { useRef } from 'react'
import StandardSection from '@/components/layout/StandardSection'
import { cn, HEADING, TEXT, MARGIN } from '@/lib/design-system/unified'

const services = [
  {
    icon: Globe,
    title: COMPANY_DATA.services.details.web.title,
    description: COMPANY_DATA.services.details.web.description,
    price: COMPANY_DATA.services.details.web.pricing.standard.price,
    image: '/images/web-service.webp',
    features: [
      'モバイル対応で機会損失を防ぐ',
      'SEO対策で検索上位を狙える',
      '更新しやすい管理システム'
    ],
    buttons: [
      { text: '詳しく見る', href: COMPANY_DATA.services.details.web.href }
    ]
  },
  {
    icon: Brain,
    title: COMPANY_DATA.services.details.ai.title,
    description: COMPANY_DATA.services.details.ai.description,
    price: COMPANY_DATA.services.details.ai.pricing.aiCommon.price,
    image: '/images/ai-service.webp',
    features: [
      '24時間自動対応で顧客満足度向上',
      'カスタマーサポートコスト削減',
      'WebサイトやLINEに簡単連携'
    ],
    buttons: [
      { text: '詳しく見る', href: COMPANY_DATA.services.details.ai.href }
    ]
  },
  {
    icon: ShoppingCart,
    title: COMPANY_DATA.services.details.ec.title,
    description: COMPANY_DATA.services.details.ec.description,
    price: "完全成果報酬",
    image: '/images/ec-service.webp',
    features: [
      '商品登録から販売戦略まで完全代行',
      '売れるまで費用は一切不要',
      'プロのノウハウで販売を最適化'
    ],
    buttons: [
      { text: '詳しく見る', href: COMPANY_DATA.services.details.ec.href }
    ]
  }
]

export default function HomeServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  return (
    <section id="services" className="relative bg-white">
      <StandardSection spacing="default" container="default" background="transparent">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
          className={cn('text-center', MARGIN['2xl'])}
        >
          <h2 className={cn(HEADING.h2, 'text-gray-900', MARGIN.md)}>
            ソリューション
          </h2>
          <p className={cn(TEXT.lead, 'text-gray-700')}>
            貴社の課題に最適な3つのサービス
          </p>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </StandardSection>
    </section>
  )
}

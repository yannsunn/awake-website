'use client'

import { memo, useEffect, useRef, useState } from 'react'
import StandardSection from '@/components/layout/StandardSection'
import { GRID, HEADING, TEXT, cn, MARGIN } from '@/lib/design-system/unified'
import { Bot, TrendingUp, ShoppingCart } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

function CountUp({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const SuccessStories = memo(function SuccessStories() {
  const industryStats = [
    {
      title: 'AIチャットボット市場',
      stat: '$7.01B → $20.81B',
      countUpValue: 197,
      countUpSuffix: '%',
      countUpLabel: '成長率',
      description: '2024-2029年の市場成長予測',
      source: 'グローバル市場調査',
      icon: Bot,
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: '中小企業のAI導入',
      stat: '55%が活用中',
      countUpValue: 55,
      countUpSuffix: '%',
      countUpLabel: '導入率',
      description: '2025年の米国中小企業（2024年比39%から増加）',
      source: '業界調査レポート',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'EC市場の成長',
      stat: '34%増加予測',
      countUpValue: 34,
      countUpSuffix: '%',
      countUpLabel: '増加予測',
      description: '2025年までのAIチャットボット導入率',
      source: 'EC業界統計',
      icon: ShoppingCart,
      gradient: 'from-orange-500 to-amber-500'
    }
  ]

  return (
    <StandardSection
      spacing="default"
      container="default"
      background="white"
      title="業界の成長トレンド"
      subtitle="信頼できるグローバル市場データ"
    >
      <div className={GRID.three}>
        {industryStats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={cn('mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br', stat.gradient)}>
              <stat.icon className="h-10 w-10 text-white" />
            </div>
            <h3 className={cn(HEADING.h4, 'text-gray-900', MARGIN.xs)}>
              {stat.title}
            </h3>

            <div className="my-6">
              <p className="text-3xl sm:text-4xl font-bold text-blue-600">
                <CountUp end={stat.countUpValue} suffix={stat.countUpSuffix} duration={2.5} />
              </p>
              <p className="text-sm font-medium text-gray-600 mt-2">{stat.countUpLabel}</p>
            </div>

            <p className={cn('text-lg font-semibold text-gray-700', MARGIN.xs)}>
              {stat.stat}
            </p>
            <p className={cn(TEXT.body, 'text-gray-900', MARGIN.xs)}>
              {stat.description}
            </p>
            <p className={cn(TEXT.small, 'text-gray-600')}>
              出典: {stat.source}
            </p>
          </motion.div>
        ))}
      </div>
    </StandardSection>
  )
})

export default SuccessStories

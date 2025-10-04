'use client'

import PageLayout from '@/components/layout/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import { Globe, Brain, ShoppingCart } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import ContactForm from '@/components/ui/ContactForm'
import ContactInfo from '@/components/ui/ContactInfo'
import LineButton from '@/components/ui/LineButton'
import ValueProposition from '@/components/sections/ValueProposition'
import FAQ from '@/components/sections/FAQ'
import LazyLoad from '@/components/ui/LazyLoad'
import { motion } from 'framer-motion'
import { RippleContainer } from '@/components/effects/DynamicEffects'
import '@/app/corporate.css'

const services = [
  {
    icon: Globe,
    title: COMPANY_DATA.services.details.web.title,
    description: COMPANY_DATA.services.details.web.description,
    price: COMPANY_DATA.services.details.web.pricing.standard.price,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
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
    price: COMPANY_DATA.services.details.ai.pricing.basic.price,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
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

export default function HomePageContent() {
  return (
    <PageLayout>
        {/* Hero Section */}
        <section className="corp-hero corp-section min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* 背景画像 - Unsplash仮画像（後で差し替え） - より見えるように */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="チームワーク背景"
              fill
              className="object-cover opacity-20"
              priority
              unoptimized
            />
          </div>

          {/* 動的な背景エフェクト */}
          <div className="absolute inset-0 pointer-events-none z-1">
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="corp-heading-1 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block mb-2">Webサイト制作・AIチャットボット開発</span>
                <motion.span
                  className="corp-gradient-text inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  適正価格で、確実な成果を
                </motion.span>
              </motion.h1>

              <motion.p
                className="corp-text-lead mb-4 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                中小企業のための、実用的なデジタルソリューション
              </motion.p>

              <motion.p
                className="corp-text-body mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                初期費用を抑え、売上に直結するサービスだけをご提供します
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center relative z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.a
                  href="#contact"
                  className="corp-button-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  無料相談する
                </motion.a>
                <motion.a
                  href="#services"
                  className="corp-button-secondary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  サービス一覧
                </motion.a>
              </motion.div>

              <motion.div
                className="mt-8 relative z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <LineButton className="shadow-xl" size="medium" variant="filled" />
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="corp-section relative" style={{ background: 'var(--corp-bg-secondary)' }}>
          {/* 背景画像 - さりげなく */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-contain bg-no-repeat bg-right" style={{ backgroundImage: 'url(/images/digital-particles.png)' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="corp-heading-2 mb-4">
                ソリューション
              </h2>
              <p className="corp-text-lead">
                貴社の課題に最適な3つのサービス
              </p>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <RippleContainer key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="corp-card h-full group overflow-hidden"
                  >
                    <div className="flex flex-col h-full">
                    {/* サービス画像 - より目立つように */}
                    <div className="relative h-64 mb-6 -mx-8 -mt-8 overflow-hidden rounded-t-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent"></div>
                      {/* 画像が読み込まれているか確認用 */}
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        画像{index + 1}
                      </div>
                    </div>

                    <motion.div
                      className="w-14 h-14 rounded bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6 border border-blue-200 group-hover:border-blue-400 transition-colors"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-7 h-7" style={{ color: 'var(--corp-primary)' }} />
                    </motion.div>
                    <h3 className="corp-heading-3 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="corp-text-body mb-4">{service.description}</p>

                    <motion.div
                      className="text-center bg-blue-50 rounded p-3 mb-4 border border-blue-200 group-hover:border-blue-400 group-hover:bg-blue-100 transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-lg font-semibold" style={{ color: 'var(--corp-primary)' }}>{service.price}</span>
                    </motion.div>

                    <ul className="space-y-2 mb-6 flex-grow">
                      {service.features.map((feature, fIdx) => (
                        <motion.li
                          key={fIdx}
                          className="corp-text-small flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + fIdx * 0.05 }}
                        >
                          <span className="text-blue-600 mr-2">✓</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Link href={service.buttons[0].href}>
                      <motion.div
                        className="corp-button-primary text-center block"
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(14, 165, 233, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {service.buttons[0].text}
                      </motion.div>
                    </Link>
                  </div>
                  </motion.div>
                </RippleContainer>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <ValueProposition />

        {/* Company Mission Section */}
        <section className="corp-section bg-white relative">
          {/* 背景画像 - さりげなく */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-contain bg-no-repeat bg-left" style={{ backgroundImage: 'url(/images/network-connections.png)' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="corp-heading-2">
                経営理念
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="corp-card p-8 md:p-12">
                <div className="text-center">
                  <h3 className="corp-heading-3 mb-6 corp-gradient-text">
                    {COMPANY_DATA.basic.mission}
                  </h3>
                  <p className="corp-text-lead mb-8">
                    適正な投資で最大の効果を。<br />
                    私たちは貴社のIT投資を最適化し、<br />
                    持続可能な成長を支援いたします。
                  </p>
                  <Link href="/about" className="corp-button-primary inline-block">
                    会社概要 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
        
        {/* Contact Section */}
        <section id="contact" className="corp-section relative" style={{ background: 'var(--corp-bg-secondary)' }}>
          {/* 背景画像 - さりげなく */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-center" style={{ backgroundImage: 'url(/images/ai-energy.png)' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="corp-heading-2 mb-4">
                お問い合わせ
              </h2>
              <p className="corp-text-lead mb-4">
                まずはお気軽にご相談ください
              </p>
              <p className="corp-text-body max-w-2xl mx-auto">
                貴社の課題やご要望をお伺いし、<br className="hidden sm:block" />
                最適なソリューションをご提案いたします。
              </p>
            </div>
          
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <LazyLoad>
                <ContactForm />
              </LazyLoad>
              <LazyLoad>
                <ContactInfo />
              </LazyLoad>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}
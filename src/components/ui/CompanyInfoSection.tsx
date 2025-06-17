'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Calendar, Users, Award } from 'lucide-react'
import { memo } from 'react'
import { commonAnimations, optimizedViewport } from '@/lib/animations'

// 🚀 Ultra-Optimized Company Info Section
const CompanyInfoSection = memo(function CompanyInfoSection() {

  return (
    <section className="py-20 bg-gray-50" id="company-info">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={commonAnimations.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={optimizedViewport}
      >
        <motion.div variants={commonAnimations.fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            会社情報
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            株式会社Awakeは、デジタルソリューションを通じて企業の成長を支援し、新しい価値を創造します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Details */}
          <motion.div variants={commonAnimations.fadeInUp}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-medium text-gray-900 mb-8">企業概要</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Award className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">会社名</h4>
                    <p className="text-gray-600">株式会社Awake</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Calendar className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">設立</h4>
                    <p className="text-gray-600">2023年</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">事業内容</h4>
                    <p className="text-gray-600">
                      ホームページ制作、AIコンサルティング、Amazon代理店サービス
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">所在地</h4>
                    <p className="text-gray-600">
                      東京都渋谷区<br />
                      （詳細は お問い合わせください）
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={commonAnimations.fadeInUp}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-medium text-gray-900 mb-8">お問い合わせ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">電話番号</h4>
                    <p className="text-gray-600">お問い合わせフォームよりご連絡ください</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">メール</h4>
                    <p className="text-gray-600">お問い合わせフォームをご利用ください</p>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-3">営業時間</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>平日：9:00 - 18:00</p>
                      <p>土日祝日：お休み</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    初回のご相談は無料です。お気軽にお問い合わせください。
                    通常1営業日以内にご返信いたします。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div variants={commonAnimations.scaleIn} className="mt-16">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">私たちのミッション</h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              デジタル技術の力で、お客様のビジネスの可能性を最大限に引き出し、
              持続的な成長と新しい価値創造を実現することが私たちの使命です。
              一社一社に寄り添い、最適なソリューションをご提供いたします。
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
})

export default CompanyInfoSection
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
                      〒207-0013<br />
                      東京都東大和市向原5-1129-61 渡辺ビル1F
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
                {/* 公式LINE案内 */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-green-800 mb-2">📱 公式LINEでお問い合わせ</h4>
                  <p className="text-green-700 mb-4">
                    お問い合わせは公式LINEが最も早く対応できます
                  </p>
                  <a 
                    href="https://line.me/R/ti/p/@100usiub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.628-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                    LINE で問い合わせ（@100usiub）
                  </a>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Phone className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">電話番号</h4>
                    <p className="text-gray-600">050-7115-4948</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">メール</h4>
                    <p className="text-gray-600">shop@awakeinc.co.jp</p>
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
                    初回のご相談は無料です。公式LINEが最も早く対応できます。
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
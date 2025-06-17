'use client'

import { memo } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

// アニメーション設定をローカルで定義（インポートエラー回避）
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

// 🚀 Ultra-Optimized Contact Info Component
const ContactInfo = memo(function ContactInfo() {
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
    >
      <h3 className="text-2xl font-medium text-gray-900 mb-8">お気軽にお問い合わせください</h3>
      
      {/* 公式LINE優先案内 */}
      <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
            <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.628-.629.628M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-green-800 mb-1">公式LINE（推奨）</h4>
            <p className="text-green-700 text-sm mb-3">@100usiub - 最も早く対応できます</p>
            <a 
              href="https://line.me/R/ti/p/@100usiub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              LINEで問い合わせ
            </a>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
            <Phone className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">お電話でのお問い合わせ</h4>
            <p className="text-gray-600">お問い合わせフォームよりご連絡ください</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
            <Mail className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">メールでのお問い合わせ</h4>
            <p className="text-gray-600">フォームから送信いただいたメッセージに返信いたします</p>
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
              詳細はお問い合わせ時にお伝えいたします
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
            <Clock className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">営業時間</h4>
            <div className="text-gray-600 space-y-1">
              <p>平日：9:00 - 18:00</p>
              <p>土日祝日：お休み</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium text-gray-900 mb-3">ご相談について</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• 初回のご相談は無料です</li>
            <li>• 通常1営業日以内にご返信いたします</li>
            <li>• お見積りも無料で承っております</li>
            <li>• 秘密保持契約の締結も可能です</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
})

export default ContactInfo
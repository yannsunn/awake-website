'use client'

import { memo } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { commonAnimations } from '@/lib/animations'

// 🚀 Ultra-Optimized Contact Info Component
const ContactInfo = memo(function ContactInfo() {
  return (
    <motion.div 
      variants={commonAnimations.fadeInUp}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
    >
      <h3 className="text-2xl font-medium text-gray-900 mb-8">お気軽にお問い合わせください</h3>
      
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
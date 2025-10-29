'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import { ContactMethod } from '@/lib/unified-components'

// 🚀 Ultra-Optimized Contact Info - Unified Data Source
const ContactInfo = memo(function ContactInfo() {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h3 className="text-2xl font-medium text-black mb-8">会社情報</h3>
      
      
      {/* 🎯 統合された連絡先情報 */}
      <div className="space-y-6">
        <ContactMethod
          icon={<MapPin className="w-6 h-6 text-blue-600" />}
          title="所在地"
          content={`${COMPANY_DATA.contact.address.postal}\n${COMPANY_DATA.contact.address.full}`}
        />

        <ContactMethod
          icon={<Clock className="w-6 h-6 text-blue-600" />}
          title="営業時間"
          content={`${COMPANY_DATA.contact.businessHours.weekdays}\n${COMPANY_DATA.contact.businessHours.weekend}`}
        />
      </div>

      {/* 🎯 会社情報 */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="mb-4">
          <h4 className="font-bold text-black">{COMPANY_DATA.basic.name}</h4>
          <p className="text-sm text-black mt-1">{COMPANY_DATA.basic.mission}</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mt-6 border border-gray-200">
          <ul className="text-sm text-black space-y-2">
            {COMPANY_DATA.consultation.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
})

export default ContactInfo
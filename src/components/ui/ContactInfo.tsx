'use client'

import { memo } from 'react'
import { MapPin, Clock } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import { ContactMethod } from '@/lib/unified-components'

// 🚀 Ultra-Optimized Contact Info - Unified Data Source
const ContactInfo = memo(function ContactInfo() {
  return (
    <div className="bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-600 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-700/20 before:to-transparent before:pointer-events-none">
      <h3 className="text-2xl font-medium text-white mb-8">会社情報</h3>
      
      
      {/* 🎯 統合された連絡先情報 */}
      <div className="space-y-6">
        <ContactMethod
          icon={<MapPin className="w-6 h-6 text-gray-300" />}
          title="所在地"
          content={`${COMPANY_DATA.contact.address.postal}\n${COMPANY_DATA.contact.address.full}`}
        />

        <ContactMethod
          icon={<Clock className="w-6 h-6 text-gray-300" />}
          title="営業時間"
          content={`${COMPANY_DATA.contact.businessHours.weekdays}\n${COMPANY_DATA.contact.businessHours.weekend}`}
        />
      </div>

      {/* 🎯 会社情報 */}
      <div className="mt-8 pt-8 border-t border-gray-600">
        <div className="mb-4">
          <h4 className="font-bold text-white">{COMPANY_DATA.basic.name}</h4>
          <p className="text-sm text-gray-200 mt-1">{COMPANY_DATA.basic.mission}</p>
        </div>
        
        <div className="bg-gray-700/50 rounded-lg p-6 mt-6">
          <ul className="text-sm text-gray-200 space-y-2">
            {COMPANY_DATA.consultation.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
})

export default ContactInfo
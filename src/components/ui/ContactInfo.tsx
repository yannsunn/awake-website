'use client'

import { memo } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import { ContactMethod } from '@/lib/unified-components'

// 🚀 Ultra-Optimized Contact Info - Unified Data Source
const ContactInfo = memo(function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h3 className="text-2xl font-medium text-gray-900 mb-8">お問い合わせ</h3>
      
      
      {/* 🎯 統合された連絡先情報 */}
      <div className="space-y-6">
        <ContactMethod
          icon={<Phone className="w-6 h-6 text-gray-600" />}
          title="電話番号"
          content={COMPANY_DATA.contact.phone}
          link={`tel:${COMPANY_DATA.contact.phone}`}
        />

        <ContactMethod
          icon={<Mail className="w-6 h-6 text-gray-600" />}
          title="メールアドレス"
          content={COMPANY_DATA.contact.email}
          link={`mailto:${COMPANY_DATA.contact.email}`}
        />

        <ContactMethod
          icon={<MapPin className="w-6 h-6 text-gray-600" />}
          title="所在地"
          content={`${COMPANY_DATA.contact.address.postal}\n${COMPANY_DATA.contact.address.full}`}
        />

        <ContactMethod
          icon={<Clock className="w-6 h-6 text-gray-600" />}
          title="営業時間"
          content={`${COMPANY_DATA.contact.businessHours.weekdays}\n${COMPANY_DATA.contact.businessHours.weekend}`}
        />
      </div>

      {/* 🎯 会社情報 */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="mb-4">
          <h4 className="font-bold text-gray-900">{COMPANY_DATA.basic.name}</h4>
          <p className="text-sm text-gray-600 mt-1">{COMPANY_DATA.basic.mission}</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mt-6">
          <ul className="text-sm text-gray-600 space-y-2">
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
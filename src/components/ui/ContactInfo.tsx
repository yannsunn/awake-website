'use client'

import { memo } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import { LineContactHighlight, ContactMethod } from '@/lib/unified-components'

// 🚀 Ultra-Optimized Contact Info - Unified Data Source
const ContactInfo = memo(function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h3 className="text-2xl font-medium text-gray-900 mb-8">お気軽にお問い合わせください</h3>
      
      <LineContactHighlight />
      
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
          content={
            <>
              {COMPANY_DATA.contact.address.postal}<br />
              {COMPANY_DATA.contact.address.full}
            </>
          }
        />

        <ContactMethod
          icon={<Clock className="w-6 h-6 text-gray-600" />}
          title="営業時間"
          content={
            <div className="space-y-1">
              <div>{COMPANY_DATA.contact.businessHours.weekdays}</div>
              <div>{COMPANY_DATA.contact.businessHours.weekend}</div>
            </div>
          }
        />
      </div>

      {/* 🎯 相談情報 - データ統合済み */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium text-gray-900 mb-3">ご相談について</h4>
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
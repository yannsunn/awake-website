'use client'

import { MapPin, Phone, Mail, Calendar, Users, Award } from 'lucide-react'
import { memo } from 'react'
import { COMPANY_DATA } from '@/lib/company-data'

// 🚀 Ultra-Optimized Company Info Section - Motion-Free & Data-Unified
const CompanyInfoSection = memo(function CompanyInfoSection() {
  return (
    <section className="py-20 bg-gray-50" id="company-info">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            会社情報
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {COMPANY_DATA.basic.name}は、{COMPANY_DATA.basic.mission}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Details - Data Unified */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-medium text-gray-900 mb-8">企業概要</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Award className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">会社名</h4>
                  <p className="text-gray-600">{COMPANY_DATA.basic.name}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Calendar className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">設立</h4>
                  <p className="text-gray-600">{COMPANY_DATA.basic.established}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">事業内容</h4>
                  <p className="text-gray-600">
                    {COMPANY_DATA.services.list.join('、')}
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
                    {COMPANY_DATA.contact.address.postal}<br />
                    {COMPANY_DATA.contact.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 🚀 Streamlined Contact - Avoiding Duplication */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-medium text-gray-900 mb-8">サービス特徴</h3>
            
            <div className="space-y-6">
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">デジタルソリューション</h4>
                <p className="text-sm text-gray-600">
                  最先端技術とクリエイティブな発想で、革新的なサービスを提供
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-light text-blue-600 mb-1">0円</div>
                  <div className="text-sm text-blue-800">初回相談無料</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-light text-green-600 mb-1">24h</div>
                  <div className="text-sm text-green-800">高速レスポンス</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">サービス範囲</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {COMPANY_DATA.services.list.map((service, index) => (
                    <li key={index}>• {service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement - Simplified */}
        <div className="mt-16 bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
          <h3 className="text-2xl font-medium text-gray-900 mb-6">私たちのミッション</h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            {COMPANY_DATA.basic.mission}で、お客様のビジネスの可能性を最大限に引き出し、
            持続的な成長と新しい価値創造を実現します。
          </p>
        </div>
      </div>
    </section>
  )
})

export default CompanyInfoSection
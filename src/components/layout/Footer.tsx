'use client'

import Link from 'next/link'
import { memo } from 'react'
import { COMPANY_DATA } from '@/lib/company-data'

// 🚀 Ultra-Optimized Footer (Toyota Style) - Data Unified
const Footer = memo(function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-light text-white mb-4">{COMPANY_DATA.basic.name}</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
              {COMPANY_DATA.basic.mission}
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>{COMPANY_DATA.contact.address.postal}</p>
              <p>{COMPANY_DATA.contact.address.full}</p>
              <p className="mt-3">TEL: {COMPANY_DATA.contact.phone}</p>
            </div>
          </div>
          
          {/* Services & Support */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-white mb-4">サービス・サポート</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-400 hover:text-white  text-sm"
                >
                  会社概要
                </Link>
              </li>
              {Object.values(COMPANY_DATA.services.details).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="text-gray-400 hover:text-white  text-sm"
                    {...(service.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/faq" 
                  className="text-gray-400 hover:text-white  text-sm"
                >
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-white mb-4">お問い合わせ</h3>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                営業時間: {COMPANY_DATA.contact.businessHours.weekdays}
              </p>
              <p className="text-gray-400 text-sm">
                初回相談は無料です
              </p>
              <Link 
                href="/#contact"
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100  min-h-[44px]"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 {COMPANY_DATA.basic.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer
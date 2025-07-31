'use client'

import Link from 'next/link'
import { memo } from 'react'
import { MapPin, Clock, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import { STYLES } from '@/lib/constants'
import LineButton from '@/components/ui/LineButton'

// 🚀 最適化されたフッター
const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()
  
  // サービスリンク
  const serviceLinks = [
    { 
      href: COMPANY_DATA.services.details.web.href, 
      title: COMPANY_DATA.services.details.web.title,
      external: true
    },
    { 
      href: COMPANY_DATA.services.details.ai.href, 
      title: COMPANY_DATA.services.details.ai.title 
    },
    { 
      href: COMPANY_DATA.services.details.ec.href, 
      title: COMPANY_DATA.services.details.ec.title 
    }
  ]
  
  // 会社情報リンク
  const companyLinks = [
    { href: '/about', title: '会社概要' },
    { href: '/partners', title: 'パートナー企業' },
    { href: '/faq', title: 'よくある質問' }
  ]
  
  // 法務情報リンク
  const legalLinks = [
    { href: '/legal/privacy-policy', title: 'プライバシーポリシー' },
    { href: '/legal/terms', title: '利用規約' },
    { href: '/legal/tokusho', title: '特定商取引法に基づく表記' }
  ]

  return (
    <footer className="relative bg-gray-900/98 backdrop-filter backdrop-blur-md z-20" role="contentinfo">
      <div className="absolute inset-0 bg-gray-900/95" />
      {/* メインコンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* 会社情報 */}
          <div className="lg:col-span-1">
            <h2 className={`${STYLES.heading.h3.card} text-white mb-6`}>
              {COMPANY_DATA.basic.name}
            </h2>
            <p className={`${STYLES.text.body.medium} text-white mb-6`}>
              {COMPANY_DATA.basic.mission}
            </p>
            
            {/* 連絡先情報 */}
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className={`${STYLES.text.description.small} text-white`}>
                    {COMPANY_DATA.contact.address.postal}
                  </p>
                  <p className={`${STYLES.text.description.small} text-white`}>
                    {COMPANY_DATA.contact.address.full}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                <a 
                  href={`tel:${COMPANY_DATA.contact.phone}`}
                  className={`${STYLES.text.description.small} text-white hover:text-gray-200 transition-colors`}
                >
                  {COMPANY_DATA.contact.phone}
                </a>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className={`${STYLES.text.description.small} text-white`}>
                    {COMPANY_DATA.contact.businessHours.weekdays}
                  </p>
                  <p className={`${STYLES.text.description.small} text-white`}>
                    {COMPANY_DATA.contact.businessHours.weekend}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* サービス */}
          <div>
            <h3 className={`${STYLES.heading.h4} text-white mb-6`}>
              サービス
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`${STYLES.text.body.small} text-gray-400 hover:text-white transition-colors inline-flex items-center group`}
                    {...(link.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {link.title}
                    {link.external && (
                      <ArrowUpRight className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 会社情報 */}
          <div>
            <h3 className={`${STYLES.heading.h4} text-white mb-6`}>
              会社情報
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`${STYLES.text.body.small} text-white hover:text-gray-200 transition-colors`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* お問い合わせ */}
          <div>
            <h3 className={`${STYLES.heading.h4} text-white mb-6`}>
              お問い合わせ
            </h3>
            <p className={`${STYLES.text.body.small} text-white mb-6`}>
              お気軽にご相談ください。
              LINEなら最速で返信いたします。
            </p>
            <LineButton 
              className="w-full" 
              size="medium"
            />
          </div>
        </div>
        
        {/* 法務情報 */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${STYLES.text.description.small} text-white hover:text-gray-200 transition-colors`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            
            <p className={`${STYLES.text.description.small} text-white`}>
              © {currentYear} {COMPANY_DATA.basic.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* トップへ戻るボタン */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition-all duration-200 opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 z-40"
        aria-label="ページトップへ戻る"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
      </div>
    </footer>
  )
})

export default Footer
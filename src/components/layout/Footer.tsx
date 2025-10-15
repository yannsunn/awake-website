'use client'

import Link from 'next/link'
import Image from 'next/image'
import { memo } from 'react'
import { MapPin, Clock, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import LineButton from '@/components/ui/LineButton'
import '@/app/corporate.css'

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()
  
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
  
  const companyLinks = [
    { href: '/about', title: '会社概要' },
    { href: '/partners', title: 'パートナー企業' },
    { href: '/faq', title: 'よくある質問' }
  ]
  
  const legalLinks = [
    { href: '/legal/terms', title: '利用規約' },
    { href: '/legal/privacy-policy', title: 'プライバシーポリシー' },
    { href: '/legal/tokusho', title: '特定商取引法に基づく表記' }
  ]

  return (
    <footer className="relative corp-footer mt-auto" role="contentinfo">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 mr-3">
                <Image
                  src="/images/awake-logo-text.png"
                  alt={`${COMPANY_DATA.basic.name} ロゴ`}
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="48px"
                />
              </div>
              <h2 className="corp-heading-3 text-white font-bold" style={{ color: 'white' }}>
                {COMPANY_DATA.basic.name}
              </h2>
            </div>
            <p className="corp-text-body text-white font-medium mb-6" style={{ color: 'white' }}>
              {COMPANY_DATA.basic.mission}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="corp-text-small text-white font-medium" style={{ color: 'white' }}>
                    {COMPANY_DATA.contact.address.postal}
                  </p>
                  <p className="corp-text-small text-white font-medium" style={{ color: 'white' }}>
                    {COMPANY_DATA.contact.address.full}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_DATA.contact.phone}`}
                  className="corp-text-small text-white font-medium hover:opacity-80 transition-all duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-400 focus-visible:ring-offset-3"
                  aria-label="電話でお問い合わせ"
                  style={{ color: 'white' }}
                >
                  {COMPANY_DATA.contact.phone}
                </a>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="corp-text-small text-white font-medium" style={{ color: 'white' }}>
                    {COMPANY_DATA.contact.businessHours.weekdays}
                  </p>
                  <p className="corp-text-small text-white font-medium" style={{ color: 'white' }}>
                    {COMPANY_DATA.contact.businessHours.weekend}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="corp-heading-3 text-white font-bold mb-6" style={{ color: 'white' }}>
              サービス
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="corp-text-body text-white font-medium hover:opacity-80 transition-all duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-400 focus-visible:ring-offset-3 inline-flex items-center group"
                    style={{ color: 'white' }}
                    {...(link.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      'aria-label': `${link.title} - 新しいウィンドウで開きます`
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
          
          <div>
            <h3 className="corp-heading-3 text-white font-bold mb-6" style={{ color: 'white' }}>
              会社情報
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="corp-text-body text-white font-medium hover:opacity-80 transition-all duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-400 focus-visible:ring-offset-3"
                    style={{ color: 'white' }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="corp-heading-3 text-white font-bold mb-6" style={{ color: 'white' }}>
              お問い合わせ
            </h3>
            <p className="corp-text-body text-white font-medium mb-6" style={{ color: 'white' }}>
              お気軽にご相談ください。
              LINEなら最速で返信いたします。
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="corp-text-small text-white font-medium hover:opacity-80 transition-all duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-400 focus-visible:ring-offset-3"
                  style={{ color: 'white' }}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <p className="corp-text-small text-white font-medium" style={{ color: 'white' }}>
              © {currentYear} {COMPANY_DATA.basic.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-4 min-h-[56px] min-w-[56px] bg-[#1f2937] hover:bg-[#374151] text-white rounded-full shadow-lg transition-all duration-300 ease-out opacity-90 hover:opacity-100 hover:scale-[1.1] active:scale-[0.9] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3 z-40"
        aria-label="ページトップへ戻る"
        type="button"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
})

export default Footer
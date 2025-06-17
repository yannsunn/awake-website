'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()
  const servicesRef = useRef<HTMLDivElement>(null)
  
  const isHomePage = pathname === '/'
  
  // 外部クリックでドロップダウンを閉じる
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  // コアサービスページのリンク - ニューロデザイン最適化
  const services = [
    { href: '/services/web', title: 'ホームページ制作' },
    { href: '/services/ai', title: 'AIコンサルティング' },
    { href: '/services/ec', title: 'Amazon代理店サービス' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-corporate-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-corporate-gray-900 hover:text-corporate-blue-600 transition-base"
              aria-label="株式会社Awake ホームページ"
            >
              株式会社Awake
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="メインナビゲーション">
            <Link 
              href={isHomePage ? "#features" : "/#features"} 
              className="text-corporate-gray-700 hover:text-corporate-blue-600 transition-base font-medium"
            >
              特徴
            </Link>
            
            {/* サービスドロップダウン */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-corporate-gray-700 hover:text-corporate-blue-600 transition-base font-medium"
                aria-expanded={isServicesOpen}
              >
                サービス
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-corporate-gray-200 py-2 z-50">
                  <Link 
                    href={isHomePage ? "#services" : "/#services"}
                    className="block px-4 py-2 text-corporate-gray-700 hover:bg-corporate-gray-50 hover:text-corporate-blue-600 transition-base"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    サービス一覧
                  </Link>
                  <div className="border-t border-corporate-gray-100 my-1"></div>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-corporate-gray-700 hover:bg-corporate-gray-50 hover:text-corporate-blue-600 transition-base"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              href={isHomePage ? "#contact" : "/#contact"} 
              className="text-corporate-gray-700 hover:text-corporate-blue-600 transition-base font-medium"
            >
              お問い合わせ
            </Link>
            <Link 
              href={isHomePage ? "#contact" : "/#contact"} 
              className="bg-corporate-blue-600 text-white px-6 py-2 rounded-md hover:bg-corporate-blue-700 transition-base font-medium"
            >
              無料相談
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-corporate-gray-700 hover:text-corporate-blue-600 focus:outline-none focus:ring-2 focus:ring-corporate-blue-300 p-2"
              aria-label="メニューを開く"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-corporate-gray-200">
              <Link 
                href={isHomePage ? "#features" : "/#features"} 
                className="block px-3 py-2 text-corporate-gray-700 hover:text-corporate-blue-600 transition-base"
                onClick={() => setIsMenuOpen(false)}
              >
                特徴
              </Link>
              
              {/* モバイルサービスメニュー */}
              <div className="space-y-1">
                <Link 
                  href={isHomePage ? "#services" : "/#services"}
                  className="block px-3 py-2 text-corporate-gray-700 hover:text-corporate-blue-600 transition-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  サービス一覧
                </Link>
                <div className="pl-6 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-2 text-sm text-corporate-gray-600 hover:text-corporate-blue-600 transition-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href={isHomePage ? "#contact" : "/#contact"} 
                className="block px-3 py-2 text-corporate-gray-700 hover:text-corporate-blue-600 transition-base"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
              <Link 
                href={isHomePage ? "#contact" : "/#contact"} 
                className="block mx-3 my-2 px-4 py-2 bg-corporate-blue-600 text-white rounded-md hover:bg-corporate-blue-700 transition-base text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                無料相談
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
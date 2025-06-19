'use client'

import { useState, useEffect, useRef, memo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

// 🚀 Ultra-Optimized Header (Toyota Style)
const Header = memo(function Header() {
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
  
  // Toyota風サービスメニュー
  const services = [
    { href: '/services/web', title: 'ホームページ制作' },
    { href: '/services/ai', title: 'AIコンサルティング' },
    { href: '/services/ec', title: 'Amazon代理店サービス' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-light text-gray-900 hover:text-gray-700 transition-colors"
              aria-label="株式会社Awake ホームページ"
            >
              株式会社Awake
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" role="navigation" aria-label="メインナビゲーション">
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
            >
              会社概要
            </Link>
            
            <Link 
              href={isHomePage ? "#company-info" : "/#company-info"} 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
            >
              会社情報
            </Link>
            
            {/* サービスドロップダウン - Toyota Style */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                aria-expanded={isServicesOpen}
              >
                サービス
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
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
              className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>
          
          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors p-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">メニューを開く</span>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium px-4 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                会社概要
              </Link>
              
              <Link 
                href={isHomePage ? "#company-info" : "/#company-info"}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium px-4 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                会社情報
              </Link>
              
              <div className="space-y-2">
                <div className="text-gray-900 font-medium px-4 py-2">サービス</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block pl-8 pr-4 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              
              <Link 
                href={isHomePage ? "#contact" : "/#contact"}
                className="bg-gray-900 text-white px-6 py-3 mx-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
})

export default Header
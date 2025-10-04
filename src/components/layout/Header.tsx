'use client'

import { useState, useEffect, useRef, memo, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react'
import { COMPANY_DATA } from '@/lib/company-data'
import LineButton from '@/components/ui/LineButton'
import '@/app/corporate.css'

// 🚀 最適化されたナビゲーションヘッダー
const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const servicesRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  
  // サービスデータを COMPANY_DATA から取得
  const services = [
    { 
      href: COMPANY_DATA.services.details.web.href, 
      title: COMPANY_DATA.services.details.web.title,
      description: COMPANY_DATA.services.details.web.description
    },
    { 
      href: COMPANY_DATA.services.details.ai.href, 
      title: COMPANY_DATA.services.details.ai.title,
      description: COMPANY_DATA.services.details.ai.description
    },
    { 
      href: COMPANY_DATA.services.details.ec.href, 
      title: COMPANY_DATA.services.details.ec.title,
      description: COMPANY_DATA.services.details.ec.description
    }
  ]

  // ナビゲーション項目
  const navigationItems = [
    { href: '/about', title: '会社概要' },
    { title: 'サービス', type: 'dropdown' as const, items: services },
    { href: '/partners', title: 'パートナー企業' },
    { href: '/faq', title: 'よくある質問' }
  ]

  // メニュー開閉の最適化
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
    setIsServicesOpen(false)
  }, [])

  const toggleServices = useCallback(() => {
    setIsServicesOpen(prev => !prev)
  }, [])

  // スクロール検出の最適化
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 外部クリックでメニューを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
    return undefined
  }, [isServicesOpen])

  // ESCキーでメニューを閉じる
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        setIsServicesOpen(false)
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // メニューが開いているときにスクロールを防ぐ
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'corp-header-scrolled'
            : 'corp-header'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* ロゴ */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="flex items-center group"
                aria-label={`${COMPANY_DATA.basic.name} ホーム`}
              >
                <span className="text-xl md:text-2xl text-black group-hover:text-black transition-colors font-bold">
                  {COMPANY_DATA.basic.name}
                </span>
              </Link>
            </div>
            
            {/* デスクトップナビゲーション */}
            <nav className="hidden md:flex items-center space-x-1" aria-label="メインナビゲーション" role="navigation">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href
                
                if (item.type === 'dropdown') {
                  return (
                    <div key={index} className="relative" ref={servicesRef}>
                      <button
                        onClick={toggleServices}
                        className="flex items-center px-4 py-2 min-h-[48px] rounded-lg text-black hover:text-black hover:bg-blue-50 transition-all duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-600 focus-visible:ring-offset-3 whitespace-nowrap text-base font-medium"
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                        type="button"
                      >
                        {item.title}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up z-50">
                          {item.items?.map((service, serviceIndex) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`block px-6 py-4 min-h-[56px] hover:bg-blue-50 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-600 focus-visible:ring-offset-3 ${
                                serviceIndex !== item.items.length - 1 ? 'border-b border-gray-100' : ''
                              }`}
                              onClick={() => setIsServicesOpen(false)}
                              {...(service.href.startsWith('http') && {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                'aria-label': `${service.title} - 新しいウィンドウで開きます`
                              })}
                            >
                              <div className="text-base mb-1 text-black font-semibold">
                                {service.title}
                              </div>
                              <div className="text-sm text-black/70">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={index}
                    href={item.href || '#'}
                    className={`inline-flex items-center px-4 py-2 min-h-[48px] rounded-lg transition-all duration-300 ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-600 focus-visible:ring-offset-3 text-base font-medium ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 font-bold'
                        : 'text-black hover:text-black hover:bg-blue-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.title}
                  </Link>
                )
              })}
              
              {/* LINE CTAボタン */}
              <div className="ml-4">
                <LineButton size="small" />
              </div>
            </nav>
            
            {/* モバイルメニューボタン */}
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className="md:hidden p-3 min-h-[48px] min-w-[48px] rounded-lg hover:bg-gray-100 transition-all duration-300 ease-out hover:scale-[1.05] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
              aria-controls="mobile-menu"
              type="button"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-black" />
              ) : (
                <Menu className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* オーバーレイ */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={toggleMenu}
          aria-hidden="true"
        />
        
        {/* メニューパネル */}
        <nav
          id="mobile-menu"
          className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="モバイルナビゲーション"
          role="navigation"
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col h-full">
            {/* ヘッダー */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <span className="corp-heading-3 text-black">メニュー</span>
              <button
                onClick={toggleMenu}
                className="p-3 min-h-[48px] min-w-[48px] rounded-lg hover:bg-gray-100 transition-all duration-300 ease-out hover:scale-[1.05] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3"
                aria-label="メニューを閉じる"
                type="button"
              >
                <X className="h-6 w-6 text-black" />
              </button>
            </div>
            
            {/* メニュー項目 */}
            <div className="flex-1 overflow-y-auto py-4">
              {navigationItems.map((item, index) => {
                if (item.type === 'dropdown') {
                  return (
                    <div key={index} className="px-4 py-2">
                      <div className="corp-text-body text-black mb-2">
                        {item.title}
                      </div>
                      <div className="space-y-1">
                        {item.items?.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-3 min-h-[56px] rounded-lg hover:bg-blue-50 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3"
                            onClick={toggleMenu}
                            {...(service.href.startsWith('http') && {
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              'aria-label': `${service.title} - 新しいウィンドウで開きます`
                            })}
                          >
                            <div className="corp-text-body text-black">
                              {service.title}
                            </div>
                            <div className="corp-text-small text-gray-600 mt-1">
                              {service.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={index}
                    href={item.href || '#'}
                    className="block px-8 py-3 min-h-[56px] corp-text-body text-black hover:bg-blue-50 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-blue-500 focus-visible:ring-offset-3"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                )
              })}
            </div>
            
            {/* CTA */}
            <div className="p-4 border-t border-gray-200">
              <LineButton className="w-full" size="large" />
            </div>
          </div>
        </nav>
      </div>
      
      {/* スペーサー - レイアウトシフト防止 - 削除（HomePageでは不要） */}
    </>
  )
})

export default Header
'use client'

import { useState, useEffect, useRef, memo, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

// 🚀 ULTRA SYNC - 限界突破完了！次世代ヘッダー
const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const servicesRef = useRef<HTMLDivElement>(null)
  
  const isHomePage = pathname === '/'
  
  // 🚀 ウルトラパフォーマンス最適化 - メモ化されたクリックハンドラ
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])
  
  const handleServicesToggle = useCallback(() => {
    setIsServicesOpen(prev => !prev)
  }, [])
  
  // 🚀 限界突破 - スクロール検出による動的ヘッダー
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // 🚀 外部クリックでドロップダウンを閉じる（最適化版）
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside, { passive: true })
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  // 🚀 ウルトラシンク最適化 - 戦略的サービス配置
  const services = [
    { href: 'https://portfolio.awakeinc.co.jp/', title: 'ホームページ制作', icon: '🌐' },
    { href: '/services/ai', title: 'AIコンサルティング', icon: '🤖' },
    { href: '/services/ec', title: 'Amazon代理店', icon: '🛒' }
  ]

  // 🚀 限界突破 - 最適化されたナビゲーション構造
  const navigationItems = [
    { href: '/about', title: '会社概要', type: 'internal' as const },
    { title: 'サービス', type: 'dropdown' as const, items: services },
    { href: '/faq', title: 'よくある質問', type: 'internal' as const }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-xl' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-light text-gray-900 hover:text-gray-700"
              aria-label="株式会社Awake ホームページ"
            >
              株式会社Awake
            </Link>
          </div>
          
          {/* 🚀 限界突破！ウルトラシンク・ナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" role="navigation" aria-label="メインナビゲーション">
            {navigationItems.map((item, index) => {
              if (item.type === 'dropdown') {
                return (
                  <div key={index} className="relative" ref={servicesRef}>
                    <button
                      onClick={handleServicesToggle}
                      className="flex items-center text-gray-700 hover:text-indigo-600 font-medium py-2 group transition-colors duration-200"
                      aria-expanded={isServicesOpen}
                    >
                      <span className="mr-1">🚀</span>
                      {item.title}
                      <ChevronDown className={`ml-1 h-4 w-4 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 animate-slide-up">
                        <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100 mb-2">
                          主力サービス
                        </div>
                        {item.items?.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 group transition-all duration-200 rounded-lg"
                            onClick={() => setIsServicesOpen(false)}
                            {...(service.href.startsWith('http') && {
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            })}
                          >
                            <span className="text-lg mr-3">{service.icon}</span>
                            <div>
                              <div className="font-medium">{service.title}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              } else {
                return (
                  <Link 
                    key={index}
                    href={item.href || '#'} 
                    className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                )
              }
            })}
            
            {/* 🔥 ウルトラCTAボタン */}
            <Link 
              href={isHomePage ? "#contact" : "/#contact"}
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg shadow-md shadow-indigo-500/25 transition-all duration-200 flex items-center transform hover:scale-105"
            >
              <span className="mr-2">💬</span>
              お問い合わせ
            </Link>
          </nav>
          
          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-gray-700 hover:text-gray-900 p-2 hover:bg-gray-100 rounded-lg"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">メニューを開く</span>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* 🚀 限界突破！ウルトラモバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item, index) => {
                if (item.type === 'dropdown') {
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center text-gray-900 font-medium px-4 py-2 bg-gray-100 rounded-lg mx-2">
                        <span className="mr-2">🚀</span>
                        {item.title}
                      </div>
                      {item.items?.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center pl-8 pr-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg mx-2"
                          onClick={() => setIsMenuOpen(false)}
                          {...(service.href.startsWith('http') && {
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          })}
                        >
                          <span className="text-lg mr-3">{service.icon}</span>
                          <div>
                            <div className="font-medium">{service.title}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )
                } else {
                  return (
                    <Link 
                      key={index}
                      href={item.href || '#'}
                      className="text-gray-700 hover:text-gray-900 font-medium px-4 py-3 hover:bg-gray-100 rounded-lg mx-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )
                }
              })}
              
              {/* 🔥 ウルトラモバイルCTAボタン */}
              <Link 
                href={isHomePage ? "#contact" : "/#contact"}
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-4 mx-4 rounded-xl font-medium hover:shadow-xl shadow-lg shadow-indigo-500/25 text-center flex items-center justify-center mt-4 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-2">💬</span>
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
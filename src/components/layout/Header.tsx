'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-primary-purple hover:text-primary-purple-dark transition-colors"
              aria-label="株式会社Awake ホームページ"
            >
              株式会社Awake
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="メインナビゲーション">
            <Link 
              href="#features" 
              className="text-gray-700 hover:text-primary-purple transition-colors font-medium"
            >
              特徴
            </Link>
            <Link 
              href="#services" 
              className="text-gray-700 hover:text-primary-purple transition-colors font-medium"
            >
              サービス
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-primary-purple transition-colors font-medium"
            >
              お問い合わせ
            </Link>
            <Link 
              href="#contact" 
              className="bg-primary-purple text-white px-4 py-2 rounded-lg hover:bg-primary-purple-dark transition-colors font-medium"
            >
              無料相談
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-purple focus:outline-none focus:ring-2 focus:ring-primary-purple p-2"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link 
                href="#features" 
                className="block px-3 py-2 text-gray-700 hover:text-primary-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                特徴
              </Link>
              <Link 
                href="#services" 
                className="block px-3 py-2 text-gray-700 hover:text-primary-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                サービス
              </Link>
              <Link 
                href="#contact" 
                className="block px-3 py-2 text-gray-700 hover:text-primary-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
              <Link 
                href="#contact" 
                className="block mx-3 my-2 px-4 py-2 bg-primary-purple text-white rounded-lg hover:bg-primary-purple-dark transition-colors text-center"
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
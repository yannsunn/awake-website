'use client'

import Link from 'next/link'
import { memo } from 'react'

// 🚀 Ultra-Optimized Footer (Toyota Style)
const Footer = memo(function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-light text-white mb-4">株式会社Awake</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              デジタルソリューションで、新しい価値を創造する
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>〒207-0013</p>
              <p>東京都東大和市向原5-1129-61 渡辺ビル1F</p>
              <p className="mt-3">TEL: 050-7115-4948</p>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">サービス</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services/web" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  ホームページ制作
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/ai" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  AIコンサルティング
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/ec" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Amazon代理店サービス
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">お問い合わせ</h3>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                営業時間: 平日 9:00-18:00
              </p>
              <p className="text-gray-400 text-sm">
                初回相談は無料です
              </p>
              <Link 
                href="/#contact"
                className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 株式会社Awake. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
})

export default Footer
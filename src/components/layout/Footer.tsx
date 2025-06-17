'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/assets/images/ogp.jpg"
                alt="株式会社Awake ロゴ"
                width={48}
                height={48}
                className="rounded-lg mr-3"
              />
              <h3 className="text-xl font-bold">株式会社Awake</h3>
            </div>
            <p className="text-gray-300 mb-4">
              革新的なソリューションで企業の成長をサポート
            </p>
            <div className="text-gray-300 leading-relaxed">
              <p>〒207-0013</p>
              <p>東京都東大和市向原5-1129-61 渡辺ビル1F</p>
              <p className="mt-2">TEL: 050-7115-4948</p>
              <p>Email: shop@awakeinc.co.jp</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services/web" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  ホームページ制作
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/ai" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AIコンサルティング
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/ec" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Amazon代理店サービス
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={isHomePage ? "#features" : "/#features"}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  特徴
                </Link>
              </li>
              <li>
                <Link 
                  href={isHomePage ? "#services" : "/#services"}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  サービス
                </Link>
              </li>
              <li>
                <Link 
                  href={isHomePage ? "#contact" : "/#contact"}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  会社概要・代表挨拶
                </Link>
              </li>
              <li>
                <Link 
                  href="/legal/privacy-policy" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link 
                  href="/legal/terms" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Awake Inc. All rights reserved. | 代表取締役: 田形 康貴
          </p>
        </div>
      </div>
    </footer>
  )
}
'use client'

import { memo } from 'react'
import { MessageCircle } from 'lucide-react'
import LineButton from '@/components/ui/LineButton'
import '@/app/corporate.css'

// 🚀 LINEお問い合わせCTA
const ContactForm = memo(function ContactForm() {

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-6 shadow-md border border-blue-100">
          <MessageCircle className="w-10 h-10 text-blue-600" />
        </div>

        <h3 className="corp-heading-2 text-black mb-4">
          LINEでお気軽にご相談
        </h3>

        <p className="corp-text-body text-black mb-8">
          最速で返信！まずはLINEでお話をお聞かせください
        </p>
        
        <div className="space-y-4">
          <LineButton className="w-full" />
          
        </div>
        
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-gray-200">
          <h4 className="corp-heading-3 text-black mb-3">
            こんなご相談ができます
          </h4>
          <ul className="space-y-2 text-left max-w-sm mx-auto">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="corp-text-small text-black">サービスの詳細や料金について</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="corp-text-small text-black">現在の課題の相談</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="corp-text-small text-black">導入事例のご紹介</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="corp-text-small text-black">その他、どんなご質問でもOK</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
})

export default ContactForm
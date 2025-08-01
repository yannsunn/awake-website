'use client'

import { memo } from 'react'
import { MessageCircle } from 'lucide-react'
import { STYLES } from '@/lib/constants'
import LineButton from '@/components/ui/LineButton'

// 🚀 LINEお問い合わせCTA
const ContactForm = memo(function ContactForm() {

  return (
    <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-2xl border-2 border-gray-600 hover:shadow-3xl transition-all duration-300">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-700 rounded-full mb-6 shadow-xl">
          <MessageCircle className="w-10 h-10 text-gray-300" />
        </div>
        
        <h3 className={STYLES.heading.h2.subsection + " text-white mb-4"}>
          LINEでお気軽にご相談
        </h3>
        
        <p className={STYLES.text.body.medium + " text-gray-300 mb-8"}>
          最速で返信！まずはLINEでお話をお聞かせください
        </p>
        
        <div className="space-y-4">
          <LineButton className="w-full" />
          
        </div>
        
        <div className="mt-8 p-6 bg-gray-700/50 rounded-xl shadow-lg border-2 border-gray-600">
          <h4 className={STYLES.heading.h3.emphasis + " text-white mb-3"}>
            こんなご相談ができます
          </h4>
          <ul className="space-y-2 text-left max-w-sm mx-auto">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span className={STYLES.text.description.small + " text-gray-300"}>サービスの詳細や料金について</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span className={STYLES.text.description.small + " text-gray-300"}>現在の課題の相談</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span className={STYLES.text.description.small + " text-gray-300"}>導入事例のご紹介</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✓</span>
              <span className={STYLES.text.description.small + " text-gray-300"}>その他、どんなご質問でもOK</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
})

export default ContactForm
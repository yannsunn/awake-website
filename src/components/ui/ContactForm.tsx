'use client'

import { memo } from 'react'
import { MessageCircle } from 'lucide-react'
import { STYLES } from '@/lib/constants'
import LineButton from '@/components/ui/LineButton'

// 🚀 LINEお問い合わせCTA
const ContactForm = memo(function ContactForm() {

  return (
    <div className="bg-green-50 rounded-2xl p-8 sm:p-12 shadow-sm border border-green-100">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <MessageCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <h3 className={STYLES.heading.h2.subsection + " mb-4"}>
          LINEでお気軽にご相談
        </h3>
        
        <p className={STYLES.text.body.medium + " mb-8"}>
          最速で返信！まずはLINEでお話をお聞かせください
        </p>
        
        <div className="space-y-4">
          <LineButton className="w-full" />
          
        </div>
        
        <div className="mt-8 p-4 bg-white rounded-lg">
          <h4 className={STYLES.heading.h3.emphasis + " mb-3"}>
            こんなご相談ができます
          </h4>
          <ul className="space-y-2 text-left max-w-sm mx-auto">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className={STYLES.text.description.small}>サービスの詳細や料金について</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className={STYLES.text.description.small}>現在の課題の相談</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className={STYLES.text.description.small}>導入事例のご紹介</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className={STYLES.text.description.small}>その他、どんなご質問でもOK</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
})

export default ContactForm
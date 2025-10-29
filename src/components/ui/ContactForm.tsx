'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import LineButton from '@/components/ui/LineButton'


// 🚀 LINEお問い合わせCTA
const ContactForm = memo(function ContactForm() {

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6 shadow-lg shadow-blue-500/30"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MessageCircle className="w-10 h-10 text-white" />
        </motion.div>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          LINEでお気軽にご相談
        </h3>

        <p className="text-base sm:text-lg text-black mb-8">
          最速で返信！まずはLINEでお話をお聞かせください
        </p>
        
        <div className="space-y-4">
          <LineButton className="w-full" />
          
        </div>
        
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-gray-200">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            こんなご相談ができます
          </h4>
          <ul className="space-y-2 text-left max-w-sm mx-auto">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-sm sm:text-base text-black">サービスの詳細や料金について</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-sm sm:text-base text-black">現在の課題の相談</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-sm sm:text-base text-black">導入事例のご紹介</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-sm sm:text-base text-black">その他、どんなご質問でもOK</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
})

export default ContactForm
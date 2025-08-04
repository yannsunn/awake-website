'use client'

import { memo } from 'react'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { TEXT_SHADOW } from '@/lib/ultra-styles'

const FAQ = memo(function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqs = [
    {
      question: 'どんな業種でも対応できますか？',
      answer: 'はい。製造業、サービス業、小売業など、様々な業種のお客様をサポートしています。'
    },
    {
      question: '相談だけでも大丈夫ですか？',
      answer: 'もちろんです。まずは無料相談で、お悩みをお聞かせください。'
    },
    {
      question: '導入後のサポートは？',
      answer: '専任担当者が継続的にサポート。お困りの際はすぐにご対応します。'
    }
  ]

  return (
    <section className="py-20 relative faq-section">
      <div className="absolute inset-0 bg-gray-800/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4" style={TEXT_SHADOW.heading}>
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800/90 border border-gray-700 rounded-lg shadow-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-600/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white" style={TEXT_SHADOW.body}>Q: {faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-200 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 border-t border-gray-600">
                  <p className="text-white" style={TEXT_SHADOW.small}>A: {faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default FAQ
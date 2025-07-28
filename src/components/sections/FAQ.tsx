'use client'

import { memo } from 'react'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

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
    <section className="py-20 bg-white-overlay">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-overlay transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">Q: {faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-600">A: {faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default FAQ
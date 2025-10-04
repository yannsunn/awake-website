'use client'

import { memo } from 'react'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import '@/app/corporate.css'

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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="corp-heading-2 mb-4">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="corp-card">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="corp-text-body font-semibold">Q: {faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-600 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="corp-text-body">A: {faq.answer}</p>
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
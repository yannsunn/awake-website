'use client'

import { memo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { STYLES } from '@/lib/constants'

const AIFaq = memo(function AIFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqs = [
    {
      question: 'AIの知識がなくても大丈夫ですか？',
      answer: 'はい。専門知識は不要です。使いやすさを重視した設計と、丁寧な研修でサポートします。'
    },
    {
      question: 'うちの業界でも使えますか？',
      answer: 'どんな業界でも活用可能です。業界特性に合わせた最適な提案をいたします。'
    },
    {
      question: '導入にどれくらい時間がかかりますか？',
      answer: '最短2週間で効果を実感いただけます。規模により1-3ヶ月で本格稼働が可能です。'
    },
    {
      question: 'セキュリティは大丈夫ですか？',
      answer: 'お客様のデータは厳重に管理。必要に応じてオンプレミス環境での構築も可能です。'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-overlay">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={STYLES.heading.h2.section + " mb-4"}>
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white-overlay border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-overlay transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white">Q: {faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-300 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-300">A: {faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default AIFaq
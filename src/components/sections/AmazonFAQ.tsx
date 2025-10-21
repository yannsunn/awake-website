'use client'

import { memo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import '@/app/corporate.css'

const AmazonFAQ = memo(function AmazonFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqs = [
    {
      question: 'どんな商品でも販売できますか？',
      answer: '基本的に可能ですが、Amazonの規約に準拠した商品に限ります。無料診断で確認いたします。'
    },
    {
      question: '本当に初期費用はかかりませんか？',
      answer: 'はい、完全無料です。商品が売れてから、売上の一定割合をいただく仕組みです。'
    },
    {
      question: '在庫はどうすればいいですか？',
      answer: 'FBA（Amazonの倉庫）への納品をサポート。在庫管理の手間も削減できます。'
    },
    {
      question: '既にAmazonで販売していますが利用できますか？',
      answer: 'もちろんです。現状の改善提案から始めることも可能です。'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-overlay">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="corp-heading-2 mb-4">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-overlay transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-black">Q: {faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-black transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-black">A: {faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default AmazonFAQ
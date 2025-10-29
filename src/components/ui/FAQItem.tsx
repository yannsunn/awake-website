'use client'

import { memo } from 'react'
import { Plus, Minus } from 'lucide-react'


interface FAQItemProps {
  question: string
  answer: string
  index: number
}

// 🚀 統一されたFAQアイテムコンポーネント
const FAQItem = memo(function FAQItem({ question, answer, index }: FAQItemProps) {
  return (
    <details 
      className="group bg-white/60 backdrop-blur-sm border-2 border-gray-300 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50/80 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all duration-200">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold pr-4 text-lg sm:text-xl">
          {question}
        </h3>
        <div className="flex-shrink-0">
          <Plus
            className="h-6 w-6 text-gray-900 group-open:hidden transition-all duration-300"
            aria-hidden="true"
          />
          <Minus
            className="h-6 w-6 text-gray-900 hidden group-open:block transition-all duration-300"
            aria-hidden="true"
          />
        </div>
      </summary>

      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="pt-4 border-t border-gray-100">
          <p className="text-base sm:text-lg text-gray-900">
            {answer}
          </p>
        </div>
      </div>
    </details>
  )
})

export default FAQItem
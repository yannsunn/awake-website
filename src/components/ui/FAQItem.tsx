'use client'

import { memo } from 'react'
import { Plus, Minus } from 'lucide-react'
import { STYLES } from '@/lib/constants'

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
      <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-indigo-50/80 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200">
        <h3 className={`${STYLES.heading.h3.emphasis} pr-4 text-lg sm:text-xl`}>
          {question}
        </h3>
        <div className="flex-shrink-0">
          <Plus 
            className="h-6 w-6 text-indigo-600 group-open:hidden transition-all duration-300" 
            aria-hidden="true"
          />
          <Minus 
            className="h-6 w-6 text-indigo-600 hidden group-open:block transition-all duration-300" 
            aria-hidden="true"
          />
        </div>
      </summary>
      
      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="pt-4 border-t border-gray-100">
          <p className={`${STYLES.text.description.medium} text-gray-200`}>
            {answer}
          </p>
        </div>
      </div>
    </details>
  )
})

export default FAQItem
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
      className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg overflow-hidden"
    >
      <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <h3 className={`${STYLES.heading.h3.emphasis} pr-4`}>
          {question}
        </h3>
        <div className="flex-shrink-0">
          <Plus 
            className="h-5 w-5 text-gray-400 group-open:hidden" 
            aria-hidden="true"
          />
          <Minus 
            className="h-5 w-5 text-gray-400 hidden group-open:block" 
            aria-hidden="true"
          />
        </div>
      </summary>
      
      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="pt-4 border-t border-gray-100">
          <p className={`${STYLES.text.description.medium} text-gray-700`}>
            {answer}
          </p>
        </div>
      </div>
    </details>
  )
})

export default FAQItem
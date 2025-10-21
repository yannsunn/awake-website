'use client'

import { memo, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { SECTION_SPACING, CONTAINER, HEADING, TEXT } from '@/lib/design-system/unified'

const FAQ = memo(function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    })
  }

  return (
    <section className={`${SECTION_SPACING.compact} bg-white`}>
      <div className={CONTAINER.narrow.full}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
          className="text-center mb-12"
        >
          <h2 className={`${HEADING.h3} text-gray-900 mb-4`}>
            よくあるご質問
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-base md:text-lg font-semibold text-gray-900">Q: {faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0 ml-4" />
                </motion.div>
              </motion.button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 border-t border-gray-200">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-sm md:text-base text-gray-700 leading-relaxed"
                      >
                        A: {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default FAQ
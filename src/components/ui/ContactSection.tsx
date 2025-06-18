'use client'

import { memo } from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

// 🚀 Ultra-Optimized Contact Section - Motion-Free UltraSync
const ContactSection = memo(function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            プロジェクトに関するご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
})

export default ContactSection
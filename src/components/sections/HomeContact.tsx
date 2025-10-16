'use client'

import ContactForm from '@/components/ui/ContactForm'
import ContactInfo from '@/components/ui/ContactInfo'
import LineButton from '@/components/ui/LineButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function HomeContact() {
  const contactSection = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={contactSection.ref}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight break-words leading-tight">
            お問い合わせ
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 break-words leading-relaxed">
            まずはお気軽にご相談ください
          </p>

          <div className="mb-16">
            <LineButton className="transform scale-125 shadow-xl" size="large" variant="filled" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

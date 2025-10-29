'use client'

import ContactForm from '@/components/ui/ContactForm'
import ContactInfo from '@/components/ui/ContactInfo'
import LineButton from '@/components/ui/LineButton'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import StandardSection from '@/components/layout/StandardSection'
import { cn, HEADING, TEXT, MARGIN, GRID } from '@/lib/design-system/unified'

export default function HomeContact() {
  const contactSection = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="contact">
      <StandardSection spacing="default" container="default" background="white">
        <div
          ref={contactSection.ref}
          className={cn('text-center', MARGIN['2xl'])}
        >
          <h2 className={cn(HEADING.h2, 'text-gray-900', MARGIN.lg, 'tracking-tight break-words leading-tight')}>
            お問い合わせ
          </h2>
          <p className={cn(TEXT.lead, 'text-gray-700', MARGIN.xl, 'break-words leading-relaxed')}>
            まずはお気軽にご相談ください
          </p>

          <div className={MARGIN['2xl']}>
            <LineButton className="shadow-xl" size="large" variant="filled" />
          </div>
        </div>

        <div className={cn(GRID.two, 'max-w-7xl mx-auto')}>
          <ContactForm />
          <ContactInfo />
        </div>
      </StandardSection>
    </section>
  )
}

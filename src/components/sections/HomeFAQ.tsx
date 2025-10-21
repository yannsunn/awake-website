import FAQ from '@/components/sections/FAQ'
import { SECTION_SPACING } from '@/lib/design-system/unified'

export default function HomeFAQ() {
  return (
    <div className={`relative ${SECTION_SPACING.default} bg-white`}>
      <FAQ />
    </div>
  )
}

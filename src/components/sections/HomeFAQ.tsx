import FAQ from '@/components/sections/FAQ'
import { SECTION_SPACING } from '@/lib/design-system/unified'

export default function HomeFAQ() {
  return (
    <div className={`relative ${SECTION_SPACING.default} bg-gradient-to-br from-blue-50 via-white to-purple-50`}>
      <FAQ />
    </div>
  )
}

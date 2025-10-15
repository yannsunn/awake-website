import PageLayout from '@/components/layout/PageLayout'
import HomeHero from '@/components/sections/HomeHero'
import HomeServices from '@/components/sections/HomeServices'
import ValueProposition from '@/components/sections/ValueProposition'
import HomeMission from '@/components/sections/HomeMission'
import HomeFAQ from '@/components/sections/HomeFAQ'
import HomeContact from '@/components/sections/HomeContact'

export default function HomePageContent() {
  return (
    <PageLayout>
      <HomeHero />
      <HomeServices />
      <ValueProposition />
      <HomeMission />
      <HomeFAQ />
      <HomeContact />
    </PageLayout>
  )
}

import type { Metadata } from 'next'
import HomePageContent from './HomePageContent'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Globe, Brain, ShoppingCart, CheckCircle, Award, Users, Heart } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_DATA } from '@/lib/company-data'
import { STYLES } from '@/lib/constants'
import ContactForm from '@/components/ui/ContactForm'
import ContactInfo from '@/components/ui/ContactInfo'
import LineButton from '@/components/ui/LineButton'
import ValueProposition from '@/components/sections/ValueProposition'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: `Awake Inc. | DXと成長を加速するデジタルパートナー`,
  description: '中小企業のDXを支援。コストを抑えて最大の成果を実現するWebサイト制作・AIコンサルティング・Amazon代理店サービス',
  openGraph: {
    title: 'Awake Inc. | DXと成長を加速するデジタルパートナー',
    description: '中小企業のDXを支援。コストを抑えて最大の成果を実現するWebサイト制作・AIコンサルティング・Amazon代理店サービス',
  },
}

export default function HomePage() {
  return <HomePageContent />
}
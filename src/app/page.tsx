import type { Metadata } from 'next'
import HomePageContent from './HomePageContent'
import { COMPANY_DATA } from '@/lib/company-data'

export const metadata: Metadata = {
  title: `${COMPANY_DATA.basic.name} | ホームページ制作・AIチャットボット開発・Amazon代理店サービス`,
  description: `${COMPANY_DATA.basic.tagline}。${COMPANY_DATA.basic.description}。東京都東大和市を拠点に、中小企業のデジタル化を支援。ホームページ制作132,000円〜、AIチャットボット開発298,000円〜、Amazon代理店サービス手数料10%〜。初期費用を抑えた実用的なソリューションで売上向上を実現します。`,
  keywords: [
    'ホームページ制作',
    'Webサイト制作',
    'AIチャットボット開発',
    '月額制AI顧問',
    'Amazon代理店',
    'EC販売代行',
    '株式会社Awake',
    '中小企業',
    'DX支援',
    '業務効率化',
    '東京都東大和市',
    '適正価格',
    '成果報酬'
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: COMPANY_DATA.url,
    siteName: COMPANY_DATA.basic.name,
    title: `${COMPANY_DATA.basic.name} | ホームページ制作・AIチャットボット開発・Amazon代理店`,
    description: `${COMPANY_DATA.basic.tagline}。${COMPANY_DATA.basic.description}。中小企業のデジタル化を適正価格で支援します。`,
    images: [
      {
        url: `${COMPANY_DATA.url}/assets/images/ogp.jpg`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_DATA.basic.name} - ${COMPANY_DATA.basic.mission}`
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_DATA.basic.name} | ホームページ制作・AIチャットボット開発`,
    description: `${COMPANY_DATA.basic.tagline}。中小企業のための実用的なデジタルソリューション。`,
    images: [`${COMPANY_DATA.url}/assets/images/ogp.jpg`],
  },
  alternates: {
    canonical: COMPANY_DATA.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function HomePage() {
  return <HomePageContent />
}
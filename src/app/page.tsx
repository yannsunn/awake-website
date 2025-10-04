import type { Metadata } from 'next'
import HomePageContent from './HomePageContent'

export const metadata: Metadata = {
  title: 'Awake Inc. | Webサイト制作・AIチャットボット開発・Amazon代理店',
  description: '適正価格で確実な成果を。中小企業向けのWebサイト制作、AIチャットボット開発、Amazon販路開拓を支援します。初期費用を抑えた実用的なデジタルソリューション。',
  openGraph: {
    title: 'Awake Inc. | Webサイト制作・AIチャットボット開発',
    description: '適正価格で確実な成果を。中小企業のための実用的なデジタルソリューション。',
  },
  keywords: ['Webサイト制作', 'AIチャットボット開発', 'Amazon代理店', '中小企業', 'デジタル化', '東京'],
}

export default function HomePage() {
  return <HomePageContent />
}
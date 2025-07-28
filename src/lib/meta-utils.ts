import { Metadata } from 'next'
import { COMPANY_DATA } from './company-data'

// 🚀 統一されたメタデータ生成関数
export function generatePageMetadata(
  title: string,
  description: string,
  path?: string
): Metadata {
  const fullTitle = `${title} | ${COMPANY_DATA.basic.name}`
  const url = path ? `${COMPANY_DATA.url}${path}` : COMPANY_DATA.url
  
  return {
    title: fullTitle,
    description,
    keywords: COMPANY_DATA.metadata.keywords,
    openGraph: {
      title: fullTitle,
      description,
      url,
      images: [COMPANY_DATA.metadata.ogImage],
      siteName: COMPANY_DATA.basic.name,
      type: 'website',
      locale: 'ja_JP'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [COMPANY_DATA.metadata.ogImage]
    },
    alternates: {
      canonical: url
    }
  }
}

// 🎯 サービスページ用メタデータ
export function generateServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  slug: string
): Metadata {
  return generatePageMetadata(
    serviceName,
    serviceDescription,
    `/services/${slug}`
  )
}

// 📄 法務ページ用メタデータ
export function generateLegalMetadata(
  pageName: string,
  pageDescription: string,
  slug: string
): Metadata {
  return generatePageMetadata(
    pageName,
    pageDescription,
    `/legal/${slug}`
  )
}
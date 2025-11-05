import { Metadata } from 'next'
import { COMPANY_DATA } from './company-data'
import { ServiceDetail } from './types/services'

interface GenerateMetadataOptions {
  title?: string
  description?: string
  path?: string
  keywords?: string[]
  noindex?: boolean
}

export function generateMetadata(options: GenerateMetadataOptions): Metadata {
  const {
    title,
    description,
    path = '',
    keywords = [],
    noindex = false
  } = options

  const fullTitle = title 
    ? `${title}${COMPANY_DATA.metadata.baseTitleSuffix}`
    : COMPANY_DATA.metadata.baseTitle

  const url = `${COMPANY_DATA.metadata.ogUrl}${path}`

  return {
    title: fullTitle,
    description: description || COMPANY_DATA.metadata.baseDescription,
    keywords: [...COMPANY_DATA.metadata.keywords, ...keywords],
    authors: [{ name: COMPANY_DATA.basic.name }],
    creator: COMPANY_DATA.basic.name,
    publisher: COMPANY_DATA.basic.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: fullTitle,
      description: description || COMPANY_DATA.metadata.baseDescription,
      url,
      siteName: COMPANY_DATA.basic.name,
      locale: 'ja_JP',
      type: 'website',
      images: [
        {
          url: `${COMPANY_DATA.metadata.ogUrl}/assets/images/ogp.jpg`,
          width: 1200,
          height: 630,
          alt: COMPANY_DATA.basic.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description || COMPANY_DATA.metadata.baseDescription,
      images: [`${COMPANY_DATA.metadata.ogUrl}/assets/images/ogp.jpg`],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical: url,
    },
  }
}

/**
 * サービスページ用メタデータ生成
 */
export function generateServiceMetadata(service: {
  id: string
  title: string
  description: string
  longDescription: string
  href: string
  pricing: ServiceDetail['pricing']
}): Metadata {
  const keywords = [
    service.title,
    'ホームページ制作',
    'Web制作',
    '東大和市',
    '東京都',
    ...COMPANY_DATA.metadata.keywords
  ]

  return generateMetadata({
    title: service.title,
    description: service.longDescription,
    path: service.href,
    keywords
  })
}

/**
 * 簡易版ページメタデータ生成（後方互換性のため）
 * meta-utils.tsからの移行用
 */
export function generatePageMetadata(
  title: string,
  description: string,
  path?: string
): Metadata {
  return generateMetadata({
    title,
    description,
    ...(path && { path })
  })
}

/**
 * 法務ページ用メタデータ生成
 */
export function generateLegalMetadata(
  pageName: string,
  pageDescription: string,
  slug: string
): Metadata {
  return generateMetadata({
    title: pageName,
    description: pageDescription,
    path: `/legal/${slug}`
  })
}
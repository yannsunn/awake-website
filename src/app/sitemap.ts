import { MetadataRoute } from 'next'
import { COMPANY_DATA } from '@/lib/company-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_DATA.url
  const lastModified = new Date()

  return [
    // トップページ - 最優先
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // 主要サービスページ - 高優先度
    {
      url: `${baseUrl}/services/ai`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ec`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // 会社情報 - 中優先度
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // 法的ページ - 低優先度
    {
      url: `${baseUrl}/legal/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/tokusho`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
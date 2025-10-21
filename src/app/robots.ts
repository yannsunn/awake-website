import { MetadataRoute } from 'next'
import { COMPANY_DATA } from '@/lib/company-data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 0,
      },
    ],
    sitemap: `${COMPANY_DATA.url}/sitemap.xml`,
    host: COMPANY_DATA.url,
  }
}
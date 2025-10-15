import { MetadataRoute } from 'next'
import { COMPANY_DATA } from '@/lib/company-data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${COMPANY_DATA.url}/sitemap.xml`,
    host: COMPANY_DATA.url,
  }
}
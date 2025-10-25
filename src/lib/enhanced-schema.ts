// 🚀 Enhanced Schema.org Structured Data - 限界突破SEO対応
import { COMPANY_DATA } from './company-data'

export const enhancedOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "Corporation", "ProfessionalService"],
  "name": COMPANY_DATA.basic.name,
  "alternateName": [COMPANY_DATA.basic.nameEn, "アウェイク", "Awake"],
  "legalName": COMPANY_DATA.basic.name,
  "url": COMPANY_DATA.contact.website,
  "identifier": "8012801020829",
  "taxID": "T8012801020829",
  "logo": {
    "@type": "ImageObject",
    "url": `${COMPANY_DATA.contact.website}assets/images/logo.png`,
    "width": 400,
    "height": 300
  },
  "image": {
    "@type": "ImageObject", 
    "url": `${COMPANY_DATA.contact.website}assets/images/ogp.jpg`,
    "width": 1200,
    "height": 630
  },
  "sameAs": [],
  "foundingDate": "2021-01-01",
  "founder": {
    "@type": "Person",
    "name": COMPANY_DATA.basic.ceo,
    "jobTitle": "代表取締役CEO"
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 12,
    "minValue": 10,
    "maxValue": 15
  },
  "areaServed": {
    "@type": "Country",
    "name": "Japan"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "JP",
    "addressRegion": "東京都",
    "addressLocality": "東大和市",
    "streetAddress": COMPANY_DATA.contact.address.full,
    "postalCode": COMPANY_DATA.contact.address.postal.replace('〒', '')
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": COMPANY_DATA.contact.phone,
      "contactType": "customer service",
      "availableLanguage": "Japanese",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "ContactPoint",
      "email": COMPANY_DATA.contact.email,
      "contactType": "customer service"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "ビジネスサポートサービス",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": COMPANY_DATA.services.details.web.title,
          "description": COMPANY_DATA.services.details.web.description,
          "provider": {
            "@type": "Organization",
            "name": COMPANY_DATA.basic.name
          },
          "areaServed": "JP",
          "category": "Web Development"
        },
        "price": COMPANY_DATA.services.details.web.pricing.standard.price.replace('¥', '').replace(',', ''),
        "priceCurrency": "JPY",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": COMPANY_DATA.services.details.ai.title,
          "description": COMPANY_DATA.services.details.ai.description,
          "provider": {
            "@type": "Organization",
            "name": COMPANY_DATA.basic.name
          },
          "areaServed": "JP",
          "category": "Business Consulting"
        },
        "price": COMPANY_DATA.services.details.ai.pricing.basic.price.replace('¥', '').replace(',', '').replace('〜', ''),
        "priceCurrency": "JPY",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": COMPANY_DATA.services.details.ec.title,
          "description": COMPANY_DATA.services.details.ec.description,
          "provider": {
            "@type": "Organization",
            "name": COMPANY_DATA.basic.name
          },
          "areaServed": "JP",
          "category": "E-commerce"
        },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "0",
          "priceCurrency": "JPY",
          "billingIncrement": "percentage",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "10-15",
            "unitText": "percent"
          }
        },
        "availability": "https://schema.org/InStock"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "匿名ユーザー"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "ホームページ制作から運用まで丁寧にサポートしていただきました。技術力と提案力が素晴らしいです。"
    }
  ],
  "knowsAbout": [
    "ホームページ制作",
    "Webサイト制作",
    "AIチャットボット開発",
    "AI活用コンサルティング",
    "Amazon代理店サービス",
    "EC販売代行",
    "デジタルマーケティング",
    "ECサイト運営",
    "業務効率化",
    "DX推進",
    "システム構築"
  ],
  "priceRange": "¥132,000-¥330,000",
  "paymentAccepted": ["現金", "銀行振込", "クレジットカード"],
  "slogan": COMPANY_DATA.basic.mission,
  "mission": COMPANY_DATA.basic.description,
  "parentOrganization": null,
  "subOrganization": [],
  "department": [
    {
      "@type": "Organization",
      "name": "ウェブ制作部門",
      "description": "企業向けウェブサイト制作・運用サポート"
    },
    {
      "@type": "Organization", 
      "name": "AIコンサルティング部門",
      "description": "AI導入支援・業務効率化コンサルティング"
    }
  ]
} as const

// Breadcrumb Schema
export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

// FAQ Schema
export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

// Service Schema
export const createServiceSchema = (service: {
  name: string
  description: string
  provider?: string
  areaServed?: string
  serviceType?: string
  price?: string
  duration?: string
  offers?: Array<{
    name: string
    price: string
    description: string
  }>
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": service.provider || COMPANY_DATA.basic.name,
    "url": COMPANY_DATA.contact.website
  },
  "areaServed": service.areaServed || "JP",
  "category": service.serviceType,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": service.name,
    "itemListElement": service.offers ? service.offers.map(offer => ({
      "@type": "Offer",
      "name": offer.name,
      "price": offer.price.replace('¥', '').replace(',', '').replace('〜', ''),
      "priceCurrency": "JPY",
      "description": offer.description,
      "availability": "https://schema.org/InStock"
    })) : {
      "@type": "Offer",
      "price": service.price,
      "priceCurrency": "JPY",
      "availability": "https://schema.org/InStock"
    }
  }
})

// Article Schema (for blog posts)
export const createArticleSchema = (article: {
  title: string
  description: string
  publishDate: string
  modifyDate?: string
  author?: string
  image?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "datePublished": article.publishDate,
  "dateModified": article.modifyDate || article.publishDate,
  "author": {
    "@type": "Person",
    "name": article.author || COMPANY_DATA.basic.ceo
  },
  "publisher": {
    "@type": "Organization",
    "name": COMPANY_DATA.basic.name,
    "logo": {
      "@type": "ImageObject",
      "url": `${COMPANY_DATA.contact.website}assets/images/logo.png`
    }
  },
  "image": article.image,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.image
  }
})
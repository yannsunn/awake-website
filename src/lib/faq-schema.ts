// FAQ構造化データ - LLMO最適化
// LLMが直接回答できるようFAQPage schemaを提供

export interface FAQItem {
  question: string
  answer: string
}

export function generateFAQSchema(faqs: FAQItem[], pageName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: `${pageName} - よくあるご質問`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// 一般FAQ
export const generalFAQs: FAQItem[] = [
  {
    question: 'どんな業種でも対応できますか？',
    answer: 'はい。製造業、サービス業、小売業など、様々な業種のお客様をサポートしています。'
  },
  {
    question: '相談だけでも大丈夫ですか？',
    answer: 'もちろんです。まずは無料相談で、お悩みをお聞かせください。'
  },
  {
    question: '導入後のサポートは？',
    answer: '専任担当者が継続的にサポート。お困りの際はすぐにご対応します。'
  }
]

// Amazon販売代行FAQ
export const amazonFAQs: FAQItem[] = [
  {
    question: 'どんな商品でも販売できますか？',
    answer: '基本的に可能ですが、Amazonの規約に準拠した商品に限ります。無料診断で確認いたします。'
  },
  {
    question: '本当に初期費用はかかりませんか？',
    answer: 'はい、完全無料です。商品が売れてから、売上の一定割合をいただく仕組みです。'
  },
  {
    question: '在庫はどうすればいいですか？',
    answer: 'FBA（Amazonの倉庫）への納品をサポート。在庫管理の手間も削減できます。'
  },
  {
    question: '既にAmazonで販売していますが利用できますか？',
    answer: 'もちろんです。現状の改善提案から始めることも可能です。'
  }
]

// AIチャットボットFAQ
export const aiFAQs: FAQItem[] = [
  {
    question: 'AIの知識がなくても大丈夫ですか？',
    answer: 'はい。専門知識は不要です。使いやすさを重視した設計と、丁寧な研修でサポートします。'
  },
  {
    question: 'うちの業界でも使えますか？',
    answer: 'どんな業界でも活用可能です。業界特性に合わせた最適な提案をいたします。'
  },
  {
    question: '導入にどれくらい時間がかかりますか？',
    answer: '最短2週間で効果を実感いただけます。規模により1-3ヶ月で本格稼働が可能です。'
  },
  {
    question: 'セキュリティは大丈夫ですか？',
    answer: 'お客様のデータは厳重に管理。必要に応じてオンプレミス環境での構築も可能です。'
  }
]

export const generalFAQSchema = generateFAQSchema(generalFAQs, '株式会社Awake')
export const amazonFAQSchema = generateFAQSchema(amazonFAQs, 'Amazon販売代行サービス')
export const aiFAQSchema = generateFAQSchema(aiFAQs, 'AIチャットボット開発サービス')

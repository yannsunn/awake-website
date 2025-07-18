// 🚀 MASTER DATA SOURCE - Complete Company Information Unification
export const COMPANY_DATA = {
  basic: {
    name: '株式会社Awake',
    nameEn: 'Awake Inc.',
    ceo: '田形 康貴',
    established: '2020年（令和2年）',
    mission: '適正コストで最大の価値を',
    tagline: '大手の半額で同等以上の成果を実現',
    description: '限られた経営資源を最適配分し、本質的な成長を支援。無駄を削ぎ、必要な投資に集中できる環境を提供します。'
  },
  contact: {
    address: {
      postal: '〒207-0013',
      full: '東京都東大和市向原5-1129-61 渡辺ビル1F'
    },
    phone: '050-7115-4948',
    email: 'shop@awakeinc.co.jp',
    line: '@100usiub',
    lineUrl: 'https://line.me/R/ti/p/@100usiub',
    website: 'https://awakeinc.co.jp/',
    businessHours: {
      weekdays: '平日 9:00-18:00',
      weekend: '土日祝日：お休み'
    }
  },
  services: {
    list: [
      'ホームページ制作',
      'AIコンサルティング', 
      'Amazon代理店サービス',
      '動画編集制作サービス'
    ],
    details: {
      web: {
        title: 'ホームページ制作',
        description: '大手の50%のコストで同等以上の成果を実現',
        longDescription: '大手制作会社の半額以下で、同等以上の品質を提供。無駄な機能を削ぎ、本当に必要な投資に集中できる環境を提供します。',
        href: 'https://portfolio.awakeinc.co.jp/',
        pricing: {
          standard: {
            name: 'スタンダード',
            price: '¥132,000',
            features: ['5ページまで', 'レスポンシブデザイン', '基本SEO対策', 'お問い合わせフォーム', '3週間制作期間']
          },
          premium: {
            name: 'プレミアム',
            price: '¥298,000',
            features: ['10ページまで', 'カスタムデザイン', '高度なSEO対策', 'CMS機能', '6週間制作期間']
          },
          enterprise: {
            name: 'エンタープライズ',
            price: '要相談',
            features: ['ページ数無制限', '完全オリジナル', 'システム連携', '専属サポート', '柔軟な制作期間']
          }
        }
      },
      ai: {
        title: 'AIコンサルティング',
        description: '業務効率化から売上アップまでAIで実現',
        longDescription: '生成AIを活用した業務効率化で、人件費を大幅削減。ChatGPTをはじめとした最新AI技術を導入し、確実に成果を出します。',
        href: '/services/ai',
        pricing: {
          basic: {
            name: 'AI導入コンサルティング',
            price: '¥298,000〜',
            duration: '1ヶ月',
            features: ['業務プロセス効率化診断', 'AI活用による改善提案', '最適なAIツール選定・導入', '社員向け実践指導', '継続的効果測定サポート']
          },
          enterprise: {
            name: '全社DX推進プログラム',
            price: '¥1,000,000〜',
            duration: '6-12ヶ月',
            features: ['DX戦略の策定支援', '段階的なAI導入計画', '組織全体の変革支援', '業務プロセス改善提案', '継続的効果測定・改善']
          }
        }
      },
      ec: {
        title: 'Amazon代理店サービス',
        description: '初期費用0円・完全成果報酬制',
        longDescription: '初期費用0円・完全成果報酬制で安心。商品選定から販売戦略まで、Amazon販売のプロフェッショナルが全面的にサポートいたします。',
        href: '/services/ec',
        pricing: {
          commission: {
            name: 'Amazon特価販売',
            rate: '10%〜15%',
            description: '売上に応じた手数料'
          },
          directShip: {
            name: 'メーカー直送',
            rate: '在庫なし',
            description: 'メーカー様から直接発送'
          },
          warehouse: {
            name: '預託在庫発送',
            rate: '弊社管理',
            description: '預けていただいた在庫から発送'
          }
        }
      },
      video: {
        title: '動画編集制作サービス',
        description: 'AI技術でプロ品質の動画を短納期で制作',
        longDescription: '最新のAI技術を活用し、プロ品質の動画を最短24時間で制作。YouTube・TikTok・Instagram等、各SNSに最適化した動画でエンゲージメントを向上させます。',
        href: '/services/video',
        pricing: {
          basic: {
            name: 'ベーシック',
            price: '¥50,000',
            features: ['YouTube最適化', '基本編集', '24時間納品', 'AI技術活用']
          },
          standard: {
            name: 'スタンダード',
            price: '¥100,000',
            features: ['全SNS対応', '高度編集', '12時間納品', 'エンゲージメント保証']
          },
          premium: {
            name: 'プレミアム',
            price: '¥200,000',
            features: ['オリジナルコンテンツ', '専属サポート', '6時間納品', 'ブランド価値向上']
          }
        }
      }
    }
  },
  consultation: {
    initialFree: true,
    responseTime: '1営業日以内',
    estimateFree: true,
    ndaAvailable: true,
    features: [
      '初回のご相談は無料です',
      '通常1営業日以内にご返信いたします',
      'お見積りも無料で承っております',
      '秘密保持契約の締結も可能です'
    ]
  },
  metadata: {
    baseTitle: '株式会社Awake',
    baseTitleSuffix: ' | 株式会社Awake',
    baseDescription: '株式会社Awakeは、デジタルソリューションを通じて企業の成長を支援し、新しい価値を創造します。',
    keywords: '株式会社Awake, ホームページ制作, AIコンサルティング, Amazon代理店, デジタル変革',
    ogImage: '/assets/images/ogp.jpg',
    ogUrl: 'https://awakeinc.co.jp/'
  }
} as const

// 🚀 Contact Methods - Prioritized by Response Speed
export const CONTACT_METHODS = [
  {
    id: 'line',
    name: '公式LINE',
    icon: 'line',
    priority: 1,
    description: '最も早く対応できます',
    action: {
      type: 'link',
      url: COMPANY_DATA.contact.lineUrl,
      text: 'LINEで問い合わせ',
      id: COMPANY_DATA.contact.line
    },
    color: 'green'
  },
  {
    id: 'phone', 
    name: '電話',
    icon: 'phone',
    priority: 2,
    description: COMPANY_DATA.contact.phone,
    action: {
      type: 'tel',
      url: `tel:${COMPANY_DATA.contact.phone}`,
      text: '電話をかける'
    },
    color: 'blue'
  },
  {
    id: 'email',
    name: 'メール', 
    icon: 'mail',
    priority: 3,
    description: COMPANY_DATA.contact.email,
    action: {
      type: 'mailto',
      url: `mailto:${COMPANY_DATA.contact.email}`,
      text: 'メールを送る'
    },
    color: 'gray'
  }
] as const
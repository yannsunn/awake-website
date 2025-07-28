// 🚀 MASTER DATA SOURCE - Complete Company Information Unification
export const COMPANY_DATA = {
  basic: {
    name: '株式会社Awake',
    nameEn: 'Awake Inc.',
    ceo: '田形 康貴',
    established: '2020年（令和2年）',
    mission: '適正コストで最大の価値を',
    tagline: '高額なIT投資に、もう悩まない。',
    description: '必要最小限の投資で、最大の成果を引き出す経営パートナー',
    subMessage: '無駄を削ぎ落とし、本当に価値のある投資だけに集中。あなたのビジネスに、新しい成長の道筋を作ります。'
  },
  contact: {
    address: {
      postal: '〒207-0013',
      full: '東京都東大和市向原5-1129-61 渡辺ビル1F'
    },
    phone: '050-7115-4948',
    email: 'shop@awakeinc.co.jp',
    line: '@awakeinc',
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
      'Amazon代理店サービス'
    ],
    details: {
      web: {
        title: 'ホームページ制作',
        description: '売上を生むサイトを適正価格で',
        longDescription: 'あなたの商品・サービスの価値を、お客様に正しく伝える。24時間働く営業ツールとして機能するホームページを制作します。',
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
        description: '業務効率化と生産性向上を同時に実現',
        longDescription: '繰り返し作業から解放され、より創造的な仕事に時間を使えるように。あなたの会社に最適なAI活用方法をご提案します。',
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
        description: '新しい販路を、リスクなく開拓',
        longDescription: '初期費用0円、在庫リスクなし。売れてから手数料をいただく完全成果報酬制で、新しい販売チャネルに挑戦できます。',
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
  },
  url: 'https://awakeinc.co.jp'
} as const

// 🚀 Contact Methods - Prioritized by Response Speed
export const CONTACT_METHODS = [
  {
    id: 'line',
    name: '公式LINE',
    icon: 'message-circle',
    priority: 1,
    description: '最速で返信！まずはLINEでお気軽に',
    action: {
      type: 'link',
      url: 'https://lin.ee/fIaLAjy',
      text: 'LINEで相談する'
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
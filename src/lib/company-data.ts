// 🚀 MASTER DATA SOURCE - Complete Company Information Unification
export const COMPANY_DATA = {
  basic: {
    name: '株式会社Awake',
    nameEn: 'Awake Inc.',
    ceo: '田形 康貴',
    established: '2021年（令和3年）',
    capital: '150万円',
    employees: '12名（パート・業務委託を含む）',
    mission: '適正コストで最大の価値を',
    tagline: '高額なIT投資に、もう悩まない',
    description: '必要最小限の投資で、最大の成果を引き出す経営パートナー',
    subMessage: '無駄を削ぎ落とし、本当に価値のある投資だけに集中。あなたのビジネスに、新しい成長の道筋を作ります。',
    businessContent: [
      'ホームページ制作・Webサイト開発',
      'AIチャットボット開発・月額制AI顧問',
      'Amazon EC販売代行サービス',
      '業務効率化・DX推進支援'
    ],
    banks: [
      '多摩信用金庫',
      '日本政策公庫'
    ],
    licenses: [
      '古物商許可'
    ]
  },
  contact: {
    address: {
      postal: '〒207-0013',
      full: '東京都東大和市向原5-1129-61 渡辺ビル1F'
    },
    phone: '050-7115-4948',
    email: 'ai.ec@awakeinc.co.jp',
    line: '@awakeinc',
    website: 'https://www.awakeinc.co.jp/',
    businessHours: {
      weekdays: '平日 9:00-18:00',
      weekend: '土日祝日：お休み'
    }
  },
  services: {
    list: [
      'ホームページ制作',
      'AIチャットボット開発',
      'Amazon代理店サービス'
    ],
    details: {
      web: {
        title: 'チャットボット搭載\nホームページ制作',
        description: '売上を生むサイトを適正価格で',
        longDescription: 'あなたの商品・サービスの価値を、お客様に正しく伝える。24時間働く営業ツールとして機能するホームページを制作します。',
        href: 'https://portfolio.awakeinc.co.jp/',
        pricing: {
          standard: {
            name: 'スタンダード',
            price: '¥198,000',
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
          },
          chatbotOption: {
            name: 'AIチャットボット導入オプション',
            price: '+¥298,000〜',
            features: ['ホームページ制作プランに追加可能', 'カスタムAIチャットボット開発', 'FAQ学習データ作成', 'Webサイトに完全統合', '運用サポート付き']
          }
        }
      },
      ai: {
        title: '月額制AI顧問・\nシステム導入',
        description: '24時間対応の顧客サポートを実現',
        longDescription: 'カスタマーサポートの自動化から社内業務効率化まで。御社専用のAIチャットボットを開発し、人件費削減と顧客満足度向上を同時に実現します。',
        href: '/services/ai',
        pricing: {
          basic: {
            name: 'AIチャットボット開発',
            price: '¥298,000〜',
            duration: '1-3ヶ月',
            features: ['要件定義・設計支援', 'カスタムAIチャットボット開発', 'FAQ学習データ作成', 'Webサイト・LINE連携', '運用・改善サポート（3ヶ月）']
          },
          aiCommon: {
            name: 'AI顧問（月額制）',
            price: '¥33,000〜',
            duration: '月額',
            features: ['AI活用の継続的支援', '月次レポート・改善提案', '優先サポート対応', 'AI技術アップデート対応', '定期的なコンサルティング'],
            tiers: [
              {
                size: 'ベーシック',
                employees: '3名まで',
                price: '¥33,000/月（税込）',
                features: ['基本的なAI活用支援', '月1回のオンライン相談', 'メールサポート']
              },
              {
                size: 'プロフェッショナル',
                employees: '3名以上',
                price: '¥66,000/月（税込）',
                features: ['AI活用戦略立案支援', '月2回のオンライン相談', 'チャットサポート', '月次レポート']
              },
              {
                size: 'エンタープライズ',
                employees: '大企業規模',
                price: '要相談',
                features: ['全社的AI戦略策定', '週2回以上の定期MTG', '専任チーム配置', 'カスタム開発支援']
              }
            ]
          },
          enterprise: {
            name: 'AI業務自動化・DX推進',
            price: '要相談',
            duration: '6-12ヶ月',
            features: ['業務プロセス分析・改善提案', 'AIチャットボット＋自動化システム開発', '社員向けAI研修プログラム', 'システム間連携構築', '継続的効果測定・改善']
          }
        }
      },
      ec: {
        title: 'Amazon代理店\nサービス',
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
    keywords: '株式会社Awake, チャットボット搭載ホームページ制作, 月額制AI顧問, AIシステム導入, Amazon代理店, デジタル変革',
    ogImage: '/assets/images/ogp.jpg',
    ogUrl: 'https://www.awakeinc.co.jp/'
  },
  url: 'https://www.awakeinc.co.jp'
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
// 🚀 MASTER DATA SOURCE - Complete Company Information Unification
export const COMPANY_DATA = {
  basic: {
    name: '株式会社Awake',
    nameEn: 'Awake Inc.',
    ceo: '田形 康貴',
    established: '2020年（令和2年）',
    mission: '適正コストで最大の価値を',
    tagline: '7年300社の失敗事例から生まれた、確実に成果を出すIT投資の新常識',
    description: '多くの企業がIT投資で失敗する理由を知り尽くした私たちだからこそ、確実に成果が出る方法をお伝えできます。大手の半額で実現できる秘密は、無駄を徹底的に排除し、本当に必要な投資だけに集中するシステムにあります。',
    uniqueValue: {
      whyHalfPrice: '大手は営業費、広告費、管理費で総コストの60%を占めます。私たちは技術力で勝負し、これらの無駄を排除。お客様が本当に必要な価値にのみ投資いただけます。',
      guaranteedResults: '300社以上の失敗事例を分析し、成果が出る条件を完全に体系化。3か月で投資回収できなければ、無料でサポートを延長します。',
      continuityRate: '95%の継続率が証明する圧倒的な満足度。一度利用すれば手放せない品質と効果を実感いただけます。'
    },
    achievements: {
      companies: '300社以上',
      continuityRate: '95%',
      roiPeriod: '平均3か月',
      costReduction: '平均50%',
      yearlySupported: '7年間'
    }
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
        description: '300万円の見積もりに驚愕した経営者が、132,000円で同等サイトを手に入れた理由',
        longDescription: '「なぜこんなに高いのか？」多くの経営者が制作会社の見積もりを見て感じる疑問。私たちは7年間で100社以上の制作を手がけ、大手が高額な理由を解明しました。営業費60%、広告費20%、管理費20%。実際の制作は全体の30%以下。だからこそ、132,000円で大手と同等のサイトを制作できるのです。',
        href: 'https://portfolio.awakeinc.co.jp/',
        emotionalHook: '高額な見積もりを見て諦めていた経営者が、予算内で理想のサイトを手に入れた瞬間の喜び',
        problemSolving: '大手制作会社の高額見積もりの正体を暴き、本当に必要な投資だけに集中',
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
        description: '月40時間のムダ作業で疲弊していた社員が、AIで自動化して本業に集中できた秘密',
        longDescription: '「また今日も残業...」ルーティンワークに追われる社員の姿を見て、心を痛めている経営者の方へ。私たちは50社以上のAI導入で、平均70%の業務効率化を実現してきました。単純作業を自動化し、人間にしかできないクリエイティブな仕事に集中できる環境を作り上げます。',
        href: '/services/ai',
        emotionalHook: '残業続きで疲弊していた社員が、AIで業務が自動化され、定時退社できるようになった感動',
        problemSolving: 'ルーティンワークによる人材の疲弊と、本来の価値創造業務への集中不足を解決',
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
        description: '在庫リスクに怯える経営者が、初期費用0円でAmazon売上300%を達成した奇跡',
        longDescription: '「在庫が売れなかったらどうしよう...」EC参入への不安を抱える経営者の方へ。私たちは7年間で100社以上のAmazon販売を成功させ、平均売上300%増を実現してきました。初期費用0円、在庫リスクゼロで、完全成果報酬制だから安心してスタートできます。',
        href: '/services/ec',
        emotionalHook: '在庫リスクに怯えていた経営者が、安心してEC事業を拡大できた安堵感',
        problemSolving: '在庫リスクと初期投資への不安を解消し、確実に売上を増やす仕組みを提供',
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
        description: '月100万円の広告費で結果が出ない経営者が、動画マーケティングで売上300%を達成した秘密',
        longDescription: '「広告費をかけても売上が上がらない...」デジタルマーケティングに悩む経営者の方へ。私たちは最新のAI技術と7年間の動画制作経験を組み合わせ、視聴完了率80%を実現する動画を最短24時間で制作します。顔出し不要で、ブランド価値を向上させる動画マーケティングを提供します。',
        href: '/services/video',
        emotionalHook: '高額な広告費に悩んでいた経営者が、動画マーケティングで確実に売上を増やせた安心感',
        problemSolving: '効果の見えない広告費の無駄遣いを解消し、確実に成果が出る動画マーケティングを実現',
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
    limitedSlots: '月3社限定',
    features: [
      '【今月限定】初回相談完全無料（通常22,000円相当）',
      '300社分析から生まれた「失敗しないIT投資診断」を実施',
      '現在の課題を3か月で解決する具体的プランを提示',
      '投資回収シミュレーションを数値で明確化',
      '秘密保持契約締結で安心してご相談いただけます'
    ],
    urgencyElements: {
      monthlyLimit: '月3社限定の丁寧なサポート',
      freeConsultation: '今月限定：初回相談無料',
      guaranteedResponse: '24時間以内の必ず返信保証',
      exclusiveOffer: '相談者限定特典：追加機能無料'
    }
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
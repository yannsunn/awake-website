// 🚀 Unified Company Data - Ultra-Optimized Single Source of Truth
export const COMPANY_DATA = {
  basic: {
    name: '株式会社Awake',
    nameEn: 'Awake Inc.',
    ceo: '田形 康貴',
    established: '2023年',
    mission: 'デジタルソリューションで、新しい価値を創造する'
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
    businessHours: {
      weekdays: '平日 9:00-18:00',
      weekend: '土日祝日：お休み'
    }
  },
  services: [
    'ホームページ制作',
    'AIコンサルティング', 
    'Amazon代理店サービス'
  ],
  consultation: {
    initialFree: true,
    responseTime: '1営業日以内',
    estimateFree: true,
    ndaAvailable: true
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
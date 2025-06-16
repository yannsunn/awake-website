// Company information constants
export const COMPANY_INFO = {
  name: '株式会社Awake',
  nameEn: 'Awake Inc.',
  ceo: '田形 康貴',
  address: '〒207-0013 東京都東大和市向原5-1129-61 渡辺ビル1F',
  phone: '050-7115-4948',
  email: 'shop@awakeinc.co.jp',
  website: 'https://awake-website.netlify.app/',
  businessHours: '平日 9:00-18:00',
} as const

// Core Service Portfolio - Neuro-design optimized for professional corporate focus
export const SERVICES = {
  web: {
    title: 'ホームページ制作・LP制作',
    description: '【コンバージョン率3倍改善】戦略的UX設計とニューロマーケティングで売上直結サイトを構築。データ分析と継続改善で確実な成果を実現。',
    icon: 'web',
    color: '#1e40af',
    href: '/services/web',
    features: ['売上直結設計', 'SEO最適化', 'レスポンシブ対応', 'A/Bテスト実装'],
    results: 'コンバージョン率平均3倍向上',
  },
  ec: {
    title: 'Amazon代理店サービス',
    description: '【初期費用0円・完全成果報酬】Amazon販売のプロが商品選定から販売戦略まで全て代行。売上が上がってから手数料をいただく安心システム。',
    icon: 'ec',
    color: '#1e40af',
    href: '/services/ec',
    features: ['商品リサーチ', '販売戦略立案', '広告運用', '在庫管理'],
    results: '平均売上増加率250%',
  },
  video: {
    title: '動画編集制作',
    description: '【エンゲージメント5倍向上】ブランド価値を高める高品質動画制作。YouTube・SNS最適化で視聴者の心を掴み、売上向上を実現。',
    icon: 'video',
    color: '#1e40af',
    href: '/services/video',
    features: ['プロ品質編集', 'SNS最適化', 'ブランディング', 'エフェクト制作'],
    results: 'エンゲージメント平均5倍向上',
  },
  ai: {
    title: 'AI研修・AIコンサルティング',
    description: '【業務効率70%向上】ChatGPT基礎からDX推進まで包括サポート。実践的研修(1時間/¥5,000)とコンサル(1ヶ月/¥298,000)で企業変革を実現。',
    icon: 'ai',
    color: '#1e40af',
    href: '/services/ai',
    features: ['ChatGPT研修', 'DX戦略立案', '業務自動化', '継続サポート'],
    results: '業務効率平均70%向上',
  },
} as const

// Navigation items
export const NAVIGATION = [
  { href: '#features', label: '特徴' },
  { href: '#services', label: 'サービス' },
  { href: '#contact', label: 'お問い合わせ' },
] as const

// Footer links
export const FOOTER_LINKS = {
  services: [
    { href: '/services/web', label: 'ホームページ制作・LP制作' },
    { href: '/services/ec', label: 'Amazon代理店サービス' },
    { href: '/services/video', label: '動画編集制作' },
    { href: '/services/ai', label: 'AI研修・AIコンサルティング' },
  ],
  company: [
    { href: '#features', label: '特徴' },
    { href: '#services', label: 'サービス' },
    { href: '#contact', label: 'お問い合わせ' },
    { href: '/legal/privacy-policy', label: 'プライバシーポリシー' },
    { href: '/legal/terms', label: '利用規約' },
  ],
} as const

// Professional button styles - Neuro-design optimized for corporate branding
export const BUTTON_STYLES = {
  primary: 'bg-corporate-blue-800 text-white px-8 py-4 rounded-md font-semibold hover:bg-corporate-blue-900 transition-colors duration-200 focus:ring-2 focus:ring-corporate-blue-300 focus:outline-none',
  secondary: 'border-2 border-corporate-blue-800 text-corporate-blue-800 px-8 py-4 rounded-md font-semibold hover:bg-corporate-blue-800 hover:text-white transition-colors duration-200 focus:ring-2 focus:ring-corporate-blue-300 focus:outline-none',
  outline: 'border border-gray-300 text-gray-700 px-8 py-4 rounded-md font-medium hover:bg-gray-50 transition-colors duration-200 focus:ring-2 focus:ring-gray-200 focus:outline-none',
  minimal: 'text-corporate-blue-800 px-4 py-2 font-medium hover:text-corporate-blue-900 hover:bg-corporate-blue-50 rounded transition-colors duration-200',
} as const

// Professional animation classes - Subtle and corporate-appropriate
export const ANIMATIONS = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  subtle: 'transition-all duration-200 ease-in-out',
  hover: 'transition-all duration-200 hover:translate-y-[-2px]',
  card: 'transition-all duration-200 hover:shadow-md',
} as const

// Professional color palette
export const COLORS = {
  corporate: {
    blue: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    }
  }
} as const
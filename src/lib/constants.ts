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

// Service information
export const SERVICES = {
  web: {
    title: 'HP制作・LP制作',
    description: 'モダンで高品質なウェブサイトを最短1週間で制作。SEO対策・レスポンシブ対応・高速表示を実現します。',
    icon: '🌐',
    gradient: 'from-blue-500 to-purple-600',
    href: '/services/web',
  },
  ec: {
    title: 'EC通販代理販売',
    description: '初期費用0円・成果報酬型でメーカー・問屋・OEM商品をワンストップで販売代行。リスクゼロで売上最大化。',
    icon: '🛒',
    gradient: 'from-green-500 to-teal-600',
    href: '/services/ec',
  },
  video: {
    title: '動画編集・制作',
    description: 'AI技術活用で顔出し不要・SNS最適化。YouTube・TikTok・Instagram等のプロ動画制作。',
    icon: '🎬',
    gradient: 'from-purple-500 to-pink-600',
    href: '/services/video',
  },
  furniture: {
    title: '家具製作',
    description: '世界に一つだけのオーダーメイド家具を完全カスタムで製造。職人の技術で理想を形にします。',
    icon: '🪑',
    gradient: 'from-orange-500 to-red-600',
    href: '/services/furniture',
  },
  kurumira: {
    title: 'CLEMIRA直販店',
    description: '代理店を通さない直販価格で量子エネルギーデバイス「CLEMIRA」を提供。身体機能向上をサポート。',
    icon: '⚡',
    gradient: 'from-orange-600 to-red-700',
    href: '/services/kurumira',
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
    { href: '/services/web', label: 'HP制作・LP制作' },
    { href: '/services/ec', label: 'EC通販代理販売' },
    { href: '/services/video', label: '動画編集・制作' },
    { href: '/services/furniture', label: '家具製作' },
    { href: '/services/kurumira', label: 'CLEMIRA直販店' },
  ],
  company: [
    { href: '#features', label: '特徴' },
    { href: '#services', label: 'サービス' },
    { href: '#contact', label: 'お問い合わせ' },
    { href: '/legal/privacy-policy', label: 'プライバシーポリシー' },
    { href: '/legal/terms', label: '利用規約' },
  ],
} as const

// Common button styles
export const BUTTON_STYLES = {
  primary: 'bg-primary-purple text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-purple-dark transition-colors',
  secondary: 'border-2 border-primary-purple text-primary-purple px-8 py-4 rounded-lg font-bold hover:bg-primary-purple hover:text-white transition-colors',
  white: 'bg-white text-primary-purple px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors',
} as const

// Animation classes
export const ANIMATIONS = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  bounceGentle: 'animate-bounce-gentle',
  hover: 'transition-all duration-300 hover:scale-105',
  card: 'transition-all duration-300 hover:shadow-xl hover:shadow-glow',
} as const
// Ultra Responsive Design System - 限界突破のレスポンシブ最適化

// ブレークポイント定義（モバイルファースト）
export const BREAKPOINTS = {
  xs: '360px',   // 小型スマートフォン
  sm: '640px',   // スマートフォン
  md: '768px',   // タブレット
  lg: '1024px',  // デスクトップ
  xl: '1280px',  // 大型デスクトップ
  '2xl': '1536px' // ウルトラワイド
} as const

// フォントサイズのクランプ関数（流動的サイズ調整）
export const clampSize = (min: string, preferred: string, max: string) => {
  return `clamp(${min}, ${preferred}, ${max})`
}

// レスポンシブフォントサイズ
export const RESPONSIVE_FONT = {
  // ヒーローセクション（最大級）
  hero: {
    xs: 'text-2xl',      // 24px
    sm: 'text-3xl',      // 30px
    md: 'text-4xl',      // 36px
    lg: 'text-5xl',      // 48px
    xl: 'text-6xl',      // 60px
    '2xl': 'text-7xl',   // 72px
    clamp: clampSize('1.875rem', '3vw + 0.5rem', '3rem') // 30px-48px
  },
  // 大見出し
  h1: {
    xs: 'text-xl',       // 20px
    sm: 'text-2xl',      // 24px
    md: 'text-3xl',      // 30px
    lg: 'text-4xl',      // 36px
    xl: 'text-5xl',      // 48px
    clamp: clampSize('1.25rem', '3vw + 0.75rem', '3rem')
  },
  // 中見出し
  h2: {
    xs: 'text-lg',       // 18px
    sm: 'text-xl',       // 20px
    md: 'text-2xl',      // 24px
    lg: 'text-3xl',      // 30px
    xl: 'text-4xl',      // 36px
    clamp: clampSize('1.125rem', '2.5vw + 0.5rem', '2.25rem')
  },
  // 小見出し
  h3: {
    xs: 'text-base',     // 16px
    sm: 'text-lg',       // 18px
    md: 'text-xl',       // 20px
    lg: 'text-2xl',      // 24px
    xl: 'text-3xl',      // 30px
    clamp: clampSize('1rem', '2vw + 0.5rem', '1.875rem')
  },
  // 本文
  body: {
    xs: 'text-sm',       // 14px
    sm: 'text-base',     // 16px
    md: 'text-lg',       // 18px
    lg: 'text-xl',       // 20px
    clamp: clampSize('0.875rem', '1.5vw + 0.25rem', '1.25rem')
  },
  // 小文字
  small: {
    xs: 'text-xs',       // 12px
    sm: 'text-sm',       // 14px
    md: 'text-base',     // 16px
    clamp: clampSize('0.75rem', '1.25vw + 0.25rem', '1rem')
  }
} as const

// レスポンシブパディング
export const RESPONSIVE_PADDING = {
  section: {
    xs: 'py-8 px-4',      // 32px / 16px
    sm: 'py-12 px-6',     // 48px / 24px
    md: 'py-16 px-8',     // 64px / 32px
    lg: 'py-20 px-10',    // 80px / 40px
    xl: 'py-24 px-12',    // 96px / 48px
    '2xl': 'py-32 px-16', // 128px / 64px
    dynamic: 'py-[clamp(2rem,5vw,8rem)] px-[clamp(1rem,3vw,4rem)]'
  },
  container: {
    xs: 'px-4',           // 16px
    sm: 'px-6',           // 24px
    md: 'px-8',           // 32px
    lg: 'px-10',          // 40px
    xl: 'px-12',          // 48px
    dynamic: 'px-[clamp(1rem,4vw,3rem)]'
  },
  card: {
    xs: 'p-4',            // 16px
    sm: 'p-6',            // 24px
    md: 'p-8',            // 32px
    lg: 'p-10',           // 40px
    dynamic: 'p-[clamp(1rem,3vw,2.5rem)]'
  }
} as const

// レスポンシブギャップ
export const RESPONSIVE_GAP = {
  xs: 'gap-4',           // 16px
  sm: 'gap-6',           // 24px
  md: 'gap-8',           // 32px
  lg: 'gap-10',          // 40px
  xl: 'gap-12',          // 48px
  dynamic: 'gap-[clamp(1rem,3vw,3rem)]'
} as const

// グリッドレスポンシブ
export const RESPONSIVE_GRID = {
  cols1: 'grid-cols-1',
  cols2: 'grid-cols-1 sm:grid-cols-2',
  cols3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  cols4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  auto: 'grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))]'
} as const

// フレックスボックスレスポンシブ
export const RESPONSIVE_FLEX = {
  mobileColumn: 'flex flex-col md:flex-row',
  mobileReverse: 'flex flex-col-reverse md:flex-row',
  wrap: 'flex flex-wrap',
  center: 'flex items-center justify-center',
  between: 'flex items-center justify-between',
  responsive: 'flex flex-col sm:flex-row items-center justify-center sm:justify-between'
} as const

// アスペクト比
export const RESPONSIVE_ASPECT = {
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[21/9]',
  portrait: 'aspect-[3/4]',
  golden: 'aspect-[1.618/1]'
} as const

// レスポンシブユーティリティクラスを生成
export const getResponsiveClasses = (
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string,
  xxl?: string
) => {
  const classes = [base]
  if (sm) classes.push(`sm:${sm}`)
  if (md) classes.push(`md:${md}`)
  if (lg) classes.push(`lg:${lg}`)
  if (xl) classes.push(`xl:${xl}`)
  if (xxl) classes.push(`2xl:${xxl}`)
  return classes.join(' ')
}

// ビューポート計算ヘルパー
export const vw = (pixels: number, viewport = 1920) => {
  return `${(pixels / viewport) * 100}vw`
}

export const vh = (pixels: number, viewport = 1080) => {
  return `${(pixels / viewport) * 100}vh`
}

// コンテナクエリ対応
export const CONTAINER_QUERY = {
  sm: '@container (min-width: 640px)',
  md: '@container (min-width: 768px)',
  lg: '@container (min-width: 1024px)',
  xl: '@container (min-width: 1280px)'
} as const

// モバイルファースト最適化クラス
export const MOBILE_FIRST = {
  // タッチターゲット最適化（最小48px）
  touchTarget: 'min-h-[48px] min-w-[48px]',
  // スクロール最適化
  smoothScroll: 'scroll-smooth',
  // オーバースクロール制御
  overscrollNone: 'overscroll-none',
  overscrollContain: 'overscroll-contain',
  // セーフエリア対応
  safeTop: 'pt-[env(safe-area-inset-top)]',
  safeBottom: 'pb-[env(safe-area-inset-bottom)]',
  safeLeft: 'pl-[env(safe-area-inset-left)]',
  safeRight: 'pr-[env(safe-area-inset-right)]',
  // パフォーマンス最適化
  willChange: 'will-change-transform',
  gpuAcceleration: 'transform-gpu',
  backfaceHidden: 'backface-hidden'
} as const

// レスポンシブイメージ最適化
export const RESPONSIVE_IMAGE = {
  // 遅延読み込み
  lazy: 'loading-lazy',
  // オブジェクトフィット
  cover: 'object-cover',
  contain: 'object-contain',
  // レスポンシブサイズ
  full: 'w-full h-auto',
  square: 'w-full aspect-square object-cover',
  // 最適化クラス
  optimized: 'w-full h-auto object-cover loading-lazy'
} as const

// タイポグラフィ最適化
export const RESPONSIVE_TYPOGRAPHY = {
  // 行間の動的調整
  lineHeight: {
    tight: 'leading-tight',     // 1.25
    snug: 'leading-snug',      // 1.375
    normal: 'leading-normal',   // 1.5
    relaxed: 'leading-relaxed', // 1.625
    loose: 'leading-loose',     // 2
    dynamic: 'leading-[clamp(1.4,1.5vw,1.8)]'
  },
  // 文字間隔
  letterSpacing: {
    tighter: 'tracking-tighter', // -0.05em
    tight: 'tracking-tight',     // -0.025em
    normal: 'tracking-normal',   // 0
    wide: 'tracking-wide',       // 0.025em
    wider: 'tracking-wider',     // 0.05em
    widest: 'tracking-widest'    // 0.1em
  },
  // テキスト折り返し
  wrap: {
    normal: 'text-wrap',
    nowrap: 'text-nowrap',
    balance: 'text-balance',
    pretty: 'text-pretty'
  }
} as const

// アニメーション最適化
export const RESPONSIVE_ANIMATION = {
  // reduced motionに対応
  reducedMotion: 'motion-reduce:transition-none motion-reduce:animate-none',
  // スムーズトランジション
  smooth: 'transition-all duration-300 ease-out',
  // インタラクティブ
  interactive: 'transition-all duration-200 ease-out hover:scale-105 active:scale-95',
  // パフォーマンス最適化
  performant: 'will-change-transform transition-transform duration-300 ease-out'
} as const
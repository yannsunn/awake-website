// レスポンシブシステムの統一設定
export const breakpoints = {
  mobile: 'sm:',    // 640px
  tablet: 'md:',    // 768px  
  desktop: 'lg:',   // 1024px
  wide: 'xl:'       // 1280px
} as const

// 統一されたスペーシングシステム
export const spacing = {
  // セクション用パディング
  section: {
    default: 'py-12 md:py-16 lg:py-20',
    compact: 'py-8 md:py-12 lg:py-16',
    large: 'py-16 md:py-20 lg:py-24'
  },
  // コンテナ用パディング
  container: {
    default: 'px-4 md:px-6 lg:px-8',
    tight: 'px-3 md:px-4 lg:px-6',
    wide: 'px-6 md:px-8 lg:px-12'
  },
  // グリッド・フレックスボックス用ギャップ
  gap: {
    default: 'gap-4 md:gap-6 lg:gap-8',
    tight: 'gap-2 md:gap-3 lg:gap-4',
    wide: 'gap-6 md:gap-8 lg:gap-10'
  }
}

// フォントサイズのレスポンシブ設定
export const fontSize = {
  // 見出し
  h1: 'text-2xl md:text-3xl lg:text-4xl',
  h2: 'text-xl md:text-2xl lg:text-3xl',
  h3: 'text-lg md:text-xl lg:text-2xl',
  h4: 'text-base md:text-lg lg:text-xl',
  // 本文
  body: {
    large: 'text-base md:text-lg',
    medium: 'text-sm md:text-base',
    small: 'text-xs md:text-sm'
  },
  // 特殊用途
  hero: 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
  subtitle: 'text-lg md:text-xl lg:text-2xl'
}

// グリッドカラムのレスポンシブ設定（タブレット最適化済み）
export const gridColumns = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  // タブレット特化型
  tablet: {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  }
}

// コンテナ幅の設定
export const maxWidth = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
  screen: 'max-w-screen-xl'
}
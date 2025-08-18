// アクセシビリティ標準の設定
// WCAG 2.1 AAA準拠を目指す

// タッチターゲットサイズ（モバイル向け）
export const touchTarget = {
  // 最小サイズ（44x44px - iOS Human Interface Guidelines）
  minimum: 'min-h-[44px] min-w-[44px]',
  // 推奨サイズ（48x48px - Material Design）
  recommended: 'min-h-[48px] min-w-[48px]',
  // 快適サイズ（56x56px - より操作しやすい）
  comfortable: 'min-h-[56px] min-w-[56px]'
}

// フォーカス表示スタイル
export const focusStyles = {
  // デフォルトのフォーカススタイル
  default: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
  // ハイコントラストモード用
  highContrast: 'focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-4',
  // ダークモード用
  dark: 'focus-visible:ring-blue-400 focus-visible:ring-offset-gray-900'
}

// スクリーンリーダー用クラス
export const srOnly = 'sr-only'
export const notSrOnly = 'not-sr-only'

// アニメーション制御（prefers-reduced-motion対応）
export const animation = {
  // 通常のアニメーション
  default: 'transition-all duration-300 ease-out',
  // 動作軽減設定時のアニメーション
  reduced: 'motion-reduce:transition-none motion-reduce:animate-none'
}

// コントラスト比を考慮した色の組み合わせ
export const colorContrast = {
  // 背景色とテキスト色の組み合わせ（WCAG AAA基準: 7:1以上）
  whiteOnDark: 'bg-gray-900 text-white',
  darkOnWhite: 'bg-white text-gray-900',
  // エラー・警告・成功のアクセシブルな色
  error: 'text-red-700 bg-red-50',
  warning: 'text-amber-700 bg-amber-50',
  success: 'text-green-700 bg-green-50'
}

// ARIAラベルのヘルパー関数
export const ariaLabel = (label: string) => ({
  'aria-label': label
})

export const ariaLabelledBy = (id: string) => ({
  'aria-labelledby': id
})

export const ariaDescribedBy = (id: string) => ({
  'aria-describedby': id
})

// ロール属性のヘルパー
export const role = {
  navigation: { role: 'navigation' },
  main: { role: 'main' },
  banner: { role: 'banner' },
  contentinfo: { role: 'contentinfo' },
  button: { role: 'button' },
  link: { role: 'link' },
  heading: { role: 'heading' },
  list: { role: 'list' },
  listitem: { role: 'listitem' }
}

// タブインデックス
export const tabIndex = {
  focusable: { tabIndex: 0 },
  notFocusable: { tabIndex: -1 }
}
/**
 * @fileoverview プロフェッショナル・コーポレートカラーシステム
 * @description AI生成感を排除した、洗練された企業向けカラーパレット
 *
 * 設計思想:
 * - 派手な多色グラデーションを排除
 * - 単色の深みグラデーション（同系色のみ）
 * - ソリッドカラー + シャドウで立体感を表現
 * - WCAG AAA準拠を維持
 */

/**
 * プロフェッショナルカラーパレット
 * ブランドカラー: コーポレートブルー（#2563eb）
 */
export const PROFESSIONAL_COLORS = {
  // メインブランドカラー - 信頼感のある青
  brand: {
    // ソリッドカラー（推奨）
    primary: '#2563eb',      // Blue 600
    dark: '#1d4ed8',         // Blue 700
    darker: '#1e40af',       // Blue 800
    light: '#3b82f6',        // Blue 500
    lighter: '#60a5fa',      // Blue 400

    // 非常に薄い背景用
    bg: {
      subtle: '#eff6ff',     // Blue 50
      light: '#dbeafe',      // Blue 100
    }
  },

  // グレースケール - 洗練されたニュートラル
  neutral: {
    white: '#ffffff',
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
    black: '#000000',
  },

  // アクセントカラー（控えめ）
  accent: {
    // 成功（緑）
    success: '#059669',      // Emerald 600
    successLight: '#10b981', // Emerald 500

    // 警告（オレンジ）
    warning: '#d97706',      // Amber 600
    warningLight: '#f59e0b', // Amber 500

    // エラー（赤）
    error: '#dc2626',        // Red 600
    errorLight: '#ef4444',   // Red 500
  }
} as const

/**
 * プロフェッショナルグラデーション
 * 単色の深みグラデーションのみ使用（同系色）
 */
export const PROFESSIONAL_GRADIENTS = {
  // アイコン背景用 - 青の単色グラデーション
  icon: {
    // 推奨: ソリッドカラー + シャドウ
    solid: 'bg-blue-600',
    solidWithShadow: 'bg-blue-600 shadow-lg shadow-blue-500/30',

    // 単色グラデーション（控えめ）
    blue: 'bg-gradient-to-br from-blue-500 to-blue-700',
    blueDeep: 'bg-gradient-to-br from-blue-600 to-blue-800',
  },

  // ボタン用 - 青の単色グラデーション
  button: {
    // 推奨: ソリッドカラー
    solid: 'bg-blue-600 hover:bg-blue-700',

    // 単色グラデーション（控えめ）
    blue: 'bg-gradient-to-r from-blue-600 to-blue-700',
  },

  // ボーダー用 - 青の単色グラデーションのみ
  border: {
    // 推奨: ソリッドボーダー
    solid: 'border-2 border-blue-600',
    solidGray: 'border border-gray-200',

    // 単色グラデーション（控えめ）
    blue: 'bg-gradient-to-r from-blue-500 to-blue-700',
  },

  // 背景用 - 非常に薄いグレー系のみ
  background: {
    // 推奨: ソリッドまたは超微妙なグラデーション
    white: 'bg-white',
    graySubtle: 'bg-gradient-to-b from-gray-50 to-white',
    blueSubtle: 'bg-gradient-to-br from-blue-50/30 via-white to-gray-50/30',
  },

  // テキストグラデーション - 青の単色のみ
  text: {
    blue: 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent',
  }
} as const

/**
 * プロフェッショナルシャドウ
 * グラデーションの代わりにシャドウで立体感を表現
 */
export const PROFESSIONAL_SHADOWS = {
  // カード用
  card: {
    default: 'shadow-md hover:shadow-xl transition-shadow duration-300',
    elevated: 'shadow-lg hover:shadow-2xl transition-shadow duration-300',
    subtle: 'shadow-sm hover:shadow-md transition-shadow duration-300',
  },

  // ブランドカラー付きシャドウ（控えめ）
  brand: {
    sm: 'shadow-sm shadow-blue-500/10',
    md: 'shadow-md shadow-blue-500/20',
    lg: 'shadow-lg shadow-blue-500/30',
    xl: 'shadow-xl shadow-blue-500/40',
  },

  // ホバーエフェクト
  hover: {
    lift: 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300',
    liftSubtle: 'hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300',
  }
} as const

/**
 * 移行ガイド: 旧カラーから新カラーへ
 */
export const COLOR_MIGRATION = {
  // 旧: from-blue-500 to-purple-500
  // 新: bg-blue-600 (ソリッド) または from-blue-500 to-blue-700 (単色グラデ)
  iconBackground: {
    old: 'bg-gradient-to-br from-blue-500 to-purple-500',
    new: 'bg-blue-600',
    newWithShadow: 'bg-blue-600 shadow-lg shadow-blue-500/30',
    newGradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
  },

  // 旧: from-blue-500 via-purple-500 to-pink-500
  // 新: border-2 border-blue-600 (ソリッド) または bg-gradient-to-r from-blue-500 to-blue-700
  borderGradient: {
    old: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
    new: 'border-2 border-blue-600',
    newGradient: 'bg-gradient-to-r from-blue-500 to-blue-700',
  },

  // 旧: from-blue-50 via-white to-purple-50
  // 新: bg-white または from-gray-50 to-white
  backgroundGradient: {
    old: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
    new: 'bg-white',
    newSubtle: 'bg-gradient-to-b from-gray-50 to-white',
  },

  // 旧: from-blue-600 to-purple-600
  // 新: bg-blue-600 hover:bg-blue-700
  buttonGradient: {
    old: 'bg-gradient-to-r from-blue-600 to-purple-600',
    new: 'bg-blue-600 hover:bg-blue-700 transition-colors duration-300',
  }
} as const

/**
 * デザイン原則
 *
 * 1. グラデーションは最小限に
 *    - アイコン: ソリッドカラー推奨
 *    - ボタン: ソリッドカラー推奨
 *    - 背景: 白またはごく薄いグレー
 *
 * 2. 立体感はシャドウで表現
 *    - shadow-lg, shadow-xl を活用
 *    - hover時に shadow を強調
 *
 * 3. 色は青系統のみ
 *    - ブランドカラー: #2563eb (Blue 600)
 *    - 紫・ピンクは使用しない
 *
 * 4. コントラスト比を維持
 *    - 全ての色でWCAG AAA準拠
 *    - テキストは gray-900 または white
 */

export default PROFESSIONAL_COLORS

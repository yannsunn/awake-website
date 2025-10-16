/**
 * @fileoverview カラーパレット - HEXベースの統一カラーシステム
 * @description WCAG AAA準拠を考慮したカラースケール（50-900）
 */

/**
 * カラーパレット
 * - プライマリ: ブランドカラー（青紫系）
 * - グレー: UI基盤カラー
 * - セマンティック: 状態表現カラー
 */
export const COLORS = {
  // プライマリ - 信頼感のある青紫（50-900スケール）
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95'
  },

  // グレースケール - 読みやすさ重視（50-900スケール）
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
    900: '#111827'
  },

  // セマンティックカラー - 状態表現
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },

  // WCAG AAA準拠カラー（アクセシビリティ対応）
  accessible: {
    blue: '#0066cc',
    indigo: '#4338ca',
    purple: '#6d28d9',
    text: {
      primary: '#111827',   // gray-900
      secondary: '#374151', // gray-700
      tertiary: '#6b7280'   // gray-500
    },
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',  // gray-50
      tertiary: '#f3f4f6'    // gray-100
    }
  }
} as const

/**
 * カラースケールの型定義
 */
export type ColorScale = typeof COLORS
export type PrimaryColor = keyof typeof COLORS.primary
export type GrayColor = keyof typeof COLORS.gray
export type SemanticColor = keyof typeof COLORS.semantic

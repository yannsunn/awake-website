// テキスト折り返しユーティリティクラス
export const textClasses = {
  // 見出し用クラス
  heading: {
    mobile: 'break-words hyphens-auto',
    desktop: 'whitespace-normal',
    responsive: 'break-words sm:break-normal'
  },
  // 本文用クラス
  body: {
    mobile: 'break-words',
    desktop: 'whitespace-normal',
    responsive: 'break-words sm:whitespace-normal'
  },
  // 折り返し禁止（ボタンやラベル用）
  noWrap: 'whitespace-nowrap truncate',
  // 行数制限
  lineClamp: {
    2: 'line-clamp-2',
    3: 'line-clamp-3',
    4: 'line-clamp-4',
    5: 'line-clamp-5'
  },
  // テキストバランシング（CSS Text Module Level 4）
  balance: 'text-balance',
  pretty: 'text-pretty'
}

// モバイルでのみ改行を許可するクラス
export const mobileBreak = 'inline sm:inline-block'

// レスポンシブな改行制御
export const responsiveBreak = {
  sm: 'block sm:inline',
  md: 'block md:inline',
  lg: 'block lg:inline'
}
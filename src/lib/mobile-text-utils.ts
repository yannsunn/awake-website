/**
 * モバイル（特にiPhone）でのテキスト表示最適化ユーティリティ
 */

// iPhone画面サイズ別の最適な文字数
export const IPHONE_CHAR_LIMITS = {
  'iphone-se': { // 375px
    heading: 12,
    body: 18,
    description: 24
  },
  'iphone': { // 390px
    heading: 13,
    body: 20,
    description: 26
  },
  'iphone-plus': { // 414px
    heading: 14,
    body: 22,
    description: 28
  }
}

// 日本語文字の幅を考慮した改行位置調整
export const japaneseBreakPoints = {
  // 避けるべき行頭文字
  avoidLineStart: ['。', '、', '」', '』', '）', '】', '？', '！', 'ー', '〜'],
  // 避けるべき行末文字
  avoidLineEnd: ['「', '『', '（', '【'],
  // 分割を避けるべき文字組み合わせ
  keepTogether: [
    'です', 'ます', 'でした', 'ました',
    'という', 'といった', 'として',
    'のです', 'のような', 'のために'
  ]
}

/**
 * テキストを最適な位置で改行するためのクラス名を生成
 */
export function getOptimalBreakClass(textLength: number, deviceType: 'mobile' | 'tablet' | 'desktop' = 'mobile') {
  const classes = ['jp-wrap', 'no-orphan']
  
  if (deviceType === 'mobile') {
    // モバイルでは積極的に改行
    classes.push('sm-max:break-all')
    
    // 短いテキストは改行しない
    if (textLength <= 10) {
      classes.push('sm-max:whitespace-nowrap')
    }
    // 中程度のテキストは単語単位で改行
    else if (textLength <= 20) {
      classes.push('sm-max:break-words')
    }
    // 長いテキストは必要に応じて文字単位で改行
    else {
      classes.push('sm-max:break-all')
    }
  }
  
  return classes.join(' ')
}

/**
 * iPhoneでの表示に最適化されたフォントサイズクラス
 */
export const iphoneOptimizedFontSizes = {
  hero: 'text-2xl iphone-se:text-3xl iphone:text-4xl md:text-5xl lg:text-6xl',
  heading: 'text-xl iphone-se:text-2xl iphone:text-3xl md:text-4xl lg:text-5xl',
  subheading: 'text-lg iphone-se:text-xl iphone:text-2xl md:text-3xl lg:text-4xl',
  body: 'text-base iphone:text-lg md:text-xl',
  small: 'text-sm iphone:text-base md:text-lg'
}

/**
 * 文字列を指定文字数で分割（日本語の禁則処理考慮）
 */
export function splitTextWithKinsoku(text: string, maxCharsPerLine: number): string[] {
  const lines: string[] = []
  let currentLine = ''
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    currentLine += char
    
    // 次の文字が禁則文字かチェック
    const nextChar = text[i + 1]
    const shouldBreak = currentLine.length >= maxCharsPerLine &&
      !japaneseBreakPoints.avoidLineStart.includes(nextChar) &&
      !japaneseBreakPoints.avoidLineEnd.includes(char)
    
    if (shouldBreak || i === text.length - 1) {
      lines.push(currentLine)
      currentLine = ''
    }
  }
  
  return lines
}
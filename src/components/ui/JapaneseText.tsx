import React from 'react'
import { cn } from '@/lib/utils'

interface JapaneseTextProps {
  children: React.ReactNode
  className?: string
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  preventOrphans?: boolean
}

/**
 * 日本語テキスト専用コンポーネント
 * iPhoneでの1-2文字の孤立を防ぐ
 */
export function JapaneseText({ 
  children, 
  className = '',
  as: Component = 'p',
  preventOrphans = true
}: JapaneseTextProps) {
  // テキストを処理して孤立文字を防ぐ
  const processText = (text: string): React.ReactNode => {
    // 句読点での分割を避ける
    const punctuation = ['。', '、', '！', '？', '」', '』', '）', '】']
    
    // テキストを処理
    let processed = text
    
    // 句読点の前に最低3文字確保
    punctuation.forEach(p => {
      const regex = new RegExp(`(.{1,2})(${p})`, 'g')
      processed = processed.replace(regex, '\u00A0$1$2') // ノーブレークスペース
    })
    
    // 助詞の孤立を防ぐ
    const particles = ['が', 'を', 'に', 'へ', 'で', 'と', 'や', 'の', 'は', 'も']
    particles.forEach(p => {
      const regex = new RegExp(`(${p})\\s`, 'g')
      processed = processed.replace(regex, '$1\u00A0') // 助詞の後にノーブレークスペース
    })
    
    return processed
  }
  
  // childrenを処理
  const processChildren = (children: React.ReactNode): React.ReactNode => {
    if (typeof children === 'string') {
      return preventOrphans ? processText(children) : children
    }
    
    if (Array.isArray(children)) {
      return children.map((child, index) => {
        if (typeof child === 'string') {
          return preventOrphans ? processText(child) : child
        }
        return child
      })
    }
    
    return children
  }
  
  return (
    <Component 
      className={cn(
        'jp-wrap no-orphan',
        className
      )}
      style={{
        wordBreak: 'keep-all',
        overflowWrap: 'break-word',
        lineBreak: 'strict',
        WebkitHyphens: 'none',
        hyphens: 'none'
      }}
    >
      {processChildren(children)}
    </Component>
  )
}

/**
 * モバイル専用の日本語テキストコンポーネント
 */
export function MobileJapaneseText({ children, className = '', ...props }: JapaneseTextProps) {
  return (
    <JapaneseText
      className={cn('jp-mobile', className)}
      {...props}
    >
      {children}
    </JapaneseText>
  )
}
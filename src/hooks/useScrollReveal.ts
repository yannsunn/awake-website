'use client'

import { useEffect, useCallback, useRef, useState } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  triggerOnce?: boolean
}

interface UseScrollRevealReturn<T extends HTMLElement> {
  elementRef: React.MutableRefObject<T | null>
  isVisible: boolean
}

// 🚀 WCAG 2.1 AAA準拠 スクロールリビール最適化 - 汎用版
export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
): UseScrollRevealReturn<T> => {
  const { threshold = 0.1, triggerOnce = true } = options
  const elementRef = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  
  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }
    
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observerRef.current?.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold }
    )
    
    observerRef.current.observe(element)
    
    return () => {
      observerRef.current?.disconnect()
    }
  }, [threshold, triggerOnce])
  
  return { elementRef, isVisible }
}

// 🚀 WCAG 2.1 AAA準拠 スクロールリビール最適化 - グローバル版
export const useScrollRevealGlobal = () => {
  const observer = useRef<IntersectionObserver | null>(null)
  const elementsRef = useRef<Set<Element>>(new Set())
  
  // WCAG準拠 - 動作軽減設定対応のIntersection Observer
  const initIntersectionObserver = useCallback(() => {
    // prefers-reduced-motionの確認
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if ('IntersectionObserver' in window) {
      observer.current = new IntersectionObserver(
        (entries) => {
          // requestAnimationFrameでバッチ処理
          requestAnimationFrame(() => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // 動作軽減設定の場合は即座に表示
                if (prefersReducedMotion) {
                  entry.target.classList.add('active', 'no-animation')
                } else {
                  entry.target.classList.add('active')
                }
                // 一度表示されたら監視を停止（パフォーマンス向上）
                observer.current?.unobserve(entry.target)
                elementsRef.current.delete(entry.target)
              }
            })
          })
        },
        {
          // 閾値を簡略化
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px' // 50px早めにトリガー
        }
      )
      
      // 既存の.reveal要素を監視
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach((reveal) => {
        elementsRef.current.add(reveal)
        observer.current?.observe(reveal)
      })
      
      return true
    }
    return false
  }, [])
  
  // フォールバック用 - 削除（現代のブラウザは全てIntersectionObserverをサポート）
  
  useEffect(() => {
    // Intersection Observer APIを使用
    initIntersectionObserver()
    
    // クリーンアップ
    return () => {
      observer.current?.disconnect()
      const elements = elementsRef.current
      elements.clear()
    }
  }, [initIntersectionObserver])
}

// 新機能: パララックス効果用の最適化されたスクロールフック
export const useParallaxScroll = (multiplier: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null)
  const ticking = useRef(false)
  
  const updateParallax = useCallback(() => {
    if (!elementRef.current || !ticking.current) return
    
    const scrolled = window.pageYOffset
    const parallax = scrolled * multiplier
    
    elementRef.current.style.transform = `translateY(${parallax}px)`
    ticking.current = false
  }, [multiplier])
  
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateParallax)
      ticking.current = true
    }
  }, [updateParallax])
  
  useEffect(() => {
    // prefers-reduced-motionの確認
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])
  
  return elementRef
}

// 新機能: スムーズスクロール最適化
export const useSmoothScroll = () => {
  const scrollTo = useCallback((target: string | HTMLElement, offset: number = 0) => {
    const element = typeof target === 'string' 
      ? document.querySelector(target) as HTMLElement
      : target
    
    if (!element) return
    
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    // スムーズスクロールの最適化実装
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      // ポリフィル: 手動でスムーズスクロールを実装
      const start = window.pageYOffset
      const distance = offsetPosition - start
      const duration = Math.min(Math.abs(distance) / 2, 1000) // 最大1秒
      let startTime: number | null = null
      
      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = easeInOutQuad(timeElapsed, start, distance, duration)
        window.scrollTo(0, run)
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }
      
      requestAnimationFrame(animation)
    }
  }, [])
  
  return { scrollTo }
}

// イージング関数
function easeInOutQuad(t: number, b: number, c: number, d: number) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t + b
  t--
  return -c / 2 * (t * (t - 2) - 1) + b
}
'use client'

import { useEffect, useCallback, useRef } from 'react'

// Core Web Vitals最適化 - 限界突破スクロールパフォーマンス
export const useScrollReveal = () => {
  const ticking = useRef(false)
  const observer = useRef<IntersectionObserver | null>(null)
  
  // パフォーマンス最適化版 - Intersection Observer API使用
  const initIntersectionObserver = useCallback(() => {
    // モダンブラウザの場合はIntersection Observer APIを使用
    if ('IntersectionObserver' in window) {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
              // 一度表示されたら監視を停止（パフォーマンス向上）
              observer.current?.unobserve(entry.target)
            }
          })
        },
        {
          // より精密な閾値設定
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '0px 0px -100px 0px' // 100px早めにトリガー
        }
      )
      
      // 既存の.reveal要素を監視
      document.querySelectorAll('.reveal').forEach((reveal) => {
        observer.current?.observe(reveal)
      })
      
      return true
    }
    return false
  }, [])
  
  // フォールバック用スクロールハンドラー（パフォーマンス最適化版）
  const handleScrollOptimized = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const reveals = document.querySelectorAll('.reveal:not(.active)')
        const windowHeight = window.innerHeight
        
        reveals.forEach((reveal) => {
          const elementTop = reveal.getBoundingClientRect().top
          const elementVisible = 100
          
          if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active')
          }
        })
        
        ticking.current = false
      })
      ticking.current = true
    }
  }, [])
  
  useEffect(() => {
    // モダンブラウザではIntersection Observer APIを優先使用
    if (!initIntersectionObserver()) {
      // フォールバック: 最適化されたスクロールイベント
      handleScrollOptimized() // 初期チェック
      window.addEventListener('scroll', handleScrollOptimized, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', handleScrollOptimized)
      }
    }
    
    // クリーンアップ
    return () => {
      observer.current?.disconnect()
    }
  }, [initIntersectionObserver, handleScrollOptimized])
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
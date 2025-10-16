'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

/**
 * スクロールアニメーション用カスタムフック
 * 要素が画面に入ったときにアニメーションをトリガー
 */
export function useScrollAnimation<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // パフォーマンス最適化: passive イベントとrequestAnimationFrameを使用
    const observer = new IntersectionObserver(
      ([entry]) => {
        requestAnimationFrame(() => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (triggerOnce && element) {
              observer.unobserve(element)
            }
          } else if (!triggerOnce) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

/**
 * スクロール進捗を追跡するフック
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const maxScroll = documentHeight - windowHeight
      const currentProgress = (scrollTop / maxScroll) * 100

      setProgress(Math.min(Math.max(currentProgress, 0), 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 初期値を設定

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

/**
 * パララックス効果用フック
 */
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const elementTop = element.getBoundingClientRect().top
      const scrolled = window.scrollY
      const parallaxOffset = (scrolled - elementTop) * speed
      setOffset(parallaxOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 初期値を設定

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}

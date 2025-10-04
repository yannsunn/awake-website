'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export const useCursorEffect = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isPointerDevice, setIsPointerDevice] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const trailRef = useRef<{ x: number; y: number; timestamp: number }[]>([])
  const animationRef = useRef<number>()

  // カーソル位置の更新
  const updateCursorPosition = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })

    // トレイルの更新
    const now = Date.now()
    trailRef.current.push({ x: e.clientX, y: e.clientY, timestamp: now })

    // 古いトレイルポイントを削除
    trailRef.current = trailRef.current.filter(
      point => now - point.timestamp < 1000 // 1秒以内のポイントのみ保持
    )
  }, [])

  // タッチデバイスと動作軽減設定の検出
  useEffect(() => {
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setIsPointerDevice(hasPointer)
    setPrefersReducedMotion(reducedMotion)
  }, [])

  // マウスイベントの設定
  useEffect(() => {
    if (!isPointerDevice || prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      animationRef.current = requestAnimationFrame(() => {
        updateCursorPosition(e)
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPointerDevice, updateCursorPosition, prefersReducedMotion])

  return {
    cursorPosition,
    isPointerDevice,
    prefersReducedMotion,
    trail: trailRef.current
  }
}

// 波紋エフェクト用フック
export const useRippleEffect = () => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])

  const createRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples(prev => [...prev, { id, x, y }])

    // 一定時間後に削除
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id))
    }, 1000)
  }, [])

  return { ripples, createRipple }
}

// パルセーションエフェクト（呼吸）
export const usePulseEffect = (baseScale: number = 1, amplitude: number = 0.05) => {
  const [scale, setScale] = useState(baseScale)
  const animationRef = useRef<number>()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = (Math.sin(elapsed * 0.001) + 1) / 2 // 0-1の範囲で振動
      const currentScale = baseScale + (amplitude * progress)

      setScale(currentScale)
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [baseScale, amplitude])

  return scale
}

// 時間経過エフェクト
export const useTimeEffect = () => {
  const [timeSpent, setTimeSpent] = useState(0)
  const [phase, setPhase] = useState<'morning' | 'afternoon' | 'evening' | 'night'>('morning')

  useEffect(() => {
    const startTime = Date.now()

    const updateTime = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000) // 秒単位
      setTimeSpent(elapsed)

      // 30秒ごとにフェーズを変更（デモ用）
      if (elapsed < 30) setPhase('morning')
      else if (elapsed < 60) setPhase('afternoon')
      else if (elapsed < 90) setPhase('evening')
      else setPhase('night')
    }

    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const getGradientColors = () => {
    switch (phase) {
      case 'morning':
        return { start: '#fef3c7', mid: '#fed7aa', end: '#ffedd5' }
      case 'afternoon':
        return { start: '#dbeafe', mid: '#bfdbfe', end: '#93c5fd' }
      case 'evening':
        return { start: '#e9d5ff', mid: '#d8b4fe', end: '#c084fc' }
      case 'night':
        return { start: '#1e293b', mid: '#334155', end: '#475569' }
    }
  }

  return { timeSpent, phase, gradientColors: getGradientColors() }
}

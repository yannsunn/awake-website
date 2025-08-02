'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  color: string
}

export default function OptimizedParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const workerRef = useRef<Worker | null>(null)
  const [isSupported, setIsSupported] = useState(true)
  
  useEffect(() => {
    // OffscreenCanvas対応チェック
    if (typeof OffscreenCanvas === 'undefined') {
      setIsSupported(false)
      return
    }
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    // ワーカーでパーティクル処理
    const offscreen = canvas.transferControlToOffscreen()
    workerRef.current = new Worker(
      new URL('./particle.worker.ts', import.meta.url)
    )
    
    // キャンバスサイズ設定
    const resize = () => {
      workerRef.current?.postMessage({
        type: 'resize',
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    // 初期化
    workerRef.current.postMessage(
      { 
        type: 'init', 
        canvas: offscreen,
        devicePixelRatio: window.devicePixelRatio 
      },
      [offscreen]
    )
    
    resize()
    window.addEventListener('resize', resize)
    
    // マウス追跡
    const handleMouseMove = (e: MouseEvent) => {
      workerRef.current?.postMessage({
        type: 'mouse',
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      workerRef.current?.terminate()
    }
  }, [])
  
  if (!isSupported) {
    // フォールバック: 通常のFloatingParticlesを使用
    const FloatingParticles = require('./FloatingParticles').default
    return <FloatingParticles />
  }
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ 
        mixBlendMode: 'screen',
        opacity: 0.6 
      }}
    />
  )
}
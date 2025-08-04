'use client'

import { useEffect, useRef } from 'react'
import { useCursorEffect } from '@/hooks/useCursorEffect'

export default function CursorLight() {
  const { cursorPosition, isPointerDevice, prefersReducedMotion, trail } = useCursorEffect()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    if (!isPointerDevice || prefersReducedMotion || !canvasRef.current) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // CSS変数から色を取得
    const getColorFromCSS = (varName: string) => {
      const rgb = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim()
      return rgb
    }
    
    const primaryRgb = getColorFromCSS('--effect-primary-rgb')
    const secondaryRgb = getColorFromCSS('--effect-secondary-rgb')
    
    // キャンバスサイズの設定
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)
    
    // アニメーションループ
    let animationId: number
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // グラデーション光源
      const gradient = ctx.createRadialGradient(
        cursorPosition.x, cursorPosition.y, 0,
        cursorPosition.x, cursorPosition.y, 150
      )
      gradient.addColorStop(0, `rgba(${primaryRgb}, 0.3)`)
      gradient.addColorStop(0.5, `rgba(${secondaryRgb}, 0.2)`)
      gradient.addColorStop(1, `rgba(${secondaryRgb}, 0)`)
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // 光の軌跡
      if (trail.length > 1) {
        ctx.beginPath()
        ctx.moveTo(trail[0].x, trail[0].y)
        
        for (let i = 1; i < trail.length; i++) {
          const point = trail[i]
          const prevPoint = trail[i - 1]
          const age = (Date.now() - point.timestamp) / 1000
          const opacity = Math.max(0, 1 - age)
          
          ctx.lineTo(point.x, point.y)
          ctx.strokeStyle = `rgba(${primaryRgb}, ${opacity * 0.5})`
          ctx.lineWidth = Math.max(1, 5 * (1 - age))
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
        }
      }
      
      // パーティクル効果 - 最適化
      const time = Date.now() * 0.001
      ctx.save()
      for (let i = 0; i < 10; i++) { // 20から10に削減
        const angle = (i / 10) * Math.PI * 2
        const radius = 80 + Math.sin(time + i) * 20
        const x = cursorPosition.x + Math.cos(angle) * radius
        const y = cursorPosition.y + Math.sin(angle) * radius
        
        // グラデーションを毎回作成せず、透明度で表現
        ctx.fillStyle = `rgba(${primaryRgb}, ${0.4 - (i * 0.03)})`
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
      
      animationId = requestAnimationFrame(draw)
    }
    
    draw()
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      cancelAnimationFrame(animationId)
    }
  }, [cursorPosition, isPointerDevice, prefersReducedMotion, trail])
  
  if (!isPointerDevice || prefersReducedMotion) return null
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
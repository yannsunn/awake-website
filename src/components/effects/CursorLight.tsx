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
      gradient.addColorStop(0, 'rgba(147, 51, 234, 0.3)')
      gradient.addColorStop(0.5, 'rgba(79, 70, 229, 0.2)')
      gradient.addColorStop(1, 'rgba(79, 70, 229, 0)')
      
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
          ctx.strokeStyle = `rgba(147, 51, 234, ${opacity * 0.5})`
          ctx.lineWidth = Math.max(1, 5 * (1 - age))
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
        }
      }
      
      // パーティクル効果
      const time = Date.now() * 0.001
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2
        const radius = 80 + Math.sin(time + i) * 20
        const x = cursorPosition.x + Math.cos(angle) * radius
        const y = cursorPosition.y + Math.sin(angle) * radius
        
        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, 5)
        particleGradient.addColorStop(0, 'rgba(147, 51, 234, 0.8)')
        particleGradient.addColorStop(1, 'rgba(147, 51, 234, 0)')
        
        ctx.fillStyle = particleGradient
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fill()
      }
      
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
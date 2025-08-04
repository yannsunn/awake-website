'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  
  useEffect(() => {
    // FAQセクションの近くでは非表示にする
    const handleScroll = () => {
      const faqSection = document.querySelector('.faq-section')
      if (faqSection) {
        const rect = faqSection.getBoundingClientRect()
        const isNearFaq = rect.top < window.innerHeight && rect.bottom > 0
        setIsVisible(!isNearFaq)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初回チェック
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
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
    
    // パーティクルの初期化 - 数を削減
    const particles: Particle[] = []
    const particleCount = 20 // 50から20に削減
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // パーティクルを生成
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2
      })
    }
    
    let mouseX = 0
    let mouseY = 0
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    // アニメーションループ
    let animationId: number
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle, i) => {
        // マウスとの距離を計算
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // マウスに反応
        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.vx -= (dx / distance) * force * 0.2
          particle.vy -= (dy / distance) * force * 0.2
        }
        
        // 位置を更新
        particle.x += particle.vx
        particle.y += particle.vy
        
        // 速度を減衰
        particle.vx *= 0.99
        particle.vy *= 0.99
        
        // 画面端で跳ね返る
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx = -particle.vx
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy = -particle.vy
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }
        
        // 描画
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${primaryRgb}, ${particle.opacity})`
        ctx.fill()
        
        // 近くのパーティクルと線を描く - 最適化
        for (let j = i + 1; j < particles.length; j++) {
          const otherParticle = particles[j]
          const dx = otherParticle.x - particle.x
          const dy = otherParticle.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(${primaryRgb}, ${(1 - distance / 150) * 0.2})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ 
        opacity: isVisible ? 0.6 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
    />
  )
}
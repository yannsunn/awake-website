'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  className?: string
  offset?: number
}

export default function ParallaxElement({ 
  children, 
  speed = 0.5, 
  className = '',
  offset = 0
}: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return
      
      const rect = elementRef.current.getBoundingClientRect()
      const elementMiddle = rect.top + rect.height / 2
      const windowMiddle = window.innerHeight / 2
      const distance = elementMiddle - windowMiddle
      
      // パララックス効果の計算
      const parallaxOffset = distance * speed + offset
      setTransform(parallaxOffset)
    }
    
    // 初期位置の設定
    handleScroll()
    
    // スクロールイベントの設定
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed, offset])
  
  return (
    <div 
      ref={elementRef}
      className={`transition-transform duration-75 ${className}`}
      style={{ 
        transform: `translateY(${transform}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  )
}
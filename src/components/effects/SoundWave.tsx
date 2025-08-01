'use client'

import { useEffect, useRef, useState } from 'react'

interface SoundWaveProps {
  active?: boolean
  color?: string
  bars?: number
}

export default function SoundWave({ 
  active = true, 
  color = 'rgba(147, 51, 234, 0.8)',
  bars = 5 
}: SoundWaveProps) {
  const [heights, setHeights] = useState<number[]>(Array(bars).fill(0.3))
  const animationRef = useRef<number>()
  
  useEffect(() => {
    if (!active) {
      setHeights(Array(bars).fill(0.3))
      return
    }
    
    const animate = () => {
      const newHeights = Array(bars).fill(0).map((_, i) => {
        // それぞれのバーに異なる周波数を設定
        const frequency = 0.5 + i * 0.2
        const time = Date.now() * 0.001
        const height = 0.3 + Math.sin(time * frequency) * 0.4 + Math.random() * 0.1
        return Math.max(0.2, Math.min(1, height))
      })
      
      setHeights(newHeights)
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [active, bars])
  
  return (
    <div className="flex items-end gap-1 h-8">
      {heights.map((height, i) => (
        <div
          key={i}
          className="w-1 transition-all duration-200 ease-out rounded-full"
          style={{
            height: `${height * 100}%`,
            backgroundColor: color,
            opacity: active ? 1 : 0.3
          }}
        />
      ))}
    </div>
  )
}
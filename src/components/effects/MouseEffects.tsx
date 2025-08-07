'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ParticleProps {
  x: number
  y: number
  id: number
}

export default function MouseEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<ParticleProps[]>([])
  const [isClient, setIsClient] = useState(false)
  const lastParticleTime = useRef(0)
  const cursorTrailRef = useRef<HTMLDivElement>(null)
  const [cursorScale, setCursorScale] = useState(1)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })

      // パーティクル生成（レート制限付き）
      const now = Date.now()
      if (now - lastParticleTime.current > 50) {
        const newParticle: ParticleProps = {
          x: clientX,
          y: clientY,
          id: Math.random()
        }
        setParticles(prev => [...prev.slice(-20), newParticle])
        lastParticleTime.current = now
      }
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('clickable') ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setCursorScale(1.5)
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setCursorScale(1)
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [isClient])

  // パーティクルの自動削除
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.filter((_, index) => index > prev.length - 15))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isClient) return null

  return (
    <>
      {/* カスタムカーソル */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block"
        style={{ cursor: 'none' }}
      >
        {/* メインカーソル */}
        <motion.div
          ref={cursorTrailRef}
          className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: cursorScale
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 500,
            mass: 0.5
          }}
        >
          <div className={`
            w-full h-full rounded-full border-2 
            ${isHovering ? 'border-purple-400 bg-purple-400/20' : 'border-purple-500/50 bg-purple-500/10'}
            backdrop-blur-sm transition-colors duration-200
          `}>
            <div className="absolute inset-0 rounded-full animate-ping bg-purple-400/30" />
          </div>
        </motion.div>

        {/* カーソルの中心点 */}
        <motion.div
          className="absolute w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{
            type: "spring",
            damping: 50,
            stiffness: 700
          }}
        />

        {/* トレイルエフェクト */}
        <svg className="absolute inset-0 pointer-events-none">
          <defs>
            <linearGradient id="trail-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* パーティクルエフェクト */}
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full"
              initial={{
                x: particle.x - 4,
                y: particle.y - 4,
                scale: 1,
                opacity: 0.8
              }}
              animate={{
                x: particle.x - 4 + (Math.random() - 0.5) * 50,
                y: particle.y - 4 + (Math.random() - 0.5) * 50,
                scale: 0,
                opacity: 0
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut"
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* グローエフェクト */}
      <motion.div
        className="pointer-events-none fixed hidden lg:block z-[9998]"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          mass: 2
        }}
      >
        <div className="w-[400px] h-[400px] rounded-full bg-gradient-radial from-purple-500/10 via-blue-500/5 to-transparent blur-3xl" />
      </motion.div>

      {/* スタイル: デフォルトカーソルを非表示 */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
          a, button, [role="button"], .clickable {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}
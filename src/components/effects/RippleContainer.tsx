'use client'

import { ReactNode } from 'react'
import { useRippleEffect } from '@/hooks/useCursorEffect'

interface RippleContainerProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function RippleContainer({ children, className = '', style }: RippleContainerProps) {
  const { ripples, createRipple } = useRippleEffect()

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={style}
      onClick={createRipple}
    >
      {children}

      {/* 波紋エフェクト */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <span
            className="block animate-ripple"
            style={{
              width: '0px',
              height: '0px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
              animation: 'ripple 1s ease-out forwards'
            }}
          />
        </span>
      ))}

      <style jsx>{`
        @keyframes ripple {
          to {
            width: 400px;
            height: 400px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

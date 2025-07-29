'use client'

import { useEffect, useRef, useState, ReactNode, memo } from 'react'

interface LazyLoadProps {
  children: ReactNode
  className?: string
  offset?: number
  placeholder?: ReactNode
  onLoad?: () => void
}

// 🚀 ULTRA パフォーマンス最適化 - Intersection Observer活用
const LazyLoad = memo(function LazyLoad({
  children,
  className = '',
  offset = 100,
  placeholder,
  onLoad
}: LazyLoadProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!targetRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isIntersecting) {
          setIsIntersecting(true)
          
          // 遅延ロード実行
          requestAnimationFrame(() => {
            setIsLoaded(true)
            onLoad?.()
          })
        }
      },
      {
        rootMargin: `${offset}px`,
        threshold: 0.01
      }
    )

    observer.observe(targetRef.current)

    return () => {
      observer.disconnect()
    }
  }, [offset, isIntersecting, onLoad])

  return (
    <div
      ref={targetRef}
      className={`${className} ${!isLoaded ? 'min-h-[100px]' : ''}`}
    >
      {!isLoaded && placeholder && (
        <div className="animate-pulse">
          {placeholder}
        </div>
      )}
      
      {isLoaded && (
        <div className="animate-fade-in">
          {children}
        </div>
      )}
      
      {!isLoaded && !placeholder && (
        <div className="skeleton h-full w-full min-h-[100px] rounded-lg" />
      )}
    </div>
  )
})

export default LazyLoad

// 🎯 画像専用の遅延読み込みコンポーネント
export const LazyImage = memo(function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false
}: {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState('')
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (priority) {
      setImageSrc(src)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [src, priority])

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 skeleton rounded-lg" />
      )}
      
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  )
})
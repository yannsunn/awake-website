// 🚀 限界突破画像最適化 - Enhanced Image Component
'use client'

import { useState, useCallback, memo } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string
  showLoadingPlaceholder?: boolean
  loadingClassName?: string
  errorClassName?: string
  containerClassName?: string
  onLoadComplete?: () => void
  onError?: () => void
  lazy?: boolean
  quality?: number
  format?: 'webp' | 'avif' | 'auto'
}

const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/assets/images/placeholder.jpg',
  showLoadingPlaceholder = true,
  loadingClassName = '',
  errorClassName = '',
  containerClassName = '',
  onLoadComplete,
  onError,
  lazy = true,
  quality = 85,
  format = 'auto',
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoadComplete?.()
  }, [onLoadComplete])

  const handleError = useCallback(() => {
    setIsError(true)
    setCurrentSrc(fallbackSrc)
    onError?.()
    console.warn(`Image failed to load: ${src}`)
  }, [src, fallbackSrc, onError])

  // 画像形式の最適化
  const optimizedSizes = props.sizes || 
    "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* ローディングプレースホルダー */}
      {showLoadingPlaceholder && !isLoaded && !isError && (
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse",
            "flex items-center justify-center",
            loadingClassName
          )}
          aria-hidden="true"
        >
          <div className="w-8 h-8 bg-gray-400 rounded opacity-30" />
        </div>
      )}

      {/* エラー表示 */}
      {isError && (
        <div 
          className={cn(
            "absolute inset-0 bg-gray-100 flex items-center justify-center",
            "text-gray-400 text-sm",
            errorClassName
          )}
          role="img"
          aria-label="画像を読み込めませんでした"
        >
          <span>画像を読み込めませんでした</span>
        </div>
      )}

      {/* 最適化された画像 */}
      <Image
        src={currentSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazy ? "lazy" : "eager"}
        quality={quality}
        sizes={optimizedSizes}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        // WebP/AVIF対応のための形式指定
        {...(format !== 'auto' && { 
          unoptimized: false
        })}
        {...props}
      />

      {/* 画像説明のスクリーンリーダー対応 */}
      {alt && (
        <span className="sr-only">
          {alt}
        </span>
      )}
    </div>
  )
})

export default OptimizedImage

// 🚀 レスポンシブ画像プリセット
export const ResponsiveImage = memo(function ResponsiveImage({
  src,
  alt,
  aspectRatio = 'auto',
  ...props
}: OptimizedImageProps & {
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto'
}) {
  const aspectRatioClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-4/3',
    '1/1': 'aspect-square',
    'auto': ''
  }

  return (
    <div className={cn(
      "relative w-full",
      aspectRatioClasses[aspectRatio]
    )}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill={aspectRatio !== 'auto'}
        className="object-cover"
        {...props}
      />
    </div>
  )
})

// 🚀 ヒーロー画像専用コンポーネント
export const HeroImage = memo(function HeroImage({
  src,
  alt,
  priority = true,
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      priority={priority}
      quality={90}
      sizes="100vw"
      className="object-cover object-center"
      showLoadingPlaceholder={false}
      {...props}
    />
  )
})

// 🚀 サムネイル画像コンポーネント
export const ThumbnailImage = memo(function ThumbnailImage({
  src,
  alt,
  size = 'md',
  ...props
}: OptimizedImageProps & {
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24', 
    lg: 'w-32 h-32'
  }

  return (
    <div className={cn(
      "relative rounded-lg overflow-hidden",
      sizeClasses[size]
    )}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 128px) 100vw, 128px"
        {...props}
      />
    </div>
  )
})

// 🚀 画像ギャラリー用コンポーネント
export const GalleryImage = memo(function GalleryImage({
  src,
  alt,
  onImageClick,
  ...props
}: OptimizedImageProps & {
  onImageClick?: () => void
}) {
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      onClick={onImageClick}
      role={onImageClick ? "button" : undefined}
      tabIndex={onImageClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onImageClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onImageClick()
        }
      }}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        className="transition-transform duration-300 group-hover:scale-105"
        {...props}
      />
      
      {/* ホバーオーバーレイ */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
    </div>
  )
})
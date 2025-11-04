// 🚀 限界突破画像最適化 - Enhanced Image Component
'use client'

import { useState, useCallback, memo } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'
import { logger } from '@/lib/logger'
import { presetConfig } from '@/lib/imageOptimization'

type ImagePreset = 'hero' | 'thumbnail' | 'gallery' | 'responsive' | 'default'
type AspectRatio = '16/9' | '4/3' | '1/1' | 'auto'
type ThumbnailSize = 'sm' | 'md' | 'lg'

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
  // 統合されたプロパティ
  preset?: ImagePreset
  aspectRatio?: AspectRatio
  thumbnailSize?: ThumbnailSize
  onImageClick?: (() => void) | undefined
}

const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/assets/images/placeholder.jpg',
  showLoadingPlaceholder,
  loadingClassName = '',
  errorClassName = '',
  containerClassName = '',
  onLoadComplete,
  onError,
  lazy = true,
  quality,
  format = 'auto',
  preset = 'default',
  aspectRatio = 'auto',
  thumbnailSize = 'md',
  onImageClick,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  // プリセット設定の取得
  const currentPresetConfig = presetConfig[preset]
  
  // サムネイルサイズの設定
  const getThumbnailSizeClass = (size: ThumbnailSize) => {
    switch (size) {
      case 'sm': return 'w-16 h-16'
      case 'md': return 'w-24 h-24'
      case 'lg': return 'w-32 h-32'
      default: return 'w-24 h-24'
    }
  }

  // アスペクト比の設定
  const getAspectRatioClass = (ratio: AspectRatio) => {
    switch (ratio) {
      case '16/9': return 'aspect-video'
      case '4/3': return 'aspect-4/3'
      case '1/1': return 'aspect-square'
      case 'auto': return ''
      default: return ''
    }
  }

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoadComplete?.()
  }, [onLoadComplete])

  const handleError = useCallback(() => {
    setIsError(true)
    setCurrentSrc(fallbackSrc)
    onError?.()
    logger.warn(`Image failed to load: ${src}`)
  }, [src, fallbackSrc, onError])

  // コンテナクラス名の決定
  const getContainerClassName = () => {
    let baseClass = "relative overflow-hidden"
    
    if (preset === 'thumbnail') {
      baseClass += " rounded-lg " + getThumbnailSizeClass(thumbnailSize)
    } else if (preset === 'gallery') {
      baseClass += " group cursor-pointer rounded-lg"
    } else if (preset === 'responsive') {
      baseClass += " w-full " + getAspectRatioClass(aspectRatio)
    }
    
    return cn(baseClass, containerClassName)
  }

  const handleImageClick = useCallback(() => {
    if (onImageClick) {
      onImageClick()
    }
  }, [onImageClick])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (onImageClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onImageClick()
    }
  }, [onImageClick])
  
  // アクセシビリティ向上のためのaria属性計算
  type AriaProps = {
    role?: 'img' | 'button'
    tabIndex?: 0
    'aria-label'?: string
  }

  const getAriaProps = useCallback((): AriaProps => {
    const props: AriaProps = {}

    if (preset === 'gallery' && onImageClick) {
      props.role = 'button'
      props.tabIndex = 0
      props['aria-label'] = alt ? `${alt} - クリックで拡大` : '画像をクリックで拡大'
    } else {
      props.role = 'img'
      props['aria-label'] = alt || '装飾用画像'
    }

    return props
  }, [preset, onImageClick, alt])

  return (
    <div 
      className={getContainerClassName()}
      onClick={preset === 'gallery' ? handleImageClick : undefined}
      onKeyDown={preset === 'gallery' ? handleKeyDown : undefined}
      {...getAriaProps()}
    >
      {/* WCAG準拠 ローディングプレースホルダー */}
      {(showLoadingPlaceholder ?? currentPresetConfig.showLoadingPlaceholder ?? true) && !isLoaded && !isError && (
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-gray-200/80 to-gray-300/80 backdrop-blur-sm",
            "flex items-center justify-center",
            loadingClassName
          )}
          aria-hidden="true"
          role="status"
          aria-label="画像読み込み中"
        >
          <div className="w-8 h-8 bg-gray-400 rounded-full animate-pulse" />
          <span className="sr-only">画像を読み込んでいます...</span>
        </div>
      )}

      {/* WCAG準拠 エラー表示 */}
      {isError && (
        <div 
          className={cn(
            "absolute inset-0 bg-red-50 border-2 border-red-200 flex flex-col items-center justify-center",
            "text-red-600 text-sm font-medium p-4",
            errorClassName
          )}
          role="alert"
          aria-live="polite"
          aria-label="画像読み込みエラー"
        >
          <svg className="w-8 h-8 mb-2 text-red-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
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
        quality={quality || currentPresetConfig.quality}
        sizes={props.sizes || currentPresetConfig.sizes}
        priority={props.priority ?? currentPresetConfig.priority}
        fill={preset === 'thumbnail' || (preset === 'responsive' && aspectRatio !== 'auto')}
        className={cn(
          isLoaded ? "opacity-100" : "opacity-0",
          currentPresetConfig.className,
          className
        )}
        // WebP/AVIF対応のための形式指定
        {...(format !== 'auto' && { 
          unoptimized: false
        })}
        {...props}
      />

      {/* WCAG準拠 ギャラリーホバーオーバーレイ */}
      {preset === 'gallery' && (
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 ease-out focus-within:bg-opacity-10" />
      )}

      {/* WCAG AAA準拠 画像説明のスクリーンリーダー対応 */}
      {alt && preset !== 'gallery' && (
        <span className="sr-only">
          {alt}
        </span>
      )}
    </div>
  )
})

export default OptimizedImage

// 🚀 便利なプリセット関数（後方互換性のため）
export const ResponsiveImage = memo(function ResponsiveImage({
  aspectRatio = 'auto',
  ...props
}: OptimizedImageProps & {
  aspectRatio?: AspectRatio
}) {
  return (
    <OptimizedImage
      preset="responsive"
      aspectRatio={aspectRatio}
      {...props}
    />
  )
})

export const HeroImage = memo(function HeroImage({
  priority = true,
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      preset="hero"
      priority={priority}
      {...props}
    />
  )
})

export const ThumbnailImage = memo(function ThumbnailImage({
  size = 'md',
  ...props
}: OptimizedImageProps & {
  size?: ThumbnailSize
}) {
  return (
    <OptimizedImage
      preset="thumbnail"
      thumbnailSize={size}
      {...props}
    />
  )
})

export const GalleryImage = memo(function GalleryImage({
  onImageClick,
  ...props
}: OptimizedImageProps & {
  onImageClick?: (() => void) | undefined
}) {
  return (
    <OptimizedImage
      preset="gallery"
      onImageClick={onImageClick}
      {...props}
    />
  )
})
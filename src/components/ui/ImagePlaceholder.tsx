'use client'

import { memo } from 'react'
import Image from 'next/image'

interface ImagePlaceholderProps {
  src?: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  showPlaceholder?: boolean
}

/**
 * 画像プレースホルダーコンポーネント
 * srcが指定されていない場合、プレースホルダーを表示
 * 画像を後から簡単に追加できるように設計
 */
const ImagePlaceholder = memo(function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  sizes,
  showPlaceholder = true
}: ImagePlaceholderProps) {
  // 画像が指定されている場合は通常のImageコンポーネントを返す
  if (src) {
    if (fill) {
      return (
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          priority={priority}
          sizes={sizes}
        />
      )
    }
    return (
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={className}
        priority={priority}
        sizes={sizes}
      />
    )
  }

  // プレースホルダーを表示しない場合は何も表示しない
  if (!showPlaceholder) {
    return null
  }

  // プレースホルダーを表示
  return (
    <div
      className={`flex items-center justify-center bg-gray-100 ${className}`}
      style={fill ? {} : { width: width || 800, height: height || 600 }}
      role="img"
      aria-label={`${alt}の画像プレースホルダー`}
    >
      <div className="text-center p-6">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="mt-2 text-sm text-gray-600">{alt}</p>
      </div>
    </div>
  )
})

export default ImagePlaceholder

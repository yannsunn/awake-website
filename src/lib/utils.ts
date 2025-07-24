import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind CSS クラス結合ユーティリティ
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
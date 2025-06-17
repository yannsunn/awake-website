// 🚀 Ultra-Optimized Animation Library
// パフォーマンス最適化されたアニメーション定義の統一管理

import type { Variants } from 'framer-motion'

// 🎯 共通アニメーションバリアント（GPU最適化済み）
export const commonAnimations = {
  // フェードイン（基本）
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    }
  } as Variants,

  // フェードインアップ（軽量版）
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  } as Variants,

  // スタガーコンテナ（最適化済み）
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  } as Variants,

  // スケールアニメーション（GPU最適化）
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1],
        // GPU最適化用
        transformOrigin: 'center'
      }
    }
  } as Variants,

  // ロゴアニメーション（特別最適化）
  logoReveal: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.2
      }
    }
  } as Variants
}

// 🎯 高性能なViewport設定（メモリ最適化）
export const optimizedViewport = {
  once: true,
  amount: 0.2,
  margin: "-100px"
} as const

// 🎯 ホバーエフェクト（軽量版）
export const hoverEffects = {
  scale: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: "easeOut" }
  },
  
  subtle: {
    whileHover: { y: -2 },
    transition: { duration: 0.2, ease: "easeOut" }
  }
} as const

// 🎯 パフォーマンス最適化用設定
export const motionConfig = {
  // GPU加速を強制
  style: {
    transform: 'translateZ(0)',
    willChange: 'transform, opacity'
  },
  
  // レンダリング最適化
  layout: false,
  
  // 60FPS維持用設定
  animate: {
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120
    }
  }
} as const
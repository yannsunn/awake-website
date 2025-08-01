'use client'

import { useTimeEffect } from '@/hooks/useCursorEffect'

export default function TimeGradient() {
  const { phase, gradientColors } = useTimeEffect()
  
  return (
    <div 
      className="fixed inset-0 transition-all duration-[10000ms] ease-in-out z-0"
      style={{
        background: `linear-gradient(135deg, ${gradientColors.start} 0%, ${gradientColors.mid} 50%, ${gradientColors.end} 100%)`,
        opacity: 0.3
      }}
    >
      {/* 時間帯インジケーター */}
      <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${
            phase === 'morning' ? 'bg-yellow-400' :
            phase === 'afternoon' ? 'bg-blue-400' :
            phase === 'evening' ? 'bg-purple-400' :
            'bg-gray-800'
          }`} />
          <span className="text-sm font-medium text-gray-700">
            {phase === 'morning' ? '朝' :
             phase === 'afternoon' ? '昼' :
             phase === 'evening' ? '夕' :
             '夜'}
          </span>
        </div>
      </div>
    </div>
  )
}
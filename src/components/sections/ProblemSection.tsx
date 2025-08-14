'use client'

import { memo } from 'react'
import { STYLES } from '@/lib/constants'
import { TEXT_BG_STYLES, TEXT_SHADOW } from '@/lib/ultra-styles'

const ProblemSection = memo(function ProblemSection() {
  const problems = [
    '同じ作業の繰り返しで、社員の時間が奪われている',
    'データ入力やチェック作業に、貴重な人材を使っている',
    '情報の整理・分析に時間がかかり、判断が遅れる',
    '人手不足で、本来やるべき仕事に手が回らない'
  ]

  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={STYLES.heading.h2.section + " mb-4"} style={TEXT_SHADOW.heading}>
            こんな課題を抱えていませんか？
          </h2>
          <p className={`${STYLES.text.body.large} ${TEXT_BG_STYLES.default}`} style={TEXT_SHADOW.small}>
            毎日の業務に、こんな「もったいない」が潜んでいる
          </p>
        </div>
        
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700">
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start">
                <span className="text-indigo-400 text-xl mr-3 flex-shrink-0">✓</span>
                <span className={STYLES.text.body.medium + " text-gray-100"}>{problem}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 p-6 bg-indigo-600/20 rounded-lg text-center border border-indigo-500/30">
            <p className={STYLES.text.emphasis.strong + " text-xl text-white"} style={TEXT_SHADOW.small}>
              これらすべて、<br />
              AIが解決します。
            </p>
          </div>
        </div>
        
        {/* AI自動化ワークフロー画像 */}
        <div className="mt-12">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-indigo-500/30">
            <h3 className={STYLES.heading.h3.emphasis + " text-white text-center mb-6"} style={TEXT_SHADOW.heading}>
              業務自動化の実例：AIによる完全自動化フロー
            </h3>
            <div className="relative rounded-xl overflow-hidden bg-white/95 p-4">
              <img
                src="/assets/images/ai-workflow-automation.webp"
                alt="AI業務自動化ワークフロー図"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">90%</div>
                <p className="text-sm text-gray-300 mt-1">作業時間削減</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <p className="text-sm text-gray-300 mt-1">365日自動稼働</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">0</div>
                <p className="text-sm text-gray-300 mt-1">ヒューマンエラー</p>
              </div>
            </div>
            <p className="text-center text-gray-300 mt-6 text-sm">
              ※ 実際の導入事例：ブログ記事作成・SEO最適化・WordPress投稿まで完全自動化
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})

export default ProblemSection
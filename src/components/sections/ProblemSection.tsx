'use client'

import { memo } from 'react'
import '@/app/corporate.css'

const ProblemSection = memo(function ProblemSection() {
  const problems = [
    '同じ作業の繰り返しで、社員の時間が奪われている',
    'データ入力やチェック作業に、貴重な人材を使っている',
    '情報の整理・分析に時間がかかり、判断が遅れる',
    '人手不足で、本来やるべき仕事に手が回らない'
  ]

  return (
    <section className="py-16 md:py-24 relative bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="corp-heading-2 mb-4 text-black">
            こんな課題を抱えていませんか？
          </h2>
          <p className="corp-text-lead text-black font-bold">
            毎日の業務に、こんな「もったいない」が潜んでいる
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200">
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 text-xl mr-3 flex-shrink-0">✓</span>
                <span className="corp-text-body text-black">{problem}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center border border-blue-300">
            <p className="corp-heading-3 text-blue-900">
              これらすべて、AIが解決します。
            </p>
          </div>
        </div>
        
        {/* AI自動化ワークフロー画像 */}
        <div className="mt-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-200">
            <h3 className="corp-heading-3 text-black text-center mb-6">
              業務自動化の実例：AIによる完全自動化フロー
            </h3>
            <div className="relative rounded-xl overflow-hidden bg-white/95 p-4">
              <img
                src="/assets/images/ai-workflow-automation.webp"
                alt="AI業務自動化ワークフロー図"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-6 space-y-3">
              <h4 className="corp-text-body text-black font-bold">このワークフローで実現できること：</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="corp-text-body text-black">キーワード調査から記事作成まで自動化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="corp-text-body text-black">SEO最適化されたコンテンツを自動生成</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="corp-text-body text-black">WordPressへの自動投稿・画像設定</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="corp-text-body text-black">人の手を介さない完全自動プロセス</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default ProblemSection
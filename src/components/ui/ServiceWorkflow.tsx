'use client'

import React from 'react'

interface WorkflowStep {
  number: string
  title: string
  description: string
  icon: string
}

interface ServiceWorkflowProps {
  service: 'web' | 'ai' | 'amazon'
}

const workflows = {
  web: [
    {
      number: '01',
      title: 'ヒアリング',
      description: '貴社のビジネス目標、ターゲット顧客、競合状況を詳しくお聞きします。現状の課題や将来のビジョンを共有していただきます。',
      icon: '💬'
    },
    {
      number: '02',
      title: '提案・設計',
      description: 'ヒアリング内容をもとに、最適なサイト構成、デザイン方針、必要な機能を提案します。お見積もりとスケジュールをご提示します。',
      icon: '📋'
    },
    {
      number: '03',
      title: 'システム実装',
      description: 'デザイン制作、コーディング、機能実装を行います。定期的に進捗を共有し、フィードバックを反映しながら開発を進めます。',
      icon: '⚙️'
    },
    {
      number: '04',
      title: '公開・運用',
      description: 'サイトを公開し、アクセス解析を設定します。継続的な改善提案とサポートで、成果を最大化します。',
      icon: '🚀'
    }
  ],
  ai: [
    {
      number: '01',
      title: 'ヒアリング',
      description: '顧客からのよくある問い合わせ内容、対応フロー、業務上の課題をお聞きします。既存のFAQやマニュアルを確認します。',
      icon: '💬'
    },
    {
      number: '02',
      title: '提案・設計',
      description: 'チャットボットの対話シナリオ、回答精度向上の方針、システム連携方法を提案します。デモンストレーションで動作をご確認いただきます。',
      icon: '📋'
    },
    {
      number: '03',
      title: 'システム実装',
      description: 'AI学習データの準備、チャットボットの開発、既存システムとの連携を行います。テスト運用で精度を調整します。',
      icon: '⚙️'
    },
    {
      number: '04',
      title: '導入・改善',
      description: '本番環境へ導入し、利用状況をモニタリングします。ユーザーフィードバックをもとに継続的に回答精度を向上させます。',
      icon: '🚀'
    }
  ],
  amazon: [
    {
      number: '01',
      title: 'ヒアリング',
      description: '取扱商品、現在の売上状況、Amazon出品での課題や目標をお聞きします。競合分析と市場調査を行います。',
      icon: '💬'
    },
    {
      number: '02',
      title: '提案・戦略立案',
      description: '商品ページの最適化方針、広告戦略、在庫管理・配送の改善案を提案します。売上目標と具体的な施策をご提示します。',
      icon: '📋'
    },
    {
      number: '03',
      title: 'システム実装',
      description: '商品登録の最適化、広告キャンペーンの設定、在庫管理システムの構築を行います。SEO対策で検索順位を向上させます。',
      icon: '⚙️'
    },
    {
      number: '04',
      title: '運用・分析',
      description: '売上データを分析し、定期的にレポートを提出します。市場トレンドに応じて戦略を調整し、継続的に成果を改善します。',
      icon: '🚀'
    }
  ]
}

export function ServiceWorkflow({ service }: ServiceWorkflowProps) {
  const steps = workflows[service]

  return (
    <div className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          サービスの流れ
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          お問い合わせから実装・運用まで、4つのステップで進めます
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 z-0"
               style={{ width: 'calc(100% - 8rem)', left: '4rem' }} />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              {/* Step number circle */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.icon}
                </div>
              </div>

              {/* Step number badge */}
              <div className="text-center mb-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                  STEP {step.number}
                </span>
              </div>

              {/* Step title */}
              <h3 className="text-xl font-bold text-center mb-3">
                {step.title}
              </h3>

              {/* Step description */}
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {step.description}
              </p>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6 lg:hidden">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

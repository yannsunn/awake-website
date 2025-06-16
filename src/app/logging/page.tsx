'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LogDashboard from '@/components/logging/LogDashboard'
import AgentFlowVisualizer from '@/components/logging/AgentFlowVisualizer'
import InteractiveLogViewer from '@/components/logging/InteractiveLogViewer'
import { 
  Activity, Network, Search, Settings, Download, 
  Play, Pause, RotateCcw, AlertTriangle 
} from 'lucide-react'

export default function LoggingSystemPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isRecording, setIsRecording] = useState(true)

  const systemStats = {
    totalMessages: 1247,
    activeAgents: 5,
    errorRate: 2.3,
    avgResponseTime: 1.8,
    uptime: '12h 34m',
    lastUpdate: '2分前'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-corporate-gray-50 to-blue-50">
      {/* ヘッダー */}
      <div className="bg-white border-b border-corporate-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Activity className="h-8 w-8 text-corporate-blue-600" />
                <h1 className="text-2xl font-bold text-corporate-gray-900">
                  統合ロギングシステム
                </h1>
              </div>
              
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                isRecording 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                <div className={`w-2 h-2 rounded-full ${isRecording ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                {isRecording ? 'レコーディング中' : '停止中'}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                  isRecording 
                    ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {isRecording ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isRecording ? '停止' : '開始'}
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-corporate-gray-100 text-corporate-gray-700 rounded-md hover:bg-corporate-gray-200 transition-colors">
                <Download className="h-4 w-4" />
                エクスポート
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-corporate-blue-600 text-white rounded-md hover:bg-corporate-blue-700 transition-colors">
                <Settings className="h-4 w-4" />
                設定
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* システム統計サマリー */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg border border-corporate-gray-200 p-4"
          >
            <div className="text-sm text-corporate-gray-600">総メッセージ</div>
            <div className="text-2xl font-bold text-corporate-blue-600">{systemStats.totalMessages.toLocaleString()}</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg border border-corporate-gray-200 p-4"
          >
            <div className="text-sm text-corporate-gray-600">アクティブエージェント</div>
            <div className="text-2xl font-bold text-green-600">{systemStats.activeAgents}</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg border border-corporate-gray-200 p-4"
          >
            <div className="text-sm text-corporate-gray-600">エラー率</div>
            <div className="text-2xl font-bold text-yellow-600">{systemStats.errorRate}%</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg border border-corporate-gray-200 p-4"
          >
            <div className="text-sm text-corporate-gray-600">平均応答時間</div>
            <div className="text-2xl font-bold text-corporate-gray-900">{systemStats.avgResponseTime}s</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg border border-corporate-gray-200 p-4"
          >
            <div className="text-sm text-corporate-gray-600">稼働時間</div>
            <div className="text-2xl font-bold text-corporate-gray-900">{systemStats.uptime}</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg border border-corporate-gray-200 p-4"
          >
            <div className="text-sm text-corporate-gray-600">最終更新</div>
            <div className="text-2xl font-bold text-corporate-gray-900">{systemStats.lastUpdate}</div>
          </motion.div>
        </div>

        {/* タブシステム */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3 mb-6">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              ダッシュボード
            </TabsTrigger>
            <TabsTrigger value="flow" className="flex items-center gap-2">
              <Network className="h-4 w-4" />
              通信フロー
            </TabsTrigger>
            <TabsTrigger value="logs" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              ログビューワー
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <LogDashboard />
            </motion.div>
          </TabsContent>

          <TabsContent value="flow" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <AgentFlowVisualizer />
            </motion.div>
          </TabsContent>

          <TabsContent value="logs" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <InteractiveLogViewer />
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* 革新的機能紹介パネル */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-corporate-blue-600 to-indigo-700 rounded-xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">🚀 革新的ロギングシステム機能</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2">🧠 インテリジェント分析</h3>
              <p className="text-blue-100 text-sm">
                AIによるメッセージ内容分析と自動優先度判定。エラーパターンの検出と予測的アラート機能を搭載。
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2">🎯 リアルタイム可視化</h3>
              <p className="text-blue-100 text-sm">
                3D通信フロー可視化、インタラクティブダッシュボード、ライブ監視による完全なシステム透明性。
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-2">🔧 自動復旧システム</h3>
              <p className="text-blue-100 text-sm">
                エラー検出時の自動リトライ、階層的エスカレーション、機械学習による自己修復機能。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
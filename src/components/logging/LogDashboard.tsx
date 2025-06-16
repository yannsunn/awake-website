'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Activity, Users, MessageCircle, AlertTriangle, Clock, Filter, Search, Eye } from 'lucide-react'

interface LogEntry {
  timestamp: string
  agent: string
  message: string
  level: 'info' | 'warning' | 'error' | 'success'
  duration?: number
}

interface AgentStatus {
  name: string
  status: 'active' | 'idle' | 'error'
  lastSeen: string
  messagesCount: number
}

export default function LogDashboard() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [agents, setAgents] = useState<AgentStatus[]>([
    { name: 'president', status: 'active', lastSeen: '2分前', messagesCount: 15 },
    { name: 'boss1', status: 'active', lastSeen: '1分前', messagesCount: 42 },
    { name: 'worker1', status: 'active', lastSeen: '30秒前', messagesCount: 28 },
    { name: 'worker2', status: 'idle', lastSeen: '5分前', messagesCount: 23 },
    { name: 'worker3', status: 'active', lastSeen: '45秒前', messagesCount: 19 }
  ])
  const [filter, setFilter] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isRealTimeMode, setIsRealTimeMode] = useState<boolean>(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  // シミュレーションデータ生成
  useEffect(() => {
    const generateLogs = () => {
      const sampleLogs: LogEntry[] = [
        { timestamp: '2025-06-17 00:25:28', agent: 'worker1', message: 'ロギングシステム統合開始', level: 'info' },
        { timestamp: '2025-06-17 00:25:30', agent: 'boss1', message: 'プロジェクト指示送信完了', level: 'success', duration: 2.3 },
        { timestamp: '2025-06-17 00:25:32', agent: 'worker2', message: 'データ分析タスク受信', level: 'info' },
        { timestamp: '2025-06-17 00:25:35', agent: 'worker3', message: 'システム統合エラー検出', level: 'error' },
        { timestamp: '2025-06-17 00:25:37', agent: 'president', message: 'ビジョン再確認要求', level: 'warning' },
        { timestamp: '2025-06-17 00:25:40', agent: 'worker1', message: 'UI可視化コンポーネント作成中', level: 'info', duration: 5.2 },
      ]
      setLogs(sampleLogs)
    }

    generateLogs()

    // リアルタイム更新シミュレーション
    const interval = setInterval(() => {
      if (isRealTimeMode) {
        const newLog: LogEntry = {
          timestamp: new Date().toLocaleString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          }),
          agent: ['worker1', 'worker2', 'worker3', 'boss1'][Math.floor(Math.random() * 4)],
          message: [
            'タスク処理完了',
            'コンポーネント更新',
            'データ同期中',
            'エラーハンドリング実行',
            'パフォーマンス最適化'
          ][Math.floor(Math.random() * 5)],
          level: ['info', 'success', 'warning'][Math.floor(Math.random() * 3)] as any,
          duration: Math.random() * 10
        }

        setLogs(prev => [newLog, ...prev].slice(0, 50))
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isRealTimeMode])

  // 自動スクロール
  useEffect(() => {
    if (scrollRef.current && isRealTimeMode) {
      scrollRef.current.scrollTop = 0
    }
  }, [logs, isRealTimeMode])

  const filteredLogs = logs.filter(log => {
    const matchesFilter = filter === 'all' || log.level === filter || log.agent === filter
    const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.agent.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'error': return 'text-red-600 bg-red-50 border-red-200'
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'success': return 'text-green-600 bg-green-50 border-green-200'
      default: return 'text-blue-600 bg-blue-50 border-blue-200'
    }
  }

  const getAgentStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500'
      case 'error': return 'bg-red-500'
      default: return 'bg-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-corporate-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-corporate-gray-900 mb-2">
            リアルタイム・ロギング・ダッシュボード
          </h1>
          <p className="text-corporate-gray-600">
            エージェント間通信とシステム動作の可視化・監視システム
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* エージェント状況サイドバー */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg border border-corporate-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-corporate-blue-600" />
                <h2 className="text-lg font-semibold text-corporate-gray-900">エージェント状況</h2>
              </div>
              
              <div className="space-y-3">
                {agents.map((agent) => (
                  <div key={agent.name} className="flex items-center justify-between p-3 bg-corporate-gray-50 rounded-md">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getAgentStatusColor(agent.status)}`}></div>
                      <div>
                        <div className="font-medium text-corporate-gray-900">{agent.name}</div>
                        <div className="text-sm text-corporate-gray-600">{agent.lastSeen}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-corporate-blue-600">
                      {agent.messagesCount}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-corporate-blue-50 rounded-md border border-corporate-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-4 w-4 text-corporate-blue-600" />
                  <span className="text-sm font-medium text-corporate-blue-800">システム統計</span>
                </div>
                <div className="space-y-1 text-sm text-corporate-blue-700">
                  <div>総メッセージ: 127</div>
                  <div>エラー率: 2.3%</div>
                  <div>平均応答時間: 1.8s</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* メインログエリア */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-lg border border-corporate-gray-200">
              {/* コントロールパネル */}
              <div className="p-6 border-b border-corporate-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-corporate-gray-600" />
                      <select 
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-3 py-2 border border-corporate-gray-300 rounded-md text-sm"
                      >
                        <option value="all">全て</option>
                        <option value="error">エラー</option>
                        <option value="warning">警告</option>
                        <option value="success">成功</option>
                        <option value="info">情報</option>
                        <option value="president">President</option>
                        <option value="boss1">Boss1</option>
                        <option value="worker1">Worker1</option>
                        <option value="worker2">Worker2</option>
                        <option value="worker3">Worker3</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4 text-corporate-gray-600" />
                      <input
                        type="text"
                        placeholder="検索..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-3 py-2 border border-corporate-gray-300 rounded-md text-sm w-48"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setIsRealTimeMode(!isRealTimeMode)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isRealTimeMode 
                        ? 'bg-green-100 text-green-700 border border-green-300' 
                        : 'bg-gray-100 text-gray-700 border border-gray-300'
                    }`}
                  >
                    <Eye className="h-4 w-4" />
                    {isRealTimeMode ? 'リアルタイム監視中' : 'リアルタイム監視停止'}
                  </button>
                </div>
              </div>

              {/* ログエントリ */}
              <div ref={scrollRef} className="h-96 overflow-y-auto p-6">
                <div className="space-y-2">
                  {filteredLogs.map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-4 rounded-md border ${getLevelColor(log.level)}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-mono bg-white px-2 py-1 rounded border">
                              {log.agent}
                            </span>
                            <span className="text-xs text-corporate-gray-600 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {log.timestamp}
                            </span>
                            {log.duration && (
                              <span className="text-xs text-corporate-gray-600">
                                ({log.duration.toFixed(1)}s)
                              </span>
                            )}
                          </div>
                          <div className="text-sm font-medium">
                            {log.message}
                          </div>
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                          log.level === 'error' ? 'bg-red-100 text-red-700' :
                          log.level === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                          log.level === 'success' ? 'bg-green-100 text-green-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {log.level.toUpperCase()}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
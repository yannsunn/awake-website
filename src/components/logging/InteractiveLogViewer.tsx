'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, Filter, Calendar, Clock, User, MessageSquare, 
  AlertCircle, CheckCircle, XCircle, Info, ArrowUpDown,
  Download, Share, Bookmark, Eye, EyeOff, Zap, Database
} from 'lucide-react'

interface LogEntry {
  id: string
  timestamp: string
  agent: string
  message: string
  level: 'debug' | 'info' | 'warning' | 'error' | 'critical'
  duration?: number
  tags: string[]
  metadata: Record<string, any>
  correlationId?: string
}

interface FilterState {
  search: string
  agent: string
  level: string
  dateRange: string
  tags: string[]
}

export default function InteractiveLogViewer() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    agent: 'all',
    level: 'all',
    dateRange: 'all',
    tags: []
  })
  const [sortBy, setSortBy] = useState<'timestamp' | 'level' | 'agent'>('timestamp')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null)
  const [viewMode, setViewMode] = useState<'compact' | 'detailed' | 'json'>('compact')
  const [isAutoRefresh, setIsAutoRefresh] = useState(false)
  const [bookmarkedLogs, setBookmarkedLogs] = useState<string[]>([])

  // サンプルログデータ生成
  useEffect(() => {
    const generateSampleLogs = (): LogEntry[] => {
      const agents = ['president', 'boss1', 'worker1', 'worker2', 'worker3']
      const levels: LogEntry['level'][] = ['debug', 'info', 'warning', 'error', 'critical']
      const messages = [
        'プロジェクト指示を送信完了',
        'UIコンポーネント実装開始',
        'データベース接続エラー',
        'ロギングシステム初期化',
        '認証トークン更新',
        'キャッシュクリア実行',
        'エージェント間通信開始',
        'パフォーマンス最適化完了',
        'エラーハンドリング実装',
        'システム正常性チェック'
      ]
      const tags = ['system', 'communication', 'performance', 'security', 'ui', 'database', 'network']

      return Array.from({ length: 50 }, (_, i) => ({
        id: `log_${i + 1}`,
        timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(),
        agent: agents[Math.floor(Math.random() * agents.length)],
        message: messages[Math.floor(Math.random() * messages.length)],
        level: levels[Math.floor(Math.random() * levels.length)],
        duration: Math.random() > 0.5 ? Number((Math.random() * 10).toFixed(2)) : undefined,
        tags: [tags[Math.floor(Math.random() * tags.length)], tags[Math.floor(Math.random() * tags.length)]],
        metadata: {
          requestId: `req_${Math.random().toString(36).substr(2, 9)}`,
          userAgent: 'LoggingSystem/1.0',
          ip: `192.168.1.${Math.floor(Math.random() * 255)}`,
          memoryUsage: `${(Math.random() * 512).toFixed(1)}MB`,
          cpuUsage: `${(Math.random() * 100).toFixed(1)}%`
        },
        correlationId: Math.random() > 0.7 ? `corr_${Math.random().toString(36).substr(2, 9)}` : undefined
      }))
    }

    setLogs(generateSampleLogs())
  }, [])

  // フィルタリングとソート
  const filteredAndSortedLogs = useMemo(() => {
    let filtered = logs.filter(log => {
      const matchesSearch = log.message.toLowerCase().includes(filters.search.toLowerCase()) ||
                          log.agent.toLowerCase().includes(filters.search.toLowerCase())
      const matchesAgent = filters.agent === 'all' || log.agent === filters.agent
      const matchesLevel = filters.level === 'all' || log.level === filters.level
      const matchesTags = filters.tags.length === 0 || filters.tags.some(tag => log.tags.includes(tag))
      
      return matchesSearch && matchesAgent && matchesLevel && matchesTags
    })

    // ソート
    filtered.sort((a, b) => {
      let comparison = 0
      
      switch (sortBy) {
        case 'timestamp':
          comparison = new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
          break
        case 'level':
          const levelOrder = { debug: 0, info: 1, warning: 2, error: 3, critical: 4 }
          comparison = levelOrder[a.level] - levelOrder[b.level]
          break
        case 'agent':
          comparison = a.agent.localeCompare(b.agent)
          break
      }
      
      return sortOrder === 'desc' ? -comparison : comparison
    })

    return filtered
  }, [logs, filters, sortBy, sortOrder])

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'error':
      case 'critical':
        return <XCircle className="h-4 w-4" />
      case 'warning':
        return <AlertCircle className="h-4 w-4" />
      case 'info':
        return <Info className="h-4 w-4" />
      default:
        return <CheckCircle className="h-4 w-4" />
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'critical': return 'text-red-700 bg-red-100 border-red-300'
      case 'error': return 'text-red-600 bg-red-50 border-red-200'
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'info': return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'debug': return 'text-gray-600 bg-gray-50 border-gray-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const exportLogs = () => {
    const dataStr = JSON.stringify(filteredAndSortedLogs, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `logs_export_${new Date().toISOString().slice(0, 19)}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const toggleBookmark = (logId: string) => {
    setBookmarkedLogs(prev => 
      prev.includes(logId) 
        ? prev.filter(id => id !== logId)
        : [...prev, logId]
    )
  }

  return (
    <div className="bg-white rounded-lg border border-corporate-gray-200">
      {/* ヘッダー */}
      <div className="p-6 border-b border-corporate-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-corporate-gray-900">
              インタラクティブ・ログビューワー
            </h2>
            <p className="text-sm text-corporate-gray-600">
              高度なフィルタリング・検索・分析機能を搭載したログ管理システム
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoRefresh(!isAutoRefresh)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                isAutoRefresh 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Zap className="h-4 w-4" />
              自動更新
            </button>
            
            <button
              onClick={exportLogs}
              className="flex items-center gap-2 px-3 py-2 bg-corporate-blue-600 text-white rounded-md hover:bg-corporate-blue-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              エクスポート
            </button>
          </div>
        </div>

        {/* フィルターパネル */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* 検索 */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="メッセージ・エージェント検索..."
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="w-full pl-10 pr-4 py-2 border border-corporate-gray-300 rounded-md text-sm focus:ring-2 focus:ring-corporate-blue-500 focus:border-transparent"
            />
          </div>

          {/* エージェントフィルター */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={filters.agent}
              onChange={(e) => setFilters(prev => ({ ...prev, agent: e.target.value }))}
              className="w-full pl-10 pr-4 py-2 border border-corporate-gray-300 rounded-md text-sm focus:ring-2 focus:ring-corporate-blue-500"
            >
              <option value="all">全エージェント</option>
              <option value="president">President</option>
              <option value="boss1">Boss1</option>
              <option value="worker1">Worker1</option>
              <option value="worker2">Worker2</option>
              <option value="worker3">Worker3</option>
            </select>
          </div>

          {/* レベルフィルター */}
          <div className="relative">
            <AlertCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={filters.level}
              onChange={(e) => setFilters(prev => ({ ...prev, level: e.target.value }))}
              className="w-full pl-10 pr-4 py-2 border border-corporate-gray-300 rounded-md text-sm focus:ring-2 focus:ring-corporate-blue-500"
            >
              <option value="all">全レベル</option>
              <option value="debug">Debug</option>
              <option value="info">Info</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          {/* ソート */}
          <div className="relative">
            <ArrowUpDown className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={`${sortBy}_${sortOrder}`}
              onChange={(e) => {
                const [newSortBy, newSortOrder] = e.target.value.split('_')
                setSortBy(newSortBy as any)
                setSortOrder(newSortOrder as any)
              }}
              className="w-full pl-10 pr-4 py-2 border border-corporate-gray-300 rounded-md text-sm focus:ring-2 focus:ring-corporate-blue-500"
            >
              <option value="timestamp_desc">新しい順</option>
              <option value="timestamp_asc">古い順</option>
              <option value="level_desc">重要度順</option>
              <option value="agent_asc">エージェント順</option>
            </select>
          </div>

          {/* 表示モード */}
          <div className="relative">
            <Eye className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value as any)}
              className="w-full pl-10 pr-4 py-2 border border-corporate-gray-300 rounded-md text-sm focus:ring-2 focus:ring-corporate-blue-500"
            >
              <option value="compact">コンパクト</option>
              <option value="detailed">詳細</option>
              <option value="json">JSON</option>
            </select>
          </div>
        </div>
      </div>

      {/* ログエントリリスト */}
      <div className="divide-y divide-corporate-gray-200 max-h-96 overflow-y-auto">
        <AnimatePresence>
          {filteredAndSortedLogs.map((log, index) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.02 }}
              className={`p-4 hover:bg-corporate-gray-50 cursor-pointer transition-colors ${
                selectedLog?.id === log.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
              }`}
              onClick={() => setSelectedLog(selectedLog?.id === log.id ? null : log)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(log.level)}`}>
                      {getLevelIcon(log.level)}
                      {log.level.toUpperCase()}
                    </div>
                    
                    <span className="text-xs font-mono bg-corporate-gray-100 px-2 py-1 rounded border">
                      {log.agent}
                    </span>
                    
                    <span className="text-xs text-corporate-gray-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(log.timestamp).toLocaleString('ja-JP')}
                    </span>
                    
                    {log.duration && (
                      <span className="text-xs text-corporate-gray-600">
                        ({log.duration}s)
                      </span>
                    )}
                  </div>
                  
                  <div className={`${viewMode === 'compact' ? 'line-clamp-1' : ''} text-sm text-corporate-gray-900 mb-2`}>
                    {viewMode === 'json' ? (
                      <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                        {JSON.stringify(log, null, 2)}
                      </pre>
                    ) : (
                      log.message
                    )}
                  </div>
                  
                  {viewMode === 'detailed' && (
                    <div className="text-xs text-corporate-gray-600 space-y-1">
                      <div>Tags: {log.tags.join(', ')}</div>
                      {log.correlationId && <div>Correlation ID: {log.correlationId}</div>}
                      <div>Request ID: {log.metadata.requestId}</div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleBookmark(log.id)
                    }}
                    className={`p-1 rounded transition-colors ${
                      bookmarkedLogs.includes(log.id)
                        ? 'text-yellow-600 hover:text-yellow-700'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigator.clipboard.writeText(JSON.stringify(log, null, 2))
                    }}
                    className="p-1 text-gray-400 hover:text-gray-600 rounded transition-colors"
                  >
                    <Share className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* フッター統計 */}
      <div className="p-4 bg-corporate-gray-50 border-t border-corporate-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="text-corporate-gray-600">
            {filteredAndSortedLogs.length} / {logs.length} ログエントリ表示中
          </div>
          
          <div className="flex items-center gap-4 text-corporate-gray-600">
            <span>エラー: {filteredAndSortedLogs.filter(l => ['error', 'critical'].includes(l.level)).length}</span>
            <span>警告: {filteredAndSortedLogs.filter(l => l.level === 'warning').length}</span>
            <span>ブックマーク: {bookmarkedLogs.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
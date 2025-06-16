'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Download } from 'lucide-react'

interface Node {
  id: string
  name: string
  type: 'president' | 'boss' | 'worker'
  x: number
  y: number
  status: 'active' | 'idle' | 'error'
  messageCount: number
}

interface Edge {
  from: string
  to: string
  message: string
  timestamp: number
  status: 'sending' | 'delivered' | 'failed'
}

export default function AgentFlowVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [zoom, setZoom] = useState(1)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [edges, setEdges] = useState<Edge[]>([])
  const [animationFrame, setAnimationFrame] = useState(0)

  // ノード配置（3D風レイアウト）
  const nodes: Node[] = [
    { id: 'president', name: 'PRESIDENT', type: 'president', x: 400, y: 100, status: 'active', messageCount: 15 },
    { id: 'boss1', name: 'BOSS1', type: 'boss', x: 400, y: 250, status: 'active', messageCount: 42 },
    { id: 'worker1', name: 'WORKER1', type: 'worker', x: 200, y: 400, status: 'active', messageCount: 28 },
    { id: 'worker2', name: 'WORKER2', type: 'worker', x: 400, y: 400, status: 'idle', messageCount: 23 },
    { id: 'worker3', name: 'WORKER3', type: 'worker', x: 600, y: 400, status: 'active', messageCount: 19 }
  ]

  // エッジアニメーション管理
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        // 新しいメッセージをランダムに生成
        const fromNode = nodes[Math.floor(Math.random() * nodes.length)]
        const toNode = nodes[Math.floor(Math.random() * nodes.length)]
        
        if (fromNode.id !== toNode.id) {
          const newEdge: Edge = {
            from: fromNode.id,
            to: toNode.id,
            message: [
              'タスク完了報告',
              'プロジェクト指示',
              'エラー通知',
              '進捗更新',
              'コラボレーション要求'
            ][Math.floor(Math.random() * 5)],
            timestamp: Date.now(),
            status: 'sending'
          }

          setEdges(prev => [...prev, newEdge].slice(-20)) // 最新20件のみ保持

          // メッセージ配信状況の更新
          setTimeout(() => {
            setEdges(prev => prev.map(edge => 
              edge.timestamp === newEdge.timestamp 
                ? { ...edge, status: Math.random() > 0.1 ? 'delivered' : 'failed' }
                : edge
            ))
          }, 2000)
        }

        setAnimationFrame(prev => prev + 1)
      }
    }, 1500)

    return () => clearInterval(interval)
  }, [isPlaying])

  // Canvas描画
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // キャンバスクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.scale(zoom, zoom)

    // グリッド描画
    ctx.strokeStyle = '#f0f0f0'
    ctx.lineWidth = 1
    for (let i = 0; i < canvas.width / zoom; i += 50) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, canvas.height / zoom)
      ctx.stroke()
    }
    for (let i = 0; i < canvas.height / zoom; i += 50) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(canvas.width / zoom, i)
      ctx.stroke()
    }

    // エッジ描画（メッセージフロー）
    edges.forEach((edge, index) => {
      const fromNode = nodes.find(n => n.id === edge.from)
      const toNode = nodes.find(n => n.id === edge.to)
      
      if (fromNode && toNode) {
        const progress = Math.min((Date.now() - edge.timestamp) / 2000, 1)
        const x = fromNode.x + (toNode.x - fromNode.x) * progress
        const y = fromNode.y + (toNode.y - fromNode.y) * progress

        // メッセージライン
        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.lineTo(toNode.x, toNode.y)
        ctx.strokeStyle = edge.status === 'failed' ? '#ef4444' : 
                         edge.status === 'delivered' ? '#10b981' : '#3b82f6'
        ctx.lineWidth = 2
        ctx.setLineDash(edge.status === 'sending' ? [5, 5] : [])
        ctx.stroke()
        ctx.setLineDash([])

        // 動くメッセージインジケーター
        if (edge.status === 'sending') {
          ctx.beginPath()
          ctx.arc(x, y, 6, 0, 2 * Math.PI)
          ctx.fillStyle = '#3b82f6'
          ctx.fill()
          ctx.strokeStyle = '#ffffff'
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }
    })

    // ノード描画
    nodes.forEach(node => {
      const isSelected = selectedNode === node.id
      const radius = isSelected ? 45 : 35
      
      // ノード影
      ctx.beginPath()
      ctx.arc(node.x + 3, node.y + 3, radius, 0, 2 * Math.PI)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fill()

      // ノードベース
      ctx.beginPath()
      ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI)
      
      // ノードの色（ロール別）
      let gradientColors = ['#3b82f6', '#1e40af'] // デフォルト（worker）
      if (node.type === 'president') gradientColors = ['#dc2626', '#991b1b']
      if (node.type === 'boss') gradientColors = ['#059669', '#047857']

      const gradient = ctx.createRadialGradient(node.x - 10, node.y - 10, 0, node.x, node.y, radius)
      gradient.addColorStop(0, gradientColors[0])
      gradient.addColorStop(1, gradientColors[1])
      ctx.fillStyle = gradient
      ctx.fill()

      // ステータスリング
      ctx.beginPath()
      ctx.arc(node.x, node.y, radius + 3, 0, 2 * Math.PI)
      ctx.strokeStyle = node.status === 'active' ? '#10b981' : 
                       node.status === 'error' ? '#ef4444' : '#6b7280'
      ctx.lineWidth = 4
      ctx.stroke()

      // ノードテキスト
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 12px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(node.name, node.x, node.y - 5)
      
      // メッセージカウント
      ctx.font = '10px sans-serif'
      ctx.fillText(`${node.messageCount}`, node.x, node.y + 8)

      // アクティビティパルス（アクティブノードのみ）
      if (node.status === 'active') {
        const pulseRadius = radius + 10 + Math.sin(animationFrame * 0.3) * 5
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseRadius, 0, 2 * Math.PI)
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.3 - (pulseRadius - radius) / 50})`
        ctx.lineWidth = 2
        ctx.stroke()
      }
    })

    ctx.restore()
  }, [edges, zoom, selectedNode, animationFrame])

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = (event.clientX - rect.left) / zoom
    const y = (event.clientY - rect.top) / zoom

    // ノードクリック検出
    const clickedNode = nodes.find(node => {
      const distance = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2)
      return distance <= 35
    })

    setSelectedNode(clickedNode ? clickedNode.id : null)
  }

  const exportDiagram = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.download = `agent-flow-${new Date().toISOString().slice(0, 19)}.png`
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className="bg-white rounded-lg border border-corporate-gray-200 p-6">
      {/* コントロールパネル */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-corporate-gray-900 mb-1">
            エージェント通信フロー 3D可視化
          </h2>
          <p className="text-sm text-corporate-gray-600">
            リアルタイム通信パターンと階層構造の可視化
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
              isPlaying 
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isPlaying ? '一時停止' : '再生'}
          </button>

          <div className="flex items-center gap-1 border border-corporate-gray-300 rounded-md">
            <button
              onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}
              className="p-2 hover:bg-corporate-gray-50 transition-colors"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <span className="px-3 py-2 text-sm font-medium border-x border-corporate-gray-300">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom(Math.min(2, zoom + 0.2))}
              className="p-2 hover:bg-corporate-gray-50 transition-colors"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => setZoom(1)}
            className="p-2 border border-corporate-gray-300 rounded-md hover:bg-corporate-gray-50 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
          </button>

          <button
            onClick={exportDiagram}
            className="flex items-center gap-2 px-4 py-2 bg-corporate-blue-600 text-white rounded-md hover:bg-corporate-blue-700 transition-colors"
          >
            <Download className="h-4 w-4" />
            エクスポート
          </button>
        </div>
      </div>

      {/* 3Dビジュアライザー */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          onClick={handleCanvasClick}
          className="border border-corporate-gray-300 rounded-lg cursor-pointer bg-gradient-to-br from-blue-50 to-indigo-100"
        />

        {/* 選択ノード情報パネル */}
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-4 left-4 bg-white border border-corporate-gray-300 rounded-lg p-4 shadow-lg max-w-xs"
          >
            {(() => {
              const node = nodes.find(n => n.id === selectedNode)
              if (!node) return null
              
              return (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${
                      node.status === 'active' ? 'bg-green-500' : 
                      node.status === 'error' ? 'bg-red-500' : 'bg-gray-400'
                    }`}></div>
                    <h3 className="font-bold text-corporate-gray-900">{node.name}</h3>
                  </div>
                  <div className="space-y-1 text-sm text-corporate-gray-600">
                    <div>ロール: {node.type.toUpperCase()}</div>
                    <div>ステータス: {node.status}</div>
                    <div>総メッセージ: {node.messageCount}</div>
                    <div>最新アクティビティ: {Math.floor(Math.random() * 30)}秒前</div>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        )}

        {/* 凡例 */}
        <div className="absolute bottom-4 right-4 bg-white border border-corporate-gray-300 rounded-lg p-4 text-sm">
          <div className="font-medium text-corporate-gray-900 mb-2">凡例</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-red-700"></div>
              <span>PRESIDENT</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-500 to-green-700"></div>
              <span>BOSS</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-700"></div>
              <span>WORKER</span>
            </div>
          </div>
        </div>
      </div>

      {/* 通信統計 */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-corporate-gray-50 rounded-lg p-4">
          <div className="text-sm text-corporate-gray-600">アクティブ接続</div>
          <div className="text-2xl font-bold text-corporate-blue-600">
            {edges.filter(e => e.status === 'sending').length}
          </div>
        </div>
        <div className="bg-corporate-gray-50 rounded-lg p-4">
          <div className="text-sm text-corporate-gray-600">配信成功</div>
          <div className="text-2xl font-bold text-green-600">
            {edges.filter(e => e.status === 'delivered').length}
          </div>
        </div>
        <div className="bg-corporate-gray-50 rounded-lg p-4">
          <div className="text-sm text-corporate-gray-600">配信失敗</div>
          <div className="text-2xl font-bold text-red-600">
            {edges.filter(e => e.status === 'failed').length}
          </div>
        </div>
        <div className="bg-corporate-gray-50 rounded-lg p-4">
          <div className="text-sm text-corporate-gray-600">総メッセージ</div>
          <div className="text-2xl font-bold text-corporate-gray-900">
            {nodes.reduce((sum, node) => sum + node.messageCount, 0)}
          </div>
        </div>
      </div>
    </div>
  )
}
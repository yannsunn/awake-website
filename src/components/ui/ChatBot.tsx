'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShownWelcome, setHasShownWelcome] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([])
  const [inputValue, setInputValue] = useState('')

  // 自動ポップアップ機能：5秒後にウェルカムメッセージを表示
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownWelcome && !isOpen) {
        setHasShownWelcome(true)
        // ウェルカムメッセージを表示（チャットボタンに通知バッジを表示）
      }
    }, 5000) // 5秒後

    return () => clearTimeout(timer)
  }, [hasShownWelcome, isOpen])

  // チャットを開いたときの初期メッセージ
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: 'こんにちは！株式会社Awakeです。\n\nWebサイト制作、AIチャットボット、Amazon代理店サービスについて、お気軽にご質問ください。\n\nまた、お問い合わせフォームやLINEでのご相談も承っております。',
          isBot: true
        }
      ])
    }
  }, [isOpen, messages.length])

  const handleSend = () => {
    if (!inputValue.trim()) return

    // ユーザーメッセージを追加
    const userMessage = { text: inputValue, isBot: false }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // ボットの自動応答（簡易版）
    setTimeout(() => {
      let botResponse = ''
      const input = inputValue.toLowerCase()

      if (input.includes('価格') || input.includes('料金') || input.includes('費用')) {
        botResponse = 'サービスの料金についてですね。\n\nWebサイト制作は30万円〜、AIチャットボットは月額3万円〜、Amazon代理店サービスは完全成果報酬となっております。\n\n詳しくは各サービスページをご覧いただくか、お問い合わせフォームからご相談ください。'
      } else if (input.includes('ai') || input.includes('チャットボット')) {
        botResponse = 'AIチャットボットサービスについてですね。\n\n24時間自動対応、カスタマーサポートコスト削減、WebサイトやLINEへの簡単連携が可能です。\n\n詳細は「AIチャットボット」のサービスページをご確認ください。'
      } else if (input.includes('web') || input.includes('ウェブ') || input.includes('ホームページ')) {
        botResponse = 'Webサイト制作についてですね。\n\nモバイル対応、SEO対策、更新しやすい管理システムを標準装備しております。\n\n詳細は「Webサイト制作」のサービスページをご確認ください。'
      } else if (input.includes('amazon') || input.includes('アマゾン') || input.includes('ec')) {
        botResponse = 'Amazon代理店サービスについてですね。\n\n商品登録から販売戦略まで完全代行、売れるまで費用は一切不要の完全成果報酬制です。\n\n詳細は「Amazon代理店」のサービスページをご確認ください。'
      } else if (input.includes('問い合わせ') || input.includes('相談') || input.includes('連絡')) {
        botResponse = 'お問い合わせありがとうございます。\n\n以下の方法でご相談を承っております：\n\n1. ページ下部のお問い合わせフォーム\n2. LINE公式アカウント（ボタンからアクセス可能）\n3. お電話でのご相談\n\nお気軽にご連絡ください。'
      } else {
        botResponse = 'ご質問ありがとうございます。\n\n詳しい内容については、お問い合わせフォームまたはLINE公式アカウントからご相談いただけますと、より詳細にご案内できます。\n\nまた、以下のサービスについてもお気軽にお尋ねください：\n• Webサイト制作\n• AIチャットボット\n• Amazon代理店サービス'
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* チャットボタン */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/50 transition-all"
        onClick={() => {
          setIsOpen(!isOpen)
          setHasShownWelcome(true)
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={hasShownWelcome && !isOpen ? {
          scale: [1, 1.2, 1],
          transition: { repeat: 3, duration: 0.5 }
        } : {}}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}

        {/* 通知バッジ */}
        {hasShownWelcome && !isOpen && (
          <motion.span
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
          >
            1
          </motion.span>
        )}
      </motion.button>

      {/* チャットウィンドウ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-100"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* ヘッダー */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
              <h3 className="font-semibold text-lg">Awake サポート</h3>
              <p className="text-sm text-blue-100">お気軽にご質問ください</p>
            </div>

            {/* メッセージエリア */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-line ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm border border-gray-200'
                        : 'bg-blue-500 text-white'
                    }`}
                    style={{ fontSize: '0.95rem', lineHeight: '1.5' }}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 入力エリア */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="メッセージを入力..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-base"
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

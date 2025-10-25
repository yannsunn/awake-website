'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Loader2, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { checkAndResizeImage, fileToBase64, validateImageFile, MAX_IMAGE_DIMENSION } from '@/lib/imageOptimization';

interface Message {
  role: 'user' | 'assistant';
  content: string | Array<{ type: 'text' | 'image'; text?: string; source?: { type: 'base64'; data: string; media_type: string } }>;
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'こんにちは！株式会社Awakeのチャットボットです。chatbot付きホームページ制作、月額制AI顧問・システム導入、Amazon代理店サービスについて、何でもお気軽にご質問ください😊',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 画像アップロード処理
  const handleImageUpload = async (file: File) => {
    setIsUploadingImage(true);
    
    try {
      // 画像ファイルの検証
      const validation = validateImageFile(file);
      if (!validation.valid) {
        alert(validation.error);
        return;
      }

      // 画像のリサイズ
      const { file: resizedFile, dimensions } = await checkAndResizeImage(file);
      
      // Base64エンコード
      const base64Data = await fileToBase64(resizedFile);
      
      // メディアタイプを取得
      const mediaType = resizedFile.type;
      
      // 画像メッセージを作成
      const imageMessage: Message = {
        role: 'user',
        content: [
          {
            type: 'text',
            text: input.trim() || 'この画像について教えてください'
          },
          {
            type: 'image',
            source: {
              type: 'base64',
              data: base64Data.split(',')[1], // data:image/... の部分を除去
              media_type: mediaType
            }
          }
        ],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, imageMessage]);
      setInput('');
      
      // APIに送信
      await sendToAPI(imageMessage);
      
    } catch (error) {
      console.error('Image upload error:', error);
      alert('画像のアップロードに失敗しました。もう一度お試しください。');
    } finally {
      setIsUploadingImage(false);
    }
  };

  // API送信処理
  const sendToAPI = async (message: Message) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, message].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: error instanceof Error ? error.message : '申し訳ございません。エラーが発生しました。もう一度お試しいただくか、お問い合わせフォームからご連絡ください。',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    
    await sendToAPI(userMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* チャットボタン */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 text-white p-5 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 border-2 border-white/20"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 20px 60px rgba(59, 130, 246, 0.5)',
            '0 20px 60px rgba(139, 92, 246, 0.5)',
            '0 20px 60px rgba(59, 130, 246, 0.5)',
          ],
        }}
        transition={{
          boxShadow: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        aria-label="チャットを開く"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{
                rotate: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <Bot className="w-8 h-8" strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* チャットウィンドウ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-10rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* ヘッダー */}
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Awake AI アシスタント</h3>
                  <p className="text-xs text-blue-100">お気軽にご質問ください</p>
                </div>
              </div>
            </div>

            {/* メッセージエリア */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white'
                        : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                    }`}
                  >
                    {/* テキストメッセージまたは複合メッセージの表示 */}
                    {typeof message.content === 'string' ? (
                      <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                    ) : (
                      <div className="space-y-2">
                        {message.content.map((content, contentIndex) => (
                          <div key={contentIndex}>
                            {content.type === 'text' && content.text && (
                              <p className="text-sm whitespace-pre-wrap break-words">{content.text}</p>
                            )}
                            {content.type === 'image' && content.source && (
                              <div className="mt-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={`data:${content.source.media_type};base64,${content.source.data}`}
                                  alt="アップロードされた画像"
                                  className="max-w-full h-auto rounded-lg"
                                  style={{ maxHeight: '200px' }}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    <p
                      className={`text-xs mt-1 ${
                        message.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString('ja-JP', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-gray-800 rounded-2xl px-4 py-3 shadow-sm border border-gray-200">
                    <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* 入力エリア */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="メッセージを入力..."
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400"
                  disabled={isLoading || isUploadingImage}
                />
                
                {/* 画像アップロードボタン */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleImageUpload(file);
                    }
                  }}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isLoading || isUploadingImage}
                  className="bg-gray-100 text-gray-600 p-3 rounded-full hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="画像をアップロード"
                  title={`画像をアップロード（最大${MAX_IMAGE_DIMENSION}px）`}
                >
                  {isUploadingImage ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <ImageIcon className="w-5 h-5" />
                  )}
                </button>
                
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading || isUploadingImage}
                  className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-3 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="送信"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              {/* 画像アップロードの説明 */}
              <p className="text-xs text-gray-600 mt-2 text-center">
                画像をアップロードできます（JPEG、PNG、WebP、GIF形式、最大10MB、{MAX_IMAGE_DIMENSION}px以下）
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

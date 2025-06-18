'use client'

import { useState, memo, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

// アニメーション設定をローカルで定義（インポートエラー回避）
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

// 🚀 Ultra-Optimized Contact Form Component
interface FormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

const ContactForm = memo(function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // ⚡ Memoized handlers for performance
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', service: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [])

  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
    >
      <h3 className="text-2xl font-medium text-gray-900 mb-6">メールでお問い合わせ</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
              placeholder="山田太郎"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
              placeholder="example@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              会社名
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
              placeholder="株式会社◯◯"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              ご希望のサービス
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
            >
              <option value="">選択してください</option>
              <option value="web">ホームページ制作</option>
              <option value="ai">AIコンサルティング</option>
              <option value="ec">Amazon代理店サービス</option>
              <option value="other">その他</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            メッセージ <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors resize-none"
            placeholder="プロジェクトの詳細やご質問をお聞かせください..."
          />
        </div>

        {/* Submit Status */}
        {submitStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <p className="text-green-700 text-sm">
              お問い合わせありがとうございます。1営業日以内にご返信いたします。
            </p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <p className="text-red-700 text-sm">
              送信に失敗しました。もう一度お試しください。
            </p>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full inline-flex items-center justify-center px-8 py-4 
            font-medium rounded-lg transition-all duration-200 
            ${isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl'
            } 
            text-white
          `}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              送信中...
            </>
          ) : (
            <>
              送信する
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
})

export default ContactForm
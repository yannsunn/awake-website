'use client'

import { useState } from 'react'
import { ArrowRight, Phone, Mail, Shield } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-purple to-primary-purple-dark" id="contact" aria-labelledby="contact-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            まずは無料相談から始めましょう
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            あなたのビジネスの課題をお聞かせください。最適なソリューションをご提案いたします。
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                  placeholder="山田 太郎"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-primary-purple transition-colors"
                  aria-describedby="name-help"
                />
                <div id="name-help" className="sr-only">お名前をフルネームでご入力ください</div>
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
                  placeholder="yamada@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-primary-purple transition-colors"
                  aria-describedby="email-help"
                />
                <div id="email-help" className="sr-only">返信用のメールアドレスをご入力ください</div>
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
                  placeholder="株式会社サンプル"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-primary-purple transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  ご興味のあるサービス
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-primary-purple transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="web">HP制作・LP制作</option>
                  <option value="ec">EC通販サイト制作</option>
                  <option value="video">動画編集・制作</option>
                  <option value="furniture">家具製作</option>
                  <option value="clemira">CLEMIRA製品について</option>
                  <option value="all">すべて</option>
                  <option value="other">その他</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="ご質問・ご相談内容をお聞かせください"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-primary-purple transition-colors resize-none"
                aria-describedby="message-help"
              />
              <div id="message-help" className="sr-only">具体的なご要望や質問をご記入ください</div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-purple text-white font-bold py-4 px-8 rounded-lg hover:bg-primary-purple-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </span>
                ) : (
                  <>
                    無料相談を申し込む
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
            
            {submitStatus === 'success' && (
              <div className="text-green-600 text-center font-medium">
                お問い合わせありがとうございます。24時間以内にご返信いたします。
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="text-red-600 text-center font-medium">
                送信に失敗しました。お手数ですが、もう一度お試しください。
              </div>
            )}
          </form>
          
          <div className="mt-12 text-center space-y-3">
            <div className="flex items-center justify-center text-gray-600">
              <Phone className="h-5 w-5 mr-2" />
              <span>お電話でのご相談: <strong className="text-gray-900">050-7115-4948</strong> (平日 9:00-18:00)</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <Mail className="h-5 w-5 mr-2" />
              <span>24時間以内に返信いたします</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <Shield className="h-5 w-5 mr-2" />
              <span>個人情報は厳重に管理し、営業目的での利用は一切ありません</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
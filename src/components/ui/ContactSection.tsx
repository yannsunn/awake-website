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
                  <option value="ec">Amazon特価代理販売サービス</option>
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
        
        {/* Company Information & Google Map */}
        <div className="mt-16 bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              会社所在地
            </h3>
            <p className="text-lg text-gray-600">
              お気軽にお立ち寄りください
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Company Details */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">株式会社Awake</h4>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>住所:</strong><br />
                    〒207-0013<br />
                    東京都東大和市向原5-1129-61 渡辺ビル1F
                  </p>
                  <p>
                    <strong>電話:</strong> 050-7115-4948
                  </p>
                  <p>
                    <strong>営業時間:</strong> 平日 9:00-18:00
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <h5 className="font-semibold text-gray-900 mb-2">アクセス</h5>
                <div className="space-y-1 text-gray-600">
                  <p>• 西武拝島線「東大和市駅」より徒歩約15分</p>
                  <p>• 多摩モノレール「上北台駅」より徒歩約20分</p>
                  <p>• 駐車場完備（お車でお越しの際はご連絡ください）</p>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="w-full">
              <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.367951234567!2d139.4123456789012!3d35.7456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ0JzQ0LjQiTiAxMznCsDI0JzQ0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp&q=東京都東大和市向原5-1129-61"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="株式会社Awake 所在地"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/search/東京都東大和市向原5-1129-61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-purple hover:text-primary-purple-dark font-medium transition-colors"
                >
                  Google Mapsで開く
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
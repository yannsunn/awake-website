'use client'

import { useState, useRef } from 'react'
import { ArrowRight, Phone, Mail, Shield, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

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
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" id="contact" aria-labelledby="contact-title" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-blue-300 text-sm font-semibold shadow-lg">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              無料相談受付中
            </span>
          </motion.div>
          <motion.h2 
            id="contact-title" 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            まずは
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              無料相談
            </span>
            から<br className="md:hidden" />始めましょう
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            あなたのビジネスの課題をお聞かせください。
            <br className="hidden md:block" />
            最適なソリューションをご提案いたします。
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                aria-describedby="message-help"
              />
              <div id="message-help" className="sr-only">具体的なご要望や質問をご記入ください</div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
        </motion.div>
        
        {/* Company Information & Google Map */}
        <motion.div 
          className="mt-16 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-blue-50 border border-blue-200/50 rounded-full text-blue-700 text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              アクセス情報
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                会社所在地
              </span>
            </h3>
            <p className="text-lg text-gray-600">
              お気軽にお立ち寄りください
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Company Details */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/30">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  株式会社Awake
                </h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>住所:</strong><br />
                      〒207-0013<br />
                      東京都東大和市向原5-1129-61 渡辺ビル1F
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <strong>電話:</strong> 050-7115-4948
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <strong>営業時間:</strong> 平日 9:00-18:00
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-6 border border-gray-200/30">
                <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  アクセス
                </h5>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2">• 西武拝島線「東大和市駅」より徒歩約15分</p>
                  <p className="flex items-center gap-2">• 多摩モノレール「上北台駅」より徒歩約20分</p>
                  <p className="flex items-center gap-2">• 駐車場完備（お車でお越しの際はご連絡ください）</p>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="w-full">
              <div className="relative w-full h-80 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.367951234567!2d139.4123456789012!3d35.7456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ0JzQ0LjQiTiAxMznCsDI0JzQ0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp&q=東京都東大和市向原5-1129-61"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="株式会社Awake 所在地"
                  className="rounded-2xl"
                />
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://www.google.com/maps/search/東京都東大和市向原5-1129-61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 font-semibold rounded-xl border border-blue-200/50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Google Mapsで開く
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
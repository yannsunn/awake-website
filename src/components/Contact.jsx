import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

const Contact = () => {
  // フォームの状態管理
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 送信状態の管理
  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null
  });

  // 入力エラーの管理
  const [errors, setErrors] = useState({});

  // 入力変更のハンドラ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
    
    // 入力時にエラーをクリア
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // フォーム検証
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = '件名を入力してください';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'メッセージを入力してください';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // フォーム送信ハンドラ
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSubmitStatus({
      ...submitStatus,
      submitting: true
    });
    
    // ここで実際のAPI送信をシミュレート
    try {
      // 実際の実装では、ここでfetchなどを使ってAPIにデータを送信します
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: null
      });
      
      // フォームをリセット
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // 送信成功のステータスを5秒後にリセット
      setTimeout(() => {
        setSubmitStatus({
          submitting: false,
          submitted: false,
          success: false,
          error: null
        });
      }, 5000);
      
    } catch (error) {
      setSubmitStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: '送信中にエラーが発生しました。後でもう一度お試しください。'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">お問い合わせ</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              ご質問やプロジェクトのご相談など、お気軽にお問い合わせください。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 animate-on-scroll" data-delay="200">
            {submitStatus.submitted && submitStatus.success ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                  <Check size={32} className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">お問い合わせありがとうございます</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  メッセージを受け付けました。通常、1営業日以内にご返信いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-700'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
                      placeholder="山田 太郎"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-700'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
                    placeholder="お問い合わせの件名"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-700'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
                    placeholder="お問い合わせ内容を入力してください"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                {submitStatus.error && (
                  <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 flex">
                    <AlertCircle size={20} className="text-red-500 dark:text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-red-700 dark:text-red-400">{submitStatus.error}</p>
                  </div>
                )}
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={submitStatus.submitting}
                    className={`inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition duration-200 ${
                      submitStatus.submitting 
                        ? 'opacity-75 cursor-not-allowed' 
                        : 'hover:bg-blue-700'
                    }`}
                  >
                    {submitStatus.submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        送信中...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        送信する
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">電話でのお問い合わせ: <a href="tel:03-1234-5678" className="text-blue-600 dark:text-blue-400 hover:underline">03-1234-5678</a></p>
            <p className="text-gray-600 dark:text-gray-400">メールでのお問い合わせ: <a href="mailto:info@awake.co.jp" className="text-blue-600 dark:text-blue-400 hover:underline">info@awake.co.jp</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
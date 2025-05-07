import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

// メインコンポーネント
const ModernWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // スクロール検知のためのuseEffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // アクティブセクションの更新
      const sections = ['home', 'about', 'service', 'achievements', 'contact'];
      for (const id of sections.reverse()) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FAQアイテムコンポーネント
  const FaqItem = ({ question, answer, isOpen: defaultOpen }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    
    return (
      <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
        <button
          className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
          <ChevronDown 
            size={20} 
            className={`text-indigo-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </button>
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-6 pt-0 text-gray-600">
            {answer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      {/* ヘッダー */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-xl font-bold text-indigo-600 flex items-center">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg mr-2 flex items-center justify-center text-white">
                AI
              </div>
              <span className={`transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>CONSULTANT</span>
            </div>
          </div>
          
          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {['ホーム', '私について', 'サービス', '実績', 'お問い合わせ'].map((item, index) => {
                const sectionId = ['home', 'about', 'service', 'achievements', 'contact'][index];
                return (
                  <li key={index}>
                    <a 
                      href={`#${sectionId}`} 
                      className={`relative pb-1 font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-indigo-500 transition-colors duration-300 ${activeSection === sectionId ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500' : ''}`}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* モバイルメニューボタン */}
          <button 
            className="md:hidden text-indigo-600 p-2 rounded-lg bg-white bg-opacity-90 shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 transition-all duration-300">
            <ul className="space-y-4">
              {['ホーム', '私について', 'サービス', '実績', 'お問い合わせ'].map((item, index) => {
                const sectionId = ['home', 'about', 'service', 'achievements', 'contact'][index];
                return (
                  <li key={index}>
                    <a 
                      href={`#${sectionId}`} 
                      className={`block py-2 px-4 rounded-lg ${activeSection === sectionId ? 'bg-indigo-50 text-indigo-600' : 'text-gray-800'} hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>

      {/* ヒーローセクション */}
      <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-indigo-800 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI技術で<span className="inline-block px-2 relative">
                <span className="relative z-10">ビジネスを加速</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-400 opacity-40 rounded"></span>
              </span>する
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-indigo-100">
              最新のAI技術と戦略的なアプローチで、あなたのビジネスを次のレベルへ。
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
              <a href="#service" className="px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                サービスを見る
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#contact" className="px-8 py-4 rounded-lg bg-transparent border-2 border-white hover:bg-white hover:text-indigo-800 text-white font-semibold transform hover:-translate-y-1 transition-all duration-300">
                お問い合わせ
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-4 flex items-center max-w-sm mx-auto mt-12">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className="text-gray-800 text-sm">
                これまでに<span className="font-bold text-orange-500">20社以上</span>のビジネスをサポート
              </p>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <div className="w-8 h-14 border-2 border-white rounded-full relative flex justify-center">
              <div className="w-2 h-2 bg-white rounded-full absolute top-3 animate-scroll"></div>
            </div>
            <p className="text-sm mt-2 text-indigo-100">スクロールして詳細を見る</p>
          </div>
        </div>
        <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-indigo-500 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
      </section>

      {/* 私についてセクション */}
      <section id="about" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">私について</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI開発のプロフェッショナルとして、最先端技術を活用したソリューションを提供しています。
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-full lg:w-2/5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 rounded-lg z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800" 
                  alt="プロフィール写真" 
                  className="rounded-lg shadow-xl z-10 relative"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-100 rounded-lg z-0"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-3/5">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative inline-block">
                AIコンサルタント / デベロッパー
                <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500"></div>
              </h3>
              <p className="text-gray-600 mb-6">
                3年以上のAI開発経験を持ち、様々な企業のDXを支援してきました。特にSNSマーケティングにおいてAIを活用した戦略立案と実装に強みを持っています。
              </p>
              <p className="text-gray-600 mb-8">
                これまでに20社以上のクライアントをサポートし、売上向上・業務効率化・コスト削減など様々な成果を上げてきました。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { value: '3+', label: '年の経験' },
                  { value: '20+', label: '取引企業' },
                  { value: '15+', label: 'AIプロジェクト' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 transform hover:-translate-y-2 transition-all duration-300">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: 'award', text: 'AI開発認定資格' },
                  { icon: 'star', text: 'マーケティング協会会員' },
                  { icon: 'trophy', text: 'DX推進賞受賞' }
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {badge.icon === 'award' && (
                        <>
                          <circle cx="12" cy="8" r="7" />
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                        </>
                      )}
                      {badge.icon === 'star' && (
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      )}
                      {badge.icon === 'trophy' && (
                        <>
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                          <path d="M4 22h16" />
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                        </>
                      )}
                    </svg>
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16 text-center">お客様の声</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "SNSコンサルティングを依頼してから、フォロワー数が3倍に増加しました。プロフェッショナルなアドバイスと実践的な戦略に感謝しています。",
                name: "田中様",
                role: "アパレル企業 マーケティング担当",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200"
              },
              {
                quote: "AI開発のサポートにより、業務効率が大幅に向上しました。専門知識がなくても理解しやすい説明と、柔軟な対応に満足しています。",
                name: "佐藤様",
                role: "食品メーカー IT部門",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
                <div className="text-5xl text-indigo-200 absolute top-4 left-4 font-serif">"</div>
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4"/>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section id="service" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">サービス内容</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI技術を活用した様々なサービスをご提供しています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "laptop",
                title: "ホームページ制作",
                description: "ビジネスの魅力を最大限に引き出す、モダンで高品質なホームページを制作します。SEO対策とモバイル対応を標準装備。",
                features: ["レスポンシブデザイン", "SEO最適化", "アニメーション効果", "お問い合わせフォーム"],
                price: "88,000円〜",
                highlight: true
              },
              {
                icon: "bot",
                title: "AIチャットボット開発",
                description: "あなたのビジネスに合わせたカスタムAIチャットボットを開発。顧客対応の自動化と24時間対応を実現します。",
                features: ["カスタムAIモデル構築", "マルチプラットフォーム対応", "多言語サポート", "定期的な改善・アップデート"],
                price: "220,000円〜",
                highlight: false
              },
              {
                icon: "brain",
                title: "AIシステム導入支援",
                description: "業務効率化のためのAIシステム導入を支援します。要件定義から実装、運用までをサポートします。",
                features: ["業務分析と要件定義", "システム設計・構築", "社内トレーニング", "保守・運用サポート"],
                price: "380,000円〜",
                highlight: false
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                  service.highlight 
                  ? 'ring-2 ring-orange-500 shadow-xl relative bg-white' 
                  : 'bg-white shadow-lg'
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    おすすめ
                  </div>
                )}
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-full ${service.highlight ? 'bg-orange-100 text-orange-500' : 'bg-indigo-100 text-indigo-500'} flex items-center justify-center mx-auto mb-6`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {service.icon === "laptop" && (
                        <>
                          <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
                          <line x1="2" y1="20" x2="22" y2="20" />
                        </>
                      )}
                      {service.icon === "bot" && (
                        <>
                          <rect x="3" y="11" width="18" height="10" rx="2" />
                          <circle cx="12" cy="5" r="2" />
                          <path d="M12 7v4" />
                          <line x1="8" y1="16" x2="8" y2="16" />
                          <line x1="16" y1="16" x2="16" y2="16" />
                        </>
                      )}
                      {service.icon === "brain" && (
                        <>
                          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
                          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
                        </>
                      )}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="text-green-500 mr-2 mt-1 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`text-xl font-bold text-center mb-6 ${service.highlight ? 'text-orange-500' : 'text-indigo-600'}`}>
                    {service.price}
                  </div>
                  <a 
                    href="#contact" 
                    className={`block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      service.highlight 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'bg-indigo-500 hover:bg-indigo-600 text-white'
                    }`}
                  >
                    {service.highlight ? '今すぐ相談する' : '詳細を聞く'}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16">
            {[
              { icon: "shield", text: "満足度保証" },
              { icon: "clock", text: "長期サポート" },
              { icon: "lock", text: "データ保護" },
              { icon: "zap", text: "迅速な対応" }
            ].map((badge, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-indigo-500 flex justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {badge.icon === "shield" && (
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    )}
                    {badge.icon === "clock" && (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </>
                    )}
                    {badge.icon === "lock" && (
                      <>
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </>
                    )}
                    {badge.icon === "zap" && (
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    )}
                  </svg>
                </div>
                <p className="font-bold text-gray-800">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernWebsite; 
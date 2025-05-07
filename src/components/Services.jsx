import React, { useState } from 'react';
import { ShoppingCart, Cpu, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('ec');

  const services = [
    {
      id: 'ec',
      title: 'ネット通販事業',
      icon: <ShoppingCart size={24} />,
      description: 'お客様のビジネスに最適なECソリューションを提供します。ウェブストアの構築から決済システムの導入、在庫管理まで、オンラインビジネスの成功に必要なすべてのサポートを提供します。',
      features: [
        'カスタムECサイト構築',
        'モバイルフレンドリーなショッピング体験',
        '安全な決済システム統合',
        '在庫・注文管理システム',
        'マーケティングと集客支援'
      ]
    },
    {
      id: 'ai',
      title: 'AI事業',
      icon: <Cpu size={24} />,
      description: '最新のAI技術を活用して、ビジネスプロセスの効率化と革新を実現します。データ分析、自動化、予測モデルなど、人工知能の力でビジネスの可能性を拡大します。',
      features: [
        'ビジネスインテリジェンスと予測分析',
        'チャットボットと顧客サポート自動化',
        'レコメンデーションエンジン',
        '画像・音声認識ソリューション',
        'カスタムAIモデル開発'
      ]
    },
    {
      id: 'insurance',
      title: '保険紹介事業',
      icon: <Shield size={24} />,
      description: 'お客様のニーズに合った最適な保険プランを紹介します。リスク管理の専門家として、個人から企業まで、安心と保障を提供する最適なソリューションをアドバイスします。',
      features: [
        'リスク評価とニーズ分析',
        'カスタム保険プラン設計',
        '既存保険の見直しと最適化',
        '企業向け福利厚生プラン',
        '保険金請求サポート'
      ]
    }
  ];

  // アクティブなサービスを取得
  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">私たちのサービス</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            お客様のビジネスを成長させるための革新的なソリューションを提供しています
          </p>
        </div>

        {/* サービスタブ */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-2">{service.icon}</span>
                  <span>{service.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* アクティブなサービスの詳細 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500">
            <div className="p-8">
              <div className="flex items-center mb-4 animate-fade-right" data-delay="100">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  {activeService.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{activeService.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 animate-fade-right" data-delay="200">
                {activeService.description}
              </p>
              <div className="space-y-3 animate-fade-right" data-delay="300">
                {activeService.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3 text-blue-600 dark:text-blue-400">
                      <ArrowRight size={16} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* サービスカード - モバイル向けグリッド表示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover-effect stagger-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description.substring(0, 120)}...
                </p>
                <button 
                  onClick={() => setActiveTab(service.id)}
                  className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                >
                  詳細を見る
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            あなたのビジネスに最適なソリューションをお探しですか？
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            専門家チームがお客様のニーズに合ったカスタムソリューションをご提案します
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg bg-blue-600 text-white font-medium text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl animate-pulse-slow"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 
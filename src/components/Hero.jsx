import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-800 to-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            新しい<span className="inline-block px-2 relative">
              <span className="relative z-10">ビジネスの可能性</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-400 opacity-40 rounded"></span>
            </span>を開く
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            ネット通販、AI事業、保険紹介で、あなたのビジネスの成長をサポート
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
            <a href="#services" className="px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
              サービスを見る
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-lg bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white font-semibold transform hover:-translate-y-1 transition-all duration-300">
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-blue-500 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default Hero; 
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-xl font-bold flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg mr-2 flex items-center justify-center text-white">
                A
              </div>
              <span>Awake Inc.</span>
            </div>
            <p className="text-gray-400 mb-6">
              ネット通販、AI事業、保険紹介で、あなたのビジネスの成長をサポートします。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">サービス</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">ネット通販</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">AI事業</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">保険紹介</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">お問い合わせ</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:shop@awakeinc.co.jp" className="hover:text-white transition-colors duration-300">shop@awakeinc.co.jp</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:08069092674" className="hover:text-white transition-colors duration-300">080-6909-2674</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 株式会社Awake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
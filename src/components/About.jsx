import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">会社概要</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            株式会社Awakeは、革新的なビジネスソリューションを提供し、
            お客様のビジネス成長をサポートします。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 relative inline-block">
              私たちについて
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
            </h3>
            
            <div className="space-y-4 text-gray-600">
              <p>
                株式会社Awakeは、お客様のビジネスを成長させるための包括的なサービスを提供しています。
                ネット通販、AI事業、保険紹介と多岐にわたる分野でプロフェッショナルなサポートを行っています。
              </p>
              <p>
                お客様一人ひとりのニーズに合わせたカスタマイズされたソリューションを提供し、
                ビジネスの成功に導くパートナーとして共に歩みます。
              </p>
              <p>
                代表取締役 田形康貴が掲げるビジョンのもと、チーム一丸となって革新的なサービスを提供しています。
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
              会社情報
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-28 flex-shrink-0 font-medium text-gray-700">会社名</div>
                <div className="flex-grow">株式会社Awake</div>
              </div>
              
              <div className="flex items-start">
                <div className="w-28 flex-shrink-0 font-medium text-gray-700">代表者</div>
                <div className="flex-grow">代表取締役 田形康貴</div>
              </div>
              
              <div className="flex items-start">
                <div className="w-28 flex-shrink-0 font-medium text-gray-700">所在地</div>
                <div className="flex-grow">〒207-0013<br />東京都東大和市向原5-1129-61 渡辺ビル1F</div>
              </div>
              
              <div className="flex items-start">
                <div className="w-28 flex-shrink-0 font-medium text-gray-700">連絡先</div>
                <div className="flex-grow">
                  <div>メール: shop@awakeinc.co.jp</div>
                  <div>電話: 080-6909-2674</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-28 flex-shrink-0 font-medium text-gray-700">事業内容</div>
                <div className="flex-grow">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>ネット通販事業</li>
                    <li>AI事業</li>
                    <li>保険紹介事業</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
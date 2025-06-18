import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { User, Target, Heart, Award, Users, Zap } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "会社概要・代表挨拶 | 株式会社Awake",
  description: "株式会社Awakeの会社概要、代表取締役田形康貴からのメッセージ、ミッション・ビジョンをご紹介。革新的なソリューションで企業の成長をサポート。",
  keywords: "株式会社Awake, 田形康貴, 会社概要, 代表挨拶, ミッション, ビジョン, 企業理念",
  openGraph: {
    title: "会社概要・代表挨拶 | 株式会社Awake",
    description: "代表取締役田形康貴からのメッセージと企業理念。革新的なソリューションで企業の成長をサポートします。",
    images: ["/assets/images/ogp.jpg"],
    url: "https://awakeinc.co.jp/about/",
  },
}

const values = [
  {
    icon: Target,
    title: "お客様第一",
    description: "お客様の成功が私たちの成功。常にお客様の視点に立ち、最適なソリューションを提供いたします。"
  },
  {
    icon: Zap,
    title: "革新への挑戦",
    description: "最新技術とクリエイティブな発想で、業界の常識を覆す革新的なサービスを創出し続けます。"
  },
  {
    icon: Heart,
    title: "誠実な姿勢",
    description: "すべてのステークホルダーに対して誠実であり、透明性の高い事業運営を心がけています。"
  },
  {
    icon: Users,
    title: "チームワーク",
    description: "多様な才能を結集し、チーム一丸となってお客様の課題解決に取り組みます。"
  }
]

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main role="main" className="pt-16">
        {/* Hero Section - Toyota Style */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              会社概要・代表挨拶
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              革新的なソリューションで企業の成長をサポートし、<br />
              お客様と共に新しい価値を創造する会社です。
            </p>
          </div>
        </section>

        {/* CEO Message Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <User className="h-8 w-8 text-gray-900 mr-3" />
                  <span className="text-gray-900 font-semibold">CEO Message</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  代表挨拶
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    株式会社Awakeは、「目覚めよ、可能性を」をモットーに、企業様の潜在能力を最大限に引き出すソリューションを提供しています。
                  </p>
                  <p>
                    現代のビジネス環境は急速に変化しており、デジタル変革なくして企業の持続的成長はありえません。私たちは、ホームページ制作からAmazon販売支援、AIコンサルティングまで、包括的なデジタルソリューションで企業様の変革をサポートいたします。
                  </p>
                  <p>
                    お客様一社一社と真摯に向き合い、ただのサービス提供者ではなく、成長を共にするパートナーとして、長期的な関係を築いてまいります。
                  </p>
                  <div className="pt-4">
                    <p className="font-semibold text-gray-900">代表取締役</p>
                    <p className="text-2xl font-bold text-gray-900">田形 康貴</p>
                  </div>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="bg-gray-100 rounded-2xl p-8 text-center">
                  <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">田形 康貴</h3>
                  <p className="text-gray-900 font-semibold mb-4">代表取締役CEO</p>
                  <p className="text-gray-600 text-sm">
                    東京都出身。デジタルマーケティング業界にて10年以上の経験を積み、
                    2020年に株式会社Awakeを設立。お客様の成功を第一に、
                    革新的なデジタルソリューションの提供を使命としている。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ミッション・ビジョン
              </h2>
              <p className="text-xl text-gray-600">
                私たちが目指す未来と大切にしている価値観
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="text-center p-8 bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">ミッション</h3>
                <p className="text-gray-600 leading-relaxed">
                  革新的なデジタルソリューションで企業の可能性を目覚めさせ、
                  持続的な成長と新しい価値創造を実現する。
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">ビジョン</h3>
                <p className="text-gray-600 leading-relaxed">
                  デジタル変革のパートナーとして、お客様と共に業界をリードし、
                  社会により良いインパクトを与える企業となる。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                私たちの価値観
              </h2>
              <p className="text-xl text-gray-600">
                日々の業務で大切にしている4つの価値観
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                会社概要
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border p-8">
              <dl className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">会社名</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">株式会社Awake（Awake Inc.）</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">代表取締役</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">田形 康貴</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">所在地</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">〒207-0013 東京都東大和市向原5-1129-61 渡辺ビル1F</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">電話番号</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">050-7115-4948</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">メールアドレス</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">shop@awakeinc.co.jp</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">営業時間</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">平日 9:00-18:00</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">事業内容</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      <li>ホームページ制作サービス</li>
                      <li>Amazon代理店サービス</li>
                      <li>AIコンサルティングサービス</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
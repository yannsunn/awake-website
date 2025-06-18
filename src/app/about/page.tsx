import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { User, Target, Heart, Award, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import { COMPANY_DATA } from '@/lib/company-data'

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
              弊社とつながるすべての人に感謝と繁栄を<br />
              信頼の関係づくりで、共に成長し続ける企業です。
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
                    「弊社とつながるすべての人に感謝と繁栄を」
                  </p>
                  <p>
                    これが私たちの根本的な想いです。すべての企業に美しいコーポレートサイトを、そして社内にAIを導入していただきたい。HPは会社の顔であり、AI導入は代表のリテラシーが試される時代だからです。
                  </p>
                  <p>
                    私は与え続けることで縁が太くなると信じています。まず代表である私が起き上がり、お客様との信頼の関係づくりに全力で取り組みます。ただのサービス提供者ではなく、共に成長し続けるパートナーとして、皆様の繁栄をお手伝いいたします。
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
                    静岡県清水区出身。トヨタの整備士を経て物販会社を起業。
                    2020年（令和2年）に株式会社Awakeを設立し、現在5期目（令和6年度）。
                    信頼の関係づくりを第一に、お客様の繁栄を共に目指している。
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
                  つながるすべての人に感謝と繁栄をもたらすこと。それが私たちの使命です。美しいコーポレートサイトと効果的なAI導入により、企業の価値向上を支援します。ホームページは企業の顔として、AIは経営革新の手段として、今の時代に欠かせない要素となっています。私たちは継続的な価値提供を通じて信頼関係を築き、お客様と共に成長するパートナーを目指します。
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">ビジョン</h3>
                <p className="text-gray-600 leading-relaxed">
                  代表自らが率先して行動し、模範を示すことから始まります。トヨタの整備士から物販事業を経て起業した経験を活かし、信頼関係の構築を最も重視しています。静岡県清水区出身の代表田形康貴は、2020年の設立から現在5期目を迎え、「与え続けることで関係性を深める」という経営哲学のもと、お客様と共に持続的な成長を遂げる未来を築いてまいります。
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
                  <dd className="sm:col-span-2 text-sm text-gray-700">{COMPANY_DATA.basic.name}（{COMPANY_DATA.basic.nameEn}）</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">代表取締役</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">{COMPANY_DATA.basic.ceo}</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">所在地</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">{COMPANY_DATA.contact.address.postal} {COMPANY_DATA.contact.address.full}</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">電話番号</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">{COMPANY_DATA.contact.phone}</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">メールアドレス</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">{COMPANY_DATA.contact.email}</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">営業時間</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">{COMPANY_DATA.contact.businessHours.weekdays}</dd>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-sm font-semibold text-gray-900">事業内容</dt>
                  <dd className="sm:col-span-2 text-sm text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      {COMPANY_DATA.services.list.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
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
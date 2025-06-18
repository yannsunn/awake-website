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
              会社概要
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              信頼の絆で、共に成長し続ける企業<br />
              株式会社Awakeは、美しいコーポレートサイト制作と先進的なAI導入支援を通じて、お客様企業の成長と発展を支えるテクノロジーパートナーです。
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
                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 mb-2">代表取締役CEO　田形 康貴</p>
                    <p className="text-lg text-gray-600">お客様、パートナー企業の皆様、そして当社に関わるすべての方々へ</p>
                  </div>
                  <p>
                    私がトヨタ系ディーラーで整備士として働いていた頃、一台一台の車に込められたお客様の想いと向き合う中で、「信頼」という価値の重みを学びました。その後、物販企業を経営する中で、ビジネスの本質は技術やサービスの提供だけでなく、人と人との信頼関係にあることを確信しました。
                  </p>
                  <p>
                    2020年に株式会社Awakeを設立し、5期目を迎えた今、私たちが大切にしているのは「与え続けることで縁を太くする」という理念です。これは単なる美辞麗句ではなく、実体験から生まれた経営の核心です。
                  </p>
                  <p>
                    現代は、企業ウェブサイトが会社の顔となり、AI活用が競争力を左右する時代です。しかし、どんなに技術が進化しても、その根底にあるべきは人と人との信頼関係だと私は信じています。
                  </p>
                  <p>
                    私たちは、単なるサービス提供者ではありません。お客様の課題を自らの課題として捉え、共に解決策を模索し、成功を分かち合うパートナーでありたいと願っています。お客様の繁栄なくして、私たちの成長はありません。この想いを胸に、これからも誠実に、そして情熱を持って事業に取り組んでまいります。
                  </p>
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-xl font-semibold text-gray-900 mb-2">つながるすべての人に、感謝と繁栄を。</p>
                    <p className="text-gray-600">この言葉を実現するために、私たちは今日も全力で走り続けます。</p>
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
                <p className="text-lg font-semibold text-gray-800 mb-3">つながるすべての人に、感謝と繁栄を</p>
                <p className="text-gray-600 leading-relaxed">
                  私たちは、美しいコーポレートサイト制作と革新的なAI導入支援を通じて、すべての企業がデジタル時代に輝ける未来を創造します。技術の力で可能性を広げ、信頼の絆で成功を確かなものにします。
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">ビジョン</h3>
                <p className="text-lg font-semibold text-gray-800 mb-3">技術と信頼の融合で、持続可能な共栄社会を実現する</p>
                <p className="text-gray-600 leading-relaxed">
                  急速に進化するデジタル社会において、私たちは最先端技術の提供者であると同時に、お客様に寄り添う伴走者でありたいと考えています。「与え続けることで縁を太くする」という理念のもと、短期的な成果よりも長期的な関係性を重視し、お客様と共に成長し続ける企業を目指します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                私たちの約束
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  number: "1",
                  title: "真のパートナーシップ",
                  description: "お客様の成功を自らの成功と捉え、課題解決に全力で取り組みます"
                },
                {
                  number: "2", 
                  title: "継続的な価値創造",
                  description: "導入後も伴走し、変化する時代に合わせた最適なソリューションを提供し続けます"
                },
                {
                  number: "3",
                  title: "誠実な関係構築", 
                  description: "透明性を保ち、約束を守り、期待を超える成果を追求します"
                },
                {
                  number: "4",
                  title: "革新への挑戦",
                  description: "最新技術を積極的に取り入れ、お客様に新たな可能性を提案します"
                },
                {
                  number: "5",
                  title: "感謝の循環",
                  description: "いただいた信頼に感謝し、それ以上の価値でお返しすることで、豊かな関係を築きます"
                }
              ].map((promise, index) => (
                <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {promise.number}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {promise.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gray-50">
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
              <p className="text-lg text-gray-600 font-medium">
                令和2年設立 | 信頼と革新で、共に未来を創る
              </p>
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
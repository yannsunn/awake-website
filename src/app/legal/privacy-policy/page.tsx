import type { Metadata } from 'next'
import Link from 'next/link'
import { COMPANY_DATA } from '@/lib/company-data'
import PageLayout from '@/components/layout/PageLayout'
import { UltraHero } from '@/components/ui/UltraSection'


export const metadata: Metadata = {
  title: "プライバシーポリシー | 株式会社Awake",
  description: "株式会社Awakeのプライバシーポリシーをご確認ください。個人情報の取扱いについて詳しく説明しています。",
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: `${COMPANY_DATA.url}/legal/privacy-policy`,
    siteName: COMPANY_DATA.basic.name,
    title: "プライバシーポリシー | 株式会社Awake",
    description: "株式会社Awakeのプライバシーポリシーをご確認ください。個人情報の取扱いについて詳しく説明しています。",
    images: [
      {
        url: `${COMPANY_DATA.url}/assets/images/ogp.jpg`,
        width: 1200,
        height: 630,
        alt: "株式会社Awake - プライバシーポリシー"
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "プライバシーポリシー | 株式会社Awake",
    description: "株式会社Awakeのプライバシーポリシー。個人情報の取扱いについて。",
    images: [`${COMPANY_DATA.url}/assets/images/ogp.jpg`],
  },
  alternates: {
    canonical: `${COMPANY_DATA.url}/legal/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "プライバシーポリシー", url: "/legal/privacy-policy" }
  ]

  return (
    <PageLayout
      title="プライバシーポリシー"
      description="株式会社Awakeのプライバシーポリシー"
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <UltraHero
        title="プライバシーポリシー"
        description="最終更新日: 2025年1月1日"
        backgroundImage="/images/balance-concept.webp"
      />

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <p className="text-lg sm:text-xl md:text-2xl">
                株式会社Awake（以下「当社」）は、当社が提供するサービスをご利用いただくお客様の個人情報を適切に保護することを社会的責務と考え、個人情報の保護に関する法律、その他関係法令等を遵守し、お客様の個人情報を適切に取り扱います。
              </p>
            </div>

            <div className="space-y-12">
              <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">1. 個人情報の定義</h2>
                <p className="text-base sm:text-lg">
                  本プライバシーポリシーにおいて、「個人情報」とは、個人情報の保護に関する法律にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。
                </p>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">2. 個人情報の収集方法</h2>
                <p className="text-base sm:text-lg mb-4">
                  当社は、お客様から個人情報を収集する際は、適法かつ公正な手段により、かつお客様の意思に基づいて収集いたします。当社が個人情報を収集する場面は、主に以下の通りです。
                </p>
                <ul className="list-disc list-inside text-base sm:text-lg space-y-2 ml-4">
                  <li>お問い合わせフォームのご入力時</li>
                  <li>サービスお申込み時</li>
                  <li>メールマガジンお申込み時</li>
                  <li>各種キャンペーンお申込み時</li>
                  <li>アンケートのご回答時</li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">3. 収集する個人情報の項目</h2>
                <p className="text-base sm:text-lg mb-4">
                  当社では、お客様から以下の個人情報を収集することがあります。
                </p>
                <ul className="list-disc list-inside text-base sm:text-lg space-y-2 ml-4">
                  <li>氏名（フリガナ）</li>
                  <li>メールアドレス</li>
                  <li>電話番号</li>
                  <li>住所</li>
                  <li>会社名・部署名・役職</li>
                  <li>その他お問い合わせやサービス利用に必要な情報</li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">4. 個人情報の利用目的</h2>
                <p className="text-base sm:text-lg mb-4">
                  当社は、お客様からお預かりした個人情報を、以下の目的で利用いたします。
                </p>
                <ul className="list-disc list-inside text-base sm:text-lg space-y-2 ml-4">
                  <li>お客様へのサービス提供</li>
                  <li>お客様からのお問い合わせ対応</li>
                  <li>サービスに関するご案内・情報提供</li>
                  <li>メールマガジンの配信</li>
                  <li>キャンペーン・イベントに関するご案内</li>
                  <li>アンケートの実施</li>
                  <li>サービスの改善・開発</li>
                  <li>利用状況の分析</li>
                  <li>その他上記に付随する目的</li>
                </ul>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">5. 個人情報の第三者提供</h2>
                <p className="text-base sm:text-lg mb-4">
                  当社は、お客様の同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                </p>
                <p className="text-base sm:text-lg">
                  なお、当社では、より良いサービスの提供のため、業務の一部を外部に委託する場合があります。委託先に対しては、適切な監督を行い、お客様の個人情報を適切に取り扱うよう義務付けています。
                </p>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">6. 個人情報の開示・訂正・削除</h2>
                <p className="text-base sm:text-lg">
                  お客様は、当社の保有する自己の個人情報について、開示・訂正・削除・利用停止等を求めることができます。これらのお申し出をいただく際には、お客様ご本人を確認させていただいたうえで、法令に従い対応させていただきます。お申し出は、下記のお問い合わせ先までご連絡ください。
                </p>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">7. 個人情報の安全管理</h2>
                <p className="text-base sm:text-lg">
                  当社は、お客様の個人情報を適切に管理し、不正アクセス・紛失・破壊・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
                </p>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">8. Cookie（クッキー）について</h2>
                <p className="text-base sm:text-lg">
                  当社のウェブサイトでは、お客様により良いサービスを提供するため、Cookie（クッキー）を使用することがあります。Cookieを使用することで、お客様のサイト閲覧履歴を把握し、より便利で個人に適したサービスを提供することができます。Cookieの使用を希望されない場合は、お客様のブラウザでCookieを無効にすることができます。
                </p>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">9. アクセス解析ツールについて</h2>
                <p className="text-base sm:text-lg">
                  当社では、ウェブサイトの分析のためにGoogle Analyticsを利用しています。Google Analyticsは、トラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
                </p>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">10. プライバシーポリシーの変更</h2>
                <p className="text-base sm:text-lg">
                  当社は、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
                </p>
              </section>

              <section className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">11. お問い合わせ</h2>
                <p className="text-base sm:text-lg mb-6">
                  本プライバシーポリシーに関するお問い合わせは、下記の連絡先までお願いいたします。
                </p>
                <div className="bg-blue-50 p-6 rounded border border-blue-200">
                  <p className="text-base sm:text-lg text-gray-900 font-bold mb-3">{COMPANY_DATA.basic.name}</p>
                  <p className="text-base sm:text-lg text-gray-900">個人情報保護責任者: {COMPANY_DATA.basic.ceo}</p>
                  <p className="text-base sm:text-lg text-gray-900">{COMPANY_DATA.contact.address.postal} {COMPANY_DATA.contact.address.full}</p>
                  <p className="text-base sm:text-lg text-gray-900">TEL: {COMPANY_DATA.contact.phone}</p>
                  <p className="text-base sm:text-lg text-gray-900">Email: {COMPANY_DATA.contact.email}</p>
                  <p className="text-sm sm:text-base text-gray-900 mt-2">営業時間: {COMPANY_DATA.contact.businessHours.weekdays}（土日祝日除く）</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24" style={{ background: 'rgb(249, 250, 251)' }}>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            プライバシーに関するご質問
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            個人情報の取扱いについてご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <Link href="/#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
            お問い合わせ
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
import type { Metadata } from 'next'
import { COMPANY_DATA } from '@/lib/company-data'
import PageLayout from '@/components/layout/PageLayout'
import UltraSection, { UltraHero, UltraCTA } from '@/components/ui/UltraSection'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { STYLES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { TEXT_SHADOW, CARD_STYLES } from '@/lib/ultra-styles'

export const metadata: Metadata = {
  title: "プライバシーポリシー | 株式会社Awake",
  description: "株式会社Awakeのプライバシーポリシーをご確認ください。個人情報の取扱いについて詳しく説明しています。",
  robots: "index, follow",
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
        description="最終更新日: 2024年1月1日"
      />

      {/* Content */}
      <UltraSection variant="medium">
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
              株式会社Awake（以下「当社」）は、当社が提供するサービスをご利用いただくお客様の個人情報を適切に保護することを社会的責務と考え、個人情報の保護に関する法律、その他関係法令等を遵守し、お客様の個人情報を適切に取り扱います。
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>1. 個人情報の定義</h2>
              <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                    本プライバシーポリシーにおいて、「個人情報」とは、個人情報の保護に関する法律にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報および容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                  </p>
                </section>

            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>2. 個人情報の収集方法</h2>
              <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                    当社は、お客様から個人情報を収集する際は、適法かつ公正な手段により、かつお客様の意思に基づいて収集いたします。当社が個人情報を収集する場面は、主に以下の通りです。
                  </p>
              <ul className="list-disc list-inside text-gray-200 leading-relaxed space-y-2" style={TEXT_SHADOW.body}>
                <li>お問い合わせフォームのご入力時</li>
                <li>サービスお申込み時</li>
                <li>メールマガジンお申込み時</li>
                <li>各種キャンペーンお申込み時</li>
                <li>アンケートのご回答時</li>
              </ul>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>3. 収集する個人情報の項目</h2>
                  <p className="text-gray-200 leading-relaxed mb-4" style={TEXT_SHADOW.body}>
                    当社では、お客様から以下の個人情報を収集することがあります。
                  </p>
                  <ul className="list-disc list-inside text-gray-200 leading-relaxed space-y-2" style={TEXT_SHADOW.body}>
                    <li>氏名（フリガナ）</li>
                    <li>メールアドレス</li>
                    <li>電話番号</li>
                    <li>住所</li>
                    <li>会社名・部署名・役職</li>
                    <li>その他お問い合わせやサービス利用に必要な情報</li>
                  </ul>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>4. 個人情報の利用目的</h2>
                  <p className="text-gray-200 leading-relaxed mb-4" style={TEXT_SHADOW.body}>
                    当社は、お客様からお預かりした個人情報を、以下の目的で利用いたします。
                  </p>
                  <ul className="list-disc list-inside text-gray-200 leading-relaxed space-y-2" style={TEXT_SHADOW.body}>
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

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>5. 個人情報の第三者提供</h2>
                  <p className="text-gray-200 leading-relaxed mb-4" style={TEXT_SHADOW.body}>
                    当社は、お客様の同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                  </p>
                  <p className="text-gray-200 leading-relaxed" style={TEXT_SHADOW.body}>
                    なお、当社では、より良いサービスの提供のため、業務の一部を外部に委託する場合があります。委託先に対しては、適切な監督を行い、お客様の個人情報を適切に取り扱うよう義務付けています。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>6. 個人情報の開示・訂正・削除</h2>
                  <p className="text-gray-200 leading-relaxed" style={TEXT_SHADOW.body}>
                    お客様は、当社の保有する自己の個人情報について、開示・訂正・削除・利用停止等を求めることができます。これらのお申し出をいただく際には、お客様ご本人を確認させていただいたうえで、法令に従い対応させていただきます。お申し出は、下記のお問い合わせ先までご連絡ください。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>7. 個人情報の安全管理</h2>
                  <p className="text-gray-200 leading-relaxed" style={TEXT_SHADOW.body}>
                    当社は、お客様の個人情報を適切に管理し、不正アクセス・紛失・破壊・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>8. Cookie（クッキー）について</h2>
                  <p className="text-gray-200 leading-relaxed" style={TEXT_SHADOW.body}>
                    当社のウェブサイトでは、お客様により良いサービスを提供するため、Cookie（クッキー）を使用することがあります。Cookieを使用することで、お客様のサイト閲覧履歴を把握し、より便利で個人に適したサービスを提供することができます。Cookieの使用を希望されない場合は、お客様のブラウザでCookieを無効にすることができます。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>9. アクセス解析ツールについて</h2>
                  <p className="text-gray-200 leading-relaxed" style={TEXT_SHADOW.body}>
                    当社では、ウェブサイトの分析のためにGoogle Analyticsを利用しています。Google Analyticsは、トラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>10. プライバシーポリシーの変更</h2>
                  <p className="text-gray-200 leading-relaxed" style={TEXT_SHADOW.body}>
                    当社は、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>11. お問い合わせ</h2>
                  <p className="text-gray-200 leading-relaxed" style={TEXT_SHADOW.body}>
                    本プライバシーポリシーに関するお問い合わせは、下記の連絡先までお願いいたします。
                  </p>
                  <div className={`mt-4 ${CARD_STYLES.standard}`}>
                    <p className="font-bold text-white" style={TEXT_SHADOW.body}>{COMPANY_DATA.basic.name}</p>
                    <p className="text-gray-200" style={TEXT_SHADOW.small}>個人情報保護責任者: {COMPANY_DATA.basic.ceo}</p>
                    <p className="text-gray-200" style={TEXT_SHADOW.small}>{COMPANY_DATA.contact.address.postal} {COMPANY_DATA.contact.address.full}</p>
                    <p className="text-gray-200" style={TEXT_SHADOW.small}>TEL: {COMPANY_DATA.contact.phone}</p>
                    <p className="text-gray-200" style={TEXT_SHADOW.small}>Email: {COMPANY_DATA.contact.email}</p>
                    <p className="text-gray-200 text-sm mt-2" style={TEXT_SHADOW.small}>営業時間: {COMPANY_DATA.contact.businessHours.weekdays}（土日祝日除く）</p>
                  </div>
                </section>
          </div>
        </div>
      </UltraSection>
      
      {/* Contact CTA */}
      <UltraCTA 
        title="プライバシーに関するご質問"
        description="個人情報の取扱いについてご不明な点がございましたら、お気軽にお問い合わせください。"
        buttons={[
          { href: "/#contact", label: "お問い合わせ", variant: "primary" as const }
        ]}
      />
    </PageLayout>
  )
}
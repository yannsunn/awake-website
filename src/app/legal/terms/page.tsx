import type { Metadata } from 'next'
import { COMPANY_DATA } from '@/lib/company-data'
import PageTemplate, { ContentSection } from '@/components/layout/PageTemplate'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { STYLES } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: "利用規約 | 株式会社Awake",
  description: "株式会社Awakeの利用規約をご確認ください。",
  robots: "index, follow",
}

export default function TermsPage() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "利用規約", url: "/legal/terms" }
  ]

  return (
    <PageTemplate
      title="利用規約"
      description="株式会社Awakeの利用規約"
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <ContentSection className="bg-gray-overlay">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={STYLES.heading.h1.primary + " mb-4"}>利用規約</h1>
          <p className={STYLES.text.description.small + " text-gray-600"}>最終更新日: 2024年1月1日</p>
        </div>
      </ContentSection>

      {/* Content */}
      <ContentSection>
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p className={STYLES.text.body.medium + " text-gray-700"}>
              この利用規約（以下「本規約」）は、株式会社Awake（以下「当社」）が提供するすべてのサービス（以下「本サービス」）を利用される際に適用されます。本サービスを利用されるお客様（以下「ユーザー」）は、本規約に同意したうえでご利用ください。
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className={STYLES.heading.h2.subsection + " mb-4"}>1. 規約の適用</h2>
              <p className={STYLES.text.body.medium + " text-gray-700"}>
                    本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定めをすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "mb-4")}>2. 利用登録</h2>
                  <p className="text-gray-700 leading-relaxed">
                    本サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によって利用登録を申請していただきます。当社は、当社の基準に従って、利用登録の承認または拒否を決定し、これをユーザーに通知します。利用登録が当社によって承認された場合に、ユーザーと当社の間で本サービスの利用契約が成立するものとします。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "mb-4")}>3. 禁止事項</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
                  </p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>法令または公序良俗に違反する行為</li>
                    <li>犯罪行為に関連する行為</li>
                    <li>当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                    <li>当社のサービスの運営を妨害するおそれのある行為</li>
                    <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                    <li>不正アクセスをし、またはこれを試みる行為</li>
                    <li>他のユーザーに成りすます行為</li>
                    <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                    <li>その他、当社が不適切と判断する行為</li>
                  </ul>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "mb-4")}>4. 本サービスの提供の停止等</h2>
                  <p className="text-gray-700 leading-relaxed">
                    当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                  </p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-4">
                    <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                    <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                    <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                    <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                  </ul>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "mb-4")}>5. 保証の否認および免責事項</h2>
                  <p className="text-gray-700 leading-relaxed">
                    当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "mb-4")}>6. サービス内容の変更等</h2>
                  <p className="text-gray-700 leading-relaxed">
                    当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "mb-4")}>7. 利用規約の変更</h2>
                  <p className="text-gray-700 leading-relaxed">
                    当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "mb-4")}>8. 個人情報の取扱い</h2>
                  <p className="text-gray-700 leading-relaxed">
                    当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "mb-4")}>9. 準拠法・裁判管轄</h2>
                  <p className="text-gray-700 leading-relaxed">
                    本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
                  </p>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "mb-4")}>10. お問い合わせ</h2>
                  <p className="text-gray-700 leading-relaxed">
                    本規約に関するお問い合わせは、下記の連絡先までお願いいたします。
                  </p>
                  <div className="mt-4 p-6 bg-gray-overlay rounded-lg">
                    <p className="font-bold text-gray-900">{COMPANY_DATA.basic.name}</p>
                    <p className="text-gray-700">{COMPANY_DATA.contact.address.postal} {COMPANY_DATA.contact.address.full}</p>
                    <p className="text-gray-700">TEL: {COMPANY_DATA.contact.phone}</p>
                    <p className="text-gray-700">Email: {COMPANY_DATA.contact.email}</p>
                  </div>
                </section>
          </div>
        </div>
      </ContentSection>
      
      {/* Contact CTA */}
      <ContentSection className="bg-gray-overlay">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-6">
            利用規約に関するご質問
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AccessibleButton
              href="/#contact"
              variant="primary"
              ariaLabel="お問い合わせページに移動"
            >
              お問い合わせ
            </AccessibleButton>
          </div>
        </div>
      </ContentSection>
    </PageTemplate>
  )
}
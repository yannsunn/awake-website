import type { Metadata } from 'next'
import { COMPANY_DATA } from '@/lib/company-data'
import PageLayout from '@/components/layout/PageLayout'
import UltraSection, { UltraHero, UltraCTA } from '@/components/ui/UltraSection'
import AccessibleButton from '@/components/ui/AccessibleButton'
import { STYLES } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { TEXT_SHADOW, CARD_STYLES } from '@/lib/ultra-styles'

export const metadata: Metadata = {
  title: `特定商取引法に基づく表記 | ${COMPANY_DATA.basic.name}`,
  description: `${COMPANY_DATA.basic.name}の特定商取引法に基づく表記をご確認ください。販売条件、返品・交換について詳しく説明しています。`,
  robots: "index, follow",
}

export default function TokushoPage() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "特定商取引法に基づく表記", url: "/legal/tokusho" }
  ]

  return (
    <PageLayout
      title="特定商取引法に基づく表記"
      description="株式会社Awakeの特定商取引法に基づく表記"
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <UltraHero 
        title="特定商取引法に基づく表記"
        description="最終更新日: 2024年6月18日"
      />

      {/* Content */}
      <UltraSection variant="medium">
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
              {COMPANY_DATA.basic.name}は、特定商取引法に基づき、以下の事項を明示いたします。
            </p>
          </div>

              <div className="space-y-8">
                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>販売業者</h2>
                  <div className={CARD_STYLES.standard + " p-6"}>
                    <dl className="grid grid-cols-1 gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <dt className={STYLES.text.label.primary + " text-white"} style={TEXT_SHADOW.body}>会社名</dt>
                        <dd className={"sm:col-span-2 " + STYLES.text.description.medium + " text-gray-200"} style={TEXT_SHADOW.body}>{COMPANY_DATA.basic.name}（{COMPANY_DATA.basic.nameEn}）</dd>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <dt className="text-sm font-semibold text-white" style={TEXT_SHADOW.body}>代表者</dt>
                        <dd className="sm:col-span-2 text-sm text-gray-200" style={TEXT_SHADOW.body}>{COMPANY_DATA.basic.ceo}</dd>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <dt className="text-sm font-semibold text-white" style={TEXT_SHADOW.body}>所在地</dt>
                        <dd className="sm:col-span-2 text-sm text-gray-200" style={TEXT_SHADOW.body}>{COMPANY_DATA.contact.address.postal} {COMPANY_DATA.contact.address.full}</dd>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <dt className="text-sm font-semibold text-white" style={TEXT_SHADOW.body}>電話番号</dt>
                        <dd className="sm:col-span-2 text-sm text-gray-200" style={TEXT_SHADOW.body}>{COMPANY_DATA.contact.phone}</dd>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <dt className="text-sm font-semibold text-white" style={TEXT_SHADOW.body}>メールアドレス</dt>
                        <dd className="sm:col-span-2 text-sm text-gray-200" style={TEXT_SHADOW.body}>{COMPANY_DATA.contact.email}</dd>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <dt className="text-sm font-semibold text-white" style={TEXT_SHADOW.body}>営業時間</dt>
                        <dd className="sm:col-span-2 text-sm text-gray-200" style={TEXT_SHADOW.body}>{COMPANY_DATA.contact.businessHours.weekdays}</dd>
                      </div>
                    </dl>
                  </div>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>販売商品・サービス</h2>
                  <ul className="list-disc list-inside text-gray-200 leading-relaxed space-y-2" style={TEXT_SHADOW.body}>
                    {COMPANY_DATA.services.list.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>商品代金・サービス料金</h2>
                  <div className="text-gray-200 leading-relaxed space-y-4">
                    <p style={TEXT_SHADOW.body}>
                      各サービスの料金は、弊社ウェブサイトの各サービスページに記載された金額となります。
                    </p>
                    <div className={CARD_STYLES.standard + " p-6"}>
                      <h3 className="font-semibold text-white mb-3" style={TEXT_SHADOW.body}>主要サービス料金</h3>
                      <ul className="space-y-2 text-sm" style={TEXT_SHADOW.body}>
                        <li>• ホームページ制作: {COMPANY_DATA.services.details.web.pricing.standard.price}〜</li>
                        <li>• AIコンサルティング: {COMPANY_DATA.services.details.ai.pricing.basic.price}〜</li>
                        <li>• Amazon代理店サービス: 完全成果報酬制（売上の10%〜15%）</li>
                      </ul>
                      <p className="text-xs text-gray-200 mt-3" style={TEXT_SHADOW.body}>
                        ※ 詳細な料金については、お見積りにてご確認ください。
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>代金の支払時期・方法</h2>
                  <div className="text-gray-200 leading-relaxed space-y-4">
                    <h3 className="font-semibold text-white" style={TEXT_SHADOW.body}>支払時期</h3>
                    <ul className="list-disc list-inside space-y-2" style={TEXT_SHADOW.body}>
                      <li>ホームページ制作: 契約締結時に50%、納品時に50%</li>
                      <li>AIコンサルティング: サービス開始前に全額前払い</li>
                      <li>Amazon代理店サービス: 月末締め翌月末払い</li>
                    </ul>
                    
                    <h3 className="font-semibold text-white mt-6" style={TEXT_SHADOW.body}>支払方法</h3>
                    <ul className="list-disc list-inside space-y-2" style={TEXT_SHADOW.body}>
                      <li>銀行振込</li>
                      <li>請求書払い（法人のみ）</li>
                    </ul>
                    
                    <p className="text-sm text-gray-200" style={TEXT_SHADOW.body}>
                      ※ 振込手数料はお客様負担となります。
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>商品・サービスの引渡時期</h2>
                  <div className="text-gray-200 leading-relaxed space-y-4">
                    <ul className="list-disc list-inside space-y-2" style={TEXT_SHADOW.body}>
                      <li>ホームページ制作: 契約締結後3〜8週間（プランにより異なります）</li>
                      <li>AIコンサルティング: 契約締結後1週間以内にサービス開始</li>
                      <li>Amazon代理店サービス: 契約締結後1〜2週間で販売開始</li>
                    </ul>
                    <p className="text-sm text-gray-200" style={TEXT_SHADOW.body}>
                      ※ 具体的な期日については、個別契約にて定めます。
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>返品・交換・キャンセルについて</h2>
                  <div className="text-gray-200 leading-relaxed space-y-4">
                    <div className={CARD_STYLES.standard + " p-6"}>
                      <h3 className="font-semibold text-white mb-3" style={TEXT_SHADOW.body}>重要事項</h3>
                      <p className="text-sm" style={TEXT_SHADOW.body}>
                        弊社が提供するサービスは、お客様の個別要件に基づくオーダーメイドサービスのため、
                        原則として返品・交換・キャンセルはお受けできません。
                      </p>
                    </div>
                    
                    <h3 className="font-semibold text-white" style={TEXT_SHADOW.body}>例外事項</h3>
                    <ul className="list-disc list-inside space-y-2" style={TEXT_SHADOW.body}>
                      <li>弊社の責に帰すべき事由により、契約内容と著しく異なるサービスが提供された場合</li>
                      <li>サービス開始前であり、やむを得ない事情がある場合（キャンセル料が発生する場合があります）</li>
                    </ul>
                    
                    <h3 className="font-semibold text-white mt-6" style={TEXT_SHADOW.body}>キャンセル料</h3>
                    <ul className="list-disc list-inside space-y-2" style={TEXT_SHADOW.body}>
                      <li>サービス開始前: 契約金額の10%</li>
                      <li>サービス開始後: 契約金額の50%〜100%（進捗状況により決定）</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>その他の条件</h2>
                  <div className="text-gray-200 leading-relaxed space-y-4">
                    <h3 className="font-semibold text-white" style={TEXT_SHADOW.body}>契約の成立</h3>
                    <p style={TEXT_SHADOW.body}>
                      弊社からの受注確認メール送信時をもって契約成立とします。
                    </p>
                    
                    <h3 className="font-semibold text-white" style={TEXT_SHADOW.body}>準拠法・管轄</h3>
                    <p style={TEXT_SHADOW.body}>
                      本契約は日本法に準拠し、契約に関する一切の紛争については東京地方裁判所を専属的合意管轄裁判所とします。
                    </p>
                    
                    <h3 className="font-semibold text-white" style={TEXT_SHADOW.body}>免責事項</h3>
                    <ul className="list-disc list-inside space-y-2" style={TEXT_SHADOW.body}>
                      <li>天災地変その他の不可抗力による履行遅延・不履行</li>
                      <li>お客様の環境・設備に起因する問題</li>
                      <li>第三者のサービス・システムに起因する問題</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className={cn(STYLES.heading.h2.subsection, "text-white mb-4")} style={TEXT_SHADOW.body}>お問い合わせ</h2>
                  <p className="text-gray-200 leading-relaxed" style={TEXT_SHADOW.body}>
                    特定商取引法に基づく表記に関するお問い合わせは、下記の連絡先までお願いいたします。
                  </p>
                  <div className={`mt-4 p-6 ${CARD_STYLES.standard}`}>
                    <p className="font-bold text-white" style={TEXT_SHADOW.body}>{COMPANY_DATA.basic.name}</p>
                    <p className="text-gray-200" style={TEXT_SHADOW.body}>担当者: {COMPANY_DATA.basic.ceo}</p>
                    <p className="text-gray-200" style={TEXT_SHADOW.body}>{COMPANY_DATA.contact.address.postal} {COMPANY_DATA.contact.address.full}</p>
                    <p className="text-gray-200" style={TEXT_SHADOW.body}>TEL: {COMPANY_DATA.contact.phone}</p>
                    <p className="text-gray-200" style={TEXT_SHADOW.body}>Email: {COMPANY_DATA.contact.email}</p>
                    <p className="text-gray-200 text-sm mt-2" style={TEXT_SHADOW.body}>営業時間: {COMPANY_DATA.contact.businessHours.weekdays}（土日祝日除く）</p>
                  </div>
                </section>
              </div>
        </div>
      </UltraSection>
      
      {/* Contact CTA */}
      <UltraCTA 
        title="ご不明点がございましたら"
        description="特定商取引法に関するご質問は、お気軽にお問い合わせください。"
        buttonText="お問い合わせ"
        buttonHref="/#contact"
      />
    </PageLayout>
  )
}
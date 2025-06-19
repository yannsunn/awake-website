import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_DATA } from '@/lib/company-data'

export const metadata: Metadata = {
  title: `特定商取引法に基づく表記 | ${COMPANY_DATA.basic.name}`,
  description: `${COMPANY_DATA.basic.name}の特定商取引法に基づく表記をご確認ください。販売条件、返品・交換について詳しく説明しています。`,
  robots: "index, follow",
}

export default function TokushoPage() {
  return (
    <>
      <Header />
      
      <main role="main" className="pt-16">
        {/* Page Header */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              ホームに戻る
            </Link>
            <h1 className="text-4xl font-light text-gray-900">特定商取引法に基づく表記</h1>
            <p className="text-gray-600 mt-4">最終更新日: 2024年6月18日</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {COMPANY_DATA.basic.name}は、特定商取引法に基づき、以下の事項を明示いたします。
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">販売業者</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <dl className="grid grid-cols-1 gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <dt className="text-sm font-semibold text-gray-900">会社名</dt>
                        <dd className="sm:col-span-2 text-sm text-gray-700">{COMPANY_DATA.basic.name}（{COMPANY_DATA.basic.nameEn}）</dd>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <dt className="text-sm font-semibold text-gray-900">代表者</dt>
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
                    </dl>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">販売商品・サービス</h2>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    {COMPANY_DATA.services.list.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">商品代金・サービス料金</h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      各サービスの料金は、弊社ウェブサイトの各サービスページに記載された金額となります。
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">主要サービス料金</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• ホームページ制作: {COMPANY_DATA.services.details.web.pricing.standard.price}〜</li>
                        <li>• AIコンサルティング: {COMPANY_DATA.services.details.ai.pricing.basic.price}〜</li>
                        <li>• Amazon代理店サービス: 完全成果報酬制（売上の10%〜15%）</li>
                      </ul>
                      <p className="text-xs text-gray-600 mt-3">
                        ※ 詳細な料金については、お見積りにてご確認ください。
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">代金の支払時期・方法</h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <h3 className="font-semibold text-gray-900">支払時期</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>ホームページ制作: 契約締結時に50%、納品時に50%</li>
                      <li>AIコンサルティング: サービス開始前に全額前払い</li>
                      <li>Amazon代理店サービス: 月末締め翌月末払い</li>
                    </ul>
                    
                    <h3 className="font-semibold text-gray-900 mt-6">支払方法</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>銀行振込</li>
                      <li>請求書払い（法人のみ）</li>
                    </ul>
                    
                    <p className="text-sm text-gray-600">
                      ※ 振込手数料はお客様負担となります。
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">商品・サービスの引渡時期</h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <ul className="list-disc list-inside space-y-2">
                      <li>ホームページ制作: 契約締結後3〜8週間（プランにより異なります）</li>
                      <li>AIコンサルティング: 契約締結後1週間以内にサービス開始</li>
                      <li>Amazon代理店サービス: 契約締結後1〜2週間で販売開始</li>
                    </ul>
                    <p className="text-sm text-gray-600">
                      ※ 具体的な期日については、個別契約にて定めます。
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">返品・交換・キャンセルについて</h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">重要事項</h3>
                      <p className="text-sm">
                        弊社が提供するサービスは、お客様の個別要件に基づくオーダーメイドサービスのため、
                        原則として返品・交換・キャンセルはお受けできません。
                      </p>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900">例外事項</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>弊社の責に帰すべき事由により、契約内容と著しく異なるサービスが提供された場合</li>
                      <li>サービス開始前であり、やむを得ない事情がある場合（キャンセル料が発生する場合があります）</li>
                    </ul>
                    
                    <h3 className="font-semibold text-gray-900 mt-6">キャンセル料</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>サービス開始前: 契約金額の10%</li>
                      <li>サービス開始後: 契約金額の50%〜100%（進捗状況により決定）</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">その他の条件</h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <h3 className="font-semibold text-gray-900">契約の成立</h3>
                    <p>
                      弊社からの受注確認メール送信時をもって契約成立とします。
                    </p>
                    
                    <h3 className="font-semibold text-gray-900">準拠法・管轄</h3>
                    <p>
                      本契約は日本法に準拠し、契約に関する一切の紛争については東京地方裁判所を専属的合意管轄裁判所とします。
                    </p>
                    
                    <h3 className="font-semibold text-gray-900">免責事項</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>天災地変その他の不可抗力による履行遅延・不履行</li>
                      <li>お客様の環境・設備に起因する問題</li>
                      <li>第三者のサービス・システムに起因する問題</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">お問い合わせ</h2>
                  <p className="text-gray-700 leading-relaxed">
                    特定商取引法に基づく表記に関するお問い合わせは、下記の連絡先までお願いいたします。
                  </p>
                  <div className="mt-4 p-6 bg-gray-50 rounded-lg">
                    <p className="font-bold text-gray-900">{COMPANY_DATA.basic.name}</p>
                    <p className="text-gray-700">担当者: {COMPANY_DATA.basic.ceo}</p>
                    <p className="text-gray-700">{COMPANY_DATA.contact.address.postal} {COMPANY_DATA.contact.address.full}</p>
                    <p className="text-gray-700">TEL: {COMPANY_DATA.contact.phone}</p>
                    <p className="text-gray-700">Email: {COMPANY_DATA.contact.email}</p>
                    <p className="text-gray-700 text-sm mt-2">営業時間: {COMPANY_DATA.contact.businessHours.weekdays}（土日祝日除く）</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
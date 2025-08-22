import { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import Container from '@/components/layout/Container'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'AI News Automation 利用規約 | 株式会社AWAKE',
  description: 'AI News Automationサービスの利用規約をご確認ください。AIニュースの自動収集・動画生成・SNS投稿サービスの利用条件について記載しています。',
  openGraph: {
    title: 'AI News Automation 利用規約 | 株式会社AWAKE',
    description: 'AI News Automationサービスの利用規約',
  },
}

export default function TermsPage() {
  return (
    <PageLayout>
      <Container className="py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="AI News Automation 利用規約"
            subtitle="最終更新日: 2025年8月23日"
            className="mb-12"
          />

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第1条（サービス概要）</h2>
              <div className="space-y-3">
                <p>
                  株式会社Awake（以下「当社」といいます）が提供する「AI News Automation」（以下「本サービス」といいます）は、
                  AIを活用したニュースの自動収集、動画コンテンツの生成、およびSNSへの自動投稿を行うサービスです。
                </p>
                <p>
                  本サービスは、最新のAI技術を活用し、効率的なコンテンツ制作と配信を支援することを目的としています。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第2条（利用条件）</h2>
              <div className="space-y-3">
                <p>本サービスをご利用いただくにあたり、以下の条件を遵守していただきます：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>TikTokコミュニティガイドラインを含む、各SNSプラットフォームの利用規約を遵守すること</li>
                  <li>著作権、商標権その他の知的財産権を侵害する行為を行わないこと</li>
                  <li>虚偽の情報や誤解を招く情報を意図的に配信しないこと</li>
                  <li>公序良俗に反する内容を投稿しないこと</li>
                  <li>第三者のプライバシーや名誉を侵害しないこと</li>
                  <li>本サービスの運営を妨害する行為を行わないこと</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第3条（アカウント管理）</h2>
              <div className="space-y-3">
                <p>
                  利用者は、本サービスのアカウント情報（TikTok認証トークン、ユーザーIDを含む）を
                  適切に管理する責任を負います。
                </p>
                <p>
                  アカウント情報の不正使用により発生した損害について、当社は一切の責任を負いません。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第4条（自動生成コンテンツについて）</h2>
              <div className="space-y-3">
                <p>
                  本サービスで自動生成されるコンテンツの正確性、完全性、有用性について、
                  当社は保証いたしません。
                </p>
                <p>
                  利用者は、自動生成されたコンテンツを投稿する前に、内容を確認し、
                  必要に応じて修正を行う責任があります。
                </p>
                <p>
                  AIによる自動生成のため、予期しない内容が含まれる可能性があることを
                  ご了承ください。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第5条（免責事項）</h2>
              <div className="space-y-3">
                <p>当社は、以下の事項について一切の責任を負いません：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>本サービスの利用により生じた直接的または間接的な損害</li>
                  <li>自動生成コンテンツの正確性、適法性、有用性</li>
                  <li>SNSプラットフォーム側の仕様変更による本サービスの利用不能</li>
                  <li>システムの不具合、メンテナンス、その他の理由によるサービスの中断</li>
                  <li>第三者による不正アクセスやデータの改ざん</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第6条（知的財産権）</h2>
              <div className="space-y-3">
                <p>
                  本サービスに関する著作権、商標権その他一切の知的財産権は、
                  当社または正当な権利者に帰属します。
                </p>
                <p>
                  利用者が本サービスを通じて生成したコンテンツの著作権は、
                  原則として利用者に帰属しますが、当社はサービス改善のために
                  匿名化された形で利用することがあります。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第7条（利用料金）</h2>
              <div className="space-y-3">
                <p>
                  本サービスの利用料金は、別途定める料金表に従うものとします。
                </p>
                <p>
                  料金の改定がある場合は、事前に利用者に通知いたします。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第8条（サービスの変更・終了）</h2>
              <div className="space-y-3">
                <p>
                  当社は、利用者への事前通知により、本サービスの内容を変更または
                  終了することができるものとします。
                </p>
                <p>
                  緊急の場合は、事前通知なく変更または終了することがあります。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第9条（規約の変更）</h2>
              <div className="space-y-3">
                <p>
                  当社は、必要に応じて本規約を変更することができます。
                </p>
                <p>
                  変更後の規約は、本サービス上に掲載した時点から効力を生じるものとします。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">第10条（準拠法・管轄裁判所）</h2>
              <div className="space-y-3">
                <p>
                  本規約の解釈および適用については、日本法に準拠するものとします。
                </p>
                <p>
                  本サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
              <div className="space-y-3">
                <p>本利用規約に関するお問い合わせは、以下までご連絡ください：</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-bold text-gray-900 mb-2">株式会社Awake</p>
                  <p>〒207-0013</p>
                  <p>東京都東大和市向原5-1129-61 渡辺ビル1F</p>
                  <p className="mt-3">
                    <span className="font-semibold">メール：</span>
                    <a href="mailto:shop@awakeinc.co.jp" className="text-blue-600 hover:text-blue-700 underline">
                      shop@awakeinc.co.jp
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">ウェブサイト：</span>
                    <a href="https://awakeinc.co.jp" className="text-blue-600 hover:text-blue-700 underline">
                      https://awakeinc.co.jp
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </PageLayout>
  )
}
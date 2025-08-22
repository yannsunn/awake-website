import { Metadata } from 'next'
import PageLayout from '@/components/layout/PageLayout'
import UltraSection, { UltraHero } from '@/components/ui/UltraSection'
import { STYLES } from '@/lib/constants'
import { TEXT_SHADOW } from '@/lib/ultra-styles'

export const metadata: Metadata = {
  title: 'AI News Automation プライバシーポリシー | 株式会社Awake',
  description: 'AI News Automationサービスのプライバシーポリシー。お客様の個人情報の取り扱いについて詳しく説明しています。',
  openGraph: {
    title: 'AI News Automation プライバシーポリシー | 株式会社Awake',
    description: 'AI News Automationサービスのプライバシーポリシー',
  },
}

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: "ホーム", url: "/" },
    { name: "AI News Automation プライバシーポリシー", url: "/privacy" }
  ]

  return (
    <PageLayout
      title="AI News Automation プライバシーポリシー"
      description="AI News Automationサービスのプライバシーポリシー"
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <UltraHero 
        title="AI News Automation プライバシーポリシー"
        description="最終更新日: 2025年8月23日"
      />

      {/* Content */}
      <div className="bg-gray-900 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>はじめに</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  株式会社Awake（以下「当社」といいます）は、「AI News Automation」サービス（以下「本サービス」といいます）において、
                  お客様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーに基づいて個人情報を適切に取り扱います。
                </p>
              </div>
            </section>

            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>1. 収集する情報</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>当社は、本サービスの提供にあたり、以下の情報を収集します：</p>
                
                <h3 className={STYLES.heading.h3.card + " text-white mt-4"} style={TEXT_SHADOW.body}>1.1 認証情報</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>TikTok認証トークン</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>TikTokユーザーID</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>その他SNSプラットフォームの認証情報（利用する場合）</li>
                </ul>

                <h3 className={STYLES.heading.h3.card + " text-white mt-4"} style={TEXT_SHADOW.body}>1.2 アカウント情報</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>氏名または会社名</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>メールアドレス</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>電話番号（任意）</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>利用プラン情報</li>
                </ul>

                <h3 className={STYLES.heading.h3.card + " text-white mt-4"} style={TEXT_SHADOW.body}>1.3 利用状況データ</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>サービス利用履歴</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>生成したコンテンツの統計情報</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>投稿スケジュール情報</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>APIアクセスログ</li>
                </ul>

                <h3 className={STYLES.heading.h3.card + " text-white mt-4"} style={TEXT_SHADOW.body}>1.4 技術情報</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>IPアドレス</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>ブラウザの種類とバージョン</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>アクセス日時</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>リファラー情報</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>2. 情報の利用目的</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>収集した情報は、以下の目的で利用します：</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>本サービスの提供（動画の自動生成と投稿）</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>お客様の認証とアカウント管理</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>サービスの品質向上と新機能の開発</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>カスタマーサポートの提供</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>利用状況の分析とレポート作成</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>重要なお知らせやアップデート情報の通知</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>利用規約違反の監視と対応</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>法令に基づく対応</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>3. データの保護</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>当社は、お客様の個人情報を以下の方法で保護します：</p>
                
                <h3 className={STYLES.heading.h3.card + " text-white mt-4"} style={TEXT_SHADOW.body}>3.1 技術的対策</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>SSL/TLS暗号化通信の使用</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>認証トークンの暗号化保存</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>定期的なセキュリティ監査の実施</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>ファイアウォールとアクセス制御の実装</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>データの定期的なバックアップ</li>
                </ul>

                <h3 className={STYLES.heading.h3.card + " text-white mt-4"} style={TEXT_SHADOW.body}>3.2 組織的対策</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>従業員への守秘義務の徹底</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>アクセス権限の最小化原則</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>セキュリティ教育の定期的な実施</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>インシデント対応体制の整備</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>4. 第三者への提供</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>お客様の同意がある場合</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>法令に基づく開示請求がある場合</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>人の生命、身体または財産の保護のために必要な場合</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>サービス提供に必要な範囲で業務委託先に提供する場合（守秘義務契約を締結）</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>事業譲渡、合併等による事業承継の場合</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>5. データの保存期間</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  当社は、以下の基準に従って個人情報を保存します：
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>アカウント情報：サービス利用期間中および退会後1年間</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>認証トークン：有効期限まで（自動更新される場合があります）</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>利用履歴：サービス利用期間中および退会後3ヶ月間</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>お問い合わせ情報：対応完了後3年間</li>
                </ul>
                <p className={STYLES.text.body.medium + " text-gray-200 mt-3"} style={TEXT_SHADOW.body}>
                  法令により保存が義務付けられている場合は、該当する法令に従った期間保存します。
                </p>
              </div>
            </section>

            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>6. お客様の権利</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>お客様は、ご自身の個人情報について以下の権利を有します：</p>
                
                <h3 className={STYLES.heading.h3.card + " text-white mt-4"} style={TEXT_SHADOW.body}>6.1 開示請求</h3>
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>保有する個人情報の開示を請求することができます。</p>

                <h3 className={STYLES.heading.h3.card + " text-white mt-4"} style={TEXT_SHADOW.body}>6.2 訂正・追加・削除</h3>
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>個人情報の内容が事実と異なる場合、訂正・追加・削除を請求できます。</p>

                <h3 className={STYLES.heading.h3.card + " text-white mt-4"} style={TEXT_SHADOW.body}>6.3 利用停止・消去</h3>
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>個人情報の利用停止または消去を請求できます。</p>

                <h3 className={STYLES.heading.h3.card + " text-white mt-4"} style={TEXT_SHADOW.body}>6.4 第三者提供の停止</h3>
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>個人情報の第三者への提供停止を請求できます。</p>

                <div className="mt-4 p-4 bg-blue-900/30 backdrop-blur-sm rounded-lg border border-blue-700">
                  <p className={STYLES.text.body.medium + " text-white"} style={TEXT_SHADOW.body}>
                    <strong>データ削除のリクエスト：</strong>
                  </p>
                  <p className={STYLES.text.body.medium + " text-gray-200 mt-2"} style={TEXT_SHADOW.body}>
                    お客様は、いつでも当社に連絡してアカウントとすべての関連データの削除をリクエストできます。
                    削除リクエストを受け取った後、30日以内にデータを削除します。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>7. Cookie（クッキー）の使用</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  当社は、サービスの利便性向上のためにCookieを使用することがあります。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>セッション管理用Cookie：ログイン状態の維持</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>分析用Cookie：サービス改善のための利用状況分析</li>
                  <li className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>機能性Cookie：ユーザー設定の保存</li>
                </ul>
                <p className={STYLES.text.body.medium + " text-gray-200 mt-3"} style={TEXT_SHADOW.body}>
                  ブラウザの設定によりCookieを無効にすることができますが、
                  一部の機能が利用できなくなる場合があります。
                </p>
              </div>
            </section>

            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>8. 子どものプライバシー</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  本サービスは、13歳未満の子どもを対象としていません。
                  13歳未満の子どもから knowingly に個人情報を収集することはありません。
                </p>
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  万が一、13歳未満の子どもの個人情報を収集したことが判明した場合は、
                  速やかに削除いたします。
                </p>
              </div>
            </section>

            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>9. 国際データ転送</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  本サービスは日本国内で運営されていますが、
                  サービス提供のために海外のサーバーを利用する場合があります。
                </p>
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  その場合でも、適切なセキュリティ対策を講じ、
                  日本の個人情報保護法に準拠した取り扱いを行います。
                </p>
              </div>
            </section>

            <section>
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>10. プライバシーポリシーの変更</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  当社は、法令の変更やサービスの変更に応じて、
                  本プライバシーポリシーを変更することがあります。
                </p>
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  重要な変更がある場合は、サービス上での通知またはメールにて
                  お客様にお知らせいたします。
                </p>
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じます。
                </p>
              </div>
            </section>

            <section className="border-t border-gray-700 pt-8">
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>お問い合わせ窓口</h2>
              <div className="space-y-3">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>
                  個人情報の取り扱いに関するお問い合わせ、開示請求、その他ご質問は、
                  以下の窓口までご連絡ください：
                </p>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                  <p className={STYLES.text.body.medium + " text-white mb-2"} style={TEXT_SHADOW.body}>株式会社Awake 個人情報保護担当</p>
                  <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.small}>〒207-0013</p>
                  <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.small}>東京都東大和市向原5-1129-61 渡辺ビル1F</p>
                  <p className={STYLES.text.body.medium + " text-gray-200 mt-3"} style={TEXT_SHADOW.small}>
                    <span className="font-semibold">メール：</span>
                    <a href="mailto:shop@awakeinc.co.jp" className="text-blue-400 hover:text-blue-300 underline">
                      shop@awakeinc.co.jp
                    </a>
                  </p>
                  <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.small}>
                    <span className="font-semibold">電話：</span>
                    050-7115-4948（平日9:00-18:00）
                  </p>
                  <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.small}>
                    <span className="font-semibold">ウェブサイト：</span>
                    <a href="https://awakeinc.co.jp" className="text-blue-400 hover:text-blue-300 underline">
                      https://awakeinc.co.jp
                    </a>
                  </p>
                </div>
                <p className={STYLES.text.body.medium + " text-gray-200 mt-4 text-sm"} style={TEXT_SHADOW.small}>
                  ※ 開示請求等の手続きには、本人確認のため身分証明書の提示を
                  お願いする場合があります。
                </p>
              </div>
            </section>

            <section className="border-t border-gray-700 pt-8">
              <h2 className={STYLES.heading.h2.subsection + " text-white mb-4"} style={TEXT_SHADOW.body}>個人情報保護管理者</h2>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>株式会社Awake</p>
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>代表取締役 田形 康貴</p>
                <p className={STYLES.text.body.medium + " text-gray-200"} style={TEXT_SHADOW.body}>連絡先：上記お問い合わせ窓口と同じ</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
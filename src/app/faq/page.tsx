import type { Metadata } from 'next'
import { Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import { COMPANY_DATA } from '@/lib/company-data'
import PageLayout from '@/components/layout/PageLayout'
import { createFAQSchema, createBreadcrumbSchema } from '@/lib/enhanced-schema'
import LineButton from '@/components/ui/LineButton'
import { UltraHero } from '@/components/ui/UltraSection'
import '@/app/corporate.css'

export const metadata: Metadata = {
  title: `よくある質問 | ${COMPANY_DATA.basic.name}`,
  description: `${COMPANY_DATA.basic.name}のサービスに関するよくある質問をまとめました。ホームページ制作、AIコンサルティング、Amazon代理店サービスについて詳しく解説。`,
  keywords: `${COMPANY_DATA.metadata.keywords}, FAQ, よくある質問, サポート`,
}

// 🚀 FAQ データ構造
const faqCategories = [
  {
    category: "全般",
    questions: [
      {
        question: "どのようなサービスを提供していますか？",
        answer: "3つの専門サービスを提供しています。<br />①ホームページ制作：成果にコミットする戦略的ウェブサイト制作<br />②AIコンサルティング：最新AI技術で業務効率を劇的に改善<br />③Amazon代理店サービス：初期費用0円のAmazon販売総合支援です。"
      },
      {
        question: "相談や見積もりは無料ですか？",
        answer: "はい、初回のご相談とお見積りは完全無料です。<br />お客様のご要望をお聞きした上で、最適なプランをご提案いたします。<br />秘密保持契約の締結も可能ですので、安心してご相談ください。"
      },
      {
        question: "対応エリアはどこまでですか？",
        answer: "全国対応可能です。<br />オンライン会議やメール、電話でのやり取りが中心となりますが、<br />必要に応じて直接お伺いすることも可能です（別途交通費を頂戴する場合があります）。"
      },
      {
        question: "支払い方法を教えてください。",
        answer: "銀行振込または請求書払い（法人のみ）に対応しています。<br />サービスにより支払いタイミングが異なりますので、詳細は個別にご案内いたします。"
      }
    ]
  },
  {
    category: "ホームページ制作",
    questions: [
      {
        question: "制作期間はどのくらいかかりますか？",
        answer: "スタンダードプランは最短3週間、プレミアムプランは6週間が目安です。<br />お急ぎの場合は特急プランもご用意していますので、お気軽にご相談ください。"
      },
      {
        question: "既存のホームページのリニューアルも可能ですか？",
        answer: "もちろん対応可能です。<br />現サイトのアクセス解析と課題分析を行い、売上に貢献するサイトへリニューアルします。<br />ドメインやメールアドレスはもちろん引き継ぎ可能です。"
      },
      {
        question: "スマートフォン対応はされていますか？",
        answer: "全プランでレスポンシブデザインを標準対応。<br />PC、タブレット、スマホで最適表示され、ユーザー体験を損ないません。<br />Googleのモバイルファーストインデックスにも対応しています。"
      },
      {
        question: "公開後のサポートはありますか？",
        answer: "納品後3ヶ月間の無料サポート付き。<br />操作方法のレクチャー、軽微な修正、サーバートラブル対応まで含まれます。<br />年間保守プランで長期的な安心も提供しています。"
      },
      {
        question: "SEO対策は含まれていますか？",
        answer: "全プランに基本SEO対策を標準装備。<br />タイトル・メタタグ最適化、構造化データ、サイトマップ生成などを実施。<br />プレミアムプランではコンテンツSEOやローカルSEOも対応可能です。"
      }
    ]
  },
  {
    category: "AIコンサルティング",
    questions: [
      {
        question: "AI導入の効果はどの程度期待できますか？",
        answer: "業務時間の大幅な削減が期待できます。<br />まず無料で業務分析を行い、具体的な削減時間とROIを数値でお示しします。"
      },
      {
        question: "AIの知識がなくても大丈夫ですか？",
        answer: "全く問題ありません。<br />ゼロからのスタートを想定したカリキュラムをご用意。<br />基礎研修、実践ワークショップ、個別サポートで、確実にAIを活用できるようになります。"
      },
      {
        question: "どのようなAIツールを導入しますか？",
        answer: "ChatGPT、Claude、Gemini等の最新生成AIから、業界特化型AIまで幅広く対応。<br />費用対効果と業務適合性を考慮し、最適なツールを選定・カスタマイズします。"
      },
      {
        question: "導入後のサポートはありますか？",
        answer: "導入後も月次レポートで効果を可視化。<br />新機能の追加、ワークフロー最適化、トラブル対応まで完全サポート。<br />AI活用の成熟度に合わせた段階的な支援を提供します。"
      }
    ]
  },
  {
    category: "Amazon代理店サービス",
    questions: [
      {
        question: "初期費用は本当に0円ですか？",
        answer: "完全無料です。<br />初期費用、月額費用、在庫リスクすべてゼロ。<br />売上発生時の10-15%の手数料のみです。"
      },
      {
        question: "どのような商品でも販売できますか？",
        answer: "食品、コスメ、家電、雑貨など幅広く対応。<br />Amazon規約に準拠した商品なら基本的にOKです。<br />許認証が必要な商品も取得サポートいたします。"
      },
      {
        question: "在庫管理はどうなりますか？",
        answer: "メーカー直送なら在庫リスクゼロ。<br />FBA（Amazon倉庫）利用で配送もお任せ。<br />在庫管理、需要予測、補充タイミングまで、すべてプロが代行します。"
      },
      {
        question: "売上の入金はいつ頃ですか？",
        answer: "月末締め翌月末払いで安定したキャッシュフロー。<br />Amazonからの入金後、5営業日以内に手数料を差し引いて振込。<br />売上明細レポートも毎月提供します。"
      },
      {
        question: "販売状況は確認できますか？",
        answer: "はい、定期的にレポートをお送りいたします。<br />売上状況、在庫状況、顧客の反応など詳細な情報をご確認いただけます。"
      }
    ]
  }
]

export default function FAQPage() {
  // 🚀 FAQ構造化データの生成
  const allQuestions = faqCategories.flatMap(category =>
    category.questions.map(q => ({
      question: q.question,
      answer: q.answer
    }))
  )
  const faqSchema = createFAQSchema(allQuestions)

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "ホーム", url: COMPANY_DATA.contact.website },
    { name: "よくある質問", url: `${COMPANY_DATA.contact.website}faq` }
  ])

  return (
    <PageLayout>
      {/* FAQ構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      {/* Hero Section */}
      <UltraHero
        title="よくある質問"
        subtitle="お客様からよくいただくご質問をまとめました"
        description="こちらにない質問は、お気軽にお問い合わせください"
        backgroundImage="/images/future-office.webp"
      />


      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="corp-heading-2 text-black mb-6 sm:mb-8 pb-2 border-b border-blue-200">
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details
                    key={faqIndex}
                    className="group bg-white border border-blue-200 rounded-lg overflow-hidden shadow-md"
                  >
                    <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                      <h3 className="corp-heading-3 text-black pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <Plus
                          className="h-5 w-5 text-gray-600 group-open:hidden"
                          aria-hidden="true"
                        />
                        <Minus
                          className="h-5 w-5 text-gray-600 hidden group-open:block"
                          aria-hidden="true"
                        />
                      </div>
                    </summary>

                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="pt-4 border-t border-blue-100">
                        <p className="corp-text-body text-black whitespace-pre-line">
                          {faq.answer.replace(/<br\s*\/?>/gi, '\n')}
                        </p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="corp-heading-2 mb-4 text-black">
              まだ疑問が解決しませんか？
            </h2>
            <p className="corp-text-lead text-black">
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white border border-blue-200 p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="corp-heading-2 text-black mb-4 text-center">💬 公式LINEでお気軽に</h3>
              <p className="corp-text-body text-black text-center mb-6">最速迓信！まずはLINEでお話をお聞かせください</p>
              <LineButton className="w-full" size="large" />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
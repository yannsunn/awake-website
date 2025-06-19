import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ArrowLeft, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import { COMPANY_DATA } from '@/lib/company-data'

export const metadata: Metadata = {
  title: `よくある質問 | ${COMPANY_DATA.basic.name}`,
  description: `${COMPANY_DATA.basic.name}のサービスに関するよくある質問をまとめました。ホームページ制作、AIコンサルティング、Amazon代理店サービスについて詳しく解説。`,
  keywords: `${COMPANY_DATA.metadata.keywords}, FAQ, よくある質問, サポート`,
}

const faqCategories = [
  {
    category: "全般",
    questions: [
      {
        question: "どのようなサービスを提供していますか？",
        answer: "弊社では主に3つのサービスを提供しています。①ホームページ制作サービス：企業の価値を最大化するプロフェッショナルなウェブサイト制作、②AIコンサルティングサービス：業務効率化とデジタル変革支援、③Amazon代理店サービス：完全成果報酬制でのAmazon販売代行です。"
      },
      {
        question: "相談や見積もりは無料ですか？",
        answer: "はい、初回のご相談とお見積りは完全無料です。お客様のご要望をお聞きした上で、最適なプランをご提案いたします。秘密保持契約の締結も可能ですので、安心してご相談ください。"
      },
      {
        question: "対応エリアはどこまでですか？",
        answer: "全国対応可能です。オンライン会議やメール、電話でのやり取りが中心となりますが、必要に応じて直接お伺いすることも可能です（別途交通費を頂戴する場合があります）。"
      },
      {
        question: "支払い方法を教えてください。",
        answer: "銀行振込または請求書払い（法人のみ）に対応しています。サービスにより支払いタイミングが異なりますので、詳細は個別にご案内いたします。"
      }
    ]
  },
  {
    category: "ホームページ制作",
    questions: [
      {
        question: "制作期間はどのくらいかかりますか？",
        answer: "プランにより異なりますが、スタンダードプランで約3週間、プレミアムプランで約6週間が目安です。お急ぎの場合はご相談ください。可能な限り対応いたします。"
      },
      {
        question: "既存のホームページのリニューアルも可能ですか？",
        answer: "はい、可能です。現在のサイトの課題分析から行い、より効果的なサイトへとリニューアルいたします。ドメインやメールアドレスもそのまま引き継げます。"
      },
      {
        question: "スマートフォン対応はされていますか？",
        answer: "全てのプランでレスポンシブデザインを標準対応しています。PC、タブレット、スマートフォンのどの端末でも最適に表示されます。"
      },
      {
        question: "公開後のサポートはありますか？",
        answer: "はい、納品後3ヶ月間は無料サポートを提供しています。操作方法のご質問や軽微な修正に対応いたします。継続的なサポートプランもご用意しています。"
      },
      {
        question: "SEO対策は含まれていますか？",
        answer: "基本的なSEO対策（タイトル設定、メタディスクリプション、構造化データなど）は全プランに含まれています。より高度なSEO対策をご希望の場合は、別途ご相談ください。"
      }
    ]
  },
  {
    category: "AIコンサルティング",
    questions: [
      {
        question: "AI導入の効果はどの程度期待できますか？",
        answer: "業種や導入する業務により異なりますが、一般的に業務効率が30-70%向上することが多いです。まずは現状分析を行い、具体的な効果をお示しいたします。"
      },
      {
        question: "AIの知識がなくても大丈夫ですか？",
        answer: "はい、全く問題ありません。弊社では基礎知識の習得から実践的な活用まで、段階的にサポートいたします。社員様向けの研修も含まれています。"
      },
      {
        question: "どのようなAIツールを導入しますか？",
        answer: "お客様の業務に最適なツールを選定いたします。ChatGPT、Claude、Geminiなどの生成AI、業務特化型AIツール、カスタムAIシステムなど、幅広く対応可能です。"
      },
      {
        question: "導入後のサポートはありますか？",
        answer: "はい、導入後も継続的にサポートいたします。効果測定、改善提案、新機能の追加など、お客様の成長に合わせてサービスを発展させていきます。"
      }
    ]
  },
  {
    category: "Amazon代理店サービス",
    questions: [
      {
        question: "初期費用は本当に0円ですか？",
        answer: "はい、完全に0円です。売上が発生してから手数料（10-15%）をいただく完全成果報酬制ですので、リスクなく始められます。"
      },
      {
        question: "どのような商品でも販売できますか？",
        answer: "Amazonの規約に準拠した商品であれば基本的に対応可能です。商品によっては許可が必要な場合もありますので、まずはご相談ください。"
      },
      {
        question: "在庫管理はどうなりますか？",
        answer: "メーカー直送と預託在庫の2つの方法があります。メーカー直送の場合は在庫リスクがありません。預託在庫の場合は弊社で適切に管理いたします。"
      },
      {
        question: "売上の入金はいつ頃ですか？",
        answer: "月末締めの翌月末払いとなります。Amazonからの入金確認後、手数料を差し引いた金額をお支払いいたします。"
      },
      {
        question: "販売状況は確認できますか？",
        answer: "はい、定期的にレポートをお送りいたします。売上状況、在庫状況、顧客の反応など詳細な情報をご確認いただけます。"
      }
    ]
  }
]

export default function FAQPage() {
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
            <h1 className="text-4xl font-light text-gray-900">よくある質問</h1>
            <p className="text-gray-600 mt-4">
              お客様からよくいただくご質問をまとめました。こちらにない質問は、お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                お急ぎの場合は、公式LINEでお気軽にお問い合わせください
              </p>
              <Link 
                href={COMPANY_DATA.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                📱 LINE で問い合わせ（{COMPANY_DATA.contact.line}）
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-light text-gray-900 mb-8 pb-2 border-b border-gray-200">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <details 
                        key={faqIndex} 
                        className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-shadow"
                      >
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                          <h3 className="text-lg font-medium text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            <Plus className="h-5 w-5 text-gray-400 group-open:hidden" />
                            <Minus className="h-5 w-5 text-gray-400 hidden group-open:block" />
                          </div>
                        </summary>
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              まだ疑問が解決しませんか？
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">📱 公式LINE</h3>
                <p className="text-sm text-gray-600 mb-4">最も早く対応できます</p>
                <Link 
                  href={COMPANY_DATA.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  LINEで問い合わせ
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">📞 電話</h3>
                <p className="text-sm text-gray-600 mb-4">{COMPANY_DATA.contact.businessHours.weekdays}</p>
                <Link 
                  href={`tel:${COMPANY_DATA.contact.phone}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {COMPANY_DATA.contact.phone}
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">✉️ メール</h3>
                <p className="text-sm text-gray-600 mb-4">詳細な相談に最適</p>
                <Link 
                  href={`mailto:${COMPANY_DATA.contact.email}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  メールで問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
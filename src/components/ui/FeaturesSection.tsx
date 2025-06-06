import { Rocket, Sparkles, Shield, TrendingUp, Target, Star } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: '最短1週間納品',
    description: 'スピーディーな対応で、お客様のビジネスチャンスを逃しません。高品質を保ちながら、最短での納品を実現します。'
  },
  {
    icon: Sparkles,
    title: '成果報酬型',
    description: '初期費用0円から始められる安心の料金体系。成果が出てから費用をお支払いいただく、リスクゼロのサービスです。'
  },
  {
    icon: Shield,
    title: '完全サポート',
    description: '制作から運用まで、専任スタッフが責任を持ってサポート。24時間以内の返信をお約束します。'
  },
  {
    icon: TrendingUp,
    title: '実績重視',
    description: '150以上のプロジェクト完了実績。98%の顧客満足度を誇るプロフェッショナルチームがあなたをサポートします。'
  },
  {
    icon: Target,
    title: '戦略的提案',
    description: '単なる制作ではなく、ビジネスの成長を見据えた戦略的な提案で、競合他社に差をつけます。'
  },
  {
    icon: Star,
    title: '最新技術',
    description: 'AI技術やトレンドを取り入れた最新のソリューションで、時代に選ばれるサービスを提供します。'
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white" id="features" aria-labelledby="features-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            選ばれる理由
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            確実な成果をお約束する、Awakeならではの強み
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-purple/20 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-purple to-primary-pink rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
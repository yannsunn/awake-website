import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-purple via-primary-purple-dark to-primary-pink flex items-center justify-center pt-16" id="hero" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            革新的なソリューションで<br />
            企業の成長を<span className="text-yellow-300">サポート</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
            最新テクノロジーと専門知識で、御社の課題を最短で解決
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            HP制作・EC通販・動画編集・家具製作まで、プロフェッショナルなサービスをワンストップで提供。
            まずは無料相談で、最適なご提案を体験してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-purple font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              今すぐ無料相談を始める
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary-purple transition-all duration-300"
            >
              サービスを見る
              <ChevronDown className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
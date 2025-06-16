import { Target, Award } from 'lucide-react'
import Link from 'next/link'

export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-gray-50" id="mission-vision">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ミッション・ビジョン
          </h2>
          <p className="text-xl text-gray-600">
            私たちが目指す未来と大切にしている価値観
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-corporate-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ミッション</h3>
            <p className="text-gray-700 leading-relaxed">
              革新的なデジタルソリューションで企業の可能性を目覚めさせ、
              持続的な成長と新しい価値創造を実現する。
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-corporate-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ビジョン</h3>
            <p className="text-gray-700 leading-relaxed">
              デジタル変革のパートナーとして、お客様と共に業界をリードし、
              社会により良いインパクトを与える企業となる。
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/about"
            className="inline-flex items-center bg-corporate-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-corporate-blue-900 transition-colors"
          >
            代表挨拶・会社概要を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
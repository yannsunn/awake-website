import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import "./corporate.css";
import { enhancedOrganizationSchema } from "@/lib/enhanced-schema";
import SimpleBackground from "@/components/layout/SimpleBackground";
import ClientOnlyProviders from "@/components/ClientOnlyProviders";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#111827',
  colorScheme: 'light dark'
}

export const metadata: Metadata = {
  metadataBase: new URL("https://awakeinc.co.jp"),
  title: "株式会社Awake（アウェイク）| 東京都東大和市のchatbot付きホームページ制作・月額制AI顧問・Amazon代理店",
  description: "東京都東大和市の株式会社Awake（アウェイク）。chatbot付きホームページ制作13.2万円〜、月額制AI顧問・システム導入29.8万円〜、Amazon EC販売代行を適正価格で提供。中小企業のDX推進・業務効率化を支援します。",
  keywords: "株式会社Awake,アウェイク,東大和市,chatbot付きホームページ制作,Webサイト制作,月額制AI顧問,AIシステム導入,Amazon代理店,EC販売代行,中小企業,DX支援,業務効率化,東京",
  openGraph: {
    title: "株式会社Awake（アウェイク）| 東大和市のホームページ制作・AI開発・Amazon代理店",
    description: "東京都東大和市の株式会社Awake（アウェイク）。適正価格で中小企業のデジタル化を支援。ホームページ制作、AIチャットボット開発、Amazon販売代行サービスを提供しています。",
    images: ["/assets/images/ogp.jpg"],
    locale: "ja_JP",
    type: "website",
    siteName: "株式会社Awake（アウェイク）",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Awake（アウェイク）| 東大和市のホームページ制作・AI開発",
    description: "東京都東大和市の株式会社Awake（アウェイク）。適正価格で中小企業のデジタル化を支援します。",
    images: ["/assets/images/ogp.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJP.variable} ${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {/* WCAG 2.1 AAA準拠 スキップナビゲーション強化 */}
        <div className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:top-0 focus-within:left-0 focus-within:z-50 focus-within:bg-black focus-within:p-4">
          <a href="#main-content" className="inline-block bg-white text-black font-bold px-6 py-3 rounded-lg border-2 border-black focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
            メインコンテンツへスキップ
          </a>
          <a href="#navigation" className="ml-2 inline-block bg-white text-black font-bold px-6 py-3 rounded-lg border-2 border-black focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
            ナビゲーションへスキップ
          </a>
        </div>
        {/* シンプル背景 */}
        <SimpleBackground />
        {/* メインコンテンツ */}
        <div className="relative overflow-x-hidden">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(enhancedOrganizationSchema),
            }}
          />
          {children}
        </div>
        {/* クライアントサイド専用コンポーネント（動的ロード最適化） */}
        <ClientOnlyProviders />
      </body>
    </html>
  );
}

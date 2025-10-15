import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import "./corporate.css";
import { enhancedOrganizationSchema } from "@/lib/enhanced-schema";
import SimpleBackground from "@/components/layout/SimpleBackground";
import MouseEffects from "@/components/effects/MouseEffects";
import ChatWidget from "@/components/chat/ChatWidget";

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
  title: "株式会社Awake | ビジネスコンサルティング",
  description: "ホームページ制作、AIコンサルティング、Amazon代理店サービスで企業の成長をサポートする株式会社Awakeです。",
  keywords: "ホームページ制作,AIコンサルティング,Amazon代理店,ビジネスコンサルティング,株式会社Awake",
  openGraph: {
    title: "株式会社Awake | ビジネスコンサルティング",
    description: "ホームページ制作、AIコンサルティング、Amazon代理店サービスで企業の成長をサポートする株式会社Awakeです。",
    images: ["/assets/images/ogp.jpg"],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Awake | ビジネスコンサルティング",
    description: "ホームページ制作、AIコンサルティング、Amazon代理店サービスで企業の成長をサポートする株式会社Awakeです。",
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
        {/* マウスエフェクト */}
        <MouseEffects />
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
        {/* チャットボット */}
        <ChatWidget />
      </body>
    </html>
  );
}

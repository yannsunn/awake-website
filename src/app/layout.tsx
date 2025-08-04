import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { enhancedOrganizationSchema } from "@/lib/enhanced-schema";
import FixedBackground from "@/components/layout/FixedBackground";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"], // 必要最小限のweightのみ使用
  display: "swap",
  preload: true, // プリロード有効化
  fallback: ["system-ui", "sans-serif"], // フォールバック
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
      <body className={`${notoSansJP.variable} font-sans antialiased bg-gray-50`} suppressHydrationWarning>
        {/* WCAG 2.1 AAA準拠 スキップナビゲーション強化 */}
        <div className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:top-0 focus-within:left-0 focus-within:z-50 focus-within:bg-gray-900 focus-within:p-4">
          <a href="#main-content" className="inline-block bg-white text-gray-900 font-bold px-6 py-3 rounded-lg border-2 border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
            メインコンテンツへスキップ
          </a>
          <a href="#navigation" className="ml-2 inline-block bg-white text-gray-900 font-bold px-6 py-3 rounded-lg border-2 border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2">
            ナビゲーションへスキップ
          </a>
        </div>
        {/* 固定背景 */}
        <FixedBackground />
        {/* メインコンテンツ */}
        <div className="relative z-10">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(enhancedOrganizationSchema),
            }}
          />
          {children}
        </div>
        {/* Core Web Vitals最適化: リソースヒント */}
        <link rel="preload" href="/assets/images/hero-background.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://lin.ee" />
      </body>
    </html>
  );
}

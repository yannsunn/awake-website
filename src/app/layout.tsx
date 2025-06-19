import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { organizationSchema } from "@/lib/schema";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#111827'
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
      <body className={`${notoSansJP.variable} font-sans antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}

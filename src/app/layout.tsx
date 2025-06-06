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

export const metadata: Metadata = {
  title: "株式会社Awake | ビジネスコンサルティング",
  description: "Web制作、EC運営代行、動画制作、家具製造まで、一気通貫でビジネス成長をサポートする株式会社Awakeです。",
  keywords: "Web制作,EC運営代行,動画制作,家具製造,ビジネスコンサルティング",
  openGraph: {
    title: "株式会社Awake | ビジネスコンサルティング",
    description: "Web制作、EC運営代行、動画制作、家具製造まで、一気通貫でビジネス成長をサポートする株式会社Awakeです。",
    images: ["/assets/images/ogp.jpg"],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Awake | ビジネスコンサルティング",
    description: "Web制作、EC運営代行、動画制作、家具製造まで、一気通貫でビジネス成長をサポートする株式会社Awakeです。",
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
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

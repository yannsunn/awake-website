import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';

export const metadata = {
  title: 'Awake - 革新的なビジネスソリューション',
  description: '株式会社Awakeは、革新的なソリューションで企業の成長をサポートします。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 
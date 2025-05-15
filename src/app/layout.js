import Header from '@/components/Header/Header';
import './globals.css';

export const metadata = {
  title: 'Awake',
  description: '革新的なソリューションで企業の成長をサポート',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
      </body>
    </html>
  );
} 
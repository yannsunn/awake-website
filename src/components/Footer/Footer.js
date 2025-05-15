import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <Image 
            src="/assets/images/ogp.jpg" 
            alt="株式会社Awake" 
            width={180} 
            height={180} 
            className={styles.logo}
          />
          <p className={styles.address}>
            〒207-0013<br />
            東京都東大和市向原5-1129-61 渡辺ビル1F<br />
            TEL: 050-7115-4948<br />
            Email: shop@awakeinc.co.jp<br />
            代表取締役: 田形 康貴 (Yasutaka Tagata)
          </p>
          <div className={styles.links}>
            <ul>
              <li>
                <Link href="/legal/privacy-policy">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/legal/terms">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.copyright}>&copy; 2024 Awake Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
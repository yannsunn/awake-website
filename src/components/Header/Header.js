import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'EC通販', path: '/services/ec' },
    { name: 'HP制作LP制作', path: '/services/web' },
    { name: '動画編集', path: '/services/video' },
    { name: '家具製作', path: '/services/furniture' }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Awake
        </Link>
        
        <nav className={styles.nav}>
          <div 
            className={styles.servicesDropdown}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className={styles.servicesButton}>
              サービス
              <span className={`${styles.arrow} ${isServicesOpen ? styles.arrowUp : ''}`}>▼</span>
            </button>
            
            {isServicesOpen && (
              <div className={styles.dropdownContent}>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className={styles.dropdownItem}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/contact" className={styles.navLink}>
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 
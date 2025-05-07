/**
 * ui.js - ユーザーインターフェース操作
 */

// モバイルメニューの操作
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      
      // メニューアイコンの切り替え
      if (menuToggle.querySelector('.menu-open')) {
        menuToggle.querySelector('.menu-open').classList.toggle('hidden');
        menuToggle.querySelector('.menu-close').classList.toggle('hidden');
      }
    });
    
    // メニュー内のリンククリック時にメニューを閉じる
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          nav.classList.remove('active');
          
          // メニューアイコンの状態を元に戻す
          if (menuToggle.querySelector('.menu-open')) {
            menuToggle.querySelector('.menu-open').classList.remove('hidden');
            menuToggle.querySelector('.menu-close').classList.add('hidden');
          }
        }
      });
    });
  }
}

// スクロール時の処理（スクロールヘッダーなど）
function initScrollEffects() {
  const header = document.querySelector('header');
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // ヘッダー固定とスタイル変更
    if (header) {
      if (scrollPosition > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // スクロールトップボタンの表示・非表示
    if (scrollTopBtn) {
      if (scrollPosition > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });
  
  // スクロールトップボタンのクリック処理
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// アクティブセクションの検出と対応するナビゲーションリンクをハイライト
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 200; // オフセットを追加
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// タブコンテンツの切り替え機能
function initTabs() {
  const tabContainers = document.querySelectorAll('.tabs-container');
  
  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('.tab-link');
    const tabContents = container.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', e => {
        e.preventDefault();
        
        const targetId = tab.getAttribute('data-target');
        
        // タブのアクティブ状態を切り替え
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // タブコンテンツの表示・非表示を切り替え
        tabContents.forEach(content => {
          content.classList.remove('active');
          
          if (content.getAttribute('id') === targetId) {
            content.classList.add('active');
          }
        });
      });
    });
  });
}

// FAQアコーディオン
function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    
    if (header && content) {
      header.addEventListener('click', () => {
        // 現在の項目の状態を切り替え
        item.classList.toggle('open');
        
        // コンテンツが表示されている場合、高さを設定
        if (item.classList.contains('open')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    }
  });
}

// スティッキーサイドバー
function initStickySidebar() {
  const sidebar = document.querySelector('.sticky-sidebar');
  
  if (sidebar) {
    const mainContent = document.querySelector('.main-content');
    const sidebarTopOffset = sidebar.offsetTop;
    
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const mainContentBottom = mainContent.offsetTop + mainContent.offsetHeight;
      
      if (scrollPosition >= sidebarTopOffset) {
        if (scrollPosition + sidebar.offsetHeight >= mainContentBottom) {
          sidebar.style.position = 'absolute';
          sidebar.style.top = (mainContentBottom - sidebar.offsetHeight) + 'px';
        } else {
          sidebar.style.position = 'fixed';
          sidebar.style.top = '20px';
        }
      } else {
        sidebar.style.position = 'static';
      }
    });
  }
}

// 画像ライトボックス
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  
  if (galleryItems.length && lightbox) {
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    
    let currentIndex = 0;
    
    // 各ギャラリーアイテムにクリックイベントを追加
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(item.getAttribute('data-img'));
      });
    });
    
    // ライトボックスを開く
    function openLightbox(src) {
      lightboxImg.src = src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    // ライトボックスを閉じる
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // 次の画像を表示
    lightboxNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      const nextSrc = galleryItems[currentIndex].getAttribute('data-img');
      lightboxImg.src = nextSrc;
    });
    
    // 前の画像を表示
    lightboxPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      const prevSrc = galleryItems[currentIndex].getAttribute('data-img');
      lightboxImg.src = prevSrc;
    });
  }
}

// ページ読み込み時にすべての機能を初期化
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollEffects();
  initScrollSpy();
  initTabs();
  initAccordion();
  initStickySidebar();
  initLightbox();
});

// エクスポート（モジュール環境の場合）
export {
  initMobileMenu,
  initScrollEffects,
  initScrollSpy,
  initTabs,
  initAccordion,
  initStickySidebar,
  initLightbox
}; 
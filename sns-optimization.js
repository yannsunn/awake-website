/**
 * SNS表示最適化とインタラクション機能
 * SNS統計カウンターやアニメーション、シェア機能などを実装
 */

// SNS統計カウンターの初期化
function initSnsCounters() {
  const countUpElements = document.querySelectorAll('.count-up');
  
  if (countUpElements.length === 0) return;
  
  // Intersection Observerの設定
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        animateCounter(element);
        counterObserver.unobserve(element);
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });
  
  // 各カウンター要素の監視開始
  countUpElements.forEach(counter => {
    counterObserver.observe(counter);
  });
  
  // カウントアップアニメーション関数
  function animateCounter(element) {
    // データ属性から設定値を取得
    const finalValue = parseInt(element.getAttribute('data-target'), 10);
    const duration = parseInt(element.getAttribute('data-duration') || '2000', 10);
    const formatType = element.getAttribute('data-format') || 'plain';
    
    // アニメーション開始値
    let startValue = 0;
    let currentValue = startValue;
    const increment = finalValue / (duration / 16); // 16msごとのインクリメント量
    
    // カウンター表示のフォーマット関数
    function formatNumber(num, type) {
      switch (type) {
        case 'comma':
          return num.toLocaleString('ja-JP');
        case 'plus':
          return '+' + num;
        case 'percent':
          return num + '%';
        default:
          return num;
      }
    }
    
    // アニメーションフレーム更新関数
    function updateCounter() {
      currentValue += increment;
      
      if (currentValue < finalValue) {
        element.textContent = formatNumber(Math.floor(currentValue), formatType);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = formatNumber(finalValue, formatType);
        element.classList.add('counter-completed');
      }
    }
    
    // カウンター開始
    updateCounter();
  }
}

// SNSシェア機能
function initSnsSharing() {
  const shareButtons = document.querySelectorAll('.share-btn');
  
  if (shareButtons.length === 0) return;
  
  shareButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const platform = this.getAttribute('data-platform');
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      const description = encodeURIComponent(document.querySelector('meta[name="description"]')?.content || '');
      
      let shareUrl;
      
      switch (platform) {
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
          break;
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
          break;
        case 'line':
          shareUrl = `https://social-plugins.line.me/lineit/share?url=${url}`;
          break;
        default:
          return;
      }
      
      // シェアウィンドウを開く
      window.open(shareUrl, 'share-window', 'height=500, width=600, toolbar=0, menubar=0, resizable=1');
    });
  });
}

// SNS実績カードのインタラクション
function initSnsCards() {
  const snsCards = document.querySelectorAll('.sns-achievement-card');
  
  if (snsCards.length === 0) return;
  
  snsCards.forEach(card => {
    // カードのホバーエフェクト強化
    card.addEventListener('mouseenter', function() {
      this.classList.add('card-hovered');
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('card-hovered');
    });
    
    // 詳細リンクのクリック追跡
    const detailLink = card.querySelector('.sns-card-link');
    if (detailLink) {
      detailLink.addEventListener('click', function(e) {
        // アナリティクスイベントの送信（もし設定されていれば）
        if (window.gtag) {
          const cardTitle = card.querySelector('.sns-card-title')?.textContent || 'SNS事例';
          window.gtag('event', 'sns_case_view', {
            'event_category': 'engagement',
            'event_label': cardTitle
          });
        }
      });
    }
  });
}

// SNSケーススタディインタラクション
function initCaseStudy() {
  const caseStudy = document.querySelector('.sns-case-study');
  const ctaButton = document.querySelector('.case-study-cta');
  
  if (!caseStudy || !ctaButton) return;
  
  // CTAボタンのホバーエフェクト強化
  ctaButton.addEventListener('mouseenter', function() {
    this.classList.add('cta-hover');
    caseStudy.classList.add('highlight-case');
  });
  
  ctaButton.addEventListener('mouseleave', function() {
    this.classList.remove('cta-hover');
    caseStudy.classList.remove('highlight-case');
  });
  
  // クリック追跡
  ctaButton.addEventListener('click', function(e) {
    // アナリティクスイベントの送信（もし設定されていれば）
    if (window.gtag) {
      window.gtag('event', 'case_study_click', {
        'event_category': 'conversion',
        'event_label': 'ケーススタディ詳細確認'
      });
    }
  });
  
  // スタッツのアニメーション強化
  const caseStats = caseStudy.querySelectorAll('.case-stat');
  caseStats.forEach((stat, index) => {
    stat.addEventListener('mouseenter', function() {
      this.style.transitionDelay = '0ms';
    });
    
    // 初期表示時のスタッガーアニメーション
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
    stat.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    stat.style.transitionDelay = `${index * 200}ms`;
    
    setTimeout(() => {
      stat.style.opacity = '1';
      stat.style.transform = 'translateY(0)';
    }, 100);
  });
}

// フローティングCTAの制御
function initFloatingCta() {
  const floatingCta = document.querySelector('.floating-cta');
  const contactSection = document.querySelector('#contact');
  
  if (!floatingCta || !contactSection) return;
  
  // スクロール位置に応じた表示/非表示
  function toggleFloatingCta() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const contactPosition = contactSection.offsetTop;
    
    // コンタクトセクションが表示されたらCTAを隠す
    if (scrollPosition >= contactPosition) {
      floatingCta.classList.remove('visible');
    } else {
      floatingCta.classList.add('visible');
    }
  }
  
  // 初期状態設定
  setTimeout(() => {
    floatingCta.classList.add('visible');
  }, 2000);
  
  // スクロールイベントリスナー
  if (window.addScrollHandler) {
    // performance-optimization.jsのスクロール最適化関数を使用
    window.addScrollHandler(toggleFloatingCta);
  } else {
    window.addEventListener('scroll', toggleFloatingCta, { passive: true });
  }
  
  // CTAクリック追跡
  const ctaButton = floatingCta.querySelector('.btn-float');
  if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
      if (window.gtag) {
        window.gtag('event', 'floating_cta_click', {
          'event_category': 'conversion',
          'event_label': 'フローティングCTAクリック'
        });
      }
    });
  }
}

// SNSメトリクスカードの追加効果
function enhanceSnsMetricCards() {
  const metricCards = document.querySelectorAll('.sns-metric-card');
  
  if (metricCards.length === 0) return;
  
  metricCards.forEach(card => {
    // ホバー時の3D効果
    card.addEventListener('mousemove', function(e) {
      const cardRect = this.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      // マウス位置によるカード傾斜角度の計算（-15°〜15°）
      const rotateY = -1 * ((e.clientX - cardCenterX) / cardRect.width * 10);
      const rotateX = (e.clientY - cardCenterY) / cardRect.height * 10;
      
      // 3D変形を適用
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) translateY(-5px)`;
      this.style.boxShadow = '0 30px 50px rgba(0, 0, 0, 0.15)';
    });
    
    // マウス離脱時にリセット
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) translateY(0)';
      this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
    });
  });
}

// DOMの読み込み完了時に初期化
document.addEventListener('DOMContentLoaded', function() {
  // SNSカウンターの初期化
  initSnsCounters();
  
  // SNSシェア機能の初期化
  initSnsSharing();
  
  // SNSカードインタラクションの初期化
  initSnsCards();
  
  // ケーススタディセクションの初期化
  initCaseStudy();
  
  // フローティングCTAの初期化
  initFloatingCta();
  
  // SNSメトリクスカードの効果強化
  enhanceSnsMetricCards();
});

// モジュールとしてエクスポート
export {
  initSnsCounters,
  initSnsSharing,
  initSnsCards,
  initCaseStudy,
  initFloatingCta,
  enhanceSnsMetricCards
}; 
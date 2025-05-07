/**
 * Intersection Observer を使用したスクロールアニメーション機能
 * 要素が表示領域に入ったタイミングでアニメーションクラスを付与します
 */

// アニメーション要素のインターセクション監視
function initIntersectionAnimations() {
  // アニメーション対象クラスのリスト
  const animatedClasses = [
    '.fade-up', 
    '.fade-down', 
    '.fade-left', 
    '.fade-right',
    '.sns-fade-up', 
    '.sns-fade-left', 
    '.sns-fade-right',
    '.sns-stagger',
    '.zoom-in',
    '.rotate-in',
    '.scale-in',
    '.blur-in'
  ];
  
  // すべてのクラスをセレクタ文字列に結合
  const selector = animatedClasses.join(', ');
  
  // アニメーション対象要素の取得
  const elements = document.querySelectorAll(selector);
  
  // 対象要素がなければ終了
  if (elements.length === 0) return;
  
  console.log(`アニメーション要素数: ${elements.length}`);
  
  // IntersectionObserverの設定
  const options = {
    root: null, // ビューポート基準
    rootMargin: '0px 0px -100px 0px', // 下端から100px入ったところで発火
    threshold: 0.15 // 15%表示されたら発火
  };
  
  // Observerの作成
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 要素が視界に入ったらanimateクラスを追加
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, 100); // 少し遅延させて確実に適用
        
        // 一度アニメーションが適用されたら監視を解除
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  // 各アニメーション要素の監視を開始
  elements.forEach(element => {
    observer.observe(element);
  });
}

// スタッガーアニメーション（子要素を順番にアニメーション）
function initStaggerAnimations() {
  // スタッガーアニメーション対象の親要素
  const staggerContainers = document.querySelectorAll('.sns-stagger');
  
  if (staggerContainers.length === 0) return;
  
  // IntersectionObserverの設定
  const options = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // コンテナに表示クラスを追加
        entry.target.classList.add('animate');
        
        // 監視を解除
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  // 各スタッガーコンテナの監視を開始
  staggerContainers.forEach(container => {
    observer.observe(container);
  });
}

// スクロールプログレスバーの初期化
function initScrollProgress() {
  const progressLine = document.querySelector('.progress-line');
  
  if (!progressLine) return;
  
  // 最適化されたスクロールイベントハンドラ
  let ticking = false;
  
  function updateProgress() {
    // ドキュメント全体の高さからビューポート高さを引いた値
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    // 現在のスクロール位置
    const currentScroll = window.scrollY;
    // 進捗割合（%）
    const scrollPercentage = (currentScroll / totalScroll) * 100;
    
    // プログレスバーの幅を更新
    progressLine.style.width = `${scrollPercentage}%`;
    
    ticking = false;
  }
  
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }
  
  // スクロールイベントリスナーの追加（パッシブモードで最適化）
  window.addEventListener('scroll', onScroll, { passive: true });
  
  // 初期状態の設定
  updateProgress();
}

// ページ読み込み完了時の処理
document.addEventListener('DOMContentLoaded', () => {
  console.log('Intersection Observer初期化');
  
  // 通常のアニメーション初期化
  initIntersectionAnimations();
  
  // スタッガーアニメーション初期化
  initStaggerAnimations();
  
  // スクロールプログレスバー初期化
  initScrollProgress();
});

// リサイズ時の再計算
window.addEventListener('resize', () => {
  // 必要に応じてアニメーション要素の再計算
});

// モジュールとしてエクスポート
export {
  initIntersectionAnimations,
  initStaggerAnimations,
  initScrollProgress
}; 
/**
 * 画像の遅延読み込みを管理するモジュール
 */

// Intersection Observerのオプション
const observerOptions = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1
};

// 遅延読み込み対象の画像を監視するObserver
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      loadImage(img);
      observer.unobserve(img);
    }
  });
}, observerOptions);

/**
 * 画像を読み込む
 * @param {HTMLImageElement} img - 読み込む画像要素
 */
function loadImage(img) {
  const src = img.dataset.src;
  if (src) {
    img.src = src;
    img.removeAttribute('data-src');
    img.classList.remove('lazy');
    img.classList.add('loaded');
  }
}

/**
 * 遅延読み込みを初期化
 */
export function initLazyLoading() {
  // data-src属性を持つすべての画像を取得
  const lazyImages = document.querySelectorAll('img[data-src]');

  // 各画像を監視
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  // background-imageの遅延読み込み
  const lazyBackgrounds = document.querySelectorAll('.lazy-background');
  lazyBackgrounds.forEach(element => {
    imageObserver.observe(element);
  });
}

/**
 * 新しく追加された要素に対して遅延読み込みを適用
 * @param {HTMLElement} container - 新しい要素を含むコンテナ
 */
export function applyLazyLoadingToNewElements(container) {
  const newLazyImages = container.querySelectorAll('img[data-src]');
  newLazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  const newLazyBackgrounds = container.querySelectorAll('.lazy-background');
  newLazyBackgrounds.forEach(element => {
    imageObserver.observe(element);
  });
}

/**
 * 特定の要素の遅延読み込みを手動で開始
 * @param {HTMLElement} element - 遅延読み込みを適用する要素
 */
export function startLazyLoading(element) {
  if (element.tagName.toLowerCase() === 'img' && element.dataset.src) {
    imageObserver.observe(element);
  } else if (element.classList.contains('lazy-background')) {
    imageObserver.observe(element);
  }
}

/**
 * 遅延読み込みを停止
 * @param {HTMLElement} element - 遅延読み込みを停止する要素
 */
export function stopLazyLoading(element) {
  imageObserver.unobserve(element);
} 
/**
 * animations.js - ウェブサイトアニメーション処理
 */

// スクロールアニメーション
export const initScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const animateOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;
    
    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerBottom) {
        const delay = element.dataset.delay || 0;
        setTimeout(() => {
          element.classList.add('animate-visible');
        }, delay);
      }
    });
  };
  
  // 初期チェック
  animateOnScroll();
  
  // スクロール時にアニメーションをチェック
  window.addEventListener('scroll', animateOnScroll);
};

// リップルエフェクトの初期化
function initRippleEffect() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-service');

  buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.classList.add('btn-ripple');
      ripple.style.top = `${y}px`;
      ripple.style.left = `${x}px`;

      this.appendChild(ripple);

      // アニメーション終了後に要素を削除
      setTimeout(() => {
        ripple.remove();
      }, 700);
    });
  });
}

// カウントアップアニメーション
export const initCounterAnimation = () => {
  const counters = document.querySelectorAll('.counter');
  
  const startCounting = (counter) => {
    const target = parseInt(counter.dataset.target);
    const duration = parseInt(counter.dataset.duration) || 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  };
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  counters.forEach((counter) => {
    observer.observe(counter);
  });
};

// タイピングアニメーション
function initTypingAnimation() {
  const typingElements = document.querySelectorAll('.typing-text');
  
  typingElements.forEach((element) => {
    const text = element.getAttribute('data-text');
    const speed = element.getAttribute('data-speed') || 100;
    
    element.textContent = '';
    let i = 0;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const typingInterval = setInterval(() => {
            if (i < text.length) {
              element.textContent += text.charAt(i);
              i++;
            } else {
              clearInterval(typingInterval);
            }
          }, speed);
          
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.5
      }
    );
    
    observer.observe(element);
  });
}

// パララックス効果
export const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  const updateParallax = () => {
    parallaxElements.forEach((element) => {
      const scrollPosition = window.pageYOffset;
      const speed = element.dataset.speed || 0.5;
      const offset = scrollPosition * speed;
      
      element.style.transform = `translateY(${offset}px)`;
    });
  };
  
  window.addEventListener('scroll', updateParallax);
};

// ホバーエフェクト
export const initHoverEffects = () => {
  const hoverElements = document.querySelectorAll('.hover-effect');
  
  hoverElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('hovered');
    });
    
    element.addEventListener('mouseleave', () => {
      element.classList.remove('hovered');
    });
  });
};

// スムーズスクロール
export const initSmoothScroll = () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      const targetPosition = targetElement.offsetTop - 80; // ヘッダーの高さ分オフセット
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // モバイルメニューが開いている場合は閉じる
      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
      }
    });
  });
};

// カードフリップアニメーション
export const initCardFlip = () => {
  const flipCards = document.querySelectorAll('.flip-card');
  
  flipCards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
};

// ページ読み込み時に全てのアニメーションを初期化
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initRippleEffect();
  initCounterAnimation();
  initTypingAnimation();
  initParallaxEffect();
  initHoverEffects();
  initSmoothScroll();
  initCardFlip();
});

// エクスポート（モジュール環境の場合）
export {
  initScrollAnimations,
  initRippleEffect,
  initCounterAnimation,
  initTypingAnimation,
  initParallaxEffect,
  initHoverEffects,
  initSmoothScroll,
  initCardFlip
}; 
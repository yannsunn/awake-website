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
    const start = parseInt(counter.textContent) || 0;
    const increment = (target - start) / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
      current += increment;
      counter.textContent = Math.round(current);
      
      if (current < target) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  
  counters.forEach((counter) => observer.observe(counter));
};

// タイピングアニメーション
export const initTypingAnimation = () => {
  const typingElements = document.querySelectorAll('.typing-animation');
  
  typingElements.forEach((element) => {
    const text = element.textContent;
    const speed = parseInt(element.dataset.speed) || 100;
    element.textContent = '';
    
    let i = 0;
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };
    
    type();
  });
};

// パララックス効果
export const initParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', () => {
    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(window.pageYOffset * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
};

// ホバーエフェクト
export const initHoverEffects = () => {
  const hoverElements = document.querySelectorAll('.hover-effect');
  
  hoverElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('hover-active');
    });
    
    element.addEventListener('mouseleave', () => {
      element.classList.remove('hover-active');
    });
  });
};

// スムーススクロール
export const initSmoothScroll = () => {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// カードフリップアニメーション
export const initCardFlip = () => {
  const cards = document.querySelectorAll('.card-flip');
  
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });
};

// 全アニメーションの初期化
export const initAllAnimations = () => {
  initScrollAnimations();
  initCounterAnimation();
  initParallaxEffect();
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
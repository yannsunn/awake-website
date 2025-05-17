// CSS遅延読み込み
const loadCSS = href => {
    const link = document.createElement('link');
    Object.assign(link, {
        rel: 'stylesheet',
        href,
        media: 'print'
    });
    
    document.head.appendChild(link);
    requestAnimationFrame(() => link.media = 'all');
};

// 非クリティカルCSSの読み込み
document.addEventListener('DOMContentLoaded', () => {
    loadCSS('/css/styles.css');
}); 
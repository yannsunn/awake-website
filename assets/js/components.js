// コンポーネントのキャッシュを保持するオブジェクト
const componentCache = {
    header: null,
    footer: null
};

// コンポーネントを読み込む関数
async function loadComponent(name, targetId) {
    try {
        // キャッシュにあればそれを使用
        if (componentCache[name]) {
            document.getElementById(targetId).innerHTML = componentCache[name];
            return;
        }

        // コンポーネントを読み込む
        const response = await fetch(`/assets/components/${name}.html`);
        if (!response.ok) throw new Error(`Failed to load ${name}`);
        
        const html = await response.text();
        
        // キャッシュに保存
        componentCache[name] = html;
        
        // DOMに挿入
        document.getElementById(targetId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${name}:`, error);
    }
}

// ページ読み込み時にコンポーネントを読み込む
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'header-placeholder');
    loadComponent('footer', 'footer-placeholder');
}); 
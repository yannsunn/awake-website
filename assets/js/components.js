// コンポーネントのキャッシュを保持するオブジェクト
const componentCache = {
    header: null,
    footer: null
};

// コンポーネントを読み込む関数
async function loadComponent(name, targetId) {
    try {
        const response = await fetch(`/assets/components/${name}.html`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const content = await response.text();
        document.getElementById(targetId).innerHTML = content;
    } catch (error) {
        console.error(`Error loading ${name} component:`, error);
    }
}

// ページ読み込み時にコンポーネントを読み込む
window.addEventListener('load', async () => {
    await Promise.all([
        loadComponent('header', 'header-placeholder'),
        loadComponent('footer', 'footer-placeholder')
    ]);
}); 
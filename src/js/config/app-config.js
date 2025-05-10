/**
 * アプリケーション全体の設定
 */
export const config = {
    /**
     * AOS（Animate On Scroll）ライブラリの設定
     */
    animations: {
        // アニメーション期間（ミリ秒）
        duration: 800,
        
        // イージング関数
        easing: 'ease-in-out',
        
        // 一度だけアニメーションを実行するか
        once: true,
        
        // 要素が見える前に何ピクセルでアニメーションを開始するか
        offset: 100,
        
        // アニメーション遅延（ミリ秒）
        delay: 0,
        
        // レスポンシブ設定
        disable: false,
        
        // 監視するスクロールコンテナ
        startEvent: 'DOMContentLoaded',
        
        // 初期化時にすべてのアニメーションを無効化
        disableMutationObserver: false,
        
        // デバッグモード
        debug: false,
        
        // ミラーアニメーション
        mirror: false,
        
        // アンカーによる位置決めの修正
        anchorPlacement: 'top-bottom'
    },
    
    /**
     * ブレークポイント
     */
    breakpoints: {
        mobile: 480,
        tablet: 768,
        desktop: 1024,
        widescreen: 1200
    },
    
    /**
     * API設定
     */
    api: {
        baseUrl: 'https://api.awakeinc.co.jp',
        endpoints: {
            contact: '/contact',
            subscribe: '/subscribe'
        },
        timeout: 10000 // 10秒
    },
    
    /**
     * フォーム設定
     */
    forms: {
        validation: {
            requiredMessage: '必須項目です',
            emailFormat: 'メールアドレスの形式が正しくありません',
            minLength: '{{min}}文字以上で入力してください',
            maxLength: '{{max}}文字以内で入力してください'
        }
    },
    
    /**
     * ローカライズ設定
     */
    locale: {
        default: 'ja',
        supported: ['ja', 'en']
    },
    
    /**
     * パフォーマンス設定
     */
    performance: {
        throttleScrollDelay: 100,
        debounceResizeDelay: 250
    }
}; 
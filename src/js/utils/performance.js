/**
 * パフォーマンス最適化用のユーティリティ
 */
export const performanceUtils = {
    /**
     * 関数の実行頻度を制限するスロットル
     * @param {Function} func - 実行する関数
     * @param {number} limit - 実行間隔（ミリ秒）
     * @returns {Function} - スロットル化された関数
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * 連続した呼び出しの最後のものだけを実行するデバウンス
     * @param {Function} func - 実行する関数
     * @param {number} delay - 遅延時間（ミリ秒）
     * @param {boolean} [immediate=false] - 最初の呼び出しを即時実行するかどうか
     * @returns {Function} - デバウンス化された関数
     */
    debounce(func, delay, immediate = false) {
        let timeout;
        return function(...args) {
            const context = this;
            const later = () => {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, delay);
            if (callNow) func.apply(context, args);
        };
    },

    /**
     * リソースをプリロードする
     * @param {string} url - リソースのURL
     * @param {string} [type='image'] - リソースのタイプ（'image', 'script', 'style', 'font', 'audio', 'video'）
     * @param {Object} [options={}] - 追加オプション
     */
    preload(url, type = 'image', options = {}) {
        if (!url) return;

        switch (type) {
            case 'image':
                const img = new Image();
                if (options.crossOrigin) {
                    img.crossOrigin = options.crossOrigin;
                }
                img.src = url;
                break;
            case 'script':
            case 'style':
            case 'font':
            case 'audio':
            case 'video':
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = url;
                link.as = type;
                if (options.crossOrigin) {
                    link.crossOrigin = options.crossOrigin;
                }
                document.head.appendChild(link);
                break;
            default:
                console.warn(`未知のプリロードタイプ: ${type}`);
        }
    },

    /**
     * パフォーマンスのトラッキングを開始
     * @param {string} label - パフォーマンスマークのラベル
     */
    startMeasure(label) {
        if (window.performance && window.performance.mark) {
            window.performance.mark(`${label}:start`);
        }
    },

    /**
     * パフォーマンスのトラッキングを終了し測定結果を取得
     * @param {string} label - パフォーマンスマークのラベル
     * @param {boolean} [log=false] - コンソールに結果を出力するかどうか
     * @returns {number|null} - 測定結果（ミリ秒）またはnull
     */
    endMeasure(label, log = false) {
        if (window.performance && window.performance.mark && window.performance.measure) {
            window.performance.mark(`${label}:end`);
            window.performance.measure(label, `${label}:start`, `${label}:end`);
            
            const entries = window.performance.getEntriesByName(label);
            const duration = entries.length > 0 ? entries[0].duration : null;
            
            if (log && duration !== null) {
                console.log(`パフォーマンス測定: ${label} = ${duration.toFixed(2)}ms`);
            }
            
            // マークをクリアする
            window.performance.clearMarks(`${label}:start`);
            window.performance.clearMarks(`${label}:end`);
            window.performance.clearMeasures(label);
            
            return duration;
        }
        return null;
    }
}; 
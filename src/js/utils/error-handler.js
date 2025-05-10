/**
 * アプリケーション全体のエラー処理を担当するユーティリティ
 */
export class ErrorHandler {
    /**
     * エラーを処理する
     * @param {Error} error - エラーオブジェクト
     * @param {string} context - エラーが発生したコンテキスト
     * @param {boolean} silent - コンソールに表示しない場合はtrue
     */
    static handle(error, context = '', silent = false) {
        const errorMessage = `エラー${context ? `（${context}）` : ''}: ${error.message || error}`;
        
        // 開発環境の場合のみコンソールにエラーを表示
        if (!silent && (process.env.NODE_ENV === 'development' || location.hostname === 'localhost')) {
            console.error(errorMessage, error);
        }
        
        // 本番環境ではエラーをログ送信できる仕組みを追加可能
        if (process.env.NODE_ENV === 'production') {
            // 例: this.sendErrorToAnalytics(error, context);
        }
    }

    /**
     * グローバルエラーハンドラーを設定
     */
    static setupGlobalHandlers() {
        // 未処理のPromiseエラーを捕捉
        window.addEventListener('unhandledrejection', (event) => {
            this.handle(event.reason, 'Unhandled Promise Rejection');
            // デフォルトの処理を止めない
        });

        // 通常の未処理エラーを捕捉
        window.onerror = (message, source, lineno, colno, error) => {
            this.handle(error || message, `Global Error (${source}:${lineno}:${colno})`);
            // デフォルトの処理を継続
            return false;
        };
    }

    /**
     * アナリティクスサービスにエラーを送信（実装例）
     * @param {Error} error - エラーオブジェクト
     * @param {string} context - エラーコンテキスト
     */
    static sendErrorToAnalytics(error, context) {
        // この部分は実際に使用するアナリティクスサービスに合わせて実装
        try {
            const errorData = {
                message: error.message || String(error),
                stack: error.stack,
                context: context,
                url: window.location.href,
                timestamp: new Date().toISOString()
            };
            
            // 例: Google Analytics、LogRocket、Sentryなどにデータを送信
            console.info('エラーログ送信:', errorData);
        } catch (e) {
            // エラー送信時の例外は無視（無限ループを防止）
            console.warn('エラーログの送信に失敗しました', e);
        }
    }
} 
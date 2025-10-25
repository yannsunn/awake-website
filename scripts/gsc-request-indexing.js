/**
 * Google Indexing API - インデックス登録リクエスト
 *
 * このスクリプトは、Google Indexing APIを使用して主要ページのインデックス登録をリクエストします。
 *
 * 使用方法:
 *   node scripts/gsc-request-indexing.js
 *
 * 事前準備:
 *   1. Google Cloud Consoleでサービスアカウントを作成
 *   2. Indexing APIを有効化
 *   3. サービスアカウントをSearch Consoleに所有者として追加
 *   4. サービスアカウントキー（JSON）を indexing-service-account.json として保存
 *
 * 詳細: docs/INDEXING_API_SETUP.md を参照
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// 設定
const SERVICE_ACCOUNT_KEY_FILE = path.join(__dirname, '..', 'indexing-service-account.json');
const PAGES_TO_INDEX = [
  'https://www.awakeinc.co.jp/',
  'https://www.awakeinc.co.jp/services/ai',
  'https://www.awakeinc.co.jp/services/ec',
  'https://www.awakeinc.co.jp/services/web',
  'https://www.awakeinc.co.jp/about',
  'https://www.awakeinc.co.jp/faq',
];

/**
 * サービスアカウント認証
 */
async function getServiceAccountAuth() {
  // 認証情報ファイルの存在確認
  if (!fs.existsSync(SERVICE_ACCOUNT_KEY_FILE)) {
    throw new Error(
      `サービスアカウントキーが見つかりません: ${SERVICE_ACCOUNT_KEY_FILE}\n` +
      'セットアップ手順: docs/INDEXING_API_SETUP.md を参照してください'
    );
  }

  const keyFile = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_KEY_FILE, 'utf8'));

  const auth = new google.auth.GoogleAuth({
    credentials: keyFile,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  return auth;
}

/**
 * Indexing APIでインデックスリクエスト
 */
async function requestIndexing(auth, url) {
  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  try {
    console.log(`📤 リクエスト中: ${url}`);

    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED',
      },
    });

    console.log('  ✅ 成功');
    return { success: true, data: response.data };

  } catch (error) {
    if (error.code === 403 || error.code === 401) {
      console.log('  ❌ 権限エラー');
      console.log('  💡 サービスアカウントがSearch Consoleに追加されているか確認してください');
      console.log('  📖 手順: docs/INDEXING_API_SETUP.md');
    } else if (error.code === 429) {
      console.log('  ⚠️  API制限に達しました（1日200リクエスト）');
    } else {
      console.log(`  ❌ エラー: ${error.message}`);
    }
    return { success: false, error: error.message };
  }
}

/**
 * インデックス状態を確認
 */
async function getIndexingStatus(auth, url) {
  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  try {
    const response = await indexing.urlNotifications.getMetadata({
      url: url,
    });

    return response.data;
  } catch (error) {
    // エラーは無視（状態が取得できない場合がある）
    return null;
  }
}


/**
 * メイン処理
 */
async function main() {
  console.log('🚀 Google Indexing API - インデックス登録リクエスト\n');
  console.log('対象ページ:', PAGES_TO_INDEX.length, 'ページ\n');

  try {
    // サービスアカウント認証
    console.log('🔐 サービスアカウント認証中...');
    const auth = await getServiceAccountAuth();
    console.log('✅ 認証成功\n');

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // 各URLのインデックスリクエスト
    let successCount = 0;
    let failCount = 0;
    const results = [];

    for (const url of PAGES_TO_INDEX) {
      const result = await requestIndexing(auth, url);
      results.push({ url, ...result });

      if (result.success) {
        successCount++;
      } else {
        failCount++;
      }

      // API制限を考慮して待機（600リクエスト/分 = 1リクエスト/100ms）
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // サマリー表示
    console.log('📊 実行結果:');
    console.log(`  ✅ 成功: ${successCount}件`);
    if (failCount > 0) {
      console.log(`  ❌ 失敗: ${failCount}件`);
    }
    console.log('');

    if (successCount > 0) {
      console.log('🎉 インデックスリクエスト送信完了！\n');
      console.log('📋 次のステップ:');
      console.log('1. 数時間～数日後にGoogleがクロールを実行');
      console.log('2. Google Search Consoleで確認:');
      console.log('   https://search.google.com/search-console?resource_id=sc-domain:awakeinc.co.jp');
      console.log('3. 検索パフォーマンスをモニタリング\n');

      console.log('💡 ヒント:');
      console.log('  - このスクリプトは定期的に実行できます（更新時など）');
      console.log('  - API制限: 200リクエスト/日、600リクエスト/分');
    } else if (failCount > 0) {
      console.log('\n⚠️  すべてのリクエストが失敗しました\n');
      console.log('📖 トラブルシューティング:');
      console.log('  1. サービスアカウントキーが正しく配置されているか確認');
      console.log('     ファイル: indexing-service-account.json');
      console.log('  2. Indexing APIが有効化されているか確認');
      console.log('     https://console.cloud.google.com/apis/library/indexing.googleapis.com');
      console.log('  3. サービスアカウントがSearch Consoleに追加されているか確認');
      console.log('     https://search.google.com/search-console → 設定 → ユーザーと権限\n');
      console.log('詳細: docs/INDEXING_API_SETUP.md');
    }

  } catch (error) {
    console.error('\n❌ エラー:', error.message);

    if (error.message.includes('サービスアカウントキーが見つかりません')) {
      console.log('\n📖 セットアップ手順:');
      console.log('  1. docs/INDEXING_API_SETUP.md を参照');
      console.log('  2. サービスアカウントキーをダウンロード');
      console.log('  3. プロジェクトルートに indexing-service-account.json として配置');
    }

    process.exit(1);
  }
}

// スクリプト実行
if (require.main === module) {
  main();
}

module.exports = { requestIndexing, getIndexingStatus };

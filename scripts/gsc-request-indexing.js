/**
 * Google Search Console API - URL検査とインデックスリクエスト
 *
 * このスクリプトは、主要ページのURL検査とインデックスリクエストを実行します。
 *
 * 注意: Google Search Console API v3には直接的な「インデックスリクエスト」機能がありません。
 * 代わりに、Google Indexing API を使用する必要があります。
 *
 * 使用方法:
 *   node scripts/gsc-request-indexing.js
 *
 * 事前準備:
 *   1. node scripts/gsc-setup-oauth.js を実行して認証を完了
 *   2. Google Indexing API を有効化
 *   3. サービスアカウントを作成してSearch Consoleに所有者として追加
 */

const { google } = require('googleapis');
const { authorize } = require('./gsc-setup-oauth');

// 設定
const SITE_URL = 'sc-domain:awakeinc.co.jp';
const PAGES_TO_INDEX = [
  'https://www.awakeinc.co.jp/',
  'https://www.awakeinc.co.jp/services/ai',
  'https://www.awakeinc.co.jp/services/ec',
  'https://www.awakeinc.co.jp/services/web',
  'https://www.awakeinc.co.jp/about',
  'https://www.awakeinc.co.jp/faq',
];

/**
 * URL検査を実行（Search Console API v3）
 */
async function inspectUrl(auth, url) {
  const webmasters = google.webmasters({ version: 'v3', auth });

  try {
    console.log(`🔍 検査中: ${url}`);

    // Note: Search Console API v3にはURL Inspection APIがありません
    // 代わりに、サイトマップ経由でのインデックス状況を確認
    const response = await webmasters.urlcrawlerrorscounts.query({
      siteUrl: SITE_URL,
      category: 'notFound',
      latestCountsOnly: true,
    });

    console.log('  ✅ クロールエラー確認完了');
    return response.data;

  } catch (error) {
    console.error(`  ❌ エラー: ${error.message}`);
    return null;
  }
}

/**
 * Indexing APIでインデックスリクエスト（要サービスアカウント）
 */
async function requestIndexing(auth, url) {
  const indexing = google.indexing({ version: 'v3', auth });

  try {
    console.log(`📤 インデックスリクエスト: ${url}`);

    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED',
      },
    });

    console.log('  ✅ リクエスト送信完了');
    return response.data;

  } catch (error) {
    if (error.code === 403) {
      console.log('  ⚠️  Indexing API未設定（Search Consoleでの手動リクエストが必要）');
      console.log('  💡 詳細: https://developers.google.com/search/apis/indexing-api/v3/quickstart');
    } else {
      console.error(`  ❌ エラー: ${error.message}`);
    }
    return null;
  }
}

/**
 * サイトのクロール状況を取得
 */
async function getCrawlStatus(auth) {
  const webmasters = google.webmasters({ version: 'v3', auth });

  try {
    console.log('📊 クロール状況確認中...\n');

    // クロールエラーを確認
    const errors = await webmasters.urlcrawlerrorscounts.query({
      siteUrl: SITE_URL,
      latestCountsOnly: true,
    });

    if (errors.data.countPerTypes) {
      console.log('クロールエラー:');
      errors.data.countPerTypes.forEach((type) => {
        console.log(`  ${type.category}: ${type.entries?.[0]?.count || 0} 件`);
      });
    } else {
      console.log('✅ クロールエラーなし');
    }

    console.log('');

  } catch (error) {
    console.error('クロール状況取得エラー:', error.message);
  }
}

/**
 * メイン処理
 */
async function main() {
  console.log('🚀 Google Search Console - URL検査とインデックスリクエスト\n');
  console.log('対象サイト:', SITE_URL);
  console.log('対象ページ:', PAGES_TO_INDEX.length, 'ページ\n');

  try {
    const auth = await authorize();

    // クロール状況確認
    await getCrawlStatus(auth);

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('📋 重要な注意事項:\n');
    console.log('Search Console API v3では直接的な「インデックス登録をリクエスト」機能が');
    console.log('提供されていません。以下の2つの方法があります:\n');
    console.log('1. 【推奨】Google Search Consoleのウェブインターフェースで手動リクエスト');
    console.log('   → docs/GOOGLE_SEARCH_CONSOLE_SETUP.md の手順に従ってください\n');
    console.log('2. 【上級】Google Indexing APIを使用（サービスアカウント設定が必要）');
    console.log('   → https://developers.google.com/search/apis/indexing-api/v3/quickstart\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Indexing APIを試行（サービスアカウントが設定されている場合のみ成功）
    console.log('Indexing API リクエストを試行中...\n');
    let successCount = 0;

    for (const url of PAGES_TO_INDEX) {
      const result = await requestIndexing(auth, url);
      if (result) {
        successCount++;
      }
      // API制限を考慮して少し待機
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('');
    if (successCount > 0) {
      console.log(`✅ ${successCount}/${PAGES_TO_INDEX.length} ページのインデックスリクエスト成功`);
      console.log('');
      console.log('📋 次のステップ:');
      console.log('1. 数時間後にGoogle Search Consoleで確認');
      console.log('2. 検索パフォーマンスをモニタリング');
    } else {
      console.log('⚠️  Indexing APIが利用できません');
      console.log('');
      console.log('📋 代替手順:');
      console.log('1. Google Search Consoleにアクセス:');
      console.log('   https://search.google.com/search-console?resource_id=sc-domain:awakeinc.co.jp');
      console.log('2. 各URLでURL検査を実行:');
      PAGES_TO_INDEX.forEach(url => {
        console.log(`   - ${url}`);
      });
      console.log('3. 「インデックス登録をリクエスト」ボタンをクリック');
    }

    console.log('\n🎉 処理完了！');

  } catch (error) {
    console.error('\n❌ 失敗:', error.message);
    process.exit(1);
  }
}

// スクリプト実行
if (require.main === module) {
  main();
}

module.exports = { inspectUrl, requestIndexing };

/**
 * Google Search Console API - サイトマップ送信
 *
 * このスクリプトは、サイトマップをGoogle Search Consoleに送信します。
 *
 * 使用方法:
 *   node scripts/gsc-submit-sitemap.js
 *
 * 事前準備:
 *   node scripts/gsc-setup-oauth.js を実行して認証を完了してください
 */

const { google } = require('googleapis');
const { authorize } = require('./gsc-setup-oauth');

// 設定
const SITE_URL = 'sc-domain:awakeinc.co.jp'; // Domain property形式
const SITEMAP_URL = 'https://www.awakeinc.co.jp/sitemap.xml';

/**
 * サイトマップを送信
 */
async function submitSitemap(auth) {
  const webmasters = google.webmasters({ version: 'v3', auth });

  try {
    console.log('📤 サイトマップ送信中...');
    console.log(`サイト: ${SITE_URL}`);
    console.log(`サイトマップ: ${SITEMAP_URL}\n`);

    // 既存のサイトマップを取得
    console.log('🔍 既存のサイトマップを確認中...');
    const existing = await webmasters.sitemaps.list({
      siteUrl: SITE_URL,
    });

    if (existing.data.sitemap) {
      console.log('既存のサイトマップ:');
      existing.data.sitemap.forEach((sm) => {
        console.log(`  - ${sm.path}`);
        console.log(`    最終読み込み: ${sm.lastDownloaded || '未読み込み'}`);
        console.log(`    検出URL: ${sm.contents?.[0]?.submitted || 0}`);
      });
      console.log('');
    }

    // サイトマップを送信
    await webmasters.sitemaps.submit({
      siteUrl: SITE_URL,
      feedpath: SITEMAP_URL,
    });

    console.log('✅ サイトマップ送信完了！');
    console.log('');

    // 送信後の状態を確認
    console.log('🔍 送信後の状態を確認中...');
    const updated = await webmasters.sitemaps.get({
      siteUrl: SITE_URL,
      feedpath: SITEMAP_URL,
    });

    if (updated.data) {
      console.log('サイトマップ情報:');
      console.log(`  パス: ${updated.data.path}`);
      console.log(`  タイプ: ${updated.data.type || '不明'}`);
      console.log(`  最終送信: ${updated.data.lastSubmitted || '今'}`);
      console.log(`  最終読み込み: ${updated.data.lastDownloaded || '処理待ち'}`);
      if (updated.data.contents && updated.data.contents.length > 0) {
        console.log(`  検出URL: ${updated.data.contents[0].submitted || 0}`);
        console.log(`  インデックス済み: ${updated.data.contents[0].indexed || 0}`);
      }
    }

    console.log('');
    console.log('📋 次のステップ:');
    console.log('1. Google Search Consoleで確認:');
    console.log('   https://search.google.com/search-console?resource_id=sc-domain:awakeinc.co.jp');
    console.log('2. 数時間後にGoogleがサイトマップをクロール');
    console.log('3. URL検査とインデックスリクエスト:');
    console.log('   node scripts/gsc-request-indexing.js');

  } catch (error) {
    console.error('❌ エラー:', error.message);
    if (error.code === 403) {
      console.error('\n権限エラー: Search Consoleでサイトの所有権を確認してください');
    } else if (error.code === 404) {
      console.error('\nサイトが見つかりません: Search Consoleにサイトを追加してください');
    }
    throw error;
  }
}

/**
 * メイン処理
 */
async function main() {
  console.log('🚀 Google Search Console - サイトマップ送信\n');

  try {
    const auth = await authorize();
    await submitSitemap(auth);
    console.log('\n🎉 完了！');
  } catch (error) {
    console.error('\n❌ 失敗:', error.message);
    process.exit(1);
  }
}

// スクリプト実行
if (require.main === module) {
  main();
}

module.exports = { submitSitemap };

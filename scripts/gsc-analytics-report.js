/**
 * Google Search Console アクセス解析レポート
 *
 * 取得データ:
 * - 検索クエリ (どんなキーワードで検索されているか)
 * - クリック数 / 表示回数 / CTR / 平均掲載順位
 * - ページ別パフォーマンス
 * - デバイス別データ (PC/モバイル)
 * - 国別データ
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// 設定
const SITE_URL = 'https://www.awakeinc.co.jp';
const DAYS_AGO = 28; // 過去28日間のデータ
const TOP_QUERIES = 50; // 上位50件のクエリ
const TOP_PAGES = 20; // 上位20ページ

// 日付をYYYY-MM-DD形式にフォーマット
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

// 認証情報の読み込み
async function authorize() {
  const credentialsPath = path.join(__dirname, '..', 'gsc-credentials.json');
  const tokenPath = path.join(__dirname, '..', 'gsc-token.json');

  if (!fs.existsSync(credentialsPath)) {
    throw new Error('gsc-credentials.json が見つかりません');
  }

  if (!fs.existsSync(tokenPath)) {
    throw new Error('gsc-token.json が見つかりません。先に gsc-setup-oauth.js を実行してください');
  }

  const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
  const token = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));

  const { client_id, client_secret, redirect_uris } = credentials.installed || credentials.web;

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  oAuth2Client.setCredentials(token);
  return oAuth2Client;
}

// GSC APIを使ってデータ取得
async function getSearchAnalyticsData(auth, dimension, limit = 10) {
  const webmasters = google.webmasters({ version: 'v3', auth });

  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - DAYS_AGO);

  try {
    const response = await webmasters.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: [dimension],
        rowLimit: limit,
        dataState: 'final'
      }
    });

    return response.data.rows || [];
  } catch (error) {
    console.error(`❌ ${dimension} データ取得エラー:`, error.message);
    return [];
  }
}

// 複数ディメンションのデータ取得
async function getSearchAnalyticsMultiDimension(auth, dimensions, limit = 10) {
  const webmasters = google.webmasters({ version: 'v3', auth });

  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - DAYS_AGO);

  try {
    const response = await webmasters.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: dimensions,
        rowLimit: limit,
        dataState: 'final'
      }
    });

    return response.data.rows || [];
  } catch (error) {
    console.error(`❌ データ取得エラー:`, error.message);
    return [];
  }
}

// サイト全体のサマリー取得
async function getSiteSummary(auth) {
  const webmasters = google.webmasters({ version: 'v3', auth });

  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - DAYS_AGO);

  try {
    const response = await webmasters.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        dimensions: [],
        dataState: 'final'
      }
    });

    return response.data.rows && response.data.rows[0] ? response.data.rows[0] : null;
  } catch (error) {
    console.error('❌ サマリーデータ取得エラー:', error.message);
    return null;
  }
}

// レポート生成
async function generateReport() {
  console.log('🔍 Google Search Console アクセス解析レポート生成中...\n');
  console.log(`📅 期間: 過去${DAYS_AGO}日間\n`);

  try {
    const auth = await authorize();

    // 1. サイト全体のサマリー
    console.log('═══════════════════════════════════════');
    console.log('📊 サイト全体のパフォーマンス');
    console.log('═══════════════════════════════════════\n');

    const summary = await getSiteSummary(auth);
    if (summary) {
      console.log(`合計クリック数:     ${summary.clicks.toLocaleString()} 回`);
      console.log(`合計表示回数:       ${summary.impressions.toLocaleString()} 回`);
      console.log(`平均CTR:            ${(summary.ctr * 100).toFixed(2)}%`);
      console.log(`平均掲載順位:       ${summary.position.toFixed(1)} 位`);
    } else {
      console.log('⚠️  サマリーデータが取得できませんでした');
    }

    // 2. 検索クエリ別
    console.log('\n\n═══════════════════════════════════════');
    console.log('🔑 検索キーワード TOP 30');
    console.log('═══════════════════════════════════════\n');

    const queries = await getSearchAnalyticsData(auth, 'query', 30);
    if (queries.length > 0) {
      console.log('順位 | クリック | 表示 | CTR    | 順位  | キーワード');
      console.log('-----|----------|------|--------|-------|------------------');

      queries.forEach((row, index) => {
        const keyword = row.keys[0];
        const clicks = row.clicks.toString().padStart(8);
        const impressions = row.impressions.toString().padStart(4);
        const ctr = (row.ctr * 100).toFixed(1).padStart(6);
        const position = row.position.toFixed(1).padStart(5);
        console.log(`${(index + 1).toString().padStart(4)} | ${clicks} | ${impressions} | ${ctr}% | ${position} | ${keyword}`);
      });

      // 重要キーワードのハイライト
      console.log('\n📌 注目キーワード:');
      const importantKeywords = queries.filter(row =>
        row.keys[0].includes('ホームページ') ||
        row.keys[0].includes('AI') ||
        row.keys[0].includes('Amazon') ||
        row.keys[0].includes('東大和')
      );

      if (importantKeywords.length > 0) {
        importantKeywords.forEach(row => {
          console.log(`  • ${row.keys[0]}: ${row.clicks}クリック (順位${row.position.toFixed(1)}位)`);
        });
      } else {
        console.log('  ターゲットキーワードでの流入はまだありません');
      }
    } else {
      console.log('⚠️  検索クエリデータがありません（インデックス登録後にデータが表示されます）');
    }

    // 3. ページ別パフォーマンス
    console.log('\n\n═══════════════════════════════════════');
    console.log('📄 ページ別パフォーマンス TOP 15');
    console.log('═══════════════════════════════════════\n');

    const pages = await getSearchAnalyticsData(auth, 'page', 15);
    if (pages.length > 0) {
      console.log('順位 | クリック | 表示 | CTR    | ページ');
      console.log('-----|----------|------|--------|------------------');

      pages.forEach((row, index) => {
        const page = row.keys[0].replace(SITE_URL, '');
        const clicks = row.clicks.toString().padStart(8);
        const impressions = row.impressions.toString().padStart(4);
        const ctr = (row.ctr * 100).toFixed(1).padStart(6);
        console.log(`${(index + 1).toString().padStart(4)} | ${clicks} | ${impressions} | ${ctr}% | ${page || '/'}`);
      });
    } else {
      console.log('⚠️  ページ別データがありません');
    }

    // 4. デバイス別
    console.log('\n\n═══════════════════════════════════════');
    console.log('📱 デバイス別パフォーマンス');
    console.log('═══════════════════════════════════════\n');

    const devices = await getSearchAnalyticsData(auth, 'device', 5);
    if (devices.length > 0) {
      console.log('デバイス  | クリック | 表示   | CTR    | 順位');
      console.log('----------|----------|--------|--------|------');

      const deviceNames = {
        'MOBILE': 'モバイル  ',
        'DESKTOP': 'PC       ',
        'TABLET': 'タブレット'
      };

      devices.forEach(row => {
        const device = deviceNames[row.keys[0]] || row.keys[0].padEnd(10);
        const clicks = row.clicks.toString().padStart(8);
        const impressions = row.impressions.toString().padStart(6);
        const ctr = (row.ctr * 100).toFixed(1).padStart(6);
        const position = row.position.toFixed(1).padStart(4);
        console.log(`${device} | ${clicks} | ${impressions} | ${ctr}% | ${position}`);
      });

      // デバイスシェア計算
      const totalClicks = devices.reduce((sum, row) => sum + row.clicks, 0);
      console.log('\n📊 デバイスシェア (クリック数):');
      devices.forEach(row => {
        const share = (row.clicks / totalClicks * 100).toFixed(1);
        const deviceName = deviceNames[row.keys[0]] || row.keys[0];
        console.log(`  ${deviceName.trim()}: ${share}%`);
      });
    } else {
      console.log('⚠️  デバイス別データがありません');
    }

    // 5. 国別
    console.log('\n\n═══════════════════════════════════════');
    console.log('🌍 国別パフォーマンス');
    console.log('═══════════════════════════════════════\n');

    const countries = await getSearchAnalyticsData(auth, 'country', 10);
    if (countries.length > 0) {
      console.log('国   | クリック | 表示   | CTR    | 順位');
      console.log('-----|----------|--------|--------|------');

      const countryNames = {
        'jpn': '日本',
        'usa': 'アメリカ',
        'chn': '中国',
        'kor': '韓国',
        'twn': '台湾'
      };

      countries.forEach(row => {
        const country = (countryNames[row.keys[0]] || row.keys[0]).padEnd(5);
        const clicks = row.clicks.toString().padStart(8);
        const impressions = row.impressions.toString().padStart(6);
        const ctr = (row.ctr * 100).toFixed(1).padStart(6);
        const position = row.position.toFixed(1).padStart(4);
        console.log(`${country} | ${clicks} | ${impressions} | ${ctr}% | ${position}`);
      });
    } else {
      console.log('⚠️  国別データがありません');
    }

    // 6. 改善提案
    console.log('\n\n═══════════════════════════════════════');
    console.log('💡 改善提案');
    console.log('═══════════════════════════════════════\n');

    if (summary) {
      // CTRが低い場合
      if (summary.ctr < 0.03) {
        console.log('⚠️  CTRが低いです (3%未満)');
        console.log('   → タイトルとメタディスクリプションを見直してください');
        console.log('   → 構造化データ (リッチスニペット) を追加してください\n');
      }

      // 掲載順位が低い場合
      if (summary.position > 20) {
        console.log('⚠️  平均掲載順位が低いです (20位以下)');
        console.log('   → コンテンツの質と量を改善してください');
        console.log('   → 内部リンクを最適化してください');
        console.log('   → ページ速度を改善してください\n');
      }

      // クリック数が少ない場合
      if (summary.clicks < 10) {
        console.log('⚠️  クリック数が少ないです (1日1回未満)');
        console.log('   → Google広告の出稿を検討してください');
        console.log('   → SNSでの告知を強化してください');
        console.log('   → ブログ記事を定期的に投稿してください\n');
      }

      // 良好な場合
      if (summary.ctr >= 0.03 && summary.position <= 10) {
        console.log('✅ 良好なパフォーマンスです！');
        console.log('   → このまま定期的なコンテンツ更新を続けてください');
        console.log('   → 新しいキーワードでのコンテンツ作成も検討してください\n');
      }
    }

    console.log('\n✅ レポート生成完了\n');
    console.log('📌 次のアクション:');
    console.log('  1. 上位のキーワードに対応したコンテンツを強化');
    console.log('  2. CTRが低いページのタイトル/ディスクリプション改善');
    console.log('  3. 掲載順位が低いページのコンテンツ品質向上');
    console.log('  4. 定期的にこのレポートを確認 (週1回推奨)\n');

  } catch (error) {
    console.error('❌ エラー:', error.message);
    console.error(error.stack);
  }
}

// 実行
generateReport();

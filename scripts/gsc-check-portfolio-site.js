/**
 * Google Search Console API - ポートフォリオサイト確認
 * portfolio.awakeinc.co.jp がGSCに登録されているか確認
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const TOKEN_PATH = path.join(__dirname, '..', 'gsc-token.json');
const CREDENTIALS_PATH = path.join(__dirname, '..', 'gsc-credentials.json');

async function checkPortfolioSite() {
  console.log('🔍 Google Search Console - ポートフォリオサイト確認\n');

  try {
    // 認証情報読み込み
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));

    const oauth2Client = new google.auth.OAuth2(
      credentials.installed.client_id,
      credentials.installed.client_secret,
      credentials.installed.redirect_uris[0]
    );

    oauth2Client.setCredentials(token);

    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: oauth2Client
    });

    console.log('📋 登録済みサイト一覧:\n');

    // サイト一覧取得
    const sites = await searchconsole.sites.list();

    if (!sites.data.siteEntry || sites.data.siteEntry.length === 0) {
      console.log('⚠️  登録されているサイトが見つかりません\n');
      return;
    }

    let portfolioFound = false;

    sites.data.siteEntry.forEach((site, index) => {
      const url = site.siteUrl;
      const isPortfolio = url.includes('portfolio.awakeinc.co.jp');
      const icon = isPortfolio ? '🎯' : '📌';

      console.log(`${icon} ${index + 1}. ${url}`);

      if (isPortfolio) {
        portfolioFound = true;
        console.log(`   権限レベル: ${site.permissionLevel}`);
      }
    });

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    if (portfolioFound) {
      console.log('✅ portfolio.awakeinc.co.jp はGoogle Search Consoleに登録済みです\n');
      console.log('📋 次のステップ:\n');
      console.log('1. サイトマップを提出');
      console.log('2. 主要ページのインデックス登録をリクエスト');
      console.log('3. パフォーマンスをモニタリング\n');
    } else {
      console.log('❌ portfolio.awakeinc.co.jp はGoogle Search Consoleに未登録です\n');
      console.log('📋 対応方法:\n');
      console.log('1. Google Search Consoleにログイン');
      console.log('   https://search.google.com/search-console\n');
      console.log('2. 「プロパティを追加」をクリック');
      console.log('3. URLプレフィックスで「https://portfolio.awakeinc.co.jp」を入力');
      console.log('4. 所有権確認（DNSレコード追加 または HTMLファイルアップロード）\n');
    }

  } catch (error) {
    console.error('❌ エラー:', error.message);
    if (error.response) {
      console.error('詳細:', error.response.data);
    }
  }
}

checkPortfolioSite();

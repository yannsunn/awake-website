/**
 * Google Search Console API - OAuth認証セットアップ
 *
 * このスクリプトは一度だけ実行して、OAuth認証を設定します。
 *
 * 事前準備:
 * 1. Google Cloud Console (https://console.cloud.google.com/) にアクセス
 * 2. プロジェクトを作成または選択
 * 3. Search Console API を有効化
 * 4. OAuth 2.0 認証情報を作成（デスクトップアプリケーション）
 * 5. credentials.json をダウンロードしてこのプロジェクトルートに配置
 */

const fs = require('fs').promises;
const path = require('path');
const { google } = require('googleapis');
const readline = require('readline');

// OAuth設定
const SCOPES = ['https://www.googleapis.com/auth/webmasters'];
const TOKEN_PATH = path.join(__dirname, '..', 'gsc-token.json');
const CREDENTIALS_PATH = path.join(__dirname, '..', 'gsc-credentials.json');

/**
 * ユーザー入力を取得
 */
function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

/**
 * OAuth認証を実行
 */
async function authorize() {
  try {
    // credentials.jsonを読み込み
    const credentials = JSON.parse(
      await fs.readFile(CREDENTIALS_PATH, 'utf8')
    );

    const { client_secret, client_id, redirect_uris } =
      credentials.installed || credentials.web;

    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );

    // 既存のトークンがあるか確認
    try {
      const token = JSON.parse(await fs.readFile(TOKEN_PATH, 'utf8'));
      oAuth2Client.setCredentials(token);
      console.log('✅ 既存の認証トークンを使用します');
      return oAuth2Client;
    } catch (err) {
      // トークンがない場合は新規作成
      return await getNewToken(oAuth2Client);
    }
  } catch (error) {
    console.error('❌ エラー:', error.message);
    if (error.code === 'ENOENT') {
      console.error('\n📋 事前準備が必要です:');
      console.error('1. Google Cloud Console でプロジェクト作成');
      console.error('2. Search Console API を有効化');
      console.error('3. OAuth 2.0 認証情報を作成');
      console.error('4. gsc-credentials.json をプロジェクトルートに配置');
      console.error('\n詳細: https://developers.google.com/webmaster-tools/v1/how-tos/authorizing');
    }
    throw error;
  }
}

/**
 * 新しいOAuthトークンを取得
 */
async function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('\n🔐 以下のURLをブラウザで開いて認証してください:');
  console.log('\n' + authUrl + '\n');

  const code = await getUserInput('認証コードを入力してください: ');

  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);

  // トークンを保存
  await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens, null, 2));
  console.log('✅ 認証トークンを保存しました:', TOKEN_PATH);

  return oAuth2Client;
}

/**
 * セットアップを実行
 */
async function setup() {
  console.log('🚀 Google Search Console API - OAuth認証セットアップ\n');

  try {
    const auth = await authorize();

    // Search Console APIをテスト
    const webmasters = google.webmasters({ version: 'v3', auth });
    const res = await webmasters.sites.list({});

    console.log('\n✅ 認証成功！アクセス可能なサイト:');
    if (res.data.siteEntry && res.data.siteEntry.length > 0) {
      res.data.siteEntry.forEach((site) => {
        console.log(`  - ${site.siteUrl} (${site.permissionLevel})`);
      });
    } else {
      console.log('  サイトが見つかりません。Search Consoleでサイトを追加してください。');
    }

    console.log('\n🎉 セットアップ完了！');
    console.log('次のコマンドでサイトマップを送信できます:');
    console.log('  node scripts/gsc-submit-sitemap.js');
    console.log('\nURL検査とインデックスリクエスト:');
    console.log('  node scripts/gsc-request-indexing.js');

  } catch (error) {
    console.error('\n❌ セットアップ失敗:', error.message);
    process.exit(1);
  }
}

// スクリプト実行
if (require.main === module) {
  setup();
}

module.exports = { authorize };

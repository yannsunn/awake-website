/**
 * Google Search Console トークン更新スクリプト
 * 有効期限切れのトークンを自動更新します
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const SCOPES = [
  'https://www.googleapis.com/auth/webmasters.readonly',
  'https://www.googleapis.com/auth/webmasters'
];

const CREDENTIALS_PATH = path.join(__dirname, '..', 'gsc-credentials.json');
const TOKEN_PATH = path.join(__dirname, '..', 'gsc-token.json');

async function refreshToken() {
  console.log('🔄 Google Search Console トークン更新中...\n');

  // 既存の認証情報を読み込み
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error('❌ gsc-credentials.json が見つかりません');
    return;
  }

  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  const { client_id, client_secret, redirect_uris } = credentials.installed || credentials.web;

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // 既存のトークンがあれば読み込み
  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
    oAuth2Client.setCredentials(token);

    console.log('🔍 既存トークンの有効期限:');
    console.log(`   ${new Date(token.expiry_date).toLocaleString('ja-JP')}\n`);

    // トークン更新を試みる
    try {
      console.log('⏳ トークン更新中...');
      const newToken = await oAuth2Client.refreshAccessToken();

      // 新しいトークンを保存
      fs.writeFileSync(TOKEN_PATH, JSON.stringify(newToken.credentials, null, 2));

      console.log('✅ トークン更新成功！');
      console.log(`   新しい有効期限: ${new Date(newToken.credentials.expiry_date).toLocaleString('ja-JP')}\n`);
      return;
    } catch (error) {
      console.error('⚠️  トークン更新失敗:', error.message);
      console.log('💡 新しい認証が必要です。再認証を開始します...\n');
    }
  }

  // 新規認証フロー
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent' // 毎回refresh_tokenを取得
  });

  console.log('🔐 以下のURLをブラウザで開いて認証してください:');
  console.log(`\n${authUrl}\n`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('認証コードを入力してください: ', async (code) => {
    rl.close();

    try {
      const { tokens } = await oAuth2Client.getToken(code);
      oAuth2Client.setCredentials(tokens);

      // トークンを保存
      fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));

      console.log('\n✅ 認証成功！トークンを保存しました');
      console.log(`   有効期限: ${new Date(tokens.expiry_date).toLocaleString('ja-JP')}\n`);
      console.log('💡 次回から自動更新されます');
    } catch (error) {
      console.error('❌ 認証エラー:', error.message);
    }
  });
}

refreshToken();

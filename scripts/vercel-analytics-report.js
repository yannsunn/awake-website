/**
 * Vercel Analytics データ取得スクリプト
 *
 * Vercel Web Analytics と Speed Insights のデータを取得します
 *
 * セットアップ:
 * 1. Vercel ダッシュボードで Analytics を有効化
 * 2. プロジェクト設定 → Settings → Tokens でアクセストークンを作成
 * 3. 環境変数 VERCEL_TOKEN を設定
 */

const https = require('https');

// 環境変数または直接設定
const VERCEL_TOKEN = process.env.VERCEL_TOKEN || '';
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID || 'awake-website';
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID || '';

if (!VERCEL_TOKEN) {
  console.log('⚠️  Vercel Analytics API へのアクセスには認証が必要です\n');
  console.log('📝 セットアップ手順:');
  console.log('  1. https://vercel.com/dashboard にアクセス');
  console.log('  2. Settings → Tokens でアクセストークンを作成');
  console.log('  3. 環境変数を設定:');
  console.log('     set VERCEL_TOKEN=your_token_here\n');
  console.log('💡 または、Vercel ダッシュボードで直接確認できます:');
  console.log('   https://vercel.com/awake-website/analytics\n');
  process.exit(0);
}

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.vercel.com',
      path: path,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${VERCEL_TOKEN}`,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`API Error: ${res.statusCode} - ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function getAnalytics() {
  console.log('📊 Vercel Analytics データ取得中...\n');

  try {
    // プロジェクト情報取得
    const teamParam = VERCEL_TEAM_ID ? `?teamId=${VERCEL_TEAM_ID}` : '';
    const project = await makeRequest(`/v9/projects/${VERCEL_PROJECT_ID}${teamParam}`);

    console.log('プロジェクト:', project.name);
    console.log('URL:', `https://${project.alias[0] || project.name + '.vercel.app'}\n`);

    // デプロイメント統計
    const deployments = await makeRequest(`/v6/deployments${teamParam}&projectId=${project.id}&limit=10`);

    console.log('═══════════════════════════════════════');
    console.log('🚀 最近のデプロイメント');
    console.log('═══════════════════════════════════════\n');

    deployments.deployments.slice(0, 5).forEach((deployment, i) => {
      const date = new Date(deployment.createdAt).toLocaleString('ja-JP');
      const status = deployment.state === 'READY' ? '✅' : deployment.state === 'ERROR' ? '❌' : '⏳';
      console.log(`${status} ${date}`);
      console.log(`   URL: ${deployment.url}`);
      console.log(`   状態: ${deployment.state}\n`);
    });

    console.log('💡 詳細な Analytics データは Vercel ダッシュボードで確認できます:');
    console.log(`   https://vercel.com/${VERCEL_TEAM_ID || 'your-team'}/${project.name}/analytics\n`);

  } catch (error) {
    console.error('❌ エラー:', error.message);

    if (error.message.includes('401') || error.message.includes('403')) {
      console.log('\n💡 認証エラー: トークンが無効または権限がありません');
      console.log('   1. 新しいトークンを作成してください');
      console.log('   2. トークンに適切な権限があることを確認してください\n');
    }
  }
}

getAnalytics();

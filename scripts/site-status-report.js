/**
 * サイトステータス簡易レポート
 *
 * 認証不要で確認できる情報:
 * - サイトの応答速度
 * - ページのステータス
 * - SEOメタタグ確認
 * - 構造化データ検証
 */

const https = require('https');
const http = require('http');

const SITE_URL = 'https://www.awakeinc.co.jp';

const PAGES_TO_CHECK = [
  { path: '/', name: 'トップページ' },
  { path: '/about', name: '会社概要' },
  { path: '/services/web', name: 'Web制作サービス' },
  { path: '/services/ai', name: 'AIサービス' },
  { path: '/services/ec', name: 'EC代行サービス' },
  { path: '/faq', name: 'よくある質問' },
  { path: '/partners', name: 'パートナー企業' },
  { path: '/sitemap.xml', name: 'サイトマップ' },
  { path: '/robots.txt', name: 'robots.txt' }
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const startTime = Date.now();

    const req = protocol.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const responseTime = Date.now() - startTime;
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data,
          responseTime: responseTime
        });
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

function extractMetaTags(html) {
  const meta = {};

  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) meta.title = titleMatch[1].substring(0, 100);

  // Description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  if (descMatch) meta.description = descMatch[1].substring(0, 200);

  // OG Tags
  const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i);
  if (ogTitleMatch) meta.ogTitle = ogTitleMatch[1].substring(0, 100);

  // Canonical
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  if (canonicalMatch) meta.canonical = canonicalMatch[1];

  // Structured Data (JSON-LD)
  const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([^<]+)<\/script>/gi);
  if (jsonLdMatches) {
    meta.structuredData = jsonLdMatches.length;
  }

  return meta;
}

async function generateReport() {
  console.log('═══════════════════════════════════════');
  console.log('🔍 サイトステータスレポート');
  console.log('═══════════════════════════════════════\n');
  console.log(`サイト: ${SITE_URL}`);
  console.log(`確認日時: ${new Date().toLocaleString('ja-JP')}\n`);

  const results = [];
  let totalResponseTime = 0;
  let successCount = 0;

  for (const page of PAGES_TO_CHECK) {
    const url = `${SITE_URL}${page.path}`;
    console.log(`⏳ チェック中: ${page.name} (${page.path})`);

    try {
      const response = await fetchPage(url);
      const meta = page.path.endsWith('.xml') || page.path.endsWith('.txt')
        ? {}
        : extractMetaTags(response.data);

      const status = response.statusCode === 200 ? '✅' :
                     response.statusCode === 301 || response.statusCode === 302 ? '↗️' : '❌';

      results.push({
        page: page,
        status: status,
        statusCode: response.statusCode,
        responseTime: response.responseTime,
        meta: meta
      });

      if (response.statusCode === 200) {
        successCount++;
        totalResponseTime += response.responseTime;
      }

      console.log(`   ${status} ${response.statusCode} - ${response.responseTime}ms\n`);

    } catch (error) {
      console.log(`   ❌ エラー: ${error.message}\n`);
      results.push({
        page: page,
        status: '❌',
        error: error.message
      });
    }
  }

  // サマリー
  console.log('\n═══════════════════════════════════════');
  console.log('📊 サマリー');
  console.log('═══════════════════════════════════════\n');

  console.log(`総ページ数:         ${PAGES_TO_CHECK.length}`);
  console.log(`正常なページ:       ${successCount} / ${PAGES_TO_CHECK.length}`);
  console.log(`成功率:             ${(successCount / PAGES_TO_CHECK.length * 100).toFixed(1)}%`);
  console.log(`平均応答時間:       ${(totalResponseTime / successCount).toFixed(0)}ms\n`);

  // レスポンス速度評価
  const avgResponseTime = totalResponseTime / successCount;
  if (avgResponseTime < 500) {
    console.log('⚡ 応答速度: 優秀 (500ms未満)');
  } else if (avgResponseTime < 1000) {
    console.log('✅ 応答速度: 良好 (1秒未満)');
  } else if (avgResponseTime < 2000) {
    console.log('⚠️  応答速度: 改善推奨 (2秒未満)');
  } else {
    console.log('❌ 応答速度: 要改善 (2秒以上)');
  }

  // 詳細結果
  console.log('\n\n═══════════════════════════════════════');
  console.log('📄 ページ詳細');
  console.log('═══════════════════════════════════════\n');

  results.forEach((result) => {
    if (result.statusCode === 200 && result.meta.title) {
      console.log(`${result.status} ${result.page.name} (${result.responseTime}ms)`);
      console.log(`   URL: ${SITE_URL}${result.page.path}`);
      console.log(`   タイトル: ${result.meta.title || 'なし'}`);

      if (result.meta.description) {
        console.log(`   説明: ${result.meta.description.substring(0, 80)}...`);
      }

      if (result.meta.structuredData) {
        console.log(`   構造化データ: ${result.meta.structuredData}個`);
      }

      // SEOチェック
      const seoIssues = [];
      if (!result.meta.title) seoIssues.push('タイトルなし');
      if (!result.meta.description) seoIssues.push('説明なし');
      if (!result.meta.canonical) seoIssues.push('canonical なし');
      if (!result.meta.structuredData) seoIssues.push('構造化データなし');

      if (seoIssues.length > 0) {
        console.log(`   ⚠️  SEO要改善: ${seoIssues.join(', ')}`);
      } else {
        console.log(`   ✅ SEO: 良好`);
      }

      console.log();
    }
  });

  // アクセス解析の案内
  console.log('\n═══════════════════════════════════════');
  console.log('📈 アクセス解析データを確認するには');
  console.log('═══════════════════════════════════════\n');

  console.log('1️⃣  Google Search Console (検索パフォーマンス)');
  console.log('   URL: https://search.google.com/search-console');
  console.log('   内容: 検索キーワード、クリック数、表示回数、CTR、掲載順位');
  console.log('   認証: node scripts/gsc-refresh-token.js を実行\n');

  console.log('2️⃣  Vercel Analytics (リアルタイムアクセス)');
  console.log('   URL: https://vercel.com/awake-website/analytics');
  console.log('   内容: ページビュー、ユニークビジター、地域別アクセス');
  console.log('   認証: Vercel ダッシュボードにログイン\n');

  console.log('3️⃣  Google Analytics 4 (詳細分析)');
  console.log('   URL: https://analytics.google.com/');
  console.log('   内容: ユーザー行動、コンバージョン、リアルタイム');
  console.log('   設定: GA4トラッキングコードをサイトに追加する必要あり\n');

  console.log('💡 推奨アクション:');
  console.log('   1. GSC認証を更新: node scripts/gsc-refresh-token.js');
  console.log('   2. Vercelダッシュボードで直近のアクセス確認');
  console.log('   3. 週1回このレポートを実行してサイト健全性を確認\n');
}

generateReport();

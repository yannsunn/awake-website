/**
 * SEO診断スクリプト
 * 検索順位低下の原因を特定します
 */

const https = require('https');
const http = require('http');

const SITE_URL = 'https://www.awakeinc.co.jp';

// 検索順位低下の主な原因チェック項目
const CHECKS = {
  // 1. ページが正しくインデックスされているか
  indexing: [
    'サイトマップの存在確認',
    'robots.txtの設定確認',
    'noindexタグの有無確認',
    'canonicalタグの確認'
  ],

  // 2. ペナルティの可能性
  penalties: [
    '重複コンテンツ',
    'スパム的な外部リンク',
    'モバイルフレンドリー問題',
    'ページ速度問題'
  ],

  // 3. 技術的な問題
  technical: [
    'HTTPSの設定',
    'リダイレクト設定',
    'メタタグの設定',
    '構造化データの設定'
  ],

  // 4. コンテンツの問題
  content: [
    'タイトルタグの長さ',
    'メタディスクリプションの長さ',
    'H1タグの設定',
    'コンテンツの質と量'
  ]
};

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const req = protocol.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data
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

function checkMetaTags(html) {
  const issues = [];
  const warnings = [];

  // Title チェック
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!titleMatch) {
    issues.push('❌ タイトルタグが見つかりません');
  } else {
    const title = titleMatch[1];
    if (title.length < 30) {
      warnings.push(`⚠️  タイトルが短すぎます (${title.length}文字) - 推奨: 30-60文字`);
    } else if (title.length > 60) {
      warnings.push(`⚠️  タイトルが長すぎます (${title.length}文字) - 推奨: 30-60文字`);
    }
  }

  // Description チェック
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  if (!descMatch) {
    issues.push('❌ メタディスクリプションが見つかりません');
  } else {
    const desc = descMatch[1];
    if (desc.length < 70) {
      warnings.push(`⚠️  ディスクリプションが短すぎます (${desc.length}文字) - 推奨: 70-160文字`);
    } else if (desc.length > 160) {
      warnings.push(`⚠️  ディスクリプションが長すぎます (${desc.length}文字) - 推奨: 70-160文字`);
    }
  }

  // noindex チェック (重要!)
  const noindexMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*noindex[^"']*)["']/i);
  if (noindexMatch) {
    issues.push(`🚨 CRITICAL: noindex設定が検出されました: ${noindexMatch[1]}`);
  }

  // Canonical チェック
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    warnings.push('⚠️  canonicalタグが設定されていません');
  }

  // H1 チェック
  const h1Matches = html.match(/<h1[^>]*>([^<]+)<\/h1>/gi);
  if (!h1Matches || h1Matches.length === 0) {
    issues.push('❌ H1タグが見つかりません');
  } else if (h1Matches.length > 1) {
    warnings.push(`⚠️  H1タグが複数あります (${h1Matches.length}個) - 推奨: 1個`);
  }

  // 構造化データ チェック
  const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([^<]+)<\/script>/gi);
  if (!jsonLdMatches || jsonLdMatches.length === 0) {
    warnings.push('⚠️  構造化データ (JSON-LD) が見つかりません');
  }

  // OG Tags チェック
  const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i);
  if (!ogTitleMatch) {
    warnings.push('⚠️  OGタイトルが設定されていません');
  }

  return { issues, warnings };
}

async function diagnose() {
  console.log('═══════════════════════════════════════');
  console.log('🔍 SEO診断レポート - 検索順位低下の原因調査');
  console.log('═══════════════════════════════════════\n');
  console.log(`サイト: ${SITE_URL}`);
  console.log(`診断日時: ${new Date().toLocaleString('ja-JP')}\n`);

  const allIssues = [];
  const allWarnings = [];

  // 1. robots.txt チェック
  console.log('1️⃣  robots.txt チェック');
  console.log('─────────────────────────────────────\n');

  try {
    const robotsResponse = await fetchPage(`${SITE_URL}/robots.txt`);
    console.log('✅ robots.txt が存在します\n');
    console.log('内容:');
    console.log(robotsResponse.data);
    console.log();

    // Disallow チェック
    if (robotsResponse.data.includes('Disallow: /')) {
      allIssues.push('🚨 CRITICAL: robots.txt で全ページがブロックされています！');
    }
  } catch (error) {
    allWarnings.push('⚠️  robots.txt が見つかりません');
  }

  // 2. サイトマップ チェック
  console.log('\n2️⃣  サイトマップ チェック');
  console.log('─────────────────────────────────────\n');

  try {
    const sitemapResponse = await fetchPage(`${SITE_URL}/sitemap.xml`);
    console.log('✅ sitemap.xml が存在します');

    // URLの数を数える
    const urlMatches = sitemapResponse.data.match(/<loc>/g);
    const urlCount = urlMatches ? urlMatches.length : 0;
    console.log(`   登録URL数: ${urlCount}件\n`);

    if (urlCount === 0) {
      allIssues.push('❌ サイトマップにURLが登録されていません');
    }
  } catch (error) {
    allIssues.push('❌ sitemap.xml が見つかりません');
  }

  // 3. トップページの詳細診断
  console.log('\n3️⃣  トップページ詳細診断');
  console.log('─────────────────────────────────────\n');

  try {
    const homeResponse = await fetchPage(SITE_URL);

    console.log(`HTTPステータス: ${homeResponse.statusCode}`);
    console.log(`HTTPS: ${SITE_URL.startsWith('https') ? '✅' : '❌'}`);
    console.log();

    const { issues, warnings } = checkMetaTags(homeResponse.data);

    if (issues.length > 0) {
      console.log('🚨 重大な問題:');
      issues.forEach(issue => {
        console.log(`   ${issue}`);
        allIssues.push(issue);
      });
      console.log();
    }

    if (warnings.length > 0) {
      console.log('⚠️  改善推奨事項:');
      warnings.forEach(warning => {
        console.log(`   ${warning}`);
        allWarnings.push(warning);
      });
      console.log();
    }

    if (issues.length === 0 && warnings.length === 0) {
      console.log('✅ メタタグ: 問題なし\n');
    }
  } catch (error) {
    allIssues.push(`❌ トップページアクセスエラー: ${error.message}`);
  }

  // 4. 主要ページチェック
  console.log('\n4️⃣  主要ページのnoindexチェック');
  console.log('─────────────────────────────────────\n');

  const pagesToCheck = [
    { path: '/about', name: '会社概要' },
    { path: '/services/web', name: 'Web制作' },
    { path: '/services/ai', name: 'AIサービス' },
    { path: '/services/ec', name: 'EC代行' }
  ];

  for (const page of pagesToCheck) {
    try {
      const response = await fetchPage(`${SITE_URL}${page.path}`);
      const noindexMatch = response.data.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*noindex[^"']*)["']/i);

      if (noindexMatch) {
        console.log(`❌ ${page.name}: noindex設定あり (${noindexMatch[1]})`);
        allIssues.push(`${page.name}ページでnoindexが設定されています`);
      } else {
        console.log(`✅ ${page.name}: インデックス可能`);
      }
    } catch (error) {
      console.log(`⚠️  ${page.name}: チェックエラー`);
    }
  }

  // 5. Google Search Console 確認の推奨
  console.log('\n\n5️⃣  Google Search Console データ確認');
  console.log('─────────────────────────────────────\n');

  console.log('以下のコマンドでGSCデータを確認してください:');
  console.log('  npm run analytics:auth  # 認証');
  console.log('  npm run analytics       # データ取得\n');

  console.log('GSC Web UIでも確認してください:');
  console.log('  https://search.google.com/search-console\n');

  console.log('確認項目:');
  console.log('  • インデックス登録状況 (カバレッジレポート)');
  console.log('  • 手動ペナルティの有無 (セキュリティと手動による対策)');
  console.log('  • モバイルユーザビリティ問題');
  console.log('  • Core Web Vitals のスコア\n');

  // 6. サマリー
  console.log('\n═══════════════════════════════════════');
  console.log('📊 診断結果サマリー');
  console.log('═══════════════════════════════════════\n');

  if (allIssues.length > 0) {
    console.log('🚨 発見された重大な問題:\n');
    allIssues.forEach((issue, i) => {
      console.log(`${i + 1}. ${issue}`);
    });
    console.log();
  } else {
    console.log('✅ 重大な問題は検出されませんでした\n');
  }

  if (allWarnings.length > 0) {
    console.log('⚠️  改善推奨事項:\n');
    allWarnings.forEach((warning, i) => {
      console.log(`${i + 1}. ${warning}`);
    });
    console.log();
  }

  // 7. 検索順位低下の一般的な原因
  console.log('\n═══════════════════════════════════════');
  console.log('🔍 検索順位低下の一般的な原因');
  console.log('═══════════════════════════════════════\n');

  console.log('A. Googleアルゴリズムアップデート (2024-2025)');
  console.log('   • Helpful Content Update: 低品質コンテンツの評価低下');
  console.log('   • Core Update: 全体的なランキング見直し');
  console.log('   → 最近のGoogleアップデート情報を確認してください\n');

  console.log('B. 競合サイトの台頭');
  console.log('   • 同じキーワードで新しいサイトが上位表示');
  console.log('   • 既存サイトがコンテンツを強化');
  console.log('   → 競合分析が必要です\n');

  console.log('C. 技術的な問題');
  console.log('   • サイト速度の低下');
  console.log('   • モバイル対応の問題');
  console.log('   • HTTPS/セキュリティ問題');
  console.log('   → PageSpeed Insights で確認してください\n');

  console.log('D. コンテンツの問題');
  console.log('   • コンテンツ量が少ない (薄いコンテンツ)');
  console.log('   • 更新頻度が低い (古いコンテンツ)');
  console.log('   • E-A-T (専門性・権威性・信頼性) の欠如');
  console.log('   → ブログ記事の追加、コンテンツ強化が必要\n');

  // 8. 推奨アクション
  console.log('\n═══════════════════════════════════════');
  console.log('💡 推奨アクション (優先度順)');
  console.log('═══════════════════════════════════════\n');

  if (allIssues.length > 0) {
    console.log('🔴 緊急 (今すぐ実行):');
    console.log('   1. 上記の重大な問題をすべて修正');
    console.log('   2. GSCでインデックス状況を確認');
    console.log('   3. 必要に応じてインデックス再申請\n');
  }

  console.log('🟡 高優先度 (今週中):');
  console.log('   1. Google Search Console で詳細確認');
  console.log('      npm run analytics:auth && npm run analytics');
  console.log('   2. PageSpeed Insights でスコア確認');
  console.log('      https://pagespeed.web.dev/');
  console.log('   3. 競合サイト分析 (どのサイトが上位か?)');
  console.log('   4. コンテンツ追加計画 (ブログ記事など)\n');

  console.log('🟢 中優先度 (今月中):');
  console.log('   1. 既存ページのコンテンツ強化');
  console.log('   2. 内部リンク構造の最適化');
  console.log('   3. 外部リンク (被リンク) の獲得');
  console.log('   4. SNSでの情報発信強化\n');

  console.log('─────────────────────────────────────');
  console.log('次のコマンド: npm run analytics:auth');
  console.log('─────────────────────────────────────\n');
}

diagnose();

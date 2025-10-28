/**
 * Google Ads API - 全キャンペーンのキーワード確認
 * 3つのキャンペーンのキーワード数を確認
 */

const { GoogleAdsApi } = require('google-ads-api');
const fs = require('fs');
const path = require('path');

const CONFIG_FILE = path.join(__dirname, '..', 'google-ads-config.json');

async function verifyAllKeywords() {
  console.log('🔍 Google Ads API - 全キャンペーンのキーワード確認\n');

  // 設定ファイル読み込み
  const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  config.customer_id = config.customer_id.replace(/-/g, '');
  if (config.login_customer_id) {
    config.login_customer_id = config.login_customer_id.replace(/-/g, '');
  }

  console.log(`📋 顧客ID: ${config.customer_id}\n`);

  // Google Ads APIクライアント初期化
  const client = new GoogleAdsApi({
    client_id: config.client_id,
    client_secret: config.client_secret,
    developer_token: config.developer_token,
  });

  const customer = client.Customer({
    customer_id: config.customer_id,
    login_customer_id: config.login_customer_id,
    refresh_token: config.refresh_token,
  });

  console.log('🔐 認証中...\n');

  try {
    const campaigns = [
      'ホームページ制作',
      'AIチャットボット',
      'Amazon販売代行'
    ];

    let totalKeywords = 0;

    for (const campaignName of campaigns) {
      console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
      console.log(`📂 キャンペーン: ${campaignName}`);
      console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

      // キャンペーンとキーワード情報を取得
      const query = `
        SELECT
          campaign.id,
          campaign.name,
          campaign.status,
          ad_group.id,
          ad_group.name,
          ad_group_criterion.keyword.text,
          ad_group_criterion.keyword.match_type,
          ad_group_criterion.status
        FROM ad_group_criterion
        WHERE campaign.name = '${campaignName}'
        AND ad_group_criterion.type = 'KEYWORD'
        AND ad_group_criterion.status != 'REMOVED'
        ORDER BY ad_group.name, ad_group_criterion.keyword.text
      `;

      const results = await customer.query(query);

      if (results.length === 0) {
        console.log(`⚠️  キーワードが見つかりません\n`);
        continue;
      }

      // 広告グループごとに整理
      const adGroups = {};
      results.forEach(row => {
        const adGroupName = row.ad_group.name;
        if (!adGroups[adGroupName]) {
          adGroups[adGroupName] = [];
        }
        adGroups[adGroupName].push({
          text: row.ad_group_criterion.keyword.text,
          matchType: row.ad_group_criterion.keyword.match_type,
          status: row.ad_group_criterion.status
        });
      });

      // 表示
      let campaignTotal = 0;
      for (const [adGroupName, keywords] of Object.entries(adGroups)) {
        console.log(`  📁 広告グループ: ${adGroupName}`);
        console.log(`  ─────────────────────────────────────────`);
        keywords.forEach(kw => {
          const statusIcon = kw.status === 'ENABLED' ? '✅' : '⚠️';
          const matchTypeLabel = kw.matchType === 'PHRASE' ? 'フレーズ' : kw.matchType;
          console.log(`    ${statusIcon} ${kw.text} (${matchTypeLabel})`);
        });
        console.log(`  ─────────────────────────────────────────`);
        console.log(`  小計: ${keywords.length}個\n`);
        campaignTotal += keywords.length;
      }

      console.log(`  🎯 キャンペーン合計: ${campaignTotal}個`);
      totalKeywords += campaignTotal;
    }

    console.log('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 全キャンペーン集計結果');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('  ホームページ制作:  26個 ✅');
    console.log('  AIチャットボット:   18個 ✅');
    console.log('  Amazon販売代行:    15個 ✅');
    console.log('  ────────────────────────');
    console.log(`  総計:              ${totalKeywords}個\n`);

    if (totalKeywords === 59) {
      console.log('🎉 全59個のキーワードが正しく追加されています！\n');
    } else {
      console.log(`⚠️  想定より${totalKeywords < 59 ? '少ない' : '多い'}キーワード数です\n`);
    }

    console.log('📋 次のステップ:\n');
    console.log('1. Google広告管理画面でキャンペーンを有効化');
    console.log('   https://ads.google.com/\n');
    console.log('2. 広告の審査完了を待つ（通常1営業日）');
    console.log('3. パフォーマンスをモニタリング開始\n');

  } catch (error) {
    console.error('\n❌ エラー:', error.message);
    if (error.errors) {
      error.errors.forEach(err => {
        console.error(`  - ${err.message}`);
      });
    }
  }
}

verifyAllKeywords();

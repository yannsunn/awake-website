/**
 * Google Ads API - キーワード追加（シンプル版）
 * 「一般キーワード」グループのみに10個のキーワードを追加
 */

const { GoogleAdsApi, enums } = require('google-ads-api');
const fs = require('fs');
const path = require('path');

const CONFIG_FILE = path.join(__dirname, '..', 'google-ads-config.json');

async function addKeywordsSimple() {
  console.log('🚀 Google Ads API - キーワード追加（シンプル版）\n');

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
    // キャンペーンID取得
    console.log('🔍 キャンペーン「ホームページ制作」検索中...');
    const campaignQuery = `
      SELECT campaign.id, campaign.name
      FROM campaign
      WHERE campaign.name = 'ホームページ制作'
      AND campaign.status != 'REMOVED'
    `;
    const campaigns = await customer.query(campaignQuery);

    if (campaigns.length === 0) {
      console.log('❌ キャンペーンが見つかりません');
      return;
    }

    const campaignId = campaigns[0].campaign.id;
    console.log(`✅ キャンペーンID: ${campaignId}\n`);

    // 広告グループID取得
    console.log('🔍 広告グループ「一般キーワード」検索中...');
    const adGroupQuery = `
      SELECT ad_group.id, ad_group.name
      FROM ad_group
      WHERE ad_group.campaign = 'customers/${config.customer_id}/campaigns/${campaignId}'
      AND ad_group.name = '一般キーワード'
      AND ad_group.status != 'REMOVED'
    `;
    const adGroups = await customer.query(adGroupQuery);

    if (adGroups.length === 0) {
      console.log('❌ 広告グループが見つかりません');
      return;
    }

    const adGroupId = adGroups[0].ad_group.id;
    console.log(`✅ 広告グループID: ${adGroupId}\n`);

    // キーワード定義
    const keywords = [
      { text: 'ホームページ制作', matchType: enums.KeywordMatchType.EXACT, maxCpc: 1500000 },
      { text: 'web制作', matchType: enums.KeywordMatchType.EXACT, maxCpc: 1500000 },
      { text: 'ウェブサイト制作', matchType: enums.KeywordMatchType.EXACT, maxCpc: 1500000 },
      { text: 'ホームページ制作 東京', matchType: enums.KeywordMatchType.PHRASE, maxCpc: 1800000 },
      { text: 'ホームページ制作 費用', matchType: enums.KeywordMatchType.PHRASE, maxCpc: 1600000 },
      { text: 'ホームページ制作 安い', matchType: enums.KeywordMatchType.PHRASE, maxCpc: 1700000 },
      { text: 'ホームページ制作 中小企業', matchType: enums.KeywordMatchType.PHRASE, maxCpc: 1800000 },
      { text: 'web制作 料金', matchType: enums.KeywordMatchType.PHRASE, maxCpc: 1600000 },
      { text: 'ホームページ制作 相場', matchType: enums.KeywordMatchType.PHRASE, maxCpc: 1500000 },
      { text: 'ホームページ制作 会社', matchType: enums.KeywordMatchType.PHRASE, maxCpc: 1600000 },
    ];

    console.log(`📤 ${keywords.length}個のキーワードを追加中...\n`);

    // キーワードを1つずつ追加（エラー特定のため）
    let successCount = 0;
    let failCount = 0;

    for (const keyword of keywords) {
      try {
        const adGroupResourceName = `customers/${config.customer_id}/adGroups/${adGroupId}`;

        const operation = {
          ad_group: adGroupResourceName,
          status: enums.AdGroupCriterionStatus.ENABLED,
          keyword: {
            text: keyword.text,
            match_type: keyword.matchType
          },
          // cpc_bid_micros は使わずに、bidding strategy に任せる
          // cpc_bid_micros: keyword.maxCpc
        };

        await customer.adGroupCriteria.create([operation]);
        console.log(`✅ 追加成功: ${keyword.text}`);
        successCount++;

        // API制限を考慮して待機
        await new Promise(resolve => setTimeout(resolve, 500));

      } catch (error) {
        console.log(`❌ 追加失敗: ${keyword.text}`);
        console.log(`   エラー: ${error.message}`);
        if (error.errors && error.errors[0]) {
          console.log(`   詳細: ${error.errors[0].message}`);
        }
        failCount++;
      }
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('📊 実行結果:\n');
    console.log(`  ✅ 追加成功: ${successCount}個`);
    console.log(`  ❌ 追加失敗: ${failCount}個\n`);

    if (successCount > 0) {
      console.log('🎉 キーワード追加完了！\n');
      console.log('📋 次のステップ:\n');
      console.log('1. Google広告管理画面で確認');
      console.log('   https://ads.google.com/\n');
      console.log('2. キャンペーンを有効化してテスト\n');
    }

  } catch (error) {
    console.error('\n❌ エラー:', error.message);
    if (error.errors) {
      error.errors.forEach(err => {
        console.error(`  - ${err.message}`);
      });
    }
  }
}

addKeywordsSimple();

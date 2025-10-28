/**
 * Google Ads API - すべてのキーワード追加
 * ホームページ制作キャンペーンに3つの広告グループを作成し、26個のキーワードを追加
 */

const { GoogleAdsApi, enums } = require('google-ads-api');
const fs = require('fs');
const path = require('path');

const CONFIG_FILE = path.join(__dirname, '..', 'google-ads-config.json');

// キーワードデータ
const KEYWORD_GROUPS = [
  {
    adGroupName: '地域キーワード',
    keywords: [
      { text: '東大和市 ホームページ制作', matchType: enums.KeywordMatchType.PHRASE },
      { text: '東大和 web制作', matchType: enums.KeywordMatchType.PHRASE },
      { text: '多摩地域 ホームページ制作', matchType: enums.KeywordMatchType.PHRASE },
      { text: '東京都 ホームページ制作', matchType: enums.KeywordMatchType.PHRASE },
      { text: '西東京 web制作', matchType: enums.KeywordMatchType.PHRASE },
      { text: '立川 ホームページ制作', matchType: enums.KeywordMatchType.PHRASE },
      { text: '武蔵村山 ホームページ制作', matchType: enums.KeywordMatchType.PHRASE },
      { text: '小平 ホームページ制作', matchType: enums.KeywordMatchType.PHRASE },
    ]
  },
  {
    adGroupName: '価格キーワード',
    keywords: [
      { text: 'ホームページ制作 10万円', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'ホームページ制作 15万円', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'ホームページ制作 安い おすすめ', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'web制作 格安 品質', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'ホームページ制作 適正価格', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'ホームページ 初期費用', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'サイト制作 見積もり', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'ホームページ制作 コスパ', matchType: enums.KeywordMatchType.PHRASE },
    ]
  }
];

async function addAllKeywords() {
  console.log('🚀 Google Ads API - すべてのキーワード追加\n');

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
    const campaignResourceName = `customers/${config.customer_id}/campaigns/${campaignId}`;
    console.log(`✅ キャンペーンID: ${campaignId}\n`);

    let totalSuccess = 0;
    let totalFail = 0;

    // 各広告グループを処理
    for (const group of KEYWORD_GROUPS) {
      console.log(`\n📂 広告グループ: ${group.adGroupName}`);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

      // 広告グループが存在するか確認
      console.log('🔍 広告グループ検索中...');
      const adGroupQuery = `
        SELECT ad_group.id, ad_group.name
        FROM ad_group
        WHERE ad_group.campaign = '${campaignResourceName}'
        AND ad_group.name = '${group.adGroupName}'
        AND ad_group.status != 'REMOVED'
      `;
      let adGroups = await customer.query(adGroupQuery);

      let adGroupId;

      // 広告グループが存在しない場合は作成
      if (adGroups.length === 0) {
        console.log('📝 広告グループを作成中...');

        try {
          const adGroupOperation = {
            campaign: campaignResourceName,
            name: group.adGroupName,
            status: enums.AdGroupStatus.ENABLED,
            type: enums.AdGroupType.SEARCH_STANDARD
          };

          const createResult = await customer.adGroups.create([adGroupOperation]);
          console.log('デバッグ - createResult:', JSON.stringify(createResult, null, 2));

          // レスポンス形式を確認
          if (createResult && createResult.results && createResult.results.length > 0) {
            const resourceName = createResult.results[0].resource_name;
            // resource_name から ID を抽出: "customers/XXX/adGroups/YYY" -> YYY
            adGroupId = resourceName.split('/').pop();
            console.log(`✅ 広告グループ作成完了 ID: ${adGroupId}\n`);
          } else {
            throw new Error('広告グループIDを取得できませんでした');
          }

          // 作成後、少し待機
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (error) {
          console.error('❌ 広告グループ作成エラー:', error.message);
          if (error.errors) {
            error.errors.forEach(err => console.error(`  - ${err.message}`));
          }
          continue; // 次の広告グループに進む
        }
      } else {
        adGroupId = adGroups[0].ad_group.id;
        console.log(`✅ 広告グループ ID: ${adGroupId}\n`);
      }

      // キーワード追加
      console.log(`📤 ${group.keywords.length}個のキーワードを追加中...\n`);

      for (const keyword of group.keywords) {
        try {
          const adGroupResourceName = `customers/${config.customer_id}/adGroups/${adGroupId}`;

          const operation = {
            ad_group: adGroupResourceName,
            status: enums.AdGroupCriterionStatus.ENABLED,
            keyword: {
              text: keyword.text,
              match_type: keyword.matchType
            }
          };

          await customer.adGroupCriteria.create([operation]);
          console.log(`  ✅ ${keyword.text}`);
          totalSuccess++;

          // API制限を考慮して待機
          await new Promise(resolve => setTimeout(resolve, 500));

        } catch (error) {
          console.log(`  ❌ ${keyword.text}`);
          console.log(`     エラー: ${error.message}`);
          totalFail++;
        }
      }
    }

    console.log('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 実行結果:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log(`  ✅ 追加成功: ${totalSuccess}個`);
    console.log(`  ❌ 追加失敗: ${totalFail}個\n`);

    if (totalSuccess > 0) {
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

addAllKeywords();

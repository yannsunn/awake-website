/**
 * Google Ads API - AIチャットボットキャンペーン キーワード追加
 * 3つの広告グループに18個のキーワードを追加
 */

const { GoogleAdsApi, enums } = require('google-ads-api');
const fs = require('fs');
const path = require('path');

const CONFIG_FILE = path.join(__dirname, '..', 'google-ads-config.json');

// キーワードデータ
const KEYWORD_GROUPS = [
  {
    adGroupName: '開発キーワード',
    keywords: [
      { text: 'AIチャットボット 開発', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'チャットボット 制作', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'AI 問い合わせ対応', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'カスタマーサポート AI', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'AIチャット 導入', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'チャットボット 会社', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'AI自動応答 システム', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'ビジネス向け チャットボット', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'AIアシスタント 開発', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'チャットボット API', matchType: enums.KeywordMatchType.PHRASE },
    ]
  },
  {
    adGroupName: '業務効率化キーワード',
    keywords: [
      { text: '顧客対応 自動化', matchType: enums.KeywordMatchType.PHRASE },
      { text: '問い合わせ 効率化', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'カスタマーサポート 自動化', matchType: enums.KeywordMatchType.PHRASE },
      { text: '業務効率化 AI', matchType: enums.KeywordMatchType.PHRASE },
      { text: '24時間対応 チャット', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'FAQ 自動化', matchType: enums.KeywordMatchType.PHRASE },
      { text: '顧客サポート AI', matchType: enums.KeywordMatchType.PHRASE },
      { text: 'ヘルプデスク 自動化', matchType: enums.KeywordMatchType.PHRASE },
    ]
  }
];

async function addAIChatbotKeywords() {
  console.log('🚀 Google Ads API - AIチャットボットキャンペーン キーワード追加\n');

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
    console.log('🔍 キャンペーン「AIチャットボット」検索中...');
    const campaignQuery = `
      SELECT campaign.id, campaign.name
      FROM campaign
      WHERE campaign.name = 'AIチャットボット'
      AND campaign.status != 'REMOVED'
    `;
    const campaigns = await customer.query(campaignQuery);

    if (campaigns.length === 0) {
      console.log('❌ キャンペーンが見つかりません');
      console.log('💡 Google広告管理画面でキャンペーンを作成してください');
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
      console.log('🎉 AIチャットボットキーワード追加完了！\n');
      console.log('📋 次のステップ:\n');
      console.log('1. Google広告管理画面で確認');
      console.log('   https://ads.google.com/\n');
      console.log('2. 次にAmazon販売代行のキーワードを追加\n');
      console.log('   node scripts/google-ads-add-amazon-keywords.js\n');
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

addAIChatbotKeywords();

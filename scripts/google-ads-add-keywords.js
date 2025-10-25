/**
 * Google Ads API - キーワード自動追加
 *
 * このスクリプトは、Google Ads APIを使用してキーワードを自動追加します。
 *
 * 事前準備:
 *   1. google-ads-config.json を作成
 *   2. 開発者トークン、顧客ID、リフレッシュトークンを設定
 *
 * 使用方法:
 *   node scripts/google-ads-add-keywords.js
 */

const { GoogleAdsApi, enums } = require('google-ads-api');
const fs = require('fs');
const path = require('path');

// 設定ファイルのパス
const CONFIG_FILE = path.join(__dirname, '..', 'google-ads-config.json');

// キーワードデータ（generate-google-ads-keywords-csv.jsと同じ）
const KEYWORDS = {
  homepage: {
    campaignName: 'ホームページ制作',
    adGroupName: '一般キーワード',
    keywords: [
      { text: 'ホームページ制作', matchType: 'EXACT', maxCpc: 1500000 }, // 150円 = 1,500,000マイクロ円
      { text: 'web制作', matchType: 'EXACT', maxCpc: 1500000 },
      { text: 'ウェブサイト制作', matchType: 'EXACT', maxCpc: 1500000 },
      { text: 'ホームページ制作 東京', matchType: 'PHRASE', maxCpc: 1800000 },
      { text: 'ホームページ制作 費用', matchType: 'PHRASE', maxCpc: 1600000 },
      { text: 'ホームページ制作 安い', matchType: 'PHRASE', maxCpc: 1700000 },
      { text: 'ホームページ制作 中小企業', matchType: 'PHRASE', maxCpc: 1800000 },
      { text: 'web制作 料金', matchType: 'PHRASE', maxCpc: 1600000 },
      { text: 'ホームページ制作 相場', matchType: 'PHRASE', maxCpc: 1500000 },
      { text: 'ホームページ制作 会社', matchType: 'PHRASE', maxCpc: 1600000 },
    ]
  },
  homepageLocal: {
    campaignName: 'ホームページ制作',
    adGroupName: '地域キーワード',
    keywords: [
      { text: '東大和市 ホームページ制作', matchType: 'PHRASE', maxCpc: 2000000 },
      { text: '東大和 web制作', matchType: 'PHRASE', maxCpc: 2000000 },
      { text: '多摩地域 ホームページ制作', matchType: 'PHRASE', maxCpc: 1800000 },
      { text: '東京都 ホームページ制作', matchType: 'PHRASE', maxCpc: 1700000 },
      { text: '西東京 web制作', matchType: 'PHRASE', maxCpc: 1800000 },
      { text: '立川 ホームページ制作', matchType: 'PHRASE', maxCpc: 1900000 },
      { text: '武蔵村山 ホームページ制作', matchType: 'PHRASE', maxCpc: 2000000 },
      { text: '小平 ホームページ制作', matchType: 'PHRASE', maxCpc: 1900000 },
    ]
  },
};

// 除外キーワード
const NEGATIVE_KEYWORDS = [
  '無料', 'フリー', 'free', 'テンプレート', '自作', '自分で',
  '作り方', '方法', 'やり方', '講座', 'セミナー',
  '求人', '採用', '転職', 'アルバイト', 'バイト', 'パート',
  '副業', '在宅', '内職', 'WordPress 無料', 'Wix', 'Jimdo', 'ペライチ'
];

/**
 * 設定ファイルを読み込み
 */
function loadConfig() {
  if (!fs.existsSync(CONFIG_FILE)) {
    throw new Error(
      `設定ファイルが見つかりません: ${CONFIG_FILE}\n` +
      '\n手順:\n' +
      '1. node scripts/google-ads-get-refresh-token.js を実行\n' +
      '2. google-ads-config.json を作成\n' +
      '3. 必要な情報を入力\n' +
      '\n詳細: docs/GOOGLE_ADS_API_SETUP.md'
    );
  }

  const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));

  // 必須フィールドのチェック
  const required = ['developer_token', 'client_id', 'client_secret', 'refresh_token', 'customer_id'];
  const missing = required.filter(field => !config[field]);

  if (missing.length > 0) {
    throw new Error(`設定ファイルに以下の項目が不足しています: ${missing.join(', ')}`);
  }

  // 顧客IDからハイフンを削除
  config.customer_id = config.customer_id.replace(/-/g, '');
  if (config.login_customer_id) {
    config.login_customer_id = config.login_customer_id.replace(/-/g, '');
  }

  return config;
}

/**
 * キャンペーンIDを取得（名前で検索）
 */
async function getCampaignId(customer, campaignName) {
  const query = `
    SELECT campaign.id, campaign.name
    FROM campaign
    WHERE campaign.name = '${campaignName}'
    AND campaign.status != 'REMOVED'
  `;

  try {
    const results = await customer.query(query);
    if (results.length === 0) {
      return null;
    }
    return results[0].campaign.id;
  } catch (error) {
    console.error(`  ❌ キャンペーン取得エラー: ${error.message}`);
    return null;
  }
}

/**
 * 広告グループIDを取得（名前で検索）
 */
async function getAdGroupId(customer, campaignId, adGroupName) {
  const query = `
    SELECT ad_group.id, ad_group.name
    FROM ad_group
    WHERE ad_group.campaign = 'customers/${customer.credentials.customer_id}/campaigns/${campaignId}'
    AND ad_group.name = '${adGroupName}'
    AND ad_group.status != 'REMOVED'
  `;

  try {
    const results = await customer.query(query);
    if (results.length === 0) {
      return null;
    }
    return results[0].ad_group.id;
  } catch (error) {
    console.error(`  ❌ 広告グループ取得エラー: ${error.message}`);
    return null;
  }
}

/**
 * キーワードを追加
 */
async function addKeywords(customer, adGroupId, keywords) {
  const operations = keywords.map(keyword => {
    // マッチタイプの変換
    let matchType;
    switch (keyword.matchType) {
      case 'EXACT':
        matchType = enums.KeywordMatchType.EXACT;
        break;
      case 'PHRASE':
        matchType = enums.KeywordMatchType.PHRASE;
        break;
      case 'BROAD':
        matchType = enums.KeywordMatchType.BROAD;
        break;
      default:
        matchType = enums.KeywordMatchType.EXACT;
    }

    return {
      create: {
        ad_group: `customers/${customer.credentials.customer_id}/adGroups/${adGroupId}`,
        status: enums.AdGroupCriterionStatus.ENABLED,
        keyword: {
          text: keyword.text,
          match_type: matchType
        },
        cpc_bid_micros: keyword.maxCpc
      }
    };
  });

  try {
    const response = await customer.adGroupCriteria.create(operations);
    return { success: true, count: response.length };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * 除外キーワードを追加
 */
async function addNegativeKeywords(customer, campaignId, keywords) {
  const operations = keywords.map(keyword => ({
    create: {
      campaign: `customers/${customer.credentials.customer_id}/campaigns/${campaignId}`,
      negative: true,
      keyword: {
        text: keyword,
        match_type: enums.KeywordMatchType.BROAD
      }
    }
  }));

  try {
    const response = await customer.campaignCriteria.create(operations);
    return { success: true, count: response.length };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * メイン処理
 */
async function main() {
  console.log('🚀 Google Ads API - キーワード自動追加\n');

  try {
    // 設定読み込み
    console.log('📋 設定ファイル読み込み中...');
    const config = loadConfig();
    console.log(`✅ 顧客ID: ${config.customer_id}\n`);

    // Google Ads APIクライアント初期化
    console.log('🔐 Google Ads API認証中...');
    const client = new GoogleAdsApi({
      client_id: config.client_id,
      client_secret: config.client_secret,
      developer_token: config.developer_token,
    });

    const customer = client.Customer({
      customer_id: config.customer_id,
      refresh_token: config.refresh_token,
      login_customer_id: config.login_customer_id || config.customer_id,
    });

    console.log('✅ 認証成功\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    let totalAdded = 0;
    let totalFailed = 0;

    // 各キーワードグループを処理
    for (const [key, group] of Object.entries(KEYWORDS)) {
      console.log(`📂 ${group.campaignName} / ${group.adGroupName}`);

      // キャンペーンIDを取得
      console.log('  🔍 キャンペーン検索中...');
      const campaignId = await getCampaignId(customer, group.campaignName);

      if (!campaignId) {
        console.log(`  ⚠️  キャンペーンが見つかりません: ${group.campaignName}`);
        console.log('  💡 Google広告管理画面で先にキャンペーンを作成してください\n');
        totalFailed += group.keywords.length;
        continue;
      }

      console.log(`  ✅ キャンペーンID: ${campaignId}`);

      // 広告グループIDを取得
      console.log('  🔍 広告グループ検索中...');
      const adGroupId = await getAdGroupId(customer, campaignId, group.adGroupName);

      if (!adGroupId) {
        console.log(`  ⚠️  広告グループが見つかりません: ${group.adGroupName}`);
        console.log('  💡 Google広告管理画面で先に広告グループを作成してください\n');
        totalFailed += group.keywords.length;
        continue;
      }

      console.log(`  ✅ 広告グループID: ${adGroupId}`);

      // キーワード追加
      console.log(`  📤 キーワード追加中（${group.keywords.length}個）...`);
      const result = await addKeywords(customer, adGroupId, group.keywords);

      if (result.success) {
        console.log(`  ✅ 成功: ${result.count}個のキーワードを追加`);
        totalAdded += result.count;
      } else {
        console.log(`  ❌ 失敗: ${result.error}`);
        totalFailed += group.keywords.length;
      }

      console.log('');

      // API制限を考慮して待機
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('📊 実行結果:\n');
    console.log(`  ✅ 追加成功: ${totalAdded}個`);
    if (totalFailed > 0) {
      console.log(`  ❌ 追加失敗: ${totalFailed}個`);
    }
    console.log('');

    if (totalAdded > 0) {
      console.log('🎉 キーワード追加完了！\n');
      console.log('📋 次のステップ:\n');
      console.log('1. Google広告管理画面で確認');
      console.log('   https://ads.google.com/\n');
      console.log('2. 広告文を設定\n');
      console.log('3. 日予算を設定して配信開始\n');
    } else {
      console.log('⚠️  キーワードが追加されませんでした\n');
      console.log('📋 確認事項:\n');
      console.log('1. キャンペーンが作成されているか');
      console.log('2. 広告グループが作成されているか');
      console.log('3. キャンペーン名・広告グループ名が一致しているか\n');
    }

  } catch (error) {
    console.error('\n❌ エラー:', error.message);

    if (error.message.includes('設定ファイル')) {
      console.log('\n📖 セットアップ手順:');
      console.log('  1. docs/GOOGLE_ADS_API_SETUP.md を参照');
      console.log('  2. node scripts/google-ads-get-refresh-token.js を実行');
      console.log('  3. google-ads-config.json を作成');
    }

    process.exit(1);
  }
}

main();

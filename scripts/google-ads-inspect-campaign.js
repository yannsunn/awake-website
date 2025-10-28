/**
 * 既存キャンペーンの詳細を調査
 */

const { GoogleAdsApi } = require('google-ads-api');
const fs = require('fs');
const path = require('path');

const CONFIG_FILE = path.join(__dirname, '..', 'google-ads-config.json');

async function inspectCampaign() {
  const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
  config.customer_id = config.customer_id.replace(/-/g, '');

  const client = new GoogleAdsApi({
    client_id: config.client_id,
    client_secret: config.client_secret,
    developer_token: config.developer_token,
  });

  const customer = client.Customer({
    customer_id: config.customer_id,
    refresh_token: config.refresh_token,
  });

  console.log('🔍 「ホームページ制作」キャンペーンの詳細調査\n');

  try {
    const query = `
      SELECT
        campaign.id,
        campaign.name,
        campaign.status,
        campaign.advertising_channel_type,
        campaign.bidding_strategy_type,
        campaign.campaign_budget,
        campaign.network_settings.target_google_search,
        campaign.network_settings.target_search_network,
        campaign.start_date,
        campaign.end_date,
        campaign_budget.amount_micros
      FROM campaign
      WHERE campaign.name = 'ホームページ制作'
    `;

    const results = await customer.query(query);

    if (results.length > 0) {
      const campaign = results[0].campaign;
      const budget = results[0].campaign_budget;

      console.log('✅ キャンペーン情報:\n');
      console.log(JSON.stringify(campaign, null, 2));
      console.log('\n✅ 予算情報:\n');
      console.log(JSON.stringify(budget, null, 2));
    } else {
      console.log('❌ キャンペーンが見つかりません');
    }

  } catch (error) {
    console.error('❌ エラー:', error.message);
  }
}

inspectCampaign();

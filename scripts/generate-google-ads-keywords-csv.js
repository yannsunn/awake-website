/**
 * Google広告 キーワード一括追加用CSV生成
 *
 * このスクリプトは、Google広告にインポート可能なCSVファイルを生成します。
 *
 * 使用方法:
 *   node scripts/generate-google-ads-keywords-csv.js
 *
 * 生成されるファイル:
 *   google-ads-keywords.csv
 */

const fs = require('fs');
const path = require('path');

// キーワードデータ
const KEYWORDS = {
  // キャンペーン1: ホームページ制作
  homepage: {
    campaignName: 'ホームページ制作',
    adGroupName: '一般キーワード',
    keywords: [
      { text: 'ホームページ制作', matchType: 'EXACT', maxCpc: 150 },
      { text: 'web制作', matchType: 'EXACT', maxCpc: 150 },
      { text: 'ウェブサイト制作', matchType: 'EXACT', maxCpc: 150 },
      { text: 'ホームページ制作 東京', matchType: 'PHRASE', maxCpc: 180 },
      { text: 'ホームページ制作 費用', matchType: 'PHRASE', maxCpc: 160 },
      { text: 'ホームページ制作 安い', matchType: 'PHRASE', maxCpc: 170 },
      { text: 'ホームページ制作 中小企業', matchType: 'PHRASE', maxCpc: 180 },
      { text: 'web制作 料金', matchType: 'PHRASE', maxCpc: 160 },
      { text: 'ホームページ制作 相場', matchType: 'PHRASE', maxCpc: 150 },
      { text: 'ホームページ制作 会社', matchType: 'PHRASE', maxCpc: 160 },
    ]
  },
  homepageLocal: {
    campaignName: 'ホームページ制作',
    adGroupName: '地域キーワード',
    keywords: [
      { text: '東大和市 ホームページ制作', matchType: 'PHRASE', maxCpc: 200 },
      { text: '東大和 web制作', matchType: 'PHRASE', maxCpc: 200 },
      { text: '多摩地域 ホームページ制作', matchType: 'PHRASE', maxCpc: 180 },
      { text: '東京都 ホームページ制作', matchType: 'PHRASE', maxCpc: 170 },
      { text: '西東京 web制作', matchType: 'PHRASE', maxCpc: 180 },
      { text: '立川 ホームページ制作', matchType: 'PHRASE', maxCpc: 190 },
      { text: '武蔵村山 ホームページ制作', matchType: 'PHRASE', maxCpc: 200 },
      { text: '小平 ホームページ制作', matchType: 'PHRASE', maxCpc: 190 },
    ]
  },
  homepagePrice: {
    campaignName: 'ホームページ制作',
    adGroupName: '価格キーワード',
    keywords: [
      { text: 'ホームページ制作 10万円', matchType: 'PHRASE', maxCpc: 180 },
      { text: 'ホームページ制作 15万円', matchType: 'PHRASE', maxCpc: 180 },
      { text: 'ホームページ制作 安い おすすめ', matchType: 'PHRASE', maxCpc: 170 },
      { text: 'web制作 格安 品質', matchType: 'PHRASE', maxCpc: 170 },
      { text: 'ホームページ制作 適正価格', matchType: 'PHRASE', maxCpc: 160 },
      { text: 'ホームページ 初期費用', matchType: 'PHRASE', maxCpc: 150 },
      { text: 'サイト制作 見積もり', matchType: 'PHRASE', maxCpc: 160 },
      { text: 'ホームページ制作 コスパ', matchType: 'PHRASE', maxCpc: 170 },
    ]
  },
  // キャンペーン2: AIチャットボット
  ai: {
    campaignName: 'AIチャットボット',
    adGroupName: '開発・導入',
    keywords: [
      { text: 'AIチャットボット', matchType: 'EXACT', maxCpc: 250 },
      { text: 'チャットボット 開発', matchType: 'EXACT', maxCpc: 250 },
      { text: 'AIチャットボット 開発', matchType: 'PHRASE', maxCpc: 260 },
      { text: 'チャットボット 導入', matchType: 'PHRASE', maxCpc: 240 },
      { text: 'AIチャットボット 費用', matchType: 'PHRASE', maxCpc: 230 },
      { text: 'AI 顧客対応', matchType: 'PHRASE', maxCpc: 240 },
      { text: 'チャットボット 価格', matchType: 'PHRASE', maxCpc: 220 },
      { text: 'AIチャット 自動化', matchType: 'PHRASE', maxCpc: 250 },
      { text: 'チャットボット LINE', matchType: 'PHRASE', maxCpc: 240 },
      { text: 'AI カスタマーサポート', matchType: 'PHRASE', maxCpc: 260 },
    ]
  },
  aiAutomation: {
    campaignName: 'AIチャットボット',
    adGroupName: '自動化・効率化',
    keywords: [
      { text: '顧客対応 自動化', matchType: 'PHRASE', maxCpc: 240 },
      { text: '業務効率化 AI', matchType: 'PHRASE', maxCpc: 230 },
      { text: 'カスタマーサポート 効率化', matchType: 'PHRASE', maxCpc: 220 },
      { text: '問い合わせ対応 AI', matchType: 'PHRASE', maxCpc: 230 },
      { text: '24時間対応 AI', matchType: 'PHRASE', maxCpc: 240 },
      { text: '人件費削減 AI', matchType: 'PHRASE', maxCpc: 250 },
      { text: '業務自動化 チャットボット', matchType: 'PHRASE', maxCpc: 240 },
      { text: 'FAQ 自動化', matchType: 'PHRASE', maxCpc: 220 },
    ]
  },
  // キャンペーン3: Amazon販売代行
  amazon: {
    campaignName: 'Amazon販売代行',
    adGroupName: '代理店・代行',
    keywords: [
      { text: 'Amazon 代理店', matchType: 'EXACT', maxCpc: 200 },
      { text: 'Amazon 販売代行', matchType: 'EXACT', maxCpc: 200 },
      { text: 'アマゾン 代行', matchType: 'EXACT', maxCpc: 190 },
      { text: 'EC 販売代行', matchType: 'EXACT', maxCpc: 200 },
      { text: 'Amazon 出品代行', matchType: 'PHRASE', maxCpc: 210 },
      { text: 'Amazon 運営代行', matchType: 'PHRASE', maxCpc: 210 },
      { text: 'Amazon 販売代行 手数料', matchType: 'PHRASE', maxCpc: 220 },
      { text: 'Amazon 代理店 費用', matchType: 'PHRASE', maxCpc: 210 },
      { text: 'EC コンサル', matchType: 'PHRASE', maxCpc: 200 },
    ]
  },
  amazonMaker: {
    campaignName: 'Amazon販売代行',
    adGroupName: 'メーカー向け',
    keywords: [
      { text: 'メーカー Amazon 販売', matchType: 'PHRASE', maxCpc: 250 },
      { text: '卸売 Amazon 出品', matchType: 'PHRASE', maxCpc: 240 },
      { text: 'Amazon 新規出品', matchType: 'PHRASE', maxCpc: 220 },
      { text: 'Amazon 販路拡大', matchType: 'PHRASE', maxCpc: 240 },
      { text: 'メーカー直送 Amazon', matchType: 'PHRASE', maxCpc: 230 },
      { text: 'Amazon 販売 始め方', matchType: 'PHRASE', maxCpc: 200 },
    ]
  }
};

// 除外キーワード
const NEGATIVE_KEYWORDS = [
  '無料',
  'フリー',
  'free',
  'テンプレート',
  '自作',
  '自分で',
  '作り方',
  '方法',
  'やり方',
  '講座',
  'セミナー',
  '求人',
  '採用',
  '転職',
  'アルバイト',
  'バイト',
  'パート',
  '副業',
  '在宅',
  '内職',
  'WordPress 無料',
  'Wix',
  'Jimdo',
  'ペライチ',
];

/**
 * Google広告インポート用CSVを生成
 */
function generateKeywordsCSV() {
  const rows = [];

  // ヘッダー行
  rows.push([
    'Campaign',
    'Ad group',
    'Keyword',
    'Match type',
    'Max CPC'
  ]);

  // キーワードを追加
  Object.values(KEYWORDS).forEach(group => {
    group.keywords.forEach(keyword => {
      rows.push([
        group.campaignName,
        group.adGroupName,
        keyword.text,
        keyword.matchType,
        keyword.maxCpc
      ]);
    });
  });

  // CSVフォーマットに変換
  const csv = rows.map(row =>
    row.map(cell => `"${cell}"`).join(',')
  ).join('\n');

  return csv;
}

/**
 * 除外キーワードCSVを生成
 */
function generateNegativeKeywordsCSV() {
  const rows = [];

  // ヘッダー行
  rows.push([
    'Campaign',
    'Negative keyword',
    'Match type'
  ]);

  // すべてのキャンペーンに除外キーワードを追加
  const campaigns = [...new Set(Object.values(KEYWORDS).map(g => g.campaignName))];

  campaigns.forEach(campaign => {
    NEGATIVE_KEYWORDS.forEach(keyword => {
      rows.push([
        campaign,
        keyword,
        'BROAD' // 部分一致で除外
      ]);
    });
  });

  // CSVフォーマットに変換
  const csv = rows.map(row =>
    row.map(cell => `"${cell}"`).join(',')
  ).join('\n');

  return csv;
}

/**
 * メイン処理
 */
function main() {
  console.log('🚀 Google広告キーワードCSV生成中...\n');

  try {
    // キーワードCSV生成
    const keywordsCSV = generateKeywordsCSV();
    const keywordsPath = path.join(__dirname, '..', 'google-ads-keywords.csv');
    fs.writeFileSync(keywordsPath, keywordsCSV, 'utf8');

    console.log('✅ キーワードCSV生成完了');
    console.log(`   ファイル: ${keywordsPath}`);

    // キーワード数をカウント
    const totalKeywords = Object.values(KEYWORDS).reduce(
      (sum, group) => sum + group.keywords.length, 0
    );
    console.log(`   キーワード数: ${totalKeywords}個\n`);

    // 除外キーワードCSV生成
    const negativeCSV = generateNegativeKeywordsCSV();
    const negativePath = path.join(__dirname, '..', 'google-ads-negative-keywords.csv');
    fs.writeFileSync(negativePath, negativeCSV, 'utf8');

    console.log('✅ 除外キーワードCSV生成完了');
    console.log(`   ファイル: ${negativePath}`);
    console.log(`   除外キーワード数: ${NEGATIVE_KEYWORDS.length}個\n`);

    // サマリー表示
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('📊 キーワード内訳:\n');

    Object.entries(KEYWORDS).forEach(([key, group]) => {
      console.log(`  ${group.campaignName} / ${group.adGroupName}`);
      console.log(`    - ${group.keywords.length}個`);
    });

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('📋 次のステップ:\n');
    console.log('1. Google広告管理画面にログイン');
    console.log('   https://ads.google.com/\n');
    console.log('2. ツールと設定 → 一括操作 → アップロード\n');
    console.log('3. google-ads-keywords.csv をアップロード\n');
    console.log('4. google-ads-negative-keywords.csv をアップロード\n');
    console.log('5. 変更内容を確認して適用\n');
    console.log('🎉 完了！\n');

  } catch (error) {
    console.error('\n❌ エラー:', error.message);
    process.exit(1);
  }
}

// スクリプト実行
if (require.main === module) {
  main();
}

module.exports = { generateKeywordsCSV, generateNegativeKeywordsCSV };

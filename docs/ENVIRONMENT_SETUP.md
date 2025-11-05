# 環境変数セットアップガイド

## 🔐 重要な原則

**絶対にローカルファイルにAPIキーを保存しない**

❌ **危険な方法（従来の方法）:**
```bash
# .env.local にAPIキーを保存 → 誤ってGitにコミットされる
OPENAI_API_KEY=sk-proj-...
ANTHROPIC_API_KEY=sk-ant-...
```

✅ **安全な方法:**
- 本番環境: Vercel環境変数
- ローカル開発: Vercel CLI経由で同期

---

## 📋 セットアップ手順

### Step 1: APIキーの取得

#### 1.1 OpenAI API
```bash
# https://platform.openai.com/api-keys
1. "Create new secret key" をクリック
2. 名前: "awake-website-vercel"
3. Permissions: All
4. キーをコピー（一度しか表示されません）
```

#### 1.2 Anthropic API
```bash
# https://console.anthropic.com/settings/keys
1. "Create Key" をクリック
2. 名前: "awake-website-vercel"
3. キーをコピー
```

### Step 2: Vercel環境変数に設定

```bash
# https://vercel.com/yannsunn/awake-website/settings/environment-variables

環境変数を追加:

Name: OPENAI_API_KEY
Value: sk-proj-... (Step 1.1でコピーしたキー)
Environment: Production, Preview, Development

Name: ANTHROPIC_API_KEY
Value: sk-ant-... (Step 1.2でコピーしたキー)
Environment: Production, Preview, Development
```

### Step 3: ローカル開発環境のセットアップ

#### Option A: Vercel CLI経由（推奨）

```bash
# Vercel CLIをインストール
npm install -g vercel

# ログイン
vercel login

# プロジェクトをリンク
vercel link

# 環境変数を自動ダウンロード
vercel env pull .env.local

# 開発サーバー起動
npm run dev
```

**メリット:**
- ✅ Vercel環境変数と完全同期
- ✅ チームメンバー全員が同じ設定を取得
- ✅ `.env.local` は自動生成され、`.gitignore` で除外済み

#### Option B: 環境変数なしでローカル開発

チャットボット機能を使わない場合は、環境変数なしで開発できます：

```bash
# 環境変数なしで起動
npm run dev

# APIキーが必要なルートにアクセスした場合のみエラー
# 他のページは正常に動作
```

### Step 4: Google API認証情報の再生成

#### 4.1 Google Search Console API

```bash
# https://console.cloud.google.com/apis/credentials

1. OAuth 2.0 Client IDを削除
2. 新規作成: "Desktop app"
3. credentials.json をダウンロード
4. ファイル名を変更: gsc-credentials.json
5. ローカルに保存（Gitにコミットしない）

# OAuth認証フロー実行
node scripts/gsc-setup-oauth.js

# gsc-token.json が生成される（Gitにコミットしない）
```

#### 4.2 Google Indexing API

```bash
# https://console.cloud.google.com/iam-admin/serviceaccounts

1. 既存のサービスアカウントキーを削除
2. 新規キーを作成: JSON形式
3. ファイル名を変更: indexing-service-account.json
4. ローカルに保存（Gitにコミットしない）
```

#### 4.3 Google Ads API

```bash
# https://console.cloud.google.com/apis/credentials

1. OAuth 2.0 Client IDを削除して再生成
2. Developer Tokenを取得（電話: 0120-214-031）
3. google-ads-config.json を手動作成:

{
  "developer_token": "YOUR_DEV_TOKEN",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET",
  "refresh_token": "YOUR_REFRESH_TOKEN",
  "customer_id": "4040451201"
}

4. OAuth認証フロー実行
node scripts/google-ads-get-refresh-token.js
```

---

## 🔒 セキュリティチェックリスト

### 即座に実施（完了）
- [x] GitHub履歴から機密ファイルを削除
- [x] `.gitignore` に機密ファイルを追加

### ユーザー実施事項
- [ ] OpenAI APIキーを全削除して再生成
- [ ] Anthropic APIキーを削除して再生成
- [ ] Google OAuth認証情報を削除して再生成
- [ ] Vercel環境変数に新規キーを設定
- [ ] `vercel env pull` でローカル環境をセットアップ

---

## 📁 ファイル構成

```
awake-website/
├── .env.local                      # Vercel CLIで自動生成（Gitにコミットしない）
├── gsc-credentials.json            # Google OAuth（Gitにコミットしない）
├── gsc-token.json                  # Google リフレッシュトークン（Gitにコミットしない）
├── indexing-service-account.json   # Google SA（Gitにコミットしない）
├── google-ads-config.json          # Google Ads（Gitにコミットしない）
└── .gitignore                      # 上記ファイルを全て除外
```

### .gitignore 確認

```bash
# 以下が含まれていることを確認
.env.local
.env*.local
gsc-credentials.json
gsc-token.json
indexing-service-account.json
google-ads-config.json
```

---

## 🚀 デプロイ時の環境変数

### Vercel環境変数のみ使用

```bash
# 本番環境では .env.local を一切使わない
# Vercelダッシュボードで設定した環境変数が自動的に注入される

Production環境:
- OPENAI_API_KEY
- ANTHROPIC_API_KEY
- NODE_ENV=production

Preview環境（PRデプロイ）:
- OPENAI_API_KEY
- ANTHROPIC_API_KEY
- NODE_ENV=production
```

---

## 🔧 トラブルシューティング

### Q1: `vercel env pull` が失敗する

```bash
# ログイン状態を確認
vercel whoami

# 再ログイン
vercel logout
vercel login
```

### Q2: チャットボットが動作しない

```bash
# 環境変数を確認
vercel env ls

# ローカルで確認
cat .env.local | grep OPENAI_API_KEY
cat .env.local | grep ANTHROPIC_API_KEY
```

### Q3: Google API認証エラー

```bash
# トークンを削除して再認証
rm gsc-token.json
node scripts/gsc-setup-oauth.js
```

---

## 📚 参考リンク

- [Vercel環境変数ドキュメント](https://vercel.com/docs/projects/environment-variables)
- [Next.js環境変数ガイド](https://nextjs.org/docs/basic-features/environment-variables)
- [OpenAI API Keys](https://platform.openai.com/api-keys)
- [Anthropic API Keys](https://console.anthropic.com/settings/keys)
- [Google Cloud Credentials](https://console.cloud.google.com/apis/credentials)

---

**最終更新:** 2025-11-06
**重要度:** 🔴 最優先（セキュリティ必須）

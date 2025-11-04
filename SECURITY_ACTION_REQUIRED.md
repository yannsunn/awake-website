# 🚨 セキュリティ対応が必要です

## 状況

コードレビューの結果、機密情報（APIキー）のセキュリティリスクが検出されました。

### 検出された機密ファイル

以下のファイルがローカルに存在し、過去にGitリポジトリに含まれていた可能性があります：

- `.env.local` - Anthropic/OpenAI APIキー
- `gsc-credentials.json` - Google OAuth認証情報
- `gsc-token.json` - Google リフレッシュトークン
- `indexing-service-account.json` - Google サービスアカウント秘密鍵
- `google-ads-config.json` - Google Ads設定

**現状**: これらのファイルは`.gitignore`に追加済みで、今後のコミットには含まれません。

---

## ⚠️ 即座に実施すべき対応

### 1. Anthropic API キーのローテーション

**手順**:
1. https://console.anthropic.com/settings/keys にアクセス
2. 既存のAPIキーを削除（Revoke）
3. 新しいAPIキーを作成
4. `.env.local`を更新：
   ```env
   ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxx  # 新しいキーに置き換え
   ```

### 2. OpenAI API キーのローテーション

**手順**:
1. https://platform.openai.com/api-keys にアクセス
2. 既存のAPIキーを削除
3. 新しいAPIキーを作成
4. `.env.local`を更新：
   ```env
   OPENAI_API_KEY=sk-proj-xxxxxxxxxx  # 新しいキーに置き換え
   ```

### 3. Google API 認証情報の再生成

#### Google Search Console / Indexing API

**手順**:
1. https://console.cloud.google.com/apis/credentials にアクセス
2. 既存の「OAuth 2.0 クライアント ID」を削除
3. 新しいOAuth 2.0クライアントIDを作成
   - アプリケーションの種類: デスクトップアプリ
   - 名前: GSC CLI
4. JSONをダウンロードして `gsc-credentials.json` に保存
5. トークンを再生成：
   ```bash
   node scripts/gsc-refresh-token.js
   ```

#### Indexing API サービスアカウント

**手順**:
1. https://console.cloud.google.com/iam-admin/serviceaccounts にアクセス
2. 既存のサービスアカウントを削除
3. 新しいサービスアカウントを作成
   - 名前: indexing-api
   - 役割: なし（Search Consoleで権限付与）
4. キーを作成（JSON形式）してダウンロード
5. `indexing-service-account.json` に保存

#### Google Ads API

**手順**:
1. https://console.cloud.google.com/apis/credentials にアクセス
2. 既存の「OAuth 2.0 クライアント ID」を削除
3. 新しいOAuth 2.0クライアントIDを作成
4. `google-ads-config.json` を更新
5. リフレッシュトークンを再取得：
   ```bash
   node scripts/google-ads-get-refresh-token.js
   ```

---

## 📋 チェックリスト

作業が完了したら、以下にチェックを入れてください：

- [ ] Anthropic API キーをローテーション完了
- [ ] OpenAI API キーをローテーション完了
- [ ] Google OAuth認証情報を再生成完了
- [ ] Google サービスアカウントキーを再生成完了
- [ ] すべてのスクリプトが新しい認証情報で動作することを確認
- [ ] Vercelの環境変数を更新（本番環境）
- [ ] このドキュメントを削除

---

## 🔒 今後のベストプラクティス

### 環境変数の管理

**ローカル開発**:
- `.env.local` に機密情報を保存（.gitignore済み）
- 絶対にGitにコミットしない

**本番環境（Vercel）**:
1. Vercelダッシュボード → Settings → Environment Variables
2. 必要な環境変数を設定：
   - `ANTHROPIC_API_KEY`
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`

### 認証情報ファイル

- すべての `*.json` 認証ファイルは.gitignore済み
- チーム内で共有する場合は、1Password等の安全な方法を使用

---

## 🆘 サポート

質問がある場合は、以下を参照してください：

- [Anthropic API ドキュメント](https://docs.anthropic.com/)
- [OpenAI API ドキュメント](https://platform.openai.com/docs)
- [Google Cloud Console](https://console.cloud.google.com/)

---

**作成日**: 2025年11月4日
**優先度**: 🔴 CRITICAL - 即座に対応してください

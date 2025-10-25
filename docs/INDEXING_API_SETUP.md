# Google Indexing API セットアップガイド

このガイドでは、Google Indexing APIを使用してウェブページのインデックス登録を自動化する方法を説明します。

## 前提条件

- Google Cloud Projectが作成済み（`awake-search-console`）
- Google Search Consoleでサイト所有権が確認済み

## セットアップ手順

### 1. サービスアカウントの作成

1. **Google Cloud Console**を開く
   - https://console.cloud.google.com/

2. **プロジェクトを選択**
   - `awake-search-console`プロジェクトを選択

3. **サービスアカウントページに移動**
   - 左側メニュー「IAMと管理」→「サービスアカウント」
   - または直接: https://console.cloud.google.com/iam-admin/serviceaccounts

4. **サービスアカウントを作成**
   - 「+ サービスアカウントを作成」をクリック
   - **サービスアカウント名**: `indexing-api-service`
   - **サービスアカウントID**: `indexing-api-service`（自動生成）
   - **説明**: `Google Indexing API automation for awakeinc.co.jp`
   - 「作成して続行」をクリック

5. **権限を付与（スキップ可能）**
   - ロールの選択は不要（次へ）

6. **完了**
   - 「完了」をクリック

### 2. Indexing API の有効化

1. **APIライブラリページに移動**
   - 左側メニュー「APIとサービス」→「ライブラリ」
   - または直接: https://console.cloud.google.com/apis/library

2. **Indexing API を検索**
   - 検索バーに「Indexing API」と入力
   - 「Web Search Indexing API」を選択

3. **有効にする**
   - 「有効にする」ボタンをクリック
   - 有効化完了まで数秒待機

### 3. サービスアカウントキーの作成とダウンロード

1. **サービスアカウント一覧に戻る**
   - https://console.cloud.google.com/iam-admin/serviceaccounts

2. **作成したサービスアカウントをクリック**
   - `indexing-api-service@awake-search-console.iam.gserviceaccount.com`

3. **キータブを開く**
   - 上部の「キー」タブをクリック

4. **新しいキーを作成**
   - 「鍵を追加」→「新しい鍵を作成」
   - キーのタイプ: **JSON**
   - 「作成」をクリック

5. **JSONファイルが自動ダウンロード**
   - ファイル名例: `awake-search-console-xxxxx.json`
   - このファイルをプロジェクトルートに配置
   - **ファイル名を `indexing-service-account.json` に変更**

### 4. Search Console でサービスアカウントに権限付与

これが**最も重要なステップ**です！

1. **サービスアカウントのメールアドレスをコピー**
   - 例: `indexing-api-service@awake-search-console.iam.gserviceaccount.com`

2. **Google Search Console を開く**
   - https://search.google.com/search-console

3. **プロパティを選択**
   - `awakeinc.co.jp`を選択

4. **設定ページに移動**
   - 左側メニュー「設定」をクリック

5. **ユーザーと権限**
   - 「ユーザーと権限」をクリック

6. **ユーザーを追加**
   - 「ユーザーを追加」ボタンをクリック
   - **メールアドレス**: サービスアカウントのメールアドレスを貼り付け
   - **権限**: 「所有者」を選択
   - 「追加」をクリック

### 5. 認証情報ファイルの配置

プロジェクトルートに以下のファイルを配置：

```
awake-website/
├── indexing-service-account.json  ← ダウンロードしたJSONファイル
├── gsc-credentials.json           ← OAuth用（既存）
└── gsc-token.json                 ← OAuth用（既存）
```

### 6. .gitignoreの確認

認証情報がGitにコミットされないよう確認：

```gitignore
# Google API Credentials
gsc-credentials.json
gsc-token.json
indexing-service-account.json
```

## 使い方

### インデックス登録をリクエスト

```bash
node scripts/gsc-request-indexing.js
```

このスクリプトは以下のURLのインデックス登録をリクエストします：
- ホームページ
- サービスページ（AI、EC、Web）
- 会社情報
- FAQ

### カスタムURLをリクエスト

スクリプト内の`TARGET_URLS`配列を編集して、対象URLを追加・変更できます。

## トラブルシューティング

### エラー: "Error: invalid_grant"

**原因**: サービスアカウントがSearch Consoleのプロパティに追加されていない

**解決策**: 上記「4. Search Console でサービスアカウントに権限付与」を再確認

### エラー: "Permission denied"

**原因**: サービスアカウントの権限が不足

**解決策**: Search Consoleで「所有者」権限が付与されているか確認

### エラー: "API not enabled"

**原因**: Indexing APIが有効化されていない

**解決策**:
1. https://console.cloud.google.com/apis/library
2. "Web Search Indexing API"を検索して有効化

## API制限

- **1日のクエリ数**: 200リクエスト/日（無料枠）
- **QPS（クエリ/秒）**: 600リクエスト/分

詳細: https://developers.google.com/search/apis/indexing-api/v3/quota-pricing

## セキュリティ注意事項

1. **認証情報ファイルを公開しない**
   - `indexing-service-account.json`は機密情報です
   - Gitリポジトリにコミットしないでください

2. **権限の最小化**
   - サービスアカウントには必要最小限の権限のみ付与

3. **定期的なキーのローテーション**
   - セキュリティのため、定期的にキーを再生成することを推奨

## 参考リンク

- [Google Indexing API 公式ドキュメント](https://developers.google.com/search/apis/indexing-api/v3/quickstart)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Google Search Console](https://search.google.com/search-console)

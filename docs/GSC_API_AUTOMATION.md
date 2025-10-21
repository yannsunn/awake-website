# Google Search Console API 自動化ガイド

## 🎯 概要

Google Search Console APIを使用して、サイトマップ送信とインデックスリクエストを自動化します。

**作成したスクリプト:**
- ✅ `scripts/gsc-setup-oauth.js` - OAuth認証セットアップ
- ✅ `scripts/gsc-submit-sitemap.js` - サイトマップ自動送信
- ✅ `scripts/gsc-request-indexing.js` - インデックスリクエスト

**インストール済みパッケージ:**
- ✅ `googleapis` - Google APIs Node.jsクライアント

---

## 📋 セットアップ手順

### ステップ1: Google Cloud Consoleでプロジェクト作成

1. **Google Cloud Consoleにアクセス**
   ```
   https://console.cloud.google.com/
   ```

2. **新しいプロジェクトを作成**
   - プロジェクト名: `awake-search-console`
   - 「作成」をクリック

3. **Search Console APIを有効化**
   - 左メニュー「APIとサービス」→「ライブラリ」
   - 「Google Search Console API」を検索
   - 「有効にする」をクリック

4. **（オプション）Indexing APIも有効化**
   - 同じく「Google Indexing API」を検索
   - 「有効にする」をクリック

---

### ステップ2: OAuth 2.0 認証情報の作成

1. **認証情報ページにアクセス**
   - 左メニュー「APIとサービス」→「認証情報」
   - 「認証情報を作成」→「OAuth クライアント ID」

2. **同意画面の設定（初回のみ）**
   - 「同意画面を構成」をクリック
   - ユーザータイプ: 「外部」を選択
   - アプリ名: `Awake Search Console Automation`
   - サポートメール: あなたのメールアドレス
   - 「保存して次へ」を3回クリック

3. **OAuth クライアント ID の作成**
   - アプリケーションの種類: 「デスクトップ アプリ」を選択
   - 名前: `awake-gsc-desktop`
   - 「作成」をクリック

4. **認証情報をダウンロード**
   - 作成された認証情報の右側にある「ダウンロード」アイコンをクリック
   - JSONファイルがダウンロードされます
   - ファイル名を `gsc-credentials.json` に変更
   - プロジェクトのルートディレクトリに配置:
     ```
     c:\Users\march\awake-website\gsc-credentials.json
     ```

---

### ステップ3: OAuth認証を実行

1. **セットアップスクリプトを実行**
   ```bash
   cd c:\Users\march\awake-website
   node scripts/gsc-setup-oauth.js
   ```

2. **ブラウザで認証**
   - スクリプトがURLを表示します
   - URLをブラウザで開く
   - Googleアカウントでログイン
   - 「許可」をクリック
   - 表示された認証コードをコピー

3. **認証コードを入力**
   - ターミナルに戻って認証コードを貼り付け
   - Enterキーを押す

4. **認証完了**
   - `gsc-token.json` が作成されます
   - アクセス可能なサイト一覧が表示されます

**期待される出力:**
```
✅ 認証成功！アクセス可能なサイト:
  - sc-domain:awakeinc.co.jp (siteOwner)

🎉 セットアップ完了！
```

---

## 🚀 使用方法

### サイトマップの送信

```bash
node scripts/gsc-submit-sitemap.js
```

**実行内容:**
- ✅ 既存のサイトマップを確認
- ✅ `https://www.awakeinc.co.jp/sitemap.xml` を送信
- ✅ 送信後の状態を確認

**期待される出力:**
```
✅ サイトマップ送信完了！

サイトマップ情報:
  パス: https://www.awakeinc.co.jp/sitemap.xml
  タイプ: sitemap
  最終送信: 2025-10-22T10:30:00.000Z
  検出URL: 10
```

---

### URL検査とインデックスリクエスト

```bash
node scripts/gsc-request-indexing.js
```

**重要な注意:**
- Search Console API v3には直接的な「インデックスリクエスト」機能がありません
- Google Indexing APIを使用する必要があります（サービスアカウント設定が必要）

**2つのアプローチ:**

#### アプローチ1: 手動でインデックスリクエスト（推奨）
1. Google Search Consoleのウェブインターフェースを使用
2. [GOOGLE_SEARCH_CONSOLE_SETUP.md](./GOOGLE_SEARCH_CONSOLE_SETUP.md) の手順に従う
3. 各URLで「インデックス登録をリクエスト」ボタンをクリック

#### アプローチ2: Indexing APIを使用（上級）
1. Google Indexing APIを有効化
2. サービスアカウントを作成
3. サービスアカウントをSearch Consoleに所有者として追加
4. スクリプトを実行

**詳細:** https://developers.google.com/search/apis/indexing-api/v3/quickstart

---

## 🔐 セキュリティ

### 認証ファイルの管理

以下のファイルは**絶対にGitにコミットしないでください:**

- `gsc-credentials.json` - OAuth認証情報
- `gsc-token.json` - アクセストークン

`.gitignore`に既に追加されています:
```gitignore
# Google Search Console API
gsc-credentials.json
gsc-token.json
```

### トークンの有効期限

- アクセストークンは**1時間**で期限切れ
- リフレッシュトークンを使用して自動更新
- `gsc-token.json`があれば再認証不要

---

## 📊 API制限

### Search Console API

- **リクエスト数:** 1日あたり200リクエスト
- **サイトマップ送信:** 制限なし（実用上）
- **レート制限:** 1秒あたり1リクエスト

### Indexing API

- **リクエスト数:** 1日あたり200 URL
- **クォータ:** プロジェクトごと
- **推奨:** 重要なページのみリクエスト

---

## 🛠️ トラブルシューティング

### エラー: `gsc-credentials.json` が見つかりません

**原因:** OAuth認証情報ファイルが配置されていない

**対処法:**
1. Google Cloud Consoleで認証情報をダウンロード
2. ファイル名を `gsc-credentials.json` に変更
3. プロジェクトルートに配置

---

### エラー: 403 Forbidden

**原因:** Search Consoleでサイトの所有権が確認されていない

**対処法:**
1. https://search.google.com/search-console にアクセス
2. サイト（`awakeinc.co.jp`）を追加
3. 所有権を確認（DNS、HTMLファイル、Googleアナリティクスなど）

---

### エラー: 404 Not Found

**原因:** サイトURLが間違っている

**対処法:**
1. スクリプト内の `SITE_URL` を確認
2. Domain propertyの場合: `sc-domain:awakeinc.co.jp`
3. URL prefixの場合: `https://www.awakeinc.co.jp/`

---

### トークンが期限切れ

**症状:** 認証エラーが発生

**対処法:**
```bash
# gsc-token.jsonを削除して再認証
rm gsc-token.json
node scripts/gsc-setup-oauth.js
```

---

## 📈 自動化のベストプラクティス

### 1. 定期的なサイトマップ送信

**推奨スケジュール:** 週1回

```bash
# cron（Linux/Mac）またはタスクスケジューラ（Windows）で設定
0 2 * * 1 cd /path/to/awake-website && node scripts/gsc-submit-sitemap.js
```

### 2. 新しいページ公開時

新しいページを公開したら:
1. サイトマップを再送信
2. 重要なページはIndexing APIでリクエスト

### 3. モニタリング

定期的に確認:
- Search Consoleでインデックス状況
- クロールエラー
- 検索パフォーマンス

---

## 🔗 参考リンク

- [Google Search Console API v3](https://developers.google.com/webmaster-tools/v1/api_reference_index)
- [Google Indexing API](https://developers.google.com/search/apis/indexing-api/v3/quickstart)
- [OAuth 2.0 for Desktop Apps](https://developers.google.com/identity/protocols/oauth2/native-app)
- [Search Console Help](https://support.google.com/webmasters)

---

## 🎯 次のステップ

### 今すぐ実行:
1. Google Cloud Consoleでプロジェクト作成
2. OAuth認証情報をダウンロード
3. `node scripts/gsc-setup-oauth.js` を実行
4. `node scripts/gsc-submit-sitemap.js` を実行

### 1週間後:
1. Google Search Consoleで結果確認
2. インデックス状況をチェック
3. 検索パフォーマンスをモニタリング

---

**作成日:** 2025-10-22
**対象サイト:** https://www.awakeinc.co.jp
**ドキュメント管理:** Claude Code

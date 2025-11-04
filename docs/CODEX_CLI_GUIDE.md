# 🚀 OpenAI Codex CLI 完全ガイド

OpenAI公式の新しいコーディングアシスタントCLIツールです（2025年10月リリース）。

---

## 📋 目次

1. [セットアップ](#セットアップ)
2. [認証](#認証)
3. [基本的な使い方](#基本的な使い方)
4. [実用例](#実用例)
5. [料金](#料金)
6. [よくある質問](#よくある質問)

---

## ✅ セットアップ完了

### インストール済み

```bash
npm install -g @openai/codex
```

**バージョン:** 0.53.0（最新）

### 確認

```bash
codex --version
# codex-cli 0.53.0
```

---

## 🔑 認証

### Step 1: ログイン

```bash
codex login
```

**これが実行されると:**
1. ブラウザが自動的に開きます
2. OpenAI/ChatGPTアカウントでサインイン
3. 認証完了

### 認証情報の保存場所

```
~/.codex/config.toml  # 設定ファイル
```

### ログアウト

```bash
codex logout
```

---

## 💻 基本的な使い方

### 1. インタラクティブモード（対話型）

```bash
# プロジェクトディレクトリで実行
cd /path/to/your/project
codex
```

**何ができる？**
- プロジェクト全体を理解してコード生成
- 既存コードの修正・リファクタリング
- テストの自動生成
- ドキュメント作成

### 2. ワンショット実行（非対話型）

```bash
codex exec "タスクの説明"
# または短縮形
codex e "タスクの説明"
```

**例:**
```bash
codex e "src/components/Button.tsx を作成。TypeScript + Tailwind CSS。プライマリ・セカンダリバリアント、サイズ3種類（sm/md/lg）対応。"
```

### 3. プロンプト付き起動

```bash
codex "Next.js 14のapp routerでusers CRUDのREST APIを生成して"
```

### 4. 画像を添付

```bash
codex -i screenshot.png "この画面をReactコンポーネントで実装して"
```

### 5. モデル指定

```bash
codex -m o3 "複雑なアルゴリズムを実装"
# デフォルト: GPT-4系
# オプション: o3（より高性能）
```

---

## 🎯 実用例

### 例1: Next.js CRUD API生成

```bash
cd awake-website
codex exec "Next.js 14 app routerでブログ記事管理APIを作成。
- GET /api/blog - 記事一覧
- GET /api/blog/[id] - 記事詳細
- POST /api/blog - 記事作成
- PUT /api/blog/[id] - 記事更新
- DELETE /api/blog/[id] - 記事削除
TypeScript、Zodバリデーション、エラーハンドリング付き。"
```

### 例2: テスト追加

```bash
codex e "src/lib/openai-client.ts に対して、vitestのユニットテストを作成。
すべての関数をカバー、モック使用、エラーケースもテスト。"
```

### 例3: リファクタリング

```bash
codex "src/components/sections/ 配下のコンポーネントを分析。
重複コードを抽出して共通コンポーネント化。
TypeScript型安全性を保ちながら実施。"
```

### 例4: ドキュメント生成

```bash
codex e "src/lib/ 配下の全ファイルにJSDocコメントを追加。
関数の説明、パラメータ、戻り値、使用例を含める。"
```

### 例5: コンポーネント追加

```bash
codex "Reactでダークモードトグルスイッチを作成。
Tailwind CSS使用、アニメーション付き、
localStorage に設定保存、システム設定も検出。"
```

### 例6: SEO対策ブログ記事生成

```bash
codex e "docs/blog/ に5記事のMarkdownファイルを作成:
1. '中小企業がホームページ制作で失敗しない5つのポイント'
2. 'AIチャットボット導入で業務効率が3倍になった事例'
3. 'Amazon販売代行で月商100万円を達成する方法'
4. '東大和市の中小企業がDXを成功させる秘訣'
5. 'ホームページ制作の適正価格とは？相場を徹底解説'

各記事2,000文字以上、SEOキーワード最適化、
見出し構造（H2-H4）、導入・本文・まとめの構成。"
```

---

## 🎨 高度な使い方

### セッションの再開

```bash
# 前回のセッションを再開
codex resume

# 最新のセッションを自動再開
codex resume --last
```

### 変更の適用

```bash
# Codexが生成した差分をgit applyで適用
codex apply
# または短縮形
codex a
```

### サンドボックスモード

```bash
# 安全な環境でコマンド実行
codex sandbox "危険な可能性のあるコマンド"
```

### MCP（Model Context Protocol）サーバー

```bash
# MCPサーバーとして起動
codex mcp-server
```

---

## 💰 料金

### 🎯 重要: ChatGPT Pro/Plus必須

**Codex CLIを使用するには:**
- ✅ **ChatGPT Pro** ($200/月) **または**
- ✅ **ChatGPT Plus** ($20/月) **または**
- ✅ **ChatGPT Team/Business**

### 追加課金

**CLIツール使用に追加課金は不要**
- Pro/Plus契約内で使い放題
- APIトークン数にカウントされない
- 別途OpenAI API課金なし

### コスト比較

| サービス | 月額 | Codex CLI | API従量課金 |
|---------|------|-----------|-------------|
| ChatGPT Plus | $20 | ✅ 使い放題 | ❌ 別料金 |
| ChatGPT Pro | $200 | ✅ 使い放題 | ❌ 別料金 |
| OpenAI API のみ | $0 | ❌ 使えない | ✅ 従量課金 |

**結論: ChatGPT Plus/Proがあれば、Codex CLIは追加課金なし！**

---

## 📊 実際の使用感

### メリット

✅ **プロジェクト全体を理解**
- ファイル構造を自動で把握
- 関連コードを参照しながら生成

✅ **高品質なコード**
- TypeScript型定義が正確
- プロジェクトの規約に沿ったコード
- 既存コードと整合性が取れている

✅ **対話型で調整可能**
- 生成後に細かい修正依頼
- 段階的に実装を進められる

✅ **複数ファイルの一括生成**
- API + テスト + ドキュメントを一度に
- コンポーネント + Storybook + テスト

### デメリット

⚠️ **初回は時間がかかる**
- プロジェクト全体のインデックス作成（1-2分）
- 2回目以降は高速

⚠️ **大規模プロジェクトは重い**
- 数千ファイルあると処理が遅い
- 特定ディレクトリに絞るのが推奨

⚠️ **インターネット接続必須**
- オフラインでは使えない

---

## 🛠️ トラブルシューティング

### エラー: "Authentication required"

```bash
codex login
```

### エラー: "Model not available"

ChatGPT Plus/Proアカウントか確認:
```bash
# ブラウザで確認
https://chat.openai.com/
# サブスクリプション状態をチェック
```

### 動作が遅い

```bash
# 特定ディレクトリのみで実行
cd src/components
codex "この配下のコンポーネントのみ処理"
```

### 生成されたコードを確認

```bash
# 変更を確認してから適用
git diff
# OKなら適用
codex apply
```

---

## 🎯 推奨ワークフロー

### 1. 新機能追加

```bash
# 1. 対話型で起動
codex

# 2. 機能を説明
> "ユーザー認証機能を追加。Email/Password、JWT認証、/api/auth配下にエンドポイント作成"

# 3. 生成されたコードをレビュー
# 4. 修正依頼
> "エラーハンドリングをもっと詳細に"

# 5. 完了したら適用
codex apply
```

### 2. バグ修正

```bash
codex "src/components/Button.tsx の onClick が動作しない問題を修正"
```

### 3. テスト追加

```bash
codex e "既存の全APIルートにテストを追加。カバレッジ90%以上を目指す"
```

### 4. ドキュメント作成

```bash
codex "プロジェクト全体のREADME.md を更新。セットアップ手順、使い方、貢献ガイドを含める"
```

---

## 📚 参考リンク

- [GitHub: openai/codex](https://github.com/openai/codex)
- [npm: @openai/codex](https://www.npmjs.com/package/@openai/codex)
- [ChatGPT Plus/Pro](https://openai.com/chatgpt/pricing/)

---

## 🎯 次のステップ

### 1. ログイン

```bash
codex login
```

### 2. プロジェクトで試す

```bash
cd awake-website
codex "既存のコードベースを分析して、改善点を3つ提案"
```

### 3. 実際にコード生成

```bash
codex e "ブログ機能を追加。マークダウン対応、記事一覧・詳細ページ、RSS feed生成"
```

---

## 💡 Pro Tips

### Tip 1: .gitignore を活用

```gitignore
# Codexのキャッシュ
.codex/
```

### Tip 2: 具体的な指示

❌ 悪い例:
```bash
codex "ボタンを作って"
```

✅ 良い例:
```bash
codex "Reactボタンコンポーネント作成。TypeScript、3サイズ（sm/md/lg）、
2バリアント（primary/secondary）、Tailwind CSS、アクセシビリティ対応、
hover/active/disabled状態、アイコン対応、ローディング状態も実装"
```

### Tip 3: 段階的に進める

```bash
# 1回目: 基本実装
codex "ユーザー管理画面の基本機能"

# 2回目: 機能追加
codex "検索とフィルター機能を追加"

# 3回目: UI改善
codex "レスポンシブ対応とアニメーション追加"
```

---

**最終更新:** 2025年11月3日
**Codex CLI バージョン:** 0.53.0
**必要なサブスクリプション:** ChatGPT Plus/Pro

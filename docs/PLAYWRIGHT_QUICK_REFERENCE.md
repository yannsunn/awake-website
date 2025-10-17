# 🎭 Playwright Agent & MCP Server クイックリファレンス

このプロジェクトで使えるPlaywright機能の簡易リファレンスです。

---

## 🚀 クイックスタート

### 他のプロジェクトにセットアップする

```bash
# 方法1: 自動スクリプト（推奨）
node scripts/setup-playwright-agents.js /path/to/your/project

# 方法2: 手動
cd /path/to/your/project
npx playwright init-agents --loop=claude
# .mcp.jsonを手動編集
```

---

## 🎯 Playwright Agent（3つの専門エージェント）

### 1. Planner Agent - テスト計画作成

**使い方:**
```
「playwright-test-plannerを使って、http://localhost:3000 のテスト計画を作成して」
```

**何をする:**
- アプリケーションを自動探索
- ユーザーフローを分析
- 包括的なテスト計画をMarkdown形式で作成

**生成されるファイル:**
- `specs/*.md` - テストシナリオの詳細計画

---

### 2. Generator Agent - テストコード生成

**使い方:**
```
「playwright-test-generatorを使って、specs/login-test.mdからテストコードを生成して」
```

**何をする:**
- Plannerが作成した計画を読み込む
- TypeScriptのテストコードに変換
- 実際のアプリで各ステップを検証

**生成されるファイル:**
- `tests/*.spec.ts` - 実行可能なPlaywrightテスト

---

### 3. Healer Agent - テスト自動修復

**使い方:**
```
「playwright-test-healerを使って、失敗したテストを修復して」
```

**何をする:**
- 失敗したテストを自動検出
- トレースファイルを分析
- パッチを提案して自動適用

---

## 🔌 Playwright MCP Server（ブラウザ操作ツール）

### 基本的な使い方

**重要**: 初回は必ず「playwright mcp」と明示してください!

```
「playwright mcpを使って、https://example.com をブラウザで開いて」
```

---

### 主要コマンド例

#### 1. ページを開く
```
「playwright mcpでhttps://example.comに移動して」
```

#### 2. 要素をクリック
```
「playwright mcpでログインボタンをクリックして」
```

#### 3. テキスト入力
```
「playwright mcpで、メールアドレス欄に 'test@example.com' と入力して」
```

#### 4. フォーム入力（一括）
```
「playwright mcpでログインフォームに入力して:
- ユーザー名: test@example.com
- パスワード: password123」
```

#### 5. スクリーンショット撮影
```
「playwright mcpでスクリーンショットを撮って、screenshots/homepage.pngに保存して」
```

#### 6. JavaScript実行
```
「playwright mcpでJavaScriptを実行して、タイトルを取得して」
```

#### 7. ドラッグ&ドロップ
```
「playwright mcpで、アイテムAをエリアBにドラッグして」
```

#### 8. ファイルアップロード
```
「playwright mcpで、ファイル選択ボタンからtest.pngをアップロードして」
```

---

## 📁 プロジェクト構造

```
your-project/
├── .claude/
│   └── agents/
│       ├── playwright-test-planner.md    # Planner Agent定義
│       ├── playwright-test-generator.md  # Generator Agent定義
│       └── playwright-test-healer.md     # Healer Agent定義
├── .mcp.json                             # MCP Server設定
├── tests/
│   ├── seed.spec.ts                      # サンプルテスト
│   └── *.spec.ts                         # 生成されたテスト
├── specs/
│   └── *.md                              # テスト計画
└── playwright.config.ts                  # Playwright設定
```

---

## 🔧 .mcp.json 設定

### 基本設定
```json
{
  "mcpServers": {
    "playwright-test": {
      "command": "npx",
      "args": ["playwright", "run-test-mcp-server"]
    },
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

### 高度な設定（オプション）
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest",
        "--headless",                    // ヘッドレスモード
        "--browser", "chromium",         // ブラウザ選択
        "--viewport-size", "1920x1080"   // ビューポートサイズ
      ]
    }
  }
}
```

---

## 💡 実践的なワークフロー例

### 例1: 新機能のテスト自動化

```
1. 「playwright-test-plannerを使って、http://localhost:3000/new-feature のテスト計画を作成して」
   → specs/new-feature-test.md が生成される

2. 「playwright-test-generatorを使って、specs/new-feature-test.mdからテストコードを生成して」
   → tests/new-feature.spec.ts が生成される

3. 「npm run test を実行して」
   → テスト実行

4. テスト失敗時:
   「playwright-test-healerを使って、失敗したテストを修復して」
   → 自動修復
```

### 例2: 手動でのブラウザ操作とスクリーンショット

```
1. 「playwright mcpを使って、http://localhost:3000 をブラウザで開いて」

2. 「playwright mcpでログインフォームに入力:
   - メール: admin@example.com
   - パスワード: admin123」

3. 「playwright mcpでログインボタンをクリック」

4. 「playwright mcpでダッシュボードのスクリーンショットを撮って、screenshots/dashboard.pngに保存」
```

---

## ⚠️ よくあるトラブルと解決方法

### 問題: Agentが見つからない

**原因:** Claude Codeが.claude/agentsを認識していない

**解決策:**
```bash
# Claude Codeを再起動
# または
ls .claude/agents/  # ファイルの存在確認
```

---

### 問題: MCP Serverが動作しない

**原因:** グローバルインストールが失敗している

**解決策:**
```bash
# 再インストール
npm install -g @playwright/mcp

# または .mcp.jsonの構文を確認
cat .mcp.json
```

---

### 問題: 「playwright mcp」を指定しても、Bashでplaywrightが実行される

**原因:** 最初の指示が明確でない

**解決策:**
```
最初は必ず明示的に指定:
「playwright mcpツールを使って...」
「playwright mcp serverを使用して...」
```

---

## 📚 関連リンク

- [完全セットアップガイド](./PLAYWRIGHT_SETUP_GUIDE.md)
- [Playwright公式ドキュメント](https://playwright.dev)
- [Playwright MCP Server (GitHub)](https://github.com/microsoft/playwright-mcp)
- [Model Context Protocol](https://modelcontextprotocol.io)

---

## 🎓 学習リソース

### Playwright Agent詳細
- [Playwright Agents公式ガイド](https://playwright.dev/docs/test-agents)
- [Understanding Playwright Agents](https://www.awesome-testing.com/2025/10/playwright-agents)

### MCP Server詳細
- [Using Playwright MCP with Claude Code](https://til.simonwillison.net/claude-code/playwright-mcp-claude-code)
- [Playwright MCP Server Documentation](https://executeautomation.github.io/mcp-playwright/)

---

**最終更新**: 2025-10-18
**バージョン**: Playwright 1.56.0

# 🎭 Playwright Agent & MCP Server セットアップガイド

このガイドは、Playwright AgentとMCP Serverを他のプロジェクトにも適用するための完全な手順書です。

## 📋 目次

1. [前提条件](#前提条件)
2. [Playwright Agentとは](#playwright-agentとは)
3. [Playwright MCP Serverとは](#playwright-mcp-serverとは)
4. [セットアップ手順](#セットアップ手順)
5. [他のプロジェクトへの適用](#他のプロジェクトへの適用)
6. [使用方法](#使用方法)
7. [トラブルシューティング](#トラブルシューティング)

---

## 前提条件

- Node.js 18以上
- Playwright 1.56以上
- Claude Code（または対応するAI IDE）

---

## Playwright Agentとは

**Playwright Agent**は、Playwright 1.56で導入された**自律的なAIエージェント機能**です。

### 3つの専門エージェント

1. **🎯 Planner Agent**
   - Webアプリケーションを探索し、包括的なテスト計画を作成
   - ユーザーフローを分析し、テストシナリオを設計

2. **⚙️ Generator Agent**
   - Plannerが作成したMarkdown形式の計画をTypeScriptコードに変換
   - 実際のアプリケーションに対して各ステップを検証しながらコード生成

3. **🔧 Healer Agent**
   - 失敗したテストを自動的に検出
   - トレースファイルを分析してパッチを提案
   - 自動的に修正を検証

---

## Playwright MCP Serverとは

**Playwright MCP (Model Context Protocol) Server**は、AIアシスタント（Claude Codeなど）がブラウザを直接操作するための**インフラ/ブリッジ**です。

### 主な機能

- 自然言語の指示をPlaywright APIリクエストに変換
- ブラウザの自動操作（クリック、入力、ナビゲーションなど）
- スクリーンショット撮影
- JavaScript実行
- フォーム入力

### 利用可能なツール（25個）

- `browser_navigate` - URLを開く
- `browser_click` - 要素をクリック
- `browser_type` - テキスト入力
- `browser_fill_form` - フォーム一括入力
- `browser_screenshot` - スクリーンショット撮影
- `browser_evaluate` - JavaScript実行
- `browser_drag` - ドラッグ&ドロップ
- `browser_file_upload` - ファイルアップロード
- その他多数...

---

## セットアップ手順

### ステップ 1: Playwrightのインストール（既存プロジェクトの場合はスキップ）

```bash
npm install -D @playwright/test
npx playwright install
```

### ステップ 2: Playwright Agentの初期化

```bash
npx playwright init-agents --loop=claude
```

**生成されるファイル:**
- `.claude/agents/playwright-test-planner.md`
- `.claude/agents/playwright-test-generator.md`
- `.claude/agents/playwright-test-healer.md`
- `.mcp.json`
- `tests/seed.spec.ts`

### ステップ 3: Playwright MCP Serverのインストール

```bash
# グローバルインストール（1回のみ）
npm install -g @playwright/mcp
```

### ステップ 4: .mcp.jsonにMCP Serverを追加

`.mcp.json`ファイルを編集（すでに`playwright-test`がある場合）:

```json
{
  "mcpServers": {
    "playwright-test": {
      "command": "npx",
      "args": [
        "playwright",
        "run-test-mcp-server"
      ]
    },
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

**または**、まだ`.mcp.json`がない場合は新規作成:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

---

## 他のプロジェクトへの適用

### 方法1: 手動セットアップ（推奨）

各プロジェクトで以下のコマンドを実行:

```bash
cd /path/to/your/project

# Playwrightがまだない場合
npm install -D @playwright/test
npx playwright install

# Agent初期化
npx playwright init-agents --loop=claude

# .mcp.jsonを手動編集（上記参照）
```

### 方法2: 自動セットアップスクリプト（次のステップで作成）

```bash
# このプロジェクトのscriptsフォルダにスクリプトを作成します
node scripts/setup-playwright-agents.js /path/to/your/project
```

### 方法3: ファイルのコピー（既存プロジェクトのみ）

**注意**: この方法は既にPlaywrightが設定されているプロジェクトにのみ使用してください。

```bash
cd /path/to/your/project

# Agentファイルをコピー
mkdir -p .claude/agents
cp /path/to/this/project/.claude/agents/*.md ./.claude/agents/

# .mcp.jsonをコピー（または手動でマージ）
cp /path/to/this/project/.mcp.json ./
```

---

## 使用方法

### Playwright Agentの使い方

Claude Codeで以下のように指示:

```
「playwright-test-plannerを使って、http://localhost:3000 のテスト計画を作成して」

「playwright-test-generatorを使って、specs/login-test.mdからテストコードを生成して」

「playwright-test-healerを使って、失敗したテストを修復して」
```

### Playwright MCP Serverの使い方

Claude Codeで以下のように指示（**初回は必ず「playwright mcp」と明示**）:

```
「playwright mcpを使って、https://example.com をブラウザで開いて」

「playwright mcpでログインフォームに入力して、ユーザー名は'test@example.com'、パスワードは'password123'」

「playwright mcpでスクリーンショットを撮って」
```

---

## トラブルシューティング

### 問題: Agentが見つからない

**解決策:**
```bash
# Claude Codeを再起動
# または .claude/agents/ フォルダの存在を確認
```

### 問題: MCP Serverが動作しない

**解決策:**
```bash
# グローバルインストールを確認
npm list -g @playwright/mcp

# 再インストール
npm install -g @playwright/mcp

# .mcp.jsonの構文を確認
```

### 問題: 「claude command not found」エラー

**解決策:**
- これは正常です。`claude mcp add`コマンドはClaude Code内で使用します
- 代わりに`.mcp.json`を手動編集してください

---

## 設定ファイルのリファレンス

### playwright.config.ts（例）

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

### .mcp.json（完全版）

```json
{
  "mcpServers": {
    "playwright-test": {
      "command": "npx",
      "args": [
        "playwright",
        "run-test-mcp-server"
      ]
    },
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest",
        "--headless",
        "--browser", "chromium",
        "--viewport-size", "1920x1080"
      ]
    }
  }
}
```

---

## まとめ

- **Playwright Agent** = 自律的なテスト計画・生成・修復システム
- **Playwright MCP Server** = AIがブラウザを操作するためのツール
- 両方を組み合わせることで最大限の自動化を実現
- 各プロジェクトで個別にセットアップが必要（グローバル設定ではない）

---

**作成日**: 2025-10-18
**対象プロジェクト**: awake-website
**Playwrightバージョン**: 1.56.0

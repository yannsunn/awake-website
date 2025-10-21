# 🎭 Playwright Agentの使い方 - 完全ガイド

## ❓ Playwright Agentを環境で呼び出す方法

### 現在の状況

Playwright Agentは `.claude/agents/` に正しくインストールされていますが、Task toolからは直接呼び出せません。これは以下の理由によるものです:

1. **Agent登録の仕組み**: Playwright AgentはClaude Code内で特別な方法で登録される必要がある
2. **MCP Serverとの違い**: Agentは独立したプロセスではなく、Claude Codeのワークフロー統合

---

## ✅ 正しい使用方法

### 方法1: 自然言語での直接指示（推奨）

Playwright Agentの機能を自然言語で指示することで、同等の動作を実現できます:

#### 例1: Planner Agent相当
```
「http://localhost:3000 のホームページを探索して、
包括的なテスト計画をspecs/homepage-test.mdに作成してください」
```

Claude Codeは以下を実行します:
1. Playwrightを使用してページを探索
2. 主要な要素とユーザーフローを分析
3. テスト計画をMarkdown形式で作成

#### 例2: Generator Agent相当
```
「specs/homepage-test.mdのテスト計画から、
Playwright TypeScriptテストコードをtests/homepage.spec.tsに生成してください」
```

Claude Codeは以下を実行します:
1. テスト計画を読み込み
2. 各シナリオをPlaywrightコードに変換
3. 実行可能なテストファイルを生成

#### 例3: Healer Agent相当
```
「tests/homepage.spec.tsのテストを実行して、
失敗したテストがあれば自動的に修正してください」
```

Claude Codeは以下を実行します:
1. テストを実行
2. 失敗原因を分析（トレース、スクリーンショット）
3. コードを修正して再実行

---

### 方法2: Playwrightコマンドを直接使用

Playwright CLIには、Agentを呼び出すコマンドが用意されています（将来的な機能）:

```bash
# VS Code環境でのAgent呼び出し（将来的）
npx playwright agent planner --url http://localhost:3000
npx playwright agent generator --spec specs/homepage-test.md
npx playwright agent healer --failed-tests
```

**注意**: これらのコマンドはVS Code Copilot環境で最適に動作します。Claude Code環境では現在サポートされていない可能性があります。

---

### 方法3: VS Code拡張機能との統合

Playwright AgentはVS Code拡張機能と統合されています:

1. VS Codeを開く
2. Playwright拡張機能をインストール
3. コマンドパレット（Ctrl+Shift+P）から「Playwright: Run Agent」を選択

---

## 🔧 この環境での実践的なワークフロー

### ワークフロー1: テスト計画の作成

```markdown
ユーザー指示:
「http://localhost:3000 のホームページのテスト計画を作成して」

Claude Codeの動作:
1. Playwrightでページを開く
2. 主要要素を探索（ヘッダー、ナビゲーション、CTA、フォーム等）
3. ユーザーフローを分析
4. specs/homepage-test.mdにテスト計画を作成
```

実際の実装例は [specs/homepage-test.md](../specs/homepage-test.md) を参照

---

### ワークフロー2: テストコードの生成

```markdown
ユーザー指示:
「specs/homepage-test.mdの1.1と1.2のシナリオから、
Playwrightテストコードを生成してください」

Claude Codeの動作:
1. specs/homepage-test.mdを読み込み
2. 各ステップをPlaywright APIに変換
3. tests/homepage-basic.spec.tsを生成
4. 適切なアサーションを追加
```

実際の実装例は [tests/homepage-basic.spec.ts](../tests/homepage-basic.spec.ts) を参照

---

### ワークフロー3: テストの修復

```markdown
ユーザー指示:
「tests/homepage-basic.spec.tsを実行して、
失敗したテストを修正してください」

Claude Codeの動作:
1. npx playwright test を実行
2. 失敗したテストのエラーメッセージを分析
3. スクリーンショットを確認（あれば）
4. コードを修正（例: セレクタを厳密化）
5. 再実行して検証
```

実際の修正例:
```typescript
// 修正前（strict mode violation）
await expect(page.getByText('ホームページ制作')).toBeVisible();

// 修正後（h1要素を明示的に指定）
await expect(page.locator('h1').getByText('ホームページ制作')).toBeVisible();
```

---

## 💡 Playwright MCP Server vs Playwright Agent

### Playwright MCP Server
- **役割**: ブラウザを直接操作するツール
- **使い方**: 「playwright mcpを使って...」
- **用途**: リアルタイムでのブラウザ操作、スクリーンショット撮影、デバッグ

### Playwright Agent
- **役割**: テスト作成の自律的なワークフロー
- **使い方**: 自然言語での指示（「...のテスト計画を作成して」）
- **用途**: 包括的なテスト計画作成、コード生成、自動修復

### 組み合わせ例

```markdown
1. 【MCP Server】で実際の画面を確認
   「playwright mcpでhttp://localhost:3000を開いて、
   ホームページのスクリーンショットを撮って」

2. 【Agent (Planner相当)】でテスト計画作成
   「このホームページのテスト計画を作成して」

3. 【Agent (Generator相当)】でテストコード生成
   「テスト計画からPlaywrightテストコードを生成して」

4. 【Agent (Healer相当)】でテスト実行と修復
   「テストを実行して、失敗があれば修正して」
```

---

## 📝 実践例: 今回の実装

### 実行内容

1. ✅ **他のプロジェクトへのセットアップ**
   - `reric-website-backup`にPlaywright Agent & MCP Serverをインストール
   - 自動スクリプト(`setup-playwright-agents.js`)が正常に動作

2. ✅ **Playwright MCP Serverのテスト**
   - localhost:3006のホームページを開いてスクリーンショット撮影
   - [screenshots/homepage-test.png](../screenshots/homepage-test.png)を生成

3. ✅ **Playwright Agent (Planner) のシミュレーション**
   - ホームページを分析してテスト計画を作成
   - [specs/homepage-test.md](../specs/homepage-test.md)を生成（8つのテストカテゴリ、20以上のシナリオ）

4. ✅ **Playwright Agent (Generator) のシミュレーション**
   - テスト計画からTypeScriptコードを生成
   - [tests/homepage-basic.spec.ts](../tests/homepage-basic.spec.ts)を作成

5. ✅ **Playwright Agent (Healer) のシミュレーション**
   - テストを実行して失敗を検出
   - strict mode violationを修正（セレクタを明示的に指定）

---

## 🎯 まとめ

### Playwright Agentを使う方法

1. **自然言語で指示する**（最も簡単）
   - 「...のテスト計画を作成して」
   - 「...からテストコードを生成して」
   - 「テストを実行して修正して」

2. **Playwrightコマンドを使う**（将来的）
   - `npx playwright agent planner ...`
   - VS Code環境で最適化

3. **Claude Codeのワークフローに統合**（現在の実装）
   - Agent定義ファイル(.claude/agents/*.md)は存在
   - 自然言語指示で同等の機能を実現

### 環境要件

- ✅ Playwright 1.56以上インストール済み
- ✅ `.claude/agents/` に3つのAgent定義ファイルあり
- ✅ `.mcp.json` で MCP Server設定済み
- ⚠️ VS Code Copilot環境ではより統合された体験が可能

---

**作成日**: 2025-10-18
**対象環境**: Claude Code
**Playwright バージョン**: 1.56.0

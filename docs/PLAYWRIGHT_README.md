# 🎭 Playwright Agent & MCP Server - 完全ガイド

このプロジェクトには、Playwright AgentとPlaywright MCP Serverが統合されています。

---

## 📚 ドキュメント

- **[クイックリファレンス](./PLAYWRIGHT_QUICK_REFERENCE.md)** - すぐに使える実践的なコマンド集
- **[完全セットアップガイド](./PLAYWRIGHT_SETUP_GUIDE.md)** - 詳細なインストールと設定手順

---

## ⚡ 3分でスタート

### このプロジェクトで使う

```bash
# 既にセットアップ済みです!すぐに使えます:
```

Claude Codeで以下のように指示:

```
「playwright-test-plannerを使って、http://localhost:3000 のテスト計画を作成して」
```

または

```
「playwright mcpを使って、https://example.com をブラウザで開いて」
```

---

### 他のプロジェクトにセットアップする

```bash
# 自動スクリプトで簡単セットアップ
node scripts/setup-playwright-agents.js /path/to/your/project
```

---

## 🎯 何ができる?

### Playwright Agent (自律的なAIエージェント)

1. **🎯 Planner** - テスト計画を自動作成
2. **⚙️ Generator** - TypeScriptコードを自動生成
3. **🔧 Healer** - 失敗したテストを自動修復

### Playwright MCP Server (ブラウザ操作ツール)

- ブラウザを直接操作
- スクリーンショット撮影
- フォーム入力
- JavaScript実行
- その他25個以上のツール

---

## 📁 生成されたファイル

```
awake-website/
├── .claude/agents/           # 3つのAgent定義
│   ├── playwright-test-planner.md
│   ├── playwright-test-generator.md
│   └── playwright-test-healer.md
├── .mcp.json                 # MCP Server設定
├── tests/seed.spec.ts        # サンプルテスト
├── scripts/
│   ├── setup-playwright-agents.js    # 自動セットアップスクリプト
│   └── setup-playwright-agents.bat   # Windows版
└── docs/
    ├── PLAYWRIGHT_README.md          # このファイル
    ├── PLAYWRIGHT_QUICK_REFERENCE.md # クイックリファレンス
    └── PLAYWRIGHT_SETUP_GUIDE.md     # 完全ガイド
```

---

## 💡 実践例

### 例1: 新機能のテストを完全自動化

```
1. Plannerで計画作成
   → 「playwright-test-plannerを使って、/new-feature のテスト計画を作成」

2. Generatorでコード生成
   → 「playwright-test-generatorで、specs/new-feature.mdからコード生成」

3. Healerで自動修復
   → 「テスト失敗時、playwright-test-healerで修復」
```

### 例2: ブラウザを操作してスクリーンショット

```
「playwright mcpを使って、
1. http://localhost:3000 を開く
2. ログインフォームに入力（email: test@example.com, password: test123）
3. ログインボタンをクリック
4. ダッシュボードのスクリーンショットを撮る」
```

---

## 🚀 次のステップ

1. **[クイックリファレンス](./PLAYWRIGHT_QUICK_REFERENCE.md)を読む** - 5分で使い方をマスター
2. **実際に試す** - Claude Codeで上記の例を実行
3. **他のプロジェクトにも適用** - `setup-playwright-agents.js`を実行

---

## ❓ 困ったときは

### よくある質問

**Q: Agentが見つからない**
→ Claude Codeを再起動してください

**Q: MCP Serverが動作しない**
→ `.mcp.json`の構文を確認、またはグローバルインストールを確認

**Q: 「playwright mcp」と言っても、Bashで実行される**
→ 初回は必ず「playwright mcpツールを使用して」と明示してください

詳細は[完全セットアップガイド](./PLAYWRIGHT_SETUP_GUIDE.md)のトラブルシューティングセクションを参照。

---

## 📞 サポート

- [Playwright公式ドキュメント](https://playwright.dev)
- [Playwright MCP Server (GitHub)](https://github.com/microsoft/playwright-mcp)
- [Claude Code ドキュメント](https://docs.claude.com/claude-code)

---

**作成日**: 2025-10-18
**対象バージョン**: Playwright 1.56.0
**メンテナー**: awake-website project

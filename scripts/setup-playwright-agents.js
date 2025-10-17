#!/usr/bin/env node

/**
 * 🎭 Playwright Agent & MCP Server 自動セットアップスクリプト
 *
 * 使用方法:
 *   node scripts/setup-playwright-agents.js [target-project-path]
 *
 * 例:
 *   node scripts/setup-playwright-agents.js ../my-other-project
 *   node scripts/setup-playwright-agents.js C:/Users/march/another-project
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 色付きコンソール出力
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
};

// コマンド実行ヘルパー
function runCommand(command, cwd = process.cwd()) {
  try {
    log.info(`実行中: ${command}`);
    execSync(command, { cwd, stdio: 'inherit' });
    return true;
  } catch (error) {
    log.error(`コマンド失敗: ${command}`);
    return false;
  }
}

// ファイル存在チェック
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// JSONファイルを読み込み
function readJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    return null;
  }
}

// JSONファイルを書き込み
function writeJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    return true;
  } catch (error) {
    log.error(`ファイル書き込み失敗: ${filePath}`);
    return false;
  }
}

// メイン処理
async function main() {
  console.log('\n🎭 Playwright Agent & MCP Server セットアップ\n');

  // ターゲットプロジェクトのパスを取得
  const targetPath = process.argv[2] || process.cwd();
  const absolutePath = path.resolve(targetPath);

  log.info(`ターゲットプロジェクト: ${absolutePath}`);

  // プロジェクトディレクトリの存在確認
  if (!fileExists(absolutePath)) {
    log.error(`プロジェクトディレクトリが見つかりません: ${absolutePath}`);
    process.exit(1);
  }

  // package.jsonの存在確認
  const packageJsonPath = path.join(absolutePath, 'package.json');
  if (!fileExists(packageJsonPath)) {
    log.error('package.jsonが見つかりません。Node.jsプロジェクトではない可能性があります。');
    process.exit(1);
  }

  log.success('プロジェクトディレクトリを確認しました。\n');

  // ステップ1: Playwrightのインストール確認
  console.log('📦 ステップ1: Playwrightのインストール確認\n');
  const packageJson = readJSON(packageJsonPath);
  const hasPlaywright =
    (packageJson.devDependencies && packageJson.devDependencies['@playwright/test']) ||
    (packageJson.dependencies && packageJson.dependencies['@playwright/test']);

  if (!hasPlaywright) {
    log.warn('Playwrightがインストールされていません。');
    log.info('Playwrightをインストールします...');

    if (!runCommand('npm install -D @playwright/test', absolutePath)) {
      log.error('Playwrightのインストールに失敗しました。');
      process.exit(1);
    }

    log.info('Playwrightブラウザをインストールします...');
    if (!runCommand('npx playwright install', absolutePath)) {
      log.error('Playwrightブラウザのインストールに失敗しました。');
      process.exit(1);
    }

    log.success('Playwrightのインストールが完了しました。\n');
  } else {
    log.success('Playwrightは既にインストールされています。\n');
  }

  // ステップ2: Playwright Agentの初期化
  console.log('🎯 ステップ2: Playwright Agentの初期化\n');
  const claudeAgentsPath = path.join(absolutePath, '.claude', 'agents');

  if (fileExists(claudeAgentsPath)) {
    log.warn('.claude/agentsディレクトリが既に存在します。スキップします。');
  } else {
    log.info('Playwright Agentを初期化します...');
    if (!runCommand('npx playwright init-agents --loop=claude', absolutePath)) {
      log.error('Playwright Agentの初期化に失敗しました。');
      process.exit(1);
    }
    log.success('Playwright Agentの初期化が完了しました。\n');
  }

  // ステップ3: Playwright MCP Serverのグローバルインストール
  console.log('🔌 ステップ3: Playwright MCP Serverのインストール\n');
  log.info('Playwright MCP Serverをグローバルにインストールします...');

  if (!runCommand('npm install -g @playwright/mcp')) {
    log.warn('グローバルインストールに失敗しました。プロジェクトローカルにインストールを試みます...');
    if (!runCommand('npm install -D @playwright/mcp', absolutePath)) {
      log.error('Playwright MCP Serverのインストールに失敗しました。');
      process.exit(1);
    }
  }

  log.success('Playwright MCP Serverのインストールが完了しました。\n');

  // ステップ4: .mcp.jsonの設定
  console.log('⚙️  ステップ4: .mcp.jsonの設定\n');
  const mcpJsonPath = path.join(absolutePath, '.mcp.json');
  let mcpConfig;

  if (fileExists(mcpJsonPath)) {
    log.info('.mcp.jsonが既に存在します。設定を更新します...');
    mcpConfig = readJSON(mcpJsonPath);
    if (!mcpConfig) {
      log.error('.mcp.jsonの読み込みに失敗しました。');
      process.exit(1);
    }
  } else {
    log.info('.mcp.jsonを新規作成します...');
    mcpConfig = { mcpServers: {} };
  }

  // playwright-testの設定を追加（まだなければ）
  if (!mcpConfig.mcpServers['playwright-test']) {
    mcpConfig.mcpServers['playwright-test'] = {
      command: 'npx',
      args: ['playwright', 'run-test-mcp-server'],
    };
    log.success('playwright-testを追加しました。');
  } else {
    log.info('playwright-testは既に設定されています。');
  }

  // playwrightの設定を追加（まだなければ）
  if (!mcpConfig.mcpServers['playwright']) {
    mcpConfig.mcpServers['playwright'] = {
      command: 'npx',
      args: ['@playwright/mcp@latest'],
    };
    log.success('playwrightを追加しました。');
  } else {
    log.info('playwrightは既に設定されています。');
  }

  // .mcp.jsonを保存
  if (!writeJSON(mcpJsonPath, mcpConfig)) {
    log.error('.mcp.jsonの保存に失敗しました。');
    process.exit(1);
  }

  log.success('.mcp.jsonの設定が完了しました。\n');

  // 完了メッセージ
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`${colors.green}✨ セットアップが完了しました!${colors.reset}\n`);

  console.log('📁 作成されたファイル:');
  console.log(`   - ${path.relative(process.cwd(), claudeAgentsPath)}/playwright-test-planner.md`);
  console.log(`   - ${path.relative(process.cwd(), claudeAgentsPath)}/playwright-test-generator.md`);
  console.log(`   - ${path.relative(process.cwd(), claudeAgentsPath)}/playwright-test-healer.md`);
  console.log(`   - ${path.relative(process.cwd(), mcpJsonPath)}\n`);

  console.log('🎯 次のステップ:');
  console.log('   1. Claude Codeを再起動してください');
  console.log('   2. Agentを使用: "playwright-test-plannerを使って..."');
  console.log('   3. MCP Serverを使用: "playwright mcpを使って..."\n');

  console.log('📖 詳細は以下のドキュメントを参照:');
  console.log('   docs/PLAYWRIGHT_SETUP_GUIDE.md\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

// エラーハンドリング
process.on('unhandledRejection', (error) => {
  log.error(`予期しないエラー: ${error.message}`);
  process.exit(1);
});

// 実行
main().catch((error) => {
  log.error(`セットアップ失敗: ${error.message}`);
  process.exit(1);
});

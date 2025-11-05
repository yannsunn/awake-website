# セキュリティガイド

## ✅ 実施済み: GitHub履歴クリーンアップ（2025-11-06）

**機密ファイルを全673コミットから完全削除しました。**

削除されたファイル:
- `.env.local` (OpenAI, Anthropic APIキー)
- `gsc-credentials.json` (Google OAuth)
- `gsc-token.json` (Googleリフレッシュトークン)
- `indexing-service-account.json` (Googleサービスアカウント)
- `google-ads-config.json` (Google Ads API)

---

## 🔴 ユーザー実施必須：APIキーのローテーション

GitHubから削除しましたが、**既に公開されたキーは無効化が必要です。**

### 対応手順（詳細は docs/ENVIRONMENT_SETUP.md 参照）

#### 1. APIキーの無効化・ローテーション（即座に実施）

**OpenAI API:**
```bash
# https://platform.openai.com/api-keys
# 1. 既存キーを削除
# 2. 新規キーを生成
# 3. Vercel環境変数に設定
```

**Anthropic API:**
```bash
# https://console.anthropic.com/settings/keys
# 1. 既存キーをRevoke
# 2. 新規キーを生成
# 3. Vercel環境変数に設定
```

**Google Cloud API:**
```bash
# https://console.cloud.google.com/apis/credentials
# 1. OAuth 2.0クライアントを再生成
# 2. サービスアカウントキーを再生成
# 3. 認証フローを再実行
```

#### 2. Vercel環境変数の設定

```bash
# Vercel Dashboardで設定
# https://vercel.com/[team]/awake-website/settings/environment-variables

OPENAI_API_KEY=sk-proj-...
ANTHROPIC_API_KEY=sk-ant-...

# Google API用は新規OAuth認証フローを実行
```

#### 3. ローカル開発環境のセットアップ

**Vercel CLI経由で環境変数を安全に管理:**

```bash
# Vercel CLIをインストール
npm install -g vercel

# ログイン
vercel login

# プロジェクトをリンク
vercel link

# 環境変数を自動ダウンロード（.env.localが自動生成される）
vercel env pull .env.local

# 開発サーバー起動
npm run dev
```

**重要:** `.env.local`は`.gitignore`で除外されているため、Gitにコミットされません。

---

## 🟡 推奨：CSPセキュリティ強化

現在のCSP設定は`'unsafe-inline'`と`'unsafe-eval'`を許可しており、XSSリスクがあります。

### 現在の設定（next.config.ts:131）

```typescript
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com ...
```

### 推奨設定：Nonce-based CSP

**実装方法:**

1. **middleware.tsでnonceを生成:**

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import crypto from 'crypto'

export function middleware(request: NextRequest) {
  const nonce = crypto.randomBytes(16).toString('base64')
  const response = NextResponse.next()

  const csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com;
    style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https:;
    connect-src 'self' https://api.openai.com https://api.anthropic.com;
  `.replace(/\s{2,}/g, ' ').trim()

  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('X-Nonce', nonce)

  return response
}
```

2. **JSON-LDスクリプトにnonceを付与:**

```typescript
// app/layout.tsx
import { headers } from 'next/headers'

export default function RootLayout({ children }) {
  const nonce = headers().get('X-Nonce')

  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 🟢 その他のセキュリティ推奨事項

### 1. 環境変数の検証

```typescript
// lib/env.ts
import { z } from 'zod'

const envSchema = z.object({
  OPENAI_API_KEY: z.string().min(1),
  ANTHROPIC_API_KEY: z.string().min(1),
  NODE_ENV: z.enum(['development', 'production', 'test']),
})

export const env = envSchema.parse(process.env)
```

### 2. レート制限の強化

```typescript
// 現在: メモリストア（本番環境では不十分）
// 推奨: Vercel KV (Redis) または Upstash Redis

import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '5 m'),
})
```

### 3. CORS設定の厳格化

```typescript
// next.config.ts
headers: async () => [
  {
    source: '/api/:path*',
    headers: [
      { key: 'Access-Control-Allow-Origin', value: 'https://awakeinc.co.jp' },
      { key: 'Access-Control-Allow-Methods', value: 'POST, OPTIONS' },
      { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
    ],
  },
]
```

---

## 📊 セキュリティチェックリスト

### 即座に実施（2025-11-06完了）
- [x] GitHub履歴から機密情報を削除（673コミット処理完了）
- [x] `.gitignore`に機密ファイルを追加
- [x] 環境変数セットアップガイド作成（`docs/ENVIRONMENT_SETUP.md`）

### ユーザー実施必須
- [ ] OpenAI APIキーを全削除して再生成
- [ ] Anthropic APIキーを削除して再生成
- [ ] Google OAuth認証情報を削除して再生成
- [ ] Vercel環境変数に新規キーを設定
- [ ] `vercel env pull`でローカル環境をセットアップ

### 今週中に実施
- [ ] CSPをnonce-basedに移行
- [ ] 環境変数のZodバリデーション追加
- [ ] レート制限をRedisベースに移行

### 今月中に実施
- [ ] CORS設定の厳格化
- [ ] セキュリティヘッダーの定期監査
- [ ] 依存パッケージの脆弱性スキャン（`npm audit`）

---

## 🔗 参考リンク

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Headers](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)

---

**最終更新:** 2025-11-06
**重要度:** 🔴 緊急対応必須

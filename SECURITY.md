# セキュリティガイド

## 🔴 緊急対応必須：機密情報のローテーション

以下のファイルに実際のAPIキーと認証情報が含まれています。**即座の対応が必要です。**

### 影響を受けるファイル

```
.env.local                        # OpenAI, Anthropic APIキー
gsc-credentials.json              # Google OAuth クライアント秘密鍵
gsc-token.json                    # Google リフレッシュトークン
indexing-service-account.json     # Google サービスアカウント秘密鍵
google-ads-config.json            # Google Ads API設定
```

### 対応手順

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

#### 2. GitHub履歴からの削除

**方法A: BFG Repo-Cleaner（推奨）**
```bash
# BFGをインストール
brew install bfg  # macOS
# or
choco install bfg-repo-cleaner  # Windows

# 秘密情報を削除
git clone --mirror https://github.com/yannsunn/awake-website.git
cd awake-website.git
bfg --delete-files .env.local
bfg --delete-files gsc-credentials.json
bfg --delete-files gsc-token.json
bfg --delete-files indexing-service-account.json
bfg --delete-files google-ads-config.json

# 履歴をクリーンアップ
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# 強制プッシュ（危険：チーム全員に通知）
git push --force
```

**方法B: git filter-branch**
```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env.local gsc-*.json indexing-service-account.json google-ads-config.json" \
  --prune-empty --tag-name-filter cat -- --all

git push --force --all
git push --force --tags
```

#### 3. Vercel環境変数の設定

```bash
# Vercel Dashboardで設定
# https://vercel.com/[team]/awake-website/settings/environment-variables

OPENAI_API_KEY=sk-proj-...
ANTHROPIC_API_KEY=sk-ant-...

# Google API用は新規OAuth認証フローを実行
```

#### 4. ローカルファイルの削除

```bash
# コミット済みファイルをGit管理から除外（ローカルは保持）
git rm --cached .env.local
git rm --cached gsc-credentials.json
git rm --cached gsc-token.json
git rm --cached indexing-service-account.json
git rm --cached google-ads-config.json

git commit -m "security: Remove sensitive files from Git tracking"
git push
```

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

### 即座に実施
- [ ] すべてのAPIキーを無効化・ローテーション
- [ ] GitHub履歴から機密情報を削除
- [ ] Vercel環境変数に新規キーを設定
- [ ] ローカルファイルをGit管理から除外

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

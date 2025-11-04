# 🤖 OpenAI API セットアップガイド

このドキュメントでは、OpenAI API（GPT-4, Codex, DALL-E など）の設定方法と使用方法を説明します。

---

## 📋 目次

1. [セットアップ](#セットアップ)
2. [APIキーの取得](#apiキーの取得)
3. [使用可能なモデル](#使用可能なモデル)
4. [基本的な使い方](#基本的な使い方)
5. [API ルート](#api-ルート)
6. [料金](#料金)

---

## 🚀 セットアップ

### 1. パッケージのインストール

OpenAI SDKは既にインストール済みです：

```json
{
  "dependencies": {
    "openai": "^4.x.x"
  }
}
```

### 2. 環境変数の設定

`.env.local` ファイルにOpenAI APIキーを追加してください：

```env
# OpenAI API Key
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxx
```

**⚠️ 重要:** APIキーは絶対に公開しないでください！

---

## 🔑 APIキーの取得

### Step 1: OpenAI アカウント作成

1. https://platform.openai.com/ にアクセス
2. "Sign up" でアカウント作成
3. 電話番号認証を完了

### Step 2: APIキーの生成

1. https://platform.openai.com/api-keys にアクセス
2. "Create new secret key" をクリック
3. キー名を入力（例: "awake-website"）
4. 生成されたキーをコピー（**一度しか表示されません**）
5. `.env.local` に貼り付け

### Step 3: 支払い方法の登録

1. https://platform.openai.com/account/billing にアクセス
2. クレジットカードを登録
3. 使用上限を設定（推奨: $10-50/月）

---

## 🎯 使用可能なモデル

### チャット・コード生成

| モデル | 説明 | 用途 | 料金 |
|--------|------|------|------|
| **gpt-4** | 最高性能モデル | 複雑なタスク、コード生成 | $0.03/1K tokens |
| **gpt-4-turbo** | GPT-4の高速版 | 高速な応答が必要な場合 | $0.01/1K tokens |
| **gpt-3.5-turbo** | コスパ最強 | 簡単なチャット、軽いタスク | $0.0005/1K tokens |

### 画像生成

| モデル | サイズ | 料金 |
|--------|--------|------|
| **DALL-E 3** | 1024x1024 | $0.040/image |
| **DALL-E 3** | 1792x1024 HD | $0.080/image |
| **DALL-E 2** | 1024x1024 | $0.020/image |

### 音声認識

| モデル | 用途 | 料金 |
|--------|------|------|
| **Whisper** | 音声→テキスト | $0.006/分 |

### 音声合成

| モデル | 用途 | 料金 |
|--------|------|------|
| **TTS-1** | テキスト→音声（標準） | $0.015/1K characters |
| **TTS-1-HD** | テキスト→音声（高品質） | $0.030/1K characters |

---

## 💻 基本的な使い方

### 1. チャット補完（GPT-4）

```typescript
import { chatCompletion } from '@/lib/openai-client';

const response = await chatCompletion([
  { role: 'system', content: 'あなたは親切なアシスタントです。' },
  { role: 'user', content: 'こんにちは！' }
], {
  model: 'gpt-4',
  temperature: 0.7,
  maxTokens: 500
});

console.log(response);
```

### 2. コード生成（Codex）

```typescript
import { generateCode } from '@/lib/openai-client';

const code = await generateCode(
  'Reactで Todo リストコンポーネントを作成してください',
  {
    language: 'TypeScript',
    temperature: 0.3
  }
);

console.log(code);
```

### 3. 画像生成（DALL-E）

```typescript
import { generateImage } from '@/lib/openai-client';

const imageUrl = await generateImage(
  'A beautiful sunset over Tokyo cityscape, digital art',
  {
    size: '1024x1024',
    quality: 'hd',
    model: 'dall-e-3'
  }
);

console.log('Image URL:', imageUrl);
```

### 4. 音声認識（Whisper）

```typescript
import { transcribeAudio } from '@/lib/openai-client';

const file = new File([audioBlob], 'audio.mp3', { type: 'audio/mpeg' });
const transcription = await transcribeAudio(file);

console.log('Transcription:', transcription);
```

### 5. テキスト読み上げ（TTS）

```typescript
import { textToSpeech } from '@/lib/openai-client';

const audioStream = await textToSpeech(
  'こんにちは、株式会社Awakeです。',
  {
    voice: 'nova',
    model: 'tts-1-hd'
  }
);

// audioStreamをファイルに保存または再生
```

---

## 🌐 API ルート

### POST /api/openai-chat

チャットボット用のAPIエンドポイント。

**リクエスト:**
```json
{
  "message": "ホームページ制作の料金を教えてください",
  "model": "gpt-4"
}
```

**レスポンス:**
```json
{
  "response": "株式会社Awakeのホームページ制作は198,000円〜です...",
  "model": "gpt-4",
  "timestamp": "2025-11-03T12:00:00.000Z"
}
```

**使用例（フロントエンド）:**
```typescript
const response = await fetch('/api/openai-chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: 'こんにちは',
    model: 'gpt-4'
  })
});

const data = await response.json();
console.log(data.response);
```

---

## 💰 料金

### 推定コスト（月間）

#### シナリオ 1: 軽い使用（個人テスト）
- チャット: 100リクエスト × 1K tokens = $0.15
- **合計: 約$1/月**

#### シナリオ 2: 中程度の使用（小規模ビジネス）
- チャット: 1,000リクエスト × 1K tokens = $30
- 画像生成: 50枚 = $2
- **合計: 約$32/月**

#### シナリオ 3: ヘビー使用（大規模ビジネス）
- チャット: 10,000リクエスト × 2K tokens = $600
- 画像生成: 200枚 = $8
- 音声認識: 100分 = $0.60
- **合計: 約$608/月**

### コスト削減のヒント

1. **適切なモデル選択**
   - 簡単なタスク: `gpt-3.5-turbo` (20倍安い)
   - 複雑なタスク: `gpt-4`

2. **トークン数の削減**
   - `max_tokens` を適切に設定
   - 不要なコンテキストを削除

3. **キャッシング**
   - 同じ質問の回答をキャッシュ
   - DBに保存して再利用

4. **使用上限の設定**
   - OpenAI ダッシュボードで月額上限を設定
   - 予期せぬ高額請求を防止

---

## 🛡️ セキュリティ

### ベストプラクティス

1. **APIキーの保護**
   - `.env.local` に保存（.gitignoreに含まれている）
   - 絶対にGitHubにコミットしない
   - 環境変数として設定

2. **レート制限**
   - API呼び出しにレート制限を実装
   - 悪用を防止

3. **入力検証**
   - ユーザー入力を必ずサニタイズ
   - 不適切なコンテンツをフィルタリング

4. **コンテンツモデレーション**
   - `moderateContent()` で有害コンテンツをチェック

---

## 📚 参考リンク

- [OpenAI API ドキュメント](https://platform.openai.com/docs)
- [OpenAI Node.js SDK](https://github.com/openai/openai-node)
- [料金表](https://openai.com/pricing)
- [使用上限の設定](https://platform.openai.com/account/billing/limits)
- [APIキー管理](https://platform.openai.com/api-keys)

---

## 🎯 次のステップ

1. **APIキーを取得**
   - https://platform.openai.com/api-keys

2. **環境変数を設定**
   ```bash
   echo "OPENAI_API_KEY=sk-proj-xxx" >> .env.local
   ```

3. **テスト実行**
   ```bash
   npm run dev
   ```

   ブラウザで http://localhost:3000/api/openai-chat をテスト

4. **チャットボットに統合**
   - 既存のClaudeチャットボットと並行運用
   - または完全に置き換え

---

**最終更新:** 2025年11月3日
**バージョン:** 1.0.0
